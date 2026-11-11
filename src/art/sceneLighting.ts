import type Phaser from "phaser";

type Point = { x: number; y: number };
type Glow = Point & { radius: number; color: string; power: number };
type Beam = Glow & { edge: Point[] };
type Frame = {
  tint: string;
  shade: number;
  haze: number;
  glows: Glow[];
  beam?: Beam;
};

export class SceneLighting {
  private canvas = document.createElement("canvas");
  private ctx = this.canvas.getContext("2d");
  private lastFrame = -Infinity;

  constructor(parent: HTMLElement) {
    this.canvas.className = "scene-lighting";
    this.canvas.setAttribute("aria-hidden", "true");
    parent.append(this.canvas);
  }

  destroy() {
    this.canvas.remove();
  }

  draw(
    camera: Phaser.Cameras.Scene2D.Camera,
    frame: Frame,
    level: string,
    now: number,
  ) {
    const ctx = this.ctx;
    this.canvas.hidden = level === "off";
    if (!ctx || this.canvas.hidden || !camera.width || !camera.height) return;
    const scale = Math.min(
      1,
      (level === "soft" ? 320 : 560) / Math.max(camera.width, camera.height),
    );
    const width = Math.ceil(camera.width * scale);
    const height = Math.ceil(camera.height * scale);
    const resized =
      width !== this.canvas.width || height !== this.canvas.height;
    if (!resized && now >= this.lastFrame && now - this.lastFrame < 25) return;
    this.lastFrame = now;
    if (resized) {
      this.canvas.width = width;
      this.canvas.height = height;
    }

    const zoom = camera.zoom * scale;
    const centerX = camera.width / 2;
    const centerY = camera.height / 2;
    const project = (point: Point) => ({
      x: (point.x - camera.scrollX - centerX) * zoom + centerX * scale,
      y: (point.y - camera.scrollY - centerY) * zoom + centerY * scale,
    });
    const soft = level === "soft" ? 0.58 : 1;
    ctx.clearRect(0, 0, width, height);
    ctx.globalAlpha = frame.shade * soft;
    ctx.fillStyle = frame.tint;
    ctx.fillRect(0, 0, width, height);

    const lights = frame.beam ? [...frame.glows, frame.beam] : frame.glows;
    for (const light of lights) {
      const p = project(light);
      const radius = light.radius * zoom;
      if (
        p.x + radius < 0 ||
        p.y + radius < 0 ||
        p.x - radius > width ||
        p.y - radius > height
      )
        continue;
      ctx.save();
      if (light === frame.beam && frame.beam.edge.length) {
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        for (const edge of frame.beam.edge) {
          const q = project(edge);
          ctx.lineTo(q.x, q.y);
        }
        ctx.closePath();
        ctx.clip();
      }
      ctx.globalCompositeOperation = "destination-out";
      ctx.globalAlpha = light.power;
      const cut = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, radius);
      cut.addColorStop(0, "#fff");
      cut.addColorStop(0.4, "#fff");
      cut.addColorStop(1, "#fff0");
      ctx.fillStyle = cut;
      ctx.fillRect(p.x - radius, p.y - radius, radius * 2, radius * 2);

      ctx.globalCompositeOperation = "source-over";
      ctx.globalAlpha = 0.22 * light.power * soft;
      const tint = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, radius);
      tint.addColorStop(0, light.color);
      tint.addColorStop(1, light.color + "00");
      ctx.fillStyle = tint;
      ctx.fillRect(p.x - radius, p.y - radius, radius * 2, radius * 2);
      ctx.restore();
    }

    ctx.globalAlpha = frame.haze * soft;
    const haze = ctx.createLinearGradient(0, 0, 0, height);
    haze.addColorStop(0, "#a5bcbd00");
    haze.addColorStop(0.68, "#a5bcbd00");
    haze.addColorStop(1, "#a5bcbd");
    ctx.fillStyle = haze;
    ctx.fillRect(0, 0, width, height);
    ctx.globalAlpha = 1;
  }
}

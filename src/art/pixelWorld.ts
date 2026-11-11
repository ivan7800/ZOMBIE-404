import Phaser from "phaser";

export const PIXEL = 3;
export const WORLD_ATLAS = "valles-1998";
const CELL = 64;
const COLUMNS = 16;
type Point = [number, number];
type Ramp = [string, string, string, string];
type Painter = (p: Pixels) => void;

class Pixels {
  constructor(private ctx: CanvasRenderingContext2D) {}
  box(color: string, x: number, y: number, w = 1, h = 1) {
    this.ctx.fillStyle = color;
    this.ctx.fillRect(x, y, w, h);
  }
  poly(color: string, points: Point[]) {
    this.ctx.fillStyle = color;
    const top = Math.min(...points.map((p) => p[1]));
    const bottom = Math.max(...points.map((p) => p[1]));
    for (let y = top; y < bottom; y++) {
      const edges: number[] = [];
      for (let i = 0; i < points.length; i++) {
        const [x1, y1] = points[i],
          [x2, y2] = points[(i + 1) % points.length];
        if (y1 > y + 0.5 !== y2 > y + 0.5)
          edges.push(x1 + ((x2 - x1) * (y + 0.5 - y1)) / (y2 - y1));
      }
      edges.sort((a, b) => a - b);
      for (let i = 0; i + 1 < edges.length; i += 2) {
        const left = Math.ceil(edges[i] - 0.5);
        this.ctx.fillRect(left, y, Math.ceil(edges[i + 1] - 0.5) - left, 1);
      }
    }
  }
  line(
    color: string,
    x: number,
    y: number,
    endX: number,
    endY: number,
    size = 1,
  ) {
    const dx = Math.abs(endX - x),
      dy = -Math.abs(endY - y);
    const sx = x < endX ? 1 : -1,
      sy = y < endY ? 1 : -1;
    let err = dx + dy;
    for (;;) {
      this.box(color, x, y, size, size);
      if (x === endX && y === endY) break;
      const next = 2 * err;
      if (next >= dy) {
        err += dy;
        x += sx;
      }
      if (next <= dx) {
        err += dx;
        y += sy;
      }
    }
  }
  slab(x: number, y: number, w: number, d: number, h: number, ramp: Ramp) {
    this.poly(ramp[1], [
      [x - w, y - d - h],
      [x, y - h],
      [x, y],
      [x - w, y - d],
    ]);
    this.poly(ramp[0], [
      [x, y - h],
      [x + w, y - d - h],
      [x + w, y - d],
      [x, y],
    ]);
    this.poly(ramp[2], [
      [x - w, y - d - h],
      [x, y - 2 * d - h],
      [x + w, y - d - h],
      [x, y - h],
    ]);
    this.line(ramp[3], x - w, y - d - h, x, y - h);
    this.line(ramp[2], x, y - h, x, y - 1);
  }
}

const black = "#151b1c";
const stone: Ramp = ["#48473e", "#75664f", "#8f8266", "#b29a73"];
const tin: Ramp = ["#303b3d", "#4d5956", "#717e72", "#9ca18a"];
const cedar: Ramp = ["#382e2a", "#65513a", "#94734c", "#bd925c"];
const rust: Ramp = ["#452a28", "#793d32", "#a6573b", "#ce8050"];
const chalk: Ramp = ["#435457", "#687d79", "#91a198", "#c5c5a5"];
const ink: Ramp = ["#282832", "#444451", "#606675", "#90969c"];
const foundation: Ramp = ["#292f2e", "#41433c", "#5d594a", "#7d7158"];
const amber = "#e6b374",
  red = "#b65c46",
  teal = "#86bca8";

export const floors: Record<string, Ramp> = {
  fringe: ["#1b2a25", "#24362d", "#304137", "#495646"],
  grass: ["#293b32", "#35483a", "#41563e", "#647251"],
  woods: ["#1e3431", "#2a4337", "#385240", "#59684e"],
  verge: ["#303932", "#40483b", "#535943", "#737259"],
  road: ["#353b3b", "#444946", "#565951", "#73746a"],
  farmacia: ["#364944", "#52685c", "#738374", "#9a9c7d"],
  mercado: ["#443830", "#63513d", "#806749", "#a58359"],
  taller: ["#38383a", "#48494b", "#60615b", "#8a8371"],
  central: ["#2b3f43", "#3a5357", "#52696a", "#77958e"],
  laboratorio: ["#3c5054", "#587479", "#7e9490", "#a6b6a6"],
  repetidor: ["#373a33", "#4c4d40", "#64664f", "#858362"],
  evacuacion: ["#483a37", "#5e4d42", "#7e6950", "#9c8768"],
};
function rng(seed: number) {
  return (n: number) => {
    seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0;
    return (seed >>> 12) % n;
  };
}
function floor(p: Pixels, kind: string, variant: number) {
  const colors = floors[kind];
  const random = rng(77 + variant * 1381);
  // Each scan line follows the 2:1 isometric grid. No visible tile outlines.
  for (let y = 0; y < 16; y++) {
    const width = (y < 8 ? y + 1 : 16 - y) * 4;
    p.box(colors[1], 32 - width / 2, 24 + y, width);
  }
  for (let i = 0; i < (kind === "road" ? 18 : 25); i++) {
    const y = random(16),
      width = (y < 8 ? y + 1 : 16 - y) * 4;
    const size = 1 + random(3);
    const x = 32 - width / 2 + random(width - size + 1);
    p.box(colors[random(5) < 3 ? 0 : 2], x, 24 + y, size);
  }
  if (["grass", "woods", "verge", "fringe"].includes(kind)) {
    for (let i = 0; i < 2 + (variant % 3); i++) {
      const x = 22 + random(20),
        y = 30 + random(5);
      p.box(colors[0], x - 1, y, 4);
      p.line(colors[2], x, y - 1, x - 1, y - 3);
      p.box(colors[3], x + 1, y - 2);
    }
    if (variant === 4) p.box("#72724f", 31, 33, 2);
  } else if (kind === "road" || kind === "taller") {
    if (variant % 2 === 0) {
      p.line(colors[0], 21, 30, 29, 33);
      p.line(colors[0], 29, 33, 36, 32);
      p.line(colors[0], 36, 32, 42, 34);
    }
  } else {
    p.line(colors[0], 17, 32, 30, 38);
    p.line(colors[0], 33, 38, 46, 32);
    if (variant % 2 === 0) p.line(colors[2], 24, 29, 34, 34);
    if (kind === "evacuacion" && variant === 2)
      p.line(rust[2], 27, 31, 34, 35, 2);
  }
}

function shadow(p: Pixels, w: number, y = 49) {
  p.poly("#111819aa", [
    [32 - w, y],
    [31, y - 5],
    [32 + w, y],
    [35, y + 5],
  ]);
}
function trees(p: Pixels, variant: number) {
  shadow(p, 11);
  p.line("#352f27", 32, 48, 32, 30, 3);
  p.line("#736044", 33, 46, 34, 31);
  const random = rng(variant + 361);
  const leaves =
    variant === 2
      ? ["#182e2c", "#294840", "#3c6250", "#647960"]
      : ["#23342d", "#394c36", "#556344", "#72794e"];
  for (let i = 0; i < 4; i++) {
    const y = 15 + i * 6;
    const w = variant === 2 ? 6 + i * 2 : 8 + (i % 2) * 4;
    const x = 31 + random(5) - 2;
    p.poly(leaves[0], [
      [x - w, y + 7],
      [x - 4, y - 3],
      [x + 3, y - 5],
      [x + w, y + 4],
      [x + w - 3, y + 11],
      [x - 3, y + 13],
    ]);
    p.poly(leaves[1], [
      [x - w + 1, y + 5],
      [x - 3, y - 3],
      [x + 3, y - 4],
      [x + w - 3, y + 3],
      [x + 2, y + 8],
      [x - w + 3, y + 9],
    ]);
    p.line(leaves[2], x - w + 3, y + 4, x - 2, y - 1);
    for (let n = 0; n < 8; n++)
      p.box(
        leaves[2 + random(2)],
        x - 4 + random(9),
        y + random(5),
        1 + random(2),
      );
  }
}
function opening(
  p: Pixels,
  x: number,
  y: number,
  w: number,
  h: number,
  glow: string,
) {
  p.poly(black, [
    [x, y],
    [x + w, y + Math.floor(w / 2)],
    [x + w, y + h + Math.floor(w / 2)],
    [x, y + h],
  ]);
  p.line(glow, x + 1, y + 2, x + w - 1, y + 1 + Math.floor(w / 2));
  p.line(glow, x + Math.floor(w / 2), y + 3, x + Math.floor(w / 2), y + h - 1);
}
function masonry(
  p: Pixels,
  x: number,
  foot: number,
  w: number,
  d: number,
  h: number,
  colors: Ramp,
) {
  p.slab(x, foot, w, d, h, colors);
  for (let row = 3; row < h - 2; row += 4) {
    p.line(colors[0], x - w, foot - d - h + row, x - 1, foot - h + row);
    for (let col = 2 + (row % 3); col < w; col += 5)
      p.box(
        colors[3],
        x - w + col,
        foot - d - h + row + Math.floor((col * d) / w) + 1,
        2,
      );
    p.line("#252b2a", x + 1, foot - h + row, x + w - 1, foot - d - h + row);
  }
}
function roof(p: Pixels, x: number, y: number, w: number) {
  p.poly(rust[0], [
    [x - w - 2, y - 7],
    [x, y - 24],
    [x + w + 2, y - 8],
    [x, y + 3],
  ]);
  p.poly(rust[2], [
    [x - w - 2, y - 8],
    [x - 8, y - 22],
    [x + w + 2, y - 9],
    [x, y - 1],
  ]);
  p.poly(rust[1], [
    [x - w - 2, y - 8],
    [x - 8, y - 22],
    [x, y - 29],
    [x + w + 2, y - 9],
  ]);
  for (let i = 0; i < 5; i++) {
    const a = x - w + 3 + i * 4;
    p.line(rust[1], a, y - 8 - i * 2, a + w - 6, y - 4 - i * 2);
    p.box(rust[3], a + 4, y - 9 - i * 2, 3);
  }
}
function mast(p: Pixels, x: number, y: number, height: number, lamp: string) {
  p.line(tin[0], x, y, x + 2, y - height, 3);
  p.line(tin[3], x + 1, y - 1, x + 3, y - height);
  for (let i = 6; i < height - 2; i += 6)
    p.line(tin[2], x - 3, y - i, x + 7, y - i);
  p.box(lamp, x + 2, y - height - 2, 3, 2);
}
const buildings: Record<string, [Ramp, string, number]> = {
  masia: [stone, amber, 19],
  radio: [rust, amber, 16],
  fuel: [tin, amber, 16],
  shelter: [cedar, amber, 14],
  central: [ink, teal, 15],
  research: [chalk, teal, 17],
  relay: [tin, red, 10],
  evacuation: [cedar, red, 15],
  farmacia: [chalk, teal, 12],
  mercado: [stone, amber, 14],
};
function building(p: Pixels, kind: string) {
  const [colors, signal, w] = buildings[kind];
  const foot = 49,
    d = Math.round(w / 2);
  const h = kind === "masia" ? 20 : 13;
  // The pad follows the ground plane and meets both faces of the footing.
  p.poly("#34382f", [
    [7, 41],
    [32, 28],
    [57, 41],
    [32, 54],
  ]);
  p.poly("#62604b", [
    [11, 42],
    [32, 31],
    [53, 42],
    [32, 53],
  ]);
  p.slab(32, foot + 3, w + 2, d + 2, 4, foundation);
  p.line("#2a2d24", 32, 52, 33 + w, 51 - d);
  p.line("#9b8c6a", 30 - w, 51 - d, 32, 52);
  masonry(p, 32, foot, w, d, h, colors);
  opening(
    p,
    34 - w,
    foot - d - h + 4,
    5,
    6,
    kind === "masia" ? amber : colors[0],
  );
  opening(p, 24, foot - h - 1, 5, 10, signal);
  p.line(colors[3], 37, foot - h + 5, 31 + w, foot - d - h + 6);
  if (["masia", "shelter"].includes(kind)) {
    roof(p, 32, foot - h, w);
    p.box(stone[0], 22, foot - h - 24, 4, 10);
    p.box(stone[2], 21, foot - h - 25, 6, 2);
  } else {
    p.slab(32, foot - h, w + 2, d + 1, 3, kind === "radio" ? rust : colors);
    p.line(signal, 33, foot - h - 1, 31 + w, foot - d - h);
  }
  switch (kind) {
    case "radio":
      for (const x of [15, 21]) {
        p.box(rust[1], x, 37, 4, 8);
        p.box(amber, x + 1, 38, 2, 2);
      }
      p.box(rust[2], 47, 18, 3, 22);
      p.box("#e2be87", 43, 16, 9, 4);
      break;
    case "fuel":
      for (let i = 0; i < 4; i++)
        p.line(tin[2], 19, 35 + i * 2, 28, 39 + i * 2);
      p.box(amber, 38, 37, 4, 5);
      break;
    case "central":
      mast(p, 40, 26, 19, teal);
      break;
    case "shelter":
      mast(p, 43, 24, 17, red);
      break;
    case "relay":
      mast(p, 43, 44, 38, red);
      p.line(tin[3], 46, 6, 53, 44);
      p.line(tin[3], 31, 17, 55, 17);
      p.line(tin[3], 36, 27, 54, 27);
      break;
    case "research":
      for (let i = 0; i < 3; i++) p.box(teal, 36 + i * 4, 36 - i * 2, 3, 3);
      p.box(chalk[3], 24, 32, 7, 3);
      break;
    case "evacuation":
      p.box(red, 15, 27, 12, 6);
      p.box("#e1c1a2", 18, 29, 6);
      p.box("#e1c1a2", 21, 28, 1, 3);
      p.line(red, 49, 41, 49, 13);
      p.box(rust[2], 50, 13, 6, 4);
      break;
    case "farmacia":
      p.box(teal, 17, 31, 7, 2);
      p.box(teal, 19, 29, 2, 6);
      break;
    case "mercado":
      for (let i = 0; i < 6; i++)
        p.box(
          i % 2 ? amber : rust[2],
          14 + i * 3,
          33 + Math.floor(i * 1.5),
          3,
          3,
        );
      break;
  }
}
function car(p: Pixels, direction: number, wreck = false) {
  shadow(p, 15);
  const angle = (direction * Math.PI) / 4;
  const point = (a: number, b: number, h = 0): Point => {
    const x = a * Math.cos(angle) - b * Math.sin(angle),
      y = a * Math.sin(angle) + b * Math.cos(angle);
    return [32 + Math.round((x - y) * 16), 48 + Math.round((x + y) * 8) - h];
  };
  const hull = (
    color: string,
    nose: number,
    tail: number,
    w: number,
    h: number,
  ) =>
    p.poly(color, [
      point(nose, -w, h),
      point(nose, w, h),
      point(tail, w, h),
      point(tail, -w, h),
    ]);
  for (const a of [-0.42, 0.39])
    for (const b of [-0.33, 0.33]) {
      const [x, y] = point(a, b);
      p.box(black, x - 2, y - 2, 5, 4);
      p.box(tin[2], x, y - 1, 2);
    }
  hull(black, 0.69, -0.69, 0.35, 1);
  hull(wreck ? rust[1] : "#365451", 0.66, -0.67, 0.35, 3);
  hull(wreck ? rust[2] : "#729286", 0.65, -0.65, 0.33, 5);
  hull("#2a4046", 0.25, -0.47, 0.28, 7);
  hull(wreck ? stone[1] : "#a1b5a0", 0.05, -0.35, 0.23, 9);
  for (const side of [-0.25, 0.25]) {
    const [fx, fy] = point(0.64, side, 4);
    const [bx, by] = point(-0.64, side, 4);
    p.box(wreck ? stone[0] : amber, fx, fy, 2);
    p.box(red, bx, by, 2);
  }
}
function container(p: Pixels, kind: string, used: boolean) {
  const ramp = used
    ? tin
    : kind === "fuel"
      ? rust
      : kind === "medicine" || kind === "med"
        ? chalk
        : cedar;
  shadow(p, 7);
  p.slab(32, 49, 6, 3, used ? 2 : 5, ramp);
  if (used) {
    p.poly(black, [
      [27, 45],
      [32, 42],
      [37, 45],
      [32, 47],
    ]);
    return;
  }
  p.box(kind === "medicine" || kind === "med" ? red : amber, 31, 43, 3, 2);
  if (kind === "ammo") p.line(amber, 27, 44, 30, 46);
}

function fixture(p: Pixels, kind: string, variant: number) {
  if (kind === "taller" && variant === 1) {
    car(p, 1, true);
    return;
  }
  shadow(p, 10);
  const ramp =
    kind === "laboratorio" || kind === "farmacia"
      ? chalk
      : kind === "central" || kind === "repetidor"
        ? ink
        : kind === "taller"
          ? tin
          : cedar;
  const height = kind === "laboratorio" || kind === "evacuacion" ? 7 : 12;
  p.slab(32, 49, 10, 5, height, ramp);
  switch (kind) {
    case "central":
    case "repetidor":
      for (let i = 0; i < 4; i++) {
        p.line(tin[0], 23, 34 + i * 3, 31, 38 + i * 3);
        p.box(i % 2 ? teal : red, 26, 36 + i * 3);
      }
      if (kind === "repetidor") p.line(amber, 29, 35, 40, 46);
      break;
    case "laboratorio":
      for (let i = 0; i < 3; i++) {
        p.box(teal, 27 + i * 3, 35 + (i % 2), 2, 4);
        p.box(chalk[3], 27 + i * 3, 34 + (i % 2), 2);
      }
      p.box(black, 35, 37, 5, 3);
      break;
    case "evacuacion":
      p.line(red, 22, 43, 32, 47, 2);
      p.box(chalk[3], 30, 35, 6, 3);
      break;
    case "farmacia":
    case "mercado":
      for (let i = 0; i < 5; i++) {
        p.box(
          [amber, teal, red][(i + variant) % 3],
          23 + i * 3,
          34 + (i % 2),
          2,
          4,
        );
        p.box(ramp[0], 23 + i * 2, 39 + i, 2);
      }
      break;
    default:
      p.line(amber, 24, 35, 32, 39);
      p.box(rust[2], 34, 37, 4, 3);
  }
}

export function buildWorldAtlas(textures: Phaser.Textures.TextureManager) {
  if (textures.exists(WORLD_ATLAS))
    return textures.get(WORLD_ATLAS) as Phaser.Textures.CanvasTexture;
  const entries: [string, Painter][] = [];
  for (const axis of [-1, 1]) {
    entries.push([
      `road-mark:${axis}`,
      (p) => {
        floor(p, "road", axis + 2);
        p.line("#8c805f", 26, 32 - 3 * axis, 37, 32 + 2 * axis, 2);
        p.line("#b7a175", 27, 32 - 3 * axis, 34, 32 + axis);
      },
    ]);
  }

  for (const kind of Object.keys(floors)) {
    for (let v = 0; v < 6; v++)
      entries.push([`floor:${kind}:${v}`, (p) => floor(p, kind, v)]);
    if (["grass", "woods", "verge", "road", "fringe"].includes(kind)) continue;
    for (let v = 0; v < 3; v++)
      entries.push([`fixture:${kind}:${v}`, (p) => fixture(p, kind, v)]);
    for (const axis of [-1, 1])
      for (const high of [false, true]) {
        entries.push([
          `wall:${kind}:${axis}:${Number(high)}`,
          (p) => {
            const h = high ? 17 : 4,
              x = 32 + 16 * axis,
              y = 48;
            const ramp = floors[kind];
            p.poly(ramp[0], [
              [32, y],
              [x, y + 8],
              [x, y + 8 - h],
              [32, y - h],
            ]);
            p.line(ramp[3], 32, y - h, x, y + 8 - h);
            p.line(ramp[2], 32, y - h + 2, x, y + 10 - h);
            if (high) {
              p.line(ramp[1], 32, y - 6, x, y + 2, 2);
              p.box(black, 30 + 8 * axis, y - 9, 4, 3);
              p.box(
                kind === "laboratorio" || kind === "central" ? teal : ramp[2],
                30 + 8 * axis,
                y - 9,
                2,
              );
            }
          },
        ]);
      }
  }
  for (const kind of Object.keys(buildings))
    entries.push([`building:${kind}`, (p) => building(p, kind)]);
  for (let v = 0; v < 3; v++) {
    entries.push([
      `stone-wall:${v}`,
      (p) => {
        shadow(p, 17, 50);
        p.slab(32, 51, 15, 7, 7 + v, [
          "#353d36",
          "#575744",
          "#6c6a53",
          "#817b61",
        ]);
        for (let i = 0; i < 5; i++) {
          const x = 19 + i * 5;
          p.box(i % 2 ? stone[2] : stone[0], x, 39 + ((i + v) % 4), 3, 2);
        }
        p.box("#59694d", 26 + v * 3, 39, 4, 2);
      },
    ]);
    entries.push([`tree:${v}`, (p) => trees(p, v)]);
  }
  for (let v = 0; v < 8; v++) entries.push([`car:${v}`, (p) => car(p, v)]);
  for (let v = 0; v < 4; v++)
    entries.push([`wreck:${v}`, (p) => car(p, v * 2, true)]);
  for (const kind of ["food", "fuel", "materials", "medicine", "ammo", "med"])
    for (const used of [false, true])
      entries.push([
        `crate:${kind}:${Number(used)}`,
        (p) => container(p, kind, used),
      ]);
  entries.push(
    [
      "lamp",
      (p) => {
        shadow(p, 5);
        p.line(tin[0], 31, 48, 31, 23, 2);
        p.line(tin[3], 32, 46, 32, 23);
        p.line(tin[2], 31, 23, 39, 23, 2);
        p.box(amber, 37, 25, 4, 2);
      },
    ],
    [
      "barrier",
      (p) => {
        shadow(p, 10);
        p.line(cedar[0], 25, 38, 25, 49, 2);
        p.line(cedar[0], 39, 43, 39, 54, 2);
        p.line(cedar[2], 22, 40, 41, 49, 2);
        p.line(amber, 24, 41, 28, 43);
        p.line(amber, 34, 46, 38, 48);
      },
    ],
    [
      "rubble",
      (p) => {
        shadow(p, 8);
        p.slab(30, 50, 5, 3, 3, stone);
        p.slab(36, 48, 3, 2, 2, tin);
      },
    ],
    [
      "garden",
      (p) => {
        shadow(p, 8);
        p.slab(32, 49, 7, 3, 2, cedar);
        for (let i = 0; i < 4; i++)
          p.line("#7e8752", 27 + i * 3, 45 + (i % 2), 27 + i * 3, 43 + (i % 2));
      },
    ],
    [
      "infirmary",
      (p) => {
        shadow(p, 5);
        p.box(chalk[3], 29, 45, 7, 6);
        p.box(red, 32, 46, 1, 4);
        p.box(red, 31, 47, 3, 2);
      },
    ],
    [
      "corpse",
      (p) => {
        shadow(p, 7);
        p.line("#633a34", 25, 48, 36, 51, 2);
        p.line(tin[1], 27, 46, 35, 49, 3);
        p.box("#82795e", 36, 47, 3, 3);
      },
    ],
  );
  const atlas = textures.createCanvas(
    WORLD_ATLAS,
    CELL * COLUMNS,
    CELL * Math.ceil(entries.length / COLUMNS),
  )!;
  entries.forEach(([name, draw], i) => {
    const x = (i % COLUMNS) * CELL,
      y = Math.floor(i / COLUMNS) * CELL;
    atlas.context.save();
    atlas.context.translate(x, y);
    atlas.context.beginPath();
    atlas.context.rect(0, 0, CELL, CELL);
    atlas.context.clip();
    draw(new Pixels(atlas.context));
    atlas.context.restore();
    atlas.add(name, 0, x, y, CELL, CELL);
  });
  atlas.refresh();
  atlas.setFilter(Phaser.Textures.FilterMode.NEAREST);
  return atlas;
}

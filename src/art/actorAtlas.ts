import Phaser from "phaser";

const width = 24;
const height = 32;
const frames = 8;
const palettes = {
  aina: ["#264747", "#4f8882", "#a9c2a6", "#583e33", "#d0a284"],
  pau: ["#553d2d", "#9d6a41", "#d4ad68", "#3a3129", "#c29a77"],
  laia: ["#423449", "#805669", "#c08d96", "#29232e", "#d09a80"],
  mar: ["#334939", "#72804b", "#a8ab6e", "#4c352b", "#bc936b"],
  walker: ["#354438", "#586d50", "#879169", "#3a3b2f", "#a1a47b"],
  runner: ["#57362f", "#955241", "#c47855", "#442e2c", "#a79371"],
  screecher: ["#483037", "#865667", "#c5928e", "#502a33", "#cab58a"],
  lurker: ["#23363d", "#376470", "#6c9492", "#252d40", "#8da38e"],
  brute: ["#393743", "#686572", "#97917d", "#2b272b", "#a2a17f"],
} as const;
type Actor = keyof typeof palettes;

export function buildActorAtlas(textures: Phaser.Textures.TextureManager) {
  const key = "valles-survivors";
  if (textures.exists(key)) return key;
  const rows = Object.keys(palettes) as Actor[];
  const texture = textures.createCanvas(
    key,
    frames * width,
    rows.length * height,
  )!;
  rows.forEach((id, row) => {
    for (let frame = 0; frame < frames; frame++) {
      const x = frame * width,
        y = row * height;
      texture.context.save();
      texture.context.translate(x, y);
      paintActor(texture.context, id, frame);
      texture.context.restore();
      texture.add(id + ":" + frame, 0, x, y, width, height);
    }
  });
  texture.refresh();
  texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
  return key;
}

function paintActor(ctx: CanvasRenderingContext2D, id: Actor, frame: number) {
  const [dark, cloth, light, hair, skin] = palettes[id];
  const ink = "#1a2023",
    blood = "#934e43";
  const brute = id === "brute",
    runner = id === "runner",
    walker = id === "walker";
  const screecher = id === "screecher",
    lurker = id === "lurker";
  const infected = brute || runner || walker || screecher || lurker;
  const back = (frame >= 3 && frame <= 5) || frame === 7;
  const attack = frame >= 6;
  const step = attack ? 1 : [0, -2, 2][frame % 3];
  const bob = step === 0 ? 0 : 1;
  const lean = runner ? 2 : walker ? 1 : 0;
  const headY = (brute ? 2 : lurker ? 9 : runner ? 6 : 4) + bob;
  const torsoY = (brute ? 11 : 12) + bob;
  const shoulder = brute ? 4 : 6;
  const rect = (color: string, x: number, y: number, w: number, h: number) => {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, w, h);
  };

  for (const side of [-1, 1]) {
    const x = side === -1 ? 7 : 13;
    const foot = x + side * step;
    rect(ink, x, 20, 5, 7);
    rect(dark, x + 1, 21, 3, 4);
    rect(ink, foot - 1, 25, 5, 5);
    rect("#34383a", foot, 26, 3, 2);
    rect("#55534b", foot + 1, 29, 4, 1);
  }
  rect(ink, shoulder - 1, torsoY + 2, brute ? 17 : 13, 8);
  rect(ink, shoulder + 1, torsoY, brute ? 13 : 10, 12);
  rect(dark, shoulder + 1, torsoY + 1, brute ? 13 : 10, 9);
  rect(cloth, shoulder + 2, torsoY + 1, brute ? 10 : 8, 7);
  rect(light, shoulder + 2, torsoY + 1, brute ? 9 : 7, 2);
  rect(cloth, shoulder, torsoY + 4, 3, 4);
  rect(skin, shoulder - 1, torsoY + 7 + Number(walker), 3, 4);
  const reach = attack ? 20 : runner ? 19 : 17;
  rect(dark, 16, torsoY + 4, brute ? 5 : 3, 5);
  rect(cloth, 17, torsoY + 4, brute ? 4 : 2, 2);
  rect(skin, reach, torsoY + (attack ? 4 : 8), 3, 3);
  if (attack) {
    rect(dark, 16, torsoY + 4, 5, 3);
    rect(light, 21, torsoY + 3, 3, 2);
  }
  rect("#3c352e", 8, 21, 9, 2);
  rect("#b3916b", 13, 21, 2, 1);

  const headX = 8 + lean;
  rect(ink, headX, headY, 8, 9);
  rect(hair, headX + 1, headY - 1, 6, 5);
  rect(hair, headX, headY + 1, 8, 3);
  rect(skin, headX + (back ? 1 : 3), headY + 4, back ? 4 : 5, 4);
  if (!back) {
    rect(infected ? blood : ink, headX + 5, headY + 4, 2, 1);
    rect(infected ? "#d2b477" : "#e6bd96", headX + 6, headY + 6, 2, 1);
  }
  if (back && !infected) {
    rect(ink, 8, torsoY + 2, 8, 8);
    rect("#5c5540", 9, torsoY + 3, 6, 6);
    rect("#a58e65", 10, torsoY + 3, 4, 2);
    rect("#85734e", 10, torsoY + 7, 4, 1);
  }
  if (screecher) {
    rect(ink, headX + 4, headY + 5, 4, 4);
    rect(light, headX + 4, headY + 5, 3, 1);
    rect(cloth, 2, torsoY + 4, 5, 2);
  } else if (lurker) {
    rect(dark, headX - 2, headY - 2, 10, 4);
    rect(light, headX + 4, headY + 2, 3, 1);
  } else if (id === "aina") {
    rect("#c5bd9b", 12, torsoY + 4, 3, 3);
    rect("#785447", 13, torsoY + 5, 1, 1);
  } else if (id === "pau") {
    rect(dark, headX, headY - 2, 8, 3);
    rect(light, headX + 1, headY - 1, 6, 1);
    rect(dark, headX + 5, headY + 1, 5, 1);
  } else if (id === "laia") {
    rect(hair, headX - 2, headY + 2, 3, 8);
    rect(light, 10, torsoY + 3, 2, 5);
  } else if (id === "mar") {
    rect(ink, 7, torsoY + 3, 3, 6);
    rect(light, 7, torsoY + 2, 1, 2);
  } else if (infected) {
    rect(blood, brute ? 7 : 10, torsoY + 4, brute ? 6 : 3, 5);
    rect("#6d3835", 14, torsoY + 7, 2, 4);
    if (brute) rect(light, 3, torsoY + 3, 4, 2);
    if (walker) rect(hair, headX - 1, headY + 2, 3, 6);
  }
}

import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";
import { build } from "esbuild";
const result = await build({
  stdin: {
    contents:
      'export { GameScene } from "./src/scenes/GameScene.ts"; export * from "./src/core/world.mjs"; export * from "./src/core/interiors.mjs"; export * from "./src/core/save.mjs"; export {hasLineOfSight} from "./src/core/survival.mjs";',
    resolveDir: fileURLToPath(new URL("../", import.meta.url)),
  },
  format: "esm",
  bundle: true,
  write: false,
  plugins: [
    {
      name: "no-renderer",
      setup(b) {
        b.onResolve({ filter: /^phaser$/ }, () => ({
          path: "phaser",
          namespace: "stub",
        }));
        b.onLoad({ filter: /.*/, namespace: "stub" }, () => ({
          contents:
            "export default {Scene:class {}, Input:{Keyboard:{JustDown:()=>false}}}",
        }));
      },
    },
  ],
});
const {
  GameScene,
  generateWorld,
  locations,
  getInterior,
  loadGame,
  hasLineOfSight,
} = await import(
  "data:text/javascript;base64," +
    Buffer.from(result.outputFiles[0].text).toString("base64")
);
globalThis.document = {
  querySelector: (selector) =>
    selector === "dialog[open]" ? null : { classList: { remove() {} } },
};
const vectors = [
  [1, 0, "D", "S"],
  [-1, 0, "A", "W"],
  [0, 1, "A", "S"],
  [0, -1, "D", "W"],
];
function setup(difficulty) {
  const storage = new Map();
  globalThis.localStorage = {
    getItem: (k) => storage.get(k) ?? null,
    setItem: (k, v) => storage.set(k, v),
  };
  const scene = new GameScene();
  scene.keys = Object.fromEntries(
    "W A S D UP DOWN LEFT RIGHT SHIFT"
      .split(" ")
      .map((k) => [k, { isDown: false }]),
  );
  scene.blocked = generateWorld().blocked;
  scene.input = { keyboard: { resetKeys() {} } };
  scene.registry = { get() {} };
  scene.time = { now: 0 };
  const events = [];
  scene.game = { events: { emit: (...args) => events.push(args) } };
  for (const m of ["draw", "updateHud", "flash"]) scene[m] = () => {};
  scene.startRun(false, "campaign", difficulty);
  return { scene, events };
}
function tick(scene, delta = 50) {
  const s = scene.state,
    pos = s.inside ?? s.player;
  const survivor = s.community.survivors[s.community.active];
  const range = scene
    .enemies()
    .reduce(
      (best, e) =>
        e.alive && hasLineOfSight(pos, e, scene.obstacles())
          ? Math.min(best, Math.hypot(pos.x - e.x, pos.y - e.y))
          : best,
      Infinity,
    );
  if (survivor.hp < 72 && survivor.inventory.items.bandage)
    scene.action("heal");
  if (range < 1.8) scene.action("attack");
  else if (range < 4.6 && survivor.loaded) scene.action("shoot");
  else if (!survivor.loaded && survivor.inventory.items.ammo)
    scene.action("reload");
  scene.time.now += delta;
  scene.update(scene.time.now, delta);
  assert.ok(!s.gameOver);
}
function walk(scene, x, y) {
  const p = scene.state.inside ?? scene.state.player;
  const blocked = scene.obstacles();
  const start = [Math.floor(p.x), Math.floor(p.y)];
  const target = [Math.floor(x), Math.floor(y)];
  const queue = [[...start, []]],
    seen = new Set([start.join()]);
  let path;
  while (queue.length) {
    const [a, b, steps] = queue.shift();
    if (a === target[0] && b === target[1]) {
      path = steps;
      break;
    }
    for (const [dx, dy, k, j] of vectors) {
      const nx = a + dx,
        ny = b + dy,
        id = [nx, ny].join();
      if (
        nx < 0 ||
        ny < 0 ||
        nx > 25 ||
        ny > 25 ||
        blocked.has(id) ||
        seen.has(id)
      )
        continue;
      seen.add(id);
      queue.push([nx, ny, [...steps, [nx + 0.5, ny + 0.5, k, j]]]);
    }
  }
  assert.ok(path, `No path from ${start} to ${target}`);
  for (const [a, b] of path) {
    if (!scene.auditCombat) {
      for (let step = 0; step < 10; step++)
        scene.move(
          p,
          (a - p.x) / (10 - step),
          (b - p.y) / (10 - step),
          blocked,
        );
      assert.ok(Math.hypot(p.x - a, p.y - b) < 0.01);
      continue;
    }
    for (const [axis, dest, neg, pos] of [
      ["x", a, ["A", "W"], ["D", "S"]],
      ["y", b, ["D", "W"], ["A", "S"]],
    ]) {
      for (let i = 0; i < 22 && Math.abs(p[axis] - dest) > 0.065; i++) {
        const keys = p[axis] < dest ? pos : neg;
        for (const key of keys) scene.keys[key].isDown = true;
        tick(scene, Math.min(50, Math.abs(p[axis] - dest) * 270));
        for (const key of keys) scene.keys[key].isDown = false;
      }
      assert.ok(
        Math.abs(p[axis] - dest) < 0.15,
        JSON.stringify({ x: p.x, y: p.y, a, b, axis }),
      );
    }
  }
}
const go = (s, x, y) => {
  walk(s, x, y);
  s.interact();
};
const outside = (s, i) => go(s, locations[i].x, locations[i].y);
const enter = (s, i, id) => {
  for (let j = 0; j < 3 && !s.state.inside; j++) outside(s, i);
  assert.equal(s.state.inside?.siteId, id);
};
const evidence = (s, id) => {
  const box = getInterior(s.state.inside.siteId).supplies.find(
    (o) => o.id === id,
  );
  go(s, box.x, box.y);
};
const exit = (s) => {
  go(s, 4, 5);
  assert.equal(s.state.inside, null);
};
function reload(s) {
  const before = loadGame();
  assert.ok(s.startRun(true, "campaign", "story"));
  assert.deepEqual(s.state.campaign, before.campaign);
  assert.deepEqual(s.state.inside, before.inside);
  assert.deepEqual(s.state.fieldEvents, before.fieldEvents);
}
const runs = [
  ["story", "signal", "invite", "warn", "station", "alarm", 0, "rescue"],
  [
    "survival",
    "silence",
    "observe",
    "conceal",
    "masia",
    "alarm",
    1,
    "costly_signal",
  ],
  [
    "nightmare",
    "silence",
    "observe",
    "warn",
    "masia",
    "alarm",
    2,
    "last_voice",
  ],
  [
    "story",
    "silence",
    "observe",
    "warn",
    "masia",
    "isolate",
    0,
    "closed_valley",
  ],
  [
    "survival",
    "signal",
    "observe",
    "conceal",
    "masia",
    "isolate",
    2,
    "buried_signal",
  ],
];
for (const [difficulty, a, b, c, d, e, losses, expected] of runs) {
  const { scene: s, events } = setup(difficulty);
  s.auditCombat = expected === "rescue";
  outside(s, 0);
  assert.equal(s.state.stage, 1);
  enter(s, 1, "taller");
  evidence(s, "bidon");
  assert.ok(s.state.community.survivors[0].inventory.items.fuelcan);
  reload(s);
  exit(s);
  outside(s, 1);
  assert.equal(s.state.stage, 2);
  outside(s, 2);
  assert.equal(events.at(-1)[0], "radio-choice");
  s.finishAct(a);
  assert.equal(s.state.finale, a);
  assert.equal(events.at(-1)[2], "ending");
  s.resume();
  reload(s);
  for (const [index, id, ids, choice, method, act] of [
    [3, "central", ["registro"], b, "finishActTwo", 2],
    [4, "laboratorio", ["protocolo", "muestras"], c, "finishActThree", 3],
    [5, "repetidor", ["mapa_cables", "fusibles"], d, "finishActFour", 4],
    [6, "evacuacion", ["manifiesto", "baterias_radio"], e, "finishActFive", 5],
  ]) {
    enter(s, index, id);
    for (const item of ids) evidence(s, item);
    assert.equal(events.at(-1)[0], `act${act}-choice`);
    assert.equal(s.state.campaign[`act${act}`], "decision");
    reload(s);
    s.interact();
    assert.equal(events.at(-1)[0], `act${act}-choice`);
    if (act === 5)
      for (let j = 0; j < losses; j++) {
        s.state.community.survivors[j + 1].alive = false;
        s.state.community.survivors[j + 1].hp = 0;
      }
    s[method](choice);
    assert.equal(s.state.campaign[`act${act}`], "complete");
    reload(s);
    if (act < 5) exit(s);
  }
  assert.equal(events.at(-1)[2], "complete");
  assert.equal(s.state.campaign.ending, expected);
  console.log(
    `${difficulty}: actos I–V → ${expected}; recarga en cada decisión y tras cada acto · bajas: ${s.state.kills} · tiempo: ${s.state.time.toFixed(1)} s`,
  );
}

import { MAP_SIZE } from "./rules.mjs";
export const locations = [
  { x: 5, y: 6, name: "Gasolinera", kind: "radio", stage: 0 },
  { x: 19, y: 7, name: "Almacén", kind: "fuel", stage: 1 },
  { x: 20, y: 21, name: "Refugio", kind: "shelter", stage: 2 },
  { x: 6, y: 20, name: "Central telefónica", kind: "central", stage: 3 },
  { x: 21, y: 4, name: "Centro de investigación", kind: "research", stage: 4 },
  { x: 17, y: 17, name: "Perímetro del repetidor", kind: "relay", stage: 5 },
  { x: 21, y: 16, name: "Punto de evacuación", kind: "evacuation", stage: 6 },
];
export const initialLoot = [
  { x: 9, y: 5, kind: "ammo", taken: false },
  { x: 7, y: 16, kind: "med", taken: false },
  { x: 16, y: 15, kind: "ammo", taken: false },
  { x: 21, y: 12, kind: "med", taken: false },
  { x: 12, y: 21, kind: "ammo", taken: false },
];
export function generateWorld() {
  const blocked = new Set();
  const roads = new Set();
  for (let y = 0; y < MAP_SIZE; y++)
    for (let x = 0; x < MAP_SIZE; x++) {
      if (
        Math.abs(x - 12) <= 1 ||
        Math.abs(y - 12) <= 1 ||
        (y === 6 && x > 2 && x < 23)
      )
        roads.add(`${x},${y}`);
      if (
        (x === 2 || x === 3 || x === 22 || x === 23) &&
        ((y > 2 && y < 10) || (y > 16 && y < 23))
      )
        blocked.add(`${x},${y}`);
    }
  for (const l of locations) {
    for (let dy = -2; dy <= 2; dy++)
      for (let dx = -2; dx <= 2; dx++)
        blocked.delete(`${l.x + dx},${l.y + dy}`);
  }
  for (let y = 10; y <= 14; y++)
    for (let x = 10; x <= 14; x++) blocked.delete(`${x},${y}`);
  return { blocked, roads };
}
export function initialZombies() {
  return [
    { x: 7, y: 8 },
    { x: 16, y: 6 },
    { x: 21, y: 10 },
    { x: 5, y: 18 },
    { x: 15, y: 19 },
    { x: 24, y: 19 },
    { x: 10, y: 23 },
    { x: 18, y: 15 },
  ].map((p, i) => ({
    ...p,
    id: i,
    hp: i === 6 ? 5 : 3,
    role: i === 6 ? "brute" : i % 3 === 1 ? "runner" : "walker",
    alive: true,
    angle: i,
    attackCooldown: 0,
  }));
}

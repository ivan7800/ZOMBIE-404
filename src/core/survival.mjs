// Independent, deterministic simulation helpers. No browser or Phaser dependency.
export const ITEMS = {
  bandage: { name: "Vendas", weight: 1, max: 5 },
  scrap: { name: "Chatarra", weight: 2, max: 10 },
  ration: { name: "Ración", weight: 2, max: 6 },
  ammo: { name: "Cartuchos", weight: 1, max: 20 },
  fuelcan: { name: "Bidón", weight: 3, max: 4 },
};
export function inventoryFor(skill) {
  return {
    capacity: skill === "Exploradora" ? 18 : 14,
    items: { bandage: 1, ration: 1, ammo: 4 },
  };
}
export function inventoryWeight(inv) {
  return Object.entries(inv.items).reduce(
    (sum, [id, n]) => sum + (ITEMS[id]?.weight ?? 0) * n,
    0,
  );
}
export function addItem(inv, id, amount = 1) {
  if (!ITEMS[id] || !Number.isInteger(amount) || amount <= 0) return false;
  const current = inv.items[id] ?? 0;
  if (
    current + amount > ITEMS[id].max ||
    inventoryWeight(inv) + ITEMS[id].weight * amount > inv.capacity
  )
    return false;
  inv.items[id] = current + amount;
  return true;
}
export function consumeItem(inv, id, amount = 1) {
  if (!Number.isInteger(amount) || amount <= 0 || (inv.items[id] ?? 0) < amount)
    return false;
  inv.items[id] -= amount;
  return true;
}
export function ensureInventories(community) {
  for (const s of community.survivors) {
    if (!s.inventory) s.inventory = inventoryFor(s.skill);
  }
}
// Grid traversal visits both neighbors at an exact corner.
export function hasLineOfSight(a, b, blocked) {
  let x = Math.floor(a.x),
    y = Math.floor(a.y);
  const tx = Math.floor(b.x),
    ty = Math.floor(b.y);
  if (blocked.has(`${x},${y}`)) return false;
  const dx = b.x - a.x,
    dy = b.y - a.y;
  const sx = Math.sign(dx),
    sy = Math.sign(dy);
  const stepX = dx ? 1 / Math.abs(dx) : Infinity,
    stepY = dy ? 1 / Math.abs(dy) : Infinity;
  let crossX = dx ? (x + (sx > 0 ? 1 : 0) - a.x) / dx : Infinity;
  let crossY = dy ? (y + (sy > 0 ? 1 : 0) - a.y) / dy : Infinity;
  while (x !== tx || y !== ty) {
    const nx = x === tx ? Infinity : crossX,
      ny = y === ty ? Infinity : crossY;
    if (Math.abs(nx - ny) < 1e-9) {
      if (blocked.has(`${x + sx},${y}`) || blocked.has(`${x},${y + sy}`))
        return false;
      x += sx;
      y += sy;
      crossX += stepX;
      crossY += stepY;
    } else if (nx < ny) {
      x += sx;
      crossX += stepX;
    } else {
      y += sy;
      crossY += stepY;
    }
    if (blocked.has(`${x},${y}`)) return false;
  }
  return true;
}
export function nextStep(start, target, blocked, size = 26) {
  const s = [Math.floor(start.x), Math.floor(start.y)],
    t = [Math.floor(target.x), Math.floor(target.y)];
  const key = (x, y) => `${x},${y}`;
  const queue = [s],
    seen = new Set([key(...s)]),
    parent = new Map();
  let found = false;
  for (let i = 0; i < queue.length && i < size * size; i++) {
    const [x, y] = queue[i];
    if (x === t[0] && y === t[1]) {
      found = true;
      break;
    }
    for (const [dx, dy] of [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
    ]) {
      const nx = x + dx,
        ny = y + dy,
        k = key(nx, ny);
      if (
        nx < 0 ||
        ny < 0 ||
        nx >= size ||
        ny >= size ||
        blocked.has(k) ||
        seen.has(k)
      )
        continue;
      seen.add(k);
      parent.set(k, key(x, y));
      queue.push([nx, ny]);
    }
  }
  if (!found) return null;
  let cursor = key(...t),
    prev = parent.get(cursor);
  while (prev && prev !== key(...s)) {
    cursor = prev;
    prev = parent.get(cursor);
  }
  const [x, y] = cursor.split(",").map(Number);
  return { x: x + 0.5, y: y + 0.5 };
}

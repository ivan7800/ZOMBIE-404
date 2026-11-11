export const MAP_SIZE = 26;
export const TILE_W = 96;
export const TILE_H = 48;
export const PLAYER_SPEED = 3.7;
export const ZOMBIE_SPEED = 1.18;
export const SAVE_VERSION = 2;
export function clamp(v, min, max) {
  return Math.max(min, Math.min(max, v));
}
export function distance(a, b) {
  return Math.hypot(a.x - b.x, a.y - b.y);
}
export function iso(x, y) {
  return { x: ((x - y) * TILE_W) / 2, y: ((x + y) * TILE_H) / 2 };
}
export function validPosition(x, y, blocked, size = MAP_SIZE) {
  return (
    x >= 0.5 &&
    y >= 0.5 &&
    x < size - 0.5 &&
    y < size - 0.5 &&
    !blocked.has(`${Math.floor(x)},${Math.floor(y)}`)
  );
}
export function hitDamage(distanceToTarget, range = 1.8) {
  return distanceToTarget <= range ? 1 : 0;
}
export function zombieMode(distanceToPlayer, noise, hasSight) {
  if (distanceToPlayer < 1.3) return "attack";
  if (
    (hasSight && distanceToPlayer < 6.8) ||
    (noise > 0 && distanceToPlayer < noise)
  )
    return "chase";
  return "wander";
}
export function validateSave(s) {
  return (
    !!s &&
    [1, SAVE_VERSION].includes(s.version) &&
    Number.isFinite(s.player?.x) &&
    Number.isFinite(s.player?.y) &&
    s.player.x >= 0 &&
    s.player.x < MAP_SIZE &&
    s.player.y >= 0 &&
    s.player.y < MAP_SIZE &&
    Number.isFinite(s.player.hp) &&
    s.player.hp >= 0 &&
    s.player.hp <= 100 &&
    Array.isArray(s.zombies) &&
    Array.isArray(s.loot) &&
    Number.isInteger(s.stage) &&
    s.stage >= 0 &&
    s.stage <= 3
  );
}
export function objectiveText(stage) {
  return [
    "Busca el transmisor de emergencias en la gasolinera.",
    "Consigue combustible en el almacén abandonado.",
    "Llega al refugio de montaña y activa la radio.",
    "Has sobrevivido a la primera noche.",
  ][clamp(stage, 0, 3)];
}

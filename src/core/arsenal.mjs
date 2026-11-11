import { distance } from "./rules.mjs";
import { hasLineOfSight } from "./survival.mjs";

export const WEAPONS = Object.freeze({
  pistol: {
    name: "Pistola",
    range: 5.5,
    damage: 3,
    delay: 0.38,
    noise: 13,
    cost: 1,
    sound: "shot",
    push: 0.26,
    stun: 0.48,
  },
  shotgun: {
    name: "Escopeta",
    range: 3.7,
    damage: 5,
    delay: 0.8,
    noise: 17,
    cost: 2,
    sound: "shotgun",
    push: 0.64,
    stun: 0.95,
  },
  carbine: {
    name: "Carabina",
    range: 8,
    damage: 3,
    delay: 0.56,
    noise: 15,
    cost: 1,
    sound: "carbine",
    push: 0.35,
    stun: 0.64,
  },
});

export function availableWeapons(state) {
  /** @type {(keyof typeof WEAPONS)[]} */
  const choices = ["pistol"];
  if (state.stage >= 2 || state.kills >= 4) choices.push("shotgun");
  if (state.campaign?.act2 === "complete" || state.kills >= 10)
    choices.push("carbine");
  return choices;
}

export function chargeStock(state) {
  const rewards =
    Number(state.stage >= 2) +
    Number(state.campaign?.act3 === "complete") +
    Number(state.campaign?.act4 === "complete");
  return Math.max(
    0,
    1 +
      rewards +
      Math.min(12, Math.floor(state.kills / 8)) -
      state.arsenal.spent,
  );
}

export function prepareArsenal(state) {
  const { selected, spent } = state.arsenal ?? {};
  return {
    selected: availableWeapons(state).includes(selected) ? selected : "pistol",
    spent: Number.isInteger(spent) ? Math.min(16, Math.max(0, spent)) : 0,
  };
}

export function shotTargets(origin, enemies, blocked, id, aim) {
  const weapon = WEAPONS[id];
  const candidates = enemies.filter(
    (enemy) =>
      enemy.alive &&
      distance(origin, enemy) <= weapon.range &&
      hasLineOfSight(origin, enemy, blocked),
  );
  const alignment = (enemy, direction) => {
    const dx = enemy.x - origin.x;
    const dy = enemy.y - origin.y;
    return (
      (dx * direction.x + dy * direction.y) /
      Math.max(0.01, Math.hypot(dx, dy) * Math.hypot(direction.x, direction.y))
    );
  };
  const primary = candidates
    .filter((enemy) => !aim || alignment(enemy, aim) >= 0.88)
    .sort(
      (a, b) =>
        (aim ? alignment(b, aim) - alignment(a, aim) : 0) ||
        distance(origin, a) - distance(origin, b),
    )[0];
  if (!primary) return [];
  const range = distance(origin, primary);
  const hits = [
    {
      enemy: primary,
      damage: id === "shotgun" && range > 2.5 ? 3 : weapon.damage,
    },
  ];
  if (id === "shotgun") {
    const direction = { x: primary.x - origin.x, y: primary.y - origin.y };
    hits.push(
      ...candidates
        .filter(
          (enemy) => enemy !== primary && alignment(enemy, direction) >= 0.83,
        )
        .sort((a, b) => distance(origin, a) - distance(origin, b))
        .slice(0, 2)
        .map((enemy) => ({ enemy, damage: 2 })),
    );
  }
  return hits;
}

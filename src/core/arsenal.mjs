export const WEAPONS = Object.freeze({
  pistol: {
    name: "Pistola",
    range: 5.5,
    damage: 3,
    delay: 0.38,
    noise: 13,
    cost: 1,
    sound: "shot",
  },
  shotgun: {
    name: "Escopeta",
    range: 3.7,
    damage: 5,
    delay: 0.8,
    noise: 17,
    cost: 2,
    sound: "shotgun",
  },
  carbine: {
    name: "Carabina",
    range: 8,
    damage: 3,
    delay: 0.56,
    noise: 15,
    cost: 1,
    sound: "carbine",
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

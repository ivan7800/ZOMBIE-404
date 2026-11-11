export const BASE = { x: 12, y: 12 };
export const SITES = [
  {
    id: "farmacia",
    name: "Farmacia",
    x: 7,
    y: 16,
    resource: "medicine",
    amount: 2,
  },
  { id: "mercado", name: "Mercado", x: 9, y: 5, resource: "food", amount: 3 },
  {
    id: "taller",
    name: "Taller",
    x: 19,
    y: 7,
    resource: "materials",
    amount: 3,
  },
  {
    id: "central",
    name: "Central telefónica",
    x: 6,
    y: 20,
    resource: "materials",
    amount: 2,
  },
  {
    id: "laboratorio",
    name: "Centro de investigación",
    x: 21,
    y: 4,
    resource: "medicine",
    amount: 1,
  },
  {
    id: "repetidor",
    name: "Perímetro del repetidor",
    x: 17,
    y: 17,
    resource: "materials",
    amount: 1,
  },
  {
    id: "evacuacion",
    name: "Punto de evacuación",
    x: 21,
    y: 16,
    resource: "materials",
    amount: 1,
  },
];
export const FACILITIES = {
  infirmary: {
    name: "Enfermería",
    cost: 3,
    effect: "Trata lesiones al amanecer si hay medicina.",
  },
  garden: {
    name: "Huerto",
    cost: 3,
    effect: "Produce una ración diaria por nivel.",
  },
  workshop: {
    name: "Taller",
    cost: 4,
    effect: "Mejora las reparaciones de la carrocería.",
  },
  barricades: {
    name: "Barricadas",
    cost: 2,
    effect: "Reduce la presión de los asedios.",
  },
  bedroom: {
    name: "Dormitorios",
    cost: 3,
    effect: "Reduce la fatiga al amanecer.",
  },
  kitchen: {
    name: "Cocina",
    cost: 3,
    effect: "Reduce el consumo si viven al menos dos personas.",
  },
  storage: {
    name: "Almacén",
    cost: 2,
    effect: "Protege los materiales durante los asedios.",
  },
  lookout: {
    name: "Puesto de vigilancia",
    cost: 3,
    effect: "Refuerza la defensa y avisa de los asedios.",
  },
  generator: {
    name: "Generador",
    cost: 4,
    effect: "Consume combustible para mejorar la moral al amanecer.",
  },
};
const ORIGINAL_FACILITIES = ["infirmary", "garden", "workshop", "barricades"];
export function newCommunity() {
  return {
    active: 0,
    day: 1,
    elapsed: 0,
    morale: 65,
    survivors: [
      {
        id: "aina",
        name: "Aina",
        skill: "Sanitaria",
        hp: 100,
        fatigue: 0,
        alive: true,
      },
      {
        id: "pau",
        name: "Pau",
        skill: "Mecánico",
        hp: 100,
        fatigue: 10,
        alive: true,
      },
      {
        id: "laia",
        name: "Laia",
        skill: "Exploradora",
        hp: 100,
        fatigue: 5,
        alive: true,
      },
    ],
    resources: { food: 6, medicine: 2, materials: 4, fuel: 2 },
    facilities: Object.fromEntries(
      Object.keys(FACILITIES).map((id) => [id, 0]),
    ),
    sites: SITES.map((s) => s.id),
    logs: ["Día 1: tres supervivientes llegan a la masía."],
  };
}
export function validCommunity(c) {
  return (
    !!c &&
    Number.isInteger(c.active) &&
    Array.isArray(c.survivors) &&
    c.survivors.length >= 1 &&
    c.active >= 0 &&
    c.active < c.survivors.length &&
    c.survivors.every(
      (s) =>
        s &&
        typeof s.name === "string" &&
        Number.isFinite(s.hp) &&
        s.hp >= 0 &&
        s.hp <= 100 &&
        Number.isFinite(s.fatigue) &&
        s.fatigue >= 0 &&
        s.fatigue <= 100 &&
        typeof s.alive === "boolean",
    ) &&
    (c.survivors[c.active].alive || c.survivors.every((s) => !s.alive)) &&
    Number.isInteger(c.day) &&
    c.day >= 1 &&
    Number.isFinite(c.elapsed) &&
    c.elapsed >= 0 &&
    Number.isFinite(c.morale) &&
    c.morale >= 0 &&
    c.morale <= 100 &&
    Object.keys(newCommunity().resources).every(
      (k) => Number.isInteger(c.resources?.[k]) && c.resources[k] >= 0,
    ) &&
    Object.keys(FACILITIES).every(
      (k) =>
        (c.facilities?.[k] === undefined && !ORIGINAL_FACILITIES.includes(k)) ||
        (Number.isInteger(c.facilities?.[k]) &&
          c.facilities[k] >= 0 &&
          c.facilities[k] <= 3),
    ) &&
    Array.isArray(c.sites) &&
    c.sites.every((id) => SITES.some((s) => s.id === id))
  );
}
export function switchSurvivor(c) {
  for (let n = 1; n <= c.survivors.length; n++) {
    const i = (c.active + n) % c.survivors.length;
    if (c.survivors[i].alive) {
      c.active = i;
      return c.survivors[i];
    }
  }
  return null;
}
export function upgrade(c, id) {
  const f = FACILITIES[id];
  if (!Object.hasOwn(FACILITIES, id))
    return { ok: false, message: "Instalación desconocida" };
  const level = c.facilities[id] ?? 0;
  if (level >= 3) return { ok: false, message: "Instalación al máximo" };
  const cost = f.cost + level * 2;
  if (c.resources.materials < cost)
    return { ok: false, message: `Necesitas ${cost} materiales` };
  c.resources.materials -= cost;
  c.facilities[id] = level + 1;
  return { ok: true, message: `${f.name} nivel ${c.facilities[id]}` };
}
export function scavenge(c, id) {
  const site = SITES.find((s) => s.id === id);
  if (!site || !c.sites.includes(id))
    return { ok: false, message: "Zona agotada" };
  c.sites = c.sites.filter((s) => s !== id);
  c.resources[site.resource] += site.amount;
  c.survivors[c.active].fatigue = Math.min(
    100,
    c.survivors[c.active].fatigue + 15,
  );
  c.logs.push(`Día ${c.day}: suministros recuperados en ${site.name}.`);
  return {
    ok: true,
    message: `${site.name}: +${site.amount} ${site.resource}`,
  };
}
export function nextDay(c) {
  const living = c.survivors.filter((s) => s.alive);
  const {
    garden,
    kitchen = 0,
    bedroom = 0,
    infirmary,
    barricades,
    generator = 0,
  } = c.facilities;
  const foodCost = Math.max(
    0,
    living.length - garden - Math.min(kitchen, Math.floor(living.length / 2)),
  );
  const shortage = Math.max(0, foodCost - c.resources.food);
  c.resources.food = Math.max(0, c.resources.food - foodCost);
  const powered = generator > 0 && c.resources.fuel > 0;
  if (powered) c.resources.fuel--;
  c.day++;
  c.elapsed = 0;
  c.morale = Math.max(
    0,
    Math.min(
      100,
      c.morale +
        (shortage ? -12 : 2) +
        Number(!!barricades) +
        (powered ? generator * 2 : 0),
    ),
  );
  for (const survivor of living) {
    survivor.fatigue = Math.max(0, survivor.fatigue - 35 - bedroom * 10);
    if (shortage) survivor.hp = Math.max(1, survivor.hp - 8);
    if (
      infirmary &&
      c.resources.medicine > 0 &&
      (survivor.hp < 82 || survivor.infection > 0)
    ) {
      survivor.hp = Math.min(100, survivor.hp + 12 + infirmary * 5);
      survivor.infection = Math.max(
        0,
        (survivor.infection ?? 0) - 10 - infirmary * 5,
      );
      survivor.bleed = 0;
      c.resources.medicine--;
    }
  }
  c.logs.push(
    `Día ${c.day}: consumo ${foodCost} comida${shortage ? " · ESCASEZ" : ""}${powered ? " · generador en marcha" : ""}.`,
  );
  return { foodCost, shortage };
}
export function hurtActive(c, amount) {
  const s = c.survivors[c.active];
  s.hp = Math.max(0, s.hp - amount);
  if (s.hp === 0) {
    s.alive = false;
    const replacement = switchSurvivor(c);
    c.morale = Math.max(0, c.morale - 25);
    c.logs.push(`${s.name} ha muerto.`);
    return replacement;
  }
  return s;
}

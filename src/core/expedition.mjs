import { prepareFieldEvents } from "./fieldEvents.mjs";
import { prepareArsenal } from "./arsenal.mjs";
import {
  BASE,
  FACILITIES,
  newCommunity,
  validCommunity,
  hurtActive,
  nextDay,
} from "./community.mjs";
import { bootstrapEquipment, pickupEquipment, syncEquipment } from "./equipment.mjs";
import {
  ensureInteriorState,
  getInterior,
  interiorBlocked,
  INTERIOR_W,
  INTERIOR_H,
} from "./interiors.mjs";
import { capacityFor } from "./logistics.mjs";
import { clamp, distance, MAP_SIZE, validPosition } from "./rules.mjs";
import {
  ITEMS,
  consumeItem,
  inventoryFor,
  inventoryWeight,
  hasLineOfSight,
} from "./survival.mjs";
import { generateWorld, initialLoot, initialZombies } from "./world.mjs";
import { prepareVehicle } from "./vehicle.mjs";

export const DIFFICULTIES = Object.freeze({
  story: {
    damage: 7,
    speed: 0.85,
    permadeath: false,
    sight: 4.8,
    hearing: 0.72,
    supplies: 10,
    meds: 2,
    siege: -2,
    patrols: 2,
  },
  survival: {
    damage: 12,
    speed: 1,
    permadeath: true,
    sight: 6.2,
    hearing: 1,
    supplies: 8,
    meds: 1,
    siege: 0,
    patrols: 3,
  },
  nightmare: {
    damage: 17,
    speed: 1.2,
    permadeath: true,
    sight: 7.5,
    hearing: 1.18,
    supplies: 6,
    meds: 1,
    siege: 3,
    patrols: 4,
  },
});
export const CHAMBER = 5;
const clampNumber = (value, min, max, fallback = min) =>
  Number.isFinite(value) ? clamp(value, min, max) : fallback;
const int = (value, min, max, fallback = min) =>
  Math.floor(clampNumber(value, min, max, fallback));
const record = (value) =>
  value && typeof value === "object" && !Array.isArray(value);

export function newRun(mode, difficulty) {
  const profile = Object.hasOwn(DIFFICULTIES, difficulty)
    ? DIFFICULTIES[difficulty]
    : DIFFICULTIES.survival;
  const state = prepareRun({
    version: 2,
    mode,
    difficulty,
    player: { ...BASE, hp: 100, ammo: profile.supplies, med: profile.meds },
    zombies: initialZombies(),
    loot: structuredClone(initialLoot),
    stage: 0,
    campaign: {
      act2: "locked",
      act2Choice: null,
      act3: "locked",
      act3Choice: null,
      act4: "locked",
      act4Choice: null,
      stationEvacuated: false,
      act5: "locked",
      act5Choice: null,
      ending: null,
    },
    kills: 0,
    time: 0,
    community: newCommunity(),
  });
  reload(state);
  return state;
}

export function prepareRun(state) {
  const legacy = state.version === 1;
  const c = validCommunity(state.community) ? state.community : newCommunity();
  if (
    !validCommunity(state.community) &&
    state.community?.survivors?.every((s) => s && s.alive === false)
  ) {
    for (const survivor of c.survivors)
      Object.assign(survivor, { hp: 0, alive: false });
  }
  if (legacy && !validCommunity(state.community))
    c.survivors[c.active].hp = state.player.hp;
  c.logs = Array.isArray(c.logs)
    ? c.logs.filter((v) => typeof v === "string").slice(-40)
    : [];
  c.siege = int(c.siege, 0, 100000);
  c.facilities = Object.fromEntries(
    Object.keys(FACILITIES).map((id) => [id, int(c.facilities[id], 0, 3)]),
  );
  for (const survivor of c.survivors) {
    if (!record(survivor.inventory?.items))
      survivor.inventory = inventoryFor(survivor.skill);
    const inv = survivor.inventory;
    inv.capacity = int(
      inv.capacity,
      7,
      24,
      inventoryFor(survivor.skill).capacity,
    );
    inv.items = Object.fromEntries(
      Object.keys(ITEMS).map((id) => [
        id,
        int(inv.items[id], 0, ITEMS[id].max),
      ]),
    );
    for (const id of Object.keys(ITEMS).reverse()) {
      while (inv.items[id] && inventoryWeight(inv) > inv.capacity)
        inv.items[id]--;
    }
    survivor.loaded = int(survivor.loaded, 0, CHAMBER);
    survivor.bleed = clampNumber(survivor.bleed, 0, 30);
    survivor.infection = clampNumber(survivor.infection, 0, 100);
    survivor.xp = int(survivor.xp, 0, 9999);
  }
  state.community = c;
  state.player.hp = c.survivors[c.active].hp;
  state.player.stamina = clampNumber(state.player.stamina, 0, 100, 100);
  state.player.ammo = int(state.player.ammo, 0, 20, 4);
  state.player.med = int(state.player.med, 0, 5, 1);
  const { blocked } = generateWorld();
  if (!validPosition(state.player.x, state.player.y, blocked))
    Object.assign(state.player, BASE);
  // The older exterior spawn at 23,19 fell inside a wall.
  for (const enemy of state.zombies) {
    if (enemy?.id === 5 && enemy.x === 23 && enemy.y === 19) enemy.x = 24;
  }
  state.zombies = cleanEnemies(state.zombies, MAP_SIZE, MAP_SIZE, blocked);
  state.loot = state.loot
    .filter(
      (item) =>
        record(item) &&
        ["ammo", "med"].includes(item.kind) &&
        validPosition(item.x, item.y, blocked),
    )
    .map((item) => ({
      ...item,
      taken: item.taken === true,
      remaining: item.taken
        ? 0
        : int(
            item.remaining,
            1,
            item.kind === "ammo" ? 5 : 1,
            item.kind === "ammo" ? 5 : 1,
          ),
    }));
  state.time = clampNumber(state.time, 0, 1e9);
  state.kills = int(state.kills, 0, 1e9);
  state.mode = state.mode === "free" ? "free" : "campaign";
  state.difficulty = Object.hasOwn(DIFFICULTIES, state.difficulty)
    ? state.difficulty
    : "survival";
  state.finale = ["signal", "silence"].includes(state.finale)
    ? state.finale
    : null;
  const campaign = record(state.campaign) ? state.campaign : {};
  const validAct2 = ["locked", "lead", "decision", "complete"].includes(
    campaign.act2,
  );
  state.campaign = {
    act2: validAct2 ? campaign.act2 : state.finale ? "lead" : "locked",
    act2Choice: ["invite", "observe"].includes(campaign.act2Choice)
      ? campaign.act2Choice
      : null,
    act3: ["locked", "lead", "decision", "complete"].includes(campaign.act3)
      ? campaign.act3
      : "locked",
    act3Choice: ["warn", "conceal"].includes(campaign.act3Choice)
      ? campaign.act3Choice
      : null,
    act4: ["locked", "lead", "decision", "complete"].includes(campaign.act4)
      ? campaign.act4
      : "locked",
    act4Choice: ["station", "masia"].includes(campaign.act4Choice)
      ? campaign.act4Choice
      : null,
    stationEvacuated: campaign.stationEvacuated === true,
    act5: ["locked", "lead", "decision", "complete"].includes(campaign.act5)
      ? campaign.act5
      : "locked",
    act5Choice: ["alarm", "isolate"].includes(campaign.act5Choice)
      ? campaign.act5Choice
      : null,
    ending: [
      "rescue",
      "costly_signal",
      "last_voice",
      "closed_valley",
      "buried_signal",
    ].includes(campaign.ending)
      ? campaign.ending
      : null,
  };
  // Existing v2 saves that finished Act I receive the next chapter automatically.
  if (state.finale && state.campaign.act2 === "locked")
    state.campaign.act2 = "lead";
  if (state.campaign.act2 === "complete" && state.campaign.act3 === "locked")
    state.campaign.act3 = "lead";
  if (state.campaign.act3 === "complete" && state.campaign.act4 === "locked")
    state.campaign.act4 = "lead";
  if (state.campaign.act4 === "complete" && state.campaign.act5 === "locked")
    state.campaign.act5 = "lead";
  state.gameOver = !c.survivors.some((s) => s.alive);
  if (!record(state.interiors)) state.interiors = {};
  ensureInteriorState(state);
  for (const [id, entry] of Object.entries(state.interiors)) {
    if (!getInterior(id)) {
      delete state.interiors[id];
      continue;
    }
    entry.zombies = cleanEnemies(
      entry.zombies,
      INTERIOR_W,
      INTERIOR_H,
      interiorBlocked(id),
    );
  }
  if (
    state.inside &&
    interiorBlocked(state.inside.siteId).has(
      `${Math.floor(state.inside.x)},${Math.floor(state.inside.y)}`,
    )
  )
    state.inside = null;
  state.vehicle = prepareVehicle(state.vehicle, blocked);
  if (state.inside || state.gameOver) state.vehicle.driving = false;
  if (state.vehicle.driving)
    Object.assign(state.player, { x: state.vehicle.x, y: state.vehicle.y });
  bootstrapEquipment(state);
  state.arsenal = prepareArsenal(state);
  state.fieldEvents = prepareFieldEvents(state.fieldEvents);
  state.version = 2;
  return state;
}

function cleanEnemies(enemies, width, height, blocked) {
  const seen = new Set();
  return enemies
    .filter(
      (z) =>
        record(z) &&
        ["string", "number"].includes(typeof z.id) &&
        Number.isFinite(z.x) &&
        Number.isFinite(z.y) &&
        z.x >= 0.5 &&
        z.y >= 0.5 &&
        z.x < width &&
        z.y < height &&
        !blocked.has(`${Math.floor(z.x)},${Math.floor(z.y)}`) &&
        !seen.has(z.id) &&
        seen.add(z.id),
    )
    .slice(0, 90)
    .map((z) => ({
      ...z,
      hp: z.alive === false ? 0 : int(z.hp, 1, 8, 3),
      alive: z.alive !== false,
      attackCooldown: clampNumber(z.attackCooldown, 0, 4),
      role: ["runner", "brute", "screecher", "lurker"].includes(z.role)
        ? z.role
        : "walker",
    }));
}

export function activeSurvivor(state) {
  return state.community.survivors[state.community.active];
}
export function reload(state) {
  const s = activeSurvivor(state);
  const count = Math.min(CHAMBER - s.loaded, s.inventory.items.ammo ?? 0);
  if (!consumeItem(s.inventory, "ammo", count)) return false;
  s.loaded += count;
  syncEquipment(state);
  return true;
}
export function combatTarget(origin, enemies, blocked, range) {
  let target;
  for (const enemy of enemies) {
    const d = distance(origin, enemy);
    if (!enemy.alive || d > range || !hasLineOfSight(origin, enemy, blocked))
      continue;
    range = d;
    target = enemy;
  }
  return target;
}
export function canBite(zombie, player, obstacles) {
  return (
    distance(zombie, player) < 1.25 && hasLineOfSight(zombie, player, obstacles)
  );
}
export function applyInjury(state, damage, bite = true) {
  const c = state.community;
  const s = activeSurvivor(state);
  if (bite) {
    s.bleed = Math.max(s.bleed, 12);
    s.infection = clamp(s.infection + 9, 0, 100);
  }
  const incapacitated =
    s.hp <= damage && !DIFFICULTIES[state.difficulty].permadeath;
  if (incapacitated) {
    Object.assign(s, { hp: 35, bleed: 0, fatigue: 80 });
    Object.assign(state.player, BASE);
    state.inside = null;
    c.morale = Math.max(0, c.morale - 12);
    c.logs.push(`Día ${c.day}: ${s.name} se retira a la masía.`);
  } else {
    hurtActive(c, damage);
    if (!s.alive && c.survivors.some((other) => other.alive)) {
      Object.assign(state.player, BASE);
      state.inside = null;
    }
  }
  state.gameOver = !c.survivors.some((other) => other.alive);
  state.player.hp = activeSurvivor(state).hp;
  syncEquipment(state);
  return { incapacitated, lost: !s.alive ? s.name : null };
}

export function advanceCommunity(state) {
  const c = state.community;
  const profile = DIFFICULTIES[state.difficulty] ?? DIFFICULTIES.survival;
  const summary = {
    ...nextDay(c),
    siege: /** @type {number | undefined} */ (undefined),
    siegeEncounter: /** @type {boolean | undefined} */ (undefined),
  };
  if (c.day % 3 === 0) {
    // Pressure rises gently and then plateaus. A player at Can Lluc can fight
    // the assault instead of paying its full abstract resource cost.
    const livingNuria = c.survivors.some((person) => person.id === "nuria" && person.alive);
    const routeSupport = state.campaign?.act3Choice === "warn" ? 1 : 0;
    const pressure = Math.max(0, Math.min(8,
      3 + profile.siege + Math.min(4, Math.floor(c.day / 6)) -
      c.facilities.barricades * 2 - c.facilities.lookout -
      (livingNuria ? 1 : 0) - routeSupport));
    c.siege += 1;
    const unresolvedSiege = state.zombies.some((z) => z.siegeDay !== undefined && z.alive);
    const atBase = !unresolvedSiege && !state.inside && distance(state.player, BASE) <= 3.25;
    if (atBase && pressure > 0) {
      const blocked = generateWorld().blocked;
      const candidates = [
        { x: 9, y: 12 }, { x: 15, y: 12 }, { x: 12, y: 9 }, { x: 12, y: 15 },
        { x: 9, y: 9 }, { x: 15, y: 15 }, { x: 9, y: 15 }, { x: 15, y: 9 },
      ].filter((pos) => validPosition(pos.x, pos.y, blocked));
      const count = Math.min(candidates.length, 2 + Math.ceil(pressure / 2));
      for (let index = 0; index < count; index++) {
        const role = index === 0 && c.day % 6 === 0 ? "brute" :
          index === count - 1 && pressure >= 5 ? "screecher" :
          index % 3 === 0 ? "runner" : "walker";
        state.zombies.push({ ...candidates[index], id: `siege-${c.day}-${index}`,
          hp: role === "brute" ? 5 : 3, alive: true, role, attackCooldown: 0,
          siegeDay: c.day });
      }
      summary.siegeEncounter = true;
      summary.siege = pressure;
      c.logs.push(`Día ${c.day}: la horda llega a Can Lluc. Defiéndela para conservar las provisiones.`);
    } else {
      c.resources.food = Math.max(0, c.resources.food - pressure);
      c.resources.materials = Math.max(0, c.resources.materials - Math.max(0, Math.floor(pressure / 2) - c.facilities.storage));
      c.morale = Math.max(0, c.morale - pressure * 2);
      summary.siege = pressure;
      c.logs.push(`Día ${c.day}: asedio nocturno. ${pressure ? "La horda se llevó provisiones." : "Las barricadas aguantaron."}`);
    }
  }
  const livingEnemies = state.zombies.filter((z) => z.alive);
  const blocked = generateWorld().blocked;
  const corners = [
    { x: 4, y: 2 },
    { x: 24, y: 12 },
    { x: 12, y: 24 },
    { x: 2, y: 14 },
    { x: 20, y: 24 },
    { x: 17, y: 2 },
  ];
  const patrolBudget = Math.min(6, profile.patrols + Math.floor(c.day / 6));
  let spawned = 0;
  for (const [index, pos] of corners.entries()) {
    if (spawned >= patrolBudget || livingEnemies.length >= 24) break;
    if (profile.patrols === 3 && (index + c.day) % 2) continue;
    if (
      distance(pos, state.player) < 6 ||
      livingEnemies.some((z) => distance(z, pos) < 1.8) ||
      !validPosition(pos.x, pos.y, blocked)
    )
      continue;
    const role =
      c.day % 3 === 0 && index === 0
        ? "brute"
        : index === 2
          ? "screecher"
          : index === 4
            ? "lurker"
            : index % 3 === 0
              ? "runner"
              : "walker";
    spawned++;
    const enemy = {
      ...pos,
      id: `patrol-${c.day}-${index}`,
      hp: role === "brute" ? 5 : 3,
      alive: true,
      role,
      attackCooldown: 0,
    };
    livingEnemies.push(enemy);
    state.zombies.push(enemy);
  }
  const corpses = state.zombies.filter((z) => !z.alive).slice(-36);
  state.zombies = [...livingEnemies, ...corpses];
  state.player.hp = activeSurvivor(state).hp;
  c.logs = c.logs.slice(-40);
  return summary;
}

/** Pays the defense reward once, after every attacker in that siege is down. */
export function resolveSiege(state, day) {
  const attackers = state.zombies.filter((z) => z.siegeDay === day);
  if (!attackers.length || attackers.some((z) => z.alive) || attackers[0].resolved) return false;
  for (const attacker of attackers) attacker.resolved = true;
  const c = state.community;
  c.resources.food += 2;
  c.resources.materials += 1;
  c.morale = clamp(c.morale + 5, 0, 100);
  c.logs.push(`Día ${day}: Can Lluc resistió el asedio. La comunidad recuperó suministros.`);
  return true;
}

export function issueSupply(state, resource) {
  const item = {
    food: "ration",
    medicine: "bandage",
    materials: "scrap",
    fuel: "fuelcan",
  }[resource];
  const c = state.community;
  const s = activeSurvivor(state);
  if (!item || c.resources[resource] <= 0 || capacityFor(s.inventory, item) < 1)
    return false;
  c.resources[resource]--;
  s.inventory.items[item] = (s.inventory.items[item] ?? 0) + 1;
  syncEquipment(state);
  return true;
}

export function recoverTransmitter(state) {
  if (state.mode !== "campaign" || state.stage !== 0) return false;
  const inv = activeSurvivor(state).inventory;
  // Leave room for the canister needed at the next objective.
  const reserve = inv.items.fuelcan ? 0 : ITEMS.fuelcan.weight;
  const spare = inv.capacity - inventoryWeight(inv) - reserve;
  if (spare > 0) pickupEquipment(state, "ammo", Math.min(4, spare));
  state.stage = 1;
  return true;
}

export function refuelRadio(state) {
  if (state.mode !== "campaign" || state.stage !== 1) return false;
  const inv = activeSurvivor(state).inventory;
  if (!consumeItem(inv, "fuelcan")) return false;
  state.stage = 2;
  return true;
}

export function recruitGuide(state) {
  const c = state.community;
  if (
    (state.finale !== "signal" && c.day < 3) ||
    c.survivors.some((s) => s.id === "mar")
  )
    return false;
  if (c.resources.food < 2 || c.resources.medicine < 1) return false;
  c.resources.food -= 2;
  c.resources.medicine--;
  c.survivors.push({
    id: "mar",
    name: "Mar",
    skill: "Guardabosques",
    hp: 76,
    alive: true,
    fatigue: 23,
    bleed: 0,
    infection: 0,
    loaded: 0,
    xp: 30,
    inventory: inventoryFor("Guardabosques"),
  });
  c.morale = Math.min(100, c.morale + 7);
  c.logs.push(
    `Día ${c.day}: Mar se une al refugio. Conoce los senderos de la Serra.`,
  );
  return true;
}

export function resolveBroadcast(state, choice) {
  if (
    state.finale ||
    state.mode !== "campaign" ||
    state.stage < 2 ||
    !["signal", "silence"].includes(choice)
  )
    return null;
  const transmit = choice === "signal";
  state.finale = choice;
  state.stage = 3;
  state.campaign.act2 = "lead";
  const c = state.community;
  c.morale = clamp(c.morale + (transmit ? 12 : -5), 0, 100);
  if (transmit) c.resources.food += 2;
  else c.resources.materials += 2;
  const ending = transmit
    ? "Emitiste las coordenadas. Dos viajeros han dejado comida en Can Lluc. A medianoche, una segunda voz repite las coordenadas con tu voz."
    : "Cortaste la emisión y recuperaste piezas del equipo. Al apagarlo escuchaste tres golpes al otro lado de la puerta.";
  c.logs.push("El silencio · " + ending);
  return ending;
}

/** Resolves Act II's radio contact once, preserving the choice in v2 saves. */
export function resolveContact(state, choice) {
  if (
    state.mode !== "campaign" ||
    !state.finale ||
    state.campaign?.act2 !== "decision" ||
    !["invite", "observe"].includes(choice)
  )
    return null;
  const c = state.community;
  state.campaign.act2 = "complete";
  state.campaign.act2Choice = choice;
  let result;
  if (choice === "invite") {
    if (!c.survivors.some((survivor) => survivor.id === "nuria")) {
      c.survivors.push({
        id: "nuria",
        name: "Núria",
        skill: "Radiooperadora",
        hp: 78,
        alive: true,
        fatigue: 18,
        bleed: 0,
        infection: 0,
        xp: 20,
        loaded: 0,
        inventory: inventoryFor("Radiooperadora"),
      });
    }
    c.resources.food += 3;
    c.morale = clamp(c.morale + 10, 0, 100);
    result =
      "Núria llega a Can Lluc con tres raciones. Su grupo mantiene la estación y el contacto sigue abierto; la radiooperadora se une a la comunidad.";
  } else {
    c.resources.materials += 3;
    c.morale = clamp(c.morale - 3, 0, 100);
    result =
      "Mantienes al grupo lejos de Can Lluc. Intercambian un plano de rutas seguras por tres paquetes de material.";
  }
  c.logs.push(`Los supervivientes · ${result}`);
  state.campaign.act3 = "lead";
  return result;
}

/** Resolves the research finding once and carries its consequence into later acts. */
export function resolveResearch(state, choice) {
  if (
    state.mode !== "campaign" ||
    state.campaign?.act2 !== "complete" ||
    state.campaign?.act3 !== "decision" ||
    !["warn", "conceal"].includes(choice)
  )
    return null;
  const c = state.community;
  state.campaign.act3 = "complete";
  state.campaign.act4 = "lead";
  state.campaign.act3Choice = choice;
  let result;
  if (choice === "warn") {
    c.morale = clamp(c.morale + 8, 0, 100);
    c.logs.push(
      "La enfermedad · La comunidad difundió el patrón de mutación para que otros refugios puedan reconocerlo.",
    );
    result =
      "La advertencia llega a la Serra. La comunidad reconoce el patrón de los infectados y gana esperanza.";
  } else {
    c.resources.medicine += 2;
    c.logs.push(
      "La enfermedad · La comunidad ocultó los registros y conservó dos dosis para estudiar una posible respuesta.",
    );
    result =
      "Guardas los registros en Can Lluc. Dos dosis quedan disponibles para investigar una respuesta.";
  }
  return result;
}

/** Resolve the Act IV evacuation priority. The station branch reflects prior contact. */
export function resolveEvacuation(state, choice) {
  if (
    state.mode !== "campaign" ||
    state.campaign?.act3 !== "complete" ||
    state.campaign?.act4 !== "decision" ||
    !["station", "masia"].includes(choice)
  )
    return null;
  const c = state.community;
  state.campaign.act4 = "complete";
  state.campaign.act4Choice = choice;
  let result;
  if (choice === "station") {
    if (state.campaign.act2Choice === "observe") {
      state.campaign.stationEvacuated = true;
      c.resources.materials += 2;
      c.morale = clamp(c.morale + 7, 0, 100);
      result =
        "La ruta compartida permite sacar al grupo de la estación por el cauce. Llegan con material y se incorporan a la evacuación.";
    } else if (c.survivors.some((s) => s.id === "nuria" && s.alive)) {
      state.campaign.stationEvacuated = true;
      c.resources.food += 2;
      c.morale = clamp(c.morale + 6, 0, 100);
      result =
        "Núria coordina por radio la salida de su grupo. La estación queda vacía y llegan dos raciones para el trayecto.";
    } else {
      c.morale = clamp(c.morale + 2, 0, 100);
      result =
        "La frecuencia no responde. El equipo sale por la última ruta marcada, sin poder confirmar quién consiguió abandonar la estación.";
    }
  } else {
    c.resources.materials += 2;
    c.morale = clamp(
      c.morale + (c.survivors.filter((s) => s.alive).length >= 3 ? 5 : -2),
      0,
      100,
    );
    result =
      "Priorizas a quienes ya están en Can Lluc. Se desmonta el repetidor auxiliar para reforzar el vehículo de evacuación.";
  }
  c.logs.push(`La zona muerta · ${result}`);
  state.campaign.act5 = "lead";
  return result;
}

/** Resolve the campaign finale using living survivors and choices made in Acts II–IV. */
export function resolveLastDawn(state, choice) {
  if (
    state.mode !== "campaign" ||
    state.campaign?.act4 !== "complete" ||
    state.campaign?.act5 !== "decision" ||
    !["alarm", "isolate"].includes(choice)
  )
    return null;
  const c = state.community;
  const alive = c.survivors.filter((survivor) => survivor.alive).length;
  let support = 0;
  if (
    state.campaign.act2Choice === "invite" &&
    c.survivors.some((s) => s.id === "nuria" && s.alive)
  )
    support += 2;
  if (state.campaign.act2Choice === "observe") support += 1;
  if (state.campaign.act3Choice === "warn") support += 1;
  if (state.campaign.act3Choice === "conceal" && c.resources.medicine >= 2)
    support += 1;
  if (state.campaign.act4Choice === "station") support += 1;
  if (choice === "alarm" && state.finale === "signal") support += 1;
  if (choice === "isolate" && state.finale === "silence") support += 1;
  state.campaign.act5 = "complete";
  state.campaign.act5Choice = choice;
  let ending;
  let result;
  if (alive === 0) {
    ending = "buried_signal";
    result =
      "EL ÚLTIMO AMANECER · Can Lluc queda vacío. Nadie responde a la última emisión; bajo el repetidor, tres golpes contestan desde la tierra.";
  } else if (choice === "alarm") {
    if (alive >= 3 && support >= 3) {
      ending = "rescue";
      result = state.campaign.stationEvacuated
        ? "EL ÚLTIMO AMANECER · La señal atraviesa la niebla. La advertencia de la Serra y la ruta abierta guían a un convoy hasta el valle. Los supervivientes de Can Lluc y el grupo de la estación alcanzan juntos la salida."
        : "EL ÚLTIMO AMANECER · La señal atraviesa la niebla. La advertencia de la Serra guía a un convoy hasta el valle. Quienes siguen vivos en Can Lluc alcanzan la salida juntos.";
    } else if (alive >= 2) {
      ending = "costly_signal";
      result = state.campaign.stationEvacuated
        ? "EL ÚLTIMO AMANECER · La señal alcanza el exterior, pero el convoy llega tarde. Can Lluc y el grupo de la estación escapan por rutas separadas; la frecuencia vuelve a llamar con la voz de alguien que ya no está."
        : "EL ÚLTIMO AMANECER · La señal alcanza el exterior, pero el convoy llega tarde. Los supervivientes de Can Lluc escapan por separado; la frecuencia vuelve a llamar con la voz de alguien que ya no está.";
    } else {
      ending = "last_voice";
      result =
        "EL ÚLTIMO AMANECER · La última persona en pie envía las coordenadas y desaparece en la niebla. Al amanecer, alguien responde desde fuera del valle.";
    }
  } else if (alive >= 3 && support >= 2) {
    ending = "closed_valley";
    result =
      "EL ÚLTIMO AMANECER · El repetidor queda sellado y el valle, aislado. Can Lluc sobrevive al primer día sin señal. Bajo la tierra, un transmisor sigue encendido.";
  } else {
    ending = "buried_signal";
    result =
      "EL ÚLTIMO AMANECER · El valle queda en silencio, pero las pérdidas impiden asegurar la salida. Desde el repetidor enterrado, tres golpes responden a la oscuridad.";
  }
  state.campaign.ending = ending;
  c.logs.push(result);
  return { ending, result, survivorsEscaped: alive, support };
}

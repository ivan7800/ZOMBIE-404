import test from "node:test";
import assert from "node:assert/strict";
import {
  advanceCommunity,
  applyInjury,
  canBite,
  combatTarget,
  issueSupply,
  newRun,
  prepareRun,
  recruitGuide,
  refuelRadio,
  reload,
  resolveBroadcast,
} from "../src/core/expedition.mjs";
import {
  enterInterior,
  exitInterior,
  scavengeContainer,
} from "../src/core/interiors.mjs";
import { syncEquipment } from "../src/core/equipment.mjs";
import { depositBackpack, packResource } from "../src/core/logistics.mjs";
import { BASE, switchSurvivor, upgrade } from "../src/core/community.mjs";
import {
  BACKUP_KEY,
  CURRENT_KEY,
  SAVE_KEY,
  loadGame,
  saveGame,
} from "../src/core/save.mjs";
import { generateWorld } from "../src/core/world.mjs";
import {
  serviceVehicle,
  stepVehicle,
  toggleVehicle,
  transferCargo,
} from "../src/core/vehicle.mjs";

function memoryStorage() {
  const map = new Map();
  return {
    getItem: (key) => map.get(key) ?? null,
    setItem: (key, value) => map.set(key, value),
    removeItem: (key) => map.delete(key),
  };
}

test("line of sight cannot cut between walls or bite through a corner", () => {
  const source = { x: 2.8, y: 2.8 };
  const target = { x: 3.2, y: 3.2, alive: true };
  const blocks = new Set(["3,2", "2,3"]);
  assert.equal(canBite(source, target, blocks), false);
  assert.equal(combatTarget(source, [target], blocks, 6), undefined);
  assert.equal(combatTarget(source, [target], new Set(), 6), target);
});

test("reload moves rounds to the active survivor’s magazine and respects capacity", () => {
  const run = newRun("campaign", "survival");
  assert.equal(run.community.survivors[0].loaded, 5);
  assert.equal(run.player.ammo, 3);
  assert.equal(reload(run), false);
  switchSurvivor(run.community);
  assert.equal(reload(run), true);
  assert.equal(run.community.survivors[1].loaded, 4);
  assert.equal(run.player.ammo, 0);
  assert.equal(run.community.survivors[0].loaded, 5);
});

test("expedition records a fuel objective, deposits excess, improves the base and recovers the exact run", () => {
  const run = newRun("campaign", "survival");
  const storage = memoryStorage();
  assert.equal(switchSurvivor(run.community).id, "pau");
  assert.equal(issueSupply(run, "medicine"), true);
  run.stage = 1;
  assert.equal(refuelRadio(run), false);
  Object.assign(run.player, { x: 19, y: 7 });
  assert.equal(enterInterior(run, "taller"), true);
  Object.assign(run.inside, { x: 7.5, y: 4.5 });
  assert.equal(scavengeContainer(run, "bidon", packResource).amount, 2);
  Object.assign(run.inside, { x: 4.5, y: 5.5 });
  assert.equal(exitInterior(run), true);
  assert.equal(refuelRadio(run), true);
  assert.equal(run.stage, 2);
  Object.assign(run.player, BASE);
  assert.equal(depositBackpack(run.community).ok, true);
  syncEquipment(run);
  assert.equal(run.community.resources.fuel, 3);
  assert.equal(upgrade(run.community, "garden").ok, true);
  assert.equal(saveGame(run, storage), true);
  assert.deepEqual(prepareRun(loadGame(storage)), run);
});

test("save recovery retains the previous snapshot if the primary is corrupt", () => {
  const storage = memoryStorage();
  const run = newRun("campaign", "survival");
  assert.equal(saveGame(run, storage), true);
  run.time = 15;
  assert.equal(saveGame(run, storage), true);
  assert.ok(storage.getItem(BACKUP_KEY));
  storage.setItem(CURRENT_KEY, "{ truncated");
  assert.equal(loadGame(storage).time, 0);
});

test("legacy equipment, selected survivor and interior loot migrate together", () => {
  const storage = memoryStorage();
  const run = newRun("campaign", "survival");
  run.version = 1;
  delete run.equipmentVersion;
  run.player.ammo = 7;
  run.player.med = 2;
  run.community.survivors[0].loaded = undefined;
  run.stage = 2;
  enterInterior(run, "taller");
  run.interiors.taller.remaining.bidon = 1;
  storage.setItem(SAVE_KEY, JSON.stringify(run));
  const migrated = prepareRun(loadGame(storage));
  assert.equal(migrated.version, 2);
  assert.equal(migrated.player.ammo, 7);
  assert.equal(migrated.player.med, 2);
  assert.equal(migrated.stage, 2);
  assert.equal(migrated.inside.siteId, "taller");
  assert.equal(migrated.interiors.taller.remaining.bidon, 1);
});

test("bad nested values are normalized before rendering or chasing", () => {
  const run = newRun("campaign", "survival");
  run.interiors = {
    taller: {
      taken: ["fantasma"],
      remaining: [],
      zombies: [null, { x: "2", y: 3 }],
    },
  };
  run.inside = { siteId: "taller", x: 2.2, y: 2.2 };
  run.zombies.push(null);
  run.community.survivors[0].inventory = {
    capacity: "inf",
    items: { ammo: "broken", ration: -8 },
  };
  const restored = prepareRun(run);
  assert.equal(restored.inside, null);
  assert.deepEqual(restored.interiors.taller.zombies, []);
  assert.deepEqual(restored.interiors.taller.taken, []);
  assert.equal(restored.player.ammo, 0);
});

test("permadeath moves control to the base and cannot be undone by reloading", () => {
  const run = newRun("campaign", "survival");
  const storage = memoryStorage();
  saveGame(run, storage);
  enterInterior(run, "taller");
  assert.equal(applyInjury(run, 100).lost, "Aina");
  assert.equal(run.inside, null);
  assert.equal(run.community.active, 1);
  applyInjury(run, 100);
  applyInjury(run, 100);
  assert.equal(run.gameOver, true);
  assert.equal(saveGame(run, storage), true);
  assert.equal(prepareRun(loadGame(storage)).gameOver, true);
});

test("story difficulty evacuates a critically wounded survivor", () => {
  const run = newRun("campaign", "story");
  enterInterior(run, "taller");
  assert.equal(applyInjury(run, 100).incapacitated, true);
  assert.equal(run.community.active, 0);
  assert.equal(run.player.hp, 35);
  assert.equal(run.inside, null);
});

test("barricades reduce the persistent cost of an approaching siege", () => {
  const open = newRun("free", "survival");
  const fortified = newRun("free", "survival");
  for (const run of [open, fortified]) {
    run.community.day = 2;
    run.community.resources.food = 12;
  }
  assert.equal(upgrade(fortified.community, "barricades").ok, true);
  assert.ok(advanceCommunity(fortified).siege < advanceCommunity(open).siege);
  assert.ok(fortified.community.resources.food > open.community.resources.food);
  assert.equal(fortified.community.siege, 1);
});

test("car accelerates, uses fuel, collides and stops before crossing the map boundary", () => {
  const run = newRun("free", "survival");
  const car = run.vehicle;
  const blocks = generateWorld().blocked;
  Object.assign(run.player, { x: car.x, y: car.y });
  assert.match(toggleVehicle(run), /En el coche/);
  for (let i = 0; i < 30; i++) stepVehicle(car, 1, 0, 0.025, blocks);
  assert.ok(car.x > 14 && car.fuel < 62 && car.speed > 0.35);
  Object.assign(run.player, { x: car.x, y: car.y });
  assert.match(toggleVehicle(run), /Detén/);
  let hit = false;
  for (let i = 0; i < 180; i++) hit ||= stepVehicle(car, 1, 0, 0.025, blocks);
  assert.equal(hit, true);
  assert.ok(car.x < 25.5 && car.condition < 80);
});

test("vehicle trunk conserves goods and service consumes supplies exactly once", () => {
  const run = newRun("free", "survival");
  const survivor = run.community.survivors[0];
  assert.equal(
    transferCargo(run.vehicle, survivor.inventory, "ammo", true),
    true,
  );
  assert.equal(run.vehicle.trunk.items.ammo, 1);
  assert.equal(survivor.inventory.items.ammo, 2);
  assert.equal(
    transferCargo(run.vehicle, survivor.inventory, "ammo", false),
    true,
  );
  assert.equal(survivor.inventory.items.ammo, 3);
  assert.equal(issueSupply(run, "fuel"), true);
  assert.equal(serviceVehicle(run.vehicle, survivor, "fuel"), true);
  assert.equal(run.vehicle.fuel, 100);
  assert.equal(serviceVehicle(run.vehicle, survivor, "fuel"), false);
});

test("both radio choices persist different consequences and cannot be repeated", () => {
  const radio = newRun("campaign", "survival");
  radio.stage = 2;
  const silence = structuredClone(radio);
  assert.match(resolveBroadcast(radio, "signal"), /coordenadas/);
  assert.match(resolveBroadcast(silence, "silence"), /Cortaste/);
  assert.equal(radio.community.resources.food, 8);
  assert.equal(silence.community.resources.materials, 6);
  assert.equal(resolveBroadcast(radio, "signal"), null);
  assert.equal(prepareRun(silence).finale, "silence");
  assert.equal(recruitGuide(silence), false);
  assert.equal(recruitGuide(radio), true);
  assert.equal(recruitGuide(radio), false);
  assert.equal(radio.community.survivors[3].id, "mar");
});

test("adding facilities keeps levels, people and resources from a version 1 community", () => {
  const run = newRun("campaign", "survival");
  run.version = 1;
  run.community.facilities = {
    infirmary: 2,
    garden: 1,
    workshop: 0,
    barricades: 3,
  };
  run.community.resources.food = 17;
  const restored = prepareRun(run);
  assert.equal(restored.community.facilities.infirmary, 2);
  assert.equal(restored.community.facilities.barricades, 3);
  assert.equal(restored.community.facilities.lookout, 0);
  assert.equal(restored.community.resources.food, 17);
  assert.equal(restored.zombies.length, 8);
});

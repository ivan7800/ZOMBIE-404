import test from "node:test";
import assert from "node:assert/strict";
import { newRun, prepareRun, resolveBroadcast, resolveContact } from "../src/core/expedition.mjs";
import { enterInterior, scavengeContainer } from "../src/core/interiors.mjs";
import { packResource } from "../src/core/logistics.mjs";
import { loadGame, saveGame } from "../src/core/save.mjs";
import { generateWorld, locations } from "../src/core/world.mjs";
import { validPosition } from "../src/core/rules.mjs";

function unlockActTwo() {
  const state = newRun("campaign", "survival");
  state.stage = 2;
  assert.ok(resolveBroadcast(state, "signal"));
  return state;
}

test("Act II site is reachable and unlocks only after the Act I ending", () => {
  const state = newRun("campaign", "survival");
  const central = locations.find((location) => location.kind === "central");
  assert.ok(central);
  assert.equal(central.stage, 3);
  assert.equal(validPosition(central.x, central.y, generateWorld().blocked), true);
  assert.equal(state.campaign.act2, "locked");
  assert.equal(unlockActTwo().campaign.act2, "lead");
});

test("legacy v2 Act I saves open Act II without losing the radio ending", () => {
  const oldSave = unlockActTwo();
  delete oldSave.campaign;
  const restored = prepareRun(oldSave);
  assert.equal(restored.finale, "signal");
  assert.equal(restored.campaign.act2, "lead");
  assert.equal(enterInterior(restored, "central"), true);
});

test("central log persists and gates the Act II contact decision", () => {
  const state = unlockActTwo();
  assert.equal(resolveContact(state, "invite"), null);
  assert.equal(enterInterior(state, "central"), true);
  Object.assign(state.inside, { x: 6.5, y: 1.5 });
  const result = scavengeContainer(state, "registro", packResource);
  assert.equal(result.ok, true);
  assert.equal(state.campaign.act2, "lead");
  // The scene records the mission transition after the player reads this item.
  state.campaign.act2 = "decision";
  assert.ok(resolveContact(state, "invite"));
  assert.equal(state.campaign.act2, "complete");
  assert.equal(state.campaign.act2Choice, "invite");
  assert.equal(state.community.survivors.some((person) => person.id === "nuria"), true);
  assert.equal(state.community.resources.food, 11);
  assert.equal(resolveContact(state, "invite"), null);
});

test("cautious contact trades the invitation for materials and survives save/load", () => {
  const state = unlockActTwo();
  state.campaign.act2 = "decision";
  const result = resolveContact(state, "observe");
  assert.match(result, /rutas seguras/);
  assert.equal(state.campaign.act2Choice, "observe");
  assert.equal(state.community.survivors.length, 3);
  assert.equal(state.community.resources.materials, 7);
  const storage = new Map();
  const adapter = {
    getItem: (key) => storage.get(key) ?? null,
    setItem: (key, value) => storage.set(key, value),
  };
  assert.equal(saveGame(state, adapter), true);
  const loaded = prepareRun(loadGame(adapter));
  assert.equal(loaded.campaign.act2, "complete");
  assert.equal(loaded.campaign.act2Choice, "observe");
});

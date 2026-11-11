import test from "node:test";
import assert from "node:assert/strict";
import { beamEdge, outdoorLight } from "../src/core/atmosphere.mjs";
import { newRun, prepareRun } from "../src/core/expedition.mjs";
import { fieldEvents, resolveFieldEvent } from "../src/core/fieldEvents.mjs";
import { BASE } from "../src/core/community.mjs";
import { nextStep } from "../src/core/survival.mjs";
import { generateWorld } from "../src/core/world.mjs";

test("night is darker and hazier, while dusk has its own tint", () => {
  const day = outdoorLight(0);
  const dusk = outdoorLight(83);
  const night = outdoorLight(180);
  assert.ok(day.shade < dusk.shade && dusk.shade < night.shade);
  assert.ok(night.haze > day.haze);
  assert.notEqual(dusk.tint, day.tint);
  assert.deepEqual(outdoorLight(360), day);
});

test("the central ray stops before a blocked tile", () => {
  const origin = { x: 1.5, y: 2.5 };
  assert.ok(beamEdge(origin, 0, 4, 0.45, new Set())[6].x > 5);
  assert.ok(beamEdge(origin, 0, 4, 0.45, new Set(["3,2"]))[6].x < 3);
});

test("each field encounter is reachable and may be claimed once across reloads", () => {
  const { blocked } = generateWorld();
  for (const event of fieldEvents) {
    assert.ok(nextStep(BASE, event, blocked));
    const state = newRun("campaign", "survival");
    state.community.survivors[state.community.active].inventory.items = {};
    const result = resolveFieldEvent(state, event.id, true);
    assert.equal(result.amount, event.amount);
    assert.equal(result.noise, event.noise);
    const restored = prepareRun(JSON.parse(JSON.stringify(state)));
    assert.equal(resolveFieldEvent(restored, event.id, false), null);
  }
});

test("a full bag leaves the field encounter available and a quiet pickup creates no noise", () => {
  const state = newRun("campaign", "story");
  const inventory = state.community.survivors[state.community.active].inventory;
  inventory.items = { ammo: 20 };
  assert.equal(resolveFieldEvent(state, "furgon", true).amount, 0);
  assert.deepEqual(state.fieldEvents, []);
  inventory.items = {};
  const result = resolveFieldEvent(state, "furgon", false);
  assert.equal(result.amount, 2);
  assert.equal(result.noise, 0);
});

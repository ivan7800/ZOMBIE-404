import test from "node:test";
import assert from "node:assert/strict";
import {
  availableWeapons,
  chargeStock,
  combatSupplyReward,
  WEAPONS,
} from "../src/core/arsenal.mjs";
import {
  advanceCommunity,
  newRun,
  prepareRun,
} from "../src/core/expedition.mjs";

test("long-run combat resupplies ammunition every six kills and a bandage every twelve", () => {
  assert.deepEqual(combatSupplyReward(5), { ammo: 0, bandage: 0 });
  assert.deepEqual(combatSupplyReward(6), { ammo: 2, bandage: 0 });
  assert.deepEqual(combatSupplyReward(12), { ammo: 2, bandage: 1 });
  assert.deepEqual(combatSupplyReward(-1), { ammo: 0, bandage: 0 });
});

test("unlock rewards work through campaign milestones and free play kills", () => {
  const campaign = newRun("campaign", "survival");
  assert.deepEqual(availableWeapons(campaign), ["pistol"]);
  campaign.stage = 2;
  assert.deepEqual(availableWeapons(campaign), ["pistol", "shotgun"]);
  campaign.campaign.act2 = "complete";
  assert.deepEqual(availableWeapons(campaign), [
    "pistol",
    "shotgun",
    "carbine",
  ]);
  const free = newRun("free", "survival");
  free.kills = 10;
  assert.deepEqual(availableWeapons(free), ["pistol", "shotgun", "carbine"]);
  assert.ok(WEAPONS.shotgun.cost > WEAPONS.pistol.cost);
  assert.ok(WEAPONS.carbine.range > WEAPONS.pistol.range);
});

test("old saves gain the base kit, while reload preserves spent charges and unlocked weapons", () => {
  const state = newRun("campaign", "survival");
  delete state.arsenal;
  prepareRun(state);
  assert.deepEqual(state.arsenal, { selected: "pistol", spent: 0 });
  assert.equal(chargeStock(state), 1);
  state.arsenal.spent++;
  state.kills = 8;
  state.arsenal.selected = "shotgun";
  const reloaded = prepareRun(JSON.parse(JSON.stringify(state)));
  assert.equal(chargeStock(reloaded), 1);
  assert.deepEqual(reloaded.arsenal, { selected: "shotgun", spent: 1 });
  state.kills = 0;
  assert.equal(prepareRun(state).arsenal.selected, "pistol");
});

test("difficulty changes starting supplies and siege pressure", () => {
  const story = newRun("campaign", "story");
  const hard = newRun("campaign", "nightmare");
  assert.ok(story.player.ammo > hard.player.ammo);
  assert.ok(story.player.med > hard.player.med);
  story.community.day = hard.community.day = 2;
  assert.ok(advanceCommunity(story).siege < advanceCommunity(hard).siege);
});

test("interior infectado roles survive a save reload", () => {
  const state = newRun("campaign", "survival");
  const rooms = prepareRun(JSON.parse(JSON.stringify(state))).interiors;
  assert.equal(rooms.taller.zombies[0].role, "brute");
  assert.equal(rooms.central.zombies[0].role, "screecher");
  assert.equal(rooms.laboratorio.zombies[1].role, "lurker");
});

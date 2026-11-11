import test from "node:test";
import assert from "node:assert/strict";
import {
  newRun,
  prepareRun,
  resolveEvacuation,
  resolveLastDawn,
} from "../src/core/expedition.mjs";
import { saveGame, loadGame } from "../src/core/save.mjs";

function chapterFour() {
  const state = newRun("campaign", "story");
  state.finale = "signal";
  state.campaign = {
    act2: "complete", act2Choice: "observe",
    act3: "complete", act3Choice: "warn",
    act4: "decision", act4Choice: null,
    stationEvacuated: false,
    act5: "locked", act5Choice: null, ending: null,
  };
  return state;
}

test("v2 saves unlock acts IV and V from the preceding completed act", () => {
  const state = chapterFour();
  state.campaign.act4 = "locked";
  const restored = prepareRun(state);
  assert.equal(restored.campaign.act4, "lead");
  assert.equal(restored.campaign.act5, "locked");
  restored.campaign.act4 = "complete";
  assert.equal(prepareRun(restored).campaign.act5, "lead");
});

test("Act IV evacuation choice reflects the remote-contact branch and resolves once", () => {
  const state = chapterFour();
  const before = state.community.resources.materials;
  const result = resolveEvacuation(state, "station");
  assert.match(result, /ruta compartida/);
  assert.equal(state.community.resources.materials, before + 2);
  assert.equal(state.campaign.act4, "complete");
  assert.equal(state.campaign.act5, "lead");
  assert.equal(state.campaign.stationEvacuated, true);
  assert.equal(resolveEvacuation(state, "station"), null);
});

test("Act V combines allies, Act I–IV choices and living survivors into a saved ending", () => {
  const state = chapterFour();
  state.campaign.act4 = "complete";
  state.campaign.act4Choice = "station";
  state.campaign.stationEvacuated = true;
  state.campaign.act5 = "decision";
  state.campaign.act2Choice = "invite";
  state.community.survivors.push({
    ...structuredClone(state.community.survivors[2]),
    id: "nuria",
    name: "Núria",
  });
  const finale = resolveLastDawn(state, "alarm");
  assert.equal(finale.ending, "rescue");
  assert.equal(finale.survivorsEscaped, 4);
  assert.match(finale.result, /grupo de la estación/);
  assert.equal(state.campaign.act5, "complete");
  assert.equal(resolveLastDawn(state, "alarm"), null);
  const storageMap = new Map();
  const storage = {
    getItem: (key) => storageMap.get(key) ?? null,
    setItem: (key, value) => storageMap.set(key, value),
  };
  assert.equal(saveGame(state, storage), true);
  assert.equal(prepareRun(loadGame(storage)).campaign.ending, "rescue");
});

test("losses can force the isolation ending to remain uncertain", () => {
  const state = chapterFour();
  state.community.survivors[0].alive = false;
  state.community.survivors[1].alive = false;
  state.campaign.act4 = "complete";
  state.campaign.act4Choice = "masia";
  state.campaign.act5 = "decision";
  state.campaign.act2Choice = "observe";
  state.campaign.act3Choice = "conceal";
  const finale = resolveLastDawn(state, "isolate");
  assert.equal(finale.ending, "buried_signal");
  assert.equal(finale.survivorsEscaped, 1);
});

test("a supported group can isolate the valley and preserve the ending id", () => {
  const state = chapterFour();
  state.campaign.act4 = "complete";
  state.campaign.act4Choice = "masia";
  state.campaign.act5 = "decision";
  const finale = resolveLastDawn(state, "isolate");
  assert.equal(finale.ending, "closed_valley");
  assert.equal(state.campaign.ending, "closed_valley");
});

test("the ending handles a fully lost community without inventing an escapee", () => {
  const state = chapterFour();
  state.community.survivors.forEach((survivor) => { survivor.alive = false; });
  state.campaign.act4 = "complete";
  state.campaign.act5 = "decision";
  const finale = resolveLastDawn(state, "alarm");
  assert.equal(finale.ending, "buried_signal");
  assert.equal(finale.survivorsEscaped, 0);
  assert.match(finale.result, /Can Lluc queda vacío/);
});

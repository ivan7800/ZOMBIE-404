import test from 'node:test';import assert from 'node:assert/strict';
import {PALETTES,SOUND_EVENTS,soundRecipe,interiorPalette,lightStrength,flicker} from '../src/core/atmosphere.mjs';
test('all interior locations have a consistent palette',()=>{for(const id of ['farmacia','mercado','taller','central','laboratorio','repetidor','evacuacion']){const p=interiorPalette(id);for(const key of ['floor','alternate','wall','fixture','accent'])assert.ok(Number.isInteger(p[key]));}});
test('palette fallbacks are safe',()=>assert.deepEqual(interiorPalette('unknown'),PALETTES.taller));
test('audio names are constrained and synthesis values valid',()=>{assert.equal(soundRecipe('__proto__'),null);assert.equal(soundRecipe('undefined'),null);for(const [id,p] of Object.entries(SOUND_EVENTS)){assert.equal(soundRecipe(id),p);assert.ok(p.start>0&&p.end>0&&p.duration>0&&p.duration<1&&p.volume>0&&p.volume<.3);}});
test('light remains bounded over entire simulation day',()=>{for(let t=-720;t<=720;t+=7){assert.ok(lightStrength(t)>=.16&&lightStrength(t)<=.75);assert.ok(flicker(t,3)>=.7&&flicker(t,3)<=1);}});
test('sound recipes and palettes remain immutable',()=>{assert.ok(Object.isFrozen(PALETTES.farmacia));assert.ok(Object.isFrozen(SOUND_EVENTS.shot));});

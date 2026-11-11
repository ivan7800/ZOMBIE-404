import test from 'node:test';import assert from 'node:assert/strict';import {visualProps,nightIntensity} from '../src/core/visuals.mjs';
test('visual props deterministic',()=>assert.deepEqual(visualProps(),visualProps()));
test('visual props remain inside map',()=>assert.ok(visualProps().every(p=>p.x>=0&&p.y>=0&&p.x<26&&p.y<26)));
test('visual props avoid base and objectives',()=>assert.ok(visualProps().every(p=>!(p.x>=9&&p.x<=15&&p.y>=9&&p.y<=15)&&![[5,6],[19,7],[20,21],[6,20],[21,4],[17,17],[21,16]].some(([x,y])=>Math.abs(p.x-x)<=2&&Math.abs(p.y-y)<=2))));
test('night intensity bounded',()=>assert.ok([-100,0,10,180,360,10000].every(t=>nightIntensity(t)>=0&&nightIntensity(t)<=1)));
test('night intensity cycles',()=>assert.equal(nightIntensity(0),nightIntensity(360)));

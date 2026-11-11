import test from 'node:test';import assert from 'node:assert/strict';
import {inventoryFor,inventoryWeight,addItem,consumeItem,hasLineOfSight,nextStep,ensureInventories} from '../src/core/survival.mjs';
import {newCommunity} from '../src/core/community.mjs';
test('individual inventories and capacity',()=>{const a=inventoryFor('Sanitaria'),b=inventoryFor('Exploradora');assert.ok(b.capacity>a.capacity);assert.equal(inventoryWeight(a),7);assert.equal(addItem(a,'scrap',4),false);assert.equal(addItem(a,'scrap',2),true);assert.equal(consumeItem(a,'scrap'),true);assert.equal(consumeItem(a,'scrap',9),false);});
test('migrate legacy community without overwriting existing inventory',()=>{const c=newCommunity();ensureInventories(c);c.survivors[0].inventory.items.ammo=0;ensureInventories(c);assert.equal(c.survivors[0].inventory.items.ammo,0);assert.equal(c.survivors.length,3);});
test('line of sight respects buildings',()=>{assert.equal(hasLineOfSight({x:1,y:1},{x:4,y:1},new Set(['2,1'])),false);assert.equal(hasLineOfSight({x:1,y:1},{x:4,y:1},new Set()),true);});
test('pathfinding routes around obstacles',()=>{const blocked=new Set(['2,1']);const step=nextStep({x:1.5,y:1.5},{x:3.5,y:1.5},blocked,6);assert.ok(step);assert.notDeepEqual(step,{x:2.5,y:1.5});assert.equal(nextStep({x:1.5,y:1.5},{x:3.5,y:1.5},new Set(['2,1','1,0','1,2','0,1']),6),null);});

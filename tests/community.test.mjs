import test from 'node:test';import assert from 'node:assert/strict';import {newCommunity,validCommunity,switchSurvivor,upgrade,scavenge,nextDay,hurtActive} from '../src/core/community.mjs';
test('new community is valid',()=>assert.equal(validCommunity(newCommunity()),true));
test('survivors can switch',()=>{const c=newCommunity();assert.equal(switchSurvivor(c).name,'Pau');assert.equal(c.active,1);});
test('base upgrade spends materials and cannot duplicate',()=>{const c=newCommunity();assert.equal(upgrade(c,'infirmary').ok,true);assert.equal(c.resources.materials,1);assert.equal(upgrade(c,'infirmary').ok,false);});
test('scavenge only once',()=>{const c=newCommunity();assert.equal(scavenge(c,'mercado').ok,true);assert.equal(c.resources.food,9);assert.equal(scavenge(c,'mercado').ok,false);});
test('day progression consumes resources',()=>{const c=newCommunity();nextDay(c);assert.equal(c.day,2);assert.equal(c.resources.food,3);});
test('death switches to another survivor',()=>{const c=newCommunity();hurtActive(c,100);assert.equal(c.survivors[0].alive,false);assert.equal(c.active,1);});
test('community roundtrip validates',()=>{const c=JSON.parse(JSON.stringify(newCommunity()));assert.equal(validCommunity(c),true);c.resources.food=-1;assert.equal(validCommunity(c),false);});

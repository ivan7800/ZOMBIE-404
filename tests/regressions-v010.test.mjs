import test from 'node:test';
import assert from 'node:assert/strict';
import {newCommunity} from '../src/core/community.mjs';
import {newInteriorState,ensureInteriorState,enterInterior,scavengeContainer} from '../src/core/interiors.mjs';
import {packResource,depositBackpack,weight} from '../src/core/logistics.mjs';
import {hasLineOfSight,ensureInventories} from '../src/core/survival.mjs';
import {bootstrapEquipment} from '../src/core/equipment.mjs';
import {saveGame,loadGame} from '../src/core/save.mjs';
const fixture=()=>{const state={version:1,player:{x:12,y:12,hp:100,ammo:8,med:1,stamina:100},zombies:[],loot:[],stage:0,kills:0,time:0,community:newCommunity(),inside:null,interiors:newInteriorState()};ensureInventories(state.community);return state;};
test('partial loot stays in location and can be recovered on return',()=>{
 const s=fixture();enterInterior(s,'mercado');s.inside.x=2.5;s.inside.y=1.5;
 const inv=s.community.survivors[s.community.active].inventory;
 inv.capacity=weight(inv)+2; // exactly one ration can be carried
 let result=scavengeContainer(s,'despensa',packResource);
 assert.equal(result.ok,true);assert.equal(result.amount,1);assert.equal(result.remaining,2);
 assert.deepEqual(s.interiors.mercado.taken,[]);
 assert.equal(scavengeContainer(s,'despensa',packResource).ok,false);
 const deposited=depositBackpack(s.community);assert.equal(deposited.ok,true);
 result=scavengeContainer(s,'despensa',packResource);
 assert.equal(result.amount,2);assert.equal(result.remaining,0);
 assert.deepEqual(s.interiors.mercado.taken,['despensa']);
 assert.equal(scavengeContainer(s,'despensa',packResource).ok,false);
});
test('partially looted containers survive save/load, including migration',()=>{
 const s=fixture();enterInterior(s,'mercado');s.inside.x=2.5;s.inside.y=1.5;
 const inv=s.community.survivors[s.community.active].inventory;inv.capacity=weight(inv)+2;
 scavengeContainer(s,'despensa',packResource);
 const db=new Map();const storage={getItem:k=>db.get(k)??null,setItem:(k,v)=>db.set(k,v)};
 assert.equal(saveGame(s,storage),true);
 const restored=loadGame(storage);ensureInteriorState(restored);
 assert.equal(restored.interiors.mercado.remaining.despensa,2);
 assert.equal(restored.interiors.mercado.taken.length,0);
 // v0.9 lacked `remaining`; migration must not mark unlooted containers empty
 delete restored.interiors.mercado.remaining;
 ensureInteriorState(restored);
 assert.deepEqual(restored.interiors.mercado.remaining,{});
});
test('invalid loot callbacks cannot destroy a container',()=>{
 const s=fixture();enterInterior(s,'mercado');s.inside.x=2.5;s.inside.y=1.5;
 const result=scavengeContainer(s,'despensa',()=>({ok:true,amount:99}));
 assert.equal(result.ok,false);assert.deepEqual(s.interiors.mercado.taken,[]);
});
test('firing line of sight rejects intervening walls',()=>{
 const blocks=new Set(['3,2']);
 assert.equal(hasLineOfSight({x:1.5,y:2.5},{x:4.5,y:2.5},blocks),false);
 assert.equal(hasLineOfSight({x:1.5,y:1.5},{x:2.5,y:1.5},blocks),true);
});
test('migrated gear never exceeds backpack capacity',()=>{
 const s=fixture();s.player.ammo=20;s.player.med=5;
 const inv=s.community.survivors[0].inventory;inv.items.scrap=5;
 bootstrapEquipment(s);
 assert.ok(weight(inv)<=inv.capacity);
 assert.equal(s.player.ammo,inv.items.ammo);
 assert.equal(s.player.med,inv.items.bandage);
});

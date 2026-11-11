// Canonical, per-survivor equipment. Legacy player.ammo/med remain read-only mirrors
// for compatible saves; all spending and pickups use the active inventory.
import {ensureInventories} from './survival.mjs';
import {capacityFor} from './logistics.mjs';
const TYPES={ammo:'ammo',medicine:'bandage'};
export function activeInventory(state){return state.community.survivors[state.community.active].inventory;}
export function bootstrapEquipment(state){
  ensureInventories(state.community);
  if(state.equipmentVersion!==1){
    const inv=activeInventory(state);
    // Preserve supplies in v0.8 player fields, without adding to existing starter inventory.
    // Carry over the old counters without exceeding the remaining backpack weight.
    // Remove the old starter amounts first so old saves never duplicate equipment.
    inv.items.ammo=0;inv.items.bandage=0;
    const oldAmmo=Math.min(20,Math.max(0,Math.floor(state.player.ammo??4)));
    const oldBandage=Math.min(5,Math.max(0,Math.floor(state.player.med??1)));
    inv.items.ammo=Math.min(oldAmmo,capacityFor(inv,'ammo'));
    inv.items.bandage=Math.min(oldBandage,capacityFor(inv,'bandage'));
    state.equipmentVersion=1;
  }
  syncEquipment(state);
}
export function syncEquipment(state){
 const inv=activeInventory(state);
 state.player.ammo=inv.items.ammo??0;
 state.player.med=inv.items.bandage??0;
 return inv;
}
export function consumeEquipment(state,item){
 if(item!=='ammo'&&item!=='bandage')return false;
 const inv=activeInventory(state);
 if(!Number.isInteger(inv.items[item])||inv.items[item]<=0)return false;
 inv.items[item]--;
 syncEquipment(state);
 return true;
}
export function pickupEquipment(state,kind,qty){
 const item=TYPES[kind];if(!item||!Number.isInteger(qty)||qty<=0)return 0;
 const inv=activeInventory(state);const count=Math.min(qty,capacityFor(inv,item));
 if(count>0)inv.items[item]=(inv.items[item]??0)+count;
 syncEquipment(state);
 return count;
}

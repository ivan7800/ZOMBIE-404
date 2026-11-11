// Deterministic interior layouts and persistent containers. No browser dependencies.
export const INTERIOR_W = 9;
export const INTERIOR_H = 7;
export const INTERIOR_DEFS = Object.freeze({
  farmacia: {name:'Farmacia de la plaça', door:{x:4,y:6}, obstacles:[[2,2],[2,3],[6,2],[6,3]], supplies:[{id:'botiquin',x:2,y:1,kind:'medicine',amount:2},{id:'caja',x:6,y:1,kind:'food',amount:1}]},
  mercado: {name:'Colmado abandonado', door:{x:4,y:6}, obstacles:[[2,2],[3,2],[6,2],[6,3]], supplies:[{id:'despensa',x:2,y:1,kind:'food',amount:3},{id:'surtidor',x:7,y:4,kind:'fuel',amount:1}]},
  taller: {name:'Taller mecánico', door:{x:4,y:6}, obstacles:[[2,2],[2,3],[6,2],[6,3]], supplies:[{id:'caja',x:2,y:1,kind:'materials',amount:3},{id:'bidon',x:7,y:4,kind:'fuel',amount:2}]},
  central: {name:'Central telefónica de la Serra', door:{x:4,y:6}, obstacles:[[2,2],[2,3],[6,2],[6,3]], supplies:[{id:'registro',x:6,y:1,kind:'materials',amount:1},{id:'baterias',x:2,y:1,kind:'materials',amount:2},{id:'botiquin',x:7,y:4,kind:'medicine',amount:1}]},
  laboratorio: {name:'Centro de investigación del Vallès', door:{x:4,y:6}, obstacles:[[2,2],[2,3],[6,2],[6,3]], supplies:[{id:'protocolo',x:2,y:1,kind:'materials',amount:1},{id:'muestras',x:6,y:1,kind:'medicine',amount:1},{id:'botiquin',x:7,y:4,kind:'medicine',amount:1}]},
  repetidor: {name:'Caseta del repetidor de la Serra', door:{x:4,y:6}, obstacles:[[2,2],[2,3],[6,2],[6,3]], supplies:[{id:'mapa_cables',x:2,y:1,kind:'materials',amount:1},{id:'fusibles',x:6,y:1,kind:'materials',amount:1},{id:'bengalas',x:7,y:4,kind:'medicine',amount:1}]},
  evacuacion: {name:'Puesto de evacuación del valle', door:{x:4,y:6}, obstacles:[[2,2],[2,3],[6,2],[6,3]], supplies:[{id:'manifiesto',x:2,y:1,kind:'materials',amount:1},{id:'baterias_radio',x:6,y:1,kind:'materials',amount:1},{id:'botiquin',x:7,y:4,kind:'medicine',amount:1}]}
});
export function getInterior(id){return Object.hasOwn(INTERIOR_DEFS,id)?INTERIOR_DEFS[id]:null;}
export function interiorBlocked(id){const d=getInterior(id);if(!d)return new Set();const blocked=new Set(d.obstacles.map(([x,y])=>`${x},${y}`));for(let x=0;x<INTERIOR_W;x++){blocked.add(`${x},0`);blocked.add(`${x},${INTERIOR_H-1}`);}for(let y=0;y<INTERIOR_H;y++){blocked.add(`0,${y}`);blocked.add(`${INTERIOR_W-1},${y}`);}blocked.delete(`${d.door.x},${d.door.y}`);return blocked;}
export function newInteriorState(){return Object.fromEntries(Object.entries(INTERIOR_DEFS).map(([id,d])=>[id,{taken:[],remaining:{},zombies:[{id:`${id}-z1`,x:6.5,y:4.5,hp:id==='taller'?5:3,role:id==='taller'?'brute':id==='central'?'screecher':'walker',alive:true,attackCooldown:0},{id:`${id}-z2`,x:3.5,y:3.5,hp:3,role:['laboratorio','repetidor'].includes(id)?'lurker':id==='evacuacion'?'runner':'walker',alive:true,attackCooldown:0}]}]));}
export function ensureInteriorState(s){if(!s.interiors||typeof s.interiors!=='object')s.interiors=newInteriorState();for(const [id,d] of Object.entries(newInteriorState())){const existing=s.interiors[id];if(!existing||!Array.isArray(existing.taken)||!Array.isArray(existing.zombies))s.interiors[id]=d;else {
    existing.taken=[...new Set(existing.taken.filter(key=>getInterior(id).supplies.some(x=>x.id===key)))];
    // v0.9 saves did not have partial-loot bookkeeping.
    if(!existing.remaining||typeof existing.remaining!=='object'||Array.isArray(existing.remaining))existing.remaining={};
    for(const item of getInterior(id).supplies){
      if(existing.taken.includes(item.id)){delete existing.remaining[item.id];continue;}
      const n=existing.remaining[item.id];
      if(n!==undefined)existing.remaining[item.id]=Number.isInteger(n)?Math.max(1,Math.min(item.amount,n)):item.amount;
    }
  }}if(!s.inside||!getInterior(s.inside.siteId)||!Number.isFinite(s.inside.x)||!Number.isFinite(s.inside.y)||s.inside.x<.5||s.inside.y<.5||s.inside.x>INTERIOR_W-.5||s.inside.y>INTERIOR_H-.5)s.inside=null;return s;}
export function canEnterInterior(s,siteId,distance){return !s.inside&&getInterior(siteId)!==null&&distance<2;}
export function enterInterior(s,siteId){const def=getInterior(siteId);if(!def||s.inside)return false;ensureInteriorState(s);s.inside={siteId,x:def.door.x+.5,y:def.door.y-.5};return true;}
export function canExitInterior(s){return !!s.inside&&Math.hypot(s.inside.x-4.5,s.inside.y-5.5)<1.3;}
export function exitInterior(s){if(!canExitInterior(s))return false;s.inside=null;return true;}
/** @param {any} s @param {string} id @param {null | ((community:any, resource:string, amount:number) => any)} [pack] */
export function scavengeContainer(s,id,pack=null){if(!s.inside)return {ok:false,message:'No estás dentro'};ensureInteriorState(s);const room=getInterior(s.inside.siteId);const container=room.supplies.find(c=>c.id===id);if(!container)return {ok:false,message:'Objeto desconocido'};if(s.interiors[s.inside.siteId].taken.includes(id))return {ok:false,message:'Ya está saqueado'};if(Math.hypot(s.inside.x-(container.x+.5),s.inside.y-(container.y+.5))>=1.6)return {ok:false,message:'Demasiado lejos'};const entry=s.interiors[s.inside.siteId];
  const available=entry.remaining[id]??container.amount;
  const result=pack?pack(s.community,container.kind,available):{ok:true,amount:available,message:`+${available} ${container.kind}`};
  if(!result.ok)return result;
  // Treat malformed callbacks as failure rather than deleting supplies.
  if(!Number.isInteger(result.amount)||result.amount<1||result.amount>available)return {ok:false,message:'Botín no válido'};
  if(!pack)s.community.resources[container.kind]+=result.amount;
  const rest=available-result.amount;
  if(rest>0)entry.remaining[id]=rest;
  else {delete entry.remaining[id];entry.taken.push(id);}
  return {...result,remaining:rest,kind:container.kind};}

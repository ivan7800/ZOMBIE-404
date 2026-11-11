// All functions deterministic and independent from Phaser/Web Audio.
export const PALETTES = Object.freeze({
  farmacia: Object.freeze({floor:0x53615b,alternate:0x46554e,wall:0x829087,fixture:0x71968b,accent:0x9fd4b5}),
  mercado: Object.freeze({floor:0x645844,alternate:0x5a503e,wall:0x93846a,fixture:0x8e7047,accent:0xe5c17b}),
  taller: Object.freeze({floor:0x494b4c,alternate:0x3b4042,wall:0x737a7b,fixture:0x676d72,accent:0xd6a76b}),
  central: Object.freeze({floor:0x3e4e4b,alternate:0x344340,wall:0x6f8179,fixture:0x536d68,accent:0x8ed0bd}),
  laboratorio: Object.freeze({floor:0x4b4846,alternate:0x393d3c,wall:0x777a73,fixture:0x6f7772,accent:0xb7c87d}),
  repetidor: Object.freeze({floor:0x45463f,alternate:0x383b35,wall:0x777263,fixture:0x6d674e,accent:0xd7a360}),
  evacuacion: Object.freeze({floor:0x4c4944,alternate:0x3b3e3a,wall:0x77766c,fixture:0x686c64,accent:0xd88969})
});
export const SOUND_EVENTS = Object.freeze({
 shot:Object.freeze({wave:'sawtooth',start:180,end:48,duration:.14,volume:.16}),
 shotgun:Object.freeze({wave:'triangle',start:132,end:34,duration:.24,volume:.22}),
 carbine:Object.freeze({wave:'square',start:235,end:67,duration:.13,volume:.13}),
 blast:Object.freeze({wave:'triangle',start:95,end:30,duration:.44,volume:.23}),
 scream:Object.freeze({wave:'sawtooth',start:690,end:120,duration:.48,volume:.065}),
 melee:Object.freeze({wave:'triangle',start:110,end:48,duration:.12,volume:.12}),
 bite:Object.freeze({wave:'sawtooth',start:75,end:35,duration:.25,volume:.11}),
 loot:Object.freeze({wave:'sine',start:390,end:660,duration:.15,volume:.075}),
 door:Object.freeze({wave:'triangle',start:125,end:69,duration:.25,volume:.09}),
 heal:Object.freeze({wave:'sine',start:310,end:510,duration:.3,volume:.075}),
 switch:Object.freeze({wave:'sine',start:420,end:580,duration:.12,volume:.06}),
 step:Object.freeze({wave:'triangle',start:72,end:45,duration:.075,volume:.022}),
 danger:Object.freeze({wave:'sawtooth',start:98,end:51,duration:.38,volume:.07})
});
export function soundRecipe(name){return Object.hasOwn(SOUND_EVENTS,name)?SOUND_EVENTS[name]:null;}
export function interiorPalette(id){return PALETTES[id]??PALETTES.taller;}
export function lightStrength(time){const n=((time%360)+360)%360/360;return Math.max(.16,Math.min(.75,.39+.27*Math.cos(n*Math.PI*2)));}
export function flicker(time,seed=0){return .7+.3*(.5+.5*Math.sin(time*8.1+seed*19)*Math.sin(time*2.7+seed));}

// Dawn and dusk use the same sun cycle as enemy visibility and audio.
export function outdoorLight(time) {
  const phase = ((time % 360) + 360) % 360 / 360;
  const darkness = Math.max(0, Math.min(1, (0.54 - lightStrength(time)) / 0.4));
  const horizon = Math.max(0, 1 - Math.min(Math.abs(phase - 0.23), Math.abs(phase - 0.77)) / 0.13);
  return {
    tint: `rgb(${Math.round(8 + 49 * horizon)}, ${Math.round(27 + 4 * horizon)}, ${Math.round(49 - 9 * horizon)})`,
    shade: 0.08 + darkness * 0.52 + horizon * 0.08,
    haze: darkness * 0.15,
  };
}

export function beamEdge(origin, heading, reach, spread, blocked) {
  const edge = [];
  for (let ray = 0; ray <= 12; ray++) {
    const angle = heading + spread * (ray / 6 - 1);
    const dx = Math.cos(angle);
    const dy = Math.sin(angle);
    let end = origin;
    for (let radius = 0.24; radius <= reach; radius += 0.24) {
      const point = { x: origin.x + dx * radius, y: origin.y + dy * radius };
      if (blocked.has(`${Math.floor(point.x)},${Math.floor(point.y)}`)) break;
      end = point;
    }
    edge.push(end);
  }
  return edge;
}

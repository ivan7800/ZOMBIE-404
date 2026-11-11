// Stable visual-only props; never mutate collision or saved gameplay state.
export function visualProps(size=26){
 const result=[];const taken=new Set();
 for(let y=2;y<size-2;y++)for(let x=2;x<size-2;x++){
  const n=(x*92821+y*68917+x*y*317)%101;
  const road=Math.abs(x-12)<=1||Math.abs(y-12)<=1||(y===6&&x>2&&x<23);
  const reserved=(x>=9&&x<=15&&y>=9&&y<=15)||[[5,6],[19,7],[20,21],[6,20],[21,4],[17,17],[21,16]].some(([a,b])=>Math.abs(x-a)<=2&&Math.abs(y-b)<=2);
  if(reserved||taken.has(`${x},${y}`))continue;
  if(road&&n===4){result.push({x,y,kind:'car',variant:(x+y)%4});taken.add(`${x},${y}`);}
  else if(road&&n===15)result.push({x,y,kind:'barrier',variant:0});
  else if(road&&n===26)result.push({x,y,kind:'lamp',variant:0});
  else if(!road&&n<9)result.push({x,y,kind:'rubble',variant:n});
 }
 return result;
}
export function nightIntensity(seconds){const phase=((seconds%360)+360)%360/360;return Math.max(0,Math.min(1,(Math.cos(phase*2*Math.PI)+.15)/1.15));}

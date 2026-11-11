(function(){const I=document.createElement("link").relList;if(I&&I.supports&&I.supports("modulepreload"))return;for(const W of document.querySelectorAll('link[rel="modulepreload"]'))V(W);new MutationObserver(W=>{for(const K of W)if(K.type==="childList")for(const p of K.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&V(p)}).observe(document,{childList:!0,subtree:!0});function Y(W){const K={};return W.integrity&&(K.integrity=W.integrity),W.referrerPolicy&&(K.referrerPolicy=W.referrerPolicy),W.crossOrigin==="use-credentials"?K.credentials="include":W.crossOrigin==="anonymous"?K.credentials="omit":K.credentials="same-origin",K}function V(W){if(W.ep)return;W.ep=!0;const K=Y(W);fetch(W.href,K)}})();function zi(G){return G&&G.__esModule&&Object.prototype.hasOwnProperty.call(G,"default")?G.default:G}var Ee={exports:{}},bi=Ee.exports,oi;function Xi(){return oi||(oi=1,(function(G,I){(function(V,W){G.exports=W()})(bi,()=>(()=>{var Y={50792:(p=>{var y=Object.prototype.hasOwnProperty,t="~";function l(){}Object.create&&(l.prototype=Object.create(null),new l().__proto__||(t=!1));function c(e,s,a){this.fn=e,this.context=s,this.once=a||!1}function o(e,s,a,i,h){if(typeof a!="function")throw new TypeError("The listener must be a function");var u=new c(a,i||e,h),d=t?t+s:s;return e._events[d]?e._events[d].fn?e._events[d]=[e._events[d],u]:e._events[d].push(u):(e._events[d]=u,e._eventsCount++),e}function r(e,s){--e._eventsCount===0?e._events=new l:delete e._events[s]}function n(){this._events=new l,this._eventsCount=0}n.prototype.eventNames=function(){var s=[],a,i;if(this._eventsCount===0)return s;for(i in a=this._events)y.call(a,i)&&s.push(t?i.slice(1):i);return Object.getOwnPropertySymbols?s.concat(Object.getOwnPropertySymbols(a)):s},n.prototype.listeners=function(s){var a=t?t+s:s,i=this._events[a];if(!i)return[];if(i.fn)return[i.fn];for(var h=0,u=i.length,d=new Array(u);h<u;h++)d[h]=i[h].fn;return d},n.prototype.listenerCount=function(s){var a=t?t+s:s,i=this._events[a];return i?i.fn?1:i.length:0},n.prototype.emit=function(s,a,i,h,u,d){var f=t?t+s:s;if(!this._events[f])return!1;var v=this._events[f],m=arguments.length,x,g;if(v.fn){switch(v.once&&this.removeListener(s,v.fn,void 0,!0),m){case 1:return v.fn.call(v.context),!0;case 2:return v.fn.call(v.context,a),!0;case 3:return v.fn.call(v.context,a,i),!0;case 4:return v.fn.call(v.context,a,i,h),!0;case 5:return v.fn.call(v.context,a,i,h,u),!0;case 6:return v.fn.call(v.context,a,i,h,u,d),!0}for(g=1,x=new Array(m-1);g<m;g++)x[g-1]=arguments[g];v.fn.apply(v.context,x)}else{var T=v.length,S;for(g=0;g<T;g++)switch(v[g].once&&this.removeListener(s,v[g].fn,void 0,!0),m){case 1:v[g].fn.call(v[g].context);break;case 2:v[g].fn.call(v[g].context,a);break;case 3:v[g].fn.call(v[g].context,a,i);break;case 4:v[g].fn.call(v[g].context,a,i,h);break;default:if(!x)for(S=1,x=new Array(m-1);S<m;S++)x[S-1]=arguments[S];v[g].fn.apply(v[g].context,x)}}return!0},n.prototype.on=function(s,a,i){return o(this,s,a,i,!1)},n.prototype.once=function(s,a,i){return o(this,s,a,i,!0)},n.prototype.removeListener=function(s,a,i,h){var u=t?t+s:s;if(!this._events[u])return this;if(!a)return r(this,u),this;var d=this._events[u];if(d.fn)d.fn===a&&(!h||d.once)&&(!i||d.context===i)&&r(this,u);else{for(var f=0,v=[],m=d.length;f<m;f++)(d[f].fn!==a||h&&!d[f].once||i&&d[f].context!==i)&&v.push(d[f]);v.length?this._events[u]=v.length===1?v[0]:v:r(this,u)}return this},n.prototype.removeAllListeners=function(s){var a;return s?(a=t?t+s:s,this._events[a]&&r(this,a)):(this._events=new l,this._eventsCount=0),this},n.prototype.off=n.prototype.removeListener,n.prototype.addListener=n.prototype.on,n.prefixed=t,n.EventEmitter=n,p.exports=n}),11517:((p,y,t)=>{/**
 * @author       samme
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(38829),c=function(o,r,n,e){for(var s=o[0],a=1;a<o.length;a++){var i=o[a];l(i,s,r,n,e),s=i}return o};p.exports=c}),80318:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(66979),c=function(o,r,n,e,s){return l(o,"angle",r,n,e,s)};p.exports=c}),60757:(p=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var y=function(t,l,c){for(var o=0;o<t.length;o++){var r=t[o];l.call(c,r)}return t};p.exports=y}),69927:(p=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var y=function(t,l,c){c===void 0&&(c=0);for(var o=c;o<t.length;o++){var r=t[o],n=!0;for(var e in l)r[e]!==l[e]&&(n=!1);if(n)return r}return null};p.exports=y}),32265:(p=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var y=function(t,l,c){c===void 0&&(c=0);for(var o=t.length-1;o>=c;o--){var r=t[o],n=!0;for(var e in l)r[e]!==l[e]&&(n=!1);if(n)return r}return null};p.exports=y}),94420:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(11879),c=t(60461),o=t(95540),r=t(29747),n=t(41481),e=new n({sys:{queueDepthSort:r,events:{once:r}}},0,0,1,1).setOrigin(0,0),s=function(a,i){i===void 0&&(i={});var h=i.hasOwnProperty("width"),u=i.hasOwnProperty("height"),d=o(i,"width",-1),f=o(i,"height",-1),v=o(i,"cellWidth",1),m=o(i,"cellHeight",v),x=o(i,"position",c.TOP_LEFT),g=o(i,"x",0),T=o(i,"y",0),S=0,C=0,E=d*v,P=f*m;e.setPosition(g,T),e.setSize(v,m);for(var A=0;A<a.length;A++)if(l(a[A],e,x),h&&d===-1)e.x+=v;else if(u&&f===-1)e.y+=m;else if(u&&!h){if(C+=m,e.y+=m,C===P&&(C=0,S+=v,e.y=T,e.x+=v,S===E))break}else if(S+=v,e.x+=v,S===E&&(S=0,C+=m,e.x=g,e.y+=m,C===P))break;return a};p.exports=s}),41721:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(66979),c=function(o,r,n,e,s){return l(o,"alpha",r,n,e,s)};p.exports=c}),67285:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(66979),c=function(o,r,n,e,s){return l(o,"x",r,n,e,s)};p.exports=c}),9074:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(66979),c=function(o,r,n,e,s,a,i){return n==null&&(n=r),l(o,"x",r,e,a,i),l(o,"y",n,s,a,i)};p.exports=c}),75222:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(66979),c=function(o,r,n,e,s){return l(o,"y",r,n,e,s)};p.exports=c}),22983:(p=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var y=function(t,l,c,o){c===void 0&&(c=0),o===void 0&&(o=6.28);for(var r=c,n=(o-c)/t.length,e=l.x,s=l.y,a=l.radius,i=0;i<t.length;i++)t[i].x=e+a*Math.cos(r),t[i].y=s+a*Math.sin(r),r+=n;return t};p.exports=y}),95253:(p=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var y=function(t,l,c,o){c===void 0&&(c=0),o===void 0&&(o=6.28);for(var r=c,n=(o-c)/t.length,e=l.width/2,s=l.height/2,a=0;a<t.length;a++)t[a].x=l.x+e*Math.cos(r),t[a].y=l.y+s*Math.sin(r),r+=n;return t};p.exports=y}),88505:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(15258),c=t(26708),o=function(r,n,e){var s;e?s=c(n,e,r.length):s=l(n,r.length);for(var a=0;a<r.length;a++){var i=r[a],h=s[a];i.x=h.x,i.y=h.y}return r};p.exports=o}),41346:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(14649),c=t(86003),o=t(49498),r=function(n,e,s){s===void 0&&(s=0);var a=l(e,!1,n.length);s>0?c(a,s):s<0&&o(a,Math.abs(s));for(var i=0;i<n.length;i++)n[i].x=a[i].x,n[i].y=a[i].y;return n};p.exports=r}),11575:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(84993),c=function(o,r,n){var e=l({x1:r.x1,y1:r.y1,x2:r.x2,y2:r.y2},n),s=l({x1:r.x2,y1:r.y2,x2:r.x3,y2:r.y3},n),a=l({x1:r.x3,y1:r.y3,x2:r.x1,y2:r.y1},n);e.pop(),s.pop(),a.pop(),e=e.concat(s,a);for(var i=e.length/o.length,h=0,u=0;u<o.length;u++){var d=o[u],f=e[Math.floor(h)];d.x=f.x,d.y=f.y,h+=i}return o};p.exports=c}),29953:(p=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var y=function(t,l,c){for(var o=0;o<t.length;o++){var r=t[o];r.anims&&r.anims.play(l,c)}return t};p.exports=y}),66979:(p=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var y=function(t,l,c,o,r,n){o===void 0&&(o=0),r===void 0&&(r=0),n===void 0&&(n=1);var e,s=0,a=t.length;if(n===1)for(e=r;e<a;e++)t[e][l]+=c+s*o,s++;else for(e=r;e>=0;e--)t[e][l]+=c+s*o,s++;return t};p.exports=y}),43967:(p=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var y=function(t,l,c,o,r,n){o===void 0&&(o=0),r===void 0&&(r=0),n===void 0&&(n=1);var e,s=0,a=t.length;if(n===1)for(e=r;e<a;e++)t[e][l]=c+s*o,s++;else for(e=r;e>=0;e--)t[e][l]=c+s*o,s++;return t};p.exports=y}),88926:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(28176),c=function(o,r){for(var n=0;n<o.length;n++)l(r,o[n]);return o};p.exports=c}),33286:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(24820),c=function(o,r){for(var n=0;n<o.length;n++)l(r,o[n]);return o};p.exports=c}),96e3:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(65822),c=function(o,r){for(var n=0;n<o.length;n++)l(r,o[n]);return o};p.exports=c}),28789:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(26597),c=function(o,r){for(var n=0;n<o.length;n++)l(r,o[n]);return o};p.exports=c}),97154:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(90260),c=function(o,r){for(var n=0;n<o.length;n++)l(r,o[n]);return o};p.exports=c}),20510:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(66979),c=function(o,r,n,e,s){return l(o,"rotation",r,n,e,s)};p.exports=c}),91051:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(1163),c=t(20339),o=function(r,n,e){for(var s=n.x,a=n.y,i=0;i<r.length;i++){var h=r[i];l(h,s,a,e,Math.max(1,c(h.x,h.y,s,a)))}return r};p.exports=o}),76332:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(1163),c=function(o,r,n,e){var s=r.x,a=r.y;if(e===0)return o;for(var i=0;i<o.length;i++)l(o[i],s,a,n,e);return o};p.exports=c}),61619:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(66979),c=function(o,r,n,e,s){return l(o,"scaleX",r,n,e,s)};p.exports=c}),94868:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(66979),c=function(o,r,n,e,s,a,i){return n==null&&(n=r),l(o,"scaleX",r,e,a,i),l(o,"scaleY",n,s,a,i)};p.exports=c}),95532:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(66979),c=function(o,r,n,e,s){return l(o,"scaleY",r,n,e,s)};p.exports=c}),8689:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(43967),c=function(o,r,n,e,s){return l(o,"alpha",r,n,e,s)};p.exports=c}),2645:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(43967),c=function(o,r,n,e){return l(o,"blendMode",r,0,n,e)};p.exports=c}),32372:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(43967),c=function(o,r,n,e,s){return l(o,"depth",r,n,e,s)};p.exports=c}),85373:(p=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var y=function(t,l,c){for(var o=0;o<t.length;o++)t[o].setInteractive(l,c);return t};p.exports=y}),81583:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(43967),c=function(o,r,n,e,s,a,i){return n==null&&(n=r),l(o,"originX",r,e,a,i),l(o,"originY",n,s,a,i),o.forEach(function(h){h.updateDisplayOrigin()}),o};p.exports=c}),79939:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(43967),c=function(o,r,n,e,s){return l(o,"rotation",r,n,e,s)};p.exports=c}),2699:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(43967),c=function(o,r,n,e,s,a,i){return n==null&&(n=r),l(o,"scaleX",r,e,a,i),l(o,"scaleY",n,s,a,i)};p.exports=c}),98739:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(43967),c=function(o,r,n,e,s){return l(o,"scaleX",r,n,e,s)};p.exports=c}),98476:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(43967),c=function(o,r,n,e,s){return l(o,"scaleY",r,n,e,s)};p.exports=c}),6207:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(43967),c=function(o,r,n,e,s,a,i){return n==null&&(n=r),l(o,"scrollFactorX",r,e,a,i),l(o,"scrollFactorY",n,s,a,i)};p.exports=c}),6607:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(43967),c=function(o,r,n,e,s){return l(o,"scrollFactorX",r,n,e,s)};p.exports=c}),72248:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(43967),c=function(o,r,n,e,s){return l(o,"scrollFactorY",r,n,e,s)};p.exports=c}),14036:(p=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var y=function(t,l,c,o,r){for(var n=0;n<t.length;n++)t[n].setTint(l,c,o,r);return t};p.exports=y}),50159:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(43967),c=function(o,r,n,e){return l(o,"visible",r,0,n,e)};p.exports=c}),77597:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(43967),c=function(o,r,n,e,s){return l(o,"x",r,n,e,s)};p.exports=c}),83194:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(43967),c=function(o,r,n,e,s,a,i){return n==null&&(n=r),l(o,"x",r,e,a,i),l(o,"y",n,s,a,i)};p.exports=c}),67678:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(43967),c=function(o,r,n,e,s){return l(o,"y",r,n,e,s)};p.exports=c}),35850:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(26099),c=function(o,r,n,e,s){e===void 0&&(e=0),s===void 0&&(s=new l);var a,i,h=o.length;if(h===1)a=o[0].x,i=o[0].y,o[0].x=r,o[0].y=n;else{var u=1,d=0;e===0&&(d=h-1,u=h-2),a=o[d].x,i=o[d].y,o[d].x=r,o[d].y=n;for(var f=0;f<h;f++)if(!(u>=h||u===-1)){var v=o[u],m=v.x,x=v.y;v.x=a,v.y=i,a=m,i=x,e===0?u--:u++}}return s.x=a,s.y=i,s};p.exports=c}),8628:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(33680),c=function(o){return l(o)};p.exports=c}),21837:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(7602),c=function(o,r,n,e,s){s===void 0&&(s=!1);var a=Math.abs(e-n)/o.length,i;if(s)for(i=0;i<o.length;i++)o[i][r]+=l(i*a,n,e);else for(i=0;i<o.length;i++)o[i][r]=l(i*a,n,e);return o};p.exports=c}),21910:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(54261),c=function(o,r,n,e,s){s===void 0&&(s=!1);var a=Math.abs(e-n)/o.length,i;if(s)for(i=0;i<o.length;i++)o[i][r]+=l(i*a,n,e);else for(i=0;i<o.length;i++)o[i][r]=l(i*a,n,e);return o};p.exports=c}),62054:(p=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var y=function(t,l,c,o,r){if(r===void 0&&(r=!1),t.length===0)return t;if(t.length===1)return r?t[0][l]+=(o+c)/2:t[0][l]=(o+c)/2,t;var n=Math.abs(o-c)/(t.length-1),e;if(r)for(e=0;e<t.length;e++)t[e][l]+=e*n+c;else for(e=0;e<t.length;e++)t[e][l]=e*n+c;return t};p.exports=y}),79815:(p=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var y=function(t){for(var l=0;l<t.length;l++)t[l].visible=!t[l].visible;return t};p.exports=y}),39665:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @author       samme <samme.npm@gmail.com>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(15994),c=function(o,r,n){n===void 0&&(n=0);for(var e=0;e<o.length;e++){var s=o[e];s.x=l(s.x,r.left-n,r.right+n),s.y=l(s.y,r.top-n,r.bottom+n)}return o};p.exports=c}),61061:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */p.exports={AlignTo:t(11517),Angle:t(80318),Call:t(60757),GetFirst:t(69927),GetLast:t(32265),GridAlign:t(94420),IncAlpha:t(41721),IncX:t(67285),IncXY:t(9074),IncY:t(75222),PlaceOnCircle:t(22983),PlaceOnEllipse:t(95253),PlaceOnLine:t(88505),PlaceOnRectangle:t(41346),PlaceOnTriangle:t(11575),PlayAnimation:t(29953),PropertyValueInc:t(66979),PropertyValueSet:t(43967),RandomCircle:t(88926),RandomEllipse:t(33286),RandomLine:t(96e3),RandomRectangle:t(28789),RandomTriangle:t(97154),Rotate:t(20510),RotateAround:t(91051),RotateAroundDistance:t(76332),ScaleX:t(61619),ScaleXY:t(94868),ScaleY:t(95532),SetAlpha:t(8689),SetBlendMode:t(2645),SetDepth:t(32372),SetHitArea:t(85373),SetOrigin:t(81583),SetRotation:t(79939),SetScale:t(2699),SetScaleX:t(98739),SetScaleY:t(98476),SetScrollFactor:t(6207),SetScrollFactorX:t(6607),SetScrollFactorY:t(72248),SetTint:t(14036),SetVisible:t(50159),SetX:t(77597),SetXY:t(83194),SetY:t(67678),ShiftPosition:t(35850),Shuffle:t(8628),SmootherStep:t(21910),SmoothStep:t(21837),Spread:t(62054),ToggleVisible:t(79815),WrapInRectangle:t(39665)}}),42099:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(45319),c=t(83419),o=t(74943),r=t(81957),n=t(41138),e=t(35154),s=t(90126),a=new c({initialize:function(h,u,d){this.manager=h,this.key=u,this.type="frame",this.frames=this.getFrames(h.textureManager,e(d,"frames",[]),e(d,"defaultTextureKey",null),e(d,"sortFrames",!0)),this.frameRate=e(d,"frameRate",null),this.duration=e(d,"duration",null),this.msPerFrame,this.skipMissedFrames=e(d,"skipMissedFrames",!0),this.delay=e(d,"delay",0),this.repeat=e(d,"repeat",0),this.repeatDelay=e(d,"repeatDelay",0),this.yoyo=e(d,"yoyo",!1),this.showBeforeDelay=e(d,"showBeforeDelay",!1),this.showOnStart=e(d,"showOnStart",!1),this.hideOnComplete=e(d,"hideOnComplete",!1),this.randomFrame=e(d,"randomFrame",!1),this.paused=!1,this.calculateDuration(this,this.getTotalFrames(),this.duration,this.frameRate),this.manager.on&&(this.manager.on(o.PAUSE_ALL,this.pause,this),this.manager.on(o.RESUME_ALL,this.resume,this))},getTotalFrames:function(){return this.frames.length},calculateDuration:function(i,h,u,d){u===null&&d===null?(i.frameRate=24,i.duration=24/h*1e3):u&&d===null?(i.duration=u,i.frameRate=h/(u/1e3)):(i.frameRate=d,i.duration=h/d*1e3),i.msPerFrame=1e3/i.frameRate},addFrame:function(i){return this.addFrameAt(this.frames.length,i)},addFrameAt:function(i,h){var u=this.getFrames(this.manager.textureManager,h);if(u.length>0){if(i===0)this.frames=u.concat(this.frames);else if(i===this.frames.length)this.frames=this.frames.concat(u);else{var d=this.frames.slice(0,i),f=this.frames.slice(i);this.frames=d.concat(u,f)}this.updateFrameSequence()}return this},checkFrame:function(i){return i>=0&&i<this.frames.length},getFirstTick:function(i){i.accumulator=0,i.nextTick=i.frameRate===i.currentAnim.frameRate&&i.currentFrame.duration||i.msPerFrame},getFrameAt:function(i){return this.frames[i]},getFrames:function(i,h,u,d){d===void 0&&(d=!0);var f=[],v,m,x=1,g,T;if(typeof h=="string"){if(T=h,!i.exists(T))return console.warn('Texture "%s" not found',T),f;var S=i.get(T),C=S.getFrameNames();d&&s(C),h=[],C.forEach(function(L){h.push({key:T,frame:L})})}if(!Array.isArray(h)||h.length===0)return f;for(g=0;g<h.length;g++){var E=h[g],P=e(E,"key",u);if(P){var A=e(E,"frame",0),M=i.getFrame(P,A);if(!M){console.warn('Texture "%s" not found',P);continue}m=new n(P,A,x,M),m.duration=e(E,"duration",0),m.isFirst=!v,v&&(v.nextFrame=m,m.prevFrame=v),f.push(m),v=m,x++}}if(f.length>0){m.isLast=!0,m.nextFrame=f[0],f[0].prevFrame=m;var R=1/(f.length-1);for(g=0;g<f.length;g++)f[g].progress=g*R}return f},getNextTick:function(i){i.accumulator-=i.nextTick,i.nextTick=i.frameRate===i.currentAnim.frameRate&&i.currentFrame.duration||i.msPerFrame},getFrameByProgress:function(i){return i=l(i,0,1),r(i,this.frames,"progress")},nextFrame:function(i){var h=i.currentFrame;h.isLast?i.yoyo?this.handleYoyoFrame(i,!1):i.repeatCounter>0?i.inReverse&&i.forward?i.forward=!1:this.repeatAnimation(i):i.complete():this.updateAndGetNextTick(i,h.nextFrame)},handleYoyoFrame:function(i,h){if(h||(h=!1),i.inReverse===!h&&i.repeatCounter>0){(i.repeatDelay===0||i.pendingRepeat)&&(i.forward=h),this.repeatAnimation(i);return}if(i.inReverse!==h&&i.repeatCounter===0){i.complete();return}i.forward=h;var u=h?i.currentFrame.nextFrame:i.currentFrame.prevFrame;this.updateAndGetNextTick(i,u)},getLastFrame:function(){return this.frames[this.frames.length-1]},previousFrame:function(i){var h=i.currentFrame;h.isFirst?i.yoyo?this.handleYoyoFrame(i,!0):i.repeatCounter>0?i.inReverse&&!i.forward?this.repeatAnimation(i):(i.forward=!0,this.repeatAnimation(i)):i.complete():this.updateAndGetNextTick(i,h.prevFrame)},updateAndGetNextTick:function(i,h){i.setCurrentFrame(h),this.getNextTick(i)},removeFrame:function(i){var h=this.frames.indexOf(i);return h!==-1&&this.removeFrameAt(h),this},removeFrameAt:function(i){return this.frames.splice(i,1),this.updateFrameSequence(),this},repeatAnimation:function(i){if(i._pendingStop===2){if(i._pendingStopValue===0)return i.stop();i._pendingStopValue--}i.repeatDelay>0&&!i.pendingRepeat?(i.pendingRepeat=!0,i.accumulator-=i.nextTick,i.nextTick+=i.repeatDelay):(i.repeatCounter--,i.forward?i.setCurrentFrame(i.currentFrame.nextFrame):i.setCurrentFrame(i.currentFrame.prevFrame),i.isPlaying&&(this.getNextTick(i),i.handleRepeat()))},toJSON:function(){var i={key:this.key,type:this.type,frames:[],frameRate:this.frameRate,duration:this.duration,skipMissedFrames:this.skipMissedFrames,delay:this.delay,repeat:this.repeat,repeatDelay:this.repeatDelay,yoyo:this.yoyo,showBeforeDelay:this.showBeforeDelay,showOnStart:this.showOnStart,randomFrame:this.randomFrame,hideOnComplete:this.hideOnComplete};return this.frames.forEach(function(h){i.frames.push(h.toJSON())}),i},updateFrameSequence:function(){for(var i=this.frames.length,h=1/(i-1),u,d=0;d<i;d++)u=this.frames[d],u.index=d+1,u.isFirst=!1,u.isLast=!1,u.progress=d*h,d===0?(u.isFirst=!0,i===1?(u.isLast=!0,u.nextFrame=u,u.prevFrame=u):(u.isLast=!1,u.prevFrame=this.frames[i-1],u.nextFrame=this.frames[d+1])):d===i-1&&i>1?(u.isLast=!0,u.prevFrame=this.frames[i-2],u.nextFrame=this.frames[0]):i>1&&(u.prevFrame=this.frames[d-1],u.nextFrame=this.frames[d+1]);return this},pause:function(){return this.paused=!0,this},resume:function(){return this.paused=!1,this},destroy:function(){this.manager.off&&(this.manager.off(o.PAUSE_ALL,this.pause,this),this.manager.off(o.RESUME_ALL,this.resume,this)),this.manager.remove(this.key);for(var i=0;i<this.frames.length;i++)this.frames[i].destroy();this.frames=[],this.manager=null}});p.exports=a}),41138:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(83419),c=new l({initialize:function(r,n,e,s,a){a===void 0&&(a=!1),this.textureKey=r,this.textureFrame=n,this.index=e,this.frame=s,this.isFirst=!1,this.isLast=!1,this.prevFrame=null,this.nextFrame=null,this.duration=0,this.progress=0,this.isKeyFrame=a},toJSON:function(){return{key:this.textureKey,frame:this.textureFrame,duration:this.duration,keyframe:this.isKeyFrame}},destroy:function(){this.frame=void 0}});p.exports=c}),60848:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(42099),c=t(83419),o=t(90330),r=t(50792),n=t(74943),e=t(8443),s=t(95540),a=t(35154),i=t(36383),h=t(20283),u=t(41836),d=new c({Extends:r,initialize:function(v){r.call(this),this.game=v,this.textureManager=null,this.globalTimeScale=1,this.anims=new o,this.mixes=new o,this.paused=!1,this.name="AnimationManager",v.events.once(e.BOOT,this.boot,this)},boot:function(){this.textureManager=this.game.textures,this.game.events.once(e.DESTROY,this.destroy,this)},addMix:function(f,v,m){var x=this.anims,g=this.mixes,T=typeof f=="string"?f:f.key,S=typeof v=="string"?v:v.key;if(x.has(T)&&x.has(S)){var C=g.get(T);C||(C={}),C[S]=m,g.set(T,C)}return this},removeMix:function(f,v){var m=this.mixes,x=typeof f=="string"?f:f.key,g=m.get(x);if(g)if(v){var T=typeof v=="string"?v:v.key;g.hasOwnProperty(T)&&delete g[T]}else v||m.delete(x);return this},getMix:function(f,v){var m=this.mixes,x=typeof f=="string"?f:f.key,g=typeof v=="string"?v:v.key,T=m.get(x);return T&&T.hasOwnProperty(g)?T[g]:0},add:function(f,v){return this.anims.has(f)?(console.warn("Animation key exists: "+f),this):(v.key=f,this.anims.set(f,v),this.emit(n.ADD_ANIMATION,f,v),this)},exists:function(f){return this.anims.has(f)},createFromAseprite:function(f,v,m){var x=[],g=this.game.cache.json.get(f);if(!g)return console.warn("No Aseprite data found for: "+f),x;var T=this,S=a(g,"meta",null),C=a(g,"frames",null);if(S&&C){var E=a(S,"frameTags",[]);E.forEach(function(P){var A=[],M=s(P,"name",null),R=s(P,"from",0),L=s(P,"to",0),w=s(P,"direction","forward");if(M&&(!v||v&&v.indexOf(M)>-1)){for(var N=0,b=R;b<=L;b++){var z=b.toString(),D=C[z];if(D){var B=s(D,"duration",i.MAX_SAFE_INTEGER);A.push({key:f,frame:z,duration:B}),N+=B}}w==="reverse"&&(A=A.reverse());var F={key:M,frames:A,duration:N,yoyo:w==="pingpong"},U;m?m.anims&&(U=m.anims.create(F)):U=T.create(F),U&&x.push(U)}})}return x},create:function(f){var v=f.key,m=!1;return v&&(m=this.get(v),m?console.warn("AnimationManager key already exists: "+v):(m=new l(this,v,f),this.anims.set(v,m),this.emit(n.ADD_ANIMATION,v,m))),m},fromJSON:function(f,v){v===void 0&&(v=!1),v&&this.anims.clear(),typeof f=="string"&&(f=JSON.parse(f));var m=[];if(f.hasOwnProperty("anims")&&Array.isArray(f.anims)){for(var x=0;x<f.anims.length;x++)m.push(this.create(f.anims[x]));f.hasOwnProperty("globalTimeScale")&&(this.globalTimeScale=f.globalTimeScale)}else f.hasOwnProperty("key")&&f.type==="frame"&&m.push(this.create(f));return m},generateFrameNames:function(f,v){var m=a(v,"prefix",""),x=a(v,"start",0),g=a(v,"end",0),T=a(v,"suffix",""),S=a(v,"zeroPad",0),C=a(v,"outputArray",[]),E=a(v,"frames",!1);if(!this.textureManager.exists(f))return console.warn('Texture "%s" not found',f),C;var P=this.textureManager.get(f);if(!P)return C;var A;if(v)for(E||(E=h(x,g)),A=0;A<E.length;A++){var M=m+u(E[A],S,"0",1)+T;P.has(M)?C.push({key:f,frame:M}):console.warn('Frame "%s" not found in texture "%s"',M,f)}else for(E=P.getFrameNames(),A=0;A<E.length;A++)C.push({key:f,frame:E[A]});return C},generateFrameNumbers:function(f,v){var m=a(v,"start",0),x=a(v,"end",-1),g=a(v,"first",!1),T=a(v,"outputArray",[]),S=a(v,"frames",!1);if(!this.textureManager.exists(f))return console.warn('Texture "%s" not found',f),T;var C=this.textureManager.get(f);if(!C)return T;g&&C.has(g)&&T.push({key:f,frame:g}),S||(x===-1&&(x=C.frameTotal-2),S=h(m,x));for(var E=0;E<S.length;E++){var P=S[E];C.has(P)?T.push({key:f,frame:P}):console.warn('Frame "%s" not found in texture "%s"',P,f)}return T},get:function(f){return this.anims.get(f)},getAnimsFromTexture:function(f){for(var v=this.textureManager.get(f),m=v.key,x=this.anims.getArray(),g=[],T=0;T<x.length;T++)for(var S=x[T],C=S.frames,E=0;E<C.length;E++)if(C[E].textureKey===m){g.push(S.key);break}return g},pauseAll:function(){return this.paused||(this.paused=!0,this.emit(n.PAUSE_ALL)),this},play:function(f,v){Array.isArray(v)||(v=[v]);for(var m=0;m<v.length;m++)v[m].anims.play(f);return this},staggerPlay:function(f,v,m,x){m===void 0&&(m=0),x===void 0&&(x=!0),Array.isArray(v)||(v=[v]);var g=v.length;x||g--;for(var T=0;T<v.length;T++){var S=m<0?Math.abs(m)*(g-T):m*T;v[T].anims.playAfterDelay(f,S)}return this},remove:function(f){var v=this.get(f);return v&&(this.emit(n.REMOVE_ANIMATION,f,v),this.anims.delete(f),this.removeMix(f)),v},resumeAll:function(){return this.paused&&(this.paused=!1,this.emit(n.RESUME_ALL)),this},toJSON:function(f){var v={anims:[],globalTimeScale:this.globalTimeScale};return f!==void 0&&f!==""?v.anims.push(this.anims.get(f).toJSON()):this.anims.each(function(m,x){v.anims.push(x.toJSON())}),v},destroy:function(){this.anims.clear(),this.mixes.clear(),this.textureManager=null,this.game=null}});p.exports=d}),9674:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(42099),c=t(30976),o=t(83419),r=t(90330),n=t(74943),e=t(95540),s=new o({initialize:function(i){this.parent=i,this.animationManager=i.scene.sys.anims,this.animationManager.on(n.REMOVE_ANIMATION,this.globalRemove,this),this.textureManager=this.animationManager.textureManager,this.anims=null,this.isPlaying=!1,this.hasStarted=!1,this.currentAnim=null,this.currentFrame=null,this.nextAnim=null,this.nextAnimsQueue=[],this.timeScale=1,this.frameRate=0,this.duration=0,this.msPerFrame=0,this.skipMissedFrames=!0,this.randomFrame=!1,this.delay=0,this.repeat=0,this.repeatDelay=0,this.yoyo=!1,this.showBeforeDelay=!1,this.showOnStart=!1,this.hideOnComplete=!1,this.forward=!0,this.inReverse=!1,this.accumulator=0,this.nextTick=0,this.delayCounter=0,this.repeatCounter=0,this.pendingRepeat=!1,this._paused=!1,this._wasPlaying=!1,this._pendingStop=0,this._pendingStopValue},chain:function(a){var i=this.parent;if(a===void 0)return this.nextAnimsQueue.length=0,this.nextAnim=null,i;Array.isArray(a)||(a=[a]);for(var h=0;h<a.length;h++){var u=a[h];this.nextAnim?this.nextAnimsQueue.push(u):this.nextAnim=u}return this.parent},getName:function(){return this.currentAnim?this.currentAnim.key:""},getFrameName:function(){return this.currentFrame?this.currentFrame.textureFrame:""},load:function(a){this.isPlaying&&this.stop();var i=this.animationManager,h=typeof a=="string"?a:e(a,"key",null),u=this.exists(h)?this.get(h):i.get(h);if(!u)console.warn("Missing animation: "+h);else{this.currentAnim=u;var d=u.getTotalFrames(),f=e(a,"frameRate",u.frameRate),v=e(a,"duration",u.duration);u.calculateDuration(this,d,v,f),this.delay=e(a,"delay",u.delay),this.repeat=e(a,"repeat",u.repeat),this.repeatDelay=e(a,"repeatDelay",u.repeatDelay),this.yoyo=e(a,"yoyo",u.yoyo),this.showBeforeDelay=e(a,"showBeforeDelay",u.showBeforeDelay),this.showOnStart=e(a,"showOnStart",u.showOnStart),this.hideOnComplete=e(a,"hideOnComplete",u.hideOnComplete),this.skipMissedFrames=e(a,"skipMissedFrames",u.skipMissedFrames),this.randomFrame=e(a,"randomFrame",u.randomFrame),this.timeScale=e(a,"timeScale",this.timeScale);var m=e(a,"startFrame",0);m>d&&(m=0),this.randomFrame&&(m=c(0,d-1));var x=u.frames[m];m===0&&!this.forward&&(x=u.getLastFrame()),this.currentFrame=x}return this.parent},pause:function(a){return this._paused||(this._paused=!0,this._wasPlaying=this.isPlaying,this.isPlaying=!1),a!==void 0&&this.setCurrentFrame(a),this.parent},resume:function(a){return this._paused&&(this._paused=!1,this.isPlaying=this._wasPlaying),a!==void 0&&this.setCurrentFrame(a),this.parent},playAfterDelay:function(a,i){if(!this.isPlaying)this.delayCounter=i,this.play(a,!0);else{var h=this.nextAnim,u=this.nextAnimsQueue;h&&u.unshift(h),this.nextAnim=a,this._pendingStop=1,this._pendingStopValue=i}return this.parent},playAfterRepeat:function(a,i){if(i===void 0&&(i=1),!this.isPlaying)this.play(a);else{var h=this.nextAnim,u=this.nextAnimsQueue;h&&u.unshift(h),this.repeatCounter!==-1&&i>this.repeatCounter&&(i=this.repeatCounter),this.nextAnim=a,this._pendingStop=2,this._pendingStopValue=i}return this.parent},play:function(a,i){i===void 0&&(i=!1);var h=this.currentAnim,u=this.parent,d=typeof a=="string"?a:a.key;if(i&&this.isPlaying&&h.key===d)return u;if(h&&this.isPlaying){var f=this.animationManager.getMix(h.key,a);if(f>0)return this.playAfterDelay(a,f)}return this.forward=!0,this.inReverse=!1,this._paused=!1,this._wasPlaying=!0,this.startAnimation(a)},playReverse:function(a,i){i===void 0&&(i=!1);var h=typeof a=="string"?a:a.key;return i&&this.isPlaying&&this.currentAnim.key===h?this.parent:(this.forward=!1,this.inReverse=!0,this._paused=!1,this._wasPlaying=!0,this.startAnimation(a))},startAnimation:function(a){this.load(a);var i=this.currentAnim,h=this.parent;return i&&(this.repeatCounter=this.repeat===-1?Number.MAX_VALUE:this.repeat,i.getFirstTick(this),this.isPlaying=!0,this.pendingRepeat=!1,this.hasStarted=!1,this._pendingStop=0,this._pendingStopValue=0,this._paused=!1,this.delayCounter+=this.delay,this.delayCounter===0?this.handleStart():this.showBeforeDelay&&this.setCurrentFrame(this.currentFrame)),h},handleStart:function(){this.showOnStart&&this.parent.setVisible(!0),this.setCurrentFrame(this.currentFrame),this.hasStarted=!0,this.emitEvents(n.ANIMATION_START)},handleRepeat:function(){this.pendingRepeat=!1,this.emitEvents(n.ANIMATION_REPEAT)},handleStop:function(){this._pendingStop=0,this.isPlaying=!1,this.emitEvents(n.ANIMATION_STOP)},handleComplete:function(){this._pendingStop=0,this.isPlaying=!1,this.hideOnComplete&&this.parent.setVisible(!1),this.emitEvents(n.ANIMATION_COMPLETE,n.ANIMATION_COMPLETE_KEY)},emitEvents:function(a,i){var h=this.currentAnim;if(h){var u=this.currentFrame,d=this.parent,f=u.textureFrame;d.emit(a,h,u,d,f),i&&d.emit(i+h.key,h,u,d,f)}},reverse:function(){return this.isPlaying&&(this.inReverse=!this.inReverse,this.forward=!this.forward),this.parent},getProgress:function(){var a=this.currentFrame;if(!a)return 0;var i=a.progress;return this.inReverse&&(i*=-1),i},setProgress:function(a){return this.forward||(a=1-a),this.setCurrentFrame(this.currentAnim.getFrameByProgress(a)),this.parent},setRepeat:function(a){return this.repeatCounter=a===-1?Number.MAX_VALUE:a,this.parent},globalRemove:function(a,i){i===void 0&&(i=this.currentAnim),this.isPlaying&&i.key===this.currentAnim.key&&(this.stop(),this.setCurrentFrame(this.currentAnim.frames[0]))},restart:function(a,i){a===void 0&&(a=!1),i===void 0&&(i=!1);var h=this.currentAnim,u=this.parent;return h?(i&&(this.repeatCounter=this.repeat===-1?Number.MAX_VALUE:this.repeat),h.getFirstTick(this),this.emitEvents(n.ANIMATION_RESTART),this.isPlaying=!0,this.pendingRepeat=!1,this.hasStarted=!a,this._pendingStop=0,this._pendingStopValue=0,this._paused=!1,this.setCurrentFrame(h.frames[0]),this.parent):u},complete:function(){if(this._pendingStop=0,this.isPlaying=!1,this.currentAnim&&this.handleComplete(),this.nextAnim){var a=this.nextAnim;this.nextAnim=this.nextAnimsQueue.length>0?this.nextAnimsQueue.shift():null,this.play(a)}return this.parent},stop:function(){if(this._pendingStop=0,this.isPlaying=!1,this.delayCounter=0,this.currentAnim&&this.handleStop(),this.nextAnim){var a=this.nextAnim;this.nextAnim=this.nextAnimsQueue.shift(),this.play(a)}return this.parent},stopAfterDelay:function(a){return this._pendingStop=1,this._pendingStopValue=a,this.parent},stopAfterRepeat:function(a){return a===void 0&&(a=1),this.repeatCounter!==-1&&a>this.repeatCounter&&(a=this.repeatCounter),this._pendingStop=2,this._pendingStopValue=a,this.parent},stopOnFrame:function(a){return this._pendingStop=3,this._pendingStopValue=a,this.parent},getTotalFrames:function(){return this.currentAnim?this.currentAnim.getTotalFrames():0},update:function(a,i){var h=this.currentAnim;if(!(!this.isPlaying||!h||h.paused)){if(this.accumulator+=i*this.timeScale*this.animationManager.globalTimeScale,this._pendingStop===1&&(this._pendingStopValue-=i,this._pendingStopValue<=0))return this.stop();if(!this.hasStarted)this.accumulator>=this.delayCounter&&(this.accumulator-=this.delayCounter,this.handleStart());else if(this.accumulator>=this.nextTick&&(this.forward?h.nextFrame(this):h.previousFrame(this),this.isPlaying&&this._pendingStop===0&&this.skipMissedFrames&&this.accumulator>this.nextTick)){var u=0;do this.forward?h.nextFrame(this):h.previousFrame(this),u++;while(this.isPlaying&&this.accumulator>this.nextTick&&u<60)}}},setCurrentFrame:function(a){var i=this.parent;return this.currentFrame=a,i.texture=a.frame.texture,i.frame=a.frame,i.isCropped&&i.frame.updateCropUVs(i._crop,i.flipX,i.flipY),a.setAlpha&&(i.alpha=a.alpha),i.setSizeToFrame(),i._originComponent&&(a.frame.customPivot?i.setOrigin(a.frame.pivotX,a.frame.pivotY):i.updateDisplayOrigin()),this.isPlaying&&this.hasStarted&&(this.emitEvents(n.ANIMATION_UPDATE),this._pendingStop===3&&this._pendingStopValue===a&&this.stop()),i},nextFrame:function(){return this.currentAnim&&this.currentAnim.nextFrame(this),this.parent},previousFrame:function(){return this.currentAnim&&this.currentAnim.previousFrame(this),this.parent},get:function(a){return this.anims?this.anims.get(a):null},exists:function(a){return this.anims?this.anims.has(a):!1},create:function(a){var i=a.key,h=!1;return i&&(h=this.get(i),h?console.warn("Animation key already exists: "+i):(h=new l(this,i,a),this.anims||(this.anims=new r),this.anims.set(i,h))),h},createFromAseprite:function(a,i){return this.animationManager.createFromAseprite(a,i,this.parent)},generateFrameNames:function(a,i){return this.animationManager.generateFrameNames(a,i)},generateFrameNumbers:function(a,i){return this.animationManager.generateFrameNumbers(a,i)},remove:function(a){var i=this.get(a);return i&&(this.currentAnim===i&&this.stop(),this.anims.delete(a)),i},destroy:function(){this.animationManager.off(n.REMOVE_ANIMATION,this.globalRemove,this),this.anims&&this.anims.clear(),this.animationManager=null,this.parent=null,this.nextAnim=null,this.nextAnimsQueue.length=0,this.currentAnim=null,this.currentFrame=null},isPaused:{get:function(){return this._paused}}});p.exports=s}),57090:(p=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */p.exports="add"}),25312:(p=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */p.exports="animationcomplete"}),89580:(p=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */p.exports="animationcomplete-"}),52860:(p=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */p.exports="animationrepeat"}),63850:(p=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */p.exports="animationrestart"}),99085:(p=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */p.exports="animationstart"}),28087:(p=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */p.exports="animationstop"}),1794:(p=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */p.exports="animationupdate"}),52562:(p=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */p.exports="pauseall"}),57953:(p=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */p.exports="remove"}),68339:(p=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */p.exports="resumeall"}),74943:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */p.exports={ADD_ANIMATION:t(57090),ANIMATION_COMPLETE:t(25312),ANIMATION_COMPLETE_KEY:t(89580),ANIMATION_REPEAT:t(52860),ANIMATION_RESTART:t(63850),ANIMATION_START:t(99085),ANIMATION_STOP:t(28087),ANIMATION_UPDATE:t(1794),PAUSE_ALL:t(52562),REMOVE_ANIMATION:t(57953),RESUME_ALL:t(68339)}}),60421:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */p.exports={Animation:t(42099),AnimationFrame:t(41138),AnimationManager:t(60848),AnimationState:t(9674),Events:t(74943)}}),2161:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(83419),c=t(90330),o=t(50792),r=t(24736),n=new l({initialize:function(){this.entries=new c,this.events=new o},add:function(e,s){return this.entries.set(e,s),this.events.emit(r.ADD,this,e,s),this},has:function(e){return this.entries.has(e)},exists:function(e){return this.entries.has(e)},get:function(e){return this.entries.get(e)},remove:function(e){var s=this.get(e);return s&&(this.entries.delete(e),this.events.emit(r.REMOVE,this,e,s.data)),this},getKeys:function(){return this.entries.keys()},destroy:function(){this.entries.clear(),this.events.removeAllListeners(),this.entries=null,this.events=null}});p.exports=n}),24047:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(2161),c=t(83419),o=t(8443),r=new c({initialize:function(e){this.game=e,this.binary=new l,this.bitmapFont=new l,this.json=new l,this.physics=new l,this.shader=new l,this.audio=new l,this.video=new l,this.text=new l,this.html=new l,this.obj=new l,this.tilemap=new l,this.xml=new l,this.custom={},this.game.events.once(o.DESTROY,this.destroy,this)},addCustom:function(n){return this.custom.hasOwnProperty(n)||(this.custom[n]=new l),this.custom[n]},destroy:function(){for(var n=["binary","bitmapFont","json","physics","shader","audio","video","text","html","obj","tilemap","xml"],e=0;e<n.length;e++)this[n[e]].destroy(),this[n[e]]=null;for(var s in this.custom)this.custom[s].destroy();this.custom=null,this.game=null}});p.exports=r}),51464:(p=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */p.exports="add"}),59261:(p=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */p.exports="remove"}),24736:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */p.exports={ADD:t(51464),REMOVE:t(59261)}}),83388:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */p.exports={BaseCache:t(2161),CacheManager:t(24047),Events:t(24736)}}),71911:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(83419),c=t(31401),o=t(39506),r=t(50792),n=t(19715),e=t(87841),s=t(61340),a=t(80333),i=t(26099),h=new l({Extends:r,Mixins:[c.AlphaSingle,c.Visible],initialize:function(d,f,v,m){d===void 0&&(d=0),f===void 0&&(f=0),v===void 0&&(v=0),m===void 0&&(m=0),r.call(this),this.scene,this.sceneManager,this.scaleManager,this.cameraManager,this.id=0,this.name="",this.roundPixels=!1,this.useBounds=!1,this.worldView=new e,this.dirty=!0,this._x=d,this._y=f,this._width=v,this._height=m,this._bounds=new e,this._scrollX=0,this._scrollY=0,this._zoomX=1,this._zoomY=1,this._rotation=0,this.matrix=new s,this.transparent=!0,this.backgroundColor=a("rgba(0,0,0,0)"),this.disableCull=!1,this.culledObjects=[],this.midPoint=new i(v/2,m/2),this.originX=.5,this.originY=.5,this._customViewport=!1,this.mask=null,this._maskCamera=null,this.renderList=[],this.isSceneCamera=!0,this.renderRoundPixels=!0},addToRenderList:function(u){this.renderList.push(u)},setOrigin:function(u,d){return u===void 0&&(u=.5),d===void 0&&(d=u),this.originX=u,this.originY=d,this},getScroll:function(u,d,f){f===void 0&&(f=new i);var v=this.width*.5,m=this.height*.5;return f.x=u-v,f.y=d-m,this.useBounds&&(f.x=this.clampX(f.x),f.y=this.clampY(f.y)),f},centerOnX:function(u){var d=this.width*.5;return this.midPoint.x=u,this.scrollX=u-d,this.useBounds&&(this.scrollX=this.clampX(this.scrollX)),this},centerOnY:function(u){var d=this.height*.5;return this.midPoint.y=u,this.scrollY=u-d,this.useBounds&&(this.scrollY=this.clampY(this.scrollY)),this},centerOn:function(u,d){return this.centerOnX(u),this.centerOnY(d),this},centerToBounds:function(){if(this.useBounds){var u=this._bounds,d=this.width*.5,f=this.height*.5;this.midPoint.set(u.centerX,u.centerY),this.scrollX=u.centerX-d,this.scrollY=u.centerY-f}return this},centerToSize:function(){return this.scrollX=this.width*.5,this.scrollY=this.height*.5,this},cull:function(u){if(this.disableCull)return u;var d=this.matrix.matrix,f=d[0],v=d[1],m=d[2],x=d[3],g=f*x-v*m;if(!g)return u;var T=d[4],S=d[5],C=this.scrollX,E=this.scrollY,P=this.width,A=this.height,M=this.y,R=M+A,L=this.x,w=L+P,N=this.culledObjects,b=u.length;g=1/g,N.length=0;for(var z=0;z<b;++z){var D=u[z];if(!D.hasOwnProperty("width")||D.parentContainer){N.push(D);continue}var B=D.width,F=D.height,U=D.x-C*D.scrollFactorX-B*D.originX,O=D.y-E*D.scrollFactorY-F*D.originY,X=U*f+O*m+T,H=U*v+O*x+S,Z=(U+B)*f+(O+F)*m+T,J=(U+B)*v+(O+F)*x+S;Z>L&&X<w&&J>M&&H<R&&N.push(D)}return N},getWorldPoint:function(u,d,f){f===void 0&&(f=new i);var v=this.matrix.matrix,m=v[0],x=v[1],g=v[2],T=v[3],S=v[4],C=v[5],E=m*T-x*g;if(!E)return f.x=u,f.y=d,f;E=1/E;var P=T*E,A=-x*E,M=-g*E,R=m*E,L=(g*C-T*S)*E,w=(x*S-m*C)*E,N=Math.cos(this.rotation),b=Math.sin(this.rotation),z=this.zoomX,D=this.zoomY,B=this.scrollX,F=this.scrollY,U=u+(B*N-F*b)*z,O=d+(B*b+F*N)*D;return f.x=U*P+O*M+L,f.y=U*A+O*R+w,f},ignore:function(u){var d=this.id;Array.isArray(u)||(u=[u]);for(var f=0;f<u.length;f++){var v=u[f];Array.isArray(v)?this.ignore(v):v.isParent?this.ignore(v.getChildren()):v.cameraFilter|=d}return this},clampX:function(u){var d=this._bounds,f=this.displayWidth,v=d.x+(f-this.width)/2,m=Math.max(v,v+d.width-f);return u<v?u=v:u>m&&(u=m),u},clampY:function(u){var d=this._bounds,f=this.displayHeight,v=d.y+(f-this.height)/2,m=Math.max(v,v+d.height-f);return u<v?u=v:u>m&&(u=m),u},removeBounds:function(){return this.useBounds=!1,this.dirty=!0,this._bounds.setEmpty(),this},setAngle:function(u){return u===void 0&&(u=0),this.rotation=o(u),this},setBackgroundColor:function(u){return u===void 0&&(u="rgba(0,0,0,0)"),this.backgroundColor=a(u),this.transparent=this.backgroundColor.alpha===0,this},setBounds:function(u,d,f,v,m){return m===void 0&&(m=!1),this._bounds.setTo(u,d,f,v),this.dirty=!0,this.useBounds=!0,m?this.centerToBounds():(this.scrollX=this.clampX(this.scrollX),this.scrollY=this.clampY(this.scrollY)),this},getBounds:function(u){u===void 0&&(u=new e);var d=this._bounds;return u.setTo(d.x,d.y,d.width,d.height),u},setName:function(u){return u===void 0&&(u=""),this.name=u,this},setPosition:function(u,d){return d===void 0&&(d=u),this.x=u,this.y=d,this},setRotation:function(u){return u===void 0&&(u=0),this.rotation=u,this},setRoundPixels:function(u){return this.roundPixels=u,this},setScene:function(u,d){d===void 0&&(d=!0),this.scene&&this._customViewport&&this.sceneManager.customViewports--,this.scene=u,this.isSceneCamera=d;var f=u.sys;return this.sceneManager=f.game.scene,this.scaleManager=f.scale,this.cameraManager=f.cameras,this.updateSystem(),this},setScroll:function(u,d){return d===void 0&&(d=u),this.scrollX=u,this.scrollY=d,this},setSize:function(u,d){return d===void 0&&(d=u),this.width=u,this.height=d,this},setViewport:function(u,d,f,v){return this.x=u,this.y=d,this.width=f,this.height=v,this},setZoom:function(u,d){return u===void 0&&(u=1),d===void 0&&(d=u),u===0&&(u=.001),d===0&&(d=.001),this.zoomX=u,this.zoomY=d,this},setMask:function(u,d){return d===void 0&&(d=!0),this.mask=u,this._maskCamera=d?this.cameraManager.default:this,this},clearMask:function(u){return u===void 0&&(u=!1),u&&this.mask&&this.mask.destroy(),this.mask=null,this},toJSON:function(){var u={name:this.name,x:this.x,y:this.y,width:this.width,height:this.height,zoom:this.zoom,rotation:this.rotation,roundPixels:this.roundPixels,scrollX:this.scrollX,scrollY:this.scrollY,backgroundColor:this.backgroundColor.rgba};return this.useBounds&&(u.bounds={x:this._bounds.x,y:this._bounds.y,width:this._bounds.width,height:this._bounds.height}),u},update:function(){},setIsSceneCamera:function(u){return this.isSceneCamera=u,this},updateSystem:function(){if(!(!this.scaleManager||!this.isSceneCamera)){var u=this._x!==0||this._y!==0||this.scaleManager.width!==this._width||this.scaleManager.height!==this._height,d=this.sceneManager;u&&!this._customViewport?d.customViewports++:!u&&this._customViewport&&d.customViewports--,this.dirty=!0,this._customViewport=u}},destroy:function(){this.emit(n.DESTROY,this),this.removeAllListeners(),this.matrix.destroy(),this.culledObjects=[],this._customViewport&&this.sceneManager.customViewports--,this.renderList=[],this._bounds=null,this.scene=null,this.scaleManager=null,this.sceneManager=null,this.cameraManager=null},x:{get:function(){return this._x},set:function(u){this._x=u,this.updateSystem()}},y:{get:function(){return this._y},set:function(u){this._y=u,this.updateSystem()}},width:{get:function(){return this._width},set:function(u){this._width=u,this.updateSystem()}},height:{get:function(){return this._height},set:function(u){this._height=u,this.updateSystem()}},scrollX:{get:function(){return this._scrollX},set:function(u){u!==this._scrollX&&(this._scrollX=u,this.dirty=!0)}},scrollY:{get:function(){return this._scrollY},set:function(u){u!==this._scrollY&&(this._scrollY=u,this.dirty=!0)}},zoom:{get:function(){return(this._zoomX+this._zoomY)/2},set:function(u){this._zoomX=u,this._zoomY=u,this.dirty=!0}},zoomX:{get:function(){return this._zoomX},set:function(u){this._zoomX=u,this.dirty=!0}},zoomY:{get:function(){return this._zoomY},set:function(u){this._zoomY=u,this.dirty=!0}},rotation:{get:function(){return this._rotation},set:function(u){this._rotation=u,this.dirty=!0}},centerX:{get:function(){return this.x+.5*this.width}},centerY:{get:function(){return this.y+.5*this.height}},displayWidth:{get:function(){return this.width/this.zoomX}},displayHeight:{get:function(){return this.height/this.zoomY}}});p.exports=h}),38058:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(71911),c=t(67502),o=t(45319),r=t(83419),n=t(31401),e=t(20052),s=t(19715),a=t(28915),i=t(87841),h=t(26099),u=new r({Extends:l,Mixins:[n.PostPipeline],initialize:function(f,v,m,x){l.call(this,f,v,m,x),this.initPostPipeline(),this.inputEnabled=!0,this.fadeEffect=new e.Fade(this),this.flashEffect=new e.Flash(this),this.shakeEffect=new e.Shake(this),this.panEffect=new e.Pan(this),this.rotateToEffect=new e.RotateTo(this),this.zoomEffect=new e.Zoom(this),this.lerp=new h(1,1),this.followOffset=new h,this.deadzone=null,this._follow=null},setDeadzone:function(d,f){if(d===void 0)this.deadzone=null;else{if(this.deadzone?(this.deadzone.width=d,this.deadzone.height=f):this.deadzone=new i(0,0,d,f),this._follow){var v=this.width/2,m=this.height/2,x=this._follow.x-this.followOffset.x,g=this._follow.y-this.followOffset.y;this.midPoint.set(x,g),this.scrollX=x-v,this.scrollY=g-m}c(this.deadzone,this.midPoint.x,this.midPoint.y)}return this},fadeIn:function(d,f,v,m,x,g){return this.fadeEffect.start(!1,d,f,v,m,!0,x,g)},fadeOut:function(d,f,v,m,x,g){return this.fadeEffect.start(!0,d,f,v,m,!0,x,g)},fadeFrom:function(d,f,v,m,x,g,T){return this.fadeEffect.start(!1,d,f,v,m,x,g,T)},fade:function(d,f,v,m,x,g,T){return this.fadeEffect.start(!0,d,f,v,m,x,g,T)},flash:function(d,f,v,m,x,g,T){return this.flashEffect.start(d,f,v,m,x,g,T)},shake:function(d,f,v,m,x){return this.shakeEffect.start(d,f,v,m,x)},pan:function(d,f,v,m,x,g,T){return this.panEffect.start(d,f,v,m,x,g,T)},rotateTo:function(d,f,v,m,x,g,T){return this.rotateToEffect.start(d,f,v,m,x,g,T)},zoomTo:function(d,f,v,m,x,g){return this.zoomEffect.start(d,f,v,m,x,g)},preRender:function(){this.renderList.length=0;var d=this.width,f=this.height,v=d*.5,m=f*.5,x=this.zoomX,g=this.zoomY,T=this.matrix;this.renderRoundPixels=this.roundPixels&&Number.isInteger(x)&&Number.isInteger(g);var S=d*this.originX,C=f*this.originY,E=this._follow,P=this.deadzone,A=this.scrollX,M=this.scrollY;P&&c(P,this.midPoint.x,this.midPoint.y);var R=!1;if(E&&!this.panEffect.isRunning){var L=this.lerp,w=E.x-this.followOffset.x,N=E.y-this.followOffset.y;P?(w<P.x?A=a(A,A-(P.x-w),L.x):w>P.right&&(A=a(A,A+(w-P.right),L.x)),N<P.y?M=a(M,M-(P.y-N),L.y):N>P.bottom&&(M=a(M,M+(N-P.bottom),L.y))):(A=a(A,w-S,L.x),M=a(M,N-C,L.y)),R=!0}this.roundPixels&&(A=Math.floor(A),M=Math.floor(M)),this.useBounds&&(A=this.clampX(A),M=this.clampY(M)),this.scrollX=A,this.scrollY=M;var b=A+v,z=M+m;this.midPoint.set(b,z);var D=Math.floor(d/x+.5),B=Math.floor(f/g+.5),F=Math.floor(b-D/2+.5),U=Math.floor(z-B/2+.5);this.worldView.setTo(F,U,D,B),T.applyITRS(Math.floor(this.x+S+.5),Math.floor(this.y+C+.5),this.rotation,x,g),T.translate(-S,-C),this.shakeEffect.preRender(),R&&this.emit(s.FOLLOW_UPDATE,this,E)},setLerp:function(d,f){return d===void 0&&(d=1),f===void 0&&(f=d),this.lerp.set(d,f),this},setFollowOffset:function(d,f){return d===void 0&&(d=0),f===void 0&&(f=0),this.followOffset.set(d,f),this},startFollow:function(d,f,v,m,x,g){f===void 0&&(f=!1),v===void 0&&(v=1),m===void 0&&(m=v),x===void 0&&(x=0),g===void 0&&(g=x),this._follow=d,this.roundPixels=f,v=o(v,0,1),m=o(m,0,1),this.lerp.set(v,m),this.followOffset.set(x,g);var T=this.width/2,S=this.height/2,C=d.x-x,E=d.y-g;return this.midPoint.set(C,E),this.scrollX=C-T,this.scrollY=E-S,this.useBounds&&(this.scrollX=this.clampX(this.scrollX),this.scrollY=this.clampY(this.scrollY)),this},stopFollow:function(){return this._follow=null,this},resetFX:function(){return this.rotateToEffect.reset(),this.panEffect.reset(),this.shakeEffect.reset(),this.flashEffect.reset(),this.fadeEffect.reset(),this},update:function(d,f){this.visible&&(this.rotateToEffect.update(d,f),this.panEffect.update(d,f),this.zoomEffect.update(d,f),this.shakeEffect.update(d,f),this.flashEffect.update(d,f),this.fadeEffect.update(d,f))},destroy:function(){this.resetFX(),l.prototype.destroy.call(this),this._follow=null,this.deadzone=null}});p.exports=u}),32743:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(38058),c=t(83419),o=t(95540),r=t(37277),n=t(37303),e=t(97480),s=t(44594),a=new c({initialize:function(h){this.scene=h,this.systems=h.sys,this.roundPixels=h.sys.game.config.roundPixels,this.cameras=[],this.main,this.default,h.sys.events.once(s.BOOT,this.boot,this),h.sys.events.on(s.START,this.start,this)},boot:function(){var i=this.systems;i.settings.cameras?this.fromJSON(i.settings.cameras):this.add(),this.main=this.cameras[0],this.default=new l(0,0,i.scale.width,i.scale.height).setScene(this.scene),i.game.scale.on(e.RESIZE,this.onResize,this),this.systems.events.once(s.DESTROY,this.destroy,this)},start:function(){if(!this.main){var i=this.systems;i.settings.cameras?this.fromJSON(i.settings.cameras):this.add(),this.main=this.cameras[0]}var h=this.systems.events;h.on(s.UPDATE,this.update,this),h.once(s.SHUTDOWN,this.shutdown,this)},add:function(i,h,u,d,f,v){i===void 0&&(i=0),h===void 0&&(h=0),u===void 0&&(u=this.scene.sys.scale.width),d===void 0&&(d=this.scene.sys.scale.height),f===void 0&&(f=!1),v===void 0&&(v="");var m=new l(i,h,u,d);return m.setName(v),m.setScene(this.scene),m.setRoundPixels(this.roundPixels),m.id=this.getNextID(),this.cameras.push(m),f&&(this.main=m),m},addExisting:function(i,h){h===void 0&&(h=!1);var u=this.cameras.indexOf(i);return u===-1?(i.id=this.getNextID(),i.setRoundPixels(this.roundPixels),this.cameras.push(i),h&&(this.main=i),i):null},getNextID:function(){for(var i=this.cameras,h=1,u=0;u<32;u++){for(var d=!1,f=0;f<i.length;f++){var v=i[f];if(v&&v.id===h){d=!0;continue}}if(d)h=h<<1;else return h}return 0},getTotal:function(i){i===void 0&&(i=!1);for(var h=0,u=this.cameras,d=0;d<u.length;d++){var f=u[d];(!i||i&&f.visible)&&h++}return h},fromJSON:function(i){Array.isArray(i)||(i=[i]);for(var h=this.scene.sys.scale.width,u=this.scene.sys.scale.height,d=0;d<i.length;d++){var f=i[d],v=o(f,"x",0),m=o(f,"y",0),x=o(f,"width",h),g=o(f,"height",u),T=this.add(v,m,x,g);T.name=o(f,"name",""),T.zoom=o(f,"zoom",1),T.rotation=o(f,"rotation",0),T.scrollX=o(f,"scrollX",0),T.scrollY=o(f,"scrollY",0),T.roundPixels=o(f,"roundPixels",!1),T.visible=o(f,"visible",!0);var S=o(f,"backgroundColor",!1);S&&T.setBackgroundColor(S);var C=o(f,"bounds",null);if(C){var E=o(C,"x",0),P=o(C,"y",0),A=o(C,"width",h),M=o(C,"height",u);T.setBounds(E,P,A,M)}}return this},getCamera:function(i){for(var h=this.cameras,u=0;u<h.length;u++)if(h[u].name===i)return h[u];return null},getCamerasBelowPointer:function(i){for(var h=this.cameras,u=i.x,d=i.y,f=[],v=0;v<h.length;v++){var m=h[v];m.visible&&m.inputEnabled&&n(m,u,d)&&f.unshift(m)}return f},remove:function(i,h){h===void 0&&(h=!0),Array.isArray(i)||(i=[i]);for(var u=0,d=this.cameras,f=0;f<i.length;f++){var v=d.indexOf(i[f]);v!==-1&&(h?d[v].destroy():d[v].renderList=[],d.splice(v,1),u++)}return!this.main&&d[0]&&(this.main=d[0]),u},render:function(i,h){for(var u=this.scene,d=this.cameras,f=0;f<d.length;f++){var v=d[f];if(v.visible&&v.alpha>0){v.preRender();var m=this.getVisibleChildren(h.getChildren(),v);i.render(u,m,v)}}},getVisibleChildren:function(i,h){return i.filter(function(u){return u.willRender(h)})},resetAll:function(){for(var i=0;i<this.cameras.length;i++)this.cameras[i].destroy();return this.cameras=[],this.main=this.add(),this.main},update:function(i,h){for(var u=0;u<this.cameras.length;u++)this.cameras[u].update(i,h)},onResize:function(i,h,u,d,f){for(var v=0;v<this.cameras.length;v++){var m=this.cameras[v];m._x===0&&m._y===0&&m._width===d&&m._height===f&&m.setSize(h.width,h.height)}},resize:function(i,h){for(var u=0;u<this.cameras.length;u++)this.cameras[u].setSize(i,h)},shutdown:function(){this.main=void 0;for(var i=0;i<this.cameras.length;i++)this.cameras[i].destroy();this.cameras=[];var h=this.systems.events;h.off(s.UPDATE,this.update,this),h.off(s.SHUTDOWN,this.shutdown,this)},destroy:function(){this.shutdown(),this.default.destroy(),this.systems.events.off(s.START,this.start,this),this.systems.events.off(s.DESTROY,this.destroy,this),this.systems.game.scale.off(e.RESIZE,this.onResize,this),this.scene=null,this.systems=null}});r.register("CameraManager",a,"cameras"),p.exports=a}),5020:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(45319),c=t(83419),o=t(19715),r=new c({initialize:function(e){this.camera=e,this.isRunning=!1,this.isComplete=!1,this.direction=!0,this.duration=0,this.red=0,this.green=0,this.blue=0,this.alpha=0,this.progress=0,this._elapsed=0,this._onUpdate,this._onUpdateScope},start:function(n,e,s,a,i,h,u,d){if(n===void 0&&(n=!0),e===void 0&&(e=1e3),s===void 0&&(s=0),a===void 0&&(a=0),i===void 0&&(i=0),h===void 0&&(h=!1),u===void 0&&(u=null),d===void 0&&(d=this.camera.scene),!h&&this.isRunning)return this.camera;this.isRunning=!0,this.isComplete=!1,this.duration=e,this.direction=n,this.progress=0,this.red=s,this.green=a,this.blue=i,this.alpha=n?Number.MIN_VALUE:1,this._elapsed=0,this._onUpdate=u,this._onUpdateScope=d;var f=n?o.FADE_OUT_START:o.FADE_IN_START;return this.camera.emit(f,this.camera,this,e,s,a,i),this.camera},update:function(n,e){this.isRunning&&(this._elapsed+=e,this.progress=l(this._elapsed/this.duration,0,1),this._onUpdate&&this._onUpdate.call(this._onUpdateScope,this.camera,this.progress),this._elapsed<this.duration?this.alpha=this.direction?this.progress:1-this.progress:(this.alpha=this.direction?1:0,this.effectComplete()))},postRenderCanvas:function(n){if(!this.isRunning&&!this.isComplete)return!1;var e=this.camera;return n.fillStyle="rgba("+this.red+","+this.green+","+this.blue+","+this.alpha+")",n.fillRect(e.x,e.y,e.width,e.height),!0},postRenderWebGL:function(n,e){if(!this.isRunning&&!this.isComplete)return!1;var s=this.camera,a=this.red/255,i=this.green/255,h=this.blue/255;return n.drawFillRect(s.x,s.y,s.width,s.height,e(h,i,a,1),this.alpha),!0},effectComplete:function(){this._onUpdate=null,this._onUpdateScope=null,this.isRunning=!1,this.isComplete=!0;var n=this.direction?o.FADE_OUT_COMPLETE:o.FADE_IN_COMPLETE;this.camera.emit(n,this.camera,this)},reset:function(){this.isRunning=!1,this.isComplete=!1,this._onUpdate=null,this._onUpdateScope=null},destroy:function(){this.reset(),this.camera=null}});p.exports=r}),10662:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(45319),c=t(83419),o=t(19715),r=new c({initialize:function(e){this.camera=e,this.isRunning=!1,this.duration=0,this.red=0,this.green=0,this.blue=0,this.alpha=1,this.progress=0,this._elapsed=0,this._alpha,this._onUpdate,this._onUpdateScope},start:function(n,e,s,a,i,h,u){return n===void 0&&(n=250),e===void 0&&(e=255),s===void 0&&(s=255),a===void 0&&(a=255),i===void 0&&(i=!1),h===void 0&&(h=null),u===void 0&&(u=this.camera.scene),!i&&this.isRunning?this.camera:(this.isRunning=!0,this.duration=n,this.progress=0,this.red=e,this.green=s,this.blue=a,this._alpha=this.alpha,this._elapsed=0,this._onUpdate=h,this._onUpdateScope=u,this.camera.emit(o.FLASH_START,this.camera,this,n,e,s,a),this.camera)},update:function(n,e){this.isRunning&&(this._elapsed+=e,this.progress=l(this._elapsed/this.duration,0,1),this._onUpdate&&this._onUpdate.call(this._onUpdateScope,this.camera,this.progress),this._elapsed<this.duration?this.alpha=this._alpha*(1-this.progress):this.effectComplete())},postRenderCanvas:function(n){if(!this.isRunning)return!1;var e=this.camera;return n.fillStyle="rgba("+this.red+","+this.green+","+this.blue+","+this.alpha+")",n.fillRect(e.x,e.y,e.width,e.height),!0},postRenderWebGL:function(n,e){if(!this.isRunning)return!1;var s=this.camera,a=this.red/255,i=this.green/255,h=this.blue/255;return n.drawFillRect(s.x,s.y,s.width,s.height,e(h,i,a,1),this.alpha),!0},effectComplete:function(){this.alpha=this._alpha,this._onUpdate=null,this._onUpdateScope=null,this.isRunning=!1,this.camera.emit(o.FLASH_COMPLETE,this.camera,this)},reset:function(){this.isRunning=!1,this._onUpdate=null,this._onUpdateScope=null},destroy:function(){this.reset(),this.camera=null}});p.exports=r}),20359:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(45319),c=t(83419),o=t(62640),r=t(19715),n=t(26099),e=new c({initialize:function(a){this.camera=a,this.isRunning=!1,this.duration=0,this.source=new n,this.current=new n,this.destination=new n,this.ease,this.progress=0,this._elapsed=0,this._onUpdate,this._onUpdateScope},start:function(s,a,i,h,u,d,f){i===void 0&&(i=1e3),h===void 0&&(h=o.Linear),u===void 0&&(u=!1),d===void 0&&(d=null),f===void 0&&(f=this.camera.scene);var v=this.camera;return!u&&this.isRunning||(this.isRunning=!0,this.duration=i,this.progress=0,this.source.set(v.scrollX,v.scrollY),this.destination.set(s,a),v.getScroll(s,a,this.current),typeof h=="string"&&o.hasOwnProperty(h)?this.ease=o[h]:typeof h=="function"&&(this.ease=h),this._elapsed=0,this._onUpdate=d,this._onUpdateScope=f,this.camera.emit(r.PAN_START,this.camera,this,i,s,a)),v},update:function(s,a){if(this.isRunning){this._elapsed+=a;var i=l(this._elapsed/this.duration,0,1);this.progress=i;var h=this.camera;if(this._elapsed<this.duration){var u=this.ease(i);h.getScroll(this.destination.x,this.destination.y,this.current);var d=this.source.x+(this.current.x-this.source.x)*u,f=this.source.y+(this.current.y-this.source.y)*u;h.setScroll(d,f),this._onUpdate&&this._onUpdate.call(this._onUpdateScope,h,i,d,f)}else h.centerOn(this.destination.x,this.destination.y),this._onUpdate&&this._onUpdate.call(this._onUpdateScope,h,i,h.scrollX,h.scrollY),this.effectComplete()}},effectComplete:function(){this._onUpdate=null,this._onUpdateScope=null,this.isRunning=!1,this.camera.emit(r.PAN_COMPLETE,this.camera,this)},reset:function(){this.isRunning=!1,this._onUpdate=null,this._onUpdateScope=null},destroy:function(){this.reset(),this.camera=null,this.source=null,this.destination=null}});p.exports=e}),34208:((p,y,t)=>{/**
 * @author       Jason Nicholls <nicholls.jason@gmail.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */var l=t(45319),c=t(83419),o=t(19715),r=t(62640),n=new c({initialize:function(s){this.camera=s,this.isRunning=!1,this.duration=0,this.source=0,this.current=0,this.destination=0,this.ease,this.progress=0,this._elapsed=0,this._onUpdate,this._onUpdateScope,this.clockwise=!0,this.shortestPath=!1},start:function(e,s,a,i,h,u,d){a===void 0&&(a=1e3),i===void 0&&(i=r.Linear),h===void 0&&(h=!1),u===void 0&&(u=null),d===void 0&&(d=this.camera.scene),s===void 0&&(s=!1),this.shortestPath=s;var f=e;e<0?(f=-1*e,this.clockwise=!1):this.clockwise=!0;var v=360*Math.PI/180;f=f-Math.floor(f/v)*v;var m=this.camera;if(!h&&this.isRunning)return m;if(this.isRunning=!0,this.duration=a,this.progress=0,this.source=m.rotation,this.destination=f,typeof i=="string"&&r.hasOwnProperty(i)?this.ease=r[i]:typeof i=="function"&&(this.ease=i),this._elapsed=0,this._onUpdate=u,this._onUpdateScope=d,this.shortestPath){var x=0,g=0;this.destination>this.source?x=Math.abs(this.destination-this.source):x=Math.abs(this.destination+v)-this.source,this.source>this.destination?g=Math.abs(this.source-this.destination):g=Math.abs(this.source+v)-this.destination,x<g?this.clockwise=!0:x>g&&(this.clockwise=!1)}return this.camera.emit(o.ROTATE_START,this.camera,this,a,f),m},update:function(e,s){if(this.isRunning){this._elapsed+=s;var a=l(this._elapsed/this.duration,0,1);this.progress=a;var i=this.camera;if(this._elapsed<this.duration){var h=this.ease(a);this.current=i.rotation;var u=0,d=360*Math.PI/180,f=this.destination,v=this.current;this.clockwise===!1&&(f=this.current,v=this.destination),f>=v?u=Math.abs(f-v):u=Math.abs(f+d)-v;var m=0;this.clockwise?m=i.rotation+u*h:m=i.rotation-u*h,i.rotation=m,this._onUpdate&&this._onUpdate.call(this._onUpdateScope,i,a,m)}else i.rotation=this.destination,this._onUpdate&&this._onUpdate.call(this._onUpdateScope,i,a,this.destination),this.effectComplete()}},effectComplete:function(){this._onUpdate=null,this._onUpdateScope=null,this.isRunning=!1,this.camera.emit(o.ROTATE_COMPLETE,this.camera,this)},reset:function(){this.isRunning=!1,this._onUpdate=null,this._onUpdateScope=null},destroy:function(){this.reset(),this.camera=null,this.source=null,this.destination=null}});p.exports=n}),30330:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(45319),c=t(83419),o=t(19715),r=t(26099),n=new c({initialize:function(s){this.camera=s,this.isRunning=!1,this.duration=0,this.intensity=new r,this.progress=0,this._elapsed=0,this._offsetX=0,this._offsetY=0,this._onUpdate,this._onUpdateScope},start:function(e,s,a,i,h){return e===void 0&&(e=100),s===void 0&&(s=.05),a===void 0&&(a=!1),i===void 0&&(i=null),h===void 0&&(h=this.camera.scene),!a&&this.isRunning?this.camera:(this.isRunning=!0,this.duration=e,this.progress=0,typeof s=="number"?this.intensity.set(s):this.intensity.set(s.x,s.y),this._elapsed=0,this._offsetX=0,this._offsetY=0,this._onUpdate=i,this._onUpdateScope=h,this.camera.emit(o.SHAKE_START,this.camera,this,e,s),this.camera)},preRender:function(){this.isRunning&&this.camera.matrix.translate(this._offsetX,this._offsetY)},update:function(e,s){if(this.isRunning)if(this._elapsed+=s,this.progress=l(this._elapsed/this.duration,0,1),this._onUpdate&&this._onUpdate.call(this._onUpdateScope,this.camera,this.progress),this._elapsed<this.duration){var a=this.intensity,i=this.camera.width,h=this.camera.height,u=this.camera.zoom;this._offsetX=(Math.random()*a.x*i*2-a.x*i)*u,this._offsetY=(Math.random()*a.y*h*2-a.y*h)*u,this.camera.roundPixels&&(this._offsetX=Math.round(this._offsetX),this._offsetY=Math.round(this._offsetY))}else this.effectComplete()},effectComplete:function(){this._offsetX=0,this._offsetY=0,this._onUpdate=null,this._onUpdateScope=null,this.isRunning=!1,this.camera.emit(o.SHAKE_COMPLETE,this.camera,this)},reset:function(){this.isRunning=!1,this._offsetX=0,this._offsetY=0,this._onUpdate=null,this._onUpdateScope=null},destroy:function(){this.reset(),this.camera=null,this.intensity=null}});p.exports=n}),45641:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(45319),c=t(83419),o=t(62640),r=t(19715),n=new c({initialize:function(s){this.camera=s,this.isRunning=!1,this.duration=0,this.source=1,this.destination=1,this.ease,this.progress=0,this._elapsed=0,this._onUpdate,this._onUpdateScope},start:function(e,s,a,i,h,u){s===void 0&&(s=1e3),a===void 0&&(a=o.Linear),i===void 0&&(i=!1),h===void 0&&(h=null),u===void 0&&(u=this.camera.scene);var d=this.camera;return!i&&this.isRunning||(this.isRunning=!0,this.duration=s,this.progress=0,this.source=d.zoom,this.destination=e,typeof a=="string"&&o.hasOwnProperty(a)?this.ease=o[a]:typeof a=="function"&&(this.ease=a),this._elapsed=0,this._onUpdate=h,this._onUpdateScope=u,this.camera.emit(r.ZOOM_START,this.camera,this,s,e)),d},update:function(e,s){this.isRunning&&(this._elapsed+=s,this.progress=l(this._elapsed/this.duration,0,1),this._elapsed<this.duration?(this.camera.zoom=this.source+(this.destination-this.source)*this.ease(this.progress),this._onUpdate&&this._onUpdate.call(this._onUpdateScope,this.camera,this.progress,this.camera.zoom)):(this.camera.zoom=this.destination,this._onUpdate&&this._onUpdate.call(this._onUpdateScope,this.camera,this.progress,this.destination),this.effectComplete()))},effectComplete:function(){this._onUpdate=null,this._onUpdateScope=null,this.isRunning=!1,this.camera.emit(r.ZOOM_COMPLETE,this.camera,this)},reset:function(){this.isRunning=!1,this._onUpdate=null,this._onUpdateScope=null},destroy:function(){this.reset(),this.camera=null}});p.exports=n}),20052:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */p.exports={Fade:t(5020),Flash:t(10662),Pan:t(20359),Shake:t(30330),RotateTo:t(34208),Zoom:t(45641)}}),16438:(p=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */p.exports="cameradestroy"}),32726:(p=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */p.exports="camerafadeincomplete"}),87807:(p=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */p.exports="camerafadeinstart"}),45917:(p=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */p.exports="camerafadeoutcomplete"}),95666:(p=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */p.exports="camerafadeoutstart"}),47056:(p=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */p.exports="cameraflashcomplete"}),91261:(p=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */p.exports="cameraflashstart"}),45047:(p=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */p.exports="followupdate"}),81927:(p=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */p.exports="camerapancomplete"}),74264:(p=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */p.exports="camerapanstart"}),54419:(p=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */p.exports="postrender"}),79330:(p=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */p.exports="prerender"}),93183:(p=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */p.exports="camerarotatecomplete"}),80112:(p=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */p.exports="camerarotatestart"}),62252:(p=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */p.exports="camerashakecomplete"}),86017:(p=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */p.exports="camerashakestart"}),539:(p=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */p.exports="camerazoomcomplete"}),51892:(p=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */p.exports="camerazoomstart"}),19715:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */p.exports={DESTROY:t(16438),FADE_IN_COMPLETE:t(32726),FADE_IN_START:t(87807),FADE_OUT_COMPLETE:t(45917),FADE_OUT_START:t(95666),FLASH_COMPLETE:t(47056),FLASH_START:t(91261),FOLLOW_UPDATE:t(45047),PAN_COMPLETE:t(81927),PAN_START:t(74264),POST_RENDER:t(54419),PRE_RENDER:t(79330),ROTATE_COMPLETE:t(93183),ROTATE_START:t(80112),SHAKE_COMPLETE:t(62252),SHAKE_START:t(86017),ZOOM_COMPLETE:t(539),ZOOM_START:t(51892)}}),87969:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */p.exports={Camera:t(38058),BaseCamera:t(71911),CameraManager:t(32743),Effects:t(20052),Events:t(19715)}}),63091:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(83419),c=t(35154),o=new l({initialize:function(n){this.camera=c(n,"camera",null),this.left=c(n,"left",null),this.right=c(n,"right",null),this.up=c(n,"up",null),this.down=c(n,"down",null),this.zoomIn=c(n,"zoomIn",null),this.zoomOut=c(n,"zoomOut",null),this.zoomSpeed=c(n,"zoomSpeed",.01),this.minZoom=c(n,"minZoom",.001),this.maxZoom=c(n,"maxZoom",1e3),this.speedX=0,this.speedY=0;var e=c(n,"speed",null);typeof e=="number"?(this.speedX=e,this.speedY=e):(this.speedX=c(n,"speed.x",0),this.speedY=c(n,"speed.y",0)),this._zoom=0,this.active=this.camera!==null},start:function(){return this.active=this.camera!==null,this},stop:function(){return this.active=!1,this},setCamera:function(r){return this.camera=r,this},update:function(r){if(this.active){r===void 0&&(r=1);var n=this.camera;this.up&&this.up.isDown?n.scrollY-=this.speedY*r|0:this.down&&this.down.isDown&&(n.scrollY+=this.speedY*r|0),this.left&&this.left.isDown?n.scrollX-=this.speedX*r|0:this.right&&this.right.isDown&&(n.scrollX+=this.speedX*r|0),this.zoomIn&&this.zoomIn.isDown?(n.zoom-=this.zoomSpeed,n.zoom<this.minZoom&&(n.zoom=this.minZoom)):this.zoomOut&&this.zoomOut.isDown&&(n.zoom+=this.zoomSpeed,n.zoom>this.maxZoom&&(n.zoom=this.maxZoom))}},destroy:function(){this.camera=null,this.left=null,this.right=null,this.up=null,this.down=null,this.zoomIn=null,this.zoomOut=null}});p.exports=o}),58818:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(83419),c=t(35154),o=new l({initialize:function(n){this.camera=c(n,"camera",null),this.left=c(n,"left",null),this.right=c(n,"right",null),this.up=c(n,"up",null),this.down=c(n,"down",null),this.zoomIn=c(n,"zoomIn",null),this.zoomOut=c(n,"zoomOut",null),this.zoomSpeed=c(n,"zoomSpeed",.01),this.minZoom=c(n,"minZoom",.001),this.maxZoom=c(n,"maxZoom",1e3),this.accelX=0,this.accelY=0;var e=c(n,"acceleration",null);typeof e=="number"?(this.accelX=e,this.accelY=e):(this.accelX=c(n,"acceleration.x",0),this.accelY=c(n,"acceleration.y",0)),this.dragX=0,this.dragY=0;var s=c(n,"drag",null);typeof s=="number"?(this.dragX=s,this.dragY=s):(this.dragX=c(n,"drag.x",0),this.dragY=c(n,"drag.y",0)),this.maxSpeedX=0,this.maxSpeedY=0;var a=c(n,"maxSpeed",null);typeof a=="number"?(this.maxSpeedX=a,this.maxSpeedY=a):(this.maxSpeedX=c(n,"maxSpeed.x",0),this.maxSpeedY=c(n,"maxSpeed.y",0)),this._speedX=0,this._speedY=0,this._zoom=0,this.active=this.camera!==null},start:function(){return this.active=this.camera!==null,this},stop:function(){return this.active=!1,this},setCamera:function(r){return this.camera=r,this},update:function(r){if(this.active){r===void 0&&(r=1);var n=this.camera;this._speedX>0?(this._speedX-=this.dragX*r,this._speedX<0&&(this._speedX=0)):this._speedX<0&&(this._speedX+=this.dragX*r,this._speedX>0&&(this._speedX=0)),this._speedY>0?(this._speedY-=this.dragY*r,this._speedY<0&&(this._speedY=0)):this._speedY<0&&(this._speedY+=this.dragY*r,this._speedY>0&&(this._speedY=0)),this.up&&this.up.isDown?(this._speedY+=this.accelY,this._speedY>this.maxSpeedY&&(this._speedY=this.maxSpeedY)):this.down&&this.down.isDown&&(this._speedY-=this.accelY,this._speedY<-this.maxSpeedY&&(this._speedY=-this.maxSpeedY)),this.left&&this.left.isDown?(this._speedX+=this.accelX,this._speedX>this.maxSpeedX&&(this._speedX=this.maxSpeedX)):this.right&&this.right.isDown&&(this._speedX-=this.accelX,this._speedX<-this.maxSpeedX&&(this._speedX=-this.maxSpeedX)),this.zoomIn&&this.zoomIn.isDown?this._zoom=-this.zoomSpeed:this.zoomOut&&this.zoomOut.isDown?this._zoom=this.zoomSpeed:this._zoom=0,this._speedX!==0&&(n.scrollX-=this._speedX*r|0),this._speedY!==0&&(n.scrollY-=this._speedY*r|0),this._zoom!==0&&(n.zoom+=this._zoom,n.zoom<this.minZoom?n.zoom=this.minZoom:n.zoom>this.maxZoom&&(n.zoom=this.maxZoom))}},destroy:function(){this.camera=null,this.left=null,this.right=null,this.up=null,this.down=null,this.zoomIn=null,this.zoomOut=null}});p.exports=o}),38865:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */p.exports={FixedKeyControl:t(63091),SmoothedKeyControl:t(58818)}}),26638:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */p.exports={Controls:t(38865),Scene2D:t(87969)}}),8054:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l={VERSION:"3.90.0",LOG_VERSION:"v390",BlendModes:t(10312),ScaleModes:t(29795),AUTO:0,CANVAS:1,WEBGL:2,HEADLESS:3,FOREVER:-1,NONE:4,UP:5,DOWN:6,LEFT:7,RIGHT:8};p.exports=l}),69547:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(83419),c=t(8054),o=t(42363),r=t(82264),n=t(95540),e=t(35154),s=t(41212),a=t(29747),i=t(75508),h=t(36060),u=t(80333),d=new l({initialize:function(v){v===void 0&&(v={});var m=["#ff0000","#ffff00","#00ff00","#00ffff","#000000"],x="#ffffff",g=e(v,"scale",null);this.width=e(g,"width",1024,v),this.height=e(g,"height",768,v),this.zoom=e(g,"zoom",1,v),this.parent=e(g,"parent",void 0,v),this.scaleMode=e(g,g?"mode":"scaleMode",0,v),this.expandParent=e(g,"expandParent",!0,v),this.autoRound=e(g,"autoRound",!1,v),this.autoCenter=e(g,"autoCenter",0,v),this.resizeInterval=e(g,"resizeInterval",500,v),this.fullscreenTarget=e(g,"fullscreenTarget",null,v),this.minWidth=e(g,"min.width",0,v),this.maxWidth=e(g,"max.width",0,v),this.minHeight=e(g,"min.height",0,v),this.maxHeight=e(g,"max.height",0,v),this.snapWidth=e(g,"snap.width",0,v),this.snapHeight=e(g,"snap.height",0,v),this.renderType=e(v,"type",c.AUTO),this.canvas=e(v,"canvas",null),this.context=e(v,"context",null),this.canvasStyle=e(v,"canvasStyle",null),this.customEnvironment=e(v,"customEnvironment",!1),this.sceneConfig=e(v,"scene",null),this.seed=e(v,"seed",[(Date.now()*Math.random()).toString()]),i.RND=new i.RandomDataGenerator(this.seed),this.gameTitle=e(v,"title",""),this.gameURL=e(v,"url","https://phaser.io/"+c.LOG_VERSION),this.gameVersion=e(v,"version",""),this.autoFocus=e(v,"autoFocus",!0),this.stableSort=e(v,"stableSort",-1),this.stableSort===-1&&(this.stableSort=r.browser.es2019?1:0),r.features.stableSort=this.stableSort,this.domCreateContainer=e(v,"dom.createContainer",!1),this.domPointerEvents=e(v,"dom.pointerEvents","none"),this.inputKeyboard=e(v,"input.keyboard",!0),this.inputKeyboardEventTarget=e(v,"input.keyboard.target",window),this.inputKeyboardCapture=e(v,"input.keyboard.capture",[]),this.inputMouse=e(v,"input.mouse",!0),this.inputMouseEventTarget=e(v,"input.mouse.target",null),this.inputMousePreventDefaultDown=e(v,"input.mouse.preventDefaultDown",!0),this.inputMousePreventDefaultUp=e(v,"input.mouse.preventDefaultUp",!0),this.inputMousePreventDefaultMove=e(v,"input.mouse.preventDefaultMove",!0),this.inputMousePreventDefaultWheel=e(v,"input.mouse.preventDefaultWheel",!0),this.inputTouch=e(v,"input.touch",r.input.touch),this.inputTouchEventTarget=e(v,"input.touch.target",null),this.inputTouchCapture=e(v,"input.touch.capture",!0),this.inputActivePointers=e(v,"input.activePointers",1),this.inputSmoothFactor=e(v,"input.smoothFactor",0),this.inputWindowEvents=e(v,"input.windowEvents",!0),this.inputGamepad=e(v,"input.gamepad",!1),this.inputGamepadEventTarget=e(v,"input.gamepad.target",window),this.disableContextMenu=e(v,"disableContextMenu",!1),this.audio=e(v,"audio",{}),this.hideBanner=e(v,"banner",null)===!1,this.hidePhaser=e(v,"banner.hidePhaser",!1),this.bannerTextColor=e(v,"banner.text",x),this.bannerBackgroundColor=e(v,"banner.background",m),this.gameTitle===""&&this.hidePhaser&&(this.hideBanner=!0),this.fps=e(v,"fps",null),this.disablePreFX=e(v,"disablePreFX",!1),this.disablePostFX=e(v,"disablePostFX",!1);var T=e(v,"render",null);this.pipeline=e(T,"pipeline",null,v),this.autoMobilePipeline=e(T,"autoMobilePipeline",!0,v),this.defaultPipeline=e(T,"defaultPipeline",h.MULTI_PIPELINE,v),this.antialias=e(T,"antialias",!0,v),this.antialiasGL=e(T,"antialiasGL",!0,v),this.mipmapFilter=e(T,"mipmapFilter","",v),this.desynchronized=e(T,"desynchronized",!1,v),this.roundPixels=e(T,"roundPixels",!1,v),this.pixelArt=e(T,"pixelArt",this.zoom!==1,v),this.pixelArt&&(this.antialias=!1,this.antialiasGL=!1,this.roundPixels=!0),this.transparent=e(T,"transparent",!1,v),this.clearBeforeRender=e(T,"clearBeforeRender",!0,v),this.preserveDrawingBuffer=e(T,"preserveDrawingBuffer",!1,v),this.premultipliedAlpha=e(T,"premultipliedAlpha",!0,v),this.failIfMajorPerformanceCaveat=e(T,"failIfMajorPerformanceCaveat",!1,v),this.powerPreference=e(T,"powerPreference","default",v),this.batchSize=e(T,"batchSize",4096,v),this.maxTextures=e(T,"maxTextures",-1,v),this.maxLights=e(T,"maxLights",10,v);var S=e(v,"backgroundColor",0);this.backgroundColor=u(S),this.transparent&&(this.backgroundColor=u(0),this.backgroundColor.alpha=0),this.preBoot=e(v,"callbacks.preBoot",a),this.postBoot=e(v,"callbacks.postBoot",a),this.physics=e(v,"physics",{}),this.defaultPhysicsSystem=e(this.physics,"default",!1),this.loaderBaseURL=e(v,"loader.baseURL",""),this.loaderPath=e(v,"loader.path",""),this.loaderMaxParallelDownloads=e(v,"loader.maxParallelDownloads",r.os.android?6:32),this.loaderCrossOrigin=e(v,"loader.crossOrigin",void 0),this.loaderResponseType=e(v,"loader.responseType",""),this.loaderAsync=e(v,"loader.async",!0),this.loaderUser=e(v,"loader.user",""),this.loaderPassword=e(v,"loader.password",""),this.loaderTimeout=e(v,"loader.timeout",0),this.loaderMaxRetries=e(v,"loader.maxRetries",2),this.loaderWithCredentials=e(v,"loader.withCredentials",!1),this.loaderImageLoadType=e(v,"loader.imageLoadType","XHR"),this.loaderLocalScheme=e(v,"loader.localScheme",["file://","capacitor://"]),this.glowFXQuality=e(v,"fx.glow.quality",.1),this.glowFXDistance=e(v,"fx.glow.distance",10),this.installGlobalPlugins=[],this.installScenePlugins=[];var C=e(v,"plugins",null),E=o.DefaultScene;C&&(Array.isArray(C)?this.defaultPlugins=C:s(C)&&(this.installGlobalPlugins=n(C,"global",[]),this.installScenePlugins=n(C,"scene",[]),Array.isArray(C.default)?E=C.default:Array.isArray(C.defaultMerge)&&(E=E.concat(C.defaultMerge)))),this.defaultPlugins=E;var P="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAg";this.defaultImage=e(v,"images.default",P+"AQMAAABJtOi3AAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAABVJREFUeF7NwIEAAAAAgKD9qdeocAMAoAABm3DkcAAAAABJRU5ErkJggg=="),this.missingImage=e(v,"images.missing",P+"CAIAAAD8GO2jAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAJ9JREFUeNq01ssOwyAMRFG46v//Mt1ESmgh+DFmE2GPOBARKb2NVjo+17PXLD8a1+pl5+A+wSgFygymWYHBb0FtsKhJDdZlncG2IzJ4ayoMDv20wTmSMzClEgbWYNTAkQ0Z+OJ+A/eWnAaR9+oxCF4Os0H8htsMUp+pwcgBBiMNnAwF8GqIgL2hAzaGFFgZauDPKABmowZ4GL369/0rwACp2yA/ttmvsQAAAABJRU5ErkJggg=="),this.whiteImage=e(v,"images.white","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABdJREFUeNpi/P//PwMMMDEgAdwcgAADAJZuAwXJYZOzAAAAAElFTkSuQmCC"),window&&(window.FORCE_WEBGL?this.renderType=c.WEBGL:window.FORCE_CANVAS&&(this.renderType=c.CANVAS))}});p.exports=d}),86054:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(20623),c=t(27919),o=t(8054),r=t(89357),n=function(e){var s=e.config;if((s.customEnvironment||s.canvas)&&s.renderType===o.AUTO)throw new Error("Must set explicit renderType in custom environment");if(!s.customEnvironment&&!s.canvas&&s.renderType!==o.HEADLESS)if(s.renderType===o.AUTO&&(s.renderType=r.webGL?o.WEBGL:o.CANVAS),s.renderType===o.WEBGL){if(!r.webGL)throw new Error("Cannot create WebGL context, aborting.")}else if(s.renderType===o.CANVAS){if(!r.canvas)throw new Error("Cannot create Canvas context, aborting.")}else throw new Error("Unknown value for renderer type: "+s.renderType);s.antialias||c.disableSmoothing();var a=e.scale.baseSize,i=a.width,h=a.height;if(s.canvas?(e.canvas=s.canvas,e.canvas.width=i,e.canvas.height=h):e.canvas=c.create(e,i,h,s.renderType),s.canvasStyle&&(e.canvas.style=s.canvasStyle),s.antialias||l.setCrisp(e.canvas),s.renderType!==o.HEADLESS){var u,d;u=t(68627),d=t(74797),s.renderType===o.WEBGL?e.renderer=new d(e):(e.renderer=new u(e),e.context=e.renderer.gameContext)}};p.exports=n}),96391:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(8054),c=function(o){var r=o.config;if(!r.hideBanner){var n="WebGL";r.renderType===l.CANVAS?n="Canvas":r.renderType===l.HEADLESS&&(n="Headless");var e=r.audio,s=o.device.audio,a;if(s.webAudio&&!e.disableWebAudio?a="Web Audio":e.noAudio||!s.webAudio&&!s.audioData?a="No Audio":a="HTML5 Audio",o.device.browser.ie)window.console&&console.log("Phaser v"+l.VERSION+" / https://phaser.io");else{var i="",h=[i];if(Array.isArray(r.bannerBackgroundColor)){var u;r.bannerBackgroundColor.forEach(function(f){i=i.concat("%c "),h.push("background: "+f),u=f}),h[h.length-1]="color: "+r.bannerTextColor+"; background: "+u}else i=i.concat("%c "),h.push("color: "+r.bannerTextColor+"; background: "+r.bannerBackgroundColor);h.push("background: transparent"),r.gameTitle&&(i=i.concat(r.gameTitle),r.gameVersion&&(i=i.concat(" v"+r.gameVersion)),r.hidePhaser||(i=i.concat(" / ")));var d="";r.hidePhaser||(i=i.concat("Phaser v"+l.VERSION+d+" ("+n+" | "+a+")")),i=i.concat(" %c "+r.gameURL),h[0]=i,console.log.apply(console,h)}}};p.exports=c}),50127:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(40366),c=t(60848),o=t(24047),r=t(27919),n=t(83419),e=t(69547),s=t(83719),a=t(86054),i=t(45893),h=t(96391),u=t(82264),d=t(57264),f=t(50792),v=t(8443),m=t(7003),x=t(37277),g=t(77332),T=t(76531),S=t(60903),C=t(69442),E=t(17130),P=t(65898),A=t(51085),M=t(14747),R=new n({initialize:function(w){this.config=new e(w),this.renderer=null,this.domContainer=null,this.canvas=null,this.context=null,this.isBooted=!1,this.isRunning=!1,this.events=new f,this.anims=new c(this),this.textures=new E(this),this.cache=new o(this),this.registry=new i(this,new f),this.input=new m(this,this.config),this.scene=new S(this,this.config.sceneConfig),this.device=u,this.scale=new T(this,this.config),this.sound=null,this.sound=M.create(this),this.loop=new P(this,this.config.fps),this.plugins=new g(this,this.config),this.pendingDestroy=!1,this.removeCanvas=!1,this.noReturn=!1,this.hasFocus=!1,this.isPaused=!1,d(this.boot.bind(this))},boot:function(){if(!x.hasCore("EventEmitter")){console.warn("Aborting. Core Plugins missing.");return}this.isBooted=!0,this.config.preBoot(this),this.scale.preBoot(),a(this),s(this),h(this),l(this.canvas,this.config.parent),this.textures.once(C.READY,this.texturesReady,this),this.events.emit(v.BOOT)},texturesReady:function(){this.events.emit(v.READY),this.start()},start:function(){this.isRunning=!0,this.config.postBoot(this),this.renderer?this.loop.start(this.step.bind(this)):this.loop.start(this.headlessStep.bind(this)),A(this);var L=this.events;L.on(v.HIDDEN,this.onHidden,this),L.on(v.VISIBLE,this.onVisible,this),L.on(v.BLUR,this.onBlur,this),L.on(v.FOCUS,this.onFocus,this)},step:function(L,w){if(this.pendingDestroy)return this.runDestroy();if(!this.isPaused){var N=this.events;N.emit(v.PRE_STEP,L,w),N.emit(v.STEP,L,w),this.scene.update(L,w),N.emit(v.POST_STEP,L,w);var b=this.renderer;b.preRender(),N.emit(v.PRE_RENDER,b,L,w),this.scene.render(b),b.postRender(),N.emit(v.POST_RENDER,b,L,w)}},headlessStep:function(L,w){if(this.pendingDestroy)return this.runDestroy();if(!this.isPaused){var N=this.events;N.emit(v.PRE_STEP,L,w),N.emit(v.STEP,L,w),this.scene.update(L,w),N.emit(v.POST_STEP,L,w),this.scene.isProcessing=!1,N.emit(v.PRE_RENDER,null,L,w),N.emit(v.POST_RENDER,null,L,w)}},onHidden:function(){this.loop.pause(),this.events.emit(v.PAUSE)},pause:function(){var L=this.isPaused;this.isPaused=!0,L||this.events.emit(v.PAUSE)},onVisible:function(){this.loop.resume(),this.events.emit(v.RESUME,this.loop.pauseDuration)},resume:function(){var L=this.isPaused;this.isPaused=!1,L&&this.events.emit(v.RESUME,0)},onBlur:function(){this.hasFocus=!1,this.loop.blur()},onFocus:function(){this.hasFocus=!0,this.loop.focus()},getFrame:function(){return this.loop.frame},getTime:function(){return this.loop.now},destroy:function(L,w){w===void 0&&(w=!1),this.pendingDestroy=!0,this.removeCanvas=L,this.noReturn=w},runDestroy:function(){this.scene.destroy(),this.events.emit(v.DESTROY),this.events.removeAllListeners(),this.renderer&&this.renderer.destroy(),this.removeCanvas&&this.canvas&&(r.remove(this.canvas),this.canvas.parentNode&&this.canvas.parentNode.removeChild(this.canvas)),this.domContainer&&this.domContainer.parentNode&&this.domContainer.parentNode.removeChild(this.domContainer),this.loop.destroy(),this.pendingDestroy=!1}});p.exports=R}),65898:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(83419),c=t(35154),o=t(29747),r=t(43092),n=new l({initialize:function(s,a){this.game=s,this.raf=new r,this.started=!1,this.running=!1,this.minFps=c(a,"min",5),this.targetFps=c(a,"target",60),this.fpsLimit=c(a,"limit",0),this.hasFpsLimit=this.fpsLimit>0,this._limitRate=this.hasFpsLimit?1e3/this.fpsLimit:0,this._min=1e3/this.minFps,this._target=1e3/this.targetFps,this.actualFps=this.targetFps,this.nextFpsUpdate=0,this.framesThisSecond=0,this.callback=o,this.forceSetTimeOut=c(a,"forceSetTimeOut",!1),this.time=0,this.startTime=0,this.lastTime=0,this.frame=0,this.inFocus=!0,this.pauseDuration=0,this._pauseTime=0,this._coolDown=0,this.delta=0,this.deltaIndex=0,this.deltaHistory=[],this.deltaSmoothingMax=c(a,"deltaHistory",10),this.panicMax=c(a,"panicMax",120),this.rawDelta=0,this.now=0,this.smoothStep=c(a,"smoothStep",!0)},blur:function(){this.inFocus=!1},focus:function(){this.inFocus=!0,this.resetDelta()},pause:function(){this._pauseTime=window.performance.now()},resume:function(){this.resetDelta(),this.pauseDuration=this.time-this._pauseTime,this.startTime+=this.pauseDuration},resetDelta:function(){var e=window.performance.now();this.time=e,this.lastTime=e,this.nextFpsUpdate=e+1e3,this.framesThisSecond=0;for(var s=0;s<this.deltaSmoothingMax;s++)this.deltaHistory[s]=Math.min(this._target,this.deltaHistory[s]);this.delta=0,this.deltaIndex=0,this._coolDown=this.panicMax},start:function(e){if(this.started)return this;this.started=!0,this.running=!0;for(var s=0;s<this.deltaSmoothingMax;s++)this.deltaHistory[s]=this._target;this.resetDelta(),this.startTime=window.performance.now(),this.callback=e;var a=this.hasFpsLimit?this.stepLimitFPS.bind(this):this.step.bind(this);this.raf.start(a,this.forceSetTimeOut,this._target)},smoothDelta:function(e){var s=this.deltaIndex,a=this.deltaHistory,i=this.deltaSmoothingMax;(this._coolDown>0||!this.inFocus)&&(this._coolDown--,e=Math.min(e,this._target)),e>this._min&&(e=a[s],e=Math.min(e,this._min)),a[s]=e,this.deltaIndex++,this.deltaIndex>=i&&(this.deltaIndex=0);for(var h=0,u=0;u<i;u++)h+=a[u];return h/=i,h},updateFPS:function(e){this.actualFps=.25*this.framesThisSecond+.75*this.actualFps,this.nextFpsUpdate=e+1e3,this.framesThisSecond=0},stepLimitFPS:function(e){this.now=e;var s=Math.max(0,e-this.lastTime);this.rawDelta=s,this.time+=this.rawDelta,this.smoothStep&&(s=this.smoothDelta(s)),this.delta+=s,e>=this.nextFpsUpdate&&this.updateFPS(e),this.framesThisSecond++,this.delta>=this._limitRate&&(this.callback(e,this.delta),this.delta=0),this.lastTime=e,this.frame++},step:function(e){this.now=e;var s=Math.max(0,e-this.lastTime);this.rawDelta=s,this.time+=this.rawDelta,this.smoothStep&&(s=this.smoothDelta(s)),this.delta=s,e>=this.nextFpsUpdate&&this.updateFPS(e),this.framesThisSecond++,this.callback(e,s),this.lastTime=e,this.frame++},tick:function(){var e=window.performance.now();this.hasFpsLimit?this.stepLimitFPS(e):this.step(e)},sleep:function(){this.running&&(this.raf.stop(),this.running=!1)},wake:function(e){e===void 0&&(e=!1);var s=window.performance.now();if(!this.running){e&&(this.startTime+=-this.lastTime+(this.lastTime+s));var a=this.hasFpsLimit?this.stepLimitFPS.bind(this):this.step.bind(this);this.raf.start(a,this.forceSetTimeOut,this._target),this.running=!0,this.nextFpsUpdate=s+1e3,this.framesThisSecond=0,this.fpsLimitTriggered=!1,this.tick()}},getDuration:function(){return Math.round(this.lastTime-this.startTime)/1e3},getDurationMS:function(){return Math.round(this.lastTime-this.startTime)},stop:function(){return this.running=!1,this.started=!1,this.raf.stop(),this},destroy:function(){this.stop(),this.raf.destroy(),this.raf=null,this.game=null,this.callback=null}});p.exports=n}),51085:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(8443),c=function(o){var r,n=o.events;if(document.hidden!==void 0)r="visibilitychange";else{var e=["webkit","moz","ms"];e.forEach(function(a){document[a+"Hidden"]!==void 0&&(document.hidden=function(){return document[a+"Hidden"]},r=a+"visibilitychange")})}var s=function(a){document.hidden||a.type==="pause"?n.emit(l.HIDDEN):n.emit(l.VISIBLE)};r&&document.addEventListener(r,s,!1),window.onblur=function(){n.emit(l.BLUR)},window.onfocus=function(){n.emit(l.FOCUS)},window.focus&&o.config.autoFocus&&window.focus()};p.exports=c}),97217:(p=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */p.exports="blur"}),47548:(p=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */p.exports="boot"}),19814:(p=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */p.exports="contextlost"}),68446:(p=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */p.exports="destroy"}),41700:(p=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */p.exports="focus"}),25432:(p=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */p.exports="hidden"}),65942:(p=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */p.exports="pause"}),59211:(p=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */p.exports="postrender"}),47789:(p=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */p.exports="poststep"}),39066:(p=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */p.exports="prerender"}),460:(p=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */p.exports="prestep"}),16175:(p=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */p.exports="ready"}),42331:(p=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */p.exports="resume"}),11966:(p=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */p.exports="step"}),32969:(p=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */p.exports="systemready"}),94830:(p=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */p.exports="visible"}),8443:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */p.exports={BLUR:t(97217),BOOT:t(47548),CONTEXT_LOST:t(19814),DESTROY:t(68446),FOCUS:t(41700),HIDDEN:t(25432),PAUSE:t(65942),POST_RENDER:t(59211),POST_STEP:t(47789),PRE_RENDER:t(39066),PRE_STEP:t(460),READY:t(16175),RESUME:t(42331),STEP:t(11966),SYSTEM_READY:t(32969),VISIBLE:t(94830)}}),42857:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */p.exports={Config:t(69547),CreateRenderer:t(86054),DebugHeader:t(96391),Events:t(8443),TimeStep:t(65898),VisibilityHandler:t(51085)}}),99584:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(5290),c=t(27919),o=t(35154),r=function(n){var e=o(n,"data",[]),s=o(n,"canvas",null),a=o(n,"palette",l),i=o(n,"pixelWidth",1),h=o(n,"pixelHeight",i),u=o(n,"resizeCanvas",!0),d=o(n,"clearCanvas",!0),f=o(n,"preRender",null),v=o(n,"postRender",null),m=Math.floor(Math.abs(e[0].length*i)),x=Math.floor(Math.abs(e.length*h));s||(s=c.create2D(this,m,x),u=!1,d=!1),u&&(s.width=m,s.height=x);var g=s.getContext("2d",{willReadFrequently:!0});d&&g.clearRect(0,0,m,x),f&&f(s,g);for(var T=0;T<e.length;T++)for(var S=e[T],C=0;C<S.length;C++){var E=S[C];E!=="."&&E!==" "&&(g.fillStyle=a[E],g.fillRect(C*i,T*h,i,h))}return v&&v(s,g),s};p.exports=r}),15822:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */p.exports={GenerateTexture:t(99584),Palettes:t(57763)}}),5290:(p=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */p.exports={0:"#000",1:"#9D9D9D",2:"#FFF",3:"#BE2633",4:"#E06F8B",5:"#493C2B",6:"#A46422",7:"#EB8931",8:"#F7E26B",9:"#2F484E",A:"#44891A",B:"#A3CE27",C:"#1B2632",D:"#005784",E:"#31A2F2",F:"#B2DCEF"}}),23816:(p=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */p.exports={0:"#000",1:"#fff",2:"#8b4131",3:"#7bbdc5",4:"#8b41ac",5:"#6aac41",6:"#3931a4",7:"#d5de73",8:"#945a20",9:"#5a4100",A:"#bd736a",B:"#525252",C:"#838383",D:"#acee8b",E:"#7b73de",F:"#acacac"}}),9866:(p=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */p.exports={0:"#000",1:"#2234d1",2:"#0c7e45",3:"#44aacc",4:"#8a3622",5:"#5c2e78",6:"#aa5c3d",7:"#b5b5b5",8:"#5e606e",9:"#4c81fb",A:"#6cd947",B:"#7be2f9",C:"#eb8a60",D:"#e23d69",E:"#ffd93f",F:"#fff"}}),77552:(p=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */p.exports={0:"#000",1:"#191028",2:"#46af45",3:"#a1d685",4:"#453e78",5:"#7664fe",6:"#833129",7:"#9ec2e8",8:"#dc534b",9:"#e18d79",A:"#d6b97b",B:"#e9d8a1",C:"#216c4b",D:"#d365c8",E:"#afaab9",F:"#f5f4eb"}}),92259:(p=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */p.exports={0:"#000",1:"#191028",2:"#46af45",3:"#a1d685",4:"#453e78",5:"#7664fe",6:"#833129",7:"#9ec2e8",8:"#dc534b",9:"#e18d79",A:"#d6b97b",B:"#e9d8a1",C:"#216c4b",D:"#d365c8",E:"#afaab9",F:"#fff"}}),57763:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */p.exports={ARNE16:t(5290),C64:t(23816),CGA:t(9866),JMP:t(77552),MSX:t(92259)}}),46728:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(83419),c=t(36316),o=t(80021),r=t(26099),n=new l({Extends:o,initialize:function(s,a,i,h){o.call(this,"CubicBezierCurve"),Array.isArray(s)&&(h=new r(s[6],s[7]),i=new r(s[4],s[5]),a=new r(s[2],s[3]),s=new r(s[0],s[1])),this.p0=s,this.p1=a,this.p2=i,this.p3=h},getStartPoint:function(e){return e===void 0&&(e=new r),e.copy(this.p0)},getResolution:function(e){return e},getPoint:function(e,s){s===void 0&&(s=new r);var a=this.p0,i=this.p1,h=this.p2,u=this.p3;return s.set(c(e,a.x,i.x,h.x,u.x),c(e,a.y,i.y,h.y,u.y))},draw:function(e,s){s===void 0&&(s=32);var a=this.getPoints(s);e.beginPath(),e.moveTo(this.p0.x,this.p0.y);for(var i=1;i<a.length;i++)e.lineTo(a[i].x,a[i].y);return e.strokePath(),e},toJSON:function(){return{type:this.type,points:[this.p0.x,this.p0.y,this.p1.x,this.p1.y,this.p2.x,this.p2.y,this.p3.x,this.p3.y]}}});n.fromJSON=function(e){var s=e.points,a=new r(s[0],s[1]),i=new r(s[2],s[3]),h=new r(s[4],s[5]),u=new r(s[6],s[7]);return new n(a,i,h,u)},p.exports=n}),80021:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(83419),c=t(19217),o=t(87841),r=t(26099),n=new l({initialize:function(s){this.type=s,this.defaultDivisions=5,this.arcLengthDivisions=100,this.cacheArcLengths=[],this.needsUpdate=!0,this.active=!0,this._tmpVec2A=new r,this._tmpVec2B=new r},draw:function(e,s){return s===void 0&&(s=32),e.strokePoints(this.getPoints(s))},getBounds:function(e,s){e||(e=new o),s===void 0&&(s=16);var a=this.getLength();s>a&&(s=a/2);var i=Math.max(1,Math.round(a/s));return c(this.getSpacedPoints(i),e)},getDistancePoints:function(e){var s=this.getLength(),a=Math.max(1,s/e);return this.getSpacedPoints(a)},getEndPoint:function(e){return e===void 0&&(e=new r),this.getPointAt(1,e)},getLength:function(){var e=this.getLengths();return e[e.length-1]},getLengths:function(e){if(e===void 0&&(e=this.arcLengthDivisions),this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;var s=[],a,i=this.getPoint(0,this._tmpVec2A),h=0;s.push(0);for(var u=1;u<=e;u++)a=this.getPoint(u/e,this._tmpVec2B),h+=a.distance(i),s.push(h),i.copy(a);return this.cacheArcLengths=s,s},getPointAt:function(e,s){var a=this.getUtoTmapping(e);return this.getPoint(a,s)},getPoints:function(e,s,a){a===void 0&&(a=[]),e||(s?e=this.getLength()/s:e=this.defaultDivisions);for(var i=0;i<=e;i++)a.push(this.getPoint(i/e));return a},getRandomPoint:function(e){return e===void 0&&(e=new r),this.getPoint(Math.random(),e)},getSpacedPoints:function(e,s,a){a===void 0&&(a=[]),e||(s?e=this.getLength()/s:e=this.defaultDivisions);for(var i=0;i<=e;i++){var h=this.getUtoTmapping(i/e,null,e);a.push(this.getPoint(h))}return a},getStartPoint:function(e){return e===void 0&&(e=new r),this.getPointAt(0,e)},getTangent:function(e,s){s===void 0&&(s=new r);var a=1e-4,i=e-a,h=e+a;return i<0&&(i=0),h>1&&(h=1),this.getPoint(i,this._tmpVec2A),this.getPoint(h,s),s.subtract(this._tmpVec2A).normalize()},getTangentAt:function(e,s){var a=this.getUtoTmapping(e);return this.getTangent(a,s)},getTFromDistance:function(e,s){return e<=0?0:this.getUtoTmapping(0,e,s)},getUtoTmapping:function(e,s,a){var i=this.getLengths(a),h=0,u=i.length,d;s?d=Math.min(s,i[u-1]):d=e*i[u-1];for(var f=0,v=u-1,m;f<=v;)if(h=Math.floor(f+(v-f)/2),m=i[h]-d,m<0)f=h+1;else if(m>0)v=h-1;else{v=h;break}if(h=v,i[h]===d)return h/(u-1);var x=i[h],g=i[h+1],T=g-x,S=(d-x)/T;return(h+S)/(u-1)},updateArcLengths:function(){this.needsUpdate=!0,this.getLengths()}});p.exports=n}),73825:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(83419),c=t(80021),o=t(39506),r=t(35154),n=t(43396),e=t(26099),s=new l({Extends:c,initialize:function(i,h,u,d,f,v,m,x){if(typeof i=="object"){var g=i;i=r(g,"x",0),h=r(g,"y",0),u=r(g,"xRadius",0),d=r(g,"yRadius",u),f=r(g,"startAngle",0),v=r(g,"endAngle",360),m=r(g,"clockwise",!1),x=r(g,"rotation",0)}else d===void 0&&(d=u),f===void 0&&(f=0),v===void 0&&(v=360),m===void 0&&(m=!1),x===void 0&&(x=0);c.call(this,"EllipseCurve"),this.p0=new e(i,h),this._xRadius=u,this._yRadius=d,this._startAngle=o(f),this._endAngle=o(v),this._clockwise=m,this._rotation=o(x)},getStartPoint:function(a){return a===void 0&&(a=new e),this.getPoint(0,a)},getResolution:function(a){return a*2},getPoint:function(a,i){i===void 0&&(i=new e);for(var h=Math.PI*2,u=this._endAngle-this._startAngle,d=Math.abs(u)<Number.EPSILON;u<0;)u+=h;for(;u>h;)u-=h;u<Number.EPSILON&&(d?u=0:u=h),this._clockwise&&!d&&(u===h?u=-h:u=u-h);var f=this._startAngle+a*u,v=this.p0.x+this._xRadius*Math.cos(f),m=this.p0.y+this._yRadius*Math.sin(f);if(this._rotation!==0){var x=Math.cos(this._rotation),g=Math.sin(this._rotation),T=v-this.p0.x,S=m-this.p0.y;v=T*x-S*g+this.p0.x,m=T*g+S*x+this.p0.y}return i.set(v,m)},setXRadius:function(a){return this.xRadius=a,this},setYRadius:function(a){return this.yRadius=a,this},setWidth:function(a){return this.xRadius=a/2,this},setHeight:function(a){return this.yRadius=a/2,this},setStartAngle:function(a){return this.startAngle=a,this},setEndAngle:function(a){return this.endAngle=a,this},setClockwise:function(a){return this.clockwise=a,this},setRotation:function(a){return this.rotation=a,this},x:{get:function(){return this.p0.x},set:function(a){this.p0.x=a}},y:{get:function(){return this.p0.y},set:function(a){this.p0.y=a}},xRadius:{get:function(){return this._xRadius},set:function(a){this._xRadius=a}},yRadius:{get:function(){return this._yRadius},set:function(a){this._yRadius=a}},startAngle:{get:function(){return n(this._startAngle)},set:function(a){this._startAngle=o(a)}},endAngle:{get:function(){return n(this._endAngle)},set:function(a){this._endAngle=o(a)}},clockwise:{get:function(){return this._clockwise},set:function(a){this._clockwise=a}},angle:{get:function(){return n(this._rotation)},set:function(a){this._rotation=o(a)}},rotation:{get:function(){return this._rotation},set:function(a){this._rotation=a}},toJSON:function(){return{type:this.type,x:this.p0.x,y:this.p0.y,xRadius:this._xRadius,yRadius:this._yRadius,startAngle:n(this._startAngle),endAngle:n(this._endAngle),clockwise:this._clockwise,rotation:n(this._rotation)}}});s.fromJSON=function(a){return new s(a)},p.exports=s}),33951:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(83419),c=t(80021),o=t(19217),r=t(87841),n=t(26099),e=new l({Extends:c,initialize:function(a,i){c.call(this,"LineCurve"),Array.isArray(a)&&(i=new n(a[2],a[3]),a=new n(a[0],a[1])),this.p0=a,this.p1=i,this.arcLengthDivisions=1},getBounds:function(s){return s===void 0&&(s=new r),o([this.p0,this.p1],s)},getStartPoint:function(s){return s===void 0&&(s=new n),s.copy(this.p0)},getResolution:function(s){return s===void 0&&(s=1),s},getPoint:function(s,a){return a===void 0&&(a=new n),s===1?a.copy(this.p1):(a.copy(this.p1).subtract(this.p0).scale(s).add(this.p0),a)},getPointAt:function(s,a){return this.getPoint(s,a)},getTangent:function(s,a){return a===void 0&&(a=new n),a.copy(this.p1).subtract(this.p0).normalize(),a},getUtoTmapping:function(s,a,i){var h;if(a){var u=this.getLengths(i),d=u[u.length-1],f=Math.min(a,d);h=f/d}else h=s;return h},draw:function(s){return s.lineBetween(this.p0.x,this.p0.y,this.p1.x,this.p1.y),s},toJSON:function(){return{type:this.type,points:[this.p0.x,this.p0.y,this.p1.x,this.p1.y]}}});e.fromJSON=function(s){var a=s.points,i=new n(a[0],a[1]),h=new n(a[2],a[3]);return new e(i,h)},p.exports=e}),14744:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(83419),c=t(80021),o=t(32112),r=t(26099),n=new l({Extends:c,initialize:function(s,a,i){c.call(this,"QuadraticBezierCurve"),Array.isArray(s)&&(i=new r(s[4],s[5]),a=new r(s[2],s[3]),s=new r(s[0],s[1])),this.p0=s,this.p1=a,this.p2=i},getStartPoint:function(e){return e===void 0&&(e=new r),e.copy(this.p0)},getResolution:function(e){return e},getPoint:function(e,s){s===void 0&&(s=new r);var a=this.p0,i=this.p1,h=this.p2;return s.set(o(e,a.x,i.x,h.x),o(e,a.y,i.y,h.y))},draw:function(e,s){s===void 0&&(s=32);var a=this.getPoints(s);e.beginPath(),e.moveTo(this.p0.x,this.p0.y);for(var i=1;i<a.length;i++)e.lineTo(a[i].x,a[i].y);return e.strokePath(),e},toJSON:function(){return{type:this.type,points:[this.p0.x,this.p0.y,this.p1.x,this.p1.y,this.p2.x,this.p2.y]}}});n.fromJSON=function(e){var s=e.points,a=new r(s[0],s[1]),i=new r(s[2],s[3]),h=new r(s[4],s[5]);return new n(a,i,h)},p.exports=n}),42534:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(87842),c=t(83419),o=t(80021),r=t(26099),n=new c({Extends:o,initialize:function(s){s===void 0&&(s=[]),o.call(this,"SplineCurve"),this.points=[],this.addPoints(s)},addPoints:function(e){for(var s=0;s<e.length;s++){var a=new r;typeof e[s]=="number"?(a.x=e[s],a.y=e[s+1],s++):Array.isArray(e[s])?(a.x=e[s][0],a.y=e[s][1]):(a.x=e[s].x,a.y=e[s].y),this.points.push(a)}return this},addPoint:function(e,s){var a=new r(e,s);return this.points.push(a),a},getStartPoint:function(e){return e===void 0&&(e=new r),e.copy(this.points[0])},getResolution:function(e){return e*this.points.length},getPoint:function(e,s){s===void 0&&(s=new r);var a=this.points,i=(a.length-1)*e,h=Math.floor(i),u=i-h,d=a[h===0?h:h-1],f=a[h],v=a[h>a.length-2?a.length-1:h+1],m=a[h>a.length-3?a.length-1:h+2];return s.set(l(u,d.x,f.x,v.x,m.x),l(u,d.y,f.y,v.y,m.y))},toJSON:function(){for(var e=[],s=0;s<this.points.length;s++)e.push(this.points[s].x),e.push(this.points[s].y);return{type:this.type,points:e}}});n.fromJSON=function(e){return new n(e.points)},p.exports=n}),25410:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */p.exports={Path:t(46669),MoveTo:t(68618),CubicBezier:t(46728),Curve:t(80021),Ellipse:t(73825),Line:t(33951),QuadraticBezier:t(14744),Spline:t(42534)}}),68618:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(83419),c=t(26099),o=new l({initialize:function(n,e){this.active=!1,this.p0=new c(n,e)},getPoint:function(r,n){return n===void 0&&(n=new c),n.copy(this.p0)},getPointAt:function(r,n){return this.getPoint(r,n)},getResolution:function(){return 1},getLength:function(){return 0},toJSON:function(){return{type:"MoveTo",points:[this.p0.x,this.p0.y]}}});p.exports=o}),46669:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(83419),c=t(46728),o=t(73825),r=t(39429),n=t(33951),e=t(68618),s=t(14744),a=t(87841),i=t(42534),h=t(26099),u=t(36383),d=new l({initialize:function(v,m){v===void 0&&(v=0),m===void 0&&(m=0),this.name="",this.defaultDivisions=12,this.curves=[],this.cacheLengths=[],this.autoClose=!1,this.startPoint=new h,this._tmpVec2A=new h,this._tmpVec2B=new h,typeof v=="object"?this.fromJSON(v):this.startPoint.set(v,m)},add:function(f){return this.curves.push(f),this},circleTo:function(f,v,m){return v===void 0&&(v=!1),this.ellipseTo(f,f,0,360,v,m)},closePath:function(){var f=this.curves[0].getPoint(0),v=this.curves[this.curves.length-1].getPoint(1);return f.equals(v)||this.curves.push(new n(v,f)),this},cubicBezierTo:function(f,v,m,x,g,T){var S=this.getEndPoint(),C,E,P;return f instanceof h?(C=f,E=v,P=m):(C=new h(m,x),E=new h(g,T),P=new h(f,v)),this.add(new c(S,C,E,P))},quadraticBezierTo:function(f,v,m,x){var g=this.getEndPoint(),T,S;return f instanceof h?(T=f,S=v):(T=new h(m,x),S=new h(f,v)),this.add(new s(g,T,S))},draw:function(f,v){for(var m=0;m<this.curves.length;m++){var x=this.curves[m];x.active&&x.draw(f,v)}return f},ellipseTo:function(f,v,m,x,g,T){var S=new o(0,0,f,v,m,x,g,T),C=this.getEndPoint(this._tmpVec2A),E=S.getStartPoint(this._tmpVec2B);return C.subtract(E),S.x=C.x,S.y=C.y,this.add(S)},fromJSON:function(f){this.curves=[],this.cacheLengths=[],this.startPoint.set(f.x,f.y),this.autoClose=f.autoClose;for(var v=0;v<f.curves.length;v++){var m=f.curves[v];switch(m.type){case"LineCurve":this.add(n.fromJSON(m));break;case"EllipseCurve":this.add(o.fromJSON(m));break;case"SplineCurve":this.add(i.fromJSON(m));break;case"CubicBezierCurve":this.add(c.fromJSON(m));break;case"QuadraticBezierCurve":this.add(s.fromJSON(m));break}}return this},getBounds:function(f,v){f===void 0&&(f=new a),v===void 0&&(v=16),f.x=Number.MAX_VALUE,f.y=Number.MAX_VALUE;for(var m=new a,x=u.MIN_SAFE_INTEGER,g=u.MIN_SAFE_INTEGER,T=0;T<this.curves.length;T++){var S=this.curves[T];S.active&&(S.getBounds(m,v),f.x=Math.min(f.x,m.x),f.y=Math.min(f.y,m.y),x=Math.max(x,m.right),g=Math.max(g,m.bottom))}return f.right=x,f.bottom=g,f},getCurveLengths:function(){if(this.cacheLengths.length===this.curves.length)return this.cacheLengths;for(var f=[],v=0,m=0;m<this.curves.length;m++)v+=this.curves[m].getLength(),f.push(v);return this.cacheLengths=f,f},getCurveAt:function(f){for(var v=f*this.getLength(),m=this.getCurveLengths(),x=0;x<m.length;){if(m[x]>=v)return this.curves[x];x++}return null},getEndPoint:function(f){return f===void 0&&(f=new h),this.curves.length>0?this.curves[this.curves.length-1].getPoint(1,f):f.copy(this.startPoint),f},getLength:function(){var f=this.getCurveLengths();return f[f.length-1]},getPoint:function(f,v){v===void 0&&(v=new h);for(var m=f*this.getLength(),x=this.getCurveLengths(),g=0;g<x.length;){if(x[g]>=m){var T=x[g]-m,S=this.curves[g],C=S.getLength(),E=C===0?0:1-T/C;return S.getPointAt(E,v)}g++}return null},getPoints:function(f,v){!f&&!v&&(f=this.defaultDivisions);for(var m=[],x,g=0;g<this.curves.length;g++){var T=this.curves[g];if(T.active)for(var S=T.getResolution(f),C=T.getPoints(S,v),E=0;E<C.length;E++){var P=C[E];x&&x.equals(P)||(m.push(P),x=P)}}return this.autoClose&&m.length>1&&!m[m.length-1].equals(m[0])&&m.push(m[0]),m},getRandomPoint:function(f){return f===void 0&&(f=new h),this.getPoint(Math.random(),f)},getSpacedPoints:function(f){f===void 0&&(f=40);for(var v=[],m=0;m<=f;m++)v.push(this.getPoint(m/f));return this.autoClose&&v.push(v[0]),v},getStartPoint:function(f){return f===void 0&&(f=new h),f.copy(this.startPoint)},getTangent:function(f,v){v===void 0&&(v=new h);for(var m=f*this.getLength(),x=this.getCurveLengths(),g=0;g<x.length;){if(x[g]>=m){var T=x[g]-m,S=this.curves[g],C=S.getLength(),E=C===0?0:1-T/C;return S.getTangentAt(E,v)}g++}return null},lineTo:function(f,v){f instanceof h?this._tmpVec2B.copy(f):typeof f=="object"?this._tmpVec2B.setFromObject(f):this._tmpVec2B.set(f,v);var m=this.getEndPoint(this._tmpVec2A);return this.add(new n([m.x,m.y,this._tmpVec2B.x,this._tmpVec2B.y]))},splineTo:function(f){return f.unshift(this.getEndPoint()),this.add(new i(f))},moveTo:function(f,v){return f instanceof h?this.add(new e(f.x,f.y)):this.add(new e(f,v))},toJSON:function(){for(var f=[],v=0;v<this.curves.length;v++)f.push(this.curves[v].toJSON());return{type:"Path",x:this.startPoint.x,y:this.startPoint.y,autoClose:this.autoClose,curves:f}},updateArcLengths:function(){this.cacheLengths=[],this.getCurveLengths()},destroy:function(){this.curves.length=0,this.cacheLengths.length=0,this.startPoint=void 0}});r.register("path",function(f,v){return new d(f,v)}),p.exports=d}),45893:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(83419),c=t(24882),o=new l({initialize:function(n,e){this.parent=n,this.events=e,e||(this.events=n.events?n.events:n),this.list={},this.values={},this._frozen=!1,!n.hasOwnProperty("sys")&&this.events&&this.events.once(c.DESTROY,this.destroy,this)},get:function(r){var n=this.list;if(Array.isArray(r)){for(var e=[],s=0;s<r.length;s++)e.push(n[r[s]]);return e}else return n[r]},getAll:function(){var r={};for(var n in this.list)this.list.hasOwnProperty(n)&&(r[n]=this.list[n]);return r},query:function(r){var n={};for(var e in this.list)this.list.hasOwnProperty(e)&&e.match(r)&&(n[e]=this.list[e]);return n},set:function(r,n){if(this._frozen)return this;if(typeof r=="string")return this.setValue(r,n);for(var e in r)this.setValue(e,r[e]);return this},inc:function(r,n){if(this._frozen)return this;n===void 0&&(n=1);var e=this.get(r);return e===void 0&&(e=0),this.set(r,e+n),this},toggle:function(r){return this._frozen?this:(this.set(r,!this.get(r)),this)},setValue:function(r,n){if(this._frozen)return this;if(this.has(r))this.values[r]=n;else{var e=this,s=this.list,a=this.events,i=this.parent;Object.defineProperty(this.values,r,{enumerable:!0,configurable:!0,get:function(){return s[r]},set:function(h){if(!e._frozen){var u=s[r];s[r]=h,a.emit(c.CHANGE_DATA,i,r,h,u),a.emit(c.CHANGE_DATA_KEY+r,i,h,u)}}}),s[r]=n,a.emit(c.SET_DATA,i,r,n)}return this},each:function(r,n){for(var e=[this.parent,null,void 0],s=1;s<arguments.length;s++)e.push(arguments[s]);for(var a in this.list)e[1]=a,e[2]=this.list[a],r.apply(n,e);return this},merge:function(r,n){n===void 0&&(n=!0);for(var e in r)r.hasOwnProperty(e)&&(n||!n&&!this.has(e))&&this.setValue(e,r[e]);return this},remove:function(r){if(this._frozen)return this;if(Array.isArray(r))for(var n=0;n<r.length;n++)this.removeValue(r[n]);else return this.removeValue(r);return this},removeValue:function(r){if(this.has(r)){var n=this.list[r];delete this.list[r],delete this.values[r],this.events.emit(c.REMOVE_DATA,this.parent,r,n)}return this},pop:function(r){var n=void 0;return!this._frozen&&this.has(r)&&(n=this.list[r],delete this.list[r],delete this.values[r],this.events.emit(c.REMOVE_DATA,this.parent,r,n)),n},has:function(r){return this.list.hasOwnProperty(r)},setFreeze:function(r){return this._frozen=r,this},reset:function(){for(var r in this.list)delete this.list[r],delete this.values[r];return this._frozen=!1,this},destroy:function(){this.reset(),this.events.off(c.CHANGE_DATA),this.events.off(c.SET_DATA),this.events.off(c.REMOVE_DATA),this.parent=null},freeze:{get:function(){return this._frozen},set:function(r){this._frozen=!!r}},count:{get:function(){var r=0;for(var n in this.list)this.list[n]!==void 0&&r++;return r}}});p.exports=o}),63646:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(83419),c=t(45893),o=t(37277),r=t(44594),n=new l({Extends:c,initialize:function(s){c.call(this,s,s.sys.events),this.scene=s,this.systems=s.sys,s.sys.events.once(r.BOOT,this.boot,this),s.sys.events.on(r.START,this.start,this)},boot:function(){this.events=this.systems.events,this.events.once(r.DESTROY,this.destroy,this)},start:function(){this.events.once(r.SHUTDOWN,this.shutdown,this)},shutdown:function(){this.systems.events.off(r.SHUTDOWN,this.shutdown,this)},destroy:function(){c.prototype.destroy.call(this),this.events.off(r.START,this.start,this),this.scene=null,this.systems=null}});o.register("DataManagerPlugin",n,"data"),p.exports=n}),10700:(p=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */p.exports="changedata"}),93608:(p=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */p.exports="changedata-"}),60883:(p=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */p.exports="destroy"}),69780:(p=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */p.exports="removedata"}),22166:(p=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */p.exports="setdata"}),24882:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */p.exports={CHANGE_DATA:t(10700),CHANGE_DATA_KEY:t(93608),DESTROY:t(60883),REMOVE_DATA:t(69780),SET_DATA:t(22166)}}),44965:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */p.exports={DataManager:t(45893),DataManagerPlugin:t(63646),Events:t(24882)}}),7098:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(84148),c={flac:!1,aac:!1,audioData:!1,dolby:!1,m4a:!1,mp3:!1,ogg:!1,opus:!1,wav:!1,webAudio:!1,webm:!1};function o(){if(typeof importScripts=="function")return c;c.audioData=!!window.Audio,c.webAudio=!!(window.AudioContext||window.webkitAudioContext);var r=document.createElement("audio"),n=!!r.canPlayType;try{if(n){var e=function(i,h){var u=r.canPlayType("audio/"+i).replace(/^no$/,"");return h?!!(u||r.canPlayType("audio/"+h).replace(/^no$/,"")):!!u};if(c.ogg=e('ogg; codecs="vorbis"'),c.opus=e('ogg; codecs="opus"',"opus"),c.mp3=e("mpeg"),c.wav=e("wav"),c.m4a=e("x-m4a"),c.aac=e("aac"),c.flac=e("flac","x-flac"),c.webm=e('webm; codecs="vorbis"'),r.canPlayType('audio/mp4; codecs="ec-3"')!==""){if(l.edge)c.dolby=!0;else if(l.safari&&l.safariVersion>=9&&/Mac OS X (\d+)_(\d+)/.test(navigator.userAgent)){var s=parseInt(RegExp.$1,10),a=parseInt(RegExp.$2,10);(s===10&&a>=11||s>10)&&(c.dolby=!0)}}}}catch{}return c}p.exports=o()}),84148:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(25892),c={chrome:!1,chromeVersion:0,edge:!1,firefox:!1,firefoxVersion:0,ie:!1,ieVersion:0,mobileSafari:!1,opera:!1,safari:!1,safariVersion:0,silk:!1,trident:!1,tridentVersion:0,es2019:!1};function o(){var r=navigator.userAgent;return/Edg\/\d+/.test(r)?(c.edge=!0,c.es2019=!0):/OPR/.test(r)?(c.opera=!0,c.es2019=!0):/Chrome\/(\d+)/.test(r)&&!l.windowsPhone?(c.chrome=!0,c.chromeVersion=parseInt(RegExp.$1,10),c.es2019=c.chromeVersion>69):/Firefox\D+(\d+)/.test(r)?(c.firefox=!0,c.firefoxVersion=parseInt(RegExp.$1,10),c.es2019=c.firefoxVersion>10):/AppleWebKit\/(?!.*CriOS)/.test(r)&&l.iOS?(c.mobileSafari=!0,c.es2019=!0):/MSIE (\d+\.\d+);/.test(r)?(c.ie=!0,c.ieVersion=parseInt(RegExp.$1,10)):/Version\/(\d+\.\d+(\.\d+)?) Safari/.test(r)&&!l.windowsPhone?(c.safari=!0,c.safariVersion=parseInt(RegExp.$1,10),c.es2019=c.safariVersion>10):/Trident\/(\d+\.\d+)(.*)rv:(\d+\.\d+)/.test(r)&&(c.ie=!0,c.trident=!0,c.tridentVersion=parseInt(RegExp.$1,10),c.ieVersion=parseInt(RegExp.$3,10)),/Silk/.test(r)&&(c.silk=!0),c}p.exports=o()}),89289:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(27919),c={supportInverseAlpha:!1,supportNewBlendModes:!1};function o(){var e="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABAQMAAADD8p2OAAAAA1BMVEX/",s="AAAACklEQVQI12NgAAAAAgAB4iG8MwAAAABJRU5ErkJggg==",a=new Image;return a.onload=function(){var i=new Image;i.onload=function(){var h=l.create2D(i,6),u=h.getContext("2d",{willReadFrequently:!0});if(u.globalCompositeOperation="multiply",u.drawImage(a,0,0),u.drawImage(i,2,0),!u.getImageData(2,0,1,1))return!1;var d=u.getImageData(2,0,1,1).data;l.remove(i),c.supportNewBlendModes=d[0]===255&&d[1]===0&&d[2]===0},i.src=e+"/wCKxvRF"+s},a.src=e+"AP804Oa6"+s,!1}function r(){var e=l.create2D(this,2),s=e.getContext("2d",{willReadFrequently:!0});s.fillStyle="rgba(10, 20, 30, 0.5)",s.fillRect(0,0,1,1);var a=s.getImageData(0,0,1,1);if(a===null)return!1;s.putImageData(a,1,0);var i=s.getImageData(1,0,1,1),h=i.data[0]===a.data[0]&&i.data[1]===a.data[1]&&i.data[2]===a.data[2]&&i.data[3]===a.data[3];return l.remove(this),h}function n(){return typeof importScripts!="function"&&document!==void 0&&(c.supportNewBlendModes=o(),c.supportInverseAlpha=r()),c}p.exports=n()}),89357:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(25892),c=t(84148),o=t(27919),r={canvas:!1,canvasBitBltShift:null,file:!1,fileSystem:!1,getUserMedia:!0,littleEndian:!1,localStorage:!1,pointerLock:!1,stableSort:!1,support32bit:!1,vibration:!1,webGL:!1,worker:!1};function n(){var s=new ArrayBuffer(4),a=new Uint8Array(s),i=new Uint32Array(s);return a[0]=161,a[1]=178,a[2]=195,a[3]=212,i[0]===3569595041?!0:i[0]===2712847316?!1:null}function e(){if(typeof importScripts=="function")return r;r.canvas=!!window.CanvasRenderingContext2D;try{r.localStorage=!!localStorage.getItem}catch{r.localStorage=!1}r.file=!!window.File&&!!window.FileReader&&!!window.FileList&&!!window.Blob,r.fileSystem=!!window.requestFileSystem;var s=!1,a=function(){if(window.WebGLRenderingContext)try{var i=o.createWebGL(this),h=i.getContext("webgl")||i.getContext("experimental-webgl"),u=o.create2D(this),d=u.getContext("2d",{willReadFrequently:!0}),f=d.createImageData(1,1);return s=f.data instanceof Uint8ClampedArray,o.remove(i),o.remove(u),!!h}catch{return!1}return!1};return r.webGL=a(),r.worker=!!window.Worker,r.pointerLock="pointerLockElement"in document||"mozPointerLockElement"in document||"webkitPointerLockElement"in document,navigator.getUserMedia=navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia||navigator.msGetUserMedia||navigator.oGetUserMedia,window.URL=window.URL||window.webkitURL||window.mozURL||window.msURL,r.getUserMedia=r.getUserMedia&&!!navigator.getUserMedia&&!!window.URL,c.firefox&&c.firefoxVersion<21&&(r.getUserMedia=!1),!l.iOS&&(c.ie||c.firefox||c.chrome)&&(r.canvasBitBltShift=!0),(c.safari||c.mobileSafari)&&(r.canvasBitBltShift=!1),navigator.vibrate=navigator.vibrate||navigator.webkitVibrate||navigator.mozVibrate||navigator.msVibrate,navigator.vibrate&&(r.vibration=!0),typeof ArrayBuffer<"u"&&typeof Uint8Array<"u"&&typeof Uint32Array<"u"&&(r.littleEndian=n()),r.support32bit=typeof ArrayBuffer<"u"&&typeof Uint8ClampedArray<"u"&&typeof Int32Array<"u"&&r.littleEndian!==null&&s,r}p.exports=e()}),91639:(p=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var y={available:!1,cancel:"",keyboard:!1,request:""};function t(){if(typeof importScripts=="function")return y;var l,c="Fullscreen",o="FullScreen",r=["request"+c,"request"+o,"webkitRequest"+c,"webkitRequest"+o,"msRequest"+c,"msRequest"+o,"mozRequest"+o,"mozRequest"+c];for(l=0;l<r.length;l++)if(document.documentElement[r[l]]){y.available=!0,y.request=r[l];break}var n=["cancel"+o,"exit"+c,"webkitCancel"+o,"webkitExit"+c,"msCancel"+o,"msExit"+c,"mozCancel"+o,"mozExit"+c];if(y.available){for(l=0;l<n.length;l++)if(document[n[l]]){y.cancel=n[l];break}}return window.Element&&Element.ALLOW_KEYBOARD_INPUT&&!/ Version\/5\.1(?:\.\d+)? Safari\//.test(navigator.userAgent)&&(y.keyboard=!0),Object.defineProperty(y,"active",{get:function(){return!!(document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement||document.msFullscreenElement)}}),y}p.exports=t()}),31784:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(84148),c={gamepads:!1,mspointer:!1,touch:!1,wheelEvent:null};function o(){return typeof importScripts=="function"||(("ontouchstart"in document.documentElement||navigator.maxTouchPoints&&navigator.maxTouchPoints>=1)&&(c.touch=!0),(navigator.msPointerEnabled||navigator.pointerEnabled)&&(c.mspointer=!0),navigator.getGamepads&&(c.gamepads=!0),"onwheel"in window||l.ie&&"WheelEvent"in window?c.wheelEvent="wheel":"onmousewheel"in window?c.wheelEvent="mousewheel":l.firefox&&"MouseScrollEvent"in window&&(c.wheelEvent="DOMMouseScroll")),c}p.exports=o()}),25892:(p=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var y={android:!1,chromeOS:!1,cordova:!1,crosswalk:!1,desktop:!1,ejecta:!1,electron:!1,iOS:!1,iOSVersion:0,iPad:!1,iPhone:!1,kindle:!1,linux:!1,macOS:!1,node:!1,nodeWebkit:!1,pixelRatio:1,webApp:!1,windows:!1,windowsPhone:!1};function t(){if(typeof importScripts=="function")return y;var l=navigator.userAgent;/Windows/.test(l)?y.windows=!0:/Mac OS/.test(l)&&!/like Mac OS/.test(l)?navigator.maxTouchPoints&&navigator.maxTouchPoints>2?(y.iOS=!0,y.iPad=!0,navigator.appVersion.match(/Version\/(\d+)/),y.iOSVersion=parseInt(RegExp.$1,10)):y.macOS=!0:/Android/.test(l)?y.android=!0:/Linux/.test(l)?y.linux=!0:/iP[ao]d|iPhone/i.test(l)?(y.iOS=!0,navigator.appVersion.match(/OS (\d+)/),y.iOSVersion=parseInt(RegExp.$1,10),y.iPhone=l.toLowerCase().indexOf("iphone")!==-1,y.iPad=l.toLowerCase().indexOf("ipad")!==-1):/Kindle/.test(l)||/\bKF[A-Z][A-Z]+/.test(l)||/Silk.*Mobile Safari/.test(l)?y.kindle=!0:/CrOS/.test(l)&&(y.chromeOS=!0),(/Windows Phone/i.test(l)||/IEMobile/i.test(l))&&(y.android=!1,y.iOS=!1,y.macOS=!1,y.windows=!0,y.windowsPhone=!0);var c=/Silk/.test(l);return(y.windows||y.macOS||y.linux&&!c||y.chromeOS)&&(y.desktop=!0),(y.windowsPhone||/Windows NT/i.test(l)&&/Touch/i.test(l))&&(y.desktop=!1),navigator.standalone&&(y.webApp=!0),typeof importScripts!="function"&&(window.cordova!==void 0&&(y.cordova=!0),window.ejecta!==void 0&&(y.ejecta=!0)),typeof process<"u"&&process.versions&&process.versions.node&&(y.node=!0),y.node&&typeof process.versions=="object"&&(y.nodeWebkit=!!process.versions["node-webkit"],y.electron=!!process.versions.electron),/Crosswalk/.test(l)&&(y.crosswalk=!0),y.pixelRatio=window.devicePixelRatio||1,y}p.exports=t()}),43267:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(95540),c={h264:!1,hls:!1,mp4:!1,m4v:!1,ogg:!1,vp9:!1,webm:!1,hasRequestVideoFrame:!1};function o(){if(typeof importScripts=="function")return c;var r=document.createElement("video"),n=!!r.canPlayType,e=/^no$/;try{n&&(r.canPlayType('video/ogg; codecs="theora"').replace(e,"")&&(c.ogg=!0),r.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(e,"")&&(c.h264=!0,c.mp4=!0),r.canPlayType("video/x-m4v").replace(e,"")&&(c.m4v=!0),r.canPlayType('video/webm; codecs="vp8, vorbis"').replace(e,"")&&(c.webm=!0),r.canPlayType('video/webm; codecs="vp9"').replace(e,"")&&(c.vp9=!0),r.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"').replace(e,"")&&(c.hls=!0))}catch{}return r.parentNode&&r.parentNode.removeChild(r),c.getVideoURL=function(s){Array.isArray(s)||(s=[s]);for(var a=0;a<s.length;a++){var i=l(s[a],"url",s[a]);if(i.indexOf("blob:")===0)return{url:i,type:""};var h;if(i.indexOf("data:")===0?h=i.split(",")[0].match(/\/(.*?);/):h=i.match(/\.([a-zA-Z0-9]+)($|\?)/),h=l(s[a],"type",h?h[1]:"").toLowerCase(),c[h])return{url:i,type:h}}return null},c}p.exports=o()}),82264:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */p.exports={os:t(25892),browser:t(84148),features:t(89357),input:t(31784),audio:t(7098),video:t(43267),fullscreen:t(91639),canvasFeatures:t(89289)}}),89422:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(83419),c=new Float32Array(20),o=new l({initialize:function(){this._matrix=new Float32Array(20),this.alpha=1,this._dirty=!0,this._data=new Float32Array(20),this.reset()},set:function(r){return this._matrix.set(r),this._dirty=!0,this},reset:function(){var r=this._matrix;return r.fill(0),r[0]=1,r[6]=1,r[12]=1,r[18]=1,this.alpha=1,this._dirty=!0,this},getData:function(){var r=this._data;return this._dirty&&(r.set(this._matrix),r[4]/=255,r[9]/=255,r[14]/=255,r[19]/=255,this._dirty=!1),r},brightness:function(r,n){r===void 0&&(r=0),n===void 0&&(n=!1);var e=r;return this.multiply([e,0,0,0,0,0,e,0,0,0,0,0,e,0,0,0,0,0,1,0],n)},saturate:function(r,n){r===void 0&&(r=0),n===void 0&&(n=!1);var e=r*2/3+1,s=(e-1)*-.5;return this.multiply([e,s,s,0,0,s,e,s,0,0,s,s,e,0,0,0,0,0,1,0],n)},desaturate:function(r){return r===void 0&&(r=!1),this.saturate(-1,r)},hue:function(r,n){r===void 0&&(r=0),n===void 0&&(n=!1),r=r/180*Math.PI;var e=Math.cos(r),s=Math.sin(r),a=.213,i=.715,h=.072;return this.multiply([a+e*(1-a)+s*-a,i+e*-i+s*-i,h+e*-h+s*(1-h),0,0,a+e*-a+s*.143,i+e*(1-i)+s*.14,h+e*-h+s*-.283,0,0,a+e*-a+s*-.787,i+e*-i+s*i,h+e*(1-h)+s*h,0,0,0,0,0,1,0],n)},grayscale:function(r,n){return r===void 0&&(r=1),n===void 0&&(n=!1),this.saturate(-r,n)},blackWhite:function(r){return r===void 0&&(r=!1),this.multiply(o.BLACK_WHITE,r)},contrast:function(r,n){r===void 0&&(r=0),n===void 0&&(n=!1);var e=r+1,s=-.5*(e-1);return this.multiply([e,0,0,0,s,0,e,0,0,s,0,0,e,0,s,0,0,0,1,0],n)},negative:function(r){return r===void 0&&(r=!1),this.multiply(o.NEGATIVE,r)},desaturateLuminance:function(r){return r===void 0&&(r=!1),this.multiply(o.DESATURATE_LUMINANCE,r)},sepia:function(r){return r===void 0&&(r=!1),this.multiply(o.SEPIA,r)},night:function(r,n){return r===void 0&&(r=.1),n===void 0&&(n=!1),this.multiply([r*-2,-r,0,0,0,-r,0,r,0,0,0,r,r*2,0,0,0,0,0,1,0],n)},lsd:function(r){return r===void 0&&(r=!1),this.multiply(o.LSD,r)},brown:function(r){return r===void 0&&(r=!1),this.multiply(o.BROWN,r)},vintagePinhole:function(r){return r===void 0&&(r=!1),this.multiply(o.VINTAGE,r)},kodachrome:function(r){return r===void 0&&(r=!1),this.multiply(o.KODACHROME,r)},technicolor:function(r){return r===void 0&&(r=!1),this.multiply(o.TECHNICOLOR,r)},polaroid:function(r){return r===void 0&&(r=!1),this.multiply(o.POLAROID,r)},shiftToBGR:function(r){return r===void 0&&(r=!1),this.multiply(o.SHIFT_BGR,r)},multiply:function(r,n){n===void 0&&(n=!1),n||this.reset();var e=this._matrix,s=c;return s.set(e),e.set([s[0]*r[0]+s[1]*r[5]+s[2]*r[10]+s[3]*r[15],s[0]*r[1]+s[1]*r[6]+s[2]*r[11]+s[3]*r[16],s[0]*r[2]+s[1]*r[7]+s[2]*r[12]+s[3]*r[17],s[0]*r[3]+s[1]*r[8]+s[2]*r[13]+s[3]*r[18],s[0]*r[4]+s[1]*r[9]+s[2]*r[14]+s[3]*r[19]+s[4],s[5]*r[0]+s[6]*r[5]+s[7]*r[10]+s[8]*r[15],s[5]*r[1]+s[6]*r[6]+s[7]*r[11]+s[8]*r[16],s[5]*r[2]+s[6]*r[7]+s[7]*r[12]+s[8]*r[17],s[5]*r[3]+s[6]*r[8]+s[7]*r[13]+s[8]*r[18],s[5]*r[4]+s[6]*r[9]+s[7]*r[14]+s[8]*r[19]+s[9],s[10]*r[0]+s[11]*r[5]+s[12]*r[10]+s[13]*r[15],s[10]*r[1]+s[11]*r[6]+s[12]*r[11]+s[13]*r[16],s[10]*r[2]+s[11]*r[7]+s[12]*r[12]+s[13]*r[17],s[10]*r[3]+s[11]*r[8]+s[12]*r[13]+s[13]*r[18],s[10]*r[4]+s[11]*r[9]+s[12]*r[14]+s[13]*r[19]+s[14],s[15]*r[0]+s[16]*r[5]+s[17]*r[10]+s[18]*r[15],s[15]*r[1]+s[16]*r[6]+s[17]*r[11]+s[18]*r[16],s[15]*r[2]+s[16]*r[7]+s[17]*r[12]+s[18]*r[17],s[15]*r[3]+s[16]*r[8]+s[17]*r[13]+s[18]*r[18],s[15]*r[4]+s[16]*r[9]+s[17]*r[14]+s[18]*r[19]+s[19]]),this._dirty=!0,this}});o.BLACK_WHITE=[.3,.6,.1,0,0,.3,.6,.1,0,0,.3,.6,.1,0,0,0,0,0,1,0],o.NEGATIVE=[-1,0,0,1,0,0,-1,0,1,0,0,0,-1,1,0,0,0,0,1,0],o.DESATURATE_LUMINANCE=[.2764723,.929708,.0938197,0,-37.1,.2764723,.929708,.0938197,0,-37.1,.2764723,.929708,.0938197,0,-37.1,0,0,0,1,0],o.SEPIA=[.393,.7689999,.18899999,0,0,.349,.6859999,.16799999,0,0,.272,.5339999,.13099999,0,0,0,0,0,1,0],o.LSD=[2,-.4,.5,0,0,-.5,2,-.4,0,0,-.4,-.5,3,0,0,0,0,0,1,0],o.BROWN=[.5997023498159715,.34553243048391263,-.2708298674538042,0,47.43192855600873,-.037703249837783157,.8609577587992641,.15059552388459913,0,-36.96841498319127,.24113635128153335,-.07441037908422492,.44972182064877153,0,-7.562075277591283,0,0,0,1,0],o.VINTAGE=[.6279345635605994,.3202183420819367,-.03965408211312453,0,9.651285835294123,.02578397704808868,.6441188644374771,.03259127616149294,0,7.462829176470591,.0466055556782719,-.0851232987247891,.5241648018700465,0,5.159190588235296,0,0,0,1,0],o.KODACHROME=[1.1285582396593525,-.3967382283601348,-.03992559172921793,0,63.72958762196502,-.16404339962244616,1.0835251566291304,-.05498805115633132,0,24.732407896706203,-.16786010706155763,-.5603416277695248,1.6014850761964943,0,35.62982807460946,0,0,0,1,0],o.TECHNICOLOR=[1.9125277891456083,-.8545344976951645,-.09155508482755585,0,11.793603434377337,-.3087833385928097,1.7658908555458428,-.10601743074722245,0,-70.35205161461398,-.231103377548616,-.7501899197440212,1.847597816108189,0,30.950940869491138,0,0,0,1,0],o.POLAROID=[1.438,-.062,-.062,0,0,-.122,1.378,-.122,0,0,-.016,-.016,1.483,0,0,0,0,0,1,0],o.SHIFT_BGR=[0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0],p.exports=o}),51767:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(83419),c=t(29747),o=new l({initialize:function(n,e,s){this._rgb=[0,0,0],this.onChangeCallback=c,this.dirty=!1,this.set(n,e,s)},set:function(r,n,e){return r===void 0&&(r=0),n===void 0&&(n=0),e===void 0&&(e=0),this._rgb=[r,n,e],this.onChange(),this},equals:function(r,n,e){var s=this._rgb;return s[0]===r&&s[1]===n&&s[2]===e},onChange:function(){this.dirty=!0;var r=this._rgb;this.onChangeCallback.call(this,r[0],r[1],r[2])},r:{get:function(){return this._rgb[0]},set:function(r){this._rgb[0]=r,this.onChange()}},g:{get:function(){return this._rgb[1]},set:function(r){this._rgb[1]=r,this.onChange()}},b:{get:function(){return this._rgb[2]},set:function(r){this._rgb[2]=r,this.onChange()}},destroy:function(){this.onChangeCallback=null}});p.exports=o}),60461:(p=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var y={TOP_LEFT:0,TOP_CENTER:1,TOP_RIGHT:2,LEFT_TOP:3,LEFT_CENTER:4,LEFT_BOTTOM:5,CENTER:6,RIGHT_TOP:7,RIGHT_CENTER:8,RIGHT_BOTTOM:9,BOTTOM_LEFT:10,BOTTOM_CENTER:11,BOTTOM_RIGHT:12};p.exports=y}),54312:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(62235),c=t(35893),o=t(86327),r=t(88417),n=function(e,s,a,i){return a===void 0&&(a=0),i===void 0&&(i=0),r(e,c(s)+a),o(e,l(s)+i),e};p.exports=n}),46768:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(62235),c=t(26541),o=t(86327),r=t(385),n=function(e,s,a,i){return a===void 0&&(a=0),i===void 0&&(i=0),r(e,c(s)-a),o(e,l(s)+i),e};p.exports=n}),35827:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(62235),c=t(54380),o=t(86327),r=t(40136),n=function(e,s,a,i){return a===void 0&&(a=0),i===void 0&&(i=0),r(e,c(s)+a),o(e,l(s)+i),e};p.exports=n}),46871:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(66786),c=t(35893),o=t(7702),r=function(n,e,s,a){return s===void 0&&(s=0),a===void 0&&(a=0),l(n,c(e)+s,o(e)+a),n};p.exports=r}),5198:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(7702),c=t(26541),o=t(20786),r=t(385),n=function(e,s,a,i){return a===void 0&&(a=0),i===void 0&&(i=0),r(e,c(s)-a),o(e,l(s)+i),e};p.exports=n}),11879:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(60461),c=[];c[l.BOTTOM_CENTER]=t(54312),c[l.BOTTOM_LEFT]=t(46768),c[l.BOTTOM_RIGHT]=t(35827),c[l.CENTER]=t(46871),c[l.LEFT_CENTER]=t(5198),c[l.RIGHT_CENTER]=t(80503),c[l.TOP_CENTER]=t(89698),c[l.TOP_LEFT]=t(922),c[l.TOP_RIGHT]=t(21373),c[l.LEFT_BOTTOM]=c[l.BOTTOM_LEFT],c[l.LEFT_TOP]=c[l.TOP_LEFT],c[l.RIGHT_BOTTOM]=c[l.BOTTOM_RIGHT],c[l.RIGHT_TOP]=c[l.TOP_RIGHT];var o=function(r,n,e,s,a){return c[e](r,n,s,a)};p.exports=o}),80503:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(7702),c=t(54380),o=t(20786),r=t(40136),n=function(e,s,a,i){return a===void 0&&(a=0),i===void 0&&(i=0),r(e,c(s)+a),o(e,l(s)+i),e};p.exports=n}),89698:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(35893),c=t(17717),o=t(88417),r=t(66737),n=function(e,s,a,i){return a===void 0&&(a=0),i===void 0&&(i=0),o(e,l(s)+a),r(e,c(s)-i),e};p.exports=n}),922:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(26541),c=t(17717),o=t(385),r=t(66737),n=function(e,s,a,i){return a===void 0&&(a=0),i===void 0&&(i=0),o(e,l(s)-a),r(e,c(s)-i),e};p.exports=n}),21373:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(54380),c=t(17717),o=t(40136),r=t(66737),n=function(e,s,a,i){return a===void 0&&(a=0),i===void 0&&(i=0),o(e,l(s)+a),r(e,c(s)-i),e};p.exports=n}),91660:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */p.exports={BottomCenter:t(54312),BottomLeft:t(46768),BottomRight:t(35827),Center:t(46871),LeftCenter:t(5198),QuickSet:t(11879),RightCenter:t(80503),TopCenter:t(89698),TopLeft:t(922),TopRight:t(21373)}}),71926:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(60461),c=t(79291),o={In:t(91660),To:t(16694)};o=c(!1,o,l),p.exports=o}),21578:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(62235),c=t(35893),o=t(88417),r=t(66737),n=function(e,s,a,i){return a===void 0&&(a=0),i===void 0&&(i=0),o(e,c(s)+a),r(e,l(s)+i),e};p.exports=n}),10210:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(62235),c=t(26541),o=t(385),r=t(66737),n=function(e,s,a,i){return a===void 0&&(a=0),i===void 0&&(i=0),o(e,c(s)-a),r(e,l(s)+i),e};p.exports=n}),82341:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(62235),c=t(54380),o=t(40136),r=t(66737),n=function(e,s,a,i){return a===void 0&&(a=0),i===void 0&&(i=0),o(e,c(s)+a),r(e,l(s)+i),e};p.exports=n}),87958:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(62235),c=t(26541),o=t(86327),r=t(40136),n=function(e,s,a,i){return a===void 0&&(a=0),i===void 0&&(i=0),r(e,c(s)-a),o(e,l(s)+i),e};p.exports=n}),40080:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(7702),c=t(26541),o=t(20786),r=t(40136),n=function(e,s,a,i){return a===void 0&&(a=0),i===void 0&&(i=0),r(e,c(s)-a),o(e,l(s)+i),e};p.exports=n}),88466:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(26541),c=t(17717),o=t(40136),r=t(66737),n=function(e,s,a,i){return a===void 0&&(a=0),i===void 0&&(i=0),o(e,l(s)-a),r(e,c(s)-i),e};p.exports=n}),38829:((p,y,t)=>{/**
 * @author       samme
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(60461),c=[];c[l.BOTTOM_CENTER]=t(21578),c[l.BOTTOM_LEFT]=t(10210),c[l.BOTTOM_RIGHT]=t(82341),c[l.LEFT_BOTTOM]=t(87958),c[l.LEFT_CENTER]=t(40080),c[l.LEFT_TOP]=t(88466),c[l.RIGHT_BOTTOM]=t(19211),c[l.RIGHT_CENTER]=t(34609),c[l.RIGHT_TOP]=t(48741),c[l.TOP_CENTER]=t(49440),c[l.TOP_LEFT]=t(81288),c[l.TOP_RIGHT]=t(61323);var o=function(r,n,e,s,a){return c[e](r,n,s,a)};p.exports=o}),19211:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(62235),c=t(54380),o=t(86327),r=t(385),n=function(e,s,a,i){return a===void 0&&(a=0),i===void 0&&(i=0),r(e,c(s)+a),o(e,l(s)+i),e};p.exports=n}),34609:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(7702),c=t(54380),o=t(20786),r=t(385),n=function(e,s,a,i){return a===void 0&&(a=0),i===void 0&&(i=0),r(e,c(s)+a),o(e,l(s)+i),e};p.exports=n}),48741:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(54380),c=t(17717),o=t(385),r=t(66737),n=function(e,s,a,i){return a===void 0&&(a=0),i===void 0&&(i=0),o(e,l(s)+a),r(e,c(s)-i),e};p.exports=n}),49440:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(35893),c=t(17717),o=t(86327),r=t(88417),n=function(e,s,a,i){return a===void 0&&(a=0),i===void 0&&(i=0),r(e,l(s)+a),o(e,c(s)-i),e};p.exports=n}),81288:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(26541),c=t(17717),o=t(86327),r=t(385),n=function(e,s,a,i){return a===void 0&&(a=0),i===void 0&&(i=0),r(e,l(s)-a),o(e,c(s)-i),e};p.exports=n}),61323:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(54380),c=t(17717),o=t(86327),r=t(40136),n=function(e,s,a,i){return a===void 0&&(a=0),i===void 0&&(i=0),r(e,l(s)+a),o(e,c(s)-i),e};p.exports=n}),16694:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */p.exports={BottomCenter:t(21578),BottomLeft:t(10210),BottomRight:t(82341),LeftBottom:t(87958),LeftCenter:t(40080),LeftTop:t(88466),QuickSet:t(38829),RightBottom:t(19211),RightCenter:t(34609),RightTop:t(48741),TopCenter:t(49440),TopLeft:t(81288),TopRight:t(61323)}}),66786:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(88417),c=t(20786),o=function(r,n,e){return l(r,n),c(r,e)};p.exports=o}),62235:(p=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var y=function(t){return t.y+t.height-t.height*t.originY};p.exports=y}),72873:((p,y,t)=>{/**
 * @author       samme
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(62235),c=t(26541),o=t(54380),r=t(17717),n=t(87841),e=function(s,a){a===void 0&&(a=new n);var i=c(s),h=r(s);return a.x=i,a.y=h,a.width=o(s)-i,a.height=l(s)-h,a};p.exports=e}),35893:(p=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var y=function(t){return t.x-t.width*t.originX+t.width*.5};p.exports=y}),7702:(p=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var y=function(t){return t.y-t.height*t.originY+t.height*.5};p.exports=y}),26541:(p=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var y=function(t){return t.x-t.width*t.originX};p.exports=y}),87431:(p=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var y=function(t){return t.width*t.originX};p.exports=y}),46928:(p=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var y=function(t){return t.height*t.originY};p.exports=y}),54380:(p=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var y=function(t){return t.x+t.width-t.width*t.originX};p.exports=y}),17717:(p=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var y=function(t){return t.y-t.height*t.originY};p.exports=y}),86327:(p=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var y=function(t,l){return t.y=l-t.height+t.height*t.originY,t};p.exports=y}),88417:(p=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var y=function(t,l){var c=t.width*t.originX;return t.x=l+c-t.width*.5,t};p.exports=y}),20786:(p=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var y=function(t,l){var c=t.height*t.originY;return t.y=l+c-t.height*.5,t};p.exports=y}),385:(p=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var y=function(t,l){return t.x=l+t.width*t.originX,t};p.exports=y}),40136:(p=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var y=function(t,l){return t.x=l-t.width+t.width*t.originX,t};p.exports=y}),66737:(p=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var y=function(t,l){return t.y=l+t.height*t.originY,t};p.exports=y}),58724:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */p.exports={CenterOn:t(66786),GetBottom:t(62235),GetBounds:t(72873),GetCenterX:t(35893),GetCenterY:t(7702),GetLeft:t(26541),GetOffsetX:t(87431),GetOffsetY:t(46928),GetRight:t(54380),GetTop:t(17717),SetBottom:t(86327),SetCenterX:t(88417),SetCenterY:t(20786),SetLeft:t(385),SetRight:t(40136),SetTop:t(66737)}}),20623:(p=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var y={setCrisp:function(t){var l=["optimizeSpeed","-moz-crisp-edges","-o-crisp-edges","-webkit-optimize-contrast","optimize-contrast","crisp-edges","pixelated"];return l.forEach(function(c){t.style["image-rendering"]=c}),t.style.msInterpolationMode="nearest-neighbor",t},setBicubic:function(t){return t.style["image-rendering"]="auto",t.style.msInterpolationMode="bicubic",t}};p.exports=y}),27919:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(8054),c=t(68703),o=[],r=!1,n=function(){var e=function(m,x,g,T,S){x===void 0&&(x=1),g===void 0&&(g=1),T===void 0&&(T=l.CANVAS),S===void 0&&(S=!1);var C,E=i(T);return E===null?(E={parent:m,canvas:document.createElement("canvas"),type:T},T===l.CANVAS&&o.push(E),C=E.canvas):(E.parent=m,C=E.canvas),S&&(E.parent=C),C.width=x,C.height=g,r&&T===l.CANVAS&&c.disable(C.getContext("2d",{willReadFrequently:!1})),C},s=function(m,x,g){return e(m,x,g,l.CANVAS)},a=function(m,x,g){return e(m,x,g,l.WEBGL)},i=function(m){if(m===void 0&&(m=l.CANVAS),m===l.WEBGL)return null;for(var x=0;x<o.length;x++){var g=o[x];if(!g.parent&&g.type===m)return g}return null},h=function(m){var x=m instanceof HTMLCanvasElement;o.forEach(function(g){(x&&g.canvas===m||!x&&g.parent===m)&&(g.parent=null,g.canvas.width=1,g.canvas.height=1)})},u=function(){var m=0;return o.forEach(function(x){x.parent&&m++}),m},d=function(){return o.length-u()},f=function(){r=!0},v=function(){r=!1};return{create2D:s,create:e,createWebGL:a,disableSmoothing:f,enableSmoothing:v,first:i,free:d,pool:o,remove:h,total:u}};p.exports=n()}),68703:(p=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var y="",t=function(){var l=function(n){for(var e=["i","webkitI","msI","mozI","oI"],s=0;s<e.length;s++){var a=e[s]+"mageSmoothingEnabled";if(a in n)return a}return null},c=function(n){return y===""&&(y=l(n)),y&&(n[y]=!0),n},o=function(n){return y===""&&(y=l(n)),y&&(n[y]=!1),n},r=function(n){return y!==null?n[y]:null};return{disable:o,enable:c,getPrefix:l,isEnabled:r}};p.exports=t()}),65208:(p=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var y=function(t,l){return l===void 0&&(l="none"),t.style.msTouchAction=l,t.style["ms-touch-action"]=l,t.style["touch-action"]=l,t};p.exports=y}),91610:(p=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var y=function(t,l){l===void 0&&(l="none");var c=["-webkit-","-khtml-","-moz-","-ms-",""];return c.forEach(function(o){t.style[o+"user-select"]=l}),t.style["-webkit-touch-callout"]=l,t.style["-webkit-tap-highlight-color"]="rgba(0, 0, 0, 0)",t};p.exports=y}),26253:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */p.exports={CanvasInterpolation:t(20623),CanvasPool:t(27919),Smoothing:t(68703),TouchAction:t(65208),UserSelect:t(91610)}}),40987:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(83419),c=t(37589),o=t(1e3),r=t(7537),n=t(87837),e=new l({initialize:function(a,i,h,u){a===void 0&&(a=0),i===void 0&&(i=0),h===void 0&&(h=0),u===void 0&&(u=255),this.r=0,this.g=0,this.b=0,this.a=255,this._h=0,this._s=0,this._v=0,this._locked=!1,this.gl=[0,0,0,1],this._color=0,this._color32=0,this._rgba="",this.setTo(a,i,h,u)},transparent:function(){return this._locked=!0,this.red=0,this.green=0,this.blue=0,this.alpha=0,this._locked=!1,this.update(!0)},setTo:function(s,a,i,h,u){return h===void 0&&(h=255),u===void 0&&(u=!0),this._locked=!0,this.red=s,this.green=a,this.blue=i,this.alpha=h,this._locked=!1,this.update(u)},setGLTo:function(s,a,i,h){return h===void 0&&(h=1),this._locked=!0,this.redGL=s,this.greenGL=a,this.blueGL=i,this.alphaGL=h,this._locked=!1,this.update(!0)},setFromRGB:function(s){return this._locked=!0,this.red=s.r,this.green=s.g,this.blue=s.b,s.hasOwnProperty("a")&&(this.alpha=s.a),this._locked=!1,this.update(!0)},setFromHSV:function(s,a,i){return r(s,a,i,this)},update:function(s){if(s===void 0&&(s=!1),this._locked)return this;var a=this.r,i=this.g,h=this.b,u=this.a;return this._color=c(a,i,h),this._color32=o(a,i,h,u),this._rgba="rgba("+a+","+i+","+h+","+u/255+")",s&&n(a,i,h,this),this},updateHSV:function(){var s=this.r,a=this.g,i=this.b;return n(s,a,i,this),this},clone:function(){return new e(this.r,this.g,this.b,this.a)},gray:function(s){return this.setTo(s,s,s)},random:function(s,a){s===void 0&&(s=0),a===void 0&&(a=255);var i=Math.floor(s+Math.random()*(a-s)),h=Math.floor(s+Math.random()*(a-s)),u=Math.floor(s+Math.random()*(a-s));return this.setTo(i,h,u)},randomGray:function(s,a){s===void 0&&(s=0),a===void 0&&(a=255);var i=Math.floor(s+Math.random()*(a-s));return this.setTo(i,i,i)},saturate:function(s){return this.s+=s/100,this},desaturate:function(s){return this.s-=s/100,this},lighten:function(s){return this.v+=s/100,this},darken:function(s){return this.v-=s/100,this},brighten:function(s){var a=this.r,i=this.g,h=this.b;return a=Math.max(0,Math.min(255,a-Math.round(255*-(s/100)))),i=Math.max(0,Math.min(255,i-Math.round(255*-(s/100)))),h=Math.max(0,Math.min(255,h-Math.round(255*-(s/100)))),this.setTo(a,i,h)},color:{get:function(){return this._color}},color32:{get:function(){return this._color32}},rgba:{get:function(){return this._rgba}},redGL:{get:function(){return this.gl[0]},set:function(s){this.gl[0]=Math.min(Math.abs(s),1),this.r=Math.floor(this.gl[0]*255),this.update(!0)}},greenGL:{get:function(){return this.gl[1]},set:function(s){this.gl[1]=Math.min(Math.abs(s),1),this.g=Math.floor(this.gl[1]*255),this.update(!0)}},blueGL:{get:function(){return this.gl[2]},set:function(s){this.gl[2]=Math.min(Math.abs(s),1),this.b=Math.floor(this.gl[2]*255),this.update(!0)}},alphaGL:{get:function(){return this.gl[3]},set:function(s){this.gl[3]=Math.min(Math.abs(s),1),this.a=Math.floor(this.gl[3]*255),this.update()}},red:{get:function(){return this.r},set:function(s){s=Math.floor(Math.abs(s)),this.r=Math.min(s,255),this.gl[0]=s/255,this.update(!0)}},green:{get:function(){return this.g},set:function(s){s=Math.floor(Math.abs(s)),this.g=Math.min(s,255),this.gl[1]=s/255,this.update(!0)}},blue:{get:function(){return this.b},set:function(s){s=Math.floor(Math.abs(s)),this.b=Math.min(s,255),this.gl[2]=s/255,this.update(!0)}},alpha:{get:function(){return this.a},set:function(s){s=Math.floor(Math.abs(s)),this.a=Math.min(s,255),this.gl[3]=s/255,this.update()}},h:{get:function(){return this._h},set:function(s){this._h=s,r(s,this._s,this._v,this)}},s:{get:function(){return this._s},set:function(s){this._s=s,r(this._h,s,this._v,this)}},v:{get:function(){return this._v},set:function(s){this._v=s,r(this._h,this._s,s,this)}}});p.exports=e}),92728:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(37589),c=function(o){o===void 0&&(o=1024);var r=[],n=255,e,s=255,a=0,i=0;for(e=0;e<=n;e++)r.push({r:s,g:e,b:i,color:l(s,e,i)});for(a=255,e=n;e>=0;e--)r.push({r:e,g:a,b:i,color:l(e,a,i)});for(s=0,e=0;e<=n;e++,a--)r.push({r:s,g:a,b:e,color:l(s,a,e)});for(a=0,i=255,e=0;e<=n;e++,i--,s++)r.push({r:s,g:a,b:i,color:l(s,a,i)});if(o===1024)return r;var h=[],u=0,d=1024/o;for(e=0;e<o;e++)h.push(r[Math.floor(u)]),u+=d;return h};p.exports=c}),91588:(p=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var y=function(t){var l={r:t>>16&255,g:t>>8&255,b:t&255,a:255};return t>16777215&&(l.a=t>>>24),l};p.exports=y}),62957:(p=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var y=function(t){var l=t.toString(16);return l.length===1?"0"+l:l};p.exports=y}),37589:(p=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var y=function(t,l,c){return t<<16|l<<8|c};p.exports=y}),1e3:(p=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var y=function(t,l,c,o){return o<<24|t<<16|l<<8|c};p.exports=y}),62183:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(40987),c=t(89528),o=function(r,n,e){var s=e,a=e,i=e;if(n!==0){var h=e<.5?e*(1+n):e+n-e*n,u=2*e-h;s=c(u,h,r+1/3),a=c(u,h,r),i=c(u,h,r-1/3)}var d=new l;return d.setGLTo(s,a,i,1)};p.exports=o}),27939:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(7537),c=function(o,r){o===void 0&&(o=1),r===void 0&&(r=1);for(var n=[],e=0;e<=359;e++)n.push(l(e/359,o,r));return n};p.exports=c}),7537:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(37589);function c(r,n,e,s){var a=(r+n*6)%6,i=Math.min(a,4-a,1);return Math.round(255*(s-s*e*Math.max(0,i)))}var o=function(r,n,e,s){n===void 0&&(n=1),e===void 0&&(e=1);var a=c(5,r,n,e),i=c(3,r,n,e),h=c(1,r,n,e);return s?s.setTo?s.setTo(a,i,h,s.alpha,!0):(s.r=a,s.g=i,s.b=h,s.color=l(a,i,h),s):{r:a,g:i,b:h,color:l(a,i,h)}};p.exports=o}),70238:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(40987),c=function(o){var r=new l;o=o.replace(/^(?:#|0x)?([a-f\d])([a-f\d])([a-f\d])$/i,function(i,h,u,d){return h+h+u+u+d+d});var n=/^(?:#|0x)?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(o);if(n){var e=parseInt(n[1],16),s=parseInt(n[2],16),a=parseInt(n[3],16);r.setTo(e,s,a)}return r};p.exports=c}),89528:(p=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var y=function(t,l,c){return c<0&&(c+=1),c>1&&(c-=1),c<.16666666666666666?t+(l-t)*6*c:c<.5?l:c<.6666666666666666?t+(l-t)*(.6666666666666666-c)*6:t};p.exports=y}),30100:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(40987),c=t(90664),o=function(r){var n=c(r);return new l(n.r,n.g,n.b,n.a)};p.exports=o}),90664:(p=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var y=function(t){return t>16777215?{a:t>>>24,r:t>>16&255,g:t>>8&255,b:t&255}:{a:255,r:t>>16&255,g:t>>8&255,b:t&255}};p.exports=y}),13699:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(28915),c=t(37589),o=function(e,s,a,i,h,u,d,f){d===void 0&&(d=100),f===void 0&&(f=0);var v=f/d,m=l(e,i,v),x=l(s,h,v),g=l(a,u,v);return{r:m,g:x,b:g,a:255,color:c(m,x,g)}},r=function(e,s,a,i){return a===void 0&&(a=100),i===void 0&&(i=0),o(e.r,e.g,e.b,s.r,s.g,s.b,a,i)},n=function(e,s,a,i,h,u){return h===void 0&&(h=100),u===void 0&&(u=0),o(e.r,e.g,e.b,s,a,i,h,u)};p.exports={RGBWithRGB:o,ColorWithRGB:n,ColorWithColor:r}}),68957:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(40987),c=function(o){return new l(o.r,o.g,o.b,o.a)};p.exports=c}),87388:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(40987),c=function(o){var r=new l,n=/^rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?))?\s*\)$/.exec(o.toLowerCase());if(n){var e=parseInt(n[1],10),s=parseInt(n[2],10),a=parseInt(n[3],10),i=n[4]!==void 0?parseFloat(n[4]):1;r.setTo(e,s,a,i*255)}return r};p.exports=c}),87837:(p=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var y=function(t,l,c,o){o===void 0&&(o={h:0,s:0,v:0}),t/=255,l/=255,c/=255;var r=Math.min(t,l,c),n=Math.max(t,l,c),e=n-r,s=0,a=n===0?0:e/n,i=n;return n!==r&&(n===t?s=(l-c)/e+(l<c?6:0):n===l?s=(c-t)/e+2:n===c&&(s=(t-l)/e+4),s/=6),o.hasOwnProperty("_h")?(o._h=s,o._s=a,o._v=i):(o.h=s,o.s=a,o.v=i),o};p.exports=y}),75723:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(62957),c=function(o,r,n,e,s){return e===void 0&&(e=255),s===void 0&&(s="#"),s==="#"?"#"+((1<<24)+(o<<16)+(r<<8)+n).toString(16).slice(1,7):"0x"+l(e)+l(o)+l(r)+l(n)};p.exports=c}),85386:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(30976),c=t(40987),o=function(r,n){return r===void 0&&(r=0),n===void 0&&(n=255),new c(l(r,n),l(r,n),l(r,n))};p.exports=o}),80333:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(70238),c=t(30100),o=t(68957),r=t(87388),n=function(e){var s=typeof e;switch(s){case"string":return e.substr(0,3).toLowerCase()==="rgb"?r(e):l(e);case"number":return c(e);case"object":return o(e)}};p.exports=n}),3956:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(40987);l.ColorSpectrum=t(92728),l.ColorToRGBA=t(91588),l.ComponentToHex=t(62957),l.GetColor=t(37589),l.GetColor32=t(1e3),l.HexStringToColor=t(70238),l.HSLToColor=t(62183),l.HSVColorWheel=t(27939),l.HSVToRGB=t(7537),l.HueToComponent=t(89528),l.IntegerToColor=t(30100),l.IntegerToRGB=t(90664),l.Interpolate=t(13699),l.ObjectToColor=t(68957),l.RandomRGB=t(85386),l.RGBStringToColor=t(87388),l.RGBToHSV=t(87837),l.RGBToString=t(75723),l.ValueToColor=t(80333),p.exports=l}),27460:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */p.exports={Align:t(71926),BaseShader:t(73894),Bounds:t(58724),Canvas:t(26253),Color:t(3956),ColorMatrix:t(89422),Masks:t(69781),RGB:t(51767)}}),6858:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(83419),c=t(39429),o=new l({initialize:function(n,e,s,a,i,h){e||(e=n.sys.make.image({x:s,y:a,key:i,frame:h,add:!1})),this.bitmapMask=e,this.invertAlpha=!1,this.isStencil=!1},setBitmap:function(r){this.bitmapMask=r},preRenderWebGL:function(r,n,e){r.pipelines.BITMAPMASK_PIPELINE.beginMask(this,n,e)},postRenderWebGL:function(r,n,e){r.pipelines.BITMAPMASK_PIPELINE.endMask(this,n,e)},preRenderCanvas:function(){},postRenderCanvas:function(){},destroy:function(){this.bitmapMask=null}});c.register("bitmapMask",function(r,n,e,s,a){return new o(this.scene,r,n,e,s,a)}),p.exports=o}),80661:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(83419),c=new l({initialize:function(r,n){this.geometryMask=n,this.invertAlpha=!1,this.isStencil=!0,this.level=0},setShape:function(o){return this.geometryMask=o,this},setInvertAlpha:function(o){return o===void 0&&(o=!0),this.invertAlpha=o,this},preRenderWebGL:function(o,r,n){var e=o.gl;o.flush(),o.maskStack.length===0&&(e.enable(e.STENCIL_TEST),e.clear(e.STENCIL_BUFFER_BIT),o.maskCount=0),o.currentCameraMask.mask!==this&&(o.currentMask.mask=this),o.maskStack.push({mask:this,camera:n}),this.applyStencil(o,n,!0),o.maskCount++},applyStencil:function(o,r,n){var e=o.gl,s=this.geometryMask,a=o.maskCount,i=255;e.colorMask(!1,!1,!1,!1),n?(e.stencilFunc(e.EQUAL,a,i),e.stencilOp(e.KEEP,e.KEEP,e.INCR),a++):(e.stencilFunc(e.EQUAL,a+1,i),e.stencilOp(e.KEEP,e.KEEP,e.DECR)),this.level=a,s.renderWebGL(o,s,r),o.flush(),e.colorMask(!0,!0,!0,!0),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),this.invertAlpha?e.stencilFunc(e.NOTEQUAL,a,i):e.stencilFunc(e.EQUAL,a,i)},postRenderWebGL:function(o){var r=o.gl;o.maskStack.pop(),o.maskCount--,o.flush();var n=o.currentMask;if(o.maskStack.length===0)n.mask=null,r.disable(r.STENCIL_TEST);else{var e=o.maskStack[o.maskStack.length-1];e.mask.applyStencil(o,e.camera,!1),o.currentCameraMask.mask!==e.mask?(n.mask=e.mask,n.camera=e.camera):n.mask=null}},preRenderCanvas:function(o,r,n){var e=this.geometryMask;o.currentContext.save(),e.renderCanvas(o,e,n,null,null,!0),o.currentContext.clip()},postRenderCanvas:function(o){o.currentContext.restore()},destroy:function(){this.geometryMask=null}});p.exports=c}),69781:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */p.exports={BitmapMask:t(6858),GeometryMask:t(80661)}}),73894:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(83419),c=new l({initialize:function(r,n,e,s){(!n||n==="")&&(n=["precision mediump float;","uniform vec2 resolution;","varying vec2 fragCoord;","void main () {","    vec2 uv = fragCoord / resolution.xy;","    gl_FragColor = vec4(uv.xyx, 1.0);","}"].join(`
`)),(!e||e==="")&&(e=["precision mediump float;","uniform mat4 uProjectionMatrix;","uniform mat4 uViewMatrix;","uniform vec2 uResolution;","attribute vec2 inPosition;","varying vec2 fragCoord;","varying vec2 outTexCoord;","void main () {","   gl_Position = uProjectionMatrix * uViewMatrix * vec4(inPosition, 1.0, 1.0);","   fragCoord = vec2(inPosition.x, uResolution.y - inPosition.y);","   outTexCoord = vec2(inPosition.x / uResolution.x, fragCoord.y / uResolution.y);","}"].join(`
`)),s===void 0&&(s=null),this.key=r,this.fragmentSrc=n,this.vertexSrc=e,this.uniforms=s}});p.exports=c}),40366:(p=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var y=function(t,l){var c;if(l)typeof l=="string"?c=document.getElementById(l):typeof l=="object"&&l.nodeType===1&&(c=l);else if(t.parentElement||l===null)return t;return c||(c=document.body),c.appendChild(t),t};p.exports=y}),83719:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(40366),c=function(o){var r=o.config;if(!(!r.parent||!r.domCreateContainer)){var n=document.createElement("div");n.style.cssText=["display: block;","width: "+o.scale.width+"px;","height: "+o.scale.height+"px;","padding: 0; margin: 0;","position: absolute;","overflow: hidden;","pointer-events: "+r.domPointerEvents+";","transform: scale(1);","transform-origin: left top;"].join(" "),o.domContainer=n,l(n,r.parent)}};p.exports=c}),57264:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(25892),c=function(o){if(document.readyState==="complete"||document.readyState==="interactive"){o();return}var r=function(){document.removeEventListener("deviceready",r,!0),document.removeEventListener("DOMContentLoaded",r,!0),window.removeEventListener("load",r,!0),o()};document.body?l.cordova?document.addEventListener("deviceready",r,!1):(document.addEventListener("DOMContentLoaded",r,!0),window.addEventListener("load",r,!0)):window.setTimeout(r,20)};p.exports=c}),57811:(p=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var y=function(t){if(!t)return window.innerHeight;var l=Math.abs(window.orientation),c={w:0,h:0},o=document.createElement("div");return o.setAttribute("style","position: fixed; height: 100vh; width: 0; top: 0"),document.documentElement.appendChild(o),c.w=l===90?o.offsetHeight:window.innerWidth,c.h=l===90?window.innerWidth:o.offsetHeight,document.documentElement.removeChild(o),o=null,Math.abs(window.orientation)!==90?c.h:c.w};p.exports=y}),45818:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(13560),c=function(o,r){var n=window.screen,e=n?n.orientation||n.mozOrientation||n.msOrientation:!1;if(e&&typeof e.type=="string")return e.type;if(typeof e=="string")return e;if(typeof window.orientation=="number")return window.orientation===0||window.orientation===180?l.ORIENTATION.PORTRAIT:l.ORIENTATION.LANDSCAPE;if(window.matchMedia){if(window.matchMedia("(orientation: portrait)").matches)return l.ORIENTATION.PORTRAIT;if(window.matchMedia("(orientation: landscape)").matches)return l.ORIENTATION.LANDSCAPE}else return r>o?l.ORIENTATION.PORTRAIT:l.ORIENTATION.LANDSCAPE};p.exports=c}),74403:(p=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var y=function(t){var l;return t!==""&&(typeof t=="string"?l=document.getElementById(t):t&&t.nodeType===1&&(l=t)),l||(l=document.body),l};p.exports=y}),56836:(p=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var y=function(t){var l="";try{if(window.DOMParser){var c=new DOMParser;l=c.parseFromString(t,"text/xml")}else l=new ActiveXObject("Microsoft.XMLDOM"),l.loadXML(t)}catch{l=null}return!l||!l.documentElement||l.getElementsByTagName("parsererror").length?null:l};p.exports=y}),35846:(p=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var y=function(t){t.parentNode&&t.parentNode.removeChild(t)};p.exports=y}),43092:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(83419),c=t(29747),o=new l({initialize:function(){this.isRunning=!1,this.callback=c,this.isSetTimeOut=!1,this.timeOutID=null,this.delay=0;var n=this;this.step=function e(s){n.callback(s),n.isRunning&&(n.timeOutID=window.requestAnimationFrame(e))},this.stepTimeout=function e(){n.isRunning&&(n.timeOutID=window.setTimeout(e,n.delay)),n.callback(window.performance.now())}},start:function(r,n,e){this.isRunning||(this.callback=r,this.isSetTimeOut=n,this.delay=e,this.isRunning=!0,this.timeOutID=n?window.setTimeout(this.stepTimeout,0):window.requestAnimationFrame(this.step))},stop:function(){this.isRunning=!1,this.isSetTimeOut?clearTimeout(this.timeOutID):window.cancelAnimationFrame(this.timeOutID)},destroy:function(){this.stop(),this.callback=c}});p.exports=o}),84902:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l={AddToDOM:t(40366),DOMContentLoaded:t(57264),GetInnerHeight:t(57811),GetScreenOrientation:t(45818),GetTarget:t(74403),ParseXML:t(56836),RemoveFromDOM:t(35846),RequestAnimationFrame:t(43092)};p.exports=l}),47565:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(83419),c=t(50792),o=t(37277),r=new l({Extends:c,initialize:function(){c.call(this)},shutdown:function(){this.removeAllListeners()},destroy:function(){this.removeAllListeners()}});o.register("EventEmitter",r,"events"),p.exports=r}),93055:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */p.exports={EventEmitter:t(47565)}}),20122:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(83419),c=t(72898),o=t(14811),r=new l({Extends:c,initialize:function(e,s){s===void 0&&(s=1),c.call(this,o.BARREL,e),this.amount=s}});p.exports=r}),32251:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(83419),c=t(72898),o=t(14811),r=new l({Extends:c,initialize:function(e,s,a,i,h,u,d){a===void 0&&(a=1),i===void 0&&(i=1),h===void 0&&(h=1),u===void 0&&(u=1),d===void 0&&(d=4),c.call(this,o.BLOOM,e),this.steps=d,this.offsetX=a,this.offsetY=i,this.blurStrength=h,this.strength=u,this.glcolor=[1,1,1],s!=null&&(this.color=s)},color:{get:function(){var n=this.glcolor;return(n[0]*255<<16)+(n[1]*255<<8)+(n[2]*255|0)},set:function(n){var e=this.glcolor;e[0]=(n>>16&255)/255,e[1]=(n>>8&255)/255,e[2]=(n&255)/255}}});p.exports=r}),9047:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(83419),c=t(72898),o=t(14811),r=new l({Extends:c,initialize:function(e,s,a,i,h,u,d){s===void 0&&(s=0),a===void 0&&(a=2),i===void 0&&(i=2),h===void 0&&(h=1),d===void 0&&(d=4),c.call(this,o.BLUR,e),this.quality=s,this.x=a,this.y=i,this.steps=d,this.strength=h,this.glcolor=[1,1,1],u!=null&&(this.color=u)},color:{get:function(){var n=this.glcolor;return(n[0]*255<<16)+(n[1]*255<<8)+(n[2]*255|0)},set:function(n){var e=this.glcolor;e[0]=(n>>16&255)/255,e[1]=(n>>8&255)/255,e[2]=(n&255)/255}}});p.exports=r}),27885:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(83419),c=t(72898),o=t(14811),r=new l({Extends:c,initialize:function(e,s,a,i,h,u,d,f){s===void 0&&(s=.5),a===void 0&&(a=1),i===void 0&&(i=.2),h===void 0&&(h=!1),u===void 0&&(u=1),d===void 0&&(d=1),f===void 0&&(f=1),c.call(this,o.BOKEH,e),this.radius=s,this.amount=a,this.contrast=i,this.isTiltShift=h,this.strength=f,this.blurX=u,this.blurY=d}});p.exports=r}),12578:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(83419),c=t(72898),o=t(14811),r=new l({Extends:c,initialize:function(e,s,a,i,h,u){s===void 0&&(s=8),h===void 0&&(h=1),u===void 0&&(u=.005),c.call(this,o.CIRCLE,e),this.scale=h,this.feather=u,this.thickness=s,this.glcolor=[1,.2,.7],this.glcolor2=[1,0,0,.4],a!=null&&(this.color=a),i!=null&&(this.backgroundColor=i)},color:{get:function(){var n=this.glcolor;return(n[0]*255<<16)+(n[1]*255<<8)+(n[2]*255|0)},set:function(n){var e=this.glcolor;e[0]=(n>>16&255)/255,e[1]=(n>>8&255)/255,e[2]=(n&255)/255}},backgroundColor:{get:function(){var n=this.glcolor2;return(n[0]*255<<16)+(n[1]*255<<8)+(n[2]*255|0)},set:function(n){var e=this.glcolor2;e[0]=(n>>16&255)/255,e[1]=(n>>8&255)/255,e[2]=(n&255)/255}},backgroundAlpha:{get:function(){return this.glcolor2[3]},set:function(n){this.glcolor2[3]=n}}});p.exports=r}),15802:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(83419),c=t(89422),o=t(14811),r=new l({Extends:c,initialize:function(e){c.call(this),this.type=o.COLOR_MATRIX,this.gameObject=e,this.active=!0},destroy:function(){this.gameObject=null,this._matrix=null,this._data=null}});p.exports=r}),72898:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(83419),c=new l({initialize:function(r,n){this.type=r,this.gameObject=n,this.active=!0},setActive:function(o){return this.active=o,this},destroy:function(){this.gameObject=null,this.active=!1}});p.exports=c}),44553:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(83419),c=t(72898),o=t(14811),r=new l({Extends:c,initialize:function(e,s,a,i){s===void 0&&(s="__WHITE"),a===void 0&&(a=.005),i===void 0&&(i=.005),c.call(this,o.DISPLACEMENT,e),this.x=a,this.y=i,this.glTexture,this.setTexture(s)},setTexture:function(n){var e=this.gameObject.scene.sys.textures.getFrame(n);return e&&(this.glTexture=e.glTexture),this}});p.exports=r}),68531:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(83419),c=t(72898),o=t(14811),r=new l({Extends:c,initialize:function(e,s,a,i,h){a===void 0&&(a=4),i===void 0&&(i=0),h===void 0&&(h=!1),c.call(this,o.GLOW,e),this.outerStrength=a,this.innerStrength=i,this.knockout=h,this.glcolor=[1,1,1,1],s!==void 0&&(this.color=s)},color:{get:function(){var n=this.glcolor;return(n[0]*255<<16)+(n[1]*255<<8)+(n[2]*255|0)},set:function(n){var e=this.glcolor;e[0]=(n>>16&255)/255,e[1]=(n>>8&255)/255,e[2]=(n&255)/255}}});p.exports=r}),37102:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(83419),c=t(72898),o=t(14811),r=new l({Extends:c,initialize:function(e,s,a,i,h,u,d,f,v){i===void 0&&(i=.2),h===void 0&&(h=0),u===void 0&&(u=0),d===void 0&&(d=0),f===void 0&&(f=1),v===void 0&&(v=0),c.call(this,o.GRADIENT,e),this.alpha=i,this.size=v,this.fromX=h,this.fromY=u,this.toX=d,this.toY=f,this.glcolor1=[255,0,0],this.glcolor2=[0,255,0],s!=null&&(this.color1=s),a!=null&&(this.color2=a)},color1:{get:function(){var n=this.glcolor1;return(n[0]<<16)+(n[1]<<8)+(n[2]|0)},set:function(n){var e=this.glcolor1;e[0]=n>>16&255,e[1]=n>>8&255,e[2]=n&255}},color2:{get:function(){var n=this.glcolor2;return(n[0]<<16)+(n[1]<<8)+(n[2]|0)},set:function(n){var e=this.glcolor2;e[0]=n>>16&255,e[1]=n>>8&255,e[2]=n&255}}});p.exports=r}),86886:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(83419),c=t(72898),o=t(14811),r=new l({Extends:c,initialize:function(e,s){s===void 0&&(s=1),c.call(this,o.PIXELATE,e),this.amount=s}});p.exports=r}),92322:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(83419),c=t(72898),o=t(14811),r=new l({Extends:c,initialize:function(e,s,a,i,h,u,d,f){s===void 0&&(s=0),a===void 0&&(a=0),i===void 0&&(i=.1),h===void 0&&(h=1),d===void 0&&(d=6),f===void 0&&(f=1),c.call(this,o.SHADOW,e),this.x=s,this.y=a,this.decay=i,this.power=h,this.glcolor=[0,0,0,1],this.samples=d,this.intensity=f,u!==void 0&&(this.color=u)},color:{get:function(){var n=this.glcolor;return(n[0]*255<<16)+(n[1]*255<<8)+(n[2]*255|0)},set:function(n){var e=this.glcolor;e[0]=(n>>16&255)/255,e[1]=(n>>8&255)/255,e[2]=(n&255)/255}}});p.exports=r}),39563:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(83419),c=t(72898),o=t(14811),r=new l({Extends:c,initialize:function(e,s,a,i,h){s===void 0&&(s=.5),a===void 0&&(a=.5),i===void 0&&(i=3),h===void 0&&(h=!1),c.call(this,o.SHINE,e),this.speed=s,this.lineWidth=a,this.gradient=i,this.reveal=h}});p.exports=r}),56448:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(83419),c=t(72898),o=t(14811),r=new l({Extends:c,initialize:function(e,s,a,i,h){s===void 0&&(s=.5),a===void 0&&(a=.5),i===void 0&&(i=.5),h===void 0&&(h=.5),c.call(this,o.VIGNETTE,e),this.x=s,this.y=a,this.radius=i,this.strength=h}});p.exports=r}),38433:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(83419),c=t(72898),o=t(14811),r=new l({Extends:c,initialize:function(e,s,a,i,h){s===void 0&&(s=.1),a===void 0&&(a=0),i===void 0&&(i=0),h===void 0&&(h=!1),c.call(this,o.WIPE,e),this.progress=0,this.wipeWidth=s,this.direction=a,this.axis=i,this.reveal=h}});p.exports=r}),14811:(p=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var y={GLOW:4,SHADOW:5,PIXELATE:6,VIGNETTE:7,SHINE:8,BLUR:9,GRADIENT:12,BLOOM:13,COLOR_MATRIX:14,CIRCLE:15,BARREL:16,DISPLACEMENT:17,WIPE:18,BOKEH:19};p.exports=y}),66064:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(79291),c=t(14811),o={Barrel:t(20122),Controller:t(72898),Bloom:t(32251),Blur:t(9047),Bokeh:t(27885),Circle:t(12578),ColorMatrix:t(15802),Displacement:t(44553),Glow:t(68531),Gradient:t(37102),Pixelate:t(86886),Shadow:t(92322),Shine:t(39563),Vignette:t(56448),Wipe:t(38433)};o=l(!1,o,c),p.exports=o}),25305:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(10312),c=t(23568),o=function(r,n,e){n.x=c(e,"x",0),n.y=c(e,"y",0),n.depth=c(e,"depth",0),n.flipX=c(e,"flipX",!1),n.flipY=c(e,"flipY",!1);var s=c(e,"scale",null);typeof s=="number"?n.setScale(s):s!==null&&(n.scaleX=c(s,"x",1),n.scaleY=c(s,"y",1));var a=c(e,"scrollFactor",null);typeof a=="number"?n.setScrollFactor(a):a!==null&&(n.scrollFactorX=c(a,"x",1),n.scrollFactorY=c(a,"y",1)),n.rotation=c(e,"rotation",0);var i=c(e,"angle",null);i!==null&&(n.angle=i),n.alpha=c(e,"alpha",1);var h=c(e,"origin",null);if(typeof h=="number")n.setOrigin(h);else if(h!==null){var u=c(h,"x",.5),d=c(h,"y",.5);n.setOrigin(u,d)}n.blendMode=c(e,"blendMode",l.NORMAL),n.visible=c(e,"visible",!0);var f=c(e,"add",!0);return f&&r.sys.displayList.add(n),n.preUpdate&&r.sys.updateList.add(n),n};p.exports=o}),13059:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(23568),c=function(o,r){var n=l(r,"anims",null);if(n===null)return o;if(typeof n=="string")o.anims.play(n);else if(typeof n=="object"){var e=o.anims,s=l(n,"key",void 0);if(s){var a=l(n,"startFrame",void 0),i=l(n,"delay",0),h=l(n,"repeat",0),u=l(n,"repeatDelay",0),d=l(n,"yoyo",!1),f=l(n,"play",!1),v=l(n,"delayedPlay",0),m={key:s,delay:i,repeat:h,repeatDelay:u,yoyo:d,startFrame:a};f?e.play(m):v>0?e.playAfterDelay(m,v):e.load(m)}}return o};p.exports=c}),8050:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(83419),c=t(73162),o=t(37277),r=t(51708),n=t(44594),e=t(19186),s=new l({Extends:c,initialize:function(i){c.call(this,i),this.sortChildrenFlag=!1,this.scene=i,this.systems=i.sys,this.events=i.sys.events,this.addCallback=this.addChildCallback,this.removeCallback=this.removeChildCallback,this.events.once(n.BOOT,this.boot,this),this.events.on(n.START,this.start,this)},boot:function(){this.events.once(n.DESTROY,this.destroy,this)},addChildCallback:function(a){a.displayList&&a.displayList!==this&&a.removeFromDisplayList(),a.parentContainer&&a.parentContainer.remove(a),a.displayList||(this.queueDepthSort(),a.displayList=this,a.emit(r.ADDED_TO_SCENE,a,this.scene),this.events.emit(n.ADDED_TO_SCENE,a,this.scene))},removeChildCallback:function(a){this.queueDepthSort(),a.displayList=null,a.emit(r.REMOVED_FROM_SCENE,a,this.scene),this.events.emit(n.REMOVED_FROM_SCENE,a,this.scene)},start:function(){this.events.once(n.SHUTDOWN,this.shutdown,this)},queueDepthSort:function(){this.sortChildrenFlag=!0},depthSort:function(){this.sortChildrenFlag&&(e(this.list,this.sortByDepth),this.sortChildrenFlag=!1)},sortByDepth:function(a,i){return a._depth-i._depth},getChildren:function(){return this.list},shutdown:function(){for(var a=this.list,i=a.length;i--;)a[i]&&a[i].destroy(!0);a.length=0,this.events.off(n.SHUTDOWN,this.shutdown,this)},destroy:function(){this.shutdown(),this.events.off(n.START,this.start,this),this.scene=null,this.systems=null,this.events=null}});o.register("DisplayList",s,"displayList"),p.exports=s}),95643:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(83419),c=t(53774),o=t(45893),r=t(50792),n=t(51708),e=t(44594),s=new l({Extends:r,initialize:function(i,h){r.call(this),this.scene=i,this.displayList=null,this.type=h,this.state=0,this.parentContainer=null,this.name="",this.active=!0,this.tabIndex=-1,this.data=null,this.renderFlags=15,this.cameraFilter=0,this.input=null,this.body=null,this.ignoreDestroy=!1,this.on(n.ADDED_TO_SCENE,this.addedToScene,this),this.on(n.REMOVED_FROM_SCENE,this.removedFromScene,this),i.sys.queueDepthSort()},setActive:function(a){return this.active=a,this},setName:function(a){return this.name=a,this},setState:function(a){return this.state=a,this},setDataEnabled:function(){return this.data||(this.data=new o(this)),this},setData:function(a,i){return this.data||(this.data=new o(this)),this.data.set(a,i),this},incData:function(a,i){return this.data||(this.data=new o(this)),this.data.inc(a,i),this},toggleData:function(a){return this.data||(this.data=new o(this)),this.data.toggle(a),this},getData:function(a){return this.data||(this.data=new o(this)),this.data.get(a)},setInteractive:function(a,i,h){return this.scene.sys.input.enable(this,a,i,h),this},disableInteractive:function(a){return a===void 0&&(a=!1),this.scene.sys.input.disable(this,a),this},removeInteractive:function(a){return a===void 0&&(a=!1),this.scene.sys.input.clear(this),a&&this.scene.sys.input.resetCursor(),this.input=void 0,this},addedToScene:function(){},removedFromScene:function(){},update:function(){},toJSON:function(){return c(this)},willRender:function(a){var i=this.displayList&&this.displayList.active?this.displayList.willRender(a):!0;return!(!i||s.RENDER_MASK!==this.renderFlags||this.cameraFilter!==0&&this.cameraFilter&a.id)},getIndexList:function(){for(var a=this,i=this.parentContainer,h=[];i&&(h.unshift(i.getIndex(a)),a=i,i.parentContainer);)i=i.parentContainer;return this.displayList?h.unshift(this.displayList.getIndex(a)):h.unshift(this.scene.sys.displayList.getIndex(a)),h},addToDisplayList:function(a){return a===void 0&&(a=this.scene.sys.displayList),this.displayList&&this.displayList!==a&&this.removeFromDisplayList(),a.exists(this)||(this.displayList=a,a.add(this,!0),a.queueDepthSort(),this.emit(n.ADDED_TO_SCENE,this,this.scene),a.events.emit(e.ADDED_TO_SCENE,this,this.scene)),this},addToUpdateList:function(){return this.scene&&this.preUpdate&&this.scene.sys.updateList.add(this),this},removeFromDisplayList:function(){var a=this.displayList||this.scene.sys.displayList;return a&&a.exists(this)&&(a.remove(this,!0),a.queueDepthSort(),this.displayList=null,this.emit(n.REMOVED_FROM_SCENE,this,this.scene),a.events.emit(e.REMOVED_FROM_SCENE,this,this.scene)),this},removeFromUpdateList:function(){return this.scene&&this.preUpdate&&this.scene.sys.updateList.remove(this),this},getDisplayList:function(){var a=null;return this.parentContainer?a=this.parentContainer.list:this.displayList&&(a=this.displayList.list),a},destroy:function(a){!this.scene||this.ignoreDestroy||(a===void 0&&(a=!1),this.preDestroy&&this.preDestroy.call(this),this.emit(n.DESTROY,this,a),this.removeAllListeners(),this.postPipelines&&this.resetPostPipeline(!0),this.removeFromDisplayList(),this.removeFromUpdateList(),this.input&&(this.scene.sys.input.clear(this),this.input=void 0),this.data&&(this.data.destroy(),this.data=void 0),this.body&&(this.body.destroy(),this.body=void 0),this.preFX&&(this.preFX.destroy(),this.preFX=void 0),this.postFX&&(this.postFX.destroy(),this.postFX=void 0),this.active=!1,this.visible=!1,this.scene=void 0,this.parentContainer=void 0)}});s.RENDER_MASK=15,p.exports=s}),44603:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(83419),c=t(37277),o=t(44594),r=new l({initialize:function(e){this.scene=e,this.systems=e.sys,this.events=e.sys.events,this.displayList,this.updateList,this.events.once(o.BOOT,this.boot,this),this.events.on(o.START,this.start,this)},boot:function(){this.displayList=this.systems.displayList,this.updateList=this.systems.updateList,this.events.once(o.DESTROY,this.destroy,this)},start:function(){this.events.once(o.SHUTDOWN,this.shutdown,this)},shutdown:function(){this.events.off(o.SHUTDOWN,this.shutdown,this)},destroy:function(){this.shutdown(),this.events.off(o.START,this.start,this),this.scene=null,this.systems=null,this.events=null,this.displayList=null,this.updateList=null}});r.register=function(n,e){r.prototype.hasOwnProperty(n)||(r.prototype[n]=e)},r.remove=function(n){r.prototype.hasOwnProperty(n)&&delete r.prototype[n]},c.register("GameObjectCreator",r,"make"),p.exports=r}),39429:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(83419),c=t(37277),o=t(44594),r=new l({initialize:function(e){this.scene=e,this.systems=e.sys,this.events=e.sys.events,this.displayList,this.updateList,this.events.once(o.BOOT,this.boot,this),this.events.on(o.START,this.start,this)},boot:function(){this.displayList=this.systems.displayList,this.updateList=this.systems.updateList,this.events.once(o.DESTROY,this.destroy,this)},start:function(){this.events.once(o.SHUTDOWN,this.shutdown,this)},existing:function(n){return(n.renderCanvas||n.renderWebGL)&&this.displayList.add(n),n.preUpdate&&this.updateList.add(n),n},shutdown:function(){this.events.off(o.SHUTDOWN,this.shutdown,this)},destroy:function(){this.shutdown(),this.events.off(o.START,this.start,this),this.scene=null,this.systems=null,this.events=null,this.displayList=null,this.updateList=null}});r.register=function(n,e){r.prototype.hasOwnProperty(n)||(r.prototype[n]=e)},r.remove=function(n){r.prototype.hasOwnProperty(n)&&delete r.prototype[n]},c.register("GameObjectFactory",r,"add"),p.exports=r}),91296:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(61340),c=new l,o=new l,r=new l,n={camera:c,sprite:o,calc:r},e=function(s,a,i){var h=c,u=o,d=r;return u.applyITRS(s.x,s.y,s.rotation,s.scaleX,s.scaleY),h.copyFrom(a.matrix),i?(h.multiplyWithOffset(i,-a.scrollX*s.scrollFactorX,-a.scrollY*s.scrollFactorY),u.e=s.x,u.f=s.y):(u.e-=a.scrollX*s.scrollFactorX,u.f-=a.scrollY*s.scrollFactorY),h.multiply(u,d),n};p.exports=e}),45027:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(83419),c=t(25774),o=t(37277),r=t(44594),n=new l({Extends:c,initialize:function(s){c.call(this),this.checkQueue=!0,this.scene=s,this.systems=s.sys,s.sys.events.once(r.BOOT,this.boot,this),s.sys.events.on(r.START,this.start,this)},boot:function(){this.systems.events.once(r.DESTROY,this.destroy,this)},start:function(){var e=this.systems.events;e.on(r.PRE_UPDATE,this.update,this),e.on(r.UPDATE,this.sceneUpdate,this),e.once(r.SHUTDOWN,this.shutdown,this)},sceneUpdate:function(e,s){for(var a=this._active,i=a.length,h=0;h<i;h++){var u=a[h];u.active&&u.preUpdate.call(u,e,s)}},shutdown:function(){for(var e=this._active.length;e--;)this._active[e].destroy(!0);for(e=this._pending.length;e--;)this._pending[e].destroy(!0);for(e=this._destroy.length;e--;)this._destroy[e].destroy(!0);this._toProcess=0,this._pending=[],this._active=[],this._destroy=[],this.removeAllListeners();var s=this.systems.events;s.off(r.PRE_UPDATE,this.update,this),s.off(r.UPDATE,this.sceneUpdate,this),s.off(r.SHUTDOWN,this.shutdown,this)},destroy:function(){this.shutdown(),this.systems.events.off(r.START,this.start,this),this.scene=null,this.systems=null}});o.register("UpdateList",n,"updateList"),p.exports=n}),3217:(p=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var y=function(t,l,c,o,r,n,e,s,a,i,h,u,d,f,v){var m=c.x-l.displayOriginX+r,x=c.y-l.displayOriginY+n,g=m+c.w,T=x+c.h,S=e.a,C=e.b,E=e.c,P=e.d,A=e.e,M=e.f,R=m*S+x*E+A,L=m*C+x*P+M,w=m*S+T*E+A,N=m*C+T*P+M,b=g*S+T*E+A,z=g*C+T*P+M,D=g*S+x*E+A,B=g*C+x*P+M;s&&(R=Math.round(R),L=Math.round(L),w=Math.round(w),N=Math.round(N),b=Math.round(b),z=Math.round(z),D=Math.round(D),B=Math.round(B)),t.batchQuad(l,R,L,w,N,b,z,D,B,o.u0,o.v0,o.u1,o.v1,a,i,h,u,d,f,v)};p.exports=y}),53048:(p=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var y=function(t,l,c,o){if(c===void 0&&(c=!1),o===void 0)return o={local:{x:0,y:0,width:0,height:0},global:{x:0,y:0,width:0,height:0},lines:{shortest:0,longest:0,lengths:null,height:0},wrappedText:"",words:[],characters:[],scaleX:0,scaleY:0},o;var r=t.text,n=r.length,e=t.maxWidth,s=t.wordWrapCharCode,a=Number.MAX_VALUE,i=Number.MAX_VALUE,h=0,u=0,d=t.fontData.chars,f=t.fontData.lineHeight,v=t.letterSpacing,m=t.lineSpacing,x=0,g=0,T=0,S=null,C=t._align,E=0,P=0,A=t.fontSize/t.fontData.size,M=A*t.scaleX,R=A*t.scaleY,L=null,w=0,N=[],b=Number.MAX_VALUE,z=0,D=0,B=0,F,U,O,X=[],H=[],Z=null,J=function(mt,St){for(var vt=0,gt=0;gt<mt.length;gt++){var yt=mt.charCodeAt(gt),Pt=St.chars[yt];Pt&&(vt+=Pt.xAdvance)}return vt*M};if(e>0){O=r.split(`
`);var $=[];for(F=0;F<O.length;F++){var Q=O[F],k="",j="",_="",et="";for(U=0;U<Q.length;U++)if(T=Q.charCodeAt(U),k+=Q[U],T===s||U===Q.length-1){et=_+k;var q=J(et,t.fontData);q<=e?_=et:(j=j.slice(0,-1),j+=(j?`
`:"")+_,_=k),k=""}j=j.slice(0,-1),j+=(j?`
`:"")+_,$.push(j)}r=$.join(`
`),o.wrappedText=r,n=r.length}var nt=0;for(F=0;F<n;F++){if(T=r.charCodeAt(F),T===10){Z!==null&&(X.push({word:Z.word,i:Z.i,x:Z.x*M,y:Z.y*R,w:Z.w*M,h:Z.h*R}),Z=null),L=null,N[D]=B,B>z&&(z=B),B<b&&(b=B),D++,B=0,x=0,g=(f+m)*D;continue}if(S=d[T],!!S){if(E=x,P=g,L!==null){var rt=S.kerning[w];E+=rt!==void 0?rt:0}a>E&&(a=E),i>P&&(i=P);var at=E+S.xAdvance,tt=P+f;h<at&&(h=at),u<tt&&(u=tt);var it=S.xOffset+S.xAdvance+(rt!==void 0?rt:0);T===s?Z!==null&&(X.push({word:Z.word,i:Z.i,x:Z.x*M,y:Z.y*R,w:Z.w*M,h:Z.h*R}),Z=null):(Z===null&&(Z={word:"",i:nt,x,y:g,w:0,h:f}),Z.word=Z.word.concat(r[F]),Z.w+=it),H.push({i:nt,idx:F,char:r[F],code:T,x:(S.xOffset+E)*A,y:(S.yOffset+g)*A,w:S.width*A,h:S.height*A,t:g*A,r:at*A,b:f*A,line:D,glyph:S}),x+=S.xAdvance+v+(rt!==void 0?rt:0),L=S,w=T,B=at*A,nt++}}if(Z!==null&&X.push({word:Z.word,i:Z.i,x:Z.x*M,y:Z.y*R,w:Z.w*M,h:Z.h*R}),N[D]=B,B>z&&(z=B),B<b&&(b=B),C>0)for(var st=0;st<H.length;st++){var ot=H[st];if(C===1){var ft=(z-N[ot.line])/2;ot.x+=ft,ot.r+=ft}else if(C===2){var ct=z-N[ot.line];ot.x+=ct,ot.r+=ct}}var lt=o.local,ut=o.global;return O=o.lines,lt.x=a*A,lt.y=i*A,lt.width=h*A,lt.height=u*A,ut.x=t.x-t._displayOriginX+a*M,ut.y=t.y-t._displayOriginY+i*R,ut.width=h*M,ut.height=u*R,O.shortest=b,O.longest=z,O.lengths=N,l&&(lt.x=Math.ceil(lt.x),lt.y=Math.ceil(lt.y),lt.width=Math.ceil(lt.width),lt.height=Math.ceil(lt.height),ut.x=Math.ceil(ut.x),ut.y=Math.ceil(ut.y),ut.width=Math.ceil(ut.width),ut.height=Math.ceil(ut.height),O.shortest=Math.ceil(b),O.longest=Math.ceil(z)),c&&(t._displayOriginX=t.originX*lt.width,t._displayOriginY=t.originY*lt.height,ut.x=t.x-t._displayOriginX*t.scaleX,ut.y=t.y-t._displayOriginY*t.scaleY,l&&(ut.x=Math.ceil(ut.x),ut.y=Math.ceil(ut.y))),o.words=X,o.characters=H,o.lines.height=f,o.scale=A,o.scaleX=t.scaleX,o.scaleY=t.scaleY,o};p.exports=y}),61327:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(21859),c=function(o,r,n,e,s,a,i){var h=o.sys.textures.get(n),u=h.get(e),d=o.sys.cache.xml.get(s);if(u&&d){var f=l(d,u,a,i,h);return o.sys.cache.bitmapFont.add(r,{data:f,texture:n,frame:e,fromAtlas:!0}),!0}else return!1};p.exports=c}),6925:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(35154),c=function(o,r){var n=r.width,e=r.height,s=Math.floor(n/2),a=Math.floor(e/2),i=l(r,"chars","");if(i!==""){var h=l(r,"image",""),u=o.sys.textures.getFrame(h),d=u.cutX,f=u.cutY,v=u.source.width,m=u.source.height,x=l(r,"offset.x",0),g=l(r,"offset.y",0),T=l(r,"spacing.x",0),S=l(r,"spacing.y",0),C=l(r,"lineSpacing",0),E=l(r,"charsPerRow",null);E===null&&(E=v/n,E>i.length&&(E=i.length));for(var P=x,A=g,M={retroFont:!0,font:h,size:n,lineHeight:e+C,chars:{}},R=0,L=0;L<i.length;L++){var w=i.charCodeAt(L),N=(d+P)/v,b=(f+A)/m,z=(d+P+n)/v,D=(f+A+e)/m;M.chars[w]={x:P,y:A,width:n,height:e,centerX:s,centerY:a,xOffset:0,yOffset:0,xAdvance:n,data:{},kerning:{},u0:N,v0:b,u1:z,v1:D},R++,R===E?(R=0,P=x,A+=e+S):P+=n+T}var B={data:M,frame:null,texture:h};return B}};p.exports=c}),21859:(p=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */function y(l,c){return parseInt(l.getAttribute(c),10)}var t=function(l,c,o,r,n){o===void 0&&(o=0),r===void 0&&(r=0);var e=c.cutX,s=c.cutY,a=c.source.width,i=c.source.height,h=c.sourceIndex,u={},d=l.getElementsByTagName("info")[0],f=l.getElementsByTagName("common")[0];u.font=d.getAttribute("face"),u.size=y(d,"size"),u.lineHeight=y(f,"lineHeight")+r,u.chars={};var v=l.getElementsByTagName("char"),m=c!==void 0&&c.trimmed;if(m)var x=c.height,g=c.width;for(var T=0;T<v.length;T++){var S=v[T],C=y(S,"id"),E=String.fromCharCode(C),P=y(S,"x"),A=y(S,"y"),M=y(S,"width"),R=y(S,"height");m&&(P<g&&(g=P),A<x&&(x=A)),m&&x!==0&&g!==0&&(P-=c.x,A-=c.y);var L=(e+P)/a,w=(s+A)/i,N=(e+P+M)/a,b=(s+A+R)/i;if(u.chars[C]={x:P,y:A,width:M,height:R,centerX:Math.floor(M/2),centerY:Math.floor(R/2),xOffset:y(S,"xoffset"),yOffset:y(S,"yoffset"),xAdvance:y(S,"xadvance")+o,data:{},kerning:{},u0:L,v0:w,u1:N,v1:b},n&&M!==0&&R!==0){var z=n.add(E,h,P,A,M,R);z&&z.setUVs(M,R,L,w,N,b)}}var D=l.getElementsByTagName("kerning");for(T=0;T<D.length;T++){var B=D[T],F=y(B,"first"),U=y(B,"second"),O=y(B,"amount");u.chars[U].kerning[F]=O}return u};p.exports=t}),196:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(87662),c=t(79291),o={Parse:t(6925)};o=c(!1,o,l),p.exports=o}),87662:(p=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var y={TEXT_SET1:" !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~",TEXT_SET2:` !"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ`,TEXT_SET3:"ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 ",TEXT_SET4:"ABCDEFGHIJKLMNOPQRSTUVWXYZ 0123456789",TEXT_SET5:"ABCDEFGHIJKLMNOPQRSTUVWXYZ.,/() '!?-*:0123456789",TEXT_SET6:`ABCDEFGHIJKLMNOPQRSTUVWXYZ!?:;0123456789"(),-.' `,TEXT_SET7:`AGMSY+:4BHNTZ!;5CIOU.?06DJPV,(17EKQW")28FLRX-'39`,TEXT_SET8:"0123456789 .ABCDEFGHIJKLMNOPQRSTUVWXYZ",TEXT_SET9:`ABCDEFGHIJKLMNOPQRSTUVWXYZ()-0123456789.:,'"?!`,TEXT_SET10:"ABCDEFGHIJKLMNOPQRSTUVWXYZ",TEXT_SET11:`ABCDEFGHIJKLMNOPQRSTUVWXYZ.,"-+!?()':;0123456789`};p.exports=y}),2638:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(22186),c=t(83419),o=t(12310),r=new c({Extends:l,Mixins:[o],initialize:function(e,s,a,i,h,u,d){l.call(this,e,s,a,i,h,u,d),this.type="DynamicBitmapText",this.scrollX=0,this.scrollY=0,this.cropWidth=0,this.cropHeight=0,this.displayCallback,this.callbackData={parent:this,color:0,tint:{topLeft:0,topRight:0,bottomLeft:0,bottomRight:0},index:0,charCode:0,x:0,y:0,scale:0,rotation:0,data:0}},setSize:function(n,e){return this.cropWidth=n,this.cropHeight=e,this},setDisplayCallback:function(n){return this.displayCallback=n,this},setScrollX:function(n){return this.scrollX=n,this},setScrollY:function(n){return this.scrollY=n,this}});p.exports=r}),86741:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(20926),c=function(o,r,n,e){var s=r._text,a=s.length,i=o.currentContext;if(!(a===0||!l(o,i,r,n,e))){n.addToRenderList(r);var h=r.fromAtlas?r.frame:r.texture.frames.__BASE,u=r.displayCallback,d=r.callbackData,f=r.fontData.chars,v=r.fontData.lineHeight,m=r._letterSpacing,x=0,g=0,T=0,S=null,C=0,E=0,P=0,A=0,M=0,R=0,L=null,w=0,N=r.frame.source.image,b=h.cutX,z=h.cutY,D=0,B=0,F=r._fontSize/r.fontData.size,U=r._align,O=0,X=0;r.getTextBounds(!1);var H=r._bounds.lines;U===1?X=(H.longest-H.lengths[0])/2:U===2&&(X=H.longest-H.lengths[0]),i.translate(-r.displayOriginX,-r.displayOriginY);var Z=n.roundPixels;r.cropWidth>0&&r.cropHeight>0&&(i.beginPath(),i.rect(0,0,r.cropWidth,r.cropHeight),i.clip());for(var J=0;J<a;J++){if(B=F,D=0,T=s.charCodeAt(J),T===10){O++,U===1?X=(H.longest-H.lengths[O])/2:U===2&&(X=H.longest-H.lengths[O]),x=0,g+=v,L=null;continue}if(S=f[T],!!S){if(C=b+S.x,E=z+S.y,P=S.width,A=S.height,M=S.xOffset+x-r.scrollX,R=S.yOffset+g-r.scrollY,L!==null){var $=S.kerning[w];M+=$!==void 0?$:0}if(u){d.index=J,d.charCode=T,d.x=M,d.y=R,d.scale=B,d.rotation=D,d.data=S.data;var Q=u(d);M=Q.x,R=Q.y,B=Q.scale,D=Q.rotation}M*=B,R*=B,M+=X,x+=S.xAdvance+m+($!==void 0?$:0),L=S,w=T,!(P===0||A===0||T===32)&&(Z&&(M=Math.round(M),R=Math.round(R)),i.save(),i.translate(M,R),i.rotate(D),i.scale(B,B),i.drawImage(N,C,E,P,A,0,0,P,A),i.restore())}}i.restore()}};p.exports=c}),11164:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(2638),c=t(25305),o=t(44603),r=t(23568);o.register("dynamicBitmapText",function(n,e){n===void 0&&(n={});var s=r(n,"font",""),a=r(n,"text",""),i=r(n,"size",!1),h=new l(this.scene,0,0,s,a,i);return e!==void 0&&(n.add=e),c(this.scene,h,n),h})}),72566:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(2638),c=t(39429);c.register("dynamicBitmapText",function(o,r,n,e,s){return this.displayList.add(new l(this.scene,o,r,n,e,s))})}),12310:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(29747),c=l,o=l;c=t(73482),o=t(86741),p.exports={renderWebGL:c,renderCanvas:o}}),73482:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(91296),c=t(61340),o=t(70554),r=new c,n=function(e,s,a,i){var h=s.text,u=h.length;if(u!==0){a.addToRenderList(s);var d=e.pipelines.set(s.pipeline,s),f=l(s,a,i);e.pipelines.preBatch(s);var v=f.sprite,m=f.calc,x=r,g=s.cropWidth>0||s.cropHeight>0;g&&(d.flush(),e.pushScissor(m.tx,m.ty,s.cropWidth*m.scaleX,s.cropHeight*m.scaleY));var T=s.frame,S=T.glTexture,C=s.tintFill,E=o.getTintAppendFloatAlpha(s.tintTopLeft,a.alpha*s._alphaTL),P=o.getTintAppendFloatAlpha(s.tintTopRight,a.alpha*s._alphaTR),A=o.getTintAppendFloatAlpha(s.tintBottomLeft,a.alpha*s._alphaBL),M=o.getTintAppendFloatAlpha(s.tintBottomRight,a.alpha*s._alphaBR),R=d.setGameObject(s),L=0,w=0,N=0,b=0,z=s.letterSpacing,D,B=0,F=0,U,O=s.scrollX,X=s.scrollY,H=s.fontData,Z=H.chars,J=H.lineHeight,$=s.fontSize/H.size,Q=0,k=s._align,j=0,_=0,et=s.getTextBounds(!1);s.maxWidth>0&&(h=et.wrappedText,u=h.length);var q=s._bounds.lines;k===1?_=(q.longest-q.lengths[0])/2:k===2&&(_=q.longest-q.lengths[0]);for(var nt=a.roundPixels,rt=s.displayCallback,at=s.callbackData,tt=0;tt<u;tt++){if(N=h.charCodeAt(tt),N===10){j++,k===1?_=(q.longest-q.lengths[j])/2:k===2&&(_=q.longest-q.lengths[j]),L=0,w+=J,U=null;continue}if(D=Z[N],!!D){B=D.width,F=D.height;var it=D.xOffset+L-O,st=D.yOffset+w-X;if(U!==null){var ot=D.kerning[b]||0;it+=ot,L+=ot}if(L+=D.xAdvance+z,U=D,b=N,!(B===0||F===0||N===32)){if($=s.fontSize/s.fontData.size,Q=0,rt){at.color=0,at.tint.topLeft=E,at.tint.topRight=P,at.tint.bottomLeft=A,at.tint.bottomRight=M,at.index=tt,at.charCode=N,at.x=it,at.y=st,at.scale=$,at.rotation=Q,at.data=D.data;var ft=rt(at);it=ft.x,st=ft.y,$=ft.scale,Q=ft.rotation,ft.color?(E=ft.color,P=ft.color,A=ft.color,M=ft.color):(E=ft.tint.topLeft,P=ft.tint.topRight,A=ft.tint.bottomLeft,M=ft.tint.bottomRight),E=o.getTintAppendFloatAlpha(E,a.alpha*s._alphaTL),P=o.getTintAppendFloatAlpha(P,a.alpha*s._alphaTR),A=o.getTintAppendFloatAlpha(A,a.alpha*s._alphaBL),M=o.getTintAppendFloatAlpha(M,a.alpha*s._alphaBR)}it*=$,st*=$,it-=s.displayOriginX,st-=s.displayOriginY,it+=_,x.applyITRS(it,st,Q,$,$),m.multiply(x,v);var ct=D.u0,lt=D.v0,ut=D.u1,mt=D.v1,St=B,vt=F,gt=v.e,yt=v.f,Pt=vt*v.c+v.e,te=vt*v.d+v.f,ee=St*v.a+vt*v.c+v.e,ie=St*v.b+vt*v.d+v.f,se=St*v.a+v.e,ne=St*v.b+v.f;nt&&(gt=Math.round(gt),yt=Math.round(yt),Pt=Math.round(Pt),te=Math.round(te),ee=Math.round(ee),ie=Math.round(ie),se=Math.round(se),ne=Math.round(ne)),d.shouldFlush(6)&&(d.flush(),R=d.setGameObject(s)),d.batchQuad(s,gt,yt,Pt,te,ee,ie,se,ne,ct,lt,ut,mt,E,P,A,M,C,S,R)}}}g&&(d.flush(),e.popScissor()),e.pipelines.postBatch(s)}};p.exports=n}),22186:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(83419),c=t(45319),o=t(31401),r=t(95643),n=t(53048),e=t(61327),s=t(21859),a=t(87841),i=t(18658),h=new l({Extends:r,Mixins:[o.Alpha,o.BlendMode,o.Depth,o.GetBounds,o.Mask,o.Origin,o.Pipeline,o.PostPipeline,o.ScrollFactor,o.Texture,o.Tint,o.Transform,o.Visible,i],initialize:function(d,f,v,m,x,g,T){x===void 0&&(x=""),T===void 0&&(T=0),r.call(this,d,"BitmapText"),this.font=m;var S=this.scene.sys.cache.bitmapFont.get(m);if(!S)throw new Error("Invalid BitmapText key: "+m);this.fontData=S.data,this._text="",this._fontSize=g||this.fontData.size,this._letterSpacing=0,this._lineSpacing=0,this._align=T,this._bounds=n(),this._dirty=!0,this._maxWidth=0,this.wordWrapCharCode=32,this.charColors=[],this.dropShadowX=0,this.dropShadowY=0,this.dropShadowColor=0,this.dropShadowAlpha=.5,this.fromAtlas=S.fromAtlas,this.setTexture(S.texture,S.frame),this.setPosition(f,v),this.setOrigin(0,0),this.initPipeline(),this.initPostPipeline(),this.setText(x)},setLeftAlign:function(){return this._align=h.ALIGN_LEFT,this._dirty=!0,this},setCenterAlign:function(){return this._align=h.ALIGN_CENTER,this._dirty=!0,this},setRightAlign:function(){return this._align=h.ALIGN_RIGHT,this._dirty=!0,this},setFontSize:function(u){return this._fontSize=u,this._dirty=!0,this},setLetterSpacing:function(u){return u===void 0&&(u=0),this._letterSpacing=u,this._dirty=!0,this},setLineSpacing:function(u){return u===void 0&&(u=0),this.lineSpacing=u,this},setText:function(u){return!u&&u!==0&&(u=""),Array.isArray(u)&&(u=u.join(`
`)),u!==this.text&&(this._text=u.toString(),this._dirty=!0,this.updateDisplayOrigin()),this},setDropShadow:function(u,d,f,v){return u===void 0&&(u=0),d===void 0&&(d=0),f===void 0&&(f=0),v===void 0&&(v=.5),this.dropShadowX=u,this.dropShadowY=d,this.dropShadowColor=f,this.dropShadowAlpha=v,this},setCharacterTint:function(u,d,f,v,m,x,g){u===void 0&&(u=0),d===void 0&&(d=1),f===void 0&&(f=!1),v===void 0&&(v=-1),m===void 0&&(m=v,x=v,g=v);var T=this.text.length;d===-1&&(d=T),u<0&&(u=T+u),u=c(u,0,T-1);for(var S=c(u+d,u,T),C=this.charColors,E=u;E<S;E++){var P=C[E];if(v===-1)C[E]=null;else{var A=f?1:0;P?(P.tintEffect=A,P.tintTL=v,P.tintTR=m,P.tintBL=x,P.tintBR=g):C[E]={tintEffect:A,tintTL:v,tintTR:m,tintBL:x,tintBR:g}}}return this},setWordTint:function(u,d,f,v,m,x,g){d===void 0&&(d=1);for(var T=this.getTextBounds(),S=T.words,C=typeof u=="number",E=0,P=0;P<S.length;P++){var A=S[P];if((C&&P===u||!C&&A.word===u)&&(this.setCharacterTint(A.i,A.word.length,f,v,m,x,g),E++,E===d))return this}return this},getTextBounds:function(u){var d=this._bounds;return(this._dirty||u||this.scaleX!==d.scaleX||this.scaleY!==d.scaleY)&&(n(this,u,!0,d),this._dirty=!1),d},getCharacterAt:function(u,d,f){for(var v=this.getLocalPoint(u,d,null,f),m=this.getTextBounds(),x=m.characters,g=new a,T=0;T<x.length;T++){var S=x[T];if(g.setTo(S.x,S.t,S.r-S.x,S.b),g.contains(v.x,v.y))return S}return null},updateDisplayOrigin:function(){return this._dirty=!0,this.getTextBounds(!1),this},setFont:function(u,d,f){d===void 0&&(d=this._fontSize),f===void 0&&(f=this._align);var v=this.scene.sys.cache.bitmapFont.get(u);return v&&(this.font=u,this.fontData=v.data,this._fontSize=d,this._align=f,this.fromAtlas=v.fromAtlas===!0,this.setTexture(v.texture,v.frame),n(this,!1,!0,this._bounds)),this},setMaxWidth:function(u,d){return this._maxWidth=u,this._dirty=!0,d!==void 0&&(this.wordWrapCharCode=d),this},setDisplaySize:function(u,d){this.setScale(1,1),this.getTextBounds(!1);var f=u/this.width,v=d/this.height;return this.setScale(f,v),this},align:{set:function(u){this._align=u,this._dirty=!0},get:function(){return this._align}},text:{set:function(u){this.setText(u)},get:function(){return this._text}},fontSize:{set:function(u){this._fontSize=u,this._dirty=!0},get:function(){return this._fontSize}},letterSpacing:{set:function(u){this._letterSpacing=u,this._dirty=!0},get:function(){return this._letterSpacing}},lineSpacing:{set:function(u){this._lineSpacing=u,this._dirty=!0},get:function(){return this._lineSpacing}},maxWidth:{set:function(u){this._maxWidth=u,this._dirty=!0},get:function(){return this._maxWidth}},width:{get:function(){return this.getTextBounds(!1),this._bounds.global.width}},height:{get:function(){return this.getTextBounds(!1),this._bounds.global.height}},displayWidth:{set:function(u){this.setScaleX(1),this.getTextBounds(!1);var d=u/this.width;this.setScaleX(d)},get:function(){return this.width}},displayHeight:{set:function(u){this.setScaleY(1),this.getTextBounds(!1);var d=u/this.height;this.setScaleY(d)},get:function(){return this.height}},toJSON:function(){var u=o.ToJSON(this),d={font:this.font,text:this.text,fontSize:this.fontSize,letterSpacing:this.letterSpacing,lineSpacing:this.lineSpacing,align:this.align};return u.data=d,u},preDestroy:function(){this.charColors.length=0,this._bounds=null,this.fontData=null}});h.ALIGN_LEFT=0,h.ALIGN_CENTER=1,h.ALIGN_RIGHT=2,h.ParseFromAtlas=e,h.ParseXMLBitmapFont=s,p.exports=h}),37289:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(20926),c=function(o,r,n,e){var s=r._text,a=s.length,i=o.currentContext;if(!(a===0||!l(o,i,r,n,e))){n.addToRenderList(r);var h=r.fromAtlas?r.frame:r.texture.frames.__BASE,u=r.fontData.chars,d=r.fontData.lineHeight,f=r._letterSpacing,v=r._lineSpacing,m=0,x=0,g=0,T=null,S=0,C=0,E=0,P=0,A=0,M=0,R=null,L=0,w=h.source.image,N=h.cutX,b=h.cutY,z=r._fontSize/r.fontData.size,D=r._align,B=0,F=0,U=r.getTextBounds(!1);r.maxWidth>0&&(s=U.wrappedText,a=s.length);var O=r._bounds.lines;D===1?F=(O.longest-O.lengths[0])/2:D===2&&(F=O.longest-O.lengths[0]),i.translate(-r.displayOriginX,-r.displayOriginY);for(var X=n.roundPixels,H=0;H<a;H++){if(g=s.charCodeAt(H),g===10){B++,D===1?F=(O.longest-O.lengths[B])/2:D===2&&(F=O.longest-O.lengths[B]),m=0,x+=d+v,R=null;continue}if(T=u[g],!!T){if(S=N+T.x,C=b+T.y,E=T.width,P=T.height,A=T.xOffset+m,M=T.yOffset+x,R!==null){var Z=T.kerning[L];A+=Z!==void 0?Z:0}A*=z,M*=z,A+=F,m+=T.xAdvance+f+(Z!==void 0?Z:0),R=T,L=g,!(E===0||P===0||g===32)&&(X&&(A=Math.round(A),M=Math.round(M)),i.save(),i.translate(A,M),i.scale(z,z),i.drawImage(w,S,C,E,P,0,0,E,P),i.restore())}}i.restore()}};p.exports=c}),57336:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(22186),c=t(25305),o=t(44603),r=t(23568),n=t(35154);o.register("bitmapText",function(e,s){e===void 0&&(e={});var a=n(e,"font",""),i=r(e,"text",""),h=r(e,"size",!1),u=n(e,"align",0),d=new l(this.scene,0,0,a,i,h,u);return s!==void 0&&(e.add=s),c(this.scene,d,e),d})}),34914:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(22186),c=t(39429);c.register("bitmapText",function(o,r,n,e,s,a){return this.displayList.add(new l(this.scene,o,r,n,e,s,a))})}),18658:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(29747),c=l,o=l;c=t(33590),o=t(37289),p.exports={renderWebGL:c,renderCanvas:o}}),33590:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(3217),c=t(91296),o=t(70554),r=function(n,e,s,a){var i=e._text,h=i.length;if(h!==0){s.addToRenderList(e);var u=n.pipelines.set(e.pipeline,e),d=c(e,s,a).calc;n.pipelines.preBatch(e);var f=s.roundPixels,v=s.alpha,m=e.charColors,x=e.tintFill,g=o.getTintAppendFloatAlpha,T=g(e.tintTopLeft,v*e._alphaTL),S=g(e.tintTopRight,v*e._alphaTR),C=g(e.tintBottomLeft,v*e._alphaBL),E=g(e.tintBottomRight,v*e._alphaBR),P=e.frame.glTexture,A=u.setGameObject(e),M=e.getTextBounds(!1),R,L,w,N=M.characters,b=e.dropShadowX,z=e.dropShadowY,D=b!==0||z!==0;if(D){var B=e.dropShadowColor,F=e.dropShadowAlpha,U=g(B,v*F*e._alphaTL),O=g(B,v*F*e._alphaTR),X=g(B,v*F*e._alphaBL),H=g(B,v*F*e._alphaBR);for(R=0;R<N.length;R++)L=N[R],w=L.glyph,!(L.code===32||w.width===0||w.height===0)&&l(u,e,L,w,b,z,d,f,U,O,X,H,1,P,A)}for(R=0;R<N.length;R++)if(L=N[R],w=L.glyph,!(L.code===32||w.width===0||w.height===0))if(u.shouldFlush(6)&&(u.flush(),A=u.setGameObject(e)),m[L.i]){var Z=m[L.i],J=Z.tintEffect,$=g(Z.tintTL,v*e._alphaTL),Q=g(Z.tintTR,v*e._alphaTR),k=g(Z.tintBL,v*e._alphaBL),j=g(Z.tintBR,v*e._alphaBR);l(u,e,L,w,0,0,d,f,$,Q,k,j,J,P,A)}else l(u,e,L,w,0,0,d,f,T,S,C,E,x,P,A);n.pipelines.postBatch(e)}};p.exports=r}),6107:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(48011),c=t(46590),o=t(83419),r=t(31401),n=t(4327),e=t(95643),s=t(73162),a=new o({Extends:e,Mixins:[r.Alpha,r.BlendMode,r.Depth,r.Mask,r.Pipeline,r.PostPipeline,r.ScrollFactor,r.Size,r.Texture,r.Transform,r.Visible,l],initialize:function(h,u,d,f,v){e.call(this,h,"Blitter"),this.setTexture(f,v),this.setPosition(u,d),this.initPipeline(),this.initPostPipeline(),this.children=new s,this.renderList=[],this.dirty=!1},create:function(i,h,u,d,f){d===void 0&&(d=!0),f===void 0&&(f=this.children.length),u===void 0?u=this.frame:u instanceof n||(u=this.texture.get(u));var v=new c(this,i,h,u,d);return this.children.addAt(v,f,!1),this.dirty=!0,v},createFromCallback:function(i,h,u,d){for(var f=this.createMultiple(h,u,d),v=0;v<f.length;v++){var m=f[v];i.call(this,m,v)}return f},createMultiple:function(i,h,u){h===void 0&&(h=this.frame.name),u===void 0&&(u=!0),Array.isArray(h)||(h=[h]);var d=[],f=this;return h.forEach(function(v){for(var m=0;m<i;m++)d.push(f.create(0,0,v,u))}),d},childCanRender:function(i){return i.visible&&i.alpha>0},getRenderList:function(){return this.dirty&&(this.renderList=this.children.list.filter(this.childCanRender,this),this.dirty=!1),this.renderList},clear:function(){this.children.removeAll(),this.dirty=!0},preDestroy:function(){this.children.destroy(),this.renderList=[]}});p.exports=a}),72396:(p=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var y=function(t,l,c,o){var r=l.getRenderList();if(r.length!==0){var n=t.currentContext,e=c.alpha*l.alpha;if(e!==0){c.addToRenderList(l),n.globalCompositeOperation=t.blendModes[l.blendMode],n.imageSmoothingEnabled=!l.frame.source.scaleMode;var s=l.x-c.scrollX*l.scrollFactorX,a=l.y-c.scrollY*l.scrollFactorY;n.save(),o&&o.copyToContext(n);for(var i=c.roundPixels,h=0;h<r.length;h++){var u=r[h],d=u.flipX||u.flipY,f=u.frame,v=f.canvasData,m=f.x,x=f.y,g=1,T=1,S=u.alpha*e;S!==0&&(n.globalAlpha=S,d?(u.flipX&&(g=-1,m-=v.width),u.flipY&&(T=-1,x-=v.height),v.width>0&&v.height>0&&(n.save(),n.translate(u.x+s,u.y+a),n.scale(g,T),n.drawImage(f.source.image,v.x,v.y,v.width,v.height,m,x,v.width,v.height),n.restore())):(i&&(m=Math.round(m),x=Math.round(x)),v.width>0&&v.height>0&&n.drawImage(f.source.image,v.x,v.y,v.width,v.height,m+u.x+s,x+u.y+a,v.width,v.height)))}n.restore()}}};p.exports=y}),9403:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(6107),c=t(25305),o=t(44603),r=t(23568);o.register("blitter",function(n,e){n===void 0&&(n={});var s=r(n,"key",null),a=r(n,"frame",null),i=new l(this.scene,0,0,s,a);return e!==void 0&&(n.add=e),c(this.scene,i,n),i})}),12709:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(6107),c=t(39429);c.register("blitter",function(o,r,n,e){return this.displayList.add(new l(this.scene,o,r,n,e))})}),48011:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(29747),c=l,o=l;c=t(99485),o=t(72396),p.exports={renderWebGL:c,renderCanvas:o}}),99485:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(61340),c=t(70554),o=new l,r=function(n,e,s,a){var i=e.getRenderList(),h=s.alpha*e.alpha;if(!(i.length===0||h===0)){s.addToRenderList(e);var u=n.pipelines.set(this.pipeline,e),d=s.scrollX*e.scrollFactorX,f=s.scrollY*e.scrollFactorY,v=o.copyFrom(s.matrix);a&&(v.multiplyWithOffset(a,-d,-f),d=0,f=0);var m=e.x-d,x=e.y-f,g=-1,T=!1,S=s.roundPixels;n.pipelines.preBatch(e);for(var C=0;C<i.length;C++){var E=i[C],P=E.frame,A=E.alpha*h;if(A!==0){var M=P.width,R=P.height,L=m+E.x+P.x,w=x+E.y+P.y;E.flipX&&(M*=-1,L+=P.width),E.flipY&&(R*=-1,w+=P.height);var N=v.setQuad(L,w,L+M,w+R,S),b=c.getTintAppendFloatAlpha(E.tint,A);if(P.sourceIndex!==g){var z=u.setGameObject(e,P);g=P.sourceIndex}u.batchQuad(e,N[0],N[1],N[2],N[3],N[4],N[5],N[6],N[7],P.u0,P.v0,P.u1,P.v1,b,b,b,b,T,P.glTexture,z)&&(g=-1)}}n.pipelines.postBatch(e)}};p.exports=r}),46590:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(83419),c=t(4327),o=new l({initialize:function(n,e,s,a,i){this.parent=n,this.x=e,this.y=s,this.frame=a,this.data={},this.tint=16777215,this._visible=i,this._alpha=1,this.flipX=!1,this.flipY=!1,this.hasTransformComponent=!0},setFrame:function(r){return r===void 0?this.frame=this.parent.frame:r instanceof c&&r.texture===this.parent.texture?this.frame=r:this.frame=this.parent.texture.get(r),this},resetFlip:function(){return this.flipX=!1,this.flipY=!1,this},reset:function(r,n,e){return this.x=r,this.y=n,this.flipX=!1,this.flipY=!1,this._alpha=1,this._visible=!0,this.parent.dirty=!0,e&&this.setFrame(e),this},setPosition:function(r,n){return this.x=r,this.y=n,this},setFlipX:function(r){return this.flipX=r,this},setFlipY:function(r){return this.flipY=r,this},setFlip:function(r,n){return this.flipX=r,this.flipY=n,this},setVisible:function(r){return this.visible=r,this},setAlpha:function(r){return this.alpha=r,this},setTint:function(r){return this.tint=r,this},destroy:function(){this.parent.dirty=!0,this.parent.children.remove(this),this.parent=void 0,this.frame=void 0,this.data=void 0},visible:{get:function(){return this._visible},set:function(r){this.parent.dirty|=this._visible!==r,this._visible=r}},alpha:{get:function(){return this._alpha},set:function(r){this.parent.dirty|=this._alpha>0!=r>0,this._alpha=r}}});p.exports=o}),16005:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(45319),c=2,o={_alpha:1,_alphaTL:1,_alphaTR:1,_alphaBL:1,_alphaBR:1,clearAlpha:function(){return this.setAlpha(1)},setAlpha:function(r,n,e,s){return r===void 0&&(r=1),n===void 0?this.alpha=r:(this._alphaTL=l(r,0,1),this._alphaTR=l(n,0,1),this._alphaBL=l(e,0,1),this._alphaBR=l(s,0,1)),this},alpha:{get:function(){return this._alpha},set:function(r){var n=l(r,0,1);this._alpha=n,this._alphaTL=n,this._alphaTR=n,this._alphaBL=n,this._alphaBR=n,n===0?this.renderFlags&=~c:this.renderFlags|=c}},alphaTopLeft:{get:function(){return this._alphaTL},set:function(r){var n=l(r,0,1);this._alphaTL=n,n!==0&&(this.renderFlags|=c)}},alphaTopRight:{get:function(){return this._alphaTR},set:function(r){var n=l(r,0,1);this._alphaTR=n,n!==0&&(this.renderFlags|=c)}},alphaBottomLeft:{get:function(){return this._alphaBL},set:function(r){var n=l(r,0,1);this._alphaBL=n,n!==0&&(this.renderFlags|=c)}},alphaBottomRight:{get:function(){return this._alphaBR},set:function(r){var n=l(r,0,1);this._alphaBR=n,n!==0&&(this.renderFlags|=c)}}};p.exports=o}),88509:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(45319),c=2,o={_alpha:1,clearAlpha:function(){return this.setAlpha(1)},setAlpha:function(r){return r===void 0&&(r=1),this.alpha=r,this},alpha:{get:function(){return this._alpha},set:function(r){var n=l(r,0,1);this._alpha=n,n===0?this.renderFlags&=~c:this.renderFlags|=c}}};p.exports=o}),90065:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(10312),c={_blendMode:l.NORMAL,blendMode:{get:function(){return this._blendMode},set:function(o){typeof o=="string"&&(o=l[o]),o|=0,o>=-1&&(this._blendMode=o)}},setBlendMode:function(o){return this.blendMode=o,this}};p.exports=c}),94215:(p=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var y={width:0,height:0,displayWidth:{get:function(){return this.scaleX*this.width},set:function(t){this.scaleX=t/this.width}},displayHeight:{get:function(){return this.scaleY*this.height},set:function(t){this.scaleY=t/this.height}},setSize:function(t,l){return this.width=t,this.height=l,this},setDisplaySize:function(t,l){return this.displayWidth=t,this.displayHeight=l,this}};p.exports=y}),61683:(p=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var y={texture:null,frame:null,isCropped:!1,setCrop:function(t,l,c,o){if(t===void 0)this.isCropped=!1;else if(this.frame){if(typeof t=="number")this.frame.setCropUVs(this._crop,t,l,c,o,this.flipX,this.flipY);else{var r=t;this.frame.setCropUVs(this._crop,r.x,r.y,r.width,r.height,this.flipX,this.flipY)}this.isCropped=!0}return this},resetCropObject:function(){return{u0:0,v0:0,u1:0,v1:0,width:0,height:0,x:0,y:0,flipX:!1,flipY:!1,cx:0,cy:0,cw:0,ch:0}}};p.exports=y}),89272:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(37105),c={_depth:0,depth:{get:function(){return this._depth},set:function(o){this.displayList&&this.displayList.queueDepthSort(),this._depth=o}},setDepth:function(o){return o===void 0&&(o=0),this.depth=o,this},setToTop:function(){var o=this.getDisplayList();return o&&l.BringToTop(o,this),this},setToBack:function(){var o=this.getDisplayList();return o&&l.SendToBack(o,this),this},setAbove:function(o){var r=this.getDisplayList();return r&&o&&l.MoveAbove(r,this,o),this},setBelow:function(o){var r=this.getDisplayList();return r&&o&&l.MoveBelow(r,this,o),this}};p.exports=c}),47059:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(83419),c=t(66064),o=t(19133),r=new l({initialize:function(e,s){this.gameObject=e,this.isPost=s,this.enabled=!1,this.list=[],this.padding=0},setPadding:function(n){return n===void 0&&(n=0),this.padding=n,this.gameObject},onFXCopy:function(){},onFX:function(){},enable:function(n){if(!this.isPost){var e=this.gameObject.scene.sys.renderer;e&&e.pipelines?(this.gameObject.pipeline=e.pipelines.FX_PIPELINE,n!==void 0&&(this.padding=n),this.enabled=!0):this.enabled=!1}},clear:function(){if(this.isPost)this.gameObject.resetPostPipeline(!0);else{for(var n=this.list,e=0;e<n.length;e++)n[e].destroy();this.list=[]}return this.enabled=!1,this.gameObject},remove:function(n){var e;if(this.isPost){var s=this.gameObject.getPostPipeline(String(n.type));for(Array.isArray(s)||(s=[s]),e=0;e<s.length;e++){var a=s[e];if(a.controller===n){this.gameObject.removePostPipeline(a),n.destroy();break}}}else{var i=this.list;for(e=0;e<i.length;e++)i[e]===n&&(o(i,e),n.destroy())}return this.gameObject},disable:function(n){return n===void 0&&(n=!1),this.isPost||this.gameObject.resetPipeline(),this.enabled=!1,n&&this.clear(),this.gameObject},add:function(n,e){if(this.isPost){var s=String(n.type);this.gameObject.setPostPipeline(s,e);var a=this.gameObject.getPostPipeline(s);if(a)return Array.isArray(a)&&(a=a.pop()),a&&(a.controller=n),n}else return this.enabled||this.enable(),this.list.push(n),n},addGlow:function(n,e,s,a,i,h){return this.add(new c.Glow(this.gameObject,n,e,s,a),{quality:i,distance:h})},addShadow:function(n,e,s,a,i,h,u){return this.add(new c.Shadow(this.gameObject,n,e,s,a,i,h,u))},addPixelate:function(n){return this.add(new c.Pixelate(this.gameObject,n))},addVignette:function(n,e,s,a){return this.add(new c.Vignette(this.gameObject,n,e,s,a))},addShine:function(n,e,s,a){return this.add(new c.Shine(this.gameObject,n,e,s,a))},addBlur:function(n,e,s,a,i,h){return this.add(new c.Blur(this.gameObject,n,e,s,a,i,h))},addGradient:function(n,e,s,a,i,h,u,d){return this.add(new c.Gradient(this.gameObject,n,e,s,a,i,h,u,d))},addBloom:function(n,e,s,a,i,h){return this.add(new c.Bloom(this.gameObject,n,e,s,a,i,h))},addColorMatrix:function(){return this.add(new c.ColorMatrix(this.gameObject))},addCircle:function(n,e,s,a,i){return this.add(new c.Circle(this.gameObject,n,e,s,a,i))},addBarrel:function(n){return this.add(new c.Barrel(this.gameObject,n))},addDisplacement:function(n,e,s){return this.add(new c.Displacement(this.gameObject,n,e,s))},addWipe:function(n,e,s){return this.add(new c.Wipe(this.gameObject,n,e,s))},addReveal:function(n,e,s){return this.add(new c.Wipe(this.gameObject,n,e,s,!0))},addBokeh:function(n,e,s){return this.add(new c.Bokeh(this.gameObject,n,e,s))},addTiltShift:function(n,e,s,a,i,h){return this.add(new c.Bokeh(this.gameObject,n,e,s,!0,a,i,h))},destroy:function(){this.clear(),this.gameObject=null}});p.exports=r}),54434:(p=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var y={flipX:!1,flipY:!1,toggleFlipX:function(){return this.flipX=!this.flipX,this},toggleFlipY:function(){return this.flipY=!this.flipY,this},setFlipX:function(t){return this.flipX=t,this},setFlipY:function(t){return this.flipY=t,this},setFlip:function(t,l){return this.flipX=t,this.flipY=l,this},resetFlip:function(){return this.flipX=!1,this.flipY=!1,this}};p.exports=y}),8004:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(87841),c=t(11520),o=t(26099),r={prepareBoundsOutput:function(n,e){if(e===void 0&&(e=!1),this.rotation!==0&&c(n,this.x,this.y,this.rotation),e&&this.parentContainer){var s=this.parentContainer.getBoundsTransformMatrix();s.transformPoint(n.x,n.y,n)}return n},getCenter:function(n,e){return n===void 0&&(n=new o),n.x=this.x-this.displayWidth*this.originX+this.displayWidth/2,n.y=this.y-this.displayHeight*this.originY+this.displayHeight/2,this.prepareBoundsOutput(n,e)},getTopLeft:function(n,e){return n||(n=new o),n.x=this.x-this.displayWidth*this.originX,n.y=this.y-this.displayHeight*this.originY,this.prepareBoundsOutput(n,e)},getTopCenter:function(n,e){return n||(n=new o),n.x=this.x-this.displayWidth*this.originX+this.displayWidth/2,n.y=this.y-this.displayHeight*this.originY,this.prepareBoundsOutput(n,e)},getTopRight:function(n,e){return n||(n=new o),n.x=this.x-this.displayWidth*this.originX+this.displayWidth,n.y=this.y-this.displayHeight*this.originY,this.prepareBoundsOutput(n,e)},getLeftCenter:function(n,e){return n||(n=new o),n.x=this.x-this.displayWidth*this.originX,n.y=this.y-this.displayHeight*this.originY+this.displayHeight/2,this.prepareBoundsOutput(n,e)},getRightCenter:function(n,e){return n||(n=new o),n.x=this.x-this.displayWidth*this.originX+this.displayWidth,n.y=this.y-this.displayHeight*this.originY+this.displayHeight/2,this.prepareBoundsOutput(n,e)},getBottomLeft:function(n,e){return n||(n=new o),n.x=this.x-this.displayWidth*this.originX,n.y=this.y-this.displayHeight*this.originY+this.displayHeight,this.prepareBoundsOutput(n,e)},getBottomCenter:function(n,e){return n||(n=new o),n.x=this.x-this.displayWidth*this.originX+this.displayWidth/2,n.y=this.y-this.displayHeight*this.originY+this.displayHeight,this.prepareBoundsOutput(n,e)},getBottomRight:function(n,e){return n||(n=new o),n.x=this.x-this.displayWidth*this.originX+this.displayWidth,n.y=this.y-this.displayHeight*this.originY+this.displayHeight,this.prepareBoundsOutput(n,e)},getBounds:function(n){n===void 0&&(n=new l);var e,s,a,i,h,u,d,f;if(this.parentContainer){var v=this.parentContainer.getBoundsTransformMatrix();this.getTopLeft(n),v.transformPoint(n.x,n.y,n),e=n.x,s=n.y,this.getTopRight(n),v.transformPoint(n.x,n.y,n),a=n.x,i=n.y,this.getBottomLeft(n),v.transformPoint(n.x,n.y,n),h=n.x,u=n.y,this.getBottomRight(n),v.transformPoint(n.x,n.y,n),d=n.x,f=n.y}else this.getTopLeft(n),e=n.x,s=n.y,this.getTopRight(n),a=n.x,i=n.y,this.getBottomLeft(n),h=n.x,u=n.y,this.getBottomRight(n),d=n.x,f=n.y;return n.x=Math.min(e,a,h,d),n.y=Math.min(s,i,u,f),n.width=Math.max(e,a,h,d)-n.x,n.height=Math.max(s,i,u,f)-n.y,n}};p.exports=r}),8573:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(6858),c=t(80661),o={mask:null,setMask:function(r){return this.mask=r,this},clearMask:function(r){return r===void 0&&(r=!1),r&&this.mask&&this.mask.destroy(),this.mask=null,this},createBitmapMask:function(r,n,e,s,a){return r===void 0&&(this.texture||this.shader||this.geom)&&(r=this),new l(this.scene,r,n,e,s,a)},createGeometryMask:function(r){return r===void 0&&(this.type==="Graphics"||this.geom)&&(r=this),new c(this.scene,r)}};p.exports=o}),27387:(p=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var y={_originComponent:!0,originX:.5,originY:.5,_displayOriginX:0,_displayOriginY:0,displayOriginX:{get:function(){return this._displayOriginX},set:function(t){this._displayOriginX=t,this.originX=t/this.width}},displayOriginY:{get:function(){return this._displayOriginY},set:function(t){this._displayOriginY=t,this.originY=t/this.height}},setOrigin:function(t,l){return t===void 0&&(t=.5),l===void 0&&(l=t),this.originX=t,this.originY=l,this.updateDisplayOrigin()},setOriginFromFrame:function(){return!this.frame||!this.frame.customPivot?this.setOrigin():(this.originX=this.frame.pivotX,this.originY=this.frame.pivotY,this.updateDisplayOrigin())},setDisplayOrigin:function(t,l){return t===void 0&&(t=0),l===void 0&&(l=t),this.displayOriginX=t,this.displayOriginY=l,this},updateDisplayOrigin:function(){return this._displayOriginX=this.originX*this.width,this._displayOriginY=this.originY*this.height,this}};p.exports=y}),37640:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(39506),c=t(57355),o=t(35154),r=t(86353),n=t(26099),e={path:null,rotateToPath:!1,pathRotationOffset:0,pathOffset:null,pathVector:null,pathDelta:null,pathTween:null,pathConfig:null,_prevDirection:r.PLAYING_FORWARD,setPath:function(s,a){a===void 0&&(a=this.pathConfig);var i=this.pathTween;return i&&i.isPlaying()&&i.stop(),this.path=s,a&&this.startFollow(a),this},setRotateToPath:function(s,a){return a===void 0&&(a=0),this.rotateToPath=s,this.pathRotationOffset=a,this},isFollowing:function(){var s=this.pathTween;return s&&s.isPlaying()},startFollow:function(s,a){s===void 0&&(s={}),a===void 0&&(a=0);var i=this.pathTween;i&&i.isPlaying()&&i.stop(),typeof s=="number"&&(s={duration:s}),s.from=o(s,"from",0),s.to=o(s,"to",1);var h=c(s,"positionOnPath",!1);this.rotateToPath=c(s,"rotateToPath",!1),this.pathRotationOffset=o(s,"rotationOffset",0);var u=o(s,"startAt",a);if(u&&(s.onStart=function(f){var v=f.data[0];v.progress=u,v.elapsed=v.duration*u;var m=v.ease(v.progress);v.current=v.start+(v.end-v.start)*m,v.setTargetValue()}),this.pathOffset||(this.pathOffset=new n(this.x,this.y)),this.pathVector||(this.pathVector=new n),this.pathDelta||(this.pathDelta=new n),this.pathDelta.reset(),s.persist=!0,this.pathTween=this.scene.sys.tweens.addCounter(s),this.path.getStartPoint(this.pathOffset),h&&(this.x=this.pathOffset.x,this.y=this.pathOffset.y),this.pathOffset.x=this.x-this.pathOffset.x,this.pathOffset.y=this.y-this.pathOffset.y,this._prevDirection=r.PLAYING_FORWARD,this.rotateToPath){var d=this.path.getPoint(.1);this.rotation=Math.atan2(d.y-this.y,d.x-this.x)+l(this.pathRotationOffset)}return this.pathConfig=s,this},pauseFollow:function(){var s=this.pathTween;return s&&s.isPlaying()&&s.pause(),this},resumeFollow:function(){var s=this.pathTween;return s&&s.isPaused()&&s.resume(),this},stopFollow:function(){var s=this.pathTween;return s&&s.isPlaying()&&s.stop(),this},pathUpdate:function(){var s=this.pathTween;if(s&&s.data){var a=s.data[0],i=this.pathDelta,h=this.pathVector;if(i.copy(h).negate(),a.state===r.COMPLETE){this.path.getPoint(a.end,h),i.add(h),h.add(this.pathOffset),this.setPosition(h.x,h.y);return}else if(a.state!==r.PLAYING_FORWARD&&a.state!==r.PLAYING_BACKWARD)return;this.path.getPoint(s.getValue(),h),i.add(h),h.add(this.pathOffset);var u=this.x,d=this.y;this.setPosition(h.x,h.y);var f=this.x-u,v=this.y-d;if(f===0&&v===0)return;if(a.state!==this._prevDirection){this._prevDirection=a.state;return}this.rotateToPath&&(this.rotation=Math.atan2(v,f)+l(this.pathRotationOffset))}}};p.exports=e}),72699:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(62644),c={defaultPipeline:null,pipeline:null,pipelineData:null,initPipeline:function(o){this.pipelineData={};var r=this.scene.sys.renderer;if(!r)return!1;var n=r.pipelines;if(n){o===void 0&&(o=n.default);var e=n.get(o);if(e)return this.defaultPipeline=e,this.pipeline=e,!0}return!1},setPipeline:function(o,r,n){var e=this.scene.sys.renderer;if(!e)return this;var s=e.pipelines;if(s){var a=s.get(o);a&&(this.pipeline=a),r&&(this.pipelineData=n?l(r):r)}return this},setPipelineData:function(o,r){var n=this.pipelineData;return r===void 0?delete n[o]:n[o]=r,this},resetPipeline:function(o){return o===void 0&&(o=!1),this.pipeline=this.defaultPipeline,o&&(this.pipelineData={}),this.pipeline!==null},getPipelineName:function(){return this.pipeline===null?null:this.pipeline.name}};p.exports=c}),17581:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(62644),c=t(47059),o=t(19133),r={hasPostPipeline:!1,postPipelines:null,postPipelineData:null,preFX:null,postFX:null,initPostPipeline:function(n){this.postPipelines=[],this.postPipelineData={},this.postFX=new c(this,!0),n&&(this.preFX=new c(this,!1))},setPostPipeline:function(n,e,s){var a=this.scene.sys.renderer;if(!a)return this;var i=a.pipelines;if(i){Array.isArray(n)||(n=[n]);for(var h=0;h<n.length;h++){var u=i.getPostPipeline(n[h],this,e);u&&this.postPipelines.push(u)}e&&(this.postPipelineData=s?l(e):e)}return this.hasPostPipeline=this.postPipelines.length>0,this},setPostPipelineData:function(n,e){var s=this.postPipelineData;return e===void 0?delete s[n]:s[n]=e,this},getPostPipeline:function(n){for(var e=typeof n=="string",s=this.postPipelines,a=[],i=0;i<s.length;i++){var h=s[i];(e&&h.name===n||!e&&h instanceof n)&&a.push(h)}return a.length===1?a[0]:a},resetPostPipeline:function(n){n===void 0&&(n=!1);for(var e=this.postPipelines,s=0;s<e.length;s++)e[s].destroy();this.postPipelines=[],this.hasPostPipeline=!1,n&&(this.postPipelineData={})},removePostPipeline:function(n){for(var e=typeof n=="string",s=this.postPipelines,a=s.length-1;a>=0;a--){var i=s[a];(e&&i.name===n||!e&&i===n)&&(i.destroy(),o(s,a))}return this.hasPostPipeline=this.postPipelines.length>0,this},clearFX:function(){return this.preFX&&this.preFX.clear(),this.postFX&&this.postFX.clear(),this}};p.exports=r}),80227:(p=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var y={scrollFactorX:1,scrollFactorY:1,setScrollFactor:function(t,l){return l===void 0&&(l=t),this.scrollFactorX=t,this.scrollFactorY=l,this}};p.exports=y}),16736:(p=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var y={_sizeComponent:!0,width:0,height:0,displayWidth:{get:function(){return Math.abs(this.scaleX*this.frame.realWidth)},set:function(t){this.scaleX=t/this.frame.realWidth}},displayHeight:{get:function(){return Math.abs(this.scaleY*this.frame.realHeight)},set:function(t){this.scaleY=t/this.frame.realHeight}},setSizeToFrame:function(t){t||(t=this.frame),this.width=t.realWidth,this.height=t.realHeight;var l=this.input;return l&&!l.customHitArea&&(l.hitArea.width=this.width,l.hitArea.height=this.height),this},setSize:function(t,l){return this.width=t,this.height=l,this},setDisplaySize:function(t,l){return this.displayWidth=t,this.displayHeight=l,this}};p.exports=y}),37726:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(4327),c=8,o={texture:null,frame:null,isCropped:!1,setTexture:function(r,n,e,s){return this.texture=this.scene.sys.textures.get(r),this.setFrame(n,e,s)},setFrame:function(r,n,e){return n===void 0&&(n=!0),e===void 0&&(e=!0),r instanceof l?(this.texture=this.scene.sys.textures.get(r.texture.key),this.frame=r):this.frame=this.texture.get(r),!this.frame.cutWidth||!this.frame.cutHeight?this.renderFlags&=~c:this.renderFlags|=c,this._sizeComponent&&n&&this.setSizeToFrame(),this._originComponent&&e&&(this.frame.customPivot?this.setOrigin(this.frame.pivotX,this.frame.pivotY):this.updateDisplayOrigin()),this}};p.exports=o}),79812:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(4327),c=8,o={texture:null,frame:null,isCropped:!1,setCrop:function(r,n,e,s){if(r===void 0)this.isCropped=!1;else if(this.frame){if(typeof r=="number")this.frame.setCropUVs(this._crop,r,n,e,s,this.flipX,this.flipY);else{var a=r;this.frame.setCropUVs(this._crop,a.x,a.y,a.width,a.height,this.flipX,this.flipY)}this.isCropped=!0}return this},setTexture:function(r,n){return this.texture=this.scene.sys.textures.get(r),this.setFrame(n)},setFrame:function(r,n,e){return n===void 0&&(n=!0),e===void 0&&(e=!0),r instanceof l?(this.texture=this.scene.sys.textures.get(r.texture.key),this.frame=r):this.frame=this.texture.get(r),!this.frame.cutWidth||!this.frame.cutHeight?this.renderFlags&=~c:this.renderFlags|=c,this._sizeComponent&&n&&this.setSizeToFrame(),this._originComponent&&e&&(this.frame.customPivot?this.setOrigin(this.frame.pivotX,this.frame.pivotY):this.updateDisplayOrigin()),this.isCropped&&this.frame.updateCropUVs(this._crop,this.flipX,this.flipY),this},resetCropObject:function(){return{u0:0,v0:0,u1:0,v1:0,width:0,height:0,x:0,y:0,flipX:!1,flipY:!1,cx:0,cy:0,cw:0,ch:0}}};p.exports=o}),27472:(p=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var y={tintTopLeft:16777215,tintTopRight:16777215,tintBottomLeft:16777215,tintBottomRight:16777215,tintFill:!1,clearTint:function(){return this.setTint(16777215),this},setTint:function(t,l,c,o){return t===void 0&&(t=16777215),l===void 0&&(l=t,c=t,o=t),this.tintTopLeft=t,this.tintTopRight=l,this.tintBottomLeft=c,this.tintBottomRight=o,this.tintFill=!1,this},setTintFill:function(t,l,c,o){return this.setTint(t,l,c,o),this.tintFill=!0,this},tint:{get:function(){return this.tintTopLeft},set:function(t){this.setTint(t,t,t,t)}},isTinted:{get:function(){var t=16777215;return this.tintFill||this.tintTopLeft!==t||this.tintTopRight!==t||this.tintBottomLeft!==t||this.tintBottomRight!==t}}};p.exports=y}),53774:(p=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var y=function(t){var l={name:t.name,type:t.type,x:t.x,y:t.y,depth:t.depth,scale:{x:t.scaleX,y:t.scaleY},origin:{x:t.originX,y:t.originY},flipX:t.flipX,flipY:t.flipY,rotation:t.rotation,alpha:t.alpha,visible:t.visible,blendMode:t.blendMode,textureKey:"",frameKey:"",data:{}};return t.texture&&(l.textureKey=t.texture.key,l.frameKey=t.frame.name),l};p.exports=y}),16901:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(36383),c=t(61340),o=t(85955),r=t(86554),n=t(30954),e=t(26099),s=4,a={hasTransformComponent:!0,_scaleX:1,_scaleY:1,_rotation:0,x:0,y:0,z:0,w:0,scale:{get:function(){return(this._scaleX+this._scaleY)/2},set:function(i){this._scaleX=i,this._scaleY=i,i===0?this.renderFlags&=~s:this.renderFlags|=s}},scaleX:{get:function(){return this._scaleX},set:function(i){this._scaleX=i,i===0?this.renderFlags&=~s:this._scaleY!==0&&(this.renderFlags|=s)}},scaleY:{get:function(){return this._scaleY},set:function(i){this._scaleY=i,i===0?this.renderFlags&=~s:this._scaleX!==0&&(this.renderFlags|=s)}},angle:{get:function(){return n(this._rotation*l.RAD_TO_DEG)},set:function(i){this.rotation=n(i)*l.DEG_TO_RAD}},rotation:{get:function(){return this._rotation},set:function(i){this._rotation=r(i)}},setPosition:function(i,h,u,d){return i===void 0&&(i=0),h===void 0&&(h=i),u===void 0&&(u=0),d===void 0&&(d=0),this.x=i,this.y=h,this.z=u,this.w=d,this},copyPosition:function(i){return i.x!==void 0&&(this.x=i.x),i.y!==void 0&&(this.y=i.y),i.z!==void 0&&(this.z=i.z),i.w!==void 0&&(this.w=i.w),this},setRandomPosition:function(i,h,u,d){return i===void 0&&(i=0),h===void 0&&(h=0),u===void 0&&(u=this.scene.sys.scale.width),d===void 0&&(d=this.scene.sys.scale.height),this.x=i+Math.random()*u,this.y=h+Math.random()*d,this},setRotation:function(i){return i===void 0&&(i=0),this.rotation=i,this},setAngle:function(i){return i===void 0&&(i=0),this.angle=i,this},setScale:function(i,h){return i===void 0&&(i=1),h===void 0&&(h=i),this.scaleX=i,this.scaleY=h,this},setX:function(i){return i===void 0&&(i=0),this.x=i,this},setY:function(i){return i===void 0&&(i=0),this.y=i,this},setZ:function(i){return i===void 0&&(i=0),this.z=i,this},setW:function(i){return i===void 0&&(i=0),this.w=i,this},getLocalTransformMatrix:function(i){return i===void 0&&(i=new c),i.applyITRS(this.x,this.y,this._rotation,this._scaleX,this._scaleY)},getWorldTransformMatrix:function(i,h){i===void 0&&(i=new c);var u=this.parentContainer;if(!u)return this.getLocalTransformMatrix(i);var d=!1;for(h||(h=new c,d=!0),i.applyITRS(this.x,this.y,this._rotation,this._scaleX,this._scaleY);u;)h.applyITRS(u.x,u.y,u._rotation,u._scaleX,u._scaleY),h.multiply(i,i),u=u.parentContainer;return d&&h.destroy(),i},getLocalPoint:function(i,h,u,d){u||(u=new e),d||(d=this.scene.sys.cameras.main);var f=d.scrollX,v=d.scrollY,m=i+f*this.scrollFactorX-f,x=h+v*this.scrollFactorY-v;return this.parentContainer?this.getWorldTransformMatrix().applyInverse(m,x,u):o(m,x,this.x,this.y,this.rotation,this.scaleX,this.scaleY,u),this._originComponent&&(u.x+=this._displayOriginX,u.y+=this._displayOriginY),u},getWorldPoint:function(i,h,u){i===void 0&&(i=new e);var d=this.parentContainer;if(!d)return i.x=this.x,i.y=this.y,i;var f=this.getWorldTransformMatrix(h,u);return i.x=f.tx,i.y=f.ty,i},getParentRotation:function(){for(var i=0,h=this.parentContainer;h;)i+=h.rotation,h=h.parentContainer;return i}};p.exports=a}),61340:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(83419),c=t(36383),o=t(26099),r=new l({initialize:function(e,s,a,i,h,u){e===void 0&&(e=1),s===void 0&&(s=0),a===void 0&&(a=0),i===void 0&&(i=1),h===void 0&&(h=0),u===void 0&&(u=0),this.matrix=new Float32Array([e,s,a,i,h,u,0,0,1]),this.decomposedMatrix={translateX:0,translateY:0,scaleX:1,scaleY:1,rotation:0},this.quad=new Float32Array(8)},a:{get:function(){return this.matrix[0]},set:function(n){this.matrix[0]=n}},b:{get:function(){return this.matrix[1]},set:function(n){this.matrix[1]=n}},c:{get:function(){return this.matrix[2]},set:function(n){this.matrix[2]=n}},d:{get:function(){return this.matrix[3]},set:function(n){this.matrix[3]=n}},e:{get:function(){return this.matrix[4]},set:function(n){this.matrix[4]=n}},f:{get:function(){return this.matrix[5]},set:function(n){this.matrix[5]=n}},tx:{get:function(){return this.matrix[4]},set:function(n){this.matrix[4]=n}},ty:{get:function(){return this.matrix[5]},set:function(n){this.matrix[5]=n}},rotation:{get:function(){return Math.acos(this.a/this.scaleX)*(Math.atan(-this.c/this.a)<0?-1:1)}},rotationNormalized:{get:function(){var n=this.matrix,e=n[0],s=n[1],a=n[2],i=n[3];return e||s?s>0?Math.acos(e/this.scaleX):-Math.acos(e/this.scaleX):a||i?c.TAU-(i>0?Math.acos(-a/this.scaleY):-Math.acos(a/this.scaleY)):0}},scaleX:{get:function(){return Math.sqrt(this.a*this.a+this.b*this.b)}},scaleY:{get:function(){return Math.sqrt(this.c*this.c+this.d*this.d)}},loadIdentity:function(){var n=this.matrix;return n[0]=1,n[1]=0,n[2]=0,n[3]=1,n[4]=0,n[5]=0,this},translate:function(n,e){var s=this.matrix;return s[4]=s[0]*n+s[2]*e+s[4],s[5]=s[1]*n+s[3]*e+s[5],this},scale:function(n,e){var s=this.matrix;return s[0]*=n,s[1]*=n,s[2]*=e,s[3]*=e,this},rotate:function(n){var e=Math.sin(n),s=Math.cos(n),a=this.matrix,i=a[0],h=a[1],u=a[2],d=a[3];return a[0]=i*s+u*e,a[1]=h*s+d*e,a[2]=i*-e+u*s,a[3]=h*-e+d*s,this},multiply:function(n,e){var s=this.matrix,a=n.matrix,i=s[0],h=s[1],u=s[2],d=s[3],f=s[4],v=s[5],m=a[0],x=a[1],g=a[2],T=a[3],S=a[4],C=a[5],E=e===void 0?s:e.matrix;return E[0]=m*i+x*u,E[1]=m*h+x*d,E[2]=g*i+T*u,E[3]=g*h+T*d,E[4]=S*i+C*u+f,E[5]=S*h+C*d+v,E},multiplyWithOffset:function(n,e,s){var a=this.matrix,i=n.matrix,h=a[0],u=a[1],d=a[2],f=a[3],v=a[4],m=a[5],x=e*h+s*d+v,g=e*u+s*f+m,T=i[0],S=i[1],C=i[2],E=i[3],P=i[4],A=i[5];return a[0]=T*h+S*d,a[1]=T*u+S*f,a[2]=C*h+E*d,a[3]=C*u+E*f,a[4]=P*h+A*d+x,a[5]=P*u+A*f+g,this},transform:function(n,e,s,a,i,h){var u=this.matrix,d=u[0],f=u[1],v=u[2],m=u[3],x=u[4],g=u[5];return u[0]=n*d+e*v,u[1]=n*f+e*m,u[2]=s*d+a*v,u[3]=s*f+a*m,u[4]=i*d+h*v+x,u[5]=i*f+h*m+g,this},transformPoint:function(n,e,s){s===void 0&&(s={x:0,y:0});var a=this.matrix,i=a[0],h=a[1],u=a[2],d=a[3],f=a[4],v=a[5];return s.x=n*i+e*u+f,s.y=n*h+e*d+v,s},invert:function(){var n=this.matrix,e=n[0],s=n[1],a=n[2],i=n[3],h=n[4],u=n[5],d=e*i-s*a;return n[0]=i/d,n[1]=-s/d,n[2]=-a/d,n[3]=e/d,n[4]=(a*u-i*h)/d,n[5]=-(e*u-s*h)/d,this},copyFrom:function(n){var e=this.matrix;return e[0]=n.a,e[1]=n.b,e[2]=n.c,e[3]=n.d,e[4]=n.e,e[5]=n.f,this},copyFromArray:function(n){var e=this.matrix;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],this},copyToContext:function(n){var e=this.matrix;return n.transform(e[0],e[1],e[2],e[3],e[4],e[5]),n},setToContext:function(n){return n.setTransform(this.a,this.b,this.c,this.d,this.e,this.f),n},copyToArray:function(n){var e=this.matrix;return n===void 0?n=[e[0],e[1],e[2],e[3],e[4],e[5]]:(n[0]=e[0],n[1]=e[1],n[2]=e[2],n[3]=e[3],n[4]=e[4],n[5]=e[5]),n},setTransform:function(n,e,s,a,i,h){var u=this.matrix;return u[0]=n,u[1]=e,u[2]=s,u[3]=a,u[4]=i,u[5]=h,this},decomposeMatrix:function(){var n=this.decomposedMatrix,e=this.matrix,s=e[0],a=e[1],i=e[2],h=e[3],u=s*h-a*i;if(n.translateX=e[4],n.translateY=e[5],s||a){var d=Math.sqrt(s*s+a*a);n.rotation=a>0?Math.acos(s/d):-Math.acos(s/d),n.scaleX=d,n.scaleY=u/d}else if(i||h){var f=Math.sqrt(i*i+h*h);n.rotation=Math.PI*.5-(h>0?Math.acos(-i/f):-Math.acos(i/f)),n.scaleX=u/f,n.scaleY=f}else n.rotation=0,n.scaleX=0,n.scaleY=0;return n},applyITRS:function(n,e,s,a,i){var h=this.matrix,u=Math.sin(s),d=Math.cos(s);return h[4]=n,h[5]=e,h[0]=d*a,h[1]=u*a,h[2]=-u*i,h[3]=d*i,this},applyInverse:function(n,e,s){s===void 0&&(s=new o);var a=this.matrix,i=a[0],h=a[1],u=a[2],d=a[3],f=a[4],v=a[5],m=1/(i*d+u*-h);return s.x=d*m*n+-u*m*e+(v*u-f*d)*m,s.y=i*m*e+-h*m*n+(-v*i+f*h)*m,s},setQuad:function(n,e,s,a,i,h){i===void 0&&(i=!1),h===void 0&&(h=this.quad);var u=this.matrix,d=u[0],f=u[1],v=u[2],m=u[3],x=u[4],g=u[5],T=n*d+e*v+x,S=n*f+e*m+g,C=n*d+a*v+x,E=n*f+a*m+g,P=s*d+a*v+x,A=s*f+a*m+g,M=s*d+e*v+x,R=s*f+e*m+g;if(i){var L=Math.floor(T+.5),w=Math.floor(S+.5),N=L-T,b=w-S;h[0]=L,h[1]=w,h[2]=C+N,h[3]=E+b,h[4]=P+N,h[5]=A+b,h[6]=M+N,h[7]=R+b}else h[0]=T,h[1]=S,h[2]=C,h[3]=E,h[4]=P,h[5]=A,h[6]=M,h[7]=R;return h},getX:function(n,e){return n*this.a+e*this.c+this.e},getY:function(n,e){return n*this.b+e*this.d+this.f},getXRound:function(n,e,s){var a=this.getX(n,e);return s&&(a=Math.floor(a+.5)),a},getYRound:function(n,e,s){var a=this.getY(n,e);return s&&(a=Math.floor(a+.5)),a},getCSSMatrix:function(){var n=this.matrix;return"matrix("+n[0]+","+n[1]+","+n[2]+","+n[3]+","+n[4]+","+n[5]+")"},destroy:function(){this.matrix=null,this.quad=null,this.decomposedMatrix=null}});p.exports=r}),59715:(p=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var y=1,t={_visible:!0,visible:{get:function(){return this._visible},set:function(l){l?(this._visible=!0,this.renderFlags|=y):(this._visible=!1,this.renderFlags&=~y)}},setVisible:function(l){return this.visible=l,this}};p.exports=t}),31401:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */p.exports={Alpha:t(16005),AlphaSingle:t(88509),BlendMode:t(90065),ComputedSize:t(94215),Crop:t(61683),Depth:t(89272),Flip:t(54434),FX:t(47059),GetBounds:t(8004),Mask:t(8573),Origin:t(27387),PathFollower:t(37640),Pipeline:t(72699),PostPipeline:t(17581),ScrollFactor:t(80227),Size:t(16736),Texture:t(37726),TextureCrop:t(79812),Tint:t(27472),ToJSON:t(53774),Transform:t(16901),TransformMatrix:t(61340),Visible:t(59715)}}),31559:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @author       Felipe Alfonso <@bitnenfer>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(37105),c=t(10312),o=t(83419),r=t(31401),n=t(51708),e=t(95643),s=t(87841),a=t(29959),i=t(36899),h=t(26099),u=new r.TransformMatrix,d=new o({Extends:e,Mixins:[r.AlphaSingle,r.BlendMode,r.ComputedSize,r.Depth,r.Mask,r.PostPipeline,r.Transform,r.Visible,a],initialize:function(v,m,x,g){e.call(this,v,"Container"),this.list=[],this.exclusive=!0,this.maxSize=-1,this.position=0,this.localTransform=new r.TransformMatrix,this._sortKey="",this._sysEvents=v.sys.events,this.scrollFactorX=1,this.scrollFactorY=1,this.initPostPipeline(),this.setPosition(m,x),this.setBlendMode(c.SKIP_CHECK),g&&this.add(g)},originX:{get:function(){return .5}},originY:{get:function(){return .5}},displayOriginX:{get:function(){return this.width*.5}},displayOriginY:{get:function(){return this.height*.5}},setExclusive:function(f){return f===void 0&&(f=!0),this.exclusive=f,this},getBounds:function(f){if(f===void 0&&(f=new s),f.setTo(this.x,this.y,0,0),this.parentContainer){var v=this.parentContainer.getBoundsTransformMatrix(),m=v.transformPoint(this.x,this.y);f.setTo(m.x,m.y,0,0)}if(this.list.length>0){var x=this.list,g=new s,T=!1;f.setEmpty();for(var S=0;S<x.length;S++){var C=x[S];C.getBounds&&(C.getBounds(g),T?i(g,f,f):(f.setTo(g.x,g.y,g.width,g.height),T=!0))}}return f},addHandler:function(f){f.once(n.DESTROY,this.onChildDestroyed,this),this.exclusive&&(f.parentContainer&&f.parentContainer.remove(f),f.parentContainer=this,f.removeFromDisplayList(),f.addedToScene())},removeHandler:function(f){f.off(n.DESTROY,this.remove,this),this.exclusive&&(f.parentContainer=null,f.removedFromScene(),f.addToDisplayList())},pointToContainer:function(f,v){v===void 0&&(v=new h),this.parentContainer?this.parentContainer.pointToContainer(f,v):(v.x=f.x,v.y=f.y);var m=u;return m.applyITRS(this.x,this.y,this.rotation,this.scaleX,this.scaleY),m.invert(),m.transformPoint(f.x,f.y,v),v},getBoundsTransformMatrix:function(){return this.getWorldTransformMatrix(u,this.localTransform)},add:function(f){return l.Add(this.list,f,this.maxSize,this.addHandler,this),this},addAt:function(f,v){return l.AddAt(this.list,f,v,this.maxSize,this.addHandler,this),this},getAt:function(f){return this.list[f]},getIndex:function(f){return this.list.indexOf(f)},sort:function(f,v){return f?(v===void 0&&(v=function(m,x){return m[f]-x[f]}),l.StableSort(this.list,v),this):this},getByName:function(f){return l.GetFirst(this.list,"name",f)},getRandom:function(f,v){return l.GetRandom(this.list,f,v)},getFirst:function(f,v,m,x){return l.GetFirst(this.list,f,v,m,x)},getAll:function(f,v,m,x){return l.GetAll(this.list,f,v,m,x)},count:function(f,v,m,x){return l.CountAllMatching(this.list,f,v,m,x)},swap:function(f,v){return l.Swap(this.list,f,v),this},moveTo:function(f,v){return l.MoveTo(this.list,f,v),this},moveAbove:function(f,v){return l.MoveAbove(this.list,f,v),this},moveBelow:function(f,v){return l.MoveBelow(this.list,f,v),this},remove:function(f,v){var m=l.Remove(this.list,f,this.removeHandler,this);if(v&&m){Array.isArray(m)||(m=[m]);for(var x=0;x<m.length;x++)m[x].destroy()}return this},removeAt:function(f,v){var m=l.RemoveAt(this.list,f,this.removeHandler,this);return v&&m&&m.destroy(),this},removeBetween:function(f,v,m){var x=l.RemoveBetween(this.list,f,v,this.removeHandler,this);if(m)for(var g=0;g<x.length;g++)x[g].destroy();return this},removeAll:function(f){var v=this.list;if(f){for(var m=0;m<v.length;m++)v[m]&&v[m].scene&&(v[m].off(n.DESTROY,this.onChildDestroyed,this),v[m].destroy());this.list=[]}else l.RemoveBetween(v,0,v.length,this.removeHandler,this);return this},bringToTop:function(f){return l.BringToTop(this.list,f),this},sendToBack:function(f){return l.SendToBack(this.list,f),this},moveUp:function(f){return l.MoveUp(this.list,f),this},moveDown:function(f){return l.MoveDown(this.list,f),this},reverse:function(){return this.list.reverse(),this},shuffle:function(){return l.Shuffle(this.list),this},replace:function(f,v,m){var x=l.Replace(this.list,f,v);return x&&(this.addHandler(v),this.removeHandler(f),m&&f.destroy()),this},exists:function(f){return this.list.indexOf(f)>-1},setAll:function(f,v,m,x){return l.SetAll(this.list,f,v,m,x),this},each:function(f,v){var m=[null],x,g=this.list.slice(),T=g.length;for(x=2;x<arguments.length;x++)m.push(arguments[x]);for(x=0;x<T;x++)m[0]=g[x],f.apply(v,m);return this},iterate:function(f,v){var m=[null],x;for(x=2;x<arguments.length;x++)m.push(arguments[x]);for(x=0;x<this.list.length;x++)m[0]=this.list[x],f.apply(v,m);return this},setScrollFactor:function(f,v,m){return v===void 0&&(v=f),m===void 0&&(m=!1),this.scrollFactorX=f,this.scrollFactorY=v,m&&(l.SetAll(this.list,"scrollFactorX",f),l.SetAll(this.list,"scrollFactorY",v)),this},length:{get:function(){return this.list.length}},first:{get:function(){return this.position=0,this.list.length>0?this.list[0]:null}},last:{get:function(){return this.list.length>0?(this.position=this.list.length-1,this.list[this.position]):null}},next:{get:function(){return this.position<this.list.length?(this.position++,this.list[this.position]):null}},previous:{get:function(){return this.position>0?(this.position--,this.list[this.position]):null}},preDestroy:function(){this.removeAll(!!this.exclusive),this.localTransform.destroy(),this.list=[]},onChildDestroyed:function(f){l.Remove(this.list,f),this.exclusive&&(f.parentContainer=null,f.removedFromScene())}});p.exports=d}),53584:(p=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @author       Felipe Alfonso <@bitnenfer>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var y=function(t,l,c,o){c.addToRenderList(l);var r=l.list;if(r.length!==0){var n=l.localTransform;o?(n.loadIdentity(),n.multiply(o),n.translate(l.x,l.y),n.rotate(l.rotation),n.scale(l.scaleX,l.scaleY)):n.applyITRS(l.x,l.y,l.rotation,l.scaleX,l.scaleY);var e=l.blendMode!==-1;e||t.setBlendMode(0);var s=l._alpha,a=l.scrollFactorX,i=l.scrollFactorY;l.mask&&l.mask.preRenderCanvas(t,null,c);for(var h=0;h<r.length;h++){var u=r[h];if(u.willRender(c)){var d=u.alpha,f=u.scrollFactorX,v=u.scrollFactorY;!e&&u.blendMode!==t.currentBlendMode&&t.setBlendMode(u.blendMode),u.setScrollFactor(f*a,v*i),u.setAlpha(d*s),u.renderCanvas(t,u,c,n),u.setAlpha(d),u.setScrollFactor(f,v)}}l.mask&&l.mask.postRenderCanvas(t)}};p.exports=y}),77143:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @author       Felipe Alfonso <@bitnenfer>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(25305),c=t(31559),o=t(44603),r=t(23568),n=t(95540);o.register("container",function(e,s){e===void 0&&(e={});var a=r(e,"x",0),i=r(e,"y",0),h=n(e,"children",null),u=new c(this.scene,a,i,h);return s!==void 0&&(e.add=s),l(this.scene,u,e),u})}),24961:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @author       Felipe Alfonso <@bitnenfer>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(31559),c=t(39429);c.register("container",function(o,r,n){return this.displayList.add(new l(this.scene,o,r,n))})}),29959:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @author       Felipe Alfonso <@bitnenfer>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(29747),c=l,o=l;c=t(72249),o=t(53584),p.exports={renderWebGL:c,renderCanvas:o}}),72249:(p=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @author       Felipe Alfonso <@bitnenfer>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var y=function(t,l,c,o){c.addToRenderList(l);var r=l.list,n=r.length;if(n!==0){var e=l.localTransform;o?(e.loadIdentity(),e.multiply(o),e.translate(l.x,l.y),e.rotate(l.rotation),e.scale(l.scaleX,l.scaleY)):e.applyITRS(l.x,l.y,l.rotation,l.scaleX,l.scaleY),t.pipelines.preBatch(l);var s=l.blendMode!==-1;s||t.setBlendMode(0);for(var a=l.alpha,i=l.scrollFactorX,h=l.scrollFactorY,u=0;u<n;u++){var d=r[u];if(d.willRender(c)){var f,v,m,x;if(d.alphaTopLeft!==void 0)f=d.alphaTopLeft,v=d.alphaTopRight,m=d.alphaBottomLeft,x=d.alphaBottomRight;else{var g=d.alpha;f=g,v=g,m=g,x=g}var T=d.scrollFactorX,S=d.scrollFactorY;!s&&d.blendMode!==t.currentBlendMode&&t.setBlendMode(d.blendMode);var C=d.mask;C&&C.preRenderWebGL(t,d,c);var E=d.type;E!==t.currentType&&(t.newType=!0,t.currentType=E),t.nextTypeMatch=u<n-1?r[u+1].type===t.currentType:!1,d.setScrollFactor(T*i,S*h),d.setAlpha(f*a,v*a,m*a,x*a),d.renderWebGL(t,d,c,e,l),d.setAlpha(f,v,m,x),d.setScrollFactor(T,S),C&&C.postRenderWebGL(t,c),t.newType=!1}}t.pipelines.postBatch(l)}};p.exports=y}),47407:(p=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */p.exports=["normal","multiply","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"]}),3069:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(83419),c=t(31401),o=t(441),r=t(95643),n=t(41212),e=t(35846),s=t(44594),a=t(61369),i=new l({Extends:r,Mixins:[c.AlphaSingle,c.BlendMode,c.Depth,c.Origin,c.ScrollFactor,c.Transform,c.Visible,o],initialize:function(u,d,f,v,m,x){if(r.call(this,u,"DOMElement"),this.parent=u.sys.game.domContainer,!this.parent)throw new Error("No DOM Container set in game config");this.cache=u.sys.cache.html,this.node,this.transformOnly=!1,this.skewX=0,this.skewY=0,this.rotate3d=new a,this.rotate3dAngle="deg",this.pointerEvents="auto",this.width=0,this.height=0,this.displayWidth=0,this.displayHeight=0,this.handler=this.dispatchNativeEvent.bind(this),this.setPosition(d,f),typeof v=="string"?v[0]==="#"?this.setElement(v.substr(1),m,x):this.createElement(v,m,x):v&&this.setElement(v,m,x),u.sys.events.on(s.SLEEP,this.handleSceneEvent,this),u.sys.events.on(s.WAKE,this.handleSceneEvent,this),u.sys.events.on(s.PRE_RENDER,this.preRender,this)},handleSceneEvent:function(h){var u=this.node,d=u.style;u&&(d.display=h.settings.visible?"block":"none")},setSkew:function(h,u){return h===void 0&&(h=0),u===void 0&&(u=h),this.skewX=h,this.skewY=u,this},setPerspective:function(h){return this.parent.style.perspective=h+"px",this},perspective:{get:function(){return parseFloat(this.parent.style.perspective)},set:function(h){this.parent.style.perspective=h+"px"}},addListener:function(h){if(this.node){h=h.split(" ");for(var u=0;u<h.length;u++)this.node.addEventListener(h[u],this.handler,!1)}return this},removeListener:function(h){if(this.node){h=h.split(" ");for(var u=0;u<h.length;u++)this.node.removeEventListener(h[u],this.handler)}return this},dispatchNativeEvent:function(h){this.emit(h.type,h)},createElement:function(h,u,d){return this.setElement(document.createElement(h),u,d)},setElement:function(h,u,d){this.removeElement();var f;if(typeof h=="string"?(h[0]==="#"&&(h=h.substr(1)),f=document.getElementById(h)):typeof h=="object"&&h.nodeType===1&&(f=h),!f)return this;if(this.node=f,u&&n(u))for(var v in u)f.style[v]=u[v];else typeof u=="string"&&(f.style=u);return f.style.zIndex="0",f.style.display="inline",f.style.position="absolute",f.phaser=this,this.parent.appendChild(f),d&&(f.innerText=d),this.updateSize()},createFromCache:function(h,u){var d=this.cache.get(h);return d&&this.createFromHTML(d,u),this},createFromHTML:function(h,u){u===void 0&&(u="div"),this.removeElement();var d=document.createElement(u);return this.node=d,d.style.zIndex="0",d.style.display="inline",d.style.position="absolute",d.phaser=this,this.parent.appendChild(d),d.innerHTML=h,this.updateSize()},removeElement:function(){return this.node&&(e(this.node),this.node=null),this},updateSize:function(){var h=this.node;return this.width=h.clientWidth,this.height=h.clientHeight,this.displayWidth=this.width*this.scaleX,this.displayHeight=this.height*this.scaleY,this},getChildByProperty:function(h,u){if(this.node){for(var d=this.node.querySelectorAll("*"),f=0;f<d.length;f++)if(d[f][h]===u)return d[f]}return null},getChildByID:function(h){return this.getChildByProperty("id",h)},getChildByName:function(h){return this.getChildByProperty("name",h)},setClassName:function(h){return this.node&&(this.node.className=h,this.updateSize()),this},setText:function(h){return this.node&&(this.node.innerText=h,this.updateSize()),this},setHTML:function(h){return this.node&&(this.node.innerHTML=h,this.updateSize()),this},preRender:function(){var h=this.parentContainer,u=this.node;u&&h&&!h.willRender()&&(u.style.display="none")},willRender:function(){return!0},preDestroy:function(){this.removeElement(),this.scene.sys.events.off(s.SLEEP,this.handleSceneEvent,this),this.scene.sys.events.off(s.WAKE,this.handleSceneEvent,this),this.scene.sys.events.off(s.PRE_RENDER,this.preRender,this)}});p.exports=i}),49381:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(47407),c=t(95643),o=t(61340),r=new o,n=new o,e=new o,s=function(a,i,h,u){if(i.node){var d=i.node.style,f=i.scene.sys.settings;if(!d||!f.visible||c.RENDER_MASK!==i.renderFlags||i.cameraFilter!==0&&i.cameraFilter&h.id||i.parentContainer&&!i.parentContainer.willRender()){d.display="none";return}var v=i.parentContainer,m=h.alpha*i.alpha;v&&(m*=v.alpha);var x=r,g=n,T=e,S=0,C=0,E="0%",P="0%";u?(S=i.width*i.scaleX*i.originX,C=i.height*i.scaleY*i.originY,g.applyITRS(i.x-S,i.y-C,i.rotation,i.scaleX,i.scaleY),x.copyFrom(h.matrix),x.multiplyWithOffset(u,-h.scrollX*i.scrollFactorX,-h.scrollY*i.scrollFactorY),g.e=i.x-S,g.f=i.y-C,x.multiply(g,T)):(S=i.width*i.originX,C=i.height*i.originY,g.applyITRS(i.x,i.y,i.rotation,i.scaleX,i.scaleY),x.copyFrom(h.matrix),E=100*i.originX+"%",P=100*i.originY+"%",g.e-=h.scrollX*i.scrollFactorX,g.f-=h.scrollY*i.scrollFactorY,x.multiply(g,T),T.e-=S,T.f-=C),i.transformOnly||(d.display="block",d.opacity=m,d.zIndex=i._depth,d.pointerEvents=i.pointerEvents,d.mixBlendMode=l[i._blendMode]),d.transform=T.getCSSMatrix()+" skew("+i.skewX+"rad, "+i.skewY+"rad) rotate3d("+i.rotate3d.x+","+i.rotate3d.y+","+i.rotate3d.z+","+i.rotate3d.w+i.rotate3dAngle+")",d.transformOrigin=E+" "+P}};p.exports=s}),2611:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(3069),c=t(39429);c.register("dom",function(o,r,n,e,s){var a=new l(this.scene,o,r,n,e,s);return this.displayList.add(a),a})}),441:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(29747),c=l,o=l;c=t(49381),o=t(49381),p.exports={renderWebGL:c,renderCanvas:o}}),62980:(p=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */p.exports="addedtoscene"}),41337:(p=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */p.exports="destroy"}),44947:(p=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */p.exports="removedfromscene"}),49358:(p=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */p.exports="complete"}),35163:(p=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */p.exports="created"}),97249:(p=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */p.exports="error"}),19483:(p=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */p.exports="locked"}),56059:(p=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */p.exports="loop"}),26772:(p=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */p.exports="metadata"}),64437:(p=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */p.exports="playing"}),83411:(p=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */p.exports="play"}),75780:(p=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */p.exports="seeked"}),67799:(p=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */p.exports="seeking"}),63500:(p=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */p.exports="stalled"}),55541:(p=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */p.exports="stop"}),53208:(p=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */p.exports="textureready"}),4992:(p=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */p.exports="unlocked"}),12:(p=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */p.exports="unsupported"}),51708:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */p.exports={ADDED_TO_SCENE:t(62980),DESTROY:t(41337),REMOVED_FROM_SCENE:t(44947),VIDEO_COMPLETE:t(49358),VIDEO_CREATED:t(35163),VIDEO_ERROR:t(97249),VIDEO_LOCKED:t(19483),VIDEO_LOOP:t(56059),VIDEO_METADATA:t(26772),VIDEO_PLAY:t(83411),VIDEO_PLAYING:t(64437),VIDEO_SEEKED:t(75780),VIDEO_SEEKING:t(67799),VIDEO_STALLED:t(63500),VIDEO_STOP:t(55541),VIDEO_TEXTURE:t(53208),VIDEO_UNLOCKED:t(4992),VIDEO_UNSUPPORTED:t(12)}}),42421:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(83419),c=t(31401),o=t(95643),r=t(64993),n=new l({Extends:o,Mixins:[c.Alpha,c.BlendMode,c.Depth,c.Flip,c.Origin,c.ScrollFactor,c.Size,c.Texture,c.Tint,c.Transform,c.Visible,r],initialize:function(s){o.call(this,s,"Extern")},addedToScene:function(){this.scene.sys.updateList.add(this)},removedFromScene:function(){this.scene.sys.updateList.remove(this)},preUpdate:function(){},render:function(){}});p.exports=n}),70217:(()=>{}),56315:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(42421),c=t(39429);c.register("extern",function(){var o=new l(this.scene);return this.displayList.add(o),o})}),64993:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(29747),c=l,o=l;c=t(80287),o=t(70217),p.exports={renderWebGL:c,renderCanvas:o}}),80287:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(91296),c=function(o,r,n,e){o.pipelines.clear();var s=l(r,n,e).calc;r.render.call(r,o,n,s),o.pipelines.rebind()};p.exports=c}),85592:(p=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */p.exports={ARC:0,BEGIN_PATH:1,CLOSE_PATH:2,FILL_RECT:3,LINE_TO:4,MOVE_TO:5,LINE_STYLE:6,FILL_STYLE:7,FILL_PATH:8,STROKE_PATH:9,FILL_TRIANGLE:10,STROKE_TRIANGLE:11,SAVE:14,RESTORE:15,TRANSLATE:16,SCALE:17,ROTATE:18,GRADIENT_FILL_STYLE:21,GRADIENT_LINE_STYLE:22}}),43831:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(71911),c=t(83419),o=t(85592),r=t(31401),n=t(8497),e=t(95643),s=t(95540),a=t(35154),i=t(36383),h=t(84503),u=new c({Extends:e,Mixins:[r.AlphaSingle,r.BlendMode,r.Depth,r.Mask,r.Pipeline,r.PostPipeline,r.Transform,r.Visible,r.ScrollFactor,h],initialize:function(f,v){var m=a(v,"x",0),x=a(v,"y",0);e.call(this,f,"Graphics"),this.setPosition(m,x),this.initPipeline(),this.initPostPipeline(),this.displayOriginX=0,this.displayOriginY=0,this.commandBuffer=[],this.defaultFillColor=-1,this.defaultFillAlpha=1,this.defaultStrokeWidth=1,this.defaultStrokeColor=-1,this.defaultStrokeAlpha=1,this._lineWidth=1,this.lineStyle(1,0,0),this.fillStyle(0,0),this.setDefaultStyles(v)},setDefaultStyles:function(d){return a(d,"lineStyle",null)&&(this.defaultStrokeWidth=a(d,"lineStyle.width",1),this.defaultStrokeColor=a(d,"lineStyle.color",16777215),this.defaultStrokeAlpha=a(d,"lineStyle.alpha",1),this.lineStyle(this.defaultStrokeWidth,this.defaultStrokeColor,this.defaultStrokeAlpha)),a(d,"fillStyle",null)&&(this.defaultFillColor=a(d,"fillStyle.color",16777215),this.defaultFillAlpha=a(d,"fillStyle.alpha",1),this.fillStyle(this.defaultFillColor,this.defaultFillAlpha)),this},lineStyle:function(d,f,v){return v===void 0&&(v=1),this.commandBuffer.push(o.LINE_STYLE,d,f,v),this._lineWidth=d,this},fillStyle:function(d,f){return f===void 0&&(f=1),this.commandBuffer.push(o.FILL_STYLE,d,f),this},fillGradientStyle:function(d,f,v,m,x,g,T,S){return x===void 0&&(x=1),g===void 0&&(g=x),T===void 0&&(T=x),S===void 0&&(S=x),this.commandBuffer.push(o.GRADIENT_FILL_STYLE,x,g,T,S,d,f,v,m),this},lineGradientStyle:function(d,f,v,m,x,g){return g===void 0&&(g=1),this.commandBuffer.push(o.GRADIENT_LINE_STYLE,d,g,f,v,m,x),this},beginPath:function(){return this.commandBuffer.push(o.BEGIN_PATH),this},closePath:function(){return this.commandBuffer.push(o.CLOSE_PATH),this},fillPath:function(){return this.commandBuffer.push(o.FILL_PATH),this},fill:function(){return this.commandBuffer.push(o.FILL_PATH),this},strokePath:function(){return this.commandBuffer.push(o.STROKE_PATH),this},stroke:function(){return this.commandBuffer.push(o.STROKE_PATH),this},fillCircleShape:function(d){return this.fillCircle(d.x,d.y,d.radius)},strokeCircleShape:function(d){return this.strokeCircle(d.x,d.y,d.radius)},fillCircle:function(d,f,v){return this.beginPath(),this.arc(d,f,v,0,i.PI2),this.fillPath(),this},strokeCircle:function(d,f,v){return this.beginPath(),this.arc(d,f,v,0,i.PI2),this.strokePath(),this},fillRectShape:function(d){return this.fillRect(d.x,d.y,d.width,d.height)},strokeRectShape:function(d){return this.strokeRect(d.x,d.y,d.width,d.height)},fillRect:function(d,f,v,m){return this.commandBuffer.push(o.FILL_RECT,d,f,v,m),this},strokeRect:function(d,f,v,m){var x=this._lineWidth/2,g=d-x,T=d+x;return this.beginPath(),this.moveTo(d,f),this.lineTo(d,f+m),this.strokePath(),this.beginPath(),this.moveTo(d+v,f),this.lineTo(d+v,f+m),this.strokePath(),this.beginPath(),this.moveTo(g,f),this.lineTo(T+v,f),this.strokePath(),this.beginPath(),this.moveTo(g,f+m),this.lineTo(T+v,f+m),this.strokePath(),this},fillRoundedRect:function(d,f,v,m,x){x===void 0&&(x=20);var g=x,T=x,S=x,C=x;typeof x!="number"&&(g=s(x,"tl",20),T=s(x,"tr",20),S=s(x,"bl",20),C=s(x,"br",20));var E=g>=0,P=T>=0,A=S>=0,M=C>=0;return g=Math.abs(g),T=Math.abs(T),S=Math.abs(S),C=Math.abs(C),this.beginPath(),this.moveTo(d+g,f),this.lineTo(d+v-T,f),P?this.arc(d+v-T,f+T,T,-i.TAU,0):this.arc(d+v,f,T,Math.PI,i.TAU,!0),this.lineTo(d+v,f+m-C),M?this.arc(d+v-C,f+m-C,C,0,i.TAU):this.arc(d+v,f+m,C,-i.TAU,Math.PI,!0),this.lineTo(d+S,f+m),A?this.arc(d+S,f+m-S,S,i.TAU,Math.PI):this.arc(d,f+m,S,0,-i.TAU,!0),this.lineTo(d,f+g),E?this.arc(d+g,f+g,g,-Math.PI,-i.TAU):this.arc(d,f,g,i.TAU,0,!0),this.fillPath(),this},strokeRoundedRect:function(d,f,v,m,x){x===void 0&&(x=20);var g=x,T=x,S=x,C=x,E=Math.min(v,m)/2;typeof x!="number"&&(g=s(x,"tl",20),T=s(x,"tr",20),S=s(x,"bl",20),C=s(x,"br",20));var P=g>=0,A=T>=0,M=S>=0,R=C>=0;return g=Math.min(Math.abs(g),E),T=Math.min(Math.abs(T),E),S=Math.min(Math.abs(S),E),C=Math.min(Math.abs(C),E),this.beginPath(),this.moveTo(d+g,f),this.lineTo(d+v-T,f),this.moveTo(d+v-T,f),A?this.arc(d+v-T,f+T,T,-i.TAU,0):this.arc(d+v,f,T,Math.PI,i.TAU,!0),this.lineTo(d+v,f+m-C),this.moveTo(d+v,f+m-C),R?this.arc(d+v-C,f+m-C,C,0,i.TAU):this.arc(d+v,f+m,C,-i.TAU,Math.PI,!0),this.lineTo(d+S,f+m),this.moveTo(d+S,f+m),M?this.arc(d+S,f+m-S,S,i.TAU,Math.PI):this.arc(d,f+m,S,0,-i.TAU,!0),this.lineTo(d,f+g),this.moveTo(d,f+g),P?this.arc(d+g,f+g,g,-Math.PI,-i.TAU):this.arc(d,f,g,i.TAU,0,!0),this.strokePath(),this},fillPointShape:function(d,f){return this.fillPoint(d.x,d.y,f)},fillPoint:function(d,f,v){return!v||v<1?v=1:(d-=v/2,f-=v/2),this.commandBuffer.push(o.FILL_RECT,d,f,v,v),this},fillTriangleShape:function(d){return this.fillTriangle(d.x1,d.y1,d.x2,d.y2,d.x3,d.y3)},strokeTriangleShape:function(d){return this.strokeTriangle(d.x1,d.y1,d.x2,d.y2,d.x3,d.y3)},fillTriangle:function(d,f,v,m,x,g){return this.commandBuffer.push(o.FILL_TRIANGLE,d,f,v,m,x,g),this},strokeTriangle:function(d,f,v,m,x,g){return this.commandBuffer.push(o.STROKE_TRIANGLE,d,f,v,m,x,g),this},strokeLineShape:function(d){return this.lineBetween(d.x1,d.y1,d.x2,d.y2)},lineBetween:function(d,f,v,m){return this.beginPath(),this.moveTo(d,f),this.lineTo(v,m),this.strokePath(),this},lineTo:function(d,f){return this.commandBuffer.push(o.LINE_TO,d,f),this},moveTo:function(d,f){return this.commandBuffer.push(o.MOVE_TO,d,f),this},strokePoints:function(d,f,v,m){f===void 0&&(f=!1),v===void 0&&(v=!1),m===void 0&&(m=d.length),this.beginPath(),this.moveTo(d[0].x,d[0].y);for(var x=1;x<m;x++)this.lineTo(d[x].x,d[x].y);return f&&this.lineTo(d[0].x,d[0].y),v&&this.closePath(),this.strokePath(),this},fillPoints:function(d,f,v,m){f===void 0&&(f=!1),v===void 0&&(v=!1),m===void 0&&(m=d.length),this.beginPath(),this.moveTo(d[0].x,d[0].y);for(var x=1;x<m;x++)this.lineTo(d[x].x,d[x].y);return f&&this.lineTo(d[0].x,d[0].y),v&&this.closePath(),this.fillPath(),this},strokeEllipseShape:function(d,f){f===void 0&&(f=32);var v=d.getPoints(f);return this.strokePoints(v,!0)},strokeEllipse:function(d,f,v,m,x){x===void 0&&(x=32);var g=new n(d,f,v,m),T=g.getPoints(x);return this.strokePoints(T,!0)},fillEllipseShape:function(d,f){f===void 0&&(f=32);var v=d.getPoints(f);return this.fillPoints(v,!0)},fillEllipse:function(d,f,v,m,x){x===void 0&&(x=32);var g=new n(d,f,v,m),T=g.getPoints(x);return this.fillPoints(T,!0)},arc:function(d,f,v,m,x,g,T){return g===void 0&&(g=!1),T===void 0&&(T=0),this.commandBuffer.push(o.ARC,d,f,v,m,x,g,T),this},slice:function(d,f,v,m,x,g,T){return g===void 0&&(g=!1),T===void 0&&(T=0),this.commandBuffer.push(o.BEGIN_PATH),this.commandBuffer.push(o.MOVE_TO,d,f),this.commandBuffer.push(o.ARC,d,f,v,m,x,g,T),this.commandBuffer.push(o.CLOSE_PATH),this},save:function(){return this.commandBuffer.push(o.SAVE),this},restore:function(){return this.commandBuffer.push(o.RESTORE),this},translateCanvas:function(d,f){return this.commandBuffer.push(o.TRANSLATE,d,f),this},scaleCanvas:function(d,f){return this.commandBuffer.push(o.SCALE,d,f),this},rotateCanvas:function(d){return this.commandBuffer.push(o.ROTATE,d),this},clear:function(){return this.commandBuffer.length=0,this.defaultFillColor>-1&&this.fillStyle(this.defaultFillColor,this.defaultFillAlpha),this.defaultStrokeColor>-1&&this.lineStyle(this.defaultStrokeWidth,this.defaultStrokeColor,this.defaultStrokeAlpha),this},generateTexture:function(d,f,v){var m=this.scene.sys,x=m.game.renderer;f===void 0&&(f=m.scale.width),v===void 0&&(v=m.scale.height),u.TargetCamera.setScene(this.scene),u.TargetCamera.setViewport(0,0,f,v),u.TargetCamera.scrollX=this.x,u.TargetCamera.scrollY=this.y;var g,T,S={willReadFrequently:!0};if(typeof d=="string")if(m.textures.exists(d)){g=m.textures.get(d);var C=g.getSourceImage();C instanceof HTMLCanvasElement&&(T=C.getContext("2d",S))}else g=m.textures.createCanvas(d,f,v),T=g.getSourceImage().getContext("2d",S);else d instanceof HTMLCanvasElement&&(T=d.getContext("2d",S));return T&&(this.renderCanvas(x,this,u.TargetCamera,null,T,!1),g&&g.refresh()),this},preDestroy:function(){this.commandBuffer=[]}});u.TargetCamera=new l,p.exports=u}),32768:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(85592),c=t(20926),o=function(r,n,e,s,a,i){var h=n.commandBuffer,u=h.length,d=a||r.currentContext;if(!(u===0||!c(r,d,n,e,s))){e.addToRenderList(n);var f=1,v=1,m=0,x=0,g=1,T=0,S=0,C=0;d.beginPath();for(var E=0;E<u;++E){var P=h[E];switch(P){case l.ARC:d.arc(h[E+1],h[E+2],h[E+3],h[E+4],h[E+5],h[E+6]),E+=7;break;case l.LINE_STYLE:g=h[E+1],m=h[E+2],f=h[E+3],T=(m&16711680)>>>16,S=(m&65280)>>>8,C=m&255,d.strokeStyle="rgba("+T+","+S+","+C+","+f+")",d.lineWidth=g,E+=3;break;case l.FILL_STYLE:x=h[E+1],v=h[E+2],T=(x&16711680)>>>16,S=(x&65280)>>>8,C=x&255,d.fillStyle="rgba("+T+","+S+","+C+","+v+")",E+=2;break;case l.BEGIN_PATH:d.beginPath();break;case l.CLOSE_PATH:d.closePath();break;case l.FILL_PATH:i||d.fill();break;case l.STROKE_PATH:i||d.stroke();break;case l.FILL_RECT:i?d.rect(h[E+1],h[E+2],h[E+3],h[E+4]):d.fillRect(h[E+1],h[E+2],h[E+3],h[E+4]),E+=4;break;case l.FILL_TRIANGLE:d.beginPath(),d.moveTo(h[E+1],h[E+2]),d.lineTo(h[E+3],h[E+4]),d.lineTo(h[E+5],h[E+6]),d.closePath(),i||d.fill(),E+=6;break;case l.STROKE_TRIANGLE:d.beginPath(),d.moveTo(h[E+1],h[E+2]),d.lineTo(h[E+3],h[E+4]),d.lineTo(h[E+5],h[E+6]),d.closePath(),i||d.stroke(),E+=6;break;case l.LINE_TO:d.lineTo(h[E+1],h[E+2]),E+=2;break;case l.MOVE_TO:d.moveTo(h[E+1],h[E+2]),E+=2;break;case l.LINE_FX_TO:d.lineTo(h[E+1],h[E+2]),E+=5;break;case l.MOVE_FX_TO:d.moveTo(h[E+1],h[E+2]),E+=5;break;case l.SAVE:d.save();break;case l.RESTORE:d.restore();break;case l.TRANSLATE:d.translate(h[E+1],h[E+2]),E+=2;break;case l.SCALE:d.scale(h[E+1],h[E+2]),E+=2;break;case l.ROTATE:d.rotate(h[E+1]),E+=1;break;case l.GRADIENT_FILL_STYLE:E+=5;break;case l.GRADIENT_LINE_STYLE:E+=6;break}}d.restore()}};p.exports=o}),87079:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(44603),c=t(43831);l.register("graphics",function(o,r){o===void 0&&(o={}),r!==void 0&&(o.add=r);var n=new c(this.scene,o);return o.add&&this.scene.sys.displayList.add(n),n})}),1201:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(43831),c=t(39429);c.register("graphics",function(o){return this.displayList.add(new l(this.scene,o))})}),84503:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(29747),c=l,o=l;c=t(77545),o=t(32768),o=t(32768),p.exports={renderWebGL:c,renderCanvas:o}}),77545:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(85592),c=t(91296),o=t(61340),r=t(70554),n=function(h,u,d){this.x=h,this.y=u,this.width=d},e=function(h,u,d){this.points=[],this.pointsLength=1,this.points[0]=new n(h,u,d)},s=[],a=new o,i=function(h,u,d,f){if(u.commandBuffer.length!==0){d.addToRenderList(u);var v=h.pipelines.set(u.pipeline,u);h.pipelines.preBatch(u);for(var m=c(u,d,f).calc,x=a.loadIdentity(),g=u.commandBuffer,T=d.alpha*u.alpha,S=1,C=v.fillTint,E=v.strokeTint,P=0,A=0,M=0,R=.01,L=Math.PI*2,w,N=[],b=0,z=!0,D=null,B=r.getTintAppendFloatAlpha,F=0;F<g.length;F++)switch(w=g[F],w){case l.BEGIN_PATH:{N.length=0,D=null,z=!0;break}case l.CLOSE_PATH:{z=!1,D&&D.points.length&&D.points.push(D.points[0]);break}case l.FILL_PATH:{for(b=0;b<N.length;b++)v.batchFillPath(N[b].points,x,m);break}case l.STROKE_PATH:{for(b=0;b<N.length;b++)v.batchStrokePath(N[b].points,S,z,x,m);break}case l.LINE_STYLE:{S=g[++F];var U=g[++F],O=g[++F]*T,X=B(U,O);E.TL=X,E.TR=X,E.BL=X,E.BR=X;break}case l.FILL_STYLE:{var H=g[++F],Z=g[++F]*T,J=B(H,Z);C.TL=J,C.TR=J,C.BL=J,C.BR=J;break}case l.GRADIENT_FILL_STYLE:{var $=g[++F]*T,Q=g[++F]*T,k=g[++F]*T,j=g[++F]*T;C.TL=B(g[++F],$),C.TR=B(g[++F],Q),C.BL=B(g[++F],k),C.BR=B(g[++F],j);break}case l.GRADIENT_LINE_STYLE:{S=g[++F];var _=g[++F]*T;E.TL=B(g[++F],_),E.TR=B(g[++F],_),E.BL=B(g[++F],_),E.BR=B(g[++F],_);break}case l.ARC:{var et=0,q=g[++F],nt=g[++F],rt=g[++F],at=g[++F],tt=g[++F],it=g[++F],st=g[++F];for(tt-=at,it?tt<-L?tt=-L:tt>0&&(tt=-L+tt%L):tt>L?tt=L:tt<0&&(tt=L+tt%L),D===null&&(D=new e(q+Math.cos(at)*rt,nt+Math.sin(at)*rt,S),N.push(D),et+=R);et<1+st;)M=tt*et+at,P=q+Math.cos(M)*rt,A=nt+Math.sin(M)*rt,D.points.push(new n(P,A,S)),et+=R;M=tt+at,P=q+Math.cos(M)*rt,A=nt+Math.sin(M)*rt,D.points.push(new n(P,A,S));break}case l.FILL_RECT:{v.batchFillRect(g[++F],g[++F],g[++F],g[++F],x,m);break}case l.FILL_TRIANGLE:{v.batchFillTriangle(g[++F],g[++F],g[++F],g[++F],g[++F],g[++F],x,m);break}case l.STROKE_TRIANGLE:{v.batchStrokeTriangle(g[++F],g[++F],g[++F],g[++F],g[++F],g[++F],S,x,m);break}case l.LINE_TO:{D!==null?D.points.push(new n(g[++F],g[++F],S)):(D=new e(g[++F],g[++F],S),N.push(D));break}case l.MOVE_TO:{D=new e(g[++F],g[++F],S),N.push(D);break}case l.SAVE:{s.push(x.copyToArray());break}case l.RESTORE:{x.copyFromArray(s.pop());break}case l.TRANSLATE:{q=g[++F],nt=g[++F],x.translate(q,nt);break}case l.SCALE:{q=g[++F],nt=g[++F],x.scale(q,nt);break}case l.ROTATE:{x.rotate(g[++F]);break}}h.pipelines.postBatch(u)}};p.exports=i}),26479:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(61061),c=t(83419),o=t(51708),r=t(50792),n=t(46710),e=t(95540),s=t(35154),a=t(97022),i=t(41212),h=t(88492),u=t(35072),d=t(68287),f=new c({Extends:r,initialize:function(m,x,g){r.call(this),g?x&&!Array.isArray(x)&&(x=[x]):Array.isArray(x)?i(x[0])&&(g=x,x=null):i(x)&&(g=x,x=null),this.scene=m,this.children=new u,this.isParent=!0,this.type="Group",this.classType=e(g,"classType",d),this.name=e(g,"name",""),this.active=e(g,"active",!0),this.maxSize=e(g,"maxSize",-1),this.defaultKey=e(g,"defaultKey",null),this.defaultFrame=e(g,"defaultFrame",null),this.runChildUpdate=e(g,"runChildUpdate",!1),this.createCallback=e(g,"createCallback",null),this.removeCallback=e(g,"removeCallback",null),this.createMultipleCallback=e(g,"createMultipleCallback",null),this.internalCreateCallback=e(g,"internalCreateCallback",null),this.internalRemoveCallback=e(g,"internalRemoveCallback",null),x&&this.addMultiple(x),g&&this.createMultiple(g),this.on(o.ADDED_TO_SCENE,this.addedToScene,this),this.on(o.REMOVED_FROM_SCENE,this.removedFromScene,this)},addedToScene:function(){this.scene.sys.updateList.add(this)},removedFromScene:function(){this.scene.sys.updateList.remove(this)},create:function(v,m,x,g,T,S){if(v===void 0&&(v=0),m===void 0&&(m=0),x===void 0&&(x=this.defaultKey),g===void 0&&(g=this.defaultFrame),T===void 0&&(T=!0),S===void 0&&(S=!0),this.isFull())return null;var C=new this.classType(this.scene,v,m,x,g);return C.addToDisplayList(this.scene.sys.displayList),C.addToUpdateList(),C.visible=T,C.setActive(S),this.add(C),C},createMultiple:function(v){if(this.isFull())return[];Array.isArray(v)||(v=[v]);var m=[];if(v[0].key)for(var x=0;x<v.length;x++){var g=this.createFromConfig(v[x]);m=m.concat(g)}return m},createFromConfig:function(v){if(this.isFull())return[];this.classType=e(v,"classType",this.classType);var m=e(v,"key",void 0),x=e(v,"frame",null),g=e(v,"visible",!0),T=e(v,"active",!0),S=[];if(m===void 0)return S;Array.isArray(m)||(m=[m]),Array.isArray(x)||(x=[x]);var C=e(v,"repeat",0),E=e(v,"randomKey",!1),P=e(v,"randomFrame",!1),A=e(v,"yoyo",!1),M=e(v,"quantity",!1),R=e(v,"frameQuantity",1),L=e(v,"max",0),w=h(m,x,{max:L,qty:M||R,random:E,randomB:P,repeat:C,yoyo:A});v.createCallback&&(this.createCallback=v.createCallback),v.removeCallback&&(this.removeCallback=v.removeCallback),v.internalCreateCallback&&(this.internalCreateCallback=v.internalCreateCallback),v.internalRemoveCallback&&(this.internalRemoveCallback=v.internalRemoveCallback);for(var N=0;N<w.length;N++){var b=this.create(0,0,w[N].a,w[N].b,g,T);if(!b)break;S.push(b)}if(a(v,"setXY")){var z=s(v,"setXY.x",0),D=s(v,"setXY.y",0),B=s(v,"setXY.stepX",0),F=s(v,"setXY.stepY",0);l.SetXY(S,z,D,B,F)}if(a(v,"setRotation")){var U=s(v,"setRotation.value",0),O=s(v,"setRotation.step",0);l.SetRotation(S,U,O)}if(a(v,"setScale")){var X=s(v,"setScale.x",1),H=s(v,"setScale.y",X),Z=s(v,"setScale.stepX",0),J=s(v,"setScale.stepY",0);l.SetScale(S,X,H,Z,J)}if(a(v,"setOrigin")){var $=s(v,"setOrigin.x",.5),Q=s(v,"setOrigin.y",$),k=s(v,"setOrigin.stepX",0),j=s(v,"setOrigin.stepY",0);l.SetOrigin(S,$,Q,k,j)}if(a(v,"setAlpha")){var _=s(v,"setAlpha.value",1),et=s(v,"setAlpha.step",0);l.SetAlpha(S,_,et)}if(a(v,"setDepth")){var q=s(v,"setDepth.value",0),nt=s(v,"setDepth.step",0);l.SetDepth(S,q,nt)}if(a(v,"setScrollFactor")){var rt=s(v,"setScrollFactor.x",1),at=s(v,"setScrollFactor.y",rt),tt=s(v,"setScrollFactor.stepX",0),it=s(v,"setScrollFactor.stepY",0);l.SetScrollFactor(S,rt,at,tt,it)}var st=e(v,"hitArea",null),ot=e(v,"hitAreaCallback",null);st&&l.SetHitArea(S,st,ot);var ft=e(v,"gridAlign",!1);return ft&&l.GridAlign(S,ft),this.createMultipleCallback&&this.createMultipleCallback.call(this,S),S},preUpdate:function(v,m){if(!(!this.runChildUpdate||this.children.size===0))for(var x=this.children.entries.slice(),g=0;g<x.length;g++){var T=x[g];T.active&&T.update(v,m)}},add:function(v,m){return m===void 0&&(m=!1),this.isFull()?this:(this.children.set(v),this.internalCreateCallback&&this.internalCreateCallback.call(this,v),this.createCallback&&this.createCallback.call(this,v),m&&(v.addToDisplayList(this.scene.sys.displayList),v.addToUpdateList()),v.on(o.DESTROY,this.remove,this),this)},addMultiple:function(v,m){if(m===void 0&&(m=!1),Array.isArray(v))for(var x=0;x<v.length;x++)this.add(v[x],m);return this},remove:function(v,m,x){return m===void 0&&(m=!1),x===void 0&&(x=!1),this.children.contains(v)?(this.children.delete(v),this.internalRemoveCallback&&this.internalRemoveCallback.call(this,v),this.removeCallback&&this.removeCallback.call(this,v),v.off(o.DESTROY,this.remove,this),x?v.destroy():m&&(v.removeFromDisplayList(),v.removeFromUpdateList()),this):this},clear:function(v,m){v===void 0&&(v=!1),m===void 0&&(m=!1);for(var x=this.children,g=0;g<x.size;g++){var T=x.entries[g];T.off(o.DESTROY,this.remove,this),m?T.destroy():v&&(T.removeFromDisplayList(),T.removeFromUpdateList())}return this.children.clear(),this},contains:function(v){return this.children.contains(v)},getChildren:function(){return this.children.entries},getLength:function(){return this.children.size},getMatching:function(v,m,x,g){return n(this.children.entries,v,m,x,g)},getFirst:function(v,m,x,g,T,S,C){return this.getHandler(!0,1,v,m,x,g,T,S,C)},getFirstNth:function(v,m,x,g,T,S,C,E){return this.getHandler(!0,v,m,x,g,T,S,C,E)},getLast:function(v,m,x,g,T,S,C){return this.getHandler(!1,1,v,m,x,g,T,S,C)},getLastNth:function(v,m,x,g,T,S,C,E){return this.getHandler(!1,v,m,x,g,T,S,C,E)},getHandler:function(v,m,x,g,T,S,C,E,P){x===void 0&&(x=!1),g===void 0&&(g=!1);var A,M,R=0,L=this.children.entries;if(v)for(M=0;M<L.length;M++)if(A=L[M],A.active===x){if(R++,R===m)break}else A=null;else for(M=L.length-1;M>=0;M--)if(A=L[M],A.active===x){if(R++,R===m)break}else A=null;return A?(typeof T=="number"&&(A.x=T),typeof S=="number"&&(A.y=S),A):g?this.create(T,S,C,E,P):null},get:function(v,m,x,g,T){return this.getFirst(!1,!0,v,m,x,g,T)},getFirstAlive:function(v,m,x,g,T,S){return this.getFirst(!0,v,m,x,g,T,S)},getFirstDead:function(v,m,x,g,T,S){return this.getFirst(!1,v,m,x,g,T,S)},playAnimation:function(v,m){return l.PlayAnimation(this.children.entries,v,m),this},isFull:function(){return this.maxSize===-1?!1:this.children.size>=this.maxSize},countActive:function(v){v===void 0&&(v=!0);for(var m=0,x=0;x<this.children.size;x++)this.children.entries[x].active===v&&m++;return m},getTotalUsed:function(){return this.countActive()},getTotalFree:function(){var v=this.getTotalUsed(),m=this.maxSize===-1?999999999999:this.maxSize;return m-v},setActive:function(v){return this.active=v,this},setName:function(v){return this.name=v,this},propertyValueSet:function(v,m,x,g,T){return l.PropertyValueSet(this.children.entries,v,m,x,g,T),this},propertyValueInc:function(v,m,x,g,T){return l.PropertyValueInc(this.children.entries,v,m,x,g,T),this},setX:function(v,m){return l.SetX(this.children.entries,v,m),this},setY:function(v,m){return l.SetY(this.children.entries,v,m),this},setXY:function(v,m,x,g){return l.SetXY(this.children.entries,v,m,x,g),this},incX:function(v,m){return l.IncX(this.children.entries,v,m),this},incY:function(v,m){return l.IncY(this.children.entries,v,m),this},incXY:function(v,m,x,g){return l.IncXY(this.children.entries,v,m,x,g),this},shiftPosition:function(v,m,x){return l.ShiftPosition(this.children.entries,v,m,x),this},angle:function(v,m){return l.Angle(this.children.entries,v,m),this},rotate:function(v,m){return l.Rotate(this.children.entries,v,m),this},rotateAround:function(v,m){return l.RotateAround(this.children.entries,v,m),this},rotateAroundDistance:function(v,m,x){return l.RotateAroundDistance(this.children.entries,v,m,x),this},setAlpha:function(v,m){return l.SetAlpha(this.children.entries,v,m),this},setTint:function(v,m,x,g){return l.SetTint(this.children.entries,v,m,x,g),this},setOrigin:function(v,m,x,g){return l.SetOrigin(this.children.entries,v,m,x,g),this},scaleX:function(v,m){return l.ScaleX(this.children.entries,v,m),this},scaleY:function(v,m){return l.ScaleY(this.children.entries,v,m),this},scaleXY:function(v,m,x,g){return l.ScaleXY(this.children.entries,v,m,x,g),this},setDepth:function(v,m){return l.SetDepth(this.children.entries,v,m),this},setBlendMode:function(v){return l.SetBlendMode(this.children.entries,v),this},setHitArea:function(v,m){return l.SetHitArea(this.children.entries,v,m),this},shuffle:function(){return l.Shuffle(this.children.entries),this},kill:function(v){this.children.contains(v)&&v.setActive(!1)},killAndHide:function(v){this.children.contains(v)&&(v.setActive(!1),v.setVisible(!1))},setVisible:function(v,m,x){return l.SetVisible(this.children.entries,v,m,x),this},toggleVisible:function(){return l.ToggleVisible(this.children.entries),this},destroy:function(v,m){v===void 0&&(v=!1),m===void 0&&(m=!1),!(!this.scene||this.ignoreDestroy)&&(this.emit(o.DESTROY,this),this.removeAllListeners(),this.scene.sys.updateList.remove(this),this.clear(m,v),this.scene=void 0,this.children=void 0)}});p.exports=f}),94975:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(44603),c=t(26479);l.register("group",function(o){return new c(this.scene,null,o)})}),3385:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(26479),c=t(39429);c.register("group",function(o,r){return this.updateList.add(new l(this.scene,o,r))})}),88571:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(83419),c=t(31401),o=t(95643),r=t(59819),n=new l({Extends:o,Mixins:[c.Alpha,c.BlendMode,c.Depth,c.Flip,c.GetBounds,c.Mask,c.Origin,c.Pipeline,c.PostPipeline,c.ScrollFactor,c.Size,c.TextureCrop,c.Tint,c.Transform,c.Visible,r],initialize:function(s,a,i,h,u){o.call(this,s,"Image"),this._crop=this.resetCropObject(),this.setTexture(h,u),this.setPosition(a,i),this.setSizeToFrame(),this.setOriginFromFrame(),this.initPipeline(),this.initPostPipeline(!0)}});p.exports=n}),40652:(p=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var y=function(t,l,c,o){c.addToRenderList(l),t.batchSprite(l,l.frame,c,o)};p.exports=y}),82459:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(25305),c=t(44603),o=t(23568),r=t(88571);c.register("image",function(n,e){n===void 0&&(n={});var s=o(n,"key",null),a=o(n,"frame",null),i=new r(this.scene,0,0,s,a);return e!==void 0&&(n.add=e),l(this.scene,i,n),i})}),2117:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(88571),c=t(39429);c.register("image",function(o,r,n,e){return this.displayList.add(new l(this.scene,o,r,n,e))})}),59819:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(29747),c=l,o=l;c=t(99517),o=t(40652),p.exports={renderWebGL:c,renderCanvas:o}}),99517:(p=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var y=function(t,l,c,o){c.addToRenderList(l),this.pipeline.batchSprite(l,c,o)};p.exports=y}),77856:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l={Events:t(51708),DisplayList:t(8050),GameObjectCreator:t(44603),GameObjectFactory:t(39429),UpdateList:t(45027),Components:t(31401),GetCalcMatrix:t(91296),BuildGameObject:t(25305),BuildGameObjectAnimation:t(13059),GameObject:t(95643),BitmapText:t(22186),Blitter:t(6107),Bob:t(46590),Container:t(31559),DOMElement:t(3069),DynamicBitmapText:t(2638),Extern:t(42421),Graphics:t(43831),Group:t(26479),Image:t(88571),Layer:t(93595),Particles:t(18404),PathFollower:t(1159),RenderTexture:t(591),RetroFont:t(196),Rope:t(77757),Sprite:t(68287),Text:t(50171),GetTextSize:t(14220),MeasureText:t(79557),TextStyle:t(35762),TileSprite:t(20839),Zone:t(41481),Video:t(18471),Shape:t(17803),Arc:t(23629),Curve:t(89),Ellipse:t(19921),Grid:t(30479),IsoBox:t(61475),IsoTriangle:t(16933),Line:t(57847),Polygon:t(24949),Rectangle:t(74561),Star:t(55911),Triangle:t(36931),Factories:{Blitter:t(12709),Container:t(24961),DOMElement:t(2611),DynamicBitmapText:t(72566),Extern:t(56315),Graphics:t(1201),Group:t(3385),Image:t(2117),Layer:t(20005),Particles:t(676),PathFollower:t(90145),RenderTexture:t(60505),Rope:t(96819),Sprite:t(46409),StaticBitmapText:t(34914),Text:t(68005),TileSprite:t(91681),Zone:t(84175),Video:t(89025),Arc:t(42563),Curve:t(40511),Ellipse:t(1543),Grid:t(34137),IsoBox:t(3933),IsoTriangle:t(49803),Line:t(2481),Polygon:t(64827),Rectangle:t(87959),Star:t(93697),Triangle:t(45245)},Creators:{Blitter:t(9403),Container:t(77143),DynamicBitmapText:t(11164),Graphics:t(87079),Group:t(94975),Image:t(82459),Layer:t(25179),Particles:t(92730),RenderTexture:t(34495),Rope:t(26209),Sprite:t(15567),StaticBitmapText:t(57336),Text:t(71259),TileSprite:t(14167),Zone:t(95261),Video:t(11511)}};l.Shader=t(20071),l.Mesh=t(4703),l.NineSlice=t(28103),l.PointLight=t(80321),l.Plane=t(33663),l.Factories.Shader=t(74177),l.Factories.Mesh=t(9225),l.Factories.NineSlice=t(47521),l.Factories.PointLight=t(71255),l.Factories.Plane=t(30985),l.Creators.Shader=t(54935),l.Creators.Mesh=t(20527),l.Creators.NineSlice=t(28279),l.Creators.PointLight=t(39829),l.Creators.Plane=t(56015),l.Light=t(41432),l.LightsManager=t(61356),l.LightsPlugin=t(88992),p.exports=l}),93595:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(10312),c=t(83419),o=t(31401),r=t(53774),n=t(45893),e=t(50792),s=t(51708),a=t(73162),i=t(33963),h=t(44594),u=t(19186),d=new c({Extends:a,Mixins:[o.AlphaSingle,o.BlendMode,o.Depth,o.Mask,o.PostPipeline,o.Visible,e,i],initialize:function(v,m){a.call(this,v),e.call(this),this.scene=v,this.displayList=null,this.type="Layer",this.state=0,this.parentContainer=null,this.name="",this.active=!0,this.tabIndex=-1,this.data=null,this.renderFlags=15,this.cameraFilter=0,this.input=null,this.body=null,this.ignoreDestroy=!1,this.systems=v.sys,this.events=v.sys.events,this.sortChildrenFlag=!1,this.addCallback=this.addChildCallback,this.removeCallback=this.removeChildCallback,this.initPostPipeline(),this.clearAlpha(),this.setBlendMode(l.SKIP_CHECK),m&&this.add(m),v.sys.queueDepthSort()},setActive:function(f){return this.active=f,this},setName:function(f){return this.name=f,this},setState:function(f){return this.state=f,this},setDataEnabled:function(){return this.data||(this.data=new n(this)),this},setData:function(f,v){return this.data||(this.data=new n(this)),this.data.set(f,v),this},incData:function(f,v){return this.data||(this.data=new n(this)),this.data.inc(f,v),this},toggleData:function(f){return this.data||(this.data=new n(this)),this.data.toggle(f),this},getData:function(f){return this.data||(this.data=new n(this)),this.data.get(f)},setInteractive:function(){return this},disableInteractive:function(){return this},removeInteractive:function(){return this},addedToScene:function(){},removedFromScene:function(){},update:function(){},toJSON:function(){return r(this)},willRender:function(f){return!(this.renderFlags!==15||this.list.length===0||this.cameraFilter!==0&&this.cameraFilter&f.id)},getIndexList:function(){for(var f=this,v=this.parentContainer,m=[];v&&(m.unshift(v.getIndex(f)),f=v,v.parentContainer);)v=v.parentContainer;return m.unshift(this.displayList.getIndex(f)),m},addChildCallback:function(f){var v=f.displayList;v&&v!==this&&f.removeFromDisplayList(),f.displayList||(this.queueDepthSort(),f.displayList=this,f.emit(s.ADDED_TO_SCENE,f,this.scene),this.events.emit(h.ADDED_TO_SCENE,f,this.scene))},removeChildCallback:function(f){this.queueDepthSort(),f.displayList=null,f.emit(s.REMOVED_FROM_SCENE,f,this.scene),this.events.emit(h.REMOVED_FROM_SCENE,f,this.scene)},queueDepthSort:function(){this.sortChildrenFlag=!0},depthSort:function(){this.sortChildrenFlag&&(u(this.list,this.sortByDepth),this.sortChildrenFlag=!1)},sortByDepth:function(f,v){return f._depth-v._depth},getChildren:function(){return this.list},addToDisplayList:function(f){return f===void 0&&(f=this.scene.sys.displayList),this.displayList&&this.displayList!==f&&this.removeFromDisplayList(),f.exists(this)||(this.displayList=f,f.add(this,!0),f.queueDepthSort(),this.emit(s.ADDED_TO_SCENE,this,this.scene),f.events.emit(h.ADDED_TO_SCENE,this,this.scene)),this},removeFromDisplayList:function(){var f=this.displayList||this.scene.sys.displayList;return f.exists(this)&&(f.remove(this,!0),f.queueDepthSort(),this.displayList=null,this.emit(s.REMOVED_FROM_SCENE,this,this.scene),f.events.emit(h.REMOVED_FROM_SCENE,this,this.scene)),this},getDisplayList:function(){var f=null;return this.parentContainer?f=this.parentContainer.list:this.displayList&&(f=this.displayList.list),f},destroy:function(f){if(!(!this.scene||this.ignoreDestroy)){this.emit(s.DESTROY,this);for(var v=this.list;v.length;)v[0].destroy(f);this.removeAllListeners(),this.resetPostPipeline(!0),this.displayList&&(this.displayList.remove(this,!0,!1),this.displayList.queueDepthSort()),this.data&&(this.data.destroy(),this.data=void 0),this.active=!1,this.visible=!1,this.list=void 0,this.scene=void 0,this.displayList=void 0,this.systems=void 0,this.events=void 0}}});p.exports=d}),2956:(p=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var y=function(t,l,c){var o=l.list;if(o.length!==0){l.depthSort();var r=l.blendMode!==-1;r||t.setBlendMode(0);var n=l._alpha;l.mask&&l.mask.preRenderCanvas(t,null,c);for(var e=0;e<o.length;e++){var s=o[e];if(s.willRender(c)){var a=s.alpha;!r&&s.blendMode!==t.currentBlendMode&&t.setBlendMode(s.blendMode),s.setAlpha(a*n),s.renderCanvas(t,s,c),s.setAlpha(a)}}l.mask&&l.mask.postRenderCanvas(t)}};p.exports=y}),25179:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(25305),c=t(93595),o=t(44603),r=t(23568);o.register("layer",function(n,e){n===void 0&&(n={});var s=r(n,"children",null),a=new c(this.scene,s);return e!==void 0&&(n.add=e),l(this.scene,a,n),a})}),20005:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(93595),c=t(39429);c.register("layer",function(o){return this.displayList.add(new l(this.scene,o))})}),33963:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(29747),c=l,o=l;c=t(15869),o=t(2956),p.exports={renderWebGL:c,renderCanvas:o}}),15869:(p=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var y=function(t,l,c){var o=l.list,r=o.length;if(r!==0){l.depthSort(),t.pipelines.preBatch(l);var n=l.blendMode!==-1;n||t.setBlendMode(0);for(var e=l.alpha,s=0;s<r;s++){var a=o[s];if(a.willRender(c)){var i,h,u,d;if(a.alphaTopLeft!==void 0)i=a.alphaTopLeft,h=a.alphaTopRight,u=a.alphaBottomLeft,d=a.alphaBottomRight;else{var f=a.alpha;i=f,h=f,u=f,d=f}!n&&a.blendMode!==t.currentBlendMode&&t.setBlendMode(a.blendMode);var v=a.mask;v&&v.preRenderWebGL(t,a,c);var m=a.type;m!==t.currentType&&(t.newType=!0,t.currentType=m),t.nextTypeMatch=s<r-1?o[s+1].type===t.currentType:!1,a.setAlpha(i*e,h*e,u*e,d*e),a.renderWebGL(t,a,c),a.setAlpha(i,h,u,d),v&&v.postRenderWebGL(t,c),t.newType=!1}}t.pipelines.postBatch(l)}};p.exports=y}),41432:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(96503),c=t(83419),o=t(31401),r=t(51767),n=t(70554),e=new c({Extends:l,Mixins:[o.Origin,o.ScrollFactor,o.Visible],initialize:function(a,i,h,u,d,f,v){l.call(this,a,i,h),this.color=new r(u,d,f),this.intensity=v,this.renderFlags=15,this.cameraFilter=0,this.setScrollFactor(1,1),this.setOrigin(),this.setDisplayOrigin(h)},displayWidth:{get:function(){return this.diameter},set:function(s){this.diameter=s}},displayHeight:{get:function(){return this.diameter},set:function(s){this.diameter=s}},width:{get:function(){return this.diameter},set:function(s){this.diameter=s}},height:{get:function(){return this.diameter},set:function(s){this.diameter=s}},willRender:function(s){return!(e.RENDER_MASK!==this.renderFlags||this.cameraFilter!==0&&this.cameraFilter&s.id)},setColor:function(s){var a=n.getFloatsFromUintRGB(s);return this.color.set(a[0],a[1],a[2]),this},setIntensity:function(s){return this.intensity=s,this},setRadius:function(s){return this.radius=s,this}});e.RENDER_MASK=15,p.exports=e}),61356:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(81491),c=t(83419),o=t(20339),r=t(41432),n=t(80321),e=t(51767),s=t(19133),a=t(19186),i=t(70554),h=new c({initialize:function(){this.lights=[],this.ambientColor=new e(.1,.1,.1),this.active=!1,this.maxLights=-1,this.visibleLights=0},addPointLight:function(u,d,f,v,m,x){return this.systems.displayList.add(new n(this.scene,u,d,f,v,m,x))},enable:function(){return this.maxLights===-1&&(this.maxLights=this.systems.renderer.config.maxLights),this.active=!0,this},disable:function(){return this.active=!1,this},getLights:function(u){for(var d=this.lights,f=u.worldView,v=[],m=0;m<d.length;m++){var x=d[m];x.willRender(u)&&l(x,f)&&v.push({light:x,distance:o(x.x,x.y,f.centerX,f.centerY)})}return v.length>this.maxLights&&(a(v,this.sortByDistance),v=v.slice(0,this.maxLights)),this.visibleLights=v.length,v},sortByDistance:function(u,d){return u.distance>=d.distance},setAmbientColor:function(u){var d=i.getFloatsFromUintRGB(u);return this.ambientColor.set(d[0],d[1],d[2]),this},getMaxVisibleLights:function(){return this.maxLights},getLightCount:function(){return this.lights.length},addLight:function(u,d,f,v,m){u===void 0&&(u=0),d===void 0&&(d=0),f===void 0&&(f=128),v===void 0&&(v=16777215),m===void 0&&(m=1);var x=i.getFloatsFromUintRGB(v),g=new r(u,d,f,x[0],x[1],x[2],m);return this.lights.push(g),g},removeLight:function(u){var d=this.lights.indexOf(u);return d>=0&&s(this.lights,d),this},shutdown:function(){this.lights.length=0},destroy:function(){this.shutdown()}});p.exports=h}),88992:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(83419),c=t(61356),o=t(37277),r=t(44594),n=new l({Extends:c,initialize:function(s){this.scene=s,this.systems=s.sys,s.sys.settings.isBooted||s.sys.events.once(r.BOOT,this.boot,this),c.call(this)},boot:function(){var e=this.systems.events;e.on(r.SHUTDOWN,this.shutdown,this),e.on(r.DESTROY,this.destroy,this)},destroy:function(){this.shutdown(),this.scene=void 0,this.systems=void 0}});o.register("LightsPlugin",n,"lights"),p.exports=n}),4703:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(83419),c=t(31401),o=t(39506),r=t(83997),n=t(95643),e=t(34684),s=t(92515),a=t(91296),i=t(37867),h=t(29807),u=t(43396),d=t(19186),f=t(25836),v=t(39318),m=new l({Extends:n,Mixins:[c.AlphaSingle,c.BlendMode,c.Depth,c.Mask,c.Pipeline,c.PostPipeline,c.ScrollFactor,c.Size,c.Texture,c.Transform,c.Visible,h],initialize:function(g,T,S,C,E,P,A,M,R,L,w,N){T===void 0&&(T=0),S===void 0&&(S=0),C===void 0&&(C="__WHITE"),n.call(this,g,"Mesh"),this.faces=[],this.vertices=[],this.tintFill=!1,this.debugCallback=null,this.debugGraphic=null,this.hideCCW=!0,this.modelPosition=new f,this.modelScale=new f(1,1,1),this.modelRotation=new f,this.dirtyCache=[0,0,0,0,0,0,0,0,0,0,0,0],this.transformMatrix=new i,this.viewPosition=new f,this.viewMatrix=new i,this.projectionMatrix=new i,this.totalRendered=0,this.totalFrame=0,this.ignoreDirtyCache=!1,this.fov,this.displayOriginX=0,this.displayOriginY=0;var b=g.sys.renderer;this.setPosition(T,S),this.setTexture(C,E),this.setSize(b.width,b.height),this.initPipeline(),this.initPostPipeline(),this.setPerspective(b.width,b.height),P&&this.addVertices(P,A,M,R,L,w,N)},addedToScene:function(){this.scene.sys.updateList.add(this)},removedFromScene:function(){this.scene.sys.updateList.remove(this)},panX:function(x){return this.viewPosition.addScale(f.LEFT,x),this.dirtyCache[10]=1,this},panY:function(x){return this.viewPosition.y+=f.DOWN.y*x,this.dirtyCache[10]=1,this},panZ:function(x){return this.viewPosition.z+=x,this.dirtyCache[10]=1,this},setPerspective:function(x,g,T,S,C){return T===void 0&&(T=45),S===void 0&&(S=.01),C===void 0&&(C=1e3),this.fov=T,this.projectionMatrix.perspective(o(T),x/g,S,C),this.dirtyCache[10]=1,this.dirtyCache[11]=0,this},setOrtho:function(x,g,T,S){return x===void 0&&(x=this.scene.sys.renderer.getAspectRatio()),g===void 0&&(g=1),T===void 0&&(T=-1e3),S===void 0&&(S=1e3),this.fov=0,this.projectionMatrix.ortho(-x,x,-g,g,T,S),this.dirtyCache[10]=1,this.dirtyCache[11]=1,this},clear:function(){return this.faces.forEach(function(x){x.destroy()}),this.faces=[],this.vertices=[],this},addVerticesFromObj:function(x,g,T,S,C,E,P,A,M){var R=this.scene.sys.cache.obj.get(x),L;return R&&(L=e(R,this,g,T,S,C,E,P,A,M)),(!L||L.verts.length===0)&&console.warn("Mesh.addVerticesFromObj data empty:",x),this},sortByDepth:function(x,g){return x.depth-g.depth},depthSort:function(){return d(this.faces,this.sortByDepth),this},addVertex:function(x,g,T,S,C,E,P){var A=new v(x,g,T,S,C,E,P);return this.vertices.push(A),A},addFace:function(x,g,T){var S=new r(x,g,T);return this.faces.push(S),this.dirtyCache[9]=-1,S},addVertices:function(x,g,T,S,C,E,P){var A=s(x,g,T,S,C,E,P);return A?(this.faces=this.faces.concat(A.faces),this.vertices=this.vertices.concat(A.vertices)):console.warn("Mesh.addVertices data empty or invalid"),this.dirtyCache[9]=-1,this},getFaceCount:function(){return this.faces.length},getVertexCount:function(){return this.vertices.length},getFace:function(x){return this.faces[x]},hasFaceAt:function(x,g,T){T===void 0&&(T=this.scene.sys.cameras.main);for(var S=a(this,T).calc,C=this.faces,E=0;E<C.length;E++){var P=C[E];if(P.contains(x,g,S))return!0}return!1},getFaceAt:function(x,g,T){T===void 0&&(T=this.scene.sys.cameras.main);for(var S=a(this,T).calc,C=this.faces,E=[],P=0;P<C.length;P++){var A=C[P];A.contains(x,g,S)&&E.push(A)}return d(E,this.sortByDepth)},setDebug:function(x,g){return this.debugGraphic=x,!x&&!g?this.debugCallback=null:g?this.debugCallback=g:this.debugCallback=this.renderDebug,this},isDirty:function(){var x=this.modelPosition,g=this.modelRotation,T=this.modelScale,S=this.dirtyCache,C=x.x,E=x.y,P=x.z,A=g.x,M=g.y,R=g.z,L=T.x,w=T.y,N=T.z,b=this.getFaceCount(),z=S[0],D=S[1],B=S[2],F=S[3],U=S[4],O=S[5],X=S[6],H=S[7],Z=S[8],J=S[9];return S[0]=C,S[1]=E,S[2]=P,S[3]=A,S[4]=M,S[5]=R,S[6]=L,S[7]=w,S[8]=N,S[9]=b,z!==C||D!==E||B!==P||F!==A||U!==M||O!==R||X!==L||H!==w||Z!==N||J!==b},preUpdate:function(){this.totalRendered=this.totalFrame,this.totalFrame=0;var x=this.dirtyCache;if(!(!this.ignoreDirtyCache&&!x[10]&&!this.isDirty())){var g=this.width,T=this.height,S=this.viewMatrix,C=this.viewPosition;x[10]&&(S.identity(),S.translate(C),S.invert(),x[10]=0);var E=this.transformMatrix;E.setWorldMatrix(this.modelRotation,this.modelPosition,this.modelScale,this.viewMatrix,this.projectionMatrix);for(var P=C.z,A=this.faces,M=0;M<A.length;M++)A[M].transformCoordinatesLocal(E,g,T,P);this.depthSort()}},renderDebug:function(x,g){for(var T=x.debugGraphic,S=0;S<g.length;S++){var C=g[S],E=C.vertex1.tx,P=C.vertex1.ty,A=C.vertex2.tx,M=C.vertex2.ty,R=C.vertex3.tx,L=C.vertex3.ty;T.strokeTriangle(E,P,A,M,R,L)}},preDestroy:function(){this.clear(),this.debugCallback=null,this.debugGraphic=null},clearTint:function(){return this.setTint()},setInteractive:function(x){x===void 0&&(x={});var g=function(T,S,C){for(var E=this.faces,P=0;P<E.length;P++){var A=E[P];if(A.contains(S,C))return!0}return!1}.bind(this);return this.scene.sys.input.enable(this,x,g),this},setTint:function(x){x===void 0&&(x=16777215);for(var g=this.vertices,T=0;T<g.length;T++)g[T].color=x;return this},uvScroll:function(x,g){for(var T=this.faces,S=0;S<T.length;S++)T[S].scrollUV(x,g);return this},uvScale:function(x,g){for(var T=this.faces,S=0;S<T.length;S++)T[S].scaleUV(x,g);return this},tint:{set:function(x){this.setTint(x)}},rotateX:{get:function(){return u(this.modelRotation.x)},set:function(x){this.modelRotation.x=o(x)}},rotateY:{get:function(){return u(this.modelRotation.y)},set:function(x){this.modelRotation.y=o(x)}},rotateZ:{get:function(){return u(this.modelRotation.z)},set:function(x){this.modelRotation.z=o(x)}}});p.exports=m}),36488:(p=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var y=function(){};p.exports=y}),20527:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(25305),c=t(44603),o=t(23568),r=t(35154),n=t(4703);c.register("mesh",function(e,s){e===void 0&&(e={});var a=o(e,"key",null),i=o(e,"frame",null),h=r(e,"vertices",[]),u=r(e,"uvs",[]),d=r(e,"indicies",[]),f=r(e,"containsZ",!1),v=r(e,"normals",[]),m=r(e,"colors",16777215),x=r(e,"alphas",1),g=new n(this.scene,0,0,a,i,h,u,d,f,v,m,x);return s!==void 0&&(e.add=s),l(this.scene,g,e),g})}),9225:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(4703),c=t(39429);c.register("mesh",function(o,r,n,e,s,a,i,h,u,d,f){return this.displayList.add(new l(this.scene,o,r,n,e,s,a,i,h,u,d,f))})}),29807:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(29747),c=l,o=l;c=t(48833),o=t(36488),p.exports={renderWebGL:c,renderCanvas:o}}),48833:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(91296),c=function(o,r,n,e){var s=r.faces,a=s.length;if(a!==0){n.addToRenderList(r);var i=o.pipelines.set(r.pipeline,r),h=l(r,n,e).calc;o.pipelines.preBatch(r);for(var u=i.setGameObject(r),d=i.vertexViewF32,f=i.vertexViewU32,v=i.vertexCount*i.currentShader.vertexComponentCount-1,m=r.tintFill,x=[],g=r.debugCallback,T=h.a,S=h.b,C=h.c,E=h.d,P=h.e,A=h.f,M=r.viewPosition.z,R=r.hideCCW,L=n.roundPixels,w=n.alpha*r.alpha,N=0,b=0;b<a;b++){var z=s[b];z.isInView(n,R,M,w,T,S,C,E,P,A,L)&&(i.shouldFlush(3)&&(i.flush(),u=i.setGameObject(r),v=i.vertexCount*i.currentShader.vertexComponentCount-1),v=z.load(d,f,v,u,m),N++,i.vertexCount+=3,i.currentBatch.count=i.vertexCount-i.currentBatch.start,g&&x.push(z))}r.totalFrame+=N,g&&g.call(r,r,x),o.pipelines.postBatch(r)}};p.exports=c}),28103:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(83419),c=t(31401),o=t(95643),r=t(78023),n=t(39318),e=new l({Extends:o,Mixins:[c.AlphaSingle,c.BlendMode,c.Depth,c.GetBounds,c.Mask,c.Origin,c.Pipeline,c.PostPipeline,c.ScrollFactor,c.Texture,c.Transform,c.Visible,r],initialize:function(a,i,h,u,d,f,v,m,x,g,T){o.call(this,a,"NineSlice"),this._width,this._height,this._originX=.5,this._originY=.5,this._sizeComponent=!0,this.vertices=[],this.leftWidth,this.rightWidth,this.topHeight,this.bottomHeight,this.tint=16777215,this.tintFill=!1;var S=a.textures.getFrame(u,d);this.is3Slice=!g&&!T,S&&S.scale9&&(this.is3Slice=S.is3Slice);for(var C=this.is3Slice?18:54,E=0;E<C;E++)this.vertices.push(new n);this.setPosition(i,h),this.setTexture(u,d),this.setSlices(f,v,m,x,g,T,!1),this.updateDisplayOrigin(),this.initPipeline(),this.initPostPipeline()},setSlices:function(s,a,i,h,u,d,f){i===void 0&&(i=10),h===void 0&&(h=10),u===void 0&&(u=0),d===void 0&&(d=0),f===void 0&&(f=!1);var v=this.frame,m=!1;if(this.is3Slice&&f&&u!==0&&d!==0&&(m=!0),m)console.warn("Cannot change 9 slice to 3 slice");else{if(v&&v.scale9&&!f){var x=v.data.scale9Borders,g=x.x,T=x.y;i=g,h=v.width-x.w-g,u=T,d=v.height-x.h-T,s===void 0&&(s=v.width),a===void 0&&(a=v.height)}else s===void 0&&(s=256),a===void 0&&(a=256);this._width=s,this._height=a,this.leftWidth=i,this.rightWidth=h,this.topHeight=u,this.bottomHeight=d,this.is3Slice&&(a=v.height,this._height=a,this.topHeight=a,this.bottomHeight=0),this.updateVertices(),this.updateUVs()}return this},updateUVs:function(){var s=this.leftWidth,a=this.rightWidth,i=this.topHeight,h=this.bottomHeight,u=this.frame.width,d=this.frame.height;this.updateQuadUVs(0,0,0,s/u,i/d),this.updateQuadUVs(6,s/u,0,1-a/u,i/d),this.updateQuadUVs(12,1-a/u,0,1,i/d),this.is3Slice||(this.updateQuadUVs(18,0,i/d,s/u,1-h/d),this.updateQuadUVs(24,s/u,i/d,1-a/u,1-h/d),this.updateQuadUVs(30,1-a/u,i/d,1,1-h/d),this.updateQuadUVs(36,0,1-h/d,s/u,1),this.updateQuadUVs(42,s/u,1-h/d,1-a/u,1),this.updateQuadUVs(48,1-a/u,1-h/d,1,1))},updateVertices:function(){var s=this.leftWidth,a=this.rightWidth,i=this.topHeight,h=this.bottomHeight,u=this.width,d=this.height;this.updateQuad(0,-.5,.5,-.5+s/u,.5-i/d),this.updateQuad(6,-.5+s/u,.5,.5-a/u,.5-i/d),this.updateQuad(12,.5-a/u,.5,.5,.5-i/d),this.is3Slice||(this.updateQuad(18,-.5,.5-i/d,-.5+s/u,-.5+h/d),this.updateQuad(24,-.5+s/u,.5-i/d,.5-a/u,-.5+h/d),this.updateQuad(30,.5-a/u,.5-i/d,.5,-.5+h/d),this.updateQuad(36,-.5,-.5+h/d,-.5+s/u,-.5),this.updateQuad(42,-.5+s/u,-.5+h/d,.5-a/u,-.5),this.updateQuad(48,.5-a/u,-.5+h/d,.5,-.5))},updateQuad:function(s,a,i,h,u){var d=this.width,f=this.height,v=this.originX,m=this.originY,x=this.vertices;x[s+0].resize(a,i,d,f,v,m),x[s+1].resize(a,u,d,f,v,m),x[s+2].resize(h,i,d,f,v,m),x[s+3].resize(a,u,d,f,v,m),x[s+4].resize(h,u,d,f,v,m),x[s+5].resize(h,i,d,f,v,m)},updateQuadUVs:function(s,a,i,h,u){var d=this.vertices,f=this.frame,v=f.u0,m=f.v0,x=f.u1,g=f.v1;if(v!==0||x!==1){var T=x-v;a=v+a*T,h=v+h*T}if(m!==0||g!==1){var S=g-m;i=m+i*S,u=m+u*S}d[s+0].setUVs(a,i),d[s+1].setUVs(a,u),d[s+2].setUVs(h,i),d[s+3].setUVs(a,u),d[s+4].setUVs(h,u),d[s+5].setUVs(h,i)},clearTint:function(){return this.setTint(16777215),this},setTint:function(s){return s===void 0&&(s=16777215),this.tint=s,this.tintFill=!1,this},setTintFill:function(s){return this.setTint(s),this.tintFill=!0,this},isTinted:{get:function(){return this.tint!==16777215}},width:{get:function(){return this._width},set:function(s){this._width=Math.max(s,this.leftWidth+this.rightWidth),this.updateVertices()}},height:{get:function(){return this._height},set:function(s){this.is3Slice||(this._height=Math.max(s,this.topHeight+this.bottomHeight),this.updateVertices())}},displayWidth:{get:function(){return this.scaleX*this.width},set:function(s){this.scaleX=s/this.width}},displayHeight:{get:function(){return this.scaleY*this.height},set:function(s){this.scaleY=s/this.height}},setSize:function(s,a){this.width=s,this.height=a,this.updateDisplayOrigin();var i=this.input;return i&&!i.customHitArea&&(i.hitArea.width=this.width,i.hitArea.height=this.height),this},setDisplaySize:function(s,a){return this.displayWidth=s,this.displayHeight=a,this},originX:{get:function(){return this._originX},set:function(s){this._originX=s,this.updateVertices()}},originY:{get:function(){return this._originY},set:function(s){this._originY=s,this.updateVertices()}},setOrigin:function(s,a){return s===void 0&&(s=.5),a===void 0&&(a=s),this._originX=s,this._originY=a,this.updateVertices(),this.updateDisplayOrigin()},setSizeToFrame:function(){if(this.is3Slice){var s=this.frame.height;this._height=s,this.topHeight=s,this.bottomHeight=0}return this.updateUVs(),this},preDestroy:function(){this.vertices=[]}});p.exports=e}),28279:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(25305),c=t(44603),o=t(23568),r=t(35154),n=t(28103);c.register("nineslice",function(e,s){e===void 0&&(e={});var a=o(e,"key",null),i=o(e,"frame",null),h=r(e,"width",256),u=r(e,"height",256),d=r(e,"leftWidth",10),f=r(e,"rightWidth",10),v=r(e,"topHeight",0),m=r(e,"bottomHeight",0),x=new n(this.scene,0,0,a,i,h,u,d,f,v,m);return s!==void 0&&(e.add=s),l(this.scene,x,e),x})}),47521:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(28103),c=t(39429);c.register("nineslice",function(o,r,n,e,s,a,i,h,u,d){return this.displayList.add(new l(this.scene,o,r,n,e,s,a,i,h,u,d))})}),78023:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(29747),c=l,o=l;c=t(52230),p.exports={renderWebGL:c,renderCanvas:o}}),52230:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(91296),c=t(70554),o=function(r,n,e,s){var a=n.vertices,i=a.length;if(i!==0){e.addToRenderList(n);var h=r.pipelines.set(n.pipeline,n),u=l(n,e,s,!1).calc;r.pipelines.preBatch(n);var d=h.setGameObject(n),f=h.vertexViewF32,v=h.vertexViewU32,m=h.vertexCount*h.currentShader.vertexComponentCount-1,x=e.roundPixels,g=n.tintFill,T=e.alpha*n.alpha,S=c.getTintAppendFloatAlpha(n.tint,T),C=h.vertexAvailable(),E=-1;C<i&&(E=C);for(var P=0;P<i;P++){var A=a[P];P===E&&(h.flush(),d=h.setGameObject(n),m=0),f[++m]=u.getXRound(A.vx,A.vy,x),f[++m]=u.getYRound(A.vx,A.vy,x),f[++m]=A.u,f[++m]=A.v,f[++m]=d,f[++m]=g,v[++m]=S,h.vertexCount++,h.currentBatch.count=h.vertexCount-h.currentBatch.start}r.pipelines.postBatch(n)}};p.exports=o}),76472:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(83419),c=t(44777),o=t(37589),r=t(6113),n=t(91389),e=t(90664),s=new l({Extends:c,initialize:function(i){c.call(this,i,null,!1),this.active=!1,this.easeName="Linear",this.r=[],this.g=[],this.b=[]},getMethod:function(){return this.propertyValue===null?0:9},setMethods:function(){var a=this.propertyValue,i=a,h=this.defaultEmit,u=this.defaultUpdate;if(this.method===9){this.start=a[0],this.ease=r("Linear"),this.interpolation=n("linear"),h=this.easedValueEmit,u=this.easeValueUpdate,i=a[0],this.active=!0,this.r.length=0,this.g.length=0,this.b.length=0;for(var d=0;d<a.length;d++){var f=e(a[d]);this.r.push(f.r),this.g.push(f.g),this.b.push(f.b)}}return this.onEmit=h,this.onUpdate=u,this.current=i,this},setEase:function(a){this.easeName=a,this.ease=r(a)},easedValueEmit:function(){return this.current=this.start,this.start},easeValueUpdate:function(a,i,h){var u=this.ease(h),d=this.interpolation(this.r,u),f=this.interpolation(this.g,u),v=this.interpolation(this.b,u),m=o(d,f,v);return this.current=m,m}});p.exports=s}),44777:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(30976),c=t(45319),o=t(83419),r=t(99472),n=t(6113),e=t(95540),s=t(91389),a=t(77720),i=t(15994),h=new o({initialize:function(d,f,v){v===void 0&&(v=!1),this.propertyKey=d,this.propertyValue=f,this.defaultValue=f,this.steps=0,this.counter=0,this.yoyo=!1,this.direction=0,this.start=0,this.current=0,this.end=0,this.ease=null,this.interpolation=null,this.emitOnly=v,this.onEmit=this.defaultEmit,this.onUpdate=this.defaultUpdate,this.active=!0,this.method=0,this._onEmit,this._onUpdate},loadConfig:function(u,d){u===void 0&&(u={}),d&&(this.propertyKey=d),this.propertyValue=e(u,this.propertyKey,this.defaultValue),this.method=this.getMethod(),this.setMethods(),this.emitOnly&&(this.onUpdate=this.defaultUpdate)},toJSON:function(){return JSON.stringify(this.propertyValue)},onChange:function(u){var d;switch(this.method){case 1:case 3:case 8:d=u;break;case 2:this.propertyValue.indexOf(u)>=0&&(d=u);break;case 4:var f=(this.end-this.start)/this.steps;d=a(u,f),this.counter=d;break;case 5:case 6:case 7:d=c(u,this.start,this.end);break;case 9:d=this.start[0];break}return this.current=d,this},getMethod:function(){var u=this.propertyValue;if(u===null)return 0;var d=typeof u;if(d==="number")return 1;if(Array.isArray(u))return 2;if(d==="function")return 3;if(d==="object"){if(this.hasBoth(u,"start","end"))return this.has(u,"steps")?4:5;if(this.hasBoth(u,"min","max"))return 6;if(this.has(u,"random"))return 7;if(this.hasEither(u,"onEmit","onUpdate"))return 8;if(this.hasEither(u,"values","interpolation"))return 9}return 0},setMethods:function(){var u=this.propertyValue,d=u,f=this.defaultEmit,v=this.defaultUpdate;switch(this.method){case 1:f=this.staticValueEmit;break;case 2:f=this.randomStaticValueEmit,d=u[0];break;case 3:this._onEmit=u,f=this.proxyEmit,d=this.defaultValue;break;case 4:this.start=u.start,this.end=u.end,this.steps=u.steps,this.counter=this.start,this.yoyo=this.has(u,"yoyo")?u.yoyo:!1,this.direction=0,f=this.steppedEmit,d=this.start;break;case 5:this.start=u.start,this.end=u.end;var m=this.has(u,"ease")?u.ease:"Linear";this.ease=n(m,u.easeParams),f=this.has(u,"random")&&u.random?this.randomRangedValueEmit:this.easedValueEmit,v=this.easeValueUpdate,d=this.start;break;case 6:this.start=u.min,this.end=u.max,f=this.has(u,"int")&&u.int?this.randomRangedIntEmit:this.randomRangedValueEmit,d=this.start;break;case 7:var x=u.random;Array.isArray(x)&&(this.start=x[0],this.end=x[1]),f=this.randomRangedIntEmit,d=this.start;break;case 8:this._onEmit=this.has(u,"onEmit")?u.onEmit:this.defaultEmit,this._onUpdate=this.has(u,"onUpdate")?u.onUpdate:this.defaultUpdate,f=this.proxyEmit,v=this.proxyUpdate,d=this.defaultValue;break;case 9:this.start=u.values;var g=this.has(u,"ease")?u.ease:"Linear";this.ease=n(g,u.easeParams),this.interpolation=s(u.interpolation),f=this.easedValueEmit,v=this.easeValueUpdate,d=this.start[0];break}return this.onEmit=f,this.onUpdate=v,this.current=d,this},has:function(u,d){return u.hasOwnProperty(d)},hasBoth:function(u,d,f){return u.hasOwnProperty(d)&&u.hasOwnProperty(f)},hasEither:function(u,d,f){return u.hasOwnProperty(d)||u.hasOwnProperty(f)},defaultEmit:function(){return this.defaultValue},defaultUpdate:function(u,d,f,v){return v},proxyEmit:function(u,d,f){var v=this._onEmit(u,d,f);return this.current=v,v},proxyUpdate:function(u,d,f,v){var m=this._onUpdate(u,d,f,v);return this.current=m,m},staticValueEmit:function(){return this.current},staticValueUpdate:function(){return this.current},randomStaticValueEmit:function(){var u=Math.floor(Math.random()*this.propertyValue.length);return this.current=this.propertyValue[u],this.current},randomRangedValueEmit:function(u,d){var f=r(this.start,this.end);return u&&u.data[d]&&(u.data[d].min=f,u.data[d].max=this.end),this.current=f,f},randomRangedIntEmit:function(u,d){var f=l(this.start,this.end);return u&&u.data[d]&&(u.data[d].min=f,u.data[d].max=this.end),this.current=f,f},steppedEmit:function(){var u=this.counter,d=u,f=(this.end-this.start)/this.steps;if(this.yoyo){var v;this.direction===0?(d+=f,d>=this.end&&(v=d-this.end,d=this.end-v,this.direction=1)):(d-=f,d<=this.start&&(v=this.start-d,d=this.start+v,this.direction=0)),this.counter=d}else this.counter=i(d+f,this.start,this.end);return this.current=u,u},easedValueEmit:function(u,d){if(u&&u.data[d]){var f=u.data[d];f.min=this.start,f.max=this.end}return this.current=this.start,this.start},easeValueUpdate:function(u,d,f){var v=u.data[d],m,x=this.ease(f);return this.interpolation?m=this.interpolation(this.start,x):m=(v.max-v.min)*x+v.min,this.current=m,m},destroy:function(){this.propertyValue=null,this.defaultValue=null,this.ease=null,this.interpolation=null,this._onEmit=null,this._onUpdate=null}});p.exports=h}),24502:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(83419),c=t(95540),o=t(20286),r=new l({Extends:o,initialize:function(e,s,a,i,h){if(typeof e=="object"){var u=e;e=c(u,"x",0),s=c(u,"y",0),a=c(u,"power",0),i=c(u,"epsilon",100),h=c(u,"gravity",50)}else e===void 0&&(e=0),s===void 0&&(s=0),a===void 0&&(a=0),i===void 0&&(i=100),h===void 0&&(h=50);o.call(this,e,s,!0),this._gravity=h,this._power=a*h,this._epsilon=i*i},update:function(n,e){var s=this.x-n.x,a=this.y-n.y,i=s*s+a*a;if(i!==0){var h=Math.sqrt(i);i<this._epsilon&&(i=this._epsilon);var u=this._power*e/(i*h)*100;n.velocityX+=s*u,n.velocityY+=a*u}},epsilon:{get:function(){return Math.sqrt(this._epsilon)},set:function(n){this._epsilon=n*n}},power:{get:function(){return this._power/this._gravity},set:function(n){this._power=n*this._gravity}},gravity:{get:function(){return this._gravity},set:function(n){var e=this.power;this._gravity=n,this.power=e}}});p.exports=r}),56480:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(9674),c=t(45319),o=t(83419),r=t(39506),n=t(87841),e=t(11520),s=t(26099),a=new o({initialize:function(h){this.emitter=h,this.texture=null,this.frame=null,this.x=0,this.y=0,this.worldPosition=new s,this.velocityX=0,this.velocityY=0,this.accelerationX=0,this.accelerationY=0,this.maxVelocityX=1e4,this.maxVelocityY=1e4,this.bounce=0,this.scaleX=1,this.scaleY=1,this.alpha=1,this.angle=0,this.rotation=0,this.tint=16777215,this.life=1e3,this.lifeCurrent=1e3,this.delayCurrent=0,this.holdCurrent=0,this.lifeT=0,this.data={tint:{min:16777215,max:16777215},alpha:{min:1,max:1},rotate:{min:0,max:0},scaleX:{min:1,max:1},scaleY:{min:1,max:1},x:{min:0,max:0},y:{min:0,max:0},accelerationX:{min:0,max:0},accelerationY:{min:0,max:0},maxVelocityX:{min:0,max:0},maxVelocityY:{min:0,max:0},moveToX:{min:0,max:0},moveToY:{min:0,max:0},bounce:{min:0,max:0}},this.isCropped=!1,this.scene=h.scene,this.anims=null,this.emitter.anims.length>0&&(this.anims=new l(this)),this.bounds=new n},emit:function(i,h,u,d,f,v){return this.emitter.emit(i,h,u,d,f,v)},isAlive:function(){return this.lifeCurrent>0},kill:function(){this.lifeCurrent=0},setPosition:function(i,h){i===void 0&&(i=0),h===void 0&&(h=0),this.x=i,this.y=h},fire:function(i,h){var u=this.emitter,d=u.ops,f=u.getAnim();if(f?this.anims.play(f):(this.frame=u.getFrame(),this.texture=this.frame.texture),!this.frame)throw new Error("Particle has no texture frame");if(u.getEmitZone(this),i===void 0?this.x+=d.x.onEmit(this,"x"):d.x.steps>0?this.x+=i+d.x.onEmit(this,"x"):this.x+=i,h===void 0?this.y+=d.y.onEmit(this,"y"):d.y.steps>0?this.y+=h+d.y.onEmit(this,"y"):this.y+=h,this.life=d.lifespan.onEmit(this,"lifespan"),this.lifeCurrent=this.life,this.lifeT=0,this.delayCurrent=d.delay.onEmit(this,"delay"),this.holdCurrent=d.hold.onEmit(this,"hold"),this.scaleX=d.scaleX.onEmit(this,"scaleX"),this.scaleY=d.scaleY.active?d.scaleY.onEmit(this,"scaleY"):this.scaleX,this.angle=d.rotate.onEmit(this,"rotate"),this.rotation=r(this.angle),u.worldMatrix.transformPoint(this.x,this.y,this.worldPosition),this.delayCurrent===0&&u.getDeathZone(this))return this.lifeCurrent=0,!1;var v=d.speedX.onEmit(this,"speedX"),m=d.speedY.active?d.speedY.onEmit(this,"speedY"):v;if(u.radial){var x=r(d.angle.onEmit(this,"angle"));this.velocityX=Math.cos(x)*Math.abs(v),this.velocityY=Math.sin(x)*Math.abs(m)}else if(u.moveTo){var g=d.moveToX.onEmit(this,"moveToX"),T=d.moveToY.onEmit(this,"moveToY"),S=this.life/1e3;this.velocityX=(g-this.x)/S,this.velocityY=(T-this.y)/S}else this.velocityX=v,this.velocityY=m;return u.acceleration&&(this.accelerationX=d.accelerationX.onEmit(this,"accelerationX"),this.accelerationY=d.accelerationY.onEmit(this,"accelerationY")),this.maxVelocityX=d.maxVelocityX.onEmit(this,"maxVelocityX"),this.maxVelocityY=d.maxVelocityY.onEmit(this,"maxVelocityY"),this.bounce=d.bounce.onEmit(this,"bounce"),this.alpha=d.alpha.onEmit(this,"alpha"),d.color.active?this.tint=d.color.onEmit(this,"tint"):this.tint=d.tint.onEmit(this,"tint"),!0},update:function(i,h,u){if(this.lifeCurrent<=0)return this.holdCurrent>0?(this.holdCurrent-=i,this.holdCurrent<=0):!0;if(this.delayCurrent>0)return this.delayCurrent-=i,!1;this.anims&&this.anims.update(0,i);var d=this.emitter,f=d.ops,v=1-this.lifeCurrent/this.life;if(this.lifeT=v,this.x=f.x.onUpdate(this,"x",v,this.x),this.y=f.y.onUpdate(this,"y",v,this.y),d.moveTo){var m=f.moveToX.onUpdate(this,"moveToX",v,d.moveToX),x=f.moveToY.onUpdate(this,"moveToY",v,d.moveToY),g=this.lifeCurrent/1e3;this.velocityX=(m-this.x)/g,this.velocityY=(x-this.y)/g}return this.computeVelocity(d,i,h,u,v),this.scaleX=f.scaleX.onUpdate(this,"scaleX",v,this.scaleX),f.scaleY.active?this.scaleY=f.scaleY.onUpdate(this,"scaleY",v,this.scaleY):this.scaleY=this.scaleX,this.angle=f.rotate.onUpdate(this,"rotate",v,this.angle),this.rotation=r(this.angle),d.getDeathZone(this)?(this.lifeCurrent=0,!0):(this.alpha=c(f.alpha.onUpdate(this,"alpha",v,this.alpha),0,1),f.color.active?this.tint=f.color.onUpdate(this,"color",v,this.tint):this.tint=f.tint.onUpdate(this,"tint",v,this.tint),this.lifeCurrent-=i,this.lifeCurrent<=0&&this.holdCurrent<=0)},computeVelocity:function(i,h,u,d,f){var v=i.ops,m=this.velocityX,x=this.velocityY,g=v.accelerationX.onUpdate(this,"accelerationX",f,this.accelerationX),T=v.accelerationY.onUpdate(this,"accelerationY",f,this.accelerationY),S=v.maxVelocityX.onUpdate(this,"maxVelocityX",f,this.maxVelocityX),C=v.maxVelocityY.onUpdate(this,"maxVelocityY",f,this.maxVelocityY);this.bounce=v.bounce.onUpdate(this,"bounce",f,this.bounce),m+=i.gravityX*u+g*u,x+=i.gravityY*u+T*u,m=c(m,-S,S),x=c(x,-C,C),this.velocityX=m,this.velocityY=x,this.x+=m*u,this.y+=x*u,i.worldMatrix.transformPoint(this.x,this.y,this.worldPosition);for(var E=0;E<d.length;E++){var P=d[E];P.active&&P.update(this,h,u,f)}},setSizeToFrame:function(){},getBounds:function(i){i===void 0&&(i=this.emitter.getWorldTransformMatrix());var h=Math.abs(i.scaleX)*this.scaleX,u=Math.abs(i.scaleY)*this.scaleY,d=this.x,f=this.y,v=this.rotation,m=this.frame.width*h/2,x=this.frame.height*u/2,g=this.bounds,T=new s(d-m,f-x),S=new s(d+m,f-x),C=new s(d-m,f+x),E=new s(d+m,f+x);return v!==0&&(e(T,d,f,v),e(S,d,f,v),e(C,d,f,v),e(E,d,f,v)),i.transformPoint(T.x,T.y,T),i.transformPoint(S.x,S.y,S),i.transformPoint(C.x,C.y,C),i.transformPoint(E.x,E.y,E),g.x=Math.min(T.x,S.x,C.x,E.x),g.y=Math.min(T.y,S.y,C.y,E.y),g.width=Math.max(T.x,S.x,C.x,E.x)-g.x,g.height=Math.max(T.y,S.y,C.y,E.y)-g.y,g},destroy:function(){this.anims&&this.anims.destroy(),this.anims=null,this.emitter=null,this.texture=null,this.frame=null,this.scene=null}});p.exports=a}),69601:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(83419),c=t(20286),o=t(87841),r=new l({Extends:c,initialize:function(e,s,a,i,h,u,d,f){h===void 0&&(h=!0),u===void 0&&(u=!0),d===void 0&&(d=!0),f===void 0&&(f=!0),c.call(this,e,s,!0),this.bounds=new o(e,s,a,i),this.collideLeft=h,this.collideRight=u,this.collideTop=d,this.collideBottom=f},update:function(n){var e=this.bounds,s=-n.bounce,a=n.worldPosition;a.x<e.x&&this.collideLeft?(n.x+=e.x-a.x,n.velocityX*=s):a.x>e.right&&this.collideRight&&(n.x-=a.x-e.right,n.velocityX*=s),a.y<e.y&&this.collideTop?(n.y+=e.y-a.y,n.velocityY*=s):a.y>e.bottom&&this.collideBottom&&(n.y-=a.y-e.bottom,n.velocityY*=s)}});p.exports=r}),31600:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(83419),c=t(31401),o=t(53774),r=t(43459),n=t(26388),e=t(19909),s=t(76472),a=t(44777),i=t(20696),h=t(95643),u=t(95540),d=t(26546),f=t(24502),v=t(69036),m=t(1985),x=t(97022),g=t(86091),T=t(73162),S=t(20074),C=t(269),E=t(56480),P=t(69601),A=t(68875),M=t(87841),R=t(59996),L=t(72905),w=t(90668),N=t(19186),b=t(61340),z=t(26099),D=t(15994),B=["active","advance","blendMode","colorEase","deathCallback","deathCallbackScope","duration","emitCallback","emitCallbackScope","follow","frequency","gravityX","gravityY","maxAliveParticles","maxParticles","name","emitting","particleBringToTop","particleClass","radial","sortCallback","sortOrderAsc","sortProperty","stopAfter","tintFill","timeScale","trackVisible","visible"],F=["accelerationX","accelerationY","alpha","angle","bounce","color","delay","hold","lifespan","maxVelocityX","maxVelocityY","moveToX","moveToY","quantity","rotate","scaleX","scaleY","speedX","speedY","tint","x","y"],U=new l({Extends:h,Mixins:[c.AlphaSingle,c.BlendMode,c.Depth,c.Mask,c.Pipeline,c.PostPipeline,c.ScrollFactor,c.Texture,c.Transform,c.Visible,w],initialize:function(X,H,Z,J,$){h.call(this,X,"ParticleEmitter"),this.particleClass=E,this.config=null,this.ops={accelerationX:new a("accelerationX",0),accelerationY:new a("accelerationY",0),alpha:new a("alpha",1),angle:new a("angle",{min:0,max:360},!0),bounce:new a("bounce",0),color:new s("color"),delay:new a("delay",0,!0),hold:new a("hold",0,!0),lifespan:new a("lifespan",1e3,!0),maxVelocityX:new a("maxVelocityX",1e4),maxVelocityY:new a("maxVelocityY",1e4),moveToX:new a("moveToX",0),moveToY:new a("moveToY",0),quantity:new a("quantity",1,!0),rotate:new a("rotate",0),scaleX:new a("scaleX",1),scaleY:new a("scaleY",1),speedX:new a("speedX",0,!0),speedY:new a("speedY",0,!0),tint:new a("tint",16777215),x:new a("x",0),y:new a("y",0)},this.radial=!0,this.gravityX=0,this.gravityY=0,this.acceleration=!1,this.moveTo=!1,this.emitCallback=null,this.emitCallbackScope=null,this.deathCallback=null,this.deathCallbackScope=null,this.maxParticles=0,this.maxAliveParticles=0,this.stopAfter=0,this.duration=0,this.frequency=0,this.emitting=!0,this.particleBringToTop=!0,this.timeScale=1,this.emitZones=[],this.deathZones=[],this.viewBounds=null,this.follow=null,this.followOffset=new z,this.trackVisible=!1,this.frames=[],this.randomFrame=!0,this.frameQuantity=1,this.anims=[],this.randomAnim=!0,this.animQuantity=1,this.dead=[],this.alive=[],this.counters=new Float32Array(10),this.skipping=!1,this.worldMatrix=new b,this.sortProperty="",this.sortOrderAsc=!0,this.sortCallback=this.depthSortCallback,this.processors=new T(this),this.tintFill=!1,this.initPipeline(),this.initPostPipeline(),this.setPosition(H,Z),this.setTexture(J),$&&this.setConfig($)},addedToScene:function(){this.scene.sys.updateList.add(this)},removedFromScene:function(){this.scene.sys.updateList.remove(this)},setConfig:function(O){if(!O)return this;this.config=O;var X=0,H="",Z=this.ops;for(X=0;X<F.length;X++)H=F[X],Z[H].loadConfig(O);for(X=0;X<B.length;X++)H=B[X],x(O,H)&&(this[H]=u(O,H));if(this.acceleration=this.accelerationX!==0||this.accelerationY!==0,this.moveTo=v(O,["moveToX","moveToY"]),x(O,"speed")&&(Z.speedX.loadConfig(O,"speed"),Z.speedY.active=!1),(m(O,["speedX","speedY"])||this.moveTo)&&(this.radial=!1),x(O,"scale")&&(Z.scaleX.loadConfig(O,"scale"),Z.scaleY.active=!1),x(O,"callbackScope")){var J=u(O,"callbackScope",null);this.emitCallbackScope=J,this.deathCallbackScope=J}if(x(O,"emitZone")&&this.addEmitZone(O.emitZone),x(O,"deathZone")&&this.addDeathZone(O.deathZone),x(O,"bounds")){var $=this.addParticleBounds(O.bounds);$.collideLeft=u(O,"collideLeft",!0),$.collideRight=u(O,"collideRight",!0),$.collideTop=u(O,"collideTop",!0),$.collideBottom=u(O,"collideBottom",!0)}return x(O,"followOffset")&&this.followOffset.setFromObject(u(O,"followOffset",0)),x(O,"texture")&&this.setTexture(O.texture),x(O,"frame")?this.setEmitterFrame(O.frame):x(O,"anim")&&this.setAnim(O.anim),x(O,"reserve")&&this.reserve(O.reserve),x(O,"advance")&&this.fastForward(O.advance),this.resetCounters(this.frequency,this.emitting),this.emitting&&this.emit(i.START,this),this},updateConfig:function(O){return O&&(this.config?this.setConfig(C(this.config,O)):this.setConfig(O)),this},toJSON:function(){var O=o(this),X=0,H="";for(X=0;X<B.length;X++)H=B[X],O[H]=this[H];var Z=this.ops;for(X=0;X<F.length;X++)H=F[X],Z[H]&&(O[H]=Z[H].toJSON());return Z.speedY.active||(delete O.speedX,O.speed=Z.speedX.toJSON()),this.scaleX===this.scaleY&&(delete O.scaleX,delete O.scaleY,O.scale=Z.scaleX.toJSON()),O},resetCounters:function(O,X){var H=this.counters;H.fill(0),H[0]=O,X&&(H[5]=1)},startFollow:function(O,X,H,Z){return X===void 0&&(X=0),H===void 0&&(H=0),Z===void 0&&(Z=!1),this.follow=O,this.followOffset.set(X,H),this.trackVisible=Z,this},stopFollow:function(){return this.follow=null,this.followOffset.set(0,0),this.trackVisible=!1,this},getFrame:function(){var O=this.frames,X=O.length,H;return X===1?H=O[0]:this.randomFrame?H=d(O):(H=O[this.currentFrame],this.frameCounter++,this.frameCounter===this.frameQuantity&&(this.frameCounter=0,this.currentFrame++,this.currentFrame===X&&(this.currentFrame=0))),this.texture.get(H)},setEmitterFrame:function(O,X,H){X===void 0&&(X=!0),H===void 0&&(H=1),this.randomFrame=X,this.frameQuantity=H,this.currentFrame=0;var Z=typeof O;if(this.frames.length=0,Array.isArray(O))this.frames=this.frames.concat(O);else if(Z==="string"||Z==="number")this.frames.push(O);else if(Z==="object"){var J=O;O=u(J,"frames",null),O&&(this.frames=this.frames.concat(O));var $=u(J,"cycle",!1);this.randomFrame=!$,this.frameQuantity=u(J,"quantity",H)}return this.frames.length===1&&(this.frameQuantity=1,this.randomFrame=!1),this},getAnim:function(){var O=this.anims,X=O.length;if(X===0)return null;if(X===1)return O[0];if(this.randomAnim)return d(O);var H=O[this.currentAnim];return this.animCounter++,this.animCounter>=this.animQuantity&&(this.animCounter=0,this.currentAnim=D(this.currentAnim+1,0,X)),H},setAnim:function(O,X,H){X===void 0&&(X=!0),H===void 0&&(H=1),this.randomAnim=X,this.animQuantity=H,this.currentAnim=0;var Z=typeof O;if(this.anims.length=0,Array.isArray(O))this.anims=this.anims.concat(O);else if(Z==="string")this.anims.push(O);else if(Z==="object"){var J=O;O=u(J,"anims",null),O&&(this.anims=this.anims.concat(O));var $=u(J,"cycle",!1);this.randomAnim=!$,this.animQuantity=u(J,"quantity",H)}return this.anims.length===1&&(this.animQuantity=1,this.randomAnim=!1),this},setRadial:function(O){return O===void 0&&(O=!0),this.radial=O,this},addParticleBounds:function(O,X,H,Z,J,$,Q,k){if(typeof O=="object"){var j=O;O=j.x,X=j.y,H=x(j,"w")?j.w:j.width,Z=x(j,"h")?j.h:j.height}return this.addParticleProcessor(new P(O,X,H,Z,J,$,Q,k))},setParticleSpeed:function(O,X){return X===void 0&&(X=O),this.ops.speedX.onChange(O),O===X?this.ops.speedY.active=!1:this.ops.speedY.onChange(X),this.radial=!0,this},setParticleScale:function(O,X){return O===void 0&&(O=1),X===void 0&&(X=O),this.ops.scaleX.onChange(O),this.ops.scaleY.onChange(X),this},setParticleGravity:function(O,X){return this.gravityX=O,this.gravityY=X,this},setParticleAlpha:function(O){return this.ops.alpha.onChange(O),this},setParticleTint:function(O){return this.ops.tint.onChange(O),this},setEmitterAngle:function(O){return this.ops.angle.onChange(O),this},setParticleLifespan:function(O){return this.ops.lifespan.onChange(O),this},setQuantity:function(O){return this.quantity=O,this},setFrequency:function(O,X){return this.frequency=O,this.flowCounter=O>0?O:0,X&&(this.quantity=X),this},addDeathZone:function(O){Array.isArray(O)||(O=[O]);for(var X,H=[],Z=0;Z<O.length;Z++)if(X=O[Z],X instanceof n)H.push(X);else if(typeof X.contains=="function")X=new n(X,!0),H.push(X);else{var J=u(X,"type","onEnter"),$=u(X,"source",null);if($&&typeof $.contains=="function"){var Q=J==="onEnter";X=new n($,Q),H.push(X)}}return this.deathZones=this.deathZones.concat(H),H},removeDeathZone:function(O){return L(this.deathZones,O),this},clearDeathZones:function(){return this.deathZones.length=0,this},addEmitZone:function(O){Array.isArray(O)||(O=[O]);for(var X,H=[],Z=0;Z<O.length;Z++)if(X=O[Z],X instanceof A||X instanceof e)H.push(X);else{var J=u(X,"source",null);if(J){var $=u(X,"type","random");if($==="random"&&typeof J.getRandomPoint=="function")X=new A(J),H.push(X);else if($==="edge"&&typeof J.getPoints=="function"){var Q=u(X,"quantity",1),k=u(X,"stepRate",0),j=u(X,"yoyo",!1),_=u(X,"seamless",!0),et=u(X,"total",-1);X=new e(J,Q,k,j,_,et),H.push(X)}}}return this.emitZones=this.emitZones.concat(H),H},removeEmitZone:function(O){return L(this.emitZones,O),this.zoneIndex=0,this},clearEmitZones:function(){return this.emitZones.length=0,this.zoneIndex=0,this},getEmitZone:function(O){var X=this.emitZones,H=X.length;if(H!==0){var Z=X[this.zoneIndex];Z.getPoint(O),Z.total>-1&&(this.zoneTotal++,this.zoneTotal===Z.total&&(this.zoneTotal=0,this.zoneIndex++,this.zoneIndex===H&&(this.zoneIndex=0)))}},getDeathZone:function(O){for(var X=this.deathZones,H=0;H<X.length;H++){var Z=X[H];if(Z.willKill(O))return this.emit(i.DEATH_ZONE,this,O,Z),!0}return!1},setEmitZone:function(O){var X;return isFinite(O)?X=O:X=this.emitZones.indexOf(O),X>=0&&(this.zoneIndex=X),this},addParticleProcessor:function(O){return this.processors.exists(O)||(O.emitter&&O.emitter.removeParticleProcessor(O),this.processors.add(O),O.emitter=this),O},removeParticleProcessor:function(O){return this.processors.exists(O)&&(this.processors.remove(O,!0),O.emitter=null),O},getProcessors:function(){return this.processors.getAll("active",!0)},createGravityWell:function(O){return this.addParticleProcessor(new f(O))},reserve:function(O){var X=this.dead;if(this.maxParticles>0){var H=this.getParticleCount();H+O>this.maxParticles&&(O=this.maxParticles-(H+O))}for(var Z=0;Z<O;Z++)X.push(new this.particleClass(this));return this},getAliveParticleCount:function(){return this.alive.length},getDeadParticleCount:function(){return this.dead.length},getParticleCount:function(){return this.getAliveParticleCount()+this.getDeadParticleCount()},atLimit:function(){return this.maxParticles>0&&this.getParticleCount()>=this.maxParticles?!0:this.maxAliveParticles>0&&this.getAliveParticleCount()>=this.maxAliveParticles},onParticleEmit:function(O,X){return O===void 0?(this.emitCallback=null,this.emitCallbackScope=null):typeof O=="function"&&(this.emitCallback=O,X&&(this.emitCallbackScope=X)),this},onParticleDeath:function(O,X){return O===void 0?(this.deathCallback=null,this.deathCallbackScope=null):typeof O=="function"&&(this.deathCallback=O,X&&(this.deathCallbackScope=X)),this},killAll:function(){for(var O=this.dead,X=this.alive;X.length>0;)O.push(X.pop());return this},forEachAlive:function(O,X){for(var H=this.alive,Z=H.length,J=0;J<Z;J++)O.call(X,H[J],this);return this},forEachDead:function(O,X){for(var H=this.dead,Z=H.length,J=0;J<Z;J++)O.call(X,H[J],this);return this},start:function(O,X){return O===void 0&&(O=0),this.emitting||(O>0&&this.fastForward(O),this.emitting=!0,this.resetCounters(this.frequency,!0),X!==void 0&&(this.duration=Math.abs(X)),this.emit(i.START,this)),this},stop:function(O){return O===void 0&&(O=!1),this.emitting&&(this.emitting=!1,O&&this.killAll(),this.emit(i.STOP,this)),this},pause:function(){return this.active=!1,this},resume:function(){return this.active=!0,this},setSortProperty:function(O,X){return O===void 0&&(O=""),X===void 0&&(X=this.true),this.sortProperty=O,this.sortOrderAsc=X,this.sortCallback=this.depthSortCallback,this},setSortCallback:function(O){return this.sortProperty!==""?O=this.depthSortCallback:O=null,this.sortCallback=O,this},depthSort:function(){return N(this.alive,this.sortCallback.bind(this)),this},depthSortCallback:function(O,X){var H=this.sortProperty;return this.sortOrderAsc?O[H]-X[H]:X[H]-O[H]},flow:function(O,X,H){return X===void 0&&(X=1),this.emitting=!1,this.frequency=O,this.quantity=X,H!==void 0&&(this.stopAfter=H),this.start()},explode:function(O,X,H){this.frequency=-1,this.resetCounters(-1,!0);var Z=this.emitParticle(O,X,H);return this.emit(i.EXPLODE,this,Z),Z},emitParticleAt:function(O,X,H){return this.emitParticle(H,O,X)},emitParticle:function(O,X,H){if(!this.atLimit()){O===void 0&&(O=this.ops.quantity.onEmit());for(var Z=this.dead,J=this.stopAfter,$=this.follow?this.follow.x+this.followOffset.x:X,Q=this.follow?this.follow.y+this.followOffset.y:H,k=0;k<O;k++){var j=Z.pop();if(j||(j=new this.particleClass(this)),j.fire($,Q)?(this.particleBringToTop?this.alive.push(j):this.alive.unshift(j),this.emitCallback&&this.emitCallback.call(this.emitCallbackScope,j,this)):this.dead.push(j),J>0&&(this.stopCounter++,this.stopCounter>=J)||this.atLimit())break}return j}},fastForward:function(O,X){X===void 0&&(X=1e3/60);var H=0;for(this.skipping=!0;H<Math.abs(O);)this.preUpdate(0,X),H+=X;return this.skipping=!1,this},preUpdate:function(O,X){X*=this.timeScale;var H=X/1e3;this.trackVisible&&(this.visible=this.follow.visible),this.getWorldTransformMatrix(this.worldMatrix);var Z=this.getProcessors(),J=this.alive,$=this.dead,Q=0,k=[],j=J.length;for(Q=0;Q<j;Q++){var _=J[Q];_.update(X,H,Z)&&k.push({index:Q,particle:_})}if(j=k.length,j>0){var et=this.deathCallback,q=this.deathCallbackScope;for(Q=j-1;Q>=0;Q--){var nt=k[Q];J.splice(nt.index,1),$.push(nt.particle),et&&et.call(q,nt.particle),nt.particle.setPosition()}}if(!this.emitting&&!this.skipping){this.completeFlag===1&&J.length===0&&(this.completeFlag=0,this.emit(i.COMPLETE,this));return}if(this.frequency===0)this.emitParticle();else if(this.frequency>0)for(this.flowCounter-=X;this.flowCounter<=0;)this.emitParticle(),this.flowCounter+=this.frequency;this.skipping||(this.duration>0&&(this.elapsed+=X,this.elapsed>=this.duration&&this.stop()),this.stopAfter>0&&this.stopCounter>=this.stopAfter&&this.stop())},overlap:function(O){for(var X=this.getWorldTransformMatrix(),H=this.alive,Z=H.length,J=[],$=0;$<Z;$++){var Q=H[$];R(O,Q.getBounds(X))&&J.push(Q)}return J},getBounds:function(O,X,H,Z){O===void 0&&(O=0),X===void 0&&(X=0),H===void 0&&(H=1e3/60),Z===void 0&&(Z=new M);var J=this.getWorldTransformMatrix(),$,Q,k=this.alive,j=!1;if(Z.setTo(0,0,0,0),X>0){var _=0;for(this.skipping=!0;_<Math.abs(X);){for(this.preUpdate(0,H),$=0;$<k.length;$++)Q=k[$].getBounds(J),j?S(Z,Q):(j=!0,r(Q,Z));_+=H}this.skipping=!1}else for($=0;$<k.length;$++)Q=k[$].getBounds(J),j?S(Z,Q):(j=!0,r(Q,Z));return O>0&&g(Z,O,O),Z},createEmitter:function(){throw new Error("createEmitter removed. See ParticleEmitter docs for info")},particleX:{get:function(){return this.ops.x.current},set:function(O){this.ops.x.onChange(O)}},particleY:{get:function(){return this.ops.y.current},set:function(O){this.ops.y.onChange(O)}},accelerationX:{get:function(){return this.ops.accelerationX.current},set:function(O){this.ops.accelerationX.onChange(O)}},accelerationY:{get:function(){return this.ops.accelerationY.current},set:function(O){this.ops.accelerationY.onChange(O)}},maxVelocityX:{get:function(){return this.ops.maxVelocityX.current},set:function(O){this.ops.maxVelocityX.onChange(O)}},maxVelocityY:{get:function(){return this.ops.maxVelocityY.current},set:function(O){this.ops.maxVelocityY.onChange(O)}},speed:{get:function(){return this.ops.speedX.current},set:function(O){this.ops.speedX.onChange(O),this.ops.speedY.onChange(O)}},speedX:{get:function(){return this.ops.speedX.current},set:function(O){this.ops.speedX.onChange(O)}},speedY:{get:function(){return this.ops.speedY.current},set:function(O){this.ops.speedY.onChange(O)}},moveToX:{get:function(){return this.ops.moveToX.current},set:function(O){this.ops.moveToX.onChange(O)}},moveToY:{get:function(){return this.ops.moveToY.current},set:function(O){this.ops.moveToY.onChange(O)}},bounce:{get:function(){return this.ops.bounce.current},set:function(O){this.ops.bounce.onChange(O)}},particleScaleX:{get:function(){return this.ops.scaleX.current},set:function(O){this.ops.scaleX.onChange(O)}},particleScaleY:{get:function(){return this.ops.scaleY.current},set:function(O){this.ops.scaleY.onChange(O)}},particleColor:{get:function(){return this.ops.color.current},set:function(O){this.ops.color.onChange(O)}},colorEase:{get:function(){return this.ops.color.easeName},set:function(O){this.ops.color.setEase(O)}},particleTint:{get:function(){return this.ops.tint.current},set:function(O){this.ops.tint.onChange(O)}},particleAlpha:{get:function(){return this.ops.alpha.current},set:function(O){this.ops.alpha.onChange(O)}},lifespan:{get:function(){return this.ops.lifespan.current},set:function(O){this.ops.lifespan.onChange(O)}},particleAngle:{get:function(){return this.ops.angle.current},set:function(O){this.ops.angle.onChange(O)}},particleRotate:{get:function(){return this.ops.rotate.current},set:function(O){this.ops.rotate.onChange(O)}},quantity:{get:function(){return this.ops.quantity.current},set:function(O){this.ops.quantity.onChange(O)}},delay:{get:function(){return this.ops.delay.current},set:function(O){this.ops.delay.onChange(O)}},hold:{get:function(){return this.ops.hold.current},set:function(O){this.ops.hold.onChange(O)}},flowCounter:{get:function(){return this.counters[0]},set:function(O){this.counters[0]=O}},frameCounter:{get:function(){return this.counters[1]},set:function(O){this.counters[1]=O}},animCounter:{get:function(){return this.counters[2]},set:function(O){this.counters[2]=O}},elapsed:{get:function(){return this.counters[3]},set:function(O){this.counters[3]=O}},stopCounter:{get:function(){return this.counters[4]},set:function(O){this.counters[4]=O}},completeFlag:{get:function(){return this.counters[5]},set:function(O){this.counters[5]=O}},zoneIndex:{get:function(){return this.counters[6]},set:function(O){this.counters[6]=O}},zoneTotal:{get:function(){return this.counters[7]},set:function(O){this.counters[7]=O}},currentFrame:{get:function(){return this.counters[8]},set:function(O){this.counters[8]=O}},currentAnim:{get:function(){return this.counters[9]},set:function(O){this.counters[9]=O}},preDestroy:function(){this.texture=null,this.frames=null,this.anims=null,this.emitCallback=null,this.emitCallbackScope=null,this.deathCallback=null,this.deathCallbackScope=null,this.emitZones=null,this.deathZones=null,this.bounds=null,this.follow=null,this.counters=null;var O,X=this.ops;for(O=0;O<F.length;O++){var H=F[O];X[H].destroy()}for(O=0;O<this.alive.length;O++)this.alive[O].destroy();for(O=0;O<this.dead.length;O++)this.dead[O].destroy();this.ops=null,this.alive=[],this.dead=[],this.worldMatrix.destroy()}});p.exports=U}),9871:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(59996),c=t(61340),o=new c,r=new c,n=new c,e=new c,s=function(a,i,h,u){var d=o,f=r,v=n,m=e;u?(m.loadIdentity(),m.multiply(u),m.translate(i.x,i.y),m.rotate(i.rotation),m.scale(i.scaleX,i.scaleY)):m.applyITRS(i.x,i.y,i.rotation,i.scaleX,i.scaleY);var x=a.currentContext,g=h.roundPixels,T=h.alpha,S=i.alpha,C=i.alive,E=C.length,P=i.viewBounds;if(!(!i.visible||E===0||P&&!l(P,h.worldView))){i.sortCallback&&i.depthSort(),h.addToRenderList(i);var A=i.scrollFactorX,M=i.scrollFactorY;x.save(),x.globalCompositeOperation=a.blendModes[i.blendMode];for(var R=0;R<E;R++){var L=C[R],w=L.alpha*S*T;if(!(w<=0||L.scaleX===0||L.scaleY===0)){v.applyITRS(L.x,L.y,L.rotation,L.scaleX,L.scaleY),d.copyFrom(h.matrix),d.multiplyWithOffset(m,-h.scrollX*A,-h.scrollY*M),v.e=L.x,v.f=L.y,d.multiply(v,f);var N=L.frame,b=N.canvasData;if(b.width>0&&b.height>0){var z=-N.halfWidth,D=-N.halfHeight;x.globalAlpha=w,x.save(),f.setToContext(x),g&&(z=Math.round(z),D=Math.round(D)),x.imageSmoothingEnabled=!N.source.scaleMode,x.drawImage(N.source.image,b.x,b.y,b.width,b.height,z,D,b.width,b.height),x.restore()}}}x.restore()}};p.exports=s}),92730:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(25305),c=t(44603),o=t(23568),r=t(95540),n=t(31600);c.register("particles",function(e,s){e===void 0&&(e={});var a=o(e,"key",null),i=r(e,"config",null),h=new n(this.scene,0,0,a);return s!==void 0&&(e.add=s),l(this.scene,h,e),i&&h.setConfig(i),h})}),676:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(39429),c=t(31600);l.register("particles",function(o,r,n,e){return o!==void 0&&typeof o=="string"&&console.warn("ParticleEmitterManager was removed in Phaser 3.60. See documentation for details"),this.displayList.add(new c(this.scene,o,r,n,e))})}),90668:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(29747),c=l,o=l;c=t(21188),o=t(9871),p.exports={renderWebGL:c,renderCanvas:o}}),21188:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(59996),c=t(61340),o=t(70554),r=new c,n=new c,e=new c,s=new c,a=function(i,h,u,d){var f=i.pipelines.set(h.pipeline),v=r,m=n,x=e,g=s;d?(g.loadIdentity(),g.multiply(d),g.translate(h.x,h.y),g.rotate(h.rotation),g.scale(h.scaleX,h.scaleY)):g.applyITRS(h.x,h.y,h.rotation,h.scaleX,h.scaleY);var T=o.getTintAppendFloatAlpha,S=u.alpha,C=h.alpha;i.pipelines.preBatch(h);var E=h.alive,P=E.length,A=h.viewBounds;if(!(P===0||A&&!l(A,u.worldView))){h.sortCallback&&h.depthSort(),u.addToRenderList(h),v.copyFrom(u.matrix),v.multiplyWithOffset(g,-u.scrollX*h.scrollFactorX,-u.scrollY*h.scrollFactorY),i.setBlendMode(h.blendMode),h.mask&&(h.mask.preRenderWebGL(i,h,u),i.pipelines.set(h.pipeline));for(var M=h.tintFill,R,L,w=0;w<P;w++){var N=E[w],b=N.alpha*C*S;if(!(b<=0||N.scaleX===0||N.scaleY===0)){x.applyITRS(N.x,N.y,N.rotation,N.scaleX,N.scaleY),x.e=N.x,x.f=N.y,v.multiply(x,m);var z=N.frame;z.glTexture!==L&&(L=z.glTexture,R=f.setGameObject(h,z));var D=-z.halfWidth,B=-z.halfHeight,F=m.setQuad(D,B,D+z.width,B+z.height),U=T(N.tint,b);f.shouldFlush(6)&&(f.flush(),R=f.setGameObject(h,z)),f.batchQuad(h,F[0],F[1],F[2],F[3],F[4],F[5],F[6],F[7],z.u0,z.v0,z.u1,z.v1,U,U,U,U,M,L,R)}}h.mask&&h.mask.postRenderWebGL(i,u),i.pipelines.postBatch(h)}};p.exports=a}),20286:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(83419),c=new l({initialize:function(r,n,e){r===void 0&&(r=0),n===void 0&&(n=0),e===void 0&&(e=!0),this.emitter,this.x=r,this.y=n,this.active=e},update:function(){},destroy:function(){this.emitter=null}});p.exports=c}),9774:(p=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */p.exports="complete"}),812:(p=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */p.exports="deathzone"}),30522:(p=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */p.exports="explode"}),96695:(p=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */p.exports="start"}),18677:(p=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */p.exports="stop"}),20696:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */p.exports={COMPLETE:t(9774),DEATH_ZONE:t(812),EXPLODE:t(30522),START:t(96695),STOP:t(18677)}}),18404:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */p.exports={EmitterColorOp:t(76472),EmitterOp:t(44777),Events:t(20696),GravityWell:t(24502),Particle:t(56480),ParticleBounds:t(69601),ParticleEmitter:t(31600),ParticleProcessor:t(20286),Zones:t(21024)}}),26388:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(83419),c=new l({initialize:function(r,n){this.source=r,this.killOnEnter=n},willKill:function(o){var r=o.worldPosition,n=this.source.contains(r.x,r.y);return n&&this.killOnEnter||!n&&!this.killOnEnter}});p.exports=c}),19909:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(83419),c=new l({initialize:function(r,n,e,s,a,i){s===void 0&&(s=!1),a===void 0&&(a=!0),i===void 0&&(i=-1),this.source=r,this.points=[],this.quantity=n,this.stepRate=e,this.yoyo=s,this.counter=-1,this.seamless=a,this._length=0,this._direction=0,this.total=i,this.updateSource()},updateSource:function(){if(this.points=this.source.getPoints(this.quantity,this.stepRate),this.seamless){var o=this.points[0],r=this.points[this.points.length-1];o.x===r.x&&o.y===r.y&&this.points.pop()}var n=this._length;return this._length=this.points.length,this._length<n&&this.counter>this._length&&(this.counter=this._length-1),this},changeSource:function(o){return this.source=o,this.updateSource()},getPoint:function(o){this._direction===0?(this.counter++,this.counter>=this._length&&(this.yoyo?(this._direction=1,this.counter=this._length-1):this.counter=0)):(this.counter--,this.counter===-1&&(this.yoyo?(this._direction=0,this.counter=0):this.counter=this._length-1));var r=this.points[this.counter];r&&(o.x=r.x,o.y=r.y)}});p.exports=c}),68875:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(83419),c=t(26099),o=new l({initialize:function(n){this.source=n,this._tempVec=new c,this.total=-1},getPoint:function(r){var n=this._tempVec;this.source.getRandomPoint(n),r.x=n.x,r.y=n.y}});p.exports=o}),21024:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */p.exports={DeathZone:t(26388),EdgeZone:t(19909),RandomZone:t(68875)}}),1159:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(83419),c=t(31401),o=t(68287),r=new l({Extends:o,Mixins:[c.PathFollower],initialize:function(e,s,a,i,h,u){o.call(this,e,a,i,h,u),this.path=s},preUpdate:function(n,e){this.anims.update(n,e),this.pathUpdate(n)}});p.exports=r}),90145:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(39429),c=t(1159);l.register("follower",function(o,r,n,e,s){var a=new c(this.scene,o,r,n,e,s);return this.displayList.add(a),this.updateList.add(a),a})}),33663:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(9674),c=t(83419),o=t(48803),r=t(90664),n=t(4703),e=t(45650),s=new c({Extends:n,initialize:function(i,h,u,d,f,v,m,x){d||(d="__DEFAULT"),n.call(this,i,h,u,d,f),this.type="Plane",this.anims=new l(this),this.gridWidth,this.gridHeight,this.isTiled,this._checkerboard=null,this.hideCCW=!1,this.setGridSize(v,m,x),this.setSizeToFrame(!1),this.setViewHeight()},originX:{get:function(){return .5}},originY:{get:function(){return .5}},setGridSize:function(a,i,h){a===void 0&&(a=8),i===void 0&&(i=8),h===void 0&&(h=!1);var u=!1;return h&&(u=!0),this.gridWidth=a,this.gridHeight=i,this.isTiled=h,this.clear(),o({mesh:this,widthSegments:a,heightSegments:i,isOrtho:!1,tile:h,flipY:u}),this},setSizeToFrame:function(a){a===void 0&&(a=!0);var i=this.frame;if(this.setPerspective(this.width/i.width,this.height/i.height),this._checkerboard&&this._checkerboard!==this.texture&&this.removeCheckerboard(),!a)return this;var h=this.gridWidth,u=this.gridHeight,d=this.vertices,f=i.u0,v=i.u1,m=i.v0,x=i.v1,g,T,S=0;if(this.isTiled)for(m=i.v1,x=i.v0,T=0;T<u;T++)for(g=0;g<h;g++)d[S++].setUVs(f,x),d[S++].setUVs(f,m),d[S++].setUVs(v,x),d[S++].setUVs(f,m),d[S++].setUVs(v,m),d[S++].setUVs(v,x);else{var C=h+1,E=u+1,P=v-f,A=x-m,M=[];for(T=0;T<E;T++)for(g=0;g<C;g++){var R=f+P*(g/h),L=m+A*(T/u);M.push(R,L)}for(T=0;T<u;T++)for(g=0;g<h;g++){var w=(g+C*T)*2,N=(g+C*(T+1))*2,b=(g+1+C*(T+1))*2,z=(g+1+C*T)*2;d[S++].setUVs(M[w],M[w+1]),d[S++].setUVs(M[N],M[N+1]),d[S++].setUVs(M[z],M[z+1]),d[S++].setUVs(M[N],M[N+1]),d[S++].setUVs(M[b],M[b+1]),d[S++].setUVs(M[z],M[z+1])}}return this},setViewHeight:function(a){a===void 0&&(a=this.frame.height);var i=this.fov*(Math.PI/180);this.viewPosition.z=this.height/a/Math.tan(i/2),this.dirtyCache[10]=1},createCheckerboard:function(a,i,h,u,d){a===void 0&&(a=16777215),i===void 0&&(i=255),h===void 0&&(h=255),u===void 0&&(u=255),d===void 0&&(d=128);for(var f=r(a),v=r(i),m=[],x=0;x<16;x++)for(var g=0;g<16;g++)x<8&&g<8||x>7&&g>7?m.push(f.r,f.g,f.b,h):m.push(v.r,v.g,v.b,u);var T=this.scene.sys.textures.addUint8Array(e(),new Uint8Array(m),16,16);return this.removeCheckerboard(),this.setTexture(T),this.setSizeToFrame(),this.setViewHeight(d),this},removeCheckerboard:function(){this._checkerboard&&(this._checkerboard.destroy(),this._checkerboard=null)},play:function(a,i){return this.anims.play(a,i)},playReverse:function(a,i){return this.anims.playReverse(a,i)},playAfterDelay:function(a,i){return this.anims.playAfterDelay(a,i)},playAfterRepeat:function(a,i){return this.anims.playAfterRepeat(a,i)},stop:function(){return this.anims.stop()},stopAfterDelay:function(a){return this.anims.stopAfterDelay(a)},stopAfterRepeat:function(a){return this.anims.stopAfterRepeat(a)},stopOnFrame:function(a){return this.anims.stopOnFrame(a)},preUpdate:function(a,i){n.prototype.preUpdate.call(this,a,i),this.anims.update(a,i)},preDestroy:function(){this.clear(),this.removeCheckerboard(),this.anims.destroy(),this.anims=void 0,this.debugCallback=null,this.debugGraphic=null}});p.exports=s}),56015:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(25305),c=t(13059),o=t(44603),r=t(23568),n=t(35154),e=t(33663);o.register("plane",function(s,a){s===void 0&&(s={});var i=r(s,"key",null),h=r(s,"frame",null),u=n(s,"width",8),d=n(s,"height",8),f=n(s,"tile",!1),v=new e(this.scene,0,0,i,h,u,d,f);a!==void 0&&(s.add=a);var m=n(s,"checkerboard",null);if(m){var x=n(m,"color1",16777215),g=n(m,"color2",255),T=n(m,"alpha1",255),S=n(m,"alpha2",255),C=n(m,"height",128);v.createCheckerboard(x,g,T,S,C)}return l(this.scene,v,s),c(v,s),v})}),30985:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(33663),c=t(39429);c.register("plane",function(o,r,n,e,s,a,i){return this.displayList.add(new l(this.scene,o,r,n,e,s,a,i))})}),80321:((p,y,t)=>{/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l=t(83419),c=t(31401),o=t(95643),r=t(30100),n=t(36060),e=t(67277),s=new l({Extends:o,Mixins:[c.AlphaSingle,c.BlendMode,c.Depth,c.Mask,c.Pipeline,c.PostPipeline,c.ScrollFactor,c.Transform,c.Visible,e],initialize:function(i,h,u,d,f,v,m){d===void 0&&(d=16777215),f===void 0&&(f=128),v===void 0&&(v=1),m===void 0&&(m=.1),o.call(this,i,"PointLight"),this.initPipeline(n.POINTLIGHT_PIPELINE),this.initPostPipeline(),this.setPosition(h,u),this.color=r(d),this.intensity=v,this.attenuation=m,this.width=f*2,this.height=f*2,this._radius=f},radius:{get:function(){return this._radius},set:function(a){this._radius=a,this.width=a*2,this.height=a*2}},originX:{get:function(){return .5}},originY:{get:f×N}ã^›Ê×¬¢h­µç[X]\‹\ËœØØ[K\ËœYÚ[œË\Ëœ™[™\™\ŸK\]N™[˜İ[ÛŠ
^ß_JNÜ™^ÜÏ[ßJKŒLÎŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆ]
ÍNJKÏ]
NNLÊKÏ]
NM
K]
ÊK]
ÍLMM
KO]
MNJKÏ]
MÍÊKO]
MÍŠKO]
ŒÍ
K[™]È
Ú[š]X[^™N™[˜İ[ÛŠŠ^ÚYŠ\Ë™Ø[YOY\ËšÙ^\Ï^ßK\ËœØÙ[™\ÏV×K\Ë—Ü[™[™ÏV×K\Ë—Üİ\V×K\Ë—Ü]Y]YOV×K\Ë—Ù]O^ßK\Ëš\Ô›ØÙ\ÜÚ[™ÏHLK\Ëš\Ğ›ÛİYHLK\Ë˜İ\İÛUšY]ÜÜÏL\ËœŞ\İ[TØÙ[™KŠ^Ğ\œ˜^Kš\Ğ\œ˜^JŠ_
VÙ—JNÙ›ÜŠ˜\ˆLİ‹›[™İİŠÊÊ]\Ë—Ü[™[™Ëœ\Ú
ÚÙ^Nˆ™Y˜][‹ØÙ[™N™–İ—K]]Ôİ\OOL]Nß_J_Y™]™[Ë›Û˜ÙJ‹”‘PQK\Ë˜›Ûİ]Y]YK\Ê_K›Ûİ]Y]YN™[˜İ[ÛŠ
^ÚYŠ]\Ëš\Ğ›ÛİY
^İ\ËœŞ\İ[TØÙ[™O]\Ë˜Ü™X]TØÙ[™Qœ›ÛR[œİ[˜ÙJ—×ÔÖTÕSH‹™]ÈJK\Ë™Ø[YK™]™[Ë™[Z]
‹”ÖTÕSWÔ‘PQK\ËœŞ\İ[TØÙ[™K\ÊNİ˜\ˆK‹Ù›ÜŠOLİO\Ë—Ü[™[™Ë›[™İİJÊÊ^Ù]\Ë—Ü[™[™ÖİWKYšÙ^KYœØÙ[™Nİ˜\ˆNİˆ[œİ[˜Ù[ÙˆOÛO]\Ë˜Ü™X]TØÙ[™Qœ›ÛR[œİ[˜ÙJ‹ŠN\[ÙˆOH›Øš™XİÛO]\Ë˜Ü™X]TØÙ[™Qœ›ÛSØš™Xİ
‹ŠN\[ÙˆOH™[˜İ[Ûˆ‰‰ŠO]\Ë˜Ü™X]TØÙ[™Qœ›ÛQ[˜İ[ÛŠ‹ŠJK[KœŞ\ËœÙ][™ÜËšÙ^K\ËšÙ^\ÖÙ—O[K\ËœØÙ[™\Ëœ\Ú
JK\Ë—Ù]VÙ—I‰ŠKœŞ\ËœÙ][™ÜË™]O]\Ë—Ù]VÙ—K™]K\Ë—Ù]VÙ—K˜]]Ôİ\	‰Š˜]]Ôİ\HL
JK
˜]]Ôİ\KœŞ\ËœÙ][™ÜË˜Xİ]™JI‰\Ë—Üİ\œ\Ú
Š_Y›ÜŠ\Ë—Ü[™[™Ë›[™İL\Ë—Ù]O^ßK\Ëš\Ğ›ÛİYHLOLİO\Ë—Üİ\›[™İİJÊÊY]\Ë—Üİ\İWK\Ëœİ\

Nİ\Ë—Üİ\›[™İL_K›ØÙ\ÜÔ]Y]YN™[˜İ[ÛŠ
^İ˜\ˆO]\Ë—Ü[™[™Ë›[™İ]\Ë—Ü]Y]YK›[™İÚYŠJOOOL	‰™OOL
J^İ˜\ˆ‹ÚYŠJ^Ù›ÜŠLÙNÙŠÊÊ]]\Ë—Ü[™[™ÖÙ—K\Ë˜Y
‹šÙ^K‹œØÙ[™K‹˜]]Ôİ\‹™]JNÙ›ÜŠLÙ\Ë—Üİ\›[™İÙŠÊÊ]]\Ë—Üİ\Ù—K\Ëœİ\
ŠNİ\Ë—Üİ\›[™İL\Ë—Ü[™[™Ë›[™İLY›ÜŠLÙ\Ë—Ü]Y]YK›[™İÙŠÊÊ]]\Ë—Ü]Y]YVÙ—K\Öİ‹›ÜJ‹šÙ^PK‹šÙ^P‹‹™]JNİ\Ë—Ü]Y]YK›[™İL_KY™[˜İ[ÛŠK‹Š^ÚYŠOO]›ÚY	‰ŠHLJKOO]›ÚY	‰Š^ßJK\Ëš\Ô›ØÙ\ÜÚ[™ß]\Ëš\Ğ›ÛİY
\™]\›ˆ\Ë—Ü[™[™Ëœ\Ú
ÚÙ^NKØÙ[™N™]]Ôİ\™‹]NŸJK\Ëš\Ğ›ÛİY
\Ë—Ù]VİWO^Ù]NŸJK[İO]\Ë™Ù]Ù^JK
Nİ˜\ˆNÜ™]\›ˆ[œİ[˜Ù[ÙˆOÛO]\Ë˜Ü™X]TØÙ[™Qœ›ÛR[œİ[˜ÙJK
N\[ÙˆOH›Øš™XİÊšÙ^O]KO]\Ë˜Ü™X]TØÙ[™Qœ›ÛSØš™Xİ
K
JN\[ÙˆOH™[˜İ[Ûˆ‰‰ŠO]\Ë˜Ü™X]TØÙ[™Qœ›ÛQ[˜İ[ÛŠK
JKKœŞ\ËœÙ][™ÜË™]O]‹O[KœŞ\ËœÙ][™ÜËšÙ^K\ËšÙ^\ÖİWO[K\ËœØÙ[™\Ëœ\Ú
JK
ŸKœŞ\ËœÙ][™ÜË˜Xİ]™JI‰Š\Ë—Ü[™[™Ë›[™İİ\Ë—Üİ\œ\Ú
JN\Ëœİ\
JJK_K™[[İ™N™[˜İ[ÛŠJ^ÚYŠ\Ëš\Ô›ØÙ\ÜÚ[™Ê\™]\›ˆ\Ëœ]Y]YSÜ
œ™[[İ™H‹JNİ˜\ˆ]\Ë™Ù]ØÙ[™JJNÚYŠYœŞ\Ëš\Õ˜[œÚ][Ûš[™Ê
J\™]\›ˆ\Îİ˜\ˆ]\ËœØÙ[™\Ëš[™^ÙŠ
KYœŞ\ËœÙ][™ÜËšÙ^NÜ™]\›ˆ‹LI‰Š[]H\ËšÙ^\Öİ—K\ËœØÙ[™\ËœÜXÙJ‹JK\Ë—Üİ\š[™^ÙŠŠO‹LI‰Š]\Ë—Üİ\š[™^ÙŠŠK\Ë—Üİ\œÜXÙJ‹JJKœŞ\Ë™\İ›ŞJ
JK\ßK›ÛİØÙ[™N™[˜İ[ÛŠJ^İ˜\ˆ]KœŞ\ËYœÙ][™ÜÎÙœØÙ[™U\]O\ËKš[š]	‰ŠKš[š]˜Ø[
K‹™]JK‹œİ]\ÏXË’S’U‹š\Õ˜[œÚ][Û‰‰™™]™[Ë™[Z]
Ë•S”ÒUSÓ—ÒS’U‹˜[œÚ][Û‘œ›ÛK‹˜[œÚ][Û‘\˜][ÛŠJNİ˜\ˆÙ›ØY	‰ŠY›ØY‹œ™\Ù]

JK‰‰Kœ™[ØYÊKœ™[ØY˜Ø[
JK‹œİ]\ÏXË“ĞQS‘Ë‹›Û˜ÙJKÓÓTUK\Ë›ØYÛÛ\]K\ÊK‹œİ\

JN\Ë˜Ü™X]JJ_KØYÛÛ\]N™[˜İ[ÛŠJ^İ\Ë˜Ü™X]JKœØÙ[™J_K^[ØYÛÛ\]N™[˜İ[ÛŠJ^İ\Ë˜›ÛİØÙ[™JKœØÙ[™J_K\]N™[˜İ[ÛŠK
^İ\Ëœ›ØÙ\ÜÔ]Y]YJ
K\Ëš\Ô›ØÙ\ÜÚ[™ÏHLÙ›ÜŠ˜\ˆ]\ËœØÙ[™\Ë›[™İLNÙLÙ‹KJ^İ˜\ˆ]\ËœØÙ[™\ÖÙ—KœŞ\Îİ‹œÙ][™ÜËœİ]\Ï˜Ë”ÕT•	‰‹œÙ][™ÜËœİ]\ÏXË”•S“’S‘É‰‹œİ\
K
K‹œØÙ[™TYÚ[‰‰‹œØÙ[™TYÚ[‹—İ\™Ù]	‰‹œØÙ[™TYÚ[‹œİ\
K
__K™[™\™[˜İ[ÛŠJ^Ù›ÜŠ˜\ˆLÙ\ËœØÙ[™\Ë›[™İÙ
ÊÊ^İ˜\ˆ]\ËœØÙ[™\ÖÙKœŞ\ÎÙ‹œÙ][™ÜËš\ÚX›I‰™‹œÙ][™ÜËœİ]\ÏXË“ĞQS‘É‰™‹œÙ][™ÜËœİ]\ÏË”ÓQTS‘É‰™‹œ™[™\ŠJ_]\Ëš\Ô›ØÙ\ÜÚ[™ÏHL_KÜ™X]N™[˜İ[ÛŠJ^İ˜\ˆ]KœŞ\ËYœÙ][™ÜÎİK˜Ü™X]I‰Š‹œİ]\ÏXËÔ‘PUS‘ËK˜Ü™X]K˜Ø[
K‹™]JK‹œİ]\ÏOOXË‘TÕ“ÖQQ
_
‹š\Õ˜[œÚ][Û‰‰™™]™[Ë™[Z]
Ë•S”ÒUSÓ—ÔÕT•‹˜[œÚ][Û‘œ›ÛK‹˜[œÚ][Û‘\˜][ÛŠKK\]I‰ŠœØÙ[™U\]O]K\]JK‹œİ]\ÏXË”•S“’S‘Ë™]™[Ë™[Z]
ËÔ‘PUKJJ_KÜ™X]TØÙ[™Qœ›ÛQ[˜İ[Û™[˜İ[ÛŠK
^İ˜\ˆ[™]ÈÚYŠˆ[œİ[˜Ù[ÙˆJ^İ˜\ˆY‹œŞ\ËœÙ][™ÜËšÙ^NÚYŠˆOOHˆ‰‰ŠO]ŠK\ËšÙ^\Ëš\ÓİÛ”›Ü\JJJ]›İÈ™]È\œ›ÜŠØ[››İYØÙ[™HÚ]\XØ]HÙ^NˆŠİJNÜ™]\›ˆ\Ë˜Ü™X]TØÙ[™Qœ›ÛR[œİ[˜ÙJKŠ_Y[ÙH™]\›ˆ‹œŞ\Ï[™]ÈJŠK‹œŞ\ËœÙ][™ÜËšÙ^O]K‹œŞ\Ëš[š]
\Ë™Ø[YJKŸKÜ™X]TØÙ[™Qœ›ÛR[œİ[˜ÙN™[˜İ[ÛŠK
^İ˜\ˆYœŞ\ËœÙ][™ÜËšÙ^NÜ™]\›ˆOOHˆ‰‰ŠœŞ\ËœÙ][™ÜËšÙ^O]JKœŞ\Ëš[š]
\Ë™Ø[YJKKÜ™X]TØÙ[™Qœ›ÛSØš™Xİ™[˜İ[ÛŠK
^İ˜\ˆ[™]ÈJ
KY‹œŞ\ËœÙ][™ÜËšÙ^NİˆOOHˆİO]™‹œŞ\ËœÙ][™ÜËšÙ^O]K‹œŞ\Ëš[š]
\Ë™Ø[YJNÙ›ÜŠ˜\ˆOVÈš[š]‹œ™[ØY‹˜Ü™X]H‹\]H‹œ™[™\ˆ—KLŞK›[™İŞ
ÊÊ^İ˜\ˆÏ[ŠVŞK[
NÙÉ‰Š–ÛVŞWOYÊ_ZYŠš\ÓİÛ”›Ü\J™^[™ŠJ^Ù›ÜŠ˜\ˆ[ˆ™^[™
ZYŠ™^[™š\ÓİÛ”›Ü\J
J^İ˜\ˆÏY™^[™ÕNÕOOH™]H‰‰™‹š\ÓİÛ”›Ü\J™]HŠI‰\[ÙˆÏOH›Øš™XİÙ‹™]K›Y\™ÙJÊN•OOHœŞ\È‰‰Š–ÕOTÊ__\™]\›ˆŸKÙ]Ù^N™[˜İ[ÛŠK
^ÚYŠ_
OH™Y˜][ŠK\[ÙˆOH™[˜İ[ÛˆŠ\™]\›ˆNÚYŠ[œİ[˜Ù[ÙˆOİOYœŞ\ËœÙ][™ÜËšÙ^N\[ÙˆOH›Øš™Xİ‰‰™š\ÓİÛ”›Ü\JšÙ^HŠI‰ŠOYšÙ^JK\ËšÙ^\Ëš\ÓİÛ”›Ü\JJJ]›İÈ™]È\œ›ÜŠØ[››İYØÙ[™HÚ]\XØ]HÙ^NˆŠİJNÜ™]\›ˆ_KÙ]ØÙ[™\Î™[˜İ[ÛŠK
^İOOO]›ÚY	‰ŠOHL
KOO]›ÚY	‰ŠHLJNÙ›ÜŠ˜\ˆV×K]\ËœØÙ[™\ËOLÛO‹›[™İÛJÊÊ^İ˜\ˆ]–ÛWNŞ	‰Š]_I‰œŞ\Ëš\ĞXİ]™J
JI‰™‹œ\Ú

_\™]\›ˆÙ‹œ™]™\œÙJ
N™ŸKÙ]ØÙ[™N™[˜İ[ÛŠJ^ÚYŠ\[ÙˆOOHœİš[™ÈŠ^ÚYŠ\ËšÙ^\ÖİWJ\™]\›ˆ\ËšÙ^\ÖİW_Y[ÙH›ÜŠ˜\ˆLÙ\ËœØÙ[™\Ë›[™İÙ
ÊÊZYŠOOO]\ËœØÙ[™\ÖÙJ\™]\›ˆNÜ™]\›ˆ[K\ĞXİ]™N™[˜İ[ÛŠJ^İ˜\ˆ]\Ë™Ù]ØÙ[™JJNÜ™]\›ˆÙœŞ\Ëš\ĞXİ]™J
N›[K\Ô]\ÙY™[˜İ[ÛŠJ^İ˜\ˆ]\Ë™Ù]ØÙ[™JJNÜ™]\›ˆÙœŞ\Ëš\Ô]\ÙY

N›[K\Õš\ÚX›N™[˜İ[ÛŠJ^İ˜\ˆ]\Ë™Ù]ØÙ[™JJNÜ™]\›ˆÙœŞ\Ëš\Õš\ÚX›J
N›[K\ÔÛY\[™Î™[˜İ[ÛŠJ^İ˜\ˆ]\Ë™Ù]ØÙ[™JJNÜ™]\›ˆÙœŞ\Ëš\ÔÛY\[™Ê
N›[K]\ÙN™[˜İ[ÛŠK
^İ˜\ˆ]\Ë™Ù]ØÙ[™JJNÜ™]\›ˆ‰‰™‹œŞ\Ëœ]\ÙJ
K\ßK™\İ[YN™[˜İ[ÛŠK
^İ˜\ˆ]\Ë™Ù]ØÙ[™JJNÜ™]\›ˆ‰‰™‹œŞ\Ëœ™\İ[YJ
K\ßKÛY\™[˜İ[ÛŠK
^İ˜\ˆ]\Ë™Ù]ØÙ[™JJNÜ™]\›ˆ‰‰ˆY‹œŞ\Ëš\Õ˜[œÚ][Ûš[™Ê
I‰™‹œŞ\ËœÛY\

K\ßKØZÙN™[˜İ[ÛŠK
^İ˜\ˆ]\Ë™Ù]ØÙ[™JJNÜ™]\›ˆ‰‰™‹œŞ\ËØZÙJ
K\ßK[™[˜İ[ÛŠK
^İ˜\ˆ]\Ë™Ù]ØÙ[™JJNÚYŠYŠ^Ù›ÜŠ˜\ˆLİ\Ë—Ü[™[™Ë›[™İİŠÊÊZYŠ\Ë—Ü[™[™Öİ—KšÙ^OOO]J^İ\Ëœ]Y]YSÜ
œİ\‹K
NØœ™XZß\™]\›ˆ\ßY‹œŞ\Ëš\ÔÛY\[™Ê
OÙ‹œŞ\ËØZÙJ
N™‹œŞ\Ëš\Ô]\ÙY

OÙ‹œŞ\Ëœ™\İ[YJ
N\Ëœİ\
K
_Kİ\™[˜İ[ÛŠK
^ÚYŠ]\Ëš\Ğ›ÛİY
\™]\›ˆ\Ë—Ù]VİWO^Ø]]Ôİ\ˆL]N™K\Îİ˜\ˆ]\Ë™Ù]ØÙ[™JJNÚYŠYŠ\™]\›ˆÛÛœÛÛKØ\›Š”ØÙ[™HÙ^H›İ›İ[™ˆŠİJK\Îİ˜\ˆY‹œŞ\ËO]‹œÙ][™ÜËœİ]\ÎÚYŠOXË”ÕT•	‰›OXËÔ‘PUS‘Ê\™]\›ˆ\ÎÚYŠOXË”•S“’S‘É‰›OXË”ÓQTS‘Ê]‹œÚ]İÛŠ
K‹œØÙ[™U\]O\Ë‹œİ\

NÙ[Ù^İ‹œØÙ[™U\]O\Ë‹œİ\

Nİ˜\ˆÚYŠ‹›ØY	‰Š]‹›ØY
K	‰‹œÙ][™ÜËš\ÓİÛ”›Ü\JœXÚÈŠI‰Šœ™\Ù]

K˜YXÚÊÜ^[ØY‹œÙ][™ÜËœXÚßJJJ\™]\›ˆ‹œÙ][™ÜËœİ]\ÏXË“ĞQS‘Ë›Û˜ÙJKÓÓTUK\Ëœ^[ØYÛÛ\]K\ÊKœİ\

K\ß\™]\›ˆ\Ë˜›ÛİØÙ[™JŠK\ßKİÜ™[˜İ[ÛŠK
^İ˜\ˆ]\Ë™Ù]ØÙ[™JJNÚYŠ‰‰ˆY‹œŞ\Ëš\Õ˜[œÚ][Ûš[™Ê
I‰™‹œŞ\ËœÙ][™ÜËœİ]\ÈOOXË”ÒUÕÓŠ^İ˜\ˆY‹œŞ\Ë›ØYİ‰‰Š‹›Ù™ŠKÓÓTUK\Ë›ØYÛÛ\]K\ÊK‹›Ù™ŠKÓÓTUK\Ëœ^[ØYÛÛ\]K\ÊJK‹œŞ\ËœÚ]İÛŠ
_\™]\›ˆ\ßKİÚ]Ú™[˜İ[ÛŠKŠ^İ˜\ˆ]\Ë™Ù]ØÙ[™JJKO]\Ë™Ù]ØÙ[™J
NÜ™]\›ˆ‰‰›I‰ˆOO[I‰Š\ËœÛY\
JK\Ëš\ÔÛY\[™Ê
Oİ\ËØZÙJŠN\Ëœİ\
ŠJK\ßKÙ]]™[˜İ[ÛŠJ^Ü™]\›ˆ\ËœØÙ[™\ÖİW_KÙ][™^™[˜İ[ÛŠJ^İ˜\ˆ]\Ë™Ù]ØÙ[™JJNÜ™]\›ˆ\ËœØÙ[™\Ëš[™^ÙŠ
_Kœš[™ÕÕÜ™[˜İ[ÛŠJ^ÚYŠ\Ëš\Ô›ØÙ\ÜÚ[™Ê\™]\›ˆ\Ëœ]Y]YSÜ
˜œš[™ÕÕÜ‹JNİ˜\ˆ]\Ë™Ù][™^
JK]\ËœØÙ[™\ÎÚYŠOOKLI‰™‹›[™İ
^İ˜\ˆ]\Ë™Ù]ØÙ[™JJNÙ‹œÜXÙJJK‹œ\Ú
Š_\™]\›ˆ\ßKÙ[™Ğ˜XÚÎ™[˜İ[ÛŠJ^ÚYŠ\Ëš\Ô›ØÙ\ÜÚ[™Ê\™]\›ˆ\Ëœ]Y]YSÜ
œÙ[™Ğ˜XÚÈ‹JNİ˜\ˆ]\Ë™Ù][™^
JNÚYŠOOKLI‰™Œ
^İ˜\ˆ]\Ë™Ù]ØÙ[™JJNİ\ËœØÙ[™\ËœÜXÙJJK\ËœØÙ[™\Ë[œÚY
Š_\™]\›ˆ\ßK[İ™QİÛ™[˜İ[ÛŠJ^ÚYŠ\Ëš\Ô›ØÙ\ÜÚ[™Ê\™]\›ˆ\Ëœ]Y]YSÜ
›[İ™QİÛˆ‹JNİ˜\ˆ]\Ë™Ù][™^
JNÚYŠŒ
^İ˜\ˆYLK]\Ë™Ù]ØÙ[™JJKO]\Ë™Ù]]
ŠNİ\ËœØÙ[™\ÖÙO[K\ËœØÙ[™\ÖÙ—O]Ÿ\™]\›ˆ\ßK[İ™U\™[˜İ[ÛŠJ^ÚYŠ\Ëš\Ô›ØÙ\ÜÚ[™Ê\™]\›ˆ\Ëœ]Y]YSÜ
›[İ™U\‹JNİ˜\ˆ]\Ë™Ù][™^
JNÚYŠ\ËœØÙ[™\Ë›[™İLJ^İ˜\ˆY
ÌK]\Ë™Ù]ØÙ[™JJKO]\Ë™Ù]]
ŠNİ\ËœØÙ[™\ÖÙO[K\ËœØÙ[™\ÖÙ—O]Ÿ\™]\›ˆ\ßK[İ™PX›İ™N™[˜İ[ÛŠK
^ÚYŠOOOY
\™]\›ˆ\ÎÚYŠ\Ëš\Ô›ØÙ\ÜÚ[™Ê\™]\›ˆ\Ëœ]Y]YSÜ
›[İ™PX›İ™H‹K
Nİ˜\ˆ]\Ë™Ù][™^
JK]\Ë™Ù][™^

NÚYŠˆOOKLI‰ˆOOKLI‰Š^İ˜\ˆO]\Ë™Ù]]
ŠNİ\ËœØÙ[™\ËœÜXÙJ‹JK\ËœØÙ[™\ËœÜXÙJŠÊ™ŠKJ_\™]\›ˆ\ßK[İ™P™[İÎ™[˜İ[ÛŠK
^ÚYŠOOOY
\™]\›ˆ\ÎÚYŠ\Ëš\Ô›ØÙ\ÜÚ[™Ê\™]\›ˆ\Ëœ]Y]YSÜ
›[İ™P™[İÈ‹K
Nİ˜\ˆ]\Ë™Ù][™^
JK]\Ë™Ù][™^

NÚYŠˆOOKLI‰ˆOOKLI‰™Š^İ˜\ˆO]\Ë™Ù]]
ŠNİ\ËœØÙ[™\ËœÜXÙJ‹JKOOLİ\ËœØÙ[™\Ë[œÚY
JN\ËœØÙ[™\ËœÜXÙJ‹JŠKJ_\™]\›ˆ\ßK]Y]YSÜ™[˜İ[ÛŠK‹Š^Ü™]\›ˆ\Ë—Ü]Y]YKœ\Ú
ÛÜKÙ^PN™Ù^P™‹]NŸJK\ßKİØ\ÜÚ][Û™[˜İ[ÛŠK
^ÚYŠOOOY
\™]\›ˆ\ÎÚYŠ\Ëš\Ô›ØÙ\ÜÚ[™Ê\™]\›ˆ\Ëœ]Y]YSÜ
œİØ\ÜÚ][Ûˆ‹K
Nİ˜\ˆ]\Ë™Ù][™^
JK]\Ë™Ù][™^

NÚYŠˆOO]‰‰™ˆOOKLI‰ˆOOKLJ^İ˜\ˆO]\Ë™Ù]]
ŠNİ\ËœØÙ[™\ÖÙ—O]\ËœØÙ[™\Öİ—K\ËœØÙ[™\Öİ—O[_\™]\›ˆ\ßK[\™[˜İ[ÛŠ
^Ù›ÜŠ˜\ˆOV×KVÈœ[™[™È‹š[š]‹œİ\‹›ØY[™È‹˜Ü™X][™È‹œ[›š[™È‹œ]\ÙY‹œÛY\[™È‹œÚ]İÛˆ‹™\İ›ŞYY—KLÙ\ËœØÙ[™\Ë›[™İÙŠÊÊ^İ˜\ˆ]\ËœØÙ[™\ÖÙ—KœŞ\ËO]‹œÙ][™ÜËš\ÚX›I‰Š‹œÙ][™ÜËœİ]\ÏOOXË”•S“’S‘ß‹œÙ][™ÜËœİ]\ÏOOXË”UTÑQ
OÈ–Ê—Hˆ–ËWHÛJÏ]‹œÙ][™ÜËšÙ^JÈˆ
ŠÙİ‹œÙ][™ÜËœİ]\×JÈŠH‹Kœ\Ú
J_XÛÛœÛÛK›ÙÊKš›Ú[Š˜
J_K\İ›ŞN™[˜İ[ÛŠ
^Ù›ÜŠ˜\ˆOLİO\ËœØÙ[™\Ë›[™İİJÊÊ^İ˜\ˆ]\ËœØÙ[™\ÖİWKœŞ\ÎÙ™\İ›ŞJ
_]\ËœŞ\İ[TØÙ[™KœŞ\Ë™\İ›ŞJ
K\Ë\]O\Ë\ËœØÙ[™\ÏV×K\Ë—Ü[™[™ÏV×K\Ë—Üİ\V×K\Ë—Ü]Y]YOV×K\Ë™Ø[YO[[\ËœŞ\İ[TØÙ[™O[[_JNÜ™^ÜÏZJKLŒŒNŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆ]
LÌNJKÏ]
ÍNJKÏ]
NM
K]
MMM
K]
ÍÌÍÊKO[™]ÈÊÚ[š]X[^™N™[˜İ[ÛŠJ^İ\ËœØÙ[™OXK\ËœŞ\İ[\ÏXKœŞ\Ë\ËœÙ][™ÜÏXKœŞ\ËœÙ][™ÜË\ËšÙ^OXKœŞ\ËœÙ][™ÜËšÙ^K\Ë›X[˜YÙ\XKœŞ\Ë™Ø[YKœØÙ[™K\Ë˜[œÚ][Û”›ÙÜ™\ÜÏL\Ë—Ù[\ÙYL\Ë—İ\™Ù][[\Ë—Ù\˜][ÛL\Ë—ÛÛ•\]K\Ë—ÛÛ•\]TØÛÜK\Ë—İÚ[ÛY\HLK\Ë—İÚ[™[[İ™OHLKKœŞ\Ë™]™[Ë›Û˜ÙJË“ÓÕ\Ë˜›Ûİ\ÊKKœŞ\Ë™]™[Ë›ÛŠË”ÕT•\ËœYÚ[”İ\\Ê_K›Ûİ™[˜İ[ÛŠ
^İ\ËœŞ\İ[\Ë™]™[Ë›Û˜ÙJË‘TÕ“ÖK\Ë™\İ›ŞK\Ê_KYÚ[”İ\™[˜İ[ÛŠ
^İ\Ë—İ\™Ù][[\ËœŞ\İ[\Ë™]™[Ë›Û˜ÙJË”ÒUÕÓ‹\ËœÚ]İÛ‹\Ê_Kİ\™[˜İ[ÛŠËJ^Ü™]\›ˆÏOO]›ÚY	‰ŠÏ]\ËšÙ^JK\Ë›X[˜YÙ\‹œ]Y]YSÜ
œİÜ‹\ËšÙ^JK\Ë›X[˜YÙ\‹œ]Y]YSÜ
œİ\‹ËJK\ßK™\İ\™[˜İ[ÛŠÊ^İ˜\ˆO]\ËšÙ^NÜ™]\›ˆ\Ë›X[˜YÙ\‹œ]Y]YSÜ
œİÜ‹JK\Ë›X[˜YÙ\‹œ]Y]YSÜ
œİ\‹KÊK\ßK˜[œÚ][Û™[˜İ[ÛŠÊ^ÜÏOO]›ÚY	‰ŠÏ^ßJNİ˜\ˆO\ŠË\™Ù]‹LJKO]\Ë›X[˜YÙ\‹™Ù]ØÙ[™JJNÚYŠX_]\Ë˜ÚXÚÕ˜[Y˜[œÚ][ÛŠJJ\™]\›ˆLNİ˜\ˆ\ŠË™\˜][Ûˆ‹YLÊNİ\Ë—Ù[\ÙYL\Ë—İ\™Ù]ZK\Ë—Ù\˜][ÛZ\Ë—İÚ[ÛY\\ŠËœÛY\‹LJK\Ë—İÚ[™[[İ™O\ŠËœ™[[İ™H‹LJNİ˜\ˆO\ŠË›Û•\]H‹[
NİI‰Š\Ë—ÛÛ•\]O]K\Ë—ÛÛ•\]TØÛÜO\ŠË›Û•\]TØÛÜH‹\ËœØÙ[™JJNİ˜\ˆ\ŠË˜[İÒ[œ]‹LJNİ\ËœÙ][™ÜË˜[œÚ][Û[İÒ[œ]Yİ˜\ˆZKœŞ\ËœÙ][™ÜÎÙ‹š\Õ˜[œÚ][ÛHL‹˜[œÚ][Û‘œ›ÛO]\ËœØÙ[™K‹˜[œÚ][Û‘\˜][ÛZ‹˜[œÚ][Û[İÒ[œ]YŠË›[İ™PX›İ™H‹LJOİ\Ë›X[˜YÙ\‹›[İ™PX›İ™J\ËšÙ^KJNœŠË›[İ™P™[İÈ‹LJI‰\Ë›X[˜YÙ\‹›[İ™P™[İÊ\ËšÙ^KJKKœŞ\Ëš\ÔÛY\[™Ê
OÚKœŞ\ËØZÙJŠË™]HŠJN\Ë›X[˜YÙ\‹œİ\
KŠË™]HŠJNİ˜\ˆ\ŠË›Û”İ\‹[
KO\ŠË›Û”İ\ØÛÜH‹\ËœØÙ[™JNÜ™]\›ˆ‰‰‹˜Ø[
K\ËœØÙ[™KK
K\ËœŞ\İ[\Ë™]™[Ë™[Z]
Ë•S”ÒUSÓ—ÓÕUK
KLKÚXÚÕ˜[Y˜[œÚ][Û™[˜İ[ÛŠÊ^Ü™]\›ˆJ\ßËœŞ\Ëš\ĞXİ]™J
_ËœŞ\Ëš\Õ˜[œÚ][Ûš[™Ê
_ÏOO]\ËœØÙ[™_\ËœŞ\İ[\Ëš\Õ˜[œÚ][Ûš[™Ê
J_Kİ\™[˜İ[ÛŠËJ^İ\Ë—Ù[\ÙY
ÏXK\Ë˜[œÚ][Û”›ÙÜ™\ÜÏ[
\Ë—Ù[\ÙYİ\Ë—Ù\˜][Û‹JK\Ë—ÛÛ•\]I‰\Ë—ÛÛ•\]K˜Ø[
\Ë—ÛÛ•\]TØÛÜK\Ë˜[œÚ][Û”›ÙÜ™\ÜÊK\Ë—Ù[\ÙY]\Ë—Ù\˜][Û‰‰\Ë˜[œÚ][ÛÛÛ\]J
_K˜[œÚ][ÛÛÛ\]N™[˜İ[ÛŠ
^İ˜\ˆÏ]\Ë—İ\™Ù]œŞ\ËO]\Ë—İ\™Ù]œŞ\ËœÙ][™ÜÎÜË™]™[Ë™[Z]
Ë•S”ÒUSÓ—ĞÓÓTUK\ËœØÙ[™JKKš\Õ˜[œÚ][ÛHLKK˜[œÚ][Û‘œ›ÛO[[\Ë—Ù\˜][ÛL\Ë—İ\™Ù][[\Ë—ÛÛ•\]O[[\Ë—ÛÛ•\]TØÛÜO[[\Ë—İÚ[™[[İ™Oİ\Ë›X[˜YÙ\‹œ™[[İ™J\ËšÙ^JN\Ë—İÚ[ÛY\İ\ËœŞ\İ[\ËœÛY\

N\Ë›X[˜YÙ\‹œİÜ
\ËšÙ^J_KY™[˜İ[ÛŠËKK
^Ü™]\›ˆ\Ë›X[˜YÙ\‹˜Y
ËKK
_K][˜Ú™[˜İ[ÛŠËJ^Ü™]\›ˆÉ‰œÈOO]\ËšÙ^I‰\Ë›X[˜YÙ\‹œ]Y]YSÜ
œİ\‹ËJK\ßK[™[˜İ[ÛŠËJ^Ü™]\›ˆÉ‰œÈOO]\ËšÙ^I‰\Ë›X[˜YÙ\‹œ]Y]YSÜ
œ[ˆ‹ËJK\ßK]\ÙN™[˜İ[ÛŠËJ^Ü™]\›ˆÏOO]›ÚY	‰ŠÏ]\ËšÙ^JK\Ë›X[˜YÙ\‹œ]Y]YSÜ
œ]\ÙH‹ËJK\ßK™\İ[YN™[˜İ[ÛŠËJ^Ü™]\›ˆÏOO]›ÚY	‰ŠÏ]\ËšÙ^JK\Ë›X[˜YÙ\‹œ]Y]YSÜ
œ™\İ[YH‹ËJK\ßKÛY\™[˜İ[ÛŠËJ^Ü™]\›ˆÏOO]›ÚY	‰ŠÏ]\ËšÙ^JK\Ë›X[˜YÙ\‹œ]Y]YSÜ
œÛY\‹ËJK\ßKØZÙN™[˜İ[ÛŠËJ^Ü™]\›ˆÏOO]›ÚY	‰ŠÏ]\ËšÙ^JK\Ë›X[˜YÙ\‹œ]Y]YSÜ
ØZÙH‹ËJK\ßKİÚ]Ú™[˜İ[ÛŠËJ^Ü™]\›ˆÈOO]\ËšÙ^I‰\Ë›X[˜YÙ\‹œ]Y]YSÜ
œİÚ]Ú‹\ËšÙ^KËJK\ßKİÜ™[˜İ[ÛŠËJ^Ü™]\›ˆÏOO]›ÚY	‰ŠÏ]\ËšÙ^JK\Ë›X[˜YÙ\‹œ]Y]YSÜ
œİÜ‹ËJK\ßKÙ]Xİ]™N™[˜İ[ÛŠËKJ^ØOOO]›ÚY	‰ŠO]\ËšÙ^JNİ˜\ˆ]\Ë›X[˜YÙ\‹™Ù]ØÙ[™JJNÜ™]\›ˆ	‰šœŞ\ËœÙ]Xİ]™JËJK\ßKÙ]š\ÚX›N™[˜İ[ÛŠËJ^ØOOO]›ÚY	‰ŠO]\ËšÙ^JNİ˜\ˆO]\Ë›X[˜YÙ\‹™Ù]ØÙ[™JJNÜ™]\›ˆI‰šKœŞ\ËœÙ]š\ÚX›JÊK\ßK\ÔÛY\[™Î™[˜İ[ÛŠÊ^Ü™]\›ˆÏOO]›ÚY	‰ŠÏ]\ËšÙ^JK\Ë›X[˜YÙ\‹š\ÔÛY\[™ÊÊ_K\ĞXİ]™N™[˜İ[ÛŠÊ^Ü™]\›ˆÏOO]›ÚY	‰ŠÏ]\ËšÙ^JK\Ë›X[˜YÙ\‹š\ĞXİ]™JÊ_K\Ô]\ÙY™[˜İ[ÛŠÊ^Ü™]\›ˆÏOO]›ÚY	‰ŠÏ]\ËšÙ^JK\Ë›X[˜YÙ\‹š\Ô]\ÙY
Ê_K\Õš\ÚX›N™[˜İ[ÛŠÊ^Ü™]\›ˆÏOO]›ÚY	‰ŠÏ]\ËšÙ^JK\Ë›X[˜YÙ\‹š\Õš\ÚX›JÊ_KİØ\ÜÚ][Û™[˜İ[ÛŠËJ^Ü™]\›ˆOOO]›ÚY	‰ŠO]\ËšÙ^JKÈOOXI‰\Ë›X[˜YÙ\‹œİØ\ÜÚ][ÛŠËJK\ßK[İ™PX›İ™N™[˜İ[ÛŠËJ^Ü™]\›ˆOOO]›ÚY	‰ŠO]\ËšÙ^JKÈOOXI‰\Ë›X[˜YÙ\‹›[İ™PX›İ™JËJK\ßK[İ™P™[İÎ™[˜İ[ÛŠËJ^Ü™]\›ˆOOO]›ÚY	‰ŠO]\ËšÙ^JKÈOOXI‰\Ë›X[˜YÙ\‹›[İ™P™[İÊËJK\ßK™[[İ™N™[˜İ[ÛŠÊ^Ü™]\›ˆÏOO]›ÚY	‰ŠÏ]\ËšÙ^JK\Ë›X[˜YÙ\‹œ™[[İ™JÊK\ßK[İ™U\™[˜İ[ÛŠÊ^Ü™]\›ˆÏOO]›ÚY	‰ŠÏ]\ËšÙ^JK\Ë›X[˜YÙ\‹›[İ™U\
ÊK\ßK[İ™QİÛ™[˜İ[ÛŠÊ^Ü™]\›ˆÏOO]›ÚY	‰ŠÏ]\ËšÙ^JK\Ë›X[˜YÙ\‹›[İ™QİÛŠÊK\ßKœš[™ÕÕÜ™[˜İ[ÛŠÊ^Ü™]\›ˆÏOO]›ÚY	‰ŠÏ]\ËšÙ^JK\Ë›X[˜YÙ\‹˜œš[™ÕÕÜ
ÊK\ßKÙ[™Ğ˜XÚÎ™[˜İ[ÛŠÊ^Ü™]\›ˆÏOO]›ÚY	‰ŠÏ]\ËšÙ^JK\Ë›X[˜YÙ\‹œÙ[™Ğ˜XÚÊÊK\ßKÙ]™[˜İ[ÛŠÊ^Ü™]\›ˆ\Ë›X[˜YÙ\‹™Ù]ØÙ[™JÊ_KÙ]İ]\Î™[˜İ[ÛŠÊ^İ˜\ˆO]\Ë›X[˜YÙ\‹™Ù]ØÙ[™JÊNÚYŠJ\™]\›ˆKœŞ\Ë™Ù]İ]\Ê
_KÙ][™^™[˜İ[ÛŠÊ^Ü™]\›ˆÏOO]›ÚY	‰ŠÏ]\ËšÙ^JK\Ë›X[˜YÙ\‹™Ù][™^
Ê_KÚ]İÛ™[˜İ[ÛŠ
^İ˜\ˆÏ]\ËœŞ\İ[\Ë™]™[ÎÜË›Ù™ŠË”ÒUÕÓ‹\ËœÚ]İÛ‹\ÊKË›Ù™ŠË•S”ÒUSÓ—ÓÕU
_K\İ›ŞN™[˜İ[ÛŠ
^İ\ËœÚ]İÛŠ
K\ËœØÙ[™KœŞ\Ë™]™[Ë›Ù™ŠË”ÕT•\Ëœİ\\ÊK\ËœØÙ[™O[[\ËœŞ\İ[\Ï[[\ËœÙ][™ÜÏ[[\Ë›X[˜YÙ\[[_JNÛ‹œ™YÚ\İ\Š”ØÙ[™TYÚ[ˆ‹KœØÙ[™TYÚ[ˆŠK™^ÜÏY_JKMMNŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆ]
NNLÊKÏ]
ÍLMM
KÏ]
MÍJK]
ÌÌÊK^ØÜ™X]N™[˜İ[ÛŠJ^Ü™]\›ˆ\[ÙˆOOHœİš[™ÈÙO^ÚÙ^N™_N™OOO]›ÚY	‰ŠO^ßJKÜİ]\Î›”S‘S‘ËÙ^N˜ÊKšÙ^H‹ˆŠKXİ]™N˜ÊK˜Xİ]™H‹LJKš\ÚX›N˜ÊKš\ÚX›H‹L
K\Ğ›ÛİYˆLK\Õ˜[œÚ][ÛˆLK˜[œÚ][Û‘œ›ÛN›[˜[œÚ][Û‘\˜][ÛŒ˜[œÚ][Û[İÒ[œ]ˆL]NßKXÚÎ˜ÊKœXÚÈ‹LJKØ[Y\˜\Î˜ÊK˜Ø[Y\˜\È‹[
KX\˜ÊK›X\‹Ê‹ÊK›X\Y‹ßJJJK\ÚXÜÎ˜ÊKœ\ÚXÜÈ‹ßJKØY\˜ÊK›ØY\ˆ‹ßJKYÚ[œÎ˜ÊKœYÚ[œÈ‹LJK[œ]˜ÊKš[œ]‹ßJ___NÜ™^ÜÏ[ŸJKŒÍŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆ]
ÍNJKÏ]
NNLÊKÏ]
ŒÍŒÊK]
NM
K]
ÌÎMÊKO]
LŒLŠKÏ]
MÍÊKO]
MMJKO[™]È
Ú[š]X[^™N™[˜İ[ÛŠK
^İ\ËœØÙ[™O]K\Ë™Ø[YK\Ëœ™[™\™\‹\Ë˜ÛÛ™šYÏY\ËœÙ][™ÜÏXK˜Ü™X]J
K\Ë˜Ø[˜\Ë\Ë˜ÛÛ^\Ë˜[š[\Ë\Ë˜ØXÚK\ËœYÚ[œË\Ëœ™YÚ\İK\ËœØØ[K\ËœÛİ[™\Ë^\™\Ë\Ë˜Y\Ë˜Ø[Y\˜\Ë\Ë™\Ü^S\İ\Ë™]™[Ë\Ë›XZÙK\ËœØÙ[™TYÚ[‹\Ë\]S\İ\ËœØÙ[™U\]O\ßK[š]™[˜İ[ÛŠ
^İ\ËœÙ][™ÜËœİ]\ÏXË’S’U\ËœØÙ[™U\]O\Ë\Ë™Ø[YOZ\Ëœ™[™\™\Zœ™[™\™\‹\Ë˜Ø[˜\ÏZ˜Ø[˜\Ë\Ë˜ÛÛ^Z˜ÛÛ^İ˜\ˆOZœYÚ[œÎİ\ËœYÚ[œÏ]KK˜YÔØÙ[™J\ËË‘ÛØ˜[ÛËÛÜ™TØÙ[™KJ\ÊKŠ\ÊWJK\Ë™]™[Ë™[Z]
‹“ÓÕ\ÊK\ËœÙ][™ÜËš\Ğ›ÛİYHLKİ\™[˜İ[ÛŠJ^İ˜\ˆ]\Ë™]™[ÎÙ™[Z]
‹”‘WÕTUKJK™[Z]
‹•TUKJK\ËœØÙ[™U\]K˜Ø[
\ËœØÙ[™KJK™[Z]
‹”ÔÕÕTUKJ_K™[™\™[˜İ[ÛŠ
^İ˜\ˆO]\Ë™\Ü^S\İİK™\ÛÜ

K\Ë™]™[Ë™[Z]
‹”‘WÔ‘S‘T‹
K\Ë˜Ø[Y\˜\Ëœ™[™\ŠJK\Ë™]™[Ë™[Z]
‹”‘S‘T‹
_K]Y]YQ\ÛÜ™[˜İ[ÛŠ
^İ\Ë™\Ü^S\İœ]Y]YQ\ÛÜ

_K\ÛÜ™[˜İ[ÛŠ
^İ\Ë™\Ü^S\İ™\ÛÜ

_K]\ÙN™[˜İ[ÛŠ
^İ˜\ˆO]\ËœÙ][™ÜË]\Ë™Ù]İ]\Ê
NÜ™]\›ˆOOXËÔ‘PUS‘É‰™OOXË”•S“’S‘ÏØÛÛœÛÛKØ\›ŠØ[››İ]\ÙH›Û‹\[›š[™ÈØÙ[™H‹KšÙ^JN\ËœÙ][™ÜË˜Xİ]™I‰ŠKœİ]\ÏXË”UTÑQK˜Xİ]™OHLK\Ë™]™[Ë™[Z]
‹”UTÑK\Ë
JK\ßK™\İ[YN™[˜İ[ÛŠ
^İ˜\ˆO]\Ë™]™[Ë]\ËœÙ][™ÜÎÜ™]\›ˆ\ËœÙ][™ÜË˜Xİ]™_
œİ]\ÏXË”•S“’S‘Ë˜Xİ]™OHLK™[Z]
‹”‘TÕSQK\Ë
JK\ßKÛY\™[˜İ[ÛŠ
^İ˜\ˆO]\ËœÙ][™ÜË]\Ë™Ù]İ]\Ê
NÜ™]\›ˆOOXËÔ‘PUS‘É‰™OOXË”•S“’S‘ÏØÛÛœÛÛKØ\›ŠØ[››İÛY\›Û‹\[›š[™ÈØÙ[™H‹KšÙ^JNŠKœİ]\ÏXË”ÓQTS‘ËK˜Xİ]™OHLKKš\ÚX›OHLK\Ë™]™[Ë™[Z]
‹”ÓQT\Ë
JK\ßKØZÙN™[˜İ[ÛŠ
^İ˜\ˆO]\Ë™]™[Ë]\ËœÙ][™ÜÎÜ™]\›ˆœİ]\ÏXË”•S“’S‘Ë˜Xİ]™OHLš\ÚX›OHLK™[Z]
‹•ĞRÑK\Ë
Kš\Õ˜[œÚ][Û‰‰K™[Z]
‹•S”ÒUSÓ—ÕĞRÑK˜[œÚ][Û‘œ›ÛK˜[œÚ][Û‘\˜][ÛŠK\ßKÙ]]N™[˜İ[ÛŠ
^Ü™]\›ˆ\ËœÙ][™ÜË™]_KÙ]İ]\Î™[˜İ[ÛŠ
^Ü™]\›ˆ\ËœÙ][™ÜËœİ]\ßKØ[’[œ]™[˜İ[ÛŠ
^İ˜\ˆ]\ËœÙ][™ÜËœİ]\ÎÜ™]\›ˆ˜Ë”S‘S‘É‰šXË”•S“’S‘ßK\ÔÛY\[™Î™[˜İ[ÛŠ
^Ü™]\›ˆ\ËœÙ][™ÜËœİ]\ÏOOXË”ÓQTS‘ßK\ĞXİ]™N™[˜İ[ÛŠ
^Ü™]\›ˆ\ËœÙ][™ÜËœİ]\ÏOOXË”•S“’S‘ßK\Ô]\ÙY™[˜İ[ÛŠ
^Ü™]\›ˆ\ËœÙ][™ÜËœİ]\ÏOOXË”UTÑQK\Õ˜[œÚ][Ûš[™Î™[˜İ[ÛŠ
^Ü™]\›ˆ\ËœÙ][™ÜËš\Õ˜[œÚ][ÛŸ\ËœØÙ[™TYÚ[‹—İ\™Ù]OO[[K\Õ˜[œÚ][Û“İ]™[˜İ[ÛŠ
^Ü™]\›ˆ\ËœØÙ[™TYÚ[‹—İ\™Ù]OO[[	‰\ËœØÙ[™TYÚ[‹—Ù\˜][ÛŒK\Õ˜[œÚ][Û’[™[˜İ[ÛŠ
^Ü™]\›ˆ\ËœÙ][™ÜËš\Õ˜[œÚ][ÛŸK\Õš\ÚX›N™[˜İ[ÛŠ
^Ü™]\›ˆ\ËœÙ][™ÜËš\ÚX›_KÙ]š\ÚX›N™[˜İ[ÛŠ
^Ü™]\›ˆ\ËœÙ][™ÜËš\ÚX›OZ\ßKÙ]Xİ]™N™[˜İ[ÛŠJ^Ü™]\›ˆİ\Ëœ™\İ[YJJN\Ëœ]\ÙJJ_Kİ\™[˜İ[ÛŠ
^İ˜\ˆO]\Ë™]™[Ë]\ËœÙ][™ÜÎÚ	‰Š™]OZ
Kœİ]\ÏXË”ÕT•˜Xİ]™OHLš\ÚX›OHLK™[Z]
‹”ÕT•\ÊKK™[Z]
‹”‘PQK\Ë
_KÚ]İÛ™[˜İ[ÛŠ
^İ˜\ˆO]\Ë™]™[Ë]\ËœÙ][™ÜÎİK›Ù™Š‹•S”ÒUSÓ—ÒS’U
KK›Ù™Š‹•S”ÒUSÓ—ÔÕT•
KK›Ù™Š‹•S”ÒUSÓ—ĞÓÓTUJKK›Ù™Š‹•S”ÒUSÓ—ÓÕU
Kœİ]\ÏXË”ÒUÕÓ‹˜Xİ]™OHLKš\ÚX›OHLKK™[Z]
‹”ÒUÕÓ‹\Ë
_K\İ›ŞN™[˜İ[ÛŠ
^İ˜\ˆ]\Ë™]™[ËO]\ËœÙ][™ÜÎİKœİ]\ÏXË‘TÕ“ÖQQK˜Xİ]™OHLKKš\ÚX›OHLK™[Z]
‹‘TÕ“ÖK\ÊKœ™[[İ™P[\İ[™\œÊ
NÙ›ÜŠ˜\ˆVÈœØÙ[™H‹™Ø[YH‹˜[š[\È‹˜ØXÚH‹œYÚ[œÈ‹œ™YÚ\İH‹œÛİ[™‹^\™\È‹˜Y‹˜Ø[Y\˜H‹™\Ü^S\İ‹™]™[È‹›XZÙH‹œØÙ[™TYÚ[ˆ‹\]S\İ—KLÙ›[™İÙŠÊÊ]\ÖÙÙ—WO[[_JNÜ™^ÜÏZ_JKNNLÎŠOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆO^ÔS‘S‘ÎŒS’UŒKÕT•Œ‹ĞQS‘ÎŒËÔ‘PUS‘Î•S“’S‘ÎKUTÑQ‹ÓQTS‘ÎËÒUÕÓTÕ“ÖQQ_NÜ™^ÜÏ^_JKNÌŠOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹Ü™^ÜÏH˜YYÜØÙ[™HŸJKÎLNNŠOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹Ü™^ÜÏH˜›ÛİŸJKÍŒÎŠOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹Ü™^ÜÏH˜Ü™X]HŸJKLMÍŒÎŠOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹Ü™^ÜÏH™\İ›ŞHŸJKÌMMMNŠOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹Ü™^ÜÏHœ]\ÙHŸJKÍÌÍNŠOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹Ü™^ÜÏHœÜİ\]HŸJKÎNŠOËÊŠ‚ˆ
ˆ]]ÜˆØ[[YBˆ
ˆÛÜ\šYÚŒŒHİÛˆİÜ›H‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹Ü™^ÜÏHœ™\™[™\ˆŸJKLÌMŠOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹Ü™^ÜÏHœ™]\]HŸJKNŒŠOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹Ü™^ÜÏHœ™XYHŸJKLMŒÌÎŠOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹Ü™^ÜÏHœ™[[İ™Yœ›Û\ØÙ[™HŸJKLÌNNŠOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹Ü™^ÜÏHœ™[™\ˆŸJKÌLÌŠOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹Ü™^ÜÏHœ™\İ[YHŸJKNMŒNŠOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹Ü™^ÜÏHœÚ]İÛˆŸJKLNMŠOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹Ü™^ÜÏHœÛY\ŸJKŒNŠOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹Ü™^ÜÏHœİ\ŸJKÌÌMÎŠOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹Ü™^ÜÏH˜[œÚ][Û˜ÛÛ\]HŸJKÌŒÎŠOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹Ü™^ÜÏH˜[œÚ][Ûš[š]ŸJKLLNNŠOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹Ü™^ÜÏH˜[œÚ][Û›İ]ŸJKŒMŒLNŠOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹Ü™^ÜÏH˜[œÚ][Ûœİ\ŸJKLŒNŠOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹Ü™^ÜÏH˜[œÚ][ÛØZÙHŸJKŒMŠOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹Ü™^ÜÏH\]HŸJKŒMÍÎŠOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹Ü™^ÜÏHØZÙHŸJKNMŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹Ü™^ÜÏ^ĞQQÕ×ÔĞÑS‘N
NÌ
K“ÓÕ
ÎLNJKÔ‘PUN
ÍŒÊKTÕ“ÖN
LMÍŒÊKUTÑN
ÌMMMJKÔÕÕTUN
ÍÌÍJK‘WÔ‘S‘T
ÎJK‘WÕTUN
LÌMŠK‘PQN
NŒŠK‘SSÕ‘QÑ”“ÓWÔĞÑS‘N
LMŒÌÊK‘S‘T
LÌNJK‘TÕSQN
ÌLÌŠKÒUÕÓ
NMŒJKÓQT
LNM
KÕT•
ŒJKS”ÒUSÓ—ĞÓÓTUN
ÌÌMÎ
KS”ÒUSÓ—ÒS’U
ÌŒÊKS”ÒUSÓ—ÓÕU
LLNJKS”ÒUSÓ—ÔÕT•
ŒMŒLJKS”ÒUSÓ—ÕĞRÑN
LŒJKTUN
ŒMŠKĞRÑN
ŒMÍÊ__JKŒŒNMŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆ]
NNLÊKÏ]
ÎLLJKÏ^Ñ]™[Î
NM
KÙ]\ÚXÜÔYÚ[œÎ
ÌÎMÊKÙ]ØÙ[™TYÚ[œÎ
LŒLŠKØÙ[™SX[˜YÙ\
ŒLÊKØÙ[™TYÚ[
LŒŒJKÙ][™ÜÎ
MMJKŞ\İ[\Î
ŒÍ
_NÛÏXÊLKË
K™^ÜÏ[ßJKÌÍNŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆ]]Üˆ]›HÛÛÜÚÛÚÛİšXÈÛÛÜÚÛÚÛİšXĞÛXZ[˜ÛÛOˆ
‹ËÜ[™YØ[Y\Ë˜ÛÛJBˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆ]
ÍNJKÏ]
LÎLŠKÏ]
MŒÊK]
ÎLLJK]
MÍÊKO[™]È
Ñ^[™Î˜Ë[š]X[^™N™[˜İ[ÛŠKK
^ØË˜Ø[
\ÊK\Ë›X[˜YÙ\XK\ËšÙ^OZK\Ëš\Ô^Z[™ÏHLK\Ëš\Ô]\ÙYHLK\Ëİ[˜]OLK\Ë™\˜][Û]\Ë™\˜][ÛŸ\Ëİ[\˜][Û]\Ëİ[\˜][ÛŸ\Ë˜ÛÛ™šYÏ^Û]]NˆLK›Û[YNŒK˜]NŒK][™NŒÙYZÎŒÛÜˆLK[^NŒ[ŒK\Ë˜İ\œ™[ÛÛ™šYÏ]\Ë˜ÛÛ™šYË\Ë˜ÛÛ™šYÏ\Š\Ë˜ÛÛ™šYË
K\Ë›X\šÙ\œÏ^ßK\Ë˜İ\œ™[X\šÙ\[[\Ëœ[™[™Ô™[[İ™OHL_KYX\šÙ\™[˜İ[ÛŠÊ^Ü™]\›ˆ\ß\Ë›˜[Y_\[ÙˆË›˜[YHOHœİš[™ÈÈLN\Ë›X\šÙ\œÖÜË›˜[YWOÊÛÛœÛÛK™\œ›ÜŠ˜YX\šÙ\ˆŠÜË›˜[YJÈˆ[™XYH^\İÈ[ˆÛİ[™ŠKLJNŠÏ\ŠLÛ˜[YNˆˆ‹İ\Œ\˜][Û\Ëİ[\˜][Û‹JËœİ\
KÛÛ™šYÎÛ]]NˆLK›Û[YNŒK˜]NŒK][™NŒÙYZÎŒÛÜˆLK[^NŒ[Œ_KÊK\Ë›X\šÙ\œÖÜË›˜[YWO\ËL
_K\]SX\šÙ\™[˜İ[ÛŠÊ^Ü™]\›ˆ\ß\Ë›˜[Y_\[ÙˆË›˜[YHOHœİš[™ÈÈLN\Ë›X\šÙ\œÖÜË›˜[YWOÊ\Ë›X\šÙ\œÖÜË›˜[YWO\ŠL\Ë›X\šÙ\œÖÜË›˜[YWKÊKL
NŠÛÛœÛÛKØ\›Š]Y[ÈX\šÙ\ˆŠÜË›˜[YJÈˆZ\ÜÚ[™È[ˆÛİ[™ˆŠİ\ËšÙ^JKLJ_K™[[İ™SX\šÙ\™[˜İ[ÛŠÊ^İ˜\ˆO]\Ë›X\šÙ\œÖÜ×NÜ™]\›ˆOÊ\Ë›X\šÙ\œÖÜ×O[[JN›[K^N™[˜İ[ÛŠËJ^ÚYŠÏOO]›ÚY	‰ŠÏHˆŠK\[ÙˆÏOH›Øš™Xİ‰‰ŠO\ËÏHˆŠK\[ÙˆÈOHœİš[™ÈŠ\™]\›ˆLNÚYŠ\Ê]\Ë˜İ\œ™[X\šÙ\[[\Ë˜İ\œ™[ÛÛ™šYÏ]\Ë˜ÛÛ™šYË\Ë™\˜][Û]\Ëİ[\˜][ÛÙ[Ù^ÚYŠ]\Ë›X\šÙ\œÖÜ×J\™]\›ˆÛÛœÛÛKØ\›Š“X\šÙ\ˆŠÜÊÈˆZ\ÜÚ[™È[ˆÛİ[™ˆŠİ\ËšÙ^JKLNİ\Ë˜İ\œ™[X\šÙ\]\Ë›X\šÙ\œÖÜ×K\Ë˜İ\œ™[ÛÛ™šYÏ]\Ë˜İ\œ™[X\šÙ\‹˜ÛÛ™šYË\Ë™\˜][Û]\Ë˜İ\œ™[X\šÙ\‹™\˜][ÛŸ\™]\›ˆ\Ëœ™\Ù]ÛÛ™šYÊ
K\Ë˜İ\œ™[ÛÛ™šYÏ\Š\Ë˜İ\œ™[ÛÛ™šYËJK\Ëš\Ô^Z[™ÏHL\Ëš\Ô]\ÙYHLKLK]\ÙN™[˜İ[ÛŠ
^Ü™]\›ˆ\Ëš\Ô]\ÙY]\Ëš\Ô^Z[™ÏÈLNŠ\Ëš\Ô^Z[™ÏHLK\Ëš\Ô]\ÙYHLL
_K™\İ[YN™[˜İ[ÛŠ
^Ü™]\›ˆ]\Ëš\Ô]\ÙY\Ëš\Ô^Z[™ÏÈLNŠ\Ëš\Ô^Z[™ÏHL\Ëš\Ô]\ÙYHLKL
_KİÜ™[˜İ[ÛŠ
^Ü™]\›ˆ]\Ëš\Ô]\ÙY	‰ˆ]\Ëš\Ô^Z[™ÏÈLNŠ\Ëš\Ô^Z[™ÏHLK\Ëš\Ô]\ÙYHLK\Ëœ™\Ù]ÛÛ™šYÊ
KL
_K\PÛÛ™šYÎ™[˜İ[ÛŠ
^İ\Ë›]]O]\Ë˜İ\œ™[ÛÛ™šYË›]]K\Ë›Û[YO]\Ë˜İ\œ™[ÛÛ™šYË›Û[YK\Ëœ˜]O]\Ë˜İ\œ™[ÛÛ™šYËœ˜]K\Ë™][™O]\Ë˜İ\œ™[ÛÛ™šYË™][™K\Ë›ÛÜ]\Ë˜İ\œ™[ÛÛ™šYË›ÛÜ\Ëœ[]\Ë˜İ\œ™[ÛÛ™šYËœ[ŸK™\Ù]ÛÛ™šYÎ™[˜İ[ÛŠ
^İ\Ë˜İ\œ™[ÛÛ™šYËœÙYZÏL\Ë˜İ\œ™[ÛÛ™šYË™[^OLK\]N›‹Ø[İ[]T˜]N™[˜İ[ÛŠ
^İ˜\ˆÏLKŒMÍÍÎMLMMO]\Ë˜İ\œ™[ÛÛ™šYË™][™Jİ\Ë›X[˜YÙ\‹™][™KOSX]œİÊËJNİ\Ëİ[˜]O]\Ë˜İ\œ™[ÛÛ™šYËœ˜]J\Ë›X[˜YÙ\‹œ˜]Jš_K\İ›ŞN™[˜İ[ÛŠ
^İ\Ëœ[™[™Ô™[[İ™_
\ËœİÜ

K\Ë™[Z]
Ë‘TÕ“ÖK\ÊK\Ëœ™[[İ™P[\İ[™\œÊ
K\Ëœ[™[™Ô™[[İ™OHL\Ë›X[˜YÙ\[[\Ë˜ÛÛ™šYÏ[[\Ë˜İ\œ™[ÛÛ™šYÏ[[\Ë›X\šÙ\œÏ[[\Ë˜İ\œ™[X\šÙ\[[
__JNÜ™^ÜÏY_JKLÍŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆ]]Üˆ]›HÛÛÜÚÛÚÛİšXÈÛÛÜÚÛÚÛİšXĞÛXZ[˜ÛÛOˆ
‹ËÜ[™YØ[Y\Ë˜ÛÛJBˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆ]
ÍNJKÏ]
MÎŠKÏ]
LÎLŠK]
MŒÊK]
ÊKO]
ÌL
KÏ]
NÌÌJKO]
MÍÊKO]
ŒNJK[™]È
Ñ^[™Î›Ë[š]X[^™N™[˜İ[ÛŠ
^ÛË˜Ø[
\ÊK\Ë™Ø[YOY\ËšœÛÛØXÚOY˜ØXÚKšœÛÛ‹\ËœÛİ[™ÏV×K\Ë›]]OHLK\Ë›Û[YOLK\Ëœ]\ÙSÛ›\HL\Ë—Ü˜]OLK\Ë—Ù][™OL\Ë›ØÚÙY]\Ë›ØÚÙYLK\Ë[›ØÚÙYHLK\Ë™Ø[YSÜİ›Øİ\ÏHLK\Ë›\İ[™\”ÜÚ][Û[™]ÈNİ˜\ˆY™]™[ÎÙ‹›ÛŠ‹“T‹\Ë›Û‘Ø[YP›\‹\ÊK‹›ÛŠ‹‘“ĞÕTË\Ë›Û‘Ø[YQ›Øİ\Ë\ÊK‹›ÛŠ‹”‘WÔÕT\Ë\]K\ÊK‹›Û˜ÙJ‹‘TÕ“ÖK\Ë™\İ›ŞK\Ê_KY˜KY]Y[ÔÜš]N™[˜İ[ÛŠK
^ÙOO]›ÚY	‰Š^ßJNİ˜\ˆ]\Ë˜Y
K
NÙ‹œÜš][X\]\ËšœÛÛØXÚK™Ù]
JKœÜš][X\Ù›ÜŠ˜\ˆˆ[ˆ‹œÜš][X\
ZYŠ‹œÜš][X\š\ÓİÛ”›Ü\JŠJ^İ˜\ˆOXÊ
KY‹œÜš][X\İ—NÛK›ÛÜ^š\ÓİÛ”›Ü\J›ÛÜŠOŞ›ÛÜˆLK‹˜YX\šÙ\ŠÛ˜[YN‹İ\œİ\\˜][Û™[™^œİ\ÛÛ™šYÎ›_J_\™]\›ˆŸKÙ]™[˜İ[ÛŠJ^Ü™]\›ˆÊ\ËœÛİ[™ËšÙ^H‹J_KÙ][™[˜İ[ÛŠJ^Ü™]\›ˆOÙJ\ËœÛİ[™ËšÙ^H‹JN™J\ËœÛİ[™Ê_KÙ][^Z[™Î™[˜İ[ÛŠ
^Ü™]\›ˆJ\ËœÛİ[™Ëš\Ô^Z[™È‹L
_K^N™[˜İ[ÛŠK
^İ˜\ˆ]\Ë˜Y
JNÜ™]\›ˆ‹›Û˜ÙJ‹ÓÓTUK‹™\İ›ŞKŠKÙ›˜[YOÊ‹˜YX\šÙ\Š
K‹œ^J›˜[YJJN™‹œ^J
N™‹œ^J
_K^P]Y[ÔÜš]N™[˜İ[ÛŠKŠ^İ˜\ˆ]\Ë˜Y]Y[ÔÜš]JJNÜ™]\›ˆ‹›Û˜ÙJ‹ÓÓTUK‹™\İ›ŞKŠK‹œ^JŠ_K™[[İ™N™[˜İ[ÛŠJ^İ˜\ˆ]\ËœÛİ[™Ëš[™^ÙŠJNÜ™]\›ˆOOKLOÊK™\İ›ŞJ
K\ËœÛİ[™ËœÜXÙJJKL
NˆL_K™[[İ™P[™[˜İ[ÛŠ
^İ\ËœÛİ[™Ë™›Ü‘XXÚ
[˜İ[ÛŠJ^İK™\İ›ŞJ
_JK\ËœÛİ[™Ë›[™İLK™[[İ™PRÙ^N™[˜İ[ÛŠJ^Ù›ÜŠ˜\ˆL]\ËœÛİ[™Ë›[™İLNÙLÙ‹KJ^İ˜\ˆ]\ËœÛİ[™ÖÙ—Nİ‹šÙ^OOO]I‰Š‹™\İ›ŞJ
K\ËœÛİ[™ËœÜXÙJ‹JK
ÊÊ_\™]\›ˆK]\ÙP[™[˜İ[ÛŠ
^İ\Ë™›Ü‘XXÚXİ]™TÛİ[™
[˜İ[ÛŠJ^İKœ]\ÙJ
_JK\Ë™[Z]
‹”UTÑWĞS\Ê_K™\İ[YP[™[˜İ[ÛŠ
^İ\Ë™›Ü‘XXÚXİ]™TÛİ[™
[˜İ[ÛŠJ^İKœ™\İ[YJ
_JK\Ë™[Z]
‹”‘TÕSQWĞS\Ê_KÙ]\İ[™\”ÜÚ][Û˜KİÜ[™[˜İ[ÛŠ
^İ\Ë™›Ü‘XXÚXİ]™TÛİ[™
[˜İ[ÛŠJ^İKœİÜ

_JK\Ë™[Z]
‹”ÕÔĞS\Ê_KİÜRÙ^N™[˜İ[ÛŠJ^İ˜\ˆLÜ™]\›ˆ\Ë™Ù][
JK™›Ü‘XXÚ
[˜İ[ÛŠŠ^Ù‹œİÜ

I‰™
ÊßJKK\Ô^Z[™Î™[˜İ[ÛŠJ^İ˜\ˆ]\ËœÛİ[™ËY›[™İLKÚYŠOOO]›ÚY
^Ù›ÜŠÙLÙ‹KJZYŠ]\ËœÛİ[™ÖÙ—K‹š\Ô^Z[™Ê\™]\›ˆLY[ÙH›ÜŠÙLÙ‹KJZYŠ]\ËœÛİ[™ÖÙ—K‹šÙ^OOO]I‰‹š\Ô^Z[™Ê\™]\›ˆLÜ™]\›ˆL_K[›ØÚÎ˜KÛ›\˜KÛ‘›Øİ\Î˜KÛ‘Ø[YP›\™[˜İ[ÛŠ
^İ\Ë™Ø[YSÜİ›Øİ\ÏHL\Ëœ]\ÙSÛ›\‰‰\Ë›Û›\Š
_KÛ‘Ø[YQ›Øİ\Î™[˜İ[ÛŠ
^İ\Ë™Ø[YSÜİ›Øİ\ÏHLK\Ëœ]\ÙSÛ›\‰‰\Ë›Û‘›Øİ\Ê
_K\]N™[˜İ[ÛŠK
^İ\Ë[›ØÚÙY	‰Š\Ë[›ØÚÙYHLK\Ë›ØÚÙYHLK\Ë™[Z]
‹•S“ĞÒÑQ\ÊJNÙ›ÜŠ˜\ˆ]\ËœÛİ[™Ë›[™İLNÙLÙ‹KJ]\ËœÛİ[™ÖÙ—Kœ[™[™Ô™[[İ™I‰\ËœÛİ[™ËœÜXÙJ‹JNİ\ËœÛİ[™Ë™›Ü‘XXÚ
[˜İ[ÛŠŠ^İ‹\]JK
_J_K\İ›ŞN™[˜İ[ÛŠ
^İ\Ë™Ø[YK™]™[Ë›Ù™Š‹“T‹\Ë›Û‘Ø[YP›\‹\ÊK\Ë™Ø[YK™]™[Ë›Ù™Š‹‘“ĞÕTË\Ë›Û‘Ø[YQ›Øİ\Ë\ÊK\Ë™Ø[YK™]™[Ë›Ù™Š‹”‘WÔÕT\Ë\]K\ÊK\Ëœ™[[İ™P[\İ[™\œÊ
K\Ëœ™[[İ™P[

K\ËœÛİ[™Ë›[™İL\ËœÛİ[™Ï[[\Ë›\İ[™\”ÜÚ][Û[[\Ë™Ø[YO[[K›Ü‘XXÚXİ]™TÛİ[™™[˜İ[ÛŠK
^İ˜\ˆ]\Îİ\ËœÛİ[™Ë™›Ü‘XXÚ
[˜İ[ÛŠ‹J^İ‰‰ˆ]‹œ[™[™Ô™[[İ™I‰K˜Ø[
‹‹K‹œÛİ[™Ê_J_KÙ]˜]N™[˜İ[ÛŠJ^Ü™]\›ˆ\Ëœ˜]O]K\ßK˜]NÙÙ]™[˜İ[ÛŠ
^Ü™]\›ˆ\Ë—Ü˜]_KÙ]™[˜İ[ÛŠJ^İ\Ë—Ü˜]O]K\Ë™›Ü‘XXÚXİ]™TÛİ[™
[˜İ[ÛŠ
^Ù˜Ø[İ[]T˜]J
_JK\Ë™[Z]
‹‘ÓĞSÔUK\ËJ__KÙ]][™N™[˜İ[ÛŠJ^Ü™]\›ˆ\Ë™][™O]K\ßK][™NÙÙ]™[˜İ[ÛŠ
^Ü™]\›ˆ\Ë—Ù][™_KÙ]™[˜İ[ÛŠJ^İ\Ë—Ù][™O]K\Ë™›Ü‘XXÚXİ]™TÛİ[™
[˜İ[ÛŠ
^Ù˜Ø[İ[]T˜]J
_JK\Ë™[Z]
‹‘ÓĞSÑUS‘K\ËJ___JNÜ™^ÜÏZJKMÍÎŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆ]]Üˆ]›HÛÛÜÚÛÚÛİšXÈÛÛÜÚÛÚÛİšXĞÛXZ[˜ÛÛOˆ
‹ËÜ[™YØ[Y\Ë˜ÛÛJBˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆ]
ÌÍ
KÏ]
NMŒ
KÏ]
MÍL
K^ØÜ™X]N™[˜İ[ÛŠŠ^İ˜\ˆO[‹˜ÛÛ™šYË˜]Y[ËÏ[‹™]šXÙK˜]Y[ÎÜ™]\›ˆK››Ğ]Y[ß\ËÙX]Y[É‰ˆ\Ë˜]Y[Ñ]OÛ™]ÈÊŠNœËÙX]Y[É‰ˆYK™\ØX›UÙX]Y[ÏÛ™]ÈÊŠN›™]È
Š__NÜ™^ÜÏ\ŸJKNMÌŒÎŠOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹Ü™^ÜÏH˜ÛÛ\]HŸJKNŠOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹Ü™^ÜÏH™XÛÙY[ŸJKMÍLŠOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹Ü™^ÜÏH™XÛÙYŸJKÌÌMŠOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹Ü™^ÜÏH™\İ›ŞHŸJKLLÌNŠOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹Ü™^ÜÏH™][™HŸJKMÍÎŠOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹Ü™^ÜÏH™][™HŸJKÌÌÌÎŠOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹Ü™^ÜÏH›]]HŸJKŒÎMŠOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹Ü™^ÜÏHœ˜]HŸJKŒNŠOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹Ü™^ÜÏH›Û[YHŸJKLNNŠOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹Ü™^ÜÏH›ÛÜYŸJKNLNLŠOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹Ü™^ÜÏH›ÛÜŸJKMÌLNŠOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹Ü™^ÜÏH›]]HŸJKLNNŠOËÊŠ‚ˆ
ˆ]]ÜˆKZÙZBˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹Ü™^ÜÏHœ[ˆŸJKÎNNŠOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹Ü™^ÜÏHœ]\ÙX[ŸJKMÍNŠOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹Ü™^ÜÏHœ]\ÙHŸJKNMŒNŠOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹Ü™^ÜÏHœ^HŸJKŒÌŠOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹Ü™^ÜÏHœ˜]HŸJKLÎÎŠOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹Ü™^ÜÏHœ™\İ[YX[ŸJKMNNŠOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹Ü™^ÜÏHœ™\İ[YHŸJKNMŒŠOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹Ü™^ÜÏHœÙYZÈŸJKNLNŠOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹Ü™^ÜÏHœİÜ[ŸJKNÌŠOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹Ü™^ÜÏHœİÜŸJKLNŠOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹Ü™^ÜÏH[›ØÚÙYŸJKLNŠOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹Ü™^ÜÏH›Û[YHŸJKMŒÎŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹Ü™^ÜÏ^ĞÓÓTUN
NMÌŒÊKPÓÑQ
MÍLŠKPÓÑQĞS
NŠKTÕ“ÖN
ÌÌMŠKUS‘N
LLÌJKÓĞSÑUS‘N
MÍÊKÓĞSÓUUN
ÌÌÌÊKÓĞSÔUN
ŒÎM
KÓĞSÕ“ÓSQN
ŒNŠKÓÔ
NLNL
KÓÔQ
LNJKUUN
MÌLJKS
LNJKUTÑWĞS
ÎNNŠKUTÑN
MÍNŠKVN
NMŒN
KUN
ŒÌŠK‘TÕSQWĞS
LÎÊK‘TÕSQN
MNJKÑQRÎ
NMŒ
KÕÔĞS
NLN
KÕÔ
NÌ
KS“ĞÒÑQ
LJK“ÓSQN
LN
__JKMNŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆ]]Üˆ]›HÛÛÜÚÛÚÛİšXÈÛÛÜÚÛÚÛİšXĞÛXZ[˜ÛÛOˆ
‹ËÜ[™YØ[Y\Ë˜ÛÛJBˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆ]
ÌÍJKÏ]
ÍNJKÏ]
MŒÊK]
LÌNJK[™]ÈÊÑ^[™Î›[š]X[^™N™[˜İ[ÛŠËKJ^ÚYŠOOO]›ÚY	‰ŠO^ßJK\ËYÜÏ\Ë™Ø[YK˜ØXÚK˜]Y[Ë™Ù]
JK]\ËYÜÊ]›İÈ™]È\œ›ÜŠ	Ó›ÈØXÚY]Y[È\ÜÙ]Ú]Ù^H‰ÊØJNİ\Ë˜]Y[Ï[[\Ëœİ\[YOL\Ëœ™]š[İ\Õ[YOL\Ë™\˜][Û]\ËYÜÖÌK™\˜][Û‹\Ëİ[\˜][Û]\ËYÜÖÌK™\˜][Û‹˜Ø[
\ËËKJ_K^N™[˜İ[ÛŠKÊ^Ü™]\›ˆ\Ë›X[˜YÙ\‹š\ÓØÚÙY
\Ëœ^H‹ÙK×J_[œ›İİ\Kœ^K˜Ø[
\ËKÊ_]\ËœXÚĞ[™^P]Y[ÕYÊ
OÈLNŠ\Ë™[Z]
Ë”VK\ÊKL
_K]\ÙN™[˜İ[ÛŠ
^Ü™]\›ˆ\Ë›X[˜YÙ\‹š\ÓØÚÙY
\Ëœ]\ÙHŠ_\Ëœİ\[YOŒ[œ›İİ\Kœ]\ÙK˜Ø[
\ÊOÈLNŠ\Ë˜İ\œ™[ÛÛ™šYËœÙYZÏ]\Ë˜]Y[Ë˜İ\œ™[[YKJ\Ë˜İ\œ™[X\šÙ\İ\Ë˜İ\œ™[X\šÙ\‹œİ\Œ
K\ËœİÜ[™™[X\ÙP]Y[ÕYÊ
K\Ë™[Z]
Ë”UTÑK\ÊKL
_K™\İ[YN™[˜İ[ÛŠ
^Ü™]\›ˆ\Ë›X[˜YÙ\‹š\ÓØÚÙY
\Ëœ™\İ[YHŠ_\Ëœİ\[YOŒ[œ›İİ\Kœ™\İ[YK˜Ø[
\Ê_]\ËœXÚĞ[™^P]Y[ÕYÊ
OÈLNŠ\Ë™[Z]
Ë”‘TÕSQK\ÊKL
_KİÜ™[˜İ[ÛŠ
^Ü™]\›ˆ\Ë›X[˜YÙ\‹š\ÓØÚÙY
\ËœİÜŠ_[œ›İİ\KœİÜ˜Ø[
\ÊOÈLNŠ\ËœİÜ[™™[X\ÙP]Y[ÕYÊ
K\Ë™[Z]
Ë”ÕÔ\ÊKL
_KXÚĞ[™^P]Y[ÕYÎ™[˜İ[ÛŠ
^ÚYŠ]\ËœXÚĞ]Y[ÕYÊ
J\™]\›ˆ\Ëœ™\Ù]

KLNİ˜\ˆO]\Ë˜İ\œ™[ÛÛ™šYËœÙYZËÏ]\Ë˜İ\œ™[ÛÛ™šYË™[^KOJ\Ë˜İ\œ™[X\šÙ\İ\Ë˜İ\œ™[X\šÙ\‹œİ\Œ
JÙNÜ™]\›ˆ\Ëœ™]š[İ\Õ[YOXK\Ë˜]Y[Ë˜İ\œ™[[YOXK\Ë˜\PÛÛ™šYÊ
KÏOOLÊ\Ëœİ\[YOL\Ë˜]Y[Ëœ]\ÙY	‰\Ëœ^PØ]Ú›ÛZ\ÙJ
JNŠ\Ëœİ\[YO]Ú[™İËœ\™›Ü›X[˜ÙK››İÊ
JÜÊŒYLË\Ë˜]Y[Ëœ]\ÙY\Ë˜]Y[Ëœ]\ÙJ
JK\Ëœ™\Ù]ÛÛ™šYÊ
KLKXÚĞ]Y[ÕYÎ™[˜İ[ÛŠ
^ÚYŠ\Ë˜]Y[Ê\™]\›ˆLÙ›ÜŠ˜\ˆOLÙO\ËYÜË›[™İÙJÊÊ^İ˜\ˆÏ]\ËYÜÖÙWNÚYŠË™]\Ù]\ÙYOOH™˜[ÙHŠ\™]\›ˆË™]\Ù]\ÙYHYH‹\Ë˜]Y[Ï\ËLZYŠ]\Ë›X[˜YÙ\‹›İ™\œšYJ\™]\›ˆLNİ˜\ˆOV×Nİ\Ë›X[˜YÙ\‹™›Ü‘XXÚXİ]™TÛİ[™
[˜İ[ÛŠ
^ÚšÙ^OOO]\ËšÙ^I‰š˜]Y[É‰˜Kœ\Ú

_K\ÊKKœÛÜ
[˜İ[ÛŠJ^Ü™]\›ˆ›ÛÜOO]K›ÛÜİKœÙYZËİK™\˜][Û‹ZœÙYZËÚ™\˜][Ûš›ÛÜÌN‹L_JNİ˜\ˆOXVÌNÜ™]\›ˆ\Ë˜]Y[ÏZK˜]Y[ËKœ™\Ù]

KK˜]Y[Ï[[Kœİ\[YOLKœ™]š[İ\Õ[YOLLK^PØ]Ú›ÛZ\ÙN™[˜İ[ÛŠ
^İ˜\ˆO]\Ë˜]Y[Ëœ^J
NÙI‰™K˜Ø]Ú
[˜İ[ÛŠÊ^ØÛÛœÛÛKØ\›ŠÊ_J_KİÜ[™™[X\ÙP]Y[ÕYÎ™[˜İ[ÛŠ
^İ\Ëœİ\[YOL\Ëœ™]š[İ\Õ[YOL\Ë˜]Y[É‰Š\Ë˜]Y[Ëœ]\ÙJ
K\Ë˜]Y[Ë™]\Ù]\ÙYH™˜[ÙH‹\Ë˜]Y[Ï[[
_K™\Ù]™[˜İ[ÛŠ
^Ûœ›İİ\KœİÜ˜Ø[
\Ê_KÛ›\™[˜İ[ÛŠ
^İ\Ëš\Ô^Z[™ÏHLK\Ëš\Ô]\ÙYHL\Ë˜İ\œ™[ÛÛ™šYËœÙYZÏ]\Ë˜]Y[Ë˜İ\œ™[[YKJ\Ë˜İ\œ™[X\šÙ\İ\Ë˜İ\œ™[X\šÙ\‹œİ\Œ
K\Ë˜İ\œ™[ÛÛ™šYË™[^OSX]›X^

\Ëœİ\[YK]Ú[™İËœ\™›Ü›X[˜ÙK››İÊ
JKÌYLÊK\ËœİÜ[™™[X\ÙP]Y[ÕYÊ
_KÛ‘›Øİ\Î™[˜İ[ÛŠ
^İ\Ëš\Ô^Z[™ÏHL\Ëš\Ô]\ÙYHLK\ËœXÚĞ[™^P]Y[ÕYÊ
_K\]N™[˜İ[ÛŠJ^ÚYŠ\Ëš\Ô^Z[™Ê^ÚYŠ\Ëœİ\[YOŒ
^İ\Ëœİ\[YOK]\Ë›X[˜YÙ\‹˜]Y[Ô^Q[^I‰Š\Ë˜]Y[Ë˜İ\œ™[[YJÏSX]›X^
K]\Ëœİ\[YJKÌYLË\Ëœİ\[YOL\Ëœ™]š[İ\Õ[YO]\Ë˜]Y[Ë˜İ\œ™[[YK\Ëœ^PØ]Ú›ÛZ\ÙJ
JNÜ™]\›Ÿ]˜\ˆÏ]\Ë˜İ\œ™[X\šÙ\İ\Ë˜İ\œ™[X\šÙ\‹œİ\ŒO\Êİ\Ë™\˜][Û‹O]\Ë˜]Y[Ë˜İ\œ™[[YNÚYŠ\Ë˜İ\œ™[ÛÛ™šYË›ÛÜ
ZOXK]\Ë›X[˜YÙ\‹›ÛÜ[™Ù™œÙ]Ê\Ë˜]Y[Ë˜İ\œ™[[YO\ÊÓX]›X^
KXJKO]\Ë˜]Y[Ë˜İ\œ™[[YJNšOÉ‰Š\Ë˜]Y[Ë˜İ\œ™[[YJÏ\ËO]\Ë˜]Y[Ë˜İ\œ™[[YJKO\Ëœ™]š[İ\Õ[YI‰\Ë™[Z]
Ë“ÓÔQ\ÊNÙ[ÙHYŠOXJ^İ\Ëœ™\Ù]

K\ËœİÜ[™™[X\ÙP]Y[ÕYÊ
K\Ë™[Z]
ËÓÓTUK\ÊNÜ™]\›Ÿ]\Ëœ™]š[İ\Õ[YOZ__K\İ›ŞN™[˜İ[ÛŠ
^Ûœ›İİ\K™\İ›ŞK˜Ø[
\ÊK\ËYÜÏ[[\Ë˜]Y[É‰\ËœİÜ[™™[X\ÙP]Y[ÕYÊ
_K\]S]]N™[˜İ[ÛŠ
^İ\Ë˜]Y[É‰Š\Ë˜]Y[Ë›]]Y]\Ë˜İ\œ™[ÛÛ™šYË›]]_\Ë›X[˜YÙ\‹›]]J_K\]U›Û[YN™[˜İ[ÛŠ
^İ\Ë˜]Y[É‰Š\Ë˜]Y[Ë›Û[YO\Š\Ë˜İ\œ™[ÛÛ™šYË›Û[YJ\Ë›X[˜YÙ\‹›Û[YKJJ_KØ[İ[]T˜]N™[˜İ[ÛŠ
^Ûœ›İİ\K˜Ø[İ[]T˜]K˜Ø[
\ÊK\Ë˜]Y[É‰Š\Ë˜]Y[Ëœ^X˜XÚÔ˜]O]\Ëİ[˜]J_K]]NÙÙ]™[˜İ[ÛŠ
^Ü™]\›ˆ\Ë˜İ\œ™[ÛÛ™šYË›]]_KÙ]™[˜İ[ÛŠJ^İ\Ë˜İ\œ™[ÛÛ™šYË›]]OYK]\Ë›X[˜YÙ\‹š\ÓØÚÙY
\Ë›]]H‹JI‰Š\Ë\]S]]J
K\Ë™[Z]
Ë“UUK\ËJJ__KÙ]]]N™[˜İ[ÛŠJ^Ü™]\›ˆ\Ë›]]OYK\ßK›Û[YNÙÙ]™[˜İ[ÛŠ
^Ü™]\›ˆ\Ë˜İ\œ™[ÛÛ™šYË›Û[Y_KÙ]™[˜İ[ÛŠJ^İ\Ë˜İ\œ™[ÛÛ™šYË›Û[YOYK]\Ë›X[˜YÙ\‹š\ÓØÚÙY
\Ë›Û[YH‹JI‰Š\Ë\]U›Û[YJ
K\Ë™[Z]
Ë•“ÓSQK\ËJJ__KÙ]›Û[YN™[˜İ[ÛŠJ^Ü™]\›ˆ\Ë›Û[YOYK\ßK˜]NÙÙ]™[˜İ[ÛŠ
^Ü™]\›ˆ\Ë˜İ\œ™[ÛÛ™šYËœ˜]_KÙ]™[˜İ[ÛŠJ^İ\Ë˜İ\œ™[ÛÛ™šYËœ˜]OYK]\Ë›X[˜YÙ\‹š\ÓØÚÙY
\ËË”UKJI‰Š\Ë˜Ø[İ[]T˜]J
K\Ë™[Z]
Ë”UK\ËJJ__KÙ]˜]N™[˜İ[ÛŠJ^Ü™]\›ˆ\Ëœ˜]OYK\ßK][™NÙÙ]™[˜İ[ÛŠ
^Ü™]\›ˆ\Ë˜İ\œ™[ÛÛ™šYË™][™_KÙ]™[˜İ[ÛŠJ^İ\Ë˜İ\œ™[ÛÛ™šYË™][™OYK]\Ë›X[˜YÙ\‹š\ÓØÚÙY
\ËË‘US‘KJI‰Š\Ë˜Ø[İ[]T˜]J
K\Ë™[Z]
Ë‘US‘K\ËJJ__KÙ]][™N™[˜İ[ÛŠJ^Ü™]\›ˆ\Ë™][™OYK\ßKÙYZÎÙÙ]™[˜İ[ÛŠ
^Ü™]\›ˆ\Ëš\Ô^Z[™Ïİ\Ë˜]Y[Ë˜İ\œ™[[YKJ\Ë˜İ\œ™[X\šÙ\İ\Ë˜İ\œ™[X\šÙ\‹œİ\Œ
N\Ëš\Ô]\ÙYİ\Ë˜İ\œ™[ÛÛ™šYËœÙYZÎŒKÙ]™[˜İ[ÛŠJ^İ\Ë›X[˜YÙ\‹š\ÓØÚÙY
\ËœÙYZÈ‹J_\Ëœİ\[YOŒ
\Ëš\Ô^Z[™ß\Ëš\Ô]\ÙY
I‰ŠOSX]›Z[ŠX]›X^
JK\Ë™\˜][ÛŠK\Ëš\Ô^Z[™ÏÊ\Ëœ™]š[İ\Õ[YOYK\Ë˜]Y[Ë˜İ\œ™[[YOYJN\Ëš\Ô]\ÙY	‰Š\Ë˜İ\œ™[ÛÛ™šYËœÙYZÏYJK\Ë™[Z]
Ë”ÑQRË\ËJJ__KÙ]ÙYZÎ™[˜İ[ÛŠJ^Ü™]\›ˆ\ËœÙYZÏYK\ßKÛÜÙÙ]™[˜İ[ÛŠ
^Ü™]\›ˆ\Ë˜İ\œ™[ÛÛ™šYË›ÛÜKÙ]™[˜İ[ÛŠJ^İ\Ë˜İ\œ™[ÛÛ™šYË›ÛÜYK]\Ë›X[˜YÙ\‹š\ÓØÚÙY
\Ë›ÛÜ‹JI‰Š\Ë˜]Y[É‰Š\Ë˜]Y[Ë›ÛÜYJK\Ë™[Z]
Ë“ÓÔ\ËJJ__KÙ]ÛÜ™[˜İ[ÛŠJ^Ü™]\›ˆ\Ë›ÛÜYK\ßK[ÙÙ]™[˜İ[ÛŠ
^Ü™]\›ˆ\Ë˜İ\œ™[ÛÛ™šYËœ[ŸKÙ]™[˜İ[ÛŠJ^İ\Ë˜İ\œ™[ÛÛ™šYËœ[YK\Ë™[Z]
Ë”S‹\ËJ__KÙ][™[˜İ[ÛŠJ^Ü™]\›ˆ\Ëœ[YK\ß_JNÜ™^ÜÏ[ŸJKÌÍŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆ]]Üˆ]›HÛÛÜÚÛÚÛİšXÈÛÛÜÚÛÚÛİšXĞÛXZ[˜ÛÛOˆ
‹ËÜ[™YØ[Y\Ë˜ÛÛJBˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆ]
LÍ
KÏ]
ÍNJKÏ]
MŒÊK]
MJK[™]ÈÊÑ^[™Î›[š]X[^™N™[˜İ[ÛŠÊ^İ\Ë›İ™\œšYOHL\Ë˜]Y[Ô^Q[^OKŒK\Ë›ÛÜ[™Ù™œÙ]KŒK\Ë›Û›\”]\ÙYÛİ[™ÏV×K\Ë›ØÚÙYH›ÛİXÚİ\š[ˆÚ[™İË\Ë›ØÚÙYXİ[ÛœÔ]Y]YO]\Ë›ØÚÙYÖ×N›[\Ë—Û]]OHLK\Ë—İ›Û[YOLK˜Ø[
\ËÊ_KY™[˜İ[ÛŠKÊ^İ˜\ˆO[™]ÈŠ\ËKÊNÜ™]\›ˆ\ËœÛİ[™Ëœ\Ú
JK_K[›ØÚÎ™[˜İ[ÛŠ
^İ\Ë›ØÚÙYHLNİ˜\ˆO]\ÎÚYŠ\Ë™Ø[YK˜ØXÚK˜]Y[Ë™[šY\Ë™XXÚ
[˜İ[ÛŠJ^Ù›ÜŠ˜\ˆLÙK›[™İÙ
ÊÊZYŠVÙK™]\Ù]›ØÚÙYOOHYHŠ\™]\›ˆK›ØÚÙYHLLNÜ™]\›ˆLJKH]\Ë›ØÚÙY
^İ˜\ˆÏHLKOY[˜İ[ÛŠ
^ÜÏHLKOY[˜İ[ÛŠ
^ÚYŠÊ^ÜÏHLNÜ™]\›ŸYØİ[Y[˜›ÙKœ™[[İ™Q]™[\İ[™\ŠİXÚ[İ™H‹JKØİ[Y[˜›ÙKœ™[[İ™Q]™[\İ[™\ŠİXÚ[™‹JNİ˜\ˆV×NÚYŠK™Ø[YK˜ØXÚK˜]Y[Ë™[šY\Ë™XXÚ
[˜İ[ÛŠŠ^Ù›ÜŠ˜\ˆLİ‹›[™İİŠÊÊ^İ˜\ˆOY–İ—NÛK™]\Ù]›ØÚÙYOOHYH‰‰šœ\Ú
J_\™]\›ˆLJK›[™İOOL
^İ˜\ˆOZÚ›[™İLWNİK›Û˜Ø[œ^]›İYÚY[˜İ[ÛŠ
^İK›Û˜Ø[œ^]›İYÚ[[™›Ü‘XXÚ
[˜İ[ÛŠ
^Ù™]\Ù]›ØÚÙYH™˜[ÙHŸJKK[›ØÚÙYHLK™›Ü‘XXÚ
[˜İ[ÛŠ
^Ù›ØY

_J__Nİ\Ë›Û˜ÙJË•S“ĞÒÑQ[˜İ[ÛŠ
^Ù›ÜŠ\Ë™›Ü‘XXÚXİ]™TÛİ[™
[˜İ[ÛŠJ^İK˜İ\œ™[X\šÙ\OO[[	‰K™\˜][ÛOOL	‰ŠK™\˜][Û]KYÜÖÌK™\˜][ÛŠKKİ[\˜][Û]KYÜÖÌK™\˜][ÛŸJNİ\Ë›ØÚÙYXİ[ÛœÔ]Y]YK›[™İÊ^İ˜\ˆ]\Ë›ØÚÙYXİ[ÛœÔ]Y]YKœÚY

NÚœÛİ[™Úœ›ÜK˜\OÚœÛİ[™Úœ›ÜK˜\JœÛİ[™˜[Y_×JNšœÛİ[™Úœ›ÜOZ˜[Y__K\ÊKØİ[Y[˜›ÙK˜Y]™[\İ[™\ŠİXÚ[İ™H‹KLJKØİ[Y[˜›ÙK˜Y]™[\İ[™\ŠİXÚ[™‹KLJ__KÛ›\™[˜İ[ÛŠ
^İ\Ë™›Ü‘XXÚXİ]™TÛİ[™
[˜İ[ÛŠJ^ÙKš\Ô^Z[™É‰Š\Ë›Û›\”]\ÙYÛİ[™Ëœ\Ú
JKK›Û›\Š
J_J_KÛ‘›Øİ\Î™[˜İ[ÛŠ
^İ\Ë›Û›\”]\ÙYÛİ[™Ë™›Ü‘XXÚ
[˜İ[ÛŠJ^ÙK›Û‘›Øİ\Ê
_JK\Ë›Û›\”]\ÙYÛİ[™Ë›[™İLK\İ›ŞN™[˜İ[ÛŠ
^Ûœ›İİ\K™\İ›ŞK˜Ø[
\ÊK\Ë›Û›\”]\ÙYÛİ[™Ë›[™İL\Ë›Û›\”]\ÙYÛİ[™Ï[[K\ÓØÚÙY™[˜İ[ÛŠKËJ^Ü™]\›ˆKYÜÖÌK™]\Ù]›ØÚÙYOOHYHÊ\Ë›ØÚÙYXİ[ÛœÔ]Y]YKœ\Ú
ÜÛİ[™™K›ÜœË˜[YN˜_JKL
NˆL_KÙ]]]N™[˜İ[ÛŠJ^Ü™]\›ˆ\Ë›]]OYK\ßK]]NÙÙ]™[˜İ[ÛŠ
^Ü™]\›ˆ\Ë—Û]]_KÙ]™[˜İ[ÛŠJ^İ\Ë—Û]]OYK\Ë™›Ü‘XXÚXİ]™TÛİ[™
[˜İ[ÛŠÊ^ÜË\]S]]J
_JK\Ë™[Z]
Ë‘ÓĞSÓUUK\ËJ__KÙ]›Û[YN™[˜İ[ÛŠJ^Ü™]\›ˆ\Ë›Û[YOYK\ßK›Û[YNÙÙ]™[˜İ[ÛŠ
^Ü™]\›ˆ\Ë—İ›Û[Y_KÙ]™[˜İ[ÛŠJ^İ\Ë—İ›Û[YOYK\Ë™›Ü‘XXÚXİ]™TÛİ[™
[˜İ[ÛŠÊ^ÜË\]U›Û[YJ
_JK\Ë™[Z]
Ë‘ÓĞSÕ“ÓSQK\ËJ___JNÜ™^ÜÏ[ŸJKŒÍÌMÎŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆ]]Üˆ]›HÛÛÜÚÛÚÛİšXÈÛÛÜÚÛÚÛİšXĞÛXZ[˜ÛÛOˆ
‹ËÜ[™YØ[Y\Ë˜ÛÛJBˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹Ü™^ÜÏ^ÔÛİ[™X[˜YÙ\Ü™X]Ü
MÍÊK]™[Î
MŒÊK˜\ÙTÛİ[™
ÌÍJK˜\ÙTÛİ[™X[˜YÙ\
LÍ
KÙX]Y[ÔÛİ[™
ÌMÍJKÙX]Y[ÔÛİ[™X[˜YÙ\
MÍL
KSP]Y[ÔÛİ[™
MJKSP]Y[ÔÛİ[™X[˜YÙ\
ÌÍ
K›Ğ]Y[ÔÛİ[™
ŒÊK›Ğ]Y[ÔÛİ[™X[˜YÙ\
NMŒ
__JKŒÎŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆ]]Üˆ]›HÛÛÜÚÛÚÛİšXÈÛÛÜÚÛÚÛİšXĞÛXZ[˜ÛÛOˆ
‹ËÜ[™YØ[Y\Ë˜ÛÛJBˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆ]
ÌÍJKÏ]
ÍNJKÏ]
LÎLŠK]
ÎLLJK]
MÍÊKOY[˜İ[ÛŠ
^Ü™]\›ˆL_KÏY[˜İ[ÛŠ
^Ü™]\›ˆ[KOY[˜İ[ÛŠ
^Ü™]\›ˆ\ßKO[™]ÈÊÑ^[™Î›Ë[š]X[^™N™[˜İ[ÛŠKŠ^ÙOO]›ÚY	‰Š^ßJKË˜Ø[
\ÊK\Ë›X[˜YÙ\]K\ËšÙ^OY\Ëš\Ô^Z[™ÏHLK\Ëš\Ô]\ÙYHLK\Ëİ[˜]OLK\Ë™\˜][ÛL\Ëİ[\˜][ÛL\Ë˜ÛÛ™šYÏ\ŠÛ]]NˆLK›Û[YNŒK˜]NŒK][™NŒÙYZÎŒÛÜˆLK[^NŒ[ŒKŠK\Ë˜İ\œ™[ÛÛ™šYÏ]\Ë˜ÛÛ™šYË\Ë›]]OHLK\Ë›Û[YOLK\Ëœ˜]OLK\Ë™][™OL\ËœÙYZÏL\Ë›ÛÜHLK\Ëœ[L\Ë›X\šÙ\œÏ^ßK\Ë˜İ\œ™[X\šÙ\[[\Ëœ[™[™Ô™[[İ™OHL_KYX\šÙ\™K\]SX\šÙ\™K™[[İ™SX\šÙ\œË^N™K]\ÙN™K™\İ[YN™KİÜ™KÙ]]]N˜KÙ]›Û[YN˜KÙ]˜]N˜KÙ]][™N˜KÙ]ÙYZÎ˜KÙ]ÛÜ˜KÙ][˜K\PÛÛ™šYÎœË™\Ù]ÛÛ™šYÎœË\]N›‹Ø[İ[]T˜]NœË\İ›ŞN™[˜İ[ÛŠ
^Ûœ›İİ\K™\İ›ŞK˜Ø[
\Ê__JNÜ™^ÜÏZ_JKNMŒŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆ]]Üˆ]›HÛÛÜÚÛÚÛİšXÈÛÛÜÚÛÚÛİšXĞÛXZ[˜ÛÛOˆ
‹ËÜ[™YØ[Y\Ë˜ÛÛJBˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆ]
LÍ
KÏ]
ÍNJKÏ]
LÎLŠK]
ŒÊK]
MÍÊKO[™]ÈÊÑ^[™Î›Ë[š]X[^™N™[˜İ[ÛŠJ^ÛË˜Ø[
\ÊK\Ë™Ø[YOXK\ËœÛİ[™ÏV×K\Ë›]]OHLK\Ë›Û[YOLK\Ëœ˜]OLK\Ë™][™OL\Ëœ]\ÙSÛ›\HL\Ë›ØÚÙYHL_KY™[˜İ[ÛŠËJ^İ˜\ˆO[™]ÈŠ\ËËJNÜ™]\›ˆ\ËœÛİ[™Ëœ\Ú
JK_KY]Y[ÔÜš]N™[˜İ[ÛŠËJ^İ˜\ˆO]\Ë˜Y
ËJNÜ™]\›ˆKœÜš][X\^ßK_KÙ]™[˜İ[ÛŠÊ^Ü™]\›ˆœ›İİ\K™Ù]˜Ø[
\ËÊ_KÙ][™[˜İ[ÛŠÊ^Ü™]\›ˆœ›İİ\K™Ù][˜Ø[
\ËÊ_K^N™[˜İ[ÛŠËJ^Ü™]\›ˆL_K^P]Y[ÔÜš]N™[˜İ[ÛŠËKJ^Ü™]\›ˆL_K™[[İ™N™[˜İ[ÛŠÊ^Ü™]\›ˆœ›İİ\Kœ™[[İ™K˜Ø[
\ËÊ_K™[[İ™P[™[˜İ[ÛŠ
^Ü™]\›ˆœ›İİ\Kœ™[[İ™P[˜Ø[
\Ê_K™[[İ™PRÙ^N™[˜İ[ÛŠÊ^Ü™]\›ˆœ›İİ\Kœ™[[İ™PRÙ^K˜Ø[
\ËÊ_KİÜRÙ^N™[˜İ[ÛŠÊ^Ü™]\›ˆœ›İİ\KœİÜRÙ^K˜Ø[
\ËÊ_KÛ›\›‹Û‘›Øİ\Î›‹Û‘Ø[YP›\›‹Û‘Ø[YQ›Øİ\Î›‹]\ÙP[›‹™\İ[YP[›‹İÜ[›‹\]N›‹Ù]˜]N›‹Ù]][™N›‹Ù]]]N›‹Ù]›Û[YN›‹[›ØÚÎ›‹›Ü‘XXÚXİ]™TÛİ[™™[˜İ[ÛŠËJ^Ûœ›İİ\K™›Ü‘XXÚXİ]™TÛİ[™˜Ø[
\ËËJ_K\İ›ŞN™[˜İ[ÛŠ
^Ûœ›İİ\K™\İ›ŞK˜Ø[
\Ê__JNÜ™^ÜÏY_JKÌMÍNŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆ]]Üˆ]›HÛÛÜÚÛÚÛİšXÈÛÛÜÚÛÚÛİšXĞÛXZ[˜ÛÛOˆ
‹ËÜ[™YØ[Y\Ë˜ÛÛJBˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆ]
ÌÍJKÏ]
ÍNJKÏ]
MŒÊK]
MMM
K[™]ÈÊÑ^[™Î›[š]X[^™N™[˜İ[ÛŠËKJ^ÚYŠOOO]›ÚY	‰ŠO^ßJK\Ë˜]Y[ĞY™™\\Ë™Ø[YK˜ØXÚK˜]Y[Ë™Ù]
JK]\Ë˜]Y[ĞY™™\Š]›İÈ™]È\œ›ÜŠ	Ğ]Y[ÈÙ^H‰ÊØJÉÈˆ›İ›İ[™[ˆØXÚIÊNİ\ËœÛİ\˜ÙO[[\Ë›ÛÜÛİ\˜ÙO[[\Ë›]]S›ÙO\Ë˜ÛÛ^˜Ü™X]QØZ[Š
K\Ë›Û[YS›ÙO\Ë˜ÛÛ^˜Ü™X]QØZ[Š
K\Ëœ[›™\“›ÙO[[\ËœÜ]X[›ÙO[[\ËœÜ]X[Ûİ\˜ÙO[[\Ëœ^U[YOL\Ëœİ\[YOL\Ë›ÛÜ[YOL\Ëœ˜]U\]\ÏV×K\Ëš\Ñ[™YHLK\Ëš\ÓÛÜYHLK\Ë›]]S›ÙK˜ÛÛ›™Xİ
\Ë›Û[YS›ÙJKË˜ÛÛ^˜Ü™X]T[›™\‰‰Š\ËœÜ]X[›ÙO\Ë˜ÛÛ^˜Ü™X]T[›™\Š
K\Ë›Û[YS›ÙK˜ÛÛ›™Xİ
\ËœÜ]X[›ÙJJKË˜ÛÛ^˜Ü™X]Tİ\™[Ô[›™\Ê\Ëœ[›™\“›ÙO\Ë˜ÛÛ^˜Ü™X]Tİ\™[Ô[›™\Š
KË˜ÛÛ^˜Ü™X]T[›™\İ\ËœÜ]X[›ÙK˜ÛÛ›™Xİ
\Ëœ[›™\“›ÙJN\Ë›Û[YS›ÙK˜ÛÛ›™Xİ
\Ëœ[›™\“›ÙJK\Ëœ[›™\“›ÙK˜ÛÛ›™Xİ
Ë™\İ[˜][ÛŠJNœË˜ÛÛ^˜Ü™X]T[›™\İ\ËœÜ]X[›ÙK˜ÛÛ›™Xİ
Ë™\İ[˜][ÛŠN\Ë›Û[YS›ÙK˜ÛÛ›™Xİ
Ë™\İ[˜][ÛŠK\Ë™\˜][Û]\Ë˜]Y[ĞY™™\‹™\˜][Û‹\Ëİ[\˜][Û]\Ë˜]Y[ĞY™™\‹™\˜][Û‹˜Ø[
\ËËKJ_K^N™[˜İ[ÛŠKÊ^Ü™]\›ˆœ›İİ\Kœ^K˜Ø[
\ËKÊOÊ\ËœİÜ[™™[[İ™PY™™\”Ûİ\˜ÙJ
K\Ë˜Ü™X]P[™İ\Y™™\”Ûİ\˜ÙJ
K\Ë™[Z]
Ë”VK\ÊKL
NˆL_K]\ÙN™[˜İ[ÛŠ
^Ü™]\›ˆ\Ë›X[˜YÙ\‹˜ÛÛ^˜İ\œ™[[YO\Ëœİ\[Y_[œ›İİ\Kœ]\ÙK˜Ø[
\ÊOÈLNŠ\Ë˜İ\œ™[ÛÛ™šYËœÙYZÏ]\Ë™Ù]İ\œ™[[YJ
K\ËœİÜ[™™[[İ™PY™™\”Ûİ\˜ÙJ
K\Ë™[Z]
Ë”UTÑK\ÊKL
_K™\İ[YN™[˜İ[ÛŠ
^Ü™]\›ˆ\Ë›X[˜YÙ\‹˜ÛÛ^˜İ\œ™[[YO\Ëœİ\[Y_[œ›İİ\Kœ™\İ[YK˜Ø[
\ÊOÈLNŠ\Ë˜Ü™X]P[™İ\Y™™\”Ûİ\˜ÙJ
K\Ë™[Z]
Ë”‘TÕSQK\ÊKL
_KİÜ™[˜İ[ÛŠ
^Ü™]\›ˆœ›İİ\KœİÜ˜Ø[
\ÊOÊ\ËœİÜ[™™[[İ™PY™™\”Ûİ\˜ÙJ
K\Ë™[Z]
Ë”ÕÔ\ÊKL
NˆL_KÜ™X]P[™İ\Y™™\”Ûİ\˜ÙN™[˜İ[ÛŠ
^İ˜\ˆO]\Ë˜İ\œ™[ÛÛ™šYËœÙYZËÏ]\Ë˜İ\œ™[ÛÛ™šYË™[^KO]\Ë›X[˜YÙ\‹˜ÛÛ^˜İ\œ™[[YJÜËOJ\Ë˜İ\œ™[X\šÙ\İ\Ë˜İ\œ™[X\šÙ\‹œİ\Œ
JÙK]\Ë™\˜][Û‹YNİ\Ëœ^U[YOXKYK\Ëœİ\[YOXK\ËœÛİ\˜ÙO]\Ë˜Ü™X]PY™™\”Ûİ\˜ÙJ
K\Ë˜\PÛÛ™šYÊ
K\ËœÛİ\˜ÙKœİ\
X]›X^
JKX]›X^
JKX]›X^

JK\Ëœ™\Ù]ÛÛ™šYÊ
_KÜ™X]P[™İ\ÛÜY™™\”Ûİ\˜ÙN™[˜İ[ÛŠ
^İ˜\ˆO]\Ë™Ù]ÛÜ[YJ
KÏ]\Ë˜İ\œ™[X\šÙ\İ\Ë˜İ\œ™[X\šÙ\‹œİ\ŒO]\Ë™\˜][Ûİ\Ë›ÛÜ[YOYK\Ë›ÛÜÛİ\˜ÙO]\Ë˜Ü™X]PY™™\”Ûİ\˜ÙJ
K\Ë›ÛÜÛİ\˜ÙKœ^X˜XÚÔ˜]KœÙ]˜[YP][YJ\Ëİ[˜]K
K\Ë›ÛÜÛİ\˜ÙKœİ\
X]›X^
JKX]›X^
ÊKX]›X^
JJ_KÜ™X]PY™™\”Ûİ\˜ÙN™[˜İ[ÛŠ
^İ˜\ˆO]\ËÏ]\Ë›X[˜YÙ\‹˜ÛÛ^˜Ü™X]PY™™\”Ûİ\˜ÙJ
NÜ™]\›ˆË˜Y™™\]\Ë˜]Y[ĞY™™\‹Ë˜ÛÛ›™Xİ
\Ë›]]S›ÙJKË›Û™[™YY[˜İ[ÛŠJ^İ˜\ˆOXK\™Ù]ÊOOOYKœÛİ\˜Ù_OOOYK›ÛÜÛİ\˜ÙJI‰ŠK˜İ\œ™[ÛÛ™šYË›ÛÜÙKš\ÓÛÜYHL™Kš\Ñ[™YHL
_KßKİÜ[™™[[İ™PY™™\”Ûİ\˜ÙN™[˜İ[ÛŠ
^ÚYŠ\ËœÛİ\˜ÙJ^İ˜\ˆO]\ËœÛİ\˜ÙNİ\ËœÛİ\˜ÙO[[KœİÜ

KK™\ØÛÛ›™Xİ

_]\Ëœ^U[YOL\Ëœİ\[YOL\Ëš\Ñ[™YHLK\ËœİÜ[™™[[İ™SÛÜY™™\”Ûİ\˜ÙJ
_KİÜ[™™[[İ™SÛÜY™™\”Ûİ\˜ÙN™[˜İ[ÛŠ
^İ\Ë›ÛÜÛİ\˜ÙI‰Š\Ë›ÛÜÛİ\˜ÙKœİÜ

K\Ë›ÛÜÛİ\˜ÙK™\ØÛÛ›™Xİ

K\Ë›ÛÜÛİ\˜ÙO[[
K\Ë›ÛÜ[YOLK\PÛÛ™šYÎ™[˜İ[ÛŠ
^İ\Ëœ˜]U\]\Ë›[™İL\Ëœ˜]U\]\Ëœ\Ú
İ[YNŒ˜]NŒ_JNİ˜\ˆO]\Ë˜İ\œ™[ÛÛ™šYËœÛİ\˜ÙNÚYŠI‰\Ë›X[˜YÙ\‹˜ÛÛ^˜Ü™X]T[›™\Š^İ˜\ˆÏ]\ËœÜ]X[›ÙNÜËœ[›š[™Ó[Ù[\ŠKœ[›š[™Ó[Ù[‹™\]X[İÙ\ˆŠKË™\İ[˜ÙS[Ù[\ŠK™\İ[˜ÙS[Ù[‹š[™\œÙHŠKË›ÜšY[][Û–˜[YO\ŠK›ÜšY[][Û–‹
KË›ÜšY[][Û–K˜[YO\ŠK›ÜšY[][Û–H‹
KË›ÜšY[][Û–‹˜[YO\ŠK›ÜšY[][Û–ˆ‹LJKËœ™Y‘\İ[˜ÙO\ŠKœ™Y‘\İ[˜ÙH‹JKË›X^\İ[˜ÙO\ŠK›X^\İ[˜ÙH‹YM
KËœ›ÛÙ™‘˜XİÜ\ŠKœ›ÛÙ™‘˜XİÜˆ‹JKË˜ÛÛ™R[›™\[™ÛO\ŠK˜ÛÛ™R[›™\[™ÛH‹ÍŒ
KË˜ÛÛ™Sİ]\[™ÛO\ŠK˜ÛÛ™Sİ]\[™ÛH‹
KË˜ÛÛ™Sİ]\‘ØZ[\ŠK˜ÛÛ™Sİ]\‘ØZ[ˆ‹
K\ËœÜ]X[Ûİ\˜ÙO\ŠK™›ÛİÈ‹[
K\ËœÜ]X[Ûİ\˜Ù_
ËœÜÚ][Û–˜[YO\ŠK‹
KËœÜÚ][Û–K˜[YO\ŠKH‹
KËœÜÚ][Û–‹˜[YO\ŠKˆ‹
J_[œ›İİ\K˜\PÛÛ™šYË˜Ø[
\Ê_KÙÙ]™[˜İ[ÛŠ
^Ü™]\›ˆ\ËœÜ]X[›ÙOİ\ËœÜ]X[›ÙKœÜÚ][Û–ŒKÙ]™[˜İ[ÛŠJ^İ\ËœÜ]X[›ÙI‰Š\ËœÜ]X[›ÙKœÜÚ][Û–˜[YOYJ__KNÙÙ]™[˜İ[ÛŠ
^Ü™]\›ˆ\ËœÜ]X[›ÙOİ\ËœÜ]X[›ÙKœÜÚ][Û–NŒKÙ]™[˜İ[ÛŠJ^İ\ËœÜ]X[›ÙI‰Š\ËœÜ]X[›ÙKœÜÚ][Û–K˜[YOYJ__K\]N™[˜İ[ÛŠ
^ÚYŠ\Ëš\Ô^Z[™É‰\ËœÜ]X[Ûİ\˜ÙJ^İ˜\ˆO\Š\ËœÜ]X[Ûİ\˜ÙK‹[
KÏ\Š\ËœÜ]X[Ûİ\˜ÙKH‹[
NÙI‰™HOO]\Ë—ÜÜ]X[	‰Š\Ë—ÜÜ]X[]\ËœÜ]X[›ÙKœÜÚ][Û–˜[YOYJKÉ‰œÈOO]\Ë—ÜÜ]X[I‰Š\Ë—ÜÜ]X[O]\ËœÜ]X[›ÙKœÜÚ][Û–K˜[YO\Ê_]\Ëš\Ñ[™YÊœ›İİ\KœİÜ˜Ø[
\ÊK\ËœİÜ[™™[[İ™PY™™\”Ûİ\˜ÙJ
K\Ë™[Z]
ËÓÓTUK\ÊJN\Ëš\ÓÛÜY	‰Š\Ëš\ÓÛÜYHLK\ËœÛİ\˜ÙO]\Ë›ÛÜÛİ\˜ÙK\Ë›ÛÜÛİ\˜ÙO[[\Ëœ^U[YO]\Ëœİ\[YO]\Ë›ÛÜ[YK\Ëœ˜]U\]\Ë›[™İL\Ëœ˜]U\]\Ëœ\Ú
İ[YNŒ˜]N\Ëİ[˜]_JK\Ë˜Ü™X]P[™İ\ÛÜY™™\”Ûİ\˜ÙJ
K\Ë™[Z]
Ë“ÓÔQ\ÊJ_K\İ›ŞN™[˜İ[ÛŠ
^İ\Ëœ[™[™Ô™[[İ™_
œ›İİ\K™\İ›ŞK˜Ø[
\ÊK\Ë˜]Y[ĞY™™\[[\ËœİÜ[™™[[İ™PY™™\”Ûİ\˜ÙJ
K\Ë›]]S›ÙK™\ØÛÛ›™Xİ

K\Ë›]]S›ÙO[[\Ë›Û[YS›ÙK™\ØÛÛ›™Xİ

K\Ë›Û[YS›ÙO[[\Ëœ[›™\“›ÙI‰Š\Ëœ[›™\“›ÙK™\ØÛÛ›™Xİ

K\Ëœ[›™\“›ÙO[[
K\ËœÜ]X[›ÙI‰Š\ËœÜ]X[›ÙK™\ØÛÛ›™Xİ

K\ËœÜ]X[›ÙO[[\ËœÜ]X[Ûİ\˜ÙO[[
K\Ëœ˜]U\]\Ë›[™İL\Ëœ˜]U\]\Ï[[
_KØ[İ[]T˜]N™[˜İ[ÛŠ
^Ûœ›İİ\K˜Ø[İ[]T˜]K˜Ø[
\ÊNİ˜\ˆO]\Ë›X[˜YÙ\‹˜ÛÛ^˜İ\œ™[[YNİ\ËœÛİ\˜ÙI‰\[Ùˆ\Ëİ[˜]OOH›[X™\ˆ‰‰\ËœÛİ\˜ÙKœ^X˜XÚÔ˜]KœÙ]˜[YP][YJ\Ëİ[˜]KJK\Ëš\Ô^Z[™É‰Š\Ëœ˜]U\]\Ëœ\Ú
İ[YN“X]›X^
\Ëœİ\[YKJK]\Ëœ^U[YK˜]N\Ëİ[˜]_JK\Ë›ÛÜÛİ\˜ÙI‰Š\ËœİÜ[™™[[İ™SÛÜY™™\”Ûİ\˜ÙJ
K\Ë˜Ü™X]P[™İ\ÛÜY™™\”Ûİ\˜ÙJ
JJ_KÙ]İ\œ™[[YN™[˜İ[ÛŠ
^Ù›ÜŠ˜\ˆOLÏLÜÏ\Ëœ˜]U\]\Ë›[™İÜÊÊÊ^İ˜\ˆOLÜÏ\Ëœ˜]U\]\Ë›[™İLOØO]\Ëœ˜]U\]\ÖÜÊÌWK[YN˜O]\Ë›X[˜YÙ\‹˜ÛÛ^˜İ\œ™[[YK]\Ëœ^U[YKJÏJK]\Ëœ˜]U\]\ÖÜ×K[YJJ\Ëœ˜]U\]\ÖÜ×Kœ˜]_\™]\›ˆ_KÙ]ÛÜ[YN™[˜İ[ÛŠ
^Ù›ÜŠ˜\ˆOLÏLÜÏ\Ëœ˜]U\]\Ë›[™İLNÜÊÊÊYJÏJ\Ëœ˜]U\]\ÖÜÊÌWK[YK]\Ëœ˜]U\]\ÖÜ×K[YJJ\Ëœ˜]U\]\ÖÜ×Kœ˜]Nİ˜\ˆO]\Ëœ˜]U\]\Öİ\Ëœ˜]U\]\Ë›[™İLWNÜ™]\›ˆ\Ëœ^U[YJØK[YJÊ\Ë™\˜][Û‹YJKØKœ˜]_K˜]NÙÙ]™[˜İ[ÛŠ
^Ü™]\›ˆ\Ë˜İ\œ™[ÛÛ™šYËœ˜]_KÙ]™[˜İ[ÛŠJ^İ\Ë˜İ\œ™[ÛÛ™šYËœ˜]OYK\Ë˜Ø[İ[]T˜]J
K\Ë™[Z]
Ë”UK\ËJ__KÙ]˜]N™[˜İ[ÛŠJ^Ü™]\›ˆ\Ëœ˜]OYK\ßK][™NÙÙ]™[˜İ[ÛŠ
^Ü™]\›ˆ\Ë˜İ\œ™[ÛÛ™šYË™][™_KÙ]™[˜İ[ÛŠJ^İ\Ë˜İ\œ™[ÛÛ™šYË™][™OYK\Ë˜Ø[İ[]T˜]J
K\Ë™[Z]
Ë‘US‘K\ËJ__KÙ]][™N™[˜İ[ÛŠJ^Ü™]\›ˆ\Ë™][™OYK\ßK]]NÙÙ]™[˜İ[ÛŠ
^Ü™]\›ˆ\Ë›]]S›ÙK™ØZ[‹˜[YOOOLKÙ]™[˜İ[ÛŠJ^İ\Ë˜İ\œ™[ÛÛ™šYË›]]OYK\Ë›]]S›ÙK™ØZ[‹œÙ]˜[YP][YJOÌŒK
K\Ë™[Z]
Ë“UUK\ËJ__KÙ]]]N™[˜İ[ÛŠJ^Ü™]\›ˆ\Ë›]]OYK\ßK›Û[YNÙÙ]™[˜İ[ÛŠ
^Ü™]\›ˆ\Ë›Û[YS›ÙK™ØZ[‹˜[Y_KÙ]™[˜İ[ÛŠJ^İ\Ë˜İ\œ™[ÛÛ™šYË›Û[YOYK\Ë›Û[YS›ÙK™ØZ[‹œÙ]˜[YP][YJK
K\Ë™[Z]
Ë•“ÓSQK\ËJ__KÙ]›Û[YN™[˜İ[ÛŠJ^Ü™]\›ˆ\Ë›Û[YOYK\ßKÙYZÎÙÙ]™[˜İ[ÛŠ
^Ü™]\›ˆ\Ëš\Ô^Z[™Ïİ\Ë›X[˜YÙ\‹˜ÛÛ^˜İ\œ™[[YO\Ëœİ\[YOİ\Ëœİ\[YK]\Ëœ^U[YN\Ë™Ù]İ\œ™[[YJ
N\Ëš\Ô]\ÙYİ\Ë˜İ\œ™[ÛÛ™šYËœÙYZÎŒKÙ]™[˜İ[ÛŠJ^İ\Ë›X[˜YÙ\‹˜ÛÛ^˜İ\œ™[[YO\Ëœİ\[Y_
\Ëš\Ô^Z[™ß\Ëš\Ô]\ÙY
I‰ŠOSX]›Z[ŠX]›X^
JK\Ë™\˜][ÛŠK\Ë˜İ\œ™[ÛÛ™šYËœÙYZÏYK\Ëš\Ô^Z[™É‰Š\ËœİÜ[™™[[İ™PY™™\”Ûİ\˜ÙJ
K\Ë˜Ü™X]P[™İ\Y™™\”Ûİ\˜ÙJ
JK\Ë™[Z]
Ë”ÑQRË\ËJJ__KÙ]ÙYZÎ™[˜İ[ÛŠJ^Ü™]\›ˆ\ËœÙYZÏYK\ßKÛÜÙÙ]™[˜İ[ÛŠ
^Ü™]\›ˆ\Ë˜İ\œ™[ÛÛ™šYË›ÛÜKÙ]™[˜İ[ÛŠJ^İ\Ë˜İ\œ™[ÛÛ™šYË›ÛÜYK\Ëš\Ô^Z[™É‰Š\ËœİÜ[™™[[İ™SÛÜY™™\”Ûİ\˜ÙJ
KI‰\Ë˜Ü™X]P[™İ\ÛÜY™™\”Ûİ\˜ÙJ
JK\Ë™[Z]
Ë“ÓÔ\ËJ__KÙ]ÛÜ™[˜İ[ÛŠJ^Ü™]\›ˆ\Ë›ÛÜYK\ßK[ÙÙ]™[˜İ[ÛŠ
^Ü™]\›ˆ\Ëœ[›™\“›ÙOİ\Ëœ[›™\“›ÙKœ[‹˜[YNŒKÙ]™[˜İ[ÛŠJ^İ\Ë˜İ\œ™[ÛÛ™šYËœ[YK\Ëœ[›™\“›ÙI‰\Ëœ[›™\“›ÙKœ[‹œÙ]˜[YP][YJK\Ë›X[˜YÙ\‹˜ÛÛ^˜İ\œ™[[YJK\Ë™[Z]
Ë”S‹\ËJ__KÙ][™[˜İ[ÛŠJ^Ü™]\›ˆ\Ëœ[YK\ß_JNÜ™^ÜÏ[ŸJKMÍLŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆ]]Üˆ]›HÛÛÜÚÛÚÛİšXÈÛÛÜÚÛÚÛİšXĞÛXZ[˜ÛÛOˆ
‹ËÜ[™YØ[Y\Ë˜ÛÛJBˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆ]
LÌLÍ
KÏ]
LÍ
KÏ]
ÍNJK]
MŒÊK]
ÊKO]
ÌMÍJKÏ]
MMM
KO[™]ÈÊÑ^[™Î˜Ë[š]X[^™N™[˜İ[ÛŠ
^İ\Ë˜ÛÛ^]\Ë˜Ü™X]P]Y[ĞÛÛ^

K\Ë›X\İ\“]]S›ÙO]\Ë˜ÛÛ^˜Ü™X]QØZ[Š
K\Ë›X\İ\•›Û[YS›ÙO]\Ë˜ÛÛ^˜Ü™X]QØZ[Š
K\Ë›X\İ\“]]S›ÙK˜ÛÛ›™Xİ
\Ë›X\İ\•›Û[YS›ÙJK\Ë›X\İ\•›Û[YS›ÙK˜ÛÛ›™Xİ
\Ë˜ÛÛ^™\İ[˜][ÛŠK\Ë™\İ[˜][Û]\Ë›X\İ\“]]S›ÙK\Ë›ØÚÙY]\Ë˜ÛÛ^œİ]OOOHœİ\Ü[™Y‹Ë˜Ø[
\Ë
K\Ë›ØÚÙY	‰Šš\Ğ›ÛİYİ\Ë[›ØÚÊ
Nš™]™[Ë›Û˜ÙJ‹“ÓÕ\Ë[›ØÚË\ÊJK™]™[Ë›ÛŠ‹•’TÒP“K\Ë›Û‘Ø[YUš\ÚX›K\Ê_KÛ‘Ø[YUš\ÚX›N™[˜İ[ÛŠ
^İ˜\ˆO]\Ë˜ÛÛ^İÚ[™İËœÙ][Y[İ]
[˜İ[ÛŠ
^ÚI‰ŠKœİ\Ü[™

KKœ™\İ[YJ
J_KL
_KÜ™X]P]Y[ĞÛÛ^™[˜İ[ÛŠJ^İ˜\ˆZK˜ÛÛ™šYË˜]Y[ÎÚYŠ˜ÛÛ^
\™]\›ˆ˜ÛÛ^œ™\İ[YJ
K˜ÛÛ^ÚYŠÚ[™İËš\ÓİÛ”›Ü\J]Y[ĞÛÛ^ŠJ\™]\›ˆ™]È]Y[ĞÛÛ^ÚYŠÚ[™İËš\ÓİÛ”›Ü\JÙXšÚ]]Y[ĞÛÛ^ŠJ\™]\›ˆ™]ÈÚ[™İËÙXšÚ]]Y[ĞÛÛ^KÙ]]Y[ĞÛÛ^™[˜İ[ÛŠJ^Ü™]\›ˆ\Ë˜ÛÛ^	‰\Ë˜ÛÛ^˜ÛÜÙJ
K\Ë›X\İ\“]]S›ÙI‰\Ë›X\İ\“]]S›ÙK™\ØÛÛ›™Xİ

K\Ë›X\İ\•›Û[YS›ÙI‰\Ë›X\İ\•›Û[YS›ÙK™\ØÛÛ›™Xİ

K\Ë˜ÛÛ^ZK\Ë›X\İ\“]]S›ÙOZK˜Ü™X]QØZ[Š
K\Ë›X\İ\•›Û[YS›ÙOZK˜Ü™X]QØZ[Š
K\Ë›X\İ\“]]S›ÙK˜ÛÛ›™Xİ
\Ë›X\İ\•›Û[YS›ÙJK\Ë›X\İ\•›Û[YS›ÙK˜ÛÛ›™Xİ
K™\İ[˜][ÛŠK\Ë™\İ[˜][Û]\Ë›X\İ\“]]S›ÙK\ßKY™[˜İ[ÛŠK
^İ˜\ˆO[™]ÈJ\ËK
NÜ™]\›ˆ\ËœÛİ[™Ëœ\Ú
JK_KXÛÙP]Y[Î™[˜İ[ÛŠK
^İ˜\ˆNĞ\œ˜^Kš\Ğ\œ˜^JJOİOZNOVŞÚÙ^NšK]NšWNÙ›ÜŠ˜\ˆ]\Ë™Ø[YK˜ØXÚK˜]Y[Ë]K›[™İLİK›[™İİŠÊÊ^İ˜\ˆO]Vİ—K[KšÙ^KÏ[K™]Nİ\[ÙˆÏOHœİš[™È‰‰ŠÏ[
ÊJNİ˜\ˆY[˜İ[ÛŠËJ^Ù˜Y
ËJK\Ë™[Z]
‹‘PÓÑQÊK‹KKOOL	‰\Ë™[Z]
‹‘PÓÑQĞS
_K˜š[™
\Ë
KÏY[˜İ[ÛŠËJ^ØÛÛœÛÛK™\œ›ÜŠ‘\œ›ÜˆXÛÙ[™È]Y[ÎˆŠĞÊÈˆH‹OÑK›Y\ÜØYÙNˆˆŠK‹KKOOL	‰\Ë™[Z]
‹‘PÓÑQĞS
_K˜š[™
\Ë
Nİ\Ë˜ÛÛ^™XÛÙP]Y[Ñ]JËÊ__KÙ]\İ[™\”ÜÚ][Û™[˜İ[ÛŠK
^Ü™]\›ˆOOO]›ÚY	‰ŠO]\Ë™Ø[YKœØØ[KÚYÌŠKOO]›ÚY	‰Š]\Ë™Ø[YKœØØ[KšZYÚÌŠK\Ë›\İ[™\”ÜÚ][Û‹œÙ]
K
K\ßK[›ØÚÎ™[˜İ[ÛŠ
^İ˜\ˆO]\ËYØİ[Y[˜›ÙKOY[˜İ[Ûˆ

^ÚYŠK˜ÛÛ^	‰š
^İ˜\ˆZœ™[[İ™Q]™[\İ[™\‹˜š[™

NÚK˜ÛÛ^œ™\İ[YJ
K[Š[˜İ[ÛŠ
^ÙŠİXÚİ\‹
KŠİXÚ[™‹
KŠ›[İ\ÙYİÛˆ‹
KŠ›[İ\Ù]\‹
KŠšÙ^YİÛˆ‹
KK[›ØÚÙYHLK[˜İ[ÛŠ
^ÙŠİXÚİ\‹
KŠİXÚ[™‹
KŠ›[İ\ÙYİÛˆ‹
KŠ›[İ\Ù]\‹
KŠšÙ^YİÛˆ‹
_J__NÚ	‰Š˜Y]™[\İ[™\ŠİXÚİ\‹KLJK˜Y]™[\İ[™\ŠİXÚ[™‹KLJK˜Y]™[\İ[™\Š›[İ\ÙYİÛˆ‹KLJK˜Y]™[\İ[™\Š›[İ\Ù]\‹KLJK˜Y]™[\İ[™\ŠšÙ^YİÛˆ‹KLJJ_KÛ›\™[˜İ[ÛŠ
^İ\Ë›ØÚÙY\Ë˜ÛÛ^œİ\Ü[™

_KÛ‘›Øİ\Î™[˜İ[ÛŠ
^İ˜\ˆO]\Ë˜ÛÛ^ÚI‰ˆ]\Ë›ØÚÙY	‰ŠKœİ]OOOHœİ\Ü[™YŸKœİ]OOOHš[\œ\YŠI‰šKœ™\İ[YJ
_K\]N™[˜İ[ÛŠK
^İ˜\ˆO]\Ë˜ÛÛ^›\İ[™\‹\Ê\Ë›\İ[™\”ÜÚ][Û‹‹[
K\Ê\Ë›\İ[™\”ÜÚ][Û‹H‹[
NÚYŠI‰KœÜÚ][Û–OO]›ÚY
Y	‰™OO]\Ë—ÜÜ]X[	‰Š\Ë—ÜÜ]X[]KœÜÚ][Û–˜[YOY
K‰‰™ˆOO]\Ë—ÜÜ]X[I‰Š\Ë—ÜÜ]X[O]KœÜÚ][Û–K˜[YOYŠNÙ[ÙHYŠJ^Ù	‰™OO]\Ë—ÜÜ]X[	‰Š\Ë—ÜÜ]X[Y
K‰‰™ˆOO]\Ë—ÜÜ]X[I‰Š\Ë—ÜÜ]X[OYŠNİ˜\ˆ\ÊKˆ‹
NİKœÙ]ÜÚ][ÛŠ\Ë—ÜÜ]X[\Ë—ÜÜ]X[_Š_XËœ›İİ\K\]K˜Ø[
\ËK
K\Ë™Ø[YSÜİ›Øİ\ß\Ë›Û‘›Øİ\Ê
_K\İ›ŞN™[˜İ[ÛŠ
^ÚYŠ\Ë™\İ[˜][Û[[\Ë›X\İ\•›Û[YS›ÙK™\ØÛÛ›™Xİ

K\Ë›X\İ\•›Û[YS›ÙO[[\Ë›X\İ\“]]S›ÙK™\ØÛÛ›™Xİ

K\Ë›X\İ\“]]S›ÙO[[\Ë™Ø[YK˜ÛÛ™šYË˜]Y[Ë˜ÛÛ^
]\Ë˜ÛÛ^œİ\Ü[™

NÙ[Ù^İ˜\ˆO]\Îİ\Ë˜ÛÛ^˜ÛÜÙJ
K[Š[˜İ[ÛŠ
^ÚK˜ÛÛ^[[J_]\Ë™Ø[YK™]™[Ë›Ù™Š‹•’TÒP“K\Ë›Û‘Ø[YUš\ÚX›K\ÊKËœ›İİ\K™\İ›ŞK˜Ø[
\Ê_KÙ]]]N™[˜İ[ÛŠJ^Ü™]\›ˆ\Ë›]]OZK\ßK]]NÙÙ]™[˜İ[ÛŠ
^Ü™]\›ˆ\Ë›X\İ\“]]S›ÙK™ØZ[‹˜[YOOOLKÙ]™[˜İ[ÛŠJ^İ\Ë›X\İ\“]]S›ÙK™ØZ[‹œÙ]˜[YP][YJOÌŒK
K\Ë™[Z]
‹‘ÓĞSÓUUK\ËJ__KÙ]›Û[YN™[˜İ[ÛŠJ^Ü™]\›ˆ\Ë›Û[YOZK\ßK›Û[YNÙÙ]™[˜İ[ÛŠ
^Ü™]\›ˆ\Ë›X\İ\•›Û[YS›ÙK™ØZ[‹˜[Y_KÙ]™[˜İ[ÛŠJ^İ\Ë›X\İ\•›Û[YS›ÙK™ØZ[‹œÙ]˜[YP][YJK
K\Ë™[Z]
‹‘ÓĞSÕ“ÓSQK\ËJ___JNÜ™^ÜÏX_JKÌÌMŒŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆ]
ÍÌLJKÏ]
ÍNJKÏ]
MÍÊK]
NLNŠK[™]ÈÊÚ[š]X[^™N™[˜İ[ÛŠÊ^İ\Ëœ\™[\Ë\Ë›\İV×K\ËœÜÚ][ÛL\Ë˜YØ[˜XÚÏ[Ë\Ëœ™[[İ™PØ[˜XÚÏ[Ë\Ë—ÜÛÜÙ^OHˆŸKY™[˜İ[ÛŠKÊ^Ü™]\›ˆÏÛY
\Ë›\İJN›Y
\Ë›\İK\Ë˜YØ[˜XÚË\Ê_KY]™[˜İ[ÛŠKËJ^Ü™]\›ˆOÛY]
\Ë›\İKÊN›Y]
\Ë›\İKË\Ë˜YØ[˜XÚË\Ê_KÙ]]™[˜İ[ÛŠJ^Ü™]\›ˆ\Ë›\İÙW_KÙ][™^™[˜İ[ÛŠJ^Ü™]\›ˆ\Ë›\İš[™^ÙŠJ_KÛÜ™[˜İ[ÛŠKÊ^Ü™]\›ˆOÊÏOO]›ÚY	‰ŠÏY[˜İ[ÛŠKJ^Ü™]\›ˆVÙWKZVÙW_JKŠ\Ë›\İÊK\ÊN\ßKÙ]S˜[YN™[˜İ[ÛŠJ^Ü™]\›ˆ‘Ù]š\œİ
\Ë›\İ›˜[YH‹J_KÙ]˜[™ÛN™[˜İ[ÛŠKÊ^Ü™]\›ˆ‘Ù]˜[™ÛJ\Ë›\İKÊ_KÙ]š\œİ™[˜İ[ÛŠKËKJ^Ü™]\›ˆ‘Ù]š\œİ
\Ë›\İKËKJ_KÙ][™[˜İ[ÛŠKËKJ^Ü™]\›ˆ‘Ù][
\Ë›\İKËKJ_KÛİ[™[˜İ[ÛŠKÊ^Ü™]\›ˆÛİ[[X]Ú[™Ê\Ë›\İKÊ_KİØ\™[˜İ[ÛŠKÊ^Û”İØ\
\Ë›\İKÊ_K[İ™UÎ™[˜İ[ÛŠKÊ^Ü™]\›ˆ“[İ™UÊ\Ë›\İKÊ_K[İ™PX›İ™N™[˜İ[ÛŠKÊ^Ü™]\›ˆ“[İ™PX›İ™J\Ë›\İKÊ_K[İ™P™[İÎ™[˜İ[ÛŠKÊ^Ü™]\›ˆ“[İ™P™[İÊ\Ë›\İKÊ_K™[[İ™N™[˜İ[ÛŠKÊ^Ü™]\›ˆÏÛ”™[[İ™J\Ë›\İJN›”™[[İ™J\Ë›\İK\Ëœ™[[İ™PØ[˜XÚË\Ê_K™[[İ™P]™[˜İ[ÛŠKÊ^Ü™]\›ˆÏÛ”™[[İ™P]
\Ë›\İJN›”™[[İ™P]
\Ë›\İK\Ëœ™[[İ™PØ[˜XÚË\Ê_K™[[İ™P™]ÙY[™[˜İ[ÛŠKËJ^Ü™]\›ˆOÛ”™[[İ™P™]ÙY[Š\Ë›\İKÊN›”™[[İ™P™]ÙY[Š\Ë›\İKË\Ëœ™[[İ™PØ[˜XÚË\Ê_K™[[İ™P[™[˜İ[ÛŠJ^Ù›ÜŠ˜\ˆÏ]\Ë›\İ›[™İÜËKNÊ]\Ëœ™[[İ™J\Ë›\İÜ×KJNÜ™]\›ˆ\ßKœš[™ÕÕÜ™[˜İ[ÛŠJ^Ü™]\›ˆœš[™ÕÕÜ
\Ë›\İJ_KÙ[™Ğ˜XÚÎ™[˜İ[ÛŠJ^Ü™]\›ˆ”Ù[™Ğ˜XÚÊ\Ë›\İJ_K[İ™U\™[˜İ[ÛŠJ^Ü™]\›ˆ“[İ™U\
\Ë›\İJK_K[İ™QİÛ™[˜İ[ÛŠJ^Ü™]\›ˆ“[İ™QİÛŠ\Ë›\İJK_K™]™\œÙN™[˜İ[ÛŠ
^Ü™]\›ˆ\Ë›\İœ™]™\œÙJ
K\ßKÚY™›N™[˜İ[ÛŠ
^Ü™]\›ˆ”ÚY™›J\Ë›\İ
K\ßK™\XÙN™[˜İ[ÛŠKÊ^Ü™]\›ˆ”™\XÙJ\Ë›\İKÊ_K^\İÎ™[˜İ[ÛŠJ^Ü™]\›ˆ\Ë›\İš[™^ÙŠJO‹L_KÙ][™[˜İ[ÛŠKËKJ^Ü™]\›ˆ”Ù][
\Ë›\İKËKJK\ßKXXÚ™[˜İ[ÛŠKÊ^Ù›ÜŠ˜\ˆOVÛ[KOLÚO\™İ[Y[Ë›[™İÚJÊÊXKœ\Ú
\™İ[Y[ÖÚWJNÙ›ÜŠOLÚO\Ë›\İ›[™İÚJÊÊXVÌO]\Ë›\İÚWKK˜\JËJ_KÚ]İÛ™[˜İ[ÛŠ
^İ\Ëœ™[[İ™P[

K\Ë›\İV×_K\İ›ŞN™[˜İ[ÛŠ
^İ\Ëœ™[[İ™P[

K\Ëœ\™[[[\Ë˜YØ[˜XÚÏ[[\Ëœ™[[İ™PØ[˜XÚÏ[[K[™İÙÙ]™[˜İ[ÛŠ
^Ü™]\›ˆ\Ë›\İ›[™İ_Kš\œİÙÙ]™[˜İ[ÛŠ
^Ü™]\›ˆ\ËœÜÚ][ÛL\Ë›\İ›[™İŒİ\Ë›\İÌN›[_K\İÙÙ]™[˜İ[ÛŠ
^Ü™]\›ˆ\Ë›\İ›[™İŒÊ\ËœÜÚ][Û]\Ë›\İ›[™İLK\Ë›\İİ\ËœÜÚ][Û—JN›[_K™^ÙÙ]™[˜İ[ÛŠ
^Ü™]\›ˆ\ËœÜÚ][Û\Ë›\İ›[™İÊ\ËœÜÚ][ÛŠÊË\Ë›\İİ\ËœÜÚ][Û—JN›[_K™]š[İ\ÎÙÙ]™[˜İ[ÛŠ
^Ü™]\›ˆ\ËœÜÚ][ÛŒÊ\ËœÜÚ][Û‹KK\Ë›\İİ\ËœÜÚ][Û—JN›[__JNÜ™^ÜÏ[ŸJKLÌÌŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆ]
ÍNJKÏ[™]È
Ú[š]X[^™N™[˜İ[ÛŠŠ^İ\Ë™[šY\Ï^ßK\ËœÚ^™OL\ËœÙ][
Š_KÙ][™[˜İ[ÛŠÊ^ÚYŠ\œ˜^Kš\Ğ\œ˜^JÊJY›ÜŠ˜\ˆLÜË›[™İÜŠÊÊ]\ËœÙ]
ÖÜ—VÌKÖÜ—VÌWJNÜ™]\›ˆ\ßKÙ]™[˜İ[ÛŠËŠ^Ü™]\›ˆ\Ëš\ÊÊ_\ËœÚ^™JÊË\Ë™[šY\ÖÛ×O\‹\ßKÙ]™[˜İ[ÛŠÊ^ÚYŠ\Ëš\ÊÊJ\™]\›ˆ\Ë™[šY\ÖÛ×_KÙ]\œ˜^N™[˜İ[ÛŠ
^İ˜\ˆÏV×K]\Ë™[šY\ÎÙ›ÜŠ˜\ˆˆ[ˆŠ[Ëœ\Ú
–Û—JNÜ™]\›ˆßK\Î™[˜İ[ÛŠÊ^Ü™]\›ˆ\Ë™[šY\Ëš\ÓİÛ”›Ü\JÊ_K[]N™[˜İ[ÛŠÊ^Ü™]\›ˆ\Ëš\ÊÊI‰Š[]H\Ë™[šY\ÖÛ×K\ËœÚ^™KKJK\ßKÛX\™[˜İ[ÛŠ
^Ü™]\›ˆØš™XİšÙ^\Ê\Ë™[šY\ÊK™›Ü‘XXÚ
[˜İ[ÛŠÊ^Ù[]H\Ë™[šY\ÖÛ×_K\ÊK\ËœÚ^™OL\ßKÙ^\Î™[˜İ[ÛŠ
^Ü™]\›ˆØš™XİšÙ^\Ê\Ë™[šY\Ê_K˜[Y\Î™[˜İ[ÛŠ
^İ˜\ˆÏV×K]\Ë™[šY\ÎÙ›ÜŠ˜\ˆˆ[ˆŠ[Ëœ\Ú
–Û—JNÜ™]\›ˆßK[\™[˜İ[ÛŠ
^İ˜\ˆÏ]\Ë™[šY\ÎØÛÛœÛÛK™Ü›İ\
“X\ŠNÙ›ÜŠ˜\ˆˆ[ˆÊXÛÛœÛÛK›ÙÊ‹ÖÜ—JNØÛÛœÛÛK™Ü›İ\[™

_KXXÚ™[˜İ[ÛŠÊ^İ˜\ˆ]\Ë™[šY\ÎÙ›ÜŠ˜\ˆˆ[ˆŠZYŠÊ‹–Û—JOOOHLJXœ™XZÎÜ™]\›ˆ\ßKÛÛZ[œÎ™[˜İ[ÛŠÊ^İ˜\ˆ]\Ë™[šY\ÎÙ›ÜŠ˜\ˆˆ[ˆŠZYŠ–Û—OOO[Ê\™]\›ˆLÜ™]\›ˆL_KY\™ÙN™[˜İ[ÛŠËŠ^ÜOO]›ÚY	‰ŠHLJNİ˜\ˆ]\Ë™[šY\ËO[Ë™[šY\ÎÙ›ÜŠ˜\ˆÈ[ˆJ[‹š\ÓİÛ”›Ü\JÊI‰œÛ–Ü×OYVÜ×N\ËœÙ]
ËVÜ×JNÜ™]\›ˆ\ß_JNÜ™^ÜÏXßJKMÍÍŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆ]
ÍNJKÏ]
LÎLŠKÏ]
ŒÍ
K[™]È
Ñ^[™Î˜Ë[š]X[^™N™[˜İ[ÛŠ
^ØË˜Ø[
\ÊK\Ë—Ü[™[™ÏV×K\Ë—ØXİ]™OV×K\Ë—Ù\İ›ŞOV×K\Ë—İÔ›ØÙ\ÜÏL\Ë˜ÚXÚÔ]Y]YOHL_K\ĞXİ]™N™[˜İ[ÛŠŠ^Ü™]\›ˆ\Ë—ØXİ]™Kš[™^ÙŠŠO‹L_K\Ô[™[™Î™[˜İ[ÛŠŠ^Ü™]\›ˆ\Ë—İÔ›ØÙ\ÜÏŒ	‰\Ë—Ü[™[™Ëš[™^ÙŠŠO‹L_K\Ñ\İ›ŞZ[™Î™[˜İ[ÛŠŠ^Ü™]\›ˆ\Ë—Ù\İ›ŞKš[™^ÙŠŠO‹L_KY™[˜İ[ÛŠŠ^Ü™]\›ˆ\Ë˜ÚXÚÔ]Y]YI‰\Ëš\ĞXİ]™JŠI‰ˆ]\Ëš\Ñ\İ›ŞZ[™ÊŠ_\Ëš\Ô[™[™ÊŠ_
\Ë—Ü[™[™Ëœ\Ú
ŠK\Ë—İÔ›ØÙ\ÜÊÊÊKŸK™[[İ™N™[˜İ[ÛŠŠ^ÚYŠ\Ëš\Ô[™[™ÊŠJ^İ˜\ˆO]\Ë—Ü[™[™ËÏYKš[™^ÙŠŠNÜÈOOKLI‰™KœÜXÙJËJ_Y[ÙH\Ëš\ĞXİ]™JŠI‰Š\Ë—Ù\İ›ŞKœ\Ú
ŠK\Ë—İÔ›ØÙ\ÜÊÊÊNÜ™]\›ˆŸK™[[İ™P[™[˜İ[ÛŠ
^Ù›ÜŠ˜\ˆ]\Ë—ØXİ]™KO]\Ë—Ù\İ›ŞKÏ[‹›[™İÜËKNÊYKœ\Ú
–Ü×JK\Ë—İÔ›ØÙ\ÜÊÊÎÜ™]\›ˆ\ßK\]N™[˜İ[ÛŠ
^ÚYŠ\Ë—İÔ›ØÙ\ÜÏOOL
\™]\›ˆ\Ë—ØXİ]™Nİ˜\ˆ]\Ë—Ù\İ›ŞKO]\Ë—ØXİ]™KËNÙ›ÜŠÏLÜÏ‹›[™İÜÊÊÊ^ØO[–Ü×Nİ˜\ˆOYKš[™^ÙŠJNÚHOOKLI‰ŠKœÜXÙJKJK\Ë™[Z]
Ë”“ĞÑTÔ×ÔUQUQWÔ‘SSÕ‘KJJ_Y›ÜŠ‹›[™İL]\Ë—Ü[™[™ËÏLÜÏ‹›[™İÜÊÊÊXO[–Ü×K
]\Ë˜ÚXÚÔ]Y]Y_\Ë˜ÚXÚÔ]Y]YI‰™Kš[™^ÙŠJOOOKLJI‰ŠKœ\Ú
JK\Ë™[Z]
Ë”“ĞÑTÔ×ÔUQUQWĞQJJNÜ™]\›ˆ‹›[™İL\Ë—İÔ›ØÙ\ÜÏL_KÙ]Xİ]™N™[˜İ[ÛŠ
^Ü™]\›ˆ\Ë—ØXİ]™_K[™İÙÙ]™[˜İ[ÛŠ
^Ü™]\›ˆ\Ë—ØXİ]™K›[™İ_K\İ›ŞN™[˜İ[ÛŠ
^İ\Ë—İÔ›ØÙ\ÜÏL\Ë—Ü[™[™ÏV×K\Ë—ØXİ]™OV×K\Ë—Ù\İ›ŞOV×__JNÜ™^ÜÏ\ŸJKNMMŠ
K
OOËÊŠ‚ˆ
ˆ]]Üˆ›Y[Z\ˆYØY›ÛšÚ[‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆ]
ÎŠNÙ[˜İ[ÛˆÊÊ^ÚYŠJ\È[œİ[˜Ù[ÙˆÊJ\™]\›ˆ™]ÈÊÊNİ\Ë—ÛX^[šY\ÏSX]›X^
ßJK\Ë—ÛZ[‘[šY\ÏSX]›X^
‹X]˜ÙZ[
\Ë—ÛX^[šY\Ê‹
JK\Ë˜ÛX\Š
_XËœ›İİ\O^Ø[™[˜İ[ÛŠ
^Ü™]\›ˆ\Ë—Ø[
\Ë™]K×J_KÙX\˜Ú™[˜İ[ÛŠÊ^İ˜\ˆ]\Ë™]KÏV×KÏ]\ËĞ›ŞÚYŠ]ŠË
J\™]\›ˆÎÙ›ÜŠ˜\ˆOV×KKKÕÊ^Ù›ÜŠLOU˜Ú[™[‹›[™İÔNÔ
ÊÊSOU˜Ú[™[–ÔKU›XYĞÊJN“KŠËŠI‰Š›XYÔËœ\Ú
JN™ŠËŠOİ\Ë—Ø[
KÊN‘Kœ\Ú
JJNÕQKœÜ

_\™]\›ˆßKÛÛY\Î™[˜İ[ÛŠÊ^İ˜\ˆ]\Ë™]KÏ]\ËĞ›ŞÚYŠ]ŠË
J\™]\›ˆLNÙ›ÜŠ˜\ˆÏV×KKKNÕÊ^Ù›ÜŠOLU˜Ú[™[‹›[™İÑOÑJÊÊZYŠOU˜Ú[™[–ÑWKOU›XYÔÊJNKŠËJJ^ÚYŠ›XYŸŠËJJ\™]\›ˆLĞËœ\Ú
J_UPËœÜ

_\™]\›ˆL_KØY™[˜İ[ÛŠÊ^ÚYŠJÉ‰™Ë›[™İ
J\™]\›ˆ\ÎÚYŠË›[™İ\Ë—ÛZ[‘[šY\Ê^Ù›ÜŠ˜\ˆLÏYË›[™İÕÎÕ
ÊÊ]\Ëš[œÙ\
ÖÕJNÜ™]\›ˆ\ß]˜\ˆÏ]\Ë—ØZ[
ËœÛXÙJ
KË›[™İLK
NÚYŠ]\Ë™]K˜Ú[™[‹›[™İ
]\Ë™]OPÎÙ[ÙHYŠ\Ë™]KšZYÚOOPËšZYÚ
]\Ë—ÜÜ]›Ûİ
\Ë™]KÊNÙ[Ù^ÚYŠ\Ë™]KšZYÚËšZYÚ
^İ˜\ˆO]\Ë™]Nİ\Ë™]OPËÏQ_]\Ë—Ú[œÙ\
Ë\Ë™]KšZYÚPËšZYÚLKL
_\™]\›ˆ\ßK[œÙ\™[˜İ[ÛŠÊ^Ü™]\›ˆÉ‰\Ë—Ú[œÙ\
Ë\Ë™]KšZYÚLJK\ßKÛX\™[˜İ[ÛŠ
^Ü™]\›ˆ\Ë™]O[J×JK\ßK™[[İ™N™[˜İ[ÛŠË
^ÚYŠYÊ\™]\›ˆ\ÎÙ›ÜŠ˜\ˆÏ]\Ë™]KÏ]\ËĞ›Ş
ÊKOV×KV×KKK‹ÔßK›[™İÊ^ÚYŠß
ÏQKœÜ

KOQVÑK›[™İLWKOTœÜ

KHL
KË›XY‰‰Š[ÊËË˜Ú[™[‹
KˆOOKLJJ\™]\›ˆË˜Ú[™[‹œÜXÙJ‹JKKœ\Ú
ÊK\Ë—ØÛÛ™[œÙJJK\ÎÈS	‰ˆTË›XY‰‰™ŠËÊOÊKœ\Ú
ÊKœ\Ú
JKOLOTËÏTË˜Ú[™[–ÌJN“OÊJÊËÏSK˜Ú[™[–ĞWKHLJN”Ï[[\™]\›ˆ\ßKĞ›Ş™[˜İ[ÛŠÊ^Ü™]\›ˆßKÛÛ\\™SZ[–œËÛÛ\\™SZ[–N˜KÒ”ÓÓ™[˜İ[ÛŠ
^Ü™]\›ˆ\Ë™]_Kœ›ÛR”ÓÓ™[˜İ[ÛŠÊ^Ü™]\›ˆ\Ë™]OYË\ßKØ[™[˜İ[ÛŠË
^Ù›ÜŠ˜\ˆÏV×NÙÎÊYË›XYÕœ\Ú˜\JË˜Ú[™[ŠN”Ëœ\Ú˜\JËË˜Ú[™[ŠKÏTËœÜ

NÜ™]\›ˆKØZ[™[˜İ[ÛŠËËÊ^İ˜\ˆOTËU
ÌK]\Ë—ÛX^[šY\ËNÚYŠOT
\™]\›ˆO[JËœÛXÙJÊÌJJKŠK\ËĞ›Ş
KNĞß
ÏSX]˜ÙZ[
X]›ÙÊJKÓX]›ÙÊ
JKSX]˜ÙZ[
KÓX]œİÊËLJJJKO[J×JKK›XYHLKKšZYÚPÎİ˜\ˆOSX]˜ÙZ[
KÔ
KSJ“X]˜ÙZ[
X]œÜ\

JKË‹Ù›ÜŠ
ËË‹\Ë˜ÛÛ\\™SZ[–
KUÓTÎÓ
ÏTŠY›ÜŠSX]›Z[Š
Ô‹LKÊK
Ë‹K\Ë˜ÛÛ\\™SZ[–JKÏSİÏSİÊÏSJXSX]›Z[ŠÊÓKLKŠKK˜Ú[™[‹œ\Ú
\Ë—ØZ[
ËË‹ËLJJNÜ™]\›ˆŠK\ËĞ›Ş
K_KØÚÛÜÙTİX™YN™[˜İ[ÛŠËËÊ^Ù›ÜŠ˜\ˆKKK‹ËĞËœ\Ú

KJ›XYŸË›[™İLOOOTÊNÊ^Ù›ÜŠÏSLKÌOLU˜Ú[™[‹›[™İÑOÑJÊÊPOU˜Ú[™[–ÑWKZJJK]JËJKT‹ÊSÏTÏÔËOPJN“OOS‰‰”É‰ŠÏT‹OPJNÕS_˜Ú[™[–Ì_\™]\›ˆKÚ[œÙ\™[˜İ[ÛŠËÊ^İ˜\ˆÏ]\ËĞ›ŞOTÏÙÎÊÊKV×KO]\Ë—ØÚÛÜÙTİX™YJK\Ë™]K
NÙ›ÜŠK˜Ú[™[‹œ\Ú
ÊKJKJNÕL	‰”ÕK˜Ú[™[‹›[™İ\Ë—ÛX^[šY\ÎÊ]\Ë—ÜÜ]

KKNİ\Ë—ØY\İ\™[›Ş\ÊK
_KÜÜ]™[˜İ[ÛŠË
^İ˜\ˆÏYÖÕKÏTË˜Ú[™[‹›[™İO]\Ë—ÛZ[‘[šY\Îİ\Ë—ØÚÛÜÙTÜ]^\ÊËKÊNİ˜\ˆ]\Ë—ØÚÛÜÙTÜ][™^
ËKÊKO[JË˜Ú[™[‹œÜXÙJË˜Ú[™[‹›[™İT
JNĞKšZYÚTËšZYÚK›XYTË›XY‹ŠË\ËĞ›Ş
KŠK\ËĞ›Ş
KÙÖÕLWK˜Ú[™[‹œ\Ú
JN\Ë—ÜÜ]›Ûİ
ËJ_KÜÜ]›Ûİ™[˜İ[ÛŠË
^İ\Ë™]O[JÙËJK\Ë™]KšZYÚYËšZYÚ
ÌK\Ë™]K›XYHLKŠ\Ë™]K\ËĞ›Ş
_KØÚÛÜÙTÜ][™^™[˜İ[ÛŠËÊ^İ˜\ˆËKKK‹ÎÙ›ÜŠSLKÌÏUĞÏTËUĞÊÊÊQO[ŠËË\ËĞ›Ş
K[ŠËËË\ËĞ›Ş
KOY
K
KOZJJJÚJ
KOÊPKÏPËSOÓN“
NOOOT‰‰“O	‰ŠSKÏPÊNÜ™]\›ˆßKØÚÛÜÙTÜ]^\Î™[˜İ[ÛŠËÊ^İ˜\ˆÏYË›XYİ\Ë˜ÛÛ\\™SZ[–œËOYË›XYİ\Ë˜ÛÛ\\™SZ[–N˜K]\Ë—Ø[\İX\™Ú[ŠËËÊKO]\Ë—Ø[\İX\™Ú[ŠËËJNÔI‰™Ë˜Ú[™[‹œÛÜ
Ê_KØ[\İX\™Ú[™[˜İ[ÛŠËËÊ^ÙË˜Ú[™[‹œÛÜ
ÊNİ˜\ˆO]\ËĞ›Ş[ŠËJKO[ŠËËUËJKOZ

JÚ
JK‹Ù›ÜŠUÔËUÔŠÊÊSYË˜Ú[™[–Ô—KJË›XYÑJ
N“
KJÏZ

NÙ›ÜŠTËULNÔUÔ‹KJSYË˜Ú[™[–Ô—KJKË›XYÑJ
N“
KJÏZ
JNÜ™]\›ˆ_KØY\İ\™[›Ş\Î™[˜İ[ÛŠËÊ^Ù›ÜŠ˜\ˆÏTÎĞÏLĞËKJYJĞ×KÊ_KØÛÛ™[œÙN™[˜İ[ÛŠÊ^Ù›ÜŠ˜\ˆYË›[™İLKÎÕLÕKJYÖÕK˜Ú[™[‹›[™İOOLÕŒÊÏYÖÕLWK˜Ú[™[‹ËœÜXÙJËš[™^ÙŠÖÕJKJJN\Ë˜ÛX\Š
NœŠÖÕK\ËĞ›Ş
_KÛÛ\\™SZ[–™[˜İ[ÛŠË
^Ü™]\›ˆË›YU›YKÛÛ\\™SZ[–N™[˜İ[ÛŠË
^Ü™]\›ˆËÜUÜKĞ›Ş™[˜İ[ÛŠÊ^Ü™]\›ÛZ[–™Ë›YZ[–N™ËÜX^™ËœšYÚX^N™Ë˜›İÛ___NÙ[˜İ[ÛˆÊËÊ^ÚYŠTÊ\™]\›ˆš[™^ÙŠÊNÙ›ÜŠ˜\ˆÏLĞÏ›[™İĞÊÊÊZYŠÊËĞ×JJ\™]\›ˆÎÜ™]\›‹L_Y[˜İ[ÛˆŠË
^ÛŠËË˜Ú[™[‹›[™İÊ_Y[˜İ[ÛˆŠËËËJ^Ñ_
O[J[
JKK›Z[–LKÌK›Z[–OLKÌK›X^KLKÌK›X^OKLKÌÙ›ÜŠ˜\ˆUNÔÎÔ
ÊÊPOYË˜Ú[™[–ÔKJKË›XYĞÊJNJNÜ™]\›ˆ_Y[˜İ[ÛˆJË
^Ü™]\›ˆË›Z[–SX]›Z[ŠË›Z[–›Z[–
KË›Z[–OSX]›Z[ŠË›Z[–K›Z[–JKË›X^SX]›X^
Ë›X^›X^
KË›X^OSX]›X^
Ë›X^K›X^JKßY[˜İ[ÛˆÊË
^Ü™]\›ˆË›Z[–U›Z[–Y[˜İ[ÛˆJË
^Ü™]\›ˆË›Z[–KU›Z[–_Y[˜İ[ÛˆJÊ^Ü™]\›ŠË›X^YË›Z[–
JŠË›X^KYË›Z[–J_Y[˜İ[Ûˆ
Ê^Ü™]\›ˆË›X^YË›Z[–
ÊË›X^KYË›Z[–J_Y[˜İ[ÛˆJË
^Ü™]\›ŠX]›X^
›X^Ë›X^
KSX]›Z[Š›Z[–Ë›Z[–
JJŠX]›X^
›X^KË›X^JKSX]›Z[Š›Z[–KË›Z[–JJ_Y[˜İ[Ûˆ
Ë
^İ˜\ˆÏSX]›X^
Ë›Z[–›Z[–
KÏSX]›X^
Ë›Z[–K›Z[–JKOSX]›Z[ŠË›X^›X^
KSX]›Z[ŠË›X^K›X^JNÜ™]\›ˆX]›X^
KTÊJ“X]›X^
PÊ_Y[˜İ[ÛˆŠË
^Ü™]\›ˆË›Z[–U›Z[–	‰™Ë›Z[–OU›Z[–I‰•›X^YË›X^	‰•›X^OYË›X^_Y[˜İ[ÛˆŠË
^Ü™]\›ˆ›Z[–YË›X^	‰•›Z[–OYË›X^I‰•›X^YË›Z[–	‰•›X^OYË›Z[–_Y[˜İ[ÛˆJÊ^Ü™]\›ØÚ[™[™ËZYÚŒKXYˆLZ[–ŒKÌZ[–NŒKÌX^‹LKÌX^N‹LKÌ_Y[˜İ[Ûˆ
ËËËJ^Ù›ÜŠ˜\ˆVÕ×KNÔ›[™İÊTÏTœÜ

KTœÜ

KJËUPÊI‰ŠOU
ÓX]˜ÙZ[

ËU
KĞËÌŠJË
ËKËJKœ\Ú
KKÊJ_\™^ÜÏXßJKÍLÌŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆ]
ÍNJKÏ[™]È
Ú[š]X[^™N™[˜İ[ÛŠŠ^ÚYŠ\Ë™[šY\ÏV×K\œ˜^Kš\Ğ\œ˜^JŠJY›ÜŠ˜\ˆLÛ‹›[™İÛŠÊÊ]\ËœÙ]
–Û—J_KÙ]™[˜İ[ÛŠÊ^Ü™]\›ˆ\Ë™[šY\Ëš[™^ÙŠÊOOOKLI‰\Ë™[šY\Ëœ\Ú
ÊK\ßKÙ]™[˜İ[ÛŠËŠ^Ù›ÜŠ˜\ˆLÛ\Ë™[šY\Ë›[™İÛŠÊÊ^İ˜\ˆO]\Ë™[šY\ÖÛ—NÚYŠVÛ×OOO\Š\™]\›ˆ__KÙ]\œ˜^N™[˜İ[ÛŠ
^Ü™]\›ˆ\Ë™[šY\ËœÛXÙJ
_K[]N™[˜İ[ÛŠÊ^İ˜\ˆ]\Ë™[šY\Ëš[™^ÙŠÊNÜ™]\›ˆ‹LI‰\Ë™[šY\ËœÜXÙJ‹JK\ßK[\™[˜İ[ÛŠ
^ØÛÛœÛÛK™Ü›İ\
”Ù]ŠNÙ›ÜŠ˜\ˆÏLÛÏ\Ë™[šY\Ë›[™İÛÊÊÊ^İ˜\ˆ]\Ë™[šY\ÖÛ×NØÛÛœÛÛK›ÙÊŠ_XÛÛœÛÛK™Ü›İ\[™

_KXXÚ™[˜İ[ÛŠËŠ^İ˜\ˆ‹O]\Ë™[šY\ËœÛXÙJ
KÏYK›[™İÚYŠŠY›ÜŠLÛÉ‰›Ë˜Ø[
‹VÛ—KŠHOOHLNÛŠÊÊNÙ[ÙH›ÜŠLÛÉ‰›ÊVÛ—KŠHOOHLNÛŠÊÊNÜ™]\›ˆ\ßK]\˜]N™[˜İ[ÛŠËŠ^İ˜\ˆ‹O]\Ë™[šY\Ë›[™İÚYŠŠY›ÜŠLÛI‰›Ë˜Ø[
‹\Ë™[šY\ÖÛ—KŠHOOHLNÛŠÊÊNÙ[ÙH›ÜŠLÛI‰›Ê\Ë™[šY\ÖÛ—KŠHOOHLNÛŠÊÊNÜ™]\›ˆ\ßK]\˜]SØØ[™[˜İ[ÛŠÊ^İ˜\ˆ‹V×NÙ›ÜŠLNÜ\™İ[Y[Ë›[™İÜŠÊÊ[‹œ\Ú
\™İ[Y[ÖÜ—JNİ˜\ˆO]\Ë™[šY\Ë›[™İÙ›ÜŠLÜNÜŠÊÊ^İ˜\ˆÏ]\Ë™[šY\ÖÜ—NÜÖÛ×K˜\JËŠ_\™]\›ˆ\ßKÛX\™[˜İ[ÛŠ
^Ü™]\›ˆ\Ë™[šY\Ë›[™İL\ßKÛÛZ[œÎ™[˜İ[ÛŠÊ^Ü™]\›ˆ\Ë™[šY\Ëš[™^ÙŠÊO‹L_K[š[Û™[˜İ[ÛŠÊ^İ˜\ˆ[™]ÈÎÜ™]\›ˆË™[šY\Ë™›Ü‘XXÚ
[˜İ[ÛŠŠ^Ü‹œÙ]
Š_JK\Ë™[šY\Ë™›Ü‘XXÚ
[˜İ[ÛŠŠ^Ü‹œÙ]
Š_JKŸK[\œÙXİ™[˜İ[ÛŠÊ^İ˜\ˆ[™]ÈÎÜ™]\›ˆ\Ë™[šY\Ë™›Ü‘XXÚ
[˜İ[ÛŠŠ^ÛË˜ÛÛZ[œÊŠI‰œ‹œÙ]
Š_JKŸKY™™\™[˜ÙN™[˜İ[ÛŠÊ^İ˜\ˆ[™]ÈÎÜ™]\›ˆ\Ë™[šY\Ë™›Ü‘XXÚ
[˜İ[ÛŠŠ^ÛË˜ÛÛZ[œÊŠ_‹œÙ]
Š_JKŸKÚ^™NÙÙ]™[˜İ[ÛŠ
^Ü™]\›ˆ\Ë™[šY\Ë›[™İKÙ]™[˜İ[ÛŠÊ^Ü™]\›ˆÏ\Ë™[šY\Ë›[™İİ\Ë™[šY\Ë›[™İ[Î\Ë™[šY\Ë›[™İ__JNÜ™^ÜÏXßJKMMNŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆ]
LÌNJKÏ]
ÍNJKÏ]
MNÊK]
ŒNJK[™]ÈÊÚ[š]X[^™N™[˜İ[ÛŠËKK
^ÜÏOO]›ÚY	‰ŠÏL
KOOO]›ÚY	‰ŠO\ÊKOOO]›ÚY	‰ŠOL
KOO]›ÚY	‰Š[[
K\Ë—İÚY\Ë\Ë—ÚZYÚXK\Ë—Ü\™[Z\Ë˜\ÜXİ[ÙOZK\Ë˜\ÜXİ˜][ÏXOOOLÌNœËØK\Ë›Z[•ÚYL\Ë›Z[’ZYÚL\Ë›X^ÚYS[X™\‹“PVÕSQK\Ë›X^ZYÚS[X™\‹“PVÕSQK\ËœÛ˜\Ï[™]ÈŸKÙ]\ÜXİ[ÙN™[˜İ[ÛŠJ^Ü™]\›ˆOOO]›ÚY	‰ŠOL
K\Ë˜\ÜXİ[ÙOYK\ËœÙ]Ú^™J\Ë—İÚY\Ë—ÚZYÚ
_KÙ]Û˜\™[˜İ[ÛŠKÊ^Ü™]\›ˆOOO]›ÚY	‰ŠOL
KÏOO]›ÚY	‰ŠÏYJK\ËœÛ˜\ËœÙ]
KÊK\ËœÙ]Ú^™J\Ë—İÚY\Ë—ÚZYÚ
_KÙ]\™[™[˜İ[ÛŠJ^Ü™]\›ˆ\Ë—Ü\™[YK\ËœÙ]Ú^™J\Ë—İÚY\Ë—ÚZYÚ
_KÙ]Z[™[˜İ[ÛŠKÊ^Ü™]\›ˆOOO]›ÚY	‰ŠOL
KÏOO]›ÚY	‰ŠÏYJK\Ë›Z[•ÚY[
K\Ë›X^ÚY
K\Ë›Z[’ZYÚ[
Ë\Ë›X^ZYÚ
K\ËœÙ]Ú^™J\Ë—İÚY\Ë—ÚZYÚ
_KÙ]X^™[˜İ[ÛŠKÊ^Ü™]\›ˆOOO]›ÚY	‰ŠOS[X™\‹“PVÕSQJKÏOO]›ÚY	‰ŠÏYJK\Ë›X^ÚY[
K\Ë›Z[•ÚY[X™\‹“PVÕSQJK\Ë›X^ZYÚ[
Ë\Ë›Z[’ZYÚ[X™\‹“PVÕSQJK\ËœÙ]Ú^™J\Ë—İÚY\Ë—ÚZYÚ
_KÙ]Ú^™N™[˜İ[ÛŠKÊ^ÜİÚ]Ú
OOO]›ÚY	‰ŠOL
KÏOO]›ÚY	‰ŠÏYJK\Ë˜\ÜXİ[ÙJ^ØØ\ÙH‹““Ó‘N\Ë—İÚY]\Ë™Ù]™]ÕÚY
ÊK\ËœÛ˜\Ë
JK\Ë—ÚZYÚ]\Ë™Ù]™]ÒZYÚ
ÊË\ËœÛ˜\ËJJK\Ë˜\ÜXİ˜][Ï]\Ë—ÚZYÚOOLÌN\Ë—İÚYİ\Ë—ÚZYÚØœ™XZÎØØ\ÙH‹•ÒQĞÓÓ•“Ó×ÒRQÒ\Ë—İÚY]\Ë™Ù]™]ÕÚY
ÊK\ËœÛ˜\Ë
JK\Ë—ÚZYÚ]\Ë™Ù]™]ÒZYÚ
\Ë—İÚY
ŠKİ\Ë˜\ÜXİ˜][ÊKLJNØœ™XZÎØØ\ÙH‹’RQÒĞÓÓ•“Ó×ÕÒQ\Ë—ÚZYÚ]\Ë™Ù]™]ÒZYÚ
ÊË\ËœÛ˜\ËJJK\Ë—İÚY]\Ë™Ù]™]ÕÚY
\Ë—ÚZYÚ
\Ë˜\ÜXİ˜][ËLJNØœ™XZÎØØ\ÙH‹‘’U\Ë˜ÛÛœİ˜Z[ŠKËL
NØœ™XZÎØØ\ÙH‹‘S•‘SÔ\Ë˜ÛÛœİ˜Z[ŠKËLJNØœ™XZß\™]\›ˆ\ßKÙ]\ÜXİ˜][Î™[˜İ[ÛŠJ^Ü™]\›ˆ\Ë˜\ÜXİ˜][ÏYK\ËœÙ]Ú^™J\Ë—İÚY\Ë—ÚZYÚ
_K™\Ú^™N™[˜İ[ÛŠKÊ^Ü™]\›ˆ\Ë—İÚY]\Ë™Ù]™]ÕÚY
ÊK\ËœÛ˜\Ë
JK\Ë—ÚZYÚ]\Ë™Ù]™]ÒZYÚ
ÊË\ËœÛ˜\ËJJK\Ë˜\ÜXİ˜][Ï]\Ë—ÚZYÚOOLÌN\Ë—İÚYİ\Ë—ÚZYÚ\ßKÙ]™]ÕÚY™[˜İ[ÛŠKÊ^Ü™]\›ˆÏOO]›ÚY	‰ŠÏHL
KO[
K\Ë›Z[•ÚY\Ë›X^ÚY
KÉ‰\Ë—Ü\™[	‰™O\Ë—Ü\™[ÚY	‰ŠOSX]›X^
\Ë›Z[•ÚY\Ë—Ü\™[ÚY
JK_KÙ]™]ÒZYÚ™[˜İ[ÛŠKÊ^Ü™]\›ˆÏOO]›ÚY	‰ŠÏHL
KO[
K\Ë›Z[’ZYÚ\Ë›X^ZYÚ
KÉ‰\Ë—Ü\™[	‰™O\Ë—Ü\™[šZYÚ	‰ŠOSX]›X^
\Ë›Z[’ZYÚ\Ë—Ü\™[šZYÚ
JK_KÛÛœİ˜Z[™[˜İ[ÛŠKËJ^ÙOOO]›ÚY	‰ŠOL
KÏOO]›ÚY	‰ŠÏYJKOOO]›ÚY	‰ŠOHL
KO]\Ë™Ù]™]ÕÚY
JKÏ]\Ë™Ù]™]ÒZYÚ
ÊNİ˜\ˆO]\ËœÛ˜\Ë\ÏOOLÌN™KÜÎÜ™]\›ˆI‰\Ë˜\ÜXİ˜][ÏšXI‰\Ë˜\ÜXİ˜][ÏÊO[ÊKK
KÏYKİ\Ë˜\ÜXİ˜][ËKOŒ	‰ŠÏ[ÊËKJKO\Ê\Ë˜\ÜXİ˜][ÊJNŠI‰\Ë˜\ÜXİ˜][ÏXI‰\Ë˜\ÜXİ˜][Ïš
I‰ŠÏ[ÊËKJKO\Ê\Ë˜\ÜXİ˜][ËKŒ	‰ŠO[ÊKK
KÏYJŠKİ\Ë˜\ÜXİ˜][ÊJJK\Ë—İÚYYK\Ë—ÚZYÚ\Ë\ßKš]Î™[˜İ[ÛŠKÊ^Ü™]\›ˆ\Ë˜ÛÛœİ˜Z[ŠKËL
_K[™[Ü™[˜İ[ÛŠKÊ^Ü™]\›ˆ\Ë˜ÛÛœİ˜Z[ŠKËLJ_KÙ]ÚY™[˜İ[ÛŠJ^Ü™]\›ˆ\ËœÙ]Ú^™JK\Ë—ÚZYÚ
_KÙ]ZYÚ™[˜İ[ÛŠJ^Ü™]\›ˆ\ËœÙ]Ú^™J\Ë—İÚYJ_KÔİš[™Î™[˜İ[ÛŠ
^Ü™]\›ˆ–ŞÈÚ^™H
ÚYHŠİ\Ë—İÚY
ÈˆZYÚHŠİ\Ë—ÚZYÚ
Èˆ\ÜXİ˜][ÏHŠİ\Ë˜\ÜXİ˜][ÊÈˆ\ÜXİ[ÙOHŠİ\Ë˜\ÜXİ[ÙJÈŠHWHŸKÙ]ÔÔÎ™[˜İ[ÛŠJ^ÙI‰™Kœİ[I‰ŠKœİ[KÚY]\Ë—İÚY
Èœ‹Kœİ[KšZYÚ]\Ë—ÚZYÚ
ÈœŠ_KÛÜN™[˜İ[ÛŠJ^Ü™]\›ˆKœÙ]\ÜXİ[ÙJ\Ë˜\ÜXİ[ÙJKK˜\ÜXİ˜][Ï]\Ë˜\ÜXİ˜][ËKœÙ]Ú^™J\ËÚY\ËšZYÚ
_K\İ›ŞN™[˜İ[ÛŠ
^İ\Ë—Ü\™[[[\ËœÛ˜\Ï[[KÚYÙÙ]™[˜İ[ÛŠ
^Ü™]\›ˆ\Ë—İÚYKÙ]™[˜İ[ÛŠJ^İ\ËœÙ]Ú^™JK\Ë—ÚZYÚ
__KZYÚÙÙ]™[˜İ[ÛŠ
^Ü™]\›ˆ\Ë—ÚZYÚKÙ]™[˜İ[ÛŠJ^İ\ËœÙ]Ú^™J\Ë—İÚYJ___JNÛ‹““Ó‘OL‹•ÒQĞÓÓ•“Ó×ÒRQÒLK‹’RQÒĞÓÓ•“Ó×ÕÒQL‹‹‘’ULË‹‘S•‘SÔM™^ÜÏ[ŸJKMLŒÎŠOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹Ü™^ÜÏH˜YŸJKMŒNÎŠOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹Ü™^ÜÏHœ™[[İ™HŸJKŒÍŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹Ü™^ÜÏ^Ô“ĞÑTÔ×ÔUQUQWĞQ
MLŒÎ
K“ĞÑTÔ×ÔUQUQWÔ‘SSÕ‘N
MŒNÊ__JKLÎLŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹Ü™^ÜÏ^Ñ]™[Î
ŒÍ
K\İ
ÌÌMŒŠKX\
LÌÌ
K›ØÙ\ÜÔ]Y]YN
MÍÍ
K•™YN
NMMŠKÙ]
ÍLÌŠKÚ^™N
MMJ__JKMÌÎŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆ]
ÍNJKÏ]
LÌNJKÏ]
NÊK]
M
K]
LÌ
KO]
ÎLŒÍÊKÏ[™]È
Ñ^[™Î™K[š]X[^™N™[˜İ[ÛŠKKŠ^ÙK˜Ø[
\ËKKŠK\Ë˜Y
—×ĞTÑH‹ŠK\Ë—ÜÛİ\˜ÙO]\Ë™œ˜[Y\Ë—×ĞTÑKœÛİ\˜ÙK\Ë˜Ø[˜\Ï]\Ë—ÜÛİ\˜ÙKš[XYÙK\Ë˜ÛÛ^]\Ë˜Ø[˜\Ë™Ù]ÛÛ^
Œ™‹İÚ[™XYœ™\]Y[NˆLJK\ËÚYY\ËšZYÚY‹\Ëš[XYÙQ]O]\Ë˜ÛÛ^™Ù][XYÙQ]JŠK\Ë™]O[[\Ëš[XYÙQ]I‰Š\Ë™]O]\Ëš[XYÙQ]K™]JK\Ëœ^[Ï[[\Ë˜Y™™\‹\Ë™]I‰Š\Ëš[XYÙQ]K™]K˜Y™™\Ê\Ë˜Y™™\]\Ëš[XYÙQ]K™]K˜Y™™\‹\Ëœ^[Ï[™]ÈZ[Ì\œ˜^J\Ë˜Y™™\ŠJNÚ[™İË\œ˜^PY™™\Ê\Ë˜Y™™\[™]È\œ˜^PY™™\Š\Ëš[XYÙQ]K™]K›[™İ
K\Ëœ^[Ï[™]ÈZ[Ì\œ˜^J\Ë˜Y™™\ŠJN\Ëœ^[Ï]\Ëš[XYÙQ]K™]J_K\]N™[˜İ[ÛŠ
^Ü™]\›ˆ\Ëš[XYÙQ]O]\Ë˜ÛÛ^™Ù][XYÙQ]J\ËÚY\ËšZYÚ
K\Ë™]O]\Ëš[XYÙQ]K™]K\Ëš[XYÙQ]K™]K˜Y™™\Ê\Ë˜Y™™\]\Ëš[XYÙQ]K™]K˜Y™™\‹\Ëœ^[Ï[™]ÈZ[Ì\œ˜^J\Ë˜Y™™\ŠJNÚ[™İË\œ˜^PY™™\Ê\Ë˜Y™™\[™]È\œ˜^PY™™\Š\Ëš[XYÙQ]K™]K›[™İ
K\Ëœ^[Ï[™]ÈZ[Ì\œ˜^J\Ë˜Y™™\ŠJN\Ëœ^[Ï]\Ëš[XYÙQ]K™]K\Ë›X[˜YÙ\‹™Ø[YK˜ÛÛ™šYËœ™[™\•\OOO\‹•ÑP‘Ó	‰\Ëœ™Yœ™\Ú

K\ßK˜]Î™[˜İ[ÛŠKKJ^Ü™]\›ˆOOO]›ÚY	‰ŠOHL
K\Ë˜ÛÛ^™˜]Ò[XYÙJKJKI‰\Ë\]J
K\ßK˜]Ñœ˜[YN™[˜İ[ÛŠKKK
^ÚOO]›ÚY	‰ŠL
KOOO]›ÚY	‰ŠOL
KOO]›ÚY	‰ŠHL
Nİ˜\ˆ]\Ë›X[˜YÙ\‹™Ù]œ˜[YJKJNÚYŠŠ^İ˜\ˆY‹˜Ø[˜\Ñ]KOY‹˜İ]ÚYY‹˜İ]ZYÚÏY‹œÛİ\˜ÙKœ™\ÛÛ][Ûİ\Ë˜ÛÛ^™˜]Ò[XYÙJ‹œÛİ\˜ÙKš[XYÙK‹‹KKKKÙËÙÊK	‰\Ë\]J
_\™]\›ˆ\ßKÙ]^[™[˜İ[ÛŠKKKŠ^ÙOO]›ÚY	‰ŠLMJKOSX]˜XœÊX]™›ÛÜŠJJKOSX]˜XœÊX]™›ÛÜŠJJNİ˜\ˆ]\Ë™Ù][™^
KJNÚYŠ‹LJ^İ˜\ˆO]\Ë˜ÛÛ^™Ù][XYÙQ]JKKKJNÛK™]VÌOZK™]VÌWO]KK™]VÌ—OYK™]VÌ×OY‹\Ë˜ÛÛ^œ][XYÙQ]JKKJ_\™]\›ˆ\ßK]]N™[˜İ[ÛŠKKK‹Š^Ü™]\›ˆOOO]›ÚY	‰ŠOL
KOO]›ÚY	‰ŠL
KOO]›ÚY	‰ŠXKÚY
KOO]›ÚY	‰ŠXKšZYÚ
K\Ë˜ÛÛ^œ][XYÙQ]JKKK‹ŠK\ßKÙ]]N™[˜İ[ÛŠKKJ^ØOXÊX]™›ÛÜŠJK\ËÚYLJKOXÊX]™›ÛÜŠJK\ËšZYÚLJKXÊK\ËÚYXJKOXÊKK\ËšZYÚZJNİ˜\ˆ]\Ë˜ÛÛ^™Ù][XYÙQ]JKKJNÜ™]\›ˆKÙ]^[™[˜İ[ÛŠKK
^Ú
[™]ÈÊNİ˜\ˆO]\Ë™Ù][™^
KJNÚYŠO‹LJ^İ˜\ˆ]\Ë™]KYİJÌKYİJÌWKOYİJÌ—KYİJÌ×NÚœÙ]Ê‹‹K
_\™]\›ˆKÙ]^[Î™[˜İ[ÛŠKKJ^ØOOO]›ÚY	‰ŠOL
KOOO]›ÚY	‰ŠOL
KOO]›ÚY	‰Š]\ËÚY
KOOO]›ÚY	‰ŠOZ
KOSX]˜XœÊX]œ›İ[™
JJKOSX]˜XœÊX]œ›İ[™
JJNÙ›ÜŠ˜\ˆXÊK\ËÚY
KXÊJÚ\ËÚY
KXÊK\ËšZYÚ
KOXÊJİK\ËšZYÚ
K[™]ÈËÏV×K]ÕNÕ
ÊÊ^Ù›ÜŠ˜\ˆÏV×KÏYĞÏĞÊÊÊ^]\Ë™Ù]^[
Ë
KËœ\Ú
ŞËN•ÛÛÜ˜ÛÛÜ‹[N˜[QÓJNÙËœ\Ú
Ê_\™]\›ˆßKÙ][™^™[˜İ[ÛŠKJ^Ü™]\›ˆOSX]˜XœÊX]œ›İ[™
JJKOSX]˜XœÊX]œ›İ[™
JJKO\ËÚY	‰šO\ËšZYÚÊJÚJ\ËÚY
J‹L_K™Yœ™\Ú™[˜İ[ÛŠ
^Ü™]\›ˆ\Ë—ÜÛİ\˜ÙK\]J
K\ßKÙ]Ø[˜\Î™[˜İ[ÛŠ
^Ü™]\›ˆ\Ë˜Ø[˜\ßKÙ]ÛÛ^™[˜İ[ÛŠ
^Ü™]\›ˆ\Ë˜ÛÛ^KÛX\™[˜İ[ÛŠKKK
^Ü™]\›ˆOOO]›ÚY	‰ŠOL
KOOO]›ÚY	‰ŠOL
KOO]›ÚY	‰Š]\ËÚY
KOOO]›ÚY	‰ŠO]\ËšZYÚ
KOO]›ÚY	‰ŠHL
K\Ë˜ÛÛ^˜ÛX\”™Xİ
KKJK	‰\Ë\]J
K\ßKÙ]Ú^™N™[˜İ[ÛŠKJ^Ü™]\›ˆOOO]›ÚY	‰ŠOXJK
HOO]\ËÚYHOO]\ËšZYÚ
I‰Š\Ë˜Ø[˜\ËÚYXK\Ë˜Ø[˜\ËšZYÚZK\Ë—ÜÛİ\˜ÙKÚYXK\Ë—ÜÛİ\˜ÙKšZYÚZK\Ë—ÜÛİ\˜ÙKš\ÔİÙ\“ÙŒ[ŠKJK\Ë™œ˜[Y\Ë—×ĞTÑKœÙ]Ú^™JKK
K\ËÚYXK\ËšZYÚZK\Ëœ™Yœ™\Ú

JK\ßK\İ›ŞN™[˜İ[ÛŠ
^ÙKœ›İİ\K™\İ›ŞK˜Ø[
\ÊK\Ë—ÜÛİ\˜ÙO[[\Ë˜Ø[˜\Ï[[\Ë˜ÛÛ^[[\Ëš[XYÙQ]O[[\Ë™]O[[\Ëœ^[Ï[[\Ë˜Y™™\[[_JNÜ™^ÜÏ\ßJKLÌŒŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆ]
LÌLŠKÏ]
ÎN
KÏ]
ÎLNJK]
ÍNJK]
M
KO]
ÌÊKÏ]
MMM
KO]
ÍŒŒ
KO]
ÌŒÌŠK]
ÎLŒÍÊKO]
ÌMM
K[™]ÈŠÑ^[™Îš[š]X[^™N™[˜İ[ÛŠ‹KË
^ŞOO]›ÚY	‰ŠLMŠKÏOO]›ÚY	‰ŠÏLMŠKOO]›ÚY	‰ŠHL
K\Ë\OH‘[˜[ZXÕ^\™Hİ˜\ˆÏ]‹™Ø[YKœ™[™\™\‹ÏTÉ‰”Ë\OOO[‹ĞS•TËOPÏÛË˜Ü™X]L‘
\ËÊN–İ\×NÚ˜Ø[
\Ë‹KKÊK\Ë˜Y
—×ĞTÑH‹ÊK\Ëœ™[™\™\TË\ËÚYKLK\ËšZYÚKLK\Ëš\Ñ˜]Ú[™ÏHLK\Ë˜Ø[˜\ÏPÏÑN›[\Ë˜ÛÛ^PÏÑK™Ù]ÛÛ^
Œ™‹İÚ[™XYœ™\]Y[NˆLJN›[\Ë™\OHLK\Ëš\ÔÜš]U^\™OHL\Ë—Ù\˜\ÙS[ÙOHLK\Ë˜Ø[Y\˜O[™]ÈÊÊKœÙ]ØÙ[™J‹™Ø[YKœØÙ[™KœŞ\İ[TØÙ[™KLJK\Ëœ™[™\•\™Ù]PÏÛ[›™]ÈJËËKLKLKLLJK\Ëœ\[[™OPÏÛ[”Ëœ\[[™\Ë™Ù]
K”ÒS‘ÓWÔTSS‘JK\ËœÙ]Ú^™JË
_KÙ]Ú^™N™[˜İ[ÛŠ‹‹J^İOO]›ÚY	‰ŠYŠKOOO]›ÚY	‰ŠOHL
KI‰ŠSX]™›ÛÜŠŠKSX]™›ÛÜŠŠK‰LˆOOL	‰™ŠÊË‰LˆOOL	‰ŠÊÊNİ˜\ˆ]\Ë™Ù]

KÏ^œÛİ\˜ÙNÚYŠˆOO]\ËÚYˆOO]\ËšZYÚ
^İ\Ë˜Ø[˜\É‰Š\Ë˜Ø[˜\ËÚYY‹\Ë˜Ø[˜\ËšZYÚ]ŠNİ˜\ˆ]\Ëœ™[™\•\™Ù]Õ	‰ŠÚ[™\Ú^™J‹ŠI‰•œ™\Ú^™J‹ŠK^\™HOOYË™Û^\™I‰\Ëœ™[™\™\‹™[]U^\™JË™Û^\™JK\ËœÙ]œ›ÛT™[™\•\™Ù]

JK\Ë˜Ø[Y\˜KœÙ]Ú^™J‹ŠKËÚYY‹ËšZYÚ]‹œÙ]Ú^™J‹ŠK\ËÚYY‹\ËšZYÚ]ŸY[Ù^İ˜\ˆÏ]\Ë™Ù]Ûİ\˜ÙR[XYÙJ
NŞ˜İ]
Ù”ËÚY	‰ŠTËÚY^˜İ]
K˜İ]Jİ”ËšZYÚ	‰ŠTËšZYÚ^˜İ]JKœÙ]Ú^™J‹‹˜İ]˜İ]J_\™]\›ˆ\ßKÙ]œ›ÛT™[™\•\™Ù]™[˜İ[ÛŠ
^İ˜\ˆ]\Ë™Ù]

KY‹œÛİ\˜ÙKO]\Ëœ™[™\•\™Ù]Ü™]\›ˆ‹š\Ô™[™\•^\™OHL‹š\ÑÓ^\™OHL‹™Û^\™O[K^\™K\ßKÙ]\ÔÜš]U^\™N™[˜İ[ÛŠŠ^Ü™]\›ˆ\Ëš\ÔÜš]U^\™OY‹\ßKš[™[˜İ[ÛŠ‹‹KË
^İ˜\ˆÏ]\Ë˜Ø[Y\˜KÏ]\Ëœ™[™\™\İOO]›ÚY	‰ŠLJKOOO]›ÚY	‰ŠOL
KOO]›ÚY	‰ŠL
KÏOO]›ÚY	‰ŠÏ]\ËÚY
KOO]›ÚY	‰Š]\ËšZYÚ
Nİ˜\ˆOYŒM‰ŒMKY	ŒMKOY‰ŒMKO]\Ëœ™[™\•\™Ù]ÚYŠËœ™T™[™\Š
KJ^ÓK˜š[™
L
Nİ˜\ˆ]\Ëœ\[[™K›X[˜YÙ\‹œÙ]
\Ëœ\[[™JKPËÚYÓKÚYÏPËšZYÚÓKšZYÚSKšZYÚJ
Õ
NÔ‹™˜]Ñš[™Xİ
J“ŠËÊ“
ËK™Ù][œ›ÛQ›Ø]ÊKÌMKÌMKKÌMKJKŠKK[˜š[™
L
_Y[Ù^İ˜\ˆ]\Ë˜ÛÛ^ĞËœÙ]ÛÛ^
ŠK‹™ÛØ˜[ÛÛ\ÜÚ]SÜ\˜][ÛHœÛİ\˜ÙK[İ™\ˆ‹‹™š[İ[OHœ™Ø˜JŠÑJÈ‹ŠÔ
È‹ŠĞJÈ‹ŠİŠÈŠH‹‹™š[™Xİ
KË
KËœÙ]ÛÛ^

_\™]\›ˆ\Ë™\OHL\ßKÛX\™[˜İ[ÛŠ‹‹K
^ÚYŠ\Ë™\J^İ˜\ˆÏ]\Ë˜ÛÛ^]\Ëœ™[™\•\™Ù]ÕÕ˜ÛX\Š‹‹K
N™É‰ŠˆOO]›ÚY	‰ˆOO]›ÚY	‰›HOO]›ÚY	‰OO]›ÚYÙË˜ÛX\”™Xİ
‹‹K
NŠËœØ]™J
KËœÙ]˜[œÙ›Ü›JKK
KË˜ÛX\”™Xİ
\ËÚY\ËšZYÚ
KËœ™\İÜ™J
JJK\Ë™\OHL_\™]\›ˆ\ßKİ[\™[˜İ[ÛŠ‹‹KÊ^ÛOOO]›ÚY	‰ŠOL
KOO]›ÚY	‰ŠL
Nİ˜\ˆ\ÊË˜[H‹JKÏ\ÊË[‹MÍÍÌŒMJKÏ\ÊË˜[™ÛH‹
KO\ÊËœ›İ][Ûˆ‹
K\ÊËœØØ[H‹JKO\ÊËœØØ[V‹
KO\ÊËœØØ[VH‹
K\ÊË›ÜšYÚ[–‹JK\ÊË›ÜšYÚ[–H‹JKÏ\ÊË˜›[™[ÙH‹
K\ÊË™\˜\ÙH‹LJK\ÊËœÚÚ\˜]Ú‹LJK]\Ë›X[˜YÙ\‹œ™\Ù]İ[\
ÊNÜ™]\›ˆ‹œÙ][™ÛJ
KÈOOLŞ‹œÙ][™ÛJÊN‘HOOL	‰‹œÙ]›İ][ÛŠJK‹œÙ]ØØ[JKJK‹œÙ]^\™J‹ŠK‹œÙ]ÜšYÚ[Š‹
K‹œÙ]›[™[ÙJÊK‰‰Š\Ë—Ù\˜\ÙS[ÙOHL
Kİ\Ë˜˜]ÚØ[YSØš™Xİ
‹K
N\Ë™˜]Ê‹K
K‰‰Š\Ë—Ù\˜\ÙS[ÙOHLJK\ßK\˜\ÙN™[˜İ[ÛŠ‹‹J^Ü™]\›ˆ\Ë—Ù\˜\ÙS[ÙOHL\Ë™˜]Ê‹‹JK\Ë—Ù\˜\ÙS[ÙOHLK\ßK˜]Î™[˜İ[ÛŠ‹‹KÊ^Ü™]\›ˆ\Ë˜™YÚ[‘˜]Ê
K\Ë˜˜]Ú˜]Ê‹‹KÊK\Ë™[™˜]Ê
K\ßK˜]Ñœ˜[YN™[˜İ[ÛŠ‹‹KË
^Ü™]\›ˆ\Ë˜™YÚ[‘˜]Ê
K\Ë˜˜]Ú˜]Ñœ˜[YJ‹‹KË
K\Ë™[™˜]Ê
K\ßK™\X]™[˜İ[ÛŠ‹‹KËËËJ^ÚYŠOOO]›ÚY	‰ŠOL
KOO]›ÚY	‰ŠL
KÏOO]›ÚY	‰ŠÏ]\ËÚY
KOO]›ÚY	‰Š]\ËšZYÚ
KÏOO]›ÚY	‰ŠÏLJKÏOO]›ÚY	‰ŠÏLMÍÍÌŒMJKOOO]›ÚY	‰ŠOHLJKˆ[œİ[˜Ù[ÙˆOİY]\Ë›X[˜YÙ\‹™Ù]œ˜[YJ‹ŠK]Š\™]\›ˆ\Îİ˜\ˆ]\Ë›X[˜YÙ\‹œ™\Ù]İ[\
ËÊNÔœÙ]œ˜[YJŠKœÙ]ÜšYÚ[Š
Nİ˜\ˆO]‹ÚYO]‹šZYÚÙÏSX]™›ÛÜŠÊKSX]™›ÛÜŠ
Nİ˜\ˆSX]˜ÙZ[
ËĞJKSX]˜ÙZ[
ÓJKÏTŠKYËS
“KUİÏŒ	‰ŠÏPK]ÊKŒ	‰ŠSKSŠKO	‰ŠŠÏSX]˜ÙZ[
X]˜XœÊJKĞJJK	‰Š
ÏSX]˜ÙZ[
X]˜XœÊ
KÓJJNİ˜\ˆ[K^HLK]\Ë›X[˜YÙ\‹œİ[\Ü›ÜœÙ]ÊKJNÑ_\Ë˜™YÚ[‘˜]Ê
NÙ›ÜŠ˜\ˆLÑÑŠÊÊ^ÚYŠŠÓO
^ŞŠÏSNØÛÛ[Y_Y›ÜŠ˜\ˆOLÕOÕJÊÊ^ÚYŠHLKŠĞO
^ØŠÏPNØÛÛ[Y_Y[ÙH	‰ŠHL‹ÚYPJØ‹‹PKP‹ÚY
NŞ	‰ŠHL‹šZYÚSJŞ‹‹OSKP‹šZYÚ
KÏŒ	‰•OOOT‹LI‰ŠHL‹ÚY]ÊKŒ	‰‘OOSLI‰ŠHL‹šZYÚSŠK	‰”œÙ]Ü›Ü
ŠK\Ë˜˜]ÚØ[YSØš™Xİ
‹ŠKš\ĞÜ›ÜYHLK‹œÙ]ÊKJKŠÏP_X[KŠÏS_\™]\›ˆ_\Ë™[™˜]Ê
K\ßK™YÚ[‘˜]Î™[˜İ[ÛŠ
^ÚYŠ]\Ëš\Ñ˜]Ú[™Ê^İ˜\ˆ]\Ë˜Ø[Y\˜K]\Ëœ™[™\™\‹O]\Ëœ™[™\•\™Ù]Ù‹œ™T™[™\Š
KOİ‹˜™YÚ[Ø\\™JKÚYKšZYÚ
N‹œÙ]ÛÛ^
\Ë˜ÛÛ^
K\Ëš\Ñ˜]Ú[™ÏHL\™]\›ˆ\ßK˜]Ú˜]Î™[˜İ[ÛŠ‹‹KÊ^Ü™]\›ˆ\œ˜^Kš\Ğ\œ˜^JŠ_
VÙ—JK\Ë˜˜]Ú\İ
‹‹KÊK\ßK˜]Ú˜]Ñœ˜[YN™[˜İ[ÛŠ‹‹KË
^ÛOOO]›ÚY	‰ŠOL
KOO]›ÚY	‰ŠL
KÏOO]›ÚY	‰ŠÏLJKOO]›ÚY	‰ŠLMÍÍÌŒMJNİ˜\ˆÏ]\Ë›X[˜YÙ\‹™Ù]œ˜[YJ‹ŠNÜ™]\›ˆÉ‰Š\Ëœ™[™\•\™Ù]İ\Ëœ\[[™K˜˜]Ú^\™Qœ˜[YJËKË\Ë˜Ø[Y\˜K›X]š^[
N\Ë˜˜]Ú^\™Qœ˜[YJËKË
JK\ßK[™˜]Î™[˜İ[ÛŠŠ^ÚYŠOO]›ÚY	‰Š]\Ë—Ù\˜\ÙS[ÙJK\Ëš\Ñ˜]Ú[™Ê^İ˜\ˆ]\Ëœ™[™\™\‹O]\Ëœ™[™\•\™Ù]ÚYŠJ^İ˜\ˆ]‹™[™Ø\\™J
KÏ]‹œ\[[™\ËœÙ]][]J
NÙË˜›]œ˜[YJKKLKLK‹\Ëš\ÔÜš]U^\™JK‹œ™\Ù]ØÚ\ÜÛÜŠ
K‹œ™\Ù]šY]ÜÜ

_Y[ÙH‹œÙ]ÛÛ^

Nİ\Ë™\OHL\Ëš\Ñ˜]Ú[™ÏHL_\™]\›ˆ\ßK˜]Ú\İ™[˜İ[ÛŠ‹‹KÊ^İ˜\ˆY‹›[™İÚYŠOOL
Y›ÜŠ˜\ˆÏLÔÏÔÊÊÊ^İ˜\ˆÏY–Ô×NÈPßÏOO]\ß
Ëœ™[™\•ÙX‘ÓËœ™[™\Ø[˜\Ïİ\Ë˜˜]ÚØ[YSØš™Xİ
Ë‹JNËš\Ô\™[Ë›\İİ\Ë˜˜]ÚÜ›İ\
Ë™Ù]Ú[™[Š
K‹JN\[ÙˆÏOHœİš[™Èİ\Ë˜˜]Ú^\™Qœ˜[YRÙ^JË[‹KÊNÈ[œİ[˜Ù[ÙˆOİ\Ë˜˜]Ú^\™Qœ˜[YJË‹KÊN\œ˜^Kš\Ğ\œ˜^JÊI‰\Ë˜˜]Ú\İ
Ë‹KÊJ__K˜]ÚÜ›İ\™[˜İ[ÛŠ‹‹J^İOO]›ÚY	‰ŠL
KOOO]›ÚY	‰ŠOL
NÙ›ÜŠ˜\ˆLŞ‹›[™İŞ
ÊÊ^İ˜\ˆÏY–ŞNÙËÚ[™[™\Š\Ë˜Ø[Y\˜JI‰\Ë˜˜]ÚØ[YSØš™Xİ
ËË
İ‹ËJÛJ__K˜]ÚØ[YSØš™Xİ™[˜İ[ÛŠ‹‹J^İOO]›ÚY	‰ŠY‹
KOOO]›ÚY	‰ŠOY‹JNİ˜\ˆY‹ÏY‹K]\Ë˜Ø[Y\˜KÏ]\Ëœ™[™\™\‹Ï]\Ë—Ù\˜\ÙS[ÙKOY‹›X\ÚÎÚYŠ‹œÙ]ÜÚ][ÛŠ‹JK\Ë˜Ø[˜\Ê^ÚYŠÊ^İ˜\ˆY‹˜›[™[ÙNÙ‹˜›[™[ÙO[‘TTÑ_QI‰‘Kœ™T™[™\Ø[˜\ÊË‹
K‹œ™[™\Ø[˜\ÊË‹[
KI‰‘KœÜİ™[™\Ø[˜\ÊË‹
KÉ‰Š‹˜›[™[ÙOT
_Y[ÙHÉ‰ŠI‰‘Kœ™T™[™\•ÙX‘Ó
Ë‹
KßËœÙ]›[™[ÙJ‹˜›[™[ÙJK‹œ™[™\•ÙX‘Ó
Ë‹
KI‰‘KœÜİ™[™\•ÙX‘Ó
Ë\Ëœ™[™\•\™Ù]
JNÙ‹œÙ]ÜÚ][ÛŠÊ_K˜]Ú^\™Qœ˜[YRÙ^N™[˜İ[ÛŠ‹‹KË
^İ˜\ˆÏ]\Ë›X[˜YÙ\‹™Ù]œ˜[YJ‹ŠNÔÉ‰\Ë˜˜]Ú^\™Qœ˜[YJËKË
_K˜]Ú^\™Qœ˜[YN™[˜İ[ÛŠ‹‹KÊ^İOO]›ÚY	‰ŠL
KOOO]›ÚY	‰ŠOL
KOO]›ÚY	‰ŠLJKÏOO]›ÚY	‰ŠÏLMÍÍÌŒMJNİ˜\ˆ]\Ë˜Ø[Y\˜K›X]š^Ï]\Ëœ™[™\•\™Ù]ÚYŠÊ]\Ëœ\[[™K˜˜]Ú^\™Qœ˜[YJ‹‹KË[
NÙ[Ù^İ˜\ˆÏ]\Ë˜ÛÛ^OY‹˜Ø[˜\Ñ]KY‹œÛİ\˜ÙKš[XYÙNĞËœØ]™J
KË™ÛØ˜[ÛÛ\ÜÚ]SÜ\˜][Û]\Ë—Ù\˜\ÙS[ÙOÈ™\İ[˜][Û‹[İ]ˆœÛİ\˜ÙK[İ™\ˆ‹Ë™ÛØ˜[[O^œÙ]ĞÛÛ^
ÊKKÚYŒ	‰‘KšZYÚŒ	‰Ë™˜]Ò[XYÙJKKKKÚYKšZYÚ‹KKÚYKšZYÚ
KËœ™\İÜ™J
__KÛ˜\Úİ\™XN™[˜İ[ÛŠ‹‹KËÊ^Ü™]\›ˆ\Ëœ™[™\•\™Ù]İ\Ëœ™[™\™\‹œÛ˜\Úİœ˜[YXY™™\Š\Ëœ™[™\•\™Ù]™œ˜[YXY™™\‹\ËÚY\ËšZYÚËLK‹‹KÊN\Ëœ™[™\™\‹œÛ˜\ÚİØ[˜\Ê\Ë˜Ø[˜\ËËLK‹‹KÊK\ßKÛ˜\Úİ™[˜İ[ÛŠ‹‹J^Ü™]\›ˆ\ËœÛ˜\Úİ\™XJ\ËÚY\ËšZYÚ‹‹J_KÛ˜\Úİ^[™[˜İ[ÛŠ‹‹J^Ü™]\›ˆ\ËœÛ˜\Úİ\™XJ‹‹KKKœ^[Š_KÙ]ÙX‘Ó^\™N™[˜İ[ÛŠ
^ÚYŠ\Ëœ™[™\•\™Ù]
\™]\›ˆ\Ëœ™[™\•\™Ù]^\™_K™[™\•ÙX‘Ó™[˜İ[ÛŠ‹‹K
^İ˜\ˆÏ]\Ë›X[˜YÙ\‹œ™\Ù]İ[\

NÙËœÙ]^\™J\ÊKËœÙ]ÜšYÚ[Š
KËœ™[™\•ÙX‘Ó
‹ËK
_K™[™\Ø[˜\Î™[˜İ[ÛŠ
^ßK\İ›ŞN™[˜İ[ÛŠ
^İ˜\ˆ]\Ë›X[˜YÙ\‹œİ[\Ù‰‰™‹^\™OOO]\É‰\Ë›X[˜YÙ\‹œ™\Ù]İ[\

Kœ›İİ\K™\İ›ŞK˜Ø[
\ÊKËœ™[[İ™J\Ë˜Ø[˜\ÊK\Ëœ™[™\•\™Ù]	‰\Ëœ™[™\•\™Ù]™\İ›ŞJ
K\Ë˜Ø[Y\˜K™\İ›ŞJ
K\Ë˜Ø[˜\Ï[[\Ë˜ÛÛ^[[\Ëœ™[™\™\[[_JNÜ™^ÜÏYJKÌÎŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆ]
ÍNJKÏ]
LÌNJKÏ]
ÎLLJK[™]È
Ú[š]X[^™N™[˜İ[ÛŠKËKKK
^İ\Ë^\™OYK\Ë›˜[YO\Ë\ËœÛİ\˜ÙOYKœÛİ\˜ÙVØWK\ËœÛİ\˜ÙR[™^XK\Ë˜İ]\Ë˜İ]K\Ë˜İ]ÚY\Ë˜İ]ZYÚ\ËL\ËOL\ËÚY\ËšZYÚ\Ëš[•ÚY\Ëš[’ZYÚ\Ë˜Ù[\–\Ë˜Ù[\–K\Ëœ]›İL\Ëœ]›İOL\Ë˜İ\İÛT]›İHLK\Ëœ›İ]YHLK\Ë˜]]Ô›İ[™KLK\Ë˜İ\İÛQ]O^ßK\ËLL\ËŒL\ËLOL\ËŒOL\Ë™]O^Øİ]ŞŒNŒÎŒŒŒŒKš[NˆLKÛİ\˜ÙTÚ^™NİÎŒŒKÜš]TÛİ\˜ÙTÚ^™NŞŒNŒÎŒŒŒŒK˜Y]\ÎŒ˜]Ò[XYÙNŞŒNŒÚYŒZYÚŒK\ÌÔÛXÙNˆLKØØ[NNˆLKØØ[NP›Ü™\œÎŞŒNŒÎŒŒ_K\ËœÙ]Ú^™JKK
_KÙ]İ]ÜÚ][Û™[˜İ[ÛŠ‹J^Ü™]\›ˆOO]›ÚY	‰ŠL
KOOO]›ÚY	‰ŠOL
K\Ë˜İ][‹\Ë˜İ]OYK\Ë\]UUœÊ
_KÙ]İ]Ú^™N™[˜İ[ÛŠ‹J^Ü™]\›ˆ\Ë˜İ]ÚY[‹\Ë˜İ]ZYÚYK\Ë\]UUœÊ
_KÙ]Ú^™N™[˜İ[ÛŠ‹KËJ^ÜÏOO]›ÚY	‰ŠÏL
KOOO]›ÚY	‰ŠOL
K\ËœÙ]İ]ÜÚ][ÛŠËJK\ËœÙ]İ]Ú^™J‹JK\ËÚY[‹\ËšZYÚYK\Ëš[•ÚYSX]™›ÛÜŠŠ‹JK\Ëš[’ZYÚSX]™›ÛÜŠJ‹JK\Ë˜Ù[\–SX]™›ÛÜŠ‹ÌŠK\Ë˜Ù[\–OSX]™›ÛÜŠKÌŠNİ˜\ˆO]\Ë™]KZK˜İ]Ú\ËOXKÏ[‹šYKœ\ÊÛ‹˜XJÙKKœÛİ\˜ÙTÚ^™KÏ[‹KœÛİ\˜ÙTÚ^™KšYKKœÜš]TÛİ\˜ÙTÚ^™KÏ[‹KœÜš]TÛİ\˜ÙTÚ^™KšYKKœ˜Y]\ÏKJ“X]œÜ\
Š›ŠÙJ™JNİ˜\ˆOZK™˜]Ò[XYÙNÜ™]\›ˆK\ËKOXKKÚY[‹KšZYÚYK\Ë\]UUœÊ
_KÙ]š[N™[˜İ[ÛŠ‹KËKK
^İ˜\ˆO]\Ë™]K]KœÜš]TÛİ\˜ÙTÚ^™NÜ™]\›ˆKš[OHLKœÛİ\˜ÙTÚ^™KÏ[‹KœÛİ\˜ÙTÚ^™KšYK\ËOXKÏZKšZœ\ÊÚK˜XJÚ\Ë\Ë\ËOXK\ËÚYZK\ËšZYÚZ\Ëš[•ÚYZJ‹K\Ëš[’ZYÚZ
‹K\Ë˜Ù[\–SX]™›ÛÜŠKÌŠK\Ë˜Ù[\–OSX]™›ÛÜŠÌŠK\Ë\]UUœÊ
_KÙ]ØØ[NN™[˜İ[ÛŠ‹KËJ^İ˜\ˆO]\Ë™]NÜ™]\›ˆKœØØ[NOHLKš\ÌÔÛXÙOYOOOL	‰˜OOO]\ËšZYÚKœØØ[NP›Ü™\œË[‹KœØØ[NP›Ü™\œËOYKKœØØ[NP›Ü™\œËÏ\ËKœØØ[NP›Ü™\œËšXK\ßKÙ]Ü›ÜUœÎ™[˜İ[ÛŠ‹KËKKJ^İ˜\ˆ]\Ë˜İ]]\Ë˜İ]K]\Ë˜İ]ÚYO]\Ë˜İ]ZYÚ]\Ëœ™X[ÚYÏ]\Ëœ™X[ZYÚÙOXÊK
KÏXÊËÊKOXÊKYJKOXÊKË\ÊNİ˜\ˆY
ÙKÏYŠÜËÏXKOZK]\Ë™]NÚYŠš[J^İ˜\ˆOTœÜš]TÛİ\˜ÙTÚ^™NØOXÊKK
İ‹YJKOXÊKKJÛK\ÊNİ˜\ˆOYJØK\ÊÚKHJKœ_K˜ßK“_KO”ŠNÚYŠ
^İ˜\ˆÏSX]›X^
KJKSX]›X^
KKÊKSX]›Z[ŠKœ‹JK]ËSX]›Z[ŠK˜‹ŠKSĞÏX‹O^‹ÕY
Ê‹JËPK
KXŠN•Y
ÊËPK
KOÔÏYŠÊKJ‹PKJK^ŠN”ÏYŠÊ‹PKJKO]ËÏS‹OX‹O^ŸY[ÙHLÏLÏLOLY[ÙH	‰ŠY
Ê‹YKXJJKI‰ŠÏYŠÊK\ËZJJNİ˜\ˆ]\ËœÛİ\˜ÙKÚY]\ËœÛİ\˜ÙKšZYÚÜ™]\›ˆ‹LSX]›X^
Ñ
K‹ŒSX]›X^
ËĞŠK‹LOSX]›Z[ŠK

ĞÊKÑ
K‹ŒOSX]›Z[ŠK
ÊÑJKĞŠK‹YK‹O\Ë‹˜ŞU‹˜ŞOTË‹˜İÏPË‹˜ÚQK‹ÚYXK‹šZYÚZK‹™›\Z‹™›\O]KŸK\]PÜ›ÜUœÎ™[˜İ[ÛŠ‹KÊ^Ü™]\›ˆ\ËœÙ]Ü›ÜUœÊ‹‹‹K‹ÚY‹šZYÚKÊ_KÙ]UœÎ™[˜İ[ÛŠ‹KËKK
^İ˜\ˆO]\Ë™]K™˜]Ò[XYÙNÜ™]\›ˆKÚY[‹KšZYÚYK\ËL\Ë\ËŒXK\ËLOZK\ËŒOZ\ßK\]UUœÎ™[˜İ[ÛŠ
^İ˜\ˆ]\Ë˜İ]O]\Ë˜İ]KÏ]\Ë˜İ]ÚYO]\Ë˜İ]ZYÚO]\Ë™]K™˜]Ò[XYÙNÚKÚY\ËKšZYÚXNİ˜\ˆ]\ËœÛİ\˜ÙKÚYO]\ËœÛİ\˜ÙKšZYÚÜ™]\›ˆ\ËL[‹Ú\ËŒYKİK\ËLOJŠÜÊKÚ\ËŒOJJØJKİK\ßK\]UUœÒ[™\Y™[˜İ[ÛŠ
^İ˜\ˆ]\ËœÛİ\˜ÙKÚYO]\ËœÛİ\˜ÙKšZYÚÜ™]\›ˆ\ËLJ\Ë˜İ]
İ\Ë˜İ]ZYÚ
KÛ‹\ËŒ]\Ë˜İ]KÙK\ËLO]\Ë˜İ]Û‹\ËŒOJ\Ë˜İ]Jİ\Ë˜İ]ÚY
KÙK\ßKÛÛ™N™[˜İ[ÛŠ
^İ˜\ˆ[™]ÈŠ\Ë^\™K\Ë›˜[YK\ËœÛİ\˜ÙR[™^
NÜ™]\›ˆ‹˜İ]]\Ë˜İ]‹˜İ]O]\Ë˜İ]K‹˜İ]ÚY]\Ë˜İ]ÚY‹˜İ]ZYÚ]\Ë˜İ]ZYÚ‹]\Ë‹O]\ËK‹ÚY]\ËÚY‹šZYÚ]\ËšZYÚ‹š[•ÚY]\Ëš[•ÚY‹š[’ZYÚ]\Ëš[’ZYÚ‹˜Ù[\–]\Ë˜Ù[\–‹˜Ù[\–O]\Ë˜Ù[\–K‹œ›İ]Y]\Ëœ›İ]Y‹™]O[ÊL‹™]K\Ë™]JK‹\]UUœÊ
KŸK\İ›ŞN™[˜İ[ÛŠ
^İ\Ë^\™O[[\ËœÛİ\˜ÙO[[\Ë˜İ\İÛQ]O[[\Ë™]O[[KÛ^\™NÙÙ]™[˜İ[ÛŠ
^Ü™]\›ˆ\ËœÛİ\˜ÙK™Û^\™__K™X[ÚYÙÙ]™[˜İ[ÛŠ
^Ü™]\›ˆ\Ë™]KœÛİ\˜ÙTÚ^™Kß_K™X[ZYÚÙÙ]™[˜İ[ÛŠ
^Ü™]\›ˆ\Ë™]KœÛİ\˜ÙTÚ^™Kš_K˜Y]\ÎÙÙ]™[˜İ[ÛŠ
^Ü™]\›ˆ\Ë™]Kœ˜Y]\ß_Kš[[YYÙÙ]™[˜İ[ÛŠ
^Ü™]\›ˆ\Ë™]Kš[__KØØ[NNÙÙ]™[˜İ[ÛŠ
^Ü™]\›ˆ\Ë™]KœØØ[N__K\ÌÔÛXÙNÙÙ]™[˜İ[ÛŠ
^Ü™]\›ˆ\Ë™]Kš\ÌÔÛXÙ__KØ[˜\Ñ]NÙÙ]™[˜İ[ÛŠ
^Ü™]\›ˆ\Ë™]K™˜]Ò[XYÙ___JNÜ™^ÜÏ\ŸJKÎLŒÍÎŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆ]
ÍNJKÏ]
ÌÊKÏ]
LNÍŠKIÕ^\™H‰\Èˆ\È›Èœ˜[YH‰\È‰Ë[™]È
Ú[š]X[^™N™[˜İ[ÛŠËKKJ^Ğ\œ˜^Kš\Ğ\œ˜^JJ_
OVÚWJK\Ë›X[˜YÙ\\Ë\ËšÙ^OXK\ËœÛİ\˜ÙOV×K\Ë™]TÛİ\˜ÙOV×K\Ë™œ˜[Y\Ï^ßK\Ë˜İ\İÛQ]O^ßK\Ë™š\œİœ˜[YOH—×ĞTÑH‹\Ë™œ˜[YUİ[LÙ›ÜŠ˜\ˆLÙK›[™İÙ
ÊÊ]\ËœÛİ\˜ÙKœ\Ú
™]ÈÊ\ËVÙKJJ_KY™[˜İ[ÛŠKËKKJ^ÚYŠ\Ëš\ÊJJ\™]\›ˆ[İ˜\ˆ[™]ÈÊ\ËKËKKJNÜ™]\›ˆ\Ë™œ˜[Y\ÖÙWOY\Ë™š\œİœ˜[YOOOH—×ĞTÑH‰‰Š\Ë™š\œİœ˜[YOYJK\Ë™œ˜[YUİ[
ÊËK™[[İ™N™[˜İ[ÛŠJ^ÚYŠ\Ëš\ÊJJ^İ˜\ˆÏ]\Ë™Ù]
JNÜ™]\›ˆË™\İ›ŞJ
K[]H\Ë™œ˜[Y\ÖÙWKL\™]\›ˆL_K\Î™[˜İ[ÛŠJ^Ü™]\›ˆ\Ë™œ˜[Y\Ëš\ÓİÛ”›Ü\JJ_KÙ]™[˜İ[ÛŠJ^Ù_
O]\Ë™š\œİœ˜[YJNİ˜\ˆÏ]\Ë™œ˜[Y\ÖÙWNÜ™]\›ˆß
ÛÛœÛÛKØ\›Š‹\ËšÙ^KJKÏ]\Ë™œ˜[Y\Öİ\Ë™š\œİœ˜[YWJKßKÙ]^\™TÛİ\˜ÙR[™^™[˜İ[ÛŠJ^Ù›ÜŠ˜\ˆÏLÜÏ\ËœÛİ\˜ÙK›[™İÜÊÊÊZYŠ\ËœÛİ\˜ÙVÜ×OOOYJ\™]\›ˆÎÜ™]\›‹L_KÙ]œ˜[Y\Ñœ›ÛU^\™TÛİ\˜ÙN™[˜İ[ÛŠKÊ^ÜÏOO]›ÚY	‰ŠÏHLJNİ˜\ˆOV×NÙ›ÜŠ˜\ˆH[ˆ\Ë™œ˜[Y\ÊZYŠJOOOH—×ĞTÑH‰‰ˆ\ÊJ^İ˜\ˆ]\Ë™œ˜[Y\ÖÚWNÚœÛİ\˜ÙR[™^OOYI‰˜Kœ\Ú

_\™]\›ˆ_KÙ]œ˜[YP›İ[™Î™[˜İ[ÛŠJ^ÙOOO]›ÚY	‰ŠOL
NÙ›ÜŠ˜\ˆÏ]\Ë™Ù]œ˜[Y\Ñœ›ÛU^\™TÛİ\˜ÙJKL
KO\ÖÌKOXK˜İ]XK˜İ]KOXK˜İ]
ØK˜İ]ÚYXK˜İ]JØK˜İ]ZYÚLNÙË›[™İÙŠÊÊ^İ˜\ˆ\ÖÙ—Nİ‹˜İ]I‰ŠO]‹˜İ]
K‹˜İ]O	‰Š]‹˜İ]JK‹˜İ]
İ‹˜İ]ÚYI‰ŠO]‹˜İ]
İ‹˜İ]ÚY
K‹˜İ]Jİ‹˜İ]ZYÚ™	‰Š]‹˜İ]Jİ‹˜İ]ZYÚ
_\™]\›ŞšKNšÚYKZKZYÚ™Z_KÙ]œ˜[YS˜[Y\Î™[˜İ[ÛŠJ^ÙOOO]›ÚY	‰ŠOHLJNİ˜\ˆÏSØš™XİšÙ^\Ê\Ë™œ˜[Y\ÊNÚYŠYJ^İ˜\ˆO\Ëš[™^ÙŠ—×ĞTÑHŠNØHOOKLI‰œËœÜXÙJKJ_\™]\›ˆßKÙ]Ûİ\˜ÙR[XYÙN™[˜İ[ÛŠJ^ÊOO[[\Ë™œ˜[YUİ[OOLJI‰ŠOH—×ĞTÑHŠNİ˜\ˆÏ]\Ë™œ˜[Y\ÖÙWNÜ™]\›ˆÏÜËœÛİ\˜ÙKš[XYÙNŠÛÛœÛÛKØ\›Š‹\ËšÙ^KJK\Ë™œ˜[Y\Ë—×ĞTÑKœÛİ\˜ÙKš[XYÙJ_KÙ]]TÛİ\˜ÙR[XYÙN™[˜İ[ÛŠJ^ÊOO[[\Ë™œ˜[YUİ[OOLJI‰ŠOH—×ĞTÑHŠNİ˜\ˆÏ]\Ë™œ˜[Y\ÖÙWKNÜ™]\›ˆÏØO\ËœÛİ\˜ÙR[™^ŠÛÛœÛÛKØ\›Š‹\ËšÙ^KJKO]\Ë™œ˜[Y\Ë—×ĞTÑKœÛİ\˜ÙR[™^
K\Ë™]TÛİ\˜ÙVØWKš[XYÙ_KÙ]]TÛİ\˜ÙN™[˜İ[ÛŠJ^Ğ\œ˜^Kš\Ğ\œ˜^JJ_
OVÙWJNÙ›ÜŠ˜\ˆÏLÜÏK›[™İÜÊÊÊ^İ˜\ˆO]\ËœÛİ\˜ÙVÜ×Nİ\Ë™]TÛİ\˜ÙKœ\Ú
™]ÈÊ\ËVÜ×KKÚYKšZYÚ
J__KÙ]š[\™[˜İ[ÛŠJ^İ˜\ˆÎÙ›ÜŠÏLÜÏ\ËœÛİ\˜ÙK›[™İÜÊÊÊ]\ËœÛİ\˜ÙVÜ×KœÙ]š[\ŠJNÙ›ÜŠÏLÜÏ\Ë™]TÛİ\˜ÙK›[™İÜÊÊÊ]\Ë™]TÛİ\˜ÙVÜ×KœÙ]š[\ŠJ_K\İ›ŞN™[˜İ[ÛŠ
^İ˜\ˆKÏ]\ËœÛİ\˜ÙKO]\Ë™]TÛİ\˜ÙNÙ›ÜŠOLÙOË›[™İÙJÊÊ\ÖÙWI‰œÖÙWK™\İ›ŞJ
NÙ›ÜŠOLÙOK›[™İÙJÊÊXVÙWI‰˜VÙWK™\İ›ŞJ
NÙ›ÜŠ˜\ˆH[ˆ\Ë™œ˜[Y\Ê^İ˜\ˆ]\Ë™œ˜[Y\ÖÚWNÚ	‰š™\İ›ŞJ
_]\ËœÛİ\˜ÙOV×K\Ë™]TÛİ\˜ÙOV×K\Ë™œ˜[Y\Ï^ßK\Ë›X[˜YÙ\‹œ™[[İ™RÙ^J\ËšÙ^JK\Ë›X[˜YÙ\[[_JNÜ™^ÜÏ[ŸJKMÌLÌŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆ]
ÎLNJKÏ]
MÌÎŠKÏ]
ÍNJK]
NÊK]
M
KO]
LÌŒ
KÏ]
LÎLŠKO]
MŠKO]
ÌÊK]
ÊKO]
NMN
K]
ÍLMM
K]
MÌJK]
LŒLŠKO]
ŒLÌJK]
ÎJKÏ]
ÎLŒÍÊK[™]ÈÊÑ^[™ÎœË[š]X[^™N™[˜İ[ÛŠÊ^ÜË˜Ø[
\ÊK\Ë™Ø[YOPË\Ë›˜[YOH•^\™SX[˜YÙ\ˆ‹\Ë›\İ^ßK\Ë—İ[\Ø[˜\Ï[˜Ü™X]L‘
\ÊK\Ë—İ[\ÛÛ^]\Ë—İ[\Ø[˜\Ë™Ù]ÛÛ^
Œ™‹İÚ[™XYœ™\]Y[NˆLJK\Ë—Ü[™[™ÏL\Ëœİ[\\Ëœİ[\Ü›Ü[™]È\ËœÚ[[Ø\›š[™ÜÏHLKË™]™[Ë›Û˜ÙJ“ÓÕ\Ë˜›Ûİ\Ê_K›Ûİ™[˜İ[ÛŠ
^İ\Ë—Ü[™[™ÏLË\Ë›ÛŠK“ĞQ\Ë\]T[™[™Ë\ÊK\Ë›ÛŠK‘T”“Ô‹\Ë\]T[™[™Ë\ÊNİ˜\ˆÏ]\Ë™Ø[YK˜ÛÛ™šYÎÔË™Y˜][[XYÙHOO[[	‰\Ë˜Y˜\ÙM
—×ÑQUS‹Ë™Y˜][[XYÙJKË›Z\ÜÚ[™Ò[XYÙHOO[[	‰\Ë˜Y˜\ÙM
—×ÓRTÔÒS‘È‹Ë›Z\ÜÚ[™Ò[XYÙJKËÚ]R[XYÙHOO[[	‰\Ë˜Y˜\ÙM
—×ÕÒUH‹ËÚ]R[XYÙJK\Ë™Ø[YKœ™[™\™\‰‰\Ë™Ø[YKœ™[™\™\‹™Û	‰\Ë˜YZ[\œ˜^J—×Ó“Ô“PS‹™]ÈZ[\œ˜^JÌLËLËMKMWJKKJK\Ë™Ø[YK™]™[Ë›Û˜ÙJ‘TÕ“ÖK\Ë™\İ›ŞK\ÊK\Ë™Ø[YK™]™[Ë›Û˜ÙJ”ÖTÕSWÔ‘PQK[˜İ[ÛŠÊ^İ\Ëœİ[\[™]ÈŠÊKœÙ]ÜšYÚ[Š
_K\Ê_K\]T[™[™Î™[˜İ[ÛŠ
^İ\Ë—Ü[™[™ËKK\Ë—Ü[™[™ÏOOL	‰Š\Ë›Ù™ŠK“ĞQ
K\Ë›Ù™ŠK‘T”“ÔŠK\Ë™[Z]
K”‘PQJJ_KÚXÚÒÙ^N™[˜İ[ÛŠÊ^Ü™]\›ˆTß\[ÙˆÈOHœİš[™ÈŸ\Ë™^\İÊÊOÊ\ËœÚ[[Ø\›š[™ÜßÛÛœÛÛK™\œ›ÜŠ•^\™HÙ^H[™XYH[ˆ\ÙNˆŠÔÊKLJNˆLK™[[İ™N™[˜İ[ÛŠÊ^ÚYŠ\[ÙˆÏOHœİš[™ÈŠZYŠ\Ë™^\İÊÊJTÏ]\Ë™Ù]
ÊNÙ[ÙH™]\›ˆ\ËœÚ[[Ø\›š[™ÜßÛÛœÛÛKØ\›Š“›È^\™H›İ[™X]Ú[™ÈÙ^NˆŠÔÊK\Îİ˜\ˆÏTËšÙ^NÜ™]\›ˆ\Ë›\İš\ÓİÛ”›Ü\JÊI‰ŠË™\İ›ŞJ
K\Ë™[Z]
K”‘SSÕ‘KÊK\Ë™[Z]
K”‘SSÕ‘WÒÑVJĞÊJK\ßK™[[İ™RÙ^N™[˜İ[ÛŠÊ^Ü™]\›ˆ\Ë›\İš\ÓİÛ”›Ü\JÊI‰™[]H\Ë›\İÔ×K\ßKY˜\ÙM™[˜İ[ÛŠËÊ^ÚYŠ\Ë˜ÚXÚÒÙ^JÊJ^İ˜\ˆO]\Ë[™]È[XYÙNÔ›Û™\œ›ÜY[˜İ[ÛŠ
^ÑK™[Z]
K‘T”“Ô‹Ê_K›Û›ØYY[˜İ[ÛŠ
^İ˜\ˆOQK˜Ü™X]JË
NĞI‰ŠK’[XYÙJK
KK™[Z]
KQËJKK™[Z]
KQÒÑVJÔËJKK™[Z]
K“ĞQËJJ_KœÜ˜ÏPß\™]\›ˆ\ßKÙ]˜\ÙM™[˜İ[ÛŠËËK
^ÑOOO]›ÚY	‰ŠOHš[XYÙKÜ™ÈŠKOO]›ÚY	‰ŠKLŠNİ˜\ˆOHˆ‹O]\Ë™Ù]œ˜[YJËÊNÚYŠI‰ŠKœÛİ\˜ÙKš\Ô™[™\•^\™_KœÛİ\˜ÙKš\ÑÓ^\™JJ]\ËœÚ[[Ø\›š[™ÜßÛÛœÛÛKØ\›ŠØ[››İÙ]˜\ÙMœ›ÛHÙX‘Ó^\™HŠNÙ[ÙHYŠJ^İ˜\ˆSK˜Ø[˜\Ñ]K[˜Ü™X]L‘
\Ë‹ÚY‹šZYÚ
KÏS™Ù]ÛÛ^
Œ™‹İÚ[™XYœ™\]Y[NˆLJNÔ‹ÚYŒ	‰”‹šZYÚŒ	‰Ë™˜]Ò[XYÙJKœÛİ\˜ÙKš[XYÙK‹‹K‹ÚY‹šZYÚ‹ÚY‹šZYÚ
KOSÑ]UT“
K
Kœ™[[İ™J
_\™]\›ˆ_KY[XYÙN™[˜İ[ÛŠËËJ^İ˜\ˆ[[Ü™]\›ˆ\Ë˜ÚXÚÒÙ^JÊI‰Š]\Ë˜Ü™X]JËÊKK’[XYÙJ
KI‰”œÙ]]TÛİ\˜ÙJJK\Ë™[Z]
KQË
K\Ë™[Z]
KQÒÑVJÔË
JKKYÓ^\™N™[˜İ[ÛŠËÊ^İ˜\ˆO[[ÚYŠ\Ë˜ÚXÚÒÙ^JÊJ^İ˜\ˆPËÚYOPËšZYÚÑO]\Ë˜Ü™X]JËËJKK˜Y
—×ĞTÑH‹JK\Ë™[Z]
KQËJK\Ë™[Z]
KQÒÑVJÔËJ_\™]\›ˆ_KYÛÛ\™\ÜÙY^\™N™[˜İ[ÛŠËËJ^İ˜\ˆ[[ÚYŠ\Ë˜ÚXÚÒÙ^JÊJ^ÚYŠ]\Ë˜Ü™X]JËÊK˜Y
—×ĞTÑH‹ËÚYËšZYÚ
KJ^İ˜\ˆOY[˜İ[ÛŠ‹Ê^Ğ\œ˜^Kš\Ğ\œ˜^JË^\™\Ê_\œ˜^Kš\Ğ\œ˜^JË™œ˜[Y\ÊOÛK’”ÓÓ\œ˜^J‹ÊN›K’”ÓÓ’\Ú
‹Ê_NÚYŠ\œ˜^Kš\Ğ\œ˜^JJJY›ÜŠ˜\ˆOLÓOK›[™İÓJÊÊPJKVÓWJNÙ[ÙHJJ_]\Ë™[Z]
KQË
K\Ë™[Z]
KQÒÑVJÔË
_\™]\›ˆKY™[™\•^\™N™[˜İ[ÛŠËÊ^İ˜\ˆO[[Ü™]\›ˆ\Ë˜ÚXÚÒÙ^JÊI‰ŠO]\Ë˜Ü™X]JËÊKK˜Y
—×ĞTÑH‹ËÚYËšZYÚ
K\Ë™[Z]
KQËJK\Ë™[Z]
KQÒÑVJÔËJJK_KÙ[™\˜]N™[˜İ[ÛŠËÊ^ÚYŠ\Ë˜ÚXÚÒÙ^JÊJ^İ˜\ˆO[˜Ü™X]J\ËKJNÜ™]\›ˆË˜Ø[˜\ÏQKJÊK\Ë˜YØ[˜\ÊËJ_Y[ÙH™]\›ˆ[KÜ™X]PØ[˜\Î™[˜İ[ÛŠËËJ^ÚYŠÏOO]›ÚY	‰ŠÏLMŠKOOO]›ÚY	‰ŠOLMŠK\Ë˜ÚXÚÒÙ^JÊJ^İ˜\ˆ[˜Ü™X]J\ËËK‹ĞS•TËL
NÜ™]\›ˆ\Ë˜YØ[˜\ÊË
_\™]\›ˆ[KYØ[˜\Î™[˜İ[ÛŠËËJ^ÑOOO]›ÚY	‰ŠOHLJNİ˜\ˆ[[Ü™]\›ˆOÔ[™]ÈÊ\ËËËËÚYËšZYÚ
N\Ë˜ÚXÚÒÙ^JÊI‰Š[™]ÈÊ\ËËËËÚYËšZYÚ
K\Ë›\İÔ×OT\Ë™[Z]
KQË
K\Ë™[Z]
KQÒÑVJÔË
JKKY[˜[ZXÕ^\™N™[˜İ[ÛŠËËJ^İ˜\ˆ[[Ü™]\›ˆ\[ÙˆÏOHœİš[™È‰‰ˆ]\Ë™^\İÊÊOÔ[™]ÈJ\ËËËJNŠTËÏTšÙ^JK\Ë˜ÚXÚÒÙ^JÊOÊ\Ë›\İÔ×OT\Ë™[Z]
KQË
K\Ë™[Z]
KQÒÑVJÔË
JN”[[KY]\Î™[˜İ[ÛŠËËK
^Ü™]\›ˆ\œ˜^Kš\Ğ\œ˜^JK^\™\Ê_\œ˜^Kš\Ğ\œ˜^JK™œ˜[Y\ÊOİ\Ë˜Y]\Ò”ÓÓ\œ˜^JËËK
N\Ë˜Y]\Ò”ÓÓ’\Ú
ËËK
_KY]\Ò”ÓÓ\œ˜^N™[˜İ[ÛŠËËK
^İ˜\ˆO[[ÚYŠÈ[œİ[˜Ù[ÙˆÏÊÏPËšÙ^KOPÊN\Ë˜ÚXÚÒÙ^JÊI‰ŠO]\Ë˜Ü™X]JËÊJKJ^ÚYŠ\œ˜^Kš\Ğ\œ˜^JJJY›ÜŠ˜\ˆOQK›[™İOOLKLÔKœÛİ\˜ÙK›[™İÔŠÊÊ^İ˜\ˆSOÑVÌN‘VÔ—NÛK’”ÓÓ\œ˜^JK‹
_Y[ÙHK’”ÓÓ\œ˜^JKJNÔ	‰KœÙ]]TÛİ\˜ÙJ
K\Ë™[Z]
KQËJK\Ë™[Z]
KQÒÑVJÔËJ_\™]\›ˆ_KY]\Ò”ÓÓ’\Ú™[˜İ[ÛŠËËK
^İ˜\ˆO[[ÚYŠÈ[œİ[˜Ù[ÙˆÏÊÏPËšÙ^KOPÊN\Ë˜ÚXÚÒÙ^JÊI‰ŠO]\Ë˜Ü™X]JËÊJKJ^ÚYŠ\œ˜^Kš\Ğ\œ˜^JJJY›ÜŠ˜\ˆOLÓOK›[™İÓJÊÊ[K’”ÓÓ’\Ú
KKVÓWJNÙ[ÙHK’”ÓÓ’\Ú
KJNÔ	‰KœÙ]]TÛİ\˜ÙJ
K\Ë™[Z]
KQËJK\Ë™[Z]
KQÒÑVJÔËJ_\™]\›ˆ_KY]\ÖS™[˜İ[ÛŠËËK
^İ˜\ˆO[[Ü™]\›ˆÈ[œİ[˜Ù[ÙˆÏÊÏPËšÙ^KOPÊN\Ë˜ÚXÚÒÙ^JÊI‰ŠO]\Ë˜Ü™X]JËÊJKI‰ŠK]\ÖS
KJK	‰KœÙ]]TÛİ\˜ÙJ
K\Ë™[Z]
KQËJK\Ë™[Z]
KQÒÑVJÔËJJK_KY[š]P]\Î™[˜İ[ÛŠËËK
^İ˜\ˆO[[Ü™]\›ˆÈ[œİ[˜Ù[ÙˆÏÊÏPËšÙ^KOPÊN\Ë˜ÚXÚÒÙ^JÊI‰ŠO]\Ë˜Ü™X]JËÊJKI‰ŠK•[š]VPSS
KJK	‰KœÙ]]TÛİ\˜ÙJ
K\Ë™[Z]
KQËJK\Ë™[Z]
KQÒÑVJÔËJJK_KYÜš]TÚY]™[˜İ[ÛŠËËK
^İ˜\ˆO[[ÚYŠÈ[œİ[˜Ù[ÙˆÏÊÏPËšÙ^KOPÊN\Ë˜ÚXÚÒÙ^JÊI‰ŠO]\Ë˜Ü™X]JËÊJKJ^İ˜\ˆOPKœÛİ\˜ÙVÌKÚYPKœÛİ\˜ÙVÌKšZYÚÛK”Üš]TÚY]
KK‹JK	‰KœÙ]]TÛİ\˜ÙJ
K\Ë™[Z]
KQËJK\Ë™[Z]
KQÒÑVJÔËJ_\™]\›ˆ_KYÜš]TÚY]œ›ÛP]\Î™[˜İ[ÛŠËÊ^ÚYŠ]\Ë˜ÚXÚÒÙ^JÊJ\™]\›ˆ[İ˜\ˆOY
Ë˜]\È‹[
KY
Ë™œ˜[YH‹[
NÚYŠJQ_T
J^İ˜\ˆO]\Ë™Ù]
JKOPK™Ù]

NÚYŠJ^İ˜\ˆSKœÛİ\˜ÙKš[XYÙNÔŸ
SKœÛİ\˜ÙK™Û^\™JNİ˜\ˆ]\Ë˜Ü™X]JËŠNÜ™]\›ˆKš[[YYÛK”Üš]TÚY]œ›ÛP]\ÊKÊN›K”Üš]TÚY]
K˜İ]K˜İ]KK˜İ]ÚYK˜İ]ZYÚÊK\Ë™[Z]
KQË
K\Ë™[Z]
KQÒÑVJÔË
K__KYZ[\œ˜^N™[˜İ[ÛŠËËK
^ÚYŠ]\Ë˜ÚXÚÒÙ^JÊ_Ë›[™İÍOOQJ”
\™]\›ˆ[İ˜\ˆO]\Ë˜Ü™X]JËËK
NÜ™]\›ˆK˜Y
—×ĞTÑH‹K
K\Ë™[Z]
KQËJK\Ë™[Z]
KQÒÑVJÔËJK_KÜ™X]N™[˜İ[ÛŠËËK
^İ˜\ˆO[[Ü™]\›ˆ\Ë˜ÚXÚÒÙ^JÊI‰ŠO[™]ÈÊ\ËËËK
K\Ë›\İÔ×OPJK_K^\İÎ™[˜İ[ÛŠÊ^Ü™]\›ˆ\Ë›\İš\ÓİÛ”›Ü\JÊ_KÙ]™[˜İ[ÛŠÊ^Ü™]\›ˆÏOO]›ÚY	‰ŠÏH—×ÑQUSŠK\Ë›\İÔ×Oİ\Ë›\İÔ×N”È[œİ[˜Ù[ÙˆÏÔÎ”È[œİ[˜Ù[ÙˆOÔË^\™N\Ë›\İ—×ÓRTÔÒS‘ßKÛÛ™Qœ˜[YN™[˜İ[ÛŠËÊ^ÚYŠ\Ë›\İÔ×J\™]\›ˆ\Ë›\İÔ×K™Ù]
ÊK˜ÛÛ™J
_KÙ]œ˜[YN™[˜İ[ÛŠËÊ^ÚYŠ\Ë›\İÔ×J\™]\›ˆ\Ë›\İÔ×K™Ù]
Ê_K\œÙQœ˜[YN™[˜İ[ÛŠÊ^ÚYŠÊ^ÚYŠ\[ÙˆÏOHœİš[™ÈŠ\™]\›ˆ\Ë™Ù]œ˜[YJÊNÚYŠ\œ˜^Kš\Ğ\œ˜^JÊI‰”Ë›[™İOOLŠ\™]\›ˆ\Ë™Ù]œ˜[YJÖÌKÖÌWJNÚYŠŠÊJ\™]\›ˆ\Ë™Ù]œ˜[YJËšÙ^KË™œ˜[YJNÚYŠÈ[œİ[˜Ù[ÙˆÊ\™]\›ˆË™Ù]

NÚYŠÈ[œİ[˜Ù[ÙˆJ\™]\›ˆßY[ÙH™]\›ŸKÙ]^\™RÙ^\Î™[˜İ[ÛŠ
^İ˜\ˆÏV×NÙ›ÜŠ˜\ˆÈ[ˆ\Ë›\İ
PÈOOH—×ÑQUS‰‰ÈOOH—×ÓRTÔÒS‘È‰‰ÈOOH—×ÕÒUH‰‰ÈOOH—×Ó“Ô“PS‰‰”Ëœ\Ú
ÊNÜ™]\›ˆßKÙ]^[™[˜İ[ÛŠËËK
^İ˜\ˆO]\Ë™Ù]œ˜[YJK
NÚYŠJ^ÔËOPKËOPKNİ˜\ˆOPK™]K˜İ]ÚYŠÊÏSKÊÏSKKÏSK	‰”ÏKœ‰‰ÏSKI‰ÏK˜Š^İ˜\ˆ]\Ë—İ[\ÛÛ^Ô‹˜ÛX\”™Xİ
KJK‹™˜]Ò[XYÙJKœÛİ\˜ÙKš[XYÙKËËKKKJNİ˜\ˆT‹™Ù][XYÙQ]JKJNÜ™]\›ˆ™]ÈŠ™]VÌK™]VÌWK™]VÌ—K™]VÌ×J__\™]\›ˆ[KÙ]^[[N™[˜İ[ÛŠËËK
^İ˜\ˆO]\Ë™Ù]œ˜[YJK
NÚYŠJ^ÔËOPKËOPKNİ˜\ˆOPK™]K˜İ]ÚYŠÊÏSKÊÏSKKÏSK	‰”ÏKœ‰‰ÏSKI‰ÏK˜Š^İ˜\ˆ]\Ë—İ[\ÛÛ^Ô‹˜ÛX\”™Xİ
KJK‹™˜]Ò[XYÙJKœÛİ\˜ÙKš[XYÙKËËKKKJNİ˜\ˆT‹™Ù][XYÙQ]JKJNÜ™]\›ˆ™]VÌ×__\™]\›ˆ[KÙ]^\™N™[˜İ[ÛŠËËJ^Ü™]\›ˆ\Ë›\İĞ×I‰ŠË^\™O]\Ë›\İĞ×KË™œ˜[YOTË^\™K™Ù]
JJKßK™[˜[YU^\™N™[˜İ[ÛŠËÊ^İ˜\ˆO]\Ë™Ù]
ÊNÜ™]\›ˆI‰”ÈOOPÏÊKšÙ^OPË\Ë›\İĞ×OQK[]H\Ë›\İÔ×KL
NˆL_KXXÚ™[˜İ[ÛŠËÊ^Ù›ÜŠ˜\ˆOVÛ[KLNÔ\™İ[Y[Ë›[™İÔ
ÊÊQKœ\Ú
\™İ[Y[ÖÔJNÙ›ÜŠ˜\ˆH[ˆ\Ë›\İ
QVÌO]\Ë›\İĞWKË˜\JËJ_K™\Ù]İ[\™[˜İ[ÛŠËÊ^ÔÏOO]›ÚY	‰ŠÏLJKÏOO]›ÚY	‰ŠÏLMÍÍÌŒMJNİ˜\ˆO]\Ëœİ[\Ü™]\›ˆKœÙ]Ü›Ü

KKœÙ]ÜÚ][ÛŠ
KKœÙ][™ÛJ
KKœÙ]ØØ[JJKKœÙ][JÊKKœÙ][
ÊKKœÙ]^\™J—×ÕÒUHŠK_K\İ›ŞN™[˜İ[ÛŠ
^Ù›ÜŠ˜\ˆÈ[ˆ\Ë›\İ
]\Ë›\İÔ×K™\İ›ŞJ
Nİ\Ë›\İ^ßK\Ëœİ[\™\İ›ŞJ
K\Ë™Ø[YO[[\Ëœİ[\[[œ™[[İ™J\Ë—İ[\Ø[˜\Ê__JNÜ™^ÜÏUJKLNÍŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆ]
ÎLNJKÏ]
ÍNJKÏ]
LÌ
K]
MÎMJK]
ÍLJKO[™]ÈÊÚ[š]X[^™N™[˜İ[ÛŠKKK
^ÙOO]›ÚY	‰ŠHLJNİ˜\ˆXK›X[˜YÙ\‹™Ø[YNİ\Ëœ™[™\™\Y‹œ™[™\™\‹\Ë^\™OXK\ËœÛİ\˜ÙOZK\Ëš[XYÙOZK˜ÛÛ\™\ÜÙYÛ[šK\Ë˜ÛÛ\™\ÜÚ[Û[ÛÜš]OZK˜ÛÛ\™\ÜÙYÚK™›Ü›X]›[\Ëœ™\ÛÛ][ÛLK\ËÚYZK›˜]\˜[ÚYKšY[ÕÚYKÚY\ËšZYÚ]_K›˜]\˜[ZYÚKšY[ÒZYÚKšZYÚ\ËœØØ[S[ÙO\‹‘QUS\Ëš\ĞØ[˜\ÏZH[œİ[˜Ù[ÙˆSØ[˜\Ñ[[Y[\Ëš\ÕšY[Ï]Ú[™İËš\ÓİÛ”›Ü\J’SšY[Ñ[[Y[ŠI‰šH[œİ[˜Ù[ÙˆSšY[Ñ[[Y[\Ëš\Ô™[™\•^\™OZK\OOOH”™[™\•^\™HŸK\OOOH‘[˜[ZXÕ^\™H‹\Ëš\ÑÓ^\™OZH[œİ[˜Ù[Ùˆ‹\Ëš\ÔİÙ\“ÙŒ[Ê\ËÚY\ËšZYÚ
K\Ë™Û^\™O[[\Ë™›\OY\Ëš[š]
Š_K[š]™[˜İ[ÛŠÊ^İ˜\ˆO]\Ëœ™[™\™\ÚYŠJ^İ˜\ˆO]\ËœÛİ\˜ÙNÚYŠK™Û
^İ˜\ˆ]\Ëš[XYÙKO]\Ë™›\K]\ËÚY]\ËšZYÚ]\ËœØØ[S[ÙNİ\Ëš\ĞØ[˜\Ïİ\Ë™Û^\™OXK˜Ü™X]PØ[˜\Õ^\™JLKJN\Ëš\ÕšY[Ïİ\Ë™Û^\™OXK˜Ü™X]UšY[Õ^\™JLKJN\Ëš\Ô™[™\•^\™Oİ\Ë™Û^\™OXK˜Ü™X]U^\™Qœ›ÛTÛİ\˜ÙJ[‹ŠN\Ëš\ÑÓ^\™Oİ\Ë™Û^\™OZN\Ë˜ÛÛ\™\ÜÚ[Û[ÛÜš]Oİ\Ë™Û^\™OXK˜Ü™X]U^\™Qœ›ÛTÛİ\˜ÙJK›ÚY›ÚYŠNšH[œİ[˜Ù[ÙˆZ[\œ˜^Oİ\Ë™Û^\™OXK˜Ü™X]UZ[\œ˜^U^\™JK‹ŠN\Ë™Û^\™OXK˜Ü™X]U^\™Qœ›ÛTÛİ\˜ÙJ‹Š_Y[ÙH\Ëš\Ô™[™\•^\™I‰Š\Ëš[XYÙOZK˜Ø[˜\Ê_\Ë˜ÛÛ™šYË˜[X[X\ß\ËœÙ]š[\ŠJ_KÙ]š[\™[˜İ[ÛŠÊ^İ\Ëœ™[™\™\‰‰\Ëœ™[™\™\‹™Û	‰\Ëœ™[™\™\‹œÙ]^\™Qš[\Š\Ë™Û^\™KÊK\ËœØØ[S[ÙO\ßKÙ]›\N™[˜İ[ÛŠÊ^Ü™]\›ˆÏOO]›ÚY	‰ŠÏHL
KÏOO]\Ë™›\Oİ\ÎŠ\Ë™›\O\Ë\Ë\]J
K\Ê_K\]N™[˜İ[ÛŠ
^İ˜\ˆÏ]\Ëœ™[™\™\‹O]\Ëš[XYÙKO]\Ë™›\K\Ë™ÛÚ	‰\Ëš\ĞØ[˜\ÏÜË\]PØ[˜\Õ^\™JK\Ë™Û^\™KJNš	‰\Ëš\ÕšY[É‰œË\]UšY[Õ^\™JK\Ë™Û^\™KJ_K\İ›ŞN™[˜İ[ÛŠ
^İ\Ë™Û^\™I‰\Ëœ™[™\™\‹™[]U^\™J\Ë™Û^\™JK\Ëš\ĞØ[˜\É‰›œ™[[İ™J\Ëš[XYÙJK\Ëœ™[™\™\[[\Ë^\™O[[\ËœÛİ\˜ÙO[[\Ëš[XYÙO[[\Ë™Û^\™O[[_JNÜ™^ÜÏY_JKNMÌÎŠOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆO^ÓS‘PTŒ‘PT‘TÕŒ_NÜ™^ÜÏ^_JKLÎŠOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹Ü™^ÜÏH˜Y^\™HŸJKŒÍŠOËÊŠ‚ˆ
ˆ]]ÜˆØ[[YBˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹Ü™^ÜÏH˜Y^\™KHŸJKMLNŠOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹Ü™^ÜÏH›Û™\œ›ÜˆŸJKLNNŠOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹Ü™^ÜÏH›Û›ØYŸJKÎŠOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹Ü™^ÜÏHœ™XYHŸJKMNŠOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹Ü™^ÜÏHœ™[[İ™]^\™HŸJKÌÎNŠOËÊŠ‚ˆ
ˆ]]ÜˆØ[[YBˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹Ü™^ÜÏHœ™[[İ™]^\™KHŸJKMŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹Ü™^ÜÏ^ĞQ
LÎ
KQÒÑVN
ŒÍŠKT”“Ô
MLJKĞQ
LNJK‘PQN
Î
K‘SSÕ‘N
MJK‘SSÕ‘WÒÑVN
ÌÎJ__JKÍNŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆ]
ÎLLJKÏ]
NMÌÊKÏ^ĞØ[˜\Õ^\™N
MÌÎŠK[˜[ZXÕ^\™N
LÌŒ
K]™[Î
MŠKš[\“[ÙN˜Ëœ˜[YN
ÌÊK\œÙ\œÎ
ŒLÌJK^\™N
ÎLŒÍÊK^\™SX[˜YÙ\
MÌLÌ
K^\™TÛİ\˜ÙN
LNÍŠ_NÛÏ[
LKËÊK™^ÜÏ[ßJKNLNŠOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆOY[˜İ[ÛŠÊ^ÚYŠXË™Ù][[Y[ĞUYÓ˜[YJ•^\™P]\ÈŠJ^ØÛÛœÛÛKØ\›Š’[˜[Y^\™H]\ÈSÚ]™[ˆŠNÜ™]\›Ÿ]˜\ˆÏ]œÛİ\˜ÙVÛNİ˜Y
—×ĞTÑH‹ËÚYËšZYÚ
NÙ›ÜŠ˜\ˆXË™Ù][[Y[ĞUYÓ˜[YJ”İX•^\™HŠK‹OLÙO‹›[™İÙJÊÊ^İ˜\ˆÏ\–ÙWK˜]šX]\ËO\Ë›˜[YK˜[YKO\\œÙR[
Ë˜[YKL
K\\œÙR[
ËK˜[YKL
KO\\œÙR[
ËÚY˜[YKL
K\\œÙR[
ËšZYÚ˜[YKL
NÚYŠ]˜Y
KKK
KË™œ˜[YV
^İ˜\ˆSX]˜XœÊ\œÙR[
Ë™œ˜[YV˜[YKL
JKSX]˜XœÊ\œÙR[
Ë™œ˜[YVK˜[YKL
JKO\\œÙR[
Ë™œ˜[YUÚY˜[YKL
K\\œÙR[
Ë™œ˜[YRZYÚ˜[YKL
NÛ‹œÙ]š[JK‹‹K
__\™]\›ˆNÜ™^ÜÏ^_JKÌLÎŠOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆOY[˜İ[ÛŠ
^İ˜\ˆÏ]œÛİ\˜ÙVÛNÜ™]\›ˆ˜Y
—×ĞTÑH‹ËÚYËšZYÚ
KNÜ™^ÜÏ^_JKÌŠOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆOY[˜İ[ÛŠ
^İ˜\ˆÏ]œÛİ\˜ÙVÛNÜ™]\›ˆ˜Y
—×ĞTÑH‹ËÚYËšZYÚ
KNÜ™^ÜÏ^_JKÎMŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆ]
MÎŠKÏY[˜İ[ÛŠË‹Š^ÚYŠ[‹™œ˜[Y\É‰ˆ[‹^\™\Ê^ØÛÛœÛÛKØ\›Š’[˜[Y^\™H]\È”ÓÓˆ\œ˜^HŠNÜ™]\›Ÿ]˜\ˆO[ËœÛİ\˜ÙVÜ—NÛË˜Y
—×ĞTÑH‹‹KÚYKšZYÚ
NÙ›ÜŠ˜\ˆÏP\œ˜^Kš\Ğ\œ˜^J‹^\™\ÊOÛ‹^\™\ÖÜ—K™œ˜[Y\Î›‹™œ˜[Y\ËKOLÚOË›[™İÚJÊÊ^İ˜\ˆ\ÖÚWNÚYŠO[Ë˜Y
™š[[˜[YK‹™œ˜[YK™œ˜[YKK™œ˜[YKË™œ˜[YKš
KXJ^ØÛÛœÛÛKØ\›Š’[˜[Y]\ÈœÛÛ‹œ˜[YH[™XYH^\İÎˆŠÚ™š[[˜[YJNØÛÛ[Y_Zš[[YY	‰˜KœÙ]š[JœÛİ\˜ÙTÚ^™KËœÛİ\˜ÙTÚ^™KšœÜš]TÛİ\˜ÙTÚ^™KœÜš]TÛİ\˜ÙTÚ^™KKœÜš]TÛİ\˜ÙTÚ^™KËœÜš]TÛİ\˜ÙTÚ^™Kš
Kœ›İ]Y	‰ŠKœ›İ]YHLK\]UUœÒ[™\Y

JNİ˜\ˆOZ˜[˜ÚÜŸœ]›İİI‰ŠK˜İ\İÛT]›İHLKœ]›İ]KKœ]›İO]KJKœØØ[NP›Ü™\œÉ‰˜KœÙ]ØØ[NJœØØ[NP›Ü™\œËœØØ[NP›Ü™\œËKœØØ[NP›Ü™\œËËœØØ[NP›Ü™\œËš
KK˜İ\İÛQ]O[

_Y›ÜŠ˜\ˆ[ˆŠYOOH™œ˜[Y\È‰‰Š\œ˜^Kš\Ğ\œ˜^J–ÙJOÛË˜İ\İÛQ]VÙO[–ÙKœÛXÙJ
N›Ë˜İ\İÛQ]VÙO[–ÙJNÜ™]\›ˆßNÜ™^ÜÏXßJKÎMÌLNŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆ]
MÎŠKÏY[˜İ[ÛŠË‹Š^ÚYŠ[‹™œ˜[Y\Ê^ØÛÛœÛÛKØ\›Š’[˜[Y^\™H]\È”ÓÓˆ\ÚÚ]™[‹Z\ÜÚ[™È	Ùœ˜[Y\ÉÈØš™XİŠNÜ™]\›Ÿ]˜\ˆO[ËœÛİ\˜ÙVÜ—NÛË˜Y
—×ĞTÑH‹‹KÚYKšZYÚ
Nİ˜\ˆÏ[‹™œ˜[Y\ËNÙ›ÜŠ˜\ˆH[ˆÊZYŠËš\ÓİÛ”›Ü\JJJ^İ˜\ˆ\ÖÚWNÚYŠO[Ë˜Y
K‹™œ˜[YK™œ˜[YKK™œ˜[YKË™œ˜[YKš
KXJ^ØÛÛœÛÛKØ\›Š’[˜[Y]\ÈœÛÛ‹œ˜[YH[™XYH^\İÎˆŠÚJNØÛÛ[Y_Zš[[YY	‰˜KœÙ]š[JœÛİ\˜ÙTÚ^™KËœÛİ\˜ÙTÚ^™KšœÜš]TÛİ\˜ÙTÚ^™KœÜš]TÛİ\˜ÙTÚ^™KKœÜš]TÛİ\˜ÙTÚ^™KËœÜš]TÛİ\˜ÙTÚ^™Kš
Kœ›İ]Y	‰ŠKœ›İ]YHLK\]UUœÒ[™\Y

JNİ˜\ˆOZ˜[˜ÚÜŸœ]›İİI‰ŠK˜İ\İÛT]›İHLKœ]›İ]KKœ]›İO]KJKœØØ[NP›Ü™\œÉ‰˜KœÙ]ØØ[NJœØØ[NP›Ü™\œËœØØ[NP›Ü™\œËKœØØ[NP›Ü™\œËËœØØ[NP›Ü™\œËš
KK˜İ\İÛQ]O[

_Y›ÜŠ˜\ˆ[ˆŠYOOH™œ˜[Y\È‰‰Š\œ˜^Kš\Ğ\œ˜^J–ÙJOÛË˜İ\İÛQ]VÙO[–ÙKœÛXÙJ
N›Ë˜İ\İÛQ]VÙO[–ÙJNÜ™]\›ˆßNÜ™^ÜÏXßJKÌMÎŠOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒŒHİÛˆİÜ›H‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆOY[˜İ[ÛŠ
^İ˜\ˆVÌMÌKÍKÌ‹KKNËLËL‹LKËÏ[™]ÈZ[\œ˜^JLŠNÙ›ÜŠÏLØÏË›[™İØÊÊÊZYŠÖØ×HOO[Ø×J^ØÛÛœÛÛKØ\›Š’Õ\œÙ\ˆH[˜[Yš[H›Ü›X]ŠNÜ™]\›Ÿ]˜\ˆUZ[Ì\œ˜^K–UT×ÔT—ÑSSQS•[™]È]UšY]ÊL‹LÊœŠKO[‹™Ù]Z[ÌŠL
OOOMÌÌNNKÏ[‹™Ù]Z[ÌŠJœ‹JNÚYŠÈOOL
^ØÛÛœÛÛKØ\›Š’Õ\œÙ\ˆHÛ›HÛÛ\™\ÜÙY›Ü›X]Èİ\ÜYŠNÜ™]\›Ÿ]˜\ˆO[‹™Ù]Z[ÌŠ
œ‹JKO[‹™Ù]Z[ÌŠŠœ‹JK[‹™Ù]Z[ÌŠÊœ‹JKOSX]›X^
K‹™Ù]Z[ÌŠLJœ‹JJK[‹™Ù]Z[ÌŠLŠœ‹JK[™]È\œ˜^JJKM
ÙOZKZÙ›ÜŠÏLØÏNØÊÊÊ^İ˜\ˆÏ[™]È[Ì\œ˜^J‹JVÌNİŠÏM–Ø×O^Ù]N›™]ÈZ[\œ˜^J‹ÊKÚY›KZYÚKOSX]›X^
KOŒJKSX]›X^
KŒJKŠÏYß\™]\›ÛZ\X\Î™‹ÚYšKZYÚš[\›˜[›Ü›X]˜KÛÛ\™\ÜÙYˆLÙ[™\˜]SZ\X\ˆL__NÜ™^ÜÏ^_JKŒÎŠOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒŒHİÛˆİÜ›H‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹Ù[˜İ[ÛˆJËKKK‹
^Ü™]\›ˆOO]›ÚY	‰ŠLMŠKX]™›ÛÜŠ
ÊÔ
KÓJJ“X]™›ÛÜŠ
JĞJKÔŠJ“Y[˜İ[Ûˆ
ËJ^Ü™]\›ˆÏSX]›X^
ËMŠKOSX]›X^
K
KÊ‘KÍY[˜İ[Ûˆ
ËJ^Ü™]\›ˆÏSX]›X^
Ë
KOSX]›X^
K
KÊ‘KÌŸY[˜İ[ÛˆÊËJ^Ü™]\›ˆX]˜ÙZ[
ËÍ
J“X]˜ÙZ[
KÍ
JŒMŸY[˜İ[ÛˆÊËJ^Ü™]\›ˆJËKËË
_Y[˜İ[ÛˆŠËJ^Ü™]\›ˆJËKËË
_Y[˜İ[ÛˆŠËJ^Ü™]\›ˆJËKËK
_Y[˜İ[ÛˆJËJ^Ü™]\›ˆJËKKJ_Y[˜İ[ÛˆÊËJ^Ü™]\›ˆJËKK‹J_Y[˜İ[ÛˆJËJ^Ü™]\›ˆJËKKK‹Š_Y[˜İ[ÛˆJËJ^Ü™]\›ˆJËKËJ_Y[˜İ[Ûˆ
ËJ^Ü™]\›ˆJËKËKŠ_Y[˜İ[ÛˆJËJ^Ü™]\›ˆJËKËË
_Y[˜İ[Ûˆ
ËJ^Ü™]\›ˆJËKKLJ_Y[˜İ[ÛˆŠËJ^Ü™]\›ˆJËKKKLŠ_Y[˜İ[ÛˆŠËJ^Ü™]\›ˆJËKKËL
_Y[˜İ[ÛˆJËJ^Ü™]\›ˆJËKKKLL
_Y[˜İ[Ûˆ
ËJ^Ü™]\›ˆJËKLKKL‹L
_Y[˜İ[ÛˆÊËJ^Ü™]\›ˆJËKLKLKL‹LŠ_]˜\ˆ^ÌÜÚ^™Q[˜ÎÛ›Ü›X]–ÌÍNW_KNÜÚ^™Q[˜ÎÛ›Ü›X]–ÌÍN×_KÜÚ^™Q[˜Î›Û›Ü›X]–ÌÍN_KÎÜÚ^™Q[˜Î›Û›Ü›X]–ÌÍN—_KÜÚ^™Q[˜Î›ËÛ›Ü›X]–ÌÍŒNM—_KÎÜÚ^™Q[˜Î›ËÛ›Ü›X]–ÌÌÍÍÍ‹ÍNLM—_KÜÚ^™Q[˜Îœ‹Û›Ü›X]–ÌÌÍÍÍËÍNLM×_KNÜÚ^™Q[˜Îœ‹Û›Ü›X]–ÌÌÍÍÎÍNLN_KLNÜÚ^™Q[˜Îœ‹Û›Ü›X]–ÌÌÍÍÎKÍNLNW_KMÜÚ^™Q[˜Î˜ËÛ›Ü›X]–ÌÍMÍMW_KMNÜÚ^™Q[˜Î˜ËÛ›Ü›X]–ÌÍL‹ÍL×_KŒÜÚ^™Q[˜Î›ËÛ›Ü›X]–ÌÍÍL‹ÍÍL×_KŒÎÜÚ^™Q[˜Îœ‹Û›Ü›X]–ÌÍÍM‹ÍÍM×_KÜÚ^™Q[˜Î›ËÛ›Ü›X]–ÌÍÍMÍÍMW_KNÜÚ^™Q[˜Î›ËÛ›Ü›X]–ÌÍÍ_KÜÚ^™Q[˜Îœ‹Û›Ü›X]–ÌÍÍL_KÎÜÚ^™Q[˜Îœ‹Û›Ü›X]–ÌÍÎÍÎ_KÜÚ^™Q[˜Î›‹Û›Ü›X]–ÌÍÎKÍÎW_KNÜÚ^™Q[˜Î™KÛ›Ü›X]–ÌÍÎLÍÎ—_KÌÜÚ^™Q[˜ÎœËÛ›Ü›X]–ÌÍÎLKÍÎ×_KÌNÜÚ^™Q[˜Î˜KÛ›Ü›X]–ÌÍÎL‹ÍÎ_KÌÜÚ^™Q[˜ÎšKÛ›Ü›X]–ÌÍÎLËÍÎW_KÌÎÜÚ^™Q[˜ÎšÛ›Ü›X]–ÌÍÎMÍÎ—_KÍÜÚ^™Q[˜ÎKÛ›Ü›X]–ÌÍÎMKÍÎ×_KÍNÜÚ^™Q[˜Î™Û›Ü›X]–ÌÍÎM‹ÍÎ_KÍÜÚ^™Q[˜Î™‹Û›Ü›X]–ÌÍÎMËÍÎW_KÍÎÜÚ^™Q[˜Î‹Û›Ü›X]–ÌÍÎNÍÎL_KÎÜÚ^™Q[˜Î›KÛ›Ü›X]–ÌÍÎNKÍÎLW_KÎNÜÚ^™Q[˜ÎÛ›Ü›X]–ÌÍÎŒÍÎL—_KÜÚ^™Q[˜Î™ËÛ›Ü›X]–ÌÍÎŒKÍÎL×__KÏY[˜İ[ÛŠÊ^Ù›ÜŠ˜\ˆO[™]ÈZ[Ì\œ˜^JËLÊKQVÌKOTOOMMMÌÍM‹OPOÑVÌ—N‘VÌ×KQVÍKUÓWK™Û›Ü›X]Ô—KÏUÓWKœÚ^™Q[˜ËQVÌLWKQVÍ×KQVÍ—KMLŠÑVÌL—K[™]ÈZ[\œ˜^JË
K[™]È\œ˜^JŠKOLÏX‹^‹LÒÒ
ÊÊ^İ˜\ˆ]ÊË
NÑ–ÒO^Ù]N›™]ÈZ[\œ˜^J‹˜Y™™\‹‹˜]SÙ™œÙ]
ÕKŠKÚY“ËZYÚ–KÏSX]›X^
KÏŒJKSX]›X^
KŒJKJÏVŸ\™]\›ÛZ\X\Î‘‹ÚY˜‹ZYÚ‹[\›˜[›Ü›X]“ÛÛ\™\ÜÙYˆLÙ[™\˜]SZ\X\ˆL__NÜ™^ÜÏTßJKÍMMNŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆ]
MMM
KÏY[˜İ[ÛŠË‹‹KËKJ^İ˜\ˆ[
K™œ˜[YUÚY‹[
KO[
K™œ˜[YRZYÚ‹
NÚYŠOO[[
]›İÈ™]È\œ›ÜŠ•^\™SX[˜YÙ\‹”Üš]TÚY]ˆ[˜[Yœ˜[YUÚYÚ]™[‹ˆŠNİ˜\ˆ[ËœÛİ\˜ÙVÜ—NÛË˜Y
—×ĞTÑH‹‹ÚYšZYÚ
Nİ˜\ˆ[
Kœİ\œ˜[YH‹
K[
K™[™œ˜[YH‹LJKO[
K›X\™Ú[ˆ‹
K[
KœÜXÚ[™È‹
KÏSX]™›ÛÜŠ
Ë[JŞ
KÊ
Ş
JKSX]™›ÛÜŠ
K[JŞ
KÊJŞ
JKÏYÊ•ÔÏOOL	‰˜ÛÛœÛÛKØ\›Š”Üš]TÚY]œ˜[YH[Y[œÚ[ÛœÈÚ[™\İ[[ˆ™\›Èœ˜[Y\È›Üˆ^\™Nˆ‹ËšÙ^JK
”ßTÊI‰ŠL
K	‰ŠTÊÙŠK
OOKL_”ßŠI‰ŠTÊNÙ›ÜŠ˜\ˆÏ[KO[KLOLOLLÔÎÔŠÊÊ^ÔLOLİ˜\ˆPÊÚÏQJİNÓœÉ‰ŠS\ÊKÏ˜I‰ŠO]ËXJKY‰‰”]‰‰ŠË˜Y
K‹ŠĞËJÑKTKPJKJÊÊKÊÏZ
ŞÊÚœÉ‰ŠÏ[KJÏ]JŞ
_\™]\›ˆßNÜ™^ÜÏXßJKÍLÍŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆ]
MMM
KÏY[˜İ[ÛŠË‹Š^İ˜\ˆO[
‹™œ˜[YUÚY‹[
KÏ[
‹™œ˜[YRZYÚ‹JNÚYŠYJ]›İÈ™]È\œ›ÜŠ•^\™SX[˜YÙ\‹”Üš]TÚY]œ›ÛP]\Îˆ[˜[Yœ˜[YUÚYÚ]™[‹ˆŠNİ˜\ˆO[ËœÛİ\˜ÙVÌNÛË˜Y
—×ĞTÑH‹KÚYKšZYÚ
K
‹œİ\œ˜[YH‹
K
‹™[™œ˜[YH‹LJNÙ›ÜŠ˜\ˆO[
‹›X\™Ú[ˆ‹
K[
‹œÜXÚ[™È‹
KO\‹˜İ]\‹˜İ]K\‹˜İ]ÚY\‹˜İ]ZYÚO\‹œ™X[ÚY\‹œ™X[ZYÚÏSX]™›ÛÜŠ
KZJÚ
KÊJÚ
JKSX]™›ÛÜŠ
ZJÚ
KÊÊÚ
JKÏ\‹ÏYKTËOYKJKY‹TÊK\‹KO\ËTO\ËJ]‹T
K‹ZKÏZKLLLŞŞŠÊÊ^Ù›ÜŠ˜\ˆ^OOL^OOULKLÑÎÑŠÊÊ^İ˜\ˆOQOOLÏQOOYËLNÚYŠ[Ë˜Y
‹‹JÓ
İËKÊK_ßŠ^İ˜\ˆUOÔÎŒQÔŒLLÕI‰ŠŠÏYKPÊKÉ‰ŠŠÏYKQJK	‰ŠŠÏ\ËPJK‰‰ŠŠÏ\ËSJNİ˜\ˆ	YKV‹O\ËRÔ‹˜İ]ÚYI‹˜İ]ZYÚTK‹œÙ]š[JKË	J_S
ÏZOÓ
ÏPÎ“ÏÓ
ÏQN“
ÏYKŠÊßSZKÊÏZİÊÏPNİÊÏSNÊÏ\ß\™]\›ˆßNÜ™^ÜÏXßJKŒMÎŠOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆOLY[˜İ[ÛŠËË‹Š^İ˜\ˆO^K[‹K[‹šZYÚØË˜Y
‹Ë‹K‹ÚY‹šZYÚ
_KY[˜İ[ÛŠËËŠ^İ˜\ˆXËœÛİ\˜ÙVÛ×NØË˜Y
—×ĞTÑH‹Ë‹ÚY‹šZYÚ
KO[‹šZYÚÙ›ÜŠ˜\ˆO\‹œÜ]
˜
KÏK×–ÈJŠH
JŠÊÊJÖÎˆJÊŠŠKËOHˆ‹OHˆ‹^ŞŒNŒÚYŒZYÚŒKOLİOK›[™İİJÊÊ^İ˜\ˆYVİWK›X]Ú
ÊNÚYŠ
^İ˜\ˆYÌWOOOH‹H‹YÌ—KOYÌ×NÚYŠ‰‰ŠHOOXI‰Š
ËËK
KOZJK^ŞŒNŒÚYŒZYÚŒJKOOH›˜[YHŠ^ÚO[NØÛÛ[Y_\İÚ]Ú
Š^ØØ\ÙH˜Ø\ÙHH˜Ø\ÙHÚY˜Ø\ÙHšZYÚšİ—O\\œÙR[
KL
NØœ™XZß__\™]\›ˆHOOXI‰
ËËK
KßNÜ™^ÜÏ[JKMLŒŒŠ
K
OOËÊŠ‚ˆ
ˆ]]Üˆ™[ˆšXÚ\™È™[š˜[Z[™šXÚ\™ĞÛXZ[˜ÛÛO‚ˆ
ˆÛÜ\šYÚŒİÛˆİÜ›H‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆ]
LÌ
KÏY[˜İ[ÛŠJ^Ù›ÜŠ˜\ˆOXK›Z\X\ËLNÚK›[™İÚ
ÊÊ^İ˜\ˆOZVÚKÚYZVÚKšZYÚÚYŠ[
K
J\™]\›ˆÛÛœÛÛKØ\›Š“Z\]™[ŠÚ
Èˆ\È›İHİÙ\‹[Ù‹]ÛÈÚ^™NˆŠİJÈŠÙ
KL_]˜\ˆ\ÖØKš[\›˜[›Ü›X]NÜ™]\›ˆÙŠJNŠÛÛœÛÛKØ\›Š“›È›Ü›X]ÚXÚÙ\ˆ›İ[™›Üˆ[\›˜[›Ü›X]ŠØKš[\›˜[›Ü›X]
È‹ˆ\Üİ[Z[™È˜[YˆŠKL
_NÙ[˜İ[ÛˆÊJ^Ù›ÜŠ˜\ˆOXK›Z\X\ËLÚK›[™İÚ
ÊÊ^İ˜\ˆOZVÚKÚYZVÚKšZYÚÚYŠ
O
IMOOL

IMOOL
\™]\›ˆÛÛœÛÛKØ\›Š”Ë‘ÕË[™ÌÕÈ[Y[œÚ[ÛœÈ]\İ™HH][\HÙˆ^[Ë[™XXÚİXØÙ\ÜÚ]™HZ\]™[]\İ™H[ˆHÚ^™HÙˆH™]š[İ\È]™[›İ[™YİÛ‹ˆZ\]™[ŠÚ
Èˆ\ÈŠİJÈŠÙ
KL_\™]\›ˆLY[˜İ[ÛˆŠ
^Ü™]\›ˆLY[˜İ[ÛˆŠJ^İ˜\ˆOXK›Z\X\ËZVÌNÜ™]\›ˆ
ÚYšZYÚ
OÈLŠÛÛœÛÛKØ\›Š””•È˜\ÙH[Y[œÚ[ÛœÈ]\İ™HİÙ\ˆÙˆÛËˆ˜\ÙH]™[\ÈŠÚÚY
ÈŠÚšZYÚ
KLJ_Y[˜İ[ÛˆJJ^İ˜\ˆOXK›Z\X\ËZVÌNÜ™]\›ˆÚY	MOOLšZYÚ	MOOLÊÛÛœÛÛKØ\›Š”ÌÕÈÔ‘Ğˆ˜\ÙH[Y[œÚ[ÛœÈ]\İ™HH][\HÙˆ^[Ëˆ˜\ÙH]™[\ÈŠÚÚY
ÈŠÚšZYÚ
Èˆ^[ÈŠKLJNˆL]˜\ˆÏ^ÌÍÍœ‹ÍÍNœ‹ÍÍLœ‹ÍÍLNœ‹ÍÍLœ‹ÍÍLÎœ‹ÍÍMœ‹ÍÍMNœ‹ÍÍMœ‹ÍÍMÎœ‹ÍŒNMœ‹ÍÎœ‹ÍÎNœ‹ÍÎLœ‹ÍÎLNœ‹ÍÎLœ‹ÍÎLÎœ‹ÍÎMœ‹ÍÎMNœ‹ÍÎMœ‹ÍÎMÎœ‹ÍÎNœ‹ÍÎNNœ‹ÍÎŒœ‹ÍÎŒNœ‹ÍÎœ‹ÍÎNœ‹ÍÎœ‹ÍÎÎœ‹ÍÎœ‹ÍÎNœ‹ÍÎœ‹ÍÎÎœ‹ÍÎœ‹ÍÎNœ‹ÍÎLœ‹ÍÎLNœ‹ÍÎLœ‹ÍÎLÎœ‹ÍL›ËÍLÎ›ËÍM›ËÍMN›ËÍŒÎ›ËÍŒ›ËÍŒN›ËÍŒ›ËÍN›‹ÍNN›‹ÍN›‹ÍNÎ›‹ÌÍÍÍ›ËÌÍÍÍÎ›ËÌÍÍÎ›ËÌÍÍÎN›ËÍNLM™KÍNLMÎ™KÍNLN™KÍNLNN™_NÜ™^ÜÏXßJKŒLÌNŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹Ü™^ÜÏ^Ğ]\ÖS
NLJKØ[˜\Î
ÌLÊK[XYÙN
ÌŠK”ÓÓ\œ˜^N
ÎMŠK”ÓÓ’\Ú
ÎMÌLJKÕ\œÙ\
ÌMÊK””\œÙ\
ŒÎ
KÜš]TÚY]
ÍMMJKÜš]TÚY]œ›ÛP]\Î
ÍLÍ
K[š]VPSS
ŒMÊ__JKÍNŠOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹Ü™^ÜÏ^ĞÔÕŒSQÒ”ÓÓŒKT”VWÌ‘Œ‹ÑSQRTÕTŒß_JKMLÍŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆ]
ÍNJKÏ[™]È
Ú[š]X[^™N™[˜İ[ÛŠ‹‹KËKK
^ÊOOO]›ÚYOL
I‰ŠOLÌŠK
ÏOO]›ÚYÏL
I‰ŠÏLÌŠKOOO]›ÚY	‰ŠOL
KOOO]›ÚY	‰ŠOL
K\Ë›˜[YO\‹\Ë™š\œİÚY[Ÿ\Ëš[XYÙUÚYY_\Ëš[XYÙRZYÚ\ß\Ëš[XYÙSX\™Ú[X_\Ëš[XYÙTÜXÚ[™ÏZ_\Ëœ›Ü\Y\ÏZßK\Ëš[XYÙ\ÏV×K\Ëİ[LKÛÛZ[œÒ[XYÙR[™^™[˜İ[ÛŠÊ^Ü™]\›ˆÏ]\Ë™š\œİÚY	‰›Ï\Ë™š\œİÚY
İ\Ëİ[KY[XYÙN™[˜İ[ÛŠË‹‹J^Ü™]\›ˆ\Ëš[XYÙ\Ëœ\Ú
ÙÚY›Ë[XYÙNœ‹ÚY›‹ZYÚ™_JK\Ëİ[
ÊË\ß_JNÜ™^ÜÏXßJKÍŒŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒŒHİÛˆİÜ›H‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆ]
ÍNJKÏ[™]È
Ú[š]X[^™N™[˜İ[ÛŠŠ^ÚYŠ\Ë™ÚYÏV×KˆOO]›ÚY
Y›ÜŠ˜\ˆLÛ‹›[™İÊÊÛŠY›ÜŠ˜\ˆO\–Û—KÏLÜÏKİ[ÊÊÜÊ]\Ë™ÚYÖÙK™š\œİÚY
Ü×OYNİ\Ë—ÙÚYÏ]\Ë™ÚYßK[˜X›YÙÙ]™[˜İ[ÛŠ
^Ü™]\›ˆH]\Ë™ÚYßKÙ]™[˜İ[ÛŠÊ^İ\Ë™ÚYÏ[Ïİ\Ë—ÙÚYÎ›ÚY_KÙ]\R[˜ÛY[™Õ[N™[˜İ[ÛŠÊ^ÚYŠË\HOO]›ÚY	‰›Ë\HOOHˆŠ\™]\›ˆË\NÚYŠJ]\Ë™ÚYßË™ÚYOO]›ÚY
J^İ˜\ˆ]\Ë™ÚYÖÛË™ÚYNÚYŠŠ^İ˜\ˆ\‹™Ù][Q]JË™ÚY
NÚYŠŠ\™]\›ˆ‹\___KÙ]^\™P[™œ˜[YN™[˜İ[ÛŠË‹‹J^ÚYŠOO[[	‰\Ë™ÚYÉ‰™K™ÚYOO]›ÚY
^İ˜\ˆÏ]\Ë™ÚYÖÙK™ÚYNÜÉ‰ŠOO[[	‰œËš[XYÙHOO]›ÚY	‰Š\Ëš[XYÙKšÙ^JKOO[[	‰ŠYK™ÚY\Ë™š\œİÚY
KËœØÙ[™K^\™\Ë™Ù]œ˜[YJ‹Š_
[[[[
J_[ËœÙ]^\™J‹Š_KÙ]›Ü\Y\Ñœ›ÛU[YØš™Xİ™[˜İ[ÛŠËŠ^ÚYŠ\Ë™ÚYÈOO]›ÚY	‰œ‹™ÚYOO]›ÚY
^İ˜\ˆ]\Ë™ÚYÖÜ‹™ÚYNÛˆOO]›ÚY	‰\ËœÙ]œ›ÛR”ÓÓŠË‹™Ù][T›Ü\Y\Ê‹™ÚY
J_]\ËœÙ]œ›ÛR”ÓÓŠË‹œ›Ü\Y\Ê_KÙ]œ›ÛR”ÓÓ™[˜İ[ÛŠËŠ^ÚYŠŠ^ÚYŠ\œ˜^Kš\Ğ\œ˜^JŠJ^Ù›ÜŠ˜\ˆLÛ‹›[™İÛŠÊÊ^İ˜\ˆO\–Û—NÛÖÙK›˜[YWHOO]›ÚYÛÖÙK›˜[YWOYK˜[YN›ËœÙ]]JK›˜[YKK˜[YJ_\™]\›ŸY›ÜŠ˜\ˆÈ[ˆŠ[ÖÜ×HOO]›ÚYÛÖÜ×O\–Ü×N›ËœÙ]]JË–Ü×J___JNÜ™^ÜÏXßJKÌNNNŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆ]
ÍJKÏ]
ÌL
KÏ]
ŒMÍÊK]
LÍJKY[˜İ[ÛŠKËKKKŠ^ØOOO]›ÚY	‰ŠOLÌŠKOOO]›ÚY	‰ŠOLÌŠKOO]›ÚY	‰ŠLL
KOOO]›ÚY	‰ŠOLL
KOO]›ÚY	‰ŠHLJNİ˜\ˆ[[ÚYŠ\œ˜^Kš\Ğ\œ˜^J
J^İ˜\ˆO\ÈOO]›ÚYÜÎˆ›X\İ[ÊKT”VWÌ‘KKŠ_Y[ÙHYŠÈOO]›ÚY
^İ˜\ˆYK˜ØXÚK[[X\™Ù]
ÊNŞİ[ÊË™›Ü›X]™]KKKŠN˜ÛÛœÛÛKØ\›Š“›ÈX\]H›İ[™›ÜˆÙ^HŠÜÊ_\™]\›ˆOO[[	‰Š[™]ÈÊİ[UÚY˜K[RZYÚšKÚYšZYÚ_JJK™]ÈŠKŠ_NÜ™^ÜÏ[ŸJKŒÌNŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆ]
ÍNJKÏ]
ÌMJKÏ]
LNLÊK]
Œ
K]
LÌŒÌŠKO[™]È
ÓZ^[œÎ–ØË[TÚ[™ÛKË‘›\Ë•š\ÚX›WK[š]X[^™N™[˜İ[ÛŠKKK‹‹J^İ\Ë›^Y\XK\Ëš[™^ZK\ËZ\ËO]K\ËÚYY\ËšZYÚY‹\ËœšYÚ\Ë˜›İÛK\Ë˜˜\ÙUÚY]ˆOO]›ÚYİ™\Ë˜˜\ÙRZYÚ[HOO]›ÚYÛN™‹\Ëœ^[L\Ëœ^[OL\Ë\]T^[J
K\Ëœ›Ü\Y\Ï^ßK\Ëœ›İ][ÛL\Ë˜ÛÛYSYHLK\Ë˜ÛÛYTšYÚHLK\Ë˜ÛÛYU\HLK\Ë˜ÛÛYQİÛHLK\Ë™˜XÙSYHLK\Ë™˜XÙTšYÚHLK\Ë™˜XÙUÜHLK\Ë™˜XÙP›İÛOHLK\Ë˜ÛÛ\Ú[ÛØ[˜XÚÏ]›ÚY\Ë˜ÛÛ\Ú[ÛØ[˜XÚĞÛÛ^]\Ë\Ë[LMÍÍÌŒMK\Ë[š[HLK\Ëœ\ÚXÜÏ^ß_KÛÛZ[œÔÚ[™[˜İ[ÛŠËJ^Ü™]\›ˆJÏ\Ëœ^[O\Ëœ^[_Ï\ËœšYÚO\Ë˜›İÛJ_KÛÜN™[˜İ[ÛŠÊ^Ü™]\›ˆ\Ëš[™^\Ëš[™^\Ë˜[O\Ë˜[K\Ëœ›Ü\Y\Ï\ŠËœ›Ü\Y\ÊK\Ëš\ÚX›O\Ëš\ÚX›K\ËœÙ]›\
Ë™›\Ë™›\JK\Ë[\Ë[\Ëœ›İ][Û\Ëœ›İ][Û‹\Ë˜ÛÛYU\\Ë˜ÛÛYU\\Ë˜ÛÛYQİÛ\Ë˜ÛÛYQİÛ‹\Ë˜ÛÛYSY\Ë˜ÛÛYSY\Ë˜ÛÛYTšYÚ\Ë˜ÛÛYTšYÚ\Ë˜ÛÛ\Ú[ÛØ[˜XÚÏ\Ë˜ÛÛ\Ú[ÛØ[˜XÚË\Ë˜ÛÛ\Ú[ÛØ[˜XÚĞÛÛ^\Ë˜ÛÛ\Ú[ÛØ[˜XÚĞÛÛ^\ßKÙ]ÛÛ\Ú[Û‘Ü›İ\™[˜İ[ÛŠ
^Ü™]\›ˆ\Ë[\Ù]İ\Ë[\Ù]™Ù][PÛÛ\Ú[Û‘Ü›İ\
\Ëš[™^
N›[KÙ][Q]N™[˜İ[ÛŠ
^Ü™]\›ˆ\Ë[\Ù]İ\Ë[\Ù]™Ù][Q]J\Ëš[™^
N›[KÙ]Y™[˜İ[ÛŠÊ^İ˜\ˆO]\Ë[[X\^Y\ÚYŠJ^İ˜\ˆOXK[UÕÛÜ›J\Ë\ËK›ÚYÊNÜ™]\›ˆK\™]\›ˆ\Ë
\Ë˜˜\ÙUÚYKÙ]šYÚ™[˜İ[ÛŠÊ^İ˜\ˆO]\Ë[[X\^Y\Ü™]\›ˆOİ\Ë™Ù]Y
ÊJİ\ËÚY
˜KœØØ[V\Ë™Ù]Y
ÊJİ\ËÚYKÙ]Ü™[˜İ[ÛŠÊ^İ˜\ˆO]\Ë[[X\^Y\ÚYŠJ^İ˜\ˆOXK[UÕÛÜ›J\Ë\ËK›ÚYÊNÜ™]\›ˆK_\™]\›ˆ\ËJ\Ë˜˜\ÙUÚYJ\ËšZYÚ]\Ë˜˜\ÙRZYÚ
_KÙ]›İÛN™[˜İ[ÛŠÊ^İ˜\ˆO]\Ë[[X\^Y\Ü™]\›ˆOİ\Ë™Ù]Ü
ÊJİ\ËšZYÚ
˜KœØØ[VN\Ë™Ù]Ü
ÊJİ\ËšZYÚKÙ]›İ[™Î™[˜İ[ÛŠËJ^Ü™]\›ˆOOO]›ÚY	‰ŠO[™]ÈŠKK]\Ë™Ù]Y
ÊKKO]\Ë™Ù]Ü
ÊKKÚY]\Ë™Ù]šYÚ
ÊKXKKšZYÚ]\Ë™Ù]›İÛJÊKXKK_KÙ]Ù[\–™[˜İ[ÛŠÊ^Ü™]\›Š\Ë™Ù]Y
ÊJİ\Ë™Ù]šYÚ
ÊJKÌŸKÙ]Ù[\–N™[˜İ[ÛŠÊ^Ü™]\›Š\Ë™Ù]Ü
ÊJİ\Ë™Ù]›İÛJÊJKÌŸK[\œÙXİÎ™[˜İ[ÛŠËKK
^Ü™]\›ˆJO]\Ëœ^[]\Ëœ^[_Ï]\ËœšYÚO]\Ë˜›İÛJ_K\Ò[\™\İ[™Î™[˜İ[ÛŠËJ^Ü™]\›ˆÉ‰˜Oİ\Ë˜Ø[ÛÛY_\Ëš\Ò[\™\İ[™Ñ˜XÙNœÏİ\Ë˜ÛÛY\Î˜Oİ\Ëš\Ò[\™\İ[™Ñ˜XÙNˆL_K™\Ù]ÛÛ\Ú[Û™[˜İ[ÛŠÊ^ÚYŠÏOO]›ÚY	‰ŠÏHL
K\Ë˜ÛÛYSYHLK\Ë˜ÛÛYTšYÚHLK\Ë˜ÛÛYU\HLK\Ë˜ÛÛYQİÛHLK\Ë™˜XÙUÜHLK\Ë™˜XÙP›İÛOHLK\Ë™˜XÙSYHLK\Ë™˜XÙTšYÚHLKÊ^İ˜\ˆO]\Ë[[X\^Y\ØI‰\Ë[[X\^Y\‹˜Ø[İ[]Q˜XÙ\Ğ]
\Ë\ËJ_\™]\›ˆ\ßK™\Ù]˜XÙ\Î™[˜İ[ÛŠ
^Ü™]\›ˆ\Ë™˜XÙUÜHLK\Ë™˜XÙP›İÛOHLK\Ë™˜XÙSYHLK\Ë™˜XÙTšYÚHLK\ßKÙ]ÛÛ\Ú[Û™[˜İ[ÛŠËKKJ^ÚYŠOOO]›ÚY	‰ŠO\ÊKOOO]›ÚY	‰ŠO\ÊKOO]›ÚY	‰Š\ÊKOOO]›ÚY	‰ŠOHL
K\Ë˜ÛÛYSY\Ë\Ë˜ÛÛYTšYÚXK\Ë˜ÛÛYU\ZK\Ë˜ÛÛYQİÛZ\Ë™˜XÙSY\Ë\Ë™˜XÙTšYÚXK\Ë™˜XÙUÜZK\Ë™˜XÙP›İÛOZJ^İ˜\ˆ]\Ë[[X\^Y\Ù	‰\Ë[[X\^Y\‹˜Ø[İ[]Q˜XÙ\Ğ]
\Ë\ËJ_\™]\›ˆ\ßKÙ]ÛÛ\Ú[ÛØ[˜XÚÎ™[˜İ[ÛŠËJ^Ü™]\›ˆÏOO[[Ê\Ë˜ÛÛ\Ú[ÛØ[˜XÚÏ]›ÚY\Ë˜ÛÛ\Ú[ÛØ[˜XÚĞÛÛ^]›ÚY
NŠ\Ë˜ÛÛ\Ú[ÛØ[˜XÚÏ\Ë\Ë˜ÛÛ\Ú[ÛØ[˜XÚĞÛÛ^XJK\ßKÙ]Ú^™N™[˜İ[ÛŠËKK
^Ü™]\›ˆÈOO]›ÚY	‰Š\ËÚY\ÊKHOO]›ÚY	‰Š\ËšZYÚXJKHOO]›ÚY	‰Š\Ë˜˜\ÙUÚYZJKOO]›ÚY	‰Š\Ë˜˜\ÙRZYÚZ
K\Ë\]T^[J
K\ßK\]T^[N™[˜İ[ÛŠ
^İ˜\ˆÏ]\Ë›^Y\‹›ÜšY[][ÛÚYŠÏOO[Ë“Ô•ÑÓÓS
]\Ëœ^[]\Ë
\Ë˜˜\ÙUÚY\Ëœ^[O]\ËJ\Ë˜˜\ÙRZYÚÙ[ÙHYŠÏOO[Ë’TÓÓQU’PÊ]\Ëœ^[J\Ë]\ËJJ\Ë˜˜\ÙUÚY
‹K\Ëœ^[OJ\Ë
İ\ËJJ\Ë˜˜\ÙRZYÚ
‹NÙ[ÙHYŠÏOO[Ë”ÕQÑÑT‘Q
]\Ëœ^[]\Ë
\Ë˜˜\ÙUÚY
İ\ËILŠŠ\Ë˜˜\ÙUÚYÌŠK\Ëœ^[O]\ËJŠ\Ë˜˜\ÙRZYÚÌŠNÙ[ÙHYŠÏOO[Ë’VQÓÓS
^İ˜\ˆO]\Ë›^Y\‹œİYÙÙ\^\ËO]\Ë›^Y\‹œİYÙÙ\’[™^]\Ë›^Y\‹š^ÚYS[™İKØOOOHHÊJ\Ë˜˜\ÙRZYÚZ
KÌŠÚOOOH›Ùİ\Ëœ^[]\Ë
\Ë˜˜\ÙUÚY
İ\ËILŠŠ\Ë˜˜\ÙUÚYÌŠN\Ëœ^[]\Ë
\Ë˜˜\ÙUÚY]\ËILŠŠ\Ë˜˜\ÙUÚYÌŠK\Ëœ^[O]\ËJ™
N˜OOOH‰‰ŠOJ\Ë˜˜\ÙUÚYZ
KÌŠÚ\Ëœ^[]\Ë
KOOOH›Ùİ\Ëœ^[O]\ËJ\Ë˜˜\ÙRZYÚ
İ\Ë	LŠŠ\Ë˜˜\ÙRZYÚÌŠN\Ëœ^[O]\ËJ\Ë˜˜\ÙRZYÚ]\Ë	LŠŠ\Ë˜˜\ÙRZYÚÌŠJ_\™]\›ˆ\ËœšYÚ]\Ëœ^[
İ\Ë˜˜\ÙUÚY\Ë˜›İÛO]\Ëœ^[Jİ\Ë˜˜\ÙRZYÚ\ßK\İ›ŞN™[˜İ[ÛŠ
^İ\Ë˜ÛÛ\Ú[ÛØ[˜XÚÏ]›ÚY\Ë˜ÛÛ\Ú[ÛØ[˜XÚĞÛÛ^]›ÚY\Ëœ›Ü\Y\Ï]›ÚYKØ[ÛÛYNÙÙ]™[˜İ[ÛŠ
^Ü™]\›ˆ\Ë˜ÛÛYSY\Ë˜ÛÛYTšYÚ\Ë˜ÛÛYU\\Ë˜ÛÛYQİÛŸ\Ë˜ÛÛ\Ú[ÛØ[˜XÚÈOO]›ÚY_KÛÛY\ÎÙÙ]™[˜İ[ÛŠ
^Ü™]\›ˆ\Ë˜ÛÛYSY\Ë˜ÛÛYTšYÚ\Ë˜ÛÛYU\\Ë˜ÛÛYQİÛŸ_K\Ò[\™\İ[™Ñ˜XÙNÙÙ]™[˜İ[ÛŠ
^Ü™]\›ˆ\Ë™˜XÙUÜ\Ë™˜XÙP›İÛ_\Ë™˜XÙSY\Ë™˜XÙTšYÚ_K[\Ù]ÙÙ]™[˜İ[ÛŠ
^İ˜\ˆÏ]\Ë›^Y\‹[[X\^Y\ÚYŠÊ^İ˜\ˆO\Ë™ÚYX\İ\Ëš[™^NÚYŠJ\™]\›ˆ_\™]\›ˆ[_K[[X\^Y\ÙÙ]™[˜İ[ÛŠ
^Ü™]\›ˆ\Ë›^Y\‹[[X\^Y\Ÿ_K[[X\ÙÙ]™[˜İ[ÛŠ
^İ˜\ˆÏ]\Ë[[X\^Y\Ü™]\›ˆÏÜË[[X\›[__JNÜ™^ÜÏY_JKLÍNŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆ]
LJKÏ]
ÍNJKÏ]
ÎMLŠK]
ÍJK]
MMM
KO]
MMÍÊKÏ]
ÍŒŠKO]
LNLÊKO]
ÍŒÌJK]
NLLÌÊKO]
ÊK]
ŒÌJK]
LŠK]
ŒŠKO]
ÌÍŒJK[™]ÈÊÚ[š]X[^™N™[˜İ[ÛŠÊ^İ\ËœØÙ[™OU\Ë[UÚYTË[UÚY\Ë[RZYÚTË[RZYÚ\ËÚYTËÚY\ËšZYÚTËšZYÚ\Ë›ÜšY[][ÛTË›ÜšY[][Û‹\Ëœ™[™\“Ü™\TËœ™[™\“Ü™\‹\Ë™›Ü›X]TË™›Ü›X]\Ë™\œÚ[ÛTË™\œÚ[Û‹\Ëœ›Ü\Y\ÏTËœ›Ü\Y\Ë\ËÚY[”^[ÏTËÚY[”^[Ë\ËšZYÚ[”^[ÏTËšZYÚ[”^[Ë\Ëš[XYÙPÛÛXİ[ÛœÏTËš[XYÙPÛÛXİ[ÛœË\Ëš[XYÙ\ÏTËš[XYÙ\Ë\Ë›^Y\œÏTË›^Y\œË\Ë[\ÏTË[\Ë\Ë[\Ù]ÏTË[\Ù]Ë\Ë›Øš™XİÏTË›Øš™XİË\Ë˜İ\œ™[^Y\’[™^L\Ëš^ÚYS[™İTËš^ÚYS[™İİ˜\ˆÏ]\Ë›ÜšY[][Ûİ\Ë—ØÛÛ™\^ÕÛÜ›Õ[VN™‹‘Ù]ÛÜ›Õ[VQ[˜İ[ÛŠÊKÛÜ›Õ[V™‹‘Ù]ÛÜ›Õ[V[˜İ[ÛŠÊKÛÜ›Õ[VN™‹‘Ù]ÛÜ›Õ[VQ[˜İ[ÛŠÊK[UÕÛÜ›N™‹‘Ù][UÕÛÜ›Q[˜İ[ÛŠÊK[UÕÛÜ›™‹‘Ù][UÕÛÜ›[˜İ[ÛŠÊK[UÕÛÜ›N™‹‘Ù][UÕÛÜ›Q[˜İ[ÛŠÊKÙ][PÛÜ›™\œÎ™‹‘Ù][PÛÜ›™\œÑ[˜İ[ÛŠÊ__KÙ]™[™\“Ü™\™[˜İ[ÛŠÊ^İ˜\ˆVÈœšYÚYİÛˆ‹›YYİÛˆ‹œšYÚ]\‹›Y]\—NÜ™]\›ˆ\[ÙˆÏOH›[X™\ˆ‰‰ŠÏUÙ×JKš[™^ÙŠÊO‹LI‰Š\Ëœ™[™\“Ü™\YÊK\ßKY[\Ù][XYÙN™[˜İ[ÛŠËËËKKJ^ÚYŠÏOO]›ÚY
\™]\›ˆ[ÕO[[	‰ŠYÊNİ˜\ˆ]\ËœØÙ[™KœŞ\Ë^\™\ÎÚYŠT‹™^\İÊ
J\™]\›ˆÛÛœÛÛKØ\›Š	Õ^\™HÙ^H‰\Èˆ›İ›İ[™	Ë
K[İ˜\ˆT‹™Ù]

KÏ]\Ë™Ù][\Ù][™^
ÊNÚYŠÏOO[[	‰\Ë™›Ü›X]OO\‹•SQÒ”ÓÓŠ\™]\›ˆÛÛœÛÛKØ\›Š	Õ[[X\\È›È[\Ù]‰\È‹ˆ]È[\Ù]È\™H	[ÉËË\Ë[\Ù]ÊK[İ˜\ˆ]\Ë[\Ù]Öİ×NÜ™]\›ˆÊ
ßÊI‰“‹œÙ][TÚ^™JËÊK
_
I‰“‹œÙ]ÜXÚ[™ÊK
K‹œÙ][XYÙJ
KŠNŠÏOO]›ÚY	‰ŠÏ]\Ë[UÚY
KÏOO]›ÚY	‰ŠÏ]\Ë[RZYÚ
KOOO]›ÚY	‰ŠOL
KOO]›ÚY	‰ŠL
KOOO]›ÚY	‰ŠOL
KOOO]›ÚY	‰ŠO^ŞŒNŒJK[™]ÈJËKËËK›ÚY›ÚYJK‹œÙ][XYÙJ
K\Ë[\Ù]Ëœ\Ú
ŠK\Ë[\Ï[
\ÊKŠ_KÛÜN™[˜İ[ÛŠËËËKKJ^Ü™]\›ˆO]\Ë™Ù]^Y\ŠJKHOO[[Ê‹ÛÜJËËËKKJK\ÊN›[KÜ™X]P›[šÓ^Y\™[˜İ[ÛŠËËËKKJ^ÔÏOO]›ÚY	‰ŠÏL
KÏOO]›ÚY	‰ŠÏL
KOOO]›ÚY	‰ŠO]\ËÚY
KOO]›ÚY	‰Š]\ËšZYÚ
KOOO]›ÚY	‰ŠO]\Ë[UÚY
KOOO]›ÚY	‰ŠO]\Ë[RZYÚ
Nİ˜\ˆ]\Ë™Ù]^Y\’[™^
ÊNÚYŠˆOO[[
\™]\›ˆÛÛœÛÛKØ\›Š’[˜[Y[[X\^Y\ˆQˆŠÙÊK[Ù›ÜŠ˜\ˆ[™]ÈJÛ˜[YN™Ë[UÚYK[RZYÚ“KÚY‘KZYÚ”ÜšY[][Û\Ë›ÜšY[][Û‹^ÚYS[™İ\Ëš^ÚYS[™İJKËLÓÓŠÊÊ^İÏV×NÙ›ÜŠ˜\ˆLØNØŠÊÊ]Ëœ\Ú
™]È
LK‹‹KK\Ë[UÚY\Ë[RZYÚ
JNÓ™]Kœ\Ú
Ê_]\Ë›^Y\œËœ\Ú

K\Ë˜İ\œ™[^Y\’[™^]\Ë›^Y\œË›[™İLNİ˜\ˆ[™]ÈŠ\ËœØÙ[™K\Ë\Ë˜İ\œ™[^Y\’[™^ËÊNÜ™]\›ˆ‹œÙ]™[™\“Ü™\Š\Ëœ™[™\“Ü™\ŠK\ËœØÙ[™KœŞ\Ë™\Ü^S\İ˜Y
ŠKŸKÜ™X]S^Y\™[˜İ[ÛŠËËÊ^İ˜\ˆO]\Ë™Ù]^Y\’[™^
ÊNÚYŠOOO[[
\™]\›ˆÛÛœÛÛKØ\›Š’[˜[Y[[X\^Y\ˆQˆŠÙÊK\[ÙˆÏOHœİš[™È‰‰˜ÛÛœÛÛKØ\›Š•˜[Y[[^Y\ˆ˜[Y\Îˆ	[È‹\Ë™Ù][S^Y\“˜[Y\Ê
JK[İ˜\ˆ]\Ë›^Y\œÖÑWNÚYŠ[[X\^Y\Š\™]\›ˆÛÛœÛÛKØ\›Š•[[X\^Y\ˆQ[™XYH^\İÎˆŠÙÊK[İ\Ë˜İ\œ™[^Y\’[™^QKÏOO]›ÚY	‰ŠÏT
KÏOO]›ÚY	‰ŠÏTJNİ˜\ˆO[™]ÈŠ\ËœØÙ[™K\ËKËÊNÜ™]\›ˆKœÙ]™[™\“Ü™\Š\Ëœ™[™\“Ü™\ŠK\ËœØÙ[™KœŞ\Ë™\Ü^S\İ˜Y
JK_KÜ™X]Qœ›ÛSØš™XİÎ™[˜İ[ÛŠËÊ^ÔÏOO]›ÚY	‰ŠÏHL
Nİ˜\ˆÏV×KO]\Ë™Ù]Øš™Xİ^Y\ŠÊNÚYŠQJ\™]\›ˆÛÛœÛÛKØ\›Š˜Ü™X]Qœ›ÛSØš™XİÎˆ[˜[YØš™Xİ^Y\“˜[YHÚ]™[ˆŠÙÊKÎİ˜\ˆ[™]ÈÊÏİ\Ë[\Ù]Î›ÚY
NĞ\œ˜^Kš\Ğ\œ˜^J
_
VÕJNÙ›ÜŠ˜\ˆOQK›Øš™XİËOLÓO›[™İÓJÊÊ^İ˜\ˆUÓWK[Š‹šY‹[
KÏ[Š‹™ÚY‹[
K[Š‹›˜[YH‹[
K[Š‹\H‹[
NÔ™[˜X›YH[Š‹šYÛ›Ü™U[\Ù]‹[
NÙ›ÜŠ˜\ˆ‹V×KLĞK›[™İĞŠÊÊ^PVĞ—K
OO[[	‰ÏOO[[	‰“OO[[	‰˜OO[[OO[[	‰‹šYOOSÈOO[[	‰‹™ÚYOO]ßˆOO[[	‰‹›˜[YOOOSŸˆOO[[	‰”™Ù]\R[˜ÛY[™Õ[JŠOOOXŠI‰‘œ\Ú
ŠNÙ›ÜŠ˜\ˆ[Š‹˜Û\ÜÕ\H‹JKO[Š‹œØÙ[™H‹\ËœØÙ[™JKÏ[Š‹˜ÛÛZ[™\ˆ‹[
K[Š‹šÙ^H‹[
K[Š‹™œ˜[YH‹[
KLÖ›[™İÖŠÊÊ^ŞQÖ—Nİ˜\ˆ[™]ÈŠJNÚYŠ‹œÙ]˜[YJ‹›˜[YJK‹œÙ]ÜÚ][ÛŠ‹‹JKœÙ]^\™P[™œ˜[YJ‹ŠK‹ÚY	‰Š‹™\Ü^UÚY^‹ÚY
K‹šZYÚ	‰Š‹™\Ü^RZYÚ^‹šZYÚ
K\Ë›ÜšY[][ÛOOXK’TÓÓQU’PÊ^İ˜\ˆ	]\Ë[UÚYİ\Ë[RZYÚO^Ş’‹R‹KNŠ‹
Ò‹JKÉNÒ‹TK‹OTK_]˜\ˆÏ^Ş’‹›ÜšYÚ[–
‹ÚYNŠ‹›ÜšYÚ[–KJ‹™ÚYÌNŒ
JJ‹šZYÚNÚYŠ‹œ›İ][ÛŠ^İ˜\ˆ[Ê‹œ›İ][ÛŠNÚJËŠK‹œ›İ][ÛZŸR‹
ÏZË‹JÏZËK
‹™›\YÜš^›Û[OO]›ÚY‹™›\Y™\XØ[OO]›ÚY
I‰’‹œÙ]›\
‹™›\YÜš^›Û[‹™›\Y™\XØ[
K‹š\ÚX›_
‹š\ÚX›OHLJKœÙ]›Ü\Y\Ñœ›ÛU[YØš™Xİ
‹ŠKÏÓË˜Y
ŠN•K˜Y™^\İ[™ÊŠKËœ\Ú
Š__\™]\›ˆßKÜ™X]Qœ›ÛU[\Î™[˜İ[ÛŠËËËK
^Ü™]\›ˆ]\Ë™Ù]^Y\Š
KOO[[Û[™‹Ü™X]Qœ›ÛU[\ÊËËËK
_Kš[™[˜İ[ÛŠËËËKJ^Ü™]\›ˆOO]›ÚY	‰ŠHL
KO]\Ë™Ù]^Y\ŠJKOOO[[Û[Š‹‘š[
ËËËKJK\Ê_Kš[\“Øš™XİÎ™[˜İ[ÛŠËÊ^ÚYŠ\[ÙˆÏOHœİš[™ÈŠ^İ˜\ˆÏYÎÚYŠÏ]\Ë™Ù]Øš™Xİ^Y\ŠÊKYÊ\™]\›ˆÛÛœÛÛKØ\›Š“›ÈØš™Xİ^Y\ˆ›İ[™Ú]H˜[YNˆŠĞÊK[\™]\›ˆË›Øš™XİË™š[\ŠÊ_Kš[\•[\Î™[˜İ[ÛŠËËËKKJ^Ü™]\›ˆO]\Ë™Ù]^Y\ŠJKOOO[[Û[™‹‘š[\•[\ÊËËËKKJ_Kš[™R[™^™[˜İ[ÛŠËËÊ^Ü™]\›ˆÏ]\Ë™Ù]^Y\ŠÊKÏOO[[Û[™‹‘š[™R[™^
ËËÊ_Kš[™Øš™Xİ™[˜İ[ÛŠËÊ^ÚYŠ\[ÙˆÏOHœİš[™ÈŠ^İ˜\ˆÏYÎÚYŠÏ]\Ë™Ù]Øš™Xİ^Y\ŠÊKYÊ\™]\›ˆÛÛœÛÛKØ\›Š“›ÈØš™Xİ^Y\ˆ›İ[™Ú]H˜[YNˆŠĞÊK[\™]\›ˆË›Øš™XİË™š[™
Ê_[Kš[™[N™[˜İ[ÛŠËËËKKJ^Ü™]\›ˆO]\Ë™Ù]^Y\ŠJKOOO[[Û[™‹‘š[™[JËËËKKJ_K›Ü‘XXÚ[N™[˜İ[ÛŠËËËKKJ^Ü™]\›ˆO]\Ë™Ù]^Y\ŠJKOOO[[Û[Š‹‘›Ü‘XXÚ[JËËËKKJK\Ê_KÙ][XYÙR[™^™[˜İ[ÛŠÊ^Ü™]\›ˆ\Ë™Ù][™^
\Ëš[XYÙ\ËÊ_KÙ][XYÙS^Y\“˜[Y\Î™[˜İ[ÛŠ
^Ü™]\›ˆ]\Ëš[XYÙ\ßP\œ˜^Kš\Ğ\œ˜^J\Ëš[XYÙ\ÊOÖ×N\Ëš[XYÙ\Ë›X\
[˜İ[ÛŠÊ^Ü™]\›ˆË›˜[Y_J_KÙ][™^™[˜İ[ÛŠË
^Ù›ÜŠ˜\ˆÏLÔÏË›[™İÔÊÊÊZYŠÖÔ×K›˜[YOOOU
\™]\›ˆÎÜ™]\›ˆ[KÙ]^Y\™[˜İ[ÛŠÊ^İ˜\ˆ]\Ë™Ù]^Y\’[™^
ÊNÜ™]\›ˆOO[[İ\Ë›^Y\œÖÕN›[KÙ]Øš™Xİ^Y\™[˜İ[ÛŠÊ^İ˜\ˆ]\Ë™Ù][™^
\Ë›Øš™XİËÊNÜ™]\›ˆOO[[İ\Ë›Øš™XİÖÕN›[KÙ]Øš™Xİ^Y\“˜[Y\Î™[˜İ[ÛŠ
^Ü™]\›ˆ]\Ë›Øš™XİßP\œ˜^Kš\Ğ\œ˜^J\Ë›Øš™XİÊOÖ×N\Ë›Øš™XİË›X\
[˜İ[ÛŠÊ^Ü™]\›ˆË›˜[Y_J_KÙ]^Y\’[™^™[˜İ[ÛŠÊ^Ü™]\›ˆÏOO]›ÚYİ\Ë˜İ\œ™[^Y\’[™^\[ÙˆÏOHœİš[™Èİ\Ë™Ù]^Y\’[™^S˜[YJÊN\[ÙˆÏOH›[X™\ˆ‰‰™Ï\Ë›^Y\œË›[™İÙÎ™È[œİ[˜Ù[Ùˆ‰‰™Ë[[X\OO]\ÏÙË›^Y\’[™^›[KÙ]^Y\’[™^S˜[YN™[˜İ[ÛŠÊ^Ü™]\›ˆ\Ë™Ù][™^
\Ë›^Y\œËÊ_KÙ][P]™[˜İ[ÛŠËËÊ^Ü™]\›ˆÏ]\Ë™Ù]^Y\ŠÊKÏOO[[Û[™‹‘Ù][P]
ËËÊ_KÙ][P]ÛÜ›N™[˜İ[ÛŠËËËJ^Ü™]\›ˆO]\Ë™Ù]^Y\ŠJKOOO[[Û[™‹‘Ù][P]ÛÜ›JËËËJ_KÙ][S^Y\“˜[Y\Î™[˜İ[ÛŠ
^Ü™]\›ˆ]\Ë›^Y\œßP\œ˜^Kš\Ğ\œ˜^J\Ë›^Y\œÊOÖ×N\Ë›^Y\œË›X\
[˜İ[ÛŠÊ^Ü™]\›ˆË›˜[Y_J_KÙ][\ÕÚ][™[˜İ[ÛŠËËËK
^Ü™]\›ˆ]\Ë™Ù]^Y\Š
KOO[[Û[™‹‘Ù][\ÕÚ][ŠËËËK
_KÙ][\ÕÚ][”Ú\N™[˜İ[ÛŠËËÊ^Ü™]\›ˆÏ]\Ë™Ù]^Y\ŠÊKÏOO[[Û[™‹‘Ù][\ÕÚ][”Ú\JËËÊ_KÙ][\ÕÚ][•ÛÜ›N™[˜İ[ÛŠËËËKJ^Ü™]\›ˆO]\Ë™Ù]^Y\ŠJKOOO[[Û[™‹‘Ù][\ÕÚ][•ÛÜ›JËËËKJ_KÙ][\Ù]™[˜İ[ÛŠÊ^İ˜\ˆ]\Ë™Ù][™^
\Ë[\Ù]ËÊNÜ™]\›ˆOO[[İ\Ë[\Ù]ÖÕN›[KÙ][\Ù][™^™[˜İ[ÛŠÊ^Ü™]\›ˆ\Ë™Ù][™^
\Ë[\Ù]ËÊ_K\Õ[P]™[˜İ[ÛŠËÊ^Ü™]\›ˆÏ]\Ë™Ù]^Y\ŠÊKÏOO[[Û[™‹’\Õ[P]
ËÊ_K\Õ[P]ÛÜ›N™[˜İ[ÛŠËËÊ^Ü™]\›ˆÏ]\Ë™Ù]^Y\ŠÊKÏOO[[Û[™‹’\Õ[P]ÛÜ›JËËÊ_K^Y\ÙÙ]™[˜İ[ÛŠ
^Ü™]\›ˆ\Ë›^Y\œÖİ\Ë˜İ\œ™[^Y\’[™^_KÙ]™[˜İ[ÛŠÊ^İ\ËœÙ]^Y\ŠÊ__K][P]™[˜İ[ÛŠËËËJ^Ü™]\›ˆÏOO]›ÚY	‰ŠÏHL
KO]\Ë™Ù]^Y\ŠJKOOO[[Û[™‹”][P]
ËËËJ_K][P]ÛÜ›N™[˜İ[ÛŠËËËK
^Ü™]\›ˆÏOO]›ÚY	‰ŠÏHL
K]\Ë™Ù]^Y\Š
KOO[[Û[™‹”][P]ÛÜ›JËËËK
_K][\Ğ]™[˜İ[ÛŠËËËJ^Ü™]\›ˆÏOO]›ÚY	‰ŠÏHL
KO]\Ë™Ù]^Y\ŠJKOOO[[Û[Š‹”][\Ğ]
ËËËJK\Ê_K˜[™ÛZ^™N™[˜İ[ÛŠËËËK
^Ü™]\›ˆ]\Ë™Ù]^Y\Š
KOO[[Û[Š‹”˜[™ÛZ^™JËËËK
K\Ê_KØ[İ[]Q˜XÙ\Ğ]™[˜İ[ÛŠËÊ^Ü™]\›ˆÏ]\Ë™Ù]^Y\ŠÊKÏOO[[Û[Š‹Ø[İ[]Q˜XÙ\Ğ]
ËÊK\Ê_KØ[İ[]Q˜XÙ\ÕÚ][™[˜İ[ÛŠËËËJ^Ü™]\›ˆO]\Ë™Ù]^Y\ŠJKOOO[[Û[Š‹Ø[İ[]Q˜XÙ\ÕÚ][ŠËËËJK\Ê_K™[[İ™S^Y\™[˜İ[ÛŠÊ^İ˜\ˆ]\Ë™Ù]^Y\’[™^
ÊNÚYŠOO[[
^Ú
\Ë›^Y\œË
NÙ›ÜŠ˜\ˆÏUÔÏ\Ë›^Y\œË›[™İÔÊÊÊ]\Ë›^Y\œÖÔ×K[[X\^Y\‰‰\Ë›^Y\œÖÔ×K[[X\^Y\‹›^Y\’[™^KNÜ™]\›ˆ\Ë˜İ\œ™[^Y\’[™^OOU	‰Š\Ë˜İ\œ™[^Y\’[™^L
K\ßY[ÙH™]\›ˆ[K\İ›ŞS^Y\™[˜İ[ÛŠÊ^İ˜\ˆ]\Ë™Ù]^Y\’[™^
ÊNÜ™]\›ˆOO[[ÊÏ]\Ë›^Y\œÖÕKË[[X\^Y\‹™\İ›ŞJ
K
\Ë›^Y\œË
K\Ë˜İ\œ™[^Y\’[™^OOU	‰Š\Ë˜İ\œ™[^Y\’[™^L
K\ÊN›[K™[[İ™P[^Y\œÎ™[˜İ[ÛŠ
^Ù›ÜŠ˜\ˆÏ]\Ë›^Y\œËLÕË›[™İÕ
ÊÊYÖÕK[[X\^Y\‰‰™ÖÕK[[X\^Y\‹™\İ›ŞJLJNÜ™]\›ˆË›[™İL\Ë˜İ\œ™[^Y\’[™^L\ßK™[[İ™U[N™[˜İ[ÛŠËÊ^ÕOO]›ÚY	‰ŠKLJKÏOO]›ÚY	‰ŠÏHL
Nİ˜\ˆÏV×NĞ\œ˜^Kš\Ğ\œ˜^JÊ_
ÏVÙ×JNÙ›ÜŠ˜\ˆOLÑOË›[™İÑJÊÊ^İ˜\ˆYÖÑWNĞËœ\Ú
\Ëœ™[[İ™U[P]
KLË[[X\^Y\ŠJK‹LI‰\Ëœ][P]
KË[[X\^Y\Š_\™]\›ˆßK™[[İ™U[P]™[˜İ[ÛŠËËËJ^Ü™]\›ˆÏOO]›ÚY	‰ŠÏHL
KÏOO]›ÚY	‰ŠÏHL
KO]\Ë™Ù]^Y\ŠJKOOO[[Û[™‹”™[[İ™U[P]
ËËËJ_K™[[İ™U[P]ÛÜ›N™[˜İ[ÛŠËËËK
^Ü™]\›ˆÏOO]›ÚY	‰ŠÏHL
KÏOO]›ÚY	‰ŠÏHL
K]\Ë™Ù]^Y\Š
KOO[[Û[™‹”™[[İ™U[P]ÛÜ›JËËËK
_K™[™\‘XYÎ™[˜İ[ÛŠËÊ^Ü™]\›ˆÏ]\Ë™Ù]^Y\ŠÊKÏOO[[Û[Š\Ë›ÜšY[][ÛOOXK“Ô•ÑÓÓS	‰™‹”™[™\‘XYÊËÊK\Ê_K™[™\‘XYÑ[™[˜İ[ÛŠË
^Ù›ÜŠ˜\ˆÏ]\Ë›^Y\œËÏLĞÏË›[™İĞÊÊÊY‹”™[™\‘XYÊËÖĞ×JNÜ™]\›ˆ\ßK™\XÙPR[™^™[˜İ[ÛŠËËËKJ^Ü™]\›ˆO]\Ë™Ù]^Y\ŠJKOOO[[Û[Š‹”™\XÙPR[™^
ËËËKJK\Ê_KÙ]ÛÛ\Ú[Û™[˜İ[ÛŠËËËJ^Ü™]\›ˆOO]›ÚY	‰ŠHL
KÏOO]›ÚY	‰ŠÏHL
KOOO]›ÚY	‰ŠOHL
KÏ]\Ë™Ù]^Y\ŠÊKÏOO[[Û[Š‹”Ù]ÛÛ\Ú[ÛŠËËËJK\Ê_KÙ]ÛÛ\Ú[Û™]ÙY[™[˜İ[ÛŠËËËJ^Ü™]\›ˆÏOO]›ÚY	‰ŠÏHL
KÏOO]›ÚY	‰ŠÏHL
KO]\Ë™Ù]^Y\ŠJKOOO[[Û[Š‹”Ù]ÛÛ\Ú[Û™]ÙY[ŠËËËJK\Ê_KÙ]ÛÛ\Ú[ÛT›Ü\N™[˜İ[ÛŠËËÊ^Ü™]\›ˆOO]›ÚY	‰ŠHL
KÏOO]›ÚY	‰ŠÏHL
KÏ]\Ë™Ù]^Y\ŠÊKÏOO[[Û[Š‹”Ù]ÛÛ\Ú[ÛT›Ü\JËËÊK\Ê_KÙ]ÛÛ\Ú[ÛQ^Û\Ú[Û™[˜İ[ÛŠËËÊ^Ü™]\›ˆOO]›ÚY	‰ŠHL
KÏOO]›ÚY	‰ŠÏHL
KÏ]\Ë™Ù]^Y\ŠÊKÏOO[[Û[Š‹”Ù]ÛÛ\Ú[ÛQ^Û\Ú[ÛŠËËÊK\Ê_KÙ]ÛÛ\Ú[Û‘œ›ÛPÛÛ\Ú[Û‘Ü›İ\™[˜İ[ÛŠËÊ^Ü™]\›ˆÏOO]›ÚY	‰ŠÏHL
KOO]›ÚY	‰ŠHL
KÏ]\Ë™Ù]^Y\ŠÊKÏOO[[Û[Š‹”Ù]ÛÛ\Ú[Û‘œ›ÛPÛÛ\Ú[Û‘Ü›İ\
ËÊK\Ê_KÙ][R[™^Ø[˜XÚÎ™[˜İ[ÛŠËËÊ^Ü™]\›ˆÏ]\Ë™Ù]^Y\ŠÊKÏOO[[Û[Š‹”Ù][R[™^Ø[˜XÚÊËËÊK\Ê_KÙ][SØØ][ÛØ[˜XÚÎ™[˜İ[ÛŠËËËKJ^Ü™]\›ˆO]\Ë™Ù]^Y\ŠJKOOO[[Û[Š‹”Ù][SØØ][ÛØ[˜XÚÊËËËKJK\Ê_KÙ]^Y\™[˜İ[ÛŠÊ^İ˜\ˆ]\Ë™Ù]^Y\’[™^
ÊNÜ™]\›ˆOO[[	‰Š\Ë˜İ\œ™[^Y\’[™^U
K\ßKÙ]˜\ÙU[TÚ^™N™[˜İ[ÛŠË
^İ\Ë[UÚYYË\Ë[RZYÚU\ËÚY[”^[Ï]\ËÚY
™Ë\ËšZYÚ[”^[Ï]\ËšZYÚ
•Ù›ÜŠ˜\ˆÏLÔÏ\Ë›^Y\œË›[™İÔÊÊÊ^İ\Ë›^Y\œÖÔ×K˜˜\ÙU[UÚYYË\Ë›^Y\œÖÔ×K˜˜\ÙU[RZYÚUÙ›ÜŠ˜\ˆÏ]\Ë›^Y\œÖÔ×K™]KO]\Ë›^Y\œÖÔ×KÚY]\Ë›^Y\œÖÔ×KšZYÚOLĞOĞJÊÊY›ÜŠ˜\ˆOLÓONÓJÊÊ^İ˜\ˆPÖĞWVÓWNÔˆOO[[	‰”‹œÙ]Ú^™J›ÚY›ÚYË
__\™]\›ˆ\ßKÙ]^Y\•[TÚ^™N™[˜İ[ÛŠËÊ^ÚYŠÏ]\Ë™Ù]^Y\ŠÊKÏOO[[
\™]\›ˆ\ÎÔË[UÚYYËË[RZYÚUÙ›ÜŠ˜\ˆÏTË™]KOTËÚYTËšZYÚOLĞOĞJÊÊY›ÜŠ˜\ˆOLÓONÓJÊÊ^İ˜\ˆPÖĞWVÓWNÔˆOO[[	‰”‹œÙ]Ú^™JË
_\™]\›ˆ\ßKÚY™›N™[˜İ[ÛŠËËËJ^Ü™]\›ˆO]\Ë™Ù]^Y\ŠJKOOO[[Û[Š‹”ÚY™›JËËËJK\Ê_KİØ\R[™^™[˜İ[ÛŠËËËKJ^Ü™]\›ˆO]\Ë™Ù]^Y\ŠJKOOO[[Û[Š‹”İØ\R[™^
ËËËKJK\Ê_K[UÕÛÜ›™[˜İ[ÛŠËÊ^Ü™]\›ˆÏ]\Ë™Ù]^Y\ŠÊKÏOO[[Û[\Ë—ØÛÛ™\•[UÕÛÜ›
ËÊ_K[UÕÛÜ›N™[˜İ[ÛŠËÊ^Ü™]\›ˆÏ]\Ë™Ù]^Y\ŠÊKÏOO[[Û[\Ë—ØÛÛ™\•[UÕÛÜ›JËÊ_K[UÕÛÜ›N™[˜İ[ÛŠËËËJ^Ü™]\›ˆO]\Ë™Ù]^Y\ŠJKOOO[[Û[\Ë—ØÛÛ™\•[UÕÛÜ›JËËËJ_KÙ][PÛÜ›™\œÎ™[˜İ[ÛŠËËÊ^Ü™]\›ˆÏ]\Ë™Ù]^Y\ŠÊKÏOO[[Û[\Ë—ØÛÛ™\‘Ù][PÛÜ›™\œÊËËÊ_KÙZYÚY˜[™ÛZ^™N™[˜İ[ÛŠËËËK
^Ü™]\›ˆ]\Ë™Ù]^Y\Š
KOO[[Û[Š‹•ÙZYÚY˜[™ÛZ^™JËËKË
K\Ê_KÛÜ›Õ[V™[˜İ[ÛŠËËÊ^Ü™]\›ˆÏ]\Ë™Ù]^Y\ŠÊKÏOO[[Û[\Ë—ØÛÛ™\•ÛÜ›Õ[V
ËËÊ_KÛÜ›Õ[VN™[˜İ[ÛŠËËÊ^Ü™]\›ˆÏ]\Ë™Ù]^Y\ŠÊKÏOO[[Û[\Ë—ØÛÛ™\•ÛÜ›Õ[VJËËÊ_KÛÜ›Õ[VN™[˜İ[ÛŠËËËK
^Ü™]\›ˆ]\Ë™Ù]^Y\Š
KOO[[Û[\Ë—ØÛÛ™\•ÛÜ›Õ[VJËËËK
_K\İ›ŞN™[˜İ[ÛŠ
^İ\Ëœ™[[İ™P[^Y\œÊ
K\Ë[\Ë›[™İL\Ë[\Ù]Ë›[™İL\Ë›Øš™XİË›[™İL\ËœØÙ[™O[[_JNÜ™^ÜÏ^JKNLÎNŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆ]
ŒÊKÏ]
ÌNNJNÛœ™YÚ\İ\Š[[X\‹[˜İ[ÛŠÊ^İ˜\ˆ[ÈOO]›ÚYÛÎßNÜ™]\›ˆÊ\ËœØÙ[™K‹šÙ^K‹[UÚY‹[RZYÚ‹ÚY‹šZYÚ‹™]K‹š[œÙ\[
_J_JKŒNŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆ]
ÎMJKÏ]
ÌNNJNÛœ™YÚ\İ\Š[[X\‹[˜İ[ÛŠË‹‹KËKJ^Ü™]\›ˆÏOO[[	‰ŠÏ]›ÚY
KOO[[	‰Š]›ÚY
KOO[[	‰Š]›ÚY
KOOO[[	‰ŠO]›ÚY
KÏOO[[	‰ŠÏ]›ÚY
KÊ\ËœØÙ[™KË‹‹KËKJ_J_JKŒŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆ]
ÍNJKÏ]
ÎÎJKÏ]
ÌMJK]
MMÊK]
LŠKO]
NLŒN
KÏ]
ŒNJKO[™]È
Ñ^[™Îœ‹Z^[œÎ–ÛË[KË›[™[ÙKËÛÛ\]YÚ^™KË‘\Ë‘›\Ë‘Ù]›İ[™ËË“X\ÚËË“ÜšYÚ[‹Ë”\[[™KË”Üİ\[[™KË•˜[œÙ›Ü›KË•š\ÚX›KË”ØÜ›Û˜XİÜ‹ËWK[š]X[^™N™[˜İ[ÛŠK‹‹J^Ü‹˜Ø[
\Ë•[[X\^Y\ˆŠK\Ëš\Õ[[X\HL\Ë[[X\]K\Ë›^Y\’[™^Y\Ë›^Y\]K›^Y\œÖÙK\Ë›^Y\‹[[X\^Y\]\Ë\Ë[\Ù]V×K\Ë[\Ñ˜]ÛL\Ë[\Õİ[]\Ë›^Y\‹ÚY
\Ë›^Y\‹šZYÚ\Ë˜İ[Y[\ÏV×K\ËœÚÚ\İ[HLK\Ë˜İ[Y[™ÖLK\Ë˜İ[Y[™ÖOLK\Ë˜İ[Ø[˜XÚÏ[‹‘Ù]İ[[\Ñ[˜İ[ÛŠ\Ë›^Y\‹›ÜšY[][ÛŠK\Ë—Ü™[™\“Ü™\L\Ë™ÚYX\V×K\Ë[\™XÏ[™]ÈË\Ë˜ÛÛ\Ú[ÛØ]YÛÜOLK\Ë˜ÛÛ\Ú[Û“X\ÚÏLK\ËœÙ][\Ù]ÊŠK\ËœÙ][J\Ë›^Y\‹˜[JK\ËœÙ]ÜÚ][ÛŠ‹JK\ËœÙ]ÜšYÚ[Š
K\ËœÙ]Ú^™JK[UÚY
\Ë›^Y\‹ÚYK[RZYÚ
\Ë›^Y\‹šZYÚ
K\Ëš[š]\[[™J
K\Ëš[š]Üİ\[[™JLJ_KÙ][\Ù]Î™[˜İ[ÛŠJ^İ˜\ˆV×KOV×K]\Ë[[X\Ğ\œ˜^Kš\Ğ\œ˜^JJ_
OVÚWJNÙ›ÜŠ˜\ˆLÙK›[™İÙŠÊÊ^İ˜\ˆZVÙ—NÚYŠ\[ÙˆOHœİš[™È‰‰ŠY™Ù][\Ù]
ŠJKŠ^İKœ\Ú
ŠNÙ›ÜŠ˜\ˆO]‹™š\œİÚYLŞ‹İ[Ş
ÊÊZÛJŞO]Ÿ_]\Ë™ÚYX\Z\Ë[\Ù]]_KÙ]™[™\“Ü™\™[˜İ[ÛŠJ^İ˜\ˆVÈœšYÚYİÛˆ‹›YYİÛˆ‹œšYÚ]\‹›Y]\—NÜ™]\›ˆ\[ÙˆOOHœİš[™È‰‰ŠOZš[™^ÙŠJJKOL	‰šO	‰Š\Ë—Ü™[™\“Ü™\ZJK\ßKØ[İ[]Q˜XÙ\Ğ]™[˜İ[ÛŠK
^Ü™]\›ˆ‹Ø[İ[]Q˜XÙ\Ğ]
K\Ë›^Y\ŠK\ßKØ[İ[]Q˜XÙ\ÕÚ][™[˜İ[ÛŠKK
^Ü™]\›ˆ‹Ø[İ[]Q˜XÙ\ÕÚ][ŠKK\Ë›^Y\ŠK\ßKÜ™X]Qœ›ÛU[\Î™[˜İ[ÛŠKKŠ^Ü™]\›ˆ‹Ü™X]Qœ›ÛU[\ÊKK‹\Ë›^Y\Š_Kİ[™[˜İ[ÛŠJ^Ü™]\›ˆ\Ë˜İ[Ø[˜XÚÊ\Ë›^Y\‹K\Ë˜İ[Y[\Ë\Ë—Ü™[™\“Ü™\Š_KÛÜN™[˜İ[ÛŠKK‹‹J^Ü™]\›ˆ‹ÛÜJKK‹‹K\Ë›^Y\ŠK\ßKš[™[˜İ[ÛŠKK‹Š^Ü™]\›ˆ‹‘š[
KK‹‹\Ë›^Y\ŠK\ßKš[\•[\Î™[˜İ[ÛŠKK‹‹J^Ü™]\›ˆ‹‘š[\•[\ÊKK‹‹K\Ë›^Y\Š_Kš[™R[™^™[˜İ[ÛŠKJ^Ü™]\›ˆ‹‘š[™R[™^
KK\Ë›^Y\Š_Kš[™[N™[˜İ[ÛŠKK‹‹J^Ü™]\›ˆ‹‘š[™[JKK‹‹K\Ë›^Y\Š_K›Ü‘XXÚ[N™[˜İ[ÛŠKK‹‹J^Ü™]\›ˆ‹‘›Ü‘XXÚ[JKK‹‹K\Ë›^Y\ŠK\ßKÙ][™[˜İ[ÛŠKK‹Š^ÚOOO]›ÚY	‰ŠOLMÍÍÌŒMJNİ˜\ˆOY[˜İ[ÛŠ
^Ş[ZK[š[HL_NÜ™]\›ˆ\Ë™›Ü‘XXÚ[JK\ËK‹Š_KÙ][š[™[˜İ[ÛŠKK‹Š^ÚOOO]›ÚY	‰ŠOLMÍÍÌŒMJNİ˜\ˆOY[˜İ[ÛŠ
^Ş[ZK[š[HLNÜ™]\›ˆ\Ë™›Ü‘XXÚ[JK\ËK‹Š_KÙ][P]™[˜İ[ÛŠKJ^Ü™]\›ˆ‹‘Ù][P]
KK\Ë›^Y\Š_KÙ][P]ÛÜ›N™[˜İ[ÛŠKK
^Ü™]\›ˆ‹‘Ù][P]ÛÜ›JKK\Ë›^Y\Š_KÙ]\ÛÕ[P]ÛÜ›N™[˜İ[ÛŠKKŠ^İOOO]›ÚY	‰ŠOHL
Nİ˜\ˆ]\Ë[\™XÎÜ™]\›ˆ‹’\ÛÛY]šXÕÛÜ›Õ[VJKL‹‹\Ë›^Y\‹JK\Ë™Ù][P]
‹‹K
_KÙ][\ÕÚ][™[˜İ[ÛŠKKŠ^Ü™]\›ˆ‹‘Ù][\ÕÚ][ŠKK‹\Ë›^Y\Š_KÙ][\ÕÚ][”Ú\N™[˜İ[ÛŠKJ^Ü™]\›ˆ‹‘Ù][\ÕÚ][”Ú\JKK\Ë›^Y\Š_KÙ][\ÕÚ][•ÛÜ›N™[˜İ[ÛŠKK‹Š^Ü™]\›ˆ‹‘Ù][\ÕÚ][•ÛÜ›JKK‹‹\Ë›^Y\Š_K\Õ[P]™[˜İ[ÛŠK
^Ü™]\›ˆ‹’\Õ[P]
K\Ë›^Y\Š_K\Õ[P]ÛÜ›N™[˜İ[ÛŠKJ^Ü™]\›ˆ‹’\Õ[P]ÛÜ›JKK\Ë›^Y\Š_K][P]™[˜İ[ÛŠKK
^Ü™]\›ˆ‹”][P]
KK\Ë›^Y\Š_K][P]ÛÜ›N™[˜İ[ÛŠKKŠ^Ü™]\›ˆ‹”][P]ÛÜ›JKK‹\Ë›^Y\Š_K][\Ğ]™[˜İ[ÛŠKK
^Ü™]\›ˆ‹”][\Ğ]
KK\Ë›^Y\ŠK\ßK˜[™ÛZ^™N™[˜İ[ÛŠKKŠ^Ü™]\›ˆ‹”˜[™ÛZ^™JKK‹\Ë›^Y\ŠK\ßK™[[İ™U[P]™[˜İ[ÛŠKK
^Ü™]\›ˆ‹”™[[İ™U[P]
KK\Ë›^Y\Š_K™[[İ™U[P]ÛÜ›N™[˜İ[ÛŠKKŠ^Ü™]\›ˆ‹”™[[İ™U[P]ÛÜ›JKK‹\Ë›^Y\Š_K™[™\‘XYÎ™[˜İ[ÛŠK
^Ü™]\›ˆ‹”™[™\‘XYÊK\Ë›^Y\ŠK\ßK™\XÙPR[™^™[˜İ[ÛŠKK‹Š^Ü™]\›ˆ‹”™\XÙPR[™^
KK‹‹\Ë›^Y\ŠK\ßKÙ]ÚÚ\İ[™[˜İ[ÛŠJ^Ü™]\›ˆOOO]›ÚY	‰ŠOHL
K\ËœÚÚ\İ[ZK\ßKÙ]İ[Y[™Î™[˜İ[ÛŠK
^Ü™]\›ˆOOO]›ÚY	‰ŠOLJKOO]›ÚY	‰ŠLJK\Ë˜İ[Y[™ÖZK\Ë˜İ[Y[™ÖOZ\ßKÙ]ÛÛ\Ú[Û™[˜İ[ÛŠKK
^Ü™]\›ˆ‹”Ù]ÛÛ\Ú[ÛŠKK\Ë›^Y\‹
K\ßKÙ]ÛÛ\Ú[Û™]ÙY[™[˜İ[ÛŠKK
^Ü™]\›ˆ‹”Ù]ÛÛ\Ú[Û™]ÙY[ŠKK\Ë›^Y\ŠK\ßKÙ]ÛÛ\Ú[ÛT›Ü\N™[˜İ[ÛŠKJ^Ü™]\›ˆ‹”Ù]ÛÛ\Ú[ÛT›Ü\JKK\Ë›^Y\ŠK\ßKÙ]ÛÛ\Ú[ÛQ^Û\Ú[Û™[˜İ[ÛŠKJ^Ü™]\›ˆ‹”Ù]ÛÛ\Ú[ÛQ^Û\Ú[ÛŠKK\Ë›^Y\ŠK\ßKÙ]ÛÛ\Ú[Û‘œ›ÛPÛÛ\Ú[Û‘Ü›İ\™[˜İ[ÛŠK
^Ü™]\›ˆ‹”Ù]ÛÛ\Ú[Û‘œ›ÛPÛÛ\Ú[Û‘Ü›İ\
K\Ë›^Y\ŠK\ßKÙ][R[™^Ø[˜XÚÎ™[˜İ[ÛŠKJ^Ü™]\›ˆ‹”Ù][R[™^Ø[˜XÚÊKK\Ë›^Y\ŠK\ßKÙ][SØØ][ÛØ[˜XÚÎ™[˜İ[ÛŠKK‹Š^Ü™]\›ˆ‹”Ù][SØØ][ÛØ[˜XÚÊKK‹‹\Ë›^Y\ŠK\ßKÚY™›N™[˜İ[ÛŠKK
^Ü™]\›ˆ‹”ÚY™›JKK\Ë›^Y\ŠK\ßKİØ\R[™^™[˜İ[ÛŠKK‹Š^Ü™]\›ˆ‹”İØ\R[™^
KK‹‹\Ë›^Y\ŠK\ßK[UÕÛÜ›™[˜İ[ÛŠK
^Ü™]\›ˆ\Ë[[X\[UÕÛÜ›
K\Ê_K[UÕÛÜ›N™[˜İ[ÛŠK
^Ü™]\›ˆ\Ë[[X\[UÕÛÜ›JK\Ê_K[UÕÛÜ›N™[˜İ[ÛŠKK
^Ü™]\›ˆ\Ë[[X\[UÕÛÜ›JKK\Ê_KÙ][PÛÜ›™\œÎ™[˜İ[ÛŠKJ^Ü™]\›ˆ\Ë[[X\™Ù][PÛÜ›™\œÊKK\Ê_KÙZYÚY˜[™ÛZ^™N™[˜İ[ÛŠKKŠ^Ü™]\›ˆ‹•ÙZYÚY˜[™ÛZ^™JK‹K\Ë›^Y\ŠK\ßKÛÜ›Õ[V™[˜İ[ÛŠKJ^Ü™]\›ˆ\Ë[[X\ÛÜ›Õ[V
KK\Ê_KÛÜ›Õ[VN™[˜İ[ÛŠKJ^Ü™]\›ˆ\Ë[[X\ÛÜ›Õ[VJKK\Ê_KÛÜ›Õ[VN™[˜İ[ÛŠKKŠ^Ü™]\›ˆ\Ë[[X\ÛÜ›Õ[VJKK‹\Ê_K\İ›ŞN™[˜İ[ÛŠJ^ÚOOO]›ÚY	‰ŠOHL
K\Ë[[X\	‰Š\Ë›^Y\‹[[X\^Y\OO]\É‰Š\Ë›^Y\‹[[X\^Y\]›ÚY
KI‰\Ë[[X\œ™[[İ™S^Y\Š\ÊK\Ë[[X\]›ÚY\Ë›^Y\]›ÚY\Ë˜İ[Y[\Ë›[™İL\Ë˜İ[Ø[˜XÚÏ[[\Ë™ÚYX\V×K\Ë[\Ù]V×K‹œ›İİ\K™\İ›ŞK˜Ø[
\ÊJ__JNÜ™^ÜÏX_JKMŒMLÎŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆ]
ŒLÍ
KÏ[™]ÈÏ[™]È[™]ÈY[˜İ[ÛŠKËKJ^İ˜\ˆ\Ë˜İ[
JKOZ›[™İXK˜[JœË˜[NÚYŠJOOOLL
J^İ˜\ˆXË[ËO\İ‹˜\RU”ÊËËKËœ›İ][Û‹ËœØØ[VËœØØ[VJK‹˜ÛÜQœ›ÛJK›X]š^
Nİ˜\ˆYK˜İ\œ™[ÛÛ^Ï\Ë™ÚYX\ŞœØ]™J
KOÊ‹›][\UÚ]Ù™œÙ]
KXKœØÜ›Û
œËœØÜ›Û˜XİÜ–XKœØÜ›ÛJœËœØÜ›Û˜XİÜ–JK‹™O\Ë‹™\ËK‹›][\J‹JKK˜ÛÜUĞÛÛ^

JNŠ‹™KOXKœØÜ›Û
œËœØÜ›Û˜XİÜ–‹™‹OXKœØÜ›ÛJœËœØÜ›Û˜XİÜ–K‹˜ÛÜUĞÛÛ^

JK
YK˜[X[X\ßËœØØ[VŒ_ËœØØ[VOŒJI‰Šš[XYÙTÛ[Ûİ[™Ñ[˜X›YHLJNÙ›ÜŠ˜\ˆLÕNÕ
ÊÊ^İ˜\ˆÏZÕKÏYÖÔËš[™^NÚYŠÊ^İ˜\ˆOPËš[XYÙK™Ù]Ûİ\˜ÙR[XYÙJ
KPË™Ù][U^\™PÛÛÜ™[˜]\ÊËš[™^
KOPË[UÚYOPË[RZYÚÚYŠJOO[[OOOLOOOL
J^İ˜\ˆPJ‹KSJ‹NÔ
ÏPË[SÙ™œÙ]JÏPË[SÙ™œÙ]KœØ]™J
K˜[œÛ]JËœ^[
Ô‹Ëœ^[JÓ
KËœ›İ][ÛˆOOL	‰œ›İ]JËœ›İ][ÛŠK
Ë™›\Ë™›\JI‰œØØ[JË™›\ËLNŒKË™›\OËLNŒJK™ÛØ˜[[OY
”Ë˜[K™˜]Ò[XYÙJKKKKT‹SKJKœ™\İÜ™J
___^œ™\İÜ™J
__NÜ™^ÜÏ[ŸJKNLŒNŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆ]
MÍÊKÏ[Ï[ØÏ]
NMMN
KÏ]
MŒMLÊK™^ÜÏ^Ü™[™\•ÙX‘Ó˜Ë™[™\Ø[˜\Î›ß_JKNMMNŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆ]
ÌMM
KÏY[˜İ[ÛŠË‹Š^İ˜\ˆO\‹˜İ[
ŠKÏYK›[™İO[‹˜[Jœ‹˜[NÚYŠJÏOOLOL
J^İ˜\ˆO\‹™ÚYX\[Ëœ\[[™\ËœÙ]
‹œ\[[™KŠKO[™Ù][\[™›Ø][K\‹œØÜ›Û˜XİÜ–\‹œØÜ›Û˜XİÜ–K\‹O\‹K\‹œØØ[VÏ\‹œØØ[VNÛËœ\[[™\Ëœ™P˜]Ú
ŠNÙ›ÜŠ˜\ˆLÕÎÕ
ÊÊ^İ˜\ˆÏYVÕKÏZVÔËš[™^NÚYŠÊ^İ˜\ˆOPË™Ù][U^\™PÛÛÜ™[˜]\ÊËš[™^
KPË[UÚYOPË[RZYÚÚYŠJQ_OOLOOOL
J^İ˜\ˆOT
‹KPJ‹KPË™Û^\™KÏZœÙ]^\™L‘
ŠKTPKQKQKKPË[SÙ™œÙ]PË[SÙ™œÙ]KO]JË[J”Ë˜[JNÚ˜˜]Ú^\™J‹ÚYšZYÚŠÔËœ^[

ÊJPŠKJÔËœ^[J™ÊÊŠ™ËQŠKKËËœ›İ][Û‹Ë™›\Ë™›\K‹K‹‹‹‹KKKKË[š[‹[LËL
___[Ëœ\[[™\ËœÜİ˜]Ú
Š__NÜ™^ÜÏXßJKÌÍŒNŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆ]
ÍNJKÏ]
ŒNJKÏ[™]È
Ú[š]X[^™N™[˜İ[ÛŠ‹KËKKKŠ^ÊÏOO]›ÚYÏL
I‰ŠÏLÌŠK
OOO]›ÚYOL
I‰ŠOLÌŠKOOO]›ÚY	‰ŠOL
KOO]›ÚY	‰ŠL
KOOO]›ÚY	‰ŠO^ßJKOO]›ÚY	‰Š^ßJK\Ë›˜[YO[‹\Ë™š\œİÚYYK\Ë[UÚY\Ë\Ë[RZYÚXK\Ë[SX\™Ú[ZK\Ë[TÜXÚ[™ÏZ\Ë[T›Ü\Y\Ï]K\Ë[Q]OY\Ë[SÙ™œÙ][™]ÈËˆOO]›ÚY	‰\Ë[SÙ™œÙ]œÙ]
‹‹JK\Ëš[XYÙO[[\Ë™Û^\™O[[\Ëœ›İÜÏL\Ë˜ÛÛ[[œÏL\Ëİ[L\Ë^ÛÛÜ™[˜]\ÏV×_KÙ][T›Ü\Y\Î™[˜İ[ÛŠŠ^Ü™]\›ˆ\Ë˜ÛÛZ[œÕ[R[™^
ŠOİ\Ë[T›Ü\Y\ÖÜ‹]\Ë™š\œİÚYN›[KÙ][Q]N™[˜İ[ÛŠŠ^Ü™]\›ˆ\Ë˜ÛÛZ[œÕ[R[™^
ŠOİ\Ë[Q]VÜ‹]\Ë™š\œİÚYN›[KÙ][PÛÛ\Ú[Û‘Ü›İ\™[˜İ[ÛŠŠ^İ˜\ˆ]\Ë™Ù][Q]JŠNÜ™]\›ˆ‰‰›‹›Øš™XİÜ›İ\Û‹›Øš™XİÜ›İ\›[KÛÛZ[œÕ[R[™^™[˜İ[ÛŠŠ^Ü™]\›ˆ]\Ë™š\œİÚY	‰œ\Ë™š\œİÚY
İ\Ëİ[KÙ][U^\™PÛÛÜ™[˜]\Î™[˜İ[ÛŠŠ^Ü™]\›ˆ\Ë˜ÛÛZ[œÕ[R[™^
ŠOİ\Ë^ÛÛÜ™[˜]\ÖÜ‹]\Ë™š\œİÚYN›[KÙ][XYÙN™[˜İ[ÛŠŠ^İ\Ëš[XYÙO\İ˜\ˆ\‹™Ù]

KO\‹™Ù]œ˜[YP›İ[™Ê
NÜ™]\›ˆ\Ë™Û^\™O[‹œÛİ\˜ÙK™Û^\™K‹ÚY™KÚY‹šZYÚ™KšZYÚİ\Ë\]U[Q]J‹ÚY‹šZYÚ
N\Ë\]U[Q]JKÚYKšZYÚKKJK\ßKÙ][TÚ^™N™[˜İ[ÛŠ‹Š^Ü™]\›ˆˆOO]›ÚY	‰Š\Ë[UÚY\ŠKˆOO]›ÚY	‰Š\Ë[RZYÚ[ŠK\Ëš[XYÙI‰\Ë\]U[Q]J\Ëš[XYÙKœÛİ\˜ÙVÌKÚY\Ëš[XYÙKœÛİ\˜ÙVÌKšZYÚ
K\ßKÙ]ÜXÚ[™Î™[˜İ[ÛŠ‹Š^Ü™]\›ˆˆOO]›ÚY	‰Š\Ë[SX\™Ú[\ŠKˆOO]›ÚY	‰Š\Ë[TÜXÚ[™Ï[ŠK\Ëš[XYÙI‰\Ë\]U[Q]J\Ëš[XYÙKœÛİ\˜ÙVÌKÚY\Ëš[XYÙKœÛİ\˜ÙVÌKšZYÚ
K\ßK\]U[Q]N™[˜İ[ÛŠ‹‹KÊ^ÙOOO]›ÚY	‰ŠOL
KÏOO]›ÚY	‰ŠÏL
Nİ˜\ˆOJ‹]\Ë[SX\™Ú[ŠŒŠİ\Ë[TÜXÚ[™ÊKÊ\Ë[RZYÚ
İ\Ë[TÜXÚ[™ÊKOJ‹]\Ë[SX\™Ú[ŠŒŠİ\Ë[TÜXÚ[™ÊKÊ\Ë[UÚY
İ\Ë[TÜXÚ[™ÊNÊILHOOLILHOOL
I‰˜ÛÛœÛÛKØ\›Š’[XYÙH[H\™XH›İ[HÚ^™H][\H[ˆŠİ\Ë›˜[YJKOSX]™›ÛÜŠJKOSX]™›ÛÜŠJK\Ëœ›İÜÏXK\Ë˜ÛÛ[[œÏZK\Ëİ[XJšK\Ë^ÛÛÜ™[˜]\Ë›[™İLÙ›ÜŠ˜\ˆ]\Ë[SX\™Ú[ŠÙKO]\Ë[SX\™Ú[ŠÜËLÙ\Ëœ›İÜÎÙ
ÊÊ^Ù›ÜŠ˜\ˆLÙ\Ë˜ÛÛ[[œÎÙŠÊÊ]\Ë^ÛÛÜ™[˜]\Ëœ\Ú
ŞšN_JK
Ï]\Ë[UÚY
İ\Ë[TÜXÚ[™ÎÚ]\Ë[SX\™Ú[ŠÙKJÏ]\Ë[RZYÚ
İ\Ë[TÜXÚ[™ß\™]\›ˆ\ß_JNÜ™^ÜÏ[ßJKÌŒŒÎŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆ]
ÍŒÊKÏY[˜İ[ÛŠË‹Š^İ˜\ˆO[
Ë‹LŠKÏ[
Ë‹LKLŠKO[
ËŠÌKLŠKO[
ËLK‹LŠK[
ÊÌK‹LŠKOYI‰™K˜ÛÛY\ÎÜ™]\›ˆI‰ŠK™˜XÙUÜHLK™˜XÙP›İÛOHLK™˜XÙSYHLK™˜XÙTšYÚHL
KÉ‰œË˜ÛÛY\É‰ŠI‰ŠK™˜XÙUÜHLJKË™˜XÙP›İÛOH]JKI‰˜K˜ÛÛY\É‰ŠI‰ŠK™˜XÙP›İÛOHLJKK™˜XÙUÜH]JKI‰šK˜ÛÛY\É‰ŠI‰ŠK™˜XÙSYHLJKK™˜XÙTšYÚH]JK	‰š˜ÛÛY\É‰ŠI‰ŠK™˜XÙTšYÚHLJK™˜XÙSYH]JKI‰ˆYK˜ÛÛY\É‰™Kœ™\Ù]˜XÙ\Ê
K_NÜ™^ÜÏXßJKMÌÎŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆ]
ÍŒÊKÏ]
ÌÎŠKÏY[˜İ[ÛŠ‹‹KËJ^Ù›ÜŠ˜\ˆO[[[[O[[[[XÊ‹‹KË[JKLİ‹›[™İİŠÊÊ^İ˜\ˆOY–İ—NÛI‰ŠK˜ÛÛY\ÏÊO[
KKKLKLJK[
KKJÌKLJKO[
KLKKKLJK[
K
ÌKKKLJKK™˜XÙUÜHJI‰šK˜ÛÛY\ÊKK™˜XÙP›İÛOHJ	‰š˜ÛÛY\ÊKK™˜XÙSYHJI‰K˜ÛÛY\ÊKK™˜XÙTšYÚHJ	‰™˜ÛÛY\ÊJN›Kœ™\Ù]˜XÙ\Ê
J__NÜ™^ÜÏ[ßJKÌÍLŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆ]
ŒNJKÏ[™]ÈÏY[˜İ[ÛŠ‹‹KÊ^İ˜\ˆOYK[[X\^Y\‹OXK˜İ[Y[™ÖXK˜İ[Y[™ÖKOXK[[X\[UÕÛÜ›J‹‹ËËJNÜ™]\›ˆKœËÛÜ›šY]Ë
ØKœØØ[V
™K[UÚY
ŠZKKJI‰KËÛÜ›šY]ËœšYÚ
ØKœØØ[V
™K[UÚY
ŠKKJI‰KOœËÛÜ›šY]ËJØKœØØ[VJ™K[RZYÚ
ŠZLJI‰KOËÛÜ›šY]Ë˜›İÛJØKœØØ[VJ™K[RZYÚ
ŠKJ_NÜ™^ÜÏ[ßJKMÎNŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆ]
MÌÊKÏ]
ÌÎŠKÏ]
ŒNLJK]
ŒÌJKY[˜İ[ÛŠKËKKKŠ^ÙOO]›ÚY	‰ŠHL
Nİ˜\ˆXÊKËKK[ŠKOV×Nİ‹™›Ü‘XXÚ
[˜İ[ÛŠ
^İ˜\ˆO[™]ÈŠ›^Y\‹š[™^KÚYšZYÚ˜˜\ÙUÚY˜˜\ÙRZYÚ
NĞK˜ÛÜJ
KKœ\Ú
J_JNÙ›ÜŠ˜\ˆZYKÏ]K\ËLÕK›[™İÕ
ÊÊ^İ˜\ˆÏ[VÕKÏTË
ŞOTËJÙÎÛÊËKŠI‰™‹™]VÑWVĞ×I‰ŠËPËËOQKË\]T^[J
K‹™]VÑWVĞ×OTÊ_Y	‰›
LKKLKJÌ‹JÌ‹ŠK‹›[™İLK›[™İLNÜ™^ÜÏ[ŸJKÎNNŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆ]
Œ
KÏ]
ÌÎŠKÏ]
ÎNÊKY[˜İ[ÛŠ‹KËKK
^Üß
Ï^ßJK\œ˜^Kš\Ğ\œ˜^JŠ_
VÛ—JNİ˜\ˆOZ[[X\^Y\Ø_
O]KœØÙ[™JK_
OXK˜Ø[Y\˜\Ë›XZ[ŠNİ˜\ˆZÚYZšZYÚXÊ‹[
KOV×KÏY[˜İ[ÛŠKJ^Ù›ÜŠ˜\ˆOLÓOK›[™İÓJÊÊ^İ˜\ˆPVÓWNÑKš\ÓİÛ”›Ü\JŠ_
VÔ—OTÔ—J__NÙ›ÜŠLŞ‹›[™İŞ
ÊÊ^İ˜\ˆ]–ŞKÏ[
ÊNÚYŠ‹š[™^ÙŠš[™^
HOOKLJ^İ˜\ˆÏ]K[UÕÛÜ›JK›ÚYK
NÔËPËËOPËKÊËÈœ›İ][Ûˆ‹™›\‹™›\H‹˜[H‹š\ÚX›H‹[—JKËš\ÓİÛ”›Ü\J›ÜšYÚ[ˆŠ_
Ë
ÏUÚY
‹KËJÏUšZYÚ
‹JKËš\ÓİÛ”›Ü\J\ÙTÜš]TÚY]ŠI‰ŠËšÙ^OU[\Ù]š[XYÙKË™œ˜[YOUš[™^U[\Ù]™š\œİÚY
KKœ\Ú
K›XZÙKœÜš]JÊJ__ZYŠ\œ˜^Kš\Ğ\œ˜^JJJY›ÜŠLŞ‹›[™İŞ
ÊÊ[Ê–ŞKVŞK‹
NÙ[ÙHYŠHOO[[
Y›ÜŠLŞ‹›[™İŞ
ÊÊ[Ê–ŞKK‹
NÜ™]\›ˆ_NÜ™^ÜÏ\ŸJKNMMNŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆ]
ÎJKÏ]
ŒÍ
KÏ]
MNÊK[™]ÈY[˜İ[ÛŠKÊ^İ˜\ˆOYK[[X\^Y\‹[[X\OYK[[X\^Y\‹SX]™›ÛÜŠK[UÚY
šKœØØ[V
KOSX]™›ÛÜŠK[RZYÚ
šKœØØ[VJK[ÊËÛÜ›šY]ËZKL
KZK˜İ[Y[™ÖXÊËÛÜ›šY]ËœšYÚZKL
JÚK˜İ[Y[™Ö[ÊËÛÜ›šY]ËKZKKKL
KZK˜İ[Y[™ÖKOXÊËÛÜ›šY]Ë˜›İÛKZKKKL
JÚK˜İ[Y[™ÖNÜ™]\›ˆ‹œÙ]Ê‹‹YK]Š_NÜ™^ÜÏ[ŸJKÌÎŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆ]
NMMJKÏ]
ÌÊKÏY[˜İ[ÛŠ‹‹KÊ^ÙOOO]›ÚY	‰ŠOV×JKÏOO]›ÚY	‰ŠÏL
KK›[™İLİ˜\ˆO\‹[[X\^Y\‹O[
‹ŠNÜ™]\›ŠKœÚÚ\İ[KœØÜ›Û˜XİÜ–OOL_KœØÜ›Û˜XİÜ–HOOLJI‰ŠK›YLKœšYÚ\‹ÚYKÜLK˜›İÛO\‹šZYÚ
KÊ‹KËJK_NÜ™^ÜÏ[ßJKÍLLÍÎŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆ]
ÌÎŠKÏ]
MÌÊKÏ]
ŒMÍŠKY[˜İ[ÛŠ‹KËKKJ^Ù›ÜŠ˜\ˆ]K˜ÛÛYR[™^\Ëš[™^ÙŠŠHOOKLK[
KËKK[JKLİ‹›[™İİŠÊÊY–İ—Kš[™^[‹Ê–İ—K
NÚ	‰˜ÊKLKËLKJÌ‹JÌ‹J_NÜ™^ÜÏ\ŸJKLÎŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆ]
ÌÎŠKÏY[˜İ[ÛŠË‹‹KËKK
^İ˜\ˆO[
‹KËKK
NÜ™]\›ˆK™š[\ŠËŠ_NÜ™^ÜÏXßJKLLŠOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆOY[˜İ[ÛŠËÊ^ÛOO]›ÚY	‰ŠL
KÏOO]›ÚY	‰ŠÏHLJNİ˜\ˆL‹KÎÚYŠÊ^Ù›ÜŠO[ËšZYÚLNÙOLÙKKJY›ÜŠ[ËÚYLNÛLÛ‹KJZYŠÏ[Ë™]VÙWVÛ—KÉ‰œËš[™^OO]
^ÚYŠOO[
\™]\›ˆÎÜŠÏL__Y[ÙH›ÜŠOLÙOËšZYÚÙJÊÊY›ÜŠLÛËÚYÛŠÊÊZYŠÏ[Ë™]VÙWVÛ—KÉ‰œËš[™^OO]
^ÚYŠOO[
\™]\›ˆÎÜŠÏL_\™]\›ˆ[NÜ™^ÜÏ^_JKŒMLNŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆ]
ÌÎŠKÏY[˜İ[ÛŠË‹‹KËKK
^İ˜\ˆO[
‹KËKK
NÜ™]\›ˆK™š[™
ËŠ_[NÜ™^ÜÏXßJKMÍMŒŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆ]
ÌÎŠKÏY[˜İ[ÛŠË‹‹KËKK
^İ˜\ˆO[
‹KËKK
NİK™›Ü‘XXÚ
ËŠ_NÜ™^ÜÏXßJKÌÌNŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆ]
LNLÊKÏ]
ÌÊKÏ]
MÍ
K]
MN
K]
MÍÊKO]
MLÊKÏY[˜İ[ÛŠJ^Ü™]\›ˆOOO[“Ô•ÑÓÓSØÎ˜OOO[’VQÓÓSÛÎ˜OOO[”ÕQÑÑT‘QÙN˜OOO[’TÓÓQU’PÏÜ›ŸNÜ™^ÜÏ\ßJKÍŒÎŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆ]
ŒNLJKÏY[˜İ[ÛŠË‹‹J^ÚYŠ
Ë‹JJ^İ˜\ˆÏYK™]VÜ—VÛ×_[Ü™]\›ˆÏÜËš[™^OOKLOÛÜÎ›[œÎ›[Y[ÙH™]\›ˆ[NÜ™^ÜÏXßJKŒMŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆ]
ÍŒÊKÏ]
ŒNJKÏ[™]ÈËY[˜İ[ÛŠ‹KËKJ^Ü™]\›ˆK[[X\^Y\‹ÛÜ›Õ[VJ‹KLËJK
ËËKËJ_NÜ™^ÜÏ\ŸJKMNŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆ]
ŒNJKÏY[˜İ[ÛŠË‹‹J^İ˜\ˆÏYK˜˜\ÙU[UÚYOYK˜˜\ÙU[RZYÚOYK[[X\^Y\‹LOLÚI‰ŠŸ
ZKœØÙ[™K˜Ø[Y\˜\Ë›XZ[ŠKZK
Û‹œØÜ›Û
ŠKZKœØÜ›Û˜XİÜ–
KOZKJÛ‹œØÜ›ÛJŠKZKœØÜ›Û˜XİÜ–JKÊZKœØØ[VJZKœØØ[VJNİ˜\ˆZ
ÛÊœË]JÜŠ˜NÜ™]\›–Û™]È
ŠK™]È

ÜËŠK™]È

ÜËŠØJK™]È
ŠØJW_NÜ™^ÜÏXßJKLMÍNŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆ]
LNLÊKÏ]
ÌŒJKÏ]
MÍÊK]
MNŠKY[˜İ[ÛŠJ^Ü™]\›ˆOOO[“Ô•ÑÓÓSÜ™OOO[’TÓÓQU’PÏÛÎ™OOO[’VQÓÓSØÎŠOOO[”ÕQÑÑT‘QÊ_NÜ™^ÜÏ[ŸJKÎLMÎŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆ]
LNLÊKÏ]
MÍÊKÏ]
MÌJKY[˜İ[ÛŠŠ^Ü™]\›ˆOO[“Ô•ÑÓÓSÛÎ˜ßNÜ™^ÜÏ\ŸJKŒ™LÎŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆ]
LNLÊKÏ]
NNMLJKÏ]
MLÊK]
MÍÊK]
MÌŒŠKO]
ÌÌŠKÏY[˜İ[ÛŠJ^Ü™]\›ˆOOO[“Ô•ÑÓÓSÙN˜OOO[’TÓÓQU’PÏÛÎ˜OOO[’VQÓÓSØÎ˜OOO[”ÕQÑÑT‘QÛœŸNÜ™^ÜÏ\ßJKNNŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆ]
LNLÊKÏ]
MÍÊKÏ]
M
K]
ML
KY[˜İ[ÛŠJ^Ü™]\›ˆOOO[“Ô•ÑÓÓSÜ™OOO[”ÕQÑÑT‘QÛÎ˜ßNÜ™^ÜÏ[ŸJKÌÎŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆ]
MMM
KÏY[˜İ[ÛŠË‹‹KËJ^ÛÏOO]›ÚY	‰ŠÏL
KOO]›ÚY	‰ŠL
KOO]›ÚY	‰ŠXKÚY
KOOO]›ÚY	‰ŠOXKšZYÚ
Kß
Ï^ßJNİ˜\ˆO[
Ëš\Ó›İ[\H‹LJK[
Ëš\ĞÛÛY[™È‹LJKO[
Ëš\Ò[\™\İ[™Ñ˜XÙH‹LJNÛÏ	‰ŠŠÏ[ËÏL
K	‰ŠJÏ\‹L
KÊÛ˜KÚY	‰ŠSX]›X^
KÚY[Ë
JKŠÙO˜KšZYÚ	‰ŠOSX]›X^
KšZYÚ\‹
JNÙ›ÜŠ˜\ˆV×K\ÙŠÙNÙŠÊÊY›ÜŠ˜\ˆ[ÎİÊÛİŠÊÊ^İ˜\ˆOXK™]VÙ—Vİ—NÚYŠHOO[[
^ÚYŠI‰›Kš[™^OOKL_	‰ˆ[K˜ÛÛY\ßI‰ˆ[Kš\Ò[\™\İ[™Ñ˜XÙJXÛÛ[YNÙœ\Ú
J__\™]\›ˆNÜ™^ÜÏXßJKLLMNŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆ]
MMÌÎ
KÏ]
ÌÎŠKÏ]
LNJK]
MÍÊK]
ŒNJKO]
LNLÊKÏY[˜İ[ÛŠŠ^Ü™]\›ˆË”™Xİ[™ÛUÕšX[™ÛJ‹
_KO[™]È‹O[™]È‹[™]È‹OY[˜İ[ÛŠ‹‹J^ÚYŠK›ÜšY[][ÛˆOOYK“Ô•ÑÓÓS
\™]\›ˆÛÛœÛÛKØ\›Š‘Ù][\ÕÚ][”Ú\HÛ›HÛÜšÜÈÚ]ÜÙÛÛ˜[[[X\ÈŠK×NÚYŠOO]›ÚY
\™]\›–×Nİ˜\ˆ\Ù[œİ[˜Ù[ÙˆÚ\˜ÛOŞ[ËÚ\˜ÛUÔ™Xİ[™ÛN™[œİ[˜Ù[Ùˆ”™Xİ[™ÛOŞ[Ë”™Xİ[™ÛUÔ™Xİ[™ÛN™[œİ[˜Ù[Ùˆ•šX[™ÛOŞ\Î™[œİ[˜Ù[Ùˆ“[™I‰Š[Ë“[™UÔ™Xİ[™ÛJKK[[X\^Y\‹ÛÜ›Õ[VJ›YÜLKŠNİ˜\ˆÏZKZKNÛK[[X\^Y\‹ÛÜ›Õ[VJœšYÚ˜›İÛKLKŠNİ˜\ˆÏSX]˜ÙZ[

KÏSX]˜ÙZ[
JKOSX]›X^
ËYËJKSX]›X^
ËUJKOXÊËK‹JKO[K[UÚY[K[RZYÚÛK[[X\^Y\‰‰ŠJ[K[[X\^Y\‹œØØ[VŠ[K[[X\^Y\‹œØØ[VJNÙ›ÜŠ˜\ˆV×KÏ[™]È”™Xİ[™ÛJKŠKLÓK›[™İÓŠÊÊ^İ˜\ˆPVÓ—NÛK[[X\^Y\‹[UÕÛÜ›J‹‹KKŠKËXKËOXKK
ÊI‰“œ\Ú
Š_\™]\›ˆNÜ™^ÜÏ]_JKMLŒÎŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆ]
ÌÎŠKÏ]
ŒNJKÏ[™]ÈË[™]ÈËY[˜İ[ÛŠKËKKK
^İ˜\ˆY[[X\^Y\‹[[X\—ØÛÛ™\•ÛÜ›Õ[VNÙŠKËLËK
Nİ˜\ˆ[ËO[ËNÙŠJØKÊÚKLK‹K
Nİ˜\ˆSX]˜ÙZ[
‹
KÏSX]˜ÙZ[
‹JNÜ™]\›ˆ
‹K]‹Ë[K
_NÜ™^ÜÏ[ŸJKMŒLLÎŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆ]
LNLÊKÏ]
ŒŠKÏ]
LMJKY[˜İ[ÛŠŠ^Ü™]\›ˆOO[“Ô•ÑÓÓSÛÎ˜ßNÜ™^ÜÏ\ŸJKMLŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆ]
LNLÊKÏ]
ŒJKÏ]
MMÊK]
MÍÊK]
MLL
KO]
NMŠKÏY[˜İ[ÛŠJ^Ü™]\›ˆOOO[“Ô•ÑÓÓSÙN˜OOO[’TÓÓQU’PÏÛÎ˜OOO[’VQÓÓSØÎ˜OOO[”ÕQÑÑT‘QÛœŸNÜ™^ÜÏ\ßJKMMÍŒŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆ]
LNLÊKÏ]
ŒŠKÏ]
LNL
K]
ŒÌ
KY[˜İ[ÛŠJ^Ü™]\›ˆOOO[“Ô•ÑÓÓSÜ™OOO[”ÕQÑÑT‘QÛÎ˜ßNÜ™^ÜÏ[ŸJKLLNŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆ]
ŒNLJKÏY[˜İ[ÛŠË‹Š^ÚYŠ
Ë‹ŠJ^İ˜\ˆO[‹™]VÜ—VÛ×NÜ™]\›ˆHOO[[	‰™Kš[™^‹L_Y[ÙH™]\›ˆL_NÜ™^ÜÏXßJKMLŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆ]
LLJKÏ]
ŒNJKÏ[™]ÈËY[˜İ[ÛŠ‹KËJ^ØK[[X\^Y\‹ÛÜ›Õ[VJ‹KLËÊNİ˜\ˆO[Ë[ËNÜ™]\›ˆ
KJ_NÜ™^ÜÏ\ŸJKLMŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆ]
ŒÍ
KÏ]
MNÊKÏY[˜İ[ÛŠ‹Š^İ˜\ˆO\‹[[X\^Y\‹[[X\Ï\‹[[X\^Y\‹OSX]™›ÛÜŠK[UÚY
œËœØØ[V
KOSX]™›ÛÜŠK[RZYÚ
œËœØØ[VJK\‹š^ÚYS[™İK‹ÚYŠ‹œİYÙÙ\^\ÏOOHHŠ^İ˜\ˆOJKZ
KÌŠÚİOXÊ‹ÛÜ›šY]Ë\ËKL
K\Ë˜İ[Y[™Ö[
‹ÛÜ›šY]ËœšYÚ\ËKL
JÜË˜İ[Y[™ÖXÊ‹ÛÜ›šY]ËK\ËKKL
K\Ë˜İ[Y[™ÖK[
‹ÛÜ›šY]Ë˜›İÛK\ËKKL
JÜË˜İ[Y[™Ö_Y[Ù^İ˜\ˆJKZ
KÌŠÚİOXÊ‹ÛÜ›šY]Ë\ËL
K\Ë˜İ[Y[™Ö[
‹ÛÜ›šY]ËœšYÚ\ËL
JÜË˜İ[Y[™ÖXÊ‹ÛÜ›šY]ËK\ËKKL
K\Ë˜İ[Y[™ÖK[
‹ÛÜ›šY]Ë˜›İÛK\ËKKL
JÜË˜İ[Y[™Ö_\™]\›ÛYKšYÚ™Ü™‹›İÛNŸ_NÜ™^ÜÏ[ßJKMÍŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆ]
LM
KÏ]
ÌÊKÏY[˜İ[ÛŠ‹‹KÊ^ÙOOO]›ÚY	‰ŠOV×JKÏOO]›ÚY	‰ŠÏL
KK›[™İLİ˜\ˆO\‹[[X\^Y\‹O[
‹ŠNÜ™]\›ˆKœÚÚ\İ[	‰˜KœØÜ›Û˜XİÜ–OOLI‰˜KœØÜ›Û˜XİÜ–OOOLI‰ŠK›YLKœšYÚ\‹ÚYKÜLK˜›İÛO\‹šZYÚ
KÊ‹KËJK_NÜ™^ÜÏ[ßJKÌŒNŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆ]
NNMLJKÏ]
ŒNJKÏ[™]ÈËY[˜İ[ÛŠ‹KËJ^İ˜\ˆOXK˜˜\ÙU[UÚYXK˜˜\ÙU[RZYÚOXK[[X\^Y\İI‰ŠJ]KœØØ[V
]KœØØ[VJNİ˜\ˆ[
‹KËËJKV×KKMÍÌÍLLNMŒMËKØKœİYÙÙ\^\ÏOOHHÊO]ŠšKZÌŠNŠOZKÌ‹]Šš
NÙ›ÜŠ˜\ˆÏLÙÏÙÊÊÊ^İ˜\ˆLŠ“X]”JŠKYÊKÍÙ‹œ\Ú
™]ÈÊ
ÛJ“X]˜ÛÜÊ
KJŞ
“X]œÚ[Š
JJ_\™]\›ˆŸNÜ™^ÜÏ\ŸJKNNMLNŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆ]
ŒNJKÏY[˜İ[ÛŠË‹‹KÊ^ÛŸ
[™]È
Nİ˜\ˆO\Ë˜˜\ÙU[UÚYO\Ë˜˜\ÙU[RZYÚ\Ë[[X\^Y\‹OLLÚ	‰Š_
OZœØÙ[™K˜Ø[Y\˜\Ë›XZ[ŠKOZ
ÙKœØÜ›Û
ŠKZœØÜ›Û˜XİÜ–
KZJÙKœØÜ›ÛJŠKZœØÜ›Û˜XİÜ–JKJZœØØ[VJZœØØ[VJNİ˜\ˆXKÌ‹ZKÌ‹KÏ\ËœİYÙÙ\^\Ë\ËœİYÙÙ\’[™^Ü™]\›ˆÏOOHHÊO]JØJ›ÊØKY
ÌKJœŠŠİ‹‰LOOL	‰ŠOOH›ÙÛKOY›JÏYŠJN™ÏOOH‰‰•OOH›Ù‰‰ŠO]JÌKJ›Ê™ŠÙ‹Y
ÚJ›ÊÚKÉLOOL	‰ŠOOH›ÙŞO]
Ï]ŠJK‹œÙ]
K
_NÜ™^ÜÏXßJKŒNŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆ]
ŒNJKÏY[˜İ[ÛŠË‹‹KËJ^Ù_
O[™]È
Nİ˜\ˆOXK˜˜\ÙU[UÚYXK˜˜\ÙU[RZYÚOXK[[X\^Y\İI‰Šß
Ï]KœØÙ[™K˜Ø[Y\˜\Ë›XZ[ŠKÏ[ËJK
ÜËœØÜ›Û
ŠK]KœØÜ›Û˜XİÜ–
JK\‹JKJÜËœØÜ›ÛJŠK]KœØÜ›Û˜XİÜ–JJKJ]KœØØ[V
]KœØØ[VJNİ˜\ˆKMÍÌÍLLNMŒMËKKŒÌÌÌÌÌÌÌÌÌÌÌÌÌÌÌËLOK‹ZKÌ‹ÏZÌ‹ËËKØKœİYÙÙ\^\ÏOOHHÊJË^
KÊ
šJKÏJ‹YÊKÙËÏY
•
ÙŠ”ËO]Š•
ÛJ”ÊNŠJË^
KŞÏJ‹YÊKÊ
š
KÏYŠ•
Ù
”ËO[J•
İŠ”ÊKKPËQNİ˜\ˆOSX]œ›İ[™
ÊKOSX]œ›İ[™
JKSX]œ›İ[™

KSX]˜XœÊKPÊKÏSX]˜XœÊKQJKSX]˜XœÊ‹T
NÓÉ‰““ĞOKSKTÏ“‰‰ŠOKPKTŠNİ˜\ˆ‹SNÜ™]\›ˆKœİYÙÙ\’[™^OOH›ÙØ^‰LOOLÓKÌŠĞN“KÌŠĞKKN˜^‰LOOLÓKÌŠĞN“KÌŠĞJËKKœÙ]
‹Š_NÜ™^ÜÏXßJKŒNLNŠOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆOY[˜İ[ÛŠÊ^Ü™]\›ˆL	‰ËÚY	‰›L	‰›ËšZYÚNÜ™^ÜÏ^_JKMNŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆ]
ÌÍL
KÏY[˜İ[ÛŠË‹‹J^ÛOO]›ÚY	‰ŠV×JKOOO]›ÚY	‰ŠOL
K‹›[™İLİ˜\ˆÏ[Ë[[X\^Y\‹O[Ë™]KO[ËÚY[ËšZYÚO\ËœÚÚ\İ[LZKLOZËÚYŠOOOL
Y›ÜŠÏ]ÙÏNÙÊÊÊY›ÜŠYŞŞ
ÊÊUXVÙ×VŞKJUš[™^OOKL_Uš\ÚX›_˜[OOOL
I‰Š]I‰ˆ[
ËËŠ_‹œ\Ú

JNÙ[ÙHYŠOOOLJY›ÜŠÏ]ÙÏNÙÊÊÊY›ÜŠYŞYŞKJUXVÙ×VŞKJUš[™^OOKL_Uš\ÚX›_˜[OOOL
I‰Š]I‰ˆ[
ËËŠ_‹œ\Ú

JNÙ[ÙHYŠOOOLŠY›ÜŠÏ[NÙÏ]ÙËKJY›ÜŠYŞŞ
ÊÊUXVÙ×VŞKJUš[™^OOKL_Uš\ÚX›_˜[OOOL
I‰Š]I‰ˆ[
ËËŠ_‹œ\Ú

JNÙ[ÙHYŠOOOLÊY›ÜŠÏ[NÙÏ]ÙËKJY›ÜŠYŞYŞKJUXVÙ×VŞKJUš[™^OOKL_Uš\ÚX›_˜[OOOL
I‰Š]I‰ˆ[
ËËŠ_‹œ\Ú

JNÜ™]\›ˆË[\Ñ˜]Û[‹›[™İË[\Õİ[ZJšŸNÜ™^ÜÏXßJKMLÎŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆ]
ŒNJKÏY[˜İ[ÛŠË‹‹KÊ^ÛŸ
[™]È
Nİ˜\ˆO\Ë˜˜\ÙU[UÚYO\Ë˜˜\ÙU[RZYÚ\Ë[[X\^Y\‹OLLÚ	‰Š_
OZœØÙ[™K˜Ø[Y\˜\Ë›XZ[ŠKOZ
ÙKœØÜ›Û
ŠKZœØÜ›Û˜XİÜ–
KJZœØØ[VZJÙKœØÜ›ÛJŠKZœØÜ›Û˜XİÜ–JKJZœØØ[VJNİ˜\ˆ]JÊË\ŠJŠKÌŠKY
ÊÊÜŠJŠKÌŠNÜ™]\›ˆ‹œÙ]
‹Š_NÜ™^ÜÏXßJKMMÎŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆ]
ŒNJKÏY[˜İ[ÛŠË‹‹KËKJ^Ù_
O[™]È
Nİ˜\ˆXK˜˜\ÙU[UÚYOXK˜˜\ÙU[RZYÚXK[[X\^Y\Ù	‰Šß
ÏYœØÙ[™K˜Ø[Y\˜\Ë›XZ[ŠK\‹JJÜËœØÜ›ÛJŠKYœØÜ›Û˜XİÜ–JJKJYœØØ[VKÏ[ËJ
ÜËœØÜ›Û
ŠKYœØÜ›Û˜XİÜ–
JK
YœØØ[V
Nİ˜\ˆZÌ‹]KÌÛÏ[ËY‹_
\‹]JNİ˜\ˆOKJŠËÙŠÜ‹İŠKKJŠ[ËÙŠÜ‹İŠNÜ™]\›ˆ‰‰ŠOSX]™›ÛÜŠJKSX]™›ÛÜŠ
JKKœÙ]
K
_NÜ™^ÜÏXßJKÌMMNŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆ]
ŒÌJKÏ]
ŒNLJKÏ]
ÌŒŒÊK]
ŒMÍŠKY[˜İ[ÛŠKËKK
^ÚYŠOOO]›ÚY	‰ŠOHL
KXÊËK
J\™]\›ˆ[İ˜\ˆKZ™]VØWVÜ×KY	‰™˜ÛÛY\ÎÙH[œİ[˜Ù[ÙˆÊ™]VØWVÜ×OOO[[	‰Š™]VØWVÜ×O[™]È
Kš[™^ËK[UÚY[RZYÚ
JK™]VØWVÜ×K˜ÛÜJJJNŠOYK™]VØWVÜ×OOO[[Ú™]VØWVÜ×O[™]È
KËK[UÚY[RZYÚ
Nš™]VØWVÜ×Kš[™^]JNİ˜\ˆZ™]VØWVÜ×KOZ˜ÛÛYR[™^\Ëš[™^ÙŠ‹š[™^
HOOKLNÚYŠOYH[œİ[˜Ù[ÙˆÙKš[™^™KOOOKLJ]‹ÚYZ[UÚY‹šZYÚZ[RZYÚÙ[Ù^İ˜\ˆZ[[X\^Y\‹[[X\Ï^[\ËYÖİWVÌ—KÏ^[\Ù]ÖÕNİ‹ÚYTË[UÚY‹šZYÚTË[RZYÚ\™]\›ˆŠ‹JKI‰™ˆOO]‹˜ÛÛY\É‰›ÊËK
KŸNÜ™^ÜÏ[ŸJKŒÌÎŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆ]
ÌMMN
KÏ]
ŒNJKÏ[™]ÈËY[˜İ[ÛŠ‹KËKK
^Ü™]\›ˆ[[X\^Y\‹ÛÜ›Õ[VJKËLËK
K
‹ËËKK
_NÜ™^ÜÏ\ŸJKMLNŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆ]
MÌÊKÏ]
ÌMMN
KÏY[˜İ[ÛŠ‹‹KËJ^ÚYŠÏOO]›ÚY	‰ŠÏHL
KP\œ˜^Kš\Ğ\œ˜^JŠJ\™]\›ˆ[Ğ\œ˜^Kš\Ğ\œ˜^J–ÌJ_
VÜ—JNÙ›ÜŠ˜\ˆO\‹›[™İ\–ÌK›[™İOLİONİJÊÊY›ÜŠ˜\ˆLÙÙ
ÊÊ^İ˜\ˆ\–İWVÙNØÊ‹ŠÙJİKLKJ_\É‰›
‹LKKLK
Ì‹JÌ‹J_NÜ™^ÜÏ[ßJKÍÌÎNŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆ]
ÌÎŠKÏ]
MŠKÏY[˜İ[ÛŠ‹‹KËKJ^İ˜\ˆO[
‹‹KËßKJNÚYŠXJY›ÜŠOV×KLÚK›[™İÚ
ÊÊXKš[™^ÙŠVÚKš[™^
OOOKLI‰˜Kœ\Ú
VÚKš[™^
NÙ›ÜŠLÚK›[™İÚ
ÊÊ]VÚKš[™^XÊJ_NÜ™^ÜÏ[ßJKŒÍMMÎŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆ]
ŒÌJKÏ]
ŒNLJKÏ]
ÌŒŒÊKY[˜İ[ÛŠ‹KËKJ^ÚYŠÏOO]›ÚY	‰ŠÏHL
KOOO]›ÚY	‰ŠOHL
KXÊ‹KJJ\™]\›ˆ[İ˜\ˆZK™]VÙWVÛ—NÚYŠ
ZK™]VÙWVÛ—O\ÏÛ[›™]È
KLK‹KK[UÚYK[RZYÚ
NÙ[ÙH™]\›ˆ[Ü™]\›ˆI‰š	‰š˜ÛÛY\É‰›Ê‹KJKNÜ™^ÜÏ\ŸJKMMÎŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆ]
ŒÍMMÊKÏ]
ŒNJKÏ[™]ÈËY[˜İ[ÛŠ‹KËKK
^Ü™]\›ˆ[[X\^Y\‹ÛÜ›Õ[VJ‹KLËK
K
ËËKËK
_NÜ™^ÜÏ\ŸJKMMLÌÎŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆ]
ÌÎŠKÏ]
ÎMMŠKÏ[™]ÈÊLKŒLŒÌKML
K[™]ÈÊËLÍŒ
K[™]ÈÊÎKÍËML
KOY[˜İ[ÛŠËKJ^ØOOO]›ÚY	‰ŠO^ßJNİ˜\ˆXK[PÛÛÜˆOO]›ÚYØK[PÛÛÜ›ËOXK˜ÛÛY[™Õ[PÛÛÜˆOO]›ÚYØK˜ÛÛY[™Õ[PÛÛÜœ‹XK™˜XÙPÛÛÜˆOO]›ÚYØK™˜XÙPÛÛÜ›‹[
KÚYKšZYÚ[JNÜË˜[œÛ]PØ[˜\ÊK[[X\^Y\‹K[[X\^Y\‹JKËœØØ[PØ[˜\ÊK[[X\^Y\‹œØØ[VK[[X\^Y\‹œØØ[VJNÙ›ÜŠ˜\ˆLİ‹›[™İİŠÊÊ^İ˜\ˆOY–İ—K[K[\Ù]ÛK[\Ù][SÙ™œÙ]ŞŒNŒKÏ[KÚY[KšZYÚÏ[Kœ^[^Ï[Kœ^[K^KO[K˜ÛÛY\ÏİNšÑHOO[[	‰ŠË™š[İ[JK˜ÛÛÜ‹K˜[KÌMJKË™š[™Xİ
ËËË
JKÊÏLKÊÏLKËOL‹OL‹OO[[	‰ŠË›[™Tİ[JK˜ÛÛÜ‹˜[KÌMJKK™˜XÙUÜ	‰œË›[™P™]ÙY[ŠËËÊÙËÊKK™˜XÙTšYÚ	‰œË›[™P™]ÙY[ŠÊÙËËÊÙËÊÕ
KK™˜XÙP›İÛI‰œË›[™P™]ÙY[ŠËÊÕÊÙËÊÕ
KK™˜XÙSY	‰œË›[™P™]ÙY[ŠËËËÊÕ
J__NÜ™^ÜÏY_JKÎNÎŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆ]
ÌÎŠKÏY[˜İ[ÛŠË‹‹KËKJ^Ù›ÜŠ˜\ˆ[
‹KËK[JKOLİO›[™İİJÊÊZİWI‰šİWKš[™^OO[É‰ŠİWKš[™^\Š_NÜ™^ÜÏXßJKÌÎŠOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆOY[˜İ[ÛŠËÊ^İ˜\ˆ]™]K]ÚYO]šZYÚÏ][[X\^Y\‹OSX]›X^
›Y
KOSX]›Z[Š‹œšYÚ
KSX]›X^
Ü
KOSX]›Z[ŠK˜›İÛJK‹ÚYŠÏOOL
Y›ÜŠZÙNÙŠÊÊY›ÜŠXNÜ–Ù—I‰™NÙ
ÊÊ]\–Ù—VÙKJ]Ÿ‹š[™^OOKL_]‹š\ÚX›_‹˜[OOOL
I‰›Ëœ\Ú
ŠNÙ[ÙHYŠÏOOLJY›ÜŠZÙNÙŠÊÊY›ÜŠZNÜ–Ù—I‰™XNÙKJ]\–Ù—VÙKJ]Ÿ‹š[™^OOKL_]‹š\ÚX›_‹˜[OOOL
I‰›Ëœ\Ú
ŠNÙ[ÙHYŠÏOOLŠY›ÜŠ]NÙZÙ‹KJY›ÜŠXNÜ–Ù—I‰™NÙ
ÊÊ]\–Ù—VÙKJ]Ÿ‹š[™^OOKL_]‹š\ÚX›_‹˜[OOOL
I‰›Ëœ\Ú
ŠNÙ[ÙHYŠÏOOLÊY›ÜŠ]NÙZÙ‹KJY›ÜŠZNÜ–Ù—I‰™XNÙKJ]\–Ù—VÙKJ]Ÿ‹š[™^OOKL_]‹š\ÚX›_‹˜[OOOL
I‰›Ëœ\Ú
ŠNÜ™]\›ˆË[\Ñ˜]Û[Ë›[™İË[\Õİ[[Š™KßNÜ™^ÜÏ^_JKMÌŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆ]
ŒMÍŠKÏ]
MÌÊKÏ]
MNJKY[˜İ[ÛŠ‹KËKJ^ÙOOO]›ÚY	‰ŠOHL
KÏOO]›ÚY	‰ŠÏHL
KOOO]›ÚY	‰ŠOHL
K\œ˜^Kš\Ğ\œ˜^JŠ_
VÛ—JNÙ›ÜŠ˜\ˆLÚ‹›[™İÚ
ÊÊ[Ê–ÚKKJNÚYŠJY›ÜŠ˜\ˆOLİOKšZYÚİJÊÊY›ÜŠ˜\ˆLÙKÚYÙ
ÊÊ^İ˜\ˆXK™]VİWVÙNÙ‰‰›‹š[™^ÙŠ‹š[™^
HOOKLI‰›
‹J_\É‰˜ÊKÚYKšZYÚJ_NÜ™^ÜÏ\ŸJKÍÌŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆ]
ŒMÍŠKÏ]
MÌÊKÏ]
MNJKY[˜İ[ÛŠ‹KËKK
^ÚYŠÏOO]›ÚY	‰ŠÏHL
KOOO]›ÚY	‰ŠOHL
KOO]›ÚY	‰ŠHL
KJ™JJ^Ù›ÜŠ˜\ˆO[İOYNİJÊÊ[ÊKËJNÚYŠ
Y›ÜŠ˜\ˆLÙKšZYÚÙ
ÊÊY›ÜŠ˜\ˆLÙKÚYÙŠÊÊ^İ˜\ˆZK™]VÙVÙ—Nİ‰‰‹š[™^[‰‰‹š[™^YI‰›
‹Ê_XI‰˜ÊKÚYKšZYÚJ__NÜ™^ÜÏ\ŸJKÍMŒNŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆ]
ŒMÍŠKÏ]
MÌÊKÏ]
MNJKY[˜İ[ÛŠ‹KËJ^ÙOOO]›ÚY	‰ŠOHL
KÏOO]›ÚY	‰ŠÏHL
K\œ˜^Kš\Ğ\œ˜^JŠ_
VÛ—JNÙ›ÜŠ˜\ˆOLÚOKšZYÚÚJÊÊY›ÜŠ˜\ˆLÚKÚYÚ
ÊÊ^İ˜\ˆOXK™]VÚWVÚNİI‰›‹š[™^ÙŠKš[™^
OOOKLI‰Š
KJKÊKš[™^KJJ_\É‰˜ÊKÚYKšZYÚJ_NÜ™^ÜÏ\ŸJKÍŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆ]
ŒMÍŠKÏ]
MÌÊKÏ]
MÌŒŠKY[˜İ[ÛŠ‹KËJ^ÙOOO]›ÚY	‰ŠOHL
KÏOO]›ÚY	‰ŠÏHL
NÙ›ÜŠ˜\ˆOLÚOKšZYÚÚJÊÊY›ÜŠ˜\ˆLÚKÚYÚ
ÊÊ^İ˜\ˆOXK™]VÚWVÚNÚYŠJ^Ù›ÜŠ˜\ˆ[ˆŠZYŠÊKœ›Ü\Y\Ë
J^İ˜\ˆ[–ÙNĞ\œ˜^Kš\Ğ\œ˜^JŠ_
VÙ—JNÙ›ÜŠ˜\ˆLİ‹›[™İİŠÊÊ]Kœ›Ü\Y\ÖÙOOOY–İ—I‰›
KJ___\É‰˜ÊKÚYKšZYÚJ_NÜ™^ÜÏ\ŸJKŒÌÌÎŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆ]
ŒMÍŠKÏ]
MÌÊKÏY[˜İ[ÛŠ‹‹J^ÜOO]›ÚY	‰ŠHL
KOO]›ÚY	‰ŠHL
NÙ›ÜŠ˜\ˆÏLÜÏKšZYÚÜÊÊÊY›ÜŠ˜\ˆOLØOKÚYØJÊÊ^İ˜\ˆOYK™]VÜ×VØWNÚYŠJ^İ˜\ˆZK™Ù]ÛÛ\Ú[Û‘Ü›İ\

NÚ	‰š›Øš™XİÉ‰š›Øš™XİË›[™İŒ	‰›
KŠ__[‰‰˜ÊKÚYKšZYÚJ_NÜ™^ÜÏ[ßJKMNNŠOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆOY[˜İ[ÛŠÊ^İ˜\ˆÏXË˜ÛÛYR[™^\Ëš[™^ÙŠ
NÛ	‰›ÏOOKLOØË˜ÛÛYR[™^\Ëœ\Ú

Nˆ[	‰›ÈOOKLI‰˜Ë˜ÛÛYR[™^\ËœÜXÙJËJ_NÜ™^ÜÏ^_JKŒMÍŠOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆOY[˜İ[ÛŠ
^ÛİœÙ]ÛÛ\Ú[ÛŠLLLLLJNœ™\Ù]ÛÛ\Ú[ÛŠLJ_NÜ™^ÜÏ^_JKÎMNÎŠOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆOY[˜İ[ÛŠËÊ^ÚYŠ\[ÙˆOH›[X™\ˆŠ[Ë˜Ø[˜XÚÜÖİO[OO[[ŞØØ[˜XÚÎ›Ø[˜XÚĞÛÛ^˜ßN›ÚYÙ[ÙH›ÜŠ˜\ˆL]›[™İÜÜŠÊÊ[Ë˜Ø[˜XÚÜÖİÜ—WO[OO[[ŞØØ[˜XÚÎ›Ø[˜XÚĞÛÛ^˜ßN›ÚYNÜ™^ÜÏ^_JKLÌMŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆ]
ÌÎŠKÏY[˜İ[ÛŠË‹‹KËKJ^Ù›ÜŠ˜\ˆ[
Ë‹‹K[JKOLİO›[™İİJÊÊZİWKœÙ]ÛÛ\Ú[ÛØ[˜XÚÊËJ_NÜ™^ÜÏXßJKÌLÎŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆ]
ÌÎŠKÏ]
ÌÍ
KÏY[˜İ[ÛŠ‹‹KËJ^İ˜\ˆO[
‹‹KË[JKZK›X\
[˜İ[ÛŠ
^Ü™]\›ˆš[™^JNØÊ
NÙ›ÜŠ˜\ˆOLİOK›[™İİJÊÊZVİWKš[™^ZİW_NÜ™^ÜÏ[ßJKŒLÌNŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆ]
ŒÍ
KÏ]
MNÊKÏY[˜İ[ÛŠ‹Š^İ˜\ˆO\‹[[X\^Y\‹[[X\Ï\‹[[X\^Y\‹OSX]™›ÛÜŠK[UÚY
œËœØØ[V
KOSX]™›ÛÜŠK[RZYÚ
œËœØØ[VJKXÊ‹ÛÜ›šY]Ë\ËKL
K\Ë˜İ[Y[™ÖO[
‹ÛÜ›šY]ËœšYÚ\ËKL
JÜË˜İ[Y[™ÖXÊ‹ÛÜ›šY]ËK\ËKKÌ‹L
K\Ë˜İ[Y[™ÖK[
‹ÛÜ›šY]Ë˜›İÛK\ËKKÌ‹L
JÜË˜İ[Y[™ÖNÜ™]\›ÛYššYÚKÜ™›İÛN™Ÿ_NÜ™^ÜÏ[ßJKMLÎŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆ]
ŒLÌJKÏ]
ÌÊKÏY[˜İ[ÛŠ‹‹KÊ^ÙOOO]›ÚY	‰ŠOV×JKÏOO]›ÚY	‰ŠÏL
KK›[™İLİ˜\ˆO\‹[[X\^Y\‹O[
‹ŠNÜ™]\›ˆKœÚÚ\İ[	‰˜KœØÜ›Û˜XİÜ–OOLI‰˜KœØÜ›Û˜XİÜ–OOOLI‰ŠK›YLKœšYÚ\‹ÚYKÜLK˜›İÛO\‹šZYÚ
KÊ‹KËJK_NÜ™^ÜÏ[ßJKMÌŒŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆ]
ŒNJKÏY[˜İ[ÛŠË‹‹KÊ^ÛŸ
[™]È
Nİ˜\ˆO\Ë˜˜\ÙU[UÚYO\Ë˜˜\ÙU[RZYÚ\Ë[[X\^Y\‹OLLÚ	‰Š_
OZœØÙ[™K˜Ø[Y\˜\Ë›XZ[ŠKOZ
ÙKœØÜ›Û
ŠKZœØÜ›Û˜XİÜ–
KJZœØØ[VZJÙKœØÜ›ÛJŠKZœØÜ›Û˜XİÜ–JKJZœØØ[VJNİ˜\ˆ]JÛÊ˜JÜ‰LŠŠKÌŠKY
ÜŠŠKÌŠNÜ™]\›ˆ‹œÙ]
‹Š_NÜ™^ÜÏXßJKMŠOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆOY[˜İ[ÛŠÊ^İ˜\ˆÏXË˜˜\ÙU[RZYÚXË[[X\^Y\‹LÜ™]\›ˆ‰‰ŠOO]›ÚY	‰Š\‹œØÙ[™K˜Ø[Y\˜\Ë›XZ[ŠK\‹JÛœØÜ›ÛJŠK\‹œØÜ›Û˜XİÜ–JKÊ\‹œØØ[VJKŠİ
ŠËÌŠJÛßNÜ™^ÜÏ^_JKMLLŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆ]
ŒNJKÏY[˜İ[ÛŠË‹‹KËJ^Ù_
O[™]È
Nİ˜\ˆOXK˜˜\ÙU[UÚYXK˜˜\ÙU[RZYÚOXK[[X\^Y\İI‰Šß
Ï]KœØÙ[™K˜Ø[Y\˜\Ë›XZ[ŠK\‹JKJÜËœØÜ›ÛJŠK]KœØÜ›Û˜XİÜ–JJK
]KœØØ[VKÏ[ËJK
ÜËœØÜ›Û
ŠK]KœØÜ›Û˜XİÜ–
JKJ]KœØØ[V
Nİ˜\ˆ[ÓX]™›ÛÜŠ‹ÊÌŠJNœ‹ÊÌŠK[ÓX]™›ÛÜŠ
ÊÙ	LŠ‹JšJKÚJNŠÊÙ	LŠ‹JšJKÚNÜ™]\›ˆKœÙ]
‹
_NÜ™^ÜÏXßJKLNLŠOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆOY[˜İ[ÛŠËÊ^İ˜\ˆ[Ë˜˜\ÙU[RZYÚ[Ë[[X\^Y\Ü™]\›ˆ‰‰Šß
Ï[‹œØÙ[™K˜Ø[Y\˜\Ë›XZ[ŠK]J‹JØËœØÜ›ÛJŠK[‹œØÜ›Û˜XİÜ–JJKŠ[‹œØØ[VJKÓX]™›ÛÜŠÊ‹ÌŠJNÊ‹ÌŠ_NÜ™^ÜÏ^_JKMŒŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆ]
ÌÎŠKÏY[˜İ[ÛŠË‹‹KËKJ^Ù›ÜŠ˜\ˆ[
‹KËK[JKOLİO›[™İİJÊÊZİWI‰ŠİWKš[™^OO[ÏÚİWKš[™^\šİWKš[™^OO\‰‰ŠİWKš[™^[ÊJ_NÜ™^ÜÏXßJKMÌNŠOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆOY[˜İ[ÛŠÊ^İ˜\ˆÏXË˜˜\ÙU[UÚYXË[[X\^Y\‹LÜ™]\›ˆ‰‰Š
\‹œØÙ[™K˜Ø[Y\˜\Ë›XZ[ŠK\‹
ÛœØÜ›Û
ŠK\‹œØÜ›Û˜XİÜ–
KÊ\‹œØØ[V
KŠİ
›ßNÜ™^ÜÏ^_JKÌÌŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆ]
MÌJKÏ]
ML
KÏ]
ŒNJKY[˜İ[ÛŠ‹KËKJ^Ü™]\›ˆß
Ï[™]ÈÊ
JKË[
‹KJKËOXÊKKJKßNÜ™^ÜÏ\ŸJKMLŠOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆOY[˜İ[ÛŠÊ^İ˜\ˆÏXË˜˜\ÙU[RZYÚXË[[X\^Y\‹LÜ™]\›ˆ‰‰Š
\‹œØÙ[™K˜Ø[Y\˜\Ë›XZ[ŠK\‹JÛœØÜ›ÛJŠK\‹œØÜ›Û˜XİÜ–JKÊ\‹œØØ[VJKŠİ
›ßNÜ™^ÜÏ^_JKÍÌÍŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆ]
ÌÎŠKÏ]
ÍML
KÏY[˜İ[ÛŠ‹‹KËKJ^ÚYŠJ^İ˜\ˆO[
‹‹KË[JKLÙ›ÜŠLÚK›[™İÚ
ÊÊY
ÏXVÚKÙZYÚÚYŠJL
JY›ÜŠLÚK›[™İÚ
ÊÊ^Ù›ÜŠ˜\ˆXË”“‘™œ˜XÊ
J™LOKLKLŞK›[™İŞ
ÊÊZYŠŠÏXVŞKÙZYÚ]Š^İ˜\ˆÏXVŞKš[™^ÛOP\œ˜^Kš\Ğ\œ˜^JÊOÙÖÓX]™›ÛÜŠË”“‘™œ˜XÊ
J™Ë›[™İ
WN™ÎØœ™XZß]VÚKš[™^[___NÜ™^ÜÏ[ßJKLMNŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆ]
NMŠKÏ]
ŒNJKÏ[™]ÈËY[˜İ[ÛŠ‹KËJ^Ü™]\›ˆ
‹KËËJKËNÜ™^ÜÏ\ŸJKNMŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆ]
ŒNJKÏY[˜İ[ÛŠË‹‹KËJ^ÛOO]›ÚY	‰ŠHL
K_
O[™]È
Nİ˜\ˆOXK˜˜\ÙU[UÚYXK˜˜\ÙU[RZYÚOXK[[X\^Y\İI‰Šß
Ï]KœØÙ[™K˜Ø[Y\˜\Ë›XZ[ŠKÏ[ËJK
ÜËœØÜ›Û
ŠK]KœØÜ›Û˜XİÜ–
JK\‹JKJÜËœØÜ›ÛJŠK]KœØÜ›Û˜XİÜ–JJKJ]KœØØ[V
]KœØØ[VJNİ˜\ˆ[ËÚK\‹ÚÜ™]\›ˆ‰‰ŠSX]™›ÛÜŠ
KSX]™›ÛÜŠŠJKKœÙ]
Š_NÜ™^ÜÏXßJKŒÌŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆ]
NMŠKÏ]
ŒNJKÏ[™]ÈËY[˜İ[ÛŠ‹KËJ^Ü™]\›ˆ
‹KËËJKË_NÜ™^ÜÏ\ŸJKLŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹Ü™^ÜÏ^ĞØ[İ[]Q˜XÙ\Ğ]
ÌŒŒÊKØ[İ[]Q˜XÙ\ÕÚ][
MÌÊKÚXÚÒ\ÛĞ›İ[™Î
ÌÍL
KÛÜN
MÎJKÜ™X]Qœ›ÛU[\Î
ÎNJKİ[›İ[™Î
NMMJKİ[[\Î
ÌÊKš[
ÍLLÍÊKš[\•[\Î
LÊKš[™R[™^
LLŠKš[™[N
ŒMLJK›Ü‘XXÚ[N
MÍMŒ
KÙ]İ[[\Ñ[˜İ[Û
ÌÌJKÙ][P]
ÍŒÊKÙ][P]ÛÜ›N
ŒM
KÙ][PÛÜ›™\œÎ
MNŠKÙ][PÛÜ›™\œÑ[˜İ[Û
LMÍN
KÙ][\ÕÚ][
ÌÎŠKÙ][\ÕÚ][”Ú\N
LLMJKÙ][\ÕÚ][•ÛÜ›N
MLŒÊKÙ][UÕÛÜ›[˜İ[Û
ÎLMÊKÙ][UÕÛÜ›Q[˜İ[Û
Œ™LÊKÙ][UÕÛÜ›Q[˜İ[Û
NN
KÙ]ÛÜ›Õ[V[˜İ[Û
MŒLLÊKÙ]ÛÜ›Õ[VQ[˜İ[Û
MLŠKÙ]ÛÜ›Õ[VQ[˜İ[Û
MMÍŒŠK\Õ[P]
LLJK\Õ[P]ÛÜ›N
MLŠK^YÛÛ˜[İ[›İ[™Î
LM
K^YÛÛ˜[İ[[\Î
MÍ
K^YÛÛ˜[Ù][PÛÜ›™\œÎ
ÌŒJK^YÛÛ˜[[UÕÛÜ›N
NNMLJK^YÛÛ˜[ÛÜ›Õ[VN
ŒJK\Ò[“^Y\›İ[™Î
ŒNLJK\ÛÛY]šXĞİ[[\Î
MN
K\ÛÛY]šXÕ[UÕÛÜ›N
MLÊK\ÛÛY]šXÕÛÜ›Õ[VN
MMÊK][P]
ÌMMN
K][P]ÛÜ›N
ŒÌÊK][\Ğ]
MLJK˜[™ÛZ^™N
ÍÌÎJK™[[İ™U[P]
ŒÍMMÊK™[[İ™U[P]ÛÜ›N
MMÎ
K™[™\‘XYÎ
MMLÌÊK™\XÙPR[™^
ÎNÊK[İ[
ÌÊKÙ]ÛÛ\Ú[Û
MÌ
KÙ]ÛÛ\Ú[Û™]ÙY[
ÍÌŠKÙ]ÛÛ\Ú[ÛQ^Û\Ú[Û
ÍMŒJKÙ]ÛÛ\Ú[ÛT›Ü\N
Í
KÙ]ÛÛ\Ú[Û‘œ›ÛPÛÛ\Ú[Û‘Ü›İ\
ŒÌÌÊKÙ]^Y\ÛÛ\Ú[Û’[™^
MNJKÙ][PÛÛ\Ú[Û
ŒMÍŠKÙ][R[™^Ø[˜XÚÎ
ÎMNÊKÙ][SØØ][ÛØ[˜XÚÎ
LÌM
KÚY™›N
ÌLÊKİYÙÙ\™Yİ[›İ[™Î
ŒLÌJKİYÙÙ\™Yİ[[\Î
MLÊKİYÙÙ\™Y[UÕÛÜ›N
MÌŒŠKİYÙÙ\™Y[UÕÛÜ›N
M
KİYÙÙ\™YÛÜ›Õ[VN
MLL
KİYÙÙ\™YÛÜ›Õ[VN
LNL
KİØ\R[™^
MŒ
K[UÕÛÜ›
MÌJK[UÕÛÜ›N
ÌÌŠK[UÕÛÜ›N
ML
KÙZYÚY˜[™ÛZ^™N
ÍÌÍŠKÛÜ›Õ[V
LMJKÛÜ›Õ[VN
NMŠKÛÜ›Õ[VN
ŒÌ
__JKLNLÎŠOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹Ü™^ÜÏ^ÓÔ•ÑÓÓSŒTÓÓQU’PÎŒKÕQÑÑT‘QŒ‹VQÓÓSŒß_JKŒNNŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆ^ÓÔ’QS•USÓ
LNLÊ_NÜ™^ÜÏ[JKŒLNŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆ]
ÎLLJKÏ]
ŒNJKÏ^ĞÛÛ\Û™[Î
LŠK\œÙ\œÎ
MÍŠK›Ü›X]Î
ÍJK[XYÙPÛÛXİ[Û
MLÍŠK\œÙUÕ[[X\
ÌNNJK[N
ŒÌJK[[X\
LÍJK[[X\Ü™X]Ü
NLÎJK[[X\˜XİÜN
ŒJK[\Ù]
ÌÍŒJK[[X\^Y\
ŒŠKÜšY[][Û
LNLÊK^Y\‘]N
MMÍÊKX\]N
ÌL
KØš™Xİ^Y\
Ì
_NÛÏ[
LKËË“Ô’QS•USÓŠK™^ÜÏ[ßJKMMÍÎŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆ]
ÍNJKÏ]
LNLÊKÏ]
MMM
K[™]È
Ú[š]X[^™N™[˜İ[ÛŠJ^ÙOOO]›ÚY	‰ŠO^ßJK\Ë›˜[YO[ÊK›˜[YH‹›^Y\ˆŠK\ËšY[ÊKšY‹
K\Ë[ÊK‹
K\ËO[ÊKH‹
K\ËÚY[ÊKÚY‹
K\ËšZYÚ[ÊKšZYÚ‹
K\Ë[UÚY[ÊK[UÚY‹
K\Ë[RZYÚ[ÊK[RZYÚ‹
K\Ë˜˜\ÙU[UÚY[ÊK˜˜\ÙU[UÚY‹\Ë[UÚY
K\Ë˜˜\ÙU[RZYÚ[ÊK˜˜\ÙU[RZYÚ‹\Ë[RZYÚ
K\Ë›ÜšY[][Û[ÊK›ÜšY[][Ûˆ‹Ë“Ô•ÑÓÓS
K\ËÚY[”^[Ï[ÊKÚY[”^[È‹\ËÚY
\Ë˜˜\ÙU[UÚY
K\ËšZYÚ[”^[Ï[ÊKšZYÚ[”^[È‹\ËšZYÚ
\Ë˜˜\ÙU[RZYÚ
K\Ë˜[O[ÊK˜[H‹JK\Ëš\ÚX›O[ÊKš\ÚX›H‹L
K\Ëœ›Ü\Y\Ï[ÊKœ›Ü\Y\È‹×JK\Ëš[™^\Ï[ÊKš[™^\È‹×JK\Ë˜ÛÛYR[™^\Ï[ÊK˜ÛÛYR[™^\È‹×JK\Ë˜Ø[˜XÚÜÏ[ÊK˜Ø[˜XÚÜÈ‹×JK\Ë˜›ÙY\Ï[ÊK˜›ÙY\È‹×JK\Ë™]O[ÊK™]H‹×JK\Ë[[X\^Y\[ÊK[[X\^Y\ˆ‹[
K\Ëš^ÚYS[™İ[ÊKš^ÚYS[™İ‹
K\ËœİYÙÙ\^\Ï[ÊKœİYÙÙ\^\È‹HŠK\ËœİYÙÙ\’[™^[ÊKœİYÙÙ\’[™^‹›ÙŠ__JNÜ™^ÜÏ\ŸJKÌLŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆ]
ÍNJKÏ]
LNLÊKÏ]
MMM
K[™]È
Ú[š]X[^™N™[˜İ[ÛŠJ^ÙOOO]›ÚY	‰ŠO^ßJK\Ë›˜[YO[ÊK›˜[YH‹›X\ŠK\ËÚY[ÊKÚY‹
K\ËšZYÚ[ÊKšZYÚ‹
K\Ëš[™š[š]O[ÊKš[™š[š]H‹LJK\Ë[UÚY[ÊK[UÚY‹
K\Ë[RZYÚ[ÊK[RZYÚ‹
K\ËÚY[”^[Ï[ÊKÚY[”^[È‹\ËÚY
\Ë[UÚY
K\ËšZYÚ[”^[Ï[ÊKšZYÚ[”^[È‹\ËšZYÚ
\Ë[RZYÚ
K\Ë™›Ü›X][ÊK™›Ü›X]‹[
K\Ë›ÜšY[][Û[ÊK›ÜšY[][Ûˆ‹Ë“Ô•ÑÓÓS
K\Ëœ™[™\“Ü™\[ÊKœ™[™\“Ü™\ˆ‹œšYÚYİÛˆŠK\Ë™\œÚ[Û[ÊK™\œÚ[Ûˆ‹ŒHŠK\Ëœ›Ü\Y\Ï[ÊKœ›Ü\Y\È‹ßJK\Ë›^Y\œÏ[ÊK›^Y\œÈ‹×JK\Ëš[XYÙ\Ï[ÊKš[XYÙ\È‹×JK\Ë›Øš™XİÏ[ÊK›Øš™XİÈ‹×JK\œ˜^Kš\Ğ\œ˜^J\Ë›Øš™XİÊ_
\Ë›Øš™XİÏV×JK\Ë˜ÛÛ\Ú[Û[ÊK˜ÛÛ\Ú[Ûˆ‹ßJK\Ë[\Ù]Ï[ÊK[\Ù]È‹×JK\Ëš[XYÙPÛÛXİ[ÛœÏ[ÊKš[XYÙPÛÛXİ[ÛœÈ‹×JK\Ë[\Ï[ÊK[\È‹×JK\Ëš^ÚYS[™İ[ÊKš^ÚYS[™İ‹
K\ËœİYÙÙ\^\Ï[ÊKœİYÙÙ\^\È‹HŠK\ËœİYÙÙ\’[™^[ÊKœİYÙÙ\’[™^‹›ÙŠ__JNÜ™^ÜÏ\ŸJKÌŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆ]
ÍNJKÏ]
MMM
KÏ[™]È
Ú[š]X[^™N™[˜İ[ÛŠŠ^ÛOO]›ÚY	‰Š^ßJK\Ë›˜[YOXÊ‹›˜[YH‹›Øš™Xİ^Y\ˆŠK\ËšYXÊ‹šY‹
K\Ë›ÜXÚ]OXÊ‹›ÜXÚ]H‹JK\Ëœ›Ü\Y\ÏXÊ‹œ›Ü\Y\È‹ßJK\Ëœ›Ü\U\\ÏXÊ‹œ›Ü\]\\È‹ßJK\Ë\OXÊ‹\H‹›Øš™XİÜ›İ\ŠK\Ëš\ÚX›OXÊ‹š\ÚX›H‹L
K\Ë›Øš™XİÏXÊ‹›Øš™XİÈ‹×JK\œ˜^Kš\Ğ\œ˜^J\Ë›Øš™XİÊ_
\Ë›Øš™XİÏV×J__JNÜ™^ÜÏ[ßJKNŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆ]
LNLÊKÏY[˜İ[ÛŠÊ^Ü™]\›ˆÏ[ËÓİÙ\Ø\ÙJ
KÏOOHš\ÛÛY]šXÈÛ’TÓÓQU’PÎ›ÏOOHœİYÙÙ\™YÛ”ÕQÑÑT‘Q›ÏOOHš^YÛÛ˜[Û’VQÓÓS›“Ô•ÑÓÓSNÜ™^ÜÏXßJKŒMÍÎŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆ]
ÍJKÏ]
ŒÍŠKÏ]
NLÊK]
NM
K]
ÌŒJKOY[˜İ[ÛŠËKKK
^İ˜\ˆÜİÚ]Ú
J^ØØ\ÙHT”VWÌ‘™XÊËKK
NØœ™XZÎØØ\ÙHÔÕ™[ÊËKK
NØœ™XZÎØØ\ÙH•SQÒ”ÓÓ™\ŠËK
NØœ™XZÎØØ\ÙH•ÑSQRTÕT™[ŠËK
NØœ™XZÎÙY˜][˜ÛÛœÛÛKØ\›Š•[œ™XÛÙÛš^™Y[[X\]H›Ü›X]ˆŠØJK[[\™]\›ˆŸNÜ™^ÜÏY_JKŒÍŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆ]
ÍJKÏ]
MMÍÊKÏ]
ÌL
K]
ŒÌJKY[˜İ[ÛŠKËKK
^Ù›ÜŠ˜\ˆO[™]ÈÊİ[UÚY˜K[RZYÚš_JK[™]ÈÊÛ˜[YN™K[UÚY˜K[RZYÚšK›Ü›X]›T”VWÌ‘^Y\œÎ–İW_JKV×K\Ë›[™İOLLŞË›[™İŞ
ÊÊ^Ù–ŞOV×NÙ›ÜŠ˜\ˆÏ\ÖŞKLÕË›[™İÕ
ÊÊ^İ˜\ˆÏ\\œÙR[
ÖÕKL
NÚ\Ó˜SŠÊ_ÏOOKLOÙ–ŞVÕOZÛ[›™]ÈŠKLKKJN™–ŞVÕO[™]ÈŠKËKJ_[OOOL	‰ŠOYË›[™İ
_\™]\›ˆÚY]KÚY[KšZYÚ]KšZYÚ]‹ÚY[”^[Ï]KÚY[”^[Ï[J˜KšZYÚ[”^[Ï]KšZYÚ[”^[Ï]ŠšKK™]OY‹NÜ™^ÜÏ[ŸJKNLÎŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆ]
ÍJKÏ]
ŒÍŠKÏY[˜İ[ÛŠ‹‹KËJ^İ˜\ˆO[‹š[J
KœÜ]
˜
K›X\
[˜İ[ÛŠJ^Ü™]\›ˆKœÜ]
‹Š_JKXÊ‹KKËJNÜ™]\›ˆ™›Ü›X][ÔÕ‹NÜ™^ÜÏ[ßJKMŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆ]
MMÍÊKÏ]
ŒÌJKÏY[˜İ[ÛŠ‹Š^Ù›ÜŠ˜\ˆOV×KÏLÜÏ‹›^Y\‹›[™İÜÊÊÊ^Ù›ÜŠ˜\ˆO\‹›^Y\–Ü×KO[™]È
Û˜[YN˜K›˜[YKÚY˜KÚYZYÚ˜KšZYÚ[UÚY˜K[\Ú^™K[RZYÚ˜K[\Ú^™Kš\ÚX›N˜Kš\ÚX›OOOL_JKV×KOV×KLÙK™]K›[™İÙ
ÊÊ^Ù›ÜŠ˜\ˆLÙK™]VÙK›[™İÙŠÊÊ^İ˜\ˆXK™]VÙVÙ—KLKNİ‹LOÛO[™]ÈÊK‹‹K[\Ú^™KK[\Ú^™JN›O[Û[›™]ÈÊKLK‹K[\Ú^™KK[\Ú^™JKœ\Ú
J_]Kœ\Ú

KV×_ZK™]O]KKœ\Ú
J_\™]\›ˆ_NÜ™^ÜÏ[ßJKMÎŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆ]
ÌÍŒJKÏY[˜İ[ÛŠÊ^Ù›ÜŠ˜\ˆV×KV×KOLÙOË›^Y\‹›[™İÙJÊÊ^İ˜\ˆÏ[Ë›^Y\–ÙWKO\Ë[\Ù]˜[YNØHOOHˆ‰‰›‹š[™^ÙŠJOOOKLI‰Š‹œ\Ú
JK‹œ\Ú
™]È
KË[\Ú^™KË[\Ú^™K
JJ_\™]\›ˆŸNÜ™^ÜÏXßJKÌŒNŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆ]
ÍJKÏ]
ÌL
KÏ]
MŠK]
MÊKY[˜İ[ÛŠKËJ^ÚYŠË›^Y\‹›[™İOOL
\™]\›ˆÛÛœÛÛKØ\›Š“›È^Y\œÈ›İ[™[ˆHÙ[YZ\İ\ˆX\ˆŠÙJK[Ù›ÜŠ˜\ˆOLLOLİOË›^Y\‹›[™İİJÊÊ\Ë›^Y\–İWKÚYšI‰ŠO\Ë›^Y\–İWKÚY
KË›^Y\–İWKšZYÚš	‰Š\Ë›^Y\–İWKšZYÚ
Nİ˜\ˆ[™]ÈÊİÚYšKZYÚš˜[YN™K[UÚYœË›^Y\–ÌK[\Ú^™K[RZYÚœË›^Y\–ÌK[\Ú^™K›Ü›X]›•ÑSQRTÕTŸJNÜ™]\›ˆ›^Y\œÏ[ÊËJK[\Ù]Ï\ŠÊKNÜ™^ÜÏ[ŸJKLÌÎŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹Ü™^ÜÏ^Ô\œÙU[S^Y\œÎ
MŠK\œÙU[\Ù]Î
MÊK\œÙUÙ[YZ\İ\
ÌŒJ__JKMÍŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹Ü™^ÜÏ^Ñœ›ÛSÜšY[][Û”İš[™Î
JK\œÙN
ŒMÍÊK\œÙL‘\œ˜^N
ŒÍŠK\œÙPÔÕ
NLÊK[\Xİ
LÌÊK[Y
MÍŒJ__JKLLŒÌÎŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆ]
ÎLLJKÏY[˜İ[ÛŠÊ^Ù›ÜŠ˜\ˆ‹‹KËKOLÚOË›^Y\œË›[™İÚJÊÊ^Ü[Ë›^Y\œÖÚWKÏ[[Ù›ÜŠ˜\ˆLÚ‹™]K›[™İÚ
ÊÊ^ØO\‹™]VÚNÙ›ÜŠ˜\ˆOLİOK›[™İİJÊÊ[XVİWKJOO[[‹š[™^
I‰ŠO[Ë[\ÖÛ‹š[™^VÌ—KÏ[Ë[\Ù]ÖÙWK‹ÚY\Ë[UÚY‹šZYÚ\Ë[RZYÚË[T›Ü\Y\É‰œË[T›Ü\Y\ÖÛ‹š[™^\Ë™š\œİÚYI‰Š‹œ›Ü\Y\Ï[
‹œ›Ü\Y\ËË[T›Ü\Y\ÖÛ‹š[™^\Ë™š\œİÚYJJJ___NÜ™^ÜÏXßJKNŠOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆOY[˜İ[ÛŠ
^Ù›ÜŠ˜\ˆ]Ú[™İË˜]ØŠ
KÏ[›[™İÏ[™]È\œ˜^JËÍ
KLÜÎÜŠÏM
[ÖÜ‹ÍOJ˜Ú\ÛÙP]
Š_˜Ú\ÛÙP]
ŠÌJO˜Ú\ÛÙP]
ŠÌŠOMŸ˜Ú\ÛÙP]
ŠÌÊO
OŒÜ™]\›ˆßNÜ™^ÜÏ^_JKLNŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆ]
ÌÍŒJKÏY[˜İ[ÛŠÊ^İ˜\ˆ‹‹OV×NÙ›ÜŠLÜËš[XYÙPÛÛXİ[ÛœË›[™İÜŠÊÊY›ÜŠ˜\ˆÏ[Ëš[XYÙPÛÛXİ[ÛœÖÜ—KO\Ëš[XYÙ\ËOLÚOK›[™İÚJÊÊ^İ˜\ˆXVÚWKO^ŞŒNššZYÚ[Ë[RZYÚNÛ[™]È
š[XYÙK™ÚYÚYšZYÚ›ÚY›ÚYJK‹\]U[Q]JÚYšZYÚ
KË[\Ù]Ëœ\Ú
Š_Y›ÜŠLÜË[\Ù]Ë›[™İÜŠÊÊ^Û[Ë[\Ù]ÖÜ—NÙ›ÜŠ˜\ˆ[‹[SX\™Ú[‹[‹[SX\™Ú[‹LOLLÏ[‹™š\œİÚYÙÏ‹™š\œİÚY
Û‹İ[	‰ŠVÙ×OVÙ‹—K
Ï[‹[UÚY
Û‹[TÜXÚ[™ËŠÊËJOO[‹İ[
JÊËOOO[‹˜ÛÛ[[œÉ‰Š[‹[SX\™Ú[‹ŠÏ[‹[RZYÚ
Û‹[TÜXÚ[™ËOL
ÊËOO[‹œ›İÜÊJJJNÙÊÊÊNß\™]\›ˆ_NÜ™^ÜÏXßJKÎMÍÎŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆÙ]™\œšY\ˆ™\œšY\œĞ]Üİİ]™YO‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆ]
MMM
KÏY[˜İ[ÛŠË‹Š^ÚYŠ\Š\™]\›ÚNŒ^Y\œÎ›Ë›^Y\œË˜[YNˆˆ‹ÜXÚ]NŒKš\ÚX›NˆLŒNŒNİ˜\ˆO\‹
Û
‹œİ\‹
J›Ë[]ÚY
Û
‹›Ù™œÙ]‹
KÏ\‹JÛ
‹œİ\H‹
J›Ë[ZZYÚ
Û
‹›Ù™œÙ]H‹
NÜ™]\›ÚNŒ^Y\œÎœ‹›^Y\œË˜[YN›‹›˜[YJÜ‹›˜[YJÈ‹È‹ÜXÚ]N›‹›ÜXÚ]Jœ‹›ÜXÚ]Kš\ÚX›N›‹š\ÚX›I‰œ‹š\ÚX›K›‹
ÙKN›‹JÜß_NÜ™^ÜÏXßJKNLŒŠOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆOLŒMÍÍLLÌÍÍNMLÍÌLL‹ÏY[˜İ[ÛŠÊ^İ˜\ˆHHJÉJKHHJÉ
KOHHJÉ›
NÛÏ[ÉLÍÌLLNİ˜\ˆÏLOHLNÜ™]\›ˆ‰‰›‰‰™OÊÏSX]”KÌ‹OHL
Nœ‰‰›‰‰ˆYOÊÏSX]”KOHLJNœ‰‰ˆ[‰‰™OÊÏSX]”KÌ‹OHLJNœ‰‰ˆ[‰‰ˆYOÊÏLOHL
Nˆ\‰‰›‰‰™OÊÏLÊ“X]”KÌ‹OHLJNˆ\‰‰›‰‰ˆYOÊÏSX]”KOHL
Nˆ\‰‰ˆ[‰‰™OÊÏLÊ“X]”KÌ‹OHL
Nˆ\‰‰ˆ[‰‰ˆYI‰ŠÏLOHLJKÙÚY›Ë›\YÜš^›Û[œ‹›\Y™\XØ[›‹›\Y[QXYÛÛ˜[™K›İ][ÛœË›\Y˜__NÜ™^ÜÏXßJKLŒÍNŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆ]
MMM
KÏ]
ÎMÍÊKÏY[˜İ[ÛŠŠ^Ù›ÜŠ˜\ˆV×KOV×KÏXÊŠNÜËšOË›^Y\œË›[™İK›[™İŒÊ^ÚYŠËšO\Ë›^Y\œË›[™İ
^ÚYŠK›[™İJ^ØÛÛœÛÛKØ\›Š•[[X\\œÙ\‹œ\œÙU[Y”ÓÓˆH[˜[Y^Y\ˆÜ›İ\Y\˜\˜ÚHŠNØœ™XZß\ÏYKœÜ

NØÛÛ[Y_]˜\ˆO\Ë›^Y\œÖÜËšWNÚYŠËšJÊËK\HOOHš[XYÙ[^Y\ˆŠ^ÚYŠK\OOOH™Ü›İ\Š^İ˜\ˆOXÊ‹KÊNÙKœ\Ú
ÊKÏZ_XÛÛ[Y_]˜\ˆ[
K›Ù™œÙ]‹
JÛ
Kœİ\‹
KO[
K›Ù™œÙ]H‹
JÛ
Kœİ\H‹
NÛ‹œ\Ú
Û˜[YNœË›˜[YJØK›˜[YK[XYÙN˜Kš[XYÙKœË
Ú
ØKNœËJİJØKK[NœË›ÜXÚ]J˜K›ÜXÚ]Kš\ÚX›NœËš\ÚX›I‰˜Kš\ÚX›K›Ü\Y\Î›
Kœ›Ü\Y\È‹ßJ_J_\™]\›ˆŸNÜ™^ÜÏ[ßJKNMŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆ]
LLŒÌÊKÏ]
LJKÏ]
LNLÊK]
Œ
K]
ÍJKO]
JKÏ]
ÌL
KO]
LŒÍJKO]
ŒŒLJK]
Œ
KO]
ŒNJKY[˜İ[ÛŠ‹‹J^İ˜\ˆ\ŠŠKÏ[™]ÈÊİÚYÚYZYÚšZYÚ˜[YN™‹[UÚY[]ÚY[RZYÚ[ZZYÚÜšY[][Û™J›ÜšY[][ÛŠK›Ü›X]›‹•SQÒ”ÓÓ‹™\œÚ[Û™\œÚ[Û‹›Ü\Y\Îœ›Ü\Y\Ë™[™\“Ü™\œ™[™\›Ü™\‹[™š[š]Nš[™š[š]_JNÚYŠË›ÜšY[][ÛOO[Ë’VQÓÓS
ZYŠËš^ÚYS[™İ^š^ÚY[[™İËœİYÙÙ\^\Ï^œİYÙÙ\˜^\ËËœİYÙÙ\’[™^^œİYÙÙ\š[™^ËœİYÙÙ\^\ÏOOHHŠ^İ˜\ˆJË[RZYÚYËš^ÚYS[™İ
KÌÙËÚY[”^[ÏYË[UÚY
ŠËÚY
ËJKËšZYÚ[”^[ÏYËšZYÚ
ŠËš^ÚYS[™İ
Õ
JÕY[Ù^İ˜\ˆÏJË[UÚYYËš^ÚYS[™İ
KÌÙËÚY[”^[ÏYËÚY
ŠËš^ÚYS[™İ
ÔÊJÔËËšZYÚ[”^[ÏYË[RZYÚ
ŠËšZYÚ
ËJ_YË›^Y\œÏZ
JKËš[XYÙ\ÏXJ
Nİ˜\ˆÏ]J
NÜ™]\›ˆË[\Ù]ÏPË[\Ù]ËËš[XYÙPÛÛXİ[ÛœÏPËš[XYÙPÛÛXİ[ÛœËË›Øš™XİÏZJ
KË[\ÏXÊÊK
ÊKßNÜ™^ÜÏYJKLŒŒNŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆ]
NM
KÏ]
NLŒ
KÏY[˜İ[ÛŠJ^Ü™]\›Ş™KN™K__KVÈšY‹›˜[YH‹\H‹œ›İ][Ûˆ‹œ›Ü\Y\È‹š\ÚX›H‹‹H‹ÚY‹šZYÚ—KY[˜İ[ÛŠKËJ^ÜÏOO]›ÚY	‰ŠÏL
KOOO]›ÚY	‰ŠOL
Nİ˜\ˆO[
KŠNÚYŠK
Ï\ËKJÏXKK™ÚY
^İ˜\ˆXÊK™ÚY
NÚK™ÚYZ™ÚYK™›\YÜš^›Û[Z™›\YÜš^›Û[K™›\Y™\XØ[Z™›\Y™\XØ[K™›\Y[QXYÛÛ˜[Z™›\Y[QXYÛÛ˜[Y[ÙHKœÛ[[™OÚKœÛ[[™OYKœÛ[[™K›X\
ÊN™KœÛYÛÛÚKœÛYÛÛYKœÛYÛÛ‹›X\
ÊN™K™[\ÙOÚK™[\ÙOYK™[\ÙN™K^ÚK^YK^™KœÚ[ÚKœÚ[HLšKœ™Xİ[™ÛOHLÜ™]\›ˆ_NÜ™^ÜÏ[ŸJKŒŒLNŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆ]
MMM
KÏ]
LŒŒJKÏ]
Ì
K]
ÎMÍÊKY[˜İ[ÛŠJ^Ù›ÜŠ˜\ˆÏV×KOV×KO\ŠJNÚKšOK›^Y\œË›[™İK›[™İŒÊ^ÚYŠKšOZK›^Y\œË›[™İ
^ÚYŠK›[™İJ^ØÛÛœÛÛKØ\›Š•[[X\\œÙ\‹œ\œÙU[Y”ÓÓˆH[˜[Y^Y\ˆÜ›İ\Y\˜\˜ÚHŠNØœ™XZßZOXKœÜ

NØÛÛ[Y_]˜\ˆZK›^Y\œÖÚKšWNÚYŠKšJÊË›ÜXÚ]JZK›ÜXÚ]Kš\ÚX›OZKš\ÚX›I‰šš\ÚX›K\HOOH›Øš™XİÜ›İ\Š^ÚYŠ\OOOH™Ü›İ\Š^İ˜\ˆO\ŠKJNØKœ\Ú
JKO]_XÛÛ[Y_Z›˜[YOZK›˜[YJÚ›˜[YNÙ›ÜŠ˜\ˆZK
Û
œİ\‹
JÛ
›Ù™œÙ]‹
KZKJÛ
œİ\H‹
JÛ
›Ù™œÙ]H‹
KV×KOLÛO›Øš™XİË›[™İÛJÊÊ^İ˜\ˆXÊ›Øš™XİÖÛWKŠNİ‹œ\Ú

_]˜\ˆÏ[™]ÈÊ
NÙË›Øš™XİÏ]‹Ëœ\Ú
Ê_\™]\›ˆßNÜ™^ÜÏ[ŸJKŒŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆ]
N
KÏ]
LNLÊKÏ]
ÎMÍÊK]
JK]
MMM
KO]
MMÍÊKÏ]
NLŒ
KO]
ŒÌJKOY[˜İ[ÛŠJ^Ù›ÜŠ˜\ˆ[Šš[™š[š]H‹LJKV×KV×KO[Ê
NÛKšOK›^Y\œË›[™İ‹›[™İŒÊ^ÚYŠKšO[K›^Y\œË›[™İ
^ÚYŠ‹›[™İJ^ØÛÛœÛÛKØ\›Š•[[X\\œÙ\‹œ\œÙU[Y”ÓÓˆH[˜[Y^Y\ˆÜ›İ\Y\˜\˜ÚHŠNØœ™XZß[O]‹œÜ

NØÛÛ[Y_]˜\ˆ[K›^Y\œÖÛKšWNÚYŠKšJÊË\HOOH[[^Y\ˆŠ^ÚYŠ\OOOH™Ü›İ\Š^İ˜\ˆÏ[ÊJNİ‹œ\Ú
JKOYßXÛÛ[Y_ZYŠ˜ÛÛ\™\ÜÚ[ÛŠ^ØÛÛœÛÛKØ\›Š•[[X\\œÙ\‹œ\œÙU[Y”ÓÓˆH^Y\ˆÛÛ\™\ÜÚ[Ûˆ\È[œİ\ÜYÚÚ\[™È^Y\ˆ	ÈŠŞ›˜[YJÈ‰ÈŠNØÛÛ[Y_Y[ÙHYŠ™[˜ÛÙ[™É‰™[˜ÛÙ[™ÏOOH˜˜\ÙMŠ^ÚYŠ˜Ú[šÜÊY›ÜŠ˜\ˆLÕ˜Ú[šÜË›[™İÕ
ÊÊ^˜Ú[šÜÖÕK™]O[
˜Ú[šÜÖÕK™]JNŞ™]I‰Š™]O[
™]JJK[]H™[˜ÛÙ[™ß]˜\ˆËËKKKV×KLÚYŠ
^İ˜\ˆÏ[Šœİ\‹
JŞ[Šœİ\H‹
JŞNÔÏ[™]ÈJÛ˜[YN›K›˜[YJŞ›˜[YKYšY›K
ÛŠ›Ù™œÙ]‹
JİÊš[]ÚYN›KJÛŠ›Ù™œÙ]H‹
JÓŠš[ZZYÚÚYÚYZYÚšZYÚ[UÚYš[]ÚY[RZYÚš[ZZYÚ[N›K›ÜXÚ]J›ÜXÚ]Kš\ÚX›N›Kš\ÚX›I‰š\ÚX›K›Ü\Y\Î›Šœ›Ü\Y\È‹×JKÜšY[][ÛœŠ›ÜšY[][ÛŠ_JKË›ÜšY[][ÛOOXË’VQÓÓS	‰ŠËš^ÚYS[™İZš^ÚY[[™İËœİYÙÙ\^\ÏZœİYÙÙ\˜^\ËËœİYÙÙ\’[™^ZœİYÙÙ\š[™^ËœİYÙÙ\^\ÏOOHHÊOJË[RZYÚTËš^ÚYS[™İ
KÌ‹ËÚY[”^[ÏTË[UÚY
ŠËÚY
ËJKËšZYÚ[”^[ÏTËšZYÚ
ŠËš^ÚYS[™İ
ĞJJĞJNŠOJË[UÚYTËš^ÚYS[™İ
KÌ‹ËÚY[”^[ÏTËÚY
ŠËš^ÚYS[™İ
ÓJJÓKËšZYÚ[”^[ÏTË[RZYÚ
ŠËšZYÚ
ËJJJNÙ›ÜŠ˜\ˆLØšZYÚØŠÊÊ^Ô–Ø—OVÛ[NÙ›ÜŠ˜\ˆLŞÚYŞŠÊÊT–Ø—VŞ—O[[Y›ÜŠLO^˜Ú[šÜË›[™İØNØŠÊÊY›ÜŠ˜\ˆ^˜Ú[šÜÖØ—KQ]ËQKS‹OLÏLQ™]K›[™İÓÏÓÊÊÊ^İ˜\ˆS
Ğ‹UJÑĞÏ\Ê™]VÓ×JKË™ÚYŒÊO[™]ÈJËË™ÚY‹[]ÚY[ZZYÚ
KKœ›İ][ÛPËœ›İ][Û‹K™›\PË™›\Y–Ö—VÒOQJNŠ]OÛ[›™]ÈJËLK‹[]ÚY[ZZYÚ
K–Ö—VÒOT
K
ÊËOOQÚY	‰ŠJÊËL
__Y[Ù^ÔÏ[™]ÈJÛ˜[YN›K›˜[YJŞ›˜[YKYšY›K
ÛŠ›Ù™œÙ]‹
JŞN›KJÛŠ›Ù™œÙ]H‹
JŞKÚYÚYZYÚšZYÚ[UÚYš[]ÚY[RZYÚš[ZZYÚ[N›K›ÜXÚ]J›ÜXÚ]Kš\ÚX›N›Kš\ÚX›I‰š\ÚX›K›Ü\Y\Î›Šœ›Ü\Y\È‹×JKÜšY[][ÛœŠ›ÜšY[][ÛŠ_JKË›ÜšY[][ÛOOXË’VQÓÓS	‰ŠËš^ÚYS[™İZš^ÚY[[™İËœİYÙÙ\^\ÏZœİYÙÙ\˜^\ËËœİYÙÙ\’[™^ZœİYÙÙ\š[™^ËœİYÙÙ\^\ÏOOHHÊOJË[RZYÚTËš^ÚYS[™İ
KÌ‹ËÚY[”^[ÏTË[UÚY
ŠËÚY
ËJKËšZYÚ[”^[ÏTËšZYÚ
ŠËš^ÚYS[™İ
ĞJJĞJNŠOJË[UÚYTËš^ÚYS[™İ
KÌ‹ËÚY[”^[ÏTËÚY
ŠËš^ÚYS[™İ
ÓJJÓKËšZYÚ[”^[ÏTË[RZYÚ
ŠËšZYÚ
ËJJJNÙ›ÜŠ˜\ˆV×K	LO^™]K›[™İÉNÉ
ÊÊPÏ\Ê™]VÉJKË™ÚYŒÊO[™]ÈJËË™ÚY‹›[™İ[]ÚY[ZZYÚ
KKœ›İ][ÛPËœ›İ][Û‹K™›\PË™›\Y‹œ\Ú
JJNŠ]OÛ[›™]ÈJËLK‹›[™İ[]ÚY[ZZYÚ
K‹œ\Ú

JK
ÊËOO^ÚY	‰Š‹œ\Ú
ŠKLV×J_TË™]OT‹‹œ\Ú
Ê_\™]\›ˆŸNÜ™^ÜÏZ_JKŒNNŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆ]
ÌÍŒJKÏ]
MLÍŠKÏ]
LŒŒJK]
MÎ
KY[˜İ[ÛŠJ^Ù›ÜŠ˜\ˆÏV×KOV×KO[[OLİOK[\Ù]Ë›[™İİJÊÊ^İ˜\ˆYK[\Ù]ÖİWNÚYŠœÛİ\˜ÙJXÛÛœÛÛKØ\›Š‘^\›˜[[\Ù]È[œİ\ÜYˆ\ÙH[X™Y[\Ù][™™KY^ÜŠNÙ[ÙHYŠš[XYÙJ^İ˜\ˆ[™]È
›˜[YK™š\œİÚY[]ÚY[ZZYÚ›X\™Ú[‹œÜXÚ[™Ë›ÚY›ÚY[[Ù™œÙ]
NÚYŠK™\œÚ[ÛŒJ^İ˜\ˆ]›ÚYO]›ÚYÚYŠ\œ˜^Kš\Ğ\œ˜^J[\ÊJ^İ]ŸßKO[_ßNÙ›ÜŠ˜\ˆLŞ[\Ë›[™İŞ
ÊÊ^İ˜\ˆÏY[\ÖŞNÚYŠËœ›Ü\Y\Ê^İ˜\ˆ^ßNÙËœ›Ü\Y\Ë™›Ü‘XXÚ
[˜İ[ÛŠŠ^ÕØ‹›˜[YWOX‹˜[Y_JKVÙËšYOUZYŠË›Øš™XİÜ›İ\	‰Š
–ÙËšY_
–ÙËšYO^ßJJK›Øš™XİÜ›İ\YË›Øš™XİÜ›İ\Ë›Øš™XİÜ›İ\›Øš™XİÊJ^İ˜\ˆÏYË›Øš™XİÜ›İ\›Øš™XİË›X\
[˜İ[ÛŠŠ^Ü™]\›ˆÊŠ_JNİ–ÙËšYK›Øš™XİÜ›İ\›Øš™XİÏTßYË˜[š[X][Û‰‰Š
–ÙËšY_
–ÙËšYO^ßJJK˜[š[X][ÛYË˜[š[X][ÛŠKË\I‰Š
–ÙËšY_
–ÙËšYO^ßJJK\OYË\J__P\œ˜^Kš\Ğ\œ˜^JØ[™ÜÙ]ÊI‰Š]ŸßKO[_ßKŠØ[™ÜÙ]ËŠJK‰‰Š‹[Q]O]‹‹[T›Ü\Y\Ï[J_Y[ÙHYŠ[\›Ü\Y\É‰Š‹[T›Ü\Y\ÏY[\›Ü\Y\ÊK[\Ê^Ù‹[Q]OY[\ÎÙ›ÜŠ[ˆ‹[Q]J^İ˜\ˆÏY‹[Q]VÚK›Øš™XİÜ›İ\ÚYŠÉ‰Ë›Øš™XİÊ^İ˜\ˆOPË›Øš™XİË›X\
[˜İ[ÛŠŠ^Ü™]\›ˆÊŠ_JNÙ‹[Q]VÚK›Øš™XİÜ›İ\›Øš™XİÏQ___Y‹\]U[Q]Jš[XYÙ]ÚYš[XYÙZZYÚ
KËœ\Ú
Š_Y[Ù^İ˜\ˆ[™]ÈÊ›˜[YK™š\œİÚY[]ÚY[ZZYÚ›X\™Ú[‹œÜXÚ[™Ëœ›Ü\Y\ÊKOLÙ›ÜŠLŞ[\Ë›[™İŞ
ÊÊ^ÙÏY[\ÖŞNİ˜\ˆOYËš[XYÙK\\œÙR[
ËšYL
KY™š\œİÚY
Ô‹ÏYËš[XYÙ]ÚYYËš[XYÙZZYÚÔ˜Y[XYÙJKËŠKOSX]›X^
‹J_T›X^YPKKœ\Ú

_ZI‰ŠK›\İÚYY™š\œİÚYLJKOY\™]\›İ[\Ù]ÎœË[XYÙPÛÛXİ[ÛœÎ˜__NÜ™^ÜÏ[ŸJKMÎŠOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆOY[˜İ[ÛŠ
^Ù›ÜŠ˜\ˆÏLØÏ›[™İØÊÊÊ^İ˜\ˆÏ]Ø×KXÎÚYŠË›˜[YI‰›Ë›˜[YHOOHˆ‰‰Š[Ë›˜[YJK\œ˜^Kš\Ğ\œ˜^JËØ[™İ[\ÊI‰›ËØ[™İ[\Ë›[™İŒ
^İ˜\ˆ^ßKO^ßKËKNÚYŠ\œ˜^Kš\Ğ\œ˜^JË™YÙXÛÛÜœÊJY›ÜŠÏLÜÏË™YÙXÛÛÜœË›[™İÜÊÊÊZOLJÜËO[Ë™YÙXÛÛÜœÖÜ×KK›˜[YHOOHˆ‰‰Š–ÚWOXK›˜[YJNÚYŠ\œ˜^Kš\Ğ\œ˜^JË˜ÛÜ›™\˜ÛÛÜœÊJY›ÜŠÏLÜÏË˜ÛÜ›™\˜ÛÛÜœË›[™İÜÊÊÊZOLJÜËO[Ë˜ÛÜ›™\˜ÛÛÜœÖÜ×KK›˜[YHOOHˆ‰‰ŠVÚWOXK›˜[YJNÚYŠ\œ˜^Kš\Ğ\œ˜^JË˜ÛÛÜœÊJY›ÜŠÏLÜÏË˜ÛÛÜœË›[™İÜÊÊÊXO[Ë˜ÛÛÜœÖÜ×KOLJÜËK›˜[YHOOHˆ‰‰Š–ÚWOYVÚWOXK›˜[YJNÙ›ÜŠ˜\ˆVÛ‹K‹K‹K‹WKOLİOËØ[™İ[\Ë›[™İİJÊÊ^İ˜\ˆ[ËØ[™İ[\ÖİWK[Ù[ZY_
Ù[ZYO^ßJNÙY‹Ø[™ÚY
‹Ø[™ÚY^ßJNÙ›ÜŠ˜\ˆV×KOLÛOX]›Z[Š›[™İØ[™ÚY›[™İ
NÛJÊÊ^ÚYŠOYØ[™ÚYÛWKOOOL
^İ‹œ\Ú
›ÚY
NØÛÛ[Y_]˜\ˆZÛWVØWNÚYŠOO]›ÚY
^İ‹œ\Ú

NØÛÛ[Y_]‹œ\Ú
J_Y–Ü—O]Ÿ___NÜ™^ÜÏ^_JKMÍŒNŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹Ü™^ÜÏ^Ğ\ÜÚYÛ•[T›Ü\Y\Î
LLŒÌÊK˜\ÙMXÛÙN
N
KZ[[\Ù][™^
LJKÜ™X]QÜ›İ\^Y\
ÎMÍÊK\œÙQÒQ
NLŒ
K\œÙR[XYÙS^Y\œÎ
LŒÍJK\œÙR”ÓÓ•[Y
NM
K\œÙSØš™Xİ
LŒŒJK\œÙSØš™Xİ^Y\œÎ
ŒŒLJK\œÙU[S^Y\œÎ
Œ
K\œÙU[\Ù]Î
ŒNJ__JKÌÌÎNŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆ]
ÍNJKÏ]
ÍÌÍÊKÏ]
NM
K]
M
K]
ÌLJKO[™]È
Ú[š]X[^™N™[˜İ[ÛŠJ^İ\ËœØÙ[™OXK\ËœŞ\İ[\ÏXKœŞ\Ë\Ë››İÏL\Ëœİ\[YOL\Ë[YTØØ[OLK\Ëœ]\ÙYHLK\Ë—ØXİ]™OV×K\Ë—Ü[™[™Ò[œÙ\[ÛV×K\Ë—Ü[™[™Ô™[[İ˜[V×KKœŞ\Ë™]™[Ë›Û˜ÙJË“ÓÕ\Ë˜›Ûİ\ÊKKœŞ\Ë™]™[Ë›ÛŠË”ÕT•\Ëœİ\\Ê_K›Ûİ™[˜İ[ÛŠ
^İ\Ë››İÏ]\ËœŞ\İ[\Ë™Ø[YK›ÛÜ[YK\ËœŞ\İ[\Ë™]™[Ë›Û˜ÙJË‘TÕ“ÖK\Ë™\İ›ŞK\Ê_Kİ\™[˜İ[ÛŠ
^İ\Ëœİ\[YO]\ËœŞ\İ[\Ë™Ø[YK›ÛÜ[YNİ˜\ˆÏ]\ËœŞ\İ[\Ë™]™[ÎÜË›ÛŠË”‘WÕTUK\Ëœ™U\]K\ÊKË›ÛŠË•TUK\Ë\]K\ÊKË›Û˜ÙJË”ÒUÕÓ‹\ËœÚ]İÛ‹\Ê_KY]™[™[˜İ[ÛŠÊ^İ˜\ˆNÚYŠÈ[œİ[˜Ù[ÙˆŠ^ÚYŠO\Ë\Ëœ™[[İ™Q]™[
JKK™[\ÙYXKœİ\]Kš\Ñ\Ü]ÚYHLKKœ™\X]Ûİ[XKœ™\X]OOKL_K›ÛÜÎNNNNNNNNNNNN˜Kœ™\X]K™[^OL	‰˜Kœ™\X]Ûİ[Œ
]›İÈ™]È\œ›ÜŠ•[Y\‘]™[[™š[š]HÛÜÜ™X]YšXH™\›È[^HŠ_Y[ÙHO[™]ÈŠÊNÜ™]\›ˆ\Ë—Ü[™[™Ò[œÙ\[Û‹œ\Ú
JK_K[^YYØ[™[˜İ[ÛŠËKK
^Ü™]\›ˆ\Ë˜Y]™[
Ù[^NœËØ[˜XÚÎ˜K\™ÜÎšKØ[˜XÚÔØÛÜNšJ_KÛX\”[™[™Ñ]™[Î™[˜İ[ÛŠ
^Ü™]\›ˆ\Ë—Ü[™[™Ò[œÙ\[ÛV×K\ßK™[[İ™Q]™[™[˜İ[ÛŠÊ^Ğ\œ˜^Kš\Ğ\œ˜^JÊ_
ÏVÜ×JNÙ›ÜŠ˜\ˆOLØOË›[™İØJÊÊ^İ˜\ˆO\ÖØWNÛŠ\Ë—Ü[™[™Ô™[[İ˜[JKŠ\Ë—Ü[™[™Ò[œÙ\[Û‹JKŠ\Ë—ØXİ]™KJ_\™]\›ˆ\ßK™[[İ™P[]™[Î™[˜İ[ÛŠ
^Ü™]\›ˆ\Ë—Ü[™[™Ô™[[İ˜[]\Ë—Ü[™[™Ô™[[İ˜[˜ÛÛ˜Ø]
\Ë—ØXİ]™JK\ßK™U\]N™[˜İ[ÛŠ
^İ˜\ˆÏ]\Ë—Ü[™[™Ô™[[İ˜[›[™İO]\Ë—Ü[™[™Ò[œÙ\[Û‹›[™İÚYŠJÏOOL	‰˜OOOL
J^İ˜\ˆKÙ›ÜŠOLÚOÎÚJÊÊ^Ú]\Ë—Ü[™[™Ô™[[İ˜[ÚWNİ˜\ˆO]\Ë—ØXİ]™Kš[™^ÙŠ
NİO‹LI‰\Ë—ØXİ]™KœÜXÙJKJK™\İ›ŞJ
_Y›ÜŠOLÚONÚJÊÊZ]\Ë—Ü[™[™Ò[œÙ\[Û–ÚWK\Ë—ØXİ]™Kœ\Ú

Nİ\Ë—Ü[™[™Ô™[[İ˜[›[™İL\Ë—Ü[™[™Ò[œÙ\[Û‹›[™İL_K\]N™[˜İ[ÛŠËJ^ÚYŠ\Ë››İÏ\Ë]\Ëœ]\ÙY
^ØJ]\Ë[YTØØ[NÙ›ÜŠ˜\ˆOLÚO\Ë—ØXİ]™K›[™İÚJÊÊ^İ˜\ˆ]\Ë—ØXİ]™VÚWNÚYŠZœ]\ÙY	‰Š™[\ÙY
ÏXJš[YTØØ[K™[\ÙYZ™[^JJ^İ˜\ˆOZ™[\ÙYZ™[^NÚYŠ™[\ÙYZ™[^KZš\Ñ\Ü]ÚY	‰š˜Ø[˜XÚÉ‰Šš\Ñ\Ü]ÚYHL˜Ø[˜XÚË˜\J˜Ø[˜XÚÔØÛÜK˜\™ÜÊJKœ™\X]Ûİ[Œ
^ÚYŠœ™\X]Ûİ[KKOZ™[^JY›ÜŠİOZ™[^I‰šœ™\X]Ûİ[ŒÊZ˜Ø[˜XÚÉ‰š˜Ø[˜XÚË˜\J˜Ø[˜XÚÔØÛÜK˜\™ÜÊKKOZ™[^Kœ™\X]Ûİ[KNÚ™[\ÙY]Kš\Ñ\Ü]ÚYHL_Y[ÙHš\Ñ\Ü]ÚY	‰\Ë—Ü[™[™Ô™[[İ˜[œ\Ú

____KÚ]İÛ™[˜İ[ÛŠ
^İ˜\ˆÎÙ›ÜŠÏLÜÏ\Ë—Ü[™[™Ò[œÙ\[Û‹›[™İÜÊÊÊ]\Ë—Ü[™[™Ò[œÙ\[Û–Ü×K™\İ›ŞJ
NÙ›ÜŠÏLÜÏ\Ë—ØXİ]™K›[™İÜÊÊÊ]\Ë—ØXİ]™VÜ×K™\İ›ŞJ
NÙ›ÜŠÏLÜÏ\Ë—Ü[™[™Ô™[[İ˜[›[™İÜÊÊÊ]\Ë—Ü[™[™Ô™[[İ˜[Ü×K™\İ›ŞJ
Nİ\Ë—ØXİ]™K›[™İL\Ë—Ü[™[™Ô™[[İ˜[›[™İL\Ë—Ü[™[™Ò[œÙ\[Û‹›[™İLİ˜\ˆO]\ËœŞ\İ[\Ë™]™[ÎØK›Ù™ŠË”‘WÕTUK\Ëœ™U\]K\ÊKK›Ù™ŠË•TUK\Ë\]K\ÊKK›Ù™ŠË”ÒUÕÓ‹\ËœÚ]İÛ‹\Ê_K\İ›ŞN™[˜İ[ÛŠ
^İ\ËœÚ]İÛŠ
K\ËœØÙ[™KœŞ\Ë™]™[Ë›Ù™ŠË”ÕT•\Ëœİ\\ÊK\ËœØÙ[™O[[\ËœŞ\İ[\Ï[[_JNØËœ™YÚ\İ\ŠÛØÚÈ‹K[YHŠK™^ÜÏY_JKMŒLŒŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆ]
ÍNJKÏ]
LÎLŠKÏ]
ÎMJK]
MMM
K]
NM
KO]
NJKÏ[™]È
Ñ^[™Î˜Ë[š]X[^™N™[˜İ[ÛŠK
^ØË˜Ø[
\ÊK\ËœØÙ[™OZK\ËœŞ\İ[\ÏZKœŞ\Ë\Ë™[\ÙYL\Ë[YTØØ[OLK\Ëœ]\ÙYHL\Ë˜ÛÛ\]OHLK\Ëİ[ÛÛ\]OL\Ë›ÛÜL\Ëš]\˜][ÛL\Ë™]™[ÏV×Nİ˜\ˆO]\ËœŞ\İ[\Ë™]™[ÎİK›ÛŠ‹”‘WÕTUK\Ëœ™U\]K\ÊKK›ÛŠ‹•TUK\Ë\]K\ÊKK›Û˜ÙJ‹”ÒUÕÓ‹\Ë™\İ›ŞK\ÊK	‰\Ë˜Y

_K™U\]N™[˜İ[ÛŠKJ^İ\Ëœ]\ÙY
\Ë™[\ÙY
ÏZJ\Ë[YTØØ[J_K\]N™[˜İ[ÛŠ
^ÚYŠJ\Ëœ]\ÙY\Ë˜ÛÛ\]JJ^İ˜\ˆKO]\Ë™]™[ËHLKO]\ËœŞ\İ[\ËÙ›ÜŠOLØOK›[™İØJÊÊ^İ˜\ˆZVØWNÚYŠY‹˜ÛÛ\]I‰™‹[YO]\Ë™[\ÙY
^ÚYŠ‹˜ÛÛ\]OHL\Ëİ[ÛÛ\]JÊËY‹\™Ù]Ù‹\™Ù]\Ë‹šY‰‰ˆY‹šY‹˜Ø[
ŠJXÛÛ[YNÚYŠ‹›Û˜ÙI‰ŠHL
K‹œÙ]	‰™‹\™Ù]
Y›ÜŠ˜\ˆˆ[ˆ‹œÙ]
Y‹\™Ù]İ—OY‹œÙ]İ—Nİ\Ëš]\˜][Û‰‰™‹œ™\X]
ÊË‹›ÛÜ	‰™‹œ™\X]	‰™‹›ÛÜ˜Ø[

K‹ÙY[‰‰Š‹ÙY[’[œİ[˜ÙO]KÙY[œË˜Y
‹ÙY[ŠJK‹œÛİ[™	‰Š\[Ùˆ‹œÛİ[™OHœİš[™ÈİKœÛİ[™œ^J‹œÛİ[™
NKœÛİ[™œ^J‹œÛİ[™šÙ^K‹œÛİ[™˜ÛÛ™šYÊJK‹™]™[	‰\Ë™[Z]
‹™]™[
K‹œ[‰‰™‹œ[‹˜Ø[

K‹œİÜ	‰\ËœİÜ

__ZYŠ
Y›ÜŠOLØOK›[™İØJÊÊZVØWK˜ÛÛ\]I‰šVØWK›Û˜ÙI‰ŠKœÜXÙJKJKKKJNİ\Ëİ[ÛÛ\]OZK›[™İ	‰Š\Ë›ÛÜOOL	‰Š\Ë›ÛÜOOKL_\Ë›ÛÜ\Ëš]\˜][ÛŠOÊ\Ëš]\˜][ÛŠÊË\Ëœ™\Ù]
L
JN\Ë˜ÛÛ\]OHL
K\Ë˜ÛÛ\]I‰\Ë™[Z]
KÓÓTUK\Ê__K^N™[˜İ[ÛŠJ^Ü™]\›ˆOOO]›ÚY	‰ŠOHL
K\Ëœ]\ÙYHLK\Ë˜ÛÛ\]OHLK\Ëİ[ÛÛ\]OLI‰\Ëœ™\Ù]

K\ßK]\ÙN™[˜İ[ÛŠ
^İ\Ëœ]\ÙYHLÙ›ÜŠ˜\ˆO]\Ë™]™[ËOLÚOK›[™İÚJÊÊ^İ˜\ˆXVÚWNÚÙY[’[œİ[˜ÙI‰ŠÙY[’[œİ[˜ÙKœ]\ÙYHL
_\™]\›ˆ\ßK™\X]™[˜İ[ÛŠJ^Ü™]\›ŠOOO]›ÚYOOOHL
I‰ŠOKLJKOOOHLI‰ŠOL
K\Ë›ÛÜXK\ßK™\İ[YN™[˜İ[ÛŠ
^İ\Ëœ]\ÙYHLNÙ›ÜŠ˜\ˆO]\Ë™]™[ËOLÚOK›[™İÚJÊÊ^İ˜\ˆXVÚWNÚÙY[’[œİ[˜ÙI‰ŠÙY[’[œİ[˜ÙKœ]\ÙYHLJ_\™]\›ˆ\ßKİÜ™[˜İ[ÛŠ
^Ü™]\›ˆ\Ëœ]\ÙYHL\Ë˜ÛÛ\]OHL\ßK™\Ù]™[˜İ[ÛŠJ^ØOOO]›ÚY	‰ŠOHLJK\Ë™[\ÙYL_
\Ëš]\˜][ÛL
NÙ›ÜŠ˜\ˆO]\Ë™]™[ËLÚK›[™İÚ
ÊÊ^İ˜\ˆOZVÚNİK˜ÛÛ\]OHLK_
Kœ™\X]L
KKÙY[’[œİ[˜ÙI‰KÙY[’[œİ[˜ÙKœİÜ

_\™]\›ˆ\Ëœ^JLJ_KY™[˜İ[ÛŠJ^Ğ\œ˜^Kš\Ğ\œ˜^JJ_
OVØWJNİ˜\ˆO]\Ë™]™[ËLÚK›[™İŒ	‰ŠZVÚK›[™İLWK[YJNÙ›ÜŠ˜\ˆOLİOK›[™İİJÊÊ^İ˜\ˆXVİWK\Š˜]‹
K\Šš[ˆ‹[
NİˆOO[[	‰Š]\Ë™[\ÙY
İŠNİ˜\ˆO\Š™œ›ÛH‹[
NÛHOO[[	‰ŠZ
ÛJKKœ\Ú
ØÛÛ\]NˆLK[YN™‹™\X]ŒYœŠšYˆ‹[
K[œŠœ[ˆ‹[
KÛÜœŠ›ÛÜ‹[
K]™[œŠ™]™[‹[
K\™Ù]œŠ\™Ù]‹[
KÙ]œŠœÙ]‹[
KÙY[œŠÙY[ˆ‹[
KÛİ[™œŠœÛİ[™‹[
KÛ˜ÙNœŠ›Û˜ÙH‹LJKİÜœŠœİÜ‹LJ_JKYŸ\™]\›ˆ\Ë˜ÛÛ\]OHLK\ßKÛX\™[˜İ[ÛŠ
^Ù›ÜŠ˜\ˆO]\Ë™]™[ËOLÚOK›[™İÚJÊÊ^İ˜\ˆXVÚWNÚÙY[’[œİ[˜ÙI‰šÙY[’[œİ[˜ÙKœİÜ

_\™]\›ˆOV×K\Ë™[\ÙYL\Ëœ]\ÙYHL\ßK\Ô^Z[™Î™[˜İ[ÛŠ
^Ü™]\›ˆ]\Ëœ]\ÙY	‰ˆ]\Ë˜ÛÛ\]_KÙ]›ÙÜ™\ÜÎ™[˜İ[ÛŠ
^İ˜\ˆOSX]›Z[Š\Ëİ[ÛÛ\]K\Ë™]™[Ë›[™İ
NÜ™]\›ˆKİ\Ë™]™[Ë›[™İK\İ›ŞN™[˜İ[ÛŠ
^İ˜\ˆO]\ËœŞ\İ[\Ë™]™[ÎØK›Ù™Š‹”‘WÕTUK\Ëœ™U\]K\ÊKK›Ù™Š‹•TUK\Ë\]K\ÊKK›Ù™Š‹”ÒUÕÓ‹\Ë™\İ›ŞK\ÊK\Ë˜ÛX\Š
K\ËœØÙ[™O[[\ËœŞ\İ[\Ï[[_JNÛËœ™YÚ\İ\Š[Y[[™H‹[˜İ[ÛŠJ^Ü™]\›ˆ™]ÈÊ\ËœØÙ[™KJ_JK™^ÜÏ\ßJKMŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆ]
ÍNJKÏ]
MMM
KÏ[™]È
Ú[š]X[^™N™[˜İ[ÛŠŠ^İ\Ë™[^OL\Ëœ™\X]L\Ëœ™\X]Ûİ[L\Ë›ÛÜHLK\Ë˜Ø[˜XÚË\Ë˜Ø[˜XÚÔØÛÜK\Ë˜\™ÜË\Ë[YTØØ[OLK\Ëœİ\]L\Ë™[\ÙYL\Ëœ]\ÙYHLK\Ëš\Ñ\Ü]ÚYHLK\Ëœ™\Ù]
Š_K™\Ù]™[˜İ[ÛŠŠ^ÚYŠ\Ë™[^OXÊ‹™[^H‹
K\Ëœ™\X]XÊ‹œ™\X]‹
K\Ë›ÛÜXÊ‹›ÛÜ‹LJK\Ë˜Ø[˜XÚÏXÊ‹˜Ø[˜XÚÈ‹›ÚY
K\Ë˜Ø[˜XÚÔØÛÜOXÊ‹˜Ø[˜XÚÔØÛÜH‹\ÊK\Ë˜\™ÜÏXÊ‹˜\™ÜÈ‹×JK\Ë[YTØØ[OXÊ‹[YTØØ[H‹JK\Ëœİ\]XÊ‹œİ\]‹
K\Ëœ]\ÙYXÊ‹œ]\ÙY‹LJK\Ë™[\ÙY]\Ëœİ\]\Ëš\Ñ\Ü]ÚYHLK\Ëœ™\X]Ûİ[]\Ëœ™\X]OOKL_\Ë›ÛÜÎNNNNNNNNNNNN\Ëœ™\X]\Ë™[^OL	‰\Ëœ™\X]Ûİ[Œ
]›İÈ™]È\œ›ÜŠ•[Y\‘]™[[™š[š]HÛÜÜ™X]YšXH™\›È[^HŠNÜ™]\›ˆ\ßKÙ]›ÙÜ™\ÜÎ™[˜İ[ÛŠ
^Ü™]\›ˆ\Ë™[\ÙYİ\Ë™[^_KÙ]İ™\˜[›ÙÜ™\ÜÎ™[˜İ[ÛŠ
^ÚYŠ\Ëœ™\X]Œ
^İ˜\ˆ]\Ë™[^Jİ\Ë™[^J\Ëœ™\X]]\Ë™[\ÙY
İ\Ë™[^JŠ\Ëœ™\X]]\Ëœ™\X]Ûİ[
NÜ™]\›ˆ‹ÜŸY[ÙH™]\›ˆ\Ë™Ù]›ÙÜ™\ÜÊ
_KÙ]™\X]Ûİ[™[˜İ[ÛŠ
^Ü™]\›ˆ\Ëœ™\X]Ûİ[KÙ][\ÙY™[˜İ[ÛŠ
^Ü™]\›ˆ\Ë™[\ÙYKÙ][\ÙYÙXÛÛ™Î™[˜İ[ÛŠ
^Ü™]\›ˆ\Ë™[\ÙY
‹Œ_KÙ]™[XZ[š[™Î™[˜İ[ÛŠ
^Ü™]\›ˆ\Ë™[^K]\Ë™[\ÙYKÙ]™[XZ[š[™ÔÙXÛÛ™Î™[˜İ[ÛŠ
^Ü™]\›ˆ\Ë™Ù]™[XZ[š[™Ê
J‹Œ_KÙ]İ™\˜[™[XZ[š[™Î™[˜İ[ÛŠ
^Ü™]\›ˆ\Ë™[^JŠJİ\Ëœ™\X]Ûİ[
K]\Ë™[\ÙYKÙ]İ™\˜[™[XZ[š[™ÔÙXÛÛ™Î™[˜İ[ÛŠ
^Ü™]\›ˆ\Ë™Ù]İ™\˜[™[XZ[š[™Ê
J‹Œ_K™[[İ™N™[˜İ[ÛŠŠ^ÜOO]›ÚY	‰ŠHLJK\Ë™[\ÙY]\Ë™[^K\Ëš\Ñ\Ü]ÚYH\‹\Ëœ™\X]Ûİ[LK\İ›ŞN™[˜İ[ÛŠ
^İ\Ë˜Ø[˜XÚÏ]›ÚY\Ë˜Ø[˜XÚÔØÛÜO]›ÚY\Ë˜\™ÜÏV×__JNÜ™^ÜÏ[ßJKÍNMNŠOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹Ü™^ÜÏH˜ÛÛ\]HŸJKNNŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹Ü™^ÜÏ^ĞÓÓTUN
ÍNMJ__JKLLNŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹Ü™^ÜÏ^ĞÛØÚÎ
ÌÌÎJK]™[Î
NJK[Y[[™N
MŒLŒ
K[Y\‘]™[
M
__JKÎŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆ]
ÌLJKÏ]
ÍNJKÏ]
ÍLJK]
ÌŠK]
ÍÌÍÊKO]
NM
KÏ]
LÌLJKO]
ŒJKO]
ÍMÊK]
ÎMŒ
KO]
ŒLŠK[™]ÈÊÚ[š]X[^™N™[˜İ[ÛŠŠ^İ\ËœØÙ[™O]‹\Ë™]™[Ï]‹œŞ\Ë™]™[Ë\Ë[YTØØ[OLK\Ëœ]\ÙYHLK\Ëœ›ØÙ\ÜÚ[™ÏHLK\ËÙY[œÏV×K\Ë[YOL\Ëœİ\[YOL\Ë›™^[YOL\Ëœ™]•[YOL\Ë›X^YÏML\Ë›YÔÚÚ\LÌË\Ë™Ø\LYLËÌ\Ë™]™[Ë›Û˜ÙJK“ÓÕ\Ë˜›Ûİ\ÊK\Ë™]™[Ë›ÛŠK”ÕT•\Ëœİ\\Ê_K›Ûİ™[˜İ[ÛŠ
^İ\Ë™]™[Ë›Û˜ÙJK‘TÕ“ÖK\Ë™\İ›ŞK\Ê_Kİ\™[˜İ[ÛŠ
^İ\Ë[YTØØ[OLK\Ëœ]\ÙYHLK\Ëœİ\[YOQ]K››İÊ
K\Ëœ™]•[YO]\Ëœİ\[YK\Ë›™^[YO]\Ë™Ø\\Ë™]™[Ë›ÛŠK•TUK\Ë\]K\ÊK\Ë™]™[Ë›Û˜ÙJK”ÒUÕÓ‹\ËœÚ]İÛ‹\Ê_KÜ™X]N™[˜İ[ÛŠŠ^Ğ\œ˜^Kš\Ğ\œ˜^JŠ_
VÙ—JNÙ›ÜŠ˜\ˆV×KOLÛO‹›[™İÛJÊÊ^İ˜\ˆY–ÛWNŞ[œİ[˜Ù[Ùˆ_[œİ[˜Ù[Ùˆİ‹œ\Ú

N\œ˜^Kš\Ğ\œ˜^JÙY[œÊOİ‹œ\Ú
J\Ë
JN‹œ\Ú
J\Ë
J_\™]\›ˆ‹›[™İOOLOİ–ÌNŸKY™[˜İ[ÛŠŠ^İ˜\ˆY‹O]\ËÙY[œÎÜ™]\›ˆˆ[œİ[˜Ù[Ùˆ_ˆ[œİ[˜Ù[Ùˆ
\œ˜^Kš\Ğ\œ˜^J‹ÙY[œÊOİ]J\ËŠNZJ\ËŠJKKœ\Ú
‹œ™\Ù]

JKŸKY][\N™[˜İ[ÛŠŠ^Ù›ÜŠ˜\ˆ‹OV×K]\ËÙY[œËÏLÙÏ‹›[™İÙÊÊÊ]Y–Ù×Kˆ[œİ[˜Ù[Ùˆ_ˆ[œİ[˜Ù[Ùˆ
\œ˜^Kš\Ğ\œ˜^J‹ÙY[œÊOİ]J\ËŠNZJ\ËŠJKœ\Ú
‹œ™\Ù]

JKKœ\Ú
ŠNÜ™]\›ˆ_KÚZ[™[˜İ[ÛŠŠ^İ˜\ˆ]J\ËŠNÜ™]\›ˆ\ËÙY[œËœ\Ú
‹š[š]

JKŸKÙ]ÚZ[™YÙY[œÎ™[˜İ[ÛŠŠ^Ü™]\›ˆ‹™Ù]ÚZ[™YÙY[œÊ
_K\Î™[˜İ[ÛŠŠ^Ü™]\›ˆ\ËÙY[œËš[™^ÙŠŠO‹L_K^\İ[™Î™[˜İ[ÛŠŠ^Ü™]\›ˆ\Ëš\ÊŠ_\ËÙY[œËœ\Ú
‹œ™\Ù]

JK\ßKYÛİ[\™[˜İ[ÛŠŠ^İ˜\ˆ\Š\ËŠNÜ™]\›ˆ\ËÙY[œËœ\Ú
‹œ™\Ù]

JKŸKİYÙÙ\™[˜İ[ÛŠ‹Š^Ü™]\›ˆÊ‹Š_KÙ]YÔÛ[Ûİ™[˜İ[ÛŠ‹Š^Ü™]\›ˆOO]›ÚY	‰ŠLKÌYKN
KOO]›ÚY	‰ŠL
K\Ë›X^YÏY‹\Ë›YÔÚÚ\SX]›Z[Š‹\Ë›X^YÊK\ßKÙ]œÎ™[˜İ[ÛŠŠ^Ü™]\›ˆOO]›ÚY	‰ŠL
K\Ë™Ø\LYLËÙ‹\Ë›™^[YO]\Ë[YJŒYLÊİ\Ë™Ø\\ßKÙ][N™[˜İ[ÛŠŠ^İ˜\ˆQ]K››İÊ
K]\Ëœ™]•[YNİ\Ë›X^YÉ‰Š\Ëœİ\[YJÏ]‹]\Ë›YÔÚÚ\
K\Ëœ™]•[YJÏ]İ˜\ˆO]\Ëœ™]•[YK]\Ëœİ\[YK[K]\Ë›™^[YKÏ[K]\Ë[YJŒYLÎÜ™]\›ˆŒÊKÏLYLË\Ë[YO[K\Ë›™^[YJÏ^
Ê]\Ë™Ø\Í\Ë™Ø\^
JN™ÏLßKXÚÎ™[˜İ[ÛŠ
^Ü™]\›ˆ\Ëœİ\
L
K\ßK\]N™[˜İ[ÛŠ
^İ\Ëœ]\ÙY\Ëœİ\
LJ_Kİ\™[˜İ[ÛŠŠ^ÙOO]›ÚY	‰ŠHLJNİ˜\ˆ]\Ë™Ù][JŠNÚYŠJL
J^İ\Ëœ›ØÙ\ÜÚ[™ÏHLİ˜\ˆKÏV×K]\ËÙY[œÎÙ›ÜŠOLÛO›[™İÛJÊÊ^UÛWK\]JŠI‰™Ëœ\Ú

Nİ˜\ˆÏYË›[™İÚYŠÉ‰•›[™İŒ
^Ù›ÜŠOLÛOÎÛJÊÊ^ŞYÖÛWNİ˜\ˆÏUš[™^ÙŠ
NĞÏ‹LI‰Šš\Ô[™[™Ô™[[İ™J
_š\Ñ\İ›ŞYY

JI‰ŠœÜXÙJËJK™\İ›ŞJ
J_YË›[™İL]\Ëœ›ØÙ\ÜÚ[™ÏHL__K™[[İ™N™[˜İ[ÛŠŠ^Ü™]\›ˆ\Ëœ›ØÙ\ÜÚ[™ÏÙ‹œÙ][™[™Ô™[[İ™Tİ]J
NŠ
\ËÙY[œËŠK‹œÙ]™[[İ™Yİ]J
JK\ßK™\Ù]™[˜İ[ÛŠŠ^Ü™]\›ˆ\Ë™^\İ[™ÊŠK‹œÙYZÊ
K‹œÙ]Xİ]™Tİ]J
K\ßKXZÙPXİ]™N™[˜İ[ÛŠŠ^Ü™]\›ˆ\Ë™^\İ[™ÊŠK‹œÙ]Xİ]™Tİ]J
K\ßKXXÚ™[˜İ[ÛŠ‹Š^İ˜\ˆKVÛ[NÙ›ÜŠOLNÛO\™İ[Y[Ë›[™İÛJÊÊ^œ\Ú
\™İ[Y[ÖÛWJNÜ™]\›ˆ\ËÙY[œË™›Ü‘XXÚ
[˜İ[ÛŠÊ^ŞÌOYË‹˜\J‹
_JK\ßKÙ]ÙY[œÎ™[˜İ[ÛŠ
^Ü™]\›ˆ\ËÙY[œËœÛXÙJ
_KÙ]ÙY[œÓÙ™[˜İ[ÛŠŠ^İ˜\ˆV×KO]\ËÙY[œÎĞ\œ˜^Kš\Ğ\œ˜^JŠOÙ[ÊŠN™VÙ—NÙ›ÜŠ˜\ˆY‹›[™İÏLÙÏK›[™İÙÊÊÊY›ÜŠ˜\ˆ[VÙ×KÏLÔÏÔÊÊÊHUš\Ñ\İ›ŞYY

I‰•š\Õ\™Ù]
–Ô×JI‰‹œ\Ú

NÜ™]\›ˆŸKÙ]ÛØ˜[[YTØØ[N™[˜İ[ÛŠ
^Ü™]\›ˆ\Ë[YTØØ[_KÙ]ÛØ˜[[YTØØ[N™[˜İ[ÛŠŠ^Ü™]\›ˆ\Ë[YTØØ[OY‹\ßK\ÕÙY[š[™Î™[˜İ[ÛŠŠ^Ù›ÜŠ˜\ˆ]\ËÙY[œËKLŞ‹›[™İŞ
ÊÊZYŠO]–ŞKKš\Ô^Z[™Ê
I‰›Kš\Õ\™Ù]
ŠJ\™]\›ˆLÜ™]\›ˆL_KÚ[[™[˜İ[ÛŠ
^Ù›ÜŠ˜\ˆ]\Ëœ›ØÙ\ÜÚ[™Ïİ\Ë™Ù]ÙY[œÊ
N\ËÙY[œËLİ‹›[™İİŠÊÊY–İ—K™\İ›ŞJ
NÜ™]\›ˆ\Ëœ›ØÙ\ÜÚ[™ß
‹›[™İL
K\ßKÚ[ÙY[œÓÙ™[˜İ[ÛŠŠ^Ù›ÜŠ˜\ˆ]\Ë™Ù]ÙY[œÓÙŠŠKOLÛO‹›[™İÛJÊÊ]–ÛWK™\İ›ŞJ
NÜ™]\›ˆ\ßK]\ÙP[™[˜İ[ÛŠ
^Ü™]\›ˆ\Ëœ]\ÙYHL\ßK™\İ[YP[™[˜İ[ÛŠ
^Ü™]\›ˆ\Ëœ]\ÙYHLK\ßKÚ]İÛ™[˜İ[ÛŠ
^İ\ËšÚ[[

K\ËÙY[œÏV×K\Ë™]™[Ë›Ù™ŠK•TUK\Ë\]K\ÊK\Ë™]™[Ë›Ù™ŠK”ÒUÕÓ‹\ËœÚ]İÛ‹\Ê_K\İ›ŞN™[˜İ[ÛŠ
^İ\ËœÚ]İÛŠ
K\Ë™]™[Ë›Ù™ŠK”ÕT•\Ëœİ\\ÊK\ËœØÙ[™O[[\Ë™]™[Ï[[_JNÛ‹œ™YÚ\İ\Š•ÙY[“X[˜YÙ\ˆ‹ÙY[œÈŠK™^ÜÏYJKMÌÍMNŠOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆOY[˜İ[ÛŠÊ^Ü™]\›ˆ	‰š\ÓİÛ”›Ü\J
OİÛN˜ßNÜ™^ÜÏ^_JKŒLLÎŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆ]
Œ
KÏ]
ÍLÍMJKÏY[˜İ[ÛŠ‹Š^İ˜\ˆO[”İÙ\ŒÚYŠ\[ÙˆOHœİš[™ÈŠZYŠš\ÓİÛ”›Ü\JŠJYO[Ü—NÙ[Ù^İ˜\ˆÏHˆÚYŠ‹š[™^ÙŠ‹ˆŠJ^ÜÏ\‹œİXœİš[™Ê‹š[™^ÙŠ‹ˆŠJÌJNİ˜\ˆO\ËÓİÙ\Ø\ÙJ
NØOOOHš[ˆÜÏH™X\ÙR[ˆ˜OOOH›İ]ÜÏH™X\ÙSİ]˜OOOHš[›İ]‰‰ŠÏH™X\ÙR[“İ]Š_\XÊ‹œİXœİš[™Ê‹š[™^ÙŠ‹ˆŠJÌJJÜÊKš\ÓİÛ”›Ü\JŠI‰ŠO[Ü—J_Y[ÙH\[ÙˆOH™[˜İ[Ûˆ‰‰ŠO\ŠNÚYŠ[Š\™]\›ˆNİ˜\ˆO[‹œÛXÙJ
NÜ™]\›ˆK[œÚY

K[˜İ[ÛŠ
^Ü™]\›ˆVÌOZK˜\J\ËJ__NÜ™^ÜÏ[ßJKLLÎNŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆ]
LÌN
KÏ]
ÍÌNJKÏ]
ÎLŠK^Ø™^šY\›Ø]][˜ËØ]][›ÛN˜Ë[™X\›ßKY[˜İ[ÛŠJ^ÚYŠOOO[[
\™]\›ˆ[İ˜\ˆÏ\‹›[™X\Ü™]\›ˆ\[ÙˆOOHœİš[™ÈÜ‹š\ÓİÛ”›Ü\JJI‰ŠÏ\–ÙWJN\[ÙˆOOH™[˜İ[Ûˆ‰‰ŠÏYJKßNÜ™^ÜÏ[ŸJKMLLŠOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆOY[˜İ[ÛŠÊ^İ˜\ˆÎÚYŠš\ÓİÛ”›Ü\J
J^İ˜\ˆ]\[ÙˆÛNÜOOH™[˜İ[ÛˆÛÏY[˜İ[ÛŠ‹KËKK
^Ü™]\›ˆÛJ‹KËKK
_N›ÏY[˜İ[ÛŠ
^Ü™]\›ˆÛ__Y[ÙH\[ÙˆÏOH™[˜İ[ÛˆÛÏXÎ›ÏY[˜İ[ÛŠ
^Ü™]\›ˆßNÜ™]\›ˆßNÜ™^ÜÏ^_JKNNŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆ]
LÍŠKÏY[˜İ[ÛŠÊ^İ˜\ˆ‹V×NÚYŠËš\ÓİÛ”›Ü\Jœ›ÜÈŠJY›ÜŠˆ[ˆËœ›ÜÊ\‹œİXœİš[™ÊJHOOH—È‰‰›‹œ\Ú
ÚÙ^Nœ‹˜[YN›Ëœ›ÜÖÜ—_JNÙ[ÙH›ÜŠˆ[ˆÊ[š[™^ÙŠŠOOOKLI‰œ‹œİXœİš[™ÊJHOOH—È‰‰›‹œ\Ú
ÚÙ^Nœ‹˜[YN›ÖÜ—_JNÜ™]\›ˆŸNÜ™^ÜÏXßJKŒŒÌNŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆ]
ÍLMM
KÏY[˜İ[ÛŠÊ^İ˜\ˆ[
Ë\™Ù]È‹[
NÜ™]\›ˆOO[[
\[ÙˆOH™[˜İ[Ûˆ‰‰Š\‹˜Ø[

JK\œ˜^Kš\Ğ\œ˜^JŠ_
VÜ—JJKŸNÜ™^ÜÏXßJKMÍÍÍÎŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆ]
ÌMÍŠKÏ]
NMÌŠNÙ[˜İ[ÛˆÊJ^Ü™]\›ˆHXK™Ù]Xİ]™I‰\[ÙˆK™Ù]Xİ]™OOH™[˜İ[ÛˆŸY[˜İ[ÛˆŠJ^Ü™]\›ˆHXK™Ù]İ\	‰\[ÙˆK™Ù]İ\OH™[˜İ[ÛˆŸY[˜İ[ÛˆŠJ^Ü™]\›ˆHXK™Ù][™	‰\[ÙˆK™Ù][™OH™[˜İ[ÛˆŸY[˜İ[ÛˆJJ^Ü™]\›ˆŠJ_ŠJ_ÊJ_]˜\ˆÏY[˜İ[ÛŠKJ^İ˜\ˆOY[˜İ[ÛŠ‹‹
^Ü™]\›ˆKY[˜İ[ÛŠ‹‹
^Ü™]\›ˆK[[]\[ÙˆNÚYŠOOH›[X™\ˆŠ]OY[˜İ[ÛŠ
^Ü™]\›ˆ_NÙ[ÙHYŠ\œ˜^Kš\Ğ\œ˜^JJJYY[˜İ[ÛŠ
^Ü™]\›ˆVÌ_KOY[˜İ[ÛŠ
^Ü™]\›ˆVÚK›[™İLW_NÙ[ÙHYŠOOHœİš[™ÈŠ^İ˜\ˆOZKÓİÙ\Ø\ÙJ
K[KœİXœİš[™ÊŠOOOHœ˜[™ÛH‹Ï[KœİXœİš[™ÊÊOOOHš[ÚYŠÊ^İ˜\ˆ[Kš[™^ÙŠŠŠKÏ[Kš[™^ÙŠŠHŠKÏ[Kš[™^ÙŠ‹ŠNÚYŠ	‰”É‰Ê^İ˜\ˆO\\œÙQ›Ø]
KœİXœİš[™Ê
ÌKÊJK\\œÙQ›Ø]
KœİXœİš[™ÊÊÌKÊJNŞİOY[˜İ[ÛŠ
^Ü™]\›ˆÊK
_NOY[˜İ[ÛŠ
^Ü™]\›ˆ
K
__Y[ÙH›İÈ™]È\œ›ÜŠš[˜[Y˜[™ÛJ
H›Ü›X]Š_Y[Ù^ÛO[VÌNİ˜\ˆO\\œÙQ›Ø]
KœİXœİŠŠJNÜİÚ]Ú
J^ØØ\ÙHŠÈOY[˜İ[ÛŠ‹‹
^Ü™]\›ˆ
Ğ_NØœ™XZÎØØ\ÙH‹HOY[˜İ[ÛŠ‹‹
^Ü™]\›ˆP_NØœ™XZÎØØ\ÙHŠˆOY[˜İ[ÛŠ‹‹
^Ü™]\›ˆ
_NØœ™XZÎØØ\ÙH‹ÈOY[˜İ[ÛŠ‹‹
^Ü™]\›ˆĞ_NØœ™XZÎÙY˜][OY[˜İ[ÛŠ
^Ü™]\›ˆ\œÙQ›Ø]
J____Y[ÙHYŠOOH™[˜İ[ÛˆŠ]OZNÙ[ÙHYŠOOH›Øš™XİŠZYŠJJJ[ÊJI‰ŠZK™Ù]Xİ]™JKŠJI‰ŠOZK™Ù][™
KŠJI‰ŠZK™Ù]İ\
NÙ[ÙHYŠKš\ÓİÛ”›Ü\J˜[YHŠJZ\ÊKK˜[YJNÙ[Ù^İ˜\ˆOZKš\ÓİÛ”›Ü\JÈŠKZKš\ÓİÛ”›Ü\J™œ›ÛHŠKZKš\ÓİÛ”›Ü\Jœİ\ŠNÚYŠI‰ŠŸ
J^ÚYŠ\ÊKKÊK
^İ˜\ˆÏ\ÊKKœİ\
NÚ™Ù]Xİ]™O]Ë™Ù][™ZYŠŠ^İ˜\ˆ\ÊKK™œ›ÛJNÚ™Ù]İ\S‹™Ù][™__\™]\›ˆ
^ÙÙ]Xİ]™N™‹Ù][™KÙ]İ\™JKNÜ™^ÜÏ\ßJKÌŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆ]
ÌŠKÏ]
NLŠKÏ]
ŒÍM
K]
MÌÍMJK]
ŒLLÊKO]
MMM
KÏ]
MLLŠKO]
ÍLMM
KO]
MÍÍÍÊK]
JKO]
ŒJKY[˜İ[ÛŠ‹‹J^ÚYŠˆ[œİ[˜Ù[ÙˆJ\™]\›ˆ‹œ\™[Y‹ÛOOO]›ÚYÛOXÎ›OZ
ËJNİ˜\ˆYJ‹™œ›ÛH‹
KÏYJ‹È‹JKVŞİ˜[YNWKÏYJ‹™[^H‹K™[^JKÏYJ‹™X\ÙT\˜[\È‹K™X\ÙT\˜[\ÊKOYJ‹™X\ÙH‹K™X\ÙJKZJ˜[YH‹ÊKO[™]ÈJ‹
KOPK˜Y
˜[YH‹™Ù][™™Ù]İ\™Ù]Xİ]™KŠJ‹™X\ÙH‹JKJ‹™X\ÙT\˜[\È‹ÊJKÊ‹™[^H‹ÊKJ‹™\˜][Ûˆ‹K™\˜][ÛŠKŠ‹[Ş[È‹K[Ş[ÊKJ‹šÛ‹KšÛ
KJ‹œ™\X]‹Kœ™\X]
KJ‹œ™\X][^H‹Kœ™\X][^JKLKLJNÓKœİ\^K˜İ\œ™[^K˜ÛÛ\]Q[^O[Ê‹˜ÛÛ\]Q[^H‹
KK›ÛÜSX]œ›İ[™
Ê‹›ÛÜ‹
JKK›ÛÜ[^OSX]œ›İ[™
Ê‹›ÛÜ[^H‹
JKKœ]\ÙY\Š‹œ]\ÙY‹LJKKœ\œÚ\İ\Š‹œ\œÚ\İ‹LJKKš\Ó[X™\•ÙY[HLK˜Ø[˜XÚÔØÛÜOXJ‹˜Ø[˜XÚÔØÛÜH‹JNÙ›ÜŠ˜\ˆ[•TTËLÓ‹›[™İÓ
ÊÊ^İ˜\ˆÏT–ÓKXJ‹ËLJNÚYŠŠ^İ˜\ˆXJ‹ÊÈ”\˜[\È‹×JNĞKœÙ]Ø[˜XÚÊË‹Š__\™]\›ˆ_NÜ™^ÜÏYJKLÌLNŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆ]
ŒLLÊKÏ]
ÍLMM
KÏ]
ÍŒÎÊKY[˜İ[ÛŠ‹J^ÙOOO]›ÚY	‰ŠO^ßJNİ˜\ˆËOXÊKœİ\‹
KOXÊK™X\ÙH‹[
KXÊK™ÜšY‹[
KOXÊK™œ›ÛH‹
K]OOOH™š\œİ‹]OOOH˜Ù[\ˆ‹]OOOH›\İ‹O]\[ÙˆOOH›[X™\ˆ‹P\œ˜^Kš\Ğ\œ˜^JŠKÏ\\œÙQ›Ø]
Û–ÌN›ŠK^Ü\œÙQ›Ø]
–ÌWJNŒÏSX]›X^
Ë
NÚYŠ	‰ŠJÏYÊK
^İ˜\ˆÏZÌKOZÌWKLOLOLLV×NİÊPËLKOQKLJN›OÊ]IPËOSX]™›ÛÜŠKĞÊJN™‰‰ŠJËLJKÌ‹OJKLJKÌŠNÙ›ÜŠ˜\ˆÏ[Ë“RS—ÔĞQ‘WÒS•QÑT‹LÓNÓŠÊÊ^ÓÓ—OV×NÙ›ÜŠ˜\ˆLØÎØŠÊÊ^ÓOTX‹PKSİ˜\ˆSX]œÜ\
J“JÔŠ”ŠNŞÉ‰ŠÏ^ŠKÓ—VØ—O^Ÿ__]˜\ˆZOÛ
JN›[Ü™]\›ˆÜÏY[˜İ[ÛŠ‹‹KÊ^İ˜\ˆLSÉPËSX]™›ÛÜŠËĞÊNÒL	‰’É‰–L	‰–I‰ŠSÖ—VÒJNİ˜\ˆÚYŠ
^İ˜\ˆ	UYÎÑÒVİÊ‰
‘
İÊN’VİÊ‰Y[ÙHÒV
™Ê‘
İÊN’V
™ÎÜ™]\›ˆŠØ_NœÏY[˜İ[ÛŠ‹‹KË
^ÖKNİ˜\ˆÙÒSÎ™ÒSX]˜XœÊÌ‹SÊNÒVSÎ›I‰ŠSX]˜XœÊKSÊJNİ˜\ˆÚYŠ
^İ˜\ˆÙÒJYÊKÖ
Š
ŒŠN’JYÊKÖ
’ÖRŠ‘
Ö
N–RŸY[ÙHÖV
”Ê‘
Ö
N–R
™ÎÜ™]\›ˆŠØ_KßNÜ™^ÜÏ\ŸJKÍMÎŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆ]
ÌŠKÏ]
NLŠKÏ]
ŒÍM
K]
MÌÍMJK]
ŒLLÊKO]
MMM
KÏ]
LLÎJKO]
MLLŠKO]
NJK]
ŒŒÌJKO]
ÍLMM
K]
MÍÍÍÊK]
JK]
ŒJKOY[˜İ[ÛŠË
^ÚYŠÈ[œİ[˜Ù[ÙˆŠ\™]\›ˆËœ\™[^ÎÕOO]›ÚYÕXÎ•YŠË
Nİ˜\ˆÏZ
ÊNÈTÉ‰•\™Ù]É‰ŠÏU\™Ù]ÊNÙ›ÜŠ˜\ˆÏZJÊKOYJË™[^H‹™[^JKYJË™\˜][Ûˆ‹™\˜][ÛŠKOYJË™X\ÙT\˜[\È‹™X\ÙT\˜[\ÊKOYJË™X\ÙH‹™X\ÙJKYJËšÛ‹šÛ
KYJËœ™\X]‹œ™\X]
KÏYJËœ™\X][^H‹œ™\X][^JK\ŠË[Ş[È‹[Ş[ÊK\ŠË™›\‹™›\
K\ŠË™›\H‹™›\JKYJËš[\œÛ][Ûˆ‹š[\œÛ][ÛŠKY[˜İ[ÛŠ‹Ë]J^ÚYŠ]OOH^\™HŠ^İ˜\ˆ\K]›ÚYĞ\œ˜^Kš\Ğ\œ˜^JJOÊ\VÌK\VÌWJNœKš\ÓİÛ”›Ü\J˜[YHŠOÊ\K˜[YK\œ˜^Kš\Ğ\œ˜^JK˜[YJOÊ\K˜[YVÌK\K˜[YVÌWJN\[ÙˆK˜[YOOHœİš[™È‰‰Š\K˜[YJJN\[ÙˆOOHœİš[™È‰‰Š\JK‹˜Yœ˜[YJËJK™[^H‹JKJK™\˜][Ûˆ‹
KJKšÛ‹ŠKJKœ™\X]‹
KJKœ™\X][^H‹ÊKŠK™›\‹ŠKŠK™›\H‹ŠJ_Y[Ù^İ˜\ˆ]Y
]JK\ÊJKš[\œÛ][Ûˆ‹
JNÚ‹˜Y
Ë]]™Ù][™]™Ù]İ\]™Ù]Xİ]™KŠJK™X\ÙH‹JKJK™X\ÙT\˜[\È‹JJKJK™[^H‹JKJK™\˜][Ûˆ‹
KŠK[Ş[È‹ŠKJKšÛ‹ŠKJKœ™\X]‹
KJKœ™\X][^H‹ÊKŠK™›\‹ŠKŠK™›\H‹ŠKÜN›[
__K[™]ÈŠÊKOLÕOË›[™İÕJÊÊY›ÜŠ˜\ˆÏPÖÕWKšÙ^KPÖÕWK˜[YKLÒË›[™İÒ
ÊÊSÏOOHœØØ[H‰‰ˆTÖÒKš\ÓİÛ”›Ü\JœØØ[HŠOÊŠ‹œØØ[V‹
KŠ‹œØØ[VH‹
JNŠ‹Ë
NÑ‹˜ÛÛ\]Q[^O[ÊË˜ÛÛ\]Q[^H‹
K‹›ÛÜSX]œ›İ[™
ÊË›ÛÜ‹
JK‹›ÛÜ[^OSX]œ›İ[™
ÊË›ÛÜ[^H‹
JK‹œ]\ÙY\ŠËœ]\ÙY‹LJK‹œ\œÚ\İ\ŠËœ\œÚ\İ‹LJK‹˜Ø[˜XÚÔØÛÜOYJË˜Ø[˜XÚÔØÛÜH‹ŠNÙ›ÜŠ˜\ˆ[•TTËLÒ‹›[™İÒŠÊÊ^İ˜\ˆ	V–Ò—KO]JË	LJNÚYŠJ^İ˜\ˆÏ]JË	
È”\˜[\È‹×JNÑ‹œÙ]Ø[˜XÚÊ	KÊ__\™]\›ˆŸNÜ™^ÜÏ[_JKŒLŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆ]
ÌŠKÏ]
ŒÍM
KÏ]
MÌÍMJK]
ŒŒÌJK]
ÍLMM
KO]
ÍMÊKÏ]
ÎMŒ
KOY[˜İ[ÛŠK
^ÚYŠ[œİ[˜Ù[ÙˆÊ\™]\›ˆœ\™[ZKİ˜\ˆO[™]ÈÊJNİKœİ\[^O[Š™[^H‹
KK˜ÛÛ\]Q[^OXÊ˜ÛÛ\]Q[^H‹
KK›ÛÜSX]œ›İ[™
Ê›ÛÜ‹Šœ™\X]‹
JJKK›ÛÜ[^OSX]œ›İ[™
Ê›ÛÜ[^H‹Šœ™\X][^H‹
JJKKœ]\ÙY[Êœ]\ÙY‹LJKKœ\œÚ\İ[Êœ\œÚ\İ‹LJKK˜Ø[˜XÚÔØÛÜO[Š˜Ø[˜XÚÔØÛÜH‹JNİ˜\ˆ[•TTÎÙ›ÜŠLÙ‹›[™İÙ
ÊÊ^İ˜\ˆY–ÙKO[Š‹LJNÚYŠJ^İ˜\ˆ[ŠŠÈ”\˜[\È‹×JNİKœÙ]Ø[˜XÚÊ‹K
__]˜\ˆÏ[ŠÙY[œÈ‹[
NÚYŠ\œ˜^Kš\Ğ\œ˜^JÊJ^İ˜\ˆV×KÏ\Š
KÏ]›ÚYÙ›ÜŠÉ‰ŠÏ^İ\™Ù]Î”ßJKLÙË›[™İÙ
ÊÊUœ\Ú
JKÖÙKÊJNİK˜Y

_\™]\›ˆ_NÜ™^ÜÏX_JKÌŒÌNŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹Ü™^ÜÏ^ÑÙ]›ÛÛX[
MÌÍMJKÙ]X\ÙQ[˜İ[Û
ŒLLÊKÙ][\œÛ][Û‘[˜İ[Û
LLÎJKÙ]™]Õ˜[YN
MLLŠKÙ]›ÜÎ
NJKÙ]\™Ù]Î
ŒŒÌJKÙ]˜[YSÜ
MÍÍÍÊK[X™\•ÙY[Z[\
ÌŠKİYÙÙ\Z[\
LÌLJKÙY[Z[\
ÍMÊ__JKÌÍNŠOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹Ü™^ÜÏH˜Xİ]™HŸJKNMŠOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹Ü™^ÜÏH˜ÛÛ\]HŸJKÌŒÌÎŠOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹Ü™^ÜÏH›ÛÜŸJKNNŠOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹Ü™^ÜÏHœ]\ÙHŸJKNÌÍŠOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹Ü™^ÜÏHœ™\X]ŸJKMÍŠOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹Ü™^ÜÏHœ™\İ[YHŸJKÌŒNLÎŠOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹Ü™^ÜÏHœİ\ŸJKÍÌNŠOËÊŠ‚ˆ
ˆ]]ÜˆØ[[YBˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹Ü™^ÜÏHœİÜŸJKÌÍŠOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹Ü™^ÜÏH\]HŸJKMMNNŠOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹Ü™^ÜÏH[Ş[ÈŸJKŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹Ü™^ÜÏ^ÕÑQS—ĞPÕU‘N
ÌÍJKÑQS—ĞÓÓTUN
NM
KÑQS—ÓÓÔ
ÌŒÌÊKÑQS—ÔUTÑN
NJKÑQS—Ô‘TÕSQN
MÍ
KÑQS—Ô‘TPU
NÌÍŠKÑQS—ÔÕT•
ÌŒNLÊKÑQS—ÔÕÔ
ÍÌJKÑQS—ÕTUN
ÌÍŠKÑQS—ÖSÖSÎ
MMNJ__JKÌŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆ^Ôİ]\Î
ŒÍLÊKZ[\œÎ
ÌŒÌJK]™[Î
ŠKÙY[“X[˜YÙ\
ÎŠKÙY[
ŒJKÙY[‘]N
MÍÊKÙY[‘œ˜[YQ]N
ŒŒŒ
K˜\ÙUÙY[
ÌŠKÙY[ÚZ[
ÎMŒ
_NÜ™^ÜÏ[JKÌŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆ]
ÍNJKÏ]
LÎLŠKÏ]
ŠK]
ŒÍLÊK[™]È
Ñ^[™Î˜Ë[š]X[^™N™[˜İ[ÛŠÊ^ØË˜Ø[
\ÊK\Ëœ\™[\Ë\Ë™]OV×K\Ëİ[]OL\Ëœİ\[^OL\Ëš\Ôİ\YHLK\Ë[YTØØ[OLK\Ë›ÛÜL\Ë›ÛÜ[^OL\Ë›ÛÜÛİ[\L\Ë˜ÛÛ\]Q[^OL\Ë˜Ûİ[İÛL\Ëœİ]O\‹”S‘S‘Ë\Ëœ]\ÙYHLK\Ë˜Ø[˜XÚÜÏ^ÛÛXİ]™N›[ÛÛÛ\]N›[Û“ÛÜ›[Û”]\ÙN›[Û”™\X]›[Û”™\İ[YN›[Û”İ\›[Û”İÜ›[Û•\]N›[Û–[Ş[Î›[K\Ë˜Ø[˜XÚÔØÛÜK\Ëœ\œÚ\İHL_KÙ][YTØØ[N™[˜İ[ÛŠJ^Ü™]\›ˆ\Ë[YTØØ[OYK\ßKÙ][YTØØ[N™[˜İ[ÛŠ
^Ü™]\›ˆ\Ë[YTØØ[_K\Ô^Z[™Î™[˜İ[ÛŠ
^Ü™]\›ˆ]\Ëœ]\ÙY	‰\Ëš\ĞXİ]™J
_K\Ô]\ÙY™[˜İ[ÛŠ
^Ü™]\›ˆ\Ëœ]\ÙYK]\ÙN™[˜İ[ÛŠ
^Ü™]\›ˆ\Ëœ]\ÙY
\Ëœ]\ÙYHL\Ë™\Ü]Ú]™[
Ë•ÑQS—ÔUTÑK›Û”]\ÙHŠJK\ßK™\İ[YN™[˜İ[ÛŠ
^Ü™]\›ˆ\Ëœ]\ÙY	‰Š\Ëœ]\ÙYHLK\Ë™\Ü]Ú]™[
Ë•ÑQS—Ô‘TÕSQK›Û”™\İ[YHŠJK\ßKXZÙPXİ]™N™[˜İ[ÛŠ
^İ\Ëœ\™[›XZÙPXİ]™J\ÊK\Ë™\Ü]Ú]™[
Ë•ÑQS—ĞPÕU‘K›ÛXİ]™HŠ_KÛÛÛ\]R[™\™[˜İ[ÛŠ
^İ\ËœÙ][™[™Ô™[[İ™Tİ]J
K\Ë™\Ü]Ú]™[
Ë•ÑQS—ĞÓÓTUK›ÛÛÛ\]HŠ_KÛÛ\]N™[˜İ[ÛŠJ^Ü™]\›ˆOOO]›ÚY	‰ŠOL
KOÊ\ËœÙ]ÛÛ\]Q[^Tİ]J
K\Ë˜Ûİ[İÛYJN\Ë›ÛÛÛ\]R[™\Š
K\ßKÛÛ\]PY\“ÛÜ™[˜İ[ÛŠJ^Ü™]\›ˆOOO]›ÚY	‰ŠOL
K\Ë›ÛÜÛİ[\™I‰Š\Ë›ÛÜÛİ[\YJK\ßK™[[İ™N™[˜İ[ÛŠ
^Ü™]\›ˆ\Ëœ\™[	‰\Ëœ\™[œ™[[İ™J\ÊK\ßKİÜ™[˜İ[ÛŠ
^Ü™]\›ˆ\Ëœ\™[	‰ˆ]\Ëš\Ô™[[İ™Y

I‰ˆ]\Ëš\Ô[™[™Ô™[[İ™J
I‰ˆ]\Ëš\Ñ\İ›ŞYY

I‰Š\Ë™\Ü]Ú]™[
Ë•ÑQS—ÔÕÔ›Û”İÜŠK\ËœÙ][™[™Ô™[[İ™Tİ]J
JK\ßK\]SÛÜÛİ[İÛ™[˜İ[ÛŠJ^İ\Ë˜Ûİ[İÛ‹OYK\Ë˜Ûİ[İÛL	‰Š\ËœÙ]Xİ]™Tİ]J
K\Ë™\Ü]Ú]™[
Ë•ÑQS—ÓÓÔ›Û“ÛÜŠJ_K\]Tİ\Ûİ[İÛ™[˜İ[ÛŠJ^Ü™]\›ˆ\Ë˜Ûİ[İÛ‹OYK\Ë˜Ûİ[İÛL	‰Š\Ëš\Ôİ\YHL\ËœÙ]Xİ]™Tİ]J
K\Ë™\Ü]Ú]™[
Ë•ÑQS—ÔÕT•›Û”İ\ŠKOL
K_K\]PÛÛ\]Q[^N™[˜İ[ÛŠJ^İ\Ë˜Ûİ[İÛ‹OYK\Ë˜Ûİ[İÛL	‰\Ë›ÛÛÛ\]R[™\Š
_KÙ]Ø[˜XÚÎ™[˜İ[ÛŠKËJ^Ü™]\›ˆOOO]›ÚY	‰ŠOV×JK\Ë˜Ø[˜XÚÜËš\ÓİÛ”›Ü\JJI‰Š\Ë˜Ø[˜XÚÜÖÙWO^Ù[˜ÎœË\˜[\Î˜_JK\ßKÙ][™[™Ôİ]N™[˜İ[ÛŠ
^İ\Ëœİ]O\‹”S‘S‘ßKÙ]Xİ]™Tİ]N™[˜İ[ÛŠ
^İ\Ëœİ]O\‹PÕU‘K\Ëš\Ôİ\YHL_KÙ]ÛÜ[^Tİ]N™[˜İ[ÛŠ
^İ\Ëœİ]O\‹“ÓÔÑSV_KÙ]ÛÛ\]Q[^Tİ]N™[˜İ[ÛŠ
^İ\Ëœİ]O\‹ÓÓTUWÑSV_KÙ]İ\[^Tİ]N™[˜İ[ÛŠ
^İ\Ëœİ]O\‹”ÕT•ÑSVK\Ë˜Ûİ[İÛ]\Ëœİ\[^K\Ëš\Ôİ\YHL_KÙ][™[™Ô™[[İ™Tİ]N™[˜İ[ÛŠ
^İ\Ëœİ]O\‹”S‘S‘×Ô‘SSÕ‘_KÙ]™[[İ™Yİ]N™[˜İ[ÛŠ
^İ\Ëœİ]O\‹”‘SSÕ‘QKÙ]š[š\ÚYİ]N™[˜İ[ÛŠ
^İ\Ëœİ]O\‹‘’S’TÒQKÙ]\İ›ŞYYİ]N™[˜İ[ÛŠ
^İ\Ëœİ]O\‹‘TÕ“ÖQQK\Ô[™[™Î™[˜İ[ÛŠ
^Ü™]\›ˆ\Ëœİ]OOO\‹”S‘S‘ßK\ĞXİ]™N™[˜İ[ÛŠ
^Ü™]\›ˆ\Ëœİ]OOO\‹PÕU‘_K\ÓÛÜ[^YY™[˜İ[ÛŠ
^Ü™]\›ˆ\Ëœİ]OOO\‹“ÓÔÑSV_K\ĞÛÛ\]Q[^YY™[˜İ[ÛŠ
^Ü™]\›ˆ\Ëœİ]OOO\‹ÓÓTUWÑSV_K\Ôİ\[^YY™[˜İ[ÛŠ
^Ü™]\›ˆ\Ëœİ]OOO\‹”ÕT•ÑSV_K\Ô[™[™Ô™[[İ™N™[˜İ[ÛŠ
^Ü™]\›ˆ\Ëœİ]OOO\‹”S‘S‘×Ô‘SSÕ‘_K\Ô™[[İ™Y™[˜İ[ÛŠ
^Ü™]\›ˆ\Ëœİ]OOO\‹”‘SSÕ‘QK\Ñš[š\ÚY™[˜İ[ÛŠ
^Ü™]\›ˆ\Ëœİ]OOO\‹‘’S’TÒQK\Ñ\İ›ŞYY™[˜İ[ÛŠ
^Ü™]\›ˆ\Ëœİ]OOO\‹‘TÕ“ÖQQK\İ›ŞN™[˜İ[ÛŠ
^İ\Ë™]I‰\Ë™]K™›Ü‘XXÚ
[˜İ[ÛŠJ^ÙK™\İ›ŞJ
_JK\Ëœ™[[İ™P[\İ[™\œÊ
K\Ë˜Ø[˜XÚÜÏ[[\Ë™]O[[\Ëœ\™[[[\ËœÙ]\İ›ŞYYİ]J
__JNÛ‹•TTÏVÈ›ÛXİ]™H‹›ÛÛÛ\]H‹›Û“ÛÜ‹›Û”]\ÙH‹›Û”™\X]‹›Û”™\İ[YH‹›Û”İ\‹›Û”İÜ‹›Û•\]H‹›Û–[Ş[È—K™^ÜÏ[ŸJKMLŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆ]
ÍNJKÏ]
ŠKÏ]
ŒÍLÊK[™]È
Ú[š]X[^™N™[˜İ[ÛŠKËKKK‹‹J^İ\ËÙY[YK\Ë\™Ù][™^\Ë\Ë™\˜][ÛZOLËŒNšK\Ëİ[\˜][ÛL\Ë™[^OL\Ë™Ù][^OXK\Ë[Ş[ÏZ\ËšÛ]K\Ëœ™\X]Y\Ëœ™\X][^OY‹\Ëœ™\X]Ûİ[\L\Ë™›\]‹\Ë™›\O[K\Ëœ›ÙÜ™\ÜÏL\Ë™[\ÙYL\Ëœİ]OL\Ëš\ĞÛİ[İÛHL_KÙ]\™Ù]™[˜İ[ÛŠ
^Ü™]\›ˆ\ËÙY[‹\™Ù]Öİ\Ë\™Ù][™^_KÙ]\™Ù]˜[YN™[˜İ[ÛŠŠ^ÛOO]›ÚY	‰Š]\Ë˜İ\œ™[
K\ËÙY[‹\™Ù]Öİ\Ë\™Ù][™^Vİ\ËšÙ^WO[ŸKÙ]Ü™X]Yİ]N™[˜İ[ÛŠ
^İ\Ëœİ]O[ËÔ‘PUQ\Ëš\ĞÛİ[İÛHL_KÙ][^Tİ]N™[˜İ[ÛŠ
^İ\Ëœİ]O[Ë‘SVK\Ëš\ĞÛİ[İÛHLKÙ][™[™Ô™[™\”İ]N™[˜İ[ÛŠ
^İ\Ëœİ]O[Ë”S‘S‘×Ô‘S‘T‹\Ëš\ĞÛİ[İÛHL_KÙ]^Z[™Ñ›ÜØ\™İ]N™[˜İ[ÛŠ
^İ\Ëœİ]O[Ë”VRS‘×Ñ“Ô•ĞT‘\Ëš\ĞÛİ[İÛHL_KÙ]^Z[™Ğ˜XÚİØ\™İ]N™[˜İ[ÛŠ
^İ\Ëœİ]O[Ë”VRS‘×ĞPÒÕĞT‘\Ëš\ĞÛİ[İÛHL_KÙ]Ûİ]N™[˜İ[ÛŠ
^İ\Ëœİ]O[Ë’ÓÑSVK\Ëš\ĞÛİ[İÛHLKÙ]™\X]İ]N™[˜İ[ÛŠ
^İ\Ëœİ]O[Ë”‘TPUÑSVK\Ëš\ĞÛİ[İÛHLKÙ]ÛÛ\]Tİ]N™[˜İ[ÛŠ
^İ\Ëœİ]O[ËÓÓTUK\Ëš\ĞÛİ[İÛHL_K\ĞÜ™X]Y™[˜İ[ÛŠ
^Ü™]\›ˆ\Ëœİ]OOO[ËÔ‘PUQK\Ñ[^YY™[˜İ[ÛŠ
^Ü™]\›ˆ\Ëœİ]OOO[Ë‘SV_K\Ô[™[™Ô™[™\™[˜İ[ÛŠ
^Ü™]\›ˆ\Ëœİ]OOO[Ë”S‘S‘×Ô‘S‘TŸK\Ô^Z[™Ñ›ÜØ\™™[˜İ[ÛŠ
^Ü™]\›ˆ\Ëœİ]OOO[Ë”VRS‘×Ñ“Ô•ĞT‘K\Ô^Z[™Ğ˜XÚİØ\™™[˜İ[ÛŠ
^Ü™]\›ˆ\Ëœİ]OOO[Ë”VRS‘×ĞPÒÕĞT‘K\ÒÛ[™Î™[˜İ[ÛŠ
^Ü™]\›ˆ\Ëœİ]OOO[Ë’ÓÑSV_K\Ô™\X][™Î™[˜İ[ÛŠ
^Ü™]\›ˆ\Ëœİ]OOO[Ë”‘TPUÑSV_K\ĞÛÛ\]N™[˜İ[ÛŠ
^Ü™]\›ˆ\Ëœİ]OOO[ËÓÓTU_KÙ]İ]Qœ›ÛQ[™™[˜İ[ÛŠŠ^İ\Ë[Ş[Ïİ\Ë›Û”™\X]
‹LL
N\Ëœ™\X]Ûİ[\Œİ\Ë›Û”™\X]
‹LLJN\ËœÙ]ÛÛ\]Tİ]J
_KÙ]İ]Qœ›ÛTİ\™[˜İ[ÛŠŠ^İ\Ëœ™\X]Ûİ[\Œİ\Ë›Û”™\X]
‹LJN\ËœÙ]ÛÛ\]Tİ]J
_K™\Ù]™[˜İ[ÛŠ
^İ˜\ˆ]\ËÙY[‹O[‹İ[\™Ù]ËÏ]\Ë\™Ù][™^O[‹\™Ù]ÖÜ×KO]\ËšÙ^Nİ\Ëœ›ÙÜ™\ÜÏL\Ë™[\ÙYL\Ë™[^O]\Ë™Ù][^JKKËKŠK\Ëœ™\X]Ûİ[\]\Ëœ™\X]OOKLOÛË“PV\Ëœ™\X]\ËœÙ][™[™Ô™[™\”İ]J
Nİ˜\ˆ]\Ë™\˜][ÛŠİ\ËšÛİ\Ë[Ş[É‰Š
Ï]\Ë™\˜][ÛŠNİ˜\ˆOZ
İ\Ëœ™\X][^Nİ\Ëİ[\˜][Û]\Ë™[^JÚ\Ëœ™\X]OOKLOÊ\Ëİ[\˜][ÛŠÏ]J›Ë“PV‹š\Ò[™š[š]OHL
N\Ëœ™\X]Œ	‰Š\Ëİ[\˜][ÛŠÏ]J\Ëœ™\X]
K\Ëİ[\˜][Û›‹™\˜][Û‰‰Š‹™\˜][Û]\Ëİ[\˜][ÛŠK\Ë™[^O‹œİ\[^I‰Š‹œİ\[^O]\Ë™[^JK\Ë™[^OŒ	‰Š\Ë™[\ÙY]\Ë™[^K\ËœÙ][^Tİ]J
J_KÛ”™\X]™[˜İ[ÛŠ‹KÊ^İ˜\ˆO]\ËÙY[‹OXKİ[\™Ù]Ë]\Ë\™Ù][™^OXK\™Ù]ÖÚK]\ËšÙ^KYOOH^\™HÚYŠ\Ë™[\ÙY[‹\Ëœ›ÙÜ™\ÜÏ[‹İ\Ë™\˜][Û‹\Ë™›\	‰KÙÙÛQ›\

K\Ë™›\I‰KÙÙÛQ›\J
K‰‰Š_ÊI‰Š\Ëœİ\]\Ë™Ù]İ\˜[YJK\Ëœİ\KJJKÊ^İ\ËœÙ]^Z[™Ğ˜XÚİØ\™İ]J
K\Ë™\Ü]Ú]™[
Ë•ÑQS—ÖSÖSË›Û–[Ş[ÈŠNÜ™]\›Ÿ]\Ëœ™\X]Ûİ[\‹KK‰‰Š\Ë™[™]\Ë™Ù][™˜[YJK\Ëœİ\KJJK\Ëœ™\X][^OŒÊ\Ë™[\ÙY]\Ëœ™\X][^K[‹‰‰Š\Ë˜İ\œ™[]\Ëœİ\VÙO]\Ë˜İ\œ™[
K\ËœÙ]™\X]İ]J
JNŠ\ËœÙ]^Z[™Ñ›ÜØ\™İ]J
K\Ë™\Ü]Ú]™[
Ë•ÑQS—Ô‘TPU›Û”™\X]ŠJ_K\İ›ŞN™[˜İ[ÛŠ
^İ\ËÙY[[[\Ë™Ù][^O[[\ËœÙ]ÛÛ\]Tİ]J
__JNÜ™^ÜÏ\ŸJKNLŠOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆO^İ\™Ù]Î›[[^NŒ\˜][ÛŒYLËX\ÙNˆ”İÙ\Œ‹X\ÙT\˜[\Î›[ÛŒ™\X]Œ™\X][^NŒ[Ş[ÎˆLK›\ˆLK›\NˆLK\œÚ\İˆLK[\œÛ][Û›[NÜ™^ÜÏ^_JKLÍŠOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹Ü™^ÜÏVÈ˜Ø[˜XÚÔØÛÜH‹˜ÛÛ\]Q[^H‹™[^H‹™\˜][Ûˆ‹™X\ÙH‹™X\ÙT\˜[\È‹™›\‹™›\H‹šÛ‹š[\œÛ][Ûˆ‹›ÛÜ‹›ÛÜ[^H‹›ÛXİ]™H‹›ÛXİ]™T\˜[\È‹›ÛÛÛ\]H‹›ÛÛÛ\]T\˜[\È‹›Û“ÛÜ‹›Û“ÛÜ\˜[\È‹›Û”]\ÙH‹›Û”]\ÙT\˜[\È‹›Û”™\X]‹›Û”™\X]\˜[\È‹›Û”™\İ[YH‹›Û”™\İ[YT\˜[\È‹›Û”İ\‹›Û”İ\\˜[\È‹›Û”İÜ‹›Û”İÜ\˜[\È‹›Û•\]H‹›Û•\]T\˜[\È‹›Û–[Ş[È‹›Û–[Ş[Ô\˜[\È‹œ]\ÙY‹œ\œÚ\İ‹œ›ÜÈ‹œ™\X]‹œ™\X][^H‹\™Ù]È‹[Ş[È—_JKŒNŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆ]
ÌŠKÏ]
ÍNJKÏ]
ŠK]
ŒÊK]
ÎMJKO]
ÍŒÎÊKÏ]
ŒÍLÊKO]
MÍÊKO]
ŒŒŒ
K[™]ÈÊÑ^[™Î›[š]X[^™N™[˜İ[ÛŠŠ^Û˜Ø[
\Ë
K\Ë\™Ù]ÏY‹\Ëİ[\™Ù]ÏY‹›[™İ\Ëš\ÔÙYZÚ[™ÏHLK\Ëš\Ò[™š[š]OHLK\Ë™[\ÙYL\Ëİ[[\ÙYL\Ë™\˜][ÛL\Ëœ›ÙÜ™\ÜÏL\Ëİ[\˜][ÛL\Ëİ[›ÙÜ™\ÜÏL\Ëš\Ó[X™\•ÙY[HL_KY™[˜İ[ÛŠK‹‹KËËËKKK‹
^İ˜\ˆÏ[™]ÈJ\ËK‹‹KËËËKKK‹
NÜ™]\›ˆ\Ëİ[]O]\Ë™]Kœ\Ú
ÊKßKYœ˜[YN™[˜İ[ÛŠK‹‹KËËÊ^İ˜\ˆO[™]ÈJ\ËK‹‹KËËÊNÜ™]\›ˆ\Ëİ[]O]\Ë™]Kœ\Ú
JK_KÙ]˜[YN™[˜İ[ÛŠJ^İOOO]›ÚY	‰ŠOL
Nİ˜\ˆ[[Ü™]\›ˆ\Ë™]I‰Š]\Ë™]VİWK˜İ\œ™[
KK\Õ\™Ù]™[˜İ[ÛŠJ^Ü™]\›ˆ\Ë\™Ù]É‰\Ë\™Ù]Ëš[™^ÙŠJHOOKL_K\]UÎ™[˜İ[ÛŠKŠ^ÚYŠOO]›ÚY	‰ŠHLJKHOOH^\™HŠY›ÜŠ˜\ˆLİ\Ëİ[]NİŠÊÊ^İ˜\ˆO]\Ë™]Vİ—NÛKšÙ^OOO]I‰ŠKš\Ô^Z[™Ñ›ÜØ\™

_Kš\Ô^Z[™Ğ˜XÚİØ\™

JI‰ŠK™[™Y‰‰ŠKœİ\[K˜İ\œ™[
J_\™]\›ˆ\ßK™\İ\™[˜İ[ÛŠ
^ÜİÚ]Ú
\Ëœİ]J^ØØ\ÙHË”‘SSÕ‘Q˜Ø\ÙHË‘’S’TÒQ\ËœÙYZÊ
K\Ëœ\™[›XZÙPXİ]™J\ÊNØœ™XZÎØØ\ÙHË”S‘S‘Î˜Ø\ÙHË”S‘S‘×Ô‘SSÕ‘N\Ëœ\™[œ™\Ù]
\ÊNØœ™XZÎØØ\ÙHË‘TÕ“ÖQQ˜ÛÛœÛÛKØ\›ŠØ[››İ™\İ\\İ›ŞYYÙY[ˆ‹\ÊNØœ™XZÎÙY˜][\ËœÙYZÊ
NØœ™XZß\™]\›ˆ\Ëœ]\ÙYHLK\Ëš\Ôİ\YHLK\ßK™^İ]N™[˜İ[ÛŠ
^ÚYŠ\Ë›ÛÜÛİ[\Œ
]\Ë™[\ÙYL\Ëœ›ÙÜ™\ÜÏL\Ë›ÛÜÛİ[\‹KK\Ëš[š]ÙY[‘]JL
K\Ë›ÛÜ[^OŒÊ\Ë˜Ûİ[İÛ]\Ë›ÛÜ[^K\ËœÙ]ÛÜ[^Tİ]J
JNŠ\ËœÙ]Xİ]™Tİ]J
K\Ë™\Ü]Ú]™[
Ë•ÑQS—ÓÓÔ›Û“ÛÜŠJNÙ[ÙHYŠ\Ë˜ÛÛ\]Q[^OŒ
]\Ë˜Ûİ[İÛ]\Ë˜ÛÛ\]Q[^K\ËœÙ]ÛÛ\]Q[^Tİ]J
NÙ[ÙH™]\›ˆ\Ë›ÛÛÛ\]R[™\Š
KLÜ™]\›ˆL_KÛÛÛ\]R[™\™[˜İ[ÛŠ
^İ\Ëœ›ÙÜ™\ÜÏLK\Ëİ[›ÙÜ™\ÜÏLKœ›İİ\K›ÛÛÛ\]R[™\‹˜Ø[
\Ê_K^N™[˜İ[ÛŠ
^Ü™]\›ˆ\Ëš\Ñ\İ›ŞYY

OÊÛÛœÛÛKØ\›ŠØ[››İ^H\İ›ŞYYÙY[ˆ‹\ÊK\ÊNŠ
\Ëš\Ô[™[™Ô™[[İ™J
_\Ëš\Ñš[š\ÚY

JI‰\ËœÙYZÊ
K\Ëœ]\ÙYHLK\ËœÙ]Xİ]™Tİ]J
K\Ê_KÙYZÎ™[˜İ[ÛŠKŠ^ÚYŠOOO]›ÚY	‰ŠOL
KOO]›ÚY	‰ŠLM‹ŠKOO]›ÚY	‰ŠHLJK\Ëš\Ñ\İ›ŞYY

J\™]\›ˆÛÛœÛÛKØ\›ŠØ[››İÙYZÈ\İ›ŞYYÙY[ˆ‹\ÊK\ÎÙŸ
\Ëš\ÔÙYZÚ[™ÏHL
K\Ëœ™\Ù]
L
K\Ëš[š]ÙY[‘]JL
K\ËœÙ]Xİ]™Tİ]J
K\Ë™\Ü]Ú]™[
Ë•ÑQS—ĞPÕU‘K›ÛXİ]™HŠNİ˜\ˆ]\Ëœ]\ÙYÚYŠ\Ëœ]\ÙYHLKOŒ
^Ù›ÜŠ˜\ˆOSX]™›ÛÜŠKÙ
K]K[J™ÏLÙÏNÙÊÊÊ]\Ë\]J
NŞŒ	‰\Ë\]J
_\™]\›ˆ\Ëœ]\ÙY]‹\Ëš\ÔÙYZÚ[™ÏHLK\ßK[š]ÙY[‘]N™[˜İ[ÛŠJ^İOOO]›ÚY	‰ŠOHLJK\Ë™\˜][ÛL\Ëœİ\[^OYK“PVÔĞQ‘WÒS•QÑTÙ›ÜŠ˜\ˆ]\Ë™]KLÙ\Ëİ[]NÙŠÊÊYÙ—Kœ™\Ù]
JNİ\Ë™\˜][ÛSX]›X^
\Ë™\˜][Û‹ŒJNİ˜\ˆ]\Ë™\˜][Û‹O]\Ë˜ÛÛ\]Q[^K]\Ë›ÛÜÛİ[\‹Ï]\Ë›ÛÜ[^NŞŒİ\Ëİ[\˜][Û]ŠÛJÊŠÙÊJ\Ëİ[\˜][Û]ŠÛ_K™\Ù]™[˜İ[ÛŠJ^Ü™]\›ˆOOO]›ÚY	‰ŠOHLJK\Ë™[\ÙYL\Ëİ[[\ÙYL\Ëœ›ÙÜ™\ÜÏL\Ëİ[›ÙÜ™\ÜÏL\Ë›ÛÜÛİ[\]\Ë›ÛÜ\Ë›ÛÜOOKLI‰Š\Ëš\Ò[™š[š]OHL\Ë›ÛÜÛİ[\\Ë“PV
K_
\Ëš[š]ÙY[‘]J
K\ËœÙ]Xİ]™Tİ]J
K\Ë™\Ü]Ú]™[
Ë•ÑQS—ĞPÕU‘K›ÛXİ]™HŠJK\ßK\]N™[˜İ[ÛŠJ^ÚYŠ\Ëš\Ô[™[™Ô™[[İ™J
_\Ëš\Ñ\İ›ŞYY

J\™]\›ˆ\Ëœ\œÚ\İÊ\ËœÙ]š[š\ÚYİ]J
KLJNˆLÚYŠ\Ëœ]\ÙY\Ëš\Ñš[š\ÚY

J\™]\›ˆLNÚYŠJ]\Ë[YTØØ[J\Ëœ\™[[YTØØ[K\Ëš\ÓÛÜ[^YY

J\™]\›ˆ\Ë\]SÛÜÛİ[İÛŠJKLNÚYŠ\Ëš\ĞÛÛ\]Q[^YY

J\™]\›ˆ\Ë\]PÛÛ\]Q[^JJKLNİ\Ëš\Ôİ\Y
\Ëœİ\[^KO]K\Ëœİ\[^OL	‰Š\Ëš\Ôİ\YHL\Ë™\Ü]Ú]™[
Ë•ÑQS—ÔÕT•›Û”İ\ŠKOL
JNİ˜\ˆHLNÚYŠ\Ëš\ĞXİ]™J
JY›ÜŠ˜\ˆ]\Ë™]KLİ\Ëİ[]NİŠÊÊY–İ—K\]JJI‰ŠHL
Nİ\Ë™[\ÙY
Ï]K\Ëœ›ÙÜ™\ÜÏSX]›Z[Š\Ë™[\ÙYİ\Ë™\˜][Û‹JK\Ëİ[[\ÙY
Ï]K\Ëİ[›ÙÜ™\ÜÏSX]›Z[Š\Ëİ[[\ÙYİ\Ëİ[\˜][Û‹JK\Ë›™^İ]J
Nİ˜\ˆO]\Ëš\Ô[™[™Ô™[[İ™J
NÜ™]\›ˆI‰\Ëœ\œÚ\İ	‰Š\ËœÙ]š[š\ÚYİ]J
KOHLJK_K›ÜØ\™™[˜İ[ÛŠJ^Ü™]\›ˆ\Ë\]JJK\ßK™]Ú[™™[˜İ[ÛŠJ^Ü™]\›ˆ\Ë\]J]JK\ßK\Ü]Ú]™[™[˜İ[ÛŠK
^ÚYŠ]\Ëš\ÔÙYZÚ[™Ê^ÚYŠ\Ë™[Z]
K\Ë\Ë\™Ù]ÊK]\Ë˜Ø[˜XÚÜÊ\™]\›İ˜\ˆ]\Ë˜Ø[˜XÚÜÖÙNÙ‰‰™‹™[˜Ë˜\J\Ë˜Ø[˜XÚÔØÛÜKİ\Ë\Ë\™Ù]×K˜ÛÛ˜Ø]
‹œ\˜[\ÊJ__K\İ›ŞN™[˜İ[ÛŠ
^Ûœ›İİ\K™\İ›ŞK˜Ø[
\ÊK\Ë\™Ù]Ï[[_JNÛ‹œ™YÚ\İ\ŠÙY[ˆ‹[˜İ[ÛŠJ^Ü™]\›ˆ\ËœØÙ[™KœŞ\ËÙY[œË˜Y
J_JK‹œ™YÚ\İ\ŠÙY[ˆ‹[˜İ[ÛŠJ^Ü™]\›ˆ\ËœØÙ[™KœŞ\ËÙY[œË˜Ü™X]JJ_JK™^ÜÏZJKÎMŒŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆ]
ÌLJKÏ]
ÌŠKÏ]
ÍNJK]
ŠK]
ŒÊKO]
ÎMJKÏ]
ŒÍLÊKO[™]ÈÊÑ^[™Î˜Ë[š]X[^™N™[˜İ[ÛŠ
^ØË˜Ø[
\Ë
K\Ë˜İ\œ™[ÙY[[[\Ë˜İ\œ™[[™^LK[š]™[˜İ[ÛŠ
^Ü™]\›ˆ\Ë›ÛÜÛİ[\]\Ë›ÛÜOOKLOÜË“PV\Ë›ÛÜ\ËœÙ]İ\œ™[ÙY[Š
K\Ëœİ\[^OŒ	‰ˆ]\Ëš\Ôİ\[^YY

Oİ\ËœÙ]İ\[^Tİ]J
N\ËœÙ]Xİ]™Tİ]J
K\ßKY™[˜İ[ÛŠJ^İ˜\ˆ]\Ëœ\™[˜Ü™X]JJNĞ\œ˜^Kš\Ğ\œ˜^J
_
VÚJNÙ›ÜŠ˜\ˆO]\Ë™]KLÙ›[™İÙ
ÊÊ^İ˜\ˆZÙNÙ‹œ\™[]\ËKœ\Ú
‹œ™\Ù]

J_\™]\›ˆ\Ëİ[]O]K›[™İ\ßK™[[İ™N™[˜İ[ÛŠJ^Ü™]\›ˆ
\Ë™]KJKKœÙ]™[[İ™Yİ]J
KOOO]\Ë˜İ\œ™[ÙY[‰‰\Ë›™^ÙY[Š
K\Ëİ[]O]\Ë™]K›[™İ\ßK\Õ\™Ù]™[˜İ[ÛŠJ^Ù›ÜŠ˜\ˆ]\Ë™]KOLİO\Ëİ[]NİJÊÊZYŠİWKš\Õ\™Ù]
JJ\™]\›ˆLÜ™]\›ˆL_K™\İ\™[˜İ[ÛŠ
^Ü™]\›ˆ\Ëš\Ñ\İ›ŞYY

OÊÛÛœÛÛKØ\›ŠØ[››İ™\İ\\İ›ŞYYÙY[ÚZ[ˆ‹\ÊK\ÊNŠ\Ëš\Ô™[[İ™Y

I‰\Ëœ\™[›XZÙPXİ]™J\ÊK\Ëœ™\Ù]ÙY[œÊ
K\Ëœ]\ÙYHLK\Ëš[š]

J_K™\Ù]™[˜İ[ÛŠJ^Ü™]\›ˆKœÙYZÊ
KKœÙ]Xİ]™Tİ]J
K\ßKXZÙPXİ]™N™[˜İ[ÛŠJ^Ü™]\›ˆKœ™\Ù]

KKœÙ]Xİ]™Tİ]J
K\ßK™^İ]N™[˜İ[ÛŠ
^ÚYŠ\Ë›ÛÜÛİ[\Œ
]\Ë›ÛÜÛİ[\‹KK\Ëœ™\Ù]ÙY[œÊ
K\Ë›ÛÜ[^OŒÊ\Ë˜Ûİ[İÛ]\Ë›ÛÜ[^K\ËœÙ]ÛÜ[^Tİ]J
JNŠ\ËœÙ]Xİ]™Tİ]J
K\Ë™\Ü]Ú]™[
‹•ÑQS—ÓÓÔ›Û“ÛÜŠJNÙ[ÙHYŠ\Ë˜ÛÛ\]Q[^OŒ
]\Ë˜Ûİ[İÛ]\Ë˜ÛÛ\]Q[^K\ËœÙ]ÛÛ\]Q[^Tİ]J
NÙ[ÙH™]\›ˆ\Ë›ÛÛÛ\]R[™\Š
KLÜ™]\›ˆL_K^N™[˜İ[ÛŠ
^Ü™]\›ˆ\Ëš\Ñ\İ›ŞYY

OÊÛÛœÛÛKØ\›ŠØ[››İ^H\İ›ŞYYÙY[ÚZ[ˆ‹\ÊK\ÊNŠ
\Ëš\Ô[™[™Ô™[[İ™J
_\Ëš\Ô[™[™Ê
JI‰\Ëœ™\Ù]ÙY[œÊ
K\Ëœ]\ÙYHLK\Ëœİ\[^OŒ	‰ˆ]\Ëš\Ôİ\[^YY

Oİ\ËœÙ]İ\[^Tİ]J
N\ËœÙ]Xİ]™Tİ]J
K\Ê_K™\Ù]ÙY[œÎ™[˜İ[ÛŠ
^Ù›ÜŠ˜\ˆO]\Ë™]K]\Ëİ[]KOLİOİJÊÊZVİWKœ™\Ù]
LJNİ\ËœÙ]İ\œ™[ÙY[Š
_K\]N™[˜İ[ÛŠJ^ÚYŠ\Ëš\Ô[™[™Ô™[[İ™J
_\Ëš\Ñ\İ›ŞYY

J\™]\›ˆ\Ëœ\œÚ\İÊ\ËœÙ]š[š\ÚYİ]J
KLJNˆLÚYŠ\Ëš\Ñš[š\ÚY

_\Ëœ]\ÙY
\™]\›ˆLNÚYŠJ]\Ëœ\™[[YTØØ[K\Ëš\ÓÛÜ[^YY

J\™]\›ˆ\Ë\]SÛÜÛİ[İÛŠJKLNÚYŠ\Ëš\ĞÛÛ\]Q[^YY

J\™]\›ˆ\Ë\]PÛÛ\]Q[^JJKLNİ\Ëš\Ôİ\Y
\Ëœİ\[^KOZK\Ëœİ\[^OL	‰Š\Ëš\Ôİ\YHL\Ë™\Ü]Ú]™[
‹•ÑQS—ÔÕT•›Û”İ\ŠKOL
JNİ˜\ˆHLNÜ™]\›ˆ\Ëš\ĞXİ]™J
I‰\Ë˜İ\œ™[ÙY[‰‰Š\Ë˜İ\œ™[ÙY[‹\]JJI‰\Ë›™^ÙY[Š
I‰\Ë›™^İ]J
K]\Ëš\Ô[™[™Ô™[[İ™J
K	‰\Ëœ\œÚ\İ	‰Š\ËœÙ]š[š\ÚYİ]J
KHLJJKK™^ÙY[™[˜İ[ÛŠ
^Ü™]\›ˆ\Ë˜İ\œ™[[™^
ÊË\Ë˜İ\œ™[[™^OO]\Ëİ[]OÈLŠ\ËœÙ]İ\œ™[ÙY[Š\Ë˜İ\œ™[[™^
KLJ_KÙ]İ\œ™[ÙY[™[˜İ[ÛŠJ^İ\Ë˜İ\œ™[[™^ZK\Ë˜İ\œ™[ÙY[]\Ë™]VÚWK\Ë˜İ\œ™[ÙY[‹œÙ]Xİ]™Tİ]J
_K\Ü]Ú]™[™[˜İ[ÛŠK
^İ\Ë™[Z]
K\ÊNİ˜\ˆO]\Ë˜Ø[˜XÚÜÖÚNİI‰K™[˜Ë˜\J\Ë˜Ø[˜XÚÔØÛÜKİ\×K˜ÛÛ˜Ø]
Kœ\˜[\ÊJ_K\İ›ŞN™[˜İ[ÛŠ
^ØËœ›İİ\K™\İ›ŞK˜Ø[
\ÊK\Ë˜İ\œ™[ÙY[[[_JNÙKœ™YÚ\İ\ŠÙY[˜ÚZ[ˆ‹[˜İ[ÛŠJ^Ü™]\›ˆ\ËœØÙ[™KœŞ\ËÙY[œË˜ÚZ[ŠJ_JK‹œ™YÚ\İ\ŠÙY[˜ÚZ[ˆ‹[˜İ[ÛŠJ^Ü™]\›ˆ\ËœØÙ[™KœŞ\ËÙY[œË˜Ü™X]JJ_JK™^ÜÏX_JKMÍÎŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆ]
MLŠKÏ]
LÌNJKÏ]
ÍNJK]
ŠK[™]ÈÊÑ^[™Î›[š]X[^™N™[˜İ[ÛŠËKKK‹‹KËËËKJ^Û˜Ø[
\ËËK‹KËËËJK\ËšÙ^OZK\Ë™Ù]Xİ]™U˜[YOY\Ë™Ù][™˜[YOZ\Ë™Ù]İ\˜[YO]K\Ë™X\ÙOY‹\Ëœİ\L\Ëœ™]š[İ\ÏL\Ë˜İ\œ™[L\Ë™[™L\Ëš[\œÛ][ÛT\Ëš[\œÛ][Û‘]OP_K™\Ù]™[˜İ[ÛŠJ^Ûœ›İİ\Kœ™\Ù]˜Ø[
\ÊNİ˜\ˆÏ]\ËÙY[‹\™Ù]Öİ\Ë\™Ù][™^KO]\ËšÙ^NÙI‰ŠÖØWO]\Ëœİ\
K\Ëœİ\L\Ëœ™]š[İ\ÏL\Ë˜İ\œ™[L\Ë™[™L\Ë™Ù]Xİ]™U˜[YI‰ŠÖØWO]\Ë™Ù]Xİ]™U˜[YJËK
J_K\]N™[˜İ[ÛŠJ^İ˜\ˆÏ]\ËÙY[‹O\Ëİ[\™Ù]ËO]\Ë\™Ù][™^\Ë\™Ù]ÖÚWKO]\ËšÙ^NÚYŠZ
\™]\›ˆ\ËœÙ]ÛÛ\]Tİ]J
KLNÚYŠ\Ëš\ĞÛİ[İÛ‰‰Š\Ë™[\ÙYOYK\Ë™[\ÙYL	‰Š\Ë™[\ÙYLOL\Ëš\Ñ[^YY

Oİ\ËœÙ][™[™Ô™[™\”İ]J
N\Ëš\Ô™\X][™Ê
OÊ\ËœÙ]^Z[™Ñ›ÜØ\™İ]J
K\Ë™\Ü]Ú]™[
‹•ÑQS—Ô‘TPU›Û”™\X]ŠJN\Ëš\ÒÛ[™Ê
I‰\ËœÙ]İ]Qœ›ÛQ[™

JJK\Ëš\Ô[™[™Ô™[™\Š
J\™]\›ˆ\Ëœİ\]\Ë™Ù]İ\˜[YJKİWKKKÊK\Ë™[™]\Ë™Ù][™˜[YJK\Ëœİ\KKÊK\Ë˜İ\œ™[]\Ëœİ\İWO]\Ëœİ\\ËœÙ]^Z[™Ñ›ÜØ\™İ]J
KLİ˜\ˆ]\Ëš\Ô^Z[™Ñ›ÜØ\™

K]\Ëš\Ô^Z[™Ğ˜XÚİØ\™

NÚYŠŠ^İ˜\ˆ]\Ë™[\ÙYO]\Ë™\˜][Û‹LÏHLNİŠÏYK[OÊ]‹[K[KÏHL
N	‰ŠL
Nİ˜\ˆXÊ‹ÛKJNİ\Ë™[\ÙY]‹\Ëœ›ÙÜ™\ÜÏU\Ëœ™]š[İ\Ï]\Ë˜İ\œ™[
LKU
Nİ˜\ˆÏ]\Ë™X\ÙJ
Nİ\Ëš[\œÛ][Ûİ\Ë˜İ\œ™[]\Ëš[\œÛ][ÛŠ\Ëš[\œÛ][Û‘]KÊN\Ë˜İ\œ™[]\Ëœİ\
Ê\Ë™[™]\Ëœİ\
J”ËİWO]\Ë˜İ\œ™[É‰ŠÊËš\Ó[X™\•ÙY[‰‰Š\Ë˜İ\œ™[]\Ë™[™İWO]\Ë˜İ\œ™[
K\ËšÛŒÊ\Ë™[\ÙY]\ËšÛ\ËœÙ]Ûİ]J
JN\ËœÙ]İ]Qœ›ÛQ[™

JNŠËš\Ó[X™\•ÙY[‰‰Š\Ë˜İ\œ™[]\Ëœİ\İWO]\Ë˜İ\œ™[
K\ËœÙ]İ]Qœ›ÛTİ\

JJK\Ë™\Ü]Ú]™[
‹•ÑQS—ÕTUK›Û•\]HŠ_\™]\›ˆ]\Ëš\ĞÛÛ\]J
_K\Ü]Ú]™[™[˜İ[ÛŠKÊ^İ˜\ˆO]\ËÙY[ÚYŠXKš\ÔÙYZÚ[™Ê^İ˜\ˆOXK\™Ù]Öİ\Ë\™Ù][™^K]\ËšÙ^KO]\Ë˜İ\œ™[]\Ëœ™]š[İ\ÎØK™[Z]
KKKK
Nİ˜\ˆXK˜Ø[˜XÚÜÖÜ×NÙ‰‰™‹™[˜Ë˜\JK˜Ø[˜XÚÔØÛÜKØKKKK˜ÛÛ˜Ø]
‹œ\˜[\ÊJ__K\İ›ŞN™[˜İ[ÛŠ
^Ûœ›İİ\K™\İ›ŞK˜Ø[
\ÊK\Ë™Ù]Xİ]™U˜[YO[[\Ë™Ù][™˜[YO[[\Ë™Ù]İ\˜[YO[[\Ë™X\ÙO[[_JNÜ™^ÜÏ[ŸJKŒŒŒŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆ]
MLŠKÏ]
LÌNJKÏ]
ÍNJK]
ŠK[™]ÈÊÑ^[™Î›[š]X[^™N™[˜İ[ÛŠËKKK‹‹KÊ^Û˜Ø[
\ËËKKLK‹‹KÊK\ËšÙ^OH^\™H‹\Ëœİ\^\™O[[\Ë™[™^\™OZK\Ëœİ\œ˜[YO[[\Ë™[™œ˜[YOZ\Ë[Ş[Ï]ˆOOLK™\Ù]™[˜İ[ÛŠJ^Ûœ›İİ\Kœ™\Ù]˜Ø[
\ÊNİ˜\ˆÏ]\ËÙY[‹\™Ù]Öİ\Ë\™Ù][™^Nİ\Ëœİ\^\™_
\Ëœİ\^\™O\Ë^\™KšÙ^K\Ëœİ\œ˜[YO\Ë™œ˜[YK›˜[YJKI‰œËœÙ]^\™J\Ëœİ\^\™K\Ëœİ\œ˜[YJ_K\]N™[˜İ[ÛŠJ^İ˜\ˆÏ]\ËÙY[‹O]\Ë\™Ù][™^O\Ë\™Ù]ÖØWNÚYŠZJ\™]\›ˆ\ËœÙ]ÛÛ\]Tİ]J
KLNÚYŠ\Ëš\ĞÛİ[İÛ‰‰Š\Ë™[\ÙYOYK\Ë™[\ÙYL	‰Š\Ë™[\ÙYLOL\Ëš\Ñ[^YY

Oİ\ËœÙ][™[™Ô™[™\”İ]J
N\Ëš\Ô™\X][™Ê
OÊ\ËœÙ]^Z[™Ñ›ÜØ\™İ]J
K\Ë™\Ü]Ú]™[
‹•ÑQS—Ô‘TPU›Û”™\X]ŠJN\Ëš\ÒÛ[™Ê
I‰\ËœÙ]İ]Qœ›ÛQ[™

JJK\Ëš\Ô[™[™Ô™[™\Š
J\™]\›ˆ\Ëœİ\^\™I‰šKœÙ]^\™J\Ëœİ\^\™K\Ëœİ\œ˜[YJK\ËœÙ]^Z[™Ñ›ÜØ\™İ]J
KLİ˜\ˆ]\Ëš\Ô^Z[™Ñ›ÜØ\™

KO]\Ëš\Ô^Z[™Ğ˜XÚİØ\™

NÚYŠJ^İ˜\ˆ]\Ë™[\ÙY]\Ë™\˜][Û‹LOHLNÙ
ÏYKYÊYY‹Y‹OHL
N™	‰ŠL
Nİ˜\ˆXÊÙ‹JNİ\Ë™[\ÙYY\Ëœ›ÙÜ™\ÜÏ^I‰ŠÊKœÙ]^\™J\Ë™[™^\™K\Ë™[™œ˜[YJK\ËšÛŒÊ\Ë™[\ÙY]\ËšÛ\ËœÙ]Ûİ]J
JN\ËœÙ]İ]Qœ›ÛQ[™
ŠJNŠKœÙ]^\™J\Ëœİ\^\™K\Ëœİ\œ˜[YJK\ËœÙ]İ]Qœ›ÛTİ\
ŠJJK\Ë™\Ü]Ú]™[
‹•ÑQS—ÕTUK›Û•\]HŠ_\™]\›ˆ]\Ëš\ĞÛÛ\]J
_K\Ü]Ú]™[™[˜İ[ÛŠKÊ^İ˜\ˆO]\ËÙY[ÚYŠXKš\ÔÙYZÚ[™Ê^İ˜\ˆOXK\™Ù]Öİ\Ë\™Ù][™^K]\ËšÙ^NØK™[Z]
KKJNİ˜\ˆOXK˜Ø[˜XÚÜÖÜ×NİI‰K™[˜Ë˜\JK˜Ø[˜XÚÔØÛÜKØKKK˜ÛÛ˜Ø]
Kœ\˜[\ÊJ__K\İ›ŞN™[˜İ[ÛŠ
^Ûœ›İİ\K™\İ›ŞK˜Ø[
\ÊK\Ëœİ\^\™O[[\Ë™[™^\™O[[\Ëœİ\œ˜[YO[[\Ë™[™œ˜[YO[[_JNÜ™^ÜÏ[ŸJKŒÍLÎŠOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆO^ĞÔ‘PUQŒSVNŒ‹S‘S‘×Ô‘S‘TVRS‘×Ñ“Ô•ĞT‘KVRS‘×ĞPÒÕĞT‘‹ÓÑSVNË‘TPUÑSVNÓÓTUNKS‘S‘ÎŒŒPÕU‘NŒŒKÓÔÑSVNŒŒ‹ÓÓTUWÑSVNŒŒËÕT•ÑSVNŒS‘S‘×Ô‘SSÕ‘NŒK‘SSÕ‘QŒ‹’S’TÒQŒËTÕ“ÖQQŒPVNNNNNNNNNNN_NÜ™^ÜÏ^_JKÍNNŠOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹Ù[˜İ[ÛˆJŠ^Ü™]\›ˆH[‹™Ù]	‰\[Ùˆ‹™Ù]OH™[˜İ[ÛˆŸH[‹œÙ]	‰\[Ùˆ‹œÙ]OH™[˜İ[ÛˆŸY[˜İ[Ûˆ
‹KÊ^İ˜\ˆO\ÏÛ–ÙWN“Øš™Xİ™Ù]İÛ”›Ü\Q\ØÜš\ÜŠ‹JNÜ™]\›ˆ\É‰˜K˜[YI‰\[ÙˆK˜[YOOH›Øš™Xİ‰‰ŠOXK˜[YJKI‰JJOÊ\[ÙˆK™[[Y\˜X›OˆH‰‰ŠK™[[Y\˜X›OHL
K\[ÙˆK˜ÛÛ™šYİ\˜X›OˆH‰‰ŠK˜ÛÛ™šYİ\˜X›OHL
KJNˆL_Y[˜İ[Ûˆ
‹J^İ˜\ˆÏSØš™Xİ™Ù]İÛ”›Ü\Q\ØÜš\ÜŠ‹JNÜ™]\›ˆÏÊË˜[YI‰\[ÙˆË˜[YOOH›Øš™Xİ‰‰ŠÏ\Ë˜[YJKË˜ÛÛ™šYİ\˜X›OOOHLJNˆL_Y[˜İ[ÛˆÊ‹KËJ^Ù›ÜŠ˜\ˆH[ˆJZYŠKš\ÓİÛ”›Ü\JJJ^İ˜\ˆ]
KKÊNÚYŠOOHLJ^İ˜\ˆOX_ÚYŠ
Kœ›İİ\KJJ^ÚYŠ‹šYÛ›Ü™Qš[˜[ÊXÛÛ[YNİ›İÈ™]È\œ›ÜŠ˜Ø[››İİ™\œšYHš[˜[›Ü\H	ÈŠÚJÈ‰ËÙ]Û\ÜËšYÛ›Ü™Qš[˜[ÈHYHÈÚÚ\Š_SØš™Xİ™Yš[™T›Ü\J‹œ›İİ\KK
_Y[ÙH‹œ›İİ\VÚWOYVÚW__Y[˜İ[ÛˆÊ‹J^ÚYŠJ^Ğ\œ˜^Kš\Ğ\œ˜^JJ_
OVÙWJNÙ›ÜŠ˜\ˆÏLÜÏK›[™İÜÊÊÊXÊ‹VÜ×Kœ›İİ\_VÜ×J__Y[˜İ[ÛˆŠŠ^ÛŸ
^ßJNİ˜\ˆKÎÚYŠ‹š[š]X[^™J^ÚYŠ\[Ùˆ‹š[š]X[^™HOH™[˜İ[ÛˆŠ]›İÈ™]È\œ›ÜŠš[š]X[^™H]\İ™HH[˜İ[ÛˆŠNÙO[‹š[š]X[^™K[]H‹š[š]X[^™_Y[ÙHYŠ‹‘^[™Ê^İ˜\ˆO[‹‘^[™ÎÙOY[˜İ[ÛŠ
^ØK˜\J\Ë\™İ[Y[Ê__Y[ÙHOY[˜İ[ÛŠ
^ßNÛ‹‘^[™ÏÊKœ›İİ\OSØš™Xİ˜Ü™X]J‹‘^[™Ëœ›İİ\JKKœ›İİ\K˜ÛÛœİXİÜYKÏ[‹‘^[™Ë[]H‹‘^[™ÊN™Kœ›İİ\K˜ÛÛœİXİÜYNİ˜\ˆO[[Ü™]\›ˆ‹“Z^[œÉ‰ŠO[‹“Z^[œË[]H‹“Z^[œÊKÊKJKÊK‹LÊK_\‹™^[™XË‹›Z^[[Ë‹šYÛ›Ü™Qš[˜[ÏHLK™^ÜÏ\ŸJKMÍÎŠOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆOY[˜İ[ÛŠ
^ßNÜ™^ÜÏ^_JKŒŠOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆOY[˜İ[ÛŠ
^Ü™]\›ˆ[NÜ™^ÜÏ^_JKÌLMŠOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆOY[˜İ[ÛŠËËŠ^ÚYŠOO]›ÚY	‰Š]
KÏŒ
^İ˜\ˆXË]›[™İÚYŠL
\™]\›ˆ[ZYŠP\œ˜^Kš\Ğ\œ˜^J
J\™]\›ˆš[™^ÙŠ
OOOKLOÊœ\Ú

KÉ‰›Ë˜Ø[
‹
K
N›[Ù›ÜŠ˜\ˆO[›[™İLNÙOLÊ]š[™^ÙŠÙWJHOOKLI‰›œÜXÙJKJKKKNÚYŠO[›[™İOOOL
\™]\›ˆ[ØÏŒ	‰™O›‰‰ŠœÜXÙJŠKO[ŠNÙ›ÜŠ˜\ˆÏLÜÏNÜÊÊÊ^İ˜\ˆO[Ü×Nİœ\Ú
JKÉ‰›Ë˜Ø[
‹J_\™]\›ˆNÜ™^ÜÏ^_JKLLÎŠOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆOY[˜İ[ÛŠËË‹Š^ÚYŠÏOO]›ÚY	‰ŠÏL
KOO]›ÚY	‰Š]
KÏŒ
^İ˜\ˆO[Ë]›[™İÚYŠOL
\™]\›ˆ[ZYŠP\œ˜^Kš\Ğ\œ˜^J
J\™]\›ˆš[™^ÙŠ
OOOKLOÊœÜXÙJË
K‰‰œ‹˜Ø[
‹
K
N›[Ù›ÜŠ˜\ˆÏ[›[™İLNÜÏLÊ]š[™^ÙŠÜ×JHOOKLI‰›œÜ

KËKNÚYŠÏ[›[™İÏOOL
\™]\›ˆ[ÛÏŒ	‰œÏ™I‰ŠœÜXÙJJKÏYJNÙ›ÜŠ˜\ˆO\ËLNØOLØKKJ^İ˜\ˆO[ØWNİœÜXÙJËJK‰‰œ‹˜Ø[
‹J_\™]\›ˆNÜ™^ÜÏ^_JKLNŠOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆOY[˜İ[ÛŠ
^İ˜\ˆÏ]š[™^ÙŠ
NÜ™]\›ˆÈOOKLI‰˜Ï›[™İ	‰ŠœÜXÙJËJKœ\Ú

JKNÜ™^ÜÏ^_JKŒMŒLŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆ]
ŒLJKÏY[˜İ[ÛŠË‹‹KÊ^ÙOOO]›ÚY	‰ŠOL
KÏOO]›ÚY	‰ŠÏ[Ë›[™İ
Nİ˜\ˆOLÚYŠ
ËKÊJY›ÜŠ˜\ˆOYNÚOÎÚJÊÊ^İ˜\ˆ[ÖÚWNÚÜ—OOO[‰‰˜JÊß\™]\›ˆ_NÜ™^ÜÏXßJKMMŠOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆOY[˜İ[ÛŠÊ^İ˜\ˆËVÛ[NÙ›ÜŠÏLÎÛÏ\™İ[Y[Ë›[™İÛÊÊÊ\‹œ\Ú
\™İ[Y[ÖÛ×JNÙ›ÜŠÏLÛÏ›[™İÛÊÊÊ\–ÌO]Û×K˜\JËŠNÜ™]\›ˆNÜ™^ÜÏ^_JKÍLMŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆ]
ŒLJKÏY[˜İ[ÛŠË‹‹KÊ^ÚYŠOOO]›ÚY	‰ŠOL
KÏOO]›ÚY	‰ŠÏ[Ë›[™İ
K
ËKÊJ^İ˜\ˆKOVÛ[NÙ›ÜŠOMNØO\™İ[Y[Ë›[™İØJÊÊZKœ\Ú
\™İ[Y[ÖØWJNÙ›ÜŠOYNØOÎØJÊÊZVÌO[ÖØWK‹˜\J‹J_\™]\›ˆßNÜ™^ÜÏXßJKNMMÎŠOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆOY[˜İ[ÛŠÊ^ÚYŠ›[™İ
^ÚYŠ›[™İOOLJ\™]\›ˆÌ_Y[ÙH™]\›ˆ˜Sİ˜\ˆÏLK‹ÚYŠÊ^ÚYŠÌVØ×J\™]\›ˆÌNÙ›ÜŠÛÛ×VØ×OÊ[ÊÊßY[ÙH›ÜŠÛÛ×OÊ[ÊÊÎÜ™]\›ˆÏ››[™İ	‰ŠÏ[›[™İ
KÏÊ[ÛËLWVØ×K[Û×VØ×K‹]]\ÛÛ×N›ÛËLWJNŠ[ÛËLWK[Û×K‹]]\ÛœŠ_NÜ™^ÜÏ^_JKÍLNŠOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆOY[˜İ[ÛŠ
^ÛOO]›ÚY	‰ŠV×JNÙ›ÜŠ˜\ˆÏLØÏ›[™İØÊÊÊP\œ˜^Kš\Ğ\œ˜^JØ×JOŞJØ×K
N›œ\Ú
Ø×JNÜ™]\›ˆNÜ™^ÜÏ^_JKÌLŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆ]
ŒLJKÏY[˜İ[ÛŠË‹‹KÊ^ÙOOO]›ÚY	‰ŠOL
KÏOO]›ÚY	‰ŠÏ[Ë›[™İ
Nİ˜\ˆOV×NÚYŠ
ËKÊJY›ÜŠ˜\ˆOYNÚOÎÚJÊÊ^İ˜\ˆ[ÖÚWNÊ\Ÿ‰‰›OO]›ÚY	‰šš\ÓİÛ”›Ü\JŠ_‰‰›ˆOO]›ÚY	‰šÜ—OOO[ŠI‰˜Kœ\Ú

_\™]\›ˆ_NÜ™^ÜÏXßJKNÌÌNŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆ]
ŒLJKÏY[˜İ[ÛŠË‹‹KÊ^ÚYŠOOO]›ÚY	‰ŠOL
KÏOO]›ÚY	‰ŠÏ[Ë›[™İ
KHOOKLJ^ÚYŠ
ËKÊJY›ÜŠ˜\ˆOYNØOÎØJÊÊ^İ˜\ˆO[ÖØWNÚYŠ\Ÿ‰‰›OO]›ÚY	‰šKš\ÓİÛ”›Ü\JŠ_‰‰›ˆOO]›ÚY	‰šVÜ—OOO[Š\™]\›ˆ__Y[ÙHYŠ
ËÊJY›ÜŠ˜\ˆO\ÎØOLØKKJ^İ˜\ˆO[ÖØWNÚYŠ\Ÿ‰‰›OO]›ÚY	‰šKš\ÓİÛ”›Ü\JŠ_‰‰›ˆOO]›ÚY	‰šVÜ—OOO[Š\™]\›ˆ_\™]\›ˆ[NÜ™^ÜÏXßJKMŠOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆOY[˜İ[ÛŠÊ^ÛOO]›ÚY	‰ŠL
KÏOO]›ÚY	‰ŠÏ]›[™İ
Nİ˜\ˆÏ[
ÓX]™›ÛÜŠX]œ˜[™ÛJ
J˜ÊNÜ™]\›ˆÛ×OOO]›ÚYÛ[Û×_NÜ™^ÜÏ^_JKNÍNŠOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆOY[˜İ[ÛŠÊ^ÚYŠOOXÊ\™]\›ˆİ˜\ˆÏ]š[™^ÙŠ
K]š[™^ÙŠÊNÚYŠÏ
]›İÈ™]È\œ›ÜŠ”İ\YY][\È]\İ™H[[Y[ÈÙˆHØ[YH\œ˜^HŠNÜ™]\›ˆÏœŸ
œÜXÙJËJK]š[™^ÙŠÊKœÜXÙJŠÌK
JKNÜ™^ÜÏ^_JKÌÍÌNŠOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆOY[˜İ[ÛŠÊ^ÚYŠOOXÊ\™]\›ˆİ˜\ˆÏ]š[™^ÙŠ
K]š[™^ÙŠÊNÚYŠÏ
]›İÈ™]È\œ›ÜŠ”İ\YY][\È]\İ™H[[Y[ÈÙˆHØ[YH\œ˜^HŠNÜ™]\›ˆÏŸ
œÜXÙJËJKOOLİ[œÚY

NœÜXÙJ‹
JKNÜ™^ÜÏ^_JKÌŠOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆOY[˜İ[ÛŠ
^İ˜\ˆÏ]š[™^ÙŠ
NÚYŠÏŒ
^İ˜\ˆÏ]ØËLWK]š[™^ÙŠÊNİØ×O[ËÜ—O[\™]\›ˆNÜ™^ÜÏ^_JKMLÎŠOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆOY[˜İ[ÛŠÊ^İ˜\ˆÏ]š[™^ÙŠ
NÚYŠÏOOKL_ÏÏ]›[™İ
]›İÈ™]È\œ›ÜŠ”İ\YY[™^İ]Ùˆ›İ[™ÈŠNÜ™]\›ˆÈOOXÉ‰ŠœÜXÙJËJKœÜXÙJË
JKNÜ™^ÜÏ^_JKLÎŠOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆOY[˜İ[ÛŠ
^İ˜\ˆÏ]š[™^ÙŠ
NÚYŠÈOOKLI‰˜Ï›[™İLJ^İ˜\ˆÏ]ØÊÌWK]š[™^ÙŠÊNİØ×O[ËÜ—O[\™]\›ˆNÜ™^ÜÏ^_JKŒÎŠOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆOY[˜İ[ÛŠËÊ^İ˜\ˆV×K‹OHLNÚYŠ
ßÊI‰ŠOHLß
ÏHˆŠKß
ÏHˆŠJK
Y›ÜŠ]Û[Û‹KJYOÜ‹œ\Ú
ÊÛ‹Ôİš[™Ê
JÛÊNœ‹œ\Ú
ŠNÙ[ÙH›ÜŠ]Û[ÛŠÊÊYOÜ‹œ\Ú
ÊÛ‹Ôİš[™Ê
JÛÊNœ‹œ\Ú
ŠNÜ™]\›ˆŸNÜ™^ÜÏ^_JKNLÎŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆ]
Œ
KÏY[˜İ[ÛŠË‹Š^ÛÏOO]›ÚY	‰ŠÏL
KOO]›ÚY	‰Š[[
KOO]›ÚY	‰ŠLJKOO[[	‰Š[ËÏL
NÙ›ÜŠ˜\ˆOV×KÏSX]›X^


‹[ÊKÊŸJJK
KOLØOÎØJÊÊYKœ\Ú
ÊKÊÏ[Ü™]\›ˆ_NÜ™^ÜÏXßJKÎŠOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹Ù[˜İ[ÛˆJËËŠ^İ˜\ˆXÖÛ×NØÖÛ×OXÖÜ—KÖÜ—O[ŸY[˜İ[Ûˆ
ËÊ^Ü™]\›ˆÏÏËLN˜Ï›ÏÌNŒ]˜\ˆY[˜İ[ÛŠËË‹‹J^Ù›ÜŠOO]›ÚY	‰ŠL
KOO]›ÚY	‰ŠXË›[™İLJKOOO]›ÚY	‰ŠO]
NÛœÊ^ÚYŠ‹\Œ
^İ˜\ˆÏ[‹\ŠÌKO[Ë\ŠÌKOSX]›ÙÊÊKKJ“X]™^
ŠšKÌÊKOKJ“X]œÜ\
Jš
ŠËZ
KÜÊJŠK\ËÌËLNŒJKSX]›X^
‹X]™›ÛÜŠËXJšÜÊİJJKSX]›Z[Š‹X]™›ÛÜŠÊÊËXJJšÜÊİJJNÛ
ËË‹J_]˜\ˆXÖÛ×KO\‹[Ù›ÜŠJË‹ÊKJÖÛ—KŠOŒ	‰JË‹ŠNÛOÊ^Ù›ÜŠJËK
KJÊËKNÙJÖÛWKŠOÊ[JÊÎÙ›ÜŠÙJÖŞKŠOŒÊ^K_YJÖÜ—KŠOOOLŞJË‹
NŠ
ÊËJËŠJK[É‰Š^
ÌJKÏ^	‰Š^LJ__NÜ™^ÜÏ[JKLŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆ]
ÍLMM
KÏ]
ÌÍ
KÏY[˜İ[ÛŠ‹KÊ^Ù›ÜŠ˜\ˆOV×KOLÚO‹›[™İÚJÊÊY›ÜŠ˜\ˆLÚK›[™İÚ
ÊÊY›ÜŠ˜\ˆOLİOÎİJÊÊXKœ\Ú
ØN›–ÚWK™VÚ_JNÜ™]\›ˆ_KY[˜İ[ÛŠ‹KÊ^İ˜\ˆO[
Ë›X^‹
KO[
Ëœ]H‹JK[
Ëœ˜[™ÛH‹LJKO[
Ëœ˜[™ÛPˆ‹LJK[
Ëœ™\X]‹
K[
Ë[Ş[È‹LJKV×NÚYŠI‰˜ÊJKOOKLJZYŠOOOL
YLÙ[Ù^İ˜\ˆO[‹›[™İ
™K›[™İ
šNÙ‰‰ŠJLŠKSX]˜ÙZ[
KÛJ_Y›ÜŠ˜\ˆLŞYŞ
ÊÊ^İ˜\ˆÏ[Ê‹KJNÚ	‰˜ÊÊK]‹˜ÛÛ˜Ø]
ÊK‰‰ŠËœ™]™\œÙJ
K]‹˜ÛÛ˜Ø]
ÊJ_\™]\›ˆI‰‹œÜXÙJJKŸNÜ™^ÜÏ\ŸJKÌLNŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆ]
NLLÌÊKÏY[˜İ[ÛŠË‹‹J^ÙOOO]›ÚY	‰ŠO[ÊNİ˜\ˆÎÚYŠP\œ˜^Kš\Ğ\œ˜^JŠJ\™]\›ˆÏ[Ëš[™^ÙŠŠKÈOOKLOÊ
ËÊK‰‰›‹˜Ø[
KŠKŠN›[Ù›ÜŠ˜\ˆO\‹›[™İLKOV×NØOLÊ^İ˜\ˆ\–ØWNÜÏ[Ëš[™^ÙŠ
KÈOOKLI‰Š
ËÊKKœ\Ú

K‰‰›‹˜Ø[
K
JKKK_\™]\›ˆ_NÜ™^ÜÏXßJKŒŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆ]
NLLÌÊKÏY[˜İ[ÛŠË‹‹J^ÚYŠOOO]›ÚY	‰ŠO[ÊK›Ë›[™İLJ]›İÈ™]È\œ›ÜŠ’[™^İ]Ùˆ›İ[™ÈŠNİ˜\ˆÏ[
ËŠNÜ™]\›ˆ‰‰›‹˜Ø[
KÊKßNÜ™^ÜÏXßJKMNŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆ]
ŒLJKÏY[˜İ[ÛŠË‹‹KÊ^ÚYŠOO]›ÚY	‰ŠL
KOO]›ÚY	‰Š[Ë›[™İ
KÏOO]›ÚY	‰ŠÏ[ÊK
Ë‹ŠJ^İ˜\ˆO[‹\‹O[ËœÜXÙJ‹JNÚYŠJY›ÜŠ˜\ˆLÚK›[™İÚ
ÊÊ^İ˜\ˆOZVÚNÙK˜Ø[
ËJ_\™]\›ˆ_Y[ÙH™]\›–×_NÜ™^ÜÏXßJKÌNMŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆ]
NLLÌÊKÏY[˜İ[ÛŠË‹Š^ÜOO]›ÚY	‰ŠL
KOO]›ÚY	‰Š[Ë›[™İ
Nİ˜\ˆO\ŠÓX]™›ÛÜŠX]œ˜[™ÛJ
J›ŠNÜ™]\›ˆ
ËJ_NÜ™^ÜÏXßJKŒMNŠOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆOY[˜İ[ÛŠÊ^İ˜\ˆÏ]š[™^ÙŠ
K]š[™^ÙŠÊNÜ™]\›ˆÈOOKLI‰œOOKLOÊÛ×OXËL
NˆL_NÜ™^ÜÏ^_JKŒÎŠOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆOY[˜İ[ÛŠ
^ÛOO]›ÚY	‰ŠLJNÙ›ÜŠ˜\ˆÏ[[ÏLÛÏÛÊÊÊXÏ]œÚY

Kœ\Ú
ÊNÜ™]\›ˆßNÜ™^ÜÏ^_JKMNŠOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆOY[˜İ[ÛŠ
^ÛOO]›ÚY	‰ŠLJNÙ›ÜŠ˜\ˆÏ[[ÏLÛÏÛÊÊÊXÏ]œÜ

K[œÚY
ÊNÜ™]\›ˆßNÜ™^ÜÏ^_JKŒLNŠOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆOY[˜İ[ÛŠËÊ^İ˜\ˆ]›[™İÚYŠ\ŸXßÏœŠ^ÚYŠÊ]›İÈ™]È\œ›ÜŠ”˜[™ÙH\œ›Üˆ˜[Y\Èİ]ÚYHXØÙ\X›H˜[™ÙHŠNÜ™]\›ˆL_Y[ÙH™]\›ˆLNÜ™^ÜÏ^_JKMMNŠOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆOY[˜İ[ÛŠ
^İ˜\ˆÏ]š[™^ÙŠ
NÜ™]\›ˆÈOOKLI‰˜ÏŒ	‰ŠœÜXÙJËJK[œÚY

JKNÜ™^ÜÏ^_JKMÎLŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆ]
ŒLJKÏY[˜İ[ÛŠË‹‹KÊ^ÚYŠOOO]›ÚY	‰ŠOL
KÏOO]›ÚY	‰ŠÏ[Ë›[™İ
K
ËKÊJY›ÜŠ˜\ˆOYNØOÎØJÊÊ^İ˜\ˆO[ÖØWNÚKš\ÓİÛ”›Ü\JŠI‰ŠVÜ—O[Š_\™]\›ˆßNÜ™^ÜÏXßJKÌÍŠOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆOY[˜İ[ÛŠ
^Ù›ÜŠ˜\ˆ]›[™İLNÛŒÛKJ^İ˜\ˆÏSX]™›ÛÜŠX]œ˜[™ÛJ
JŠ
ÌJJKÏ]ÛNİÛO]Ø×KØ×O[ß\™]\›ˆNÜ™^ÜÏ^_JKLLŠOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆOY[˜İ[ÛŠ
^İ˜\ˆK×ÙÎÜ™]\›ˆœÛÜ
[˜İ[ÛŠËÊ^Ü™]\›ˆ\œÙR[
Ëœ™\XÙJˆŠKL
K\\œÙR[
Ëœ™\XÙJˆŠKL
_JKNÜ™^ÜÏ^_JKNLLÌÎŠOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆOY[˜İ[ÛŠ
^ÚYŠJ]›[™İ
J^Ù›ÜŠ˜\ˆÏ]›[™İLKÏ]ÛK[ÜÎÜŠÊÊ]Ü—O]ÜŠÌWNÜ™]\›ˆ›[™İXËß_NÜ™^ÜÏ^_JKNLNŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆ]]Üˆ[™ÜH]\È
[™ÛÛšX]ÜœÊBˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆ]
Œ
NÙ[˜İ[ÛˆÊKÊ^Ü™]\›ˆİš[™ÊJK›ØØ[PÛÛ\\™JÊ_Y[˜İ[ÛˆÊKÊ^İ˜\ˆOYK›[™İÚYŠOLJ\™]\›ˆNÙ›ÜŠ˜\ˆO[™]È\œ˜^JJKLNÚNÚ
LŠ^ÜŠKËJNİ˜\ˆOYNÙOZKO]_\™]\›ˆ_Y[˜İ[ÛˆŠKËKJ^İ˜\ˆYK›[™İOLXJŒ‹‹‹KÎÙ›ÜŠLÙÙŠÏY
Y›ÜŠYŠØKO]ŠØKš	‰ŠZ
KOš	‰ŠOZ
KY‹Ï]ÎÊZYŠ‰‰™ÏJ\ÊVŞKVÙ×JOLÚVİJÊ×OYVŞ
Ê×NšVİJÊ×OYVÙÊÊ×NÙ[ÙHYŠŠZVİJÊ×OYVŞ
Ê×NÙ[ÙHYŠÏJZVİJÊ×OYVÙÊÊ×NÙ[ÙHœ™XZß]˜\ˆY[˜İ[ÛŠKÊ^ÚYŠÏOO]›ÚY	‰ŠÏXÊKY_K›[™İŠ\™]\›ˆNÚYŠ™™X]\™\ËœİX›TÛÜ
\™]\›ˆKœÛÜ
ÊNİ˜\ˆO[ÊKÊNÜ™]\›ˆHOOYI‰œŠK[K›[™İJK_NÜ™^ÜÏ[ŸJKMŒÌŠOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆOY[˜İ[ÛŠÊ^ÚYŠOOXÊ\™]\›ˆİ˜\ˆÏ]š[™^ÙŠ
K]š[™^ÙŠÊNÚYŠÏ
]›İÈ™]È\œ›ÜŠ”İ\YY][\È]\İ™H[[Y[ÈÙˆHØ[YH\œ˜^HŠNÜ™]\›ˆÛ×OXËÜ—O[NÜ™^ÜÏ^_JKÍÌLNŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹Ü™^ÜÏ^ÓX]š^
MLMJKY
ÌLMŠKY]
LLÊKœš[™ÕÕÜ
LJKÛİ[[X]Ú[™Î
ŒMŒLŠKXXÚ
MM
KXXÚ[”˜[™ÙN
ÍLM
Kš[™ÛÜÙ\İ[”ÛÜY
NMMÊK›][
ÍLJKÙ][
ÌL
KÙ]š\œİ
NÌÌJKÙ]˜[™ÛN
MŠK[İ™QİÛ
Ì
K[İ™UÎ
MLÊK[İ™U\
LÊK[İ™PX›İ™N
NÍJK[İ™P™[İÎ
ÌÍÌJK[X™\\œ˜^N
ŒÊK[X™\\œ˜^Tİ\
NLÊK]ZXÚÔÙ[Xİ
ÎŠK˜[™ÙN
LŠK™[[İ™N
ÌLJK™[[İ™P]
Œ
K™[[İ™P™]ÙY[
MJK™[[İ™T˜[™ÛQ[[Y[
ÌNMŠK™\XÙN
ŒMJK›İ]SY
ŒÊK›İ]TšYÚ
MN
KØY™T˜[™ÙN
ŒLJKÙ[™Ğ˜XÚÎ
MMJKÙ][
MÎL
KÚY™›N
ÌÍ
KÛÜQYÚ]Î
LLŠKÜXÙSÛ™N
NLLÌÊKİX›TÛÜ
NLNŠKİØ\
MŒÌ
__JKLŒŠOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆOY[˜İ[ÛŠ
^ÚYŠP\œ˜^Kš\Ğ\œ˜^J
_P\œ˜^Kš\Ğ\œ˜^JÌJJ\™]\›ˆLNÙ›ÜŠ˜\ˆ]ÌK›[™İÏLNØÏ›[™İØÊÊÊZYŠØ×K›[™İOO[
\™]\›ˆLNÜ™]\›ˆLNÜ™^ÜÏ^_JKŒÌÍŒŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆ]
NÍŠKÏ]
LŒŠKÏY[˜İ[ÛŠŠ^İ˜\ˆHˆÚYŠXÊŠJ\™]\›ˆÙ›ÜŠ˜\ˆOLÙO‹›[™İÙJÊÊ^Ù›ÜŠ˜\ˆÏLÜÏ–ÙWK›[™İÜÊÊÊ^İ˜\ˆO\–ÙWVÜ×KÔİš[™Ê
NØHOOH[™Yš[™YÛŠÏ[
KŠN›ŠÏHÈ‹Ï–ÙWK›[™İLI‰ŠŠÏHˆŠ_ZYŠO‹›[™İLJ^ÛŠÏX˜Ù›ÜŠ˜\ˆOLÚO–ÙWK›[™İÚJÊÊ[ŠÏH‹KKH‹O–ÙWK›[™İLI‰ŠŠÏHŠÈŠNÛŠÏX˜_\™]\›ˆŸNÜ™^ÜÏ[ßJKLNNŠOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆOY[˜İ[ÛŠ
^Ü™]\›ˆœ™]™\œÙJ
_NÜ™^ÜÏ^_JKŒLŒŠOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆOY[˜İ[ÛŠ
^Ù›ÜŠ˜\ˆLÛ›[™İÛ
ÊÊ]ÛKœ™]™\œÙJ
NÜ™]\›ˆNÜ™^ÜÏ^_JKNÌMÎŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆ]
ÍÎJKÏY[˜İ[ÛŠÊ^Ü™]\›ˆ
ËN
_NÜ™^ÜÏXßJKMÎŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆ]
ÍÎJKÏY[˜İ[ÛŠËŠ^ÜOO]›ÚY	‰ŠLJNÙ›ÜŠ˜\ˆLÛÛŠÊÊ[Ï[
ËL
NÜ™]\›ˆßNÜ™^ÜÏXßJKÍÎNŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆ]
LŒŠKÏ]
JKÏY[˜İ[ÛŠ‹Š^ÚYŠOO]›ÚY	‰ŠNL
K[
ŠJ\™]\›ˆ[ÚYŠ\[ÙˆˆOHœİš[™È‰‰ŠJ‰LÍŒ
ÌÍŒ
ILÍŒ
KOONLOOKLÌOOHœ›İ]SYŠ\XÊŠK‹œ™]™\œÙJ
NÙ[ÙHYŠOOKNLOOLÌOOHœ›İ]TšYÚŠ\‹œ™]™\œÙJ
KXÊŠNÙ[ÙHYŠX]˜XœÊŠOOOLNOOHœ›İ]LNŠ^Ù›ÜŠ˜\ˆOLÙO‹›[™İÙJÊÊ\–ÙWKœ™]™\œÙJ
NÜ‹œ™]™\œÙJ
_\™]\›ˆŸNÜ™^ÜÏ[ßJKLŒÌŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆ]
ÍÎJKÏY[˜İ[ÛŠËŠ^ÜOO]›ÚY	‰ŠLJNÙ›ÜŠ˜\ˆLÛÛŠÊÊ[Ï[
ËNL
NÜ™]\›ˆßNÜ™^ÜÏXßJKMLLŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆ]
ŒÊKÏ]
MN
KÏY[˜İ[ÛŠ‹‹J^ÚYŠOO]›ÚY	‰ŠL
KOOO]›ÚY	‰ŠOL
KHOOL	‰ŠOÛ
‹X]˜XœÊJJN˜Ê‹JJKˆOOL
Y›ÜŠ˜\ˆÏLÜÏ‹›[™İÜÊÊÊ^İ˜\ˆO\–Ü×NÛÛ
KX]˜XœÊŠJN˜ÊKŠ_\™]\›ˆŸNÜ™^ÜÏ[ßJKNŠOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆOY[˜İ[ÛŠ
^Ù›ÜŠ˜\ˆ]›[™İÏ]ÌK›[™İÏ[™]È\œ˜^JÊKLÜÎÜŠÊÊ^ÛÖÜ—O[™]È\œ˜^J
NÙ›ÜŠ˜\ˆ[LNÛ‹LNÛ‹KJ[ÖÜ—VÛ—O]Û—VÜ—_\™]\›ˆßNÜ™^ÜÏ^_JKMLMNŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹Ü™^ÜÏ^ĞÚXÚÓX]š^
LŒŠKX]š^Ôİš[™Î
ŒÌÍŒŠK™]™\œÙPÛÛ[[œÎ
LNN
K™]™\œÙT›İÜÎ
ŒLŒ
K›İ]LN
NÌMÊK›İ]SY
MÊK›İ]SX]š^
ÍÎJK›İ]TšYÚ
LŒÌŠK˜[œÛ]N
MLLŠK˜[œÜÜÙSX]š^
J__JKÌLÌÍŠOËÊŠ‚ˆ
ˆ]]ÜˆšZÛ\È›Ûˆ\™[ˆ
Î‹ËÙÚ]X‹˜ÛÛKÛšZÛ\İšØ˜\ÙMX\œ˜^XY™™\ŠBˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆOHPÑQ‘ÒR’ÓS“ÔT”ÕU•ÖV˜X˜ÙY™ÚZšÛ[›Ü\œİ]Ş^ŒLŒÍMÎJËÈ‹Y[˜İ[ÛŠÊ^Ù›ÜŠ˜\ˆÏ[™]ÈZ[\œ˜^J
K[Ë›[™İXÏÈ™]NˆŠØÊÈØ˜\ÙMˆˆ‹OLÙOÙJÏLÊ[ŠÏ^VÛÖÙWOŒ—KŠÏ^VÊÖÙWIŒÊOÖÙJÌWOKŠÏ^VÊÖÙJÌWIŒMJOŸÖÙJÌ—O—KŠÏ^VÛÖÙJÌ—IŒ×NÜ™]\›ˆ‰LÏOOLÛ[‹œİXœİš[™Ê‹›[™İLJJÈHœ‰LÏOOLI‰Š[‹œİXœİš[™Ê‹›[™İLŠJÈOHŠKŸNÜ™^ÜÏ]JKLÌLÍŠOËÊŠ‚ˆ
ˆ]]ÜˆšZÛ\È›Ûˆ\™[ˆ
Î‹ËÙÚ]X‹˜ÛÛKÛšZÛ\İšØ˜\ÙMX\œ˜^XY™™\ŠBˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹Ù›ÜŠ˜\ˆOHPÑQ‘ÒR’ÓS“ÔT”ÕU•ÖV˜X˜ÙY™ÚZšÛ[›Ü\œİ]Ş^ŒLŒÍMÎJËÈ‹[™]ÈZ[\œ˜^JMŠKLÛK›[™İÛ
ÊÊ]ŞK˜Ú\ÛÙP]

WO[İ˜\ˆÏY[˜İ[ÛŠÊ^ÛÏ[ËœİXœİŠËš[™^ÙŠ‹ŠJÌJNİ˜\ˆ[Ë›[™İ\Š‹ÍKOLËKKÛÖÜ‹LWOOOHH‰‰Š‹KKÖÜ‹L—OOOHH‰‰›‹KJNÙ›ÜŠ˜\ˆO[™]È\œ˜^PY™™\ŠŠK[™]ÈZ[\œ˜^JJKLÙÙŠÏM
\Ï]ÛË˜Ú\ÛÙP]
ŠWKO]ÛË˜Ú\ÛÙP]
ŠÌJWKO]ÛË˜Ú\ÛÙP]
ŠÌŠWK]ÛË˜Ú\ÛÙP]
ŠÌÊWKÙJÊ×O\ÏŸOÙJÊ×OJIŒMJOOŒ‹ÙJÊ×OJIŒÊOŸ	ŒÎÜ™]\›ˆ_NÜ™^ÜÏXßJKNÎNŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹Ü™^ÜÏ^Ğ\œ˜^PY™™\•Ğ˜\ÙM
ÌLÌÍ
K˜\ÙMĞ\œ˜^PY™™\
LÌLÍ
__JKLMÎNNŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹Ü™^ÜÏ^Ğ\œ˜^N
ÍÌLJK˜\ÙM
NÎJKØš™XİÎ
LNÊKİš[™Î
ÌMÍJK“ÓÔ
MÍÊK•S
ŒŠ__JKMÎŠOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆOY[˜İ[ÛŠ
^İ˜\ˆ^ßNÙ›ÜŠ˜\ˆÈ[ˆ
P\œ˜^Kš\Ğ\œ˜^JØ×JOÛØ×O]Ø×KœÛXÙJ
N›Ø×O]Ø×NÜ™]\›ˆNÜ™^ÜÏ^_JKŒŠOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆOY[˜İ[ÛŠ
^İ˜\ˆËÎÚYŠ\[ÙˆOH›Øš™XİŸOO[[
\™]\›ˆÛP\œ˜^Kš\Ğ\œ˜^J
OÖ×NßNÙ›ÜŠÈ[ˆ
XÏ]Û×KÛ×O^JÊNÜ™]\›ˆNÜ™^ÜÏ^_JKÎLLNŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆ]
LŒLŠKÏY[˜İ[ÛŠ
^İ˜\ˆË‹‹KËKOX\™İ[Y[ÖÌ_ßKLKOX\™İ[Y[Ë›[™İHLNÙ›ÜŠ\[ÙˆOOH˜›ÛÛX[ˆ‰‰ŠZKOX\™İ[Y[ÖÌW_ßKLŠKOOOZ	‰ŠO]\ËKZ
NÚNÚ
ÊÊZYŠ
ÏX\™İ[Y[ÖÚJHO[[
Y›ÜŠˆ[ˆÊ[ZVÜ—KO[ÖÜ—KHOOYI‰Š	‰™I‰Š
J_
ÏP\œ˜^Kš\Ğ\œ˜^JJJJOÊÏÊÏHLKO[‰‰\œ˜^Kš\Ğ\œ˜^JŠOÛ–×JN˜O[‰‰›
ŠOÛßKVÜ—OXÊKJJN™HOO]›ÚY	‰ŠVÜ—OYJJNÜ™]\›ˆ_NÜ™^ÜÏXßJKŒÍMŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆ]
ÍML
KÏ]
ÍLMM
KÏY[˜İ[ÛŠ‹‹J^İ˜\ˆÏXÊ‹‹[
NÚYŠÏOO[[
\™]\›ˆNÚYŠ\œ˜^Kš\Ğ\œ˜^JÊJ\™]\›ˆ”“‘œXÚÊÊNÚYŠ\[ÙˆÏOH›Øš™XİŠ^ÚYŠËš\ÓİÛ”›Ü\Jœ˜[™[ŠJ\™]\›ˆ”“‘š[YÙ\’[”˜[™ÙJËœ˜[™[ÌKËœ˜[™[ÌWJNÚYŠËš\ÓİÛ”›Ü\Jœ˜[™›Ø]ŠJ\™]\›ˆ”“‘œ™X[[”˜[™ÙJËœ˜[™›Ø]ÌKËœ˜[™›Ø]ÌWJ_Y[ÙHYŠ\[ÙˆÏOH™[˜İ[ÛˆŠ\™]\›ˆÊŠNÜ™]\›ˆßNÜ™^ÜÏ[ßJKMMMŠOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆOY[˜İ[ÛŠÊ^İ˜\ˆÏ]\[ÙˆÜ™]\›ˆ]ÏOOH›[X™\ˆŸÏOOHœİš[™ÈØÎš\ÓİÛ”›Ü\J
I‰ÛHOO]›ÚYİÛN˜ßNÜ™^ÜÏ^_JKŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆ]
ÍLMM
KÏ]
LÌNJKÏY[˜İ[ÛŠ‹‹KËJ^ØOOO]›ÚY	‰ŠOYJNİ˜\ˆO[
‹‹JNÜ™]\›ˆÊKKÊ_NÜ™^ÜÏ[ßJKÍLMMŠOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆOY[˜İ[ÛŠËÊ^ÚYŠ]	‰ˆ[ß\[ÙˆOH›[X™\ˆŠ\™]\›ˆÎÚYŠ	‰š\ÓİÛ”›Ü\J
J\™]\›ˆÛNÚYŠÉ‰›Ëš\ÓİÛ”›Ü\J
J\™]\›ˆÖÛNÚYŠš[™^ÙŠ‹ˆŠHOOKLJ^Ù›ÜŠ˜\ˆ[œÜ]
‹ˆŠK]O[ËÏXËOXËOHLHLOLİO‹›[™İİJÊÊ[‰‰›‹š\ÓİÛ”›Ü\J–İWJOÊÏ[–Ü–İWWK[–Ü–İWWJNšOHLKI‰™Kš\ÓİÛ”›Ü\J–İWJOÊOYVÜ–İWWKOYVÜ–İWWJNšHLNÜ™]\›ˆOÜÎšØN˜ßY[ÙH™]\›ˆßNÜ™^ÜÏ^_JKLÍŠOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆOY[˜İ[ÛŠ
^Ù›ÜŠ˜\ˆÏLØÏ›[™İØÊÊÊZYŠ]š\ÓİÛ”›Ü\JØ×JJ\™]\›ˆLNÜ™]\›ˆLNÜ™^ÜÏ^_JKNNNŠOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆOY[˜İ[ÛŠ
^Ù›ÜŠ˜\ˆÏLØÏ›[™İØÊÊÊZYŠš\ÓİÛ”›Ü\JØ×JJ\™]\›ˆLÜ™]\›ˆL_NÜ™^ÜÏ^_JKMÌŒŠOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆOY[˜İ[ÛŠ
^Ü™]\›ˆš\ÓİÛ”›Ü\J
_NÜ™^ÜÏ^_JKLŒLŠOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆOY[˜İ[ÛŠ
^ÚYŠ]\[ÙˆOH›Øš™XİŸ››ÙU\_OO]Ú[™İÊ\™]\›ˆLNİ^ÚYŠ˜ÛÛœİXİÜ‰‰ˆ^ßKš\ÓİÛ”›Ü\K˜Ø[
˜ÛÛœİXİÜ‹œ›İİ\Kš\Ô›İİ\SÙˆŠJ\™]\›ˆL_XØ]ÚÜ™]\›ˆL_\™]\›ˆLNÜ™^ÜÏ^_JKMÍNŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆ]
MÎŠKÏY[˜İ[ÛŠËŠ^İ˜\ˆ[
ÊNÙ›ÜŠ˜\ˆH[ˆŠ[‹š\ÓİÛ”›Ü\JJ_
–ÙWO\–ÙWJNÜ™]\›ˆŸNÜ™^ÜÏXßJKNŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆ]
MÎŠKÏY[˜İ[ÛŠËŠ^İ˜\ˆ[
ÊNÙ›ÜŠ˜\ˆH[ˆŠ[‹š\ÓİÛ”›Ü\JJI‰Š–ÙWO\–ÙWJNÜ™]\›ˆŸNÜ™^ÜÏXßJKNMŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆ]
MÌŒŠKÏY[˜İ[ÛŠËŠ^Ù›ÜŠ˜\ˆ^ßKOLÙO‹›[™İÙJÊÊ^İ˜\ˆÏ\–ÙWNÛ
ËÊI‰Š–Ü×O[ÖÜ×J_\™]\›ˆŸNÜ™^ÜÏXßJKŒMŒŒŠOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆOY[˜İ[ÛŠÊ^ÚYŠ]\[ÙˆOH›[X™\ˆŠ\™]\›ˆLNÚYŠš\ÓİÛ”›Ü\J
J\™]\›ˆÛOXËLÚYŠš[™^ÙŠ‹ˆŠHOOKLJ^Ù›ÜŠ˜\ˆÏ[œÜ]
‹ˆŠK]]OLÙOË›[™İÙJÊÊZYŠ‹š\ÓİÛ”›Ü\JÖÙWJJ[\‹\–ÛÖÙWWNÙ[ÙH™]\›ˆLNÜ™]\›ˆ–ÛÖÛË›[™İLWWOXËL\™]\›ˆL_NÜ™^ÜÏ^_JKLNÎŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹Ü™^ÜÏ^ĞÛÛ™N
MÎŠKY\ÛÜN
Œ
K^[™
ÎLLJKÙ]Y˜[˜ÙY˜[YN
ŒÍM
KÙ]˜\İ˜[YN
MMM
KÙ]Z[“X^˜[YN

KÙ]˜[YN
ÍLMM
K\Ğ[
LÍŠK\Ğ[N
NNJK\Õ˜[YN
MÌŒŠK\ÔZ[“Øš™Xİ
LŒLŠKY\™ÙN
MÍJKY\™ÙTšYÚ
JKXÚÎ
NM
KÙ]˜[YN
ŒMŒŒŠ__JKÎLŠOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆOY[˜İ[ÛŠ
^Ü™]\›ˆœ™\XÙJÉJÌNWJÊKÙË[˜İ[ÛŠËÊ^Ü™]\›ˆÓ[X™\ŠÊKLW_J_NÜ™^ÜÏ^_JKNÍŠOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆOY[˜İ[ÛŠËÊ^ÛOO]›ÚY	‰ŠL
KÏOO]›ÚY	‰ŠÏHˆŠKÏOO]›ÚY	‰ŠÏLÊK]Ôİš[™Ê
Nİ˜\ˆLÚYŠ
ÌO]›[™İ
\İÚ]Ú
Ê^ØØ\ÙHN[™]È\œ˜^J
ÌK]›[™İ
Kš›Ú[ŠÊJİØœ™XZÎØØ\ÙHÎ˜\ˆSX]˜ÙZ[

[]›[™İ
KÌŠKO\‹[İ[™]È\œ˜^JJÌJKš›Ú[ŠÊJİ
Û™]È\œ˜^JŠÌJKš›Ú[ŠÊNØœ™XZÎÙY˜][]
Û™]È\œ˜^J
ÌK]›[™İ
Kš›Ú[ŠÊNØœ™XZß\™]\›ˆNÜ™^ÜÏ^_JKÌÍŒŠOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆOY[˜İ[ÛŠ
^Ü™]\›ˆOOLİœÛXÙJJNœÛXÙJ
JİœÛXÙJ
ÌJ_NÜ™^ÜÏ^_JKÍÌNŠOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆOY[˜İ[ÛŠ
^Ü™]\›ˆœÜ]
ˆŠKœ™]™\œÙJ
Kš›Ú[ŠˆŠ_NÜ™^ÜÏ^_JKMLŠOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆOY[˜İ[ÛŠ
^Ü™]\›ˆ^M^^^‹œ™\XÙJÖŞWKÙË[˜İ[ÛŠ
^İ˜\ˆSX]œ˜[™ÛJ
JŒMŸÏ]OOHÛ›	ŒßÜ™]\›ˆËÔİš[™ÊMŠ_J_NÜ™^ÜÏ^_JKÍLÍMNŠOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹İ˜\ˆOY[˜İ[ÛŠ
^Ü™]\›ˆ	‰ÌKÕ\\Ø\ÙJ
JİœÛXÙJJ_NÜ™^ÜÏ^_JKÌMÍNŠ
K
OOËÊŠ‚ˆ
ˆ]]ÜˆšXÚ\™]™^HšXÚ\Ù\‹š[Ï‚ˆ
ˆÛÜ\šYÚŒLËLŒH\Ù\ˆİY[È[˜Ë‚ˆ
ˆXÙ[œÙHĞ[šÈÎ‹ËÛÜ[œÛİ\˜ÙK›Ü™ËÛXÙ[œÙ\ËÓRURUXÙ[œÙ_Bˆ
‹Ü™^ÜÏ^Ñ›Ü›X]
ÎLŠKY
NÍŠK™[[İ™P]
ÌÍŒ
K™]™\œÙN
ÍÌJK\\˜Ø\ÙQš\œİ
ÍLÍMJKURQ
ML
__J_K^ßNÙ[˜İ[ÛˆÊ
^İ˜\ˆOU–ÜNÚYŠHOO]›ÚY
\™]\›ˆK™^ÜÎİ˜\ˆU–ÜO^Ù^ÜÎß_NÜ™]\›ˆVÜJ™^ÜËÊK™^ÜßUË™ÏJ[˜İ[ÛŠ
^ÚYŠ\[ÙˆÛØ˜[\ÏOH›Øš™XİŠ\™]\›ˆÛØ˜[\Îİ^Ü™]\›ˆ\ß™]È[˜İ[ÛŠœ™]\›ˆ\ÈŠJ
_XØ]ÚÚYŠ\[ÙˆÚ[™İÏOH›Øš™XİŠ\™]\›ˆÚ[™İß_JJ
Nİ˜\ˆÏUÊMM
NÜ™]\›ˆßJJ
J_JJYJJKYK™^Üß]˜\ˆšOVJ
NØÛÛœİ]^šJšJNÙ[˜İ[ÛˆZJÊ^ØÛÛœİO[ÏO™Øİ[Y[œ]Y\TÙ[XİÜŠÜØÜ™Y[‹IÛßX
KOYØİ[Y[œ]Y\TÙ[XİÜŠˆÜØÜ™Y[‹XÛÛÜˆŠKYØİ[Y[œ]Y\TÙ[XİÜŠˆØ\ŠKÏRJ˜œšYÚ™\ÜÈŠKÏRJš[[œÚ]HŠKVÈ˜Ü‹™Ü˜Z[ˆ‹šYÛ™]H‹˜›ÛÙ‹›[İ[Ûˆ—KO[X]ÚYYXJŠ™Y™\œË\™YXÙY[[İ[Ûˆ™YXÙJHŠKH›ÛXšYMY\Ü^K]ŒHİ^ØÛÛœİÏR”ÓÓ‹œ\œÙJØØ[İÜ˜YÙK™Ù]][J
OÏÈ›[ŠNÚYŠÉ‰\[ÙˆÏOH›Øš™XİŠ^Ğ\œ˜^K™œ›ÛJK›Ü[ÛœÊKœÛÛYJOœ‹˜[YOOO[Ë˜ÛÛÜŠI‰ŠK˜[YO[Ë˜ÛÛÜŠK[X™\‹š\Ñš[š]JË˜œšYÚ™\ÜÊI‰ŠË˜[YOTİš[™ÊË˜œšYÚ™\ÜÊJK[X™\‹š\Ñš[š]JËš[[œÚ]JI‰ŠË˜[YOTİš[™ÊËš[[œÚ]JJNÙ›ÜŠÛÛœİˆÙˆ
]\[ÙˆÖÜ—OOH˜›ÛÛX[ˆ‰‰ŠJŠK˜ÚXÚÙY[ÖÜ—J__XØ]ÚßXÛÛœİJ
OOÕ‹™]\Ù]œØÜ™Y[ÛÛÜVK˜[YK‹œİ[KœÙ]›Ü\J‹K\ØÜ™Y[‹XœšYÚ™\ÜÈ‹İš[™ÊË˜[YP\Ó[X™\‹ÌL
JK‹œİ[KœÙ]›Ü\J‹K\ØÜ™Y[‹Z[[œÚ]H‹İš[™ÊË˜[YP\Ó[X™\‹ÌL
JNÙ›ÜŠÛÛœİÈÙˆ
U‹˜Û\ÜÓ\İÙÙÛJØÜ™Y[‹IÛßXJÊK˜ÚXÚÙY
NÕ‹˜Û\ÜÓ\İÙÙÛJœØÜ™Y[‹\İ[‹K›X]Ú\ßJ›[İ[ÛˆŠK˜ÚXÚÙY
KËœÙ]
œ™YXÙY[İ[Ûˆ‹K›X]Ú\ßJ›[İ[ÛˆŠK˜ÚXÚÙY
KËœÙ]
˜›ÛÙ‹J˜›ÛÙŠK˜ÚXÚÙY
_KÏJ
OOÛ

NØÛÛœİÏSØš™Xİ™œ›ÛQ[šY\Ê›X\
O–Ü‹JŠK˜ÚXÚÙYJJNİ^ÛØØ[İÜ˜YÙKœÙ]][J”ÓÓ‹œİš[™ÚYJË‹‹›ËÛÛÜ–K˜[YKœšYÚ™\ÜÎ•Ë˜[YP\Ó[X™\‹[[œÚ]N’Ë˜[YP\Ó[X™\ŸJJ_XØ]Úß_NÙ›ÜŠÛÛœİÈÙ–ÖKËË‹‹œ›X\
JWJ[Ë˜Y]™[\İ[™\Šš[œ]‹ÊNŞK˜Y]™[\İ[™\Š˜Ú[™ÙH‹
K

_XÛÛœİOSØš™Xİ™œ™Y^™JÜÚİ“Øš™Xİ™œ™Y^™JİØ]™NˆœØ]İÛİ‹İ\ŒN[™\˜][Û‹ŒM›Û[YN‹ŒMŸJKÚİİ[“Øš™Xİ™œ™Y^™JİØ]™NˆšX[™ÛH‹İ\ŒLÌ‹[™ŒÍ\˜][Û‹Œ›Û[YN‹ŒŒŸJKØ\˜š[™N“Øš™Xİ™œ™Y^™JİØ]™NˆœÜ]X\™H‹İ\ŒŒÍK[™Ë\˜][Û‹ŒLË›Û[YN‹ŒLßJK›\İ“Øš™Xİ™œ™Y^™JİØ]™NˆšX[™ÛH‹İ\MK[™ŒÌ\˜][Û‹›Û[YN‹ŒŒßJKØÜ™X[N“Øš™Xİ™œ™Y^™JİØ]™NˆœØ]İÛİ‹İ\L[™ŒLŒ\˜][Û‹›Û[YN‹Œ_JKY[YN“Øš™Xİ™œ™Y^™JİØ]™NˆšX[™ÛH‹İ\ŒLL[™\˜][Û‹ŒL‹›Û[YN‹ŒLŸJKš]N“Øš™Xİ™œ™Y^™JİØ]™NˆœØ]İÛİ‹İ\ÍK[™ŒÍK\˜][Û‹ŒK›Û[YN‹ŒL_JKÛİ“Øš™Xİ™œ™Y^™JİØ]™NˆœÚ[™H‹İ\ŒÎL[™Œ\˜][Û‹ŒMK›Û[YN‹ŒÍ_JKÛÜ“Øš™Xİ™œ™Y^™JİØ]™NˆšX[™ÛH‹İ\ŒLK[™K\˜][Û‹ŒK›Û[YN‹Œ_JKX[“Øš™Xİ™œ™Y^™JİØ]™NˆœÚ[™H‹İ\ŒÌL[™LL\˜][Û‹ŒË›Û[YN‹ŒÍ_JKİÚ]Ú“Øš™Xİ™œ™Y^™JİØ]™NˆœÚ[™H‹İ\Œ[™N\˜][Û‹ŒL‹›Û[YN‹ŒŸJKİ\“Øš™Xİ™œ™Y^™JİØ]™NˆšX[™ÛH‹İ\Ì‹[™K\˜][Û‹ŒÍK›Û[YN‹ŒŒŸJK[™Ù\“Øš™Xİ™œ™Y^™JİØ]™NˆœØ]İÛİ‹İ\N[™LK\˜][Û‹ŒÎ›Û[YN‹ŒßJ_JNÙ[˜İ[ÛˆÚJÊ^Ü™]\›ˆØš™Xİš\ÓİÛŠKÊOÚVÑ×N›[Y[˜İ[ÛˆÙJÊ^ØÛÛœİOJÉLÍŒ
ÌÍŒ
ILÍŒÌÍŒÜ™]\›ˆX]›X^
ŒM‹X]›Z[ŠÍKŒÎJËŒÊ“X]˜ÛÜÊJ“X]”JŒŠJJ_XÛ\ÜÈ^ØÛÛœİXİÜŠ
^İ\Ë˜ÛÛ^[[\Ë›X\İ\[[\ËÚ[™[[\ËÚ[™]™[[[\Ë˜˜\ÜÓ]™[[[\Ë››Ú\ÙPY™™\[[\Ë™[˜X›YHL\Ë›Û[YOKK\Ë›ØØ][ÛHˆİ^İ\Ë™[˜X›Y[ØØ[İÜ˜YÙK™Ù]][J›ÛXšYM[]]YŠHOOHYHØÛÛœİO[ØØ[İÜ˜YÙK™Ù]][J›ÛXšYM]›Û[YHŠNÒHOO[[	‰“[X™\‹š\Ñš[š]J[X™\ŠJJI‰Š\Ë›Û[YOSX]›X^
X]›Z[ŠK[X™\ŠJJJJ_XØ]Úß_YÙ]\Ñ[˜X›Y

^Ü™]\›ˆ\Ë™[˜X›YYÙ]]™[

^Ü™]\›ˆ\Ë›Û[Y_]ÙÙÛJ
^İ\Ë™[˜X›YH]\Ë™[˜X›Yİ^ÛØØ[İÜ˜YÙKœÙ]][J›ÛXšYM[]]Y‹İš[™Ê]\Ë™[˜X›Y
J_XØ]Úß]\Ë˜\U›Û[YJ
_\Ù]]™[
J^İ\Ë›Û[YOSX]›X^
X]›Z[ŠKJJNİ^ÛØØ[İÜ˜YÙKœÙ]][J›ÛXšYM]›Û[YH‹İš[™Ê\Ë›Û[YJJ_XØ]Úß]\Ë˜\U›Û[YJ
_X\U›Û[YJ
^İ\Ë˜ÛÛ^	‰\Ë›X\İ\‰‰\Ë›X\İ\‹™ØZ[‹œÙ]\™Ù]][YJ\Ë™[˜X›Yİ\Ë›Û[YNŒ\Ë˜ÛÛ^˜İ\œ™[[YKŒJ_][›ØÚÊ
^ÚYŠ\Ë™[˜X›Y
]^ÚYŠ]\Ë˜ÛÛ^
^ØÛÛœİO[™]È]Y[ĞÛÛ^İ\Ë˜ÛÛ^RK\Ë›X\İ\RK˜Ü™X]QØZ[Š
K\Ë›X\İ\‹™ØZ[‹˜[YO]\Ë›Û[YK\Ë›X\İ\‹˜ÛÛ›™Xİ
K™\İ[˜][ÛŠNØÛÛœİORK˜Ü™X]PY™™\ŠKKœØ[\T˜]JŒËKœØ[\T˜]JKVK™Ù]Ú[›™[]J
NÙ›ÜŠ]LÛ‹›[™İÛ
ÊÊU–ÛOSX]œ˜[™ÛJ
JŒ‹LNİ\Ë››Ú\ÙPY™™\VNØÛÛœİÏRK˜Ü™X]PY™™\”Ûİ\˜ÙJ
NÕË˜Y™™\VKË›ÛÜHL\ËÚ[™RK˜Ü™X]Pš\]XYš[\Š
K\ËÚ[™\OH›İÜ\ÜÈ‹\ËÚ[™™œ™\]Y[˜ŞK˜[YOLÍŒ\ËÚ[™]™[RK˜Ü™X]QØZ[Š
K\ËÚ[™]™[™ØZ[‹˜[YOKŒMKË˜ÛÛ›™Xİ
\ËÚ[™
K˜ÛÛ›™Xİ
\ËÚ[™]™[
K˜ÛÛ›™Xİ
\Ë›X\İ\ŠKËœİ\

NØÛÛœİÏRK˜Ü™X]SÜØÚ[]ÜŠ
NÒË\OHšX[™ÛH‹Ë™œ™\]Y[˜ŞK˜[YOMMNØÛÛœİRK˜Ü™X]SÜØÚ[]ÜŠ
NÜ™œ™\]Y[˜ŞK˜[YOLKNØÛÛœİORK˜Ü™X]QØZ[Š
KRK˜Ü™X]QØZ[Š
Nİ™ØZ[‹˜[YOKŒÍËK™ØZ[‹˜[YOKL‹\Ë˜˜\ÜÓ]™[RK˜Ü™X]QØZ[Š
K\Ë˜˜\ÜÓ]™[™ØZ[‹˜[YOL˜ÛÛ›™Xİ

K˜ÛÛ›™Xİ
K™ØZ[ŠKË˜ÛÛ›™Xİ
JK˜ÛÛ›™Xİ
\Ë˜˜\ÜÓ]™[
K˜ÛÛ›™Xİ
\Ë›X\İ\ŠKËœİ\

Kœİ\

_]\Ë˜ÛÛ^œİ]OOOHœİ\Ü[™Y‰‰\Ë˜ÛÛ^œ™\İ[YJ
K˜Ø]Ú


OOßJ_XØ]Úß_X[XšY[˜ÙJKJ^ØÛÛœİJOÈš[œÚYHˆ›İ]ÚYHŠJÊOÈ‹[šYÚˆ‹Y^HŠNÕOO]\Ë›ØØ][ÛŸ]\Ë˜ÛÛ^]\ËÚ[™]\ËÚ[™]™[
\Ë›ØØ][ÛU‹\ËÚ[™™œ™\]Y[˜ŞKœÙ]\™Ù]][YJOÌŒL–OÍŒL\Ë˜ÛÛ^˜İ\œ™[[YKŒÊK\ËÚ[™]™[™ØZ[‹œÙ]\™Ù]][YJOËŒ–OËŒL‹ŒÍK\Ë˜ÛÛ^˜İ\œ™[[YKŒÊJ_][œÚ[ÛŠJ^ÚYŠ]\Ë˜ÛÛ^]\Ë˜˜\ÜÓ]™[
\™]\›ØÛÛœİOSX]›X^
X]›Z[ŠKJJJ‹ŒNİ\Ë˜˜\ÜÓ]™[™ØZ[‹œÙ]\™Ù]][YJK\Ë˜ÛÛ^˜İ\œ™[[YKŒJ_]˜[œÚY[
KKŠ^ÚYŠ]\Ë››Ú\ÙPY™™\ŸVÈœÚİ‹œÚİİ[ˆ‹˜Ø\˜š[™H‹˜›\İ—Kš[˜ÛY\ÊŠJ\™]\›ØÛÛœİÏRK˜Ü™X]PY™™\”Ûİ\˜ÙJ
KÏRK˜Ü™X]Pš\]XYš[\Š
KRK˜Ü™X]QØZ[Š
KORK˜İ\œ™[[YKUOOH˜›\İ‹UOOHœÚİİ[ˆ‹Ï]Ë›ËŒ‹ŒLNÕË˜Y™™\]\Ë››Ú\ÙPY™™\‹Ë\OH›İÜ\ÜÈ‹Ë™œ™\]Y[˜ŞK˜[YO]Í›ÌLLŒNL™ØZ[‹œÙ]˜[YP][YJËŒÌ‹ŒŒKJK™ØZ[‹™^Û™[X[˜[\Õ˜[YP][YJYKMJØÊKË˜ÛÛ›™Xİ
ÊK˜ÛÛ›™Xİ

K˜ÛÛ›™Xİ
JKËœİ\
JKËœİÜ
JØÊKË›Û™[™YJ
OOÕË™\ØÛÛ›™Xİ

KË™\ØÛÛ›™Xİ

K™\ØÛÛ›™Xİ

__\^JJ^ØÛÛœİO]\Ë˜ÛÛ^ÚYŠ]\Ë™[˜X›YV_Kœİ]HOOHœ[›š[™ÈŸ]\Ë›X\İ\Š\™]\›ØÛÛœİUÚJOOOHœİ\Z[™ÛÜˆÈœİ\’OOOHœ™[ØYÈ™ÛÜˆ’OOOH™[™Ú[™HÈ˜š]H’JNÚYŠUŠ\™]\›İ\Ë˜[œÚY[
K\Ë›X\İ\‹JNØÛÛœİÏVK˜Ü™X]SÜØÚ[]ÜŠ
KÏVK˜Ü™X]QØZ[Š
KVK˜İ\œ™[[YKOROOOHœİ\Z[™ÛÜˆÌKÎ’OOOHœ™[ØYÌ‹N’OOOH™[™Ú[™HËŒNÕË\OU‹Ø]™KË™œ™\]Y[˜ŞKœÙ]˜[YP][YJ‹œİ\
K
KË™œ™\]Y[˜ŞK™^Û™[X[˜[\Õ˜[YP][YJ‹™[™
K
Õ‹™\˜][ÛŠKË™ØZ[‹œÙ]˜[YP][YJYKM
KË™ØZ[‹™^Û™[X[˜[\Õ˜[YP][YJ‹›Û[YJŠOOOH™[™Ú[™HËŒÎŒJK
ËŒLŠKË™ØZ[‹™^Û™[X[˜[\Õ˜[YP][YJYKM
Õ‹™\˜][ÛŠKË˜ÛÛ›™Xİ
ÊK˜ÛÛ›™Xİ
\Ë›X\İ\ŠKËœİ\

KËœİÜ

Õ‹™\˜][ÛŠËŒMJKË›Û™[™YJ
OOÕË™\ØÛÛ›™Xİ

KË™\ØÛÛ›™Xİ

___XÛÛœİİL‹ZONM‹YOMÚOLËËšOLKŒNšOLÙ[˜İ[Ûˆ]
ËKJ^Ü™]\›ˆX]›X^
KX]›Z[ŠKÊJ_Y[˜İ[Ûˆ
ËJ^Ü™]\›ˆX]š\İ
ËRKËKRKJ_Y[˜İ[Ûˆ
ËJ^Ü™]\›ŞŠËRJJZKÌ‹NŠÊÒJJ”YKÌŸ_Y[˜İ[Ûˆ™JËKKPİ
^Ü™]\›ˆÏKI‰’OKI‰‘Ï‹KI‰’O‹KI‰ˆVKš\Ê	ÓX]™›ÛÜŠÊ_K	ÓX]™›ÛÜŠJ_X
_Y[˜İ[ÛˆJÊ^Ü™]\›ˆHQÉ‰–ÌKšWKš[˜ÛY\ÊË™\œÚ[ÛŠI‰“[X™\‹š\Ñš[š]JËœ^Y\Ë
I‰“[X™\‹š\Ñš[š]JËœ^Y\ËJI‰‘Ëœ^Y\‹L	‰‘Ëœ^Y\‹İ	‰‘Ëœ^Y\‹OL	‰‘Ëœ^Y\‹Oİ	‰“[X™\‹š\Ñš[š]JËœ^Y\‹š
I‰‘Ëœ^Y\‹šL	‰‘Ëœ^Y\‹šLL	‰\œ˜^Kš\Ğ\œ˜^JË›ÛXšY\ÊI‰\œ˜^Kš\Ğ\œ˜^JË›Ûİ
I‰“[X™\‹š\Ò[YÙ\ŠËœİYÙJI‰‘ËœİYÙOL	‰‘ËœİYÙOLßXÛÛœİ]^Ø˜[™YÙNÛ˜[YNˆ•™[™\È‹ÙZYÚŒKX^_KØÜ˜\Û˜[YNˆÚ]\œ˜H‹ÙZYÚŒ‹X^ŒLK˜][ÛÛ˜[YNˆ”˜XÚpìÛˆ‹ÙZYÚŒ‹X^ŸK[[[ÎÛ˜[YNˆØ\XÚÜÈ‹ÙZYÚŒKX^ŒŒKY[Ø[Û˜[YNˆšY0ìÛˆ‹ÙZYÚŒËX^_NÙ[˜İ[ÛˆJÊ^Ü™]\›ØØ\XÚ]N‘ÏOOH‘^Ü˜YÜ˜HÌNŒM][\ÎØ˜[™YÙNŒK˜][ÛŒK[[[Î__Y[˜İ[ÛˆYJÊ^Ü™]\›ˆØš™Xİ™[šY\ÊËš][\ÊKœ™YXÙJ
KÖK—JOO’JÊ]ÖWOËÙZYÚÏÌ
J•‹
_Y[˜İ[ÛˆÚJËKOLJ^ÚYŠU]ÒW_S[X™\‹š\Ò[YÙ\ŠJ_OL
\™]\›ˆLNØÛÛœİQËš][\ÖÒWOÏÌÜ™]\›ˆŠÖO•]ÒWK›X^YJÊJÕ]ÒWKÙZYÚ
–O‘Ë˜Ø\XÚ]OÈLNŠËš][\ÖÒWOUŠÖKL
_Y[˜İ[ÛˆYJËKOLJ^Ü™]\›ˆS[X™\‹š\Ò[YÙ\ŠJ_OL
Ëš][\ÖÒWOÏÌ
OOÈLNŠËš][\ÖÒWKOVKL
_Y[˜İ[Ûˆ	JÊ^Ù›ÜŠÛÛœİHÙˆËœİ\š]›ÜœÊRKš[™[Ü_
Kš[™[ÜOYJKœÚÚ[
J_Y[˜İ[Ûˆİ
ËKJ^Û]SX]™›ÛÜŠË
KÏSX]™›ÛÜŠËJNØÛÛœİÏSX]™›ÛÜŠK
KSX]™›ÛÜŠKJNÚYŠKš\Ê	ÕŸK	ÕßX
J\™]\›ˆLNØÛÛœİORKQËRKKQËKSX]œÚYÛŠJKÏSX]œÚYÛŠ
KÏ^OÌKÓX]˜XœÊJNŒKÌ]ÌKÓX]˜XœÊ
NŒKÌÛ]^OÊŠÊŒÌNŒ
KQË
KŞNŒKÌO]ÊÊÊÏŒÌNŒ
KQËJKİŒKÌÙ›ÜŠÕˆOORßÈOO\Ê^ØÛÛœİÏUOORÏÌKÌ›‹OUÏOO\ÌKÌ™NÚYŠX]˜XœÊËXJOYKNJ^ÚYŠKš\Ê	ÕŠÛK	ÕßX
_Kš\Ê	ÕŸK	ÕÊØßX
J\™]\›ˆLNÕŠÏ[ÊÏXËŠÏ[ËJÏ\ŸY[ÙHÏOÊŠÏ[ŠÏ[ÊNŠÊÏXËJÏ\ŠNÚYŠKš\Ê	ÕŸK	ÕßX
J\™]\›ˆL_\™]\›ˆLY[˜İ[ÛˆZJËKKLŠ^ØÛÛœİÏVÓX]™›ÛÜŠË
KX]™›ÛÜŠËJWKÏVÓX]™›ÛÜŠK
KX]™›ÛÜŠKJWKJËJOO˜	ÜßK	Ø_XOVÕ×K[™]ÈÙ]
Ü
‹‹•ÊWJK[™]ÈX\Û]ÏHLNÙ›ÜŠ]ÏLÜÏK›[™İ	‰œÏŠ•ÜÊÊÊ^ØÛÛœİØKWO^VÜ×NÚYŠOOORÖÌI‰šOOORÖÌWJ^ØÏHLØœ™XZßY›ÜŠÛÛœİÚW[Ù–ÖÌKKËLKKÌWKÌLWWJ^ØÛÛœİXJÚZJİK\
ŠNÙUŸUŸKš\ÊŠ_š\ÊŠ_
˜Y
ŠKœÙ]
‹
KJJKKœ\Ú
Ù—JJ__ZYŠXÊ\™]\›ˆ[Û]Ï\
‹‹’ÊK[™Ù]
ÊNÙ›ÜŠÜ‰‰œˆOO\
‹‹•ÊNÊ[Ï\‹[™Ù]
ÊNØÛÛœİÛ‹WO[ËœÜ]
‹ŠK›X\
[X™\ŠNÜ™]\›Ş›ŠËKN™JË__XÛÛœİYOSØš™Xİ™œ™Y^™JÜ\İÛÛ˜[YNˆ”\İÛH‹˜[™ÙNKK[XYÙNŒË[^N‹ŒÎ›Ú\ÙNŒLËÛÜİŒKÛİ[™ˆœÚİ‹\Ú‹Œ‹İ[‹KÚİİ[Û˜[YNˆ‘\ØÛÜ]H‹˜[™ÙNŒËË[XYÙNK[^N‹›Ú\ÙNŒMËÛÜİŒ‹Ûİ[™ˆœÚİİ[ˆ‹\Ú‹İ[‹M_KØ\˜š[™NÛ˜[YNˆØ\˜Xš[˜H‹˜[™ÙN[XYÙNŒË[^N‹M‹›Ú\ÙNŒMKÛÜİŒKÛİ[™ˆ˜Ø\˜š[™H‹\Ú‹ŒÍKİ[‹_JNÙ[˜İ[ÛˆÚJÊ^ØÛÛœİOVÈœ\İÛ—NÜ™]\›ŠËœİYÙOLŸËšÚ[ÏM
I‰’Kœ\Ú
œÚİİ[ˆŠK
Ë˜Ø[\ZYÛË˜XİOOH˜ÛÛ\]HŸËšÚ[ÏLL
I‰’Kœ\Ú
˜Ø\˜š[™HŠK_Y[˜İ[ÛˆJÊ^ØÛÛœİOJÊËœİYÙOLŠJÈ
ÊË˜Ø[\ZYÛË˜XİÏOOH˜ÛÛ\]HŠJÈ
ÊË˜Ø[\ZYÛË˜XİOOH˜ÛÛ\]HŠNÜ™]\›ˆX]›X^
JÒJÓX]›Z[ŠL‹X]™›ÛÜŠËšÚ[ËÎ
JKQË˜\œÙ[˜[œÜ[
_Y[˜İ[ÛˆšJÊ^Ü™]\›ˆS[X™\‹š\Ò[YÙ\ŠÊ_ÏLŞØ[[[ÎŒ˜[™YÙNŒNØ[[[Î‘ÉMOOLÌŒ˜[™YÙN‘ÉLLOOLÌNŒ_Y[˜İ[ÛˆÚJÊ^ØÛÛœİÜÙ[XİY’KÜ[–_OQË˜\œÙ[˜[ÏŞßNÜ™]\›ÜÙ[XİYÚJÊKš[˜ÛY\ÊJOÒNˆœ\İÛ‹Ü[“[X™\‹š\Ò[YÙ\ŠJOÓX]›Z[ŠM‹X]›X^
JJNŒ_Y[˜İ[ÛˆZJËKK‹Ê^ØÛÛœİÏPYVÕ—KRK™š[\ŠÏO›Ë˜[]™I‰š
ËÊORËœ˜[™ÙI‰‘İ
ËËJJKOJËŠOOØÛÛœİ[ËQËO[ËKQËNÜ™]\›ŠŠœ‹
ÙJœ‹JKÓX]›X^
ŒKX]š\İ
‹JJ“X]š\İ
‹‹JJ_K\™š[\ŠÏOˆUßJËÊOK
KœÛÜ

ËŠOOŠÏŞJ‹ÊK^JËÊNŒ
_
ËÊKZ
ËŠJVÌNÚYŠ]
\™]\›–×NØÛÛœİZ
Ë
KÏVŞÙ[™[^N[XYÙN•OOHœÚİİ[ˆ‰‰›Œ‹OÌÎ’Ë™[XYÙ_WNÚYŠOOHœÚİİ[ˆŠ^ØÛÛœİÏ^ŞQËNKQË_NØËœ\Ú
‹‹œ™š[\ŠOœˆOO]	‰J‹ÊOKÊKœÛÜ

‹ŠOOš
ËŠKZ
ËŠJKœÛXÙJŠK›X\
OŠÙ[™[^Nœ‹[XYÙNŒŸJJJ_\™]\›ˆßXÛÛœİYOL™OLÌ‹ZONZO^ØZ[˜N–ÈˆÌÍÈ‹ˆÍˆ‹ˆØNXÌ˜Mˆ‹ˆÍNÙLÌÈ‹ˆÙL—K]N–ÈˆÍMLÙ™‹ˆÎY˜MH‹ˆÙY‹ˆÌØLÌLH‹ˆØÌXMÍÈ—KZXN–ÈˆÍŒÍH‹ˆÎMH‹ˆØÌMˆ‹ˆÌLŒÌ™H‹ˆÙXN—KX\–ÈˆÌÌÍLÎH‹ˆÍÌˆ‹ˆØNX™H‹ˆÍÌÍL˜ˆ‹ˆØ˜ÎLÍ˜ˆ—KØ[Ù\–ÈˆÌÍMÎ‹ˆÍN™L‹ˆÎÎLMH‹ˆÌØLØŒ™ˆ‹ˆØLXMØˆ—K[›™\–ÈˆÍMÌÍŒ™ˆ‹ˆÎMMLH‹ˆØÍÎMH‹ˆÍ™L˜È‹ˆØMÎLÍÌH—KØÜ™YXÚ\–ÈˆÍÌÍÈ‹ˆÎMÈ‹ˆØÍNLH‹ˆÍL˜LÌÈ‹ˆØØXNH—K\šÙ\–ÈˆÌŒÌÍŒÙ‹ˆÌÍÍÌ‹ˆÍ˜ÎMLˆ‹ˆÌL™‹ˆÎLÎH—Kœ]N–ÈˆÌÎLÍÍÈ‹ˆÍMÌˆ‹ˆÎMÎLMÙ‹ˆÌ˜ŒÌ˜ˆ‹ˆØL˜LMÙˆ—_NÙ[˜İ[ÛˆÚJÊ^ØÛÛœİOH˜[\Ë\İ\š]›ÜœÈÚYŠË™^\İÊJJ\™]\›ˆNØÛÛœİOSØš™XİšÙ^\ÊZJKQË˜Ü™X]PØ[˜\ÊKZJ’YKK›[™İ
™JNÜ™]\›ˆK™›Ü‘XXÚ

ËÊOOÙ›ÜŠ]LÜZNÜ
ÊÊ^ØÛÛœİO\
’YKRÊ™NÕ‹˜ÛÛ^œØ]™J
K‹˜ÛÛ^˜[œÛ]JK
KÊ‹˜ÛÛ^Ë
K‹˜ÛÛ^œ™\İÜ™J
K‹˜Y
ÊÈˆŠÜKYK™J__JK‹œ™Yœ™\Ú

K‹œÙ]š[\Š]•^\™\Ë‘š[\“[ÙK“‘PT‘TÕ
K_Y[˜İ[ÛˆÊËKJ^ØÛÛœİÕ‹ËËWOQZVÒWKHˆÌXLŒŒÈ‹HˆÎLÍMÈ‹ÏROOOH˜œ]H‹ÏROOOHœ[›™\ˆ‹ROOOHØ[Ù\ˆ‹ROOOHœØÜ™YXÚ\ˆ‹OROOOH›\šÙ\ˆ‹ÏXßßŸŸKOVOLÉ‰–OM_OOOMËOVOM‹ZOÌN–ÌL‹—VÖIL×KOZOOLÌŒK[ÏÌœÌNŒJÏÌ™OÎN›ÏÍ
JİKJÏÌLNŒLŠJİKOXÏÍ‹JËËKJOOÑË™š[İ[OTËË™š[™Xİ
ËKJ_NÙ›ÜŠÛÛœİÈÙ–ËLKWJ^ØÛÛœİÏTÏOOKLOÍÎŒLËOPÊÔÊšŞ
ËŒKÊK
‹ÊÌKŒKË
K
KLKKKJK
ˆÌÍÎØH‹K‹ËŠK
ˆÍMMLÍˆ‹JÌKKJ_^
KLKŠÌ‹ÏÌMÎŒLË
K
JÌK‹ÏÌLÎŒLLŠK
‹JÌKŠÌKÏÌLÎŒLJK
ËJÌ‹ŠÌKÏÌLÊK
ËJÌ‹ŠÌKÏÎNËŠK
ËKŠÍË
K
KKLKŠÍÊÓ[X™\ŠŠKË
NØÛÛœİÏZOÌŒ›ÏÌNNŒMÎŞ
‹M‹ŠÍÏÍNŒËJK
ËMËŠÍÏÍŒ‹ŠK
KËŠÊOÍ
KËÊKI‰Š
‹M‹ŠÍKÊK
ËŒKŠÌËËŠJK
ˆÌØÌÍL™H‹ŒKKŠK
ˆØŒÎLM˜ˆ‹LËŒK‹JNØÛÛœİN
ÙŞ
‹JK

ÌK‹LK‹JK
ŠÌKÊK
K
ÊOÌNŒÊKŠÍOÍK
K_

ÏÛ
ÍKŠÍ‹JK
ÏÈˆÙ˜ÍÈˆˆÙM˜™Mˆ‹
Í‹ŠÍ‹‹JJKI‰ˆ\É‰Š
ŠÌ‹
K
ˆÍXÍMM‹KŠÌË‹ŠK
ˆØMNMH‹LŠÌËŠK
ˆÎMÌÍH‹LŠÍËJJKÊ

ÍŠÍK
K
Ë
ÍŠÍKËJK
Ë‹ŠÍKŠJN™OÊ
‹L‹‹L‹L
K
Ë
ÍŠÌ‹ËJJN’OOOH˜Z[˜HÊ
ˆØÍX™Xˆ‹L‹ŠÍËÊK
ˆÍÎMÈ‹LËŠÍKKJJN’OOOHœ]HÊ
‹‹L‹ÊK
Ë
ÌK‹LK‹JK
‹
ÍKŠÌKKJJN’OOOH›ZXHÊ
L‹ŠÌ‹Ë
K
ËLŠÌË‹JJN’OOOH›X\ˆÊ
ËŠÌËËŠK
ËËŠÌ‹KŠJNœÉ‰Š
ÏÍÎŒLŠÍÏÍŒËJK
ˆÍ™ÎÍH‹MŠÍË‹
KÉ‰
ËËŠÌËŠK‰‰
LKŠÌ‹ËŠJ_XÛÛœİLËYOH˜[\ËLNNN‹MOLMØÛ\ÜÈ\ŞØÛÛœİXİÜŠJ^İ\Ë˜İR_X›Ş
KK‹ÏLKÏLJ^İ\Ë˜İ™š[İ[ORK\Ë˜İ™š[™Xİ
K‹ËÊ_\ÛJKJ^İ\Ë˜İ™š[İ[ORNØÛÛœİSX]›Z[Š‹‹–K›X\
ÏO’ÖÌWJJKÏSX]›X^
‹‹–K›X\
ÏO’ÖÌWJJNÙ›ÜŠ]ÏUÒÏÎÒÊÊÊ^ØÛÛœİV×NÙ›ÜŠ]OLŞOK›[™İŞJÊÊ^ØÛÛœİİOVVŞWKØË×OVVÊJÌJIVK›[™İNÛ’ÊËHO[Ï’ÊËI‰œœ\Ú

ÊË]
JŠÊËK[
KÊË[
J_\œÛÜ

K
OOK]
NÙ›ÜŠ]OLŞJÌO›[™İŞJÏLŠ^ØÛÛœİSX]˜ÙZ[
ŞWKKJNİ\Ë˜İ™š[™Xİ
ËX]˜ÙZ[
ŞJÌWKKJK]J___[[™JKK‹ËËLJ^ØÛÛœİOSX]˜XœÊËVJKKSX]˜XœÊËUŠKVOÏÌN‹LKÏUÏÌN‹LNÛ]Ï^JİÙ›ÜŠİ\Ë˜›Ş
KK‹
KJOOOUÉ‰•OORÊNÊ^ØÛÛœİLŠ›ÎÜ]	‰ŠÊÏ]JÏ[
K^I‰ŠÊÏ^KŠÏXÊ__\ÛXŠKK‹ËË
^İ\ËœÛJÌWKÖÒKU‹KUËR×KÒKKR×KÒKWKÒKU‹KU×WJK\ËœÛJÌKÖÒKKR×KÒJÕ‹KUËR×KÒJÕ‹KU×KÒKWWJK\ËœÛJÌ—KÖÒKU‹KUËR×KÒKKLŠ•ËR×KÒJÕ‹KUËR×KÒKKR×WJK\Ë›[™JÌ×KKU‹KUËRËKKRÊK\Ë›[™JÌ—KKKRËKKLJ__XÛÛœİÙOHˆÌMLXŒXÈ‹VÈˆÍÌÙH‹ˆÍÍMˆ‹ˆÎˆ‹ˆØŒXMÌÈ—K]VÈˆÌÌØŒÙ‹ˆÍNMMˆ‹ˆÍÌMÙMÌˆ‹ˆÎXØLNH—KVÈˆÌÎ™L˜H‹ˆÍMLLØH‹ˆÎMÌÍÈ‹ˆØ™LXÈ—KVÈˆÍL˜L‹ˆÍÎLÙÌˆ‹ˆØMMÌØˆ‹ˆØÙNL—KİVÈˆÍÍMMÈ‹ˆÍÙÎH‹ˆÎLXLNN‹ˆØÍXÍXMH—KZOVÈˆÌÌˆ‹ˆÍLH‹ˆÍŒÍH‹ˆÎLMXÈ—K\ÏVÈˆÌL™Œ™H‹ˆÍMÌØÈ‹ˆÍYNMH‹ˆÍÙÌMN—K]HˆÙM˜ŒÍÍ‹HˆØXÍˆ‹HˆÎ˜˜ØN‹O^Ùœš[™ÙN–ÈˆÌXŒ˜LH‹ˆÌÍŒ™‹ˆÌÌLÍÈ‹ˆÍMMˆ—KÜ˜\ÜÎ–ÈˆÌLØŒÌˆ‹ˆÌÍMØH‹ˆÍMMŒÙH‹ˆÍÌLH—KÛÛÙÎ–ÈˆÌYLÍÌH‹ˆÌ˜MÌÍÈ‹ˆÌÎL‹ˆÍNMH—K™\™ÙN–ÈˆÌÌÎLÌˆ‹ˆÍØˆ‹ˆÍLÍNMÈ‹ˆÍÌÍÌNH—K›ØY–ÈˆÌÍLØŒØˆ‹ˆÍMˆ‹ˆÍMNMLH‹ˆÍÌÍÍ˜H—K˜\›XXÚXN–ÈˆÌÍM‹ˆÍLXÈ‹ˆÍÌÎÍÍ‹ˆÎXNXÍÙ—KY\˜ØYÎ–ÈˆÍÎÌ‹ˆÍŒÍLLÙ‹ˆÎÍH‹ˆØMNÍNH—K[\–ÈˆÌÎÎØH‹ˆÍMˆ‹ˆÍŒŒMXˆ‹ˆÎNÍÌH—KÙ[˜[–ÈˆÌ˜ŒÙÈ‹ˆÌØMLÍMÈ‹ˆÍLM˜H‹ˆÍÍÎMNH—KX›Ü˜]Üš[Î–ÈˆÌØÍLM‹ˆÍNÍÎH‹ˆÍÙNML‹ˆØM˜˜Mˆ—K™\]YÜ–ÈˆÌÍÌØLÌÈ‹ˆÍÍ‹ˆÍˆ‹ˆÎNÍŒˆ—K]˜XİXXÚ[Û–ÈˆÍØLÍÈ‹ˆÍYMˆ‹ˆÍÙMML‹ˆÎXÎÍ—_NÙ[˜İ[ÛˆZJÊ^Ü™]\›ˆOOŠÏSX]š[][
ËMLJJÌLLÎLŒŒÏŒ
ÏŒLŠIRJ_Y[˜İ[ÛˆšJËKJ^ØÛÛœİVVÒWKÏSZJÍÊÖJŒLÎJNÙ›ÜŠ]ÏLÒÏMÒÊÊÊ^ØÛÛœİJÏÒÊÌNŒM‹RÊJÑË˜›Ş
–ÌWKÌ‹\Ì‹
ÒË
_Y›ÜŠ]ÏLÒÏ
OOOHœ›ØYÌNŒJNÒÊÊÊ^ØÛÛœİUÊMŠKOJÜ
ÌNŒM‹\
JLJÕÊÊKLÌ‹^KÌŠÕÊK]
ÌJNÑË˜›Ş
–ÕÊJOÏÌŒ—K
Ü
_ZYŠÈ™Ü˜\ÜÈ‹ÛÛÙÈ‹™\™ÙH‹™œš[™ÙH—Kš[˜ÛY\ÊJJ^Ù›ÜŠ]ÏLÒÏŠÖILÎÒÊÊÊ^ØÛÛœİLŒŠÕÊŒ
KOLÌ
ÕÊJNÑË˜›Ş
–ÌKLKK
KË›[™J–Ì—KKLKLKKLÊKË˜›Ş
–Ì×K
ÌKKLŠ_VOOOM	‰‘Ë˜›Ş
ˆÍÌÌˆ‹ÌKÌËŠ_Y[ÙHOOOHœ›ØYŸOOOH[\ˆÖILOOL	‰ŠË›[™J–ÌKŒKÌKÌÊKË›[™J–ÌKKÌËÍ‹ÌŠKË›[™J–ÌKÍ‹Ì‹‹Í
JNŠË›[™J–ÌKMËÌ‹ÌÎ
KË›[™J–ÌKÌËÎ‹ÌŠKILOOL	‰‘Ë›[™J–Ì—KKÍÍ
KOOOH™]˜XİXXÚ[Ûˆ‰‰–OOOL‰‰‘Ë›[™JÌ—KËÌKÍÍKŠJ_Y[˜İ[Ûˆ
ËKOMJ^ÑËœÛJˆÌLLNNXXH‹ÖÌÌ‹RKWKÌÌKKMWKÌÌŠÒKWKÌÍKJÍWWJ_Y[˜İ[ÛˆÜÊËJ^Ó
ËLJKË›[™JˆÌÍL™ŒÈ‹Ì‹Ì‹ÌÊKË›[™JˆÍÌÍŒ‹ÌË‹ÍÌJNØÛÛœİOSZJJÌÍŒJKROOOLÖÈˆÌN™L˜È‹ˆÌM‹ˆÌØÍŒL‹ˆÍÎMŒ—N–ÈˆÌŒÌÍ™‹ˆÌÎMÌÍˆ‹ˆÍMMŒÍ‹ˆÍÌÎMH—NÙ›ÜŠ]ÏLÕÏÕÊÊÊ^ØÛÛœİÏLMJÕÊ‹ROOOLÍŠÕÊŒ
ÕÉLŠOLÌJÖJJKLÑËœÛJ–ÌKÖŞK\ÊÍ×KŞKMËL×KŞJÌËËMWKŞJÜÊÍKŞJÜLËÊÌLWKŞKLËÊÌL×WJKËœÛJ–ÌWKÖŞK\
ÌKÊÍWKŞKLËËL×KŞJÌËËMKŞJÜLËÊÌ×KŞJÌ‹ÊÎKŞK\
ÌËÊÎWWJKË›[™J–Ì—KK\
ÌËÊÍKL‹ËLJNÙ›ÜŠ]Lİİ
ÊÊQË˜›Ş
–ÌŠÖJŠWKKM
ÖJJKÊÖJJKJÖJŠJ__Y[˜İ[ÛˆJËKK‹ËÊ^ÑËœÛJÙKÖÒKWKÒJÕ‹JÓX]™›ÛÜŠ‹ÌŠWKÒJÕ‹JÕÊÓX]™›ÛÜŠ‹ÌŠWKÒKJÕ×WJKË›[™JËJÌKJÌ‹JÕ‹LKJÌJÓX]™›ÛÜŠ‹ÌŠJKË›[™JËJÓX]™›ÛÜŠ‹ÌŠKJÌËJÓX]™›ÛÜŠ‹ÌŠKJÕËLJ_Y[˜İ[ÛˆœÊËKK‹ËË
^ÑËœÛXŠKK‹ËË
NÙ›ÜŠ]OLÎŞOËLŞJÏM
^ÑË›[™JÌKKU‹KUËRÊŞKKLKKRÊŞJNÙ›ÜŠ]LŠŞILÎİİ
ÏMJQË˜›Ş
Ì×KKUŠİKUËRÊŞJÓX]™›ÛÜŠ
•ËÕŠJÌKŠNÑË›[™JˆÌL˜Œ˜H‹JÌKKRÊŞKJÕ‹LKKUËRÊŞJ__Y[˜İ[ÛˆœÊËKKŠ^ÑËœÛJÌKÖÒKU‹L‹KM×KÒKKLKÒJÕŠÌ‹KNKÒKJÌ×WJKËœÛJÌ—KÖÒKU‹L‹KNKÒKNKLŒ—KÒJÕŠÌ‹KNWKÒKKLWWJKËœÛJÌWKÖÒKU‹L‹KNKÒKNKLŒ—KÒKKLWKÒJÕŠÌ‹KNWWJNÙ›ÜŠ]ÏLÕÏNÕÊÊÊ^ØÛÛœİÏRKUŠÌÊÕÊÑË›[™JÌWKËKNUÊŒ‹ÊÕ‹M‹KMUÊŒŠKË˜›Ş
Ì×KÊÍKNKUÊŒ‹Ê__Y[˜İ[ÛˆÙJËKK‹Ê^ÑË›[™J]ÌKKKJÌ‹KU‹ÊKË›[™J]Ì×KJÌKKLKJÌËKUŠNÙ›ÜŠ]ÏMÒÏ‹LÒÊÏMŠQË›[™J]Ì—KKLËKRËJÍËKRÊNÑË˜›Ş
ËJÌ‹KU‹L‹ËŠ_XÛÛœİO^ÛX\ÚXN–Ö]NWK˜Y[Î–Ñ]M—KY[–Ñ]]M—KÚ[\–Ú]MKÙ[˜[–ĞZKMWK™\ÙX\˜Ú–ÚİM×K™[^N–Ñ]LK]˜XİX][Û–ÚMWK˜\›XXÚXN–ÚİL—KY\˜ØYÎ–Ö]M_NÙ[˜İ[Ûˆ\ÊËJ^ØÛÛœİÖK‹×OTVÒWKÏMKSX]œ›İ[™
ËÌŠKOROOOH›X\ÚXHÌŒŒLÎÜİÚ]Ú
ËœÛJˆÌÍÎ™ˆ‹ÖÍËWKÌÌ‹KÍMËWKÌÌ‹MWJKËœÛJˆÍŒŒˆ‹ÖÌLK—KÌÌ‹ÌWKÍLË—KÌÌ‹L×WJKËœÛXŠÌ‹ÊÌËÊÌ‹
Ì‹\ÊKË›[™JˆÌ˜L™‹Ì‹L‹ÌÊÕËLK\
KË›[™JˆÎXÍ˜H‹ÌUËLK\Ì‹LŠKœÊËÌ‹ËËKJKJËÍUËË\^JÍK‹OOOH›X\ÚXHĞ]–VÌJKJËË^KLKKLŠKË›[™JVÌ×KÍËË^JÍKÌJÕËË\^JÍŠKÈ›X\ÚXH‹œÚ[\ˆ—Kš[˜ÛY\ÊJOÊœÊËÌ‹Ë^KÊKË˜›Ş
ÌKŒ‹Ë^KLL
KË˜›Ş
Ì—KŒKË^KLK‹ŠJNŠËœÛXŠÌ‹Ë^KÊÌ‹
ÌKËOOOHœ˜Y[ÈÑ–JKË›[™J‹ÌËË^KLKÌJÕËË\^JJKJ^ØØ\ÙHœ˜Y[È™›ÜŠÛÛœİÙ–ÌMKŒWJQË˜›Ş
ÌWKÍË
KË˜›Ş
]
ÌKÎ‹ŠNÑË˜›Ş
Ì—KËNËŒŠKË˜›Ş
ˆÙL˜™NÈ‹ËM‹K
NØœ™XZÎØØ\ÙH™Y[™›ÜŠ]Lİİ
ÊÊQË›[™J]Ì—KNKÍJİ
Œ‹ÎJİ
ŒŠNÑË˜›Ş
]ÎÍËJNØœ™XZÎØØ\ÙH˜Ù[˜[‘ÙJË‹NK
NØœ™XZÎØØ\ÙHœÚ[\ˆ‘ÙJËËMË
NØœ™XZÎØØ\ÙHœ™[^H‘ÙJËËÎ
KË›[™J]Ì×K‹‹LË
KË›[™J]Ì×KÌKMËMKMÊKË›[™J]Ì×KÍ‹ËMÊNØœ™XZÎØØ\ÙHœ™\ÙX\˜Ú™›ÜŠ]LİÎİ
ÊÊQË˜›Ş
ÍŠİ
Í‹]
Œ‹ËÊNÑË˜›Ş
İÌ×KÌ‹ËÊNØœ™XZÎØØ\ÙH™]˜XİX][Ûˆ‘Ë˜›Ş
MKËL‹ŠKË˜›Ş
ˆÙLXÌXLˆ‹NKŠKË˜›Ş
ˆÙLXÌXLˆ‹ŒKKÊKË›[™JKKKLÊKË˜›Ş
Ì—KLLË‹
NØœ™XZÎØØ\ÙH™˜\›XXÚXH‘Ë˜›Ş
MËÌKËŠKË˜›Ş
NKK‹ŠNØœ™XZÎØØ\ÙH›Y\˜ØYÈ™›ÜŠ]Lİİ
ÊÊQË˜›Ş
	LĞ]‘Ì—KM
İ
ŒËÌÊÓX]™›ÛÜŠ
ŒKJKËÊNØœ™XZß_Y[˜İ[Ûˆ™JËKOHLJ^Ó
ËMJNØÛÛœİRJ“X]”KÍÏJKL
OOØÛÛœİ\
“X]˜ÛÜÊŠK^J“X]œÚ[ŠŠKÏ\
“X]œÚ[ŠŠJŞJ“X]˜ÛÜÊŠNÜ™]\›–ÌÌŠÓX]œ›İ[™

XÊJŒMŠK
ÓX]œ›İ[™


ØÊJ
K]_KÏJKÊOO‘ËœÛJÕÊK[ÊKÊKÊKÊÊKÊ[ÊWJNÙ›ÜŠÛÛœİÙ–ËK‹ŒÎWJY›ÜŠÛÛœİHÙ–ËKŒÌËŒÌ×J^ØÛÛœİİOUÊJNÑË˜›Ş
ÙKL‹L‹K
KË˜›Ş
]Ì—KLKŠ_RÊÙKKKKŒÍKJKÊOÑÌWNˆˆÌÍMLH‹‹KËŒÍKÊKÊOÑÌ—NˆˆÍÌLˆ‹KKKŒÌËJKÊˆÌ˜Mˆ‹ŒKKËŒÊKÊOÖÌWNˆˆØLXXL‹ŒKKŒÍKŒŒËJNÙ›ÜŠÛÛœİÙ–ËKŒKŒWJ^ØÛÛœİŞKOUÊ
KÛ×OUÊK
NÑË˜›Ş
OÖÌN]KŠKË˜›Ş
ËŠ__Y[˜İ[ÛˆÜÊËKJ^ØÛÛœİVOÑ]’OOOH™Y[Ñ’OOOH›YYXÚ[™HŸOOOH›YYÚİšÚYŠ
ËÊKËœÛXŠÌ‹K‹ËOÌKŠKJ^ÑËœÛJÙKÖÌËWKÌÌ‹—KÌÍËWKÌÌ‹×WJNÜ™]\›ŸQË˜›Ş
OOOH›YYXÚ[™HŸOOOH›YYÑ]ÌKËËŠKOOOH˜[[[È‰‰‘Ë›[™J]ËÌŠ_Y[˜İ[ÛˆÊËKJ^ÚYŠOOOH[\ˆ‰‰–OOOLJ^Õ™JËKL
NÜ™]\›ŸS
ËL
NØÛÛœİROOOH›X›Ü˜]Üš[ÈŸOOOH™˜\›XXÚXHÚİ’OOOH˜Ù[˜[ŸOOOHœ™\]YÜˆĞZN’OOOH[\ˆÑ]šÏROOOH›X›Ü˜]Üš[ÈŸOOOH™]˜XİXXÚ[ÛˆÍÎŒLÜİÚ]Ú
ËœÛXŠÌ‹KLKËŠKJ^ØØ\ÙH˜Ù[˜[˜Ø\ÙHœ™\]YÜˆ™›ÜŠ]ÏLÒÏÒÊÊÊQË›[™J]ÌKŒËÍ
ÒÊŒËÌKÎ
ÒÊŒÊKË˜›Ş
ÉLŞ‘‹ÍŠÒÊŒÊNÒOOOHœ™\]YÜˆ‰‰‘Ë›[™J]KÍKŠNØœ™XZÎØØ\ÙH›X›Ü˜]Üš[È™›ÜŠ]ÏLÒÏÎÒÊÊÊQË˜›Ş
ÊÒÊŒËÍJÒÉL‹‹
KË˜›Ş
İÌ×KÊÒÊŒËÍ
ÒÉL‹ŠNÑË˜›Ş
ÙKÍKÍËKÊNØœ™XZÎØØ\ÙH™]˜XİXXÚ[Ûˆ‘Ë›[™JŒ‹ËÌ‹ËŠKË˜›Ş
İÌ×KÌÍK‹ÊNØœ™XZÎØØ\ÙH™˜\›XXÚXH˜Ø\ÙH›Y\˜ØYÈ™›ÜŠ]ÏLÒÏNÒÊÊÊQË˜›Ş
Ğ]VÊÊÖJIL×KŒÊÒÊŒËÍ
ÒÉL‹‹
KË˜›Ş
–ÌKŒÊÒÊŒ‹ÎJÒËŠNØœ™XZÎÙY˜][‘Ë›[™J]ÍKÌ‹ÎJKË˜›Ş
Ì—KÍÍËÊ__Y[˜İ[ÛˆÊÊ^ÚYŠË™^\İÊYJJ\™]\›ˆË™Ù]
YJNØÛÛœİOV×NÙ›ÜŠÛÛœİˆÙ–ËLKWJRKœ\Ú
Ø›ØY[X\šÎ‰ÕŸXÏOÙšJËœ›ØY‹ŠÌŠKË›[™JˆÎÎYˆ‹‹Ì‹LÊ•‹ÍËÌŠÌŠ•‹ŠKË›[™JˆØØLMÍH‹ËÌ‹LÊ•‹ÍÌŠÕŠ_WJNÙ›ÜŠÛÛœİˆÙˆØš™XİšÙ^\ÊJJ^Ù›ÜŠ]ÏLÕÏÕÊÊÊRKœ\Ú
Ø›ÛÜ‰ÕŸN‰ÕßXÏO™šJË‹ÊWJNÚYŠVÈ™Ü˜\ÜÈ‹ÛÛÙÈ‹™\™ÙH‹œ›ØY‹™œš[™ÙH—Kš[˜ÛY\ÊŠJ^Ù›ÜŠ]ÏLÕÏÎÕÊÊÊRKœ\Ú
Øš^\™N‰ÕŸN‰ÕßXÏOšÊË‹ÊWJNÙ›ÜŠÛÛœİÈÙ–ËLKWJY›ÜŠÛÛœİÈÙ–ÈLKLJRKœ\Ú
ØØ[‰ÕŸN‰ÕßN‰Ó[X™\ŠÊ_XOØÛÛœİORÏÌMÎLÌŠÌMŠ•ËMÏVVÕ—NÜœÛJÖÌKÖÌÌ‹Kİ
ÎKİ
Î^WKÌÌ‹^WWJK›[™JÖÌ×KÌ‹^K
Î^JK›[™JÖÌ—KÌ‹^JÌ‹
ÌL^JKÉ‰Š›[™JÖÌWKÌ‹M‹
Ì‹ŠK˜›Ş
ÙKÌ
Î
•ËNKÊK˜›Ş
OOH›X›Ü˜]Üš[ÈŸOOH˜Ù[˜[Ş˜ÖÌ—KÌ
Î
•ËNKŠJ_WJ__Y›ÜŠÛÛœİˆÙˆØš™XİšÙ^\ÊJJRKœ\Ú
ØZ[[™Î‰ÕŸXÏO˜\ÊËŠWJNÙ›ÜŠ]LÕÎÕŠÊÊRKœ\Ú
ØİÛ™K]Ø[‰ÕŸXÏOÓ
ËMËL
KËœÛXŠÌ‹LKMKËÊÕ‹ÈˆÌÍLÙÍˆ‹ˆÍMÍMÍ‹ˆÍ˜Í˜MLÈ‹ˆÎMØŒH—JNÙ›ÜŠ]ÏLÒÏNÒÊÊÊ^ØÛÛœİLNJÒÊNÕË˜›Ş
ÉLÖÌ—N–ÌKÎJÊÊÕŠIMËŠ_UË˜›Ş
ˆÍNMM‹ŠÕŠŒËÎKŠ_WJKKœ\Ú
Ø™YN‰ÕŸXÏOœÜÊËŠWJNÙ›ÜŠ]LÕÕŠÊÊRKœ\Ú
ØØ\‰ÕŸXÏO•™JËŠWJNÙ›ÜŠ]LÕÕŠÊÊRKœ\Ú
ØÜ™XÚÎ‰ÕŸXÏO•™JËŠŒ‹L
WJNÙ›ÜŠÛÛœİˆÙ–È™›ÛÙ‹™Y[‹›X]\šX[È‹›YYXÚ[™H‹˜[[[È‹›YY—JY›ÜŠÛÛœİÈÙ–ÈLKLJRKœ\Ú
ØÜ˜]N‰ÕŸN‰Ó[X™\ŠÊ_XÏO›ÜÊË‹ÊWJNÒKœ\Ú
È›[\‹OÓ
‹JK‹›[™J]ÌKÌKÌKŒËŠK‹›[™J]Ì×KÌ‹‹Ì‹ŒÊK‹›[™J]Ì—KÌKŒËÎKŒËŠK‹˜›Ş
]ÍËKŠ_WKÈ˜˜\œšY\ˆ‹OÓ
‹L
K‹›[™JÌKKÎKKŠK‹›[™JÌKÎKËÎKMŠK‹›[™JÌ—KŒ‹KKŠK‹›[™J]KÊK‹›[™J]Í‹Î
_WKÈœX˜›H‹OÓ
‹
K‹œÛXŠÌLKËË
K‹œÛXŠÍ‹Ë‹‹]
_WKÈ™Ø\™[ˆ‹OÓ
‹
K‹œÛXŠÌ‹KËË‹
NÙ›ÜŠ]ÏLÕÏÕÊÊÊU‹›[™JˆÍÙNÍLˆ‹ÊÕÊŒËJÕÉL‹ÊÕÊŒËÊÕÉLŠ_WKÈš[™š\›X\H‹OÓ
‹JK‹˜›Ş
İÌ×KKKËŠK‹˜›Ş
Ì‹‹K
K‹˜›Ş
ÌKËËŠ_WKÈ˜ÛÜœÙH‹OÓ
‹ÊK‹›[™JˆÍŒÌØLÍ‹KÍ‹LKŠK‹›[™J]ÌWKË‹ÍKKÊK‹˜›Ş
ˆÎÎMYH‹Í‹ËËÊ_WJNØÛÛœİOQË˜Ü™X]PØ[˜\ÊYK
•K
“X]˜ÙZ[
K›[™İÕJJNÜ™]\›ˆK™›Ü‘XXÚ

Õ‹×KÊOOØÛÛœİRÉUJ’OSX]™›ÛÜŠËÕJJ’ÖK˜ÛÛ^œØ]™J
KK˜ÛÛ^˜[œÛ]JJKK˜ÛÛ^˜™YÚ[”]

KK˜ÛÛ^œ™Xİ

KK˜ÛÛ^˜Û\

KÊ™]È\ÊK˜ÛÛ^
JKK˜ÛÛ^œ™\İÜ™J
KK˜Y
‹K
_JKKœ™Yœ™\Ú

KKœÙ]š[\Š]•^\™\Ë‘š[\“[ÙK“‘PT‘TÕ
K_XÛÛœİ\Ï^ŞŒLË‹NŒL‹NÙ[˜İ[ÛˆœÊËJ^ØÛÛœİOQÉ‰“[X™\‹š\Ñš[š]JË
I‰“[X™\‹š\Ñš[š]JËJI‰”šJËËKJKJËK
OO“[X™\‹š\Ñš[š]JÊOÓ]
ËJNÏ^ØØ\XÚ]NŒ‹][\Îß_NÙ›ÜŠÛÛœİÒË[ÙˆØš™Xİ™[šY\ÊÏË[šÏËš][\ÏÏŞßJJTÚJËË
NÜ™]\›Ë‹‹–OŞŞ‘ËN‘Ë_N\Ë[™ÛN•ŠÏË˜[™ÛKSX]”KX]”K
KÜYYŒY[•ŠÏË™Y[LŒŠKÛÛ™][Û•ŠÏË˜ÛÛ™][Û‹L
Kš]š[™ÎˆHVI‰‘Ë™š]š[™ÏOOHL[šÎ•ß_Y[˜İ[ÛˆšJËKJ^Ü™]\›–ÖÌKËŒŒKŒŒWKËŒŒKKŒŒWKËKŒŒKŒŒWKËKŒŒKKŒŒWWK™]™\J
Õ‹×JOO™™JÊÕ‹JÕËJJ_Y[˜İ[ÛˆÊËKK‹Ê^ØÛÛœİÏQËRË™Y[Œ	‰’Ë˜ÛÛ™][ÛŒO\ÒJŠOŒÍ‹Œ‹ÊNŒÚYŠËœÜYY
ÏS]
KRËœÜYYUŠŒLŠ‹JKX]˜XœÊËœÜYY
OŒ
\™]\›ˆLNÒË˜[™ÛJÏVJ•ŠŒ‹ŒJ“X]œÚYÛŠËœÜYY
KË˜[™ÛOSX]˜][ŒŠX]œÚ[ŠË˜[™ÛJKX]˜ÛÜÊË˜[™ÛJJK	‰’I‰ŠË™Y[SX]›X^
Ë™Y[UŠŠŠÓX]˜XœÊËœÜYY
J‹Œ
JJNØÛÛœİRË
ÓX]˜ÛÜÊË˜[™ÛJJ’ËœÜYY
•‹RËJÓX]œÚ[ŠË˜[™ÛJJ’ËœÜYY
•Ü™]\›ˆšJÊOÊË]ËO[LJNŠË˜ÛÛ™][ÛSX]›X^
Ë˜ÛÛ™][Û‹SX]˜XœÊËœÜYY
J‹JKËœÜYYLL
_Y[˜İ[ÛˆœÊÊ^ØÛÛœİOQË™ZXÛNÜ™]\›ˆËš[œÚY_
Ëœ^Y\‹JOLKOÈXğê\˜Ø]H[ÛØÚKˆ’K™š]š[™ÏÓX]˜XœÊKœÜYY
O‹ŒÍOÈ‘]0ê[ˆ[ÛØÚH\˜H˜Z˜\‹ˆŠKœÜYYLK™š]š[™ÏHLK’\È˜Z˜YÈ[ÛØÚKˆŠN’K˜ÛÛ™][ÛLK™Y[LÈ‘[ÛØÚH™XÙ\Ú]HÛÛX\İX›HÈ™\\˜XÚpìÛ‹ˆŠK™š]š[™ÏHLËœ^Y\‹RKËœ^Y\‹ORKK‘[ˆ[ÛØÚH0­ÈÈXÙ[\˜H0­ÈÈœ™[˜HÈ™]›ØÙYH0­ÈKÑÚ\˜KˆŠ_Y[˜İ[ÛˆÜÊËKKŠ^ØÛÛœİÏUÒN‘Ë[šËÏUÑË[šÎ’NÜ™]\›ˆJËš][\ÖÖWOŒ
_TÚJËKJOÈLN˜YJËKJ_Y[˜İ[ÛˆÊËKKL
^Ü™]\›ˆOOOH™Y[‰‰‘Ë™Y[L	‰˜YJKš[™[ÜK™Y[Ø[ˆŠOÊË™Y[SX]›Z[ŠLË™Y[
ÌÎ
KL
N–OOOHœ™\Z\ˆ‰‰‘Ë˜ÛÛ™][ÛL	‰˜YJKš[™[ÜKœØÜ˜\ŠOÊË˜ÛÛ™][ÛSX]›Z[ŠLË˜ÛÛ™][ÛŠÊKœÚÚ[OOH“YXğè[šXÛÈÌÎŒŒ
JÕŠJKL
NˆL_XÛÛœİO^Ù›ÛÙˆœ˜][Ûˆ‹YYXÚ[™Nˆ˜˜[™YÙH‹X]\šX[ÎˆœØÜ˜\‹Y[ˆ™Y[Ø[ˆŸK\Ï^Ù›ÛÙˆ˜ÛÛZYH‹YYXÚ[™Nˆ›YYXÚ[˜H‹X]\šX[Îˆ›X]\šX[\È‹Y[ˆ˜ÛÛX\İX›HŸKÜÏSØš™Xİ™œ›ÛQ[šY\ÊØš™Xİ™[šY\ÊJK›X\

ÑËWJOO–ÒK×JJKYO^Ü˜][ÛŒ‹˜[™YÙNŒKØÜ˜\Œ‹Y[Ø[ŒË[[[ÎŒ_KÏ^Ü˜][Û‹˜[™YÙNKØÜ˜\ŒLY[Ø[[[[ÎŒŒNÙ[˜İ[Ûˆ\ÊÊ^Ü™]\›ˆØš™Xİ™[šY\ÊÏËš][\ÏÏŞßJKœ™YXÙJ
KÖK—JOO’JÊYVÖWOÏÌ
J“X]›X^
[X™\ŠŠ_
K
_Y[˜İ[Ûˆ™JËJ^Ü™]\›ˆQßVYVÒW_S[X™\‹š\Ñš[š]JË˜Ø\XÚ]JOÌ“X]›X^
X]›Z[Š
ÖÒWOÏÌ
KJËš][\ÖÒWOÏÌ
KX]™›ÛÜŠ
Ë˜Ø\XÚ]K^\ÊÊJKÖYVÒWJJJ_Y[˜İ[ÛˆÊËKJ^ØÛÛœİSVÒWKÏQÏËœİ\š]›ÜœÏË–ÑË˜Xİ]™WOËš[™[ÜNÚYŠUŸS[X™\‹š\Ò[YÙ\ŠJ_OLUÊ\™]\›ÛÚÎˆLK[[İ[ŒY\ÜØYÙNˆØ\™ØH[°è[YHŸNØÛÛœİÏSX]›Z[ŠK™JËŠJNÜ™]\›ˆÏÊËš][\ÖÕ—OJËš][\ÖÕ—OÏÌ
JÒËÛÚÎˆL[[İ[’ËY\ÜØYÙN˜™XÛÙÚYÎˆ	ÒßH0­È	Û\ÖÒW_IÒÏOÈˆ0­È]YYHX]\šX[Üˆ™XÛÙÙ\ˆˆˆŸXJNÛÚÎˆLK[[İ[ŒY\ÜØYÙNˆ“[ØÚ[H[˜Nˆ\ÜÚ]Hİ[Z[š\İ›ÜÈ[ˆHX\ğëXHŸ_Y[˜İ[ÛˆÜÊÊ^ØÛÛœİOQÏËœİ\š]›ÜœÏË–ÑË˜Xİ]™WOËš[™[ÜNÚYŠRJ\™]\›ÛÚÎˆLKY\ÜØYÙNˆ”Ú[ˆ[ØÚ[HŸNÛ]OLÙ›ÜŠÛÛœİÕ‹×[ÙˆØš™Xİ™[šY\ÊÜÊJ^ØÛÛœİÏSX]›X^
X]™›ÛÜŠKš][\ÖÕ—OÏÌ
JNÒÉ‰ŠËœ™\Ûİ\˜Ù\ÖÕ×OJËœ™\Ûİ\˜Ù\ÖÕ×OÏÌ
JÒËKš][\ÖÕ—OLJÏRÊ_\™]\›ˆOÊË›ÙÜÏËœ\Ú
0ëXH	ÑË™^_Nˆ	Ö_H[šYY\È\ÜÚ]Y\È[ˆHX\ğëXK˜
KÛÚÎˆL[[İ[–KY\ÜØYÙN˜\ÜÚ]YÜÈ	Ö_Hİ[Z[š\İ›ÜÈ[ˆH˜\ÙXJNÛÚÎˆLKY\ÜØYÙNˆ“›È]˜\Èİ[Z[š\İ›ÜÈ\˜H\ÜÚ]\ˆŸ_XÛÛœİÜÏ^Ø[[[Îˆ˜[[[È‹YYXÚ[™Nˆ˜˜[™YÙHŸNÙ[˜İ[ÛˆÙJÊ^Ü™]\›ˆË˜ÛÛ[][š]Kœİ\š]›ÜœÖÑË˜ÛÛ[][š]K˜Xİ]™WKš[™[Ü_Y[˜İ[Ûˆ\ÊÊ^ÚYŠ	JË˜ÛÛ[][š]JKË™\]Z\Y[™\œÚ[ÛˆOOLJ^ØÛÛœİOSÙJÊNÒKš][\Ë˜[[[ÏLKš][\Ë˜˜[™YÙOLØÛÛœİOSX]›Z[ŠŒX]›X^
X]™›ÛÜŠËœ^Y\‹˜[[[ÏÏÍ
JJKSX]›Z[ŠKX]›X^
X]™›ÛÜŠËœ^Y\‹›YYÏÌJJJNÒKš][\Ë˜[[[ÏSX]›Z[ŠK™JK˜[[[ÈŠJKKš][\Ë˜˜[™YÙOSX]›Z[Š‹™JK˜˜[™YÙHŠJKË™\]Z\Y[™\œÚ[ÛL_Uİ
Ê_Y[˜İ[Ûˆİ
Ê^ØÛÛœİOSÙJÊNÜ™]\›ˆËœ^Y\‹˜[[[ÏRKš][\Ë˜[[[ÏÏÌËœ^Y\‹›YYRKš][\Ë˜˜[™YÙOÏÌ_Y[˜İ[Ûˆ\ÊËJ^ØÛÛœİOSÙJÊNÜ™]\›ˆS[X™\‹š\Ò[YÙ\ŠKš][\ÖÒWJ_Kš][\ÖÒWOLÈLNŠKš][\ÖÒWKKKİ
ÊKL
_Y[˜İ[ÛˆÙJËKJ^ØÛÛœİPÜÖÒWNÚYŠUŸS[X™\‹š\Ò[YÙ\ŠJ_OL
\™]\›ˆØÛÛœİÏSÙJÊKÏSX]›Z[ŠK™JËŠJNÜ™]\›ˆÏŒ	‰ŠËš][\ÖÕ—OJËš][\ÖÕ—OÏÌ
JÒÊKİ
ÊKßXÛÛœİNKİMËÙOSØš™Xİ™œ™Y^™JÙ˜\›XXÚXNÛ˜[YNˆ‘˜\›XXÚXHHHpéØH‹ÛÜŞNŸKØœİXÛ\Î–ÖÌ‹—KÌ‹×KÍ‹—KÍ‹×WKİ\Y\Î–ŞÚYˆ˜›İ\]Z[ˆ‹Œ‹NŒKÚ[™ˆ›YYXÚ[™H‹[[İ[ŒŸKÚYˆ˜ØZ˜H‹‹NŒKÚ[™ˆ™›ÛÙ‹[[İ[Œ_W_KY\˜ØYÎÛ˜[YNˆÛÛXYÈX˜[™Û˜YÈ‹ÛÜŞNŸKØœİXÛ\Î–ÖÌ‹—KÌË—KÍ‹—KÍ‹×WKİ\Y\Î–ŞÚYˆ™\Ü[œØH‹Œ‹NŒKÚ[™ˆ™›ÛÙ‹[[İ[ŒßKÚYˆœİ\YÜˆ‹ËNÚ[™ˆ™Y[‹[[İ[Œ_W_K[\Û˜[YNˆ•[\ˆYXğè[šXÛÈ‹ÛÜŞNŸKØœİXÛ\Î–ÖÌ‹—KÌ‹×KÍ‹—KÍ‹×WKİ\Y\Î–ŞÚYˆ˜ØZ˜H‹Œ‹NŒKÚ[™ˆ›X]\šX[È‹[[İ[ŒßKÚYˆ˜šYÛˆ‹ËNÚ[™ˆ™Y[‹[[İ[ŒŸW_KÙ[˜[Û˜[YNˆÙ[˜[[Y°ìÛšXØHHHÙ\œ˜H‹ÛÜŞNŸKØœİXÛ\Î–ÖÌ‹—KÌ‹×KÍ‹—KÍ‹×WKİ\Y\Î–ŞÚYˆœ™YÚ\İ›È‹‹NŒKÚ[™ˆ›X]\šX[È‹[[İ[Œ_KÚYˆ˜˜]\šX\È‹Œ‹NŒKÚ[™ˆ›X]\šX[È‹[[İ[ŒŸKÚYˆ˜›İ\]Z[ˆ‹ËNÚ[™ˆ›YYXÚ[™H‹[[İ[Œ_W_KX›Ü˜]Üš[ÎÛ˜[YNˆÙ[›ÈH[™\İYØXÚpìÛˆ[˜[0êÈ‹ÛÜŞNŸKØœİXÛ\Î–ÖÌ‹—KÌ‹×KÍ‹—KÍ‹×WKİ\Y\Î–ŞÚYˆœ›İØÛÛÈ‹Œ‹NŒKÚ[™ˆ›X]\šX[È‹[[İ[Œ_KÚYˆ›]Y\İ˜\È‹‹NŒKÚ[™ˆ›YYXÚ[™H‹[[İ[Œ_KÚYˆ˜›İ\]Z[ˆ‹ËNÚ[™ˆ›YYXÚ[™H‹[[İ[Œ_W_K™\]YÜÛ˜[YNˆØ\Ù]H[™\]YÜˆHHÙ\œ˜H‹ÛÜŞNŸKØœİXÛ\Î–ÖÌ‹—KÌ‹×KÍ‹—KÍ‹×WKİ\Y\Î–ŞÚYˆ›X\WØØX›\È‹Œ‹NŒKÚ[™ˆ›X]\šX[È‹[[İ[Œ_KÚYˆ™\ÚX›\È‹‹NŒKÚ[™ˆ›X]\šX[È‹[[İ[Œ_KÚYˆ˜™[™Ø[\È‹ËNÚ[™ˆ›YYXÚ[™H‹[[İ[Œ_W_K]˜XİXXÚ[ÛÛ˜[YNˆ”Y\İÈH]˜XİXXÚpìÛˆ[˜[H‹ÛÜŞNŸKØœİXÛ\Î–ÖÌ‹—KÌ‹×KÍ‹—KÍ‹×WKİ\Y\Î–ŞÚYˆ›X[šYšY\İÈ‹Œ‹NŒKÚ[™ˆ›X]\šX[È‹[[İ[Œ_KÚYˆ˜˜]\šX\×Ü˜Y[È‹‹NŒKÚ[™ˆ›X]\šX[È‹[[İ[Œ_KÚYˆ˜›İ\]Z[ˆ‹ËNÚ[™ˆ›YYXÚ[™H‹[[İ[Œ_W__JNÙ[˜İ[Ûˆ
Ê^Ü™]\›ˆØš™Xİš\ÓİÛŠÙKÊOÕÙVÑ×N›[Y[˜İ[ÛˆJÊ^ØÛÛœİOS
ÊNÚYŠRJ\™]\›ˆ™]ÈÙ]ØÛÛœİO[™]ÈÙ]
K›ØœİXÛ\Ë›X\

Õ‹×JOO˜	ÕŸK	ÕßX
JNÙ›ÜŠ]LÕÕŠÊÊVK˜Y
	ÕŸK
KK˜Y
	ÕŸK	ÒİL_X
NÙ›ÜŠ]LÕİÕŠÊÊVK˜Y
	ÕŸX
KK˜Y
	ØL_K	ÕŸX
NÜ™]\›ˆK™[]J	ÒK™ÛÜ‹K	ÒK™ÛÜ‹_X
K_Y[˜İ[ÛˆšJ
^Ü™]\›ˆØš™Xİ™œ›ÛQ[šY\ÊØš™Xİ™[šY\ÊÙJK›X\

ÑËWJOO–ÑËİZÙ[–×K™[XZ[š[™ÎßK›ÛXšY\Î–ŞÚY˜	ÑßK^ŒX‹KNK‘ÏOOH[\ˆÍNŒË›ÛN‘ÏOOH[\ˆÈ˜œ]H‘ÏOOH˜Ù[˜[ÈœØÜ™YXÚ\ˆˆØ[Ù\ˆ‹[]™NˆL]XÚĞÛÛÛİÛŒKÚY˜	ÑßK^Œ˜ŒËKNŒËKŒË›ÛN–È›X›Ü˜]Üš[È‹œ™\]YÜˆ—Kš[˜ÛY\ÊÊOÈ›\šÙ\ˆ‘ÏOOH™]˜XİXXÚ[ÛˆÈœ[›™\ˆˆØ[Ù\ˆ‹[]™NˆL]XÚĞÛÛÛİÛŒW_WJJ_Y[˜İ[Ûˆ™JÊ^ÊQËš[\š[Üœß\[ÙˆËš[\š[ÜœÈOH›Øš™XİŠI‰ŠËš[\š[ÜœÏ]šJ
JNÙ›ÜŠÛÛœİÒKW[ÙˆØš™Xİ™[šY\ÊšJ
JJ^ØÛÛœİQËš[\š[ÜœÖÒWNÚYŠUŸP\œ˜^Kš\Ğ\œ˜^J‹ZÙ[Š_P\œ˜^Kš\Ğ\œ˜^J‹›ÛXšY\ÊJQËš[\š[ÜœÖÒWOVNÙ[Ù^Õ‹ZÙ[VË‹‹›™]ÈÙ]
‹ZÙ[‹™š[\ŠÏO“
JKœİ\Y\ËœÛÛYJÏO’ËšYOOUÊJJWK
U‹œ™[XZ[š[™ß\[Ùˆ‹œ™[XZ[š[™ÈOH›Øš™XİŸ\œ˜^Kš\Ğ\œ˜^J‹œ™[XZ[š[™ÊJI‰Š‹œ™[XZ[š[™Ï^ßJNÙ›ÜŠÛÛœİÈÙˆ
JKœİ\Y\Ê^ÚYŠ‹ZÙ[‹š[˜ÛY\ÊËšY
J^Ù[]H‹œ™[XZ[š[™ÖÕËšYNØÛÛ[Y_XÛÛœİÏU‹œ™[XZ[š[™ÖÕËšYNÒÈOO]›ÚY	‰Š‹œ™[XZ[š[™ÖÕËšYOS[X™\‹š\Ò[YÙ\ŠÊOÓX]›X^
KX]›Z[ŠË˜[[İ[ÊJN•Ë˜[[İ[
___\™]\›ŠQËš[œÚY_S
Ëš[œÚYKœÚ]RY
_S[X™\‹š\Ñš[š]JËš[œÚYK
_S[X™\‹š\Ñš[š]JËš[œÚYKJ_Ëš[œÚYK_Ëš[œÚYKO_Ëš[œÚYK˜K_Ëš[œÚYKO’İKJI‰ŠËš[œÚYO[[
KßY[˜İ[Ûˆ\ÊËKJ^Ü™]\›ˆQËš[œÚYI‰“
JHOO[[	‰–OŸY[˜İ[ÛˆÊËJ^ØÛÛœİOS
JNÜ™]\›ˆV_Ëš[œÚYOÈLNŠ™JÊKËš[œÚYO^ÜÚ]RY’K–K™ÛÜ‹
ËKN–K™ÛÜ‹KK_KL
_Y[˜İ[ÛˆšJÊ^Ü™]\›ˆHQËš[œÚYI‰“X]š\İ
Ëš[œÚYKMKËš[œÚYKKMKJOKŒßY[˜İ[ÛˆœÊÊ^Ü™]\›ˆšJÊOÊËš[œÚYO[[L
NˆL_Y[˜İ[ÛˆÊËKO[[
^ÚYŠQËš[œÚYJ\™]\›ÛÚÎˆLKY\ÜØYÙNˆ“›È\İ0è\È[›ÈŸNÚ™JÊNØÛÛœİÏS
Ëš[œÚYKœÚ]RY
Kœİ\Y\Ë™š[™
O›šYOORJNÚYŠUÊ\™]\›ÛÚÎˆLKY\ÜØYÙNˆ“Øš™]È\ØÛÛ›ØÚYÈŸNÚYŠËš[\š[ÜœÖÑËš[œÚYKœÚ]RYKZÙ[‹š[˜ÛY\ÊJJ\™]\›ÛÚÎˆLKY\ÜØYÙNˆ–XH\İ0èHØ\]YXYÈŸNÚYŠX]š\İ
Ëš[œÚYKJË
ËJKËš[œÚYKKJËJËJJOLKŠ\™]\›ÛÚÎˆLKY\ÜØYÙNˆ‘[X\ÚXYÈZ›ÜÈŸNØÛÛœİÏQËš[\š[ÜœÖÑËš[œÚYKœÚ]RYKRËœ™[XZ[š[™ÖÒWOÏÕË˜[[İ[OVOÖJË˜ÛÛ[][š]KËšÚ[™
NÛÚÎˆL[[İ[œY\ÜØYÙN˜
ÉÜH	ÕËšÚ[™XNÚYŠ^K›ÚÊ\™]\›ˆNÚYŠS[X™\‹š\Ò[YÙ\ŠK˜[[İ[
_K˜[[İ[_K˜[[İ[œ
\™]\›ÛÚÎˆLKY\ÜØYÙNˆ›İ0ë[ˆ›È°è[YÈŸNÖ_
Ë˜ÛÛ[][š]Kœ™\Ûİ\˜Ù\ÖÕËšÚ[™JÏ^K˜[[İ[
NØÛÛœİ\^K˜[[İ[Ü™]\›ˆŒÒËœ™[XZ[š[™ÖÒWO]Š[]HËœ™[XZ[š[™ÖÒWKËZÙ[‹œ\Ú
JJKË‹‹K™[XZ[š[™ÎÚ[™•ËšÚ[™_XÛÛœİ^ŞŒL‹NŒLŸK]VŞÚYˆ™˜\›XXÚXH‹˜[YNˆ‘˜\›XXÚXH‹ËNŒM‹™\Ûİ\˜ÙNˆ›YYXÚ[™H‹[[İ[ŒŸKÚYˆ›Y\˜ØYÈ‹˜[YNˆ“Y\˜ØYÈ‹KNK™\Ûİ\˜ÙNˆ™›ÛÙ‹[[İ[ŒßKÚYˆ[\ˆ‹˜[YNˆ•[\ˆ‹ŒNKNË™\Ûİ\˜ÙNˆ›X]\šX[È‹[[İ[ŒßKÚYˆ˜Ù[˜[‹˜[YNˆÙ[˜[[Y°ìÛšXØH‹‹NŒŒ™\Ûİ\˜ÙNˆ›X]\šX[È‹[[İ[ŒŸKÚYˆ›X›Ü˜]Üš[È‹˜[YNˆÙ[›ÈH[™\İYØXÚpìÛˆ‹ŒŒKN™\Ûİ\˜ÙNˆ›YYXÚ[™H‹[[İ[Œ_KÚYˆœ™\]YÜˆ‹˜[YNˆ”\°ë[Y]›È[™\]YÜˆ‹ŒMËNŒMË™\Ûİ\˜ÙNˆ›X]\šX[È‹[[İ[Œ_KÚYˆ™]˜XİXXÚ[Ûˆ‹˜[YNˆ”[ÈH]˜XİXXÚpìÛˆ‹ŒŒKNŒM‹™\Ûİ\˜ÙNˆ›X]\šX[È‹[[İ[Œ_WK^Ú[™š\›X\NÛ˜[YNˆ‘[™™\›Y\°ëXH‹ÛÜİŒËY™™Xİˆ•˜]H\Ú[Û™\È[[X[™XÙ\ˆÚH^HYYXÚ[˜KˆŸKØ\™[Û˜[YNˆ’Y\È‹ÛÜİŒËY™™Xİˆ”›ÙXÙH[˜H˜XÚpìÛˆX\šXHÜˆš]™[ˆŸKÛÜšÜÚÜÛ˜[YNˆ•[\ˆ‹ÛÜİY™™Xİˆ“YZ›Ü˜H\È™\\˜XÚ[Û™\ÈHHØ\œ›ØÙ\°ëXKˆŸK˜\œšXØY\ÎÛ˜[YNˆ˜\œšXØY\È‹ÛÜİŒ‹Y™™Xİˆ”™YXÙHH™\ÚpìÛˆHÜÈ\ÙY[ÜËˆŸK™Y›ÛÛNÛ˜[YNˆ‘Ü›Z]Üš[ÜÈ‹ÛÜİŒËY™™Xİˆ”™YXÙHH˜]YØH[[X[™XÙ\‹ˆŸKÚ]Ú[Û˜[YNˆÛØÚ[˜H‹ÛÜİŒËY™™Xİˆ”™YXÙH[ÛÛœİ[[ÈÚHš]™[ˆ[Y[›ÜÈÜÈ\œÛÛ˜\ËˆŸKİÜ˜YÙNÛ˜[YNˆ[XXğê[ˆ‹ÛÜİŒ‹Y™™Xİˆ”›İYÙHÜÈX]\šX[\È\˜[HÜÈ\ÙY[ÜËˆŸKÛÚÛİ]Û˜[YNˆ”Y\İÈHšYÚ[[˜ÚXH‹ÛÜİŒËY™™Xİˆ”™YY\˜HHY™[œØHH]š\ØHHÜÈ\ÙY[ÜËˆŸKÙ[™\˜]ÜÛ˜[YNˆ‘Ù[™\˜YÜˆ‹ÛÜİY™™XİˆÛÛœİ[YHÛÛX\İX›H\˜HYZ›Ü˜\ˆH[Ü˜[[[X[™XÙ\‹ˆŸ_KœÏVÈš[™š\›X\H‹™Ø\™[ˆ‹ÛÜšÜÚÜ‹˜˜\œšXØY\È—NÙ[˜İ[ÛˆÙJ
^Ü™]\›ØXİ]™NŒ^NŒK[\ÙYŒ[Ü˜[NKİ\š]›ÜœÎ–ŞÚYˆ˜Z[˜H‹˜[YNˆZ[˜H‹ÚÚ[ˆ”Ø[š]\šXH‹ŒL˜]YİYNŒ[]™NˆLKÚYˆœ]H‹˜[YNˆ”]H‹ÚÚ[ˆ“YXğè[šXÛÈ‹ŒL˜]YİYNŒL[]™NˆLKÚYˆ›ZXH‹˜[YNˆ“ZXH‹ÚÚ[ˆ‘^Ü˜YÜ˜H‹ŒL˜]YİYNK[]™NˆLWK™\Ûİ\˜Ù\ÎÙ›ÛÙ‹YYXÚ[™NŒ‹X]\šX[ÎY[ŒŸK˜XÚ[]Y\Î“Øš™Xİ™œ›ÛQ[šY\ÊØš™XİšÙ^\Ê
K›X\
ÏO–ÑËJJKÚ]\Î”]›X\
ÏO‘ËšY
KÙÜÎ–È‘0ëXHNˆ™\Èİ\\š]šY[\ÈYØ[ˆHHX\ğëXKˆ—__Y[˜İ[Ûˆ™JÊ^Ü™]\›ˆHQÉ‰“[X™\‹š\Ò[YÙ\ŠË˜Xİ]™JI‰\œ˜^Kš\Ğ\œ˜^JËœİ\š]›ÜœÊI‰‘Ëœİ\š]›ÜœË›[™İLI‰‘Ë˜Xİ]™OL	‰‘Ë˜Xİ]™OËœİ\š]›ÜœË›[™İ	‰‘Ëœİ\š]›ÜœË™]™\JOO’I‰\[ÙˆK›˜[YOOHœİš[™È‰‰“[X™\‹š\Ñš[š]JKš
I‰’KšL	‰’KšLL	‰“[X™\‹š\Ñš[š]JK™˜]YİYJI‰’K™˜]YİYOL	‰’K™˜]YİYOLL	‰\[ÙˆK˜[]™OOH˜›ÛÛX[ˆŠI‰ŠËœİ\š]›ÜœÖÑË˜Xİ]™WK˜[]™_Ëœİ\š]›ÜœË™]™\JOOˆRK˜[]™JJI‰“[X™\‹š\Ò[YÙ\ŠË™^JI‰‘Ë™^OLI‰“[X™\‹š\Ñš[š]JË™[\ÙY
I‰‘Ë™[\ÙYL	‰“[X™\‹š\Ñš[š]JË›[Ü˜[JI‰‘Ë›[Ü˜[OL	‰‘Ë›[Ü˜[OLL	‰“Øš™XİšÙ^\ÊÙJ
Kœ™\Ûİ\˜Ù\ÊK™]™\JOO“[X™\‹š\Ò[YÙ\ŠËœ™\Ûİ\˜Ù\ÏË–ÒWJI‰‘Ëœ™\Ûİ\˜Ù\ÖÒWOL
I‰“Øš™XİšÙ^\Ê
K™]™\JOO‘Ë™˜XÚ[]Y\ÏË–ÒWOOO]›ÚY	‰ˆQœËš[˜ÛY\ÊJ_[X™\‹š\Ò[YÙ\ŠË™˜XÚ[]Y\ÏË–ÒWJI‰‘Ë™˜XÚ[]Y\ÖÒWOL	‰‘Ë™˜XÚ[]Y\ÖÒWOLÊI‰\œ˜^Kš\Ğ\œ˜^JËœÚ]\ÊI‰‘ËœÚ]\Ë™]™\JOO”]œÛÛYJOO–KšYOORJJ_Y[˜İ[ÛˆÚJÊ^Ù›ÜŠ]OLNÒOQËœİ\š]›ÜœË›[™İÒJÊÊ^ØÛÛœİOJË˜Xİ]™JÒJIQËœİ\š]›ÜœË›[™İÚYŠËœİ\š]›ÜœÖÖWK˜[]™J\™]\›ˆË˜Xİ]™OVKËœİ\š]›ÜœÖÖW_\™]\›ˆ[Y[˜İ[ÛˆÜÊËJ^ØÛÛœİOUÒWNÚYŠSØš™Xİš\ÓİÛŠJJ\™]\›ÛÚÎˆLKY\ÜØYÙNˆ’[œİ[XÚpìÛˆ\ØÛÛ›ØÚYHŸNØÛÛœİQË™˜XÚ[]Y\ÖÒWOÏÌÚYŠLÊ\™]\›ÛÚÎˆLKY\ÜØYÙNˆ’[œİ[XÚpìÛˆ[pè^[[ÈŸNØÛÛœİÏVK˜ÛÜİ
ÕŠŒÜ™]\›ˆËœ™\Ûİ\˜Ù\Ë›X]\šX[ÏÏŞÛÚÎˆLKY\ÜØYÙN˜™XÙ\Ú]\È	ÕßHX]\šX[\ØNŠËœ™\Ûİ\˜Ù\Ë›X]\šX[ËOUËË™˜XÚ[]Y\ÖÒWOUŠÌKÛÚÎˆLY\ÜØYÙN˜	ÖK›˜[Y_Hš]™[	ÑË™˜XÚ[]Y\ÖÒW_XJ_Y[˜İ[ÛˆÊÊ^ØÛÛœİOQËœİ\š]›ÜœË™š[\ŠÏO›Ë˜[]™JKÙØ\™[–KÚ]Ú[•L™Y›ÛÛN•ÏL[™š\›X\N’Ë˜\œšXØY\ÎœÙ[™\˜]ÜOLOQË™˜XÚ[]Y\ËSX]›X^
K›[™İVKSX]›Z[Š‹X]™›ÛÜŠK›[™İÌŠJJKSX]›X^
QËœ™\Ûİ\˜Ù\Ë™›ÛÙ
NÑËœ™\Ûİ\˜Ù\Ë™›ÛÙSX]›X^
Ëœ™\Ûİ\˜Ù\Ë™›ÛÙ]
NØÛÛœİÏ^OŒ	‰‘Ëœ™\Ûİ\˜Ù\Ë™Y[ŒØÉ‰‘Ëœ™\Ûİ\˜Ù\Ë™Y[KKË™^JÊËË™[\ÙYLË›[Ü˜[OSX]›X^
X]›Z[ŠLË›[Ü˜[JÊËLLŒŠJÈ
ÈH\
ÊÏŞJŒŒ
JJNÙ›ÜŠÛÛœİÈÙˆJ[Ë™˜]YİYOSX]›X^
Ë™˜]YİYKLÍKUÊŒL
K	‰ŠËšSX]›X^
KËšN
JKÉ‰‘Ëœ™\Ûİ\˜Ù\Ë›YYXÚ[™OŒ	‰ŠËšŸËš[™™Xİ[ÛŒ
I‰ŠËšSX]›Z[ŠLËš
ÌLŠÒÊJKËš[™™Xİ[ÛSX]›X^

Ëš[™™Xİ[ÛÏÌ
KLLRÊJKË˜›YYLËœ™\Ûİ\˜Ù\Ë›YYXÚ[™KKJNÜ™]\›ˆË›ÙÜËœ\Ú
0ëXH	ÑË™^_NˆÛÛœİ[[È	İHÛÛZYIÛÈˆ0­ÈTĞĞTÑVˆˆˆŸIØÏÈˆ0­ÈÙ[™\˜YÜˆ[ˆX\˜ÚHˆˆŸK˜
KÙ›ÛÙÛÜİÚÜYÙN›_Y[˜İ[ÛˆÜÊËJ^ØÛÛœİOQËœİ\š]›ÜœÖÑË˜Xİ]™WNÚYŠKšSX]›X^
KšRJKKšOOL
^ÖK˜[]™OHLNØÛÛœİSÚJÊNÜ™]\›ˆË›[Ü˜[OSX]›X^
Ë›[Ü˜[KLJKË›ÙÜËœ\Ú
	ÖK›˜[Y_HH]Y\Ë˜
KŸ\™]\›ˆ_Y[˜İ[Ûˆ\ÊÏLŠ^ØÛÛœİOV×KO[™]ÈÙ]Ù›ÜŠ]LÕËLÕŠÊÊY›ÜŠ]ÏLÕÏËLÕÊÊÊ^ØÛÛœİÏJÊLŒJÕŠLMÊÕÊ•ŠŒÌMÊILLKSX]˜XœÊËLLŠOL_X]˜XœÊ‹LLŠOL_OOM‰‰•ÏŒ‰‰•ÏŒÎÕÏNI‰•ÏLMI‰•NI‰•LM_ÖÍK—KÌNK×KÌŒŒWKÍ‹ŒKÌŒKKÌMËM×KÌŒKM—WKœÛÛYJ
İJOO“X]˜XœÊË]
OL‰‰“X]˜XœÊ‹[
OLŠ_Kš\Ê	ÕßK	ÕŸX
_
	‰’ÏOOMÊKœ\Ú
Ş•ËN•‹Ú[™ˆ˜Ø\ˆ‹˜\šX[ŠÊÕŠIMJKK˜Y
	ÕßK	ÕŸX
JNœ	‰’ÏOOLMOÒKœ\Ú
Ş•ËN•‹Ú[™ˆ˜˜\œšY\ˆ‹˜\šX[ŒJNœ	‰’ÏOOLÒKœ\Ú
Ş•ËN•‹Ú[™ˆ›[\‹˜\šX[ŒJNˆ\	‰’ÏI‰’Kœ\Ú
Ş•ËN•‹Ú[™ˆœX˜›H‹˜\šX[’ßJJ_\™]\›ˆ_XÛÛœİ	VŞŞKN‹˜[YNˆ‘Ø\ÛÛ[™\˜H‹Ú[™ˆœ˜Y[È‹İYÙNŒKŞŒNKNË˜[YNˆ[XXğê[ˆ‹Ú[™ˆ™Y[‹İYÙNŒ_KŞŒŒNŒŒK˜[YNˆ”™YYÚ[È‹Ú[™ˆœÚ[\ˆ‹İYÙNŒŸKŞ‹NŒŒ˜[YNˆÙ[˜[[Y°ìÛšXØH‹Ú[™ˆ˜Ù[˜[‹İYÙNŒßKŞŒŒKN˜[YNˆÙ[›ÈH[™\İYØXÚpìÛˆ‹Ú[™ˆœ™\ÙX\˜Ú‹İYÙNKŞŒMËNŒMË˜[YNˆ”\°ë[Y]›È[™\]YÜˆ‹Ú[™ˆœ™[^H‹İYÙN_KŞŒŒKNŒM‹˜[YNˆ”[ÈH]˜XİXXÚpìÛˆ‹Ú[™ˆ™]˜XİX][Ûˆ‹İYÙNŸWKO^ÛX\ÚXN–ÌLLK˜Y[Î–Í×KY[–ÌŒ—KÚ[\–ÌNKŒKÙ[˜[–ÍKNWK™\ÙX\˜Ú–ÌŒ×K™[^N–ÌM‹M—K]˜XİX][Û–ÌŒ‹M—K˜\›XXÚXN–Í‹MWKY\˜ØYÎ–Î_KOSØš™Xİ™[šY\ÊJK›X\

ÑËÒKWWJOOŠÚÚ[™‘Ë’JËKN–JË_JJKÚOVŞŞKNKÚ[™ˆ˜[[[È‹ZÙ[ˆL_KŞËNŒM‹Ú[™ˆ›YY‹ZÙ[ˆL_KŞŒM‹NŒMKÚ[™ˆ˜[[[È‹ZÙ[ˆL_KŞŒŒKNŒL‹Ú[™ˆ›YY‹ZÙ[ˆL_KŞŒL‹NŒŒKÚ[™ˆ˜[[[È‹ZÙ[ˆL_WNÙ[˜İ[ÛˆJ
^ØÛÛœİÏ[™]ÈÙ]O[™]ÈÙ]Ù›ÜŠ]ÏLÕÏİÕÊÊÊY›ÜŠ]ÏLÒÏİÒÊÊÊJX]˜XœÊËLLŠOL_X]˜XœÊËLLŠOL_ÏOOM‰‰’ÏŒ‰‰’ÏŒÊI‰’K˜Y
	ÒßK	ÕßX
K
ÏOOLŸÏOOLßÏOOLŒŸÏOOLŒÊI‰ŠÏŒ‰‰•ÏLÏŒM‰‰•ÏŒÊI‰‘Ë˜Y
	ÒßK	ÕßX
NÙ›ÜŠÛÛœİÈÙˆ	
Y›ÜŠ]ÏKLÒÏLÒÊÊÊY›ÜŠ]KLÜLÜ
ÊÊQË™[]J	ÕË
ÜK	ÕËJÒßX
NÙ›ÜŠ]ÏLLÕÏLMÕÊÊÊY›ÜŠ]ÏLLÒÏLMÒÊÊÊQË™[]J	ÒßK	ÕßX
NØÛÛœİO[™]ÈÙ]
ÊKVË‹‹‰‹‹”]‹‹ÚWNÙ›ÜŠÛÛœİÕË×[ÙˆØš™Xİ˜[Y\ÊJJU‹œÛÛYJOœOOUÉ‰œOOORÊ_Ë˜Y
	ÕßK	ÒßX
NÜ™]\›Ø›ØÚÙY‘Ë›ØYÎ’KØ[Î–__Y[˜İ[ÛˆœÊ
^Ü™]\›–ŞŞËNKŞŒM‹NŸKŞŒŒKNŒLKŞKNŒNKŞŒMKNŒN_KŞŒNŒN_KŞŒLNŒŒßKŞŒNNŒM_WK›X\

ËJOOŠË‹‹‘ËY’K’OOOMÍNŒË›ÛN’OOOMÈ˜œ]H’ILÏOOLOÈœ[›™\ˆˆØ[Ù\ˆ‹[]™NˆL[™ÛN’K]XÚĞÛÛÛİÛŒJJ_XÛÛœİYOH›ÛXšYM\Ø]™K]ŒH‹ÙOH›ÛXšYM\Ø]™K]Œˆ‹OH›ÛXšYM\Ø]™KX˜XÚİ\Ù[˜İ[Ûˆ™JËJ^İ^ØÛÛœİOQË™Ù]][JJKVOÒ”ÓÓ‹œ\œÙJJN›[Ü™]\›ˆJŠOÕ›[XØ]ÚÜ™]\›ˆ[_Y[˜İ[ÛˆZJÊ^İ^Ü™]\›ˆÏÏÊÏYÛØ˜[\Ë›ØØ[İÜ˜YÙJK™JËÙJOÏÔ™JËJOÏÔ™JËYJ_XØ]ÚÜ™]\›ˆ[_Y[˜İ[ÛˆÜÊËJ^ÚYŠUJÊJ\™]\›ˆLNİ^ÒOÏÊOYÛØ˜[\Ë›ØØ[İÜ˜YÙJNØÛÛœİOQË™\œÚ[ÛOOL×ÙNœYKR”ÓÓ‹œİš[™ÚYJÊKÏQË™\œÚ[ÛOOLÔ™JKJN›[ÚYŠÉ‰ˆQË™Ø[YSİ™\Š]^ÒKœÙ]][JK”ÓÓ‹œİš[™ÚYJÊJ_XØ]Úß\™]\›ˆKœÙ]][JKŠKLXØ]ÚÜ™]\›ˆL__Y[˜İ[ÛˆœÊÊ^İ^ÑÏÏÊÏYÛØ˜[\Ë›ØØ[İÜ˜YÙJNÙ›ÜŠÛÛœİHÙ–ÜYKKÙWJQËœ™[[İ™R][JJNÜ™]\›ˆLXØ]ÚÜ™]\›ˆL__XÛÛœİ]SØš™Xİ™œ™Y^™JÜİÜNÙ[XYÙNËÜYY‹K\›XYX]ˆLKÚYÚX\š[™Î‹Ì‹İ\Y\ÎŒLYYÎŒ‹ÚYYÙN‹L‹]›ÛÎŒŸKİ\š]˜[Ù[XYÙNŒL‹ÜYYŒK\›XYX]ˆLÚYÚ‹Œ‹X\š[™ÎŒKİ\Y\ÎYYÎŒKÚYYÙNŒ]›ÛÎŒßKšYÚX\™NÙ[XYÙNŒMËÜYYŒKŒ‹\›XYX]ˆLÚYÚËKX\š[™ÎŒKŒNİ\Y\Î‹YYÎŒKÚYYÙNŒË]›ÛÎ_JKZOMK™OJËKKRJOO“[X™\‹š\Ñš[š]JÊOÓ]
ËKJN•‹JËKKRJOO“X]™›ÛÜŠ™JËKKŠJKOQÏO‘É‰\[ÙˆÏOH›Øš™Xİ‰‰ˆP\œ˜^Kš\Ğ\œ˜^JÊNÙ[˜İ[Ûˆ\ÊËJ^ØÛÛœİOSØš™Xİš\ÓİÛŠ]JOÜ]ÒWNœ]œİ\š]˜[RZJİ™\œÚ[ÛŒ‹[ÙN‘ËY™šXİ[N’K^Y\Ë‹‹–ŒL[[[Î–Kœİ\Y\ËYY–K›YYßK›ÛXšY\ÎœÊ
KÛİœİXİ\™YÛÛ™JÚJKİYÙNŒØ[\ZYÛØXİˆ›ØÚÙY‹XİÚÚXÙN›[XİÎˆ›ØÚÙY‹XİĞÚÚXÙN›[Xİˆ›ØÚÙY‹XİÚÚXÙN›[İ][Û‘]˜XİX]YˆLKXİNˆ›ØÚÙY‹XİPÚÚXÙN›[[™[™Î›[KÚ[ÎŒ[YNŒÛÛ[][š]NšÙJ
_JNÜ™]\›ˆšJŠKŸY[˜İ[ÛˆZJÊ^ØÛÛœİOQË™\œÚ[ÛOOLKOS™JË˜ÛÛ[][š]JOÑË˜ÛÛ[][š]NšÙJ
NÚYŠS™JË˜ÛÛ[][š]JI‰‘Ë˜ÛÛ[][š]OËœİ\š]›ÜœÏË™]™\JOœ	‰œ˜[]™OOOHLJJY›ÜŠÛÛœİÙˆKœİ\š]›ÜœÊSØš™Xİ˜\ÜÚYÛŠÚŒ[]™NˆL_JNÒI‰ˆS™JË˜ÛÛ[][š]JI‰ŠKœİ\š]›ÜœÖÖK˜Xİ]™WKšQËœ^Y\‹š
KK›ÙÜÏP\œ˜^Kš\Ğ\œ˜^JK›ÙÜÊOÖK›ÙÜË™š[\ŠO\[ÙˆOHœİš[™ÈŠKœÛXÙJM
N–×KKœÚYYÙOP
KœÚYYÙKYMJKK™˜XÚ[]Y\ÏSØš™Xİ™œ›ÛQ[šY\ÊØš™XİšÙ^\Ê
K›X\
O–Ü
K™˜XÚ[]Y\ÖÜKÊWJJNÙ›ÜŠÛÛœİÙˆKœİ\š]›ÜœÊ^ÛJš[™[ÜOËš][\Ê_
š[™[ÜOYJœÚÚ[
JNØÛÛœİO\š[™[ÜNŞK˜Ø\XÚ]OP
K˜Ø\XÚ]KËJœÚÚ[
K˜Ø\XÚ]JKKš][\ÏSØš™Xİ™œ›ÛQ[šY\ÊØš™XİšÙ^\Ê]
K›X\
O–İ
Kš][\ÖİK]İK›X^
WJJNÙ›ÜŠÛÛœİÙˆØš™XİšÙ^\Ê]
Kœ™]™\œÙJ
JY›ÜŠŞKš][\ÖİI‰YJJOK˜Ø\XÚ]NÊ^Kš][\ÖİKKNÜ›ØYYP
›ØYYZJK˜›YY\™J˜›YYÌ
Kš[™™Xİ[Û\™Jš[™™Xİ[Û‹L
KP
NNNJ_QË˜ÛÛ[][š]OVKËœ^Y\‹šVKœİ\š]›ÜœÖÖK˜Xİ]™WKšËœ^Y\‹œİ[Z[˜O\™JËœ^Y\‹œİ[Z[˜KLL
KËœ^Y\‹˜[[[ÏP
Ëœ^Y\‹˜[[[ËŒ
KËœ^Y\‹›YYP
Ëœ^Y\‹›YYKJNØÛÛœİØ›ØÚÙY•ŸOSJ
NÙ™JËœ^Y\‹Ëœ^Y\‹KŠ_Øš™Xİ˜\ÜÚYÛŠËœ^Y\‹
NÙ›ÜŠÛÛœİÙˆË›ÛXšY\Ê\ËšYOOMI‰œOOLŒÉ‰œOOOLNI‰ŠL
NÑË›ÛXšY\ÏXÚJË›ÛXšY\ËİİŠKË›ÛİQË›Ûİ™š[\ŠO›J
I‰–È˜[[[È‹›YY—Kš[˜ÛY\ÊšÚ[™
I‰™™JKŠJK›X\
OŠË‹‹œZÙ[œZÙ[OOHL™[XZ[š[™ÎœZÙ[Ì
œ™[XZ[š[™ËKšÚ[™OOH˜[[[ÈÍNŒKšÚ[™OOH˜[[[ÈÍNŒJ_JJKË[YO\™JË[YKYNJKËšÚ[ÏP
ËšÚ[ËYNJKË›[ÙOQË›[ÙOOOH™œ™YHÈ™œ™YHˆ˜Ø[\ZYÛˆ‹Ë™Y™šXİ[OSØš™Xİš\ÓİÛŠ]Ë™Y™šXİ[JOÑË™Y™šXİ[Nˆœİ\š]˜[‹Ë™š[˜[OVÈœÚYÛ˜[‹œÚ[[˜ÙH—Kš[˜ÛY\ÊË™š[˜[JOÑË™š[˜[N›[ØÛÛœİÏ[JË˜Ø[\ZYÛŠOÑË˜Ø[\ZYÛßKÏVÈ›ØÚÙY‹›XY‹™XÚ\Ú[Ûˆ‹˜ÛÛ\]H—Kš[˜ÛY\ÊË˜XİŠNÑË˜Ø[\ZYÛ^ØXİ’ÏÕË˜Xİ‘Ë™š[˜[OÈ›XYˆ›ØÚÙY‹XİÚÚXÙN–Èš[š]H‹›ØœÙ\™H—Kš[˜ÛY\ÊË˜XİÚÚXÙJOÕË˜XİÚÚXÙN›[XİÎ–È›ØÚÙY‹›XY‹™XÚ\Ú[Ûˆ‹˜ÛÛ\]H—Kš[˜ÛY\ÊË˜XİÊOÕË˜XİÎˆ›ØÚÙY‹XİĞÚÚXÙN–ÈØ\›ˆ‹˜ÛÛ˜ÙX[—Kš[˜ÛY\ÊË˜XİĞÚÚXÙJOÕË˜XİĞÚÚXÙN›[Xİ–È›ØÚÙY‹›XY‹™XÚ\Ú[Ûˆ‹˜ÛÛ\]H—Kš[˜ÛY\ÊË˜Xİ
OÕË˜Xİˆ›ØÚÙY‹XİÚÚXÙN–Èœİ][Ûˆ‹›X\ÚXH—Kš[˜ÛY\ÊË˜XİÚÚXÙJOÕË˜XİÚÚXÙN›[İ][Û‘]˜XİX]Y•Ëœİ][Û‘]˜XİX]YOOHLXİN–È›ØÚÙY‹›XY‹™XÚ\Ú[Ûˆ‹˜ÛÛ\]H—Kš[˜ÛY\ÊË˜XİJOÕË˜XİNˆ›ØÚÙY‹XİPÚÚXÙN–È˜[\›H‹š\ÛÛ]H—Kš[˜ÛY\ÊË˜XİPÚÚXÙJOÕË˜XİPÚÚXÙN›[[™[™Î–Èœ™\ØİYH‹˜ÛÜİWÜÚYÛ˜[‹›\İİ›ÚXÙH‹˜ÛÜÙYİ˜[^H‹˜\šYYÜÚYÛ˜[—Kš[˜ÛY\ÊË™[™[™ÊOÕË™[™[™Î›[KË™š[˜[I‰‘Ë˜Ø[\ZYÛ‹˜XİOOH›ØÚÙY‰‰ŠË˜Ø[\ZYÛ‹˜XİH›XYŠKË˜Ø[\ZYÛ‹˜XİOOH˜ÛÛ\]H‰‰‘Ë˜Ø[\ZYÛ‹˜XİÏOOH›ØÚÙY‰‰ŠË˜Ø[\ZYÛ‹˜XİÏH›XYŠKË˜Ø[\ZYÛ‹˜XİÏOOH˜ÛÛ\]H‰‰‘Ë˜Ø[\ZYÛ‹˜XİOOH›ØÚÙY‰‰ŠË˜Ø[\ZYÛ‹˜XİH›XYŠKË˜Ø[\ZYÛ‹˜XİOOH˜ÛÛ\]H‰‰‘Ë˜Ø[\ZYÛ‹˜XİOOOH›ØÚÙY‰‰ŠË˜Ø[\ZYÛ‹˜XİOH›XYŠKË™Ø[YSİ™\HVKœİ\š]›ÜœËœÛÛYJOœ˜[]™JKJËš[\š[ÜœÊ_
Ëš[\š[ÜœÏ^ßJK™JÊNÙ›ÜŠÛÛœİÜW[ÙˆØš™Xİ™[šY\ÊËš[\š[ÜœÊJ^ÚYŠS

J^Ù[]HËš[\š[ÜœÖÜNØÛÛ[Y_^K›ÛXšY\ÏXÚJK›ÛXšY\ËİJ
J_\™]\›ˆËš[œÚYI‰’JËš[œÚYKœÚ]RY
Kš\Ê	ÓX]™›ÛÜŠËš[œÚYK
_K	ÓX]™›ÛÜŠËš[œÚYKJ_X
I‰ŠËš[œÚYO[[
KË™ZXÛOYœÊË™ZXÛKŠK
Ëš[œÚY_Ë™Ø[YSİ™\ŠI‰ŠË™ZXÛK™š]š[™ÏHLJKË™ZXÛK™š]š[™É‰“Øš™Xİ˜\ÜÚYÛŠËœ^Y\‹Ş‘Ë™ZXÛKN‘Ë™ZXÛK_JK\ÊÊKË˜\œÙ[˜[ZÚJÊKË™\œÚ[ÛL‹ßY[˜İ[ÛˆÚJËKKŠ^ØÛÛœİÏ[™]ÈÙ]Ü™]\›ˆË™š[\ŠÏO›JÊI‰–Èœİš[™È‹›[X™\ˆ—Kš[˜ÛY\Ê\[ÙˆËšY
I‰“[X™\‹š\Ñš[š]JË
I‰“[X™\‹š\Ñš[š]JËJI‰’ËKI‰’ËOKI‰’ËI‰’ËOI‰ˆU‹š\Ê	ÓX]™›ÛÜŠË
_K	ÓX]™›ÛÜŠËJ_X
I‰ˆUËš\ÊËšY
I‰•Ë˜Y
ËšY
JKœÛXÙJL
K›X\
ÏOŠË‹‹’Ë’Ë˜[]™OOOHLOÌ
ËšKÊK[]™N’Ë˜[]™HOOHLK]XÚĞÛÛÛİÛœ™JË˜]XÚĞÛÛÛİÛ‹
K›ÛN–Èœ[›™\ˆ‹˜œ]H‹œØÜ™YXÚ\ˆ‹›\šÙ\ˆ—Kš[˜ÛY\ÊËœ›ÛJOÒËœ›ÛNˆØ[Ù\ˆŸJJ_Y[˜İ[Ûˆ
Ê^Ü™]\›ˆË˜ÛÛ[][š]Kœİ\š]›ÜœÖÑË˜ÛÛ[][š]K˜Xİ]™W_Y[˜İ[ÛˆšJÊ^ØÛÛœİOR
ÊKOSX]›Z[ŠZKRK›ØYYKš[™[ÜKš][\Ë˜[[[ÏÏÌ
NÜ™]\›ˆYJKš[™[ÜK˜[[[È‹JOÊK›ØYY
ÏVKİ
ÊKL
NˆL_Y[˜İ[ÛˆJËKKŠ^Û]ÎÙ›ÜŠÛÛœİÈÙˆJ^ØÛÛœİZ
ËÊNÈRË˜[]™_•ŸQİ
ËËJ_
\ÏRÊ_\™]\›ˆßY[˜İ[ÛˆœÊËKJ^Ü™]\›ˆ
ËJOKŒI‰‘İ
ËKJ_Y[˜İ[ÛˆYJËKOHL
^ØÛÛœİQË˜ÛÛ[][š]KÏR
ÊNÖI‰ŠË˜›YYSX]›X^
Ë˜›YYLŠKËš[™™Xİ[ÛS]
Ëš[™™Xİ[ÛŠÎKL
JNØÛÛœİÏUËšRI‰ˆ\]ÑË™Y™šXİ[WKœ\›XYX]Ü™]\›ˆÏÊØš™Xİ˜\ÜÚYÛŠËÚŒÍK›YYŒ˜]YİYNJKØš™Xİ˜\ÜÚYÛŠËœ^Y\‹
KËš[œÚYO[[‹›[Ü˜[OSX]›X^
‹›[Ü˜[KLLŠK‹›ÙÜËœ\Ú
0ëXH	Õ‹™^_Nˆ	ÕË›˜[Y_HÙH™]\˜HHHX\ğëXK˜
JNŠÜÊ‹JKUË˜[]™I‰•‹œİ\š]›ÜœËœÛÛYJOœ˜[]™JI‰ŠØš™Xİ˜\ÜÚYÛŠËœ^Y\‹
KËš[œÚYO[[
JKË™Ø[YSİ™\HU‹œİ\š]›ÜœËœÛÛYJOœ˜[]™JKËœ^Y\‹šR
ÊKšİ
ÊKÚ[˜Ø\XÚ]]Y’ËÜİ•Ë˜[]™OÛ[•Ë›˜[Y__Y[˜İ[ÛˆœÊÊ^ØÛÛœİOQË˜ÛÛ[][š]KO\]ÑË™Y™šXİ[WOÏÜ]œİ\š]˜[^Ë‹‹‘ÊJKÚYYÙN›ÚYÚYYÙQ[˜Ûİ[\›ÚYNÚYŠK™^ILÏOOL
^ØÛÛœİÏRKœİ\š]›ÜœËœÛÛYJÏOœËšYOOH›\šXH‰‰œË˜[]™JKÏQË˜Ø[\ZYÛË˜XİĞÚÚXÙOOOHØ\›ˆÌNŒSX]›X^
X]›Z[ŠÊÖKœÚYYÙJÓX]›Z[ŠX]™›ÛÜŠK™^KÍŠJKRK™˜XÚ[]Y\Ë˜˜\œšXØY\ÊŒ‹RK™˜XÚ[]Y\Ë›ÛÚÛİ]JÏÌNŒ
K[ÊJNÚYŠKœÚYYÙJÏLKQË›ÛXšY\ËœÛÛYJÏOœËœÚYYÙQ^HOO]›ÚY	‰œË˜[]™JI‰ˆQËš[œÚYI‰š
Ëœ^Y\‹
OLËŒI‰œŒ
^ØÛÛœİÏSJ
K˜›ØÚÙYOVŞŞKNŒLŸKŞŒMKNŒLŸKŞŒL‹N_KŞŒL‹NŒM_KŞKN_KŞŒMKNŒM_KŞKNŒM_KŞŒMKN_WK™š[\ŠO™™JKÊJKOSX]›Z[ŠK›[™İŠÓX]˜ÙZ[
‹ÌŠJNÙ›ÜŠ]LÚNÚ
ÊÊ^ØÛÛœİOZOOL	‰’K™^IMOOLÈ˜œ]HšOOZKLI‰œMOÈœØÜ™YXÚ\ˆš	LÏOOLÈœ[›™\ˆˆØ[Ù\ˆÑË›ÛXšY\Ëœ\Ú
Ë‹‹˜VÚKY˜ÚYYÙKIÒK™^_KIÚXOOOH˜œ]HÍNŒË[]™NˆL›ÛNK]XÚĞÛÛÛİÛŒÚYYÙQ^N’K™^_J_U‹œÚYYÙQ[˜Ûİ[\HL‹œÚYYÙO\‹K›ÙÜËœ\Ú
0ëXH	ÒK™^_NˆHÜ™HYØHHØ[ˆXËˆYšpê[™[H\˜HÛÛœÙ\˜\ˆ\È›İš\Ú[Û™\Ë˜
_Y[ÙHKœ™\Ûİ\˜Ù\Ë™›ÛÙSX]›X^
Kœ™\Ûİ\˜Ù\Ë™›ÛÙ\ŠKKœ™\Ûİ\˜Ù\Ë›X]\šX[ÏSX]›X^
Kœ™\Ûİ\˜Ù\Ë›X]\šX[ËSX]›X^
X]™›ÛÜŠ‹ÌŠKRK™˜XÚ[]Y\ËœİÜ˜YÙJJKK›[Ü˜[OSX]›X^
K›[Ü˜[K\ŠŒŠK‹œÚYYÙO\‹K›ÙÜËœ\Ú
0ëXH	ÒK™^_Nˆ\ÙY[È›Øİ\››Ëˆ	ÜÈ“HÜ™HÙH]°ìÈ›İš\Ú[Û™\Ëˆˆ“\È˜\œšXØY\ÈYİX[\›Û‹ˆŸX
_XÛÛœİÏQË›ÛXšY\Ë™š[\ŠÏO˜Ë˜[]™JKÏSJ
K˜›ØÚÙYVŞŞNŒŸKŞŒNŒLŸKŞŒL‹NŒKŞŒ‹NŒMKŞŒŒNŒKŞŒMËNŒŸWKOSX]›Z[Š‹Kœ]›ÛÊÓX]™›ÛÜŠK™^KÍŠJNÛ]LÙ›ÜŠÛÛœİØË×[Ùˆ™[šY\Ê
J^ÚYŠ^_Ë›[™İL
Xœ™XZÎÚYŠKœ]›ÛÏOOLÉ‰ŠÊÒK™^JILŸ
ËËœ^Y\ŠOŸËœÛÛYJOOš
KÊOK
_Y™JËËKÊJXÛÛ[YNØÛÛœİRK™^ILÏOOL	‰˜ÏOOLÈ˜œ]H˜ÏOOLÈœØÜ™YXÚ\ˆ˜ÏOOMÈ›\šÙ\ˆ˜ÉLÏOOLÈœ[›™\ˆˆØ[Ù\ˆİ
ÊÎØÛÛœİ^Ë‹‹›ËY˜]›ÛIÒK™^_KIØßXœOOH˜œ]HÍNŒË[]™NˆL›ÛNœ‹]XÚĞÛÛÛİÛŒNÕËœ\Ú
ŠKË›ÛXšY\Ëœ\Ú
Š_XÛÛœİQË›ÛXšY\Ë™š[\ŠÏOˆXË˜[]™JKœÛXÙJLÍŠNÜ™]\›ˆË›ÛXšY\ÏVË‹‹•Ë‹‹›KËœ^Y\‹šR
ÊKšK›ÙÜÏRK›ÙÜËœÛXÙJM
KŸY[˜İ[ÛˆÊËJ^ØÛÛœİOQË›ÛXšY\Ë™š[\ŠÏO•ËœÚYYÙQ^OOORJNÚYŠVK›[™İKœÛÛYJÏO•Ë˜[]™J_VÌKœ™\ÛÛ™Y
\™]\›ˆLNÙ›ÜŠÛÛœİÈÙˆJUËœ™\ÛÛ™YHLØÛÛœİQË˜ÛÛ[][š]NÜ™]\›ˆ‹œ™\Ûİ\˜Ù\Ë™›ÛÙ
ÏL‹‹œ™\Ûİ\˜Ù\Ë›X]\šX[ÊÏLK‹›[Ü˜[OS]
‹›[Ü˜[JÍKL
K‹›ÙÜËœ\Ú
0ëXH	Ò_NˆØ[ˆXÈ™\Ú\İpìÈ[\ÙY[ËˆHÛÛ][šYY™Xİ\\°ìÈİ[Z[š\İ›ÜË˜
KLY[˜İ[ÛˆœÊËJ^ØÛÛœİO^Ù›ÛÙˆœ˜][Ûˆ‹YYXÚ[™Nˆ˜˜[™YÙH‹X]\šX[ÎˆœØÜ˜\‹Y[ˆ™Y[Ø[ˆŸVÒWKQË˜ÛÛ[][š]KÏR
ÊNÜ™]\›ˆV_‹œ™\Ûİ\˜Ù\ÖÒWOL™JËš[™[ÜKJOOÈLNŠ‹œ™\Ûİ\˜Ù\ÖÒWKKKËš[™[ÜKš][\ÖÖWOJËš[™[ÜKš][\ÖÖWOÏÌ
JÌKİ
ÊKL
_Y[˜İ[Ûˆ\ÊÊ^ÚYŠË›[ÙHOOH˜Ø[\ZYÛˆŸËœİYÙHOOLJ\™]\›ˆLNØÛÛœİOR
ÊKš[™[ÜNÜ™]\›ˆYJK™Y[Ø[ˆŠOÊËœİYÙOL‹L
NˆL_Y[˜İ[ÛˆÜÊÊ^ØÛÛœİOQË˜ÛÛ[][š]NÜ™]\›ˆË™š[˜[HOOHœÚYÛ˜[‰‰’K™^OßKœİ\š]›ÜœËœÛÛYJOO–KšYOOH›X\ˆŠ_Kœ™\Ûİ\˜Ù\Ë™›ÛÙŸKœ™\Ûİ\˜Ù\Ë›YYXÚ[™OOÈLNŠKœ™\Ûİ\˜Ù\Ë™›ÛÙOL‹Kœ™\Ûİ\˜Ù\Ë›YYXÚ[™KKKKœİ\š]›ÜœËœ\Ú
ÚYˆ›X\ˆ‹˜[YNˆ“X\ˆ‹ÚÚ[ˆ‘İX\™X›ÜÜ]Y\È‹Í‹[]™NˆL˜]YİYNŒŒË›YYŒ[™™Xİ[ÛŒØYYŒŒÌ[™[ÜN™J‘İX\™X›ÜÜ]Y\ÈŠ_JKK›[Ü˜[OSX]›Z[ŠLK›[Ü˜[JÍÊKK›ÙÜËœ\Ú
0ëXH	ÒK™^_NˆX\ˆÙH[™H[™YYÚ[ËˆÛÛ›ØÙHÜÈÙ[™\›ÜÈHHÙ\œ˜K˜
KL
_Y[˜İ[ÛˆÊËJ^ÚYŠË™š[˜[_Ë›[ÙHOOH˜Ø[\ZYÛˆŸËœİYÙOŸVÈœÚYÛ˜[‹œÚ[[˜ÙH—Kš[˜ÛY\ÊJJ\™]\›ˆ[ØÛÛœİOROOOHœÚYÛ˜[ÑË™š[˜[ORKËœİYÙOLËË˜Ø[\ZYÛ‹˜XİH›XYØÛÛœİQË˜ÛÛ[][š]NÕ‹›[Ü˜[OS]
‹›[Ü˜[JÊOÌL‹MJKL
KOÕ‹œ™\Ûİ\˜Ù\Ë™›ÛÙ
ÏL•‹œ™\Ûİ\˜Ù\Ë›X]\šX[ÊÏLØÛÛœİÏVOÈ‘[Z]\İH\ÈÛÛÜ™[˜Y\ËˆÜÈšXZ™\›ÜÈ[ˆZ˜YÈÛÛZYH[ˆØ[ˆXËˆHYYX[›ØÚK[˜HÙYİ[™H›Şˆ™\]H\ÈÛÛÜ™[˜Y\ÈÛÛˆH›Ş‹ˆˆÛÜ\İHH[Z\ÚpìÛˆH™Xİ\\˜\İHY^˜\È[\]Z\Ëˆ[\YØ\›È\ØİXÚ\İH™\ÈÛÛ\È[İ›ÈYÈHHY\KˆÜ™]\›ˆ‹›ÙÜËœ\Ú
‘[Ú[[˜Ú[È0­ÈŠÕÊKßY[˜İ[ÛˆÜÊËJ^ÚYŠË›[ÙHOOH˜Ø[\ZYÛˆŸQË™š[˜[_Ë˜Ø[\ZYÛË˜XİˆOOH™XÚ\Ú[ÛˆŸVÈš[š]H‹›ØœÙ\™H—Kš[˜ÛY\ÊJJ\™]\›ˆ[ØÛÛœİOQË˜ÛÛ[][š]NÑË˜Ø[\ZYÛ‹˜XİH˜ÛÛ\]H‹Ë˜Ø[\ZYÛ‹˜XİÚÚXÙORNÛ]Ü™]\›ˆOOOHš[š]HÊKœİ\š]›ÜœËœÛÛYJÏO•ËšYOOH›\šXHŠ_Kœİ\š]›ÜœËœ\Ú
ÚYˆ›\šXH‹˜[YNˆ“°îœšXH‹ÚÚ[ˆ”˜Y[ÛÜ\˜YÜ˜H‹Î[]™NˆL˜]YİYNŒN›YYŒ[™™Xİ[ÛŒŒŒØYYŒ[™[ÜN™J”˜Y[ÛÜ\˜YÜ˜HŠ_JKKœ™\Ûİ\˜Ù\Ë™›ÛÙ
ÏLËK›[Ü˜[OS]
K›[Ü˜[JÌLL
KH“°îœšXHYØHHØ[ˆXÈÛÛˆ™\È˜XÚ[Û™\ËˆİHÜ\ÈX[Y[™HH\İXÚpìÛˆH[ÛÛXİÈÚYİYHXšY\ÎÈH˜Y[ÛÜ\˜YÜ˜HÙH[™HHHÛÛ][šYYˆŠNŠKœ™\Ûİ\˜Ù\Ë›X]\šX[ÊÏLËK›[Ü˜[OS]
K›[Ü˜[KLËL
KH“X[Y[™\È[Ü\ÈZ›ÜÈHØ[ˆXËˆ[\˜Ø[XšX[ˆ[ˆ[›ÈH]\ÈÙYİ\˜\ÈÜˆ™\È\]Y]\ÈHX]\šX[ˆŠKK›ÙÜËœ\Ú
ÜÈİ\\š]šY[\È0­È	ÕŸX
KË˜Ø[\ZYÛ‹˜XİÏH›XY‹ŸY[˜İ[ÛˆœÊËJ^ÚYŠË›[ÙHOOH˜Ø[\ZYÛˆŸË˜Ø[\ZYÛË˜XİˆOOH˜ÛÛ\]HŸË˜Ø[\ZYÛË˜XİÈOOH™XÚ\Ú[ÛˆŸVÈØ\›ˆ‹˜ÛÛ˜ÙX[—Kš[˜ÛY\ÊJJ\™]\›ˆ[ØÛÛœİOQË˜ÛÛ[][š]NÑË˜Ø[\ZYÛ‹˜XİÏH˜ÛÛ\]H‹Ë˜Ø[\ZYÛ‹˜XİH›XY‹Ë˜Ø[\ZYÛ‹˜XİĞÚÚXÙORNÛ]Ü™]\›ˆOOOHØ\›ˆÊK›[Ü˜[OS]
K›[Ü˜[JÎL
KK›ÙÜËœ\Ú
“H[™™\›YYY0­ÈHÛÛ][šYYY[™pìÈ[]°ìÛˆH]]XÚpìÛˆ\˜H]YHİ›ÜÈ™YYÚ[ÜÈYY[ˆ™XÛÛ›ØÙ\›ËˆŠKH“HY™\[˜ÚXHYØHHHÙ\œ˜KˆHÛÛ][šYY™XÛÛ›ØÙH[]°ìÛˆHÜÈ[™™XİYÜÈHØ[˜H\Ü\˜[˜KˆŠNŠKœ™\Ûİ\˜Ù\Ë›YYXÚ[™JÏL‹K›ÙÜËœ\Ú
“H[™™\›YYY0­ÈHÛÛ][šYYØİ[0ìÈÜÈ™YÚ\İ›ÜÈHÛÛœÙ\°ìÈÜÈÜÚ\È\˜H\İYX\ˆ[˜HÜÚX›H™\ÜY\İKˆŠKH‘İX\™\ÈÜÈ™YÚ\İ›ÜÈ[ˆØ[ˆXËˆÜÈÜÚ\È]YY[ˆ\ÜÛšX›\È\˜H[™\İYØ\ˆ[˜H™\ÜY\İKˆŠKŸY[˜İ[ÛˆœÊËJ^ÚYŠË›[ÙHOOH˜Ø[\ZYÛˆŸË˜Ø[\ZYÛË˜XİÈOOH˜ÛÛ\]HŸË˜Ø[\ZYÛË˜XİOOH™XÚ\Ú[ÛˆŸVÈœİ][Ûˆ‹›X\ÚXH—Kš[˜ÛY\ÊJJ\™]\›ˆ[ØÛÛœİOQË˜ÛÛ[][š]NÑË˜Ø[\ZYÛ‹˜XİH˜ÛÛ\]H‹Ë˜Ø[\ZYÛ‹˜XİÚÚXÙORNÛ]Ü™]\›ˆOOOHœİ][ÛˆÑË˜Ø[\ZYÛ‹˜XİÚÚXÙOOOH›ØœÙ\™HÊË˜Ø[\ZYÛ‹œİ][Û‘]˜XİX]YHLKœ™\Ûİ\˜Ù\Ë›X]\šX[ÊÏL‹K›[Ü˜[OS]
K›[Ü˜[JÍËL
KH“H]HÛÛ\\YH\›Z]HØXØ\ˆ[Ü\ÈHH\İXÚpìÛˆÜˆ[Ø]XÙKˆYØ[ˆÛÛˆX]\šX[HÙH[˜ÛÜœÜ˜[ˆHH]˜XİXXÚpìÛ‹ˆŠN–Kœİ\š]›ÜœËœÛÛYJÏO•ËšYOOH›\šXH‰‰•Ë˜[]™JOÊË˜Ø[\ZYÛ‹œİ][Û‘]˜XİX]YHLKœ™\Ûİ\˜Ù\Ë™›ÛÙ
ÏL‹K›[Ü˜[OS]
K›[Ü˜[JÍ‹L
KH“°îœšXHÛÛÜ™[˜HÜˆ˜Y[ÈHØ[YHHİHÜ\ËˆH\İXÚpìÛˆ]YYH˜XğëXHHYØ[ˆÜÈ˜XÚ[Û™\È\˜H[˜^YXİËˆŠNŠK›[Ü˜[OS]
K›[Ü˜[JÌ‹L
KH“Hœ™XİY[˜ÚXH›È™\ÜÛ™Kˆ[\]Z\ÈØ[HÜˆH0î›[XH]HX\˜ØYKÚ[ˆÙ\ˆÛÛ™š\›X\ˆ]Zpê[ˆÛÛœÚYİZpìÈX˜[™Û˜\ˆH\İXÚpìÛ‹ˆŠNŠKœ™\Ûİ\˜Ù\Ë›X]\šX[ÊÏL‹K›[Ü˜[OS]
K›[Ü˜[JÊKœİ\š]›ÜœË™š[\ŠÏO•Ë˜[]™JK›[™İLÏÍN‹LŠKL
KH”š[Üš^˜\ÈH]ZY[™\ÈXH\İ0è[ˆ[ˆØ[ˆXËˆÙH\Û[ÛH[™\]YÜˆ]^[X\ˆ\˜H™Y›Ü˜\ˆ[™Z0ëXİ[ÈH]˜XİXXÚpìÛ‹ˆŠKK›ÙÜËœ\Ú
H›Û˜H]Y\H0­È	ÕŸX
KË˜Ø[\ZYÛ‹˜XİOH›XY‹ŸY[˜İ[Ûˆ	ÊËJ^ÚYŠË›[ÙHOOH˜Ø[\ZYÛˆŸË˜Ø[\ZYÛË˜XİOOH˜ÛÛ\]HŸË˜Ø[\ZYÛË˜XİHOOH™XÚ\Ú[ÛˆŸVÈ˜[\›H‹š\ÛÛ]H—Kš[˜ÛY\ÊJJ\™]\›ˆ[ØÛÛœİOQË˜ÛÛ[][š]KVKœİ\š]›ÜœË™š[\ŠOOK˜[]™JK›[™İÛ]ÏLÑË˜Ø[\ZYÛ‹˜XİÚÚXÙOOOHš[š]H‰‰–Kœİ\š]›ÜœËœÛÛYJOOKšYOOH›\šXH‰‰K˜[]™JI‰ŠÊÏLŠKË˜Ø[\ZYÛ‹˜XİÚÚXÙOOOH›ØœÙ\™H‰‰ŠÊÏLJKË˜Ø[\ZYÛ‹˜XİĞÚÚXÙOOOHØ\›ˆ‰‰ŠÊÏLJKË˜Ø[\ZYÛ‹˜XİĞÚÚXÙOOOH˜ÛÛ˜ÙX[‰‰–Kœ™\Ûİ\˜Ù\Ë›YYXÚ[™OL‰‰ŠÊÏLJKË˜Ø[\ZYÛ‹˜XİÚÚXÙOOOHœİ][Ûˆ‰‰ŠÊÏLJKOOOH˜[\›H‰‰‘Ë™š[˜[OOOHœÚYÛ˜[‰‰ŠÊÏLJKOOOHš\ÛÛ]H‰‰‘Ë™š[˜[OOOHœÚ[[˜ÙH‰‰ŠÊÏLJKË˜Ø[\ZYÛ‹˜XİOH˜ÛÛ\]H‹Ë˜Ø[\ZYÛ‹˜XİPÚÚXÙORNÛ]ËÜ™]\›ˆOOLÊÏH˜\šYYÜÚYÛ˜[‹H‘S0æ“SSÈSPS‘PÑTˆ0­ÈØ[ˆXÈ]YYH˜Xğë[Ëˆ˜YYH™\ÜÛ™HHH0î›[XH[Z\ÚpìÛÈ˜Z›È[™\]YÜ‹™\ÈÛÛ\ÈÛÛ\İ[ˆ\ÙHHY\œ˜KˆŠN’OOOH˜[\›HÕLÉ‰•ÏLÏÊÏHœ™\ØİYH‹QË˜Ø[\ZYÛ‹œİ][Û‘]˜XİX]YÈ‘S0æ“SSÈSPS‘PÑTˆ0­ÈHÙpìX[]˜]šY\ØHHšYX›KˆHY™\[˜ÚXHHHÙ\œ˜HHH]HXšY\HİpëX[ˆH[ˆÛÛ›ŞH\İH[˜[KˆÜÈİ\\š]šY[\ÈHØ[ˆXÈH[Ü\ÈHH\İXÚpìÛˆ[Ø[˜[ˆ[ÜÈHØ[YKˆˆ‘S0æ“SSÈSPS‘PÑTˆ0­ÈHÙpìX[]˜]šY\ØHHšYX›KˆHY™\[˜ÚXHHHÙ\œ˜HİpëXHH[ˆÛÛ›ŞH\İH[˜[Kˆ]ZY[™\ÈÚYİY[ˆš]›ÜÈ[ˆØ[ˆXÈ[Ø[˜[ˆHØ[YH[ÜËˆŠN•LÊÏH˜ÛÜİWÜÚYÛ˜[‹QË˜Ø[\ZYÛ‹œİ][Û‘]˜XİX]YÈ‘S0æ“SSÈSPS‘PÑTˆ0­ÈHÙpìX[[Ø[˜H[^\š[Ü‹\›È[ÛÛ›ŞHYØH\™KˆØ[ˆXÈH[Ü\ÈHH\İXÚpìÛˆ\ØØ\[ˆÜˆ]\ÈÙ\\˜Y\ÎÈHœ™XİY[˜ÚXHY[™HH[X\ˆÛÛˆH›ŞˆH[İZY[ˆ]YHXH›È\İ0èKˆˆ‘S0æ“SSÈSPS‘PÑTˆ0­ÈHÙpìX[[Ø[˜H[^\š[Ü‹\›È[ÛÛ›ŞHYØH\™KˆÜÈİ\\š]šY[\ÈHØ[ˆXÈ\ØØ\[ˆÜˆÙ\\˜YÎÈHœ™XİY[˜ÚXHY[™HH[X\ˆÛÛˆH›ŞˆH[İZY[ˆ]YHXH›È\İ0èKˆŠNŠÏH›\İİ›ÚXÙH‹H‘S0æ“SSÈSPS‘PÑTˆ0­ÈH0î›[XH\œÛÛ˜H[ˆYH[°ëXH\ÈÛÛÜ™[˜Y\ÈH\Ø\\™XÙH[ˆHšYX›Kˆ[[X[™XÙ\‹[İZY[ˆ™\ÜÛ™H\ÙHY\˜H[˜[KˆŠN•LÉ‰•ÏLÊÏH˜ÛÜÙYİ˜[^H‹H‘S0æ“SSÈSPS‘PÑTˆ0­È[™\]YÜˆ]YYHÙ[YÈH[˜[KZ\ÛYËˆØ[ˆXÈÛØœ™]š]™H[š[Y\ˆ0ëXHÚ[ˆÙpìX[ˆ˜Z›ÈHY\œ˜K[ˆ˜[œÛZ\ÛÜˆÚYİYH[˜Ù[™YËˆŠNŠÏH˜\šYYÜÚYÛ˜[‹H‘S0æ“SSÈSPS‘PÑTˆ0­È[˜[H]YYH[ˆÚ[[˜Ú[Ë\›È\È0ê\™Y\È[\Y[ˆ\ÙYİ\˜\ˆHØ[YKˆ\ÙH[™\]YÜˆ[\œ˜YË™\ÈÛÛ\È™\ÜÛ™[ˆHHÜØİ\šYYˆŠKË˜Ø[\ZYÛ‹™[™[™ÏRËK›ÙÜËœ\Ú

KÙ[™[™Î’Ë™\İ[œİ\š]›ÜœÑ\ØØ\Y•‹İ\Ü•ß_XÛÛœİ\ÏVÖÈXİÈH0­ÈØ[ˆXÈ‹Z[˜Nˆ0ªÔÚHH˜Y[ÈY[™HHÛÛ˜\‹]YH›ÜÈ[H\ÜY\ÜË°®È—KÈXİÈRH0­ÈH[XYH‹”]Nˆ0ªÓHÙ[˜[]˜HÙ[X[˜\È]Y\Kˆ[İZY[ˆHÛÙÚYÈ[[0êY›Û›Ë°®È—KÈXİÈRRH0­ÈH]Y\İ˜H‹“ZXNˆ0ªĞØYHY\HY[™H[ˆ°î›Y\›Ëˆ[ˆš[™İ[˜HÛ™HØ[YK°®È—KÈXİÈUˆ0­È[™\]YÜˆ‹Z[˜Nˆ0ªÕ[™[[ÜÈ[˜H0ë[™XHHÜÈÚ][ÜÈHÜÈ]YH[X\‹ˆ^H]YH[YÚ\‹°®È—KÈXİÈˆ0­È[0î›[[È[X[™XÙ\ˆ‹”]Nˆ0ªÖXHÙH™H[ÚY[Ëˆ›ÈğêHÚH\ÛÈ\ÈY[˜HÙpìX[°®È—WKZOVÈ”™Xİ\\˜H[˜[œÛZ\ÛÜˆ[ˆHØ\ÛÛ[™\˜Kˆ‹‘[˜H[ˆ[[\ˆ[Û0ëYÛÛ›ÈH™XÛÙÙH[ˆšY0ìÛ‹ˆ0ê]˜[È[Ü0ìÛˆ\˜H[[Y[\ˆH˜Y[Ëˆ‹”ÚYİYHHÙpìX[\İH[™YYÚ[È›Ü™\İ[HXÚYH]pêH˜[œÛZ]\‹ˆ‹•Y[™H[™YYÚ[È\˜HXÚY\ˆ]pêH˜[œÛZ]\‹ˆ—NÙ[˜İ[ÛˆÚJÊ^Ü™]\›ˆË›[ÙOOOH™œ™YHÈ”™Xİ\\˜H›İš\Ú[Û™\ÈH™\\˜HHX\ğëXH\˜H[ÚYİZY[H\ÙY[Ëˆ‘Ë™š[˜[OÑË˜Ø[\ZYÛ‹˜XİOOOH›XYÈPÕÈˆ0­ÈYØH[Y\İÈH]˜XİXXÚpìÛˆH˜[œÛZ]HHXÚ\ÚpìÛˆš[˜[ˆ‘Ë˜Ø[\ZYÛ‹˜XİOOOH™XÚ\Ú[ÛˆÈPÕÈˆ0­È[YÙH[™H[\\ˆ[^\š[ÜˆÈZ\Û\ˆ[˜[Kˆ‘Ë˜Ø[\ZYÛ‹˜XİOOOH˜ÛÛ\]HÈĞSTpäPHÓÓTUQH0­È[0î›[[È[X[™XÙ\ˆ]YYH™YÚ\İ˜YÈ[ˆ[X\š[Ëˆ‘Ë˜Ø[\ZYÛ‹˜XİOOH›XYÈPÕÈUˆ0­ÈÚYİYH[ØX›XYÈ\İH[\°ë[Y]›È[™\]YÜ‹ˆ‘Ë˜Ø[\ZYÛ‹˜XİOOH™XÚ\Ú[ÛˆÈPÕÈUˆ0­ÈXÚYHH]Zpê[ˆ]˜XİX\ˆš[Y\›Îˆ[Ü\ÈHH\İXÚpìÛˆÈHØ[ˆXËˆ‘Ë˜Ø[\ZYÛ‹˜XİOOH˜ÛÛ\]HÈPÕÈUˆÓÓTUQÈ0­ÈHš[ÜšYYH]˜XİXXÚpìÛˆXH\İ0èHXÚYYKˆ‘Ë˜Ø[\ZYÛ‹˜XİÏOOH›XYÈPÕÈRRH0­ÈÚYİYH\ÈÛÛÜ™[˜Y\È[™YÚ\İ›È\İH[Ù[›ÈH[™\İYØXÚpìÛ‹ˆ‘Ë˜Ø[\ZYÛ‹˜XİÏOOH™XÚ\Ú[ÛˆÈPÕÈRRH0­ÈXÚYH]pêHXÙ\ˆÛÛˆ\ÈYX˜\ÈÛØœ™H\È]]XÚ[Û™\Ëˆ‘Ë˜Ø[\ZYÛ‹˜XİÏOOH˜ÛÛ\]HÈPÕÈRRHÓÓTUQÈ0­ÈHÛÛ][šYYHÛXYÈ[˜HÜÚXÚpìÛˆÛØœ™H\ÈYX˜\Ëˆ‘Ë˜Ø[\ZYÛ‹˜XİOOH›XYÑË˜ÛÛ[][š]Kœİ\š]›ÜœËœÛÛYJOO’KšYOOH›X\ˆŠOÈPÕÈRH0­ÈÚYİYH[ğìÙYÛÈHX\ˆ\İHHÙ[˜[[Y°ìÛšXØHHHÙ\œ˜KˆˆPÕÈRH0­ÈÚYİYH[[™XØ]]›ÈHHÙ\œ˜H\İHHÙ[˜[[Y°ìÛšXØKˆ‘Ë˜Ø[\ZYÛ‹˜XİOOH™XÚ\Ú[ÛˆÈPÕÈRH0­ÈY[™H[İXY›ÈH[XY\ÈHXÚYHÚHÙœ™XÙ\ˆ™YYÚ[È[Ü\Ëˆ‘Ë˜Ø[\ZYÛ‹˜XİOOH˜ÛÛ\]HÈPÕÈRHÓÓTUQÈ0­ÈHXÚ\ÚpìÛˆÛØœ™H[Ü\È]YYH™YÚ\İ˜YH[ˆ[X\š[Ëˆˆ”™Xİ\\˜H›İš\Ú[Û™\ÈH™\\˜HHX\ğëXH\˜H[ÚYİZY[H\ÙY[Ëˆ›ZVÓ]
ËœİYÙKZK›[™İLJW_Y[˜İ[Ûˆ™JÊ^Ü™]\›ˆË›[ÙHOOH˜Ø[\ZYÛˆËLN‘Ë™š[˜[OÑË˜Ø[\ZYÛ‹˜XİOOOH›XYŸË˜Ø[\ZYÛ‹˜XİOOOH™XÚ\Ú[ÛˆÍ‘Ë˜Ø[\ZYÛ‹˜XİOOH›XYŸË˜Ø[\ZYÛ‹˜XİOOH™XÚ\Ú[ÛˆÍN‘Ë˜Ø[\ZYÛ‹˜XİÏOOH›XYŸË˜Ø[\ZYÛ‹˜XİÏOOH™XÚ\Ú[ÛˆÍ‘Ë˜Ø[\ZYÛ‹˜XİOOH›XYŸË˜Ø[\ZYÛ‹˜XİOOH™XÚ\Ú[ÛˆÌÎ‹LN“X]›Z[Š‹ËœİYÙJ_XÛÛœİKPİ
”YKÌ‹™OKLMKÙOTK™š[™
ÏO‘ËšÚ[™OOH›X\ÚXHŠKœÏ^ØÙ[˜[ØXİˆ˜Xİˆ‹]™[ˆ˜Xİ‹XÚÚXÙH‹YÎ–Èœ™YÚ\İ›È—_KX›Ü˜]Üš[ÎØXİˆ˜XİÈ‹]™[ˆ˜XİËXÚÚXÙH‹YÎ–Èœ›İØÛÛÈ‹›]Y\İ˜\È—_K™\]YÜØXİˆ˜Xİ‹]™[ˆ˜XİXÚÚXÙH‹YÎ–È›X\WØØX›\È‹™\ÚX›\È—_K]˜XİXXÚ[ÛØXİˆ˜XİH‹]™[ˆ˜XİKXÚÚXÙH‹YÎ–È›X[šYšY\İÈ‹˜˜]\šX\×Ü˜Y[È—__KÜÏ^Ù˜\›XXÚXNˆ‘[Ø\[HİX\™XHÚYİYH[˜Ù[™YËˆ]pêH][Kˆ‹Y\˜ØYÎˆ°ªÕY[˜H›Ûğ®ËXÙH[Ø\[ˆ˜YYHHY[ÈHØ[XšX\›Ëˆ‹[\ˆ”]YYHØ\ÛÛ[˜Kˆ[YXğè[šXÛÈ[Xšpê[‹ˆ‹Ù[˜[ˆ•[ˆ[0êY›Û›ÈİY[˜H]°è\È[[Üİ˜YÜ‹ˆ‹X›Ü˜]Üš[Îˆ[İZY[ˆ[Y\°ìÈ\ÈY\\ÈÜˆY\˜KˆH\ÈÙ\œ°ìÈÜˆ[›Ëˆ‹™\]YÜˆ“ÜÈØX›\ÈšXœ˜[‹ˆ[šY[È›È^XØH\ÙHš][Ëˆ‹]˜XİXXÚ[Ûˆ’[ˆZ˜YÈ[˜H\İHH\ØZ™\›ÜËˆ^H›ÛXœ™\ÈXÚYÜÈHX[›ËˆŸNØÛ\ÜÈ\È^[™È]”ØÙ[™^ØÛÛœİXİÜŠ
^Üİ\\Š‘Ø[YTØÙ[™HŠK\Ëœ[›š[™ÏHLK\Ë›İ]ÛÜV×K\Ë›ØØÛY\œÏV×K\Ëœ›ÛÛ\Ï[™]ÈX\\Ë˜Xİ]™P\[™]ÈX\\Ëš\ÚX›T›ÛÛOHˆ‹\Ë›\İÚ\\KLK\ËœÜš]\Ï[™]ÈX\\Ë˜˜XÚÏHLK\Ëœ›ÛÛP›ØÚÜÏ[™]ÈX\\Ëš[[Ï[™]ÈX\\Ëš[\XİÏV×K\Ë˜›\İÙL\Ë˜ÜšY\Ï[™]ÈÙXZÓX\\ËšX\™][[\Ë˜]XÚĞÙL\Ë˜Z[O[[\ËœÚİ\™Xİ[ÛL\ËœİYÙÙ\™Y[™]ÈÙXZÓX\\Ë››Ú\ÙOL\Ë˜š]PÙL\Ë›Y\ÜØYÙU[[L\Ë›\İ]]ÜØ]™OL\Ë›\İYKLK\Ë˜Xİ[ÛœÏ[™]ÈÙ]\Ë›[İš[™ÏHLK\Ëš\İX[ÛØÚÏL\Ë›\İ›Ûİİ\L\Ë˜]XÚÔ[ÙOL\Ëš\[ÙOL\Ë™˜XÚ[™ÏLK\ËÛÜ››ÜÏR\Ê
K\Ëœİ]XÕ[\ÏP\œ˜^K™œ›ÛJÛ[™İİ
İK
KJOOØÛÛœİVIPİÏSX]™›ÛÜŠKĞİ
NÜ™]\›Ş•‹N•ËØÜ™Y[œ
ŠËKÊËJ__J_YÙ][™[Ü[Š
^Ü™]\›ˆHYØİ[Y[œ]Y\TÙ[XİÜŠ™X[ÙÖÛÜ[—HŠ_YÙ]™YXÙY[İ[ÛŠ
^Ü™]\›ˆ\Ëœ™YÚ\İOË™Ù]
œ™YXÙY[İ[ÛˆŠOOOHLXÜ™X]J
^ØÛÛœİOSJ
Nİ\Ë˜›ØÚÙYRK˜›ØÚÙY\Ëœ›ØYÏRKœ›ØYË\Ë˜XİÜ•^\™OWÚJ\Ë^\™\ÊK\ËÛÜ›]\Ï[Ê\Ë^\™\ÊK\Ë™Ù]\Ë˜Y™Ü˜\XÜÊ
K\Ë™Y™™XİÏ]\Ë˜Y™Ü˜\XÜÊ
KœÙ]\
YLÊK\Ë˜Ø[Y\˜\Ë›XZ[‹œ›İ[™^[ÏHLØÛÛœİO]\Ëš[œ]šÙ^X›Ø\™İ\ËšÙ^\ÏVK˜YÙ^\Ê•ËKËTÕÓ‹Q•’QÒÔPÑKK‹TĞËK‹‹Ë‹ËÒQ•‹LJNØÛÛœİJ
OOİ\Ë˜Y\İ›ÛÛJ
K\Ë™˜]Ê
_Nİ\ËœØØ[K›ÛŠœ™\Ú^™H‹ŠK\Ë™]™[Ë›Û˜ÙJ]”ØÙ[™\Ë‘]™[Ë”ÒUÕÓ‹

OO\ËœØØ[K›Ù™Šœ™\Ú^™H‹ŠJK\Ëš[œ]›ÛŠœÚ[\™İÛˆ‹ÏOÚYŠUËØ\ÕİXÚ	‰•Ë›Y]Û‘İÛŠ
I‰•Ë™İÛ‘[[Y[[œİ[˜Ù[ÙˆSØ[˜\Ñ[[Y[	‰\Ëœ[›š[™É‰ˆ]\Ëœ[™[Ü[Š^ØÛÛœİÏ]\Ëœİ]Kš[œÚYOÏİ\Ëœİ]Kœ^Y\‹\
ËËJKO]\Ë˜Ø[Y\˜\Ë›XZ[‹™Ù]ÛÜ›Ú[
ËËJKJK\
KŞZKJKK\KJ\Ëœİ]Kš[œÚYOØ™N•
JÌ
KÔYNİ\Ë˜Z[O^Ş›
İN›]K\Ë˜Xİ[ÛœË˜Y
œÚÛİŠ__JK\Ë˜Y\İ›ÛÛJ
K\Ë˜Z[\œ˜Z[ŠKØ[ÊK\Ë™˜]Ê
K\Ë™Ø[YK™]™[Ë™[Z]
œ™XYK]Ë\^HŠ_XY\İ›ÛÛJ
^İ\Ë˜Ø[Y\˜\Ë›XZ[‹œÙ]›ÛÛJ]
X]›Z[Š\ËœØØ[KÚYÌLL\ËœØØ[KšZYÚÍL
KNKŒJJ_\İ\[ŠKKŠ^ØÛÛœİÏROÙZJ
N›[ÚYŠI‰ˆUÊ\™]\›ˆLNİ\Ëœİ]OUÏÒZJÊN•\ÊKŠNÙ›ÜŠÛÛœİÈÙˆ\ËœÜš]\Ë˜[Y\Ê
JRË™\İ›ŞJ
Nİ\ËœÜš]\Ë˜ÛX\Š
NÙ›ÜŠÛÛœİÈÙˆ\Ë˜Xİ]™P\˜[Y\Ê
JRË™\İ›ŞJ
NÜ™]\›ˆ\Ë˜Xİ]™P\˜ÛX\Š
K\Ëœ[›š[™ÏH]\Ëœİ]K™Ø[YSİ™\‹\ËšÙ^\Ô™\Ù]

K\Ëš[[Ë˜ÛX\Š
K\Ë›\İÚ\\KLK\Ëš[\XİÏV×K\Ë˜›\İÙL\Ë˜ÜšY\Ï[™]ÈÙXZÓX\\ËœİYÙÙ\™Y[™]ÈÙXZÓX\\ËšX\™][[\Ë˜]XÚĞÙ]\Ë˜š]PÙ]\Ë››Ú\ÙO]\Ë˜]XÚÔ[ÙO]\Ëš\[ÙOL\Ëš\İX[ÛØÚÏ]\Ë›\İ]]ÜØ]™O]\Ë›\İ›Ûİİ\]\Ëœİ]K[YK\Ë™›\Ú
ÏÈ”\YH™Xİ\\˜YKˆˆ”™\\˜HH[ØÚ[H[ˆHX\ğëXKˆXœ™H[İXY\››È\˜HÜšY[\Kˆ‹Œ
K\Ëœ\œÚ\İ
LJK\Ë\]RY

K\Ë™˜]Ê
KLZÙ^\Ô™\Ù]

^İ\Ë˜Xİ[ÛœË˜ÛX\Š
K\Ë˜Z[O[[\Ëš[œ]šÙ^X›Ø\™Ëœ™\Ù]Ù^\Ê
_\]\ÙJ
^ÚYŠ]\Ëœ[›š[™Ê\™]\›İ\Ëœ[›š[™ÏHLK\ËšÙ^\Ô™\Ù]

NØÛÛœİO]\Ëœ\œÚ\İ
LJNİ\Ë™Ø[YK™]™[Ë™[Z]
œÚİË[İ™\›^H‹OÈ”\YH[ˆ]\ØKˆ[›ÙÜ™\ÛÈ\İ0èHİX\™YËˆˆ”\YH[ˆ]\ØKˆ›ÈÙHYÈİX\™\‹ˆ‹œ]\ÙHŠ_\™\İ[YJ
^È]\Ëœİ]_\Ëœİ]K™Ø[YSİ™\Ÿ
\ËšÙ^\Ô™\Ù]

K\Ëœ[›š[™ÏHL
_XÛÜÙT[™[

^İ\ËšÙ^\Ô™\Ù]

_XXİ[ÛŠJ^İ\Ëœ[›š[™É‰ˆ]\Ëœ[™[Ü[‰‰\Ë˜Xİ[ÛœË˜Y
J_Z\Ğ]˜\ÙJ
^Ü™]\›ˆ]\Ëœİ]Kš[œÚYI‰ˆ]\Ëœİ]K™ZXÛK™š]š[™É‰š
\Ëœİ]Kœ^Y\‹
O‹_[ØœİXÛ\Ê
^ØÛÛœİO]\Ëœİ]Kš[œÚYOËœÚ]RYÜ™]\›ˆOÊ\Ëœ›ÛÛP›ØÚÜËš\ÊJ_\Ëœ›ÛÛP›ØÚÜËœÙ]
KJJJK\Ëœ›ÛÛP›ØÚÜË™Ù]
JJN\Ë˜›ØÚÙYY›\Ú
KOLŒ
^İ\Ë›Y\ÜØYÙU[[]\Ë[YK››İÊÖNØÛÛœİYØİ[Y[œ]Y\TÙ[XİÜŠˆÛY\ÜØYÙHŠNÕ‹^ÛÛ[RK‹˜Û\ÜÓ\İ˜Y
š\ÚX›HŠ_]\]RY

^ØÛÛœİO]\Ëœİ]NÚYŠRJ\™]\›İ\Ë›\İYRK[YKØİ[Y[œ]Y\TÙ[XİÜŠˆÚYŠKœİ[KœÙ]›Ü\J‹KY\šÛ™\ÜÈ‹İš[™Ê
K]ÙJK[YJJJ‹ŒÍŠJK\Ë™Ø[YK™]™[Ë™[Z]
˜[XšY[˜ÙH‹HRKš[œÚYKÙJK[YJOŒÍ
NØÛÛœİORKœ^Y\‹RKš[œÚYOÏÖNÛ]ÏNÙ›ÜŠÛÛœİÙˆ\Ë™[™[ZY\Ê
J[˜[]™I‰ŠÏSX]›Z[ŠË
‹
JJNÚYŠ\Ë™Ø[YK™]™[Ë™[Z]
[œÚ[Ûˆ‹
UÊKÎ
KK›[ÙOOOH˜Ø[\ZYÛˆŠ^ØÛÛœİRK˜Ø[\ZYÛ‹˜XİHOOH›ØÚÙYÍ’K˜Ø[\ZYÛ‹˜XİOOH›ØÚÙYÌÎ’K˜Ø[\ZYÛ‹˜XİÈOOH›ØÚÙYÌ’K˜Ø[\ZYÛ‹˜XİˆOOH›ØÚÙYÌNŒÛOO]\Ë›\İÚ\\‰‰Š\Ë›\İÚ\\[\Ë™Ø[YK™]™[Ë™[Z]
˜Ú\\ˆ‹‹‹”\ÖÛJJ_XÛÛœİÏRK˜ÛÛ[][š]Kœİ\š]›ÜœÖÒK˜ÛÛ[][š]K˜Xİ]™WKSX]™›ÛÜŠK[YIMŒ
KÔİš[™Ê
KœYİ\
‹ŒŠNÙØİ[Y[œ]Y\TÙ[XİÜŠˆÜİ]ÈŠKš[›™\’SX‰ÓX]˜ÙZ[
Kš
_IOØˆĞSQÜ[ˆÛ\ÜÏHœİ]\Ë[Y]\ˆHİ[OHÚY‰ÓX]˜ÙZ[
Kš
_IHÚOÜÜ[‰ÒË›ØYYKÉÖK˜[[[ßOØˆĞT•PÒÔÈ0­È‰ÖK›YYOØˆ‘S‘TÏœ‰ÒË˜›YYŒÈ’SSÔ”QÒPH0­ÈˆˆŸIÒËš[™™Xİ[ÛÈ’S‘‘PĞÒpäÓˆŠÓX]˜ÙZ[
Ëš[™™Xİ[ÛŠJÈ‰H0­ÈˆˆŸQ0ãPH	ÒK˜ÛÛ[][š]K™^_H0­È	ÓX]™›ÛÜŠK[YKÍŒ
_N‰ÜXØÛÛœİOYØİ[Y[œ]Y\TÙ[XİÜŠˆØ\œÙ[˜[ŠNŞI‰ŠK^ÛÛ[X	ĞYVÒK˜\œÙ[˜[œÙ[XİYK›˜[Y_HĞ×H0­ÈØ\™Ø\È	ÛJJ_HÖX
KØİ[Y[œ]Y\TÙ[XİÜŠˆØÛÛ[][š]HŠK^ÛÛ[RK™ZXÛK™š]š[™ÏØÛÛX\İX›H	ÓX]˜ÙZ[
K™ZXÛK™Y[
_IH0­È[İÜˆ	ÓX]˜ÙZ[
K™ZXÛK˜ÛÛ™][ÛŠ_IX˜	ÒË›˜[Y_H0­È[ØÚ[H	İYJËš[™[ÜJ_KÉÒËš[™[ÜK˜Ø\XÚ]_H0­È[™\™ğëXH	ÓX]™›ÛÜŠKœİ[Z[˜J_IXØİ[Y[œ]Y\TÙ[XİÜŠˆÜXÙHŠK^ÛÛ[RKš[œÚYOÓ
Kš[œÚYKœÚ]RY
K›˜[YN\Ëš\Ğ]˜\ÙJ
OÈ“X\ğëXHHØ[ˆXÈ\Ë™\İšXİ

KØİ[Y[œ]Y\TÙ[XİÜŠˆÛØš™Xİ]™HŠK^ÛÛ[RKš[œÚYOÈ‘H\˜HØ\]YX\‹ˆ™YÜ™\ØHHHY\H\˜HØ[\‹ˆ™ÚJJNØÛÛœİI™š[™
O›œİYÙOOO^™JJJNÚYŠ	‰ˆRKš[œÚYJ^ØÛÛœİSX]œ›İ[™

K
JŒL
KÏ[Œ	‰‘İ
K\Ë˜›ØÚÙY
OÈ‘H0­È[\˜XİX\ˆ˜	İ›˜[Y_H0­È	ÛHXÙØİ[Y[œ]Y\TÙ[XİÜŠˆÛØš™Xİ]™HŠK˜\[™
Øİ[Y[˜Ü™X]Q[[Y[
˜œˆŠKÊ__Y\İšXİ

^ØÛÛœİŞ’KN–_O]\Ëœİ]Kœ^Y\Ü™]\›ˆOL	‰–OLÈ“HpéØH0­ÈÛÛY\˜Ú[ÜÈ’OŒMI‰–OLÈ”Û0ëYÛÛ›ÈH\ÈÛÛY\È’OL	‰–OŒLÏÈ•\˜˜[š^˜XÚpìÛˆ[È[œÈ–OŒMÏÈ›ÜÜ]YHHHÙ\œ˜HˆØ[pëHHHX\ğëXHŸ\\œÚ\İ
OHL
^ÚYŠ]\Ëœİ]J\™]\›ˆLNØÛÛœİOQÜÊ\Ëœİ]JNÜ™]\›ˆI‰\Ë™›\Ú
OÈ”\YHİX\™YKˆˆ“›ÈÙHYÈİX\™\ˆH\YKˆŠKI‰Š\Ë›\İ]]ÜØ]™O]\Ëœİ]K[YJK_[[İ™JKK‹Ê^ØÛÛœİÏ]\Ëœİ]Kš[œÚYOØİ]\Ëœİ]Kš[œÚYOÒİİORK
ÖKRKJÕŞOKI‰OËKI‰ˆUËš\Ê	ÓX]™›ÛÜŠJ_K	ÓX]™›ÛÜŠKJ_X
I‰ŠK^JKKI‰KI‰ˆUËš\Ê	ÓX]™›ÛÜŠK
_K	ÓX]™›ÛÜŠ
_X
I‰ŠKO]
_Y[™[ZY\Ê
^ØÛÛœİO]\Ëœİ]NÜ™]\›ˆKš[œÚYOÒKš[\š[ÜœÖÒKš[œÚYKœÚ]RYK›ÛXšY\Î’K›ÛXšY\ßZ[\Xİ
KJ^İ\Ëš[\XİËœ\Ú
Ø]Ë‹‹’_K›ÛÛN\Ëœİ]Kš[œÚYOËœÚ]RYÏÈˆ‹[YN\Ëœİ]K[YKÚ[™–_J_Y[XYÙQ[™[^JKKŠ^ÚYŠKšSX]›X^
KšVJK\Ëš[\Xİ
K˜›ÛÙŠKKšŒ
\™]\›ˆK˜]XÚĞÛÛÛİÛSX]›X^
K˜]XÚĞÛÛÛİÛ‹ŠK\ËœİYÙÙ\™YœÙ]
K\Ëœİ]K[YJÕŠ‹MJKLNÒK˜[]™OHLK\Ëš[[Ë™[]JJK\Ëœİ]KšÚ[ÊÊÎØÛÛœİÏR
\Ëœİ]JNÜ™]\›ˆËSX]›Z[ŠNNNKË
ÍŠK\Ë™Ü˜[Ú[™]Ø\™ÊJKLYÜ˜[Ú[™]Ø\™ÊJ^ØÛÛœİOZšJ\Ëœİ]KšÚ[ÊNÖK˜[[[É‰”ÙJ\Ëœİ]K˜[[[È‹K˜[[[ÊKK˜˜[™YÙI‰”ÙJ\Ëœİ]K›YYXÚ[™H‹K˜˜[™YÙJKKœÚYYÙQ^HOO]›ÚY	‰–Ê\Ëœİ]KKœÚYYÙQ^JI‰Š\Ë™Ø[YK™]™[Ë™[Z]
œÛİ[™‹›ÛİŠK\Ë™›\Ú
Ø[ˆXÈ™\Ú\İKˆHÜ™HZ˜Hİ[Z[š\İ›ÜÈ[ˆH[˜YKˆ‹YLÊK\Ëœ\œÚ\İ
LJJ_XŞXÛUÙX\ÛŠ
^ØÛÛœİO]\Ëœİ]KOPÚJJNÚYŠK›[™İŠ^İ\Ë™›\Ú
‘\Ø›Ü]YXH\›X\È[ˆHØ[\pìXHÈ™]]˜[^˜[™È[™™XİYÜËˆŠNÜ™]\›ŸRK˜\œÙ[˜[œÙ[XİYVVÊKš[™^ÙŠK˜\œÙ[˜[œÙ[XİY
JÌJIVK›[™İNØÛÛœİPYVÒK˜\œÙ[˜[œÙ[XİYNİ\Ë™›\Ú
	Õ‹›˜[Y_H0­È	Õ‹˜ÛÜİHÜˆ\Ü\›Ø
K\Ë\]RY

_]\ÙPÚ\™ÙJ
^ØÛÛœİO]\Ëœİ]NÚYŠ\Ë˜›\İÙŒ
\™]\›ÚYŠ[JJJ^İ\Ë™›\Ú
”Ú[ˆØ\™Ø\Ëˆ]˜[˜HÈ™]]˜[^˜H[™™XİYÜÈ\˜HÛÛœÙYİZ\ˆpè\ËˆŠNÜ™]\›ŸXÛÛœİORKš[œÚYOÏÒKœ^Y\‹]\Ë™[™[ZY\Ê
KÏ]\Ë›ØœİXÛ\Ê
KÏ\JK‹Ë‹JNÚYŠRÊ^İ\Ë™›\Ú
“™XÙ\Ú]\È[ˆ[™™XİYÈš\ÚX›H[[Ø[˜ÙKˆŠNÜ™]\›ŸZYŠ
KÊOK
^İ\Ë™›\Ú
‘[X\ÚXYÈÙ\˜ØH\˜H\Ø\ˆ[˜HØ\™ØKˆŠNÜ™]\›ŸRK˜\œÙ[˜[œÜ[
ÊË\Ë˜›\İÙLKË\Ë˜]XÚĞÙSX]›X^
\Ë˜]XÚĞÙJK\ËšX\™]^Ë‹‹’ßK\Ë››Ú\ÙOLŒ‹\Ëš[\Xİ
Ë˜›\İŠNÛ]LÙ›ÜŠÛÛœİÙˆŠH]˜[]™_
ÊOŒ‹Œ_Qİ
ËÊ_
\Ë™[XYÙQ[™[^JKŒJK
ÊÊNØÛÛœİOZ
KÊO‹ŞI‰ŠYJKK™Y™šXİ[OOOHœİÜHÎŒMLJK\Ëš\[ÙOKŒÍJK\Ë™Ø[YK™]™[Ë™[Z]
œÛİ[™‹˜›\İŠK\Ë™›\Ú
Ø\™ØH]Û˜YH0­È	ÜH[\XİÜËˆ	ŞOÈ“HÛ™HHH[Ø[˜YËˆˆ“ÜÈ[™™XİYÜÈ[ˆğëYÈ[\İY[™ËˆŸXŒÌ
K\Ë\]RY

K\Ëœ\œÚ\İ
LJ_X]XÚÊJ^ÚYŠ\Ë˜]XÚĞÙŒ
\™]\›ØÛÛœİO]\Ëœİ]KR
JKÏPYVÖK˜\œÙ[˜[œÙ[XİYNÚYŠI‰•‹›ØYYË˜ÛÜİ
^İ\Ë™›\Ú
‘˜[[ˆØ\XÚÜÈ[ˆ[Ø\™ØYÜ‹ˆ\˜H™XØ\™Ø\‹ˆŠNÜ™]\›ŸZYŠRI‰–Kœ^Y\‹œİ[Z[˜OL
^İ\Ë™›\Ú
”™Xİ\\˜H[[Y[ËˆŠNÜ™]\›ŸROÕ‹›ØYYOUË˜ÛÜİ–Kœ^Y\‹œİ[Z[˜KOLL\Ë˜]XÚĞÙROÕË™[^N‹L‹\Ë˜]XÚÔ[ÙOROËŒŒ‹ŒLÎØÛÛœİÏVKš[œÚYOÏÖKœ^Y\Ê_\Ë››Ú\ÙO‹ŒÊI‰Š\Ë››Ú\ÙOROÕË››Ú\ÙNŒ‹ŒË\ËšX\™]^Ë‹‹’ßJNØÛÛœİ]\Ë›ØœİXÛ\Ê
KO]\Ë™[™[ZY\Ê
K]\Ë˜Z[KROİ›ÚYœJËKKJKÏROÜZJËKK˜\œÙ[˜[œÙ[XİY
N›ÖŞÙ[™[^N›[XYÙNŒJÈ
Ê‹LÌ
_WN–×KÏXÖÌOË™[™[^K[ÏÛËRËJËKRËJNİ]NŒÜ‰‰Š\Ë™˜XÚ[™ÏSX]œÚYÛŠŠJK\ËœÚİ\™Xİ[ÛROİ\Ë™˜XÚ[™ÎŒ\Ë™Ø[YK™]™[Ë™[Z]
œÛİ[™‹OÕËœÛİ[™ˆ›Y[YHŠNÛ]LÙ›ÜŠÛÛœİÙ[™[^N™K[XYÙNœß[ÙˆÊ^ÚYŠ\Ë™[XYÙQ[™[^JKËOÕËœİ[‹MJJ^ÛŠÊÎØÛÛ[Y_XÛÛœİOJOÕËœ\Ú‹Œ
KÓX]›X^
ŒK
ËJJKÍOJKRË
J˜KJKKRËJJ˜NÙ›ÜŠ]OLİOİJÊÊ]\Ë›[İ™JKK
_]\Ë™›\Ú
Ë›[™İŒOØ	ØË›[™İH[\XİÜÈ0­È	ÛŸH˜Z˜\Ë˜›È[Y[˜^˜H™]]˜[^˜YKˆ˜Ë›[™İÈ’[\XİËˆ’OÈ‘\Ü\›È\™YËˆˆ”Ú[ˆØš™]]›È[[Ø[˜ÙKˆ‹L
K\Ë\]RY

_Z[\˜Xİ

^ØÛÛœİO]\Ëœİ]NÚYŠK™ZXÛK™š]š[™Ê^İ\Ë™›\Ú
˜Z˜H[ÛØÚH\˜H[\˜XİX\‹ˆŠNÜ™]\›ŸZYŠKš[œÚYJ^ÚYŠšJJJ^ÔœÊJK\Ëš[[Ë˜ÛX\Š
K\Ë››Ú\ÙOL\ËšX\™][[\Ë™Ø[YK™]™[Ë™[Z]
œÛİ[™‹™ÛÜˆŠK\Ë™›\Ú
’\ÈØ[YÈ[^\š[Ü‹ˆŠK\Ëœ\œÚ\İ
LJK\Ë\]RY

NÜ™]\›ŸXÛÛœİÏS
Kš[œÚYKœÚ]RY
KÏRKš[\š[ÜœÖÒKš[œÚYKœÚ]RYKRKš[œÚYKOZœÖÜœÚ]RYNÚYŠI‰’K˜Ø[\ZYÛ–ŞK˜XİOOOH™XÚ\Ú[ÛˆŠ^İ\Ë™Ø[YK™]™[Ë™[Z]
K™]™[
NÜ™]\›ŸXÛÛœİUËœİ\Y\Ë™š[™
OØÛÛœİÏ^Ş›
ËKN›JË_NÜ™]\›ˆRËZÙ[‹š[˜ÛY\ÊšY
I‰š
ÊOK‰‰‘İ
Ë\Ë›ØœİXÛ\Ê
J_JNÚYŠ
^ØÛÛœİ^OËšYËœÛÛYJÏO›ÏOO]šY
I‰’K˜Ø[\ZYÛ–ŞK˜XİOOOH›XY‹ÏSÊKšYÊË‹ŠOOŠÛÚÎˆL[[İ[›‹Y\ÜØYÙNˆ”YX˜H[›İYH[ˆ[İXY\››ËˆŸJN•ÊNÚYŠË›ÚÊ^ØÛÛœİÏRK˜ÛÛ[][š]Kœİ\š]›ÜœÖÒK˜ÛÛ[][š]K˜Xİ]™WNÛËSX]›Z[ŠNNNKË
ÌŠKİ
JK\Ë™Ø[YK™]™[Ë™[Z]
œÛİ[™‹›ÛİŠ_ZYŠË›ÚÉ‰I‰’K˜Ø[\ZYÛ–ŞK˜XİOOOH›XY‰‰KšYË™]™\JÏO’ËZÙ[‹š[˜ÛY\ÊÊJJ^ÒK˜Ø[\ZYÛ–ŞK˜XİOH™XÚ\Ú[Ûˆ‹K˜ÛÛ[][š]K›ÙÜËœ\Ú
	ÕË›˜[Y_NˆÙH[ˆ™][šYÈ\ÈYX˜\Ëˆ]YYH[˜HXÚ\ÚpìÛˆ[™Y[K˜
K\Ëœ\œÚ\İ
LJK\Ë\]RY

K\Ë™Ø[YK™]™[Ë™[Z]
K™]™[
NÜ™]\›Ÿ]\Ë™›\Ú
Ë›Y\ÜØYÙJKË›ÚÉ‰\Ëœ\œÚ\İ
LJK\Ë\]RY

_Y[ÙH\Ë™›\Ú
Xğê\˜Ø]HH[ˆÛÛ[™YÜˆÛÛˆİ[Z[š\İ›ÜÈÈY[™HHHY\KˆŠNÜ™]\›ŸXÛÛœİORKœ^Y\ÚYŠK›[ÙOOOH˜Ø[\ZYÛˆ‰‰ˆRK™š[˜[J^ØÛÛœİÏIÓX]›Z[ŠKœİYÙKŠWNÚYŠ
KÊO‰‰‘İ
KË\Ë˜›ØÚÙY
J^ÚYŠKœİYÙOOOL
^ÒKœİYÙOLKÙJK˜[[[È‹
K\Ë™›\Ú
°ªĞØ[ˆXË\]pëHHÙ\œ˜Kˆ™XÙ\Ú][[ÜÈÛÜœšY[Kˆ\ØØH[ˆšY0ìÛˆ[ˆ[[\‹°®È‹YLÊK\Ëœ\œÚ\İ
LJNÜ™]\›ŸZYŠKœİYÙOOOLI‰–\ÊJJ^İ\Ë™›\Ú
“H˜Y[ÈY[™HH[Z]\‹ˆ[İZY[ˆ™\ÜÛ™H\ÙH[™YYÚ[ÈHHÙ\œ˜Kˆ‹L
K\Ëœ\œÚ\İ
LJNÜ™]\›ŸZYŠKœİYÙOLŠ^İ\ËšÙ^\Ô™\Ù]

K\Ë™Ø[YK™]™[Ë™[Z]
œ˜Y[ËXÚÚXÙHŠNÜ™]\›Ÿ__XÛÛœİRK›Ûİ™š[™
ÏOˆUËZÙ[‰‰š
KÊOKÉ‰‘İ
KË\Ë˜›ØÚÙY
JNÚYŠŠ^ØÛÛœİÏTÙJK‹šÚ[™OOH˜[[[ÈÈ˜[[[Èˆ›YYXÚ[™H‹‹œ™[XZ[š[™ÊNÚYŠÊ^Õ‹œ™[XZ[š[™ËOUË‹ZÙ[U‹œ™[XZ[š[™ÏOOL\Ë™Ø[YK™]™[Ë™[Z]
œÛİ[™‹›ÛİŠK\Ëœ\œÚ\İ
LJK\Ë™›\Ú

ÉÕßH	Õ‹šÚ[™OOH˜[[[ÈÈ˜Ø\XÚÜÈˆ™[™\ÈŸIÕ‹ZÙ[Èˆˆˆ0­È]YYH›İ0ë[ˆŸX
K\Ë\]RY

NÜ™]\›Ÿ_Y›ÜŠÛÛœİÈÙˆ]
^ÚYŠËšYOOH˜Ù[˜[‰‰’K›[ÙOOOH˜Ø[\ZYÛˆ‰‰ˆRK™š[˜[J^Ú
KÊO‰‰\Ë™›\Ú
“HÙ[˜[›ÈY[™HÛÜœšY[KˆÚYİYHš[Y\›ÈHÙpìX[HHÙ\œ˜KˆŠNØÛÛ[Y_ZYŠËšYOOH›X›Ü˜]Üš[È‰‰’K›[ÙOOOH˜Ø[\ZYÛˆ‰‰’K˜Ø[\ZYÛ‹˜XİÏOOH›ØÚÙYŠ^Ú
KÊO‰‰\Ë™›\Ú
“\ÈÛÛÜ™[˜Y\È[X›Ü˜]Üš[Èpî›ˆ›È\\™XÙ[ˆ[ˆ[™YÚ\İ›ËˆŠNØÛÛ[Y_ZYŠËšYOOHœ™\]YÜˆ‰‰’K›[ÙOOOH˜Ø[\ZYÛˆ‰‰’K˜Ø[\ZYÛ‹˜XİOOH›ØÚÙYŠ^Ú
KÊO‰‰\Ë™›\Ú
‘[™\]YÜˆÚYİYHÚ[ˆÛÜœšY[Kˆ™Xİ\\˜H[\È\ÈYX˜\È[X›Ü˜]Üš[ËˆŠNØÛÛ[Y_ZYŠËšYOOH™]˜XİXXÚ[Ûˆ‰‰’K›[ÙOOOH˜Ø[\ZYÛˆ‰‰’K˜Ø[\ZYÛ‹˜XİOOOH›ØÚÙYŠ^Ú
KÊO‰‰\Ë™›\Ú
‘[Y\İÈH]˜XİXXÚpìÛˆpî›ˆ›È\İ0èHXİ]›ËˆŠNØÛÛ[Y_ZYŠ\ÊKËšY
KÊJI‰‘İ
KË\Ë˜›ØÚÙY
J^ÔÊKËšY
K\Ëš[[Ë˜ÛX\Š
K\Ë››Ú\ÙOL\ËšX\™][[\Ë™Ø[YK™]™[Ë™[Z]
œÛİ[™‹™ÛÜˆŠNØÛÛœİÏHRK˜ÛÛ[][š]K›ÙÜËš[˜ÛY\Ê‘^Ü˜YÎˆŠÓ
ËšY
K›˜[YJÈ‹ˆŠNÒÉ‰’K˜ÛÛ[][š]K›ÙÜËœ\Ú
‘^Ü˜YÎˆŠÓ
ËšY
K›˜[YJÈ‹ˆŠK\Ë™›\Ú
ÏÚÜÖÕËšYNˆ‘[˜\È[ˆŠÓ
ËšY
K›˜[YJÈ‹ˆ‹ÍŒ
K\Ëœ\œÚ\İ
LJK\Ë\]RY

NÜ™]\›Ÿ_Uİ\Ë™›\Ú
“H[ØÚ[H\İ0èH[˜KˆŠN\Ëš\Ğ]˜\ÙJ
Oİ\Ë›Ü[”[™[
˜˜\ÙHŠN\Ë™›\Ú
“›È^H˜YH[[Ø[˜ÙKˆ‹YLÊ_Yš[š\ÚXİ
J^ØÛÛœİO]\Ëœİ]NÚYŠKš[œÚY_K™ZXÛK™š]š[™ß
Kœ^Y\‹	Ì—JOLŠ\™]\›ØÛÛœİRÊKJNÕ‰‰Š\Ë˜ÛÜÙT[™[

K\Ëœ\œÚ\İ
LJK\Ëœ[›š[™ÏHLK\Ë™Ø[YK™]™[Ë™[Z]
œÚİË[İ™\›^H‹ŠÈˆ0­Èš[ˆ[XİÈKˆ‹™[™[™ÈŠJ_Yš[š\ÚXİÛÊJ^ØÛÛœİO]\Ëœİ]NÚYŠVKš[œÚY_Kš[œÚYKœÚ]RYOOH˜Ù[˜[ŸK˜Ø[\ZYÛ‹˜XİˆOOH™XÚ\Ú[ÛˆŠ\™]\›ØÛÛœİRÜÊKJNÕ‰‰Š\Ë˜ÛÜÙT[™[

K\Ë™›\Ú
‹™LÊK\Ëœ\œÚ\İ
LJK\Ë\]RY

J_Yš[š\ÚXİ™YJJ^ØÛÛœİO]\Ëœİ]NÚYŠVKš[œÚY_Kš[œÚYKœÚ]RYOOH›X›Ü˜]Üš[ÈŸK˜Ø[\ZYÛ‹˜XİÈOOH™XÚ\Ú[ÛˆŠ\™]\›ØÛÛœİVœÊKJNÕ‰‰Š\Ë˜ÛÜÙT[™[

K\Ë™›\Ú
‹™LÊK\Ëœ\œÚ\İ
LJK\Ë\]RY

J_Yš[š\ÚXİ›İ\ŠJ^ØÛÛœİO]\Ëœİ]NÚYŠVKš[œÚY_Kš[œÚYKœÚ]RYOOHœ™\]YÜˆŸK˜Ø[\ZYÛ‹˜XİOOH™XÚ\Ú[ÛˆŠ\™]\›ØÛÛœİRœÊKJNÕ‰‰Š\Ë˜ÛÜÙT[™[

K\Ë™›\Ú
‹L
K\Ëœ\œÚ\İ
LJK\Ë\]RY

J_Yš[š\ÚXİš]™JJ^ØÛÛœİO]\Ëœİ]NÚYŠVKš[œÚY_Kš[œÚYKœÚ]RYOOH™]˜XİXXÚ[ÛˆŸK˜Ø[\ZYÛ‹˜XİHOOH™XÚ\Ú[ÛˆŠ\™]\›ØÛÛœİIÊKJNÕ‰‰Š\Ë˜ÛÜÙT[™[

K\Ëœ\œÚ\İ
LJK\Ëœ[›š[™ÏHLK\Ë™Ø[YK™]™[Ë™[Z]
œÚİË[İ™\›^H‹‹œ™\İ[˜ÛÛ\]HŠJ_Y\ÜÚ]

^ÚYŠ]\Ëš\Ğ]˜\ÙJ
J\™]\›ˆ\Ë™›\Ú
”™YÜ™\ØHHHX\ğëXH\˜H\ÜÚ]\ˆH[ØÚ[KˆŠKˆØÛÛœİOTÜÊ\Ëœİ]K˜ÛÛ[][š]JNÜ™]\›ˆK›ÚÉ‰Šİ
\Ëœİ]JK\Ë™Ø[YK™]™[Ë™[Z]
œÛİ[™‹›ÛİŠK\Ëœ\œÚ\İ
LJJK\Ë™›\Ú
K›Y\ÜØYÙJK\Ë\]RY

KK›Y\ÜØYÙ_ZX[

^ØÛÛœİO]\Ëœİ]KORK˜ÛÛ[][š]Kœİ\š]›ÜœÖÒK˜ÛÛ[][š]K˜Xİ]™WNÚYŠ
KšLK˜›YYŒKš[™™Xİ[ÛŒ
I‰\ÊK˜˜[™YÙHŠJ^İ\Ë™Ø[YK™]™[Ë™[Z]
œÛİ[™‹šX[ŠNØÛÛœİVKšÖKšS]
Kš
ÊKœÚÚ[OOH”Ø[š]\šXHÍNŒÌŠKL
KK˜›YYLKš[™™Xİ[ÛSX]›X^
Kš[™™Xİ[Û‹LMŠKKœ^Y\‹šVKš\Ë™›\Ú
\šYH˜]YH0­È
ÉÓX]œ›İ[™
KšUŠ_HØ[Y˜
K\Ë\]RY

_Y[ÙH\Ë™›\Ú
“™XÙ\Ú]\È[˜H™[™HH[˜H\šYH]YH˜]\‹ˆ‹YLÊ_\İÚ]ÚXİ]™JJ^ÚYŠ]\Ëš\Ğ]˜\ÙJ
J^İ\Ë™›\Ú
Ø[XšXHHİ\\š]šY[H[ˆHX\ğëXKˆŠNÜ™]\›ŸXÛÛœİO]\Ëœİ]K˜ÛÛ[][š]NÚYŠJ^ØÛÛœİVKœİ\š]›ÜœË™š[™[™^
ÏO•ËšYOORI‰•Ë˜[]™JNÚYŠ
\™]\›ÖK˜Xİ]™OUŸY[ÙHÚJJNİ\Ëœİ]Kœ^Y\‹šVKœİ\š]›ÜœÖÖK˜Xİ]™WKš\Ëœİ]Kœ^Y\‹œİ[Z[˜OLLVKœİ\š]›ÜœÖÖK˜Xİ]™WK™˜]YİYJ‹Kİ
\Ëœİ]JK\Ë™Ø[YK™]™[Ë™[Z]
œÛİ[™‹œİÚ]ÚŠK\Ë™›\Ú
ÛÛ›Û\ÈHŠÖKœİ\š]›ÜœÖÖK˜Xİ]™WK›˜[YJÈ‹ˆŠK\Ëœ\œÚ\İ
LJK\Ë\]RY

_[Ü[”[™[
J^İ\ËšÙ^\Ô™\Ù]

K\Ë™Ø[YK™]™[Ë™[Z]
›Ü[‹[›İX›ÛÚÈ‹J_[›İX›ÛÚÊJ^ØÛÛœİO]\Ëœİ]KVK˜ÛÛ[][š]KÏU‹œİ\š]›ÜœÖÕ‹˜Xİ]™WKÏ]\Ëš\Ğ]˜\ÙJ
K^Ù›ÛÙˆÛÛZYH‹YYXÚ[™Nˆ“YYXÚ[˜H‹X]\šX[Îˆ“X]\šX[\È‹Y[ˆÛÛX\İX›HŸNÚYŠOOOH˜˜\ÙHŠ\™]\›Üİ[[X\N’ÏÈ”™\\˜HH^YXÚpìÛˆÈYZ›Ü˜H[™YYÚ[Ëˆˆ”™YÜ™\ØHHHX\ğëXH\˜H\Ø\ˆ\İ\È[œİ[XÚ[Û™\Ëˆ‹›İÜÎ“Øš™XİšÙ^\Ê
K›X\
OOØÛÛœİU‹™˜XÚ[]Y\ÖŞWNÜ™]\›İ]N•ŞWK›˜[YK]Z[˜š]™[	İKÌÈ0­È	ÕŞWK™Y™™XİXXİ[Ûˆ\Ü˜YNˆŠŞK]ÛOOLÏÈ“š]™[pè^[[È˜YZ›Ü˜\ˆ0­È	ÕŞWK˜ÛÜİ
İ
ŒŸHX]\šX[\Ø\ØX›YˆRßLß‹œ™\Ûİ\˜Ù\Ë›X]\šX[ÏŞWK˜ÛÜİ
İ
ŒŸ_J_NÚYŠOOOH˜ÛÛ[][š]HŠ\™]\›Üİ[[X\N˜[Ü˜[	Õ‹›[Ü˜[_KÌL0­È0ëXH	Õ‹™^_H0­È\ÙY[ÜÈİYœšYÜÈ	Õ‹œÚYYÙ_X›İÜÎ–Ë‹‹•‹œİ\š]›ÜœË›X\
OOŠİ]NK›˜[YK]Z[K˜[]™OØ	ŞKœÚÚ[H0­ÈØ[Y	ÓX]˜ÙZ[
Kš
_IH0­È˜]YØH	ÓX]˜ÙZ[
K™˜]YİYJ_IH0­È	ŞKXˆ‘˜[XÚpìÈ\˜[HH^YXÚpìÛˆ‹Xİ[ÛˆœİÚ]ÚˆŠŞKšY]ÛOOOUÏÈ‘[ˆXİ]›Èˆ”Ù[XØÚ[Û˜\ˆ‹\ØX›YˆRß^K˜[]™_OOOUßJJK‹‹ŠK™š[˜[OOOHœÚYÛ˜[Ÿ‹™^OLÊI‰ˆU‹œİ\š]›ÜœËœÛÛYJOOKšYOOH›X\ˆŠOÖŞİ]Nˆ“X\‹İX\™X›ÜÜ]Y\È‹]Z[ˆ”YH[[Y[ÈHYYXÚ[˜KˆY[™H^\šY[˜ÚXHİY\œÈHİY\œËˆ‹Xİ[Ûˆœ™XÜZ]‹]ÛˆXÛÙÙ\ˆ0­ÈˆÛÛZYKHYYXÚ[˜H‹\ØX›YˆRß‹œ™\Ûİ\˜Ù\Ë™›ÛÙŸ‹œ™\Ûİ\˜Ù\Ë›YYXÚ[™O_WN–×W_NÚYŠOOOH™ZXÛHŠ^ØÛÛœİOVK™ZXÛKHVKš[œÚYI‰ˆ^K™š]š[™É‰š
Kœ^Y\‹JOKNÜ™]\›Üİ[[X\N˜ÛØÚH0­ÈÛÛX\İX›H	ÓX]™›ÛÜŠK™Y[
_IH0­È[İÜˆ	ÓX]™›ÛÜŠK˜ÛÛ™][ÛŠ_IH0­ÈX[]\›È	İYJK[šÊ_KÉŞK[šË˜Ø\XÚ]_IİÈˆˆˆ0­ÈXğê\˜Ø]HHYH\˜H\Ø\›ÈŸX›İÜÎ–Şİ]NˆÛÛX\İX›H‹Xİ[Ûˆ˜Ø\™Y[‹]Ûˆ•\Ø\ˆšY0ìÛˆ‹\ØX›Yˆ]UËš[™[ÜKš][\Ë™Y[Ø[ŸK™Y[LLKİ]Nˆ“[İÜˆ‹Xİ[Ûˆ˜Ø\œ™\Z\ˆ‹]Ûˆ•\Ø\ˆÚ]\œ˜H‹\ØX›Yˆ]UËš[™[ÜKš][\ËœØÜ˜\K˜ÛÛ™][ÛLLK‹‹“Øš™XİšÙ^\Ê]
K™š[\ŠO•Ëš[™[ÜKš][\ÖÛ_K[šËš][\ÖÛJK™›]X\
O–Şİ]N•]ÛK›˜[YJÈˆ[ˆH[ØÚ[H‹]Z[˜0åÉÕËš[™[ÜKš][\ÖÛOÏÌXXİ[ÛˆœİİÎˆŠÛ]Ûˆ‘İX\™\ˆH‹\ØX›Yˆ]UËš[™[ÜKš][\ÖÛ_Kİ]N•]ÛK›˜[YJÈˆ[ˆ[X[]\›È‹]Z[˜0åÉŞK[šËš][\ÖÛOÏÌXXİ[ÛˆZÙNˆŠÛ]Ûˆ”ØXØ\ˆH‹\ØX›Yˆ]^K[šËš][\ÖÛ_WJW__\™]\›ˆOOOHš[™[ÜHŞÜİ[[X\N˜	ÕË›˜[Y_H0­È[ØÚ[H	İYJËš[™[ÜJ_KÉÕËš[™[ÜK˜Ø\XÚ]_H0­ÈØ\™ØYÜˆ	ÕË›ØYYKÉÚZ_X›İÜÎ–Ë‹‹“Øš™Xİ™[šY\ÊËš[™[ÜKš][\ÊK™š[\Š
ËWJOOOŒ
K›X\

ŞKJOOŠİ]N•]ŞWK›˜[YK]Z[˜0åÉİX‹‹OOOHœ˜][ÛˆŞØXİ[Ûˆ™X]‹]ÛˆÛÛY\ˆŸNß_JJK‹‹“Øš™Xİ™[šY\Ê‹œ™\Ûİ\˜Ù\ÊK›X\

ŞKJOOŠİ]NœŞWJÈˆ[ˆHX\ğëXH‹]Z[˜0åÉİXXİ[Ûˆš\ÜİYNˆŠŞK]ÛˆÛÙÙ\ˆH‹\ØX›YˆRßOOLJJKİ]Nˆ”›İš\Ú[Û™\ÈHH^YXÚpìÛˆ‹Xİ[Ûˆ™\ÜÚ]‹]Ûˆ‘\ÜÚ]\ˆ‹\ØX›YˆRßW_N’OOOH›X\ŞÜİ[[X\N˜ÜÚXÚpìÛˆ^\š[Üˆ	ÖKœ^Y\‹Ñš^Y
J_K	ÖKœ^Y\‹KÑš^Y
J_H0­È™\™NˆY\\Ëˆ0à[X˜\ˆØš™]]›ËˆÛØœ™Nˆ›İ0ë[‹ˆ^[ˆÛØÚK˜X\Ü^Y\–Kœ^Y\‹Ú]\Î”]Ûİ–K›Ûİ™š[\ŠOOˆ^KZÙ[ŠK™ZXÛN–K™ZXÛK˜\ÙN–ÛØ[Î‰İYÙN™JJ_K›İÜÎ–Şİ]Nˆ“X\ğëXHHØ[ˆXÈ‹]Z[ˆÙ[›È0­È™YYÚ[ÈHİ[Z[š\İ›ÜÈŸK‹‹”]›X\
OOŠİ]NK›˜[YK]Z[˜ÛÛÜ™[˜Y\È	ŞKK	ŞK_XJJW_NÜİ[[X\N™ÚJJK›İÜÎ•‹›ÙÜËœÛXÙJNJKœ™]™\œÙJ
K›X\
OOŠİ]N_JJ__[›İX›ÛÚĞXİ[ÛŠJ^ØÛÛœİÖK—ORKœÜ]
ˆŠNÛ]ÏHˆÚYŠOOOH™X]Š^ØÛÛœİÏR
\Ëœİ]JNØYJËš[™[ÜKœ˜][ÛˆŠI‰ŠË™˜]YİYOSX]›X^
Ë™˜]YİYKLLŠK\Ëœİ]Kœ^Y\‹œİ[Z[˜OSX]›Z[ŠL\Ëœİ]Kœ^Y\‹œİ[Z[˜JÌÌ
KÏH’\ÈÛÛZYÈ[˜H˜XÚpìÛ‹ˆŠ_Y[ÙHYŠÈ˜Ø\ˆ‹œİİÈ‹ZÙH—Kš[˜ÛY\ÊJJ^ØÛÛœİÏ]\Ëœİ]NÚYŠËš[œÚY_Ë™ZXÛK™š]š[™ß
Ëœ^Y\‹Ë™ZXÛJOLKJ\™]\›ˆXğê\˜Ø]H[ÛØÚHHYKˆØÛÛœİR
ÊKOVOOOH˜Ø\ˆÜÊË™ZXÛK‹Ë˜ÛÛ[][š]K™˜XÚ[]Y\ËÛÜšÜÚÜ
N˜ÜÊË™ZXÛKš[™[ÜK‹OOOHœİİÈŠNŞI‰•İ
ÊKÏ^OÈÛØÚHXİX[^˜YËˆˆ“›È^H\ÜXÚ[ÈÈİ[Z[š\İ›ÜÈİYšXÚY[\ËˆŸY[ÙHYŠ\Ëš\Ğ]˜\ÙJ
J^ÚYŠOOOHœİÚ]ÚŠ\™]\›ˆ\ËœİÚ]ÚXİ]™JŠK”İ\\š]šY[HÙ[XØÚ[Û˜YËˆÚYŠOOOH™\ÜÚ]Š\™]\›ˆ\Ë™\ÜÚ]

NÚYŠOOOH\Ü˜YHŠ^ØÛÛœİÏSÜÊ\Ëœİ]K˜ÛÛ[][š]KŠNÕÏRË›Y\ÜØYÙKË›ÚÉ‰\Ëœİ]K˜ÛÛ[][š]K›ÙÜËœ\Ú
‘0ëXHŠİ\Ëœİ]K˜ÛÛ[][š]K™^JÈˆŠÕÊÈ‹ˆŠK\Ë™˜]Ê
_Y[ÙHOOOHœ™XÜZ]ÕÏUÜÊ\Ëœİ]JOÈ“X\ˆÙHH[šYÈHHÛÛ][šYYˆˆ“X\ˆÙ]°ëXH›ÈYYH[š\œÙKˆ–OOOHš\ÜİYH‰‰ŠÏUœÊ\Ëœİ]KŠOÈ”İ[Z[š\İ›ÈpìXYYÈHH[ØÚ[Kˆˆ“›È^H\ÜXÚ[ÈÈ^\İ[˜ÚX\ËˆŠ_Y[ÙH™]\›ˆ”™YÜ™\ØHHHX\ğëXKˆÜ™]\›ˆ\Ëœ\œÚ\İ
LJK\Ë\]RY

Kß]\]Q[™[ZY\ÊKJ^ØÛÛœİ]\Ëœİ]KÏU‹š[œÚYOÏÕ‹œ^Y\‹Ï\]Õ‹™Y™šXİ[WK]\Ë™[™[ZY\Ê
KOU‹š[œÚYOÌN‹ÊİÙJ‹[YJJ‹ŒÎÙ›ÜŠÛÛœİÙˆ
ZYŠJ]˜[]™_œ›ÛHOOHœØÜ™YXÚ\ˆŸ
\Ë˜ÜšY\Ë™Ù]

OÏÌ
O•‹[YJI‰ˆJ
ÊOK_Qİ
ËJJJ^İ\Ë˜ÜšY\ËœÙ]
‹[YJÌLŠNÙ›ÜŠÛÛœİÙˆ
H[˜[]™_

OLMŠ’ËšX\š[™ß\Ëš[[ËœÙ]
Ù\İ[˜][ÛŞN_K[[•‹[YJÍK™XØ[ÎŒJNİ\Ë™Ø[YK™]™[Ë™[Z]
œÛİ[™‹œØÜ™X[HŠK\Ë™›\Ú
•[ˆÚ[YÜˆHYÈH[\›XKˆ‹N
NØœ™XZßY›ÜŠÛÛœİÙˆ\Ë™[™[ZY\Ê
J^ÚYŠ]˜[]™_
˜]XÚĞÛÛÛİÛSX]›X^
˜]XÚĞÛÛÛİÛ‹RJK
\ËœİYÙÙ\™Y™Ù]

OÏÌ
O•‹[YJJXÛÛ[YNØÛÛœİZ
ÊKÏ[ËœÚYÚ
JÊœ›ÛOOOH›\šÙ\ˆÌNŒ
I‰‘İ
ËJKÏ]\ËšX\™]	‰š
\ËšX\™]
O\Ë››Ú\ÙJ’ËšX\š[™ËXÏÕÎ›Ïİ\ËšX\™]›[Û]]\Ëš[[Ë™Ù]

NÚYŠ‰‰Š[Ÿ
‹™\İ[˜][Û‹ŠO‹Ÿ‹[[U‹[YOŒÊI‰Š^Ù\İ[˜][ÛË‹‹œŸK[[•‹[YJÌ‹™XØ[ÎŒK\Ëš[[ËœÙ]
ŠJK\Ë˜š]PÙOOL	‰˜]XÚĞÛÛÛİÛOOL	‰œÊËJJ^ÚYŠ‹™ZXÛK™š]š[™É‰•‹™ZXÛK˜ÛÛ™][ÛŒ
^Õ‹™ZXÛK˜ÛÛ™][ÛSX]›X^
‹™ZXÛK˜ÛÛ™][Û‹MJK˜]XÚĞÛÛÛİÛLK‹\Ë˜š]PÙKÍK\Ë™›\Ú
“ÜÈ[™™XİYÜÈÛÛX[ˆHØ\œ›ØÙ\°ëXKˆŠNØÛÛ[Y_XÛÛœİUYJ‹Ë™[XYÙJÊœ›ÛOOOH˜œ]HÍNŒ
JNÚYŠ˜]XÚĞÛÛÛİÛ]œ›ÛOOOHœ[›™\ˆËNŒKK\Ë˜š]PÙKÍK\Ëš\[ÙOK\Ë™Ø[YK™]™[Ë™[Z]
œÛİ[™‹˜š]HŠK\Ë™›\Ú
›ÜİØ	Ú›ÜİHH]Y\Ë˜šš[˜Ø\XÚ]]YÈ’\ÈÙÜ˜YÈ›Û™\ˆHØ[ˆXËˆˆ“[Ü™Y\˜H0­È[[Üœ˜YÚXHH[™™XØÚpìÛ‹ˆŠK›Üİš[˜Ø\XÚ]]Y
^Õ‹™ZXÛK™š]š[™ÏHLK\Ëš[[Ë˜ÛX\Š
K\Ëœ\œÚ\İ
LJNÜ™]\›Ÿ_ZYŠ[Ÿ‹[[‹[Y_JXÛÛ[YNÈXÉ‰›‹œ™XØ[ÏU‹[YI‰Š‹Ø^\Ú[TZJ‹™\İ[˜][Û‹K‹š[œÚYOØİ
K‹œ™XØ[ÏU‹[YJËŒ
NØÛÛœİOXÏÕÎ›‹Ø^\Ú[ÚYŠYJXÛÛ[YNØÛÛœİÏZ
JNÚYŠÏŒ
^Û‹œ™XØ[ÏLØÛÛ[Y_XÛÛœİOVšJ’ËœÜYY
Šœ›ÛOOOHœ[›™\ˆÌKMNœ›ÛOOOH˜œ]HËÎœ›ÛOOOH›\šÙ\ˆÛ‹ÌKN‹ŒJKOSX]›Z[ŠËJ’JKÜÎİ\Ë›[İ™J
K]
JšK
KK]JJšKJ__]\]JKJ^ÚYŠ]\Ëœ[›š[™ß\Ëœ[™[Ü[Š\™]\›ØÛÛœİ]\Ëœİ]KÏU‹œ^Y\‹ÏU‹˜ÛÛ[][š]KSX]›Z[ŠKÌYLËŒJKOJKJOO–]’[œ]’Ù^X›Ø\™’\İİÛŠ\ËšÙ^\ÖØWJ_\Ë˜Xİ[ÛœËš\ÊJNÚYŠJ‘TĞÈ‹œ]\ÙHŠJ^İ\Ëœ]\ÙJ
NÜ™]\›ŸZYŠ\Ë˜Xİ[ÛœËš\Ê››İX›ÛÚÈŠJ^İ\Ë›Ü[”[™[
š[™[ÜHŠNÜ™]\›ŸZYŠJˆ‹˜˜\ÙHŠJ^İ\Ë›Ü[”[™[
˜˜\ÙHŠNÜ™]\›ŸZYŠ‹[YJÏ\\Ëš\İX[ÛØÚÊÏ\Ë™[\ÙY
Ï\Ë™[\ÙYLN
^ØÛÛœİOXœÊŠKO[™]ÈÙ]
Ë‹‹•‹›ÛXšY\Ë‹‹“Øš™Xİ˜[Y\Ê‹š[\š[ÜœÊK™›]X\
Oš›ÛXšY\ÊWK›X\
O”İš[™ÊšY
JJNÙ›ÜŠÛÛœİÚW[Ùˆ\ËœÜš]\ÊZœİ\ÕÚ]
ˆŠI‰ˆZKš\ÊœÛXÙJŠJI‰ŠK™\İ›ŞJ
K\ËœÜš]\Ë™[]J
JNÙ›ÜŠÛÛœİÚW[Ùˆ\Ë˜Xİ]™P\
Zœİ\ÕÚ]
˜ÛÜœÙNˆŠI‰ˆZKš\ÊœÛXÙJÊJI‰ŠK™\İ›ŞJ
K\Ë˜Xİ]™P\™[]J
JNİ\Ë™›\Ú
KœÚYYÙOOO]›ÚYØ[X[™XÙH[0ëXH	ÒË™^_K˜ˆ\ÙY[È›Øİ\››È0­ÈÛÛœİ[H[X\š[Ëˆ‹ÍL
KKœÚYYÙHOO]›ÚY	‰\Ë™Ø[YK™]™[Ë™[Z]
œÛİ[™‹™[™Ù\ˆŠKKœÚYYÙQ[˜Ûİ[\‰‰\Ë™›\Ú
°¨PTĞSÈHĞSˆPÈHXØX˜HÛÛˆHÜ™H\˜HØ[˜\ˆ\È›İš\Ú[Û™\Ëˆ‹L
KË™^ILÏOOL‰‰’Ë™˜XÚ[]Y\Ë›ÛÚÛİ]Œ	‰\Ë™›\Ú
‘[šYğëXHHš\İÈ[˜HÜ™Kˆ™YY\˜HHX\ğëXKˆ‹LÊK\Ëœ\œÚ\İ
LJ_]\Ë˜]XÚÔ[ÙOSX]›X^
\Ë˜]XÚÔ[ÙK\
K\Ëš\[ÙOSX]›X^
\Ëš\[ÙK\
K\Ë˜]XÚĞÙSX]›X^
\Ë˜]XÚĞÙ\
K\Ë˜›\İÙSX]›X^
\Ë˜›\İÙ\
K\Ëš[\XİÏ]\Ëš[\XİË™š[\ŠOO•‹[YKXK[YO
KšÚ[™OOH˜›\İËNŒ‹ŒŠJK\Ë˜š]PÙSX]›X^
\Ë˜š]PÙ\
K\Ë››Ú\ÙOSX]›X^
\Ë››Ú\ÙK\
ŒÊNØÛÛœİRËœİ\š]›ÜœÖÒË˜Xİ]™WNÚYŠ˜›YYŒ
^İ˜›YYSX]›X^
˜›YY\
NØÛÛœİOUYJ‹
‹KLJNÚYŠ
K›ÜİKš[˜Ø\XÚ]]Y
I‰Š‹™ZXÛK™š]š[™ÏHLK\Ëœ\œÚ\İ
LJJK‹™Ø[YSİ™\Š^İ\Ë™[™[Š
NÜ™]\›Ÿ_XÛÛœİ]\Ëœ™YÚ\İK™Ù]
İXÚŠKÏJKJOO\ËšÙ^\ÖØWKš\ÑİÛŸ\ËšÙ^\ÖÚWKš\ÑİÛŸH[Ëš\ÊKÓİÙ\Ø\ÙJ
JKÏS[X™\ŠÊ‘‹”’QÒŠJKS[X™\ŠÊH‹“Q•ŠJKS[X™\ŠÊ”È‹‘ÕÓˆŠJKS[X™\ŠÊ•È‹•TŠJKSX]š\İ
ËŠKOHU‹™ZXÛK™š]š[™É‰›Œ	‰Š\ËšÙ^\Ë”ÒQ•š\ÑİÛŸËš\ÊœÜš[ŠJI‰•Ëœİ[Z[˜OÏLL]™˜]YİYJ‹NÚYŠËœİ[Z[˜OS]
Ëœİ[Z[˜JÜ
ŠOËLNNŒLŠKÊK\Ë›[İš[™ÏHLKJ•ˆ‹™ZXÛHŠI‰Š\Ë™›\Ú
œÊŠKÎ
K\Ë\]RY

JK‹™ZXÛK™š]š[™Ê^ØÛÛœİOU‹™ZXÛNÚYŠÊK\‹Ë\Ë˜›ØÚÙY
I‰Š\Ë™›\Ú
ÛÛ\ÚpìÛˆ0­ÈØ\œ›ØÙ\°ëXHpìXYKˆŠK\Ë™Ø[YK™]™[Ë™[Z]
œÛİ[™‹›Y[YHŠJKËXKËOXKKX]˜XœÊKœÜYY
OŒI‰\Ë››Ú\ÙOMÉ‰Š\Ë››Ú\ÙOMË\ËšX\™]^Ş˜KN˜K_JKX]˜XœÊKœÜYY
OŒÊ^Ù›ÜŠÛÛœİHÙˆ‹›ÛXšY\ÊZYŠJZK˜[]™_
KJO‹LŠJ^ÚK˜[]™OHLKKšL‹šÚ[ÊÊË\Ë™Ü˜[Ú[™]Ø\™ÊJKK˜ÛÛ™][ÛSX]›X^
K˜ÛÛ™][Û‹JKœ›ÛOOOH˜œ]HÌLÎJJKKœÜYY
KMK\Ë™Ø[YK™]™[Ë™[Z]
œÛİ[™‹›Y[YHŠNØœ™XZß_]\Ëš\İX[ÛØÚË]\Ë›\İ›Ûİİ\‹Œ	‰“X]˜XœÊKœÜYY
OŒI‰Š\Ë™Ø[YK™]™[Ë™[Z]
œÛİ[™‹™[™Ú[™HŠK\Ë›\İ›Ûİİ\]\Ëš\İX[ÛØÚÊ_Y[ÙHYŠŠ^ÛÉ‰Š\Ë™˜XÚ[™ÏSX]œÚYÛŠÊJK‰‰Š\Ë˜˜XÚÏ\
NØÛÛœİOU‹š[œÚYOÏÕËO^Ë‹‹˜_KRÚJŠOÌKNŒJJŠK]™˜]YİYJ‹Œ‹]š[™™Xİ[ÛŠ‹ŒJNİ\Ë›[İ™JK
ÊÜŠJ“X]”ÔT•WÌ‹ÛŠš
œ
‹[ÊJ“X]”ÔT•WÌ‹ÛŠš
œ\Ë›ØœİXÛ\Ê
JK\Ë›[İš[™ÏZ
KJO‹ŒK™˜]YİYOS]
™˜]YİYJÜ
ŠOËŒ‹ŒJKL
KI‰\Ë››Ú\ÙOMÉ‰Š\Ë››Ú\ÙOMË\ËšX\™]^Ë‹‹˜_JK\Ë›[İš[™É‰•‹[YK]\Ë›\İ›Ûİİ\ŠOËŒ‹ŒÎJI‰Š\Ë™Ø[YK™]™[Ë™[Z]
œÛİ[™‹‹š[œÚYOÈœİ\Z[™ÛÜˆˆœİ\ŠK\Ë›\İ›Ûİİ\U‹[YJ_ZYŠJÈ‹ÙX\ÛˆŠI‰\Ë˜ŞXÛUÙX\ÛŠ
KU‹™ZXÛK™š]š[™É‰J–‹˜Ú\™ÙHŠI‰\Ë\ÙPÚ\™ÙJ
KU‹™ZXÛK™š]š[™É‰J”ÔPÑH‹˜]XÚÈŠI‰\Ë˜]XÚÊLJKU‹™ZXÛK™š]š[™É‰J‘È‹œÚÛİŠI‰\Ë˜]XÚÊL
K\Ë˜Z[O[[‹™Ø[YSİ™\Š^İ\Ë™[™[Š
NÜ™]\›ŸZYŠJ•‹œ™[ØYŠJ^ØÛÛœİOPšJŠNØI‰\Ë™Ø[YK™]™[Ë™[Z]
œÛİ[™‹œ™[ØYŠK\Ë™›\Ú
OÈ\›XH™XØ\™ØYKˆˆØ\™ØYÜˆ[›ÈÈÚ[ˆØ\XÚÜËˆŠK\Ë\]RY

_ZYŠJ‘H‹š[\˜XİŠI‰\Ëš[\˜Xİ

K]\Ëœ[™[Ü[Š^ÚYŠJ‘ˆ‹šX[ŠI‰\ËšX[

KJ”H‹œİÚ]ÚŠI‰\ËœİÚ]ÚXİ]™J
KJ”ˆ‹™\ÜÚ]ŠI‰\Ë™\ÜÚ]

KJ”‹œØ]™HŠI‰\Ëœ\œÚ\İ

K\Ë˜Xİ[ÛœË˜ÛX\Š
K\Ë\]Q[™[ZY\Ê\Ë›ØœİXÛ\Ê
JK‹™Ø[YSİ™\Š^İ\Ë™[™[Š
NÜ™]\›Ÿ]\Ë[YK››İÏ\Ë›Y\ÜØYÙU[[	‰™Øİ[Y[œ]Y\TÙ[XİÜŠˆÛY\ÜØYÙHŠK˜Û\ÜÓ\İœ™[[İ™Jš\ÚX›HŠK‹[YK]\Ë›\İ]]ÜØ]™OŒŒ	‰Š\Ëœ\œÚ\İ
LJ_
\Ë›\İ]]ÜØ]™OU‹[YJJK‹[YK]\Ë›\İY‹ŒN	‰\Ë\]RY

K\Ë™˜]Ê
__Y[™[Š
^İ\Ëœ[›š[™ÏHLK\Ëœ\œÚ\İ
LJK\ËšÙ^\Ô™\Ù]

K\Ë\]RY

K\Ë™Ø[YK™]™[Ë™[Z]
œÚİË[İ™\›^H‹“HX\ğëXHÙHH]YYYÈÚ[ˆİ\\š]šY[\Ëˆ‹™XYŠ_X\\
J^Ü™]\›ˆL
ÒKÍYÜ›İ[™^Y\ŠKJ^ØÛÛœİLMŠ”ÏSX]™›ÛÜŠ
X]›Z[Š‹‹–K›X\
ÏO˜Ë
JKUŠKÔ
J”ÏSX]™›ÛÜŠ
X]›Z[Š‹‹–K›X\
ÏO˜ËJJKUŠKÔ
J”SX]˜ÙZ[

X]›X^
‹‹–K›X\
ÏO˜Ë
JJÕ‹UÊKÔ
KOSX]˜ÙZ[

X]›X^
‹‹–K›X\
ÏO˜ËJJJÕ‹RÊKÔ
K]\Ë^\™\Ë™^\İÊJOİ\Ë^\™\Ë™Ù]
JN\Ë^\™\Ë˜Ü™X]PØ[˜\ÊKJK]\ËÛÜ›]\Ë™Ù]Ûİ\˜ÙR[XYÙJ
NÙ›ÜŠÛÛœİÈÙˆJ^ØÛÛœİÏ]\ËÛÜ›]\Ë™Ù]
Ë™œ˜[YJNİ˜ÛÛ^™˜]Ò[XYÙJË˜İ]
ÌM‹Ë˜İ]JÌÌ‹M‹X]œ›İ[™

ËUÊKÔ
KLM‹X]œ›İ[™

ËKRÊKÔ
KNÌ‹MŠ_\™]\›ˆœ™Yœ™\Ú

KœÙ]š[\Š]•^\™\Ë‘š[\“[ÙK“‘PT‘TÕ
K\Ë˜Yš[XYÙJËËJKœÙ]ÜšYÚ[Š
KœÙ]ØØ[J
KœÙ]\
LL
_[™]Ğ\
KKŠ^Ü™]\›ˆ\Ë˜Yš[XYÙJK‹YKJKœÙ]ÜšYÚ[ŠKÍJKœÙ]ØØ[J
KœÙ]\
\Ë˜\\
ŠJ_X\
KK‹Ê^Û]Ï]\Ë˜Xİ]™P\™Ù]
JNÜ™]\›ˆß
Ï]\Ë›™]Ğ\
K‹ÊK\Ë˜Xİ]™P\œÙ]
KÊJKËœÙ]œ˜[YJJKœÙ]ÜÚ][ÛŠX]œ›İ[™
ŠKX]œ›İ[™
ÊJKœÙ]\
\Ë˜\\
ÊJKœÙ]š\ÚX›JL
_XZ[\œ˜Z[ŠJ^ØÛÛœİO]\Ëœİ]XÕ[\Ë›X\

ŞKNØÜ™Y[›JOOØÛÛœİÏ]\Ëœ›ØYËš\Ê	Ş_K	İX
OÈœ›ØYŒMÏÈÛÛÙÈOŒMI‰LÈ™\™ÙHˆ™Ü˜\ÜÈ‹ÏXÈOOHœ›ØYÌOOLL‰‰ILÏOOL	‰“X]˜XœÊKLLŠOŒÌNOOOLL‰‰	LÏOOL	‰“X]˜XœÊLLŠOŒ‰‰OOMËLNŒÜ™]\›Ş›N›JÕœ˜[YN›ÏØ›ØY[X\šÎ‰ÛßX˜›ÛÜ‰ØßN‰ÊJŒMÊİ
ŒŒÊŞJ
IMŸX_JKV×NÙ›ÜŠ]OKLÎŞOİ
ÌÎŞJÊÊY›ÜŠ]KLÎİİ
ÌÎİ
ÊÊ^ÚYŠL	‰OL	‰İ	‰Oİ
XÛÛ[YNØÛÛœİ\

ËKJËJNÕ‹œ\Ú
Ş›N›JÕœ˜[YN˜›ÛÜ™œš[™ÙN‰ÓX]˜XœÊ
ŒLÊŞJŒŒÊIMŸXJ_]\Ë›İ]ÛÜVİ\Ë™Ü›İ[™^Y\Šœ^[YÜ›İ[™]˜[\È‹Ë‹‹•‹‹‹–WJWNÙ›ÜŠÛÛœİŞK[Ùˆ‹™[šY\Ê
J^ILLOOOL	‰\Ë›İ]ÛÜ‹œ\Ú
\Ë›™]Ğ\
™YN‰ŞILßXJKœÙ][
ÎMJKœÙ]ØØ[J
‹Î
JNØÛÛœİÏV×KÏVË‹‹”K‹‹”]‹‹‰KJK
OOˆRËœÛÛYJOš
K
OKJI‰ˆUËœÛÛYJOš
K
O
NÙ›ÜŠÛÛœİŞKNØÜ™Y[›[Ùˆ\Ëœİ]XÕ[\Ê^ØÛÛœİÏ[JÕÚYŠKš\Ê	Ş_K	İX
J^İ\Ë›İ]ÛÜ‹œ\Ú
\Ë›™]Ğ\
İÛ™K]Ø[‰ÊJİ
ILßXÊJNØÛÛ[Y_XÛÛœİÏ^ŞJËKN
Ë_NÚYŠ\Ëœ›ØYËš\Ê	Ş_K	İX
_
JŒLÊİ
ŒNJIJŒMÏÎŒM
HOOL\
ËKJJXÛÛ[YNÕËœ\Ú
ÊNØÛÛœİ]\Ë›™]Ğ\
™YN‰ÊJŒÊİ
JILßXÊNİ\Ë›İ]ÛÜ‹œ\Ú
‹œÙ]ØØ[J
ŠÎ
ŞJ	M
‹ŒÊJJ_Y›ÜŠÛÛœİHÙˆ\ËÛÜ››ÜÊ^ØÛÛœİŞN›O^KÏ^Ş
ËKN›
Ë_NÚYŠ\Ëœ›ØYËš\Ê	İK	ÛX
J^ÚYŠX]˜XœÊLLŠO‰‰“X]˜XœÊLLŠOŠXÛÛ[YNÓX]˜XœÊLLŠOLOØËO[LÌLNŒMŒÍN“X]˜XœÊLLŠOLOØË]LÌLNŒMŒÍN˜ËOMËŒ_ZYŠ\
ËKŠ_\Ë˜›ØÚÙYš\Ê	ÓX]™›ÛÜŠË
_K	ÓX]™›ÛÜŠËJ_X
JXÛÛ[YNÕËœ\Ú
ÊNØÛÛœİÏ\
ËËJK^KšÚ[™OOH˜Ø\ˆØÜ™XÚÎ‰ŞK˜\šX[XKšÚ[™İ\Ë›İ]ÛÜ‹œ\Ú
\Ë›™]Ğ\
‹ËËJÕ
KœÙ]ØØ[J
ŠKšÚ[™OOHœX˜›HË‹ŠJJ_Y›ÜŠÛÛœİHÙˆJ^ØÛÛœİ\
KKJNİ\Ë›İ]ÛÜ‹œ\Ú
\Ë›™]Ğ\
Z[[™Î‰ŞKšÚ[™XJÕ
KœÙ]ÜšYÚ[ŠKKÍ
KœÙ]\
\Ë˜\\
JÕ
ÌLJ”
JJ_]\Ë›ØØÛY\œÏ]\Ë›İ]ÛÜ‹™š[\ŠOO‹×ŠZ[[™ß™YJN‹Ë\İ
K™œ˜[YK›˜[YJJ_\›ÛÛP\
KKŠ^ØÛÛœİÏ]\Ëœ›ÛÛ\Ë™Ù]
JNÚYŠÊ\™]\›ˆÎØÛÛœİÏV×NÙ›ÜŠ]Lİİİ
ÊÊY›ÜŠ]LÛÛ
ÊÊ^ØÛÛœİÏ\

ËK
ËJNÒËœ\Ú
Ş˜ËN˜ËJÕ‹œ˜[YN˜›ÛÜ‰Ò_N‰Ê
Êİ
ŒLJÛ

IMŸXJ_XÛÛœİVİ\Ë™Ü›İ[™^Y\Š^[\›ÛÛKIÒ_XÊWKOJËÊOOØÛÛœİ\

K]\Ë›™]Ğ\
Ø[‰Ò_N‰ØßN‰Ó[X™\ŠÊ_X‹‹JÕŠNÜœ\Ú
ÏÛ‹œÙ]\
ŠN›‹œÙ]\
\Ë˜\\
‹JÕŠÌ
JJ_NÙ›ÜŠ]LNİLNİ
ÊÊ^JKKL
KOOVK™ÛÜ‹	‰JİLKKLJNÙ›ÜŠ]LNİİLNİ
ÊÊ^JKLKL
KJLKLKLJNÙ›ÜŠÛÛœİİ[ÙˆK›ØœİXÛ\Ê^ØÛÛœİÏ\

ËK
ËJNÜœ\Ú
\Ë›™]Ğ\
š^\™N‰Ò_N‰Ê
Û
ILßXËËJÕŠJ_\™]\›ˆ\Ëœ›ÛÛ\ËœÙ]
K
K[X\šÙ\ŠKK‹ÏHLJ^ØÛÛœİÏUÏÌLNİ\Ë™Ù™š[İ[J‹ÏËMN‹ÊNÙ›ÜŠÛÛœİÙ–ËLKWJ]\Ë™Ù™š[™Xİ
X]œ›İ[™
JÜ
’ÊKLËX]œ›İ[™
JKLË‹ÊK\Ë™Ù™š[™Xİ
X]œ›İ[™
JÜ
ŠËMJJKLËX]œ›İ[™
JJÌË‹Ê_Y˜]Ê
^ÚYŠ]\Ë›İ]ÛÜ‹›[™İ
\™]\›İ\Ë™Ù˜ÛX\Š
K\Ë™Y™™XİË˜ÛX\Š
NØÛÛœİO]\Ëœİ]KOROËš[œÚYOËœÚ]RYÏÈˆÖHOO]\Ëš\ÚX›T›ÛÛI‰Š\Ëœ›ÛÛ\Ë™Ù]
\Ëš\ÚX›T›ÛÛJOË™›Ü‘XXÚ
Oœ‹œÙ]š\ÚX›JLJJK\Ë›İ]ÛÜ‹™›Ü‘XXÚ
Oœ‹œÙ]š\ÚX›JVJJKI‰\Ëœ›ÛÛP\
K
JK™JK™›Ü‘XXÚ
Oœ‹œÙ]š\ÚX›JL
JK\Ëš\ÚX›T›ÛÛOVJNÙ›ÜŠÛÛœİˆÙˆ\ËœÜš]\Ë˜[Y\Ê
J\‹œÙ]š\ÚX›JLJNÙ›ÜŠÛÛœİˆÙˆ\Ë˜Xİ]™P\˜[Y\Ê
J\‹œÙ]š\ÚX›JLJNÚYŠOËš[œÚYJ^İ\Ë™˜]Ò[\š[ÜŠJNÜ™]\›ŸXÛÛœİ\
JNÚYŠRJ^ØÛÛœİ]\Ë˜Ø[Y\˜\Ë›XZ[‹\‹ÚYNMŒÜ‹ÚYÊ
œ‹›ÛÛJNŒO\
ÙKÙKJNÜ‹˜Ù[\“ÛŠK[‹KJÕMJNÜ™]\›ŸY›ÜŠÛÛœİˆÙˆ]
^ØÛÛœİ\
‹‹JKOS
‹šY
KÏRKš[\š[ÜœÖÜ‹šYKZÙ[‹›[™İKœİ\Y\Ë›[™İİ\Ë›X\šÙ\Š‹‹JÕ
ÍKÏÎÌLŒÍMÍÍÊ_]\Ë›X\šÙ\Š‹‹JÕ
ÎMLLNLŒŒL
NØÛÛœİÏRK˜ÛÛ[][š]K™˜XÚ[]Y\ËÏ\
ÙKÙKJKRËJÕÕË˜˜\œšXØY\É‰\Ë˜\
˜˜\ÙN˜˜\œšY\ˆ‹˜˜\œšY\ˆ‹ËM‹
ÌL
KËš[™š\›X\I‰\Ë˜\
˜˜\ÙN›YY‹š[™š\›X\H‹Ë
ÌLÎJKœÙ]\
\Ë˜\\

JËŒJKËÛÜšÜÚÜ	‰\Ë˜\
˜˜\ÙNÛÛÈ‹™š^\™N[\Œ‹ËM
ÌLJNÙ›ÜŠ]LÜË™Ø\™[ÜŠÊÊ]\Ë˜\
˜\ÙN™Ø\™[‰ÜŸX™Ø\™[ˆ‹Ë
ÍLÊÜŠŒLË
ÍÊÜŠŠNÒK›Ûİ™›Ü‘XXÚ

‹ŠOOÚYŠ‹ZÙ[Š\™]\›ØÛÛœİO\
‹‹JNİ\Ë›X\šÙ\ŠKKJÕ
Ì‹LÎLLÊK\Ë˜\
Ûİ‰ÛŸXÜ˜]N‰Ü‹šÚ[™NŒKKJÕ
_JNÙ›ÜŠÛÛœİˆÙˆ	
^ØÛÛœİ\
‹‹JNÚYŠ‹œİYÙOOO^™JJJ^İ\Ë›X\šÙ\Š‹‹JÕ
ÌL‹MNMÌÍËL
NØÛÛœİÏTK™š[™
OššÚ[™OO\‹šÚ[™
OÏÜ‹O\
ËËJKOXKJÕJ‹šÚ[™OOHœ™[^HÌMÎŒLÊNİ\Ë™Y™™XİË™š[İ[JLÎÌNMŠK\Ë™Y™™XİË™š[™Xİ
KNKL‹M‹LŠK\Ë™Y™™XİË™š[İ[JMNMÌÍÊK\Ë™Y™™XİË™š[™Xİ
KM‹KL‹ÊK\Ë™Y™™XİË™š[™Xİ
KLËJÌË‹Ê__XÛÛœİO\
K™ZXÛKK™ZXÛKJKRK™ZXÛK˜[™ÛKJX]œ›İ[™
ÊX]”KÍ
JIN
Î
INÚYŠK™ZXÛK™š]š[™Ê^ØÛÛœİJ‹JOOØÛÛœİÏ\
Š“X]˜ÛÜÊ
KYJ“X]œÚ[Š
KŠ“X]œÚ[Š
JÙJ“X]˜ÛÜÊ
JNÜ™]\›Ş“X]œ›İ[™
K
ÜË
KN“X]œ›İ[™
KJÜËJÕ
__NÙ›ÜŠÛÛœİÛ‹K×[Ù–ÖÌ‹Œ‹ŒLWKÌKŒMWJ]\Ë™Ù™š[İ[JMLLŒLLKÊK\Ë™Ù™š[Ú[ÊÜŠL‹KŒ
KŠ‹YJKŠ‹JKŠL‹Œ
WKL
_]\Ë˜\
˜Ø\ˆ‹Ø\‰ÛXKKJÕ
K\Ë™˜]ĞXİÜœÊ\Ë™ÙKœ^Y\‹K›ÛXšY\Ë
NØÛÛœİÏ\
Kœ^Y\‹Kœ^Y\‹JKÏXËJÕÙ›ÜŠÛÛœİˆÙˆ\Ë›ØØÛY\œÊ^ØÛÛœİ\‹™œ˜[YK›˜[YKœİ\ÕÚ]
˜Z[[™ÎˆŠKO\‹JÊÌLJ”Œ
K[ËÏYOŒI‰™O
ÍÍÎ
I‰“X]˜XœÊ‹XË
O
ÍMNŒŠNÜ‹œÙ][JÏËÎŒJ_]\Ë˜Ø[Y\˜\Ë›XZ[‹˜Ù[\“ÛŠX]œ›İ[™
Ë
KX]œ›İ[™
ËN
JK\ËÙX]\ŠËËJÕ
K\Ë˜ÛÛX˜]^[ÊËËJÕ
K\Ë™˜]Ò[\XİÊ
_Y˜]Ò[\š[ÜŠJ^ØÛÛœİORKš[œÚYKS
KœÚ]RY
KÏX™NÙ›ÜŠÛÛœİÙˆ‹œİ\Y\Ê^ØÛÛœİ\

ËKJËJKÏRKš[\š[ÜœÖÖKœÚ]RYKZÙ[‹š[˜ÛY\ÊšY
Nİ\Ë˜\
ÛÛZ[™\‰İšYXÜ˜]N‰İšÚ[™N‰Ó[X™\ŠÊ_XJÕÊKß\Ë›X\šÙ\ŠJÕÊÍMLLNLŒŒ
_XÛÛœİÏ\
‹™ÛÜ‹
ËK‹™ÛÜ‹KKŒŠNİ\Ë›X\šÙ\ŠËËJÕËÌLŒL
K\Ë™˜]ĞXİÜœÊ\Ë™ÙKKš[\š[ÜœÖÖKœÚ]RYK›ÛXšY\ËÊNØÛÛœİ\
KKJNİ\Ë˜ÛÛX˜]^[ÊJÕÊK\Ë™˜]Ò[\XİÊÊNØÛÛœİO\
Ì‹İÌŠNİ\Ë˜Ø[Y\˜\Ë›XZ[‹˜Ù[\“ÛŠKKJÕËLŠ_]ÙX]\ŠKJ^ÚYŠ\Ëœ™YXÙY[İ[ÛŠ\™]\›ØÛÛœİ]\Ë˜Ø[Y\˜\Ë›XZ[‹ÏSX]˜ÙZ[
‹ÚYÕ‹›ÛÛJJÌÏSX]˜ÙZ[
‹šZYÚÕ‹›ÛÛJJÌSX]›Z[ŠM‹X]›X^
ÍKX]œ›İ[™
Ê’ËÌLÙLÊJJKO]\Ëš\İX[ÛØÚÎİ\Ë™Y™™XİË™š[İ[JLŒÍÍŒ
NÙ›ÜŠ]Lİİ
ÊÊ^ØÛÛœİSX]œ›İ[™


ŒŒÊŞJJIUËUËÌŠÒJKÏSX]œ›İ[™


ŒLÌJŞJŒNJIRËRËÌŠÖKN
Nİ\Ë™Y™™XİË™š[™Xİ
Ë‹JK\Ë™Y™™XİË™š[™Xİ
L‹ÊÍK‹
__Y˜]Ò[\XİÊJ^ØÛÛœİO]\Ëœİ]KVKš[œÚYOËœÚ]RYÏÈˆ‹Ï]\Ëœ™YÚ\İK™Ù]
˜›ÛÙŠHOOHLNÙ›ÜŠÛÛœİÈÙˆ\Ëš[\XİÊ^ÚYŠËœ›ÛÛHOOUŸUÉ‰’ËšÚ[™OOH˜›ÛÙŠXÛÛ[YNØÛÛœİ\
Ë˜]Ë˜]JKOVK[YKRË[YKRËšÚ[™OOH˜›\İ‹]\Ëœ™YXÙY[İ[ÛÍNÌŒLÙ›ÜŠ]ÏLØÏØÊÊÊ^ØÛÛœİÏXÊŒ‹ŒÎNNM‹]\Ëœ™YXÙY[İ[ÛÌLŠÌŒNŒLŠJÓX]›Z[ŠKJJŠÌMŒÌ
KSX]œ›İ[™

ÓX]˜ÛÜÊÊJœŠŠÉM
ÌJKÍ
KOSX]œ›İ[™
JÒJÓX]œÚ[ŠÊJœŠ‹MËJÍN“X]›X^
^JŒL
JJKÏSX]›X^
ÌK^KËN‹^KÌÊNİ\Ë™Y™™XİË™š[İ[JÖÌMÍÌÎLŒMŒŒÌ‹MÍÌ×VØÉL×N–ÍÎLMKLŒÍŒÍMMMÌÍVØÉL×KÊK\Ë™Y™™XİË™š[™Xİ
‹KÍŒËÍNŒÊ___XÛÛX˜]^[ÊKJ^ÚYŠ\Ë˜]XÚÔ[ÙOŒ
ZYŠ\Ë™Y™™XİË™š[İ[JMNLLÎLKX]›Z[ŠK\Ë˜]XÚÔ[ÙJŒŠJK\ËœÚİ\™Xİ[ÛŠ^ØÛÛœİ]\ËœÚİ\™Xİ[Ûİ\Ë™Y™™XİË™š[™Xİ
X]œ›İ[™
JÌMÊ•ŠKLËX]œ›İ[™
KLÊKË
K\Ë™Y™™XİË™š[™Xİ
X]œ›İ[™
JÌŠ•ŠKL‹X]œ›İ[™
KLÌ
KKŠ_Y[ÙH›ÜŠÛÛœİÕ‹×[Ù–ÖËLLWKÌNKLÍ—KÌKLKËLMLÍ×WJ]\Ë™Y™™XİË™š[™Xİ
X]œ›İ[™
JÕŠKX]œ›İ[™
JÕÊK‹ÊNÚYŠ\Ëš\[ÙOŒ	‰\Ëœ™YÚ\İK™Ù]
˜›ÛÙŠHOOHLJ^İ\Ë™Y™™XİË™š[İ[JLNMÌÌÌX]›Z[ŠK\Ëš\[ÙJŒŠJNÙ›ÜŠÛÛœİÕ‹×[Ù–ÖËLŒËL×KÌMËWKËLMKÌŒËLL×WJ]\Ë™Y™™XİË™š[™Xİ
X]œ›İ[™
JÕŠKX]œ›İ[™
JÕÊK‹
__Y˜]ĞXİÜœÊKK‹Ê^ØÛÛœİÏ]\Ëœİ]K˜ÛÛ[][š]Kœİ\š]›ÜœÖİ\Ëœİ]K˜ÛÛ[][š]K˜Xİ]™WNÙ›ÜŠÛÛœİHÙˆŠ^ÚYŠK˜[]™JXÛÛ[YNØÛÛœİ\
KKJNİ\Ë˜\
˜ÛÜœÙNˆŠŞKšY˜ÛÜœÙH‹JÕÊKœÙ]\
J_XÛÛœİVË‹‹•‹™š[\ŠOOK˜[]™JK›X\
OOŠÚÙ^NˆˆŠŞKšYÜÚ][ÛK[]NKœ›ÛK[[\Ëš[[Ë™Ù]
J_JJKÚÙ^Nˆœİ\š]›Üˆ‹ÜÚ][Û–K[]N–È˜Z[˜H‹œ]H‹›ZXH‹›X\ˆ—Kš[˜ÛY\ÊËšY
OÒËšYˆ˜Z[˜H‹[[›ÚYWNÙ›ÜŠÛÛœİHÙˆ
^ÚYŠKšÙ^OOOHœİ\š]›Üˆ‰‰\Ëœİ]K™ZXÛK™š]š[™ÊXÛÛ[YNØÛÛœİ\
KœÜÚ][Û‹KœÜÚ][Û‹JK]JÕËÏ^KšÙ^OOOHœİ\š]›Üˆ‹JÏİ\Ë›[İš[™ÎˆH^Kš[[	‰Kš[[[[\Ëœİ]K[YJOÌJÓX]™›ÛÜŠ\Ëš\İX[ÛØÚÊÊÊÏÌKœÜÚ][Û‹
JILŒ^Kš[[Ë™\İ[˜][Û‹OXÏİ\Ë˜˜XÚÎˆH[‰‰›‹
Û‹OKœÜÚ][Û‹
ŞKœÜÚ][Û‹KÏXÏİ\Ë™˜XÚ[™ÏˆH[‰‰œ
‹‹JKÛ]O]\ËœÜš]\Ë™Ù]
KšÙ^JNØ_
O]\Ë˜Yš[XYÙJ\Ë˜XİÜ•^\™JKœÙ]ÜšYÚ[ŠKLJKœÙ]ØØ[JŠK\ËœÜš]\ËœÙ]
KšÙ^KJJKK™š[İ[JNNŠKK™š[™Xİ
X]œ›İ[™

KLLX]œ›İ[™

KŒJKÉ‰\Ë›X\šÙ\Š
ÍMLMNML
KKœÙ]œ˜[YJKœ[]JÈˆŠÊÉ‰\Ë˜]XÚÔ[ÙOŒÙOÍÎœŠÊOÌÎŒ
JJKœÙ]ÜÚ][ÛŠX]œ›İ[™

KX]œ›İ[™

JKœÙ]\
\Ë˜\\

JKœÙ]›\
ÊKœÙ][
É‰\Ëš\[ÙOŒÌMMÌÍÍNŒMÍÍÌŒMJKœÙ]š\ÚX›JL
___XÛÛœİQÏO™Øİ[Y[™Ù][[Y[RY
ÊKİ[™]È]‘Ø[YJİ\N–]UUË\™[ˆ™Ø[YH‹˜XÚÙÜ›İ[™ÛÛÜˆˆÌLLNLMˆ‹ØØ[NÛ[ÙN–]”ØØ[K”‘TÒV‘K]]ĞÙ[\–]”ØØ[KÑS•T—Ğ“ÕÚYŒLZYÚK™[™\Ü^[\ˆL[X[X\ÎˆLK›İ[™^[ÎˆLİÙ\”™Y™\™[˜ÙNˆ›İË\İÙ\ˆŸKœÎİ\™Ù]Œ›Ü˜ÙTÙ][YSİ]ˆLKØÙ[™N–Ü\×_JKJ
OO“İœØÙ[™K™Ù]ØÙ[™J‘Ø[YTØÙ[™HŠKİ[™]ÈK][™]ÈÙ]Óİœ™YÚ\İKœÙ]
İXÚ‹]
NÖZJİœ™YÚ\İJNØÛÛœİÚOY
›İ™\›^HŠKšOY
šYŠKÚOY
š[›ÈŠKšOY
›™]ÑØ[YHŠKÙOY
˜ÛÛ[YQØ[YHŠKÜÏY
™Ø[YK\İX]HŠKY
™Y™šXİ[R[ŠKÙOY
™Y™šXİ[HŠKOY
››İX›ÛÚÈŠKOY
œ˜Y[ÈŠKYOY
˜XİˆŠKÙOY
˜XİÈŠKOY
˜XİŠKYOY
˜XİHŠK™OY
›Û[YHŠK™OY
œÛİ[™ÙÙÛHŠNÛ]İH]H‹™OHš[™[ÜH‹OHLNÙ[˜İ[ÛˆšJ
^ØÛÛœİÏVÈœ]\ÙH‹™[™[™È‹˜ÛÛ\]H—Kš[˜ÛY\Êİ
NÛšK™\ØX›YHZNØÛÛœİOYZJ
NØÙK^ÛÛ[WİOOH˜ÛÛ\]HÈ”ÙYİZ\ˆ^Ü˜[™È‘ÏÈ”™X[Y\ˆˆÛÛ[X\ˆ‹ÙK™\ØX›YHZ_QÉ‰ŠR_K™Ø[YSİ™\Š_Y[˜İ[Ûˆ[ŠËJ^Ò]˜ÛX\Š
Kİ[œÚ[ÛŠ
KİRKÜË^ÛÛ[^Ü]\ÙNˆ”T•QHSˆUTĞH‹[™[™Îˆ‘’SˆSPÕÈH‹ÛÛ\]NˆĞSTpäPHÓÓTUQH‹XYˆĞSˆPÈHĞpãQÈŸVÒWOÏÈ•QT”HUQT•H‹ÚK^ÛÛ[QËšKšY[HLÚK˜Û\ÜÓ\İ˜Y
œÚİÈŠKšJ
K
ÙK™\ØX›YÛšN˜ÙJK™›Øİ\Ê
_Y[˜İ[Ûˆ	J
^×İHœ^Z[™È‹ÚK˜Û\ÜÓ\İœ™[[İ™JœÚİÈŠKšKšY[HLKØİ[Y[˜Xİ]™Q[[Y[Ë˜›\Š
_Sİ™]™[Ë›ÛŠœ™XYK]Ë\^H‹

OOÚOHLšJ
_JNÓİ™]™[Ë›ÛŠœÚİË[İ™\›^H‹[ŠNÓİ™]™[Ë›ÛŠœÛİ[™‹ÏOİœ^JÊJNÓİ™]™[Ë›ÛŠ[œÚ[Ûˆ‹ÏOİ[œÚ[ÛŠÊJNÛ]OLÓİ™]™[Ë›ÛŠ˜Ú\\ˆ‹
ËJOOØÛÛœİOY
˜Ú\\‹XØ\™ŠNÙ
˜Ú\\‹]]HŠK^ÛÛ[QË
˜Ú\\‹[[™HŠK^ÛÛ[RKKšY[HLKÚ[™İË˜ÛX\•[Y[İ]
JKO]Ú[™İËœÙ][Y[İ]


OOÖKšY[HLKŒ
_JNÓİ™]™[Ë›ÛŠ˜[XšY[˜ÙH‹
ËJOOİ˜[XšY[˜ÙJËJJNÛšK˜Y]™[\İ[™\Š˜ÛXÚÈ‹

OOØÛÛœİÏYZJ
NÑÉ‰ˆQË™Ø[YSİ™\‰‰ˆ]Ú[™İË˜ÛÛ™š\›J°¯Ôİ\İ]Z\ˆH\YHİX\™YOÈŠ_
œÊ
_
ÚK^ÛÛ[H‘[˜]™YØYÜˆ[\YH›Üœ˜\ˆ[İX\™YËˆYY\ÈÙYİZ\ˆYØ[™È\˜[H\İHÙ\ÚpìÛ‹ˆŠKİ[›ØÚÊ
K

Kœİ\[ŠLK
›[ÙHŠK˜[YKÙK˜[YJI‰‰J
J_JNØÙK˜Y]™[\İ[™\Š˜ÛXÚÈ‹

OOİİ[›ØÚÊ
KÈœ]\ÙH‹™[™[™È‹˜ÛÛ\]H—Kš[˜ÛY\Êİ
OÊ

Kœ™\İ[YJ
K	J
JN

Kœİ\[ŠL˜Ø[\ZYÛˆ‹œİ\š]˜[ŠOÉJ
NŠÚK^ÛÛ[H“›ÈÙHHÙYÈ™Xİ\\˜\ˆH\YKˆ‹šJ
J_JNÒÙK˜Y]™[\İ[™\Š˜Ú[™ÙH‹

OOİ‹^ÛÛ[^ÜİÜNˆ“pè\Èİ[Z[š\İ›ÜËY[›ÜÈ][\ÈH™]\˜YHHHX\ğëXH˜\È[˜H\šYHÜ°ë]XØKˆ‹İ\š]˜[ˆ“]Y\H\›X[™[HHÜÈİ\\š]šY[\Ëˆ‹šYÚX\™Nˆ“ÜÈ[™™XİYÜÈ™[ˆHŞY[ˆpè\ÈZ›ÜËˆY[›ÜÈØ\XÚÜËpè\È][\ÈH\ÙY[ÜÈpè\È\›ÜËˆŸVÒÙK˜[YWOÏÈˆŸJNÙ[˜İ[ÛˆZJ
^Ò™K^ÛÛ[]İš\Ñ[˜X›YÈ”ÛÛšYÈXİ]›Èˆ”ÛÛšYÈÚ[[˜ÚXYÈ‹™KœÙ]]šX]J˜\šXK\™\ÜÙY‹İš[™Ê]İš\Ñ[˜X›Y
JK™K˜[YOTİš[™ÊX]œ›İ[™
İ›]™[
ŒL
J_R™K˜Y]™[\İ[™\Š˜ÛXÚÈ‹

OOİİÙÙÛJ
Kİ[›ØÚÊ
KZJ
_JNÖ™K˜Y]™[\İ[™\Šš[œ]‹

OOİİœÙ]]™[
[X™\Š™K˜[YJKÌL
Kİ[›ØÚÊ
_JNÕZJ
NÙ›ÜŠÛÛœİÈÙˆØİ[Y[œ]Y\TÙ[XİÜ[
–Ù]K[[İ™WHŠJ^ØÛÛœİOQË™]\Ù]›[İ™NÑË˜Y]™[\İ[™\ŠœÚ[\™İÛˆ‹OOÖKœ™]™[Y˜][

K]˜Y
JKËœÙ]Ú[\Ø\\™JKœÚ[\’Y
_JNÙ›ÜŠÛÛœİHÙ–ÈœÚ[\\‹œÚ[\˜Ø[˜Ù[‹›ÜİÚ[\˜Ø\\™H—JQË˜Y]™[\İ[™\ŠK

OO’]™[]JJJ_Y›ÜŠÛÛœİÈÙˆØİ[Y[œ]Y\TÙ[XİÜ[
–Ù]KXXİ[Û—HŠJQË˜Y]™[\İ[™\Š˜ÛXÚÈ‹

OO

K˜Xİ[ÛŠË™]\Ù]˜Xİ[ÛŠJNÙ[˜İ[ÛˆZJÊ^ØÛÛœİO^

K››İX›ÛÚÊ™JNÙ
››İX›ÛÚÔİ[[X\HŠK^ÛÛ[RKœİ[[X\NÙ›ÜŠÛÛœİÈÙˆØİ[Y[œ]Y\TÙ[XİÜ[
–Ù]K]X—HŠJUËœÙ]]šX]J˜\šXK\™\ÜÙY‹İš[™ÊË™]\Ù]XOOQ™JJNØÛÛœİOY
››İX›ÛÚÔ›İÜÈŠNÖKœ™\XÙPÚ[™[Š
NÙ›ÜŠÛÛœİÈÙˆKœ›İÜÊ^ØÛÛœİÏYØİ[Y[˜Ü™X]Q[[Y[
›HŠKYØİ[Y[˜Ü™X]Q[[Y[
œÜ[ˆŠKOYØİ[Y[˜Ü™X]Q[[Y[
œİ›Û™ÈŠNÚYŠK^ÛÛ[UË]K˜\[™
JKË™]Z[
^ØÛÛœİYØİ[Y[˜Ü™X]Q[[Y[
œÛX[ŠNİ^ÛÛ[UË™]Z[˜\[™

_ZYŠË˜\[™

KË˜Xİ[ÛŠ^ØÛÛœİYØİ[Y[˜Ü™X]Q[[Y[
˜]ÛˆŠNİ\OH˜]Ûˆ‹˜Û\ÜÓ˜[YOHœÙXÛÛ™\H‹^ÛÛ[UË˜]ÛÏÈˆ‹™\ØX›YHHUË™\ØX›YØÛÛœİUË˜Xİ[Ûİ˜Y]™[\İ[™\Š˜ÛXÚÈ‹

OOÙ
››İX›ÛÚÓ›İXÙHŠK^ÛÛ[^

K››İX›ÛÚĞXİ[ÛŠ
OÏÈˆ‹ZJ
_JKË˜\[™

KK˜\[™
ÊKOOQÉ‰Š™\ØX›YÑKœ]Y\TÙ[XİÜŠ	ÖØ\šXK\™\ÜÙYHYH—IÊN
OË™›Øİ\Ê
_Y[ÙHK˜\[™
Ê_XÛÛœİY
™šY[X\ŠNÚYŠ‹šY[HRK›X\K›X\
^ØÛÛœİÏU‹™Ù]ÛÛ^
Œ™ŠKÏRK›X\U‹ÚYÌÕË™š[İ[OHˆÌŒÍÌ˜ˆ‹Ë™š[™Xİ
‹ÚY‹šZYÚ
KË™š[İ[OHˆÍNMŒMÈ‹Ë™š[™Xİ
LJœÊœ‹šZYÚ
KË™š[™Xİ
LJœ‹ÚYÊœ
KË™š[™Xİ
ÊœŠœŒ
œ
NØÛÛœİOJËË‹ŠOOÕË™š[İ[O\‹Ë˜™YÚ[”]

KË˜\˜ÊÊœÊœ‹X]”JŒŠKË™š[

_NÙ›ÜŠÛÛœİÈÙˆËœÚ]\Ê^JËËKˆÎXØ˜NYH‹ŠNÙ›ÜŠÛÛœİÈÙˆË™ÛØ[Ê^JËËKËœİYÙOOORËœİYÙOÈˆÙ™ÌÈˆˆÎM™ˆ‹ËœİYÙOOORËœİYÙOÎ
NÙ›ÜŠÛÛœİÈÙˆË›Ûİ
^JËËKˆØYÍYˆ‹ÊNŞJË™ZXÛKË™ZXÛKKˆÎLØ˜˜H‹JKJË˜˜\ÙKË˜˜\ÙKKˆÙY™LH‹ÊKËœİ›ÚÙTİ[OHˆÙ™™™™™ˆ‹Ë›[™UÚYLØÛÛœİRËœ^Y\‹
œRËœ^Y\‹JœÕË˜™YÚ[”]

KË›[İ™UÊNK
KË›[™UÊ
ÎK
KË›[İ™UÊNJKË›[™UÊ
ÎJKËœİ›ÚÙJ
__Sİ™]™[Ë›ÛŠ›Ü[‹[›İX›ÛÚÈ‹ÏOÒ]˜ÛX\Š
K™OQË
››İX›ÛÚÓ›İXÙHŠK^ÛÛ[Hˆ‹ZJ
KKœÚİÓ[Ù[

_JNÙ›ÜŠÛÛœİÈÙˆØİ[Y[œ]Y\TÙ[XİÜ[
–Ù]K]X—HŠJQË˜Y]™[\İ[™\Š˜ÛXÚÈ‹

OOÑ™OQË™]\Ù]X‹
››İX›ÛÚÓ›İXÙHŠK^ÛÛ[Hˆ‹ZJ
_JNÓİ™]™[Ë›ÛŠœ˜Y[ËXÚÚXÙH‹

OOÒ]˜ÛX\Š
KKœÚİÓ[Ù[

_JNÓİ™]™[Ë›ÛŠ˜Xİ‹XÚÚXÙH‹

OOÒ]˜ÛX\Š
KYKœÚİÓ[Ù[

_JNÓİ™]™[Ë›ÛŠ˜XİËXÚÚXÙH‹

OOÒ]˜ÛX\Š
KÙKœÚİÓ[Ù[

_JNÓİ™]™[Ë›ÛŠ˜XİXÚÚXÙH‹

OOÒ]˜ÛX\Š
KKœÚİÓ[Ù[

_JNÓİ™]™[Ë›ÛŠ˜XİKXÚÚXÙH‹

OOÒ]˜ÛX\Š
KYKœÚİÓ[Ù[

_JNÙ›ÜŠÛÛœİÈÙ–ÑKKYKÙKKYWJQËœ]Y\TÙ[XİÜŠ–Ù]KXÛÜÙWHŠK˜Y]™[\İ[™\Š˜ÛXÚÈ‹

OOÑË˜ÛÜÙJ
K

K˜ÛÜÙT[™[

_JKË˜Y]™[\İ[™\Š˜ÛÜÙH‹

OO

K˜ÛÜÙT[™[

JNÙ
˜[œÛZ]ŠK˜Y]™[\İ[™\Š˜ÛXÚÈ‹

OOÜK˜ÛÜÙJ
K

K™š[š\ÚXİ
œÚYÛ˜[Š_JNÙ
™\ØÛÛ›™XİŠK˜Y]™[\İ[™\Š˜ÛXÚÈ‹

OOÜK˜ÛÜÙJ
K

K™š[š\ÚXİ
œÚ[[˜ÙHŠ_JNÙ
š[š]QÜ›İ\ŠK˜Y]™[\İ[™\Š˜ÛXÚÈ‹

OOÛYK˜ÛÜÙJ
K

K™š[š\ÚXİÛÊš[š]HŠ_JNÙ
›ØœÙ\™QÜ›İ\ŠK˜Y]™[\İ[™\Š˜ÛXÚÈ‹

OOÛYK˜ÛÜÙJ
K

K™š[š\ÚXİÛÊ›ØœÙ\™HŠ_JNÙ
Ø\›”™YYÙ\ÈŠK˜Y]™[\İ[™\Š˜ÛXÚÈ‹

OOÙÙK˜ÛÜÙJ
K

K™š[š\ÚXİ™YJØ\›ˆŠ_JNÙ
˜ÛÛ˜ÙX[™\ÙX\˜ÚŠK˜Y]™[\İ[™\Š˜ÛXÚÈ‹

OOÙÙK˜ÛÜÙJ
K

K™š[š\ÚXİ™YJ˜ÛÛ˜ÙX[Š_JNÙ
™]˜XİX]Tİ][ÛˆŠK˜Y]™[\İ[™\Š˜ÛXÚÈ‹

OOŞK˜ÛÜÙJ
K

K™š[š\ÚXİ›İ\Šœİ][ÛˆŠ_JNÙ
™]˜XİX]SX\ÚXHŠK˜Y]™[\İ[™\Š˜ÛXÚÈ‹

OOŞK˜ÛÜÙJ
K

K™š[š\ÚXİ›İ\Š›X\ÚXHŠ_JNÙ
œÚYÛ˜[İ]ÚYHŠK˜Y]™[\İ[™\Š˜ÛXÚÈ‹

OOŞYK˜ÛÜÙJ
K

K™š[š\ÚXİš]™J˜[\›HŠ_JNÙ
š\ÛÛ]U˜[^HŠK˜Y]™[\İ[™\Š˜ÛXÚÈ‹

OOŞYK˜ÛÜÙJ
K

K™š[š\ÚXİš]™Jš\ÛÛ]HŠ_JNİÚ[™İË˜Y]™[\İ[™\ŠšÙ^YİÛˆ‹ÏO×İOOHœ^Z[™È‰‰ˆQK›Ü[‰‰ˆ\K›Ü[‰‰ˆ[YK›Ü[‰‰ˆYÙK›Ü[‰‰ˆ^K›Ü[‰‰ˆ^YK›Ü[‰‰–È•Xˆ‹\œ›İÕ\‹\œ›İÑİÛˆ‹\œ›İÓY‹\œ›İÔšYÚ—Kš[˜ÛY\ÊËšÙ^JI‰ŠËšÙ^OOOH•Xˆ‰‰ˆQËœÚYÙ^I‰™Øİ[Y[˜Xİ]™Q[[Y[OOYØİ[Y[˜›ÙI‰ŠËœ™]™[Y˜][

K

K˜Xİ[ÛŠ››İX›ÛÚÈŠJKËšÙ^Kœİ\ÕÚ]
\œ›İÈŠI‰‘Ëœ™]™[Y˜][

J_JNİÚ[™İË˜Y]™[\İ[™\Š˜›\ˆ‹

OOÒ]˜ÛX\Š
KI‰

KšÙ^\Ô™\Ù]

_JNÙØİ[Y[˜Y]™[\İ[™\Šš\ÚXš[]XÚ[™ÙH‹

OOÙØİ[Y[šY[‰‰šI‰—İOOHœ^Z[™È‰‰Š]˜ÛX\Š
K

KšÙ^\Ô™\Ù]

K

Kœ\œÚ\İ
LJJ_JNİÚ[™İË˜Y]™[\İ[™\ŠœYÙZYH‹

OOÚI‰—İOOHœ^Z[™È‰‰

Kœ\œÚ\İ
LJ_JNÈœÙ\šXÙUÛÜšÙ\ˆš[ˆ˜]šYØ]Ü‰‰‹×šÏÎ‰Ë\İ
ØØ][Û‹œ›İØÛÛ
I‰›˜]šYØ]Ü‹œÙ\šXÙUÛÜšÙ\‹œ™YÚ\İ\Š‹‹ÜİËšœÈŠK˜Ø]Ú
ÏO˜ÛÛœÛÛKØ\›Š“[ÙÈÚ[ˆÛÛ™^pìÛˆ›È\ÜÛšX›Kˆ‹ÊJNÂ
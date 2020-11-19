(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var n;function ba(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ca="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function da(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var ea=da(this);function t(a,b){if(b)a:{for(var c=ea,d=a.split("."),e=0;e<d.length-1;e++){var f=d[e];if(!(f in c))break a;c=c[f]}d=d[d.length-1];e=c[d];f=b(e);f!=e&&null!=f&&ca(c,d,{configurable:!0,writable:!0,value:f})}}
t("Symbol",function(a){function b(e){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c("jscomp_symbol_"+(e||"")+"_"+d++,e)}
function c(e,f){this.f=e;ca(this,"description",{configurable:!0,writable:!0,value:f})}
if(a)return a;c.prototype.toString=function(){return this.f};
var d=0;return b});
t("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=ea[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ca(d.prototype,a,{configurable:!0,writable:!0,value:function(){return fa(ba(this))}})}return a});
function fa(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function u(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:ba(a)}}
function ia(a){for(var b,c=[];!(b=a.next()).done;)c.push(b.value);return c}
var ja="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},ka;
if("function"==typeof Object.setPrototypeOf)ka=Object.setPrototypeOf;else{var la;a:{var ma={a:!0},na={};try{na.__proto__=ma;la=na.a;break a}catch(a){}la=!1}ka=la?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var qa=ka;
function ra(a,b){a.prototype=ja(b.prototype);a.prototype.constructor=a;if(qa)qa(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.A=b.prototype}
function sa(){this.l=!1;this.h=null;this.o=void 0;this.g=1;this.i=this.j=0;this.v=this.f=null}
function ta(a){if(a.l)throw new TypeError("Generator is already running");a.l=!0}
sa.prototype.m=function(a){this.o=a};
function ua(a,b){a.f={la:b,X:!0};a.g=a.j||a.i}
sa.prototype["return"]=function(a){this.f={"return":a};this.g=this.i};
function va(a,b){a.g=5;return{value:b}}
sa.prototype.S=function(a){this.g=a};
function wa(a){a.j=2;a.i=3}
function xa(a){a.j=0;a.f=null}
function ya(a){a.v=[a.f];a.j=0;a.i=0}
function Ca(a){var b=a.v.splice(0)[0];(b=a.f=a.f||b)?b.X?a.g=a.j||a.i:void 0!=b.S&&a.i<b.S?(a.g=b.S,a.f=null):a.g=a.i:a.g=4}
function Ea(a){this.f=new sa;this.g=a}
function Fa(a,b){ta(a.f);var c=a.f.h;if(c)return Ga(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.f["return"]);
a.f["return"](b);return Ha(a)}
function Ga(a,b,c,d){try{var e=b.call(a.f.h,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.f.l=!1,e;var f=e.value}catch(g){return a.f.h=null,ua(a.f,g),Ha(a)}a.f.h=null;d.call(a.f,f);return Ha(a)}
function Ha(a){for(;a.f.g;)try{var b=a.g(a.f);if(b)return a.f.l=!1,{value:b.value,done:!1}}catch(c){a.f.o=void 0,ua(a.f,c)}a.f.l=!1;if(a.f.f){b=a.f.f;a.f.f=null;if(b.X)throw b.la;return{value:b["return"],done:!0}}return{value:void 0,done:!0}}
function Ia(a){this.next=function(b){ta(a.f);a.f.h?b=Ga(a,a.f.h.next,b,a.f.m):(a.f.m(b),b=Ha(a));return b};
this["throw"]=function(b){ta(a.f);a.f.h?b=Ga(a,a.f.h["throw"],b,a.f.m):(ua(a.f,b),b=Ha(a));return b};
this["return"]=function(b){return Fa(a,b)};
this[Symbol.iterator]=function(){return this}}
function Ja(a,b){var c=new Ia(new Ea(b));qa&&a.prototype&&qa(c,a.prototype);return c}
t("Reflect.setPrototypeOf",function(a){return a?a:qa?function(b,c){try{return qa(b,c),!0}catch(d){return!1}}:null});
t("Object.setPrototypeOf",function(a){return a||qa});
function x(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var Ka="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)x(d,e)&&(a[e]=d[e])}return a};
t("Object.assign",function(a){return a||Ka});
t("Promise",function(a){function b(g){this.f=0;this.h=void 0;this.g=[];this.m=!1;var h=this.i();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.f=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.g=function(g){if(null==this.f){this.f=[];var h=this;this.h(function(){h.j()})}this.f.push(g)};
var e=ea.setTimeout;c.prototype.h=function(g){e(g,0)};
c.prototype.j=function(){for(;this.f&&this.f.length;){var g=this.f;this.f=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.i(l)}}}this.f=null};
c.prototype.i=function(g){this.h(function(){throw g;})};
b.prototype.i=function(){function g(l){return function(m){k||(k=!0,l.call(h,m))}}
var h=this,k=!1;return{resolve:g(this.ga),reject:g(this.j)}};
b.prototype.ga=function(g){if(g===this)this.j(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.ia(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.va(g):this.l(g)}};
b.prototype.va=function(g){var h=void 0;try{h=g.then}catch(k){this.j(k);return}"function"==typeof h?this.ja(h,g):this.l(g)};
b.prototype.j=function(g){this.o(2,g)};
b.prototype.l=function(g){this.o(1,g)};
b.prototype.o=function(g,h){if(0!=this.f)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.f);this.f=g;this.h=h;2===this.f&&this.ha();this.v()};
b.prototype.ha=function(){var g=this;e(function(){if(g.G()){var h=ea.console;"undefined"!==typeof h&&h.error(g.h)}},1)};
b.prototype.G=function(){if(this.m)return!1;var g=ea.CustomEvent,h=ea.Event,k=ea.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof g?g=new g("unhandledrejection",{cancelable:!0}):"function"===typeof h?g=new h("unhandledrejection",{cancelable:!0}):(g=ea.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.h;return k(g)};
b.prototype.v=function(){if(null!=this.g){for(var g=0;g<this.g.length;++g)f.g(this.g[g]);this.g=null}};
var f=new c;b.prototype.ia=function(g){var h=this.i();g.J(h.resolve,h.reject)};
b.prototype.ja=function(g,h){var k=this.i();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(r,q){return"function"==typeof r?function(v){try{l(r(v))}catch(w){m(w)}}:q}
var l,m,p=new b(function(r,q){l=r;m=q});
this.J(k(g,l),k(h,m));return p};
b.prototype["catch"]=function(g){return this.then(void 0,g)};
b.prototype.J=function(g,h){function k(){switch(l.f){case 1:g(l.h);break;case 2:h(l.h);break;default:throw Error("Unexpected state: "+l.f);}}
var l=this;null==this.g?f.g(k):this.g.push(k);this.m=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=u(g),m=l.next();!m.done;m=l.next())d(m.value).J(h,k)})};
b.all=function(g){var h=u(g),k=h.next();return k.done?d([]):new b(function(l,m){function p(v){return function(w){r[v]=w;q--;0==q&&l(r)}}
var r=[],q=0;do r.push(void 0),q++,d(k.value).J(p(r.length-1),m),k=h.next();while(!k.done)})};
return b});
function Oa(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
t("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Oa(this,b,"endsWith");b+="";void 0===c&&(c=d.length);for(var e=Math.max(0,Math.min(c|0,d.length)),f=b.length;0<f&&0<e;)if(d[--e]!=b[--f])return!1;return 0>=f}});
t("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Oa(this,b,"startsWith");b+="";for(var e=d.length,f=b.length,g=Math.max(0,Math.min(c|0,d.length)),h=0;h<f&&g<e;)if(d[g++]!=b[h++])return!1;return h>=f}});
function Pa(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
t("Array.prototype.entries",function(a){return a?a:function(){return Pa(this,function(b,c){return[b,c]})}});
t("Array.prototype.keys",function(a){return a?a:function(){return Pa(this,function(b){return b})}});
t("Array.prototype.values",function(a){return a?a:function(){return Pa(this,function(b,c){return c})}});
t("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
t("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length,f=c||0;for(0>f&&(f=Math.max(f+e,0));f<e;f++){var g=d[f];if(g===b||Object.is(g,b))return!0}return!1}});
t("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==Oa(this,b,"includes").indexOf(b,c||0)}});
t("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)x(b,d)&&c.push([d,b[d]]);return c}});
t("WeakMap",function(a){function b(k){this.f=(h+=Math.random()+1).toString();if(k){k=u(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return"object"===l&&null!==k||"function"===l}
function e(k){if(!x(k,g)){var l=new c;ca(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(m){if(m instanceof c)return m;Object.isExtensible(m)&&e(m);return l(m)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),m=new a([[k,2],[l,3]]);if(2!=m.get(k)||3!=m.get(l))return!1;m["delete"](k);m.set(l,4);return!m.has(k)&&4==m.get(l)}catch(p){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!x(k,g))throw Error("WeakMap key fail: "+k);k[g][this.f]=l;return this};
b.prototype.get=function(k){return d(k)&&x(k,g)?k[g][this.f]:void 0};
b.prototype.has=function(k){return d(k)&&x(k,g)&&x(k[g],this.f)};
b.prototype["delete"]=function(k){return d(k)&&x(k,g)&&x(k[g],this.f)?delete k[g][this.f]:!1};
return b});
t("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h.f;return fa(function(){if(l){for(;l.head!=h.f;)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;"object"==l||"function"==l?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var m=h.g[l];if(m&&x(h.g,l))for(var p=0;p<m.length;p++){var r=m[p];if(k!==k&&r.key!==r.key||k===r.key)return{id:l,list:m,index:p,s:r}}return{id:l,list:m,index:-1,s:void 0}}
function e(h){this.g={};this.f=b();this.size=0;if(h){h=u(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(u([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var l=k.entries(),m=l.next();if(m.done||m.value[0]!=h||"s"!=m.value[1])return!1;m=l.next();return m.done||4!=m.value[0].x||"t"!=m.value[1]||!l.next().done?!1:!0}catch(p){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var l=d(this,h);l.list||(l.list=this.g[l.id]=[]);l.s?l.s.value=k:(l.s={next:this.f,previous:this.f.previous,head:this.f,key:h,value:k},l.list.push(l.s),this.f.previous.next=l.s,this.f.previous=l.s,this.size++);return this};
e.prototype["delete"]=function(h){h=d(this,h);return h.s&&h.list?(h.list.splice(h.index,1),h.list.length||delete this.g[h.id],h.s.previous.next=h.s.next,h.s.next.previous=h.s.previous,h.s.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.g={};this.f=this.f.previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).s};
e.prototype.get=function(h){return(h=d(this,h).s)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),m;!(m=l.next()).done;)m=m.value,h.call(k,m[1],m[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
t("Set",function(a){function b(c){this.f=new Map;if(c){c=u(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.f.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(u([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.f.set(c,c);this.size=this.f.size;return this};
b.prototype["delete"]=function(c){c=this.f["delete"](c);this.size=this.f.size;return c};
b.prototype.clear=function(){this.f.clear();this.size=0};
b.prototype.has=function(c){return this.f.has(c)};
b.prototype.entries=function(){return this.f.entries()};
b.prototype.values=function(){return this.f.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.f.forEach(function(f){return c.call(d,f,f,e)})};
return b});
var y=this||self;function z(a,b){for(var c=a.split("."),d=b||y,e=0;e<c.length;e++)if(d=d[c[e]],null==d)return null;return d}
function Qa(){}
function Ra(a){var b=typeof a;b="object"!=b?b:a?Array.isArray(a)?"array":b:"null";return"array"==b||"object"==b&&"number"==typeof a.length}
function A(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Sa(a){return Object.prototype.hasOwnProperty.call(a,Ua)&&a[Ua]||(a[Ua]=++Va)}
var Ua="closure_uid_"+(1E9*Math.random()>>>0),Va=0;function Wa(a,b,c){return a.call.apply(a.bind,arguments)}
function Xa(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Ya(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Ya=Wa:Ya=Xa;return Ya.apply(null,arguments)}
function Za(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
function B(a,b){var c=a.split("."),d=y;c[0]in d||"undefined"==typeof d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)c.length||void 0===b?d[e]&&d[e]!==Object.prototype[e]?d=d[e]:d=d[e]={}:d[e]=b}
function C(a,b){function c(){}
c.prototype=b.prototype;a.A=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Ka=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
function $a(a){return a}
;function ab(a,b){var c=void 0;return new (c||(c=Promise))(function(d,e){function f(k){try{h(b.next(k))}catch(l){e(l)}}
function g(k){try{h(b["throw"](k))}catch(l){e(l)}}
function h(k){k.done?d(k.value):(new c(function(l){l(k.value)})).then(f,g)}
h((b=b.apply(a,void 0)).next())})}
;function bb(a){if(Error.captureStackTrace)Error.captureStackTrace(this,bb);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}
C(bb,Error);bb.prototype.name="CustomError";var cb=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},D=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},db=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
D(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function eb(a,b){a:{var c=a.length;for(var d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){c=e;break a}c=-1}return 0>c?null:"string"===typeof a?a.charAt(c):a[c]}
function fb(a,b){var c=cb(a,b),d;(d=0<=c)&&Array.prototype.splice.call(a,c,1);return d}
function gb(a){return Array.prototype.concat.apply([],arguments)}
function hb(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function ib(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Ra(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function ob(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;function pb(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function qb(a){var b=rb,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function sb(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function tb(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();var b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=tb(a[c]);return b}
var ub="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function vb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<ub.length;f++)c=ub[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var wb;var xb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]},yb=/&/g,zb=/</g,Ab=/>/g,Bb=/"/g,Cb=/'/g,Db=/\x00/g,Eb=/[\x00&<>"']/;
function Fb(a,b){return a<b?-1:a>b?1:0}
;var F;a:{var Gb=y.navigator;if(Gb){var Hb=Gb.userAgent;if(Hb){F=Hb;break a}}F=""}function G(a){return-1!=F.indexOf(a)}
;function Ib(){}
;function Jb(a){Jb[" "](a);return a}
Jb[" "]=Qa;var Kb=G("Opera"),Lb=G("Trident")||G("MSIE"),Mb=G("Edge"),Nb=G("Gecko")&&!(-1!=F.toLowerCase().indexOf("webkit")&&!G("Edge"))&&!(G("Trident")||G("MSIE"))&&!G("Edge"),Ob=-1!=F.toLowerCase().indexOf("webkit")&&!G("Edge");function Pb(){var a=y.document;return a?a.documentMode:void 0}
var Qb;a:{var Rb="",Sb=function(){var a=F;if(Nb)return/rv:([^\);]+)(\)|;)/.exec(a);if(Mb)return/Edge\/([\d\.]+)/.exec(a);if(Lb)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Ob)return/WebKit\/(\S+)/.exec(a);if(Kb)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
Sb&&(Rb=Sb?Sb[1]:"");if(Lb){var Tb=Pb();if(null!=Tb&&Tb>parseFloat(Rb)){Qb=String(Tb);break a}}Qb=Rb}var Ub=Qb,Vb={},dc;if(y.document&&Lb){var ec=Pb();dc=ec?ec:parseInt(Ub,10)||void 0}else dc=void 0;var fc=dc;var gc=G("iPhone")&&!G("iPod")&&!G("iPad")||G("iPod"),hc=G("iPad");var ic={},jc=null;var H=window;function kc(a){var b=z("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||y.$googDebugFname||b}catch(g){e="Not available",c=!0}b=lc(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,mc[c])c=mc[c];else{c=String(c);if(!mc[c]){var f=/function\s+([^\(]+)/m.exec(c);mc[c]=f?f[1]:"[Anonymous]"}c=mc[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}a.stack=
b;return a}
function lc(a,b){b||(b={});b[nc(a)]=!0;var c=a.stack||"",d=a.La;d&&!b[nc(d)]&&(c+="\nCaused by: ",d.stack&&0==d.stack.indexOf(d.toString())||(c+="string"===typeof d?d:d.message+"\n"),c+=lc(d,b));return c}
function nc(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var mc={};function oc(a){this.f=a||{cookie:""}}
n=oc.prototype;n.isEnabled=function(){return navigator.cookieEnabled};
n.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.Sa;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.Y}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);this.f.cookie=a+"="+b+(f?";domain="+f:"")+(g?";path="+g:"")+(0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*h)).toUTCString())+(d?";secure":"")+(null!=e?";samesite="+e:"")};
n.get=function(a,b){for(var c=a+"=",d=(this.f.cookie||"").split(";"),e=0,f;e<d.length;e++){f=xb(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
n.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{Y:0,path:b,domain:c});return d};
n.isEmpty=function(){return!this.f.cookie};
n.clear=function(){for(var a=(this.f.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=xb(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var pc=new oc("undefined"==typeof document?null:document);function qc(a,b){this.width=a;this.height=b}
n=qc.prototype;n.clone=function(){return new qc(this.width,this.height)};
n.aspectRatio=function(){return this.width/this.height};
n.isEmpty=function(){return!(this.width*this.height)};
n.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
n.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
n.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function rc(a,b){var c,d;var e=document;e=b||e;if(e.querySelectorAll&&e.querySelector&&a)return e.querySelectorAll(a?"."+a:"");if(a&&e.getElementsByClassName){var f=e.getElementsByClassName(a);return f}f=e.getElementsByTagName("*");if(a){var g={};for(c=d=0;e=f[c];c++){var h=e.className,k;if(k="function"==typeof h.split)k=0<=cb(h.split(/\s+/),a);k&&(g[d++]=e)}g.length=d;return g}return f}
function sc(){var a=document;var b="IFRAME";"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)}
function tc(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;var uc=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function vc(a){return a?decodeURI(a):a}
function I(a){return vc(a.match(uc)[3]||null)}
function wc(a){var b=a.match(uc);a=b[1];var c=b[2],d=b[3];b=b[4];var e="";a&&(e+=a+":");d&&(e+="//",c&&(e+=c+"@"),e+=d,b&&(e+=":"+b));return e}
function xc(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)xc(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function yc(a){var b=[],c;for(c in a)xc(c,a[c],b);return b.join("&")}
var zc=/#|$/;function Ac(a){var b=Bc;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a.call(void 0,b[c],c,b)}
function Cc(){var a=[];Ac(function(b){a.push(b)});
return a}
var Bc={xa:"allow-forms",ya:"allow-modals",za:"allow-orientation-lock",Aa:"allow-pointer-lock",Ba:"allow-popups",Ca:"allow-popups-to-escape-sandbox",Da:"allow-presentation",Ea:"allow-same-origin",Fa:"allow-scripts",Ga:"allow-top-navigation",Ha:"allow-top-navigation-by-user-activation"},Dc=ob(function(){return Cc()});
function Ec(){var a=sc(),b={};D(Dc(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
;function Fc(){this.h=this.h;this.i=this.i}
Fc.prototype.h=!1;Fc.prototype.dispose=function(){this.h||(this.h=!0,this.H())};
Fc.prototype.H=function(){if(this.i)for(;this.i.length;)this.i.shift()()};var Gc={};function Hc(){}
function Ic(a,b){if(b!==Gc)throw Error("Bad secret");this.f=a}
ra(Ic,Hc);Ic.prototype.toString=function(){return this.f};new Ic("about:blank",Gc);new Ic("about:invalid#zTSz",Gc);var Jc=(new Date).getTime();function Kc(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));a=a.substring(0,a.indexOf("://"));if("http"!==a&&"https"!==a&&"chrome-extension"!==a&&"moz-extension"!==a&&"file"!==a&&"android-app"!==a&&"chrome-search"!==a&&"chrome-untrusted"!==a&&"chrome"!==a&&"app"!==a&&"devtools"!==a)throw Error("Invalid URI scheme in origin: "+
a);c="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===a&&"80"!==e||"https"===a&&"443"!==e)c=":"+e}return a+"://"+b+c}
;function Lc(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;m=l=0}
function b(p){for(var r=g,q=0;64>q;q+=4)r[q/4]=p[q]<<24|p[q+1]<<16|p[q+2]<<8|p[q+3];for(q=16;80>q;q++)p=r[q-3]^r[q-8]^r[q-14]^r[q-16],r[q]=(p<<1|p>>>31)&4294967295;p=e[0];var v=e[1],w=e[2],E=e[3],Ta=e[4];for(q=0;80>q;q++){if(40>q)if(20>q){var ha=E^v&(w^E);var Da=1518500249}else ha=v^w^E,Da=1859775393;else 60>q?(ha=v&w|E&(v|w),Da=2400959708):(ha=v^w^E,Da=3395469782);ha=((p<<5|p>>>27)&4294967295)+ha+Ta+Da+r[q]&4294967295;Ta=E;E=w;w=(v<<30|v>>>2)&4294967295;v=p;p=ha}e[0]=e[0]+p&4294967295;e[1]=e[1]+
v&4294967295;e[2]=e[2]+w&4294967295;e[3]=e[3]+E&4294967295;e[4]=e[4]+Ta&4294967295}
function c(p,r){if("string"===typeof p){p=unescape(encodeURIComponent(p));for(var q=[],v=0,w=p.length;v<w;++v)q.push(p.charCodeAt(v));p=q}r||(r=p.length);q=0;if(0==l)for(;q+64<r;)b(p.slice(q,q+64)),q+=64,m+=64;for(;q<r;)if(f[l++]=p[q++],m++,64==l)for(l=0,b(f);q+64<r;)b(p.slice(q,q+64)),q+=64,m+=64}
function d(){var p=[],r=8*m;56>l?c(h,56-l):c(h,64-(l-56));for(var q=63;56<=q;q--)f[q]=r&255,r>>>=8;b(f);for(q=r=0;5>q;q++)for(var v=24;0<=v;v-=8)p[r++]=e[q]>>v&255;return p}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var l,m;a();return{reset:a,update:c,digest:d,ka:function(){for(var p=d(),r="",q=0;q<p.length;q++)r+="0123456789ABCDEF".charAt(Math.floor(p[q]/16))+"0123456789ABCDEF".charAt(p[q]%16);return r}}}
;function Mc(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],D(d,function(h){e.push(h)}),Nc(e.join(" "));
var f=[],g=[];D(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];D(d,function(h){e.push(h)});
a=Nc(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function Nc(a){var b=Lc();b.update(a);return b.ka().toLowerCase()}
;function Oc(a){var b=Kc(String(y.location.href)),c;(c=y.__SAPISID||y.__APISID||y.__OVERRIDE_SID)?c=!0:(c=new oc(document),c=c.get("SAPISID")||c.get("APISID")||c.get("__Secure-3PAPISID")||c.get("SID"),c=!!c);if(c&&(c=(b=0==b.indexOf("https:")||0==b.indexOf("chrome-extension:")||0==b.indexOf("moz-extension:"))?y.__SAPISID:y.__APISID,c||(c=new oc(document),c=c.get(b?"SAPISID":"APISID")||c.get("__Secure-3PAPISID")),c)){b=b?"SAPISIDHASH":"APISIDHASH";var d=String(y.location.href);return d&&c&&b?[b,Mc(Kc(d),
c,a||null)].join(" "):null}return null}
;function Pc(){this.g=[];this.f=-1}
Pc.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&0===a%1&&this.g[a]!=b&&(this.g[a]=b,this.f=-1)};
Pc.prototype.get=function(a){return!!this.g[a]};
function Qc(a){-1==a.f&&(a.f=db(a.g,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.f}
;function Rc(a,b){this.h=a;this.i=b;this.g=0;this.f=null}
Rc.prototype.get=function(){if(0<this.g){this.g--;var a=this.f;this.f=a.next;a.next=null}else a=this.h();return a};
function Sc(a,b){a.i(b);100>a.g&&(a.g++,b.next=a.f,a.f=b)}
;function Tc(a){y.setTimeout(function(){throw a;},0)}
var Uc;function Vc(){var a=y.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!G("Presto")&&(a=function(){var e=sc();e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=Ya(function(k){if(("*"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!G("Trident")&&!G("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.W;c.W=null;e()}};
return function(e){d.next={W:e};d=d.next;b.port2.postMessage(0)}}return function(e){y.setTimeout(e,0)}}
;function Wc(){this.g=this.f=null}
var Yc=new Rc(function(){return new Xc},function(a){a.reset()});
Wc.prototype.add=function(a,b){var c=Yc.get();c.set(a,b);this.g?this.g.next=c:this.f=c;this.g=c};
Wc.prototype.remove=function(){var a=null;this.f&&(a=this.f,this.f=this.f.next,this.f||(this.g=null),a.next=null);return a};
function Xc(){this.next=this.scope=this.f=null}
Xc.prototype.set=function(a,b){this.f=a;this.scope=b;this.next=null};
Xc.prototype.reset=function(){this.next=this.scope=this.f=null};function Zc(a,b){$c||ad();bd||($c(),bd=!0);cd.add(a,b)}
var $c;function ad(){if(y.Promise&&y.Promise.resolve){var a=y.Promise.resolve(void 0);$c=function(){a.then(dd)}}else $c=function(){var b=dd;
"function"!==typeof y.setImmediate||y.Window&&y.Window.prototype&&!G("Edge")&&y.Window.prototype.setImmediate==y.setImmediate?(Uc||(Uc=Vc()),Uc(b)):y.setImmediate(b)}}
var bd=!1,cd=new Wc;function dd(){for(var a;a=cd.remove();){try{a.f.call(a.scope)}catch(b){Tc(b)}Sc(Yc,a)}bd=!1}
;function ed(){this.g=-1}
;function fd(){this.g=64;this.f=[];this.l=[];this.m=[];this.i=[];this.i[0]=128;for(var a=1;a<this.g;++a)this.i[a]=0;this.j=this.h=0;this.reset()}
C(fd,ed);fd.prototype.reset=function(){this.f[0]=1732584193;this.f[1]=4023233417;this.f[2]=2562383102;this.f[3]=271733878;this.f[4]=3285377520;this.j=this.h=0};
function Ad(a,b,c){c||(c=0);var d=a.m;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.f[0];c=a.f[1];var g=a.f[2],h=a.f[3],k=a.f[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var l=1518500249}else f=c^g^h,l=1859775393;else 60>e?(f=c&g|h&(c|g),l=2400959708):
(f=c^g^h,l=3395469782);f=(b<<5|b>>>27)+f+k+l+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.f[0]=a.f[0]+b&4294967295;a.f[1]=a.f[1]+c&4294967295;a.f[2]=a.f[2]+g&4294967295;a.f[3]=a.f[3]+h&4294967295;a.f[4]=a.f[4]+k&4294967295}
fd.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.g,d=0,e=this.l,f=this.h;d<b;){if(0==f)for(;d<=c;)Ad(this,a,d),d+=this.g;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.g){Ad(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.g){Ad(this,e);f=0;break}}this.h=f;this.j+=b}};
fd.prototype.digest=function(){var a=[],b=8*this.j;56>this.h?this.update(this.i,56-this.h):this.update(this.i,this.g-(this.h-56));for(var c=this.g-1;56<=c;c--)this.l[c]=b&255,b/=256;Ad(this,this.l);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.f[c]>>d&255,++b;return a};var Bd="StopIteration"in y?y.StopIteration:{message:"StopIteration",stack:""};function Cd(){}
Cd.prototype.next=function(){throw Bd;};
Cd.prototype.B=function(){return this};
function Dd(a){if(a instanceof Cd)return a;if("function"==typeof a.B)return a.B(!1);if(Ra(a)){var b=0,c=new Cd;c.next=function(){for(;;){if(b>=a.length)throw Bd;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function Ed(a,b){if(Ra(a))try{D(a,b,void 0)}catch(c){if(c!==Bd)throw c;}else{a=Dd(a);try{for(;;)b.call(void 0,a.next(),void 0,a)}catch(c){if(c!==Bd)throw c;}}}
function Fd(a){if(Ra(a))return hb(a);a=Dd(a);var b=[];Ed(a,function(c){b.push(c)});
return b}
;function Gd(a,b){this.h={};this.f=[];this.i=this.g=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof Gd)for(c=Hd(a),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
function Hd(a){Id(a);return a.f.concat()}
n=Gd.prototype;n.equals=function(a,b){if(this===a)return!0;if(this.g!=a.g)return!1;var c=b||Jd;Id(this);for(var d,e=0;d=this.f[e];e++)if(!c(this.get(d),a.get(d)))return!1;return!0};
function Jd(a,b){return a===b}
n.isEmpty=function(){return 0==this.g};
n.clear=function(){this.h={};this.i=this.g=this.f.length=0};
n.remove=function(a){return Object.prototype.hasOwnProperty.call(this.h,a)?(delete this.h[a],this.g--,this.i++,this.f.length>2*this.g&&Id(this),!0):!1};
function Id(a){if(a.g!=a.f.length){for(var b=0,c=0;b<a.f.length;){var d=a.f[b];Object.prototype.hasOwnProperty.call(a.h,d)&&(a.f[c++]=d);b++}a.f.length=c}if(a.g!=a.f.length){var e={};for(c=b=0;b<a.f.length;)d=a.f[b],Object.prototype.hasOwnProperty.call(e,d)||(a.f[c++]=d,e[d]=1),b++;a.f.length=c}}
n.get=function(a,b){return Object.prototype.hasOwnProperty.call(this.h,a)?this.h[a]:b};
n.set=function(a,b){Object.prototype.hasOwnProperty.call(this.h,a)||(this.g++,this.f.push(a),this.i++);this.h[a]=b};
n.forEach=function(a,b){for(var c=Hd(this),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
n.clone=function(){return new Gd(this)};
n.B=function(a){Id(this);var b=0,c=this.i,d=this,e=new Cd;e.next=function(){if(c!=d.i)throw Error("The map has changed since the iterator was created");if(b>=d.f.length)throw Bd;var f=d.f[b++];return a?f:d.h[f]};
return e};var Kd=!Lb||9<=Number(fc),Ld;
if(Ld=Lb){var Md;if(Object.prototype.hasOwnProperty.call(Vb,"9"))Md=Vb["9"];else{for(var Nd=0,Od=xb(String(Ub)).split("."),Pd=xb("9").split("."),Qd=Math.max(Od.length,Pd.length),Rd=0;0==Nd&&Rd<Qd;Rd++){var Sd=Od[Rd]||"",Td=Pd[Rd]||"";do{var Ud=/(\d*)(\D*)(.*)/.exec(Sd)||["","","",""],Vd=/(\d*)(\D*)(.*)/.exec(Td)||["","","",""];if(0==Ud[0].length&&0==Vd[0].length)break;Nd=Fb(0==Ud[1].length?0:parseInt(Ud[1],10),0==Vd[1].length?0:parseInt(Vd[1],10))||Fb(0==Ud[2].length,0==Vd[2].length)||Fb(Ud[2],Vd[2]);
Sd=Ud[3];Td=Vd[3]}while(0==Nd)}Md=Vb["9"]=0<=Nd}Ld=!Md}var Wd=Ld,Xd=function(){if(!y.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{y.addEventListener("test",Qa,b),y.removeEventListener("test",Qa,b)}catch(c){}return a}();function Yd(a,b){this.type=a;this.f=this.target=b;this.defaultPrevented=this.g=!1}
Yd.prototype.stopPropagation=function(){this.g=!0};
Yd.prototype.preventDefault=function(){this.defaultPrevented=!0};function Zd(a,b){Yd.call(this,a?a.type:"");this.relatedTarget=this.f=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.h=null;a&&this.init(a,b)}
C(Zd,Yd);var $d={2:"touch",3:"pen",4:"mouse"};
Zd.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.f=b;var e=a.relatedTarget;if(e){if(Nb){a:{try{Jb(e.nodeName);var f=!0;break a}catch(g){}f=!1}f||(e=null)}}else"mouseover"==c?e=a.fromElement:"mouseout"==c&&(e=a.toElement);this.relatedTarget=e;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||
0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:$d[a.pointerType]||"";this.state=a.state;
this.h=a;a.defaultPrevented&&this.preventDefault()};
Zd.prototype.stopPropagation=function(){Zd.A.stopPropagation.call(this);this.h.stopPropagation?this.h.stopPropagation():this.h.cancelBubble=!0};
Zd.prototype.preventDefault=function(){Zd.A.preventDefault.call(this);var a=this.h;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,Wd)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};var ae="closure_listenable_"+(1E6*Math.random()|0),be=0;function ce(a,b,c,d,e){this.listener=a;this.f=null;this.src=b;this.type=c;this.capture=!!d;this.L=e;this.key=++be;this.F=this.I=!1}
function de(a){a.F=!0;a.listener=null;a.f=null;a.src=null;a.L=null}
;function ee(a){this.src=a;this.listeners={};this.f=0}
ee.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.f++);var g=fe(a,b,d,e);-1<g?(b=a[g],c||(b.I=!1)):(b=new ce(b,this.src,f,!!d,e),b.I=c,a.push(b));return b};
ee.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=fe(e,b,c,d);return-1<b?(de(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.listeners[a],this.f--),!0):!1};
function ge(a,b){var c=b.type;c in a.listeners&&fb(a.listeners[c],b)&&(de(b),0==a.listeners[c].length&&(delete a.listeners[c],a.f--))}
function fe(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.F&&f.listener==b&&f.capture==!!c&&f.L==d)return e}return-1}
;var he="closure_lm_"+(1E6*Math.random()|0),ie={},je=0;function ke(a,b,c,d,e){if(d&&d.once)le(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)ke(a,b[f],c,d,e);else c=me(c),a&&a[ae]?a.f.add(String(b),c,!1,A(d)?!!d.capture:!!d,e):ne(a,b,c,!1,d,e)}
function ne(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=A(e)?!!e.capture:!!e,h=oe(a);h||(a[he]=h=new ee(a));c=h.add(b,c,d,g,f);if(!c.f){d=pe();c.f=d;d.src=a;d.listener=c;if(a.addEventListener)Xd||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(qe(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");je++}}
function pe(){var a=re,b=Kd?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);
if(!c)return c};
return b}
function le(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)le(a,b[f],c,d,e);else c=me(c),a&&a[ae]?a.f.add(String(b),c,!0,A(d)?!!d.capture:!!d,e):ne(a,b,c,!0,d,e)}
function se(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)se(a,b[f],c,d,e);else(d=A(d)?!!d.capture:!!d,c=me(c),a&&a[ae])?a.f.remove(String(b),c,d,e):a&&(a=oe(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=fe(b,c,d,e)),(c=-1<a?b[a]:null)&&te(c))}
function te(a){if("number"!==typeof a&&a&&!a.F){var b=a.src;if(b&&b[ae])ge(b.f,a);else{var c=a.type,d=a.f;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(qe(c),d):b.addListener&&b.removeListener&&b.removeListener(d);je--;(c=oe(b))?(ge(c,a),0==c.f&&(c.src=null,b[he]=null)):de(a)}}}
function qe(a){return a in ie?ie[a]:ie[a]="on"+a}
function ue(a,b,c,d){var e=!0;if(a=oe(a))if(b=a.listeners[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.capture==c&&!f.F&&(f=ve(f,d),e=e&&!1!==f)}return e}
function ve(a,b){var c=a.listener,d=a.L||a.src;a.I&&te(a);return c.call(d,b)}
function re(a,b){if(a.F)return!0;if(!Kd){var c=b||z("window.event"),d=new Zd(c,this),e=!0;if(!(0>c.keyCode||void 0!=c.returnValue)){a:{var f=!1;if(0==c.keyCode)try{c.keyCode=-1;break a}catch(k){f=!0}if(f||void 0==c.returnValue)c.returnValue=!0}c=[];for(f=d.f;f;f=f.parentNode)c.push(f);f=a.type;for(var g=c.length-1;!d.g&&0<=g;g--){d.f=c[g];var h=ue(c[g],f,!0,d);e=e&&h}for(g=0;!d.g&&g<c.length;g++)d.f=c[g],h=ue(c[g],f,!1,d),e=e&&h}return e}return ve(a,new Zd(b,this))}
function oe(a){a=a[he];return a instanceof ee?a:null}
var we="__closure_events_fn_"+(1E9*Math.random()>>>0);function me(a){if("function"===typeof a)return a;a[we]||(a[we]=function(b){return a.handleEvent(b)});
return a[we]}
;function J(){Fc.call(this);this.f=new ee(this);this.l=this;this.j=null}
C(J,Fc);J.prototype[ae]=!0;J.prototype.addEventListener=function(a,b,c,d){ke(this,a,b,c,d)};
J.prototype.removeEventListener=function(a,b,c,d){se(this,a,b,c,d)};
J.prototype.dispatchEvent=function(a){var b=this.j;if(b){var c=[];for(var d=1;b;b=b.j)c.push(b),++d}b=this.l;d=a.type||a;if("string"===typeof a)a=new Yd(a,b);else if(a instanceof Yd)a.target=a.target||b;else{var e=a;a=new Yd(d,b);vb(a,e)}e=!0;if(c)for(var f=c.length-1;!a.g&&0<=f;f--){var g=a.f=c[f];e=xe(g,d,!0,a)&&e}a.g||(g=a.f=b,e=xe(g,d,!0,a)&&e,a.g||(e=xe(g,d,!1,a)&&e));if(c)for(f=0;!a.g&&f<c.length;f++)g=a.f=c[f],e=xe(g,d,!1,a)&&e;return e};
J.prototype.H=function(){J.A.H.call(this);if(this.f){var a=this.f,b=0,c;for(c in a.listeners){for(var d=a.listeners[c],e=0;e<d.length;e++)++b,de(d[e]);delete a.listeners[c];a.f--}}this.j=null};
function xe(a,b,c,d){b=a.f.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.F&&g.capture==c){var h=g.listener,k=g.L||g.src;g.I&&ge(a.f,g);e=!1!==h.call(k,d)&&e}}return e&&!d.defaultPrevented}
;var ye=y.JSON.stringify;function K(a){this.f=0;this.m=void 0;this.i=this.g=this.h=null;this.j=this.l=!1;if(a!=Qa)try{var b=this;a.call(void 0,function(c){ze(b,2,c)},function(c){ze(b,3,c)})}catch(c){ze(this,3,c)}}
function Ae(){this.next=this.context=this.onRejected=this.g=this.f=null;this.h=!1}
Ae.prototype.reset=function(){this.context=this.onRejected=this.g=this.f=null;this.h=!1};
var Be=new Rc(function(){return new Ae},function(a){a.reset()});
function Ce(a,b,c){var d=Be.get();d.g=a;d.onRejected=b;d.context=c;return d}
function De(a){if(a instanceof K)return a;var b=new K(Qa);ze(b,2,a);return b}
function Ee(a,b,c){Fe(a,b,c,null)||Zc(Za(b,a))}
function Ge(a){return new K(function(b,c){var d=a.length,e=[];if(d)for(var f=function(l,m){d--;e[l]=m;0==d&&b(e)},g=function(l){c(l)},h=0,k;h<a.length;h++)k=a[h],Ee(k,Za(f,h),g);
else b(e)})}
K.prototype.then=function(a,b,c){return He(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};
K.prototype.$goog_Thenable=!0;function Ie(a,b){return He(a,null,b,void 0)}
K.prototype.cancel=function(a){if(0==this.f){var b=new Je(a);Zc(function(){Ke(this,b)},this)}};
function Ke(a,b){if(0==a.f)if(a.h){var c=a.h;if(c.g){for(var d=0,e=null,f=null,g=c.g;g&&(g.h||(d++,g.f==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.f&&1==d?Ke(c,b):(f?(d=f,d.next==c.i&&(c.i=d),d.next=d.next.next):Le(c),Me(c,e,3,b)))}a.h=null}else ze(a,3,b)}
function Ne(a,b){a.g||2!=a.f&&3!=a.f||Oe(a);a.i?a.i.next=b:a.g=b;a.i=b}
function He(a,b,c,d){var e=Ce(null,null,null);e.f=new K(function(f,g){e.g=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.onRejected=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof Je?g(h):f(k)}catch(l){g(l)}}:g});
e.f.h=a;Ne(a,e);return e.f}
K.prototype.v=function(a){this.f=0;ze(this,2,a)};
K.prototype.G=function(a){this.f=0;ze(this,3,a)};
function ze(a,b,c){0==a.f&&(a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself")),a.f=1,Fe(c,a.v,a.G,a)||(a.m=c,a.f=b,a.h=null,Oe(a),3!=b||c instanceof Je||Pe(a,c)))}
function Fe(a,b,c,d){if(a instanceof K)return Ne(a,Ce(b||Qa,c||null,d)),!0;if(a)try{var e=!!a.$goog_Thenable}catch(g){e=!1}else e=!1;if(e)return a.then(b,c,d),!0;if(A(a))try{var f=a.then;if("function"===typeof f)return Qe(a,f,b,c,d),!0}catch(g){return c.call(d,g),!0}return!1}
function Qe(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function Oe(a){a.l||(a.l=!0,Zc(a.o,a))}
function Le(a){var b=null;a.g&&(b=a.g,a.g=b.next,b.next=null);a.g||(a.i=null);return b}
K.prototype.o=function(){for(var a;a=Le(this);)Me(this,a,this.f,this.m);this.l=!1};
function Me(a,b,c,d){if(3==c&&b.onRejected&&!b.h)for(;a&&a.j;a=a.h)a.j=!1;if(b.f)b.f.h=null,Re(b,c,d);else try{b.h?b.g.call(b.context):Re(b,c,d)}catch(e){Se.call(null,e)}Sc(Be,b)}
function Re(a,b,c){2==b?a.g.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)}
function Pe(a,b){a.j=!0;Zc(function(){a.j&&Se.call(null,b)})}
var Se=Tc;function Je(a){bb.call(this,a)}
C(Je,bb);Je.prototype.name="cancel";function M(a){Fc.call(this);this.m=1;this.j=[];this.l=0;this.f=[];this.g={};this.o=!!a}
C(M,Fc);n=M.prototype;n.subscribe=function(a,b,c){var d=this.g[a];d||(d=this.g[a]=[]);var e=this.m;this.f[e]=a;this.f[e+1]=b;this.f[e+2]=c;this.m=e+3;d.push(e);return e};
function Te(a,b,c){var d=Ue;if(a=d.g[a]){var e=d.f;(a=eb(a,function(f){return e[f+1]==b&&e[f+2]==c}))&&d.O(a)}}
n.O=function(a){var b=this.f[a];if(b){var c=this.g[b];0!=this.l?(this.j.push(a),this.f[a+1]=Qa):(c&&fb(c,a),delete this.f[a],delete this.f[a+1],delete this.f[a+2])}return!!b};
n.K=function(a,b){var c=this.g[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.o)for(e=0;e<c.length;e++){var g=c[e];Ve(this.f[g+1],this.f[g+2],d)}else{this.l++;try{for(e=0,f=c.length;e<f;e++)g=c[e],this.f[g+1].apply(this.f[g+2],d)}finally{if(this.l--,0<this.j.length&&0==this.l)for(;c=this.j.pop();)this.O(c)}}return 0!=e}return!1};
function Ve(a,b,c){Zc(function(){a.apply(b,c)})}
n.clear=function(a){if(a){var b=this.g[a];b&&(D(b,this.O,this),delete this.g[a])}else this.f.length=0,this.g={}};
n.H=function(){M.A.H.call(this);this.clear();this.j.length=0};function We(a){this.f=a}
We.prototype.set=function(a,b){void 0===b?this.f.remove(a):this.f.set(a,ye(b))};
We.prototype.get=function(a){try{var b=this.f.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
We.prototype.remove=function(a){this.f.remove(a)};function Xe(a){this.f=a}
C(Xe,We);function Ye(a){this.data=a}
function Ze(a){return void 0===a||a instanceof Ye?a:new Ye(a)}
Xe.prototype.set=function(a,b){Xe.A.set.call(this,a,Ze(b))};
Xe.prototype.g=function(a){a=Xe.A.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
Xe.prototype.get=function(a){if(a=this.g(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function $e(a){this.f=a}
C($e,Xe);$e.prototype.set=function(a,b,c){if(b=Ze(b)){if(c){if(c<Date.now()){$e.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Date.now()}$e.A.set.call(this,a,b)};
$e.prototype.g=function(a){var b=$e.A.g.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Date.now()||c&&c>Date.now())$e.prototype.remove.call(this,a);else return b}};function af(){}
;function bf(){}
C(bf,af);bf.prototype.clear=function(){var a=Fd(this.B(!0)),b=this;D(a,function(c){b.remove(c)})};function cf(a){this.f=a}
C(cf,bf);n=cf.prototype;n.isAvailable=function(){if(!this.f)return!1;try{return this.f.setItem("__sak","1"),this.f.removeItem("__sak"),!0}catch(a){return!1}};
n.set=function(a,b){try{this.f.setItem(a,b)}catch(c){if(0==this.f.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
n.get=function(a){a=this.f.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
n.remove=function(a){this.f.removeItem(a)};
n.B=function(a){var b=0,c=this.f,d=new Cd;d.next=function(){if(b>=c.length)throw Bd;var e=c.key(b++);if(a)return e;e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
n.clear=function(){this.f.clear()};
n.key=function(a){return this.f.key(a)};function df(){var a=null;try{a=window.localStorage||null}catch(b){}this.f=a}
C(df,cf);function ef(a,b){this.g=a;this.f=null;if(Lb&&!(9<=Number(fc))){ff||(ff=new Gd);this.f=ff.get(a);this.f||(b?this.f=document.getElementById(b):(this.f=document.createElement("userdata"),this.f.addBehavior("#default#userData"),document.body.appendChild(this.f)),ff.set(a,this.f));try{this.f.load(this.g)}catch(c){this.f=null}}}
C(ef,bf);var gf={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},ff=null;function hf(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return gf[b]})}
n=ef.prototype;n.isAvailable=function(){return!!this.f};
n.set=function(a,b){this.f.setAttribute(hf(a),b);jf(this)};
n.get=function(a){a=this.f.getAttribute(hf(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
n.remove=function(a){this.f.removeAttribute(hf(a));jf(this)};
n.B=function(a){var b=0,c=this.f.XMLDocument.documentElement.attributes,d=new Cd;d.next=function(){if(b>=c.length)throw Bd;var e=c[b++];if(a)return decodeURIComponent(e.nodeName.replace(/\./g,"%")).substr(1);e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
n.clear=function(){for(var a=this.f.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);jf(this)};
function jf(a){try{a.f.save(a.g)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function kf(a,b){this.g=a;this.f=b+"::"}
C(kf,bf);kf.prototype.set=function(a,b){this.g.set(this.f+a,b)};
kf.prototype.get=function(a){return this.g.get(this.f+a)};
kf.prototype.remove=function(a){this.g.remove(this.f+a)};
kf.prototype.B=function(a){var b=this.g.B(!0),c=this,d=new Cd;d.next=function(){for(var e=b.next();e.substr(0,c.f.length)!=c.f;)e=b.next();return a?e.substr(c.f.length):c.g.get(e)};
return d};var lf=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};B("yt.config_",lf);function mf(a){var b=arguments;1<b.length?lf[b[0]]=b[1]:1===b.length&&Object.assign(lf,b[0])}
function N(a,b){return a in lf?lf[a]:b}
;var nf=[];function of(a){nf.forEach(function(b){return b(a)})}
function pf(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){qf(b),of(b)}}:a}
function qf(a){var b=z("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0):(b=N("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0]),mf("ERRORS",b))}
function rf(a){var b=z("yt.logging.errors.log");b?b(a,"WARNING",void 0,void 0,void 0):(b=N("ERRORS",[]),b.push([a,"WARNING",void 0,void 0,void 0]),mf("ERRORS",b))}
;var sf=0;B("ytDomDomGetNextId",z("ytDomDomGetNextId")||function(){return++sf});var tf={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function uf(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in tf||(this[b]=a[b]);var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;if(d)try{d=d.nodeName?d:null}catch(e){d=null}else"mouseover"==
this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey}}catch(e){}}
uf.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
uf.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
uf.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var rb=y.ytEventsEventsListeners||{};B("ytEventsEventsListeners",rb);var vf=y.ytEventsEventsCounter||{count:0};B("ytEventsEventsCounter",vf);
function wf(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return qb(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=A(e[4])&&A(d)&&sb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
function xf(a){a&&("string"==typeof a&&(a=[a]),D(a,function(b){if(b in rb){var c=rb[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?yf()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete rb[b]}}))}
var yf=ob(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function zf(a,b,c){var d=void 0===d?{}:d;if(a&&(a.addEventListener||a.attachEvent)){var e=wf(a,b,c,d);if(!e){e=++vf.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new uf(h);if(!tc(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new uf(h);
h.currentTarget=a;return c.call(a,h)};
g=pf(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),yf()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);rb[e]=[a,b,c,g,d]}}}
;function Af(a,b){"function"===typeof a&&(a=pf(a));return window.setTimeout(a,b)}
function Bf(a){"function"===typeof a&&(a=pf(a));return window.setInterval(a,250)}
;var Cf={q:!0,search_query:!0};function Df(a){var b=[];pb(a,function(c,d){var e=encodeURIComponent(String(d)),f;Array.isArray(c)?f=c:f=[c];D(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function Ef(a){"?"==a.charAt(0)&&(a=a.substr(1));for(var b=a.split("&"),c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(1==f.length&&f[0]||2==f.length)try{var g=decodeURIComponent((f[0]||"").replace(/\+/g," ")),h=decodeURIComponent((f[1]||"").replace(/\+/g," "));g in c?Array.isArray(c[g])?ib(c[g],h):c[g]=[c[g],h]:c[g]=h}catch(k){Cf.hasOwnProperty(f[0])||(k.args=[{key:f[0],value:f[1],query:a}],qf(k))}}return c}
function Ff(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=Ef(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);b=a;a=yc(e);a?(c=b.indexOf("#"),0>c&&(c=b.length),f=b.indexOf("?"),0>f||f>c?(f=c,e=""):e=b.substring(f+1,c),b=[b.substr(0,f),e,b.substr(c)],c=b[1],b[1]=a?c?c+"&"+a:a:c,a=b[0]+(b[1]?"?"+b[1]:"")+b[2]):a=b;return a+d}
;var Gf={};function Hf(a){return Gf[a]||(Gf[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;var If={},ng=[],Ue=new M,og={};function pg(){for(var a=u(ng),b=a.next();!b.done;b=a.next())b=b.value,b()}
function qg(a,b){b||(b=document);var c=hb(b.getElementsByTagName("yt:"+a));var d="yt-"+a;var e=b||document;d=e.querySelectorAll&&e.querySelector?e.querySelectorAll("."+d):rc(d,b);d=hb(d);return gb(c,d)}
function O(a,b){var c;"yt:"==a.tagName.toLowerCase().substr(0,3)?c=a.getAttribute(b):c=a?a.dataset?a.dataset[Hf(b)]:a.getAttribute("data-"+b):null;return c}
function rg(a,b){Ue.K.apply(Ue,arguments)}
;function sg(a){this.g=a||{};this.h=this.f=!1;a=document.getElementById("www-widgetapi-script");if(this.f=!!("https:"==document.location.protocol||a&&0==a.src.indexOf("https:"))){a=[this.g,window.YTConfig||{}];for(var b=0;b<a.length;b++)a[b].host&&(a[b].host=a[b].host.replace("http://","https://"))}}
function Q(a,b){for(var c=[a.g,window.YTConfig||{}],d=0;d<c.length;d++){var e=c[d][b];if(void 0!=e)return e}return null}
function tg(a,b,c){ug||(ug={},zf(window,"message",Ya(a.i,a)));ug[c]=b}
sg.prototype.i=function(a){if(a.origin==Q(this,"host")||a.origin==Q(this,"host").replace(/^http:/,"https:")){try{var b=JSON.parse(a.data)}catch(c){return}this.h=!0;this.f||0!=a.origin.indexOf("https:")||(this.f=!0);if(a=ug[b.id])a.o=!0,a.o&&(D(a.m,a.V,a),a.m.length=0),a.ea(b)}};
var ug=null;function R(a){a=vg(a);return"string"===typeof a&&"false"===a?!1:!!a}
function wg(a,b){var c=vg(a);return void 0===c&&void 0!==b?b:Number(c||0)}
function vg(a){var b=N("EXPERIMENTS_FORCED_FLAGS",{});return void 0!==b[a]?b[a]:N("EXPERIMENT_FLAGS",{})[a]}
;function xg(){}
function yg(a){var b=5E3;isNaN(b)&&(b=void 0);var c=z("yt.scheduler.instance.addJob");c?c(a,0,b):void 0===b?a():Af(a,b||0)}
;function zg(){}
ra(zg,xg);zg.prototype.start=function(){var a=z("yt.scheduler.instance.start");a&&a()};
zg.f=void 0;zg.g=function(){zg.f||(zg.f=new zg)};
zg.g();var Ag=y.ytPubsubPubsubInstance||new M,Bg=y.ytPubsubPubsubSubscribedKeys||{},Cg=y.ytPubsubPubsubTopicToKeys||{},Dg=y.ytPubsubPubsubIsSynchronous||{};M.prototype.subscribe=M.prototype.subscribe;M.prototype.unsubscribeByKey=M.prototype.O;M.prototype.publish=M.prototype.K;M.prototype.clear=M.prototype.clear;B("ytPubsubPubsubInstance",Ag);B("ytPubsubPubsubTopicToKeys",Cg);B("ytPubsubPubsubIsSynchronous",Dg);B("ytPubsubPubsubSubscribedKeys",Bg);var S=window,T=S.ytcsi&&S.ytcsi.now?S.ytcsi.now:S.performance&&S.performance.timing&&S.performance.now&&S.performance.timing.navigationStart?function(){return S.performance.timing.navigationStart+S.performance.now()}:function(){return(new Date).getTime()};var Eg=wg("initial_gel_batch_timeout",1E3),Fg=Math.pow(2,16)-1,Gg=null,Hg=0,Ig=void 0,Jg=0,Kg=0,Lg=0,Mg=!0,Ng=y.ytLoggingTransportGELQueue_||new Map;B("ytLoggingTransportGELQueue_",Ng);var Og=y.ytLoggingTransportTokensToCttTargetIds_||{};B("ytLoggingTransportTokensToCttTargetIds_",Og);function Pg(a){a=void 0===a?!1:a;return new K(function(b){window.clearTimeout(Jg);window.clearTimeout(Kg);Kg=0;Ig&&Ig.isReady()?(Qg(b,a),Ng.clear()):(Rg(),b())})}
function Rg(){R("web_gel_timeout_cap")&&!Kg&&(Kg=Af(Pg,6E4));window.clearTimeout(Jg);var a=N("LOGGING_BATCH_TIMEOUT",wg("web_gel_debounce_ms",1E4));R("shorten_initial_gel_batch_timeout")&&Mg&&(a=Eg);Jg=Af(Pg,a)}
function Qg(a,b){var c=Ig;b=void 0===b?!1:b;for(var d=Math.round(T()),e=Ng.size,f=u(Ng),g=f.next();!g.done;g=f.next()){var h=u(g.value);g=h.next().value;var k=h.next().value;h=tb({context:Sg(c.f||Tg())});h.events=k;(k=Og[g])&&Ug(h,g,k);delete Og[g];Vg(h,d);Wg(c,"log_event",h,{retry:!0,onSuccess:function(){e--;e||a();Hg=Math.round(T()-d)},
onError:function(){e--;e||a()},
wa:b});Mg=!1}}
function Vg(a,b){a.requestTimeMs=String(b);R("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);var c=N("EVENT_ID",void 0);if(c){var d=N("BATCH_CLIENT_COUNTER",void 0)||0;!d&&R("web_client_counter_random_seed")&&(d=Math.floor(Math.random()*Fg/2));d++;d>Fg&&(d=1);mf("BATCH_CLIENT_COUNTER",d);c={serializedEventId:c,clientCounter:String(d)};a.serializedClientEventId=c;Gg&&Hg&&R("log_gel_rtt_web")&&(a.previousBatchInfo={serializedClientEventId:Gg,roundtripMs:String(Hg)});Gg=c;Hg=0}}
function Ug(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
;var Xg=y.ytLoggingGelSequenceIdObj_||{};B("ytLoggingGelSequenceIdObj_",Xg);function Yg(a){var b=Zg;a=void 0===a?z("yt.ads.biscotti.lastId_")||"":a;b=Object.assign($g(b),ah(b));b.ca_type="image";a&&(b.bid=a);return b}
function $g(a){var b={};b.dt=Jc;b.flash="0";a:{try{var c=a.f.top.location.href}catch(f){a=2;break a}a=c?c===a.g.location.href?0:1:2}b=(b.frm=a,b);b.u_tz=-(new Date).getTimezoneOffset();var d=void 0===d?H:d;try{var e=d.history.length}catch(f){e=0}b.u_his=e;b.u_java=!!H.navigator&&"unknown"!==typeof H.navigator.javaEnabled&&!!H.navigator.javaEnabled&&H.navigator.javaEnabled();H.screen&&(b.u_h=H.screen.height,b.u_w=H.screen.width,b.u_ah=H.screen.availHeight,b.u_aw=H.screen.availWidth,b.u_cd=H.screen.colorDepth);
H.navigator&&H.navigator.plugins&&(b.u_nplug=H.navigator.plugins.length);H.navigator&&H.navigator.mimeTypes&&(b.u_nmime=H.navigator.mimeTypes.length);return b}
function ah(a){var b=a.f;try{var c=b.screenX;var d=b.screenY}catch(p){}try{var e=b.outerWidth;var f=b.outerHeight}catch(p){}try{var g=b.innerWidth;var h=b.innerHeight}catch(p){}b=[b.screenLeft,b.screenTop,c,d,b.screen?b.screen.availWidth:void 0,b.screen?b.screen.availTop:void 0,e,f,g,h];c=a.f.top;try{var k=(c||window).document,l="CSS1Compat"==k.compatMode?k.documentElement:k.body;var m=(new qc(l.clientWidth,l.clientHeight)).round()}catch(p){m=new qc(-12245933,-12245933)}k=m;m={};l=new Pc;y.SVGElement&&
y.document.createElementNS&&l.set(0);c=Ec();c["allow-top-navigation-by-user-activation"]&&l.set(1);c["allow-popups-to-escape-sandbox"]&&l.set(2);y.crypto&&y.crypto.subtle&&l.set(3);y.TextDecoder&&y.TextEncoder&&l.set(4);l=Qc(l);m.bc=l;m.bih=k.height;m.biw=k.width;m.brdim=b.join();a=a.g;return m.vis={visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[a.visibilityState||a.webkitVisibilityState||a.mozVisibilityState||""]||0,m.wgl=!!H.WebGLRenderingContext,m}
var Zg=new function(){var a=window.document;this.f=window;this.g=a};
B("yt.ads_.signals_.getAdSignalsString",function(a){return Df(Yg(a))});var bh="XMLHttpRequest"in y?function(){return new XMLHttpRequest}:null;
function ch(){if(!bh)return null;var a=bh();return"open"in a?a:null}
;var dh={Authorization:"AUTHORIZATION","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},eh="app debugcss debugjs expflag force_ad_params force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address client_dev_root_url".split(" "),
fh=!1;
function gh(a,b){b=void 0===b?{}:b;if(!c)var c=window.location.href;var d=a.match(uc)[1]||null,e=I(a);d&&e?(d=c,c=a.match(uc),d=d.match(uc),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?I(c)==e&&(Number(c.match(uc)[4]||null)||null)==(Number(a.match(uc)[4]||null)||null):!0;d=R("web_ajax_ignore_global_headers_if_set");for(var f in dh)e=N(dh[f]),!e||!c&&I(a)||d&&void 0!==b[f]||(b[f]=e);if(c||!I(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());(c||!I(a))&&(f="undefined"!=typeof Intl?(new Intl.DateTimeFormat).resolvedOptions().timeZone:
null)&&(b["X-YouTube-Time-Zone"]=f);if(c||!I(a))b["X-YouTube-Ad-Signals"]=Df(Yg(void 0));return b}
function hh(a){var b=window.location.search,c=I(a),d=vc(a.match(uc)[5]||null);d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=Ef(b),f={};D(eh,function(g){e[g]&&(f[g]=e[g])});
return Ff(a,f||{},!1)}
function ih(a,b){if(window.fetch&&"XML"!=b.format){var c={method:b.method||"GET",credentials:"same-origin"};b.headers&&(c.headers=b.headers);a=jh(a,b);var d=kh(a,b);d&&(c.body=d);b.withCredentials&&(c.credentials="include");var e=!1,f;fetch(a,c).then(function(g){if(!e){e=!0;f&&window.clearTimeout(f);var h=g.ok,k=function(l){l=l||{};var m=b.context||y;h?b.onSuccess&&b.onSuccess.call(m,l,g):b.onError&&b.onError.call(m,l,g);b.T&&b.T.call(m,l,g)};
"JSON"==(b.format||"JSON")&&(h||400<=g.status&&500>g.status)?g.json().then(k,function(){k(null)}):k(null)}});
b.ba&&0<b.timeout&&(f=Af(function(){e||(e=!0,window.clearTimeout(f),b.ba.call(b.context||y))},b.timeout))}else lh(a,b)}
function lh(a,b){var c=b.format||"JSON";a=jh(a,b);var d=kh(a,b),e=!1,f=mh(a,function(k){if(!e){e=!0;h&&window.clearTimeout(h);a:switch(k&&"status"in k?k.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:var l=!0;break a;default:l=!1}var m=null,p=400<=k.status&&500>k.status,r=500<=k.status&&600>k.status;if(l||p||r)m=nh(a,c,k,b.Ma);if(l)a:if(k&&204==k.status)l=!0;else{switch(c){case "XML":l=0==parseInt(m&&m.return_code,10);break a;case "RAW":l=!0;break a}l=!!m}m=m||
{};p=b.context||y;l?b.onSuccess&&b.onSuccess.call(p,k,m):b.onError&&b.onError.call(p,k,m);b.T&&b.T.call(p,k,m)}},b.method,d,b.headers,b.responseType,b.withCredentials);
if(b.M&&0<b.timeout){var g=b.M;var h=Af(function(){e||(e=!0,f.abort(),window.clearTimeout(h),g.call(b.context||y,f))},b.timeout)}}
function jh(a,b){b.Qa&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=N("XSRF_FIELD_NAME",void 0),d=b.ua;d&&(d[c]&&delete d[c],a=Ff(a,d||{},!0));return a}
function kh(a,b){var c=N("XSRF_FIELD_NAME",void 0),d=N("XSRF_TOKEN",void 0),e=b.postBody||"",f=b.u,g=N("XSRF_FIELD_NAME",void 0),h;b.headers&&(h=b.headers["Content-Type"]);b.Pa||I(a)&&!b.withCredentials&&I(a)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.u&&b.u[g]||(f||(f={}),f[c]=d);f&&"string"===typeof e&&(e=Ef(e),vb(e,f),e=b.da&&"JSON"==b.da?JSON.stringify(e):yc(e));if(!(c=e)&&(c=f)){a:{for(var k in f){f=!1;break a}f=!0}c=!f}!fh&&c&&"POST"!=b.method&&
(fh=!0,qf(Error("AJAX request with postData should use POST")));return e}
function nh(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,rf(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(")]}'\n"===f.substring(0,5)&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?oh(a):null)e={},D(a.getElementsByTagName("*"),function(g){e[g.tagName]=ph(g)})}d&&qh(e);
return e}
function qh(a){if(A(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=a[b];if(void 0===wb){var e=null;var f=y.trustedTypes;if(f&&f.createPolicy){try{e=f.createPolicy("goog#html",{createHTML:$a,createScript:$a,createScriptURL:$a})}catch(g){y.console&&y.console.error(g.message)}wb=e}else wb=e}(e=wb)&&e.createHTML(d);a[c]=new Ib}else qh(a[b])}}
function oh(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function ph(a){var b="";D(a.childNodes,function(c){b+=c.nodeValue});
return b}
function mh(a,b,c,d,e,f,g){function h(){4==(k&&"readyState"in k?k.readyState:0)&&b&&pf(b)(k)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var k=ch();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",h,!1):k.onreadystatechange=h;R("debug_forward_web_query_parameters")&&(a=hh(a));k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=gh(a,e))for(var l in e)k.setRequestHeader(l,e[l]),"content-type"==l.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);
return k}
;function rh(){for(var a={},b=u(Object.entries(Ef(N("DEVICE","")))),c=b.next();!c.done;c=b.next()){var d=u(c.value);c=d.next().value;d=d.next().value;"cbrand"===c?a.deviceMake=d:"cmodel"===c?a.deviceModel=d:"cbr"===c?a.browserName=d:"cbrver"===c?a.browserVersion=d:"cos"===c?a.osName=d:"cosver"===c?a.osVersion=d:"cplatform"===c&&(a.platform=d)}return a}
;function sh(){return"INNERTUBE_API_KEY"in lf&&"INNERTUBE_API_VERSION"in lf}
function Tg(){return{innertubeApiKey:N("INNERTUBE_API_KEY",void 0),innertubeApiVersion:N("INNERTUBE_API_VERSION",void 0),ma:N("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),na:N("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:N("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),pa:N("INNERTUBE_CONTEXT_HL",void 0),oa:N("INNERTUBE_CONTEXT_GL",void 0),qa:N("INNERTUBE_HOST_OVERRIDE",void 0)||"",sa:!!N("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),ra:!!N("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:N("SERIALIZED_CLIENT_CONFIG_DATA",void 0)}}
function Sg(a){var b={client:{hl:a.pa,gl:a.oa,clientName:a.na,clientVersion:a.innertubeContextClientVersion,configInfo:a.ma}},c=window.devicePixelRatio;c&&1!=c&&(b.client.screenDensityFloat=String(c));c=N("EXPERIMENTS_TOKEN","");""!==c&&(b.client.experimentsToken=c);c=[];var d=N("EXPERIMENTS_FORCED_FLAGS",{});for(e in d)c.push({key:e,value:String(d[e])});var e=N("EXPERIMENT_FLAGS",{});for(var f in e)f.startsWith("force_")&&void 0===d[f]&&c.push({key:f,value:String(e[f])});0<c.length&&(b.request={internalExperimentFlags:c});
a.appInstallData&&R("web_log_app_install_experiments")&&(b.client.configInfo=b.client.configInfo||{},b.client.configInfo.appInstallData=a.appInstallData);N("DELEGATED_SESSION_ID")&&!R("pageid_as_header_web")&&(b.user={onBehalfOfUser:N("DELEGATED_SESSION_ID")});b.client=Object.assign(b.client,rh());return b}
function th(a,b,c){c=void 0===c?{}:c;var d={"X-Goog-Visitor-Id":c.visitorData||N("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.Ja||N("AUTHORIZATION"))||(a?b="Bearer "+z("gapi.auth.getToken")().Ia:b=Oc([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=N("SESSION_INDEX",0),R("pageid_as_header_web")&&(d["X-Goog-PageId"]=N("DELEGATED_SESSION_ID")));return d}
;function uh(a){a=Object.assign({},a);delete a.Authorization;var b=Oc();if(b){var c=new fd;c.update(N("INNERTUBE_API_KEY",void 0));c.update(b);b=c.digest();c=3;Ra(b);void 0===c&&(c=0);if(!jc){jc={};for(var d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),e=["+/=","+/","-_=","-_.","-_"],f=0;5>f;f++){var g=d.concat(e[f].split(""));ic[f]=g;for(var h=0;h<g.length;h++){var k=g[h];void 0===jc[k]&&(jc[k]=h)}}}c=ic[c];d=[];for(e=0;e<b.length;e+=3){var l=b[e],m=(f=e+1<b.length)?
b[e+1]:0;k=(g=e+2<b.length)?b[e+2]:0;h=l>>2;l=(l&3)<<4|m>>4;m=(m&15)<<2|k>>6;k&=63;g||(k=64,f||(m=64));d.push(c[h],c[l],c[m]||"",c[k]||"")}a.hash=d.join("")}return a}
;function vh(){var a=new df;(a=a.isAvailable()?new kf(a,"yt.innertube"):null)||(a=new ef("yt.innertube"),a=a.isAvailable()?a:null);this.f=a?new $e(a):null;this.g=document.domain||window.location.hostname}
vh.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.f)try{this.f.set(a,b,Date.now()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(ye(b))}catch(f){return}else e=escape(b);b=this.g;pc.set(""+a,e,{Y:c,path:"/",domain:void 0===b?"youtube.com":b,secure:!1})};
vh.prototype.get=function(a,b){var c=void 0,d=!this.f;if(!d)try{c=this.f.get(a)}catch(e){d=!0}if(d&&(c=pc.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
vh.prototype.remove=function(a){this.f&&this.f.remove(a);var b=this.g;pc.remove(""+a,"/",void 0===b?"youtube.com":b)};var wh;function xh(){wh||(wh=new vh);return wh}
function yh(a,b,c,d){if(d)return null;d=xh().get("nextId",!0)||1;var e=xh().get("requests",!0)||{};e[d]={method:a,request:b,authState:uh(c),requestTime:Math.round(T())};xh().set("nextId",d+1,86400,!0);xh().set("requests",e,86400,!0);return d}
function zh(a){var b=xh().get("requests",!0)||{};delete b[a];xh().set("requests",b,86400,!0)}
function Ah(a){var b=xh().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(T())-d.requestTime)){var e=d.authState,f=uh(th(!1));sb(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(T())),Wg(a,d.method,e,{}));delete b[c]}}xh().set("requests",b,86400,!0)}}
;new J;var Bh=[];function Ch(a,b){Bh.push({type:"EVENT",eventType:a,payload:b});10<Bh.length&&Bh.shift()}
;function Dh(a){if(!a)throw Error();throw a;}
function Eh(a){return a}
function V(a){var b=this;this.g=a;this.state={status:"PENDING"};this.f=[];this.onRejected=[];this.g(function(c){if("PENDING"===b.state.status){b.state={status:"FULFILLED",value:c};c=u(b.f);for(var d=c.next();!d.done;d=c.next())d=d.value,d()}},function(c){if("PENDING"===b.state.status){b.state={status:"REJECTED",
reason:c};c=u(b.onRejected);for(var d=c.next();!d.done;d=c.next())d=d.value,d()}})}
V.all=function(a){return new V(function(b,c){var d=[],e=a.length;0===e&&b(d);for(var f={D:0};f.D<a.length;f={D:f.D},++f.D)Fh(V.resolve(a[f.D]).then(function(g){return function(h){d[g.D]=h;e--;0===e&&b(d)}}(f)),function(g){c(g)})})};
V.resolve=function(a){return new V(function(b,c){a instanceof V?a.then(b,c):b(a)})};
V.reject=function(a){return new V(function(b,c){c(a)})};
V.prototype.then=function(a,b){var c=this,d=null!==a&&void 0!==a?a:Eh,e=null!==b&&void 0!==b?b:Dh;return new V(function(f,g){"PENDING"===c.state.status?(c.f.push(function(){Gh(c,c,d,f,g)}),c.onRejected.push(function(){Hh(c,c,e,f,g)})):"FULFILLED"===c.state.status?Gh(c,c,d,f,g):"REJECTED"===c.state.status&&Hh(c,c,e,f,g)})};
function Fh(a,b){a.then(void 0,b)}
function Gh(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof V?Ih(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Hh(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof V?Ih(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Ih(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof V?Ih(a,b,f,d,e):d(f)},function(f){e(f)})}
;function Jh(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function Kh(a){return new K(function(b,c){Jh(a,b,c)})}
function W(a){return new V(function(b,c){Jh(a,b,c)})}
;function Lh(a,b){return new V(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()})}
;function Mh(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];d=Error.call(this,a);this.message=d.message;"stack"in d&&(this.stack=d.stack);this.args=[].concat(c instanceof Array?c:ia(u(c)))}
ra(Mh,Error);var Nh={},Oh=(Nh.AUTH_INVALID="No user identifier specified.",Nh.EXPLICIT_ABORT="Transaction was explicitly aborted.",Nh.IDB_NOT_SUPPORTED="IndexedDB is not supported.",Nh.MISSING_OBJECT_STORE="Object store not created.",Nh.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",Nh.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",Nh.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",Nh);
function Ph(a,b,c){b=void 0===b?{}:b;c=void 0===c?Oh[a]:c;Mh.call(this,c,Object.assign({name:"YtIdbKnownError",isSw:void 0===self.document,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;Object.setPrototypeOf(this,Ph.prototype);Bh.push({type:"ERROR",payload:this});10<Bh.length&&Bh.shift()}
ra(Ph,Mh);function Qh(a,b,c){Ph.call(this,"UNKNOWN_ABORT",{objectStoreNames:a,dbName:b,mode:c});Object.setPrototypeOf(this,Qh.prototype)}
ra(Qh,Ph);function Rh(a,b){this.g=a;this.options=b;this.transactionCount=0;this.h=T();this.f=!1}
n=Rh.prototype;n.add=function(a,b,c){return Sh(this,[a],"readwrite",function(d){return Th(d,a).add(b,c)})};
n.clear=function(a){return Sh(this,[a],"readwrite",function(b){return Th(b,a).clear()})};
n.close=function(){var a;this.g.close();(null===(a=this.options)||void 0===a?0:a.closed)&&this.options.closed()};
n.count=function(a,b){return Sh(this,[a],"readonly",function(c){return Th(c,a).count(b)})};
n["delete"]=function(a,b){return Sh(this,[a],"readwrite",function(c){return Th(c,a)["delete"](b)})};
n.get=function(a,b){return Sh(this,[a],"readwrite",function(c){return Th(c,a).get(b)})};
function Sh(a,b,c,d){a.transactionCount++;c=a.g.transaction(b,void 0===c?"readonly":c);c=new Uh(c);d=Vh(c,d);Wh(a,d,b.join());return d}
function Wh(a,b,c){var d=T();Ie(b.then(function(){Xh(a,!0,c,T()-d)}),function(e){var f=T();
e instanceof Qh&&(Ch("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:c,transactionDuration:f-d,transactionCount:a.transactionCount,dbDuration:f-a.h}),a.f=!0);Xh(a,!1,c,f-d)})}
function Xh(a,b,c,d){Ch("TRANSACTION_ENDED",{objectStoreNames:c,connectionHasUnknownAbortedTransaction:a.f,duration:d,isSuccessful:b})}
function Yh(a){this.f=a}
n=Yh.prototype;n.add=function(a,b){return W(this.f.add(a,b))};
n.clear=function(){return W(this.f.clear()).then(function(){})};
n.count=function(a){return W(this.f.count(a))};
function Zh(a,b){return $h(a,{query:b},function(c){return c["delete"]().then(function(){return c["continue"]()})}).then(function(){})}
n["delete"]=function(a){return a instanceof IDBKeyRange?Zh(this,a):W(this.f["delete"](a))};
n.get=function(a){return W(this.f.get(a))};
n.index=function(a){return new ai(this.f.index(a))};
n.getName=function(){return this.f.name};
function $h(a,b,c){a=a.f.openCursor(b.query,b.direction);return bi(a).then(function(d){return Lh(d,c)})}
function ci(a){for(var b=[],c=0;c<a.length;c++){var d=a.item(c);if(null===d)throw Error("Invariant: item in DOMStringList is null");b.push(d)}return b}
function Uh(a){var b=this;this.f=a;this.g=new Map;this.aborted=!1;this.done=new K(function(c,d){b.f.addEventListener("complete",function(){c()});
b.f.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.f.error)});
b.f.addEventListener("abort",function(){var e=b.f.error;if(e){var f=ci(b.f.objectStoreNames).join(),g=b.f.db.name,h=b.f.mode,k;"QuotaExceededError"===e.name?k=new Ph("QUOTA_EXCEEDED",{objectStoreNames:f,dbName:g,mode:h}):"UnknownError"===e.name&&(k=new Ph("QUOTA_MAYBE_EXCEEDED",{objectStoreNames:f,dbName:g,mode:h}));k&&Ch("QUOTA_EXCEEDED",void 0);d(e)}else b.aborted||(e=new Qh(ci(b.f.objectStoreNames).join(),b.f.db.name,b.f.mode),d(e))})})}
function Vh(a,b){var c=new K(function(d,e){Fh(b(a).then(function(f){a.commit();d(f)}),e)});
return Ge([c,a.done]).then(function(d){return u(d).next().value})}
Uh.prototype.abort=function(){this.f.abort();this.aborted=!0;throw new Ph("EXPLICIT_ABORT");};
Uh.prototype.commit=function(){var a=this.f;a.commit&&!this.aborted&&a.commit()};
function Th(a,b){var c=a.f.objectStore(b),d=a.g.get(c);d||(d=new Yh(c),a.g.set(c,d));return d}
function ai(a){this.f=a}
ai.prototype.count=function(a){return W(this.f.count(a))};
ai.prototype.get=function(a){return W(this.f.get(a))};
ai.prototype.getKey=function(a){return W(this.f.getKey(a))};
function di(a,b){this.request=a;this.cursor=b}
function bi(a){return W(a).then(function(b){return null===b?null:new di(a,b)})}
n=di.prototype;n.advance=function(a){this.cursor.advance(a);return bi(this.request)};
n["continue"]=function(a){this.cursor["continue"](a);return bi(this.request)};
n["delete"]=function(){return W(this.cursor["delete"]()).then(function(){})};
n.getKey=function(){return this.cursor.key};
n.update=function(a){return W(this.cursor.update(a))};function ei(a){function b(){k||(k=new Rh(c.result,{closed:h}));return k}
var c=self.indexedDB.open("yt-idb-test-do-not-use",void 0),d=a.blocked,e=a.blocking,f=a.Ta,g=a.upgrade,h=a.closed,k;g&&c.addEventListener("upgradeneeded",function(l){if(null===l.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(null===c.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");var m=b(),p=new Uh(c.transaction);g(m,l.oldVersion,l.newVersion,p)});
d&&c.addEventListener("blocked",function(){d()});
return Kh(c).then(function(l){e&&l.addEventListener("versionchange",function(){e(b())});
l.addEventListener("close",function(){Ch("DB_UNEXPECTEDLY_CLOSED",{dbName:"yt-idb-test-do-not-use",dbVersion:l.version});f&&f()});
return b()})}
function fi(){var a=void 0===a?{}:a;return ei(a)}
;var gi=gc||hc;function hi(){var a=/WebKit\/([0-9]+)/.exec(F);return!!(a&&600<=parseInt(a[1],10))}
function ii(){var a=/WebKit\/([0-9]+)/.exec(F);return!!(a&&602<=parseInt(a[1],10))}
;var ji,ki,li=["getAll","getAllKeys","getKey","openKeyCursor"],mi=["getAll","getAllKeys","getKey","openKeyCursor"];function ni(){return ab(this,function b(){var c,d;return Ja(b,function(e){switch(e.g){case 1:if(gi&&hi()&&!ii()&&!R("ytidb_allow_on_ios_safari_v8_and_v9")||Mb)return e["return"](!1);try{if(c=self,!(c.indexedDB&&c.IDBIndex&&c.IDBKeyRange&&c.IDBObjectStore))return e["return"](!1)}catch(f){return e["return"](!1)}wa(e);return va(e,Ie(fi(),function(){}));
case 5:if(d=e.o,!d)return e["return"](!1);case 3:ya(e);if(d)try{d.close()}catch(f){}Ca(e);break;case 2:return xa(e),e["return"](!1);case 4:return"IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype?e["return"](!0):e["return"](!1)}})})}
function oi(){return void 0!==ji?De(ji):new K(function(a){ni().then(function(b){ji=b;a(b)})})}
function pi(){return void 0!==ki?De(ki):oi().then(function(a){if(!a)return!1;var b=u(li);for(a=b.next();!a.done;a=b.next())if(!IDBObjectStore.prototype[a.value])return!1;b=u(mi);for(a=b.next();!a.done;a=b.next())if(!IDBIndex.prototype[a.value])return!1;return IDBObjectStore.prototype.getKey?!0:!1}).then(function(a){return ki=a})}
;function qi(){J.call(this);this.g=ri();si(this);ti(this)}
ra(qi,J);function ri(){var a=window.navigator.onLine;return void 0===a?!0:a}
function ti(a){window.addEventListener("online",function(){a.g=!0;a.o&&a.o()})}
function si(a){window.addEventListener("offline",function(){a.g=!1;a.m&&a.m()})}
;function ui(a,b){b=void 0===b?{}:b;vi().then(function(){qi.f||(qi.f=new qi);qi.f.g!==ri()&&qf(Error("NetworkStatusManager isOnline does not match window status"));lh(a,b)})}
function wi(a,b){b=void 0===b?{}:b;vi().then(function(){lh(a,b)})}
function vi(){return ab(this,function b(){return Ja(b,function(c){return R("networkless_logging")?(2===wg("networkless_ytidb_version")&&pi().then(function(d){return d}),c["return"](oi())):c["return"](!1)})})}
;function xi(a){var b=this;this.f=null;a?this.f=a:sh()&&(this.f=Tg());yg(function(){Ah(b)})}
xi.prototype.isReady=function(){!this.f&&sh()&&(this.f=Tg());return!!this.f};
function Wg(a,b,c,d){!N("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&rf(new Mh("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var e=new Mh("innertube xhrclient not ready",b,c,d);qf(e);e.sampleWeight=0;throw e;}var f={headers:{"Content-Type":"application/json"},method:"POST",u:c,da:"JSON",M:function(){d.M()},
ba:d.M,onSuccess:function(p,r){if(d.onSuccess)d.onSuccess(r)},
aa:function(p){if(d.onSuccess)d.onSuccess(p)},
onError:function(p,r){if(d.onError)d.onError(r)},
Ra:function(p){if(d.onError)d.onError(p)},
timeout:d.timeout,withCredentials:!0},g="";(e=a.f.qa)&&(g=e);var h=a.f.sa||!1,k=th(h,g,d);Object.assign(f.headers,k);f.headers.Authorization&&!g&&(f.headers["x-origin"]=window.location.origin);e="/youtubei/"+a.f.innertubeApiVersion+"/"+b;var l={alt:"json"};a.f.ra&&f.headers.Authorization||(l.key=a.f.innertubeApiKey);var m=Ff(""+g+e,l||{},!0);vi().then(function(p){if(d.retry&&R("retry_web_logging_batches")&&"www.youtube-nocookie.com"!=g){if(R("networkless_gel")&&!p||!R("networkless_gel"))var r=yh(b,
c,k,h);if(r){var q=f.onSuccess,v=f.aa;f.onSuccess=function(w,E){zh(r);q(w,E)};
c.aa=function(w,E){zh(r);v(w,E)}}}try{R("use_fetch_for_op_xhr")?ih(m,f):R("networkless_gel")&&d.retry?(f.method="POST",!d.wa&&R("nwl_send_fast_on_unload")?wi(m,f):ui(m,f)):(f.method="POST",f.u||(f.u={}),lh(m,f))}catch(w){if("InvalidAccessError"==w.name)r&&(zh(r),r=0),rf(Error("An extension is blocking network request."));
else throw w;}r&&yg(function(){Ah(a)})})}
;var yi=[{Z:function(a){return"Cannot read property '"+a.key+"'"},
U:{TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,
groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]}],Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}]}},{Z:function(a){return"Cannot call '"+a.key+"'"},
U:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}}];function zi(){this.f=[];this.g=[]}
var Ai;var Bi=new M;var Ci=new Set,Di=0,Ei=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function Fi(a,b,c,d){c+="."+a;a=Gi(b);d[c]=a;return c.length+a.length}
function Gi(a){return("string"===typeof a?a:String(JSON.stringify(a))).substr(0,500)}
;function X(a,b,c){this.l=this.f=this.g=null;this.j=Sa(this);this.h=0;this.o=!1;this.m=[];this.i=null;this.v=c;this.G={};c=document;if(a="string"===typeof a?c.getElementById(a):a)if(c="iframe"==a.tagName.toLowerCase(),b.host||(b.host=c?wc(a.src):"https://www.youtube.com"),this.g=new sg(b),c||(b=Hi(this,a),this.l=a,(c=a.parentNode)&&c.replaceChild(b,a),a=b),this.f=a,this.f.id||(this.f.id="widget"+Sa(this.f)),If[this.f.id]=this,window.postMessage){this.i=new M;Ii(this);b=Q(this.g,"events");for(var d in b)b.hasOwnProperty(d)&&
this.addEventListener(d,b[d]);for(var e in og)Ji(this,e)}}
n=X.prototype;n.setSize=function(a,b){this.f.width=a;this.f.height=b;return this};
n.ta=function(){return this.f};
n.ea=function(a){this.N(a.event,a)};
n.addEventListener=function(a,b){var c=b;"string"==typeof b&&(c=function(){window[b].apply(window,arguments)});
if(!c)return this;this.i.subscribe(a,c);Ki(this,a);return this};
function Ji(a,b){var c=b.split(".");if(2==c.length){var d=c[1];a.v==c[0]&&Ki(a,d)}}
n.destroy=function(){this.f.id&&(If[this.f.id]=null);var a=this.i;a&&"function"==typeof a.dispose&&a.dispose();if(this.l){a=this.f;var b=a.parentNode;b&&b.replaceChild(this.l,a)}else(a=this.f)&&a.parentNode&&a.parentNode.removeChild(a);ug&&(ug[this.j]=null);this.g=null;a=this.f;for(var c in rb)rb[c][0]==a&&xf(c);this.l=this.f=null};
n.P=function(){return{}};
function Li(a,b,c){c=c||[];c=Array.prototype.slice.call(c);b={event:"command",func:b,args:c};a.o?a.V(b):a.m.push(b)}
n.N=function(a,b){if(!this.i.h){var c={target:this,data:b};this.i.K(a,c);rg(this.v+"."+a,c)}};
function Hi(a,b){for(var c=document.createElement("iframe"),d=b.attributes,e=0,f=d.length;e<f;e++){var g=d[e].value;null!=g&&""!=g&&"null"!=g&&c.setAttribute(d[e].name,g)}c.setAttribute("frameBorder",0);c.setAttribute("allowfullscreen",1);c.setAttribute("allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture");c.setAttribute("title","YouTube "+Q(a.g,"title"));(d=Q(a.g,"width"))&&c.setAttribute("width",d);(d=Q(a.g,"height"))&&c.setAttribute("height",d);var h=
a.P();h.enablejsapi=window.postMessage?1:0;window.location.host&&(h.origin=window.location.protocol+"//"+window.location.host);h.widgetid=a.j;window.location.href&&D(["debugjs","debugcss"],function(k){var l=window.location.href;var m=l.search(zc);b:{var p=0;for(var r=k.length;0<=(p=l.indexOf(k,p))&&p<m;){var q=l.charCodeAt(p-1);if(38==q||63==q)if(q=l.charCodeAt(p+r),!q||61==q||38==q||35==q)break b;p+=r+1}p=-1}if(0>p)l=null;else{r=l.indexOf("&",p);if(0>r||r>m)r=m;p+=k.length+1;l=decodeURIComponent(l.substr(p,
r-p).replace(/\+/g," "))}null!==l&&(h[k]=l)});
c.src=Q(a.g,"host")+a.R()+"?"+yc(h);return c}
n.ca=function(){this.f&&this.f.contentWindow?this.V({event:"listening"}):window.clearInterval(this.h)};
function Ii(a){tg(a.g,a,a.j);a.h=Bf(Ya(a.ca,a));zf(a.f,"load",Ya(function(){window.clearInterval(this.h);this.h=Bf(Ya(this.ca,this))},a))}
function Ki(a,b){a.G[b]||(a.G[b]=!0,Li(a,"addEventListener",[b]))}
n.V=function(a){a.id=this.j;a.channel="widget";var b=ye(a),c=this.g,d=wc(this.f.src||"");var e=0==d.indexOf("https:")?[d]:c.f?[d.replace("http:","https:")]:c.h?[d]:[d,d.replace("http:","https:")];if(this.f.contentWindow)for(var f=0;f<e.length;f++)try{this.f.contentWindow.postMessage(b,e[f])}catch(La){if(La.name&&"SyntaxError"==La.name){if(!(La.message&&0<La.message.indexOf("target origin ''"))){var g=void 0,h=void 0,k=La;h=void 0===h?{}:h;h.name=N("INNERTUBE_CONTEXT_CLIENT_NAME",1);h.version=N("INNERTUBE_CONTEXT_CLIENT_VERSION",
void 0);var l=h||{},m="WARNING";m=void 0===m?"ERROR":m;g=void 0===g?!1:g;if(k){if(R("console_log_js_exceptions")){var p=k,r=[];r.push("Name: "+p.name);r.push("Message: "+p.message);p.hasOwnProperty("params")&&r.push("Error Params: "+JSON.stringify(p.params));r.push("File name: "+p.fileName);r.push("Stacktrace: "+p.stack);window.console.log(r.join("\n"),p)}if((window&&window.yterr||g)&&!(5<=Di)&&0!==k.sampleWeight){var q=void 0,v=k,w=l,E=kc(v),Ta=E.message||"Unknown Error",ha=E.name||"UnknownError",
Da=E.lineNumber||"Not available",Ri=E.fileName||"Not available",Si=E.stack||v.f||"Not available";if(v.hasOwnProperty("args")&&v.args&&v.args.length)for(var oa=0,Wb=0;Wb<v.args.length;Wb++){var P=v.args[Wb],za="params."+Wb;oa+=za.length;if(P)if(Array.isArray(P)){for(var Ti=w,gd=oa,jb=0;jb<P.length&&!(P[jb]&&(gd+=Fi(jb,P[jb],za,Ti),500<gd));jb++);oa=gd}else if("object"===typeof P){var Xb=void 0,Ui=w,hd=oa;for(Xb in P)if(P[Xb]&&(hd+=Fi(Xb,P[Xb],za,Ui),500<hd))break;oa=hd}else w[za]=Gi(P),oa+=w[za].length;
else w[za]=Gi(P),oa+=w[za].length;if(500<=oa)break}else if(v.hasOwnProperty("params")&&v.params){var Yb=v.params;if("object"===typeof v.params){var Jf=0;for(q in Yb)if(Yb[q]){var Kf="params."+q,Lf=Gi(Yb[q]);w[Kf]=Lf;Jf+=Kf.length+Lf.length;if(500<Jf)break}}else w.params=Gi(Yb)}navigator.vendor&&!w.hasOwnProperty("vendor")&&(w.vendor=navigator.vendor);var id={message:Ta,name:ha,lineNumber:Da,fileName:Ri,stack:Si,params:w},Mf=Number(v.columnNumber);isNaN(Mf)||(id.lineNumber=id.lineNumber+":"+Mf);for(var Z,
Aa=id,Nf=u(yi),jd=Nf.next();!jd.done;jd=Nf.next()){var kd=jd.value;if(kd.U[Aa.name])for(var Of=u(kd.U[Aa.name]),ld=Of.next();!ld.done;ld=Of.next()){var Pf=ld.value,Zb=Aa.message.match(Pf.regexp);if(Zb){Aa.params["error.original"]=Zb[0];for(var md=Pf.groups,Qf={},Ma=0;Ma<md.length;Ma++)Qf[md[Ma]]=Zb[Ma+1],Aa.params["error."+md[Ma]]=Zb[Ma+1];Aa.message=kd.Z(Qf);break}}}Z=Aa;window.yterr&&"function"===typeof window.yterr&&window.yterr(Z);if(!(Ci.has(Z.message)||0<=Z.stack.indexOf("/YouTubeCenter.js")||
0<=Z.stack.indexOf("/mytube.js"))){Bi.K("handleError",Z);if(R("kevlar_gel_error_routing")){var $b=void 0,Rf=m,L=Z;a:{for(var Sf=u(Ei),nd=Sf.next();!nd.done;nd=Sf.next()){var Tf=F;if(Tf&&0<=Tf.toLowerCase().indexOf(nd.value.toLowerCase())){var Uf=!0;break a}}Uf=!1}if(!Uf){var kb={stackTrace:L.stack};L.fileName&&(kb.filename=L.fileName);var aa=L.lineNumber&&L.lineNumber.split?L.lineNumber.split(":"):[];0!==aa.length&&(1!==aa.length||isNaN(Number(aa[0]))?2!==aa.length||isNaN(Number(aa[0]))||isNaN(Number(aa[1]))||
(kb.lineNumber=Number(aa[0]),kb.columnNumber=Number(aa[1])):kb.lineNumber=Number(aa[0]));Ai||(Ai=new zi);var ac=Ai;var Vi=L.message,Wi=L.name;a:{for(var Vf=u(ac.g),od=Vf.next();!od.done;od=Vf.next()){var Wf=od.value;if(L.message&&L.message.match(Wf.f)){var pd=Wf.weight;break a}}for(var Xf=u(ac.f),qd=Xf.next();!qd.done;qd=Xf.next()){var Yf=qd.value;if(Yf.f(L)){pd=Yf.weight;break a}}pd=1}var rd={level:"ERROR_LEVEL_UNKNOWN",message:Vi,errorClassName:Wi,sampleWeight:pd};"ERROR"===Rf?rd.level="ERROR_LEVEL_ERROR":
"WARNING"===Rf&&(rd.level="ERROR_LEVEL_WARNNING");var Xi={isObfuscated:!0,browserStackInfo:kb},Na={pageUrl:window.location.href};N("FEXP_EXPERIMENTS")&&(Na.experimentIds=N("FEXP_EXPERIMENTS"));Na.kvPairs=[{key:"client.errorServiceSignature",value:"msg="+ac.g.length+"&cb="+ac.f.length}];var sd=L.params;if(sd)for(var Zf=u(Object.keys(sd)),td=Zf.next();!td.done;td=Zf.next()){var $f=td.value;Na.kvPairs.push({key:"client."+$f,value:String(sd[$f])})}var ag=N("SERVER_NAME",void 0),bg=N("SERVER_VERSION",
void 0);ag&&bg&&(Na.kvPairs.push({key:"server.name",value:ag}),Na.kvPairs.push({key:"server.version",value:bg}));var Yi={errorMetadata:Na,stackTrace:Xi,logMessage:rd};$b=void 0===$b?{}:$b;var cg=xi;N("ytLoggingEventsDefaultDisabled",!1)&&xi==xi&&(cg=null);var Zi=cg,U=$b;U=void 0===U?{}:U;var lb={};lb.eventTimeMs=Math.round(U.timestamp||T());lb.clientError=Yi;var $i=String;if(U.timestamp)var dg=-1;else{var eg=z("_lact",window);dg=null==eg?-1:Math.max(Date.now()-eg,0)}lb.context={lastActivityMs:$i(dg)};
if(R("log_sequence_info_on_gel_web")&&U.fa){var aj=lb.context,mb=U.fa;Xg[mb]=mb in Xg?Xg[mb]+1:0;aj.sequence={index:Xg[mb],groupKey:mb};U.Oa&&delete Xg[U.fa]}var bj=lb,bc=U.Na,fg=Zi,ud="";if(bc){var cc=bc,vd={};cc.videoId?vd.videoId=cc.videoId:cc.playlistId&&(vd.playlistId=cc.playlistId);Og[bc.token]=vd;ud=bc.token}var wd=Ng.get(ud)||[];Ng.set(ud,wd);wd.push(bj);fg&&(Ig=new fg);var cj=wg("web_logging_max_batch")||100,gg=T();wd.length>=cj?Pg(!0):10<=gg-Lg&&(Rg(),Lg=gg);Pg()}}if(!R("suppress_error_204_logging")){var xd,
Ba=Z,nb=Ba.params||{},pa={ua:{a:"logerror",t:"jserror",type:Ba.name,msg:Ba.message.substr(0,250),line:Ba.lineNumber,level:m,"client.name":nb.name},u:{url:N("PAGE_NAME",window.location.href),file:Ba.fileName},method:"POST"};nb.version&&(pa["client.version"]=nb.version);if(pa.u){Ba.stack&&(pa.u.stack=Ba.stack);for(var hg=u(Object.keys(nb)),yd=hg.next();!yd.done;yd=hg.next()){var ig=yd.value;pa.u["client."+ig]=nb[ig]}if(xd=N("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(var jg=u(Object.keys(xd)),
zd=jg.next();!zd.done;zd=jg.next()){var kg=zd.value;pa.u[kg]=xd[kg]}var lg=N("SERVER_NAME",void 0),mg=N("SERVER_VERSION",void 0);lg&&mg&&(pa.u["server.name"]=lg,pa.u["server.version"]=mg)}lh(N("ECATCHER_REPORT_HOST","")+"/error_204",pa)}Ci.add(Z.message);Di++}}}}}else throw La;}else console&&console.warn&&console.warn("The YouTube player is not attached to the DOM. API calls should be made after the onReady event. See more: https://developers.google.com/youtube/iframe_api_reference#Events")};function Mi(a){return(0===a.search("cue")||0===a.search("load"))&&"loadModule"!==a}
function Ni(a){return 0===a.search("get")||0===a.search("is")}
;function Y(a,b){if(!a)throw Error("YouTube player element ID required.");var c={title:"video player",videoId:"",width:640,height:360};if(b)for(var d in b)c[d]=b[d];X.call(this,a,c,"player");this.C={};this.playerInfo={}}
ra(Y,X);n=Y.prototype;n.R=function(){return"/embed/"+Q(this.g,"videoId")};
n.P=function(){var a=Q(this.g,"playerVars");if(a){var b={},c;for(c in a)b[c]=a[c];a=b}else a={};window!=window.top&&document.referrer&&(a.widget_referrer=document.referrer.substring(0,256));if(c=Q(this.g,"embedConfig")){if(A(c))try{c=JSON.stringify(c)}catch(d){console.error("Invalid embed config JSON",d)}a.embed_config=c}return a};
n.ea=function(a){var b=a.event;a=a.info;switch(b){case "apiInfoDelivery":if(A(a))for(var c in a)this.C[c]=a[c];break;case "infoDelivery":Oi(this,a);break;case "initialDelivery":window.clearInterval(this.h);this.playerInfo={};this.C={};Pi(this,a.apiInterface);Oi(this,a);break;default:this.N(b,a)}};
function Oi(a,b){if(A(b))for(var c in b)a.playerInfo[c]=b[c]}
function Pi(a,b){D(b,function(c){this[c]||("getCurrentTime"==c?this[c]=function(){var d=this.playerInfo.currentTime;if(1==this.playerInfo.playerState){var e=(Date.now()/1E3-this.playerInfo.currentTimeLastUpdated_)*this.playerInfo.playbackRate;0<e&&(d+=Math.min(e,1))}return d}:Mi(c)?this[c]=function(){this.playerInfo={};
this.C={};Li(this,c,arguments);return this}:Ni(c)?this[c]=function(){var d=0;
0===c.search("get")?d=3:0===c.search("is")&&(d=2);return this.playerInfo[c.charAt(d).toLowerCase()+c.substr(d+1)]}:this[c]=function(){Li(this,c,arguments);
return this})},a)}
n.getVideoEmbedCode=function(){var a=parseInt(Q(this.g,"width"),10),b=parseInt(Q(this.g,"height"),10),c=Q(this.g,"host")+this.R();Eb.test(c)&&(-1!=c.indexOf("&")&&(c=c.replace(yb,"&amp;")),-1!=c.indexOf("<")&&(c=c.replace(zb,"&lt;")),-1!=c.indexOf(">")&&(c=c.replace(Ab,"&gt;")),-1!=c.indexOf('"')&&(c=c.replace(Bb,"&quot;")),-1!=c.indexOf("'")&&(c=c.replace(Cb,"&#39;")),-1!=c.indexOf("\x00")&&(c=c.replace(Db,"&#0;")));return'<iframe width="'+a+'" height="'+b+'" src="'+c+'" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'};
n.getOptions=function(a){return this.C.namespaces?a?this.C[a].options||[]:this.C.namespaces||[]:[]};
n.getOption=function(a,b){if(this.C.namespaces&&a&&b)return this.C[a][b]};
function Qi(a){if("iframe"!=a.tagName.toLowerCase()){var b=O(a,"videoid");b&&(b={videoId:b,width:O(a,"width"),height:O(a,"height")},new Y(a,b))}}
;function dj(a,b){var c={title:"Thumbnail",videoId:"",width:120,height:68};if(b)for(var d in b)c[d]=b[d];X.call(this,a,c,"thumbnail")}
ra(dj,X);dj.prototype.R=function(){return"/embed/"+Q(this.g,"videoId")};
dj.prototype.P=function(){return{player:0,thumb_width:Q(this.g,"thumbWidth"),thumb_height:Q(this.g,"thumbHeight"),thumb_align:Q(this.g,"thumbAlign")}};
dj.prototype.N=function(a,b){X.prototype.N.call(this,a,b?b.info:void 0)};
function ej(a){if("iframe"!=a.tagName.toLowerCase()){var b=O(a,"videoid");if(b){b={videoId:b,events:{},width:O(a,"width"),height:O(a,"height"),thumbWidth:O(a,"thumb-width"),thumbHeight:O(a,"thumb-height"),thumbAlign:O(a,"thumb-align")};var c=O(a,"onclick");c&&(b.events.onClick=c);new dj(a,b)}}}
;B("YT.PlayerState.UNSTARTED",-1);B("YT.PlayerState.ENDED",0);B("YT.PlayerState.PLAYING",1);B("YT.PlayerState.PAUSED",2);B("YT.PlayerState.BUFFERING",3);B("YT.PlayerState.CUED",5);B("YT.get",function(a){return If[a]});
B("YT.scan",pg);B("YT.subscribe",function(a,b,c){Ue.subscribe(a,b,c);og[a]=!0;for(var d in If)Ji(If[d],a)});
B("YT.unsubscribe",function(a,b,c){Te(a,b,c)});
B("YT.Player",Y);B("YT.Thumbnail",dj);X.prototype.destroy=X.prototype.destroy;X.prototype.setSize=X.prototype.setSize;X.prototype.getIframe=X.prototype.ta;X.prototype.addEventListener=X.prototype.addEventListener;Y.prototype.getVideoEmbedCode=Y.prototype.getVideoEmbedCode;Y.prototype.getOptions=Y.prototype.getOptions;Y.prototype.getOption=Y.prototype.getOption;ng.push(function(a){a=qg("player",a);D(a,Qi)});
ng.push(function(){var a=qg("thumbnail");D(a,ej)});
"undefined"!=typeof YTConfig&&YTConfig.parsetags&&"onload"!=YTConfig.parsetags||pg();var fj=y.onYTReady;fj&&fj();var gj=y.onYouTubeIframeAPIReady;gj&&gj();var hj=y.onYouTubePlayerAPIReady;hj&&hj();}).call(this);

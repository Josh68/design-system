"use strict";(self.webpackChunk_cmsgov_cms_design_system_docs=self.webpackChunk_cmsgov_cms_design_system_docs||[]).push([[334],{3204:function(t){!function(e,i,s){let n;(n=s.define)&&n.amd?n([],(function(){return i})):(n=s.modules)?n["FlexSearch".toLowerCase()]=i:t.exports=i}(0,function t(e){function i(t,e){const i=e?e.id:t&&t.id;this.id=i||0===i?i:P++,this.init(t,e),o(this,"index",(function(){return this.a?Object.keys(this.a.index[this.a.keys[0]].c):Object.keys(this.c)})),o(this,"length",(function(){return this.index.length}))}function s(t,e,i,s){return this.u!==this.g&&(this.o=this.o.concat(i),this.u++,s&&this.o.length>=s&&(this.u=this.g),this.u===this.g&&(this.cache&&this.j.set(e,this.o),this.F&&this.F(this.o))),this}function n(t){const e=O();for(const i in t)if(t.hasOwnProperty(i)){const s=t[i];b(s)?e[i]=s.slice(0):w(s)?e[i]=n(s):e[i]=s}return e}function r(t,e){const i=t.length,s=x(e),n=[];for(let r=0,h=0;r<i;r++){const i=t[r];(s&&e(i)||!s&&!e[i])&&(n[h++]=i)}return n}function h(t,e,i,s,n,r,h,o,c,l){let f;if(i=m(i,h?0:n,o,r,e,c,l),o&&(o=i.page,f=i.next,i=i.result),h)e=this.where(h,null,n,i);else{for(e=i,i=this.l,n=e.length,r=Array(n),h=0;h<n;h++)r[h]=i[e[h]];e=r}return i=e,s&&(x(s)||(z=s.split(":"),1<z.length?s=g:(z=z[0],s=p)),i.sort(s)),i=y(o,f,i),this.cache&&this.j.set(t,i),i}function o(t,e,i){Object.defineProperty(t,e,{get:i})}function c(t){return new RegExp(t,"g")}function l(t,e){for(let i=0;i<e.length;i+=2)t=t.replace(e[i],e[i+1]);return t}function f(t,e,i,s,n,r,h,o){return e[i]?e[i]:(n=n?(o-(h||o/1.5))*r+(h||o/1.5)*n:r,e[i]=n,n>=h&&((t=(t=t[o-(n+.5>>0)])[i]||(t[i]=[]))[t.length]=s),n)}function a(t,e){if(t){const i=Object.keys(t);for(let s=0,n=i.length;s<n;s++){const n=i[s],r=t[n];if(r)for(let i=0,s=r.length;i<s;i++){if(r[i]===e){1===s?delete t[n]:r.splice(i,1);break}w(r[i])&&a(r[i],e)}}}}function u(t){let e="",i="";var s="";for(let n=0;n<t.length;n++){const r=t[n];r!==i&&(n&&"h"===r?(s="a"===s||"e"===s||"i"===s||"o"===s||"u"===s||"y"===s,(("a"===i||"e"===i||"i"===i||"o"===i||"u"===i||"y"===i)&&s||" "===i)&&(e+=r)):e+=r),s=n===t.length-1?"":t[n+1],i=r}return e}function d(t,e){return 0>(t=t.length-e.length)?1:t?-1:0}function p(t,e){return(t=t[z])<(e=e[z])?-1:t>e?1:0}function g(t,e){const i=z.length;for(let s=0;s<i;s++)t=t[z[s]],e=e[z[s]];return t<e?-1:t>e?1:0}function y(t,e,i){return t?{page:t,next:e?""+e:null,result:i}:i}function m(t,e,i,s,n,r,h){let o,c=[];if(!0===i){i="0";var l=""}else l=i&&i.split(":");const f=t.length;if(1<f){const b=O(),x=[];let w,j;var a,u=0;let S;var d=!0;let C,_,L,A,P,M,I=0;if(l&&(2===l.length?(A=l,l=!1):l=P=parseInt(l[0],10)),h){for(w=O();u<f;u++)if("not"===n[u])for(j=t[u],S=j.length,a=0;a<S;a++)w["@"+j[a]]=1;else L=u+1;if(k(L))return y(i,o,c);u=0}else _=v(n)&&n;for(;u<f;u++){const v=u===(L||f)-1;if(!_||!u)if((a=_||n&&n[u])&&"and"!==a){if("or"!==a)continue;M=!1}else M=r=!0;if(j=t[u],S=j.length){if(d){if(!C){C=j;continue}var p=C.length;for(a=0;a<p;a++){var g="@"+(d=C[a]);h&&w[g]||(b[g]=1,r||(c[I++]=d))}C=null,d=!1}for(g=!1,a=0;a<S;a++){var m="@"+(p=j[a]);const t=r?b[m]||0:u;if(!(!t&&!s||h&&w[m]||!r&&b[m]))if(t===u){if(v){if((!P||--P<I)&&(c[I++]=p,e&&I===e))return y(i,I+(l||0),c)}else b[m]=u+1;g=!0}else s&&((m=x[t]||(x[t]=[]))[m.length]=p)}if(M&&!g&&!s)break}else if(M&&!s)return y(i,o,j)}if(C)if(u=C.length,h)for(a=l?parseInt(l,10):0;a<u;a++)w["@"+(t=C[a])]||(c[I++]=t);else c=C;if(s)for(I=c.length,A?(u=parseInt(A[0],10)+1,a=parseInt(A[1],10)+1):(u=x.length,a=0);u--;)if(p=x[u]){for(S=p.length;a<S;a++)if(s=p[a],(!h||!w["@"+s])&&(c[I++]=s,e&&I===e))return y(i,u+":"+a,c);a=0}}else!f||n&&"not"===n[0]||(c=t[0],l&&(l=parseInt(l[0],10)));return e&&(h=c.length,l&&l>h&&(l=0),o=(l=l||0)+e,o<h?c=c.slice(l,o):(o=0,l&&(c=c.slice(l)))),y(i,o,c)}function v(t){return"string"==typeof t}function b(t){return t.constructor===Array}function x(t){return"function"==typeof t}function w(t){return"object"==typeof t}function k(t){return void 0===t}function j(t){const e=Array(t);for(let i=0;i<t;i++)e[i]=O();return e}function O(){return Object.create(null)}function S(){let t,e;self.onmessage=function(i){if(i=i.data)if(i.search){const s=e.search(i.content,i.threshold?{limit:i.limit,threshold:i.threshold,where:i.where}:i.limit);self.postMessage({id:t,content:i.content,limit:i.limit,result:s})}else i.add?e.add(i.id,i.content):i.update?e.update(i.id,i.content):i.remove?e.remove(i.id):i.clear?e.clear():i.info?((i=e.info()).worker=t,console.log(i)):i.register&&(t=i.id,i.options.cache=!1,i.options.async=!1,i.options.worker=!1,e=new Function(i.register.substring(i.register.indexOf("{")+1,i.register.lastIndexOf("}")))(),e=new e(i.options))}}function C(i,s,n,r){i=e("flexsearch","id"+i,S,(function(t){(t=t.data)&&t.result&&r(t.id,t.content,t.result,t.limit,t.where,t.cursor,t.suggest)}),s);const h=t.toString();return n.id=s,i.postMessage({register:h,options:n,id:s}),i}const _={encode:"icase",f:"forward",split:/\W+/,cache:!1,async:!1,g:!1,D:!1,a:!1,b:9,threshold:0,depth:0},L={memory:{encode:"extra",f:"strict",threshold:0,b:1},speed:{encode:"icase",f:"strict",threshold:1,b:3,depth:2},match:{encode:"extra",f:"full",threshold:1,b:3},score:{encode:"extra",f:"strict",threshold:1,b:9,depth:4},balance:{encode:"balance",f:"strict",threshold:0,b:3,depth:3},fast:{encode:"icase",f:"strict",threshold:8,b:9,depth:1}},A=[];let P=0;const M={},I={};let z;i.create=function(t,e){return new i(t,e)},i.registerMatcher=function(t){for(const e in t)t.hasOwnProperty(e)&&A.push(c(e),t[e]);return this},i.registerEncoder=function(t,e){return F[t]=e.bind(F),this},i.registerLanguage=function(t,e){return M[t]=e.filter,I[t]=e.stemmer,this},i.encode=function(t,e){return F[t](e)},i.prototype.init=function(t,e){if(this.v=[],e){var r=e.preset;t=e}else t||(t=_),r=t.preset;if(e={},v(t)?(e=L[t],t={}):r&&(e=L[r]),r=t.worker)if("undefined"==typeof Worker)t.worker=!1,this.m=null;else{var h=parseInt(r,10)||4;this.C=-1,this.u=0,this.o=[],this.F=null,this.m=Array(h);for(var o=0;o<h;o++)this.m[o]=C(this.id,o,t,s.bind(this))}if(this.f=t.tokenize||e.f||this.f||_.f,this.split=k(r=t.split)?this.split||_.split:v(r)?c(r):r,this.D=t.rtl||this.D||_.D,this.async="undefined"==typeof Promise||k(r=t.async)?this.async||_.async:r,this.g=k(r=t.worker)?this.g||_.g:r,this.threshold=k(r=t.threshold)?e.threshold||this.threshold||_.threshold:r,this.b=k(r=t.resolution)?r=e.b||this.b||_.b:r,r<=this.threshold&&(this.b=this.threshold+1),this.depth="strict"!==this.f||k(r=t.depth)?e.depth||this.depth||_.depth:r,this.w=(r=k(r=t.encode)?e.encode||_.encode:r)&&F[r]&&F[r].bind(F)||(x(r)?r:this.w||!1),(r=t.matcher)&&this.addMatcher(r),r=(e=t.lang)||t.filter){if(v(r)&&(r=M[r]),b(r)){h=this.w,o=O();for(var l=0;l<r.length;l++){var f=h?h(r[l]):r[l];o[f]=1}r=o}this.filter=r}if(r=e||t.stemmer){var a;for(a in e=v(r)?I[r]:r,h=this.w,o=[],e)e.hasOwnProperty(a)&&(l=h?h(a):a,o.push(c(l+"($|\\W)"),h?h(e[a]):e[a]));this.stemmer=a=o}if(this.a=o=(r=t.doc)?n(r):this.a||_.a,this.i=j(this.b-(this.threshold||0)),this.h=O(),this.c=O(),o){if(this.l=O(),t.doc=null,a=o.index={},e=o.keys=[],h=o.field,l=o.tag,f=o.store,b(o.id)||(o.id=o.id.split(":")),f){var u=O();if(v(f))u[f]=1;else if(b(f))for(let t=0;t<f.length;t++)u[f[t]]=1;else w(f)&&(u=f);o.store=u}if(l){if(this.G=O(),f=O(),h)if(v(h))f[h]=t;else if(b(h))for(u=0;u<h.length;u++)f[h[u]]=t;else w(h)&&(f=h);for(b(l)||(o.tag=l=[l]),h=0;h<l.length;h++)this.G[l[h]]=O();this.I=l,h=f}if(h){let s;for(b(h)||(w(h)?(s=h,o.field=h=Object.keys(h)):o.field=h=[h]),o=0;o<h.length;o++)b(l=h[o])||(s&&(t=s[l]),e[o]=l,h[o]=l.split(":")),a[l]=new i(t)}t.doc=r}return this.B=!0,this.j=!!(this.cache=r=k(r=t.cache)?this.cache||_.cache:r)&&new R(r),this},i.prototype.encode=function(t){return t&&(A.length&&(t=l(t,A)),this.v.length&&(t=l(t,this.v)),this.w&&(t=this.w(t)),this.stemmer&&(t=l(t,this.stemmer))),t},i.prototype.addMatcher=function(t){const e=this.v;for(const i in t)t.hasOwnProperty(i)&&e.push(c(i),t[i]);return this},i.prototype.add=function(t,e,i,s,n){if(this.a&&w(t))return this.A("add",t,e);if(e&&v(e)&&(t||0===t)){var h="@"+t;if(this.c[h]&&!s)return this.update(t,e);if(this.g)return++this.C>=this.m.length&&(this.C=0),this.m[this.C].postMessage({add:!0,id:t,content:e}),this.c[h]=""+this.C,i&&i(),this;if(!n){if(this.async&&"function"!=typeof importScripts){let n=this;return h=new Promise((function(i){setTimeout((function(){n.add(t,e,null,s,!0),n=null,i()}))})),i?(h.then(i),this):h}if(i)return this.add(t,e,null,s,!0),i(),this}if(!(e=this.encode(e)).length)return this;n=x(i=this.f)?i(e):e.split(this.split),this.filter&&(n=r(n,this.filter));const d=O();d._ctx=O();const p=n.length,g=this.threshold,y=this.depth,m=this.b,v=this.i,b=this.D;for(let e=0;e<p;e++){var o=n[e];if(o){var c=o.length,l=(b?e+1:p-e)/p,a="";switch(i){case"reverse":case"both":for(var u=c;--u;)f(v,d,a=o[u]+a,t,b?1:(c-u)/c,l,g,m-1);a="";case"forward":for(u=0;u<c;u++)f(v,d,a+=o[u],t,b?(u+1)/c:1,l,g,m-1);break;case"full":for(u=0;u<c;u++){const e=(b?u+1:c-u)/c;for(let i=c;i>u;i--)f(v,d,a=o.substring(u,i),t,e,l,g,m-1)}break;default:if(c=f(v,d,o,t,1,l,g,m-1),y&&1<p&&c>=g)for(c=d._ctx[o]||(d._ctx[o]=O()),o=this.h[o]||(this.h[o]=j(m-(g||0))),0>(l=e-y)&&(l=0),(a=e+y+1)>p&&(a=p);l<a;l++)l!==e&&f(o,c,n[l],t,0,m-(l<e?e-l:l-e),g,m-1)}}}this.c[h]=1,this.B=!1}return this},i.prototype.A=function(t,e,i){if(b(e)){var s=e.length;if(s--){for(var n=0;n<s;n++)this.A(t,e[n]);return this.A(t,e[s],i)}}else{var r,h=this.a.index,o=this.a.keys,c=this.a.tag;n=this.a.store;var l=this.a.id;s=e;for(var f=0;f<l.length;f++)s=s[l[f]];if("remove"===t&&(delete this.l[s],l=o.length,l--)){for(e=0;e<l;e++)h[o[e]].remove(s);return h[o[l]].remove(s,i)}if(c){for(r=0;r<c.length;r++){var a=c[r],u=e;for(l=a.split(":"),f=0;f<l.length;f++)u=u[l[f]];u="@"+u}r=(r=this.G[a])[u]||(r[u]=[])}for(let n=0,r=(l=this.a.field).length;n<r;n++){for(a=l[n],c=e,u=0;u<a.length;u++)c=c[a[u]];a=h[o[n]],u="add"===t?a.add:a.update,n===r-1?u.call(a,s,c,i):u.call(a,s,c)}if(n){for(i=Object.keys(n),t=O(),h=0;h<i.length;h++)if(n[o=i[h]]){let i,s;for(o=o.split(":"),l=0;l<o.length;l++)i=(i||e)[c=o[l]],s=(s||t)[c]=i}e=t}r&&(r[r.length]=e),this.l[s]=e}return this},i.prototype.update=function(t,e,i){return this.a&&w(t)?this.A("update",t,e):(this.c["@"+t]&&v(e)&&(this.remove(t),this.add(t,e,i,!0)),this)},i.prototype.remove=function(t,e,i){if(this.a&&w(t))return this.A("remove",t,e);var s="@"+t;if(this.c[s]){if(this.g)return this.m[this.c[s]].postMessage({remove:!0,id:t}),delete this.c[s],e&&e(),this;if(!i){if(this.async&&"function"!=typeof importScripts){let i=this;return s=new Promise((function(e){setTimeout((function(){i.remove(t,null,!0),i=null,e()}))})),e?(s.then(e),this):s}if(e)return this.remove(t,null,!0),e(),this}for(e=0;e<this.b-(this.threshold||0);e++)a(this.i[e],t);this.depth&&a(this.h,t),delete this.c[s],this.B=!1}return this},i.prototype.search=function(t,e,i,s){if(w(e)){if(b(e))for(var n=0;n<e.length;n++)e[n].query=t;else e.query=t;t=e,e=1e3}else e&&x(e)?(i=e,e=1e3):e||0===e||(e=1e3);if(!this.g){var o=[],c=t;if(w(t)&&!b(t)){i||(i=t.callback)&&(c.callback=null);var l=t.sort,f=t.page;e=t.limit,S=t.threshold;var a=t.suggest;t=t.query}if(this.a){S=this.a.index;const r=c.where;var u=c.bool||"or",p=c.field;let d,m,x=u;if(p)b(p)||(p=[p]);else if(b(c)){var g=c;p=[],x=[];for(var y=0;y<c.length;y++)n=(s=c[y]).bool||u,p[y]=s.field,x[y]=n,"not"===n?d=!0:"and"===n&&(m=!0)}else p=this.a.keys;for(u=p.length,y=0;y<u;y++)g&&(c=g[y]),f&&!v(c)&&(c.page=null,c.limit=0),o[y]=S[p[y]].search(c,0);if(i)return i(h.call(this,t,x,o,l,e,a,r,f,m,d));if(this.async){const i=this;return new Promise((function(s){Promise.all(o).then((function(n){s(h.call(i,t,x,n,l,e,a,r,f,m,d))}))}))}return h.call(this,t,x,o,l,e,a,r,f,m,d)}if(S||(S=this.threshold||0),!s){if(this.async&&"function"!=typeof importScripts){let t=this;return S=new Promise((function(i){setTimeout((function(){i(t.search(c,e,null,!0)),t=null}))})),i?(S.then(i),this):S}if(i)return i(this.search(c,e,null,!0)),this}if(!t||!v(t))return o;if(c=t,this.cache)if(this.B){if(i=this.j.get(t))return i}else this.j.clear(),this.B=!0;if(!(c=this.encode(c)).length)return o;i=x(i=this.f)?i(c):c.split(this.split),this.filter&&(i=r(i,this.filter)),g=i.length,s=!0,n=[];var k=O(),j=0;if(1<g&&(this.depth&&"strict"===this.f?u=!0:i.sort(d)),!u||(y=this.h)){const t=this.b;for(;j<g;j++){let e=i[j];if(e){if(u){if(!p)if(y[e])p=e,k[e]=1;else if(!a)return o;if(a&&j===g-1&&!n.length)u=!1,e=p||e,k[e]=0;else if(!p)continue}if(!k[e]){const i=[];let r=!1,h=0;const o=u?y[p]:this.i;if(o){let s;for(let n=0;n<t-S;n++)(s=o[n]&&o[n][e])&&(i[h++]=s,r=!0)}if(r)p=e,n[n.length]=1<h?i.concat.apply([],i):i[0];else if(!a){s=!1;break}k[e]=1}}}}else s=!1;return s&&(o=m(n,e,f,a)),this.cache&&this.j.set(t,o),o}this.F=i,this.u=0,this.o=[];for(var S=0;S<this.g;S++)this.m[S].postMessage({search:!0,limit:e,content:t})},i.prototype.find=function(t,e){return this.where(t,e,1)[0]||null},i.prototype.where=function(t,e,i,s){const n=this.l,r=[];let h,o=0;var c;let l;if(w(t)){i||(i=e);var f=Object.keys(t),a=f.length;if(h=!1,1===a&&"id"===f[0])return[n[t.id]];if((c=this.I)&&!s)for(var u=0;u<c.length;u++){var d=c[u],p=t[d];if(!k(p)){if(l=this.G[d]["@"+p],0==--a)return l;f.splice(f.indexOf(d),1),delete t[d];break}}for(c=Array(a),u=0;u<a;u++)c[u]=f[u].split(":")}else{if(x(t)){for(i=(e=s||Object.keys(n)).length,f=0;f<i;f++)t(a=n[e[f]])&&(r[o++]=a);return r}if(k(e))return[n[t]];if("id"===t)return[n[e]];f=[t],a=1,c=[t.split(":")],h=!0}for(u=(s=l||s||Object.keys(n)).length,d=0;d<u;d++){p=l?s[d]:n[s[d]];let u=!0;for(let i=0;i<a;i++){h||(e=t[f[i]]);const s=c[i],n=s.length;let r=p;if(1<n)for(let t=0;t<n;t++)r=r[s[t]];else r=r[s[0]];if(r!==e){u=!1;break}}if(u&&(r[o++]=p,i&&o===i))break}return r},i.prototype.info=function(){if(!this.g)return{id:this.id,items:this.length,cache:!(!this.cache||!this.cache.s)&&this.cache.s.length,matcher:A.length+(this.v?this.v.length:0),worker:this.g,threshold:this.threshold,depth:this.depth,resolution:this.b,contextual:this.depth&&"strict"===this.f};for(let t=0;t<this.g;t++)this.m[t].postMessage({info:!0,id:this.id})},i.prototype.clear=function(){return this.destroy().init()},i.prototype.destroy=function(){if(this.cache&&(this.j.clear(),this.j=null),this.i=this.h=this.c=null,this.a){const t=this.a.keys;for(let e=0;e<t.length;e++)this.a.index[t[e]].destroy();this.a=this.l=null}return this},i.prototype.export=function(t){const e=!t||k(t.serialize)||t.serialize;if(this.a){const e=!t||k(t.doc)||t.doc;var i=!t||k(t.index)||t.index;t=[];let s=0;if(i)for(i=this.a.keys;s<i.length;s++){const e=this.a.index[i[s]];t[s]=[e.i,e.h,Object.keys(e.c)]}e&&(t[s]=this.l)}else t=[this.i,this.h,Object.keys(this.c)];return e&&(t=JSON.stringify(t)),t},i.prototype.import=function(t,e){(!e||k(e.serialize)||e.serialize)&&(t=JSON.parse(t));const i=O();if(this.a){var s=!e||k(e.doc)||e.doc,n=0;if(!e||k(e.index)||e.index){const s=(e=this.a.keys).length;for(var r=t[0][2];n<r.length;n++)i[r[n]]=1;for(n=0;n<s;n++){r=this.a.index[e[n]];const s=t[n];s&&(r.i=s[0],r.h=s[1],r.c=i)}}s&&(this.l=w(s)?s:t[n])}else{for(s=t[2],n=0;n<s.length;n++)i[s[n]]=1;this.i=t[0],this.h=t[1],this.c=i}};const E=function(){const t=c("\\s+"),e=c("[^a-z0-9 ]"),i=[c("[-/]")," ",e,"",t," "];return function(t){return u(l(t.toLowerCase(),i))}}(),F={icase:function(t){return t.toLowerCase()},simple:function(){const t=c("\\s+"),e=c("[^a-z0-9 ]"),i=c("[-/]"),s=[c("[àáâãäå]"),"a",c("[èéêë]"),"e",c("[ìíîï]"),"i",c("[òóôõöő]"),"o",c("[ùúûüű]"),"u",c("[ýŷÿ]"),"y",c("ñ"),"n",c("[çc]"),"k",c("ß"),"s",c(" & ")," and ",i," ",e,"",t," "];return function(t){return" "===(t=l(t.toLowerCase(),s))?"":t}}(),advanced:function(){const t=c("ae"),e=c("ai"),i=c("ay"),s=c("ey"),n=c("oe"),r=c("ue"),h=c("ie"),o=c("sz"),f=c("zs"),a=c("ck"),d=c("cc"),p=[t,"a",e,"ei",i,"ei",s,"ei",n,"o",r,"u",h,"i",o,"s",f,"s",c("sh"),"s",a,"k",d,"k",c("th"),"t",c("dt"),"t",c("ph"),"f",c("pf"),"f",c("ou"),"o",c("uo"),"u"];return function(t,e){return t?(2<(t=this.simple(t)).length&&(t=l(t,p)),e||1<t.length&&(t=u(t)),t):t}}(),extra:function(){const t=[c("p"),"b",c("z"),"s",c("[cgq]"),"k",c("n"),"m",c("d"),"t",c("[vw]"),"f",c("[aeiouy]"),""];return function(e){if(!e)return e;if(1<(e=this.advanced(e,!0)).length){e=e.split(" ");for(let i=0;i<e.length;i++){const s=e[i];1<s.length&&(e[i]=s[0]+l(s.substring(1),t))}e=u(e=e.join(" "))}return e}}(),balance:E},R=function(){function t(t){this.clear(),this.H=!0!==t&&t}return t.prototype.clear=function(){this.cache=O(),this.count=O(),this.index=O(),this.s=[]},t.prototype.set=function(t,e){if(this.H&&k(this.cache[t])){let i=this.s.length;if(i===this.H){i--;const t=this.s[i];delete this.cache[t],delete this.count[t],delete this.index[t]}this.index[t]=i,this.s[i]=t,this.count[t]=-1,this.cache[t]=e,this.get(t)}else this.cache[t]=e},t.prototype.get=function(t){const e=this.cache[t];if(this.H&&e){var i=++this.count[t];const e=this.index;let n=e[t];if(0<n){const r=this.s;for(var s=n;this.count[r[--n]]<=i&&-1!==n;);if(n++,n!==s){for(i=s;i>n;i--)s=r[i-1],r[i]=s,e[s]=i;r[n]=t,e[t]=n}}}return e},t}();return i}(function(){const t={},e="undefined"!=typeof Blob&&"undefined"!=typeof URL&&URL.createObjectURL;return function(i,s,n,r,h){return n=e?URL.createObjectURL(new Blob(["("+n.toString()+")()"],{type:"text/javascript"})):i+".min.js",t[i+="-"+s]||(t[i]=[]),t[i][h]=new Worker(n),t[i][h].onmessage=r,t[i][h]}}()),this)},7066:function(t,e,i){i.r(e),i.d(e,{default:function(){return p}});var s=i(2784),n=i(5960),r=i(3204),h=i.n(r);function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var i=[],s=!0,n=!1,r=void 0;try{for(var h,o=t[Symbol.iterator]();!(s=(h=o.next()).done)&&(i.push(h.value),!e||i.length!==e);s=!0);}catch(c){n=!0,r=c}finally{try{s||null==o.return||o.return()}finally{if(n)throw r}}return i}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var c=new Error("FlexSearch index is required. Check that your index exists and is valid."),l=new Error("FlexSearch store is required. Check that your store exists and is valid."),f=i(1952),a=i(5679),u=i(2959),d=i(2322);var p=t=>{let{location:e}=t;const{0:i,1:r}=(0,s.useState)(""),p=(0,u.Z)();(0,s.useEffect)((()=>{const t=new URLSearchParams(e.search);r(t.get("query"))}),[e.search]);const g=(0,f.useStaticQuery)("2367946931"),{index:y,store:m}=g.localSearchPages,v=function(t,e,i,n){var r=o((0,s.useState)(null),2),f=r[0],a=r[1];return(0,s.useEffect)((function(){if(!e)throw c;if(!i)throw l}),[e,i]),(0,s.useEffect)((function(){if(e instanceof h())a(e);else{var t=h().create();t.import(e),a(t)}}),[e]),(0,s.useMemo)((function(){return t&&f&&i?f.search(t,n).map((function(t){return i[t]})):[]}),[t,f,i])}(i,y,m);return(0,d.jsx)(a.Z,{frontmatter:{title:"Search this site"},location:e,slug:"Search",theme:p,children:(0,d.jsxs)("div",{className:"search-results-wrapper",children:[(0,d.jsx)("div",{className:"search-form ds-u-margin-bottom--4",children:(0,d.jsx)(n.Z,{label:"Enter your search terms below:",name:"search-field",onChange:t=>{r(t.target.value)},value:i})}),(0,d.jsxs)("div",{className:"search-results",children:[v.length>0&&(0,d.jsxs)("div",{children:['"',i,'" returned ',(0,d.jsx)("strong",{children:v.length})," results."]}),i&&0===v.length&&(0,d.jsxs)("div",{children:['Search for "',i,'" did not return any results.']}),(0,d.jsx)("ul",{children:v.map((t=>{let s=t.body;const n=s.toLowerCase().indexOf(i.toLowerCase());s=s.slice(Math.max(n-160,0),n+160);const r=new RegExp(i,"gi");return s=s.replace(r,`<mark>${i}</mark>`)+"...",(0,d.jsxs)("li",{children:[(0,d.jsx)("a",{href:e.origin+"/"+t.path+e.search,children:t.title}),(0,d.jsx)("p",{dangerouslySetInnerHTML:{__html:s}})]},t.id)}))})]})]})})}}}]);
//# sourceMappingURL=component---src-pages-search-tsx-9fc8536bcd3cb397e646.js.map
!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";function o(){}n.r(e);function r(t){return t()}function s(){return Object.create(null)}function a(t){t.forEach(r)}function i(t){return"function"==typeof t}function l(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}new Set;function c(t,e){t.appendChild(e)}function d(t,e,n){t.insertBefore(e,n||null)}function u(t){t.parentNode.removeChild(t)}function p(t){return document.createElement(t)}function f(t){return document.createTextNode(t)}function x(){return f(" ")}function b(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}new Set;let m;function g(t){m=t}const h=[],y=[],v=[],$=[],w=Promise.resolve();let _=!1;function j(){_||(_=!0,w.then(C))}function A(t){v.push(t)}let O=!1;const S=new Set;function C(){if(!O){O=!0;do{for(let t=0;t<h.length;t+=1){const e=h[t];g(e),M(e.$$)}for(h.length=0;y.length;)y.pop()();for(let t=0;t<v.length;t+=1){const e=v[t];S.has(e)||(S.add(e),e())}v.length=0}while(h.length);for(;$.length;)$.pop()();_=!1,O=!1,S.clear()}}function M(t){if(null!==t.fragment){t.update(),a(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(A)}}const k=new Set;function T(t,e){t&&t.i&&(k.delete(t),t.i(e))}"undefined"!=typeof window?window:global;new Set(["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"]);let E;function P(t,e){const n=t.$$;null!==n.fragment&&(a(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function z(t,e,n,l,c,d,p=[-1]){const f=m;g(t);const x=e.props||{},b=t.$$={fragment:null,ctx:null,props:d,update:o,not_equal:c,bound:s(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:[]),callbacks:s(),dirty:p};let y=!1;if(b.ctx=n?n(t,x,(e,n,...o)=>{const r=o.length?o[0]:n;return b.ctx&&c(b.ctx[e],b.ctx[e]=r)&&(b.bound[e]&&b.bound[e](r),y&&function(t,e){-1===t.$$.dirty[0]&&(h.push(t),j(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}(t,e)),n}):[],b.update(),y=!0,a(b.before_update),b.fragment=!!l&&l(b.ctx),e.target){if(e.hydrate){const t=(v=e.target,Array.from(v.childNodes));b.fragment&&b.fragment.l(t),t.forEach(u)}else b.fragment&&b.fragment.c();e.intro&&T(t.$$.fragment),function(t,e,n){const{fragment:o,on_mount:s,on_destroy:l,after_update:c}=t.$$;o&&o.m(e,n),A(()=>{const e=s.map(r).filter(i);l?l.push(...e):a(e),t.$$.on_mount=[]}),c.forEach(A)}(t,e.target,e.anchor),C()}var v;g(f)}"function"==typeof HTMLElement&&(E=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){for(const t in this.$$.slotted)this.appendChild(this.$$.slotted[t])}attributeChangedCallback(t,e,n){this[t]=n}$destroy(){P(this,1),this.$destroy=o}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}});class q{$destroy(){P(this,1),this.$destroy=o}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}function B(t){let e,n,r,s,a,i,l,f,m,g,h,y;return{c(){e=p("video"),e.innerHTML='<source src="https://arepa.s3.amazonaws.com/baby-bg.mp4" type="video/mp4">\n  Your browser does not support HTML5 video.\n',n=x(),r=p("div"),s=p("div"),a=p("div"),i=p("div"),l=p("h1"),l.textContent="Oscar Barajas Jr.",f=x(),m=p("p"),m.textContent=`Días estimados para nacer: ${t[0]}`,g=x(),h=p("img"),e.autoplay=!0,e.muted=!0,e.loop=!0,b(e,"id","myVideo"),b(e,"class","svelte-1xb0nxd"),b(l,"class","svelte-1xb0nxd"),b(m,"class","svelte-1xb0nxd"),b(i,"class","App-title svelte-1xb0nxd"),h.src!==(y="https://arepa.s3.amazonaws.com/bg-bebeloper.png")&&b(h,"src","https://arepa.s3.amazonaws.com/bg-bebeloper.png"),b(h,"alt","Oscar Barajas"),b(h,"class","svelte-1xb0nxd"),b(a,"class","App-content svelte-1xb0nxd"),b(s,"class","App-container"),b(r,"class","App svelte-1xb0nxd")},m(t,o){d(t,e,o),d(t,n,o),d(t,r,o),c(r,s),c(s,a),c(a,i),c(i,l),c(i,f),c(i,m),c(a,g),c(a,h)},p:o,i:o,o:o,d(t){t&&u(e),t&&u(n),t&&u(r)}}}function D(t){let e=(new Date).getTime(),n=new Date("2020-07-15").getTime()-e;return[Math.round(n/864e5)]}const H=new class extends q{constructor(t){var e;super(),document.getElementById("svelte-1xb0nxd-style")||((e=p("style")).id="svelte-1xb0nxd-style",e.textContent="@import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');*{box-sizing:border-box}body{margin:0;padding:0;font-family:'Pacifico', cursive}#myVideo.svelte-1xb0nxd.svelte-1xb0nxd{position:fixed;right:0;bottom:0;min-width:100%;min-height:100%}.App.svelte-1xb0nxd.svelte-1xb0nxd{position:absolute;bottom:0;color:#f1f1f1;width:100%;background:rgba(24, 96, 179, 0.5)}.App-content.svelte-1xb0nxd.svelte-1xb0nxd{display:flex;justify-content:space-between;align-items:center;width:100%}.App.svelte-1xb0nxd img.svelte-1xb0nxd{width:600px;height:auto;text-align:right}h1.svelte-1xb0nxd.svelte-1xb0nxd{color:#F8CF2D;font-size:80px;margin:0;padding:0;letter-spacing:2px;text-shadow:6px 6px 0px rgba(0,0,0,0.2)}p.svelte-1xb0nxd.svelte-1xb0nxd{font-size:40px;margin:0;padding:0;letter-spacing:1.2px;text-shadow:3px 3px 0px rgba(0,0,0,0.1)}.App-title.svelte-1xb0nxd.svelte-1xb0nxd{margin:0 0 0 10em\n}",c(document.head,e)),z(this,t,D,B,l,{})}}({target:document.querySelector("main")});e.default=H}]);
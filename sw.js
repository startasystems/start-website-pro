if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return r[e]||(i=new Promise((async i=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=i}else importScripts(e),i()}))),i.then((()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]}))},i=(i,r)=>{Promise.all(i.map(e)).then((e=>r(1===e.length?e[0]:e)))},r={require:Promise.resolve(i)};self.define=(i,s,n)=>{r[i]||(r[i]=Promise.resolve().then((()=>{let r={};const f={uri:location.origin+i.slice(1)};return Promise.all(s.map((i=>{switch(i){case"exports":return r;case"module":return f;default:return e(i)}}))).then((e=>{const i=n(...e);return r.default||(r.default=i),r}))})))}}define("./sw.js",["./workbox-f7715658"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"css/vendor-v1.0.0.min.css",revision:"281cf8066980efef4c99dd6d5bca3a89"},{url:"js/config.js",revision:"f84b3b5b0ea40ba6bba13ce09a2264ab"},{url:"js/particles.min.js",revision:"5df8c30836f951680bb53f7c792a97a0"},{url:"js/startasys-v1.0.0.min.js",revision:"103013a069a4e3d934419b2640450bef"},{url:"js/stsadm-v1.0.0.min.js",revision:"4a3df46c9319ebed3d9209a80368bfe7"},{url:"js/vegas.min.js",revision:"d62d186cc33388617b20677fe573b5ec"},{url:"js/vendor-v1.0.0.min.js",revision:"281f68be5290076bc8986501904f0311"},{url:"media/favicon.png",revision:"340341e91548765c6e0cc7a8f4595f73"},{url:"media/loading-err.gif",revision:"3d346d19f380f11d20406edb19ef1cd6"},{url:"media/loading.gif",revision:"e880ee6aeea11550e7bf54c229254afc"},{url:"media/logo-dark.png",revision:"4237d22aec07ef6085cdf3f3d73af7af"},{url:"media/logo-light.png",revision:"db4264f3691fca17efbf1f3676f63b8a"},{url:"media/logo.png",revision:"f5c5ff44d604e6cf4378ac72ad8006d1"}],{})}));

(()=>{"use strict";var e={3912:(e,t,o)=>{o(5363),o(71);var n=o(8880),r=o(9592),a=o(3673);function i(e,t,o,n,r,i){const l=(0,a.up)("router-view");return(0,a.wg)(),(0,a.j4)(l)}const l=(0,a.aZ)({name:"App"});var s=o(4260);const c=(0,s.Z)(l,[["render",i]]),d=c;var u=o(556),p=o(7083),h=o(9582);const f=[{path:"/",component:()=>Promise.all([o.e(736),o.e(812)]).then(o.bind(o,7812))},{path:"/Home",component:()=>Promise.all([o.e(736),o.e(306)]).then(o.bind(o,6306)),children:[{path:"Dashboard",component:()=>Promise.all([o.e(736),o.e(767)]).then(o.bind(o,5767))},{path:"Notification",component:()=>Promise.all([o.e(736),o.e(616)]).then(o.bind(o,7616))},{path:"Orders",component:()=>o.e(385).then(o.bind(o,385))},{path:"FoodOrders",component:()=>o.e(543).then(o.bind(o,9543))},{path:"Offers",component:()=>o.e(893).then(o.bind(o,5245))},{path:"Settings",component:()=>o.e(499).then(o.bind(o,9499))},{path:"ReferAndEarn",component:()=>o.e(697).then(o.bind(o,4697))},{path:"WeCareHelp",component:()=>Promise.all([o.e(736),o.e(678)]).then(o.bind(o,7678))}]},{path:"/dashboard",component:()=>Promise.all([o.e(736),o.e(245)]).then(o.bind(o,245)),children:[{path:"",component:()=>Promise.all([o.e(736),o.e(548)]).then(o.bind(o,1548))}]},{path:"/:catchAll(.*)*",component:()=>Promise.all([o.e(736),o.e(293)]).then(o.bind(o,7293))}],m=f,b=(0,p.BC)((function(){const e=h.r5,t=(0,h.p7)({scrollBehavior:()=>({left:0,top:0}),routes:m,history:e("")});return t}));async function g(e,t){const n="function"===typeof u["default"]?await(0,u["default"])({}):u["default"],{storeKey:a}=await Promise.resolve().then(o.bind(o,556)),i="function"===typeof b?await b({store:n}):b;n.$router=i;const l=e(d);return l.use(r.Z,t),{app:l,store:n,storeKey:a,router:i}}var v=o(9140);const y={config:{notify:{}},plugins:{Notify:v.Z}},w="";async function k({app:e,router:t,store:o,storeKey:n},r){let a=!1;const i=e=>{try{return t.resolve(e).href}catch(o){}return Object(e)===e?null:e},l=e=>{if(a=!0,"string"===typeof e&&/^https?:\/\//.test(e))return void(window.location.href=e);const t=i(e);null!==t&&(window.location.href=t,window.location.reload())},s=window.location.href.replace(window.location.origin,"");for(let d=0;!1===a&&d<r.length;d++)try{await r[d]({app:e,router:t,store:o,ssrContext:null,redirect:l,urlPath:s,publicPath:w})}catch(c){return c&&c.url?void l(c.url):void console.error("[Quasar] boot error:",c)}!0!==a&&(e.use(t),e.use(o,n),e.mount("#q-app"))}g(n.ri,y).then((e=>Promise.all([Promise.resolve().then(o.bind(o,1768))]).then((t=>{const o=t.map((e=>e.default)).filter((e=>"function"===typeof e));k(e,o)}))))},1768:(e,t,o)=>{o.r(t),o.d(t,{default:()=>l,api:()=>i});var n=o(7083),r=o(52),a=o.n(r);const i=a().create({baseURL:"https://api.example.com"}),l=(0,n.xr)((({app:e})=>{e.config.globalProperties.$axios=a(),e.config.globalProperties.$api=i}))},556:(e,t,o)=>{o.r(t),o.d(t,{storeKey:()=>l,default:()=>s,useStore:()=>c});var n=o(7083),r=o(3617),a=o(52),i=o.n(a);const l=Symbol("vuex-key"),s=(0,n.h)((function(){const e=new r.ZP.Store({state:{token:localStorage.getItem("token")||null,xid:localStorage.getItem("xid")||null,latlongs:null},mutations:{setToken(e,t){e.token=t},setxid(e,t){e.xid=t},clearToken(e){e.token=null},clearXid(e){e.xid=null},latlongs(e,t){e.latlongs=t}},actions:{login(e,t){return new Promise(((o,n)=>{i().post("https://chotabeta.app/dev/testenv/api/auth/sign-up",{mobile:t.mobile,otp:t.password}).then((function(r){409==r.data.status_code?i().post("https://chotabeta.app/dev/testenv/api/auth/login",{mobile:t.mobile,password:t.password}).then((function(t){200==t.data.status_code?(e.commit("setToken",t.data.access_token),e.commit("setxid",t.data.xid),localStorage.setItem("token",t.data.access_token),localStorage.setItem("xid",t.data.xid),o(t.data)):n(t.data)})).catch((function(e){n(e)})):200==r.data.status_code?(e.commit("setToken",r.data.access_token),e.commit("setxid",r.data.xid),localStorage.setItem("token",r.data.access_token),localStorage.setItem("xid",r.data.xid),o(r.data)):n(r.data)})).catch((function(e){n(e)}))}))},logout(e){return new Promise(((t,o)=>{e.commit("clearToken"),e.commit("clearXid"),localStorage.removeItem("token"),localStorage.removeItem("xid"),t("LogOut Successfully")}))},latlongs_data(e,t){return new Promise(((o,n)=>{e.commit("latlongs",t.position.latitude+","+t.position.longitude)}))}}});return e}));function c(){return(0,r.oR)(l)}}},t={};function o(n){var r=t[n];if(void 0!==r)return r.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,o),a.exports}o.m=e,(()=>{var e=[];o.O=(t,n,r,a)=>{if(!n){var i=1/0;for(d=0;d<e.length;d++){for(var[n,r,a]=e[d],l=!0,s=0;s<n.length;s++)(!1&a||i>=a)&&Object.keys(o.O).every((e=>o.O[e](n[s])))?n.splice(s--,1):(l=!1,a<i&&(i=a));if(l){e.splice(d--,1);var c=r();void 0!==c&&(t=c)}}return t}a=a||0;for(var d=e.length;d>0&&e[d-1][2]>a;d--)e[d]=e[d-1];e[d]=[n,r,a]}})(),(()=>{o.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return o.d(t,{a:t}),t}})(),(()=>{o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}})(),(()=>{o.f={},o.e=e=>Promise.all(Object.keys(o.f).reduce(((t,n)=>(o.f[n](e,t),t)),[]))})(),(()=>{o.u=e=>"js/"+e+"."+{245:"65259282",293:"3f0eac8a",306:"e677bd80",385:"19f06bf5",499:"12bc83a7",543:"e15a7084",548:"73437c17",616:"19fdbdc6",678:"efbe8727",697:"1d4b996f",767:"232da92b",812:"0f118172",893:"80a723a0"}[e]+".js"})(),(()=>{o.miniCssF=e=>"css/"+({143:"app",736:"vendor"}[e]||e)+"."+{143:"06dd754f",736:"a449e119",767:"ffcb3c2d"}[e]+".css"})(),(()=>{o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="pwa-wibsite:";o.l=(n,r,a,i)=>{if(e[n])e[n].push(r);else{var l,s;if(void 0!==a)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var u=c[d];if(u.getAttribute("src")==n||u.getAttribute("data-webpack")==t+a){l=u;break}}l||(s=!0,l=document.createElement("script"),l.charset="utf-8",l.timeout=120,o.nc&&l.setAttribute("nonce",o.nc),l.setAttribute("data-webpack",t+a),l.src=n),e[n]=[r];var p=(t,o)=>{l.onerror=l.onload=null,clearTimeout(h);var r=e[n];if(delete e[n],l.parentNode&&l.parentNode.removeChild(l),r&&r.forEach((e=>e(o))),t)return t(o)},h=setTimeout(p.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=p.bind(null,l.onerror),l.onload=p.bind(null,l.onload),s&&document.head.appendChild(l)}}})(),(()=>{o.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{o.p=""})(),(()=>{var e=(e,t,o,n)=>{var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var a=a=>{if(r.onerror=r.onload=null,"load"===a.type)o();else{var i=a&&("load"===a.type?"missing":a.type),l=a&&a.target&&a.target.href||t,s=new Error("Loading CSS chunk "+e+" failed.\n("+l+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=i,s.request=l,r.parentNode.removeChild(r),n(s)}};return r.onerror=r.onload=a,r.href=t,document.head.appendChild(r),r},t=(e,t)=>{for(var o=document.getElementsByTagName("link"),n=0;n<o.length;n++){var r=o[n],a=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(a===e||a===t))return r}var i=document.getElementsByTagName("style");for(n=0;n<i.length;n++){r=i[n],a=r.getAttribute("data-href");if(a===e||a===t)return r}},n=n=>new Promise(((r,a)=>{var i=o.miniCssF(n),l=o.p+i;if(t(i,l))return r();e(n,l,r,a)})),r={143:0};o.f.miniCss=(e,t)=>{var o={767:1};r[e]?t.push(r[e]):0!==r[e]&&o[e]&&t.push(r[e]=n(e).then((()=>{r[e]=0}),(t=>{throw delete r[e],t})))}})(),(()=>{var e={143:0};o.f.j=(t,n)=>{var r=o.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else{var a=new Promise(((o,n)=>r=e[t]=[o,n]));n.push(r[2]=a);var i=o.p+o.u(t),l=new Error,s=n=>{if(o.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var a=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;l.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",l.name="ChunkLoadError",l.type=a,l.request=i,r[1](l)}};o.l(i,s,"chunk-"+t,t)}},o.O.j=t=>0===e[t];var t=(t,n)=>{var r,a,[i,l,s]=n,c=0;if(i.some((t=>0!==e[t]))){for(r in l)o.o(l,r)&&(o.m[r]=l[r]);if(s)var d=s(o)}for(t&&t(n);c<i.length;c++)a=i[c],o.o(e,a)&&e[a]&&e[a][0](),e[i[c]]=0;return o.O(d)},n=self["webpackChunkpwa_wibsite"]=self["webpackChunkpwa_wibsite"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var n=o.O(void 0,[736],(()=>o(3912)));n=o.O(n)})();
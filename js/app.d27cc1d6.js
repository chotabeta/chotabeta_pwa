(()=>{"use strict";var e={3912:(e,t,o)=>{o(5363),o(71);var a=o(8880),r=o(9592),s=o(3673);function n(e,t,o,a,r,n){const l=(0,s.up)("router-view");return(0,s.wg)(),(0,s.j4)(l)}const l=(0,s.aZ)({name:"App"});var d=o(4260);const i=(0,d.Z)(l,[["render",n]]),c=i;var m=o(556),p=o(7083),u=o(9582);const h=[{path:"",component:()=>Promise.all([o.e(736),o.e(835)]).then(o.bind(o,8835))},{path:"/CheckLocation",component:()=>Promise.all([o.e(736),o.e(429)]).then(o.bind(o,9429))},{path:"/adding_address_page",component:()=>Promise.all([o.e(736),o.e(477)]).then(o.bind(o,5477))},{path:"/Home",component:()=>Promise.all([o.e(736),o.e(411)]).then(o.bind(o,9411)),children:[{path:"Dashboard",component:()=>Promise.all([o.e(736),o.e(308)]).then(o.bind(o,5308))},{path:"Notification",component:()=>Promise.all([o.e(736),o.e(710)]).then(o.bind(o,7710))},{path:"Orders",component:()=>Promise.all([o.e(736),o.e(4)]).then(o.bind(o,3004))},{path:"Offers",component:()=>Promise.all([o.e(736),o.e(782)]).then(o.bind(o,8782))},{path:"Settings",component:()=>Promise.all([o.e(736),o.e(384)]).then(o.bind(o,9384))},{path:"ReferAndEarn",component:()=>Promise.all([o.e(736),o.e(553)]).then(o.bind(o,5553))},{path:"WeCareHelp",component:()=>Promise.all([o.e(736),o.e(204)]).then(o.bind(o,4204))},{path:"profile",component:()=>Promise.all([o.e(736),o.e(967)]).then(o.bind(o,7967))},{path:"Services",component:()=>Promise.all([o.e(736),o.e(624)]).then(o.bind(o,5624))}]},{path:"/Home/dashboard_Location",component:()=>Promise.all([o.e(736),o.e(341)]).then(o.bind(o,1341))},{path:"/Home/RatingAndReview",component:()=>Promise.all([o.e(736),o.e(114)]).then(o.bind(o,1557))},{path:"/Home/FoodOrders",component:()=>Promise.all([o.e(736),o.e(264)]).then(o.bind(o,1264))},{path:"/Home/OrderDetails",component:()=>Promise.all([o.e(736),o.e(640)]).then(o.bind(o,6640))},{path:"/PickFromStore_layouts_s1",component:()=>Promise.all([o.e(736),o.e(45)]).then(o.bind(o,3045))},{path:"/PickFromStore_layouts_s2",component:()=>Promise.all([o.e(736),o.e(436)]).then(o.bind(o,5436))},{path:"/PickFromStore_layouts_s3",component:()=>Promise.all([o.e(736),o.e(829)]).then(o.bind(o,1829))},{path:"/PickFromStore_Item",component:()=>Promise.all([o.e(736),o.e(559)]).then(o.bind(o,2559))},{path:"/PickFromStore_Checkout",component:()=>Promise.all([o.e(736),o.e(125)]).then(o.bind(o,5125))},{path:"/Coupons",component:()=>Promise.all([o.e(736),o.e(636)]).then(o.bind(o,8636))},{path:"/Coupons_pad",component:()=>Promise.all([o.e(736),o.e(762)]).then(o.bind(o,7762))},{path:"/Coupons_rentme",component:()=>Promise.all([o.e(736),o.e(853)]).then(o.bind(o,6853))},{path:"/Custom_items",component:()=>Promise.all([o.e(736),o.e(965)]).then(o.bind(o,4965))},{path:"/camorder_checkout",component:()=>Promise.all([o.e(736),o.e(614)]).then(o.bind(o,9614))},{path:"/rent_me1",component:()=>Promise.all([o.e(736),o.e(690)]).then(o.bind(o,690))},{path:"/rent_me2",component:()=>Promise.all([o.e(736),o.e(80)]).then(o.bind(o,2080))},{path:"/rent_me3",component:()=>Promise.all([o.e(736),o.e(316)]).then(o.bind(o,5316))},{path:"/PickAndDrop_s1",component:()=>Promise.all([o.e(736),o.e(12)]).then(o.bind(o,9012))},{path:"/PickAndDrop_Checkout",component:()=>Promise.all([o.e(736),o.e(179)]).then(o.bind(o,1179))},{path:"/Search_location",component:()=>Promise.all([o.e(736),o.e(700)]).then(o.bind(o,9700))},{path:"/add_address_page",component:()=>Promise.all([o.e(736),o.e(10)]).then(o.bind(o,5010))},{path:"/dashboard",component:()=>Promise.all([o.e(736),o.e(245)]).then(o.bind(o,245)),children:[{path:"",component:()=>Promise.all([o.e(736),o.e(548)]).then(o.bind(o,1548))}]},{path:"/:catchAll(.*)*",component:()=>Promise.all([o.e(736),o.e(293)]).then(o.bind(o,7293))}],g=h,b=(0,p.BC)((function(){const e=u.r5,t=(0,u.p7)({scrollBehavior:()=>({left:0,top:0}),routes:g,history:e("")});return t}));async function f(e,t){const a="function"===typeof m["default"]?await(0,m["default"])({}):m["default"],{storeKey:s}=await Promise.resolve().then(o.bind(o,556)),n="function"===typeof b?await b({store:a}):b;a.$router=n;const l=e(c);return l.use(r.Z,t),{app:l,store:a,storeKey:s,router:n}}var v=o(4434);const _={config:{notify:{}},plugins:{Notify:v.Z}},w="";async function S({app:e,router:t,store:o,storeKey:a},r){let s=!1;const n=e=>{try{return t.resolve(e).href}catch(o){}return Object(e)===e?null:e},l=e=>{if(s=!0,"string"===typeof e&&/^https?:\/\//.test(e))return void(window.location.href=e);const t=n(e);null!==t&&(window.location.href=t,window.location.reload())},d=window.location.href.replace(window.location.origin,"");for(let c=0;!1===s&&c<r.length;c++)try{await r[c]({app:e,router:t,store:o,ssrContext:null,redirect:l,urlPath:d,publicPath:w})}catch(i){return i&&i.url?void l(i.url):void console.error("[Quasar] boot error:",i)}!0!==s&&(e.use(t),e.use(o,a),e.mount("#q-app"))}f(a.ri,_).then((e=>Promise.all([Promise.resolve().then(o.bind(o,1768))]).then((t=>{const o=t.map((e=>e.default)).filter((e=>"function"===typeof e));S(e,o)}))))},1768:(e,t,o)=>{o.r(t),o.d(t,{default:()=>l,api:()=>n});var a=o(7083),r=o(52),s=o.n(r);const n=s().create({baseURL:"https://stackroger.com/"}),l=(0,a.xr)((({app:e})=>{e.config.globalProperties.$axios=s(),e.config.globalProperties.$api=n}))},556:(e,t,o)=>{o.r(t),o.d(t,{storeKey:()=>l,default:()=>d,useStore:()=>i});var a=o(7083),r=o(3617),s=o(52),n=o.n(s);const l=Symbol("vuex-key"),d=(0,a.h)((function(){const e=new r.ZP.Store({state:{token:localStorage.getItem("token")||null,xid:localStorage.getItem("xid")||null,pincode:localStorage.getItem("pincode")||null,latlongs:localStorage.getItem("latlongs")||null,address:localStorage.getItem("address")||null,showaddress:localStorage.getItem("showaddress")||null,userdetails:localStorage.getItem("userdetails")||null,baselatlongs:localStorage.getItem("baselatlongs")||null},mutations:{setToken(e,t){e.token=t},setxid(e,t){e.xid=t},setlatlongs(e,t){e.latlongs=t},setpincode(e,t){e.pincode=t},setaddress(e,t){e.address=t},setshowaddress(e,t){e.showaddress=t+"..."},setuserdetails(e,t){e.userdetails=t},setbaselatlongs(e,t){e.baselatlongs=t},clearToken(e){e.token=null},clearXid(e){e.xid=null},clearlatlongs(e){e.latlongs=null},clearpincode(e){e.pincode=null},clearaddress(e){e.showaddress=null},clearshowaddress(e){e.showaddress=null},clearuserdetails(e){e.userdetails=null}},actions:{login(e,t){return new Promise(((o,a)=>{n().post("https://stackroger.com/api/auth/sign-up",{mobile:t.mobile,otp:t.password}).then((function(r){409==r.data.status_code?n().post("https://stackroger.com/api/auth/login",{mobile:t.mobile,password:t.password}).then((function(t){200==t.data.status_code?(e.commit("setToken",t.data.access_token),e.commit("setxid",t.data.xid),localStorage.setItem("token",t.data.access_token),localStorage.setItem("xid",t.data.xid),o(t.data)):a(t.data)})).catch((function(e){a(e)})):200==r.data.status_code?(e.commit("setToken",r.data.access_token),e.commit("setxid",r.data.xid),localStorage.setItem("token",r.data.access_token),localStorage.setItem("xid",r.data.xid),o(r.data)):a(r.data)})).catch((function(e){a(e)}))}))},logout(e){return new Promise(((t,o)=>{localStorage.removeItem("token"),localStorage.removeItem("xid"),localStorage.removeItem("latlongs"),localStorage.removeItem("pincode"),localStorage.removeItem("address"),localStorage.removeItem("showaddress"),localStorage.removeItem("userdetails"),e.commit("clearToken"),e.commit("clearXid"),e.commit("clearlatlongs"),e.commit("clearpincode"),e.commit("clearaddress"),e.commit("clearshowaddress"),e.commit("clearuserdetails"),t("LogOut Successfully")}))},latlongs_data(e,t){return new Promise(((o,a)=>{localStorage.removeItem("latlongs"),e.commit("clearlatlongs"),localStorage.setItem("baselatlongs",t.position.latitude+","+t.position.longitude),e.commit("setbaselatlongs",t.position.latitude+","+t.position.longitude),localStorage.setItem("latlongs",t.position.latitude+","+t.position.longitude),e.commit("setlatlongs",t.position.latitude+","+t.position.longitude),o(t.position.latitude+","+t.position.longitude)}))},adddress_data(e,t){return new Promise(((o,a)=>{localStorage.removeItem("pincode"),e.commit("clearpincode"),localStorage.removeItem("address"),localStorage.removeItem("showaddress"),e.commit("clearaddress"),e.commit("clearshowaddress");var r=t.address.address_components.length;t.address.address_components[r-1].long_name?(localStorage.setItem("pincode",t.address.address_components[r-1].long_name),e.commit("setpincode",t.address.address_components[r-1].long_name)):a("please select pincode"),localStorage.setItem("address",t.address.formatted_address),e.commit("setaddress",t.address.formatted_address);var s=t.address.formatted_address.substring(0,28);localStorage.setItem("showaddress",s),e.commit("setshowaddress",s),o("success")}))},saved_asdderss_data(e,t){return new Promise(((o,a)=>{localStorage.removeItem("latlongs"),e.commit("clearlatlongs"),localStorage.removeItem("pincode"),e.commit("clearpincode"),localStorage.removeItem("address"),localStorage.removeItem("showaddress"),e.commit("clearaddress"),e.commit("clearshowaddress");var r=t.address.address_components.length;t.address.address_components[r-1].long_name?(localStorage.setItem("pincode",t.address.address_components[r-1].long_name),e.commit("setpincode",t.address.address_components[r-1].long_name)):a("please select pincode"),localStorage.setItem("latlongs",t.saved_address.location),e.commit("setlatlongs",t.saved_address.location),localStorage.setItem("address",t.saved_address.name),localStorage.setItem("showaddress",t.saved_address.name.substring(0,28)),e.commit("setaddress",t.saved_address.name),e.commit("setshowaddress",t.saved_address.name.substring(0,28)),o("200")}))},searched_adderss_data(e,t){return console.log(t,"searched data"),new Promise(((o,a)=>{localStorage.removeItem("latlongs"),e.commit("clearlatlongs"),localStorage.removeItem("pincode"),e.commit("clearpincode"),localStorage.removeItem("address"),localStorage.removeItem("showaddress"),e.commit("clearaddress"),e.commit("clearshowaddress"),localStorage.setItem("pincode",t.pincode),e.commit("setpincode",t.pincode),localStorage.setItem("latlongs",t.latlongs),e.commit("setlatlongs",t.latlongs),localStorage.setItem("address",t.address_data),localStorage.setItem("showaddress",t.address_data.substring(0,28)),e.commit("setaddress",t.address_data),e.commit("setshowaddress",t.address_data.substring(0,28)),o("200")}))},userdetails(e,t){return new Promise(((o,a)=>{var r=JSON.stringify(t);e.commit("setuserdetails",r),localStorage.setItem("userdetails",r)}))}}});return e}));function i(){return(0,r.oR)(l)}}},t={};function o(a){var r=t[a];if(void 0!==r)return r.exports;var s=t[a]={exports:{}};return e[a](s,s.exports,o),s.exports}o.m=e,(()=>{var e=[];o.O=(t,a,r,s)=>{if(!a){var n=1/0;for(c=0;c<e.length;c++){for(var[a,r,s]=e[c],l=!0,d=0;d<a.length;d++)(!1&s||n>=s)&&Object.keys(o.O).every((e=>o.O[e](a[d])))?a.splice(d--,1):(l=!1,s<n&&(n=s));if(l){e.splice(c--,1);var i=r();void 0!==i&&(t=i)}}return t}s=s||0;for(var c=e.length;c>0&&e[c-1][2]>s;c--)e[c]=e[c-1];e[c]=[a,r,s]}})(),(()=>{o.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return o.d(t,{a:t}),t}})(),(()=>{o.d=(e,t)=>{for(var a in t)o.o(t,a)&&!o.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}})(),(()=>{o.f={},o.e=e=>Promise.all(Object.keys(o.f).reduce(((t,a)=>(o.f[a](e,t),t)),[]))})(),(()=>{o.u=e=>"js/"+e+"."+{4:"9a53207b",10:"da6c03f0",12:"231a2eae",45:"a7013c0a",80:"67a41e31",114:"b4b369ab",125:"4bd8c8d4",179:"9857006c",204:"781e8ae3",245:"6257bd83",264:"0f5ade09",293:"e463a1f3",308:"63be3bbf",316:"c61d9817",341:"844a7037",384:"7cb9d1f4",411:"b5e7a2ca",429:"bd216366",436:"e2e57ea2",477:"da69c76f",548:"925337bb",553:"4b65bbfc",559:"c8ed9c53",614:"7d3dd1b1",624:"3bd5b825",636:"bd392550",640:"6816f71f",690:"9cdbe41b",700:"dfe2c5ff",710:"cc0fb254",762:"0d5660f8",782:"9e573887",829:"c2c9e0c4",835:"ed91940b",853:"21582bc5",965:"d05391a5",967:"5d82ef3e"}[e]+".js"})(),(()=>{o.miniCssF=e=>"css/"+({143:"app",736:"vendor"}[e]||e)+"."+{45:"fe34fb39",143:"b2f003cb",264:"69a6e2db",436:"6b225f03",559:"0f68a715",736:"a449e119"}[e]+".css"})(),(()=>{o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="pwa-wibsite:";o.l=(a,r,s,n)=>{if(e[a])e[a].push(r);else{var l,d;if(void 0!==s)for(var i=document.getElementsByTagName("script"),c=0;c<i.length;c++){var m=i[c];if(m.getAttribute("src")==a||m.getAttribute("data-webpack")==t+s){l=m;break}}l||(d=!0,l=document.createElement("script"),l.charset="utf-8",l.timeout=120,o.nc&&l.setAttribute("nonce",o.nc),l.setAttribute("data-webpack",t+s),l.src=a),e[a]=[r];var p=(t,o)=>{l.onerror=l.onload=null,clearTimeout(u);var r=e[a];if(delete e[a],l.parentNode&&l.parentNode.removeChild(l),r&&r.forEach((e=>e(o))),t)return t(o)},u=setTimeout(p.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=p.bind(null,l.onerror),l.onload=p.bind(null,l.onload),d&&document.head.appendChild(l)}}})(),(()=>{o.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{o.p=""})(),(()=>{var e=(e,t,o,a)=>{var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var s=s=>{if(r.onerror=r.onload=null,"load"===s.type)o();else{var n=s&&("load"===s.type?"missing":s.type),l=s&&s.target&&s.target.href||t,d=new Error("Loading CSS chunk "+e+" failed.\n("+l+")");d.code="CSS_CHUNK_LOAD_FAILED",d.type=n,d.request=l,r.parentNode.removeChild(r),a(d)}};return r.onerror=r.onload=s,r.href=t,document.head.appendChild(r),r},t=(e,t)=>{for(var o=document.getElementsByTagName("link"),a=0;a<o.length;a++){var r=o[a],s=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(s===e||s===t))return r}var n=document.getElementsByTagName("style");for(a=0;a<n.length;a++){r=n[a],s=r.getAttribute("data-href");if(s===e||s===t)return r}},a=a=>new Promise(((r,s)=>{var n=o.miniCssF(a),l=o.p+n;if(t(n,l))return r();e(a,l,r,s)})),r={143:0};o.f.miniCss=(e,t)=>{var o={45:1,264:1,436:1,559:1};r[e]?t.push(r[e]):0!==r[e]&&o[e]&&t.push(r[e]=a(e).then((()=>{r[e]=0}),(t=>{throw delete r[e],t})))}})(),(()=>{var e={143:0};o.f.j=(t,a)=>{var r=o.o(e,t)?e[t]:void 0;if(0!==r)if(r)a.push(r[2]);else{var s=new Promise(((o,a)=>r=e[t]=[o,a]));a.push(r[2]=s);var n=o.p+o.u(t),l=new Error,d=a=>{if(o.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var s=a&&("load"===a.type?"missing":a.type),n=a&&a.target&&a.target.src;l.message="Loading chunk "+t+" failed.\n("+s+": "+n+")",l.name="ChunkLoadError",l.type=s,l.request=n,r[1](l)}};o.l(n,d,"chunk-"+t,t)}},o.O.j=t=>0===e[t];var t=(t,a)=>{var r,s,[n,l,d]=a,i=0;if(n.some((t=>0!==e[t]))){for(r in l)o.o(l,r)&&(o.m[r]=l[r]);if(d)var c=d(o)}for(t&&t(a);i<n.length;i++)s=n[i],o.o(e,s)&&e[s]&&e[s][0](),e[n[i]]=0;return o.O(c)},a=self["webpackChunkpwa_wibsite"]=self["webpackChunkpwa_wibsite"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})();var a=o.O(void 0,[736],(()=>o(3912)));a=o.O(a)})();
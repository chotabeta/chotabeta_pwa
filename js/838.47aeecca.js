"use strict";(self["webpackChunkpwa_wibsite"]=self["webpackChunkpwa_wibsite"]||[]).push([[838],{9838:(e,t,o)=>{o.r(t),o.d(t,{default:()=>j});o(246);var a=o(3673),s=o(2323);const c=(0,a.Uk)("Available Coupons "),n={class:"row"},r={class:"col-12 row cb-shadow-1 q-my-sm q-pa-sm cb-round-borders-10"},l={class:"col-2"},i=["src"],u={class:"col-10 q-pl-md"},p={class:"text-weight-bolder cb-font flex cb-text-blue-8"},d={class:"q-py-xs cb-font-12 text-grey-8"},_={class:"text-center text-grey-6"},b=(0,a._)("br",null,null,-1),g=(0,a._)("p",{class:"text-h6 text-bold"},"No Coupon Available",-1),w=(0,a._)("p",{class:"cb-font-16"},"We are here to serve. Get your packages,groceries and many more to your door step at single click.",-1);function h(e,t,o,h,m,f){const x=(0,a.up)("q-toolbar"),v=(0,a.up)("q-header"),k=(0,a.up)("q-avatar"),y=(0,a.up)("q-space"),q=(0,a.up)("q-btn"),C=(0,a.up)("q-page"),Z=(0,a.up)("q-icon"),$=(0,a.up)("q-page-container"),Q=(0,a.up)("q-layout");return(0,a.wg)(),(0,a.j4)(Q,{view:"lHh lpr lFf"},{default:(0,a.w5)((()=>[(0,a.Wm)(v,null,{default:(0,a.w5)((()=>[(0,a.Wm)(x,{class:"cb-bg-white-2 cb-text-blue-8 row justify-center cb-text-blue-8 text-weight-bolder cb-font-16"},{default:(0,a.w5)((()=>[c])),_:1})])),_:1}),(0,a.Wm)($,null,{default:(0,a.w5)((()=>[0==h.coupons_available?((0,a.wg)(),(0,a.j4)(C,{key:0,class:"q-px-sm"},{default:(0,a.w5)((()=>[(0,a._)("div",n,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(h.coupons,(e=>((0,a.wg)(),(0,a.iD)("div",r,[(0,a._)("div",l,[(0,a.Wm)(k,{class:"shadow-2",size:"60px"},{default:(0,a.w5)((()=>[(0,a._)("img",{src:e.coupon_image},null,8,i)])),_:2},1024)]),(0,a._)("div",u,[(0,a._)("span",p,[(0,a.Uk)((0,s.zw)(e.name)+" ",1),(0,a.Wm)(y),(0,a.Wm)(q,{style:{border:"2px dashed #F58321",width:"120px","font-size":"11px"},class:"cb-font-16 q-pa-none text-bold cb-text-orange-8",flat:"",size:"xs",rounded:"",onClick:t=>f.screen_redirection(e)},{default:(0,a.w5)((()=>[(0,a.Uk)((0,s.zw)(e.code),1)])),_:2},1032,["onClick"])]),(0,a._)("span",d,(0,s.zw)(e.description),1)])])))),256))])])),_:1})):((0,a.wg)(),(0,a.j4)(C,{key:1,class:"q-px-sm flex flex-center q-pa-xl"},{default:(0,a.w5)((()=>[(0,a._)("div",_,[(0,a.Wm)(Z,{name:"emoji_symbols",size:"100px"}),b,g,w,(0,a.Wm)(q,{class:"full-width cb-round-borders-10 cb-font-16 cb-bg-orange-8 text-white",label:"countinue shopping",onClick:t[0]||(t[0]=e=>f.screen_redirection_no_coupon())})])])),_:1}))])),_:1})])),_:1})}o(1768);var m=o(1959);let f=window.matchMedia("only screen and (max-width: 760px)").matches;f||(window.location="https://chotabeta.com/pwa");const x={setup(){return{coupons:(0,m.iH)([]),redeem_points:(0,m.iH)(null),category:(0,m.iH)(null),coupons_available:(0,m.iH)(0)}},mounted(){this.getToken(),this.$route.query.service_id&&this.getcoupons()},methods:{getToken(){var e=this;e.access_token=e.$store.state.token,null==e.access_token&&e.$router.push("")},getcoupons(){var e=this;let t={headers:{Authorization:`Bearer ${e.access_token}`}};e.$api.get("/api/available-coupons?service_id="+e.$route.query.service_id,t).then((function(t){console.log(t.data),204==t.data.status_code?e.coupons_available=1:(e.coupons=t.data.coupons,e.redeem_points=t.data.redeem_points)})).catch((function(e){console.log(e)}))},screen_redirection(e){var t=this;t.category=JSON.parse(localStorage.getItem("category")),"1"==t.$route.query.service_id&&(localStorage.setItem("coupon1",e.code),t.$router.push("PickAndDrop_Checkout"))},screen_redirection_no_coupon(e){var t=this;t.category=JSON.parse(localStorage.getItem("category")),"1"==t.$route.query.service_id&&t.$router.push("PickAndDrop_Checkout")}}};var v=o(4260),k=o(3066),y=o(3812),q=o(9570),C=o(2652),Z=o(4379),$=o(5096),Q=o(2025),W=o(8240),z=o(4554),H=o(7518),A=o.n(H);const S=(0,v.Z)(x,[["render",h]]),j=S;A()(x,"components",{QLayout:k.Z,QHeader:y.Z,QToolbar:q.Z,QPageContainer:C.Z,QPage:Z.Z,QAvatar:$.Z,QSpace:Q.Z,QBtn:W.Z,QIcon:z.Z})}}]);
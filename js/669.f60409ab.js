"use strict";(self["webpackChunkpwa_wibsite"]=self["webpackChunkpwa_wibsite"]||[]).push([[669],{9179:(e,o,t)=>{t.r(o),t.d(o,{default:()=>P});t(246);var a=t(3673),s=t(2323);const c=(0,a.Uk)("Available Coupons "),r=(0,a._)("div",{id:"loader2",class:"pre-loader",style:{display:"none"}},null,-1),n={class:"row"},l={class:"col-12 row cb-shadow-1 q-my-sm q-pa-sm cb-round-borders-10"},i={class:"col-2"},u=["src"],d={class:"col-10 q-pl-md"},p={class:"text-weight-bolder cb-font flex cb-text-blue-8"},_={class:"q-py-xs cb-font-12 text-grey-8"},b={class:"text-center text-grey-6"},g=(0,a._)("br",null,null,-1),h=(0,a._)("p",{class:"text-h6 text-bold"},"No Coupon Available",-1),m=(0,a._)("p",{class:"cb-font-16"},"We are here to serve. Get your packages,groceries and many more to your door step at single click.",-1);function w(e,o,t,w,y,v){const k=(0,a.up)("q-toolbar"),f=(0,a.up)("q-header"),x=(0,a.up)("q-avatar"),q=(0,a.up)("q-space"),$=(0,a.up)("q-btn"),C=(0,a.up)("q-page"),S=(0,a.up)("q-icon"),Z=(0,a.up)("q-page-container"),Q=(0,a.up)("q-layout");return(0,a.wg)(),(0,a.j4)(Q,{view:"lHh lpr lFf"},{default:(0,a.w5)((()=>[(0,a.Wm)(f,null,{default:(0,a.w5)((()=>[(0,a.Wm)(k,{class:"cb-bg-white-2 cb-text-blue-8 row justify-center cb-text-blue-8 text-weight-bolder cb-font-16"},{default:(0,a.w5)((()=>[c])),_:1})])),_:1}),(0,a.Wm)(Z,null,{default:(0,a.w5)((()=>[0==w.coupons_available?((0,a.wg)(),(0,a.j4)(C,{key:0,class:"q-px-sm"},{default:(0,a.w5)((()=>[r,(0,a._)("div",n,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(w.coupons,(e=>((0,a.wg)(),(0,a.iD)("div",l,[(0,a._)("div",i,[(0,a.Wm)(x,{class:"shadow-2",size:"60px"},{default:(0,a.w5)((()=>[(0,a._)("img",{src:e.coupon_image},null,8,u)])),_:2},1024)]),(0,a._)("div",d,[(0,a._)("span",p,[(0,a.Uk)((0,s.zw)(e.name)+" ",1),(0,a.Wm)(q),(0,a.Wm)($,{style:{border:"2px dashed #F58321",width:"120px","font-size":"11px"},class:"cb-font-16 q-pa-none text-bold cb-text-orange-8",flat:"",size:"xs",rounded:"",onClick:o=>v.screen_redirection(e)},{default:(0,a.w5)((()=>[(0,a.Uk)((0,s.zw)(e.code),1)])),_:2},1032,["onClick"])]),(0,a._)("span",_,(0,s.zw)(e.description),1)])])))),256))])])),_:1})):((0,a.wg)(),(0,a.j4)(C,{key:1,class:"q-px-sm flex flex-center q-pa-xl"},{default:(0,a.w5)((()=>[(0,a._)("div",b,[(0,a.Wm)(S,{name:"emoji_symbols",size:"100px"}),g,h,m,(0,a.Wm)($,{class:"full-width cb-round-borders-10 cb-font-16 cb-bg-orange-8 text-white",label:"countinue shopping",onClick:o[0]||(o[0]=e=>v.screen_redirection_no_coupon())})])])),_:1}))])),_:1})])),_:1})}t(1768);var y=t(1959);let v=window.matchMedia("only screen and (max-width: 760px)").matches;v||(window.location="https://chotabeta.com/pwa");const k={setup(){return{coupons:(0,y.iH)([]),redeem_points:(0,y.iH)(null),category:(0,y.iH)(null),coupons_available:(0,y.iH)(0)}},mounted(){this.getToken(),this.$route.query.service_id&&this.getcoupons()},methods:{getToken(){var e=this;e.access_token=e.$store.state.token,null==e.access_token&&e.$router.push("")},getcoupons(){var e=this,o=document.getElementById("loader2");o.style.display="block";let t={headers:{Authorization:`Bearer ${e.access_token}`}};e.$api.get("/api/available-coupons?service_id="+e.$route.query.service_id,t).then((function(t){o.style.display="none",console.log(t.data),204==t.data.status_code?e.coupons_available=1:(e.coupons=t.data.coupons,e.redeem_points=t.data.redeem_points)})).catch((function(e){console.log(e)}))},screen_redirection(e){var o=this;o.category=JSON.parse(localStorage.getItem("category")),"1"==o.$route.query.service_id&&(localStorage.setItem("coupon1",e.code),o.$router.push("PickAndDrop_Checkout")),o.$route.query.service_id==o.category.service_id&&(localStorage.setItem("coupon_pick",e.code),o.$router.push("PickFromStore_Checkout")),"11"==o.$route.query.service_id&&(localStorage.setItem("coupon_rent_me",e.code),o.$router.push("rent_me3"))},screen_redirection_no_coupon(e){var o=this;o.category=JSON.parse(localStorage.getItem("category")),"1"==o.$route.query.service_id&&o.$router.push("PickAndDrop_Checkout"),o.$route.query.service_id==o.category.service_id&&o.$router.push("PickFromStore_Checkout")}}};var f=t(4260),x=t(3066),q=t(3812),$=t(9570),C=t(2652),S=t(4379),Z=t(5096),Q=t(2025),W=t(8240),z=t(4554),H=t(7518),I=t.n(H);const A=(0,f.Z)(k,[["render",w]]),P=A;I()(k,"components",{QLayout:x.Z,QHeader:q.Z,QToolbar:$.Z,QPageContainer:C.Z,QPage:S.Z,QAvatar:Z.Z,QSpace:Q.Z,QBtn:W.Z,QIcon:z.Z})}}]);
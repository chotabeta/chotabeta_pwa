"use strict";(self["webpackChunkpwa_wibsite"]=self["webpackChunkpwa_wibsite"]||[]).push([[549],{3549:(e,t,s)=>{s.r(t),s.d(t,{default:()=>x});var r=s(3673),a=s(2323);const o=(0,r._)("div",{id:"loader2",class:"pre-loader",style:{display:"none"}},null,-1),i={class:"row cb-bg-white-2 text-h6 cb-text-orange-8 justify-center"},c={key:0},n={key:1},l=(0,r.Uk)(" Select Category "),d={key:0,class:"row",style:{height:"70vh",overflow:"scroll"}},u=["src"],_=(0,r._)("br",null,null,-1),g={class:"text-black"};function p(e,t,s,p,k,m){const h=(0,r.up)("q-card-section"),y=(0,r.up)("q-avatar"),w=(0,r.up)("q-card"),v=(0,r.up)("q-page");return(0,r.wg)(),(0,r.j4)(v,null,{default:(0,r.w5)((()=>[o,(0,r._)("div",i,[2==e.$route.query.id?((0,r.wg)(),(0,r.iD)("span",c,"Pick From Store")):(0,r.kq)("",!0),1==e.$route.query.id?((0,r.wg)(),(0,r.iD)("span",n,"Pick And Drop")):(0,r.kq)("",!0)]),(0,r.Wm)(w,{class:"q-ma-md cb-round-borders-20 shadow-5"},{default:(0,r.w5)((()=>[(0,r.Wm)(h,{class:"text-h6 q-pa-sm cb-bg-blue-8 cb-text-white-1"},{default:(0,r.w5)((()=>[l])),_:1}),(0,r.Wm)(h,{class:"q-pa-sm"},{default:(0,r.w5)((()=>[0!=p.categories.length?((0,r.wg)(),(0,r.iD)("div",d,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(p.categories,(e=>((0,r.wg)(),(0,r.iD)("div",{class:"col-4 text-center cb-text-grey-4 q-mt-sm",key:e},[(0,r.Wm)(y,{size:"70px",class:"shadow-2",onClick:t=>m.services_page_redirection(e)},{default:(0,r.w5)((()=>[(0,r.Wm)(y,{size:"40px",square:""},{default:(0,r.w5)((()=>[(0,r._)("img",{src:e.category_image_for_mobile},null,8,u)])),_:2},1024)])),_:2},1032,["onClick"]),_,(0,r._)("span",g,(0,a.zw)(e.name),1)])))),128))])):(0,r.kq)("",!0)])),_:1}),(0,r.Wm)(h,{class:"q-py-md"})])),_:1})])),_:1})}s(2100);var k=s(1959);s(1768);const m={setup(){return{access_token:(0,k.iH)(null),categories:(0,k.iH)([]),xid:(0,k.iH)(null)}},mounted(){var e=this;e.getAccessToken(),this.$route.query.id&&this.service_page()},methods:{getAccessToken(){var e=this;e.$store.state.token?e.access_token=e.$store.state.token:e.access_token=e.$store.state.token_cb,e.$store.state.xid?e.xid=e.$store.state.xid:e.xid=e.$store.state.xid_cb,null!=e.access_token&&e.access_token||e.$router.push("/")},service_page(){var e=this,t=document.getElementById("loader2");t.style.display="block";let s={headers:{Authorization:`Bearer ${e.access_token}`}};e.$api.get("/api/get-categories-new?pincode="+e.$store.state.pincode+"&service_id="+e.$route.query.id+"&xid="+e.xid,s).then((function(s){t.style.display="none",200==s.data.status_code?(e.categories=s.data.all_categories,localStorage.setItem("categories",JSON.stringify(e.categories))):e.$q.notify({message:s.data.message,type:"negative",progress:!0})})).catch((function(e){console.log(e)}))},services_page_redirection(e){var t=this;localStorage.setItem("category",JSON.stringify(e)),2==e.main_service_id?2==e.screen_redirection?t.$router.push("/PickFromStore_layouts_s1"):0==e.screen_redirection&&t.$router.push("/PickFromStore_layouts_s2"):1==e.main_service_id?(console.log(e),30==e.id?t.PAD_others_Dailog=!0:t.$router.push("/PickAndDrop_s1")):3==e.main_service_id&&t.$router.push("/PickAndDrop_s1?s_id=3")}}};var h=s(4260),y=s(4379),w=s(151),v=s(5589),b=s(5096),$=s(7518),f=s.n($);const q=(0,h.Z)(m,[["render",p]]),x=q;f()(m,"components",{QPage:y.Z,QCard:w.Z,QCardSection:v.Z,QAvatar:b.Z})}}]);
"use strict";(self["webpackChunkpwa_wibsite"]=self["webpackChunkpwa_wibsite"]||[]).push([[887],{3887:(e,t,s)=>{s.r(t),s.d(t,{default:()=>_});var o=s(3673);const a=(0,o._)("div",{id:"loader2",class:"pre-loader",style:{display:"none"}},null,-1),n=(0,o._)("div",{class:"flex cb-bg-white-2 flex-center"},[(0,o._)("span",{class:"cb-text-orange-8 cb-font-16 text-weight-bolder"},"Offers")],-1),r={key:0,class:"q-px-md"};function c(e,t,s,c,l,i){const d=(0,o.up)("q-img"),f=(0,o.up)("q-card-section"),u=(0,o.up)("q-card"),p=(0,o.up)("q-page");return(0,o.wg)(),(0,o.j4)(p,null,{default:(0,o.w5)((()=>[a,n,0!=c.offers.length?((0,o.wg)(),(0,o.iD)("div",r,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(c.offers,(e=>((0,o.wg)(),(0,o.j4)(u,{class:"q-my-md shadow-1",key:e,style:{"border-radius":"15px",overflow:"hidden"}},{default:(0,o.w5)((()=>[(0,o.Wm)(f,{class:"q-pa-none"},{default:(0,o.w5)((()=>[(0,o.Wm)(d,{src:e.image,height:"154px"},null,8,["src"])])),_:2},1024)])),_:2},1024)))),128))])):(0,o.kq)("",!0)])),_:1})}s(1768);var l=s(1959);const i={setup(){return{offers:(0,l.iH)([]),access_token:(0,l.iH)(null),xid:(0,l.iH)(null)}},mounted(){this.getAccessToken(),this.getalloffers()},methods:{getAccessToken(){var e=this;e.$store.state.token?e.access_token=e.$store.state.token:e.access_token=e.$store.state.token_cb,e.$store.state.xid?e.xid=e.$store.state.xid:e.xid=e.$store.state.xid_cb,null!=e.access_token&&e.access_token||e.$router.push("/")},getalloffers(){var e=this,t=document.getElementById("loader2");t.style.display="block";let s={headers:{Authorization:`Bearer ${e.access_token}`}};e.$api.get("/api/get-offers-new",s).then((function(s){t.style.display="none",e.offers=s.data.offers})).catch((function(e){console.log(e)}))}}};var d=s(4260),f=s(4379),u=s(151),p=s(5589),g=s(4027),h=s(7518),k=s.n(h);const w=(0,d.Z)(i,[["render",c]]),_=w;k()(i,"components",{QPage:f.Z,QCard:u.Z,QCardSection:p.Z,QImg:g.Z})}}]);
"use strict";(self["webpackChunkpwa_wibsite"]=self["webpackChunkpwa_wibsite"]||[]).push([[678],{7678:(e,t,s)=>{s.r(t),s.d(t,{default:()=>H});var a=s(3673);const l=(0,a._)("div",{class:"row items-center justify-center"},[(0,a._)("span",{class:"cb-text-orange-8"},"We Care | Help")],-1),c={class:"row"},n=(0,a._)("div",{class:"col-8"},[(0,a._)("h6",null,"We would love to help you. let's connect.")],-1),o={class:"col-4 row items-center justify-center"},r=(0,a._)("span",null,"Connect Us",-1),u=(0,a._)("span",{class:"cb-text-blue-8 text-bold"},[(0,a.Uk)("Mail Us: "),(0,a._)("a",{href:"mailto:support@chotabeta.com",class:"cb-text-blue-8"},"support@chotabeta.com")],-1),p=(0,a._)("br",null,null,-1),d=(0,a._)("span",{class:"cb-text-grey-4"},"Need Help!",-1),i=(0,a._)("br",null,null,-1),_=(0,a._)("span",{class:"cb-text-grey-4"},"Mobile Number.",-1),b=(0,a._)("br",null,null,-1),h=(0,a._)("span",{class:"cb-text-grey-4"},"Order Id: ",-1),g=(0,a._)("br",null,null,-1),w=(0,a._)("span",{class:"cb-text-grey-4"},"Issue Description: ",-1);function m(e,t,s,m,v,f){const x=(0,a.up)("q-img"),k=(0,a.up)("q-card-section"),y=(0,a.up)("q-card"),C=(0,a.up)("q-page");return(0,a.wg)(),(0,a.j4)(C,{class:"q-pa-md"},{default:(0,a.w5)((()=>[l,(0,a._)("div",c,[n,(0,a._)("div",o,[(0,a.Wm)(x,{src:"https://chotabeta.app/dev/testenv/public/uploads/assets/support_girl_we_care.png",style:{height:"120px","max-width":"100px"}})])]),(0,a._)("div",null,[(0,a.Wm)(y,null,{default:(0,a.w5)((()=>[(0,a.Wm)(k,{class:"bg-grey-2 text-gray-9 text-h6"},{default:(0,a.w5)((()=>[r])),_:1}),(0,a.Wm)(k,null,{default:(0,a.w5)((()=>[u,p,d,i,_,b,h,g,w])),_:1})])),_:1})])])),_:1})}var v=s(52),f=s.n(v),x=s(1959);const k={setup(){return{data:(0,x.iH)(null)}},mounted(){this.getAccessToken(),this.gettodaydata()},methods:{getAccessToken(){var e=this;e.access_token=e.$store.state.token,null!=e.access_token&&e.access_token||e.$router.push("")},gettodaydata(){var e=this;e.loading=!0;let t={headers:{Authorization:`Bearer ${e.access_token}`}};f().get("https://chotabeta.app/dev/testenv/api/we-care",t).then((function(t){e.loading=!1,e.data=t.data.data})).catch((function(e){console.log(e)}))}}};var y=s(4260),C=s(4379),W=s(4027),q=s(151),Z=s(5589),Q=s(7518),j=s.n(Q);const A=(0,y.Z)(k,[["render",m]]),H=A;j()(k,"components",{QPage:C.Z,QImg:W.Z,QCard:q.Z,QCardSection:Z.Z})}}]);
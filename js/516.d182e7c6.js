"use strict";(self["webpackChunkpwa_wibsite"]=self["webpackChunkpwa_wibsite"]||[]).push([[516],{6331:(e,t,a)=>{a.r(t),a.d(t,{default:()=>U});var s=a(3673),l=a(2323);const n={class:"flex cb-bg-white-2 flex-center cb-font-16 text-weight-bolder"},o=(0,s._)("span",{class:"cb-text-orange-8"},"Notifications",-1),c={key:0,class:"q-px-md"},i={class:"row"},r={class:"col-3 q-pa-md"},u=(0,s._)("img",{src:"https://chotabeta.com/icons/Group%202.png"},null,-1),d={class:"col-9"},p={class:"cb-text-blue-8 text-bold"},g=(0,s._)("br",null,null,-1),m={class:"cb-text-grey-5"},b=(0,s._)("br",null,null,-1),_={class:"cb-text-grey-4"},f={key:1,class:"q-px-md text-center cb-text-grey-4 q-mt-xl"},h=(0,s._)("span",{class:"text-h4 text-weight-bolder text-grey-2"},"0 Results",-1),w=(0,s._)("br",null,null,-1),x=(0,s._)("br",null,null,-1),q=(0,s._)("span",{class:"text-h6 text-weight-bolder"},"No Notifications",-1),y=(0,s._)("br",null,null,-1),k=(0,s._)("span",null,"We are to serve .Get your pachages, groceries and many more to your step at single click",-1),v=(0,s._)("br",null,null,-1),W=(0,s._)("span",{class:"text-h6 text-weight-bolder q-my-md"},"Are You Sure ?",-1),C=(0,s._)("br",null,null,-1),Z=(0,s._)("span",null,"You Want to Clear All The Notifications",-1),Q=(0,s._)("br",null,null,-1),$=(0,s._)("br",null,null,-1);function A(e,t,a,A,z,D){const N=(0,s.up)("q-space"),j=(0,s.up)("q-btn"),B=(0,s.up)("q-avatar"),H=(0,s.up)("q-card-section"),I=(0,s.up)("q-card"),S=(0,s.up)("q-img"),T=(0,s.up)("q-icon"),V=(0,s.up)("q-dialog"),Y=(0,s.up)("q-page");return(0,s.wg)(),(0,s.j4)(Y,null,{default:(0,s.w5)((()=>[(0,s._)("div",n,[(0,s.Wm)(N),(0,s.Wm)(N),o,(0,s.Wm)(N),(0,s.Wm)(j,{label:"clear","icon-right":"delete_sweep",class:"cb-text-orange-8 text-weight-bolder",flat:"",onClick:t[0]||(t[0]=e=>A.clear_notification=!0)})]),null!=A.data?((0,s.wg)(),(0,s.iD)("div",c,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(A.data,(e=>((0,s.wg)(),(0,s.j4)(I,{key:e,class:"q-my-md cb-shadow-1 cb-round-borders-10"},{default:(0,s.w5)((()=>[(0,s.Wm)(H,{class:"q-pa-none q-pt-sm"},{default:(0,s.w5)((()=>[(0,s._)("div",i,[(0,s._)("div",r,[(0,s.Wm)(B,{class:"fit cb-shadow-2"},{default:(0,s.w5)((()=>[u])),_:1})]),(0,s._)("div",d,[(0,s._)("span",p,(0,l.zw)(e.subject),1),g,(0,s._)("span",m,(0,l.zw)(e.message),1),b,(0,s._)("span",_,"Pickup Id : "+(0,l.zw)(e.id),1)])])])),_:2},1024)])),_:2},1024)))),128))])):(0,s.kq)("",!0),null==A.data?((0,s.wg)(),(0,s.iD)("div",f,[h,w,(0,s.Wm)(S,{src:"https://chotabeta.app/dev/testenv/public/imgs/refandearn.png",width:"200px"}),x,q,y,k])):(0,s.kq)("",!0),(0,s.Wm)(V,{modelValue:A.clear_notification,"onUpdate:modelValue":t[2]||(t[2]=e=>A.clear_notification=e)},{default:(0,s.w5)((()=>[(0,s.Wm)(I,{class:"q-dialog-plugin cb-round-borders-10"},{default:(0,s.w5)((()=>[(0,s.Wm)(H,{class:"text-center"},{default:(0,s.w5)((()=>[(0,s.Wm)(T,{name:"help_outline",size:"100px",class:"cb-text-orange-8 q-my-md"}),v,W,C,Z,Q,(0,s.Wm)(j,{label:"Confirm",class:"cb-bg-orange-8 text-white q-mt-lg q-mb-sm",onClick:D.clearnotification},null,8,["onClick"]),$,(0,s.Wm)(j,{label:"Cancel",class:"cb-text-grey-5",flat:"",onClick:t[1]||(t[1]=e=>A.clear_notification=!1)})])),_:1})])),_:1})])),_:1},8,["modelValue"])])),_:1})}a(1768);var z=a(1959);const D={setup(){return{data:(0,z.iH)(null),clear_notification:(0,z.iH)(!1)}},mounted(){this.getAccessToken(),this.gettodaydata()},methods:{getAccessToken(){var e=this;e.access_token=e.$store.state.token,null!=e.access_token&&e.access_token||e.$router.push("")},gettodaydata(){var e=this;let t={headers:{Authorization:`Bearer ${e.access_token}`}};e.$api.get("/api/my-notifications",t).then((function(t){200==t.data.status_code?e.data=t.data.notifications:e.$q.notify({message:t.data.message,type:"positive",progress:!0})})).catch((function(e){console.log(e)}))},clearnotification(){var e=this;let t={headers:{Authorization:`Bearer ${e.access_token}`}};e.$api.get("/api/clear-my-notifications",t).then((function(t){200==t.data.status_code?e.$q.notify({message:t.data.message,type:"positive",progress:!0}):e.$q.notify({message:t.data.message,type:"negative",progress:!0}),e.gettodaydata()})).catch((function(e){console.log(e)}))}}};var N=a(4260),j=a(4379),B=a(2025),H=a(8240),I=a(151),S=a(5589),T=a(5096),V=a(4027),Y=a(6778),G=a(4554),P=a(7518),K=a.n(P);const R=(0,N.Z)(D,[["render",A]]),U=R;K()(D,"components",{QPage:j.Z,QSpace:B.Z,QBtn:H.Z,QCard:I.Z,QCardSection:S.Z,QAvatar:T.Z,QImg:V.Z,QDialog:Y.Z,QIcon:G.Z})}}]);
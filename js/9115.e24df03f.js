"use strict";(self["webpackChunkpwa_wibsite"]=self["webpackChunkpwa_wibsite"]||[]).push([[9115],{9115:(e,t,a)=>{a.r(t),a.d(t,{default:()=>U});var s=a(3673),l=a(2323);const n=(0,s._)("div",{id:"loader2",class:"pre-loader",style:{display:"none"}},null,-1),o={class:"flex cb-bg-white-2 flex-center cb-font-16 text-weight-bolder"},i=(0,s._)("span",{class:"cb-text-orange-8"},"Notifications",-1),c={key:0,class:"q-px-md"},r={class:"row"},d={class:"col-3 q-pa-md"},u=(0,s._)("img",{src:"https://chotabeta.com/icons/Group%202.png"},null,-1),p={class:"col-9 cb-font-12"},g={class:"cb-text-blue-8 text-bold"},m=(0,s._)("br",null,null,-1),_={class:"cb-text-grey-5"},b=(0,s._)("br",null,null,-1),f={class:"cb-text-grey-4"},h={key:1,class:"q-px-lg text-center cb-text-grey-4 q-mt-xl q-pt-lg"},y=(0,s._)("span",{class:"text-h4 text-weight-bolder text-grey-2"},"0 Results",-1),x=(0,s._)("br",null,null,-1),w=(0,s._)("br",null,null,-1),k=(0,s._)("span",{class:"text-h6 text-weight-bolder"},"No Notifications",-1),q=(0,s._)("br",null,null,-1),v=(0,s._)("span",null,"We are to serve .Get your pachages, groceries and many more to your step at single click",-1),$=(0,s._)("br",null,null,-1),W=(0,s._)("span",{class:"text-h6 text-weight-bolder q-my-md"},"Are You Sure ?",-1),C=(0,s._)("br",null,null,-1),Z=(0,s._)("span",null,"You Want to Clear All The Notifications",-1),Q=(0,s._)("br",null,null,-1),z=(0,s._)("br",null,null,-1);function A(e,t,a,A,I,j){const B=(0,s.up)("q-space"),D=(0,s.up)("q-btn"),H=(0,s.up)("q-avatar"),N=(0,s.up)("q-card-section"),S=(0,s.up)("q-card"),T=(0,s.up)("q-img"),V=(0,s.up)("q-icon"),Y=(0,s.up)("q-dialog"),E=(0,s.up)("q-page");return(0,s.wg)(),(0,s.j4)(E,{class:"animate__animated animate__slideInRight"},{default:(0,s.w5)((()=>[n,(0,s._)("div",o,[2!=A.xid?((0,s.wg)(),(0,s.j4)(B,{key:0})):(0,s.kq)("",!0),(0,s.Wm)(B),i,(0,s.Wm)(B),2!=A.xid?((0,s.wg)(),(0,s.j4)(D,{key:1,label:"clear","icon-right":"delete_sweep",class:"cb-text-orange-8 text-weight-bolder",flat:"",onClick:t[0]||(t[0]=e=>A.clear_notification=!0)})):(0,s.kq)("",!0)]),null!=A.data?((0,s.wg)(),(0,s.iD)("div",c,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(A.data,(e=>((0,s.wg)(),(0,s.j4)(S,{key:e,class:"q-my-md cb-shadow-1 cb-round-borders-10"},{default:(0,s.w5)((()=>[(0,s.Wm)(N,{class:"q-pa-none q-pt-sm"},{default:(0,s.w5)((()=>[(0,s._)("div",r,[(0,s._)("div",d,[(0,s.Wm)(H,{class:"cb-shadow-2",size:"65px"},{default:(0,s.w5)((()=>[u])),_:1})]),(0,s._)("div",p,[(0,s._)("span",g,(0,l.zw)(e.subject),1),m,(0,s._)("span",_,(0,l.zw)(e.message),1),b,(0,s._)("span",f,"Pickup Id : "+(0,l.zw)(e.id),1)])])])),_:2},1024)])),_:2},1024)))),128))])):(0,s.kq)("",!0),null==A.data?((0,s.wg)(),(0,s.iD)("div",h,[y,x,(0,s.Wm)(T,{src:"https://chotabeta.app/dev/testenv/public/imgs/refandearn.png",width:"200px"}),w,k,q,v])):(0,s.kq)("",!0),(0,s.Wm)(Y,{modelValue:A.clear_notification,"onUpdate:modelValue":t[2]||(t[2]=e=>A.clear_notification=e)},{default:(0,s.w5)((()=>[(0,s.Wm)(S,{class:"q-dialog-plugin cb-round-borders-10"},{default:(0,s.w5)((()=>[(0,s.Wm)(N,{class:"text-center"},{default:(0,s.w5)((()=>[(0,s.Wm)(V,{name:"help_outline",size:"100px",class:"cb-text-orange-8 q-my-md"}),$,W,C,Z,Q,(0,s.Wm)(D,{label:"Confirm",class:"cb-bg-orange-8 text-white q-mt-lg q-mb-sm",onClick:j.clearnotification},null,8,["onClick"]),z,(0,s.Wm)(D,{label:"Cancel",class:"cb-text-grey-5",flat:"",onClick:t[1]||(t[1]=e=>A.clear_notification=!1)})])),_:1})])),_:1})])),_:1},8,["modelValue"])])),_:1})}a(1768);var I=a(1959);const j={setup(){return{data:(0,I.iH)(null),clear_notification:(0,I.iH)(!1),xid:(0,I.iH)(null)}},mounted(){this.getAccessToken(),this.gettodaydata()},methods:{getAccessToken(){var e=this;e.$store.state.token?e.access_token=e.$store.state.token:e.access_token=e.$store.state.token_cb,e.$store.state.xid?e.xid=e.$store.state.xid:e.xid=e.$store.state.xid_cb,null!=e.access_token&&e.access_token||e.$router.push("/")},gettodaydata(){var e=this,t=document.getElementById("loader2");t.style.display="block";let a={headers:{Authorization:`Bearer ${e.access_token}`}};e.$api.get("/api/my-notifications",a).then((function(a){t.style.display="none",200==a.data.status_code?e.data=a.data.notifications:e.$q.notify({message:a.data.message,type:"positive",progress:!0})})).catch((function(e){console.log(e)}))},clearnotification(){var e=this,t=document.getElementById("loader2");t.style.display="block";let a={headers:{Authorization:`Bearer ${e.access_token}`}};e.$api.get("/api/clear-my-notifications",a).then((function(a){t.style.display="none",200==a.data.status_code?(e.data=null,e.$q.notify({message:a.data.message,type:"positive",progress:!0})):e.$q.notify({message:a.data.message,type:"negative",progress:!0}),e.clear_notification=!1})).catch((function(e){console.log(e)}))}}};var B=a(4260),D=a(4379),H=a(2025),N=a(8240),S=a(151),T=a(5589),V=a(5096),Y=a(4027),E=a(6778),G=a(4554),P=a(7518),R=a.n(P);const K=(0,B.Z)(j,[["render",A]]),U=K;R()(j,"components",{QPage:D.Z,QSpace:H.Z,QBtn:N.Z,QCard:S.Z,QCardSection:T.Z,QAvatar:V.Z,QImg:Y.Z,QDialog:E.Z,QIcon:G.Z})}}]);
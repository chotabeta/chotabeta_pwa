"use strict";(self["webpackChunkpwa_wibsite"]=self["webpackChunkpwa_wibsite"]||[]).push([[9657],{9657:(e,t,a)=>{a.r(t),a.d(t,{default:()=>U});var l=a(3673),s=a(2323);const n=(0,l._)("div",{id:"loader2",class:"pre-loader",style:{display:"none"}},null,-1),o={class:"flex cb-bg-white-2 flex-center cb-font-16 text-weight-bolder"},c=(0,l._)("span",{class:"cb-text-orange-8"},"Notifications",-1),i={key:0,class:"q-px-md"},r={class:"row"},d={class:"col-3 q-pa-md"},u=(0,l._)("img",{src:"https://chotabeta.com/icons/Group%202.png"},null,-1),p={class:"col-9 cb-font-12"},g={class:"cb-text-blue-8 text-bold"},b=(0,l._)("br",null,null,-1),m={class:"cb-text-grey-5"},_=(0,l._)("br",null,null,-1),f={class:"cb-text-grey-4"},h={key:1,class:"q-px-lg text-center cb-text-grey-4 q-mt-xl q-pt-lg"},y=(0,l._)("span",{class:"text-h4 text-weight-bolder text-grey-2"},"0 Results",-1),x=(0,l._)("br",null,null,-1),w=(0,l._)("br",null,null,-1),k=(0,l._)("span",{class:"text-h6 text-weight-bolder"},"No Notifications",-1),q=(0,l._)("br",null,null,-1),v=(0,l._)("span",null,"We are to serve .Get your pachages, groceries and many more to your step at single click",-1),$=(0,l._)("br",null,null,-1),W=(0,l._)("span",{class:"text-h6 text-weight-bolder q-my-md"},"Are You Sure ?",-1),C=(0,l._)("br",null,null,-1),Z=(0,l._)("span",null,"You Want to Clear All The Notifications",-1),Q=(0,l._)("br",null,null,-1),z=(0,l._)("br",null,null,-1);function A(e,t,a,A,j,B){const I=(0,l.up)("q-space"),D=(0,l.up)("q-btn"),H=(0,l.up)("q-avatar"),N=(0,l.up)("q-card-section"),S=(0,l.up)("q-card"),T=(0,l.up)("q-img"),V=(0,l.up)("q-icon"),Y=(0,l.up)("q-dialog"),E=(0,l.up)("q-page");return(0,l.wg)(),(0,l.j4)(E,null,{default:(0,l.w5)((()=>[n,(0,l._)("div",o,[2!=A.xid?((0,l.wg)(),(0,l.j4)(I,{key:0})):(0,l.kq)("",!0),(0,l.Wm)(I),c,(0,l.Wm)(I),2!=A.xid?((0,l.wg)(),(0,l.j4)(D,{key:1,label:"clear","icon-right":"delete_sweep",class:"cb-text-orange-8 text-weight-bolder",flat:"",onClick:t[0]||(t[0]=e=>A.clear_notification=!0)})):(0,l.kq)("",!0)]),null!=A.data?((0,l.wg)(),(0,l.iD)("div",i,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(A.data,(e=>((0,l.wg)(),(0,l.j4)(S,{key:e,class:"q-my-md cb-shadow-1 cb-round-borders-10"},{default:(0,l.w5)((()=>[(0,l.Wm)(N,{class:"q-pa-none q-pt-sm"},{default:(0,l.w5)((()=>[(0,l._)("div",r,[(0,l._)("div",d,[(0,l.Wm)(H,{class:"cb-shadow-2",size:"65px"},{default:(0,l.w5)((()=>[u])),_:1})]),(0,l._)("div",p,[(0,l._)("span",g,(0,s.zw)(e.subject),1),b,(0,l._)("span",m,(0,s.zw)(e.message),1),_,(0,l._)("span",f,"Pickup Id : "+(0,s.zw)(e.id),1)])])])),_:2},1024)])),_:2},1024)))),128))])):(0,l.kq)("",!0),null==A.data?((0,l.wg)(),(0,l.iD)("div",h,[y,x,(0,l.Wm)(T,{src:"https://chotabeta.app/dev/testenv/public/imgs/refandearn.png",width:"200px"}),w,k,q,v])):(0,l.kq)("",!0),(0,l.Wm)(Y,{modelValue:A.clear_notification,"onUpdate:modelValue":t[2]||(t[2]=e=>A.clear_notification=e)},{default:(0,l.w5)((()=>[(0,l.Wm)(S,{class:"q-dialog-plugin cb-round-borders-10"},{default:(0,l.w5)((()=>[(0,l.Wm)(N,{class:"text-center"},{default:(0,l.w5)((()=>[(0,l.Wm)(V,{name:"help_outline",size:"100px",class:"cb-text-orange-8 q-my-md"}),$,W,C,Z,Q,(0,l.Wm)(D,{label:"Confirm",class:"cb-bg-orange-8 text-white q-mt-lg q-mb-sm",onClick:B.clearnotification},null,8,["onClick"]),z,(0,l.Wm)(D,{label:"Cancel",class:"cb-text-grey-5",flat:"",onClick:t[1]||(t[1]=e=>A.clear_notification=!1)})])),_:1})])),_:1})])),_:1},8,["modelValue"])])),_:1})}a(1768);var j=a(1959);const B={setup(){return{data:(0,j.iH)(null),clear_notification:(0,j.iH)(!1),xid:(0,j.iH)(null)}},mounted(){this.getAccessToken(),this.gettodaydata()},methods:{getAccessToken(){var e=this;e.$store.state.token?e.access_token=e.$store.state.token:e.access_token=e.$store.state.token_cb,e.$store.state.xid?e.xid=e.$store.state.xid:e.xid=e.$store.state.xid_cb,null!=e.access_token&&e.access_token||e.$router.push("/")},gettodaydata(){var e=this,t=document.getElementById("loader2");t.style.display="block";let a={headers:{Authorization:`Bearer ${e.access_token}`}};e.$api.get("/api/my-notifications",a).then((function(a){t.style.display="none",200==a.data.status_code?e.data=a.data.notifications:e.$q.notify({message:a.data.message,type:"positive",progress:!0})})).catch((function(e){console.log(e)}))},clearnotification(){var e=this,t=document.getElementById("loader2");t.style.display="block";let a={headers:{Authorization:`Bearer ${e.access_token}`}};e.$api.get("/api/clear-my-notifications",a).then((function(a){t.style.display="none",200==a.data.status_code?(e.data=null,e.$q.notify({message:a.data.message,type:"positive",progress:!0})):e.$q.notify({message:a.data.message,type:"negative",progress:!0}),e.clear_notification=!1})).catch((function(e){console.log(e)}))}}};var I=a(4260),D=a(4379),H=a(2025),N=a(8240),S=a(151),T=a(5589),V=a(5096),Y=a(4027),E=a(6778),G=a(4554),P=a(7518),K=a.n(P);const R=(0,I.Z)(B,[["render",A]]),U=R;K()(B,"components",{QPage:D.Z,QSpace:H.Z,QBtn:N.Z,QCard:S.Z,QCardSection:T.Z,QAvatar:V.Z,QImg:Y.Z,QDialog:E.Z,QIcon:G.Z})}}]);
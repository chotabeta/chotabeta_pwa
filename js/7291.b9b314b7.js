"use strict";(self["webpackChunkpwa_wibsite"]=self["webpackChunkpwa_wibsite"]||[]).push([[7291],{7291:(e,t,s)=>{s.r(t),s.d(t,{default:()=>B});var a=s(3673);const r=(0,a.Uk)("0"),l=(0,a._)("div",{class:"flex cb-bg-white-2 flex-center cb-font-16 text-weight-bolder"},[(0,a._)("span",{class:"cb-text-orange-8"},"Rate & Review")],-1),n={class:"cb-font-16 text-weight-bolder text-center"},o=(0,a._)("img",{src:"https://chotabeta.com/icons/Group%202.png"},null,-1),c=(0,a._)("br",null,null,-1),i=(0,a._)("br",null,null,-1),u=(0,a._)("span",{class:"cb-text-grey-5 cb-font-12 text-weight-bolder"},"Order Id :             HYH3834173",-1),d=(0,a._)("span",null,"How Would You Rate Our Service?",-1),p={class:"row item-center justify-center"},b=(0,a._)("span",{class:"cb-text-grey-4 cb-font-12"},"Tap the Number Of Stars you'd give us on This Order",-1),g=(0,a._)("div",{class:"cb-font-15 text-weight-bolder"},[(0,a._)("span",{class:"cb-text-blue-8"},"Review Our Service")],-1),m={class:"text-center"},h={class:"shadow-1 cb-round-borders-10 q-px-sm q-my-sm"};function _(e,t,s,_,f,w){const x=(0,a.up)("q-btn"),y=(0,a.up)("q-space"),v=(0,a.up)("q-badge"),W=(0,a.up)("q-toolbar"),k=(0,a.up)("q-header"),q=(0,a.up)("q-avatar"),S=(0,a.up)("q-card-section"),Z=(0,a.up)("q-icon"),Q=(0,a.up)("q-card"),$=(0,a.up)("q-input"),I=(0,a.up)("q-page"),C=(0,a.up)("q-page-container"),O=(0,a.up)("q-layout");return(0,a.wg)(),(0,a.j4)(O,{view:"lHh lpr lFf"},{default:(0,a.w5)((()=>[(0,a.Wm)(k,null,{default:(0,a.w5)((()=>[(0,a.Wm)(W,{class:"cb-bg-white-2 cb-text-blue-8"},{default:(0,a.w5)((()=>[(0,a.Wm)(x,{flat:"",dense:"",round:"",icon:"arrow_back",onClick:t[0]||(t[0]=e=>w.Screen_Back_Redirection())}),(0,a.Wm)(x,{icon:"place",class:"q-pa-none cb-font-12",borderless:"",flat:"",label:e.$store.state.showaddress,onClick:t[1]||(t[1]=t=>e.$router.push("dashboard_location"))},null,8,["label"]),(0,a.Wm)(y),(0,a.Wm)(x,{round:"",dense:"",icon:"notifications",flat:"",onClick:t[2]||(t[2]=t=>e.$router.push("Notification"))},{default:(0,a.w5)((()=>[(0,a.Wm)(v,{color:"red",rounded:"",floating:"",style:{"margin-top":"8px","margin-right":"8px"}})])),_:1}),(0,a.Wm)(x,{round:"",dense:"",icon:"shopping_cart",flat:""},{default:(0,a.w5)((()=>[(0,a.Wm)(v,{class:"cb-bg-orange-8",rounded:"",floating:""},{default:(0,a.w5)((()=>[r])),_:1})])),_:1})])),_:1}),l])),_:1}),(0,a.Wm)(C,{class:"animate__animated animate__slideInRight"},{default:(0,a.w5)((()=>[(0,a.Wm)(I,{class:"flex flex-center q-px-lg"},{default:(0,a.w5)((()=>[(0,a._)("div",null,[(0,a._)("div",n,[(0,a.Wm)(q,{class:"shadow-1",size:"90px"},{default:(0,a.w5)((()=>[o])),_:1}),c,i,u]),(0,a.Wm)(Q,{class:"text-center cb-round-borders-10 q-my-md cb-shadow-1"},{default:(0,a.w5)((()=>[(0,a.Wm)(S,{class:"bg-grey-2 cb-text-blue-8 q-py-sm text-weight-bolder"},{default:(0,a.w5)((()=>[d])),_:1}),(0,a.Wm)(S,{class:"q-py-md"},{default:(0,a.w5)((()=>[(0,a._)("div",p,[(0,a.Wm)(Z,{size:"lg",class:"cb-text-grey-4",name:"star"}),(0,a.Wm)(Z,{size:"lg",class:"cb-text-grey-4",name:"star"}),(0,a.Wm)(Z,{size:"lg",class:"cb-text-grey-4",name:"star"}),(0,a.Wm)(Z,{size:"lg",class:"cb-text-grey-4",name:"star"}),(0,a.Wm)(Z,{size:"lg",class:"cb-text-grey-4",name:"star"})]),b])),_:1})])),_:1}),g,(0,a._)("div",m,[(0,a._)("div",h,[(0,a.Wm)($,{borderless:"",dense:"",placeholder:"It was Good, Fast Delivery"})]),(0,a.Wm)(x,{label:"Submit",class:"cb-bg-orange-8 text-white q-px-lg"})])])])),_:1})])),_:1})])),_:1})}s(2100),s(1768);var f=s(1959);const w={setup(){return{access_token:(0,f.iH)(null),xid:(0,f.iH)(null)}},mounted(){this.gettoken(),this.mypath()},methods:{gettoken(){var e=this;e.$store.state.token?e.access_token=e.$store.state.token:e.access_token=e.$store.state.token_cb,e.$store.state.xid?e.xid=e.$store.state.xid:e.xid=e.$store.state.xid_cb,null!=e.access_token&&e.access_token||e.$router.push("/")},mypath(){var e=this,t=[],s=0;if(sessionStorage.getItem("mypath")&&(t=JSON.parse(sessionStorage.getItem("mypath"))),t.forEach(((t,a)=>{e.$route.fullPath==t&&0==s&&(s=a)})),0==s)t.push(e.$route.fullPath);else for(var a=1;a<=t.length;++a)a<=s||t.splice(a,1);sessionStorage.setItem("mypath",JSON.stringify(t))},Screen_Back_Redirection(){var e=this,t=JSON.parse(sessionStorage.getItem("mypath")),s=t.length;e.$router.push(t[s-2])}}};var x=s(4260),y=s(3066),v=s(3812),W=s(9570),k=s(8240),q=s(2025),S=s(9721),Z=s(2652),Q=s(4379),$=s(5096),I=s(151),C=s(5589),O=s(4554),H=s(4842),R=s(7518),z=s.n(R);const N=(0,x.Z)(w,[["render",_]]),B=N;z()(w,"components",{QLayout:y.Z,QHeader:v.Z,QToolbar:W.Z,QBtn:k.Z,QSpace:q.Z,QBadge:S.Z,QPageContainer:Z.Z,QPage:Q.Z,QAvatar:$.Z,QCard:I.Z,QCardSection:C.Z,QIcon:O.Z,QInput:H.Z})}}]);
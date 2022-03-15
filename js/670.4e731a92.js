"use strict";(self["webpackChunkpwa_wibsite"]=self["webpackChunkpwa_wibsite"]||[]).push([[670],{6670:(e,t,a)=>{a.r(t),a.d(t,{default:()=>M});var l=a(3673);const s=e=>((0,l.dD)("data-v-09f28ee2"),e=e(),(0,l.Cn)(),e),o=s((()=>(0,l._)("div",{id:"loader2",class:"pre-loader",style:{display:"none"}},null,-1))),i={class:"row q-py-sm",style:{width:"95vw","min-width":"95vw",height:"70vh","min-height":"70vh !important"}},n=s((()=>(0,l._)("div",{class:"row",style:{width:"100%",height:"100%"}},[(0,l._)("iframe",{width:"100%",frameborder:"0",scrolling:"no",marginheight:"0",marginwidth:"0",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60910.91201828438!2d78.3955557446126!3d17.41505064173751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1644564642528!5m2!1sen!2sin"},'\r\n           <a href="https://www.google.com/maps">Map</a>')],-1))),d={class:"row q-py-sm",style:{width:"95vw","min-width":"95vw",height:"30vh","min-height":"30vh !important"}},p={class:"col-12 row q-py-md",style:{"max-height":"50px"}},r=s((()=>(0,l._)("div",{class:"col-5"},[(0,l._)("span",{style:{"font-size":"17px",color:"blue"}},[(0,l._)("b",null,"Trip Type")])],-1))),m={class:"col-7"},c={class:"col-12 row q-py-md",style:{"max-height":"50px"}},h=s((()=>(0,l._)("div",{class:"col-5"},[(0,l._)("span",{style:{"font-size":"17px",color:"blue"}},[(0,l._)("b",null,"Vehicle Type")])],-1))),u={class:"col-7"},_={class:"col-12 row q-py-md",style:{"max-height":"50px"}},g={class:"col-6 q-px-sm"},w={class:"col-6 q-px-sm"};function v(e,t,a,s,v,y){const b=(0,l.up)("q-card-section"),f=(0,l.up)("q-card"),q=(0,l.up)("q-btn-toggle"),k=(0,l.up)("q-btn"),x=(0,l.up)("q-page"),W=(0,l.up)("q-page-container"),S=(0,l.up)("q-layout");return(0,l.wg)(),(0,l.j4)(S,{view:"lHh lpr lFf"},{default:(0,l.w5)((()=>[(0,l.Wm)(W,null,{default:(0,l.w5)((()=>[o,(0,l.Wm)(x,{class:"q-px-sm"},{default:(0,l.w5)((()=>[(0,l._)("div",i,[(0,l.Wm)(f,{class:"my-card"},{default:(0,l.w5)((()=>[(0,l.Wm)(b,{style:{width:"95vw",height:"100%"}},{default:(0,l.w5)((()=>[n])),_:1})])),_:1})]),(0,l._)("div",d,[(0,l.Wm)(f,{class:"my-card"},{default:(0,l.w5)((()=>[(0,l.Wm)(b,{style:{width:"95vw"},class:"q-pt-none"},{default:(0,l.w5)((()=>[(0,l._)("div",p,[r,(0,l._)("div",m,[(0,l.Wm)(q,{style:{"margin-left":"7%"},modelValue:s.dm_trip_type,"onUpdate:modelValue":t[0]||(t[0]=e=>s.dm_trip_type=e),push:"",size:"sm","toggle-color":"primary",options:[{label:"One way",value:"0"},{label:"Round trip",value:"1"}]},null,8,["modelValue"])])]),(0,l._)("div",c,[h,(0,l._)("div",u,[(0,l.Wm)(q,{style:{"margin-left":"7%"},modelValue:s.dm_veh_type,"onUpdate:modelValue":t[1]||(t[1]=e=>s.dm_veh_type=e),push:"",size:"sm","toggle-color":"primary",options:[{label:"Automatic",value:"0"},{label:"Manual",value:"1"}]},null,8,["modelValue"])])]),(0,l._)("div",_,[(0,l._)("div",g,[(0,l.Wm)(k,{color:"orange",class:"full-width",label:"Schedule"})]),(0,l._)("div",w,[(0,l.Wm)(k,{color:"orange",class:"full-width",label:"Book",onClick:t[2]||(t[2]=e=>y.go_to_dm_summ())})])])])),_:1})])),_:1})])])),_:1})])),_:1})])),_:1})}a(1768);var y=a(1959);let b=window.matchMedia("only screen and (max-width: 760px)").matches;b||(window.location="https://chotabeta.com/pwa");const f={setup(){return{access_token:(0,y.iH)(null),dm_trip_type:(0,y.iH)("0"),dm_veh_type:(0,y.iH)("0")}},mounted(){this.getToken(),this.load_map()},methods:{getToken(){var e=this;e.access_token=e.$store.state.token,null==e.access_token&&e.$router.push("")},load_map(){var e=JSON.parse(localStorage.getItem("pickup_address")),t=JSON.parse(localStorage.getItem("delivery_address")),a=parseInt(e.location),l=parseInt(t.location),s="https://chotabeta.app/img/pickpoint.png",o="https://chotabeta.app/img/droppoint1.png",i="<strong>Pick Location</strong><br/>"+e.name+"<br/>Rider Not Assigned",n="<strong>Drop Location</strong><br/>"+t.name+"<br/>Rider Not Assigned";$(document).ready((function(){initMap(a,l,s,o,i,n)}))},go_to_dm_summ(){var e=this;localStorage.setItem("dm_trip_type",e.dm_trip_type),localStorage.setItem("dm_veh_type",e.dm_veh_type),e.$router.push("/DriveMe_Summary")}}};var q=a(4260),k=a(3066),x=a(2652),W=a(4379),S=a(151),Z=a(4027),C=a(5589),I=a(8761),Q=a(8240),T=a(7518),V=a.n(T);const H=(0,q.Z)(f,[["render",v],["__scopeId","data-v-09f28ee2"]]),M=H;V()(f,"components",{QLayout:k.Z,QPageContainer:x.Z,QPage:W.Z,QCard:S.Z,QImg:Z.Z,QCardSection:C.Z,QBtnToggle:I.Z,QBtn:Q.Z})}}]);
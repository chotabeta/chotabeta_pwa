"use strict";(self["webpackChunkpwa_wibsite"]=self["webpackChunkpwa_wibsite"]||[]).push([[817],{817:(e,a,t)=>{t.r(a),t.d(a,{default:()=>T});var o=t(3673);const l=e=>((0,o.dD)("data-v-06745b84"),e=e(),(0,o.Cn)(),e),s=l((()=>(0,o._)("div",{id:"loader2",class:"pre-loader",style:{display:"none"}},null,-1))),n={class:"row"},i=l((()=>(0,o._)("span",{class:"text-subtitle1 text-bold text-blue-10"},"Trip Type",-1))),r={class:"row q-py-sm"},c=l((()=>(0,o._)("span",{class:"text-subtitle1 text-blue-10"},[(0,o._)("b",null,"Vehicle Type")],-1))),p={class:"row q-pt-sm"},d={class:"col-6 q-px-sm"},m={class:"col-6 q-px-sm"};function g(e,a,t,l,g,u){const _=(0,o.up)("q-btn"),h=(0,o.up)("q-toolbar"),k=(0,o.up)("q-header"),w=(0,o.up)("q-card-section"),v=(0,o.up)("q-card"),b=(0,o.up)("q-space"),f=(0,o.up)("q-btn-toggle"),y=(0,o.up)("q-date"),S=(0,o.up)("q-time"),q=(0,o.up)("q-card-actions"),I=(0,o.up)("q-dialog"),W=(0,o.up)("q-page"),V=(0,o.up)("q-page-container"),M=(0,o.up)("q-layout");return(0,o.wg)(),(0,o.j4)(M,{view:"lHh lpr lFf"},{default:(0,o.w5)((()=>[(0,o.Wm)(k,null,{default:(0,o.w5)((()=>[(0,o.Wm)(h,{class:"cb-bg-white-2 cb-text-blue-8"},{default:(0,o.w5)((()=>[(0,o.Wm)(_,{flat:"",dense:"",round:"",icon:"arrow_back",onClick:a[0]||(a[0]=e=>u.Screen_Back_Redirection())})])),_:1})])),_:1}),(0,o.Wm)(V,{class:"animate__animated animate__slideInRight"},{default:(0,o.w5)((()=>[s,(0,o.Wm)(W,{class:"q-pa-sm"},{default:(0,o.w5)((()=>[(0,o.Wm)(v,{class:"q-pa-sm"},{default:(0,o.w5)((()=>[(0,o.Wm)(w,{style:{height:"105vw"},id:"map-canvas"})])),_:1}),(0,o.Wm)(v,{class:"q-mt-sm"},{default:(0,o.w5)((()=>[(0,o.Wm)(w,null,{default:(0,o.w5)((()=>[(0,o._)("div",n,[i,(0,o.Wm)(b),(0,o.Wm)(f,{modelValue:l.dm_trip_type,"onUpdate:modelValue":a[1]||(a[1]=e=>l.dm_trip_type=e),push:"",size:"md","toggle-color":"primary",options:[{label:"One way",value:"0"},{label:"Round trip",value:"1"}]},null,8,["modelValue"])]),(0,o._)("div",r,[c,(0,o.Wm)(b),(0,o.Wm)(f,{modelValue:l.dm_veh_type,"onUpdate:modelValue":a[2]||(a[2]=e=>l.dm_veh_type=e),push:"",size:"md","toggle-color":"primary",options:[{label:"Automatic",value:"0"},{label:"Manual",value:"1"}]},null,8,["modelValue"])]),(0,o._)("div",p,[(0,o._)("div",d,[(0,o.Wm)(_,{color:"orange",class:"full-width",label:"Schedule",onClick:a[3]||(a[3]=e=>l.calander_dailog_1=!0)})]),(0,o._)("div",m,[(0,o.Wm)(_,{color:"orange",class:"full-width",label:"Book",onClick:a[4]||(a[4]=e=>u.go_to_dm_summ())})])])])),_:1})])),_:1}),(0,o.Wm)(I,{modelValue:l.calander_dailog_1,"onUpdate:modelValue":a[10]||(a[10]=e=>l.calander_dailog_1=e),persistent:""},{default:(0,o.w5)((()=>[(0,o.Wm)(v,{class:"q-dialog-plugin cb-round-borders-10"},{default:(0,o.w5)((()=>[1!=l.date_change?((0,o.wg)(),(0,o.j4)(y,{key:0,modelValue:e.pick_date,"onUpdate:modelValue":a[5]||(a[5]=a=>e.pick_date=a),mask:"YYYY-MM-DD",color:"orange",class:"fit",onClick:a[6]||(a[6]=e=>u.select())},null,8,["modelValue"])):(0,o.kq)("",!0),1==l.date_change?((0,o.wg)(),(0,o.j4)(S,{key:1,format24h:"",modelValue:e.pick_time,"onUpdate:modelValue":a[7]||(a[7]=a=>e.pick_time=a),color:"orange",mask:"HH:mm:ss",class:"fit"},null,8,["modelValue"])):(0,o.kq)("",!0),1==l.date_change?((0,o.wg)(),(0,o.j4)(q,{key:2,align:"right"},{default:(0,o.w5)((()=>[(0,o.Wm)(_,{flat:"",label:"cancel",onClick:a[8]||(a[8]=a=>(e.pickdate_selection(),l.calander_dailog_1=!1))}),(0,o.Wm)(_,{flat:"",label:"Ok",onClick:a[9]||(a[9]=e=>{u.store_date_time(),l.calander_dailog_1=!1})})])),_:1})):(0,o.kq)("",!0)])),_:1})])),_:1},8,["modelValue"])])),_:1})])),_:1})])),_:1})}t(2100),t(1768);var u=t(1959);const _={setup(){return{access_token:(0,u.iH)(null),dm_trip_type:(0,u.iH)("0"),dm_veh_type:(0,u.iH)("0"),calander_dailog_1:(0,u.iH)(!1),date_change:(0,u.iH)(null),xid:(0,u.iH)(null)}},mounted(){this.getToken(),this.mypath(),this.load_map()},methods:{getToken(){var e=this;e.$store.state.token?e.access_token=e.$store.state.token:e.access_token=e.$store.state.token_cb,e.$store.state.xid?e.xid=e.$store.state.xid:e.xid=e.$store.state.xid_cb,null!=e.access_token&&e.access_token||e.$router.push("/")},go_to_dm_summ(){var e=this;localStorage.setItem("dm_trip_type",e.dm_trip_type),localStorage.setItem("dm_veh_type",e.dm_veh_type),localStorage.removeItem("usage_hrs"),e.$router.push("/DriveMe_Summary")},select(){var e=this;e.date_change=1},store_date_time(){var e=this;localStorage.setItem("pick_date",e.pick_date),localStorage.setItem("pick_time",e.pick_time),e.date_change=""},load_map(){var e=this,a=JSON.parse(localStorage.getItem("pickup_address")),t=JSON.parse(localStorage.getItem("delivery_address")),o=a.location,l=t.location,s="https://chotabeta.app/img/pickpoint.png",n="https://chotabeta.app/img/droppoint1.png",i="<strong>Pick Location</strong><br/>"+o,r="<strong>Drop Location</strong><br/>"+l;e.initMap(o,l,s,n,i,r)},initMap(e,a,t,o,l,s){var n,i,r=e,c=a,p=new google.maps.DirectionsService,d=null,m={start:new google.maps.MarkerImage(t,new google.maps.Size(50,50),new google.maps.Point(0,0),new google.maps.Point(22,32)),end:new google.maps.MarkerImage(o,new google.maps.Size(50,50),new google.maps.Point(0,0),new google.maps.Point(22,32))};n=new google.maps.DirectionsRenderer({suppressMarkers:!0});var g={zoom:17,mapTypeId:google.maps.MapTypeId.ROADMAP,center:new google.maps.LatLng(e)};d=new google.maps.Map(document.getElementById("map-canvas"),g),n.setMap(d);var u={origin:r,destination:c,travelMode:google.maps.TravelMode.DRIVING};function _(e,a,t){i=new google.maps.Marker({position:e,map:d,icon:a,title:t});var o=new google.maps.InfoWindow;google.maps.event.addListener(i,"click",function(e){return function(){o.setContent(t),o.open(d,e)}}(i))}p.route(u,(function(e,a){if(a==google.maps.DirectionsStatus.OK){n.setDirections(e);var t=e.routes[0].legs[0];_(t.start_location,m.start,l),_(t.end_location,m.end,s)}}))},mypath(){var e=this,a=[],t=0;if(localStorage.getItem("mypath")&&(a=JSON.parse(localStorage.getItem("mypath"))),a.forEach(((a,o)=>{e.$route.fullPath==a&&0==t&&(t=o)})),0==t)a.push(e.$route.fullPath);else for(var o=1;o<=a.length;++o)o<=t||a.splice(o,1);localStorage.setItem("mypath",JSON.stringify(a))},Screen_Back_Redirection(){var e=this,a=JSON.parse(localStorage.getItem("mypath")),t=a.length;e.$router.push(a[t-2])}}};var h=t(4260),k=t(3066),w=t(3812),v=t(9570),b=t(8240),f=t(2652),y=t(4379),S=t(151),q=t(5589),I=t(2025),W=t(8761),V=t(6778),M=t(5626),Z=t(5990),x=t(9367),C=t(7518),Q=t.n(C);const D=(0,h.Z)(_,[["render",g],["__scopeId","data-v-06745b84"]]),T=D;Q()(_,"components",{QLayout:k.Z,QHeader:w.Z,QToolbar:v.Z,QBtn:b.Z,QPageContainer:f.Z,QPage:y.Z,QCard:S.Z,QCardSection:q.Z,QSpace:I.Z,QBtnToggle:W.Z,QDialog:V.Z,QDate:M.Z,QTime:Z.Z,QCardActions:x.Z})}}]);
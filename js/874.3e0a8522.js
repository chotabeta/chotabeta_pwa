"use strict";(self["webpackChunkpwa_wibsite"]=self["webpackChunkpwa_wibsite"]||[]).push([[874],{6874:(e,t,o)=>{o.r(t),o.d(t,{default:()=>H});var a=o(3673),n=o(2323);const s=(0,a._)("div",{id:"loader2",class:"pre-loader",style:{display:"none"}},null,-1),r=(0,a._)("br",null,null,-1),l=(0,a._)("br",null,null,-1),i={class:"cb-font-16 text-weight-bolder q-my-md"},c=(0,a.Uk)("Service Location Alert"),d=(0,a._)("br",null,null,-1),u=(0,a._)("br",null,null,-1),g=(0,a._)("br",null,null,-1);function p(e,t,o,p,_,h){const m=(0,a.up)("q-icon"),b=(0,a.up)("q-avatar"),y=(0,a.up)("q-btn"),k=(0,a.up)("q-card-section"),w=(0,a.up)("q-card"),f=(0,a.up)("q-dialog"),v=(0,a.up)("q-page-container"),$=(0,a.up)("q-layout");return(0,a.wg)(),(0,a.j4)($,{view:"lHh lpr lFf"},{default:(0,a.w5)((()=>[(0,a.Wm)(v,null,{default:(0,a.w5)((()=>[s,(0,a.Wm)(f,{modelValue:p.location_check,"onUpdate:modelValue":t[1]||(t[1]=e=>p.location_check=e),persistent:""},{default:(0,a.w5)((()=>[(0,a.Wm)(w,{class:"full-width cb-round-borders-20"},{default:(0,a.w5)((()=>[(0,a.Wm)(k,{class:"text-center"},{default:(0,a.w5)((()=>[(0,a.Wm)(b,{class:"bg-red"},{default:(0,a.w5)((()=>[(0,a.Wm)(m,{name:"sentiment_dissatisfied",size:"xl",class:"text-white"})])),_:1}),r,l,(0,a._)("span",i,[(0,a.Wm)(m,{size:"sm",name:"location_on"}),c]),d,u,(0,a._)("span",null,(0,n.zw)(p.pick_not_in_territory),1),g,(0,a.Wm)(y,{label:"change the location",class:"text-red text-bold",onClick:t[0]||(t[0]=t=>e.$router.push("/home/dashboard_Location")),flat:""})])),_:1})])),_:1})])),_:1},8,["modelValue"])])),_:1})])),_:1})}o(1768);var _=o(1959);const h={setup(){return{leftDrawerOpen:(0,_.iH)(!1),latlongs:(0,_.iH)(null),name:(0,_.iH)(null),Address:(0,_.iH)(""),profile_pic:(0,_.iH)(null),location_check:(0,_.iH)(!1),pick_not_in_territory:(0,_.iH)(null)}},mounted(){this.getToken(),this.getLocation()},methods:{getToken(){var e=this;e.access_token=e.$store.state.token,null==e.access_token&&e.$router.push("/")},getLocation(){navigator.geolocation?navigator.geolocation.getCurrentPosition(this.showPosition,this.showError):ps.$q.notify({message:"Geolocation is not supported by this browser.",type:"Warning",progress:!0})},showPosition(e){var t=this;t.$store.dispatch("latlongs_data",{position:e.coords}).then((o=>{t.getReverseGeocodingData(e.coords.latitude,e.coords.longitude)})).catch((e=>{console.log(e)}))},showError(e){var t=this;switch(e.code){case e.PERMISSION_DENIED:t.$q.notify({message:"User denied the request for Geolocation.",type:"Warning",progress:!0});break;case e.POSITION_UNAVAILABLE:t.$q.notify({message:"Location information is unavailable.",type:"Warning",progress:!0});break;case e.TIMEOUT:t.$q.notify({message:"The request to get user location timed out.",type:"Warning",progress:!0});break;case e.UNKNOWN_ERROR:t.$q.notify({message:"An unknown error occurred.",type:"Warning",progress:!0});break}},territory_checkup(){var e=this,t=document.getElementById("loader2");t.style.display="block";let o={headers:{Authorization:`Bearer ${e.access_token}`}};e.$api.get("/api/check-territory2?base_location="+e.$store.state.latlongs+"&base_pincode=0&cache_hash=&l_number=&lat_lng="+e.$store.state.latlongs+"&pincode="+e.$store.state.pincode+"&playstore_version_name=&xid="+e.$store.state.xid,o).then((function(o){t.style.display="none",console.log(o,"territory"),1==o.data.change_location_button_status?(e.pick_not_in_territory=o.data.pick_not_in_territory,e.location_check=!0):e.$router.push("/Home/Dashboard")})).catch((function(e){console.log(e)}))},getReverseGeocodingData(e,t){console.log(e,t,"latlongs dataaaaaaaaaaaaaaa");var o=new google.maps.LatLng(e,t),a=new google.maps.Geocoder;a.geocode({latLng:o},((e,t)=>{if(t!==google.maps.GeocoderStatus.OK&&alert(t),t==google.maps.GeocoderStatus.OK){var o=e[0];this.$store.dispatch("adddress_data",{address:o}).then((e=>{this.territory_checkup()})).catch((e=>{console.log(e)}))}}))}}};var m=o(4260),b=o(3066),y=o(2652),k=o(6778),w=o(151),f=o(5589),v=o(5096),$=o(4554),q=o(8240),W=o(7518),L=o.n(W);const E=(0,m.Z)(h,[["render",p]]),H=E;L()(h,"components",{QLayout:b.Z,QPageContainer:y.Z,QDialog:k.Z,QCard:w.Z,QCardSection:f.Z,QAvatar:v.Z,QIcon:$.Z,QBtn:q.Z})}}]);
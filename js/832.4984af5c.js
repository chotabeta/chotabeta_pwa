"use strict";(self["webpackChunkpwa_wibsite"]=self["webpackChunkpwa_wibsite"]||[]).push([[832],{4832:(e,t,o)=>{o.r(t),o.d(t,{default:()=>U});var a=o(3673),s=o(2323);const l=(0,a._)("span",{class:"cb-font-16 text-weight-bolder q-px-sm"},"Search For Your Location",-1),c={class:"cb-shadow-1 q-px-sm cb-round-borders-10"},n=(0,a._)("div",{class:"row justify-center q-py-sm text-bold"},[(0,a._)("span",{class:"cb-text-grey-4"},"OR")],-1),r={class:"row cb-text-blue-8 text-bold"},i=(0,a._)("span",{class:"cb-text-blue-4 cb-font-16 q-px-sm"},"Choose Location from Map",-1),d=(0,a._)("div",{class:"row justify-center q-py-sm text-bold"},[(0,a._)("span",{class:"cb-text-grey-4"},"OR")],-1),p={class:"row cb-text-blue-8 text-bold"},u=(0,a._)("span",{class:"cb-text-blue-4 cb-font-16 q-px-sm"},"ChotaBeta Communities",-1),g=(0,a._)("div",{class:"text-center cb-text-grey-4 cb-round-borders-10 cb-shadow-1 q-my-md q-py-xs text-bold"},[(0,a._)("span",null,"Choose Your Community")],-1),m={class:"row"},_=(0,a._)("div",{class:"col-12"},[(0,a._)("span",{class:"cb-text-blue-8 cb-font text-bold"},"Recent Searches")],-1),h={class:"col-12 row q-pl-md"},b={class:"col-12 flex q-py-xs"},v=(0,a._)("div",{class:"q-px-md"},[(0,a._)("span",{class:"cb-text-blue-8"},"Other"),(0,a._)("br"),(0,a._)("span",{class:"cb-text-grey-4",style:{"font-size":"12px"}},"Not Assigned")],-1),w=(0,a._)("div",{class:"col-12 text-right cb-text-grey-4 q-py-sm"},"View More",-1),x={class:"row"},f=(0,a._)("div",{class:"col-12"},[(0,a._)("span",{class:"cb-text-blue-8 cb-font text-bold"},"Saved Locations")],-1),q={class:"col-12",style:{"max-height":"200px",overflow:"scroll"}};function y(e,t,o,y,k,W){const Z=(0,a.up)("q-btn"),Q=(0,a.up)("q-toolbar"),H=(0,a.up)("q-header"),C=(0,a.up)("q-icon"),L=(0,a.up)("q-input"),S=(0,a.up)("q-img"),j=(0,a.up)("q-separator"),I=(0,a.up)("q-item-section"),$=(0,a.up)("q-item-label"),z=(0,a.up)("q-item"),A=(0,a.up)("q-list"),G=(0,a.up)("q-page"),R=(0,a.up)("q-page-container"),O=(0,a.up)("q-layout"),T=(0,a.Q2)("ripple");return(0,a.wg)(),(0,a.j4)(O,{view:"lHh lpr lFf"},{default:(0,a.w5)((()=>[(0,a.Wm)(H,null,{default:(0,a.w5)((()=>[(0,a.Wm)(Q,{class:"cb-bg-white-2 cb-text-blue-8"},{default:(0,a.w5)((()=>[(0,a.Wm)(Z,{flat:"",dense:"",round:"",icon:"arrow_back",onClick:t[0]||(t[0]=t=>e.$router.push("/home/dashboard"))}),l])),_:1})])),_:1}),(0,a.Wm)(R,null,{default:(0,a.w5)((()=>[(0,a.Wm)(G,{class:"q-px-md q-py-xs"},{default:(0,a.w5)((()=>[(0,a._)("div",c,[(0,a.Wm)(L,{borderless:"",placeholder:"Address Search e.g. Prashant Towers",onClick:t[1]||(t[1]=e=>W.initAutocomplete()),modelValue:y.location_search,"onUpdate:modelValue":t[2]||(t[2]=e=>y.location_search=e),for:"toLocation1"},{prepend:(0,a.w5)((()=>[(0,a.Wm)(C,{name:"search",class:"cb-text-orange-8"})])),_:1},8,["modelValue"])]),n,(0,a._)("div",r,[(0,a.Wm)(S,{src:"https://chotabeta.app/dev/testenv/public/imgs/google-maps-48.png",width:"30px"}),i]),d,(0,a._)("div",p,[(0,a.Wm)(S,{src:"https://chotabeta.app/dev/testenv/public/imgs/house-48.png",width:"30px"}),u]),g,(0,a._)("div",m,[_,(0,a._)("div",h,[((0,a.wg)(),(0,a.iD)(a.HY,null,(0,a.Ko)(3,(e=>(0,a._)("div",b,[(0,a.Wm)(S,{src:"https://chotabeta.app/dev/testenv/public/imgs/house-48.png",width:"25px"}),v,(0,a.Wm)(j)]))),64))]),w]),(0,a._)("div",x,[f,(0,a._)("div",q,[(0,a.Wm)(A,{separator:""},{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(y.saved_locations,(e=>(0,a.wy)(((0,a.wg)(),(0,a.j4)(z,{clickable:"",key:e,class:"q-px-xs",onClick:t=>W.saved_location_add(e)},{default:(0,a.w5)((()=>[(0,a.Wm)(I,{avatar:"",class:"q-px-xs"},{default:(0,a.w5)((()=>["Home"==e.location_type?((0,a.wg)(),(0,a.j4)(C,{key:0,name:"home",size:"xs",class:"cb-bg-orange-8 q-pa-xs text-white cb-font",style:{"border-radius":"100%"}})):(0,a.kq)("",!0),"Home"!=e.location_type?((0,a.wg)(),(0,a.j4)(C,{key:1,name:"location_on",size:"xs",class:"cb-bg-orange-8 q-pa-xs text-white cb-font",style:{"border-radius":"100%"}})):(0,a.kq)("",!0)])),_:2},1024),(0,a.Wm)(I,null,{default:(0,a.w5)((()=>[(0,a.Wm)($,null,{default:(0,a.w5)((()=>[(0,a.Uk)((0,s.zw)(e.location_type),1)])),_:2},1024),(0,a.Wm)($,{caption:"",lines:"2"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,s.zw)(e.name),1)])),_:2},1024)])),_:2},1024)])),_:2},1032,["onClick"])),[[T]]))),128))])),_:1})])])])),_:1})])),_:1})])),_:1})}var k=o(52),W=o.n(k),Z=o(1959);const Q={setup(){return{access_token:(0,Z.iH)(null),saved_locations:(0,Z.iH)([]),carousels:(0,Z.iH)(0),step:(0,Z.iH)(1,2,3),data:(0,Z.iH)(null),location_search:(0,Z.iH)(null),searched_latlong:(0,Z.iH)(null),selected_location:(0,Z.iH)(null)}},mounted(){this.getToken(),this.pickanddrop_locationsearch()},methods:{getToken(){var e=this;e.access_token=e.$store.state.token,null==e.access_token&&e.$router.push("")},pickanddrop_locationsearch(){var e=this;let t={headers:{Authorization:`Bearer ${e.access_token}`}};W().get("https://chotabeta.app/dev/testenv/api/favourite-locations-get-two",t).then((function(t){console.log("response"),e.saved_locations=t.data.favourite_locations})).catch((function(e){console.log(e)}))},initAutocomplete(){var e=this,t=document.getElementById("toLocation1");const o={fields:["formatted_address","geometry.location"]};var a=new google.maps.places.Autocomplete(t,o);console.log(a,"autocomplete"),google.maps.event.addListener(a,"place_changed",(function(){var t=a.getPlace();console.log(t,"place",t.formatted_address);var o=t.geometry.location.lat(),s=t.geometry.location.lng(),l=o+","+s;console.log(l,"jygsdyu"),e.location_search=t.formatted_address,e.searched_latlong=l,e.$router.push("/adding_address_page?searchaddress="+e.location_search+"&searched_latlong="+e.searched_latlong)}))},saved_location_add(e){var t=this;console.log(e,"saved location"),t.selected_location=e,t.getReverseGeocodingData(e.location)},getReverseGeocodingData(e){var t=this;console.log(e,"latlongs dataaaaaaaaaaaaaaa");var o=e.split(","),a=new google.maps.LatLng(o[0],o[1]),s=new google.maps.Geocoder;s.geocode({latLng:a},((e,o)=>{if(o!==google.maps.GeocoderStatus.OK&&(console.log(google.maps.GeocoderStatus),alert(o)),o==google.maps.GeocoderStatus.OK){var a=e[0];this.$store.dispatch("saved_asdderss_data",{address:a,saved_address:t.selected_location}).then((e=>{200==e&&setTimeout(t.$router.push("/home/dashboard"),500)})).catch((e=>{console.log(e)}))}}))}}};var H=o(4260),C=o(3066),L=o(3812),S=o(9570),j=o(8240),I=o(2652),$=o(4379),z=o(4842),A=o(4554),G=o(4027),R=o(5869),O=o(7011),T=o(3414),B=o(2035),D=o(2350),K=o(6489),P=o(7518),V=o.n(P);const Y=(0,H.Z)(Q,[["render",y]]),U=Y;V()(Q,"components",{QLayout:C.Z,QHeader:L.Z,QToolbar:S.Z,QBtn:j.Z,QPageContainer:I.Z,QPage:$.Z,QInput:z.Z,QIcon:A.Z,QImg:G.Z,QSeparator:R.Z,QList:O.Z,QItem:T.Z,QItemSection:B.Z,QItemLabel:D.Z}),V()(Q,"directives",{Ripple:K.Z})}}]);
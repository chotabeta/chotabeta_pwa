"use strict";(self["webpackChunkpwa_wibsite"]=self["webpackChunkpwa_wibsite"]||[]).push([[9685],{9685:(e,t,a)=>{a.r(t),a.d(t,{default:()=>pe});var s=a(3673),l=a(2323);const o=(0,s._)("div",{id:"loader2",class:"pre-loader",style:{display:"none"}},null,-1),r=(0,s._)("div",{class:"row items-center justify-center cb-bg-white-2"},[(0,s._)("span",{class:"cb-text-orange-8 text-weight-bolder cb-font-16"},"My Rides")],-1),n={class:"row items-center q-px-md q-py-sm"},c=["src"],d={class:"col"},i={class:"cb-text-blue-8 text-weight-bolder"},u=(0,s._)("br",null,null,-1),m={class:"cb-text-grey-4"},p={class:"text-right col text-weight-bolder"},_=(0,s._)("br",null,null,-1),b={class:"full-width q-py-xs"},g={colspan:"2"},y={class:"flex"},h={class:"flex q-py-xs"},x=(0,s.Uk)("Pay Now"),w={key:1,class:"text-weight-bolder cb-font-14 cb-text-green-8"},k=["onClick"],f={key:1,class:"text-center q-mt-md"},q=(0,s._)("h5",{class:"cb-text-grey-4 text-bold"},"Orders Not Found.",-1),v=(0,s._)("span",{class:"cb-text-grey-4 cb-font-16"},"We are here to serve . Get your packages, groceries and many more to your door step at single click.",-1),W={class:"row items-center q-px-md q-py-sm"},z=["src"],$={class:"col"},C={class:"cb-text-blue-8 text-weight-bolder"},A=(0,s._)("br",null,null,-1),Z={class:"cb-text-grey-4"},Q={class:"text-right col text-weight-bolder"},H=(0,s._)("br",null,null,-1),D={class:"full-width q-py-xs"},O={colspan:"2"},P={class:"flex"},U={class:"flex q-py-sm"},V=(0,s.Uk)("Pay Now"),B={key:1,class:"text-weight-bolder cb-font-14 cb-text-green-8"},T=["onClick"],j={key:1,class:"text-center q-mt-md"},I=(0,s._)("h5",{class:"cb-text-grey-4 text-bold"},"Orders Not Found.",-1),N=(0,s._)("span",{class:"cb-text-grey-4 cb-font-16"},"We are here to serve . Get your packages, groceries and many more to your door step at single click.",-1),R=(0,s._)("br",null,null,-1),E=(0,s._)("span",{class:"text-weight-bolder text-h6"},"Your Payment Has Been Declined!",-1),S=(0,s._)("br",null,null,-1);function Y(e,t,a,Y,F,G){const K=(0,s.up)("q-tab"),L=(0,s.up)("q-tabs"),M=(0,s.up)("q-avatar"),J=(0,s.up)("q-icon"),X=(0,s.up)("q-separator"),ee=(0,s.up)("q-space"),te=(0,s.up)("q-btn"),ae=(0,s.up)("q-card-section"),se=(0,s.up)("q-card"),le=(0,s.up)("q-tab-panel"),oe=(0,s.up)("q-tab-panels"),re=(0,s.up)("q-dialog"),ne=(0,s.up)("q-page");return(0,s.wg)(),(0,s.j4)(ne,{class:"animate__animated animate__slideInRight"},{default:(0,s.w5)((()=>[o,r,(0,s.Wm)(L,{breakpoint:0,align:"center",dense:"",modelValue:Y.tab,"onUpdate:modelValue":t[0]||(t[0]=e=>Y.tab=e)},{default:(0,s.w5)((()=>[(0,s.Wm)(K,{class:"cb-text-orange-8",label:"Active",name:"Active"}),(0,s.Wm)(K,{class:"cb-text-orange-8",label:"Past",name:"Past"})])),_:1},8,["modelValue"]),(0,s.Wm)(oe,{modelValue:Y.tab,"onUpdate:modelValue":t[3]||(t[3]=e=>Y.tab=e),animated:""},{default:(0,s.w5)((()=>[(0,s.Wm)(le,{name:"Active"},{default:(0,s.w5)((()=>[0!=Y.Active_orders.length?((0,s.wg)(!0),(0,s.iD)(s.HY,{key:0},(0,s.Ko)(Y.Active_orders,(t=>((0,s.wg)(),(0,s.j4)(se,{class:"cb-shadow-1 cb-round-borders-10 q-pa-sm q-mb-md",key:t},{default:(0,s.w5)((()=>[(0,s.Wm)(ae,{class:"cb-font-12 cb-text-grey-4 q-px-sm q-py-none"},{default:(0,s.w5)((()=>[(0,s._)("div",n,[(0,s.Wm)(M,{size:"50px",style:{border:"1px solid grey"},class:"q-mr-sm"},{default:(0,s.w5)((()=>[(0,s.Wm)(M,{size:"30px",square:""},{default:(0,s.w5)((()=>[(0,s._)("img",{src:Y.image_url+t.categ_image,class:"fit"},null,8,c)])),_:2},1024)])),_:2},1024),(0,s._)("div",d,[(0,s._)("span",i,(0,l.zw)(t.vehicle_model),1),u,(0,s._)("span",m,(0,l.zw)(t.service_name),1)]),(0,s._)("div",p,[(0,s._)("span",null,"Order #"+(0,l.zw)(t.uid),1),_,(0,s._)("span",null,[(0,s.Uk)((0,l.zw)(t.order_status_string)+" ",1),(0,s.Wm)(J,{name:"check_circle",size:"xs",color:"orange"})])])]),(0,s.Wm)(X),(0,s._)("table",b,[(0,s._)("tr",g,[(0,s._)("td",null,"Ordered On:   "+(0,l.zw)(t.d_schedule_date),1)]),(0,s._)("tr",null,[(0,s._)("td",y,[(0,s.Uk)("Payment :   "+(0,l.zw)(t.payment_mode)+" ",1),(0,s.Wm)(ee),(0,s.Uk)("Amount:  Rs."+(0,l.zw)(t.amount),1)])])]),(0,s.Wm)(X),(0,s._)("div",h,[(0,s.Wm)(te,{label:"Track Order",dense:"",flat:"",class:"text-weight-bolder cb-font-14 cb-text-blue-8",onClick:e=>G.trackorderdata(t.uid)},null,8,["onClick"]),(0,s.Wm)(ee),0!=t.amount&&"paid"!=t.payment_status?((0,s.wg)(),(0,s.j4)(te,{key:0,class:"text-weight-bolder cb-font-14 cb-text-orange-8",dense:"",flat:"",onClick:e=>G.order_payment_function(t.uid)},{default:(0,s.w5)((()=>[x])),_:2},1032,["onClick"])):(0,s.kq)("",!0),"paid"==t.payment_status&&0!=t.amount?((0,s.wg)(),(0,s.iD)("span",w,(0,l.zw)(t.payment_status),1)):(0,s.kq)("",!0)]),(0,s.Wm)(X),(0,s._)("div",{class:"flex text-weight-bolder flex-center q-py-sm cb-font-16 cb-text-grey-4",onClick:a=>e.$router.push("/Home/OrderDetails?order_id="+t.uid+"&service=d")},"View Details",8,k)])),_:2},1024)])),_:2},1024)))),128)):((0,s.wg)(),(0,s.iD)("div",f,[(0,s.Wm)(M,{size:"80px",square:"",icon:"drive_eta","font-size":"80px",class:"cb-text-orange-8"}),q,v,(0,s.Wm)(te,{label:"Book your ride now",class:"cb-bg-orange-8 text-white q-px-xl q-my-lg cb-round-borders-10",onClick:t[1]||(t[1]=t=>e.$router.push("/home/dashboard"))})]))])),_:1}),(0,s.Wm)(le,{name:"Past"},{default:(0,s.w5)((()=>[0!=Y.past_orders.length?((0,s.wg)(!0),(0,s.iD)(s.HY,{key:0},(0,s.Ko)(Y.past_orders,(t=>((0,s.wg)(),(0,s.j4)(se,{class:"cb-shadow-1 cb-round-borders-10 q-pa-sm q-mb-md",key:t},{default:(0,s.w5)((()=>[(0,s.Wm)(ae,{class:"cb-font-12 cb-text-grey-4 q-px-sm q-py-none"},{default:(0,s.w5)((()=>[(0,s._)("div",W,[(0,s.Wm)(M,{size:"50px",style:{border:"1px solid grey"},class:"q-mr-sm"},{default:(0,s.w5)((()=>[(0,s.Wm)(M,{size:"30px",square:""},{default:(0,s.w5)((()=>[(0,s._)("img",{src:Y.image_url+t.categ_image,class:"fit"},null,8,z)])),_:2},1024)])),_:2},1024),(0,s._)("div",$,[(0,s._)("span",C,(0,l.zw)(t.vehicle_model),1),A,(0,s._)("span",Z,(0,l.zw)(t.service_name),1)]),(0,s._)("div",Q,[(0,s._)("span",null,"Order #"+(0,l.zw)(t.uid),1),H,(0,s._)("span",null,[(0,s.Uk)((0,l.zw)(t.order_status_string)+" ",1),(0,s.Wm)(J,{name:"check_circle",size:"xs",color:"orange"})])])]),(0,s.Wm)(X),(0,s._)("table",D,[(0,s._)("tr",O,[(0,s._)("td",null,"Ordered On:   "+(0,l.zw)(t.d_schedule_date),1)]),(0,s._)("tr",null,[(0,s._)("td",P,[(0,s.Uk)("Payment :   "+(0,l.zw)(t.payment_mode)+" ",1),(0,s.Wm)(ee),(0,s.Uk)("Amount:  Rs."+(0,l.zw)(t.amount),1)])])]),(0,s.Wm)(X),(0,s._)("div",U,[(0,s.Wm)(ee),0!=t.amount&&"paid"!=t.payment_status?((0,s.wg)(),(0,s.j4)(te,{key:0,class:"text-weight-bolder cb-font-14 cb-text-orange-8",dense:"",flat:"",onClick:e=>G.order_payment_function(t.uid)},{default:(0,s.w5)((()=>[V])),_:2},1032,["onClick"])):(0,s.kq)("",!0),"paid"==t.payment_status&&0!=t.amount?((0,s.wg)(),(0,s.iD)("span",B,(0,l.zw)(t.payment_status),1)):(0,s.kq)("",!0)]),(0,s.Wm)(X),(0,s._)("div",{class:"flex text-weight-bolder flex-center q-py-sm cb-font-16 cb-text-grey-4",onClick:a=>e.$router.push("/Home/OrderDetails?order_id="+t.uid+"&service=d")},"View Details",8,T)])),_:2},1024)])),_:2},1024)))),128)):((0,s.wg)(),(0,s.iD)("div",j,[(0,s.Wm)(M,{size:"80px",square:"",icon:"drive_eta","font-size":"80px",class:"cb-text-orange-8"}),I,N,(0,s.Wm)(te,{label:"Book your ride now",class:"cb-bg-orange-8 text-white q-px-xl q-my-lg cb-round-borders-10",onClick:t[2]||(t[2]=t=>e.$router.push("/home/dashboard"))})]))])),_:1})])),_:1},8,["modelValue"]),(0,s.Wm)(re,{modelValue:Y.payment_decline_method,"onUpdate:modelValue":t[5]||(t[5]=e=>Y.payment_decline_method=e)},{default:(0,s.w5)((()=>[(0,s.Wm)(se,{class:"q-px-md q-py-md cb-round-borders-20 text-grey-9"},{default:(0,s.w5)((()=>[(0,s.Wm)(ae,{class:"text-center"},{default:(0,s.w5)((()=>[(0,s.Wm)(M,{size:"80px",class:"bg-orange-3"},{default:(0,s.w5)((()=>[(0,s.Wm)(M,{size:"65px",class:"bg-white cb-text-orange-8","font-size":"60px",icon:"close"})])),_:1}),R,E,S,(0,s.Wm)(te,{label:"Ok",class:"q-px-xl cb-font-16 cb-bg-orange-8 text-white q-mb-sm q-mt-lg",onClick:t[4]||(t[4]=e=>G.refresh_page_without_response())})])),_:1})])),_:1})])),_:1},8,["modelValue"])])),_:1})}a(1768);var F=a(1959);const G={setup(){return{tracking_details:[],data:(0,F.iH)(null),tab:(0,F.iH)("Active"),access_token:(0,F.iH)(null),Active_orders:(0,F.iH)([]),image_url:(0,F.iH)(null),xid:(0,F.iH)(null),past_orders:(0,F.iH)([]),payment_decline_method:(0,F.iH)(!1)}},mounted(){this.getAccessToken(),this.gettodaydata(),"fail"==this.$route.query.response&&(this.payment_decline_method=!0),this.$route.query.id&&this.update_payment_status(this.$route.query.id)},methods:{getAccessToken(){var e=this;e.$store.state.token?e.access_token=e.$store.state.token:e.access_token=e.$store.state.token_cb,e.$store.state.xid?e.xid=e.$store.state.xid:e.xid=e.$store.state.xid_cb,null!=e.access_token&&e.access_token||e.$router.push("/")},gettodaydata(){var e=this,t=document.getElementById("loader2");t.style.display="block";let a={headers:{Authorization:`Bearer ${e.access_token}`}};e.$api.get("/api/v2/my-drives2",a).then((function(a){t.style.display="none",200==a.data.status_code&&(e.Active_orders=a.data.active_drives,e.image_url=a.data.image_url,e.past_orders=a.data.past_drives)})).catch((function(e){console.log(e)}))},trackorderdata(e){var t=this;t.$router.push("/LocationTrack?uid="+e)},order_payment_function(e){var t=this,a=document.getElementById("loader2");a.style.display="block";let s={headers:{Authorization:`Bearer ${t.access_token}`}};t.$api.get("/api/v4/mydrives-payment?uid="+e,s).then((function(e){if(a.style.display="none",200==e.data.status_code){var s="https://pay.easebuzz.in/pay/"+e.data.payment_access_token;window.location=s}else t.$q.notify({message:e.data.message,type:"negative",progress:!0});console.log(e.data,"v4/mydrives-payment?uid=")})).catch((function(e){console.log(e)}))},refresh_page_without_response(){var e=this;e.payment_decline_method=!1,e.$router.push(e.$route.path)},update_payment_status(e){var t=this,a=document.getElementById("loader2");a.style.display="block";let s={headers:{Authorization:`Bearer ${t.access_token}`}};t.$api.post("/api/update-payment-status",{id:e},s).then((function(e){a.style.display="none"})).catch((function(e){console.log(e)})),t.$router.push(t.$route.path),t.gettodaydata()}}};var K=a(4260),L=a(4379),M=a(7547),J=a(3269),X=a(5906),ee=a(6602),te=a(151),ae=a(5589),se=a(5096),le=a(4554),oe=a(5869),re=a(2025),ne=a(8240),ce=a(4027),de=a(6778),ie=a(7518),ue=a.n(ie);const me=(0,K.Z)(G,[["render",Y]]),pe=me;ue()(G,"components",{QPage:L.Z,QTabs:M.Z,QTab:J.Z,QTabPanels:X.Z,QTabPanel:ee.Z,QCard:te.Z,QCardSection:ae.Z,QAvatar:se.Z,QIcon:le.Z,QSeparator:oe.Z,QSpace:re.Z,QBtn:ne.Z,QImg:ce.Z,QDialog:de.Z})}}]);
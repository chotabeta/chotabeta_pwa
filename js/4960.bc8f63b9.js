"use strict";(self["webpackChunkpwa_wibsite"]=self["webpackChunkpwa_wibsite"]||[]).push([[4960],{4960:(e,t,a)=>{a.r(t),a.d(t,{default:()=>ue});var s=a(3673),l=a(2323);const r=(0,s._)("div",{id:"loader2",class:"pre-loader",style:{display:"none"}},null,-1),o=(0,s._)("div",{class:"row items-center justify-center cb-bg-white-2"},[(0,s._)("span",{class:"cb-text-orange-8 text-weight-bolder cb-font-16"},"My Rides")],-1),n={class:"row items-center q-px-md q-py-sm"},c=["src"],d={class:"col"},i={class:"cb-text-blue-8 text-weight-bolder"},u=(0,s._)("br",null,null,-1),m={class:"cb-text-grey-4"},p={class:"text-right col text-weight-bolder"},_=(0,s._)("br",null,null,-1),b={class:"full-width q-py-xs"},g={colspan:"2"},y={class:"flex"},h={class:"flex q-py-xs"},x=(0,s.Uk)("Pay Now"),w={key:1,class:"text-weight-bolder cb-font-14 cb-text-green-8"},k=["onClick"],f={key:1,class:"text-center q-mt-md"},q=(0,s._)("h5",{class:"cb-text-grey-4 text-bold"},"Orders Not Found.",-1),v=(0,s._)("span",{class:"cb-text-grey-4 cb-font-16"},"We are here to serve . Get your packages, groceries and many more to your door step at single click.",-1),W={class:"row items-center q-px-md q-py-sm"},z=["src"],$={class:"col"},C={class:"cb-text-blue-8 text-weight-bolder"},A=(0,s._)("br",null,null,-1),Z={class:"cb-text-grey-4"},Q={class:"text-right col text-weight-bolder"},H=(0,s._)("br",null,null,-1),O={class:"full-width q-py-xs"},D={colspan:"2"},V={class:"flex"},B={class:"flex q-px-lg q-py-sm"},P=["onClick"],U={key:1,class:"text-center q-mt-md"},T=(0,s._)("h5",{class:"cb-text-grey-4 text-bold"},"Orders Not Found.",-1),I=(0,s._)("span",{class:"cb-text-grey-4 cb-font-16"},"We are here to serve . Get your packages, groceries and many more to your door step at single click.",-1),j=(0,s._)("br",null,null,-1),R=(0,s._)("span",{class:"text-weight-bolder text-h6"},"Your Payment Has Been Declined!",-1),E=(0,s._)("br",null,null,-1);function N(e,t,a,N,S,Y){const F=(0,s.up)("q-tab"),G=(0,s.up)("q-tabs"),K=(0,s.up)("q-avatar"),L=(0,s.up)("q-icon"),M=(0,s.up)("q-separator"),J=(0,s.up)("q-space"),X=(0,s.up)("q-btn"),ee=(0,s.up)("q-card-section"),te=(0,s.up)("q-card"),ae=(0,s.up)("q-tab-panel"),se=(0,s.up)("q-tab-panels"),le=(0,s.up)("q-dialog"),re=(0,s.up)("q-page");return(0,s.wg)(),(0,s.j4)(re,{class:"animate__animated animate__slideInRight"},{default:(0,s.w5)((()=>[r,o,(0,s.Wm)(G,{breakpoint:0,align:"center",dense:"",modelValue:N.tab,"onUpdate:modelValue":t[0]||(t[0]=e=>N.tab=e)},{default:(0,s.w5)((()=>[(0,s.Wm)(F,{class:"cb-text-orange-8",label:"Active",name:"Active"}),(0,s.Wm)(F,{class:"cb-text-orange-8",label:"Past",name:"Past"})])),_:1},8,["modelValue"]),(0,s.Wm)(se,{modelValue:N.tab,"onUpdate:modelValue":t[3]||(t[3]=e=>N.tab=e),animated:""},{default:(0,s.w5)((()=>[(0,s.Wm)(ae,{name:"Active"},{default:(0,s.w5)((()=>[0!=N.Active_orders.length?((0,s.wg)(!0),(0,s.iD)(s.HY,{key:0},(0,s.Ko)(N.Active_orders,(t=>((0,s.wg)(),(0,s.j4)(te,{class:"cb-shadow-1 cb-round-borders-10 q-pa-sm q-mb-md",key:t},{default:(0,s.w5)((()=>[(0,s.Wm)(ee,{class:"cb-font-12 cb-text-grey-4 q-px-sm q-py-none"},{default:(0,s.w5)((()=>[(0,s._)("div",n,[(0,s.Wm)(K,{size:"50px",style:{border:"1px solid grey"},class:"q-mr-sm"},{default:(0,s.w5)((()=>[(0,s.Wm)(K,{size:"30px",square:""},{default:(0,s.w5)((()=>[(0,s._)("img",{src:N.image_url+t.categ_image,class:"fit"},null,8,c)])),_:2},1024)])),_:2},1024),(0,s._)("div",d,[(0,s._)("span",i,(0,l.zw)(t.vehicle_model),1),u,(0,s._)("span",m,(0,l.zw)(t.service_name),1)]),(0,s._)("div",p,[(0,s._)("span",null,"Order #"+(0,l.zw)(t.uid),1),_,(0,s._)("span",null,[(0,s.Uk)((0,l.zw)(t.order_status_string)+" ",1),(0,s.Wm)(L,{name:"check_circle",size:"xs",color:"orange"})])])]),(0,s.Wm)(M),(0,s._)("table",b,[(0,s._)("tr",g,[(0,s._)("td",null,"Ordered On:   "+(0,l.zw)(t.d_schedule_date),1)]),(0,s._)("tr",null,[(0,s._)("td",y,[(0,s.Uk)("Payment :   "+(0,l.zw)(t.payment_mode)+" ",1),(0,s.Wm)(J),(0,s.Uk)("Amount:  Rs."+(0,l.zw)(t.amount),1)])])]),(0,s.Wm)(M),(0,s._)("div",h,[(0,s.Wm)(X,{label:"Track Order",dense:"",flat:"",class:"text-weight-bolder cb-font-14 cb-text-blue-8",onClick:e=>Y.trackorderdata(t.uid)},null,8,["onClick"]),(0,s.Wm)(J),0!=t.amount&&"paid"!=t.payment_status?((0,s.wg)(),(0,s.j4)(X,{key:0,class:"text-weight-bolder cb-font-14 cb-text-orange-8",dense:"",flat:"",onClick:e=>Y.order_payment_function(t.uid)},{default:(0,s.w5)((()=>[x])),_:2},1032,["onClick"])):(0,s.kq)("",!0),"paid"==t.payment_status&&0!=t.amount?((0,s.wg)(),(0,s.iD)("span",w,(0,l.zw)(t.payment_status),1)):(0,s.kq)("",!0)]),(0,s.Wm)(M),(0,s._)("div",{class:"flex text-weight-bolder flex-center q-py-sm cb-font-16 cb-text-grey-4",onClick:a=>e.$router.push("/Home/OrderDetails?order_id="+t.uid+"&service=d")},"View Details",8,k)])),_:2},1024)])),_:2},1024)))),128)):((0,s.wg)(),(0,s.iD)("div",f,[(0,s.Wm)(K,{size:"80px",square:"",icon:"drive_eta","font-size":"80px",class:"cb-text-orange-8"}),q,v,(0,s.Wm)(X,{label:"Book your ride now",class:"cb-bg-orange-8 text-white q-px-xl q-my-lg cb-round-borders-10",onClick:t[1]||(t[1]=t=>e.$router.push("/home/dashboard"))})]))])),_:1}),(0,s.Wm)(ae,{name:"Past"},{default:(0,s.w5)((()=>[0!=N.past_orders.length?((0,s.wg)(!0),(0,s.iD)(s.HY,{key:0},(0,s.Ko)(N.past_orders,(t=>((0,s.wg)(),(0,s.j4)(te,{class:"cb-shadow-1 cb-round-borders-10 q-pa-sm q-mb-md",key:t},{default:(0,s.w5)((()=>[(0,s.Wm)(ee,{class:"cb-font-12 cb-text-grey-4 q-px-sm q-py-none"},{default:(0,s.w5)((()=>[(0,s._)("div",W,[(0,s.Wm)(K,{size:"50px",style:{border:"1px solid grey"},class:"q-mr-sm"},{default:(0,s.w5)((()=>[(0,s.Wm)(K,{size:"30px",square:""},{default:(0,s.w5)((()=>[(0,s._)("img",{src:N.image_url+t.categ_image,class:"fit"},null,8,z)])),_:2},1024)])),_:2},1024),(0,s._)("div",$,[(0,s._)("span",C,(0,l.zw)(t.vehicle_model),1),A,(0,s._)("span",Z,(0,l.zw)(t.service_name),1)]),(0,s._)("div",Q,[(0,s._)("span",null,"Order #"+(0,l.zw)(t.uid),1),H,(0,s._)("span",null,[(0,s.Uk)((0,l.zw)(t.order_status_string)+" ",1),(0,s.Wm)(L,{name:"check_circle",size:"xs",color:"orange"})])])]),(0,s.Wm)(M),(0,s._)("table",O,[(0,s._)("tr",D,[(0,s._)("td",null,"Ordered On:   "+(0,l.zw)(t.d_schedule_date),1)]),(0,s._)("tr",null,[(0,s._)("td",V,[(0,s.Uk)("Payment :   "+(0,l.zw)(t.payment_mode)+" ",1),(0,s.Wm)(J),(0,s.Uk)("Amount:  Rs."+(0,l.zw)(t.amount),1)])])]),(0,s.Wm)(M),(0,s._)("div",B,[(0,s.Wm)(X,{label:"Track Order",flat:"",class:"text-weight-bolder cb-font-14 cb-text-blue-8",onClick:e=>Y.trackorderdata(t.uid)},null,8,["onClick"]),(0,s.Wm)(J)]),(0,s.Wm)(M),(0,s._)("div",{class:"flex text-weight-bolder flex-center q-py-sm cb-font-16 cb-text-grey-4",onClick:a=>e.$router.push("/Home/OrderDetails?order_id="+t.uid+"&service=d")},"View Details",8,P)])),_:2},1024)])),_:2},1024)))),128)):((0,s.wg)(),(0,s.iD)("div",U,[(0,s.Wm)(K,{size:"80px",square:"",icon:"drive_eta","font-size":"80px",class:"cb-text-orange-8"}),T,I,(0,s.Wm)(X,{label:"Book your ride now",class:"cb-bg-orange-8 text-white q-px-xl q-my-lg cb-round-borders-10",onClick:t[2]||(t[2]=t=>e.$router.push("/home/dashboard"))})]))])),_:1})])),_:1},8,["modelValue"]),(0,s.Wm)(le,{modelValue:N.payment_decline_method,"onUpdate:modelValue":t[5]||(t[5]=e=>N.payment_decline_method=e)},{default:(0,s.w5)((()=>[(0,s.Wm)(te,{class:"q-px-md q-py-md cb-round-borders-20 text-grey-9"},{default:(0,s.w5)((()=>[(0,s.Wm)(ee,{class:"text-center"},{default:(0,s.w5)((()=>[(0,s.Wm)(K,{size:"80px",class:"bg-orange-3"},{default:(0,s.w5)((()=>[(0,s.Wm)(K,{size:"65px",class:"bg-white cb-text-orange-8","font-size":"60px",icon:"close"})])),_:1}),j,R,E,(0,s.Wm)(X,{label:"Ok",class:"q-px-xl cb-font-16 cb-bg-orange-8 text-white q-mb-sm q-mt-lg",onClick:t[4]||(t[4]=e=>Y.refresh_page_without_response())})])),_:1})])),_:1})])),_:1},8,["modelValue"])])),_:1})}a(1768);var S=a(1959);const Y={setup(){return{tracking_details:[],data:(0,S.iH)(null),tab:(0,S.iH)("Active"),access_token:(0,S.iH)(null),Active_orders:(0,S.iH)([]),image_url:(0,S.iH)(null),xid:(0,S.iH)(null),past_orders:(0,S.iH)([]),payment_decline_method:(0,S.iH)(!1)}},mounted(){this.getAccessToken(),this.gettodaydata(),"fail"==this.$route.query.response&&(this.payment_decline_method=!0),this.$route.query.id&&this.update_payment_status(this.$route.query.id)},methods:{getAccessToken(){var e=this;e.$store.state.token?e.access_token=e.$store.state.token:e.access_token=e.$store.state.token_cb,e.$store.state.xid?e.xid=e.$store.state.xid:e.xid=e.$store.state.xid_cb,null!=e.access_token&&e.access_token||e.$router.push("/")},gettodaydata(){var e=this,t=document.getElementById("loader2");t.style.display="block";let a={headers:{Authorization:`Bearer ${e.access_token}`}};e.$api.get("/api/v2/my-drives2",a).then((function(a){t.style.display="none",200==a.data.status_code&&(e.Active_orders=a.data.active_drives,e.image_url=a.data.image_url,e.past_orders=a.data.past_drives)})).catch((function(e){console.log(e)}))},trackorderdata(e){var t=this;t.$router.push("/LocationTrack?uid="+e)},order_payment_function(e){var t=this,a=document.getElementById("loader2");a.style.display="block";let s={headers:{Authorization:`Bearer ${t.access_token}`}};t.$api.get("/api/v4/mydrives-payment?uid="+e,s).then((function(e){if(a.style.display="none",200==e.data.status_code){var s="https://pay.easebuzz.in/pay/"+e.data.payment_access_token;window.location=s}else t.$q.notify({message:e.data.message,type:"negative",progress:!0});console.log(e.data,"v4/mydrives-payment?uid=")})).catch((function(e){console.log(e)}))},refresh_page_without_response(){var e=this;e.payment_decline_method=!1,e.$router.push(e.$route.path)},update_payment_status(e){var t=this,a=document.getElementById("loader2");a.style.display="block";let s={headers:{Authorization:`Bearer ${t.access_token}`}};t.$api.post("/api/update-payment-status",{id:e},s).then((function(e){a.style.display="none"})).catch((function(e){console.log(e)})),t.$router.push(t.$route.path),t.gettodaydata()}}};var F=a(4260),G=a(4379),K=a(7547),L=a(3269),M=a(5906),J=a(6602),X=a(151),ee=a(5589),te=a(5096),ae=a(4554),se=a(5869),le=a(2025),re=a(8240),oe=a(4027),ne=a(6778),ce=a(7518),de=a.n(ce);const ie=(0,F.Z)(Y,[["render",N]]),ue=ie;de()(Y,"components",{QPage:G.Z,QTabs:K.Z,QTab:L.Z,QTabPanels:M.Z,QTabPanel:J.Z,QCard:X.Z,QCardSection:ee.Z,QAvatar:te.Z,QIcon:ae.Z,QSeparator:se.Z,QSpace:le.Z,QBtn:re.Z,QImg:oe.Z,QDialog:ne.Z})}}]);
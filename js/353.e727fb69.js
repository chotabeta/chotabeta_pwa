"use strict";(self["webpackChunkpwa_wibsite"]=self["webpackChunkpwa_wibsite"]||[]).push([[353],{353:(e,t,a)=>{a.r(t),a.d(t,{default:()=>de});var s=a(3673),l=a(2323);const c=(0,s._)("div",{class:"row items-center justify-center cb-bg-white-2"},[(0,s._)("span",{class:"cb-text-orange-8 text-weight-bolder cb-font-16"},"My Orders")],-1),r={class:"flex q-px-md q-py-sm"},o={class:"col"},n={class:"cb-text-blue-8 text-weight-bolder"},d=(0,s._)("br",null,null,-1),i={class:"cb-text-grey-4"},m={class:"text-right col text-weight-bolder"},u=(0,s._)("br",null,null,-1),p={class:"full-width q-py-xs"},b={colspan:"2"},g=(0,s._)("td",null,"Ordered On:",-1),_=(0,s._)("td",null,"Payment :",-1),x={class:"flex"},y={class:"flex q-px-lg q-py-sm"},h={key:0,class:"text-weight-bolder cb-font-14 cb-text-orange-8"},w=["onClick"],f={class:"text-center q-mt-md"},k=(0,s._)("h5",{class:"cb-text-grey-4 text-bold"},"NO ORDERS",-1),q=(0,s._)("span",{class:"cb-text-grey-4 text-bold cb-font-16"},"Order your daily needs, fresh vegetables,fruits,groceries, and all your home essentials.One-stop solution for all your daily needs",-1),v={class:"q-py-sm text-bold text-center"},W=(0,s._)("br",null,null,-1),z=(0,s._)("span",{class:"cb-text-blue-8 text-bold"}," Order Status Details ",-1),Z={class:"item-center justify-center q-py-sm text-bold"},C={class:"row justify-center q-my-md"},Q=(0,s._)("span",{class:"q-px-md cb-text-grey-4"},"Order Received",-1),A={class:"row justify-center q-my-md"},O=(0,s._)("span",{class:"q-px-md cb-text-grey-4"},"Order is accepeted by ChotaBeta",-1),j={class:"row justify-center q-my-md"},H=(0,s._)("span",{class:"q-px-md cb-text-grey-4"},"Going to pick the order",-1),P={class:"row justify-center q-my-md"},V=(0,s._)("span",{class:"q-px-md cb-text-grey-4"},"ChotaBeta Pickeduped the order",-1),D={class:"row justify-center q-my-md"},$=(0,s._)("span",{class:"q-px-md cb-text-grey-4"},"ChotaBeta is on the way to delivery",-1),B={class:"row justify-center q-my-md"},T=(0,s._)("span",{class:"q-px-md cb-text-grey-4"},"ChotaBeta delivered order",-1),S={class:"row justify-center q-py-sm text-bold"};function U(e,t,a,U,R,I){const N=(0,s.up)("q-tab"),Y=(0,s.up)("q-tabs"),E=(0,s.up)("q-img"),G=(0,s.up)("q-avatar"),K=(0,s.up)("q-icon"),M=(0,s.up)("q-separator"),F=(0,s.up)("q-space"),J=(0,s.up)("q-btn"),L=(0,s.up)("q-card-scetion"),X=(0,s.up)("q-card"),ee=(0,s.up)("q-tab-panel"),te=(0,s.up)("q-tab-panels"),ae=(0,s.up)("q-page"),se=(0,s.up)("q-card-section"),le=(0,s.up)("q-dialog"),ce=(0,s.Q2)("close-popup");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(ae,null,{default:(0,s.w5)((()=>[c,(0,s.Wm)(Y,{breakpoint:0,align:"center",dense:"",modelValue:U.tab,"onUpdate:modelValue":t[0]||(t[0]=e=>U.tab=e)},{default:(0,s.w5)((()=>[(0,s.Wm)(N,{class:"cb-text-orange-8",label:"Active",name:"Active"}),(0,s.Wm)(N,{class:"cb-text-orange-8",label:"Past",name:"Past"})])),_:1},8,["modelValue"]),(0,s.Wm)(te,{modelValue:U.tab,"onUpdate:modelValue":t[2]||(t[2]=e=>U.tab=e),animated:""},{default:(0,s.w5)((()=>[(0,s.Wm)(ee,{name:"Active"},{default:(0,s.w5)((()=>[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(U.Active_orders,(t=>((0,s.wg)(),(0,s.j4)(X,{class:"cb-shadow-1 cb-round-borders-10 q-pa-sm q-mb-md",key:t},{default:(0,s.w5)((()=>[(0,s.Wm)(L,{class:"cb-font-12 cb-text-grey-4"},{default:(0,s.w5)((()=>[(0,s._)("div",r,[(0,s.Wm)(G,{class:"q-mr-sm",size:"55px",style:{border:"1px solid grey"}},{default:(0,s.w5)((()=>[(0,s.Wm)(E,{src:U.image_url+t.categ_image,width:"35px",height:"35px"},null,8,["src"])])),_:2},1024),(0,s._)("div",o,[(0,s._)("span",n,(0,l.zw)(t.category_name),1),d,(0,s._)("span",i,(0,l.zw)(t.service_name),1)]),(0,s._)("div",m,[(0,s._)("span",null,"Order #"+(0,l.zw)(t.uid),1),u,(0,s._)("span",null,[(0,s.Uk)((0,l.zw)(t.order_status_string)+" ",1),(0,s.Wm)(K,{name:"check_circle",size:"xs",color:"orange"})])])]),(0,s.Wm)(M),(0,s._)("table",p,[(0,s._)("tr",b,[g,(0,s._)("td",null,(0,l.zw)(t.delivered_at),1)]),(0,s._)("tr",null,[_,(0,s._)("td",x,[(0,s.Uk)((0,l.zw)(t.payment_mode)+" ",1),(0,s.Wm)(F),(0,s.Uk)("Amount:Rs."+(0,l.zw)(t.amount),1)])])]),(0,s.Wm)(M),(0,s._)("div",y,[(0,s.Wm)(J,{label:"Track Order",flat:"",class:"text-weight-bolder cb-font-14 cb-text-blue-8",onClick:e=>I.trackorderdata(t.uid)},null,8,["onClick"]),(0,s.Wm)(F),701==t.status?((0,s.wg)(),(0,s.iD)("span",h,"Pay Now")):(0,s.kq)("",!0)]),(0,s.Wm)(M),(0,s._)("div",{class:"flex text-weight-bolder flex-center q-py-sm cb-font-16 cb-text-grey-4",onClick:a=>e.$router.push("/Home/OrderDetails?order_id="+t.uid)},"View Details",8,w)])),_:2},1024)])),_:2},1024)))),128))])),_:1}),(0,s.Wm)(ee,{name:"Past"},{default:(0,s.w5)((()=>[(0,s._)("div",f,[(0,s.Wm)(E,{src:"https://chotabeta.app/dev/testenv/public/imgs/cart-2.png",width:"30%"}),k,q,(0,s.Wm)(J,{label:"Shop now",class:"cb-bg-orange-8 text-white q-px-xl q-my-lg",onClick:t[1]||(t[1]=t=>e.$router.push("/home/dashboard"))})])])),_:1})])),_:1},8,["modelValue"])])),_:1}),(0,s.Wm)(le,{modelValue:U.trackdailog,"onUpdate:modelValue":t[3]||(t[3]=e=>U.trackdailog=e),position:U.position},{default:(0,s.w5)((()=>[(0,s.Wm)(X,null,{default:(0,s.w5)((()=>[(0,s.Wm)(se,{class:"cb-bg-grey-2 q-py-xs text-bold"},{default:(0,s.w5)((()=>[(0,s._)("div",v,[(0,s.wy)((0,s.Wm)(K,{name:"arrow_drop_down",size:"lg",class:"cb-text-grey-4"},null,512),[[ce]]),W,z])])),_:1}),(0,s.Wm)(se,null,{default:(0,s.w5)((()=>[(0,s._)("div",Z,[(0,s._)("div",C,[(0,s.Wm)(K,{size:"md",class:"cb-text-grey-3",name:"check_circle",color:"green-6"}),Q]),(0,s.Wm)(M),(0,s._)("div",A,[(0,s.Wm)(K,{size:"md",class:"cb-text-grey-3",name:"check_circle",color:"green-6"}),O]),(0,s.Wm)(M),(0,s._)("div",j,[(0,s.Wm)(K,{size:"md",class:"cb-text-grey-3",name:"check_circle",color:"green-6"}),H]),(0,s.Wm)(M),(0,s._)("div",P,[(0,s.Wm)(K,{size:"md",class:"cb-text-grey-3",name:"check_circle",color:"green-6"}),V]),(0,s.Wm)(M),(0,s._)("div",D,[(0,s.Wm)(K,{size:"md",class:"cb-text-grey-3",name:"check_circle",color:"green-6"}),$]),(0,s.Wm)(M),(0,s._)("div",B,[(0,s.Wm)(K,{size:"md",class:"cb-text-grey-3",name:"check_circle",color:"green-6"}),T]),(0,s.Wm)(M),(0,s._)("div",S,[(0,s.Wm)(J,{label:"Close",class:"cb-bg-orange-8 text-white q-px-xl"})])])])),_:1})])),_:1})])),_:1},8,["modelValue","position"])],64)}a(1768);var R=a(1959);const I={setup(){return{tracking_details:[],data:(0,R.iH)(null),tab:(0,R.iH)("Active"),access_token:(0,R.iH)(null),Active_orders:(0,R.iH)([]),image_url:(0,R.iH)(null),trackdailog:(0,R.iH)(!1),position:(0,R.iH)("bottom")}},mounted(){this.getAccessToken(),this.gettodaydata()},methods:{getAccessToken(){var e=this;e.access_token=e.$store.state.token,null!=e.access_token&&e.access_token||e.$router.push("")},gettodaydata(){var e=this;let t={headers:{Authorization:`Bearer ${e.access_token}`}};e.$api.get("/api/v2/my-orders2",t).then((function(t){console.log(t.data,"my orders"),e.Active_orders=t.data.open_orders,e.image_url=t.data.image_url})).catch((function(e){console.log(e)}))},trackorderdata(e){var t=this;let a={headers:{Authorization:`Bearer ${t.access_token}`}};t.$api.get("/api/livetrack-two?order_id="+e,a).then((function(e){console.log(e),t.tracking_details=e.data.tracking_details,t.open("bottom")})).catch((function(e){console.log(e)}))},open(e){var t=this;t.trackdailog=!0}}};var N=a(4260),Y=a(4379),E=a(7547),G=a(3269),K=a(5906),M=a(6602),F=a(151),J=a(5096),L=a(4027),X=a(4554),ee=a(5869),te=a(2025),ae=a(8240),se=a(6778),le=a(5589),ce=a(677),re=a(7518),oe=a.n(re);const ne=(0,N.Z)(I,[["render",U]]),de=ne;oe()(I,"components",{QPage:Y.Z,QTabs:E.Z,QTab:G.Z,QTabPanels:K.Z,QTabPanel:M.Z,QCard:F.Z,QAvatar:J.Z,QImg:L.Z,QIcon:X.Z,QSeparator:ee.Z,QSpace:te.Z,QBtn:ae.Z,QDialog:se.Z,QCardSection:le.Z}),oe()(I,"directives",{ClosePopup:ce.Z})}}]);
"use strict";(self["webpackChunkpwa_wibsite"]=self["webpackChunkpwa_wibsite"]||[]).push([[4698],{4698:(e,t,s)=>{s.r(t),s.d(t,{default:()=>L});var i=s(3673),o=s(2323);const a={class:"cb-text-blue-4 text-subtitle2 text-weight-bolder"},l=(0,i._)("div",{id:"loader2",class:"pre-loader",style:{display:"none"}},null,-1),n={class:"shadow-1 cb-round-borders-20 q-mb-sm q-px-sm"},d={class:"shadow-1 cb-round-borders-20 q-mb-sm q-px-sm"},m={class:"shadow-1 cb-round-borders-20 q-mb-sm flex q-px-sm"},r={class:"shadow-1 cb-round-borders-20 q-mb-sm q-px-sm"},u={class:""},c=(0,i._)("span",null,"Items Added",-1),p=["onClick"],_=(0,i.Uk)("Edit "),w=["onClick"],g=(0,i.Uk)("Delete "),b={class:"text-center"};function h(e,t,s,h,q,f){const x=(0,i.up)("q-btn"),y=(0,i.up)("q-space"),k=(0,i.up)("q-toolbar"),W=(0,i.up)("q-header"),v=(0,i.up)("q-icon"),Q=(0,i.up)("q-input"),Z=(0,i.up)("q-select"),V=(0,i.up)("q-card-section"),S=(0,i.up)("q-card"),C=(0,i.up)("q-item-label"),H=(0,i.up)("q-item-section"),I=(0,i.up)("q-item"),$=(0,i.up)("q-list"),z=(0,i.up)("q-page"),U=(0,i.up)("q-page-container"),P=(0,i.up)("q-layout");return(0,i.wg)(),(0,i.j4)(P,{view:"lHh lpr lFf"},{default:(0,i.w5)((()=>[(0,i.Wm)(W,null,{default:(0,i.w5)((()=>[(0,i.Wm)(k,{class:"cb-bg-white-2 cb-text-blue-8"},{default:(0,i.w5)((()=>[(0,i.Wm)(x,{flat:"",dense:"",round:"",icon:"arrow_back",onClick:t[0]||(t[0]=t=>e.$router.push("/PickFromStore_layouts_s2"))}),(0,i.Wm)(y),(0,i._)("span",a,(0,o.zw)(h.custom_item.length)+" Item Added",1),(0,i.Wm)(y)])),_:1})])),_:1}),(0,i.Wm)(U,null,{default:(0,i.w5)((()=>[(0,i.Wm)(z,{class:"q-pa-md"},{default:(0,i.w5)((()=>[l,(0,i.Wm)(S,{class:"cb-round-borders-10"},{default:(0,i.w5)((()=>[(0,i.Wm)(V,{class:"q-pa-none q-px-md q-pt-md"},{default:(0,i.w5)((()=>[(0,i._)("div",n,[(0,i.Wm)(Q,{rounded:"",dense:"",placeholder:"Item Name",borderless:"",modelValue:h.name,"onUpdate:modelValue":t[1]||(t[1]=e=>h.name=e)},{prepend:(0,i.w5)((()=>[(0,i.Wm)(v,{name:"filter_list",color:"orange-8",size:"xs"})])),_:1},8,["modelValue"])]),(0,i._)("div",d,[(0,i.Wm)(Q,{rounded:"",dense:"",placeholder:"Quality",borderless:"",modelValue:h.quantity,"onUpdate:modelValue":t[2]||(t[2]=e=>h.quantity=e)},{prepend:(0,i.w5)((()=>[(0,i.Wm)(v,{name:"line_weight",color:"orange-8",size:"xs"})])),_:1},8,["modelValue"])]),(0,i._)("div",m,[(0,i.Wm)(Q,{rounded:"",dense:"",placeholder:"Weight (Optional)",borderless:"",modelValue:h.weight,"onUpdate:modelValue":t[3]||(t[3]=e=>h.weight=e)},{prepend:(0,i.w5)((()=>[(0,i.Wm)(v,{name:"line_weight",color:"orange-8",size:"xs"})])),_:1},8,["modelValue"]),(0,i.Wm)(y),(0,i.Wm)(Z,{color:"purple-12",modelValue:h.weight_type,"onUpdate:modelValue":t[4]||(t[4]=e=>h.weight_type=e),options:h.options,borderless:"",dense:"",class:"text-italic"},null,8,["modelValue","options"])]),(0,i._)("div",r,[(0,i.Wm)(Q,{rounded:"",dense:"",placeholder:"Discription (Optional)",borderless:"",modelValue:h.discription,"onUpdate:modelValue":t[5]||(t[5]=e=>h.discription=e)},null,8,["modelValue"])]),(0,i._)("div",u,[(0,i.Wm)(x,{label:"Add more items","icon-right":"add",class:"cb-text-orange-8 q-pa-none",dense:"",flat:"",onClick:t[6]||(t[6]=e=>f.add_custom_itam())})])])),_:1})])),_:1}),(0,i.Wm)(S,{class:"q-my-md cb-round-borders-10"},{default:(0,i.w5)((()=>[(0,i.Wm)(V,{class:"cb-bg-grey-3 cb-text-blue-8 text-weight-bolder cb-font q-py-sm"},{default:(0,i.w5)((()=>[c])),_:1}),(0,i.Wm)(V,{class:"q-pa-sm"},{default:(0,i.w5)((()=>[(0,i.Wm)($,{separator:""},{default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(h.custom_item,((e,t)=>((0,i.wg)(),(0,i.j4)(I,null,{default:(0,i.w5)((()=>[(0,i.Wm)(H,null,{default:(0,i.w5)((()=>[(0,i.Wm)(C,null,{default:(0,i.w5)((()=>[(0,i.Uk)((0,o.zw)(e.name)+"(Qty :"+(0,o.zw)(e.no_of_quantity)+")",1)])),_:2},1024),(0,i.Wm)(C,{caption:"",class:"flex"},{default:(0,i.w5)((()=>[(0,i.Uk)((0,o.zw)(e.variations[0].weight)+" "+(0,o.zw)(e.variations[0].weight_type)+" ",1),(0,i.Wm)(y),(0,i._)("span",{class:"text-orange-8 q-px-sm",onClick:s=>f.edit_custom_item(e,t)},[_,(0,i.Wm)(v,{name:"edit"})],8,p),(0,i._)("span",{class:"text-orange-8",onClick:e=>f.delete_custom_item(t)},[g,(0,i.Wm)(v,{name:"delete_sweep",size:"xs"})],8,w)])),_:2},1024)])),_:2},1024)])),_:2},1024)))),256))])),_:1})])),_:1})])),_:1}),(0,i._)("div",b,[(0,i.Wm)(x,{label:"Save",class:"cb-bg-orange-8 text-white q-px-xl cb-round-borders-10",onClick:t[7]||(t[7]=e=>f.save_custom_items())})])])),_:1})])),_:1})])),_:1})}s(246),s(2100),s(1768);var q=s(1959);const f={setup(){return{weight:(0,q.iH)("ml"),options:["ml","lt","Kg","gm","pcs"],access_token:(0,q.iH)(null),xid:(0,q.iH)(null),name:(0,q.iH)(null),quantity:(0,q.iH)(null),weight:(0,q.iH)(null),discription:(0,q.iH)(null),weight_type:(0,q.iH)("ml"),custom_item:(0,q.iH)([])}},mounted(){this.getToken(),this.get_custom_items_data()},methods:{getToken(){var e=this;e.$store.state.token?e.access_token=e.$store.state.token:e.access_token=e.$store.state.token_cb,e.$store.state.xid?e.xid=e.$store.state.xid:e.xid=e.$store.state.xid_cb,null!=e.access_token&&e.access_token||e.$router.push("/")},get_custom_items_data(){var e=this;localStorage.getItem("custom_item")&&(e.custom_item=JSON.parse(localStorage.getItem("custom_item")))},add_custom_itam(){var e=this,t={brands:"",category_id:"",description:e.discription,image:"",info:"",item_disabled:0,mrp:0,name:e.name,no_of_quantity:e.quantity,selected_id:"",selected_price:0,service_id:"",sku:"320",sub_category_id:"",units:"",variations:[{description:"discription",id:0,item_disabled:"0",item_id:"",item_status:1,mrp:0,product_id:"",selling_price:0,weight:e.weight,weight_type:e.weight_type}]};e.custom_item.push(t),e.name=null,e.quantity=null,e.weight=null,e.discription=null},edit_custom_item(e,t){var s=this;s.name=e.name,s.quantity=e.no_of_quantity,s.weight=e.variations[0].weight,s.weight_type=e.variations[0].weight_type,s.discription=e.description,s.custom_item.splice(t,1)},delete_custom_item(e){var t=this;t.custom_item.splice(e,1)},save_custom_items(){var e=this;localStorage.setItem("custom_item",JSON.stringify(e.custom_item)),e.$router.push("/PickFromStore_layouts_s2")},pickfromstore_redirection(e){var t=this;console.log(e),t.$router.push("/PickFromStore_layouts_s2?combinations="+e)}}};var x=s(4260),y=s(3066),k=s(3812),W=s(9570),v=s(8240),Q=s(2025),Z=s(2652),V=s(4379),S=s(151),C=s(5589),H=s(4842),I=s(4554),$=s(4224),z=s(7011),U=s(3414),P=s(2035),F=s(2350),O=s(7518),A=s.n(O);const D=(0,x.Z)(f,[["render",h]]),L=D;A()(f,"components",{QLayout:y.Z,QHeader:k.Z,QToolbar:W.Z,QBtn:v.Z,QSpace:Q.Z,QPageContainer:Z.Z,QPage:V.Z,QCard:S.Z,QCardSection:C.Z,QInput:H.Z,QIcon:I.Z,QSelect:$.Z,QList:z.Z,QItem:U.Z,QItemSection:P.Z,QItemLabel:F.Z})}}]);
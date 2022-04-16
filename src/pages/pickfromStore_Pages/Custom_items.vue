<template>
  <q-layout view="lHh lpr lFf">
    <q-header>
      <q-toolbar class="cb-bg-white-2 cb-text-blue-8">
        <q-btn  flat dense round icon="arrow_back" @click="$router.push('/PickFromStore_layouts_s2')"/>
        <q-space></q-space>
        <span class="cb-text-blue-4 text-subtitle2 text-weight-bolder">{{ custom_item.length }} Item Added</span>
        <q-space></q-space>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <q-page class="q-pa-md">
        <div id="loader2" class="pre-loader" style="display:none"></div>
      	<q-card class="cb-round-borders-10">
      		<q-card-section class="q-pa-none q-px-md q-pt-md">
      		  <div class="shadow-1 cb-round-borders-20 q-mb-sm q-px-sm">
      			  <q-input rounded  dense placeholder="Item Name" borderless v-model="name">
                  <template v-slot:prepend><q-icon name="filter_list" color="orange-8" size="xs"/></template>
            	</q-input>
            </div>
            <div class="shadow-1 cb-round-borders-20 q-mb-sm  q-px-sm">
      			  <q-input rounded  dense placeholder="Quality" borderless v-model="quantity">
                  <template v-slot:prepend><q-icon name="line_weight" color="orange-8" size="xs"/></template>
            	</q-input>
            </div>
            <div class="shadow-1 cb-round-borders-20 q-mb-sm flex  q-px-sm">
      			   <q-input rounded  dense placeholder="Weight (Optional)" borderless v-model="weight">
                  <template v-slot:prepend><q-icon name="line_weight" color="orange-8" size="xs" /></template>
            	</q-input>
            	<q-space></q-space>
            	<q-select color="purple-12" v-model="weight_type" :options="options" borderless dense class="text-italic"></q-select>
            </div>
            <div class="shadow-1 cb-round-borders-20 q-mb-sm  q-px-sm">
      			  <q-input rounded  dense placeholder="Discription (Optional)" borderless v-model="discription"></q-input>
            </div>
            <div class="">
            	<q-btn label="Add more items" icon-right="add" class="cb-text-orange-8 q-pa-none" dense flat @click="add_custom_itam()"></q-btn>
            </div>
      		</q-card-section>
      	</q-card>
      	<q-card class="q-my-md cb-round-borders-10">
      	  <q-card-section class="cb-bg-grey-3 cb-text-blue-8 text-weight-bolder cb-font q-py-sm">
      		<span>Items Added</span>
      	  </q-card-section>
      	  <q-card-section class="q-pa-sm">
      	  	<q-list separator>
              <q-item v-for="(item,index ) in custom_item">
                <q-item-section>
                  <q-item-label>{{ item.name }}(Qty :{{ item.no_of_quantity }})</q-item-label>
                  <q-item-label caption class="flex">
                    {{ item.variations[0].weight }} {{ item.variations[0].weight_type }}
                    <q-space></q-space>
                    <span class="text-orange-8 q-px-sm" @click="edit_custom_item(item,index)">Edit <q-icon name="edit"></q-icon></span>
                    <span class="text-orange-8" @click="delete_custom_item(index)">Delete <q-icon name="delete_sweep" size="xs"></q-icon></span>
                  </q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
      	  </q-card-section>
      	</q-card>	
      	<div class="text-center">
      		<q-btn label="Save" class="cb-bg-orange-8 text-white q-px-xl cb-round-borders-10" @click="save_custom_items()"></q-btn>
      	</div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>
<script>
// let isMobile = window.matchMedia("only screen and (max-width: 760px)").matches;
// if (!isMobile){
//      window.location="https://chotabeta.com/pwa";
// }
import axios from 'boot/axios'
import {ref } from 'vue'
export default ({
  setup(){
    return {
    	weight:ref('ml'),
    	options:['ml', 'lt', 'Kg', 'gm', 'pcs']	,
      access_token:ref(null),
      xid:ref(null),
      name:ref(null),
      quantity:ref(null),
      weight:ref(null),
      discription:ref(null),
      weight_type:ref('ml'),
      custom_item:ref([]),
    }
  },
  mounted () {
  	this.getToken(); 
    this.get_custom_items_data(); 		
  },
  methods:{
  	getToken(){
  		var ps = this ;
  		if(ps.$store.state.token){ ps.access_token = ps.$store.state.token; }
      else{ ps.access_token = ps.$store.state.token_cb; }
      if(ps.$store.state.xid){ps.xid = ps.$store.state.xid;}
      else{ps.xid = ps.$store.state.xid_cb;}
      if(ps.access_token == null ||  !ps.access_token){ ps.$router.push('/'); }  	
  	},	
    get_custom_items_data(){
      var ps = this;
      if(localStorage.getItem('custom_item')){
        ps.custom_item =JSON.parse(localStorage.getItem('custom_item'));
      }
    },
    add_custom_itam(){
      var ps = this;
      var item ={
                  brands: "",
                  category_id: "",
                  description: ps.discription,
                  image: "",
                  info: "",
                  item_disabled: 0,
                  mrp: 0,
                  name: ps.name,
                  no_of_quantity: ps.quantity,
                  selected_id: "",
                  selected_price: 0,
                  service_id: "",
                  sku: "320",
                  sub_category_id: "",
                  units: "",
                  variations:[
                              {
                                description: "discription",
                                id: 0,
                                item_disabled: "0",
                                item_id: "",
                                item_status: 1,
                                mrp: 0,
                                product_id: "",
                                selling_price:0,
                                weight: ps.weight,
                                weight_type: ps.weight_type,
                              }
                            ]
                };
      ps.custom_item.push(item);
      ps.name = null;
      ps.quantity = null;
      ps.weight = null;
      ps.discription = null;
    },
    edit_custom_item(item,index){
      var ps = this;
      ps.name = item.name;
      ps.quantity = item.no_of_quantity;
      ps.weight = item.variations[0].weight;
      ps.weight_type = item.variations[0].weight_type;
      ps.discription = item.description;
      ps.custom_item.splice(index,1);
    },
    delete_custom_item(index){
      var ps = this;
      ps.custom_item.splice(index,1);
    },
    save_custom_items(){
      var ps = this;
      localStorage.setItem('custom_item',JSON.stringify(ps.custom_item));
      ps.$router.push('/PickFromStore_layouts_s2');
    },
  	pickfromstore_redirection(item){
  		var ps = this;
  		console.log(item);
  		ps.$router.push('/PickFromStore_layouts_s2?combinations='+item);
  	}
  }
})
</script>
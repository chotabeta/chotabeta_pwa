s<template>
	<q-layout  view="lHh lpr lFf">
		<q-header  class="cb-bg-white-2">
			<q-toolbar class="cb-bg-white-2 cb-text-blue-8">
				<q-btn flat dense round icon="arrow_back" @click="$router.push('')"/>
				<q-btn icon="place" class="q-pa-none" flat :label="$store.state.latlongs"></q-btn>
				<q-space></q-space>
				<q-btn round dense icon="notifications" flat @click="$router.push('Notification')"> 
	    			<q-badge  color="red" rounded floating style="margin-top:8px;margin-right: 8px;"></q-badge>
	  			</q-btn>
	  			<div style="background: transparent;">
		  			<q-btn round dense icon="shopping_cart" flat style="background: transparent;">
		    			<q-badge class="cb-bg-orange-8" rounded floating >0</q-badge>
		  			</q-btn>
		  		</div>
			</q-toolbar>
			<div class="cb-bg-white-2 text-center cb-font text-weight-bolder cb-text-orange-8">Fruits & Vegitables</div>
			<div class="shadow-1 q-mx-sm q-my-sm cb-round-borders">
				<q-input outlined placeholder="Search" dense>
					<template v-slot:append> <q-icon name="mic" class="cb-text-orange-8" /></template>
				</q-input>
			</div>
			 <div class="cb-bg-grey-3 q-px-sm">
          <q-tabs v-model="tabs" align="left" :breakpoint="0" active-class="cb-bg-white-1 cb-text-grey-8 cb-round-borders" style="padding:2px" indicator-color="transparent" dense >
            <q-tab label="fruits" name="fruits"></q-tab>
						<q-tab label="Vegetables" name="Vegitables"></q-tab>
						<q-tab label="Combos & Offers" name="combos"></q-tab>
          </q-tabs>
        </div>	
        <div class="q-ma-sm flex">
        	<q-btn dense label="Upload List"  class="cb-bg-orange-8" size="sm" icon-right="photo_camera"></q-btn>
        	<q-space></q-space>
        	<q-btn dense label="Add Item"  class="cb-bg-orange-8" size="sm" icon-right="add" @click="$router.push('Custom_items')"></q-btn>
        </div>
		</q-header> 
		<q-page-container>
			<q-page class="q-pa-sm">
				<div class="row" style="padding-bottom: 50px;">
					<div class="col-6  q-pa-xs" v-for="i in 3">
						<q-card class="q-px-sm">
								<q-img src="https://chotabeta.app/dev/testenv/public/uploads/new_items/1/66/100061.png" @click="$router.push('PickFromStore_Item')"></q-img>
							<q-card-section class="cb-text-grey-8 row items-center q-pa-none">
								<span>Fruits</span><q-space></q-space><q-btn icon="error_outline" flat size="sm"></q-btn>
							</q-card-section>
							<q-card-section class="cb-text-grey-8 q-pt-sm q-pa-none">
								Pomegranate
							</q-card-section>
							<q-card-section class="cb-text-grey-8 q-pa-none row items-center">
								<q-icon name="currency_rupee" ></q-icon>80
								<q-space></q-space>
								<q-select borderless dense style="width:80px;height:35px" v-model="select_item_size" class="shadow-1 q-px-sm"></q-select>
							</q-card-section>
							<q-card-section class="q-pa-none flex flex-center q-pt-sm cb-text-orange-8 text-weight-bolder">
								<q-btn icon="remove" flat dense></q-btn>
								<span class="q-px-md">1</span>
								<q-btn icon="add" flat dense></q-btn>
							</q-card-section>
						</q-card>
					</div>
					<div class="col-6  q-pa-xs" v-for="i in 10">
						<q-card class="q-px-sm">
								<q-img src="https://chotabeta.app/dev/testenv/public/uploads/new_items/1/66/100061.png"></q-img>
							<q-card-section class="cb-text-grey-8 row items-center q-pa-none">
								<span>Fruits</span><q-space></q-space><q-btn icon="error_outline" flat size="sm"></q-btn>
							</q-card-section>
							<q-card-section class="cb-text-grey-8 q-pt-sm q-pa-none">
								Pomegranate
							</q-card-section>
							<q-card-section class="cb-text-grey-8 q-pa-none row items-center">
								<q-icon name="currency_rupee" ></q-icon>80
								<q-space></q-space>
								<q-select borderless dense style="width:80px;height:35px" v-model="select_item_size" class="shadow-1 q-px-sm"></q-select>
							</q-card-section>
							<q-card-section class="q-pa-none flex flex-center q-pt-sm">
								<q-btn dense flat class="cb-text-orange-8" label="Add To Cart"></q-btn>
							</q-card-section>
						</q-card>
					</div>
				</div>
				<div class="cb-bg-orange-8 fixed-bottom row items-center q-px-md q-py-sm text-white text-weight-bolder text-italic cb-font">
					<span>3 Items | <q-icon name="currency_rupee"></q-icon>240.0</span>
					<q-space></q-space>
					<q-btn label="view cart" icon-right="shopping_cart" flat @click="$router.push('PickFromStore_layouts_s3')"></q-btn>
				</div>
			</q-page>
		</q-page-container>
	</q-layout>
</template>
<script>
let isMobile = window.matchMedia("only screen and (max-width: 760px)").matches;
if (!isMobile){
     window.location="https://chotabeta.com/pwa";
}
import axios from 'axios'
import {ref } from 'vue'
export default ({
  setup(){
    return {
    	access_token:ref(null),    
    	tabs:ref('fruits'),
    	select_item_size:ref('500gm')	
    }
  },
  mounted () {
  	this.getToken();  		
  },
  methods:{
  	getToken(){
  		var ps = this ;
  		ps.access_token = ps.$store.state.token;
  		if(ps.access_token == null){
  			ps.$router.push('');
  		}  	
  	},	
  	pickfromstore_redirection(item){
  		var ps = this;
  		console.log(item);
  		ps.$router.push('/PickFromStore_layouts_s2?combinations='+item);
  	}
  }
})
</script>
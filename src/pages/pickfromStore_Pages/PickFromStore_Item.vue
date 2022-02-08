<template>
<q-layout view="lHh lpr lFf">
  <q-header>
	  <q-toolbar class="cb-bg-white-2 cb-text-blue-8">
      <q-btn flat dense round icon="arrow_back" @click="$router.push('/PickFromStore_layouts_s2')"></q-btn>
 			<q-btn icon="place" class="q-pa-none" size="sm" flat label="HUDA Techno Enclave, HITEC City"></q-btn>
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
  </q-header>
  <q-page-container>
  	<q-page class="q-pb-xl q-mb-sm">
  		<div class="text-center">
		  	<q-img src="https://chotabeta.app/dev/testenv/public/uploads/new_items/1/66/100061.png" width="220px"></q-img>
			</div>
  		<q-card style="border-radius: 30px 30px 0px 0px;" class="shadow-up-1">
  			<q-card-section class="q-px-lg cb-text-grey-5">
  				<div class="flex flex-center">
  					<span>FRUITS</span>
  					<q-space></q-space>
						<q-select borderless dense style="width:80px;height:35px" v-model="select_item_size" class="q-px-sm"></q-select>
  				</div>
  				<div class="flex flex-center">
  					<span class="text-weight-bolder">Pomegranate</span>
  					<q-space></q-space>
  					<div class="cb-bg-orange-8 rounded-borders text-white">
	  					<q-btn icon="remove" flat dense></q-btn>
							<span class="q-px-md">1</span>
							<q-btn icon="add" flat dense></q-btn>
						</div>
  				</div>
  				<div class="text-weight-bolder cb-font">
  					<q-icon name="currency_rupee"></q-icon>80.0
  				</div>
  				<q-card>
  					<q-card-section class="q-pa-sm">
  						Simple yet effective way to add shadows to create a depth/elevation effect. The shadows are in accordance to Material Design specifications (24 levels of depth).
  					</q-card-section>
  					<q-card-actions align="right" class="q-py-none q-pb-xs cb-text-orange-8">
  						<q-icon name="keyboard_double_arrow_down" size="xs"></q-icon>
  					</q-card-actions>
  				</q-card>
  			</q-card-section>
  		</q-card>

  		<div class="row q-px-sm">
  			<div class="col-12 q-py-sm text-grey-8 text-bold cb-font">Similar Items</div>
  			<div class="col-6  q-pa-xs" v-for="i in 10">
					<q-card class="q-px-sm cb-text-grey-5 cb-font-14">
						<q-img src="https://chotabeta.app/dev/testenv/public/uploads/new_items/1/66/100061.png" @click="$router.push('PickFromStore_Item')"></q-img>
						<q-card-section class="row items-center q-pa-none">
							<span>Fruits</span><q-space></q-space>
							<q-btn icon="error_outline" flat size="sm" @click="$router.push('PickFromStore_Item')"></q-btn>
						</q-card-section>
						<q-card-section class="q-pt-sm q-pa-none text-weight-bolder">
								Pomegranate
						</q-card-section>
						<q-card-section class="q-pa-none row items-center">
							<q-icon name="currency_rupee" ></q-icon>80
							<q-space></q-space>
							<select  v-model="select_item_size" class="cb-shadow-1 q-px-sm bg-transparent q-pa-xs cb-text-grey-5" style="border:none">
									<option value="500">250gm</option>
									<option value="500">500gm</option>
									<option value="500">750gm</option>
								</select>
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
if (!isMobile){ window.location="https://chotabeta.com/pwa";}
import axios from 'axios'
import {ref } from 'vue'
export default ({
  setup(){
    return {
    	access_token:ref(null),    
    	tabs:ref('fruits'),
    	select_item_size:ref('500')	
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
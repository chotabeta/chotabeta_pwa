<template>
<q-layout view="lHh lpr lFf">

  <q-header>
		<q-toolbar class="cb-bg-white-2 cb-text-blue-8">
	    <q-btn flat dense round icon="arrow_back" @click="$router.push('')"/>
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
		<div class="cb-text-orange-8 cb-bg-white-2 cb-font-16 text-weight-bolder q-pb-xs flex flex-center">Checkout</div>
  </q-header>

  <q-page-container>
  	<q-page class="q-pa-sm">

  	  <q-card class="cb-round-borders-10 cb-shadow-1"> 
  	  	<q-card-section class="cb-bg-grey-2 q-py-sm">
  	  	  <span class="text-bold cb-text-blue-8 cb-font-16"> Delivery Address </span>
  	  	  <q-icon name="calendar_today" class="cb-text-orange-8 q-px-sm" size="sm"></q-icon>
  	  	  <span class="cb-text-grey-8 cb-font-10">Thu 27, Jan 22 | 12:36 PM</span>
  	  	</q-card-section>
  	  	<q-card-section class="q-pa-sm">
  	  	  <div class="row">
  	  	  	<div class="col-2">
  	  	  		<q-btn class="q-pa-none cb-bg-grey-2 cb-text-grey-8 cb-round-borders cb-bold full-weight full-height" ><q-icon name="add" class="text-bold cb-text-grey-4" size="lg"></q-icon></q-btn>
  	  	  	</div>
  	  	  	<div class="col-10 cb-round-borders-10 q-py-xs q-px-sm cb-text-grey-8" style="border:1px solid orange">
  	  	  	  <div class="flex">
  	  	  	    <span>Delivery Address</span>
  	  	  	    <q-space></q-space>
  	  	  	    <q-checkbox v-model="address_select" round dense color="orange"></q-checkbox>
  	  	  	  </div>
  	  	  	  <span class="cb-text-grey-4" style="font-size: 11px;">123 Main Street, New York, NY 10030 is an example of an address. A description of the location of a property.</span>
  	  	  	</div>
  	  	  	<div class="col-12 text-center q-pt-sm cb-text-blue-6">
  	  	  		<u @click="$router.push('Search_location')">Shop From Favorite Store! Locate Store?</u>
  	  	  		<q-icon name="location_on"></q-icon>
  	  	  		<q-icon name="info" class="float-right cb-text-grey-4 " size="sm" @click="fevourite_store_dailog = true"></q-icon>
  	  	  	</div>
  	  	  </div>
  	  	</q-card-section>
  	  </q-card>

  	  <div class="cb-shadow-1 q-my-md q-px-md cb-round-borders-10">
  	  	<q-input borderless placeholder="Add instructions here" class="cb-round-borders" dense></q-input>
  	  </div>

  	  <div class="flex">
  	  	<div class="cb-shadow-1 q-px-sm rounded-borders" style="width:75%">
	  	  	<q-input dense placeholder="ENTER COUPON CODE" borderless @click="$router.push('Coupons')">
  		  		<template v-slot:prepend>
        	  		<q-avatar><img src="https://chotabeta.app/dev/testenv/public/imgs/discount_1.png"></q-avatar>
        		</template>
      		</q-input>
      	</div>
  	  	<q-btn label="apply" class="cb-bg-orange-8 cb-shadow-1 text-white q-ml-sm" style="width:20%"></q-btn>
  	  </div>

  	  <q-card class="cb-round-borders-10 q-my-md shadow-4 cb-text-grey-5">
  	  	<q-card-section class="cb-bg-grey-2 cb-text-blue-8 text-weight-bolder cb-font-16 q-pa-sm">
  	  		<span>Order Amount</span>
  	  	</q-card-section>
  	  	<q-card-section class="cb-font-16">
  	  		<div class="flex q-py-xs">Estimated Item Price<q-space></q-space>RS. 80</div>
  	  		<div class="flex q-py-xs">Delivery Charges<q-space></q-space>RS. 10</div>
  	  		<div class="flex q-py-xs">Tax & fees<q-space></q-space>RS. 2</div>
  	  		<div class="flex q-py-xs text-bold ">Total<q-space></q-space>RS. 92</div>
  	  	</q-card-section>
  	  </q-card>

  	  <q-card class="cb-round-borders-10 q-my-md cb-shadow-1">
  	  	<q-card-section class="cb-bg-grey-2 cb-text-blue-8 text-weight-bolder cb-font-16 q-pa-sm">
  	  		<span>Payment Method</span>
  	  	</q-card-section>
  	  	<q-card-section class="cb-font-16">
  	  		<div class="flex q-py-xs">
  	  			<q-img src="https://chotabeta.app/dev/testenv/public/imgs/pwa_2.png" width="25px"></q-img>
  	  			<span class="q-px-sm">Pay Now Online</span>
  	  			<q-space></q-space>
  	  			<q-checkbox color="orange" dense v-model="paymentmethod" true-value="PNO" false-value="POD"></q-checkbox>
  	  		</div>
  	  		<div class="flex q-py-xs">
  	  			<q-img src="https://chotabeta.app/dev/testenv/public/imgs/pwa_2.png" width="25px"></q-img>
  	  			<span class="q-px-sm">Pay Online on Delivery</span>
  	  			<q-space></q-space>
  	  			<q-checkbox color="orange" dense v-model="paymentmethod" true-val="POD" false-value="PNO"></q-checkbox>
  	  		</div>
  	  	</q-card-section>
  	  </q-card>
  	  <div class="row justify-center">
  	  	<q-btn label="Proceed" class="cb-bg-orange-8 text-white q-px-xl"></q-btn>
  	  </div>

  	  <q-dialog v-model="fevourite_store_dailog">
    		<q-card class="q-dialog-plugin cb-round-borders-10 cb-text-grey-5">
    			<q-card-section>
    				<span class="cb-font-14 text-weight-bolder">What is Locate My Fevourite Store?</span><br>
    				<span class="cb-font-12">You can locate your favourite store for the products you are looking for, ChotaBeta will buy these products from your selected store only.</span>
    			</q-card-section>
    			<q-card-actions align="left">
    				<q-btn flat label="cancel" class="cb-text-blue-6" @click="fevourite_store_dailog = false"></q-btn>
    			</q-card-actions>
        </q-card>
  		</q-dialog>

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
    	address_select:ref(true),
    	fevourite_store_dailog:ref(false),	
    	paymentmethod:ref('POD')
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
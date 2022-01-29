<template>
<q-layout view="lHh lpr lFf">
  <q-header>
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
	<div class="cb-text-orange-8 cb-bg-white-2 flex cb-font text-weight-bolder q-pb-xs">
	  <q-space></q-space>Checkout<q-space></q-space>
	</div>
  </q-header>
  <q-page-container>
  	<q-page class="q-pa-sm">
  	  <q-card class="cb-round-borders shadow-1 "> 
  	  	<q-card-section class="cb-bg-grey-3 q-py-sm">
  	  	  <span class="text-bold cb-text-blue-8 cb-font"> Delivery Address </span>
  	  	  <q-icon name="calendar_today" class="cb-text-orange-8 cb-font q-px-xs"></q-icon>
  	  	  <span class="cb-text-grey-8" style="font-size:13px">Thu 27, Jan 22 | 12:36 PM</span>
  	  	</q-card-section>
  	  	<q-card-section class="q-pa-sm">
  	  	  <div class="row">
  	  	  	<div class="col-2">
  	  	  		<q-btn class="q-pa-none cb-bg-grey-3 cb-text-grey-8 cb-round-borders cb-bold full-weight full-height" ><q-icon name="add" class="text-bold cb-text-grey-4" size="lg"></q-icon></q-btn>
  	  	  	</div>
  	  	  	<div class="col-10 cb-round-borders q-py-xs q-px-sm cb-text-grey-8" style="border:1px solid orange">
  	  	  	  <div class="flex">
  	  	  	    <span>Delivery Address</span>
  	  	  	    <q-space></q-space>
  	  	  	    <q-icon name="check_circle" size="sm" class="cb-text-orange-8"></q-icon>
  	  	  	  </div>
  	  	  	  <span class="cb-text-grey-4" style="font-size: 11px;">123 Main Street, New York, NY 10030 is an example of an <br>address. A description of the location of a property.</span>
  	  	  	</div>
  	  	  	<div class="col-12 text-center q-pt-sm">
  	  	  		<a href="">Shop From Favorite Store! Locate Store?</a>
  	  	  		<q-icon name="location_on"></q-icon>
  	  	  		<q-icon name="info" class="float-right cb-text-grey-4 " size="sm" ></q-icon>
  	  	  	</div>
  	  	  </div>
  	  	</q-card-section>
  	  </q-card>

  	  <div class="shadow-1 q-my-md cb-round-borders">
  	  	<q-input outlined placeholder="Add instructions here" class="cb-round-borders" dense></q-input>
  	  </div>

  	  <div class="flex">
  	  	<div class="shadow-1" style="width:75%">
	  	  	<q-input dense placeholder="ENTER COUPON CODE" outlined @click="$router.push('Coupons')">
  		  		<template v-slot:prepend>
        	  		<q-avatar><img src="https://chotabeta.app/dev/testenv/public/imgs/discount_1.png"></q-avatar>
        		</template>
      		</q-input>
      	</div>
  	  	<q-btn label="apply" class="cb-bg-orange-8 text-white q-ml-sm" style="width:23%"></q-btn>
  	  </div>

  	  <q-card class="cb-round-borders q-my-md shadow-4">
  	  	<q-card-section class="cb-bg-grey-3 cb-text-blue-8 text-weight-bolder cb-font q-pa-sm">
  	  		<span>Order Amount</span>
  	  	</q-card-section>
  	  	<q-card-section class="cb-font">
  	  		<div class="flex q-py-xs">Estimated Item Price<q-space></q-space>RS. 80</div>
  	  		<div class="flex q-py-xs">Delivery Charges<q-space></q-space>RS. 10</div>
  	  		<div class="flex q-py-xs">Tax & fees<q-space></q-space>RS. 2</div>
  	  		<div class="flex q-py-xs text-bold cb-text-blue-8">Total<q-space></q-space>RS. 92</div>
  	  	</q-card-section>
  	  </q-card>
  	  <q-card class="cb-round-borders q-my-md shadow-4">
  	  	<q-card-section class="cb-bg-grey-3 cb-text-blue-8 text-weight-bolder cb-font q-pa-sm">
  	  		<span>Payment Methods</span>
  	  	</q-card-section>
  	  	<q-card-section class="cb-font">
  	  		<div class="flex q-py-xs">
  	  			<q-img src="https://chotabeta.app/dev/testenv/public/imgs/pwa_2.png" width="25px"></q-img>
  	  			<span class="q-px-sm">Pay Now Online</span>
  	  			<q-space></q-space>
  	  			<q-icon name="check_circle" size="sm" class="cb-text-grey-4"></q-icon>
  	  		</div>
  	  		<div class="flex q-py-xs">
  	  			<q-img src="https://chotabeta.app/dev/testenv/public/imgs/pwa_2.png" width="25px"></q-img>
  	  			<span class="q-px-sm">Pay Online on Delivery</span>
  	  			<q-space></q-space>
  	  			<q-icon name="check_circle" size="sm" class="cb-text-orange-8"></q-icon>
  	  		</div>
  	  	</q-card-section>
  	  </q-card>
  	  <div class="row justify-center">
  	  	<q-btn label="Proceed" class="cb-bg-orange-8 text-white q-px-xl"></q-btn>
  	  </div>

  	</q-page>
  </q-page-container>
</q-layout>
</template>
<template>
  <q-layout view="lHh lpr lFf">
	<q-header class="cb-bg-orange-8 q-pt-xs">
	  <q-toolbar>
	 	<q-btn icon="arrow_back_ios" flat></q-btn>
	      <q-space></q-space>
			<q-btn icon="shopping_cart" flat @click="$router.push('food-cart')">
		      <q-badge rounded floating  class="bg-white text-black">0</q-badge>
			</q-btn>
	  </q-toolbar>
	  <q-card style="border-radius: 30px 30px 0px 0px;" class="shadow-0 q-pt-sm q-px-sm bg-orange-1">
	 	  <q-card-section class="text-black">
			<div class="row items-center">
				<div class="col-2"> 
				  <q-avatar class="bg-yellow" size="50px" font-size="40px" icon="escalator_warning"></q-avatar>
				</div>
			  	<div class="col-8 q-pa-xs">
			  		<span class="cb-font-16">Senior Kitchen </span>
			  		<span class="cb-font-12 q-px-sm">-</span>
			  		<span class="cb-font-12">Malkajgiri</span>
			  	</div>
			  	<div class="col-2 text-right">4.5 <q-icon name="star" size="sm"></q-icon></div>
			</div>
			<div class="row items-center">
				<div class="col-2"> </div>
			  	<div class="col-10 q-pa-xs">fassi Lic:123456789045678</div>
			</div>
		  	<q-tabs v-model="type" indicator-color="transparent" inline-label align="justify" class="bg-white cb-round-borders-10 text-deep-orange-10 q-pt-sm" active-class="bg-deep-orange-10 cb-round-borders-10 text-white"  :breakpoint="0">
		  		<q-tab name="menu" label="Menu" icon="book"></q-tab>
		  		<q-tab name="Subscription" label="Subscription" icon="person"></q-tab>
		  	</q-tabs>
		  	<div class="row">
		  		<q-toggle color="deep-orange" label="Non-Veg" v-model="selection" val="non-veg"></q-toggle>
			    <q-toggle color="green" label="Veg" v-model="selection" val="veg"></q-toggle>
		  	</div>
		  </q-card-section>
		</q-card>
	</q-header>
	<q-page-container>
	  <q-page class="bg-orange-1 q-px-md q-pb-xl">

				<div class="row q-py-sm" v-for="(n,index) in 6" v-if="type== 'menu'">
					<div class="col-12">
						<span class="cb-font-16 text-weight-bolder">Your Pick</span><br>
						<span class="text-red cb-font-12">* Available At 7 AM</span>
					</div>

					<span v-for="(i,sub_index) in 2">

						<span :id="'i'+index+'j'+sub_index+'l'">
							<div class="row col-12 q-py-xs" >
								<div class="col-3 q-pa-xs" style="overflow: hidden;">
									<q-avatar square class="cb-round-borders-10 full-height full-width">
										<q-img src="https://i0.wp.com/cdn.whatsuplife.in/kolkata/blog/2018/05/TBCBengali-Bhoj-ComboBy-Heena-Punwani4.jpg?resize=823,411" class="fit"></q-img>
									</q-avatar>
								</div>
								<div class="col-9 row full-height bg-white cb-round-borders-10 q-pa-xs">
									<div class="col-10">
										<div class="full-width cb-font-14 text-bold" style="white-space: nowrap;overflow: hidden;">Rice, Pulkha(2) &Veg curry. </div>
										<div class="full-width cb-font-12" style="overflow: hidden;height:34px">Entry 1 of 3) transitive verb. 1a : to throw forward : hurl launched an arrow at a target. b : to release, catapult, or send off (a self-propelled object) launch a rocket. 2 </div>
										<div class="full-width text-right cb-font-12 q-px-md text-deep-orange-10 text-weight-bolder">
											<span @click="more_function('i'+index+'j'+sub_index+'m','i'+index+'j'+sub_index+'l')">more</span>
										</div>
										<div class="full-width q-px-sm">
											<q-icon name="currency_rupee" size="xs"></q-icon><span class="cb-font-16 text-bold">100</span> 
											<span class="q-px-xs">|</span> serve-1 
										</div>
									</div>
									<div class="col-2 q-py-sm  column justify-end items-center" v-if="cart_item == 0">
										<q-btn icon="shopping_cart" color="orange" dense @click="cart_item = 1"></q-btn>
									</div>
									<div class="col-2 column justify-end items-center" v-else>
										<div class="cb-round-borders-10 text-center bg-orange text-white">
											<q-btn icon="add" flat dense @click="cart_item = cart_item + 1"></q-btn><br>
											<span class="text-bold">{{ cart_item }}</span><br>
											<q-btn icon="remove" flat dense @click="cart_item = cart_item -1"></q-btn>
										</div>
									</div>
								</div>
							</div>	
						</span>

						<span :id="'i'+index+'j'+sub_index+'m'" style="display: none;">
							<div class="row cb-round-borders-10 bg-white q-pa-sm" >
								<div class="col-10">
									<span class="cb-font-14 text-bold">Rice, Pulkha(2) &Veg curry</span><br>
									<span class="cb-font-12">Entry 1 of 3) transitive verb. 1a : to throw forward : hurl launched an arrow at a target</span>
								</div>
								<div class="col-2 text-right">
									<q-avatar square size="50px" class="cb-round-borders-10">
										<q-img src="https://i0.wp.com/cdn.whatsuplife.in/kolkata/blog/2018/05/TBCBengali-Bhoj-ComboBy-Heena-Punwani4.jpg?resize=823,411" class="fit"></q-img>
									</q-avatar>
								</div>
								<div class="col-10 row items-center">
									<q-icon name="currency_rupee" size="xs"></q-icon><span class="cb-font-16 text-bold">100</span> 
									<span class="q-px-xs">|</span> serve-1 
									<q-space></q-space>
											<span @click="more_function('i'+index+'j'+sub_index+'l','i'+index+'j'+sub_index+'m')"
											class=" cb-font-12 q-px-md text-deep-orange-10 text-weight-bolder">less</span>
								</div>
								<div class="col-2 q-py-sm  column justify-end items-center" v-if="cart_item == 0">
									<q-btn icon="shopping_cart" color="orange" dense @click="cart_item = 1"></q-btn>
								</div>
								<div class="col-2 column justify-end items-center" v-else>
									<div class="cb-round-borders-10 text-center bg-orange text-white">
										<q-btn icon="add" flat dense @click="cart_item = cart_item + 1"></q-btn><br>
										<span class="text-bold">{{ cart_item }}</span><br>
										<q-btn icon="remove" flat dense @click="cart_item = cart_item -1"></q-btn>
									</div>
								</div>
							</div>
						</span>

					</span>
				</div>

				<div class="row q-py-sm" v-for="(n,index) in 6" v-if="type== 'Subscription'">
					<div class="col-12">
						<span class="cb-font-16 text-weight-bolder">Your Pick</span><br>
						<span class="text-red cb-font-12">* Available At 7 AM</span>
					</div>
					<span v-for="(i,sub_index) in 2">
						<span :id="'i'+index+'j'+sub_index+'l'">
							<div class="row col-12 q-py-xs" >
								<div class="col-3 q-pa-xs" style="overflow: hidden;">
									<q-avatar square class="cb-round-borders-10 full-height full-width">
										<q-img src="https://i0.wp.com/cdn.whatsuplife.in/kolkata/blog/2018/05/TBCBengali-Bhoj-ComboBy-Heena-Punwani4.jpg?resize=823,411" class="fit"></q-img>
									</q-avatar>
								</div>
								<div class="col-9 row full-height bg-white cb-round-borders-10 q-pa-xs">
									<div class="col-10">
										<div class="full-width cb-font-14" style="white-space: nowrap;overflow: hidden;">Rice, Pulkha(2) &Veg curry. </div>
										<div class="full-width cb-font-12" style="overflow: hidden;height:34px">Entry 1 of 3) transitive verb. 1a : to throw forward : hurl launched an arrow at a target. b : to release, catapult, or send off (a self-propelled object) launch a rocket. 2 </div>
										<div class="full-width text-right cb-font-12 q-px-md text-deep-orange-10 text-weight-bolder">
											<span @click="more_function('i'+index+'j'+sub_index+'m','i'+index+'j'+sub_index+'l')">more</span>
										</div>
										<div class="full-width q-px-sm">
											<q-icon name="currency_rupee" size="xs"></q-icon><span class="cb-font-16 text-bold">100</span> 
											<span class="q-px-xs">|</span> serve-1 
										</div>
									</div>
									<div class="col-2 q-py-sm  column justify-end items-center">
										<q-btn icon="insert_invitation" color="orange" dense ></q-btn>
									</div>
									
								</div>
							</div>	
						</span>
						<span :id="'i'+index+'j'+sub_index+'m'" style="display: none;">
							<div class="row cb-round-borders-10 bg-white q-pa-sm" >
								<div class="col-10">
									<span class="cb-font-14 text-bold">Rice, Pulkha(2) &Veg curry</span><br>
									<span class="cb-font-12">Entry 1 of 3) transitive verb. 1a : to throw forward : hurl launched an arrow at a target</span>
								</div>
								<div class="col-2 text-right">
									<q-avatar square size="50px" class="cb-round-borders-10">
										<q-img src="https://i0.wp.com/cdn.whatsuplife.in/kolkata/blog/2018/05/TBCBengali-Bhoj-ComboBy-Heena-Punwani4.jpg?resize=823,411" class="fit"></q-img>
									</q-avatar>
								</div>
								<div class="col-10 row items-center">
									<q-icon name="currency_rupee" size="xs"></q-icon><span class="cb-font-16 text-bold">100</span> 
									<span class="q-px-xs">|</span> serve-1 
									<q-space></q-space>
											<span @click="more_function('i'+index+'j'+sub_index+'l','i'+index+'j'+sub_index+'m')"
											class=" cb-font-12 q-px-md text-deep-orange-10 text-weight-bolder">less</span>
								</div>
								<div class="col-2 q-py-sm  column justify-end items-center">
									<q-btn icon="insert_invitation" color="orange" dense ></q-btn>
								</div>
								
							</div>
						</span>
					</span>
				</div>

				<div class="bg-green-8 text-white row cb-round-borders-20 items-center q-px-md q-py-xs fixed-bottom q-ma-sm">
						<div class="col-6 cb-font-16">
							1 items | 
							<q-icon name="currency_rupee"></q-icon>100
						</div>
						<div class="col-6">
							<q-btn label="view cart" icon-right="shopping_cart" flat @click="$router.push('food-cart')"></q-btn>
						</div>
				</div>

      </q-page>
	</q-page-container>
  </q-layout>
</template>
<script>

// let isMobile = window.matchMedia("only screen and (max-width: 760px)").matches;
// if(!isMobile){ window.location = "https://chotabeta.com/pwa"; }

import axios from 'boot/axios'
import { ref } from "vue";
export default {
  setup() {
    return {
    	type:ref('menu'),
    	selection:ref(true),
    	cart_item:ref(0),
    }
  },
  mounted() {
  	this.colors();
  },
  methods: {
  	colors(){
  	  var ps = this;
  	},
  	more_function(show_id,hide_id){
  		var ps= this;
  		// console.log(hide_id, show_id,'sasasas');
  		document.getElementById(hide_id).style.display = "none";
  		document.getElementById(show_id).style.display = "block";

  	}
  },
};
</script>
<style scoped>
.coupon-wrap{ flex-wrap: nowrap;overflow: scroll;overflow-y: hidden; }
::-webkit-scrollbar { width: 0;background: transparent; }
::-webkit-scrollbar-thumb {background: transparent;}
</style>
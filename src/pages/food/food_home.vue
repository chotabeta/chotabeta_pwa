<template>
  <q-layout view="lHh lpr lFf">
	<q-header class="cb-bg-orange-8 q-py-xs">
	  <q-toolbar>
	 	<q-btn icon="arrow_back_ios" flat></q-btn>
	      <q-space></q-space>
			<q-btn icon="shopping_cart" flat @click="$router.push('food-cart')">
		      <q-badge rounded floating  class="bg-white text-black">0</q-badge>
			</q-btn>
	  </q-toolbar>
	</q-header>
	<q-page-container>
	  <q-page class="cb-bg-orange-8">
		<div class="row q-px-md">
	      <div class="col-4 text-h5 text-weight-bolder text-white row items-center">
	      	HEALTHY FOOD FOR A WEALTHY MOOD
	  	  </div>
		  <div class="col-8">
		  	<img src="https://chotabeta.app/dev/testenv/public/uploads/assets/pick_from_store.png" class="full-width">
		  </div>
		</div>
	 	<q-card style="border-radius: 30px 30px 0px 0px;box-shadow:0px -0px 3px 0px grey;" class="q-pt-sm q-px-sm bg-orange-1">
	 	<!-- combos -->
		  <q-card-section class="q-px-none q-pb-none">
			<div class="row coupon-wrap">
			  <div class="col-7 q-pa-xs" v-for="combo in 5">
				<q-img src="https://chotabeta.app/dev/testenv/public/uploads/muching.png" class="cb-round-borders-10 full-height" v-if="combo!=''"></q-img>
			  </div>
			</div>
		  </q-card-section>

		<!-- speical offers -->
		  <q-card-section class="q-pa-none">
			<div class="row items-center">
			  <q-icon name="verified" size="md" class="q-px-sm"></q-icon>
				<span class="text-brown cb-font-16 text-weight-bolder">Speical offer</span>
			</div>
			<div class="row coupon-wrap q-py-sm ">
			  <div class="col-7 q-pa-xs q-pt-md" v-for="combo in 5">
				<div style="height:80px;border:2px dashed red" class="full-width cb-round-borders-20 bg-white row" @click="$router.push('food-restarent')">
				  <div class="col-8 q-pa-sm">
				  	<span class="cb-font-16">10% OFF</span><br>
				  	<span>Tiffens & lunch</span>
				  </div>
				  <div class="col-4 q-pr-s">
				  	<q-img src="https://freepngimg.com/thumb/food/139178-food-plate-diet-free-transparent-image-hd.png" style="margin-top:-20px;"></q-img>
				  </div>
				</div>
			  </div>
			</div>
		  </q-card-section>

		<!-- pick your choice -->
		  <q-card-section class="q-pa-none">
			<div class="row items-center">
			  <q-icon name="touch_app" size="md" class="q-px-sm"></q-icon>
				<span class="text-brown cb-font-16 text-weight-bolder">Pick Your Choice</span>
			</div>
			<div class="row coupon-wrap q-py-sm">
			  <div class="col-4 q-pa-sm q-pt-md" v-for="combo in 5" @click="$router.push('all-restarents')">
				<div style="height:110px;overflow:hidden" class="full-width cb-round-borders-20 bg-white row">
				  <div class="col-12 q-pa-sm text-center bg-orange-8" style="height:70px">
				  	<span class="cb-font-16 text-white">Tiffen</span>
				  </div>
				  <div class="col-12 text-center q-pb-sm">
				  	<q-img src="https://image.pngaaa.com/321/269321-small.png" style="margin-top:-20px;width:50%;"></q-img>
				  </div>
				</div>
			  </div>
			</div>
		  </q-card-section>

		<!-- select kichen -->
		  <q-card-section class="cb-bg-orange-8 cb-round-borders-20 text-white q-pb-none">
			<div class="row items-center">
				<span class="cb-font-16">Select Kitchens</span>
			</div>
			<div class="row coupon-wrap">
			  <div class="col-4 q-px-sm q-pt-md text-center" v-for="combo in 5" @click="$router.push('food-restarent')">
			  	<q-avatar size="85px" class="bg-white q-mb-sm">
   			  	  <q-avatar size="70px">
				    <q-img src="https://www.pngall.com/wp-content/uploads/8/Dish-PNG.png" class="full-width"></q-img>
		 	      </q-avatar>
		 	  	</q-avatar>
		 	  	<br>
		 	  	<span class="q-py-sm">Restarent {{ combo }} Restarent {{ combo }}</span>
			  </div>
			</div>
		  </q-card-section>

		<!-- best sellers -->
		  <q-card-section class="q-pa-none q-pt-md">
			<div class="row items-center">
			  <q-icon name="workspace_premium" size="md" class="q-px-sm"></q-icon>
			  <span class="text-brown cb-font-16 text-weight-bolder">Best Sellers</span>
			</div>
			<div class="row coupon-wrap q-py-sm">
			  <div class="col-5 q-pa-sm q-pt-md" v-for="combo in 5">
				<div style="overflow:hidden" class="full-width cb-round-borders-20 row bg-green text-white" @click="$router.push('food-restarent')">
				  <div class="col-12 q-pa-sm text-center bg-green">
				  	<p class="cb-font-16">Bahubelly Kichen</p>
				  	<p>Pindari's Chicken Ghee Roast</p>
				  </div>
				  <div class="col-12 text-center q-pb-sm">
				  	<q-img src="https://w7.pngwing.com/pngs/213/729/png-transparent-dish-food-restaurant-european-cuisine-garlic-knot-food-plate-food-recipe-cafe.png" class="full-width" style="border-radius:150%"></q-img>
				  </div>
				</div>
			  </div>
			</div>
		  </q-card-section>

		<!-- popular pick for you  -->
		  <q-card-section>
		  	<div class="row items-center">
		  		<q-icon name="dinner_dining" size="md" class="q-pr-sm"></q-icon>
		  		<span class="text-brown cb-font-16 text-weight-bolder">Popular Picks For You</span>
		  	</div>
		  	<div class="row">
		  	  <div class="col-12 q-py-sm" v-for="i in 5">
		  	  	<div class="row" @click="$router.push('food-restarent')">
		  	  	  <div class="col-9 text-grey-8 q-pr-sm">
			  	  	<span class="text-bold">South indian executive meal</span><br>
			  	  	<span class=" ">Family meal recipes. 95 Recipes. Kids and grown-ups will love these family dinner.</span><br>
			  	  	<span class="cb-font-16"><q-icon name="currency_rupee"></q-icon>100 </span>
			  	  	<span>| serve-1</span>
			  	  </div>
			  	  <div class="col-3 column justify-center">
			  	  	<q-img src="https://curlytales.com/wp-content/uploads/2018/02/WhatsApp-Image-2018-02-27-at-17.25.40-1-e1519732642532.jpeg" class="cb-round-borders-10"></q-img>
			  	  </div>
		  	  	</div>
		  	  	<hr style="border:1px dashed orange;">
		  	  </div>
		  	</div>
		  </q-card-section>
	    </q-card>
		<div>
			<q-img src="https://chotabeta.app/dev/testenv/public/uploads/assets/refer_friend.png"></q-img>
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
     color:ref('green'),
    }
  },
  mounted() {
  	this.colors();
  },
  methods: {
  	colors(){
  	  var ps = this;
  	},
  },
};
</script>
<style scoped>
.coupon-wrap{ flex-wrap: nowrap;overflow: scroll;overflow-y: hidden; }
::-webkit-scrollbar { width: 0;background: transparent; }
::-webkit-scrollbar-thumb {background: transparent;}
</style>
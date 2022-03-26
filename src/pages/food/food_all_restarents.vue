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
	 	  <q-toolbar class="text-grey-7">
		 	<q-icon name="fastfood" flat size="sm"></q-icon>
		 	<span class="cb-font-14 text-deep-orange text-bold q-pl-sm">Select Cuisine</span>
		    <q-space></q-space>
			<q-toggle color="green" label="Veg" v-model="select_veg" dense></q-toggle>	
		  </q-toolbar>
		  <div class="center">
		  	<!-- <div>
		  		<q-img src="https://thumbs.dreamstime.com/b/indian-food-lanch-thali-name-round-platter-used-to-serve-also-refer-style-meal-made-up-selection-various-dishes-128768934.jpg"></q-img>
		  	</div><div>
		  		<q-img src="https://thumbs.dreamstime.com/b/indian-food-lanch-thali-name-round-platter-used-to-serve-also-refer-style-meal-made-up-selection-various-dishes-128768934.jpg"></q-img>
		  	</div><div>
		  		<q-img src="https://thumbs.dreamstime.com/b/indian-food-lanch-thali-name-round-platter-used-to-serve-also-refer-style-meal-made-up-selection-various-dishes-128768934.jpg"></q-img>
		  	</div><div>
		  		<q-img src="https://thumbs.dreamstime.com/b/indian-food-lanch-thali-name-round-platter-used-to-serve-also-refer-style-meal-made-up-selection-various-dishes-128768934.jpg"></q-img>
		  	</div><div>
		  		<q-img src="https://thumbs.dreamstime.com/b/indian-food-lanch-thali-name-round-platter-used-to-serve-also-refer-style-meal-made-up-selection-various-dishes-128768934.jpg"></q-img>
		  	</div><div>
		  		<q-img src="https://thumbs.dreamstime.com/b/indian-food-lanch-thali-name-round-platter-used-to-serve-also-refer-style-meal-made-up-selection-various-dishes-128768934.jpg"></q-img>
		  	</div><div>
		  		<q-img src="https://thumbs.dreamstime.com/b/indian-food-lanch-thali-name-round-platter-used-to-serve-also-refer-style-meal-made-up-selection-various-dishes-128768934.jpg"></q-img>
		  	</div> -->
		  </div>
		</q-card>
	</q-header>
	<q-page-container>
	  <q-page class="bg-orange-1 q-px-md">
		<div class="row q-py-xs">
			<div class="col-12 row q-pt-sm" v-for="n in 4" @click="$router.push('food-restarent')">
				<div class="col-3 column justify-end items-center">
					<q-avatar square class="cb-round-borders-10 bg-white" size="70px">
						<q-avatar square size="50px">
							<q-img src="https://thumbs.dreamstime.com/b/indian-food-lanch-thali-name-round-platter-used-to-serve-also-refer-style-meal-made-up-selection-various-dishes-128768934.jpg"></q-img>
						</q-avatar>
						 <q-badge class="bg-white text-orange shadow-1" rounded style="font-size:9px" floating>new</q-badge>
					</q-avatar>
				</div>
				<div class="col-9 q-pa-xs text-grey-8">
					<div class="full-width cb-font-14 text-bold" style="white-space: nowrap;overflow: hidden;">
						Homes Kitchen <span class="cb-font-10 q-pl-sm">-&nbsp;&nbsp; Attapur</span>
					</div>
					<div class="full-width cb-font-14 " style="white-space:nowrap;overflow:hidden;">
						Statters | Main Course | Breakfast
					</div>
					<div class="full-width q-px-sm">
						<q-icon name="star" size="xs"></q-icon>
						<span class="cb-font-16 text-bold q-px-xs">4.0</span> 
						<q-icon name="currency_rupee" class="q-pl-md"></q-icon><span class="cb-font-12">320 for two</span> 
					</div>
				</div>
			<hr style="border:1px dashed orange" class="full-width">
			</div>	
		</div>

      </q-page>
	</q-page-container>
  </q-layout>
</template>
<script>


// let isMobile = window.matchMedia("only screen and (max-width: 760px)").matches;
// if(!isMobile){ window.location = "https://chotabeta.com/pwa"; }

// $('.center').slick({
//   centerMode: true,
//   centerPadding: '60px',
//   slidesToShow: 3,
//   responsive: [
//     {
//       breakpoint: 768,
//       settings: {
//         arrows: false,
//         centerMode: true,
//         centerPadding: '40px',
//         slidesToShow: 3
//       }
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         arrows: false,
//         centerMode: true,
//         centerPadding: '40px',
//         slidesToShow: 1
//       }
//     }
//   ]
// });


import axios from 'boot/axios'
import { ref } from "vue";
export default {
  setup() {
    return {
    	select_veg:ref(false),

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
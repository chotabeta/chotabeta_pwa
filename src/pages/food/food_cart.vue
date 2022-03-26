<template>
	<q-layout view="lHh lpr lFf">
		<q-header class="bg-orange-1 text-grey-8 text-bold">
			<q-toolbar>
				<q-btn icon="arrow_back_ios" flat></q-btn>
				<q-space></q-space>
				Mycart
				<q-space></q-space>
				<q-space></q-space>
			</q-toolbar>
			<q-toolbar class="cb-font-10">
				<q-icon name="swipe_left" size="sm" class="q-pr-sm"></q-icon>Swipe left on the item to delete from cart
				<q-space></q-space>
				<span class="cb-font-12">1 items</span>
			</q-toolbar>
		</q-header>
		<q-page-container>
			<q-page class="flex flex-center bg-orange-1 q-px-md" v-if="mycart_items == 0">
				<div class="text-center" >
					<q-img src="https://chotabeta.app/dev/testenv/public/imgs/Group_90.png" width="50%" height="50%"></q-img>
					<p class="text-orange-10 q-pt-md">Hay wait ... You forget to add items to me</p>
					<p class="text-grey-8">We found that you hav not added any items in cart. Please go back to add items.</p>
				</div>
			</q-page>
			<q-page v-if="mycart_items != 0" class="bg-orange-1 q-px-sm">
				<div class="row">
					<div class="col-12 row bg-white q-pa-sm cb-round-borders-20 q-my-xs" v-touch-swipe.mouse.right="handleswipe()" v-for="n in 5">
						<div class="col-2">
							<q-avatar square class="cb-round-borders-10" size="70px">
								<q-img src="https://i0.wp.com/cdn.whatsuplife.in/kolkata/blog/2018/05/TBCBengali-Bhoj-ComboBy-Heena-Punwani4.jpg?resize=823,411" class="fit"></q-img>
							</q-avatar>
						</div>
						<div class="col-7 q-pl-md">
							<span class="text-bold">South indian execlusive meals</span><br>
							<span class="cb-font-12">Consists of salad, 2 mini phulkas, One dry curry, Dal, Rice, Pickle ,Card.</span>
						</div>
						<div class="col-3 text-center">
							<span class="text-h6 text-bold"><q-icon name="currency_rupee" ></q-icon>100</span>
							<br>
							<span style="border:1px solid orange" class="cb-round-borders-10 text-orange q-py-xs">
								<q-btn flat icon="remove" dense></q-btn>
								<span class="q-px-xs text-bold cb-font-16">1</span>
								<q-btn flat icon="add" dense></q-btn>
							</span>

						</div>
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
    	select_veg:ref(false),
    	my_cart_items:ref(1),

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

  	},
  	handleswipe(){
  		var ps = this;
  		alert('hai');
  	}
  },
};
</script>
<style scoped>
.coupon-wrap{ flex-wrap: nowrap;overflow: scroll;overflow-y: hidden; }
::-webkit-scrollbar { width: 0;background: transparent; }
::-webkit-scrollbar-thumb {background: transparent;}
</style>
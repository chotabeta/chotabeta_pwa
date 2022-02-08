<template>
<q-layout  view="lHh lpr lFf">
	<q-header  >
		<q-toolbar class="cb-bg-white-2 cb-text-blue-8">
			<q-btn flat dense round icon="arrow_back"  @click="$router.push('/home/dashboard')"/>
			<q-btn icon="place" class="q-pa-none" size="sm" flat label="HUDA Techno Enclave, HITEC City"></q-btn>
			<q-space></q-space>
			<q-btn round dense icon="notifications" flat @click="$router.push('Notification')"> 
    			<q-badge  color="red" rounded floating style="margin-top:8px;margin-right: 8px;"></q-badge>
  			</q-btn>
  			<q-btn round dense icon="shopping_cart" flat>
    			<q-badge   class="cb-bg-orange-8" rounded floating >0</q-badge>
  			</q-btn>
		</q-toolbar>
</q-header>
<q-page-container>
	<q-page class="q-px-sm">

		<q-carousel v-model="carousels" swipeable style="height:164px" class="cb-shadow-1 q-my-sm cb-round-borders-10" navigation animated infinite control-color="primary">
			<template v-slot:navigation-icon="{ active, btnProps, onClick }">
	        <q-btn v-if="active" size="xs" :icon="btnProps.icon" color="red-7" flat round dense @click="onClick" />
	        <q-btn v-else :icon="btnProps.icon" color="grey-5" class="q-px-none" size="xs" flat round dense @click="onClick" />
	     	</template>
		    <q-carousel-slide :name="index"  class="column no-wrap q-pa-none" v-for="(offer,index ) in top_offers" >
		     	<q-img class="rounded-borders "  :src="offer.image"></q-img>
		    </q-carousel-slide>	
		</q-carousel>

	    <div class="cb-shadow-1 q-px-sm cb-round-borders-10">
	    	<q-input borderless placeholder="Search" dense>
				<template v-slot:append> <q-icon name="mic" class="cb-text-orange-8" /></template>
			</q-input>
		</div>

		<div v-if="coupons" class="row coupon-wrap "  >
			<div class="col-8" v-for="coupon in coupons" :key="coupon" >
				<q-img :src="coupon.coupon_image"></q-img>	
			</div>
		</div>

		<div class="row ">
			<div class="col-12 cb-font text-weight-bolder text-grey-8 q-py-sm"> {{ heading1 }} </div>
		</div>
		<div class="row coupon-wrap "  >
			<div class="q-py-lg" style="min-width: 150px;" v-for="item in top_sellers">
				<div class="cb-bg-orange-1 cb-round-borders-10 q-px-sm q-mx-xs text-grey-8 cb-font-12">
					<div class="row justify-center" style="height:55px;">
						<q-img :src="item.image" width="55px" height="55px" style="margin-top:-25px"></q-img>
					</div>
					<div>{{ item.brands }}</div>
					<div style="height:35px" class="text-bold row items-center overflow-hidden">{{ item.name }}</div>
					<div class="flex flex-center">
						<q-icon name="currency_rupee"></q-icon>{{ item.variations[0].mrp }}
						<q-space ></q-space>
						<select v-model="select_weight" dense borderless class="bg-white text-grey-8d q-px-sm shadow-1 round-borders" style="height: 30px;!important">
							<option v-for="variation in item.variations" :value="variation.weight">{{ variation.description }}</option>
						</select>
					</div>
					<div class="row justify-center q-pt-md">

						<q-btn label="Add To Cart"  size="sm" class="cb-text-orange-8 bg-white" v-if="item.item_disabled == 0"></q-btn>
						<span v-else class="text-red text-weight-bolder">Product Not Available</span>
					</div>
				</div>
			</div>
		</div>

		<div class="row">
			<div class="col-12 cb-font text-weight-bolder cb-text-grey-5 q-py-sm"> {{ heading2 }}</div>
		</div>
		<div class="row coupon-wrap" v-if="combo_offers" >
			<div class="col-8 q-pa-xs" v-for="combo in combo_offers">
				<q-img :src="combo.images_array" class="cb-round-borders-10" v-if="combo != '' ">
					<div class="full-height full-width" style="background: transparent;">
						<div style="height:90%;width:60%">
							<span class="text-weight-bolder cb-font-16">{{ combo.name }}</span><br>
							<span class="cb-font-12">{{ combo.info }}</span>
						</div>
						<div v-for="variation in combo.variations" style="height:10%;min-width:100%;" class="flex flex-center">
				  		<q-icon name="currency_rupee"></q-icon>{{ variation.selling_price }}  
				  		<span>&nbsp;| <q-icon name="currency_rupee"></q-icon>
				  			<span class="text-strike text-red">
				  				<span class="text-white">{{ variation.mrp }}</span>
				  			</span>
				  		</span>
				  		<q-space></q-space>
				  		<q-btn label="add to cart" class="cb-text-orange-8 bg-white" size="sm"></q-btn>
						</div>
					</div>
					<span class="absolute-top-right cb-text-orange-8" v-if="combo.off != 0">
						<q-icon name="bookmark" color="white" size="60px" style="margin-top: -10px;"></q-icon>
						<span  class="absolute-top q-pl-lg cb-font-12" >{{ combo.off }}%  off</span> 
					</span>
				</q-img>
			</div>
		</div>

	    <div class="row">
	    	<div class="col-12 cb-text-grey-5 text-weight-bolder q-py-md cb-font">{{ heading3 }}</div>
				<div class="col-3 text-center cb-text-grey-5 q-mb-md" v-for="item in store_categories" :key="item">
					<q-avatar size="75px" class="shadow-1" @click="pickfromstore_redirection(item)">
						<q-avatar size="50px">
							<img :src="item.category_image_for_mobile">
						</q-avatar>
					</q-avatar><br>
					<span class="cb-font-12 text-weight-bolder">{{ item.name }}</span>
				</div>   	
	    </div>

	    <div class="row">
	    	<div class="col-12" v-if="bottom_offers" v-for="offer in  bottom_offers">
	    		<q-img :src="offer.image"></q-img>
	    	</div>
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
    	top_offers:ref(null),
    	coupons:ref(null),
    	carousels:ref(0),
    	coup:ref(0),
    	heading1:ref(null),
    	heading2:ref(null),
    	heading3:ref(null),
    	combo_offers:ref([]),
    	store_categories:ref([]),
    	select_weight:ref(null),
    	top_sellers:ref([]),
    	bottom_offers:ref([]),
    }
  },
  mounted () {
  	this.getToken();  
  	if(localStorage.getItem('category')){
  		this.category_details();
  	}	
  },
  methods:{
  	getToken(){
  		var ps = this ;
  		ps.access_token = ps.$store.state.token;
  		if(ps.access_token == null){
  			ps.$router.push('');
  		}  	
  	},	
  	category_details(){
  		var ps = this;
  		ps.category = JSON.parse(localStorage.getItem('category'));
  		let config = { headers: { "Authorization": `Bearer ${ps.access_token}`,}}
  		let formData = new FormData();
      		formData.append('xid', ps.$store.state.xid);
      		formData.append('category_id', ps.category.id);
      		formData.append('service_id', ps.category.service_id);
      		formData.append('items', '[]');
      	axios.post('https://chotabeta.app/dev/testenv/api/intermediate-screen-new',formData,config).then(function (response) {
      		// console.log('response');
      		ps.top_offers =  response.data.top_offers;
 					ps.coupons =  response.data.coupons;
 					ps.combo_offers = response.data.combo_offers;
 					ps.combo_offers.forEach( item =>{
 						if( item.variations[0].mrp > item.variations[0].selling_price || item.variations[0].mrp < item.variations[0].selling_price ){
 							item.off = ((item.variations[0].mrp - item.variations[0].selling_price)/item.variations[0].mrp)*100;
 						}else{
 							item.off = 0;
 						}
 					});
 					ps.heading1 = response.data.heading1;
 					ps.heading2 = response.data.heading2;
 					ps.heading3 = response.data.heading3;
 					ps.store_categories = response.data.store_categories;
 					ps.top_sellers = response.data.top_sellers;
 					ps.bottom_offers = response.data.bottom_offers;
      	}).catch(function (error) {
       		console.log(error);
      	})
  	},
  	pickfromstore_redirection(item){
  		var ps = this;
  		localStorage.setItem('sub_category',JSON.stringify(item));
  		ps.$router.push('/PickFromStore_layouts_s2');
  	}
  }
})
</script>
<style scoped>
.coupon-wrap{ flex-wrap: nowrap;overflow: scroll;overflow-y: hidden; }
::-webkit-scrollbar { width: 0;background: transparent; }
::-webkit-scrollbar-thumb {background: transparent;}
</style>
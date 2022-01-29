<template>
	<q-page class="q-px-sm">
		<q-carousel v-model="carousels" swipeable style="height:164px" class="shadow-2 q-my-md cb-round-borders" navigation animated infinite control-color="primary">
			<template v-slot:navigation-icon="{ active, btnProps, onClick }">
        		<q-btn v-if="active" size="xs" :icon="btnProps.icon" color="red-7" flat round dense @click="onClick" />
        		<q-btn v-else :icon="btnProps.icon" color="grey-5" class="q-px-none" size="xs" flat round dense @click="onClick" />
     		</template>
	     	<q-carousel-slide :name="index"  class="column no-wrap q-pa-none" v-for="(offer,index ) in top_offers" >
	        	<q-img class="rounded-borders "  :src="offer.image"></q-img>
	      	</q-carousel-slide>	
	    </q-carousel>
	    <div class="shadow-2 q-px-sm cb-round-borders">
		    <q-input borderless placeholder="Search" dense>
					<template v-slot:append> <q-icon name="mic" class="cb-text-orange-8" /></template>
				</q-input>
			</div>
		<div v-if="coupons" class="row" style="overflow-x: scroll;">
			<div class="col" v-for="coupon in coupons" :key="coupon" >
				<q-img :src="coupon.coupon_image"></q-img>	
			</div>
		</div>
		<div class="row">
			<div class="col-12 cb-font text-weight-bolder cb-text-grey-5 q-py-sm"> {{ heading1 }}</div>
			<div class="col-12 flex q-py-lg">
				<div class="cb-bg-orange-1 cb-round-borders q-px-sm q-mx-sm cb-text-grey-4" style="width:160px;font-size: 11px;">
					<div class="row justify-center">
						<q-img src="https://chotabeta.app/dev/testenv/public/uploads/new_items/18/100/333.jpg" width="55px" style="margin-top:-25px"></q-img>
					</div>
					<span>Achi</span><br>
					<b>Bhiryani Rice Paste</b><br>
					<div class="flex flex-center">
						<q-icon name="currency_rupee"></q-icon>85
						<q-space ></q-space>
						<q-select dense v-model="select_weight" borderless class="bg-white q-px-sm" ></q-select>
					</div>
					<div class="row justify-center" style="margin-bottom: -15px;">
						<q-btn label="Add To Cart" dense class="cb-text-orange-8 bg-white"></q-btn>
					</div>
				</div>
				<div class="cb-bg-orange-1" style="width:160px">
					
				</div>
			</div>
		</div>

		<div class="row">
			<div class="col-12 cb-font text-weight-bolder cb-text-grey-5 q-py-sm"> {{ heading2 }}</div>
			<div class="col-12"  v-if="combo_offers">
				<div class="q-pa-sm cb-round-borders" v-for="combo in combo_offers" :key="combo" style-="overflow:hidden;width:150px" >
					<q-img :src="combo.images_array" class="cb-round-borders" width="100%">
						<div class="" style="background: transparent;">
							<span class=" text-bold text-h5">{{ combo.brands }}</span><br>
							<span class=" text-bold cb-text">{{ combo.info }}</span>
					</div>
					</q-img>
				</div>
			</div>
		</div>


    <div class="row">
    	<div class="col-12 cb-text-grey-4 text-weight-bolder q-py-md cb-font">{{ heading3 }}</div>
			<div class="col-3 text-center cb-text-grey-4 q-mb-md" v-for="item in store_categories" :key="item">
						<div class="q-px-sm" style="border-radius: 100%;">
							<q-avatar size="75px" class="shadow-2" @click="pickfromstore_redirection(item)">
								<q-avatar size="50px">
									<img :src="item.category_image_for_mobile">
								</q-avatar>
							</q-avatar><br>
						<span>{{ item.name }}</span>
						</div>
					</div>   	
    </div>
		
	</q-page>
</template>
<script>
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
    	select_weight:ref('200')
    }
  },
  mounted () {
  	this.getToken();  
  	if(this.$route.query.id && this.$route.query.service_id){
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
  		let config = { headers: { "Authorization": `Bearer ${ps.access_token}`,}}
  		let formData = new FormData();
      		formData.append('xid', ps.$store.state.xid);
      		formData.append('category_id', ps.$route.query.id);
      		formData.append('service_id', ps.$route.query.service_id);
      		formData.append('items', '[]');
      	axios.post('https://chotabeta.app/dev/testenv/api/intermediate-screen-new',formData,config).then(function (response) {
      		console.log('response');
      		ps.top_offers =  response.data.top_offers;
 					ps.coupons =  response.data.coupons;
 					ps.combo_offers = response.data.combo_offers;
 					ps.heading1 = response.data.heading1;
 					ps.heading2 = response.data.heading2;
 					ps.heading3 = response.data.heading3;
 					ps.store_categories = response.data.store_categories;
      	}).catch(function (error) {
       		console.log(error);
      	})
  	},
  	pickfromstore_redirection(item){
  		var ps = this;
  		console.log(item);
  		ps.$router.push('/PickFromStore_layouts_s2?combinations='+item);
  	}
  }
})
</script>
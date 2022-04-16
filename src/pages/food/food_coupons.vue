<template>
  <q-layout view="lHh lpr lFf">
	<q-header class="bg-orange-6 q-pa-none q-pt-xs ">
	  <q-toolbar class="text-h6">
		<q-btn icon="arrow_back_ios" flat></q-btn>	
      </q-toolbar>
      <div class="bg-orange-6 row items-center justify-center">
      	<div class="col-5 text-center text-h6"> Coupons</div>
      	<div class="col-7 ">
      		<img src="~assets/images/couponsimage.png" style="width:100%;height:130px">
      	</div>
      </div>
	</q-header>
	<q-page-container>
  	  <div id="loader2" class="pre-loader" style="display:none"></div>

	  <q-page v-if="available_coupon_codes.length != 0" class="q-pa-sm">
	  	<div class="row q-pa-sm" v-for="coupon in available_coupon_codes">
	  	  <div :id="'i'+coupon.code" :class="[dynamic(coupon.code),'col-9 cb-round-borders-10 q-pa-sm cb-font-16 ']">
	  	  	<q-img :src="coupon.coupon_image" class="q-mx-md" style="width:25px;"></q-img>
	  	  	<span>{{ coupon.code }}</span>
	  	  </div>
	  	  <div :id="'j'+coupon.code" :class="[dynamic(coupon.code),'col-3 q-px-xs cb-round-borders-10 q-pa-sm  cb-font-16 text-center']" @click="applycoupon(coupon.code)">Apply</div>
	  	  <div class="col-12 text-weight-bolder cb-font-14 text-grey-9">
	  	  	{{ coupon.description }}
	  	  </div>
	  	</div>
	  </q-page>

	  <q-page v-if="available_coupon_codes.length == 0" class="bg-orange-1 flex flex-center">
	  	<div style="width:60%" class="text-center">
	  	  <q-img src="~assets/images/icon_no_order_found.png"></q-img>
	  	  <p class="q-mt-md text-red text-weight-bolder">{{ message }}</p>
	  	</div>
	  </q-page>
	</q-page-container>
  </q-layout>
</template>
<script type="text/javascript">

import axios from 'boot/axios'
import { ref } from "vue";
export default {
  setup() {
    return {
      access_token:ref(null),
      xid:ref(null),
      available_coupon_codes:ref([]),
   	}
  },
  mounted() {
  	this.getToken();
  	// uncomment this  functions when you move to live
  	this.getcoupons();
  	// comment this functions when you move to live
  	// this.loaddata();
  },
  methods: {
  	getToken(){
  	  var ps = this;
  	  if(ps.$store.state.token){ ps.access_token = ps.$store.state.token; }
        else{ ps.access_token = ps.$store.state.token_cb; }

      if(ps.$store.state.xid){ps.xid = ps.$store.state.xid;}
  		else{ps.xid = ps.$store.state.xid_cb;}

      if(ps.access_token == null ||  !ps.access_token){ ps.$router.push('/'); }
  	},
  	loaddata(){
  		var ps = this;
  		ps.message =  "No coupons found";
    	ps.available_coupon_codes= [
						        {
						          "code": "YUMMZ",
						          "description": "Offer applicable on all plans. Min order value is 100",
						          "coupon_image": "https://stackroger.com/public/uploads/food/offers/coupon.png",
						          "color_code": "00ff00",
						          "text_color_code": "FFFFFF"
						        },
						        {
						          "code": "CB75",
						          "description": "Offer applicable only on oneday subscription plans. Min order value is 150",
						          "coupon_image": "https://stackroger.com/public/uploads/food/offers/coupon.png",
						          "color_code": "FF9333",
						          "text_color_code": "FFFFFF"
						        },{
						          "code": "CB71",
						          "description": "Offer applicable only on oneday subscription plans. Min order value is 150",
						          "coupon_image": "https://stackroger.com/public/uploads/food/offers/coupon.png",
						          "color_code": "000f0f",
						          "text_color_code": "FFFFFF"
						        }
						    ];
  	},
  	getcoupons(){
  	  var ps = this;
  	  let config = { headers: { "Authorization": `Bearer ${ps.access_token}`,}};
  	  var loader = document.getElementById('loader2');
  	  let formData = new FormData;
		  formData.append("pincode", ps.$store.state.pincode);
		  formData.append("lat_lng", ps.$store.state.latlongs);
		  formData.append("client_id", ps.$route.query.client_id);
		  formData.append("xid", ps.xid);
			  
		  loader.style.display="block";
		  ps.$api.post('/api/food-coupons',formData,config).then(function (response) {
      	// console.log(response,"ger coupons");
      	loader.style.display="none";
      	if(response.data.status_code == 200){
      	  ps.available_coupon_codes = response.data.available_coupon_codes;
      	}else{
      		ps.message = response.data.message;
      	}
      }).catch(function (error) {
      	console.log(error);
      }); 
  	},
  	applycoupon(code){
  	  var ps= this;
  	  localStorage.setItem('food_coupon',code);
  	  ps.$router.push('food-checkout?plan='+ps.$route.query.plan+'&subscription='+ps.$route.query.subscription);
  	},
  	dynamic(code){
		  var ps = this;
			// console.log(code,'code');
			var tid = setInterval( function () {
				if ( document.readyState !== 'complete' ){ return };
				clearInterval( tid );    
				ps.available_coupon_codes.forEach(element => {
					if(element.code == code){
						var code_i = 'i'+element.code;
						var code_j = 'j'+element.code;

						var id_i =  document.getElementById(code_i);
						id_i.style.backgroundColor = '#'+element.color_code;
						id_i.style.color = '#'+element.text_color_code;

						var id_j =  document.getElementById(code_j);
						id_j.style.backgroundColor = '#'+element.color_code;
						id_j.style.color = '#'+element.text_color_code;
					}
				});
			}, 100 );
		},
  },
};
</script>
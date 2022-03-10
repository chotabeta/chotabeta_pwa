<template>
	<q-page padding>
		<q-input outlined :placeholder="search_box_text" dense @click="my_function()">
			<template v-slot:append> <q-icon name="mic" class="cb-text-orange-8" /></template>
		</q-input>

    <div class="full-width">
      <q-carousel animated autoplay infinite swipeable v-model="carousels" style="height:164px" class="cb-shadow-2 q-mt-sm cb-round-borders-10 q-mb-xs" >
        <q-carousel-slide :name="index" :img-src="slide.image" v-for="(slide,index ) in sliders" @click="screen_redirection_sliders(slide)"/>
      </q-carousel>
    </div>
    <div class="row justify-center">
      <q-icon name="fiber_manual_record" :class="(index == carousels)? 'text-blue-10':'text-grey-6'" v-for="(slide,index ) in sliders" @click='carosel_set(index)'></q-icon>
    </div>

    <div class="row">
    	<div class="col-6 q-pa-sm" v-if="service0" >
    		<q-btn class="fit  cb-round-borders-10 cb-bg-gradient-blue-4 q-pt-sm" id="service0" @click="services_menu(service0,0)">
    			<div class="fit">
	    			<q-img :src="service0.service_image" style="width:100px;height:70px"></q-img><br>
	  				<span class="cb-text-blue-8 cb-font-12 text-weight-bolder">{{ service0.name }}</span>
	  			</div>
  			</q-btn>
  		</div>
  		<div class="col-6 q-pa-sm" v-if="service1">
    		<q-btn class="fit cb-round-borders-10 cb-bg-gradient-orange-4 q-pt-sm" id="service1" @click="services_menu(service1,1)">
    			<div class="fit">
	    			<q-img :src="service1.service_image" style="width:100px;height:70px"></q-img><br>
	  				<span class="cb-text-blue-8 cb-font-12 text-weight-bolder">{{ service1.name }}</span>
	  			</div>
  			</q-btn>
  		</div>

  		<div class="col-6 q-pa-sm" v-if="service2" >
    		<q-btn class="fit  cb-round-borders-10 cb-bg-gradient-orange-4 q-pt-sm" id="service2" @click="services_menu(service2,2)">
    			<div class="fit">
	    			<q-img :src="service2.service_image" style="width:100px;height:70px"></q-img><br>
	  				<span class="cb-text-blue-8 cb-font-12 text-weight-bolder">{{ service2.name }}</span>
	  			</div>
  			</q-btn>
  		</div>

  		<div class="col-6 q-pa-sm" v-if="service3" >
    		<q-btn class="fit  cb-round-borders-10 cb-bg-gradient-orange-4 q-pt-sm" disable  id="service3" @click="services_menu(service3,3)">
    			<div class="fit">
    				<span class="text-red text-bold absolute-top-left q-px-sm" style="z-index: 1111;" >Comming Soon</span>
  					<q-img :src="service3.service_image" style="width:100px;height:70px"></q-img><br>
  					<span class="cb-text-blue-8 cb-font-12 text-weight-bolder ">{{ service3.name }}</span>
  				</div>
  			</q-btn>
  		</div>
    </div>

    <div class="row" v-if="service_details">
    	<div class="col-12 text-center text-weight-bolder cb-text-blue-8 q-py-md cb-font-14">{{ service_details.description }}</div>
			<div class="col-3 text-center cb-text-grey-4 q-mb-md" v-for="item in service_details.all_categories" :key="item">
				<q-avatar size="70px" class="shadow-1" @click="services_page_redirection(item)">
					<q-avatar size="40px" square>
						<img :src="item.category_image_for_mobile" class="fit">
						<!-- <img src="https://chotabeta.app/dev/testenv/public/uploads/assets/fruits_vegges.png" class="fit"> -->
					</q-avatar>
				</q-avatar><br>
				<span class="cb-font-12">{{ item.name }}</span>
			</div>

			<div class="col-12 justify-center row q-mb-md">
				<q-btn label="see all" @click="$router.push('Services?id='+service_details.id)" size="sm" dense rounded class="cb-text-orange-8 q-px-md"></q-btn>
			</div>
    </div>

    <div class="row q-mt-sm">
    	<div class="col-12 cb-text-grey-4 text-weight-bolder" v-if="upcomming_offers.length != 0">Upcoming Offers</div>
    	<div class="col-12" v-if="upcomming_offers.length != 0">
    		<q-carousel v-model="offers" swipeable style="max-height:200px" animated  control-color="primary"  >
			    <q-carousel-slide :name="index"  class="column no-wrap q-px-none" v-for="(slide,index ) in upcomming_offers" >
		        <q-img class="fit rounded-borders" style="height:100%"  :src="slide.image"/>
		      </q-carousel-slide>
		    </q-carousel>
    	</div>
    	<div class="col-12" v-if="top_offers_one">
    		<q-img class="fit rounded-borders"   :src="top_offers_one.image"/>
    	</div>
    </div>

    <div class="call_request rounded-borders q-mx-sm q-my-md flex flex-center">
    	<q-img src="https://chotabeta.app/dev/testenv/public/uploads/assets/support_girl_we_care.png" width="50px"></q-img>
    	<span class="text-brown text-bold">Need Help?</span>
    	<q-space></q-space>
    	<q-btn label="Get a Call back" icon-right="call" dense borderless flat class="q-ml-sm cb-text-orange-8" @click="CallBackRequestDialog = true"></q-btn>
    	<q-space></q-space>
    </div>

    <q-dialog v-model="PAD_others_Dailog" position="bottom">
	    <q-card class="q-pa-sm">
	      <q-card-section class="text-center text-bold">
	      	<q-btn icon="cancel" flat class="absolute-top-right cb-text-orange-8" @click="PAD_others_Dailog = false" size="sm"></q-btn>
	      	<span>Add Your Product</span><br>
	      	<q-form @submit="PAD_others_sunction">
		      	<q-input outlined dense placeholder="Enter Your Product or Category" v-model="PAD_others_category" class="q-my-md">
		      		<template v-slot:prepend>
		      			<q-icon name="filter_list" color="orange"></q-icon>
		      		</template>
		      	</q-input>
		      	<q-btn type="submit" label="Save" class="cb-bg-orange-8 text-white q-mt-md"></q-btn>
	      	</q-form>


	      </q-card-section>
	    </q-card>
	  </q-dialog>

	  <q-dialog v-model="CallBackRequestDialog">
	    <q-card class="q-pa-sm cb-round-borders-10">
	      <q-card-section class="text-center">
	      	<q-avatar size="70px" class="bg-orange-3">
	      	<q-avatar size="60px" font-size="40px" class="bg-white cb-text-orange-8">
	      		<q-icon name="question_mark"></q-icon>
	      	</q-avatar>
	      </q-avatar>
	      <br>
	      <p class="cb-font-16 text-weight-bolder q-py-sm">Call Back Request?</p>
	      <p class="cb-text-grey-5">Are You Sure You Want To Place A Call Back Request?</p>
	      <p class="cb-text-grey-5">"Our Representative Will Call Back Shortly"</p>
	      <q-btn label="Confirm" class="cb-bg-orange-8 text-white cb-round-borders-10 q-px-xl" @click="GetCallBackRequestFunction()"></q-btn><br>
	      <q-btn label="cancel" flat class="cb-text-grey-4 q-mt-sm" @click="CallBackRequestDialog = false"></q-btn>
	      </q-card-section>
	    </q-card>
	  </q-dialog>

	  <q-dialog
      v-model="global_search_dialog"
      persistent
      :maximized="maximizedToggle"
      transition-show="slide-up"
      transition-hide="slide-down"
    >
      <q-card >
        <q-bar>
          <q-space></q-space>

          
          <q-btn dense flat icon="close" @click="search_focusout()">
            <q-tooltip class="bg-white text-primary">Close</q-tooltip>
          </q-btn>
        </q-bar>

        <q-card-section>
          <q-input autofocus outlined for="input_id" :placeholder="search_box_text" v-model="user_search_input" dense @keyup="search_products()">
			<template v-slot:append> <q-icon name="mic" class="cb-text-orange-8" /></template>
		</q-input>
        </q-card-section>

        <q-card-section class="q-pt-none">
			<div v-for="products in global_search_data" :key="products" @click="go_to_product_page(products)">
         <div class="row">
			 <div class="col-3">
				 <img :src="products.image" 
				  style="min-height:50px !important; min-width:50px !important; max-width:50 px !important; max-height:50px;" >
				 </div>
			 <div class="col-9">
				<span v-html="products.name"></span>
				 </div>
			 </div>
				 <q-separator color="orange"></q-separator>
				 </div>
			 
		  </q-card-section>
      </q-card>
    </q-dialog>

	</q-page>
</template>
<script>
import {ref } from 'vue'
import axios from 'boot/axios'
export default ({
  setup(){
    return {
      access_token:ref(null),
      sliders:ref(null),
      carousels:ref(0),
      offers:ref(0),
      service0:ref(null),
      service1:ref(null),
      service2:ref(null),
      service3:ref(null),
      all_services_single_id:ref(2),
      service_details:ref(null),
      upcomming_offers:ref([]),
      top_offers_one:ref(null),
      PAD_others_Dailog:ref(false),
      PAD_others_category:ref(null),
      search_box_text:ref(null),
      CallBackRequestDialog:ref(false),
      global_search_dialog: ref(false),
      maximizedToggle: ref(true),
      user_search_input: ref(null),
      global_search_data: ref([]),
    }
  },
  mounted () {
  	var ps = this;
  	ps.getAccessToken();
  	setTimeout(function() {
  		ps.getDashboarddata();
  	}, 100);
  },
  methods:{
  	getAccessToken(){
  		var ps = this;
  		ps.access_token = ps.$store.state.token;
  		if(ps.access_token == null ||  !ps.access_token){
  			ps.$router.push('');
  		}
  	},
  	getDashboarddata(){
  		var ps = this;
  		if(ps.$store.state.latlongs){
	  		let formData = new FormData();
	      	formData.append('current_app_version', 1);
	      	formData.append('pincode', '500072');
	      	formData.append('base_pincode', 0);
	      	formData.append('base_location', ps.$store.state.latlongs);
	      	formData.append('lat_lng', ps.$store.state.latlongs);
	      	formData.append('playstore_version_name', null);
	  		let config = { headers: { Authorization: `Bearer ${ps.access_token}` } };
				ps.$api.post('/api/v4/dashboard-six',formData,config).then(function (response) {
					if(response.data.status_code ==200){
					 	ps.sliders = response.data.sliders;
					 	ps.service0 = response.data.all_services[0];
					 	ps.service1 = response.data.all_services[1];
					 	ps.service2 = response.data.all_services[2];
					 	ps.service3 = response.data.all_services[3];
					 	ps.upcomming_offers  = response.data.top_offers;
					 	ps.top_offers_one  = response.data.top_offers_one[0];
					 	ps.search_box_text = response.data.search_box_text;
					 	ps.services_menu(ps.service0,0);
					}else{
					 	ps.$q.notify({ message:response.data.message, type: 'negative',progress: true, });
					}
				}).catch(function (error) {
					console.log(error);
					// ps.$q.notify({ message:error, type: 'warning',progress: true, });
				});
  		}else{
					ps.$q.notify({ message:"Please Refresh", type: 'warning',progress: true, });
  		}
  	},
  	carosel_set(index){ this.carousels = index; },
  	services_menu(data,card){
  		var ps = this;
  		ps.service_details  = data;
  		localStorage.setItem('service',JSON.stringify(data));
  		// console.log(data);
      if(card == 0){
  			document.getElementById('service0').classList.add('cb-bg-gradient-blue-4');

  			document.getElementById('service1').classList.remove('cb-bg-gradient-blue-4');
  			document.getElementById('service2').classList.remove('cb-bg-gradient-blue-4');
  			document.getElementById('service3').classList.remove('cb-bg-gradient-blue-4');

  			document.getElementById('service1').classList.add('cb-bg-gradient-orange-4');
  			document.getElementById('service2').classList.add('cb-bg-gradient-orange-4');
  			document.getElementById('service3').classList.add('cb-bg-gradient-orange-4');
  		}
  		if(card == 1){
  			document.getElementById('service0').classList.remove('cb-bg-gradient-blue-4');
  			document.getElementById('service2').classList.remove('cb-bg-gradient-blue-4');
  			document.getElementById('service3').classList.remove('cb-bg-gradient-blue-4');

  			document.getElementById('service1').classList.add('cb-bg-gradient-blue-4');

  			document.getElementById('service0').classList.add('cb-bg-gradient-orange-4');
  			document.getElementById('service2').classList.add('cb-bg-gradient-orange-4');
  			document.getElementById('service3').classList.add('cb-bg-gradient-orange-4');
  		}
  		if(card == 2){
  			document.getElementById('service0').classList.remove('cb-bg-gradient-blue-4');
  			document.getElementById('service1').classList.remove('cb-bg-gradient-blue-4');
  			document.getElementById('service3').classList.remove('cb-bg-gradient-blue-4');

  			document.getElementById('service2').classList.add('cb-bg-gradient-blue-4');

  			document.getElementById('service0').classList.add('cb-bg-gradient-orange-4');
  			document.getElementById('service1').classList.add('cb-bg-gradient-orange-4');
  			document.getElementById('service3').classList.add('cb-bg-gradient-orange-4');
        ps.$router.push('/rent_me1');
  		}
  		if(card == 3){
  			document.getElementById('service0').classList.remove('cb-bg-gradient-blue-4');
  			document.getElementById('service1').classList.remove('cb-bg-gradient-blue-4');
  			document.getElementById('service2').classList.remove('cb-bg-gradient-blue-4');

  			document.getElementById('service3').classList.add('cb-bg-gradient-blue-4');

  			document.getElementById('service0').classList.add('cb-bg-gradient-orange-4');
  			document.getElementById('service1').classList.add('cb-bg-gradient-orange-4');
  			document.getElementById('service2').classList.add('cb-bg-gradient-orange-4');
  		}
  	},
  	services_page_redirection(item){
  		var ps = this;
  		console.log(item);
  		// return false;
  		localStorage.setItem('category',JSON.stringify(item));
  		if(item.main_service_id == 2){
  			if( item.screen_redirection == 2 ){
  				ps.$router.push('/PickFromStore_layouts_s1');
  			}else if(item.screen_redirection == 0 ){
  				ps.$router.push('/PickFromStore_layouts_s2');
  			}
  		}else if(item.main_service_id == 1){
  			console.log(item);
  			if(item.id == 30){
  				ps.PAD_others_Dailog = true;
  			}else{
  				ps.$router.push('/PickAndDrop_s1');
  			}
  		}
  	},
  	PAD_others_sunction(){
  		var ps = this;
  		var selectedcategory = JSON.parse(localStorage.getItem('category'));
  		selectedcategory.name = ps.PAD_others_category;
  		localStorage.setItem('category',JSON.stringify(selectedcategory));
  		// console.log(localStorage.getItem('category'),"new category");
  		ps.$router.push('/PickAndDrop_s1');
  	},
  	GetCallBackRequestFunction(){
  		var ps = this;
  		let config = { headers: { Authorization: `Bearer ${ps.access_token}` } };
				ps.$api.get('/api/get-call?current_location='+ps.$store.state.latlongs,config).then(function (response) {
					if(response.data.status_code ==200){
					 	ps.$q.notify({ message:response.data.message, type: 'positive',progress: true, });
					 }
					 else{
					 	ps.$q.notify({ message:response.data.message, type: 'negative',progress: true, });
					}
				 	ps.CallBackRequestDialog = false;
				}).catch(function (error) {
					console.log(error);
					// ps.$q.notify({ message:error, type: 'warning',progress: true, });
				});
  	},
  	screen_redirection_sliders(item){
  		var ps =  this;
  		console.log(item,'item');
  		if(item.redirection_enabled == 0){
  			var ps = this;
  			var category = JSON.parse(localStorage.getItem('category'));
  			var service = JSON.parse(localStorage.getItem('service'));
  			// console.log(category);
  			// console.log(service);
				category.id = item.category_id;
				category.main_service_id = service.id;
				category.name = item.service_name;
				category.screen_redirection = item.screen_redirection;
				category.service_id = item.service_id;
				category.vehicle_type = item.vicinity;
				service.mode = item.service_mode;
				localStorage.setItem('service',service);
				ps.services_page_redirection(category);
  		}
  	},
  	search_products(){
			var ps = this;
  		if(ps.$store.state.latlongs){
  		if(ps.user_search_input.length > 1){
			  var pincode = localStorage.getItem('pincode');
			  
	  		let formData = new FormData();
	      	formData.append('item_name', ps.user_search_input);
	      	formData.append('page_no', 1);
	      	formData.append('pincode', pincode);
	      	formData.append('lat_lng', ps.$store.state.latlongs);
	  		let config = { headers: { Authorization: `Bearer ${ps.access_token}` } };
				ps.$api.post('/api/global-search',formData,config).then(function (response) {
					if(response.data.status_code ==200){
						ps.global_search_data = response.data.products;

					 
					}else{
						ps.global_search_data = '';
					 	ps.$q.notify({ message:response.data.message, type: 'negative',progress: true, });
					}
				}).catch(function (error) {
					// ps.$q.notify({ message:error, type: 'warning',progress: true, });
				});
		  }
  		}else{
					ps.$q.notify({ message:"Please Refresh", type: 'warning',progress: true, });
  		}



	},
	go_to_product_page(product_data){
		
  		var ps = this;
  		ps.$router.push('/PickFromStore_Item?sku='+product_data.sku);
  
	},
	search_focusout(){
		var ps = this;
		ps.global_search_dialog = false;

	},
	my_function(){
		this.global_search_dialog = true; 
			document.getElementById('input_id').focus();
			document.getElementById('input_id').focus();
	}
  }
})
</script>

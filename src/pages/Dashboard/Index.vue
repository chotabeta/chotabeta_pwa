<template>
	<!-- <q-btn id="website_icon" @click="website_selection()" icon="language" dense color="orange-10" round>
			<q-tooltip anchor="top start" self="top right" class="cb-font-12"> Go To Website</q-tooltip>
		</q-btn> -->
	<q-page padding class="animate__animated animate__slideInRight">
		<q-btn class="text-weight-bold  full-width text-center q-py-xs bg-orange-2 q-mb-sm text-orange-8" @click="website_selection()">
		Go To website
		<!-- <q-space></q-space> -->
		<q-icon name="public" size="sm" class="q-px-sm text-orange-8"></q-icon>
		</q-btn>
		<div id="loader2" class="pre-loader" style="display:none"></div>
		<q-input outlined :placeholder="search_box_text" dense @click="my_function()">
			<template v-slot:append> <q-icon name="mic" class="cb-text-orange-8" /></template>
		</q-input>
		<!-- <div class="row">
			<div class="col-10">
				<q-input outlined :placeholder="search_box_text" dense @click="my_function()">
					<template v-slot:append> <q-icon name="mic" class="cb-text-orange-8" /></template>
				</q-input>
			</div>
			<div class="col-2 text-right">
				<q-btn class="full-height shadow-1" @click="website_selection()"  icon="language" color="orange-10">
					<q-tooltip anchor="top start" self="top right" class="cb-font-12"> Go To Website</q-tooltip>
				</q-btn>
			</div>
		</div> -->

		
	<!-- sliders -->
    <div class="full-width">
      <q-carousel animated autoplay infinite swipeable v-model="carousels" style="height:164px;overflow:hidden" class=" q-mt-sm cb-round-borders-10 q-mb-xs" >
        <q-carousel-slide :name="index" class="q-pa-none" style="height:164px;overflow:hidden" v-for="(slide,index ) in sliders" @click="screen_redirection_sliders(slide)">
        	<img :src="slide.image" style="width:100%;height:100%">
        </q-carousel-slide>
      </q-carousel>
    </div>
    <div class="row justify-center">
      <q-icon name="fiber_manual_record" :class="(index == carousels)? 'text-blue-10':'text-grey-6'" v-for="(slide,index ) in sliders" @click='carosel_set(index)'></q-icon>
    </div>

    <!-- website icon -->
    <!-- <q-btn class="text-weight-bold  full-width q-my-xs" color="orange-8" @click="website_selection()">
		Go To website
		<q-space></q-space>
		<q-icon name="language" size="sm"></q-icon>
		</q-btn> -->
		<!-- <q-btn class="text-weight-bold  full-width text-center q-py-xs bg-orange-2 q-my-xs text-orange-8" @click="website_selection()">
		Go To website
		<q-icon name="public" size="sm" class="q-px-sm text-orange-8"></q-icon>
		</q-btn> -->

  <!-- services -->
    <div class="row">
    	<div class="col-6 q-pa-sm no-shadow" v-if="service0" >
    		<q-btn class="fit  cb-round-borders-10 cb-bg-gradient-blue-4 q-pt-sm no-shadow" id="service0" @click="services_menu(service0,0)" v-if="service0.screen_redirection == 0">			
    			<div class="full-width full-height column justify-end items-center">
	    			<img :src="service0.service_image" style="width:100px;height:80px">
	  				<span class="cb-text-blue-8 text-weight-bold cb-font-11 ">{{ service0.name }}</span>
	  			</div>
  			</q-btn>
  			<q-btn class="fit  cb-round-borders-10 cb-bg-gradient-blue-4 q-pt-sm no-shadow" id="service0" disable v-if="service0.screen_redirection == 1">
  				<span class="cb-font-12 q-px-sm absolute-top-left text-weight-bolder text-red">Comming Soon</span>
    			<div class="full-width full-height column justify-end items-center">
	    			<img :src="service0.service_image" style="width:100px;height:80px">
	  				<span class="cb-text-blue-8 text-weight-bold cb-font-11 ">{{ service0.name }}</span>
	  			</div>
  			</q-btn>
  		</div>

  		<div class="col-6 q-pa-sm" v-if="service1">
    		<q-btn class="fit cb-round-borders-10 cb-bg-gradient-orange-4 q-pt-sm no-shadow" id="service1" @click="services_menu(service1,1)" v-if="service1.screen_redirection == 0">
    			<div class="full-width full-height column justify-end items-center">
	    			<img :src="service1.service_image" style="width:100px;height:80px">
	  				<span class="cb-text-blue-8 text-weight-bold cb-font-11 ">{{ service1.name }}</span>
	  			</div>
  			</q-btn>
  			<q-btn class="fit cb-round-borders-10 cb-bg-gradient-orange-4 q-pt-sm no-shadow" id="service1" disable v-if="service1.screen_redirection == 1">
  				<span class="cb-font-12 q-px-sm absolute-top-left text-weight-bolder text-red">Comming Soon</span>
    			<div class="full-width full-height column justify-end items-center">
	    			<img :src="service1.service_image" style="width:100px;height:80px">
	  				<span class="cb-text-blue-8 text-weight-bold cb-font-11 ">{{ service1.name }}</span>
	  			</div>
  			</q-btn>
  		</div>

  		<div class="col-6 q-pa-sm" v-if="service2" >
    		<q-btn class="fit  cb-round-borders-10 cb-bg-gradient-orange-4 q-pt-sm no-shadow" id="service2" @click="services_menu(service2,2)" v-if="service2.screen_redirection == 0">
    			<div class="full-width full-height column justify-end items-center">
	    			<img :src="service2.service_image" style="width:100px;height:80px">
	  				<span class="cb-text-blue-8 text-weight-bold cb-font-11 ">{{ service2.name }}</span>
	  			</div>
  			</q-btn>
  			<q-btn class="fit  cb-round-borders-10 cb-bg-gradient-orange-4 q-pt-sm no-shadow" id="service2" disable v-if="service2.screen_redirection == 1">
  				<span class="cb-font-12 q-px-sm absolute-top-left text-weight-bolder text-red">Comming Soon</span>
    			<div class="full-width full-height column justify-end items-center">
	    			<img :src="service2.service_image" style="width:100px;height:80px">
	  				<span class="cb-text-blue-8 text-weight-bold cb-font-11 ">{{ service2.name }}</span>
	  			</div>
  			</q-btn>
  		</div>

  		<div class="col-6 q-pa-sm " v-if="service3" >
    		<q-btn class="fit  cb-round-borders-10 cb-bg-gradient-orange-4 q-pt-sm no-shadow" id="service3" @click="services_menu(service3,3)" v-if="service3.screen_redirection == 0"> 
    			<div class="full-width full-height column justify-end items-center">
  					<img :src="service3.service_image" style="width:100px;height:80px">
  					<span class="cb-text-blue-8 text-weight-bold cb-font-11 ">{{ service3.name }}</span>
  				</div>
  			</q-btn>
  			<q-btn class="fit  cb-round-borders-10 cb-bg-gradient-orange-4 q-pt-sm no-shadow" id="service3" disable v-if="service3.screen_redirection == 1">
  				<span class="cb-font-12 q-px-sm absolute-top-left text-weight-bolder text-red">Comming Soon</span>
    			<div class="full-width full-height column justify-end items-center">
  					<img :src="service3.service_image" style="width:100px;height:80px">
  					<span class="cb-text-blue-8 text-weight-bold cb-font-11 ">{{ service3.name }}</span>
  				</div>
  			</q-btn>
  		</div>
    </div>

  <!-- categories -->
    <div class="row" v-if="service_details">
    	<div class="col-12 text-center text-weight-bold cb-text-blue-8 q-py-md cb-font-14">{{ service_details.description }}</div>
			<div class="col-3 text-center text-grey-8 " v-for="item in service_details.all_categories" :key="item">
				<q-avatar size="65px" class="shadow-1 bg-grey-2" @click="services_page_redirection(item)">
					<q-avatar size="30px" square>
						<img :src="item.category_image_for_mobile" class="fit">
						<!-- <img src="https://chotabeta.app/dev/testenv/public/uploads/assets/fruits_vegges.png" class="fit"> -->
					</q-avatar>
				</q-avatar>
				<p class="cb-font-12 text-bold q-py-xs">{{ item.name }}</p>
			</div>

			<div class="col-12 justify-center row q-mb-md">
				<q-btn label="see all" @click="$router.push('Services?id='+service_details.id)" size="sm" dense rounded class="cb-text-orange-8 q-px-md"></q-btn>
			</div>
    </div>

  <!-- upcomming offers -->
    <div class="row q-mt-sm">
    	<div class="col-12 cb-text-grey-4 text-weight-bolder" v-if="upcomming_offers.length != 0">Upcoming Offers</div>
    	<div class="col-12" v-if="upcomming_offers.length != 0">
    		<q-carousel v-model="offers" swipeable style="max-height:200px" animated  control-color="primary"  >
			    <q-carousel-slide :name="index"  class="column no-wrap q-px-none" v-for="(slide,index ) in upcomming_offers" >
		        <q-img class="fit rounded-borders" style="height:100%"  :src="slide.image"/>
		      </q-carousel-slide>
		    </q-carousel>
    	</div>
    </div>
    <div class="row coupon-wrap">
    	<div class="col-12 q-px-sm" v-if="top_offers_one" v-for="top in top_offers_one">
    		<img class="fit rounded-borders"   :src="top.image">
    	</div>
    </div>

  <!-- call back request  -->
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

	  <q-dialog v-model="global_search_dialog" persistent :maximized="maximizedToggle" transition-show="slide-up" transition-hide="slide-down">
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
        <q-card-section v-if="!user_search_input">
					<div class="row">
					<span class="text-subtitle1 text-justify">	<b>{{heading_text}}</b></span>
					</div>
					<div class="row" >
						<div class="col-4 text-center q-pa-xs" v-for="tr in trending_searches">
									<q-card dense class="bg-orange-1 q-py-xs no-shadow text-orange-8 full-width border" @click = "user_search_input = tr.name,search_products()" style="border:1px solid #ffe0b2">
										{{tr.name}}
									</q-card>
								</div>
					
					</div>
				</q-card-section>
        <q-card-section class="q-pt-none">
					<div v-for="products in global_search_data" :key="products" @click="go_to_product_page(products)">
         		<div class="row q-py-xs">
			 				<div class="col-2">
				 				<img :src="products.image" style="min-height:50px !important; min-width:50px !important; max-width:50 px !important; max-height:50px;" >
				 			</div>
			 				<div class="col-10">
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
import { scroll } from 'quasar'
const { getScrollTarget, setVerticalScrollPosition } = scroll
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
      xid:ref(null),
      trending_searches:ref([]),
      heading_text:ref(null),
    }
  },
  mounted () {
  	var ps = this;
  	ps.getAccessToken();
  	ps.mypath();
  	setTimeout(function() {
  		ps.getDashboarddata();
  	}, 100);
  },
  methods:{
  	getAccessToken(){
  		var ps = this;
  		if(ps.$store.state.token){ ps.access_token = ps.$store.state.token; }
  		else{	ps.access_token = ps.$store.state.token_cb;	}

  		if(ps.$store.state.xid){ps.xid = ps.$store.state.xid;}
  		else{ps.xid = ps.$store.state.xid_cb;}

  		if(ps.access_token == null ||  !ps.access_token){ ps.$router.push('/');	}
  	},
  	getDashboarddata(){
  		var ps = this;
  		if(ps.$store.state.latlongs){
	  		let formData = new FormData();
	      	formData.append('current_app_version', 1);
	      	formData.append('pincode', ps.$store.state.pincode);
	      	formData.append('base_pincode', 0);
	      	formData.append('base_location', ps.$store.state.latlongs);
	      	formData.append('lat_lng', ps.$store.state.latlongs);
	      	formData.append('playstore_version_name', null);
	      	var loader = document.getElementById('loader2');
	      	loader.style.display="block";
	  		let config = { headers: { Authorization: `Bearer ${ps.access_token}` } };
				ps.$api.post('/api/v4/dashboard-eight',formData,config).then(function (response) {

					loader.style.display="none";
					if(response.data.status_code ==200){
					 	ps.search_box_text = response.data.search_box_text;
					 	ps.top_offers_one  = response.data.top_offers_one;
					 	console.log(ps.top_offers_one);
					 	ps.sliders = response.data.sliders;
					 	ps.service0 = response.data.all_services[0];
					 	ps.service1 = response.data.all_services[1];
					 	ps.service2 = response.data.all_services[2];
					 	ps.service3 = response.data.all_services[3];
					 	ps.upcomming_offers  = response.data.top_offers;
					 	ps.services_menu(ps.service0,0);
					 	// ps.top_offers_one  = response.data.top_offers_one[0];
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
  		sessionStorage.setItem('service',JSON.stringify(data));
  		// console.log(data);

  		const ele = document.getElementById('service0'); // You need to get your element here
      
      const target = getScrollTarget(ele);
      const offset = ele.offsetTop - 10;
      const duration = 400;
      setVerticalScrollPosition(target, offset, duration)


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
  			ps.$router.push('/food');
  		}
  	},
  	services_page_redirection(item){
  		var ps = this;
  		console.log(item);
  		// return false;
  		sessionStorage.setItem('category',JSON.stringify(item));
  		if(item.main_service_id == 2){
  			if( item.screen_redirection == 2 ){
  				ps.$router.push('/PickFromStore_layouts_s1');
  			}else if(item.screen_redirection == 0 ){
  				ps.$router.push('/PickFromStore_layouts_s2');
  			}
  		}else if(item.main_service_id == 1){
  			// console.log(item);
  			if(item.id == 30 && item.service_id == '1' ){
  				ps.PAD_others_Dailog = true;
  			}else if(item.service_id == 3 && item.id== 30) {
				  ps.$router.push('Services?id='+item.service_id);				
				}else{
  				ps.$router.push('/PickAndDrop_s1');
  			}
  		}else if(item.main_service_id == 3){
  			ps.$router.push('/PickAndDrop_s1?s_id=3');
  		}

  	},
  	PAD_others_sunction(){
  		var ps = this;
  		var selectedcategory = JSON.parse(sessionStorage.getItem('category'));
  		selectedcategory.name = ps.PAD_others_category;
  		sessionStorage.setItem('category',JSON.stringify(selectedcategory));
  		// console.log(sessionStorage.getItem('category'),"new category");
  		ps.$router.push('/PickAndDrop_s1');
  	},
  	GetCallBackRequestFunction(){
  		var ps = this;
  		if(ps.xid != 2){
	  		var loader = document.getElementById('loader2');
		    loader.style.display="block";
	  		let config = { headers: { Authorization: `Bearer ${ps.access_token}` } };
				ps.$api.get('/api/get-call?current_location='+ps.$store.state.latlongs,config).then(function (response) {
					loader.style.display="none";
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
			}else{
				ps.$q.notify({ message:"Please Sign In.", type: 'negative',progress: true, });
				ps.$router.push('profile')
			}
  	},
  	screen_redirection_sliders(item){
  		var ps =  this;
  		// console.log(item,'item');
  		// if(item.redirection_enabled == 0){
  		// 	var ps = this;
  		// 	var category = JSON.parse(sessionStorage.getItem('category'));
  		// 	var service = JSON.parse(sessionStorage.getItem('service'));
  		// 	// console.log(category);
  		// 	// console.log(service);
				// category.id = item.category_id;
				// category.main_service_id = service.id;
				// category.name = item.service_name;
				// category.screen_redirection = item.screen_redirection;
				// category.service_id = item.service_id;
				// category.vehicle_type = item.vicinity;
				// service.mode = item.service_mode;
				// sessionStorage.setItem('service',service);
				// ps.services_page_redirection(category);
  		// }
  	},
  	search_products(){
			var ps = this;
  		if(ps.$store.state.latlongs){
	  		if(ps.user_search_input.length > 1){
				  var pincode = sessionStorage.getItem('pincode');
				  var loader = document.getElementById('loader2');
		      	loader.style.display="block";
		  		let formData = new FormData();
		      	formData.append('item_name', ps.user_search_input);
		      	formData.append('page_no', 1);
		      	formData.append('pincode', pincode);
		      	formData.append('lat_lng', ps.$store.state.latlongs);
		  		let config = { headers: { Authorization: `Bearer ${ps.access_token}` } };
					ps.$api.post('/api/global-search',formData,config).then(function (response) {
						loader.style.display="none";
						if(response.data.status_code ==200){
							ps.global_search_data = response.data.products;				 
						}else{
							ps.global_search_data = '';
						 	ps.$q.notify({ message:response.data.message, type: 'negative',progress: true, });
						}
					}).catch(function (error) {
						console.log(error);
						// ps.$q.notify({ message:error, type: 'warning',progress: true, });
					});
			  }else{
				  ps.global_search_data = '';
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
			ps.user_search_input  = '';
			ps.global_search_data  = '';
			ps.global_search_dialog = false;
		},
		my_function(){
			var ps = this;
			this.global_search_dialog = true; 
				  		let formData = new FormData();
		      	formData.append('page_no', 1);
		      	formData.append('service_id', 0);
		      	formData.append('category_id', 0);
		      	formData.append('sub_category_id', "Mango");

				let config = { headers: { Authorization: `Bearer ${ps.access_token}` } };
				ps.$api.get('/api/get-popular-searches', formData,config).then(function (response) {
				
					if(response.data.status_code ==200){
					ps.heading_text = response.data.heading_text;
					ps.trending_searches = response.data.trending_searches;
					 }
					 else{
					 	
					}
				}).catch(function (error) {
					console.log(error);
					// ps.$q.notify({ message:error, type: 'warning',progress: true, });
				});


		},
		mypath(){
			var ps=  this;
			sessionStorage.setItem('mypath','');
			var myallpaths = [];
			myallpaths.push(ps.$route.fullPath);
			sessionStorage.setItem('mypath',JSON.stringify(myallpaths));
		},
		 website_selection(){
    	var ps = this;
    	window.location=  'https://www.chotabeta.com/home.html';
    },
  }
})
</script>
<style scoped>
.coupon-wrap{ flex-wrap: nowrap;overflow: scroll;overflow-y: hidden; }
::-webkit-scrollbar { width: 0;background: transparent; }
::-webkit-scrollbar-thumb {background: transparent;}
#website_icon{
	position: fixed;
	top: 30%;
	right: 2px;
	z-index: 9999;
}
</style>

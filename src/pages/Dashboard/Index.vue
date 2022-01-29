<template>
	<q-page padding>
		<q-input outlined placeholder="Fruits and Vegetables, Grocery..." dense>
			<template v-slot:append> <q-icon name="mic" class="cb-text-orange-8" /></template>
		</q-input>
		<q-carousel v-model="carousels" swipeable style="height:164px" class="shadow-2 q-my-md  cb-round-borders" autoplay navigation animated infinite control-color="primary"  >
			<template v-slot:navigation-icon="{ active, btnProps, onClick }">
        <q-btn v-if="active" size="xs" :icon="btnProps.icon" color="grey-7" flat round dense @click="onClick" />
        <q-btn v-else :icon="btnProps.icon" color="grey-5" class="q-px-none" size="xs" flat round dense @click="onClick" />
      </template>
      <q-carousel-slide :name="index"  class="column no-wrap q-pa-none" v-for="(slide,index ) in sliders" >
        <q-img class="rounded-borders "  :src="slide.image"></q-img>
      </q-carousel-slide>	
    </q-carousel>

    <div class="row">
    	<div class="col-6 col-sm-3 q-pa-sm" v-if="service0" >
    		<q-btn class="fit  cb-round-borders cb-bg-gradient-blue-4" id="service0" @click="services_menu(service0,0)">
    			<div class="fit">
	    			<q-img :src="service0.service_image" style="width:100px"></q-img><br>
	  				<span class="cb-text-blue-8 ">{{ service0.name }}</span>
	  			</div>
  			</q-btn>
  		</div>
  		<div class="col-6 col-sm-3 q-pa-sm" v-if="service1">
    		<q-btn class="fit  cb-round-borders cb-bg-gradient-orange-4" id="service1" @click="services_menu(service1,1)"> 
    			<div class="fit">
	    			<q-img :src="service1.service_image" style="width:100px"></q-img><br>
	  				<span class="cb-text-blue-8">{{ service1.name }}</span>
	  			</div>
  			</q-btn>
  		</div>
  		<div class="col-6 col-sm-3 q-pa-sm" v-if="service2">
    		<q-btn class="fit  cb-round-borders cb-bg-gradient-orange-4">
    			<div class="fit">
	    			<q-img :src="service2.service_image" style="width:100px"></q-img><br>
	  				<span class="cb-text-blue-8">{{ service2.name }}</span>
	  			</div>
  			</q-btn>
  		</div>
  		<div class="col-6 col-sm-3 q-pa-sm" v-if="service3">
    		<q-btn class="fit  cb-round-borders cb-bg-gradient-orange-4">
    			<div class="fit">
	    			<q-img :src="service3.service_image" style="width:100px"></q-img><br>
	  				<span class="cb-text-blue-8">{{ service3.name }}</span>
	  			</div>
  			</q-btn>
  		</div>
    </div>

    <div class="row" v-if="service_details">
    	<div class="col-12 text-center text-weight-bolder cb-text-blue-8 q-py-md cb-font">{{ service_details.description }}</div>
			<div class="col-3 text-center cb-text-grey-4 q-mb-md" v-for="item in service_details.all_categories" :key="item">
						<div class="q-px-sm" style="border-radius: 100%;">
							<q-avatar size="70px" class="shadow-2" @click="services_page_redirection(item)">
								<q-avatar size="50px">
									<img :src="item.category_image_for_mobile" >
								</q-avatar>
							</q-avatar><br>
						<span>{{ item.name }}</span>
						</div>
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

    <div class="call_request rounded-borders q-mx-lg q-my-md" >
    	<q-img src="https://chotabeta.app/dev/testenv/public/uploads/assets/support_girl_we_care.png" width="50px"></q-img>
    	<span class="text-brown text-bold">Need Help?</span>
    	<!-- <q-space></q-space> -->
    	<q-btn label="Get a Call back" icon-right="call" dense flat class="q-ml-sm cb-text-orange-8"></q-btn>
    </div>

	</q-page>
</template>
<script>
import {ref } from 'vue'
import axios from 'axios'
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
				axios.post('https://chotabeta.app/dev/testenv/api/v4/dashboard-six',formData,config).then(function (response) {
					if(response.data.status_code ==200){
					 	ps.sliders = response.data.sliders;
					 	ps.service0 = response.data.all_services[0];
					 	ps.service1 = response.data.all_services[1];
					 	ps.service2 = response.data.all_services[2];
					 	ps.service3 = response.data.all_services[3];
					 	ps.upcomming_offers  = response.data.top_offers; 
					 	ps.top_offers_one  = response.data.top_offers_one[0]; 
					 	console.log(response);
					 	ps.services_menu(ps.service0,0);
					}else{
					 	ps.$q.notify({ message:response.data.message, type: 'negative',progress: true, });
					}
				}).catch(function (error) {
					// ps.$q.notify({ message:error, type: 'warning',progress: true, });
				});	
  		}else{
					ps.$q.notify({ message:"Please Refresh", type: 'warning',progress: true, });
  		}
  	},
  	services_menu(data,card){
  		var ps = this;
  			ps.service_details  = data;
  		if(card == 0){
  			 document.getElementById('service0').classList.add('cb-bg-gradient-blue-4');
  			document.getElementById('service1').classList.remove('cb-bg-gradient-blue-4');
  		}
  		if(card == 1){
  			document.getElementById('service1').classList.add('cb-bg-gradient-blue-4');
  			document.getElementById('service0').classList.remove('cb-bg-gradient-blue-4');
  			document.getElementById('service0').classList.add('cb-bg-gradient-orange-4');
  		}
  	},
  	services_page_redirection(item){
  		var ps = this;
  		// console.log(item);
  		if(item.main_service_id == 2){
  			ps.$router.push('/PickFromStore_layouts_s1?id='+item.id+'&service_id='+item.service_id);
  		}else if(item.main_service_id == 1){
  			ps.$router.push('/PickAndDrop_s1');
  			// ps.$q.notify({ message:"Pick and Drop pages are Not craeted", type: 'warning',progress: true, });
  		}
  	},
  }
})
</script>

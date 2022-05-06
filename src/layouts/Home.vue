<template>
	<q-layout  view="lHh lpr lFf">
		<q-header  >
			<q-toolbar class="cb-bg-white-2 cb-text-blue-8">
				<q-btn flat dense round icon="menu" aria-label="Menu" @click="leftDrawerOpen = !leftDrawerOpen"/>
				<q-btn icon="place" class="q-pa-none cb-font-12" borderless flat :label="$store.state.showaddress" @click="$router.push('dashboard_location')"></q-btn>
				<q-space></q-space>
				<q-btn round dense icon="notifications" flat @click="$router.push('Notification')"> <q-badge  color="red" rounded floating style="margin-top:8px;margin-right: 8px;"></q-badge>
  			</q-btn>
  			<q-btn round dense icon="shopping_cart" flat  @click="$router.push('/PickFromStore_layouts_s3')">
  				<q-badge   class="cb-bg-orange-8" rounded floating >{{ cartlength}}</q-badge>
  			</q-btn>
				<!-- <q-icon name="" size="20px" class="q-px-sm"> <q-badge color="orange" floating>22</q-badge> </q-icon> -->
			</q-toolbar>
		</q-header>
		<q-drawer v-model="leftDrawerOpen" class="cb-bg-white-1" show-if-above bordered>
			<div class="row q-pa-sm q-py-md cb-bg-grey-2 q-ma-sm" style="border: 1px solid #dbdbdb;" @click="profile_settings()">
				<div class="col-4">
					<q-avatar size="70px" class="cb-shadow-1">
						<q-img :src="profile_pic" v-if="profile_pic" width="100px" class="cb-shadow-1"  ></q-img>
						<q-img v-else src="~assets/images/logo.png" width="100px" class="cb-shadow-1"  ></q-img>
					</q-avatar>
				</div>
				<div class="col-8 row items-center">
					<span class="text-bold cb-font-16 cb-text-orange-14"> {{ name }}</span>
					<q-space></q-space>
					<q-btn icon="chevron_right" class="text-grey-7" size="md" flat></q-btn><br>
					<span class="q-pa-sm cb-bg-orange-8 text-white rounded-borders" style="font-size:12px">{{ Address }}</span>
				</div>
			</div>
	    	<q-list>
	        	<q-item clickable v-ripple @click="$router.push('Dashboard')">
        			<q-item-section avatar><q-icon class="cb-text-orange-8" name="home"></q-icon></q-item-section>
        			<q-item-section>Dashboard</q-item-section>
     			 </q-item>
     			 <q-item clickable v-ripple @click="$router.push('Notification')">
        			<q-item-section avatar><q-icon class="cb-text-orange-8" name="notifications"></q-icon></q-item-section>
        			<q-item-section>Notifications</q-item-section>
     			 </q-item> 
     			 <q-item clickable v-ripple @click="$router.push('Orders')" v-if="xid != 2">
        			<q-item-section avatar><q-icon class="cb-text-orange-8" name="format_list_bulleted"></q-icon></q-item-section>
        			<q-item-section>My Orders</q-item-section>
     			 </q-item> 
     			 <q-item clickable v-ripple @click="$router.push('FoodOrders')" v-if="xid != 2">
        			<q-item-section avatar><q-icon class="cb-text-orange-8" name="food_bank"></q-icon></q-item-section>
        			<q-item-section>My Food Orders</q-item-section>
     			 </q-item> 
     			 <q-item clickable v-ripple @click="$router.push('mydrives')" v-if="xid != 2">
        			<q-item-section avatar><q-icon class="cb-text-orange-8" name="electric_bike"></q-icon></q-item-section>
        			<q-item-section>My Drives</q-item-section>
     			 </q-item> 
     			 <q-item clickable v-ripple @click="$router.push('Offers')">
        			<q-item-section avatar><q-icon class="cb-text-orange-8" name="local_offer"></q-icon></q-item-section>
        			<q-item-section>Offers</q-item-section>
     			 </q-item> 
     			 <q-item clickable v-ripple @click="$router.push('Settings')">
        			<q-item-section avatar><q-icon class="cb-text-orange-8" name="settings"></q-icon></q-item-section>
        			<q-item-section>Settings</q-item-section>
     			 </q-item> 
     			 <q-item clickable v-ripple @click="$router.push('ReferAndEarn')" v-if="xid != 2">
        			<q-item-section avatar><q-icon class="cb-text-orange-8" name="monetization_on"></q-icon></q-item-section>
        			<q-item-section>Refer & Earn</q-item-section>
     			 </q-item>
     			 <q-item clickable v-ripple @click="$router.push('WeCareHelp')">
        			<q-item-section avatar><q-icon class="cb-text-orange-8" name="headset"></q-icon></q-item-section>
        			<q-item-section>We Care | Help</q-item-section>
     			 </q-item>
     			 <q-item clickable v-ripple @click="website_selection()">
        			<q-item-section avatar><q-icon class="cb-text-orange-8" name="language"></q-icon></q-item-section>
        			<q-item-section class="text-weight-bolder">WebSite</q-item-section>
     			 </q-item>
	        </q-list>
	       <!--  <span class="row justify-center items-end  q-mt-xl">
	        	<q-btn label="sign Out" icon="logout" class="cb-text-orange-8" flat @click="logout"></q-btn>
	      	</span> -->
	    </q-drawer>
		<q-page-container>
			<div id="loader2" class="pre-loader" style="display:none"></div>
			<q-dialog v-model="location_check" persistent>
				<q-card class="full-width cb-round-borders-20">
					<q-card-section class="text-center">
						<q-avatar class="bg-red">
							<q-icon name="sentiment_dissatisfied" size="xl" class="text-white"></q-icon>
						</q-avatar><br><br>
						<span class="cb-font-16 text-weight-bolder q-my-md"><q-icon size="sm" name="location_on"></q-icon>Service Location Alert</span><br><br>
						<span>{{ pick_not_in_territory }}</span><br>
						<q-btn label="change the location" class="text-red text-bold" flat @click="$router.push('dashboard_location')"></q-btn>
					</q-card-section>
				</q-card>
			</q-dialog>
     		<router-view v-if="location_check != true"/>
    	</q-page-container>
	</q-layout>
</template>
<script>
 	// let isMobile = window.matchMedia("only screen and (max-width: 760px)").matches;
  // if (!isMobile){
  //        window.location="https://chotabeta.com/pwa";
  //   }
import axios from 'boot/axios'
import {ref } from 'vue'
export default ({
  setup(){
    return {
      leftDrawerOpen :ref(false),
      latlongs:ref(null),
      name:ref('User'),
      Address:ref('Unnamed Road HUDA Techno'),
      profile_pic:ref(null),
      location_check:ref(false),
      pick_not_in_territory:ref(null),
      cartlength:ref(0),
      mycart_items:ref([]),
      access_token:ref(null),
      xid:ref(null),
      custom_items:ref([])
    }
  },
  mounted () {
  	this.getToken();
  	if(this.$store.state.token){ 	this.userdetails();	}
  	this.territory_checkup();
  },
  methods:{
  	getToken(){
  		var ps = this ;
  		if(ps.$store.state.token){ ps.access_token = ps.$store.state.token; }
  		else{	ps.access_token = ps.$store.state.token_cb;	}

  		if(ps.$store.state.xid){ps.xid = ps.$store.state.xid;}
  		else{ps.xid = ps.$store.state.xid_cb;}

  		if(ps.access_token == null){
  			ps.$router.push('/');
  		} 
  		if(localStorage.getItem('mycart')){ 
  			ps.mycart_items = JSON.parse(localStorage.getItem('mycart'));
  			ps.cartlength = ps.mycart_items.length;
  		}else{
  			localStorage.setItem('mycart','');
  		}
  		if(localStorage.getItem('custom_item')){
  			ps.custom_items = JSON.parse(localStorage.getItem('custom_item')); 
  			ps.cartlength = ps.cartlength + ps.custom_items.length;
  		}
  	},
  	profile_settings(){
			var ps = this;
			ps.$router.push('profile');
		},
		userdetails(){
      var ps = this;
      var loader = document.getElementById('loader2');
	      	loader.style.display="block";
      let config = { headers: { "Authorization": `Bearer ${ps.access_token}`,}}
      ps.$api.get('/api/user',config).then(function (response) {
      	loader.style.display="none";
      	ps.$store.dispatch('userdetails',{'deatils':response.data }).then(res => {
  		 	}).catch(error => {	ps.$q.notify({ message:error.message, type: 'negative',progress: true, });  });
      	ps.profile_pic =  response.data.profile_pic;
        ps.name = response.data.name;
      }).catch(function (error) {
        console.log(error);
      })
    },
    territory_checkup(){
    	var ps = this;
    	var loader = document.getElementById('loader2');
	      	loader.style.display="block";
    	let config = { headers: { Authorization: `Bearer ${ps.access_token}` } };
    	ps.$api.get('/api/check-territory2?base_location='+ps.$store.state.latlongs+'&base_pincode=0&cache_hash=&l_number=&lat_lng='+ps.$store.state.latlongs+'&pincode='+ps.$store.state.pincode+'&playstore_version_name=&xid='+ps.xid,config).then(function (response) {
    		loader.style.display="none";
      	// console.log(response,'territory');
      	if(response.data.change_location_button_status == 1){
      		ps.pick_not_in_territory =  response.data.pick_not_in_territory;
      		ps.location_check = true;
      	}else{
      		ps.location_check = false;
      	}
      }).catch(function (error) {
        console.log(error);
      })
    },
    website_selection(){
    	var ps = this;
    	window.location=  'https://www.chotabeta.com/pwa';
    },

  }
})
</script>
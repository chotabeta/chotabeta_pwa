<template>
	<q-layout  view="lHh lpr lFf">
		<q-header  >
			<q-toolbar class="cb-bg-white-2 cb-text-blue-8">
				<q-btn flat dense round icon="menu" aria-label="Menu" @click="leftDrawerOpen = !leftDrawerOpen"/>
				<q-btn icon="place" class="q-pa-none" flat :label="$store.state.latlongs"></q-btn>
				<q-space></q-space>
				<q-btn round dense icon="notifications" flat @click="$router.push('Notification')"> 
    			<q-badge  color="red" rounded floating style="margin-top:8px;margin-right: 8px;"></q-badge>
  			</q-btn>
  			<q-btn round dense icon="shopping_cart" flat>
    			<q-badge   class="cb-bg-orange-8" rounded floating >0</q-badge>
  			</q-btn>
				<!-- <q-icon name="" size="20px" class="q-px-sm"> <q-badge color="orange" floating>22</q-badge> </q-icon> -->
			</q-toolbar>
		</q-header>
		<q-drawer v-model="leftDrawerOpen" class="cb-bg-white-1" show-if-above bordered>
			<div class="row q-pa-sm q-py-md cb-bg-grey-2 q-ma-sm shadow-1" @click="profile_settings()">
				<div class="col-4">
					<q-avatar size="70px" class="shadow-5">
						<q-img :src="profile_pic" v-if="profile_pic" width="100px" class="shadow-5 "  ></q-img>
						<q-img v-else src="~assets/images/logo.png" width="100px" class="shadow-5 "  ></q-img>
					</q-avatar>
				</div>
				<div class="col-8 row items-center">
					<span class="text-bold text-h6 cb-text-orange-14"> {{ name }}</span>
					<q-space></q-space>
					<q-btn icon="chevron_right" class="text-grey-7" flat></q-btn><br>
					<span class="q-pa-sm cb-bg-orange-8 text-white rounded-borders" style="font-size:12px">{{ Address }}</span>
				</div>
			</div>
	    	<q-list>
	        	<q-item clickable v-ripple @click="$router.push('Dashboard')">
        			<q-item-section avatar><q-icon class="cb-text-orange-8" name="home"></q-icon></q-item-section>
        			<q-item-section class="text-italic">Dashboard</q-item-section>
     			 </q-item>
     			 <q-item clickable v-ripple @click="$router.push('Notification')">
        			<q-item-section avatar><q-icon class="cb-text-orange-8" name="notifications"></q-icon></q-item-section>
        			<q-item-section class="text-italic">Notifications</q-item-section>
     			 </q-item> 
     			 <q-item clickable v-ripple @click="$router.push('Orders')">
        			<q-item-section avatar><q-icon class="cb-text-orange-8" name="format_list_bulleted"></q-icon></q-item-section>
        			<q-item-section class="text-italic">My Orders</q-item-section>
     			 </q-item> 
     			 <q-item clickable v-ripple @click="$router.push('FoodOrders')">
        			<q-item-section avatar><q-icon class="cb-text-orange-8" name="food_bank"></q-icon></q-item-section>
        			<q-item-section class="text-italic">My Food Orders</q-item-section>
     			 </q-item> 
     			 <q-item clickable v-ripple @click="$router.push('Offers')">
        			<q-item-section avatar><q-icon class="cb-text-orange-8" name="local_offer"></q-icon></q-item-section>
        			<q-item-section class="text-italic">Offers</q-item-section>
     			 </q-item> 
     			 <q-item clickable v-ripple @click="$router.push('Settings')">
        			<q-item-section avatar><q-icon class="cb-text-orange-8" name="settings"></q-icon></q-item-section>
        			<q-item-section class="text-italic">Settings</q-item-section>
     			 </q-item> 
     			 <q-item clickable v-ripple @click="$router.push('ReferAndEarn')">
        			<q-item-section avatar><q-icon class="cb-text-orange-8" name="monetization_on"></q-icon></q-item-section>
        			<q-item-section class="text-italic">Refer & Earn</q-item-section>
     			 </q-item>
     			 <q-item clickable v-ripple @click="$router.push('WeCareHelp')">
        			<q-item-section avatar><q-icon class="cb-text-orange-8" name="headset"></q-icon></q-item-section>
        			<q-item-section class="text-italic">We Care | Help</q-item-section>
     			 </q-item>
	        </q-list>
	       <!--  <span class="row justify-center items-end  q-mt-xl">
	        	<q-btn label="sign Out" icon="logout" class="cb-text-orange-8" flat @click="logout"></q-btn>
	      	</span> -->
	    </q-drawer>
		<q-page-container>
     		<router-view />
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
      leftDrawerOpen :ref(false),
      latlongs:ref(null),
      name:ref(null),
      Address:ref('Unnamed Road HUDA Techno'),
      profile_pic:ref(null),
    }
  },
  mounted () {
  	this.getToken();
  	this.getLocation();
  	this.userdetails();
  },
  methods:{
  	getToken(){
  		var ps = this ;
  		ps.access_token = ps.$store.state.token;
  		if(ps.access_token == null){
  			ps.$router.push('/');
  		}  
  	},
  	getLocation() {
  		var ss =  this;
  		if (navigator.geolocation) { navigator.geolocation.getCurrentPosition(this.showPosition, this.showError);}
  		 else { ps.$q.notify({ message:"Geolocation is not supported by this browser.", type: 'Warning',progress: true, }); }	
		},
		showPosition(position) {
			var ps = this;
			ps.$store.dispatch('latlongs_data',{'position': position.coords }).then(res => {
	  		 }).catch(error => {
	          	
	       });
			// var location =ref(position.coords.latitude +','+ position.coords.longitude);
			// ps.latlongs = location.value
		},
		showError(error) {
		  var ps = this;
		  switch(error.code) {
		    case error.PERMISSION_DENIED:
		    	ps.$q.notify({ message:"User denied the request for Geolocation.", type: 'Warning',progress: true, });
		     	break;
		    case error.POSITION_UNAVAILABLE:
		      	ps.$q.notify({ message:"Location information is unavailable.", type: 'Warning',progress: true, });
		     	break;
		    case error.TIMEOUT:
		      	ps.$q.notify({ message:"The request to get user location timed out.", type: 'Warning' ,progress: true,});
		     	break;
		    case error.UNKNOWN_ERROR:
		     	ps.$q.notify({ message:"An unknown error occurred.", type: 'Warning',progress: true, });
		     	break;
		  }
		},
		
		profile_settings(){
			var ps = this;
			ps.$router.push('profile');
		},
		userdetails(){
      var ps = this;
      let config = { headers: { "Authorization": `Bearer ${ps.access_token}`,}}
      axios.get('https://chotabeta.app/dev/testenv/api/user',config).then(function (response) {
      	ps.profile_pic =  response.data.profile_pic;
        ps.name = response.data.name;
      }).catch(function (error) {
        console.log(error);
      })
    },
  }
})
</script>
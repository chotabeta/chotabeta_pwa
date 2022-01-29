<template>
	<q-layout  view="lHh lpr lFf">
		<q-header  >
			<q-toolbar class="cb-bg-white-2 cb-text-blue-8">
				<q-btn flat dense round icon="arrow_back"  @click="$router.push('/home/dashboard')"/>
				<q-btn icon="place" class="q-pa-none" flat :label="$store.state.latlongs"></q-btn>
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
      latlongs:ref(null),
      name:ref(null),
      Address:ref('Unnamed Road HUDA Techno'),
      profile_pic:ref(null),
    }
  },
  mounted () {
  	this.getToken();
  },
  methods:{
  	getToken(){
  		var ps = this ;
  		ps.access_token = ps.$store.state.token;
  		if(ps.access_token == null){
  			ps.$router.push('/');
  		}  
  	},
  	
  }
})
</script>
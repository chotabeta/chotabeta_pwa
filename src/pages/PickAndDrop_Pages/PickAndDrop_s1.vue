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
    <q-page class="q-pb-sm q-px-sm">
		  <q-carousel v-model="carousels" swipeable style="height:164px" class="cb-shadow-1 q-my-md cb-round-borders-10" navigation animated infinite control-color="primary">
			  <template v-slot:navigation-icon="{ active, btnProps, onClick }">
      		<q-btn v-if="active" size="xs" :icon="btnProps.icon" color="red-7" flat round dense @click="onClick" />
      		<q-btn v-else :icon="btnProps.icon" color="grey-5" class="q-px-none" size="xs" flat round dense @click="onClick" />
   		  </template>
     	  <q-carousel-slide :name="index"  class="column no-wrap q-pa-none" v-for="(offer,index ) in sliders" :key="offer" >
        	<q-img class="rounded-borders "  :src="offer.link"></q-img>
      	</q-carousel-slide>
      </q-carousel>
      <q-form class="full-height" @submit="$router.push('PickAndDrop_Checkout')">
        <div class="row">
          <div class="col-12 row">
            <div class="col-1"><q-checkbox color="orange-8"></q-checkbox></div>
            <div class="col-11 q-px-md column justify-center cb-text-blue-8 text-bold">Pickup Address</div>
          </div> 
          <div class="col-12 row">
            <div class="col-1 column items-center justify-center q-pl-xs text-bold"><span style="transform: rotate(90deg);">.........</span></div>
            <div class="col-11 q-px-md ">
              <div class="cb-shadow-1 q-px-sm row items-center cb-round-borders-10" @click="$router.push('Search_location')" style="min-height:70px">
                <q-space></q-space>
                <q-icon name="search" class="text-right text-bold cb-text-orange-8" size="sm"></q-icon>
              </div>
            </div>
          </div> 
          <div class="col-12 row">
            <div class="col-1"><q-checkbox color="grey-8"></q-checkbox></div>
            <div class="col-11 q-px-md column justify-center cb-text-blue-8 text-bold">Delivery Address</div>
          </div>
          <div class="col-12 row">
             <div class="col-1 column items-center justify-center q-pl-xs text-bold"><span style="transform: rotate(90deg);">.........</span></div>
            <div class="col-11 q-px-md ">
              <div class="cb-shadow-1 q-px-sm row items-center cb-round-borders-10" @click="$router.push('Search_location')" style="min-height:70px">
                <q-space></q-space>
                <q-icon name="search" class="text-right text-bold cb-text-orange-8" size="sm"></q-icon>
              </div>
            </div>
          </div> 
          <div class="col-12 row">
            <div class="col-1"><q-checkbox color="grey-8"></q-checkbox></div>
            <div class="col-11 q-px-md column justify-center cb-text-blue-8 text-bold">Any Instructions</div>
          </div>
          <div class="col-12 row">
            <div class="col-1"></div>
            <div class="col-11 q-px-md">
              <div class="cb-shadow-1 cb-round-borders-10 q-px-sm">
                <q-input borderless dense placeholder="E.g Please call before delivery"></q-input>
              </div>
            </div>
          </div>
        </div>
        <div class="row justify-center q-mt-xl q-pt-xl">
          <q-btn type="submit" class="q-px-lg cb-bg-orange-8 text-white" label="Confirm"></q-btn>
        </div>
      </q-form>
	</q-page>
</q-page-container>
</q-layout>
</template>

<script>
import axios from 'axios'
import {ref } from 'vue'
export default ({
  setup(){
    return {
    	access_token:ref(null),
    	sliders:ref(null),
    	carousels:ref(0),
      step: ref(1,2,3),
    }
  },
  mounted () {
  	this.getToken();
    this.pickanddrop_sliders();
    
  },
  methods:{
  	getToken(){
  		var ps = this ;
  		ps.access_token = ps.$store.state.token;
  		if(ps.access_token == null){
  			ps.$router.push('');
  		}
  	},
  	pickanddrop_sliders(){
  		var ps = this;
      if(localStorage.getItem('service')){
      console.log(localStorage.getItem('service'))
    }
  		let config = { headers: { "Authorization": `Bearer ${ps.access_token}`,}}
      	axios.get('https://chotabeta.app/dev/testenv/api/pick-and-drop-sliders',config).then(function (response) {
      		console.log('response');
      		ps.sliders =  response.data.sliders;
      	}).catch(function (error) {
       		console.log(error);
      	})
  	},
  }
})
</script>
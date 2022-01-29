<template>
	<q-page class="q-pb-sm q-px-sm">
		<q-carousel v-model="carousels" swipeable style="height:164px" class="shadow-2 q-my-md cb-round-borders" navigation animated infinite control-color="primary">
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
            <div class="col-11 q-px-md column justify-center cb-text-blue-8 text-bold">
              <div class="shadow-3 rounded-borders" @click="$router.push('Search_location')" style="min-height:70px"></div>
              <!-- <q-input outlined>
                <template v-slot:append> <q-icon name="search" class="cb-text-orange-8" /> </template>
              </q-input> -->
            </div>
          </div> 
          <div class="col-12 row">
            <div class="col-1"><q-checkbox color="grey-8"></q-checkbox></div>
            <div class="col-11 q-px-md column justify-center cb-text-blue-8 text-bold">Delivery Address</div>
          </div>
          <div class="col-12 row">
             <div class="col-1 column items-center justify-center q-pl-xs text-bold"><span style="transform: rotate(90deg);">.........</span></div>
            <div class="col-11 q-px-md column justify-center cb-text-blue-8 text-bold">
             <div class="shadow-3 rounded-borders" @click="$router.push('Search_location')" style="min-height:70px"></div>
             <!--  <q-input outlined>
                <template v-slot:append> <q-icon name="search" class="cb-text-orange-8" /> </template>
              </q-input> -->
            </div>
          </div> 
          <div class="col-12 row">
            <div class="col-1"><q-checkbox color="grey-8"></q-checkbox></div>
            <div class="col-11 q-px-md column justify-center cb-text-blue-8 text-bold">Any Instructions</div>
          </div>
          <div class="col-12 row">
            <div class="col-1 column items-center"></div>
            <div class="col-11 q-px-md column justify-center cb-text-blue-8 text-bold">
              <q-input outlined></q-input>
            </div>
          </div>
        </div>
        <div class="row justify-center q-mt-xl q-pt-xl">
          <q-btn type="submit" class="q-px-lg cb-bg-orange-8 text-white" label="Confirm"></q-btn>
        </div>
      </q-form>
	</q-page>
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
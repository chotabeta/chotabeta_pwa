<template>
  <q-layout view="lHh lpr lFf">
    <q-header>
      <q-toolbar class="cb-bg-white-2 cb-text-blue-8">
        <q-btn  flat dense round icon="arrow_back" @click="$router.push('/home/dashboard')"/>
        <q-space></q-space>
        <span class="cb-text-blue-4 text-subtitle2 text-weight-bolder">0 Item Added</span>
        <q-space></q-space>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <q-page class="q-pa-md">
      	<q-card class="cb-round-borders">
      		<q-card-section class="q-pa-none q-px-md q-pt-md">
      		  <div class="shadow-1 cb-round-borders-20 q-mb-sm q-px-sm">
      			<q-input rounded  dense placeholder="Item Name" borderless>
                  <template v-slot:prepend><q-icon name="filter_list" color="orange-8" /></template>
            	</q-input>
              </div>
              <div class="shadow-1 cb-round-borders-20 q-mb-sm  q-px-sm">
      			<q-input rounded  dense placeholder="Quality" borderless>
                  <template v-slot:prepend><q-icon name="line_weight" color="orange-8" /></template>
            	</q-input>
              </div>
              <div class="shadow-1 cb-round-borders-20 q-mb-sm flex  q-px-sm">
      			<q-input rounded  dense placeholder="Weight (Optional)" borderless>
                  <template v-slot:prepend><q-icon name="line_weight" color="orange-8" /></template>
            	</q-input>
            	<q-space></q-space>
            	<q-select color="purple-12" v-model="weight" :options="options" borderless dense class="text-italic"></q-select>
              </div>
              <div class="shadow-1 cb-round-borders-20 q-mb-sm  q-px-sm">
      			<q-input rounded  dense placeholder="Discription (Optional)" borderless></q-input>
              </div>
              <div class="">
              	<q-btn label="Add more items" icon-right="add" class="cb-text-orange-8 q-pa-none" flat></q-btn>
              </div>
      		</q-card-section>
      	</q-card>
      	<q-card class="q-my-md cb-round-borders">
      	  <q-card-section class="cb-bg-grey-3 cb-text-blue-8 text-weight-bolder cb-font q-py-sm">
      		<span>Items Added</span>
      	  </q-card-section>
      	  <q-card-section>
      	  	
      	  </q-card-section>
      	</q-card>	
      	<div class="text-center">
      		<q-btn label="Save" class="cb-bg-orange-8 text-white q-px-xl"></q-btn>
      	</div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>
<script>
let isMobile = window.matchMedia("only screen and (max-width: 760px)").matches;
if (!isMobile){
     window.location="https://chotabeta.com/pwa";
}
import axios from 'boot/axios'
import {ref } from 'vue'
export default ({
  setup(){
    return {
    	weight:ref('ml'),
    	options:['ml', 'lt', 'Kg', 'gm', 'pcs']	
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
  			ps.$router.push('');
  		}  	
  	},	
  	pickfromstore_redirection(item){
  		var ps = this;
  		console.log(item);
  		ps.$router.push('/PickFromStore_layouts_s2?combinations='+item);
  	}
  }
})
</script>
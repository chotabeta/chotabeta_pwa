<template>
  <q-layout  view="lHh lpr lFf" >
    <q-header  style="background: transparent;">
      <q-toolbar>
        <q-btn icon="chevron_left" flat class="cb-text-grey-4 q-px-none" @click="Screen_Back_Redirection()"></q-btn>
        <q-space></q-space>
        <span class="cb-text-orange-8 text-bold cb-font-16">Rate & Review </span>
        <q-space></q-space>
      </q-toolbar>
    </q-header>
	<q-page-container class="animate__animated animate__slideInRight">
	  <q-page class="q-px-md">
	  	<div class="row justify-center q-mt-xl">
  	  	  <q-avatar square size="80px" class="cb-round-borders-10 shadow-9">
  	  		<img src="~assets/images/logo.png">	  
  	  	  </q-avatar>
  	  	</div>
  	  	<p class="text-center q-py-md">
  	  	  <span class="text-bold q-pr-lg">Order Id:</span>
  	  	  <span>{{ $route.query.order_id }}</span>
  	  	</p>
  	  	<q-card class="cb-round-borders-20">
  	  	  <q-card-section class="text-center text-bold bg-grey-3 q-pa-sm text-blue-10">
  	  	   How Would You Rate Our Service? 
  	  	  </q-card-section>
  	  	  <q-card-section class="text-center">  
            <div class="q-gutter-y-md column items-center q-mb-sm">
              <q-rating v-model="ratingModel" size="3.5em" color="blue-10" icon="star" icon-selected="star"/>
            </div>
  	  	  	<div class="text-grey-6">Tap the Number Of Stars You'd give us on This Order.</div>
  	  	  </q-card-section>
  	  	</q-card>
  	  	<p class="text-blue-10 text-bold q-pt-lg">Review Our Serice</p>
  	  	<p class="text-bold cb-text-grey-4">It was Good. FAst Delivery.</p>
  	  	<div class="row justify-center">
  	  	  <q-btn label="submit" color="orange-8" @click="submitrating"></q-btn>
  	  	</div>
	  </q-page>
	</q-page-container>
	</q-layout>
</template>
<script>
import axios from 'boot/axios'
import {ref } from 'vue'
export default ({
  setup(){
    return {
      access_token:ref(null),
      xid:ref(null),
      order_id:ref(null),
      ratingModel:ref(0)
    }
  },
  mounted () {
    this.getToken();
    this.mypath();
  },
  methods:{
    getToken(){
      var ps = this ;
      if(ps.$store.state.token){ ps.access_token = ps.$store.state.token; }
      else{ ps.access_token = ps.$store.state.token_cb; }
      
      if(ps.$store.state.xid){ps.xid = ps.$store.state.xid;}
      else{ps.xid = ps.$store.state.xid_cb;}
      
      if(ps.access_token == null){  ps.$router.push('/');}  
    },
    submitrating(){
      var ps = this;
      var loader = document.getElementById('loader2');
      let formData = new FormData;
      formData.append("rating", ps.ratingModel+'.0');
      formData.append("review", 'It was Good. FAst Delivery.');
      formData.append("to_id", ps.$route.query.order_id);
      formData.append("order_id", ps.$route.query.order_id);
      
      loader.style.display="block";
      let config = { headers: { Authorization: `Bearer ${ps.access_token}` } };
      ps.$api.post('/api/give-order-review',formData,config).then(function (response) {

        loader.style.display="none";
        console.log(response,"api/food-orders")
        if(response.data.status_code ==200){
            ps.$q.notify({ message:response.data.message, type: 'positive',progress: true, });
            ps.$router.push('FoodOrders');
          }else{
          ps.$q.notify({ message:response.data.message, type: 'negative',progress: true, });
        }
      }).catch(function (error) {
        console.log(error);
        // ps.$q.notify({ message:error, type: 'warning',progress: true, });
      });
    }, 
    mypath(){
      var ps=  this;
      var myallpaths = [];
      var i = 0;
      if(sessionStorage.getItem('mypath')){
        myallpaths = JSON.parse(sessionStorage.getItem('mypath'));
      }
      myallpaths.forEach(( path,index ) => {
        if(ps.$route.fullPath == path){
          if(i == 0){ i = index; }
        }
      });
      if(i == 0){
        myallpaths.push(ps.$route.fullPath);
      }else{
        for(var j=1;j<= myallpaths.length;++j){
          if(j<=i){ }else{ myallpaths.splice(j,1); }
        }
      }
      sessionStorage.setItem('mypath',JSON.stringify(myallpaths));
    },
    Screen_Back_Redirection(){
      var ps = this;
      var myallpaths = JSON.parse(sessionStorage.getItem('mypath'));
      var previous = myallpaths.length;
      ps.$router.push(myallpaths[previous-2]);
    }   
  }
})
</script>
<template>
  <q-layout view="lHh lpr lFf" >

    <q-header>
      <q-toolbar class="cb-bg-white-2 cb-text-blue-8">
        <q-btn flat dense round icon="arrow_back"  @click="Screen_Back_Redirection()"/>
        <q-btn icon="place" class="q-pa-none cb-font-12" borderless flat :label="$store.state.showaddress" @click="$router.push('dashboard_location')"></q-btn>
        <q-space></q-space>
        <q-btn round dense icon="notifications" flat @click="$router.push('Notification')"> 
            <q-badge  color="red" rounded floating style="margin-top:8px;margin-right: 8px;"></q-badge>
          </q-btn>
          <q-btn round dense icon="shopping_cart" flat>
            <q-badge   class="cb-bg-orange-8" rounded floating >0</q-badge>
          </q-btn>
      </q-toolbar>
      <div class="flex cb-bg-white-2 flex-center cb-font-16 text-weight-bolder">
        <span class="cb-text-orange-8">Rate & Review</span>
      </div>
    </q-header>

    <q-page-container class="animate__animated animate__slideInRight">  
      <q-page class="flex flex-center q-px-lg">

      <div>
        <div class="cb-font-16 text-weight-bolder text-center">
          <q-avatar class="shadow-1" size="90px">
            <img src="https://chotabeta.com/icons/Group%202.png" />
          </q-avatar><br><br>
          <span class="cb-text-grey-5 cb-font-12 text-weight-bolder">Order Id : 
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; HYH3834173</span>
        </div>
        <q-card class="text-center cb-round-borders-10 q-my-md cb-shadow-1">
          <q-card-section class="bg-grey-2 cb-text-blue-8 q-py-sm text-weight-bolder">
            <span>How Would You Rate Our Service?</span>
          </q-card-section>
          <q-card-section class="q-py-md">
            <div class="row item-center justify-center">
              <q-icon size="lg" class="cb-text-grey-4" name="star"></q-icon>
              <q-icon size="lg" class="cb-text-grey-4" name="star"></q-icon>
              <q-icon size="lg" class="cb-text-grey-4" name="star"></q-icon>
              <q-icon size="lg" class="cb-text-grey-4" name="star"></q-icon>
              <q-icon size="lg" class="cb-text-grey-4" name="star"></q-icon>
            </div>
          <span class="cb-text-grey-4 cb-font-12">Tap the Number Of Stars you'd give us on This Order</span>
        </q-card-section>
      </q-card>
      <div class="cb-font-15 text-weight-bolder">
        <span class="cb-text-blue-8">Review Our Service</span>
      </div>
      <div class="text-center">
        <div class="shadow-1 cb-round-borders-10 q-px-sm q-my-sm">
          <q-input borderless dense placeholder="It was Good, Fast Delivery"></q-input>
        </div>
      	<q-btn label="Submit" class="cb-bg-orange-8 text-white q-px-lg"></q-btn>
  	  </div>
    </div>
  </q-page>

    </q-page-container>
  </q-layout>
</template>
<script>
import axios from 'boot/axios'
import { ref } from 'vue'

export default {
  setup () {
    return {
     access_token:ref(null),
     xid:ref(null),
    }
  },
  mounted () {
    this.gettoken();
    this.mypath();
  },
  methods:{
    gettoken(){
      var ps = this;
      if(ps.$store.state.token){ ps.access_token = ps.$store.state.token; }
      else{ ps.access_token = ps.$store.state.token_cb; }

      if(ps.$store.state.xid){ps.xid = ps.$store.state.xid;}
      else{ps.xid = ps.$store.state.xid_cb;}

      if(ps.access_token == null ||  !ps.access_token){ ps.$router.push('/'); }
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
}
</script>
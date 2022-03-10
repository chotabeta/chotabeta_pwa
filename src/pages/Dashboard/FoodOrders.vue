<template>
  <q-layout  view="lHh lpr lFf">
    <q-header  style="background: transparent;">
      <q-toolbar>
        <q-btn icon="chevron_left" flat class="cb-text-grey-4 q-px-none" @click="$router.push('/home/')"></q-btn>
        <q-space></q-space>
        <span class="cb-text-grey-4">My Order Details</span>
        <q-space></q-space>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <q-page  >
        <div class="row items-center justify-center">
          <q-img src="https://chotabeta.app/dev/testenv/public/imgs/viewOrder.png" width="60%" />
        </div>
        <div class="q-mx-md q-pa-sm q-my-sm cb-bg-orange-2 cb-round-borders" >
          <q-tabs v-model="food_tab" active-class="cb-bg-white-1 cb-text-blue-6" class="cb-text-orange-8" indicator-color="transparent" outline rounded dense>
            <q-tab name="active" label="Active" ></q-tab>
            <q-tab name="done" label="Done" ></q-tab>
            <q-tab name="schedule" label="Scheduled" ></q-tab>
          </q-tabs>
        </div>
        <q-tab-panels v-model="food_tab" animated class="text-center">
          <q-tab-panel name="active">
             <q-img  src="https://chotabeta.app/dev/testenv/public/imgs/Group_90.png" width="60%"/>
          </q-tab-panel>
          <q-tab-panel name="done">
            <q-img  src="https://chotabeta.app/dev/testenv/public/imgs/Group_90.png" width="60%"/>
          </q-tab-panel>
          <q-tab-panel name="schedule">
            <q-img  src="https://chotabeta.app/dev/testenv/public/imgs/Group_90.png" width="60%"/>
          </q-tab-panel>
        </q-tab-panels>

       <!--  <div class="row items-center justify-center">
        <q-space></q-space>
        <q-img
            src="https://chotabeta.app/dev/testenv/public/imgs/Group_90.png"
            style="height: 140px; max-width: 210px"
          >
          </q-img>
          <q-space></q-space>
      </div> -->
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
      food_tab:ref('active'),
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
<style>
.q-tab {  border-radius: 10px; }
</style>
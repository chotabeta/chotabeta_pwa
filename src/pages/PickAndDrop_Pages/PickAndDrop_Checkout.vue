<template>
  <q-layout  view="lHh lpr lFf">
    <q-header>
      <q-toolbar class="cb-bg-white-2 cb-text-blue-8">
        <q-btn flat dense icon="arrow_back" @click="$router.push('/home/dashboard')"/>
        <q-btn icon="place" class="q-pa-none" size="sm" flat label="HUDA Techno Enclave, HITEC City"></q-btn>
        <q-space></q-space>
        <q-btn dense icon="notifications" flat @click="$router.push('Notification')">
          <q-badge color="red" rounded floating style="margin-top: 8px; margin-right: 8px"></q-badge>
        </q-btn>
        <q-btn round dense icon="shopping_cart" flat>
          <q-badge class="cb-bg-orange-8" rounded floating>0</q-badge>
        </q-btn>
      </q-toolbar>
      <div class="text-center cb-bg-white-2 text-weight-bolder cb-font-16 q-pb-xs">
        <span class="cb-text-orange-8">Summary</span>
      </div>
    </q-header>
    <q-page-container>
      <q-page class="q-px-md q-py-sm">
        <q-card class="cb-round-borders-10 cb-shadow-2">
          <q-card-section class="text-grey-8">
            <div class="row" >
              <div class="col-12 q-py-sm text-weight-bolder">
                <q-icon name="location_on" class="cb-text-orange-8" size="sm"></q-icon>
                <span class="q-px-sm text-weight-bolder">Pick location</span>
                <q-icon name="edit" size="xs"></q-icon>
                <q-icon name="calendar_today" size="xs" class="cb-text-orange-8 q-px-sm"></q-icon>
                <span class="cb-font-10">Thu 27, Jan 22 | 4:39Pm</span>
              </div>
              <div class="col-1 column items-center justify-center text-weight-bolder">
                <span style="transform: rotate(90deg);line-height: 0px;">.........</span>
              </div>
              <div class="col-11 cb-font-12">
                Full address means the facility's street name and number; suite/unit number, as appropriate; city; Province or State as appropriate;
              </div>
              <div class="col-12 q-py-sm">
                <q-icon name="location_on" class="cb-text-orange-8" size="sm"></q-icon>
                <span class="q-px-sm text-weight-bolder">Drop location</span>
                <q-icon name="edit" size="xs">
                </q-icon>
              </div>
              <div class="col-1"></div>
              <div class="col-11 cb-font-12">
                Full address means the facility's street name and number; suite/unit number, as appropriate; city; Province or State as appropriate;
              </div>
            </div>
          </q-card-section>
        </q-card>

        <div class="cb-shadow-1 q-px-lg q-my-md flex row items-center cb-round-borders-10">
          <span class="cb-text-blue-6 text-bold">Subscription</span><q-space></q-space>
          <q-toggle color="orange" v-model="toggle" @click="Subscription_function"></q-toggle>
        </div>

        <div class="row items-center justify-center q-pb-sm">
          <q-img src="https://chotabeta.app/dev/testenv/public/imgs/google-maps-48.png" width="30px" height="25px"/>
          <span class="cb-font text-weight-bolder q-py-sm"><u>see locations on Map</u></span>
        </div>
        
        <q-card style="border:1px solid grey" class="cb-round-borders-10 cb-shadow-1">
          <q-card-section class="cb-bg-grey-2 cb-text-blue-8 q-pa-sm cb-font-16 text-weight-bolder text-center">
            <span>Deliverying - Drive Me</span>
          </q-card-section>
          <q-card-section class="cb-font-16 text-grey-9">
            <div class="flex q-pt-xs"> Total Distance<q-space></q-space>8</div>
            <div class="flex q-pt-xs">Estimated time<q-space></q-space>44 min.</div>
            <div class="flex q-pt-xs">Delivery Charges<q-space></q-space>Rs. 40</div>
            <div class="flex q-pt-xs">Tax & Fees<q-space></q-space>8</div>
            <div class="flex q-pt-xs text-weight-bolder">Total<q-space></q-space>48</div>
          </q-card-section>
        </q-card>
    
        <div class="flex q-py-md">
          <div class="cb-shadow-1 cb-round-borders-10 bg-white q-px-sm" style="width:75%">
            <q-input dense placeholder="ENTER COUPON CODE" borderless @click="$router.push('Coupons')">
              <template v-slot:prepend>
                  <q-avatar><img src="https://chotabeta.app/dev/testenv/public/imgs/discount_1.png"></q-avatar>
              </template>
            </q-input>
          </div>
          <q-btn label="apply" class="cb-bg-orange-8 text-white q-ml-sm" style="width:22%"></q-btn>
        </div>
        
        <div class="row justify-center">
          <q-btn label="Pay now"  class="cb-bg-orange-8 text-white q-px-xl"></q-btn>
        </div>

        <q-dialog v-model="calander_dailog">
          <q-card class="q-dialog-plugin">
            <q-date v-model="model" mask="YYYY-MM-DD HH:mm" color="orange" class="fit"></q-date>
            <q-card-actions align="right">
              <q-btn flat label="cancel" @click="calander_dailog = false"></q-btn>
              <q-btn flat label="Ok"></q-btn>
            </q-card-actions>
          </q-card>
        </q-dialog>

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
      toggle:ref(false),
      calander_dailog:ref(false),
      model:ref(null)

    }
  },
   mounted () {
    this.getToken();
  },
  methods:{
    getToken(){
      var ps = this ;
      ps.access_token = ps.$store.state.token;
      if(ps.access_token == null){ ps.$router.push(''); }
    },
    Subscription_function(){
      var ps = this;
      if ( ps.toggle == true){
        ps.calander_dailog = true;
      }
    },
  }
})
</script>
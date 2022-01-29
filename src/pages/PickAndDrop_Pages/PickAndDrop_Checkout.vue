<template>
  <q-layout  view="lHh lpr lFf">
    <q-header>
      <q-toolbar class="cb-bg-white-2 cb-text-blue-8">
        <q-btn flat dense icon="arrow_back" @click="$router.push('/home/dashboard')"/>
        <q-btn icon="place" class="q-pa-none" flat :label="$store.state.latlongs" ></q-btn>
        <q-space></q-space>
        <q-btn dense icon="notifications" flat @click="$router.push('Notification')">
          <q-badge color="red" rounded floating style="margin-top: 8px; margin-right: 8px"></q-badge>
        </q-btn>
        <q-btn round dense icon="shopping_cart" flat>
          <q-badge class="cb-bg-orange-8" rounded floating>0</q-badge>
        </q-btn>
      </q-toolbar>
      <div class="text-center cb-bg-white-2 text-weight-bolder cb-font q-pb-xs">
        <span class="cb-text-orange-8">Summary</span>
      </div>
    </q-header>
    <q-page-container>
      <q-page class="q-px-md q-py-sm">
        <q-card class="cb-round-borders shadow-4">
          <q-card-section class="text-grey-8">
            <div class="row" >
              <div class="col-12 q-py-sm">
                <q-icon name="location_on" class="cb-text-orange-8" size="sm"></q-icon>
                <span class="q-px-sm text-weight-bolder">Pick location</span>
                <q-icon name="edit" size="xs"></q-icon>
                <q-icon name="calendar_today" size="xs" class="cb-text-orange-8 q-px-sm"></q-icon>
                <span>Thu 27, Jan 22 | )4:39Pm</span>
              </div>
              <div class="col-1">
                <span style="transform: rotate(90deg);">.....</span>
              </div>
              <div class="col-11">
                Full address means the facility's street name and number; suite/unit number, as appropriate; city; Province or State as appropriate;
              </div>
              <div class="col-12 q-py-sm">
                <q-icon name="location_on" class="cb-text-orange-8" size="sm"></q-icon>
                <span class="q-px-sm text-weight-bolder">Drop location</span>
                <q-icon name="edit" size="xs">
                </q-icon>
              </div>
              <div class="col-1"></div>
              <div class="col-11">
                Full address means the facility's street name and number; suite/unit number, as appropriate; city; Province or State as appropriate;
              </div>
            </div>
          </q-card-section>
        </q-card>

        <div class="shadow-4 q-px-lg q-my-sm flex row items-center cb-round-borders">
          <span class="cb-text-blue-6 text-italic text-bold">Subscription</span><q-space></q-space>
          <q-toggle color="orange" v-model="toggle"></q-toggle>
        </div>

        <div class="row items-center justify-center q-py-sm">
          <q-img src="https://chotabeta.app/dev/testenv/public/imgs/google-maps-48.png" width="30px" height="25px"/>
          <span class="cb-font text-weight-bolder q-py-sm"><a>see locations on Map</a></span>
        </div>
        
        <q-card>
          <q-card-section class="bg-grey-2 cb-bg-blue-8 q-pa-sm cb-font text-weight-bolder text-center">
            <span>Deliverying - Drive Me</span>
          </q-card-section>
          <q-card-section class="cb-font text-grey-9">
            <div class="flex q-pt-xs"> Total Distance<q-space></q-space>8</div>
            <div class="flex q-pt-xs">Estimated time<q-space></q-space>44 min.</div>
            <div class="flex q-pt-xs">Delivery Charges<q-space></q-space>Rs. 40</div>
            <div class="flex q-pt-xs">Tax & Fees<q-space></q-space>8</div>
            <div class="flex q-pt-xs text-weight-bolder">Total<q-space></q-space>48</div>
          </q-card-section>
        </q-card>
    
        <div class="flex q-py-md">
          <div class="shadow-1" style="width:75%">
            <q-input dense placeholder="ENTER COUPON CODE" outlined @click="$router.push('Coupons')">
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
      toggle:ref(true)
    }
  },
})
</script>
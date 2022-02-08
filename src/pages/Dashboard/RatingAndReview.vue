<template>
  <q-layout view="lHh lpr lFf">
    <q-header>
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
      <div class="flex cb-bg-white-2 flex-center cb-font-16 text-weight-bolder">
        <span class="cb-text-orange-8">Rate & Review</span>
      </div>
    </q-header>
    <q-page-container> 
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
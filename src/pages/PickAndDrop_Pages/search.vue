<template>
<q-layout view="lHh lpr lFf">
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
    <q-page class="q-px-md q-py-xs">
      <div class=" shadow-1  column justify-center cb-text-blue-8 text-bold" >
        <q-input outlined dense placeholder="Address Search e.g. Prashant Towers">
          <template v-slot:prepend> <q-icon name="search" class="cb-text-orange-8" /> </template>
        </q-input>
      </div>

      <div class="row justify-center q-py-sm text-bold text-italic"><span class="cb-text-grey-4">OR</span></div>

      <div class="row cb-text-blue-8 text-bold">
        <q-img src="https://chotabeta.app/dev/testenv/public/imgs/google-maps-48.png" width="25px"/>
        <span class="cb-text-blue-4 cb-font q-px-sm">Choose Location from Map</span>
      </div>  

      <div class="row justify-center q-py-sm text-bold text-italic"><span class="cb-text-grey-4">OR</span></div>
      
      <div class="row cb-text-blue-8 text-bold">
        <q-img src="https://chotabeta.app/dev/testenv/public/imgs/house-48.png" width="25px" />
        <span class="cb-text-blue-4 cb-font q-px-sm">ChotaBeta Communities</span>
      </div>
      <div class="text-center cb-text-grey-4 shadow-1 q-mx-lg q-my-md q-py-xs text-bold">
        <span>Choose Your Community</span>
      </div>
      <div class="row">
        <div class="col-12"><span class="cb-text-blue-8 cb-font text-bold">Recent Searches</span></div>
        <div class="col-12 row q-pl-md">
          <div class="col-12 flex q-py-xs" v-for="i in 3">
            <q-img src="https://chotabeta.app/dev/testenv/public/imgs/house-48.png" width="25px"></q-img>
            <div class="q-px-md">
              <span class="cb-text-blue-8">Other</span><br>
              <span class="cb-text-grey-4" style="font-size: 12px;">Not Assigned</span>
            </div>
             <q-separator />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12"><span class="cb-text-blue-8 cb-font text-bold">Saved Locations</span></div>
        <div class="col-12 q-pl-md">
          <div class="row">
            <div class="col-12 flex" v-for="i in 3">
              <q-icon name="home" class="cb-bg-orange-8 q-pa-xs text-white cb-font" style="border-radius: 100%;"></q-icon>
              <div class="q-pl-sm">
                <span class="cb-text-blue-8 cb-font">Home</span><br>
                <span class="cb-text-grey-4" style="font-size: 11px;">123 Main Street, New York, NY 10030 is an example of an <br>address. A description of the location of a property.</span>
              </div>
             <q-separator />
            </div>
          </div>
        </div>
      </div>
    </q-page>
  </q-page-container>
</q-layout>
</template>
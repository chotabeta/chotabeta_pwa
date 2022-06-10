<template>
  <q-layout view="lHh lpr lFf">
	<q-header  style="background: transparent;">
      <q-toolbar>
       <q-btn icon="chevron_left" flat class="cb-text-grey-4 q-px-none" @click="Screen_Back_Redirection()"></q-btn>
       <q-space></q-space>
       <span class="cb-text-grey-4 cb-font-16">Orders Overview</span>
       <q-space></q-space>
    </q-toolbar>
    </q-header>
    <q-page-container class="bg-orange-1 animate__animated animate__slideInRight">

      <q-page padding class="text-grey-8" v-if="$route.query.type == 'sch'">
      	<table class="full-width">
      	  <tr> <th class="text-left text-orange-5">Schedulued on : {{ order.startdate }}</th> </tr>
      	  <tr > <th class="text-left text-red-5">Expries on : {{ order.enddate }}</th> </tr>
      	  <tr> <th class="text-left text-grey-8">order id: #{{ order.subscription_order_id }}</th> </tr>
      	  <tr > 
      	  	<td class="">
      	  	  <div class="row">
      	  	  	<div class="col q-px-xs">
      	  		  <button class="bg-green-4 q-px-lg q-my-xs rounded-borders text-white  full-width" style="border: none;">Active {{ order.active_orders_count }}</button>	
      	  	  	</div>
      	  	  	<div class="col q-px-xs">
      	  		  <button class="bg-orange-9 q-px-lg q-my-xs rounded-borders text-white full-width" style="border: none;">Pending {{ order.pending_orders_count }}</button>	
      	  	  	</div>
      	  	  	<div class="col q-px-xs">
      	  		  <button class="bg-grey-9 q-px-lg q-my-xs rounded-borders text-white full-width" style="border: none;">Done {{ order.done_orders_count }}</button>	
      	  	  	</div>
      	  	  </div>
      	  	</td> 
      	  </tr>
      	</table>
      	<table class="full-width q-mt-sm" >
      		<tr>
      			<th class="text-left text-blue-10">Itenm Details</th>
      			<td class="text-right">1 item</td>
      		</tr>
      		<tr>
            <span v-for="(i,index) in order.single_order_items">
              <td colspan="2" v-if="index == 0">{{ i.item_name }}</td>
            </span>
      		</tr>
      		<tr>
      			<td>Qty 
              <span v-for="(i,index) in order.single_order_items">
                <span v-if="index == 0">{{ i.qty }}</span>
              </span></td>
      			<td class="text-right"><q-icon name="currency_rupee"></q-icon>{{ order.single_order_amount }}</td>
      		</tr>
      		<tr>
      			<td>Delivery Fee</td>
      			<td class="text-right"><q-icon name="currency_rupee"></q-icon>{{ order.single_order_delivery_fee }}</td>
      		</tr>
      		<tr>
      			<td>Taxes</td>
      			<td class="text-right"><q-icon name="currency_rupee"></q-icon>{{ order.single_order_gst }}</td>
      		</tr>
      		<tr class=" ">
      			<td></td>
      			<td class="text-right"></td>
      		</tr>
      	</table>
      	<div class="row bg-white text-blue-10 text-bold cb-font-16 cb-round-borders-10 q-pa-sm items-center q-px-md">
      		Status : {{ order.payment_status }}
      		<q-space></q-space>
			    Total  &nbsp;&nbsp;<q-icon name="currency_rupee"></q-icon>{{ order.total_amount }}
      	</div>
      	<table class="q-mt-md full-width text-left text-grey-9">
      		<tr> <th class="text-blue-10">Delivered To:</th> </tr>
      		<tr> <td>{{ order.to_location }}</td> </tr>
      		<tr> <th class="text-blue-10">Order From : {{ order.rest_name }}</th> </tr>
      		<tr> <td>{{ order.city }}</td> </tr>
      		<tr> <th class="text-blue-10">Payment Method  <span class="text-grey-8 q-px-md">{{ order.payment_mode }}</span></th> </tr>
      	</table>
      </q-page>

      <q-page padding class="text-grey-8" v-else>
        <table class="full-width">
          <tr> <th class="text-left text-orange-5">Schedulued on : {{ order.schedule}}</th> </tr>
          <tr> <th class="text-left text-grey-8">order id: # {{ order.uid }}</th> </tr>
        </table>
        <table class="full-width q-mt-sm" >
          <tr>
            <th class="text-left text-blue-10">Itenm Details</th>
            <td class="text-right">{{ order.order_items_count }} item</td>
          </tr>
          <tr>
            <span v-for="(i,index) in order.order_items">
              <td colspan="2" v-if="index == 0">{{ i.item_name }}</td>
            </span>
          </tr>
          <tr>
            <td>Qty <span v-for="(i,index) in order.order_items">
                <span v-if="index == 0">{{ i.qty }}</span>
              </span>
            </td>
            <td class="text-right"><q-icon name="currency_rupee"></q-icon>{{ order.items_price }}</td>
          </tr>
          <tr>
            <td>Delivery Fee</td>
            <td class="text-right"><q-icon name="currency_rupee"></q-icon>{{ order.delivery_fee }}</td>
          </tr>
          <tr>
            <td>Taxes</td>
            <td class="text-right"><q-icon name="currency_rupee"></q-icon>{{ order.gst }}</td>
          </tr>
        </table>
        <div class="row bg-white text-blue-10 text-bold cb-font-16 cb-round-borders-10 q-pa-sm items-center q-px-md">
          Status : {{ order.payment_status }}
          <q-space></q-space>
          Total  &nbsp;&nbsp;<q-icon name="currency_rupee"></q-icon>{{ order.amount }}
        </div>
        <table class="q-mt-md full-width text-left text-grey-9">
          <tr> <th class="text-blue-10">Delivered To:</th> </tr>
          <tr> <td>{{ order.to_location }}</td> </tr>
          <tr> <th class="text-blue-10">Order From : {{ order.rest_name }}</th> </tr>
          <tr> <td>{{ order.city }}</td> </tr>
          <tr> <th class="text-blue-10">Payment Method  <span class="text-grey-8 q-px-md">{{ order.payment_mode }}</span></th> </tr>
        </table>
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
      order:ref([]),
    }
  },
  mounted () {
    this.getToken();
    this.mypath();
    this.getfoodorder_details();
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
    loaddata(){
    },
    getfoodorder_details(){
      var ps = this;
      if(sessionStorage.getItem('food_summery')){
        ps.order = JSON.parse(sessionStorage.getItem('food_summery'));
      }else{
        ps.$router.push('FoodOrders');
      }
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
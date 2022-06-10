<template>
  <q-layout  view="lHh lpr lFf" >

    <q-header class="bg-white q-pb-xs">
      <q-toolbar>
        <q-btn icon="chevron_left" flat class="cb-text-grey-4 q-px-none" @click="Screen_Back_Redirection()"></q-btn>
        <q-space></q-space>
        <span class="cb-text-grey-4">My Order Details</span>
        <q-space></q-space>
      </q-toolbar>
      <div class="row items-center justify-center">
        <q-img src="https://chotabeta.app/dev/testenv/public/imgs/viewOrder.png" width="60%" />
      </div>
        
      <q-tabs v-model="food_tab" active-class="cb-bg-white-1 cb-text-blue-6" class="cb-text-orange-8 bg-orange-3 q-mx-md q-pa-xs q-mt-sm cb-round-borders-10" indicator-color="transparent" outline rounded dense>
        <q-tab name="active" label="Active" @click="getfoodorders()"></q-tab>
        <q-tab name="done" label="Done" @click="getfoodorders()"></q-tab>
        <q-tab name="schedule" label="Scheduled" @click="getfoodsubscriptiondata()"></q-tab>
      </q-tabs>
    </q-header>

    <q-page-container class="animate__animated animate__slideInRight">
      <div id="loader2" class="pre-loader" style="display:none"></div>
      <q-page>
        
        <q-tab-panels v-model="food_tab" animated >

          <q-tab-panel name="active">
            <div class="row justify-center q-mt-xl" v-if="open_orders.length == 0">
              <img  :src="no_orders_found_image" style="width:60%;" >
            </div>
             <q-card v-if="open_orders.length != 0" class="bg-green-1 q-mb-sm shadow-1 cb-round-borders-10 text-grey-8" v-for="order in open_orders">
                <q-card-section class="bg-green-4 q-pa-sm cb-font-16 text-white flex q-px-md">
                  View Details <q-space></q-space>
                  <q-icon name="check_circle" size="sm" class="q-mx-sm"></q-icon>{{ order.payment_status }}
                </q-card-section>
                <q-card-section class="q-pa-sm">
                  <table class="full-width">
                    <tr>
                      <td>
                        <q-avatar size="50px" class="bg-green-4"> 
                          <q-avatar size="48px" class="bg-green-2">
                            <img :src="order.custom_item" class="fit">
                          </q-avatar>
                        </q-avatar>
                      </td>
                      <td class="text-right">
                        order #{{ order.uid }}<br> {{ order.schedule }}
                      </td>
                    </tr>
                  </table>
                  <div class="row text-bold cb-font-16 q-pt-sm">
                    Payment method :{{ order.payment_mode }}
                    <q-space></q-space>
                    Total : Rs. {{ order.amount }}
                  </div> 
                </q-card-section>
                <q-card-section class="q-pa-none"> 
                  <div class="row items-center justify-around">
                    <span style="color:green;"><b>------</b></span>
                    <q-icon name="radio_button_checked" size="22px" v-if="order.track_status >= 1" color="green"></q-icon>
                    <!-- <q-icon name="radio_button_unchecked" size="22px"></q-icon> -->
                   <span style="color:green;"><b>------</b></span>
                    <q-icon name="radio_button_checked" size="22px" v-if="order.track_status >= 2" color="green"></q-icon>
                    <q-icon name="radio_button_unchecked" size="22px" v-else  color="green"></q-icon>
                    <span style="color:green;"><b>------</b></span>
                    <q-icon name="radio_button_checked" size="22px" v-if="order.track_status >= 3" color="green"></q-icon>
                    <q-icon name="radio_button_unchecked" size="22px" color="green" v-else></q-icon>
                    <span style="color:green;"><b>------</b></span>
                    <q-icon name="radio_button_checked" size="22px" v-if="order.track_status >= 4" color="green"></q-icon>
                    <q-icon name="radio_button_unchecked" size="22px" color="green" v-else></q-icon>
                    <span style="color:green;"><b>------</b></span>
                    <q-icon name="radio_button_checked" size="22px" v-if="order.track_status >= 5" color="green"></q-icon>
                    <q-icon name="radio_button_unchecked" size="22px" color="green" v-else></q-icon>
                    <span style="color:green;"><b>------</b></span>
                  </div>
                  <div class="row items-center justify-center">
                   <div class="col text-center cb-font-12"> <span v-if="order.track_status == 1">Order Placed</span></div>
                   <div class="col text-center cb-font-12"> <span v-if="order.track_status == 2">Driver picked  order</span></div>
                  <div class="col text-center cb-font-12">  <span v-if="order.track_status == 3">Driver Started  order</span></div>
                  <div class="col text-center cb-font-12">  <span v-if="order.track_status == 4">Driver Arrived</span></div>
                  <div class="col text-center cb-font-12">  <span v-if="order.track_status == 5">Driver Delivered</span></div>
                  </div>
                </q-card-section>
                <q-card-actions>
                  <q-space></q-space>
                  <button class="bg-white cb-round-borders-20 q-py-xs q-px-md  text-green" style="border:2px solid #81c784" @click="trackorderdata(order.uid)">
                    Track Your Order <q-icon name="location_on" size="xs" ></q-icon> 
                  </button>
                  <q-space></q-space>
                  <q-space></q-space>
                  <button class="bg-white cb-round-borders-20 q-py-xs q-px-md text-green" style="border:2px solid #81c784" @click="viewordersummery_screen(order)">
                    View order summery <q-icon name="navigate_next" size="xs" ></q-icon> 
                  </button>
                </q-card-actions>
             </q-card>
          </q-tab-panel>

          <q-tab-panel name="done">
            <div class="row justify-center  q-mt-xl" v-if="delivered_orders.length == 0">
              <img  :src="no_orders_found_image" style="width: 60%" >
            </div>
            <q-card v-if="delivered_orders.length != 0" class="bg-grey-4 q-mb-sm shadow-1 cb-round-borders-10 text-grey-8" v-for="order in delivered_orders">
                <q-card-section class="bg-grey-7 q-pa-sm cb-font-16 text-white flex q-px-md">
                  View Details <q-space></q-space>
                  <q-icon name="check_circle" size="sm" class="q-mx-sm"></q-icon>{{ order.payment_status }}
                </q-card-section>
                <q-card-section class="q-pa-sm">
                  <table class="full-width">
                    <tr>
                      <td>
                        <q-avatar size="50px" class="bg-grey-6"> 
                          <q-avatar size="48px" class="bg-grey-4">
                            <img :src="order.custom_item" class="fit">
                          </q-avatar>
                        </q-avatar>
                      </td>
                      <td class="text-right">
                        order #{{ order.uid }}<br> {{ order.schedule }}
                      </td>
                    </tr>
                  </table>
                  <div class="row text-bold cb-font-16 q-pt-sm">
                    Payment method :{{ order.payment_mode }}
                    <q-space></q-space>
                    Total : Rs. {{ order.amount }}
                  </div> 
                </q-card-section>
                <q-card-actions>
                  <q-space></q-space>
                  <button class="bg-white cb-round-borders-10 q-py-xs q-px-md  text-grey-7" style="border:2px solid #757575" @click="Rateing_order_screen(order.uid)">
                    Rate Your Order
                  </button>
                  <q-space></q-space>
                  <q-space></q-space>
                  <button class="bg-white cb-round-borders-10 q-py-xs q-px-md text-grey-7" style="border:2px solid #757575" @click="viewordersummery_screen(order)">
                    View Order summery <q-icon name="navigate_next" size="xs" ></q-icon> 
                  </button>
                  <q-space></q-space>
                </q-card-actions>
             </q-card>
          </q-tab-panel>

          <q-tab-panel name="schedule">
            <div class="row justify-center  q-mt-xl" v-if="subscription_orders.length == 0">
              <img  :src="no_orders_found_image" style="width: 60%">
            </div>
            <q-card v-if="subscription_orders.length != 0" class="bg-orange-2 q-mb-sm shadow-1 cb-round-borders-10 text-grey-8" v-for="order in subscription_orders">
              <q-card-section class="bg-orange-7 q-pa-sm cb-font-16 text-white flex q-px-md">
                View Details <q-space></q-space>
                <button class="bg-green-4 cb-round-borders-10 text-white" style="border:1px solid white">Active {{ order.active_orders_count }}</button>
                <button class="bg-orange-8 cb-round-borders-10 text-white q-mx-xs" style="border:1px solid white">Pending {{ order.pending_orders_count }}</button>
                <button class="bg-grey-8 cb-round-borders-10 text-white" style="border:1px solid white">Done {{ order.done_orders_count }}</button>
              </q-card-section>
              <q-card-section class="q-pa-sm">
                <table class="full-width">
                  <tr>
                    <td>
                      <q-avatar size="50px" class="bg-orange-7"> 
                        <q-avatar size="48px" class="bg-orange-2">
                          <img :src="order.custom_item" class="fit">
                        </q-avatar>
                      </q-avatar>
                    </td>
                    <td class="text-right">
                      order #{{ order.subscription_order_id }}<br> {{ order.startdate }}
                    </td>
                  </tr>
                </table>
                <div class="row  cb-font-14 q-pt-sm">
                  Payment method : {{ order.payment_mode }}
                  <q-space></q-space>
                  Total : Rs. {{ order.total_amount }}
                </div> 
              </q-card-section>
              <q-card-actions class="flex">
                <span class="q-py-xs text-bold text-orange-7 cb-font-12">
                  Expries on: {{ order.enddate }}
                </span>
                
                <q-space></q-space>
                <button class="bg-white cb-round-borders-10 q-py-xs  text-orange-7" style="border:2px solid orange" @click="viewordersummery_screen(order,'sch')">
                  View Order summery <q-icon name="navigate_next" size="xs" ></q-icon> 
                </button>
               
              </q-card-actions>
            </q-card>
          </q-tab-panel>

        </q-tab-panels>
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
      xid:ref(null),
      cancellation_reason_predefined_texts:[],
      open_orders:ref([]),
      delivered_orders:ref([]),
      subscription_orders:ref([]),
      invoice_link_status:ref(null),
      invoice_link:ref(null),
      my_orders_text:ref(null),
      no_orders_title:ref(null),
      no_orders_message:ref(null),
      no_orders_found_image:ref(null),
    }
  },
  mounted () {
    sessionStorage.removeItem('food_summery');
    this.getToken();
    this.mypath();
    //uncomment this on into live
      this.getfoodorders();

    //comment this on into live
    // this.loaddata();
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
      var ps= this;
      ps.cancellation_reason_predefined_texts= [
          "Delivery Boy Not Assigned Yet",
          " Order Delivery Too Late",
          " I Forgot Some Items",
          " I Changed My Mind",
          " Others"
        ];
      ps.open_orders = [
        {
           id: 287386,
           food_client_id: "3",
           actual_schedule_timestamp: "2022-04-13 20:04:00",
           uid: "BKO1755",
           payment_mode: "POD",
           payment_status: "pending",
           status: "715",
           transaction_id: "13042022N84M160429",
           delivery_person_id: null,
           user_instructions: null,
           from_location: "Bahubelly Kitchen Secunderabad",
           to_location: "127, near Reliance Fresh, Hanuman Nagar, Kondapur, Kothaguda, Telangana 500084, India",
           coupon: "",
           coupon_value: "0",
           items_price: 249,
           delivery_fee: 30,
           gst: "6",
           amount: 285,
           custom_item: null,
           online: "POD",
           plan: "schedule",
           schedule: "2022-04-13 20:04:00",
           rest_name: "Bahubelly Kitchen",
           city: "Secunderabad",
           order_status_string: "New",
           order_items_count: 1,
           order_items: [
                        {
                   id: 3605,
                   actual_schedule_timestamp: "2022-04-13 20:04:00.000000",
                   order_id: "BKO1755",
                   user_id: 2394345,
                   subscription_order_id: 0,
                   client_id: 3,
                   item_id: 7,
                   item_name: "Pindari's Chicken Ghee Roast",
                   qty: 1,
                   selling_price: 249,
                   mrp: 249,
                   status: 0,
                   updated_at: "2022-04-13 16:04:31.000000",
                   created_at: "2022-04-13 16:04:31.000000",
                   image: ""
                        }
                    ],
           rating: 0
        },{
           id: 287386,
           food_client_id: "3",
           actual_schedule_timestamp: "2022-04-13 20:04:00",
           uid: "BKO1755",
           payment_mode: "POD",
           payment_status: "pending",
           status: "701",
           transaction_id: "13042022N84M160429",
           delivery_person_id: null,
           user_instructions: null,
           from_location: "Bahubelly Kitchen Secunderabad",
           to_location: "127, near Reliance Fresh, Hanuman Nagar, Kondapur, Kothaguda, Telangana 500084, India",
           coupon: "",
           coupon_value: "0",
           items_price: 249,
           delivery_fee: 30,
           gst: "6",
           amount: 285,
           custom_item: null,
           online: "POD",
           plan: "schedule",
           schedule: "2022-04-13 20:04:00",
           rest_name: "Bahubelly Kitchen",
           city: "Secunderabad",
           order_status_string: "New",
           order_items_count: 1,
           order_items: [
                        {
                   id: 3605,
                   actual_schedule_timestamp: "2022-04-13 20:04:00.000000",
                   order_id: "BKO1755",
                   user_id: 2394345,
                   subscription_order_id: 0,
                   client_id: 3,
                   item_id: 7,
                   item_name: "Pindari's Chicken Ghee Roast",
                   qty: 1,
                   selling_price: 249,
                   mrp: 249,
                   status: 0,
                   updated_at: "2022-04-13 16:04:31.000000",
                   created_at: "2022-04-13 16:04:31.000000",
                   image: ""
                        }
                    ],
           rating: 0
                }
        ];
            ps.open_orders.forEach(item =>{
              item.track_status = 1;
              if(item.status == 701){
                item.track_status = 1;
              }else if(item.status == 718 ){
                item.track_status = 2;
              }else if(item.status == 702 ){
                item.track_status = 3;
              }else if(item.status == 719 ){
                item.track_status = 4;
              }else if(item.status == 703 ){
                item.track_status = 5;
              } 
            });
      ps.delivered_orders= [
            {
             id: 287383,
             food_client_id: "1",
             actual_schedule_timestamp: "2022-04-13 20:00:00",
             uid: "HKG7637",
             payment_mode: "POD",
             payment_status: "pending",
             status: "703",
             transaction_id: "13042022N77F160012",
             delivery_person_id: null,
             user_instructions: null,
             from_location: "Homes Kitchen Attapur",
             to_location: "127, near Reliance Fresh, Hanuman Nagar, Kondapur, Kothaguda, Telangana 500084, India",
             coupon: "",
             coupon_value: "0",
             items_price: 110,
             delivery_fee: 30,
             gst: "6",
             amount: 146,
             custom_item: null,
             online: "POD",
             plan: "schedule",
             schedule: "2022-04-13 20:00:00",
             rest_name: "Homes Kitchen",
             city: "Attapur",
             order_status_string: "Delivered",
             order_items_count: 1,
             order_items: [
                          {
                     id: 3602,
                     actual_schedule_timestamp: "2022-04-13 20:00:00.000000",
                     order_id: "HKG7637",
                     user_id: 2394345,
                     subscription_order_id: 0,
                     client_id: 1,
                     item_id: 3,
                     item_name: "South indian executive meal",
                     qty: 1,
                     selling_price: 110,
                     mrp: 110,
                     status: 0,
                     updated_at: "2022-04-13 16:00:19.000000",
                     created_at: "2022-04-13 16:00:19.000000",
                     image: "https://stackroger.com/public/uploads/food/items/1/2x/HK01L01.png"
                          }
                      ],
             rating: 0
                  },{
             id: 287383,
             food_client_id: "1",
             actual_schedule_timestamp: "2022-04-13 20:00:00",
             uid: "HKG7637",
             payment_mode: "POD",
             payment_status: "pending",
             status: "703",
             transaction_id: "13042022N77F160012",
             delivery_person_id: null,
             user_instructions: null,
             from_location: "Homes Kitchen Attapur",
             to_location: "127, near Reliance Fresh, Hanuman Nagar, Kondapur, Kothaguda, Telangana 500084, India",
             coupon: "",
             coupon_value: "0",
             items_price: 110,
             delivery_fee: 30,
             gst: "6",
             amount: 146,
             custom_item: null,
             online: "POD",
             plan: "schedule",
             schedule: "2022-04-13 20:00:00",
             rest_name: "Homes Kitchen",
             city: "Attapur",
             order_status_string: "Delivered",
             order_items_count: 1,
             order_items: [
                          {
                     id: 3602,
                     actual_schedule_timestamp: "2022-04-13 20:00:00.000000",
                     order_id: "HKG7637",
                     user_id: 2394345,
                     subscription_order_id: 0,
                     client_id: 1,
                     item_id: 3,
                     item_name: "South indian executive meal",
                     qty: 1,
                     selling_price: 110,
                     mrp: 110,
                     status: 0,
                     updated_at: "2022-04-13 16:00:19.000000",
                     created_at: "2022-04-13 16:00:19.000000",
                     image: "https://stackroger.com/public/uploads/food/items/1/2x/HK01L01.png"
                          }
                      ],
             rating: 0
                  }
              ];
      ps.invoice_link_status= "0";
      ps.invoice_link= "https://www.stackroger.com/api/get-my-invoice?order_id=";
      ps.my_orders_text= "Order your daily needs, fresh vegetables, fruits, groceries, and all your home essentials. One-stop solution for all your daily needs.";
      ps.no_orders_title= "Uh-Oh!";
      ps.no_orders_message= "No orders found for you.";
      ps.no_orders_found_image= "https://stackroger.com/public/uploads/food/icons/no_item_found.png";

      ps.subscription_orders= [
                              {
                            subscription_order_id: "SUBOHKO814",
                            uid: "HKB8994",
                            food_client_id: "1",
                            payment_status: "pending",
                            payment_mode: "Online",
                            plan: "one_day",
                            rest_name: "Homes Kitchen",
                            city: "Attapur",
                            total_orders_count: 1,
                            pending_orders_count: 1,
                            active_orders_count: 0,
                            done_orders_count: 0,
                            from_location: "Homes Kitchen Attapur",
                            to_location: "127, near Reliance Fresh, Hanuman Nagar, Kondapur, Kothaguda, Telangana 500084, India",
                            total_amount: 106,
                            single_order_amount: 70,
                            single_order_delivery_fee: 30,
                            single_order_gst: "6.00",
                            single_order_coupon: "",
                            single_order_coupon_value: "0",
                            user_instructions: "",
                            startdate: "2022-04-14 11:00:00",
                            enddate: "2022-04-14 11:00:00",
                            single_order_items: [
                                      {
                                    id: 3604,
                                    actual_schedule_timestamp: "2022-04-14 11:00:00.000000",
                                    order_id: "HKB8994",
                                    user_id: 2394345,
                                    subscription_order_id: 0,
                                    client_id: 1,
                                    item_id: 2,
                                    item_name: "Idly Bowl",
                                    qty: 1,
                                    selling_price: 70,
                                    mrp: 70,
                                    status: 0,
                                    updated_at: "2022-04-13 16:03:47.000000",
                                    created_at: "2022-04-13 16:03:47.000000",
                                    image: "https://stackroger.com/public/uploads/food/items/1/2x/HK01B02.png"
                                      }
                                  ]
                              },
                              {
                            subscription_order_id: "SUBOHKP830",
                            uid: "HKZ4892",
                            food_client_id: "1",
                            payment_status: "pending",
                            payment_mode: "Online",
                            plan: "one_day",
                            rest_name: "Homes Kitchen",
                            city: "Attapur",
                            total_orders_count: 1,
                            pending_orders_count: 0,
                            active_orders_count: 0,
                            done_orders_count: 0,
                            from_location: "Homes Kitchen Attapur",
                            to_location: "127, near Reliance Fresh, Hanuman Nagar, Kondapur, Kothaguda, Telangana 500084, India",
                            total_amount: 136,
                            single_order_amount: 100,
                            single_order_delivery_fee: 30,
                            single_order_gst: "6.00",
                            single_order_coupon: "",
                            single_order_coupon_value: "0",
                            user_instructions: "",
                            startdate: "2022-04-14 11:00:00",
                            enddate: "2022-04-14 11:00:00",
                            single_order_items: [
                                      {
                                    id: 3603,
                                    actual_schedule_timestamp: "2022-04-14 11:00:00.000000",
                                    order_id: "HKZ4892",
                                    user_id: 2394345,
                                    subscription_order_id: 0,
                                    client_id: 1,
                                    item_id: 1,
                                    item_name: "Breakfast Meal Box",
                                    qty: 1,
                                    selling_price: 100,
                                    mrp: 100,
                                    status: 0,
                                    updated_at: "2022-04-13 16:02:59.000000",
                                    created_at: "2022-04-13 16:02:59.000000",
                                    image: "https://stackroger.com/public/uploads/food/items/1/2x/HK01B023.png"
                                      }
                                    ]
                                  }
          ];
    },
    getfoodorders(){
      var ps = this;
      var loader = document.getElementById('loader2');
          loader.style.display="block";
        let config = { headers: { Authorization: `Bearer ${ps.access_token}` } };
        ps.$api.get('/api/food-orders',config).then(function (response) {

          loader.style.display="none";
          console.log(response,"api/food-orders")
          if(response.data.status_code ==200){
            ps.cancellation_reason_predefined_texts = response.data.cancellation_reason_predefined_texts;
            ps.open_orders = response.data.open_orders;
            ps.delivered_orders = response.data.delivered_orders;
            ps.invoice_link_status = response.data.invoice_link_status;
            ps.invoice_link = response.data.invoice_link;
            ps.orders_text = response.data.orders_text;
            ps.no_orders_title = response.data.no_orders_title;
            ps.no_orders_message = response.data.no_orders_message;
            ps.no_orders_found_image = response.data.no_orders_found_image;

            ps.open_orders.forEach(item =>{
              item.track_status = 1;
              if(item.status == 701){
                item.track_status = 1;
              }else if(item.status == 718 ){
                item.track_status = 2;
              }else if(item.status == 702 ){
                item.track_status = 3;
              }else if(item.status == 719 ){
                item.track_status = 4;
              }else if(item.status == 703 ){
                item.track_status = 5;
              }
            });
          }else{
            ps.$q.notify({ message:response.data.message, type: 'negative',progress: true, });
          }
        }).catch(function (error) {
          console.log(error);
          // ps.$q.notify({ message:error, type: 'warning',progress: true, });
        });
    },
    getfoodsubscriptiondata(){
      var ps = this;
      var loader = document.getElementById('loader2');
      loader.style.display="block";
      let config = { headers: { Authorization: `Bearer ${ps.access_token}` } };
      ps.$api.get('/api/food-subscription-orders',config).then(function (response) {

        loader.style.display="none";
        console.log(response,"api/food-orders")
        if(response.data.status_code ==200){
            ps.subscription_orders =  response.data.subscription_orders;
          }else{
          ps.$q.notify({ message:response.data.message, type: 'negative',progress: true, });
        }
      }).catch(function (error) {
        console.log(error);
        // ps.$q.notify({ message:error, type: 'warning',progress: true, });
      });
    },
    viewordersummery_screen(item,type){
      var ps = this;
      sessionStorage.setItem('food_summery',JSON.stringify(item))
      ps.$router.push('food-order-summery?type='+type);
    },
    Rateing_order_screen(uid){
      var ps = this;
      ps.$router.push('food-order-rating?order_id='+uid);
    },
    trackorderdata(uid){
      var ps = this;
      ps.$router.push("/LocationTrack?uid="+uid);
    },
    mypath(){
      var ps=  this;
      var myallpaths = ['/home/dashboard'];
      // var i = 0;
      // if(sessionStorage.getItem('mypath')){
      //   myallpaths = JSON.parse(sessionStorage.getItem('mypath'));
      // }
      // myallpaths.forEach(( path,index ) => {
      //   if(ps.$route.fullPath == path){
      //     if(i == 0){ i = index; }
      //   }
      // });
      // if(i == 0){
        myallpaths.push(ps.$route.fullPath);
      // }else{
      //   for(var j=1;j<= myallpaths.length;++j){
      //     if(j<=i){ }else{ myallpaths.splice(j,1); }
      //   }
      // }
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
<style>
.q-tab {  border-radius: 10px; }
</style>
<template>
  <q-layout  view="lHh lpr lFf">

    <q-header>
      <q-toolbar class="cb-bg-white-2 cb-text-blue-8">
        <!-- <q-btn flat dense icon="arrow_back" @click="$router.push('/home/dashboard')"/> -->
        <q-btn icon="place" size="md" class="q-pa-none q-ml-md" borderless flat :label="$store.state.showaddress"></q-btn>
        <q-space></q-space>
        <q-btn dense icon="notifications" flat @click="$router.push('Notification')">
          <q-badge color="red" rounded floating style="margin-top: 8px; margin-right: 8px"></q-badge>
        </q-btn>
        <q-btn round dense icon="shopping_cart" flat>
          <q-badge class="cb-bg-orange-8" rounded floating>0</q-badge>
        </q-btn>
      </q-toolbar>
      <div class="text-center cb-bg-white-2 text-weight-bolder cb-font-16 q-pb-xs cb-text-orange-8">Summary</div>
    </q-header>

    <q-page-container>
      <q-page class="q-px-md q-py-sm">
        <div id="loader2" class="pre-loader" style="display:none"></div>
        <q-card class="cb-round-borders-10 cb-shadow-2">
          <q-card-section class="text-grey-8">
            <div class="row" >

              <div class="col-12 q-py-sm text-weight-bolder">
                <q-icon name="location_on" class="cb-text-orange-8" size="sm"></q-icon>
                <span class="q-px-sm text-weight-bolder">Pick location</span>
                <q-icon name="edit" size="xs" @click="$router.push('Search_location?address=r1')"></q-icon>
                <q-icon name="calendar_today" size="xs" class="cb-text-orange-8 q-px-sm"></q-icon>
                <span class="cb-font-10">{{pick_date}}</span>
              </div>

              <div class="col-11 cb-font-12" style="word-wrap: break-word;">
                {{ pickuplocation_array.name }}<br>
                <span class="cb-text-blue-8 text-bold">{{ user_data.name }}-{{ user_data.mobile }}</span>
              </div>

            </div>
          </q-card-section>
        </q-card>
       <br />
        <div class="row items-center justify-center">
          <span class="text-bold">How Long Will You Use (hrs)?</span>
        </div>
        <div class="row items-center justify-center flex q-py-md">
                <q-space></q-space>
                <q-space></q-space>
								<q-btn icon="remove" round color="orange" dense @click="hr_incr(1)"></q-btn>
								<span class="q-px-md text-bold">{{rm_usage_hrs}}</span>
								<q-btn icon="add" round color="orange" dense @click="hr_incr(2)"></q-btn>
                <q-space></q-space>
                <q-btn icon="add" rounded color="orange"  label="task" dense @click="$router.push('rent_me2')"></q-btn>
        </div>

        <br />

        <q-card style="border:1px solid grey" class="cb-round-borders-10 cb-shadow-1">
          <q-card-section class=" cb-text-orange-8 q-pa-sm cb-font-16  text-center">
            <span>Final bill may vary based on number of hours spent by-the ChotaBeta</span>
          </q-card-section>
          <q-card-section class="cb-font-16 text-grey-9">
            <div class="flex q-pt-xs"> Usage hours<q-space></q-space>{{rm_usage_hrs}}</div>
            <div class="flex q-pt-xs">Service Charge<q-space></q-space>{{rm_service_charges}}</div>
            <div class="flex q-pt-xs">Tax & Fees<q-space></q-space>{{rm_taxes}}</div>
            <div class="flex q-pt-xs text-red" v-if="discount != null">Discount<q-space></q-space>{{ discount }}</div>
            <div class="flex q-pt-xs text-weight-bolder">Total<q-space></q-space>{{rm_grand_total}}</div>
          </q-card-section>
        </q-card>
        <div class="flex q-py-md" v-if="discount == null">
          <div class="cb-shadow-1 cb-round-borders-10 bg-white q-px-sm" style="width:75%">
            <q-input dense placeholder="ENTER COUPON CODE" borderless @click="screenredirection()">
              <template v-slot:prepend>
                  <q-avatar><img src="https://chotabeta.app/dev/testenv/public/imgs/discount_1.png"></q-avatar>
              </template>
            </q-input>
          </div>
          <q-btn label="apply" class="cb-bg-orange-8 cb-round-borders-10 text-white q-ml-sm" style="width:22%"></q-btn>
        </div>

        <div class="flex q-py-md" v-if="discount != null">
          <div class="cb-shadow-1 cb-round-borders-10 bg-white q-px-sm" style="width:75%">
            <q-input dense :placeholder="coupon_code" borderless @click="screenredirection()">
              <template v-slot:prepend>
                  <q-avatar><img src="https://chotabeta.app/dev/testenv/public/imgs/discount_1.png"></q-avatar>
              </template>
            </q-input>
          </div>
          <q-btn label="remove" class="cb-bg-orange-8 cb-round-borders-10 text-white q-ml-sm" style="width:22%" @click="couponremove_function()"></q-btn>
        </div>

        <q-card class="cb-round-borders-10 q-my-md cb-shadow-2">
          <q-card-section class="cb-bg-grey-2 cb-text-blue-8 text-weight-bolder cb-font-16 q-pa-sm">
            <span>Payment Method</span>
          </q-card-section>
          <q-card-section class="cb-font-16 q-pa-sm">
            <q-option-group :options="options" v-model="payment" color="orange"  class="full-width"></q-option-group>
          </q-card-section>
        </q-card>

        <div class="row justify-center">
          <q-btn label="Pay now"  class="cb-bg-orange-8 text-white q-px-xl" @click="rm_pay_now()"></q-btn>
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

        <q-dialog v-model="calander_dailog_picktime">
          <q-card class="q-dialog-plugin">
            <q-date v-model="model" mask="YYYY-MM-DD HH:mm" color="orasnge" class="fit"></q-date>
            <q-card-actions align="right">
              <q-btn flat label="cancel" @click="calander_dailog = false"></q-btn>
              <q-btn flat label="Ok"></q-btn>
            </q-card-actions>
          </q-card>
        </q-dialog>

         <q-dialog v-model="order_success_dailog" persistent>
          <q-card class="cb-round-borders-10">
            <q-card-section class="text-center q-pa-lg">
              <q-avatar size="70px" font-size="70px" icon="check_circle" class="text-white bg-orange"/>
              <div class="text-h5 q-py-sm "><b>{{ order.message}}</b></div>
              <div>You can track the delivery in the Orders section</div>
              <q-btn label="continue shopping" color="orange" @click="$router.push('/home/dashboard')" class="q-my-sm cb-round-borders-10"></q-btn><br>
              <q-btn label="go to orders" @click="$router.push('/home/orders')" flat class="text-grey-7"></q-btn>
            </q-card-section>
          </q-card>
        </q-dialog>

        <q-dialog v-model="coupon_dailog_error">
          <q-card class="cb-round-borders-10" @click="coupon_dailog_error= false">
            <q-card-section class="text-center q-pa-lg">
              <q-avatar color="red" text-color="white" size="60px" class=
              'q-pa-none' icon="sentiment_dissatisfied" font-size="60px"/><br>
              <div class="text-h5 q-py-sm "><b>Oops!</b></div>
              <div>Not applied</div>
              <q-btn label="add another coupon" @click="coupon_dailog_error= false" flat class="text-red-8 text-bold"></q-btn>
            </q-card-section>  
          </q-card>
        </q-dialog>

        <q-dialog v-model="coupon_dailog_applied">
          <q-card class="cb-round-borders-10" @click="coupon_dailog_applied =  false">
            <q-card-section class="text-center q-pa-lg">
              <q-avatar color="green" text-color="white" size="60px" class='q-pa-none' icon="sentiment_satisfied" font-size="60px"/><br>
              <div class="text-h5 q-py-sm "><b>HoHoo!</b></div>
              <div>Coupon Code <span class="text-weight-bolder">{{ $route.query.coupon }}</span> Applied</div>
              <div class="text-green text-bold cb-font-16"><q-icon name="currency_rupee"></q-icon> Saved</div>
            </q-card-section>  
          </q-card>
        </q-dialog>

        <q-dialog v-model="coupon_dailog_remove">
          <q-card class="cb-round-borders-10" @click="coupon_dailog_remove= false">
            <q-card-section class="text-center q-pa-lg">
              <q-avatar color="green" text-color="white" size="60px" class='q-pa-none' icon="sentiment_satisfied" font-size="60px"/><br>
              <div class="text-h5 q-py-sm "><b>Oops!</b></div>
              <div>Coupon Removed!</div>
              <q-btn label="add another coupon" @click="coupon_dailog_remove= false" flat class="text-red-8 text-weight-bolder"></q-btn>
            </q-card-section>  
          </q-card>
        </q-dialog>
        
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
      toggle:ref(false),
      calander_dailog:ref(false),
      model:ref(null),
      pickuplocation_array:ref([]),
      delivery_address_array:ref([]),
      pickanddrop_fare_data:ref([]),
      pick_date:ref(null),
      pick_time:ref(null),
      calander_dailog_picktime:ref(false),
      user_data:ref([]),
      options:[
              { label:'Pay Now Online', value:'PO' ,icon: 'restaurant_menu'},
              {label:'Pay Now On Delivery', value:'POD'}
              ],
      payment:ref('POD'),
      category:ref([]),
      service:ref([]),
      pick_territory_id:ref(null),
      order_success_dailog:ref(false),
      order:ref([]),
      delivery_territory_id:ref(null),
      rm_grand_total:ref(null),
      rm_service_charges:ref(null),
      rm_taxes:ref(null),
      rm_usage_hrs:ref(1),
      order_success_dailog:ref(false),
      coupon_dailog_error:ref(false),
      coupon_dailog_applied:ref(false),
      coupon_dailog_remove:ref(false),
      coupon_code:ref(null),
      discount:ref(null),
    }
  },
   mounted () {
    this.getToken();
    // this.location_address();
    this.pickdate_selection();
    this.rent_me_summery_data();
  },
  methods:{
    getToken(){
      var ps = this ;
      ps.access_token = ps.$store.state.token;
      if(ps.access_token == null){ ps.$router.push(''); }
      ps.coupon_code = localStorage.getItem('coupon_rent_me');
    },
    Subscription_function(){
      var ps = this;
      if ( ps.toggle == true){
        ps.calander_dailog = true;
      }
    },
    location_address(){
      var ps = this;
      let config = { headers: { "Authorization": `Bearer ${ps.access_token}`,}}

      ps.pickuplocation_array = JSON.parse(localStorage.getItem('rentment_address'));
      ps.category = JSON.parse(localStorage.getItem('category'));
      ps.service = JSON.parse(localStorage.getItem('service'));
      var user_data = JSON.parse(ps.$store.state.userdetails);
      // console.log(user_data)
      ps.user_data = user_data.deatils;
      
      console.log(ps.pickuplocation_array,"pickuplocation_array");
     
      const d = new Date();
      let formData = new FormData();
      // formData.append("to_location", ps.pickuplocation_array.location);
      formData.append("coupon", null);
      formData.append("pick_time", (d.getUTCHours()+":"+d.getUTCMinutes()+':'+d.getUTCSeconds()) );
      formData.append("weight", null);
      formData.append("pick_date", d.getFullYear()+'-'+ps.addZero(d.getDay())+'-'+ps.addZero(d.getUTCDate()));
      formData.append("schedule_timestamp",null );
      formData.append("wseek_end", null);
      formData.append("plan", null);
      // formData.append("pick_territory_id", ps.pickuplocation_array.territory_id);
      var loader = document.getElementById('loader2');
          loader.style.display="block";
      ps.$api.post('/api/fare-pickdrop',formData,config).then(function (response) {
        loader.style.display="none";
          // console.log(response);
          ps.pickanddrop_fare_data =  response.data;
        }).catch(function (error) {
          console.log(error);
        });
    },
    addZero(i) {
     if (i < 10) {i = "0" + i}
      return i;
    },
    pickdate_selection(){
      var ps = this;
      var d = new Date();
      ps.pick_date = d.getFullYear()+'-'+ps.addZero(d.getDay())+'-'+ps.addZero(d.getUTCDate());
      ps.pick_time = d.getUTCHours()+":"+d.getUTCMinutes()+':'+d.getUTCSeconds();
    },
    screenredirection(){
      var ps = this;
      // ps.$router.push('Coupons?service_id='+ps.category.main_service_id);
      ps.$router.push('Coupons?service_id='+ps.service.id);
    },
    couponremove_function(){
      var ps = this;
      ps.discount = null;
      ps.coupon_code = null;
      localStorage.removeItem('coupon_rent_me');
      ps.coupon_dailog_remove = true;
      ps.location_address();
    },
    placeorder(){
      var ps = this;
      if(!ps.payment){
        ps.$q.notify({ message: "Please Select Payment Method", type: "negative",});
        return false;
      }
      let formData = new FormData();
      // formData.append("base_location", ps.pickuplocation_array.location);
      formData.append("base_pincode", 0);
      formData.append("xid", ps.$store.state.xid);
      formData.append("category_id", ps.category.id);
      formData.append("service_id", ps.category.main_service_id);
      formData.append("plan", null);
      formData.append("transaction_id", null);
      formData.append("payment_mode", ps.payment);
      formData.append("coupon", ps.coupon_code);
      formData.append("payment_status", "pending");
      formData.append("schedule_timestamp", (new Date()));
      formData.append("weight", null);
      formData.append("item_name", ps.category.name);
      formData.append("instruction", null);
      formData.append("week_end", null);

      formData.append("pick_flat", ps.pickuplocation_array.flat_no);
      formData.append("from_lat_lng", ps.pickuplocation_array.location );
      formData.append("pick_date", ps.pick_date );
      formData.append("from_location", ps.pickuplocation_array.name );
      formData.append("pick_phone", ps.user_data.mobile );
      // formData.append("pick_territory_id", ps.pickuplocation_array.territory_id );
      formData.append("pick_name", ps.user_data.name );
      formData.append("pick_time", ps.pick_time );

      formData.append("to_location", ps.delivery_address_array.name);
      formData.append("drop_flat", ps.delivery_address_arrayflat_no);
      formData.append("drop_phone", ps.user_data.mobile);
      // formData.append("drop_territory_id", ps.delivery_address_array.territory_id);
      formData.append("to_lat_lng", ps.delivery_address_array.location);
      formData.append("drop_name", ps.user_data.name);
      var loader = document.getElementById('loader2');
          loader.style.display="block";
      let config = { headers: { "Authorization": `Bearer ${ps.access_token}`,}}
      ps.$api.post('/api/pay-pickdrop',formData,config).then(function (response) {
        loader.style.display="none";
          if(response.data.status_code == 204){
            ps.$q.notify({ message: response.data.message, });
          } else if(response.data.status_code == 200){
            localStorage.removeItem('pickup_address');
            localStorage.removeItem('delivery_address');
            localStorage.removeItem('category');
            localStorage.removeItem('service');
            ps.order = response.data;
            ps.order_success_dailog = true;

          }
        }).catch(function (error) {
          console.log(error);
        });
    },
    rent_me_summery_data(){
      var ps = this;
      ps.pickuplocation_array = JSON.parse(localStorage.getItem('rentment_address'));
          //  alert(ps.delivery_address_array.location);
      ps.category = JSON.parse(localStorage.getItem('category'));
      ps.service = JSON.parse(localStorage.getItem('service'));
      var user_data = JSON.parse(ps.$store.state.userdetails);
      console.log(user_data)
      ps.user_data = user_data.deatils;

      let formData = new FormData();

      formData.append("hours", 1);
      formData.append("trip_type", 0);
      formData.append("to_location", ps.pickuplocation_array.location);
      formData.append("category_id", 11);
      formData.append("coupon", ps.coupon_code);
      formData.append("service_id", 11);
      formData.append("drop_territory_id", null);
      formData.append("from_location", ps.pickuplocation_array.location);
      formData.append("pick_territory_id", 229);
      formData.append("vehicle", 0);
      var loader = document.getElementById('loader2');
          loader.style.display="block";
      let config = { headers: { "Authorization": `Bearer ${ps.access_token}`,}}
      ps.$api.post('/api/conf-terms-one',formData,config).then(function (response) {
        loader.style.display="none";
          if(response.data.status_code == 204){
            ps.$q.notify({ message: response.data.message, });
          } else if(response.data.status_code == 200){
            ps.rm_grand_total  = response.data.grand_total;
            ps.rm_service_charges  = response.data.delivery_fee;
            ps.rm_taxes  = response.data.gst;
            if(ps.coupon_code){
              if(response.data.coupon == "Rs. 0"){
                ps.coupon_dailog_error = true;
              }else{
                ps.discount = response.data.coupon;
                ps.coupon_dailog_applied = true;
              }
            }
          }
        }).catch(function (error) {
          // console.log(error);
        });
    },
    hr_incr(inc_dec){
      var ps = this;
      if(inc_dec == 1){
          if(ps.rm_usage_hrs > 1){
          ps.rm_usage_hrs = ps.rm_usage_hrs - 1;
          ps.pickuplocation_array = JSON.parse(localStorage.getItem('pickup_address'));
               ps.delivery_address_array = JSON.parse(localStorage.getItem('delivery_address'));
              //  alert(ps.delivery_address_array.location);
          ps.category = JSON.parse(localStorage.getItem('category'));
          ps.service = JSON.parse(localStorage.getItem('service'));
          var user_data = JSON.parse(ps.$store.state.userdetails);
          console.log(user_data)
          ps.user_data = user_data.deatils;

          let formData = new FormData();

          formData.append("hours", ps.rm_usage_hrs);
          formData.append("trip_type", 0);
          formData.append("to_location", ps.pickuplocation_array.location);
          formData.append("category_id", 11);
          formData.append("coupon", ps.coupon_code);
          formData.append("service_id", 11);
          formData.append("drop_territory_id", null);
          formData.append("from_location", ps.pickuplocation_array.location);
          formData.append("pick_territory_id", 229);
          formData.append("vehicle", 0);
          var loader = document.getElementById('loader2');
              loader.style.display="block";
          let config = { headers: { "Authorization": `Bearer ${ps.access_token}`,}}
          ps.$api.post('/api/conf-terms-one',formData,config).then(function (response) {
            loader.style.display="none";
              if(response.data.status_code == 204){
                ps.$q.notify({ message: response.data.message, });
              } else if(response.data.status_code == 200){
                ps.rm_grand_total  = response.data.grand_total;
                ps.rm_service_charges  = response.data.delivery_fee;
                ps.rm_taxes  = response.data.gst;



              }
            }).catch(function (error) {
              console.log(error);
            });
          }
      }else if(inc_dec == 2){
        if(ps.rm_usage_hrs < 8){
        ps.rm_usage_hrs = ps.rm_usage_hrs + 1;

        ps.pickuplocation_array = JSON.parse(localStorage.getItem('pickup_address'));
               ps.delivery_address_array = JSON.parse(localStorage.getItem('delivery_address'));
              //  alert(ps.delivery_address_array.location);
          ps.category = JSON.parse(localStorage.getItem('category'));
          ps.service = JSON.parse(localStorage.getItem('service'));
          var user_data = JSON.parse(ps.$store.state.userdetails);
          console.log(user_data)
          ps.user_data = user_data.deatils;

          let formData = new FormData();

          formData.append("hours", ps.rm_usage_hrs);
          formData.append("trip_type", 0);
          formData.append("to_location", ps.pickuplocation_array.location);
          formData.append("category_id", 11);
          formData.append("coupon", ps.coupon_code);
          formData.append("service_id", 11);
          formData.append("drop_territory_id", null);
          formData.append("from_location", ps.pickuplocation_array.location);
          formData.append("pick_territory_id", 229);
          formData.append("vehicle", 0);
          var loader = document.getElementById('loader2');
              loader.style.display="block";
          let config = { headers: { "Authorization": `Bearer ${ps.access_token}`,}}
          ps.$api.post('/api/conf-terms-one',formData,config).then(function (response) {
            loader.style.display="none";
              if(response.data.status_code == 204){
                ps.$q.notify({ message: response.data.message, });
              } else if(response.data.status_code == 200){
                ps.rm_grand_total  = response.data.grand_total;
                ps.rm_service_charges  = response.data.delivery_fee;
                ps.rm_taxes  = response.data.gst;



              }
            }).catch(function (error) {
              console.log(error);
            });
        }
      }
    },

    rm_pay_now(){
      var ps = this;
      if(!ps.payment){
        ps.$q.notify({ message: "Please Select Payment Method", type: "negative",});
        return false;
      }
      var random =       (Math.random().toString(36).substring(2,4)).toUpperCase();
      var today = new Date();
      var rm_transaction_id = today.getFullYear()+''+(today.getMonth()+1)+''+today.getDate()+''+random+''
              +today.getHours()+''+today.getMinutes()+''+today.getSeconds() ;

      // var rm_transaction_id =
      var user_details;
      var user_data = JSON.parse(ps.$store.state.userdetails);
      ps.user_data = user_data.deatils;
       ps.pickuplocation_array = JSON.parse(localStorage.getItem('pickup_address'));
       ps.task_details = (localStorage.getItem('tasks'));
       console.log(ps.task_details);

       let formData = new FormData();

      formData.append("vehicle_type", "");
      formData.append("drop_phone", ps.user_data.mobile);
      formData.append("to_location", ps.pickuplocation_array.name);
      formData.append("pick_time", "");
      formData.append("car_type", "Automatic");
      formData.append("tat_time", "1");
      formData.append("schedule_time", "");
      formData.append("drop_name", ps.user_data.name);
      formData.append("transaction_id", rm_transaction_id);
      formData.append("plan", "");

      formData.append("pick_phone", ps.user_data.mobile);
      formData.append("car_model", "Bike");
      formData.append("user_instructions", "");
      formData.append("category_id", "47");
      formData.append("pick_date", "");
      formData.append("vehicle", "");
      formData.append("to_lat_lng", ps.pickuplocation_array.location);
      formData.append("tasks", ps.task_details);
      formData.append("week_end", "");
      formData.append("coupon", ps.coupon_code);
      formData.append("hours", ps.rm_usage_hrs);
      formData.append("trip_type", "0");

      formData.append("payment_mode", ps.payment);
      formData.append("pick_territory_id", "");
      formData.append("from_location", ps.pickuplocation_array.name);
      formData.append("payment_status", "pending");
      formData.append("subscription_option", "");
      formData.append("territory_id", "1");
      formData.append("pick_name", ps.user_data.name);
      formData.append("service_id", "11");
      formData.append("drop_territory_id", "");
      formData.append("from_lat_lng", ps.pickuplocation_array.location);
      var loader = document.getElementById('loader2');
          loader.style.display="block";
      let config = { headers: { "Authorization": `Bearer ${ps.access_token}`,}}
      ps.$api.post('/api/confirm-drive-trip',formData,config).then(function (response) {
        loader.style.display="none";
          if(response.data.status_code == 200){
            ps.order_success_dailog = true;
            localStorage.removeItem('service');
            localStorage.removeItem('category');
            localStorage.removeItem('coupon_rent_me');
            localStorage.removeItem('tasks_temp');
            localStorage.removeItem('tasks');
          }
        }).catch(function (error) {
          console.log(error);
        });


    }
  }
})
</script>

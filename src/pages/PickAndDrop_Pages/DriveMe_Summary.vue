<template>
  <q-layout  view="lHh lpr lFf">

    <q-header>
      <q-toolbar class="cb-bg-white-2 cb-text-blue-8">
        <q-btn flat dense icon="arrow_back" @click="$router.push('/home/dashboard')"/>
        <q-btn icon="place" class="q-pa-none" size="sm" flat label="HUDA Techno Enclave, HITEC City"></q-btn>
        <q-space></q-space>
        <q-btn dense icon="notifications" flat @click="$router.push('/home/Notification')">
          <q-badge color="red" rounded floating style="margin-top: 8px; margin-right: 8px"></q-badge>
        </q-btn>
        <q-btn round dense icon="shopping_cart" flat>
          <q-badge class="cb-bg-orange-8" rounded floating>0</q-badge>
        </q-btn>
      </q-toolbar>
      <div class="text-center cb-bg-white-2 text-weight-bolder cb-font-16 q-pb-xs cb-text-orange-8">Summary</div>
    </q-header>

    <q-page-container>
      <div id="loader2" class="pre-loader" style="display:none"></div>
      <q-page class="q-px-md q-py-sm">

        <q-card class="cb-round-borders-10 cb-shadow-2">
          <q-card-section class="text-grey-8">
            <div class="row" >
              <div class="col-12 q-py-sm text-weight-bolder">
                <q-icon name="location_on" class="cb-text-orange-8" size="sm"></q-icon>
                <span class="q-px-sm text-weight-bolder">Pick location</span>
                <q-icon name="edit" size="xs" @click="$router.push('Search_location?address=d1')"></q-icon>
                <q-icon name="calendar_today" size="xs" class="cb-text-orange-8 q-px-sm" @click="calander_dailog_picktime= true"></q-icon>
                <span class="cb-font-10">{{pick_date}} | {{ pick_time }}</span>
              </div>
              <div class="col-1 flex  flex-center text-weight-bolder q-pl-xs">
                <span style="transform: rotate(90deg);line-height: 0px;">.........</span>
              </div>
              <div class="col-11 cb-font-12" style="word-wrap: break-word;">
                {{ pickuplocation_array.name }}<br>
                <span class="cb-text-blue-8 text-bold">{{ user_data.name }}-{{ user_data.mobile }}</span>
              </div>
              <div class="col-12 q-py-sm">
                <q-icon name="location_on" class="cb-text-orange-8" size="sm"></q-icon>
                <span class="q-px-sm text-weight-bolder">Drop location</span>
                <q-icon name="edit" size="xs"  @click="$router.push('Search_location?address=d2')">
                </q-icon>
              </div>
              <div class="col-1"></div>
              <div class="col-11 cb-font-12" style="word-wrap: break-word;">
                {{ delivery_address_array.name }}<br>
                <span class="cb-text-blue-8 text-bold">{{ user_data.name }}-{{ user_data.mobile }}</span>
              </div>
            </div>
          </q-card-section>
        </q-card>

        <div class="row coupon-wrap q-pa-sm "  >
          <q-card class="my-card q-ma-sm" v-for="cat in dm_categories" :key="cat" @click="change_vehicle_r_onload(cat,1)">
            <q-badge color="white" floating outline v-if="cat.id == vehicle_id.id"><q-icon name="check_circle" color="orange" size="1.2rem" /></q-badge>
            <q-card-section>
              <q-img :src="cat.category_image_for_mobile" width="55px" height="55px"></q-img>
            </q-card-section>
          </q-card>
        </div>
        <br/>
        <div class="row items-center justify-center">
          <span class="text-bold">How Long Will You Use (hrs)?</span>
        </div>
        <div class="row items-center justify-center flex q-py-md">
          <q-space></q-space>
          <q-btn icon="remove" size="sm" round color="orange" dense @click="hr_incr(1)"></q-btn>
          <span class="q-px-md text-bold">{{usage_hrs}}</span>
          <q-btn icon="add" size="sm" round color="orange" dense @click="hr_incr(2)"></q-btn>
          <q-space></q-space>         
        </div>
        
        <q-card style="border:1px solid grey" class="cb-round-borders-10 cb-shadow-1">
          <q-card-section class="cb-bg-grey-2 cb-text-blue-8 q-pa-sm cb-font-16 text-weight-bolder text-center">
            <span>Delivering - Drive Me</span>
          </q-card-section>
          <q-card-section class="cb-font-16 text-grey-9">
            <div class="flex q-pt-xs">
              Trip Type<q-space></q-space><span v-if="trip_type == 0 || trip_type == '0'">One Way</span>
              <span v-if="trip_type == 1 || trip_type == '1'">Round Trip</span>
            </div>
            <div class="flex q-pt-xs"> Total Distance<q-space></q-space>{{pickanddrop_fare_data.total_distance}}</div>
            <div class="flex q-pt-xs">Usage hours<q-space></q-space>{{usage_hrs}} hr</div>
            <div class="flex q-pt-xs">Driver Fee<q-space></q-space>{{pickanddrop_fare_data.delivery_fee}}</div>
            <div class="flex q-pt-xs text-red" v-if="discount != null">
              Discount<q-space></q-space>{{discount}}
            </div>
            <div class="flex q-pt-xs">Tax & Fees<q-space></q-space>{{ pickanddrop_fare_data.gst }}</div>
            <div class="flex q-pt-xs text-weight-bolder">Total<q-space></q-space>{{ pickanddrop_fare_data.grand_total }}</div>
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
        <span  v-if="xid != 2">
          <q-card class="cb-round-borders-10 q-mb-md cb-shadow-2" v-if="pickanddrop_fare_data.fare != 0">
            <q-card-section class="cb-bg-grey-2 cb-text-blue-8 text-weight-bolder cb-font-16 q-pa-sm">
              <span>Payment Method</span>
            </q-card-section>
            <q-card-section class="cb-font-16 q-pa-sm">
              <!-- <q-option-group :options="options" v-model="payment" color="orange"  class="full-width"></q-option-group> -->
              <div v-for="method in payment_methods" :key="method">
                <div class="row  items-center" v-if="method.payment_mode_status == 1">
                <q-img :src="method.images" width="25px"></q-img>
                <span class="q-px-sm">{{method.payment_modes}}</span>
                <q-space></q-space>
                  <q-radio v-model="payment" :val="method.payment_modes" color="orange" />
                </div>
              </div>
            </q-card-section>
          </q-card>

          <div class="row justify-center">
            <q-btn label="Pay now"  class="cb-bg-orange-8 text-white q-px-xl" @click="placeorder"  v-if="pickanddrop_fare_data.fare != 0"></q-btn>
            <q-btn label="Place Order"  class="cb-bg-orange-8 text-white q-px-xl" @click="placeorder"  v-if="pickanddrop_fare_data.fare == 0"></q-btn>
          </div>
        </span>

        <span v-if="xid == 2">
          <div class="row justify-center">
            <q-btn label="Sign In" class="cb-bg-green-8 text-white q-px-xl" @click="$router.push('sign-in?service=DM')"></q-btn>
          </div>
        </span>

        <!-- <q-dialog v-model="calander_dailog">
          <q-card class="q-dialog-plugin">
            <q-date v-model="model" mask="YYYY-MM-DD HH:mm" color="orange" class="fit"></q-date>
            <q-card-actions align="right">
              <q-btn flat label="cancel" @click="calander_dailog = false"></q-btn>
              <q-btn flat label="Ok"></q-btn>
            </q-card-actions>
          </q-card>
        </q-dialog> -->

        <q-dialog v-model="calander_dailog_picktime" persistent>
          <q-card class="q-dialog-plugin cb-round-borders-10">
            <q-date v-model="pick_date" mask="YYYY-MM-DD" color="orange" class="fit" @click="select()" v-if="date_change != 1"></q-date>
            <q-time format24h v-model="pick_time" color="orange" mask="HH:mm:ss" class="fit" v-if="date_change == 1"></q-time>
            <q-card-actions align="right" v-if="date_change == 1">
              <q-btn flat label="cancel" @click="pickdate_selection(),calander_dailog_picktime = false"></q-btn>
              <q-btn flat label="Ok" @click="store_date_time()"></q-btn>
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
              <div class="text-green text-bold cb-font-16"><q-icon name="currency_rupee"></q-icon>{{discount}} Saved</div>
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

        <q-dialog  v-model="territory_checkup_dialog" persistent>
          <q-card class="cb-round-borders-20">
            <q-card-section class="text-center">
              <q-avatar color="red" text-color="white" size="60px" icon="sentiment_dissatisfied" font-size="60px"/><br>
              <q-icon name="location_on" size="sm" class="cb-text-grey-5 q-py-sm"></q-icon>
              Pick Location & Drop Location are Same<br>
              Please Select Correct Locations<br>
              <q-btn label="change the location" class="text-red text-bold" flat @click="territory_checkup_dialog = false,$router.push('/PickAndDrop_s1?s_id=3') "></q-btn>
            </q-card-section>
          </q-card>
        </q-dialog >

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
      payment:ref('Pay Online on Delivery'),
      category:ref([]),
      service:ref([]),
      pick_territory_id:ref(null),
      delivery_territory_id:ref(null),
      order_success_dailog:ref(false),
      order:ref([]),
      coupon_dailog_error:ref(false),
      coupon_dailog_applied:ref(false),
      coupon_dailog_remove:ref(false),
      coupon_code:ref(null),
      discount:ref(null),
      date_change:ref(null),
      transaction_id:ref(null),
      payment_methods:ref([]),
      dm_categories:ref([]),
      xid:ref(null),
      vehicle_id :ref(''),
      trip_type :ref(''),
      vehicle_type :ref(''),
      usage_hrs_1 :ref(''),
      usage_hrs :ref(1), //new
      territory_checkup_dialog:ref(false),
    }
  },
  mounted () {
    var ps = this;
    ps.getToken();
    ps.dm_categories = JSON.parse(localStorage.getItem('categories'));
    ps.vehicle_id = JSON.parse(localStorage.getItem('category'));
    ps.trip_type = (localStorage.getItem('dm_trip_type'));
    ps.vehicle_type = (localStorage.getItem('dm_veh_type'));
    if(!localStorage.getItem('usage_hrs')){  //new
      ps.usage_hrs = 1;
    }else{
      ps.usage_hrs = parseInt(localStorage.getItem('usage_hrs'));
    }
    ps.get_payment_images();
    ps.pickdate_selection();
    ps.change_vehicle_r_onload(ps.vehicle_id);
    var pickup_address = JSON.parse(localStorage.getItem('pickup_address'));
    var drop_address = JSON.parse(localStorage.getItem('delivery_address'));
    if(pickup_address.location == drop_address.location){
      ps.territory_checkup_dialog =true;
    }
  },
  methods:{
    getToken(){
      var ps = this ;
      if(ps.$store.state.token){ ps.access_token = ps.$store.state.token; }
      else{ ps.access_token = ps.$store.state.token_cb; }

      if(ps.$store.state.xid){ps.xid = ps.$store.state.xid;}
      else{ps.xid = ps.$store.state.xid_cb;}
      if(ps.access_token == null ||  !ps.access_token){ ps.$router.push('/'); }
    },
    Subscription_function(){
      var ps = this;
      if( ps.toggle == true){
        ps.calander_dailog = true;
      }
    },
    get_payment_images(){
      var ps = this;
      var loader = document.getElementById('loader2');
        loader.style.display="block";
      let config = { headers: { "Authorization": `Bearer ${ps.access_token}`,}}
      ps.$api.get('/api/get-payment-images',config).then(function (response) {
        loader.style.display="none";
        if(response.data.status_code == 200){
          response.data.payment_modes.forEach((element, i)=> {
            if( (i+1) == response.data.default_payment_mode){ ps.paymnet = element; }
            var payment  = {
                          payment_modes:element,
                          images:(response.data.endPoint+response.data.images[i]),
                          payment_mode_status:response.data.payment_mode_status[i],
                          }
            ps.payment_methods.push(payment);
          }); 
          ps.transaction_id = response.data.transaction_id;
        }else{
          ps.$q.notify({ message: response.data.message, type: "negative",});
        }
      }).catch(function (error) {
        console.log(error);
      });    
    },
    couponremove_function(){
      var ps = this;
      ps.discount = null;
      ps.coupon_code = null;
      localStorage.removeItem('coupon1');
      ps.coupon_dailog_remove = true;
      // ps.location_address();
      ps.change_vehicle_r_onload(ps.vehicle_id);
    },
    addZero(i) {
     if (i < 10) {i = "0" + i}
      return i;
    },
    pickdate_selection(){
      var ps = this;
      if(!localStorage.getItem('pick_date') || !localStorage.getItem('pick_time')){
        var d = new Date();
        ps.pick_date = d.getFullYear()+'-'+ps.addZero(d.getDay())+'-'+ps.addZero(d.getUTCDate());
        ps.pick_time = d.getUTCHours()+":"+d.getUTCMinutes()+':'+d.getUTCSeconds();
      }else{
        ps.pick_date = localStorage.getItem('pick_date');
        ps.pick_time = localStorage.getItem('pick_time');
      }
     
    },
    screenredirection(){
      var ps = this;
      ps.$router.push('Coupons_pad?service_id='+ps.category.main_service_id);
    },
    placeorder(){
      var ps = this;
      if(!ps.payment){
        ps.$q.notify({ message: "Please Select Payment Method", type: "negative",}); 
        return false;    
      }
      if(ps.payment == 'Cash On Delivery'){var payment = 'COD';}
      else if(ps.payment == 'Pay Online on Delivery'){var payment = 'POD';}
      else if(ps.payment == 'Pay Now Online'){
        var payment = 'PO';
        ps.$q.notify({ message: "Pay Now Online is Not Available! Please Try Another Method", }); return false; 
      }

      if(ps.vehicle_type == 0 || ps.vehicle_type == '0'){ var car_type = "Automatic"; }
      else if (ps.vehicle_type == 1 || ps.vehicle_type == '1'){ var car_type = "Manual"; }

      if(!localStorage.getItem('pick_date') || !localStorage.getItem('pick_time')){
        var d = new Date();
        ps.pick_date = d.getFullYear()+'-'+ps.addZero(d.getDay())+'-'+ps.addZero(d.getUTCDate());
        ps.pick_time = d.getUTCHours()+":"+d.getUTCMinutes()+':'+d.getUTCSeconds();
      }else{
        ps.pick_date = localStorage.getItem('pick_date');
        ps.pick_time = localStorage.getItem('pick_time');
      }
      let formData = new FormData();
      formData.append("vehicle", ps.vehicle_id.vehicle_type);
      formData.append("trip_type", ps.trip_type);
      formData.append("drop_name", ps.user_data.name);
      formData.append("category_id", ps.vehicle_id.id);
      formData.append("user_instructions", localStorage.getItem('instructions'));
      formData.append("pick_territory_id", ps.pickuplocation_array.territory_id );
      formData.append("drop_phone", ps.user_data.mobile);
      formData.append("to_location", ps.delivery_address_array.name);
      formData.append("subscription_option", "");
      formData.append("car_model", ps.vehicle_id.name);
      formData.append("week_end", "");
      formData.append("payment_mode", payment);
      formData.append("plan", "");
      formData.append("service_id", 3);
      formData.append("tasks", "");
      formData.append("to_lat_lng", ps.delivery_address_array.location);
      formData.append("car_type", car_type);
      formData.append("from_lat_lng", ps.pickuplocation_array.location );
      formData.append("transaction_id", ps.transaction_id );
      formData.append("tat_time", "1" );
      formData.append("vehicle_type", ps.vehicle_type );
      formData.append("schedule_time", ps.pick_time) ;
      formData.append("payment_status", "pending");
      formData.append("pick_name", ps.user_data.name );
      formData.append("drop_territory_id", ps.delivery_address_array.territory_id);
      formData.append("pick_date",  ps.pick_date);
      formData.append("coupon", ps.coupon_code);
      formData.append("from_location", ps.pickuplocation_array.name );
      formData.append("territory_id", ps.pickuplocation_array.territory_id);
      formData.append("pick_time", ps.pick_time) ;
      formData.append("pick_phone", ps.user_data.mobile );
      formData.append("hours", ps.usage_hrs);
      var loader = document.getElementById('loader2');
        loader.style.display="block";
      let config = { headers: { "Authorization": `Bearer ${ps.access_token}`,}}
      ps.$api.post('/api/confirm-drive-trip',formData,config).then(function (response) {
        loader.style.display="none";
        if(response.data.status_code == 204){
          ps.$q.notify({ message: response.data.message, }); 
        } else if(response.data.status_code == 200){
          localStorage.removeItem('pickup_address');
          localStorage.removeItem('delivery_address');
          localStorage.removeItem('category');
          localStorage.removeItem('service');
          localStorage.removeItem('instructions');
          localStorage.removeItem('coupon1');
          ps.discount = null;
          ps.coupon_code = null;
          ps.order = response.data;
          ps.order_success_dailog = true;
        }
      }).catch(function (error) {
        console.log(error);
      });
    },
    select(){
      var ps = this;
      ps.date_change = 1;
    },
    change_vehicle_r_onload(vehicle,call_from){
      var ps = this;
      if(!localStorage.getItem('pick_date') || !localStorage.getItem('pick_time')){
        var d = new Date();
        ps.pick_date = d.getFullYear()+'-'+ps.addZero(d.getDay())+'-'+ps.addZero(d.getUTCDate());
        ps.pick_time = d.getUTCHours()+":"+d.getUTCMinutes()+':'+d.getUTCSeconds();
      }else{
        ps.pick_date = localStorage.getItem('pick_date');
        ps.pick_time = localStorage.getItem('pick_time');
      }
      if(call_from == 1){
        if(ps.vehicle_id.id != vehicle.id){
          ps.vehicle_id = vehicle;
          localStorage.setItem('category',JSON.stringify(vehicle)); //new
          let config = { headers: { "Authorization": `Bearer ${ps.access_token}`,}}
          ps.pickuplocation_array = JSON.parse(localStorage.getItem('pickup_address'));
          ps.delivery_address_array = JSON.parse(localStorage.getItem('delivery_address'));      
          ps.category = JSON.parse(localStorage.getItem('category'));
          ps.service = JSON.parse(localStorage.getItem('service'));
          var user_data = JSON.parse(ps.$store.state.userdetails);
          ps.coupon_code = localStorage.getItem('coupon1');
          ps.user_data = user_data.deatils;
          if(!ps.payment){
            ps.$q.notify({ message: "Please Select Payment Method", type: "negative",}); 
            return false;    
          }
          if(ps.payment == 'Cash On Delivery'){var payment = 'COD';}
          else if(ps.payment == 'Pay Online on Delivery'){var payment = 'POD';}
          else if(ps.payment == 'Pay Now Online'){var payment = 'PO';}
          var pickup_address = JSON.parse(localStorage.getItem('pickup_address'));
          var drop_address = JSON.parse(localStorage.getItem('delivery_address'));
          var instructions = localStorage.getItem('instructions');
          var vehicle_type = ps.$route.query.vehicle_type;
          var trip_type = ps.$route.query.trip_type;
          const d = new Date();
          let formData = new FormData();
          formData.append("trip_type", ps.trip_type);
          formData.append("user_instructions", instructions);
          formData.append("pick_date", ps.pick_date);
          formData.append("from_location", pickup_address.location);
          formData.append("territory_id", pickup_address.territory_id);
          formData.append("drop_territory_id", drop_address.territory_id);
          formData.append("coupon", ps.coupon_code);
          formData.append("service_id", '3');
          formData.append("pick_time", ps.pick_time);
          formData.append("to_location", drop_address.location);
          formData.append("category_id", vehicle.id);
          formData.append("vehicle", vehicle.vehicle_type);
          formData.append("pick_territory_id", pickup_address.territory_id);
          formData.append("car_type", '');
          formData.append("vehicle_type", ps.vehicle_type);      
          formData.append("hours", ps.usage_hrs);      
          var loader = document.getElementById('loader2');
          loader.style.display="block";
          ps.$api.post('/api/conf-terms-new',formData,config).then(function (response) {
            loader.style.display="none";
            if(response.data.status_code == 204){
              ps.$q.notify({ message: response.data.message, }); 
            } else if(response.data.status_code == 200){
              ps.pickanddrop_fare_data =  response.data; 
              if(ps.coupon_code){
                if(response.data.coupon == "Rs. 0"){
                  ps.coupon_dailog_error = true;
                  ps.discount = null;
                  ps.coupon_code = null;
                  localStorage.removeItem('coupon1');   //new
                }else{
                  ps.discount = response.data.coupon;
                  ps.coupon_dailog_applied = true;
                }
              }
            }
          }).catch(function (error) {
            console.log(error);
            // ps.$q.notify({ message: error, type: "negative",});
          });
        }
      }else{
        let config = { headers: { "Authorization": `Bearer ${ps.access_token}`,}}
        ps.pickuplocation_array = JSON.parse(localStorage.getItem('pickup_address'));
        ps.delivery_address_array = JSON.parse(localStorage.getItem('delivery_address'));
        ps.category = JSON.parse(localStorage.getItem('category'));
        ps.service = JSON.parse(localStorage.getItem('service'));
        var user_data = JSON.parse(ps.$store.state.userdetails);
        ps.coupon_code = localStorage.getItem('coupon1');
        ps.user_data = user_data.deatils;
        if(!ps.payment){
          ps.$q.notify({ message: "Please Select Payment Method", type: "negative",}); 
          return false;    
        }
        if(ps.payment == 'Cash On Delivery'){var payment = 'COD';}
        else if(ps.payment == 'Pay Online on Delivery'){var payment = 'POD';}
        else if(ps.payment == 'Pay Now Online'){var payment = 'PO';}
        var pickup_address = JSON.parse(localStorage.getItem('pickup_address'));
        var drop_address = JSON.parse(localStorage.getItem('delivery_address'));
        var instructions = localStorage.getItem('instructions');
        var vehicle_type = ps.$route.query.vehicle_type;
        var trip_type = ps.$route.query.trip_type;  
        const d = new Date();
        let formData = new FormData();
        formData.append("trip_type", ps.trip_type);
        formData.append("user_instructions", instructions);
        formData.append("pick_date", d.getFullYear()+'-'+ps.addZero(d.getDay())+'-'+ps.addZero(d.getUTCDate()));
        formData.append("from_location", pickup_address.location);
        formData.append("territory_id", pickup_address.territory_id);
        formData.append("drop_territory_id", drop_address.territory_id);
        formData.append("coupon", ps.coupon_code);
        formData.append("service_id", '3');
        formData.append("pick_time", (d.getUTCHours()+":"+d.getUTCMinutes()+':'+d.getUTCSeconds()));
        formData.append("to_location", drop_address.location);
        formData.append("category_id", vehicle.id);
        formData.append("vehicle", vehicle.vehicle_type);
        formData.append("pick_territory_id", pickup_address.territory_id);
        formData.append("car_type", '');
        formData.append("vehicle_type", ps.vehicle_type);      
        formData.append("hours", ps.usage_hrs);      
        var loader = document.getElementById('loader2');
        loader.style.display="block";
        ps.$api.post('/api/conf-terms-new',formData,config).then(function (response) {
          loader.style.display="none";
          if(response.data.status_code == 204){
            ps.$q.notify({ message: response.data.message, }); 
          } else if(response.data.status_code == 200){
            ps.pickanddrop_fare_data =  response.data; 
            if(ps.coupon_code){
              if(response.data.coupon == "Rs. 0"){
                ps.coupon_dailog_error = true;
                ps.discount = null;         //new
                ps.coupon_code = null;   //new
                localStorage.removeItem('coupon1');   //new
              }else{
                ps.discount = response.data.coupon;
                ps.coupon_dailog_applied = true;
              }
            }
          }
        }).catch(function (error) {
          console.log(error);
        });
      }
    },


    hr_incr(inc_dec){
      var ps = this;
      if(!localStorage.getItem('pick_date') || !localStorage.getItem('pick_time')){
        var d = new Date();
        ps.pick_date = d.getFullYear()+'-'+ps.addZero(d.getDay())+'-'+ps.addZero(d.getUTCDate());
        ps.pick_time = d.getUTCHours()+":"+d.getUTCMinutes()+':'+d.getUTCSeconds();
      }else{
        ps.pick_date = localStorage.getItem('pick_date');
        ps.pick_time = localStorage.getItem('pick_time');
      }
      if(inc_dec == 1){
        if(ps.usage_hrs > 1){
          ps.usage_hrs = ps.usage_hrs - 1;
          localStorage.setItem('usage_hrs',ps.usage_hrs);
          var ps = this;
          if(!ps.payment){
            ps.$q.notify({ message: "Please Select Payment Method", type: "negative",}); 
            return false;    
          }
          if(ps.payment == 'Cash On Delivery'){var payment = 'COD';}
          else if(ps.payment == 'Pay Online on Delivery'){var payment = 'POD';}
          else if(ps.payment == 'Pay Now Online'){var payment = 'PO';}
          var pickup_address = JSON.parse(localStorage.getItem('pickup_address'));
          var drop_address = JSON.parse(localStorage.getItem('delivery_address'));
          var instructions = localStorage.getItem('instructions');
          const d = new Date();
          let formData = new FormData();
          formData.append("trip_type", ps.trip_type);
          formData.append("user_instructions", instructions);
          formData.append("pick_date", ps.pick_date);
          formData.append("from_location", pickup_address.location);
          formData.append("territory_id", pickup_address.territory_id);
          formData.append("drop_territory_id", drop_address.territory_id);
          formData.append("coupon", ps.coupon_code);
          formData.append("service_id", '3');
          formData.append("pick_time", ps.pick_time);
          formData.append("to_location", drop_address.location);
          formData.append("category_id", ps.vehicle_id.id);
          formData.append("vehicle", ps.vehicle_id.vehicle_type); //new
          formData.append("pick_territory_id", pickup_address.territory_id);
          formData.append("car_type", '');
          formData.append("vehicle_type", ps.vehicle_type);      
          formData.append("hours", ps.usage_hrs);      
          var loader = document.getElementById('loader2');
          loader.style.display="block";
          let config = { headers: { "Authorization": `Bearer ${ps.access_token}`,}}
          ps.$api.post('/api/conf-terms-new',formData,config).then(function (response) {
            loader.style.display="none";
            if(response.data.status_code == 204){
              ps.$q.notify({ message: response.data.message, }); 
            }else if(response.data.status_code == 200){
              ps.pickanddrop_fare_data =  response.data; 
              if(ps.coupon_code){
                if(response.data.coupon == "Rs. 0"){
                  ps.coupon_dailog_error = true;
                  if(issset(ps.discount)){ps.discount = '';}
                }else{
                  ps.discount = response.data.coupon;
                  ps.coupon_dailog_applied = true;
                }
              }else{
                if(issset(ps.discount)){ps.discount = ''}
              }
            }
          }).catch(function (error) {
            console.log(error);
          });
        }
      }else if(inc_dec == 2){
        if(ps.usage_hrs < 24){
          ps.usage_hrs = ps.usage_hrs + 1;
          localStorage.setItem('usage_hrs',ps.usage_hrs);
          var ps = this;
          if(!ps.payment){
            ps.$q.notify({ message: "Please Select Payment Method", type: "negative",}); 
            return false;    
          }
          if(ps.payment == 'Cash On Delivery'){var payment = 'COD';}
          else if(ps.payment == 'Pay Online on Delivery'){var payment = 'POD';}
          else if(ps.payment == 'Pay Now Online'){var payment = 'PO';}
          var pickup_address = JSON.parse(localStorage.getItem('pickup_address'));
          var drop_address = JSON.parse(localStorage.getItem('delivery_address'));
          var instructions = localStorage.getItem('instructions');
          // var vehicle_type = ps.$route.query.vehicle_type;
          // var trip_type = ps.$route.query.trip_type;
          const d = new Date();
          let formData = new FormData();
          formData.append("trip_type", ps.trip_type);
          formData.append("user_instructions", instructions);
          formData.append("pick_date", ps.pick_date);
          formData.append("from_location", pickup_address.location);
          formData.append("territory_id", pickup_address.territory_id);
          formData.append("drop_territory_id", drop_address.territory_id);
          formData.append("coupon", ps.coupon_code);
          formData.append("service_id", '3');
          formData.append("pick_time", ps.pick_time);
          formData.append("to_location", drop_address.location);
          formData.append("category_id", ps.vehicle_id.id);
          formData.append("vehicle", ps.vehicle_id.vehicle_type); //new
          formData.append("pick_territory_id", pickup_address.territory_id);
          formData.append("car_type", '');
          formData.append("vehicle_type", ps.vehicle_type);      
          formData.append("hours", ps.usage_hrs);      
          var loader = document.getElementById('loader2');
          loader.style.display="block";
          let config = { headers: { "Authorization": `Bearer ${ps.access_token}`,}}
          ps.$api.post('/api/conf-terms-new',formData,config).then(function (response) {
            loader.style.display="none";
            if(response.data.status_code == 204){
              ps.$q.notify({ message: response.data.message, }); 
            }else if(response.data.status_code == 200){
              ps.pickanddrop_fare_data =  response.data; 
              if(ps.coupon_code){
                if(response.data.coupon == "Rs. 0"){
                  ps.coupon_dailog_error = true;
                  if(issset(ps.discount)){ps.discount = ''}
                }else{
                  ps.discount = response.data.coupon;
                  ps.coupon_dailog_applied = true;
                }
              }else{
                if(issset(ps.discount)){ps.discount = ''}
              }
            }
          }).catch(function (error) {
            console.log(error);
          });
        }
      }
    },
    store_date_time(){
      var ps = this;
      ps.calander_dailog_picktime = false;
      localStorage.setItem('pick_date',ps.pick_date);
      localStorage.setItem('pick_time',ps.pick_time);
      ps.date_change = '';
    },
  }
})
</script>
<style scoped>
.coupon-wrap{ flex-wrap: nowrap;overflow: scroll;overflow-y: hidden; }
</style>
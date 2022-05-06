<template>
  <q-layout  view="lHh lpr lFf">

    <q-header>
      <q-toolbar class="cb-bg-white-2 cb-text-blue-8">
        <q-btn flat dense icon="arrow_back" @click="Screen_Back_Redirection()"/>
        <q-btn icon="place" class="q-pa-none cb-font-12" borderless flat :label="$store.state.showaddress"></q-btn>
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

    <q-page-container class="animate__animated animate__slideInRight">
      <q-page class="q-px-md q-py-sm">
        <div id="loader2" class="pre-loader" style="display:none"></div>
        <q-card class="cb-round-borders-10 cb-shadow-2">
          <q-card-section class="text-grey-8">
            <div class="row" >
              <div class="col-12 q-py-sm text-weight-bolder">
                <q-icon name="location_on" class="cb-text-orange-8" size="sm"></q-icon>
                <span class="q-px-sm text-weight-bolder">Pick location</span>
                <q-icon name="edit" size="xs" @click="$router.push('Search_location?address=c1')"></q-icon>
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
                <span class="q-px-sm text-weight-bolder" @click="$router.push('Search_location?address=c2')">Drop location</span>
                <q-icon name="edit" size="xs">
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
            <span>Delivering - Drive Me</span>
          </q-card-section>
          <q-card-section class="cb-font-16 text-grey-9">
            <div class="flex q-pt-xs"> Total Distance<q-space></q-space>{{pickanddrop_fare_data.total_distance}}</div>
            <div class="flex q-pt-xs">Estimated time<q-space></q-space>{{ pickanddrop_fare_data.time_in_min }} min.</div>
            <div class="flex q-pt-xs">Delivery Charges<q-space></q-space>{{pickanddrop_fare_data.delivery_fee}}</div>
            <div class="flex q-pt-xs text-red" v-if="discount != null">
              Discount<q-space></q-space>{{discount}}
            </div>
            <div class="flex q-pt-xs">Tax & Fees<q-space></q-space>{{ pickanddrop_fare_data.gst }}</div>
            <div class="flex q-pt-xs text-weight-bolder">Total<q-space></q-space>{{ pickanddrop_fare_data.grand_total }}</div>
          </q-card-section>
        </q-card>
    
        <div class="flex q-py-md" v-if="coupon_code == null ">
          <div class="cb-shadow-1 cb-round-borders-10 bg-white q-px-sm" style="width:75%">
            <q-input dense placeholder="ENTER COUPON CODE" borderless @click="screenredirection()">
              <template v-slot:prepend>
                  <q-avatar><img src="https://chotabeta.app/dev/testenv/public/imgs/discount_1.png"></q-avatar>
              </template>
            </q-input>
          </div>
          <q-btn label="apply" class="cb-bg-orange-8 cb-round-borders-10 text-white q-ml-sm" style="width:22%"></q-btn>
        </div>

        <div class="flex q-py-md" v-if="coupon_code != null">
          <div class="cb-shadow-1 cb-round-borders-10 bg-white q-px-sm" style="width:75%">
            <q-input dense :placeholder="coupon_code" borderless @click="screenredirection()">
              <template v-slot:prepend>
                  <q-avatar><img src="https://chotabeta.app/dev/testenv/public/imgs/discount_1.png"></q-avatar>
              </template>
            </q-input>
          </div>
          <q-btn label="remove" class="cb-bg-orange-8 cb-round-borders-10 text-white q-ml-sm" style="width:22%" @click="couponremove_function()"></q-btn>
        </div>
        
        <span v-if="xid != 2">
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
            <q-btn label="Sign In" class="cb-bg-green-8 text-white q-px-xl" @click="$router.push('sign-in?service=PAD')"></q-btn>
          </div>
        </span>


        <q-dialog v-model="calander_dailog">
          <q-card class="q-dialog-plugin">
            <q-date v-model="model" mask="YYYY-MM-DD HH:mm" color="orange" class="fit"></q-date>
            <q-card-actions align="right">
              <q-btn flat label="cancel" @click="calander_dailog = false"></q-btn>
              <q-btn flat label="Ok"></q-btn>
            </q-card-actions>
          </q-card>
        </q-dialog>

        <q-dialog v-model="calander_dailog_picktime" persistent>
          <q-card class="q-dialog-plugin cb-round-borders-10">
            <q-date v-model="pick_date" mask="YYYY-MM-DD" color="orange" class="fit" @click="select()" v-if="date_change != 1"></q-date>
            <q-time format24h v-model="pick_time" color="orange" mask="HH:mm:ss" class="fit" v-if="date_change == 1"></q-time>
            <q-card-actions align="right" v-if="date_change == 1">
              <q-btn flat label="cancel" @click="pickdate_selection(),calander_dailog_picktime = false"></q-btn>
              <q-btn flat label="Ok" @click="calander_dailog_picktime = false"></q-btn>
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
              <div>Coupon Code <span class="text-weight-bolder">{{ coupon_code }}</span> Applied</div>
              <div class="text-green text-bold cb-font-16"><q-icon name="currency_rupee"></q-icon>{{ discount }} Saved</div>
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
              {{ territory_data.custom_text }}<br>
              {{ territory_data.pick_and_drop_too_far_away }}<br>
              <q-btn label="change the location" class="text-red text-bold" flat @click="$router.push('PickAndDrop_s1')"></q-btn>
            </q-card-section>
          </q-card>
        </q-dialog>

        <q-dialog  v-model="fare_location_error" persistent>
          <q-card class="cb-round-borders-20">
            <q-card-section class="text-center">
              <q-avatar color="red" text-color="white" size="60px" icon="sentiment_dissatisfied" font-size="60px"/><br>
              <q-icon name="location_on" size="sm" class="cb-text-grey-5 q-py-sm"></q-icon>
               {{ pickanddrop_fare_data.message }}<br>
              <q-btn label="change the location" class="text-red text-bold" flat @click="$router.push('PickAndDrop_s1')"></q-btn>
            </q-card-section>
          </q-card>
        </q-dialog>

        <q-dialog v-model="payment_decline_method">
        <q-card class="q-px-md q-py-md cb-round-borders-20 text-grey-9">
          <q-card-section class="text-center">
            <q-avatar size="80px" class="bg-orange-3">
              <q-avatar size="65px" class="bg-white cb-text-orange-8" font-size="60px" icon="close"></q-avatar>
            </q-avatar><br>
            <span class="text-weight-bolder text-h6">Your Payment Has Been Declined!</span>
            <br>
            <q-btn label="Ok" class="q-px-xl cb-font-16 cb-bg-orange-8 text-white q-mb-sm q-mt-lg" @click="refresh_page_without_response()"></q-btn>
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
      delivery_territory_id:ref(null),
      order_success_dailog:ref(false),
      order:ref([]),
      coupon_dailog_error:ref(false),
      coupon_dailog_applied:ref(false),
      coupon_dailog_remove:ref(false),
      coupon_code:ref(null),
      discount:ref(null),
      date_change:ref(null),
      payment_methods:ref([]),
      transaction_id:ref(null),
      territory_checkup_dialog:ref(false),
      fare_location_error:ref(false),
      territory_data:ref(null),
      xid:ref(null),
      payment_decline_method:ref(false),
    }
  },
   mounted () {
    this.getToken();
    this.mypath();
    this.get_payment_images();
    this.pickdate_selection();
    this.location_address();
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
      if ( ps.toggle == true){ ps.calander_dailog = true; }
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
    location_address(){
      var ps = this;
      let config = { headers: { "Authorization": `Bearer ${ps.access_token}`,}}
      var loader = document.getElementById('loader2');
      loader.style.display="block";
        var picked_address_array =  JSON.parse(localStorage.getItem('pickup_address'));
        ps.$api.get('/api/check-territory2?lat_lng='+picked_address_array.location+'&pincode='+picked_address_array.postal_code+'&xid='+ps.xid,config).then(function (response) {
          loader.style.display="none";
            if(response.data.full_screen_error_status == 0){
              ps.territory_data = response.data;
              ps.picked_address_array = {   drop_flat:      picked_address_array.drop_flat,
                                            flat_no:        picked_address_array.flat_no,
                                            id:             picked_address_array.id,
                                            location:       picked_address_array.location,
                                            location_type:  picked_address_array.location_type,
                                            name:           picked_address_array.name,
                                            nick_name:      picked_address_array.nick_name,
                                            pick_flat:      picked_address_array.pick_flat,
                                            postal_code:    picked_address_array.postal_code,
                                            updated_at:     picked_address_array.updated_at,
                                            user_id:        picked_address_array.user_id,
                                            territory_id:   response.data.zone_id,
                                        }
                localStorage.setItem('pickup_address',JSON.stringify(ps.picked_address_array));
                ps.location_address_drop();
                }
              else{
                ps.territory_checkup_dialog =  true;
              }
            }).catch(function (error) {
              console.log(error);
              // ps.$q.notify({ message: error, type: "negative",});
            });
    },
    location_address_drop(){
      var ps = this;
      let config = { headers: { "Authorization": `Bearer ${ps.access_token}`,}}
      var loader = document.getElementById('loader2');
        loader.style.display="block";
      var delivery_address_array     =  JSON.parse(localStorage.getItem('delivery_address'));
      ps.$api.get('/api/check-territory2?lat_lng='+delivery_address_array.location+'&pincode='+delivery_address_array.postal_code+'&xid='+ps.xid,config).then(function (response) {
        loader.style.display="none";
        if(response.data.full_screen_error_status ==0){
          ps.delivery_address_array = {   drop_flat:      delivery_address_array.drop_flat,
                                          flat_no:        delivery_address_array.flat_no,
                                          id:             delivery_address_array.id,
                                          location:       delivery_address_array.location,
                                          location_type:  delivery_address_array.location_type,
                                          name:           delivery_address_array.name,
                                          nick_name:      delivery_address_array.nick_name,
                                          pick_flat:      delivery_address_array.pick_flat,
                                          postal_code:    delivery_address_array.postal_code,
                                          updated_at:     delivery_address_array.updated_at,
                                          user_id:        delivery_address_array.user_id,
                                          territory_id:   response.data.zone_id,
                                        }
                localStorage.setItem('delivery_address',JSON.stringify(ps.delivery_address_array));
                ps.location_address_2();
              }
              else{
                ps.territory_checkup_dialog =  true;
              }
            }).catch(function (error) {
              console.log(error,"sddfdfgfggfffffffffffffffffffffffffff");
              // ps.$q.notify({ message: error, type: "negative",});
            });   
    },
    location_address_2(){
      var ps = this;
      let config = { headers: { "Authorization": `Bearer ${ps.access_token}`,}}
      ps.pickuplocation_array =JSON.parse(localStorage.getItem('pickup_address'));
      ps.delivery_address_array = JSON.parse(localStorage.getItem('delivery_address'));
      ps.category = JSON.parse(localStorage.getItem('category'));
      ps.service = JSON.parse(localStorage.getItem('service'));
      ps.coupon_code = localStorage.getItem('coupon1');
      if(ps.$store.state.userdetails){
        var user_data = JSON.parse(ps.$store.state.userdetails);
        ps.user_data = user_data.deatils;
      }
        
      // console.log(ps.coupon_code,"couponsssss");
      console.log(ps.pickuplocation_array,"pickuplocation_array");
      console.log(ps.delivery_address_array,"delivery_address_array");
      // console.log(ps.category,"category");
      // console.log(ps.service,"service");
      // console.log(ps.user_data,"user_data");

      const d = new Date();
      let formData = new FormData();
      formData.append("to_location", ps.pickuplocation_array.location);
      formData.append("coupon",ps.coupon_code);
      formData.append("pick_time", ps.pick_time );
      formData.append("drop_territory_id", ps.delivery_address_array.territory_id);
      formData.append("from_location", ps.delivery_address_array.location);
      formData.append("weight", null);
      formData.append("pick_date", ps.pick_date);
      formData.append("schedule_timestamp",null );
      formData.append("week_end", null);
      formData.append("plan", null);
      formData.append("pick_territory_id", ps.pickuplocation_array.territory_id);
      var loader = document.getElementById('loader2');
      loader.style.display="block";
      ps.$api.post('/api/fare-pickdrop-new',formData,config).then(function (response) {
        loader.style.display="none";
          ps.pickanddrop_fare_data =  response.data; 
          if(response.data.status_code == 209){
            ps.fare_location_error = true;
          }
          // console.log(ps.territory_data.vicinity_range,"ps.territory_data.vicinity_range ",(response.data.distance_in_km)*1000,"(response.data.distance_in_km)*1000")
          if(ps.territory_data.vicinity_range >= (response.data.distance_in_km)*1000){
            if(ps.coupon_code){
              if(response.data.coupon == "Rs. 0"){
                ps.coupon_dailog_error = true;
              }else{
                ps.discount = response.data.coupon;
                ps.coupon_dailog_applied = true;
              }
            }
            ps.discount = response.data.coupon;
          }else{
            ps.territory_checkup_dialog = true;
          }
          if(ps.$route.query.response == "pass"){
            ps.placeorder_function();
          }else if(ps.$route.query.response == "fail"){
            // alert('faile to payment');
            ps.payment_decline_method =true;
          }
        }).catch(function (error) {
          console.log(error);
          // ps.$q.notify({ message: error, type: "negative",});
        });
    },
    couponremove_function(){
      var ps = this;
      ps.discount = null;
      ps.coupon_code = null;
      localStorage.removeItem('coupon1');
      ps.coupon_dailog_remove = true;
      ps.location_address();
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
      else if(ps.payment == 'Pay Now Online'){var payment = 'Online'; }
      var url = "https://pay.easebuzz.in/pay/"+ps.pickanddrop_fare_data.payment_access_token;
      if(payment == "Online"){
        window.location = url; 
      }else{
        ps.placeorder_function();
      }
    },
    placeorder_function(){
      var ps = this;

      if(ps.$route.query.response == "pass"){
        var payment_status  = "paid";
        var payment = "Online";
      }else{
        var payment_status = "pending";
        if(ps.payment == 'Cash On Delivery'){var payment = 'COD'; }
        else if(ps.payment == 'Pay Online on Delivery'){var payment = 'POD'; }
      }

      let formData = new FormData();
      formData.append("base_location", ps.pickuplocation_array.location);
      formData.append("base_pincode", 0);
      formData.append("xid", ps.xid);
      formData.append("category_id", ps.category.id);
      formData.append("service_id", ps.category.main_service_id);
      formData.append("plan", null);
      formData.append("transaction_id", ps.transaction_id);
      formData.append("payment_mode", payment);
      formData.append("coupon", ps.coupon_code);
      formData.append("payment_status", payment_status);
      formData.append("schedule_timestamp", (new Date()));
      formData.append("weight", null);
      formData.append("item_name", ps.category.name);
      formData.append("instruction", localStorage.getItem('instructions'));
      formData.append("week_end", null);      
      formData.append("pick_flat", ps.pickuplocation_array.flat_no);
      formData.append("from_lat_lng", ps.pickuplocation_array.location );
      formData.append("pick_date", ps.pick_date );
      formData.append("from_location", ps.pickuplocation_array.name );
      formData.append("pick_phone", ps.user_data.mobile );
      formData.append("pick_territory_id", ps.pickuplocation_array.territory_id );
      formData.append("pick_name", ps.user_data.name );
      formData.append("pick_time", ps.pick_time );

      formData.append("to_location", ps.delivery_address_array.name);
      formData.append("drop_flat", ps.delivery_address_arrayflat_no);
      formData.append("drop_phone", ps.user_data.mobile);
      formData.append("drop_territory_id", ps.delivery_address_array.territory_id);
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
            localStorage.removeItem('instructions');
            localStorage.removeItem('coupon1');
            ps.discount = null;
            ps.coupon_code = null;
            ps.order = response.data;
            ps.order_success_dailog = true;

          }
        }).catch(function (error) {
          console.log(error);
          // ps.$q.notify({ message: error, type: "negative",});
        });
    },
    select(){
      var ps = this;
      ps.date_change = 1;
    },
    refresh_page_without_response(){
      var ps = this;
      ps.payment_decline_method = false;
      ps.$router.push(ps.$route.path);
    },
    mypath(){
      var ps=  this;
      var myallpaths = [];
      var i = 0;
      if(localStorage.getItem('mypath')){
        myallpaths = JSON.parse(localStorage.getItem('mypath'));
      }
      myallpaths.forEach(( path,index ) => {
        if(ps.$route.path == path){
          if(i == 0){ i = index; }
        }
      });
      if(i == 0){
        myallpaths.push(ps.$route.path);
      }else{
        for(var j=1;j<= myallpaths.length;++j){
          if(j<=i){ }else{ myallpaths.splice(j,1); }
        }
      }
      localStorage.setItem('mypath',JSON.stringify(myallpaths));
    },
    Screen_Back_Redirection(){
      var ps = this;
      var myallpaths = JSON.parse(localStorage.getItem('mypath'));
      var previous = myallpaths.length;
      ps.$router.push(myallpaths[previous-2]);
    }
  }
})
</script>
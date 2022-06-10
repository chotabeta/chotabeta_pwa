<template>
  <q-page class="animate__animated animate__slideInRight">

    <div id="loader2" class="pre-loader" style="display:none"></div>

    <div class="row items-center justify-center cb-bg-white-2">
      <span class="cb-text-orange-8 text-weight-bolder cb-font-16">My Rides</span>
    </div>
    <q-tabs :breakpoint="0" align="center" dense v-model="tab">
      <q-tab class="cb-text-orange-8" label="Active" name="Active"></q-tab>
      <q-tab class="cb-text-orange-8" label="Past" name="Past"></q-tab>
    </q-tabs>

    <q-tab-panels v-model="tab" animated>
      <q-tab-panel name="Active">
        <q-card class="cb-shadow-1 cb-round-borders-10 q-pa-sm q-mb-md" v-for="i in Active_orders" :key='i' v-if="Active_orders.length != 0 ">
          <q-card-section class="cb-font-12 cb-text-grey-4 q-px-sm q-py-none">
            <div class="row items-center q-px-md q-py-sm">
             <q-avatar size="50px" style="border: 1px solid grey"  class="q-mr-sm">
                <q-avatar size="30px" square>
                  <img  :src="image_url + i.categ_image" class="fit">
                  <!-- <img src="https://chotabeta.app/dev/testenv/public/uploads/assets/fruits_vegges.png" class="fit"> -->
                </q-avatar>
              </q-avatar>
              <div class="col">
                <span class="cb-text-blue-8 text-weight-bolder">{{ i.vehicle_model}}</span><br />
                <span class="cb-text-grey-4">{{ i.service_name }}</span>
              </div>
              <div class="text-right col text-weight-bolder">
                <span>Order #{{ i.uid }}</span><br/>
                <span>{{ i.order_status_string }}
                  <q-icon name="check_circle" size="xs" color="orange"></q-icon></span>
              </div>
            </div>
            <q-separator />

            <table class="full-width q-py-xs">
              <tr colspan="2">
                <td>Ordered On:&nbsp;&nbsp;
                {{ i.d_schedule_date }}</td>
              </tr>
              <tr>
                <td class="flex">Payment :&nbsp;&nbsp; {{ i.payment_mode }} <q-space></q-space>Amount:&nbsp;&nbsp;Rs.{{ i.amount }}</td>
              </tr>
            </table>

            <q-separator />

            <div class="flex q-py-xs">
              <q-btn label="Track Order" dense flat class="text-weight-bolder cb-font-14 cb-text-blue-8" @click="trackorderdata(i.uid)"></q-btn>
              <q-space></q-space>
              <q-btn class="text-weight-bolder cb-font-14 cb-text-orange-8" dense flat v-if="i.amount != 0 && i.payment_status != 'paid'" @click="order_payment_function(i.uid)">Pay Now</q-btn>
              <span class="text-weight-bolder cb-font-14 cb-text-green-8" v-if="i.payment_status == 'paid' && i.amount != 0" >{{ i.payment_status }}</span>
            </div>

            <q-separator />

            <div class="flex text-weight-bolder flex-center q-py-sm cb-font-16 cb-text-grey-4" @click="$router.push('/Home/OrderDetails?order_id='+i.uid+'&service=d')">View Details</div>
          </q-card-section>
        </q-card>

        <div class="text-center q-mt-md" v-else>
          <!-- <q-img src="https://chotabeta.app/dev/testenv/public/imgs/cart-2.png" width="30%"></q-img> -->
          <q-avatar size="80px" square icon="drive_eta" font-size="80px" class="cb-text-orange-8"></q-avatar>
          <h5 class="cb-text-grey-4 text-bold">Orders Not Found.</h5>
          <span class="cb-text-grey-4 cb-font-16">We are here to serve . Get your packages, groceries and many more to your door step at single click.</span>
          <q-btn label="Book your ride now" class="cb-bg-orange-8 text-white q-px-xl q-my-lg cb-round-borders-10" @click="$router.push('/home/dashboard')"></q-btn>
        </div>

      </q-tab-panel>

      <q-tab-panel name="Past">

      	<q-card class="cb-shadow-1 cb-round-borders-10 q-pa-sm q-mb-md" v-for="i in past_orders" :key='i' v-if="past_orders.length != 0 ">
          <q-card-section class="cb-font-12 cb-text-grey-4 q-px-sm q-py-none">
            <div class="row items-center q-px-md q-py-sm">
             <q-avatar size="50px" style="border: 1px solid grey"  class="q-mr-sm">
                <q-avatar size="30px" square>
                  <img  :src="image_url + i.categ_image" class="fit">
                  <!-- <img src="https://chotabeta.app/dev/testenv/public/uploads/assets/fruits_vegges.png" class="fit"> -->
                </q-avatar>
              </q-avatar>
              <div class="col">
                <span class="cb-text-blue-8 text-weight-bolder">{{ i.vehicle_model}}</span><br />
                <span class="cb-text-grey-4">{{ i.service_name }}</span>
              </div>
              <div class="text-right col text-weight-bolder">
                <span>Order #{{ i.uid }}</span><br/>
                <span>{{ i.order_status_string }}
                  <q-icon name="check_circle" size="xs" color="orange"></q-icon></span>
              </div>
            </div>
            <q-separator />

            <table class="full-width q-py-xs">
              <tr colspan="2">
                <td>Ordered On:&nbsp;&nbsp;
                {{ i.d_schedule_date }}</td>
              </tr>
              <tr>
                <td class="flex">Payment :&nbsp;&nbsp; {{ i.payment_mode }} <q-space></q-space>Amount:&nbsp;&nbsp;Rs.{{ i.amount }}</td>
              </tr>
            </table>

            <q-separator />

            <div class="flex q-py-sm">
              <!-- <q-btn label="Track Order" flat class="text-weight-bolder cb-font-14 cb-text-blue-8" @click="trackorderdata(i.uid)"></q-btn> -->
              <q-space></q-space>
              <q-btn class="text-weight-bolder cb-font-14 cb-text-orange-8" dense flat v-if="i.amount != 0 && i.payment_status != 'paid'" @click="order_payment_function(i.uid)">Pay Now</q-btn>
              <span class="text-weight-bolder cb-font-14 cb-text-green-8" v-if="i.payment_status == 'paid' && i.amount != 0" >{{ i.payment_status }}</span>
              <!-- <span class="text-weight-bolder cb-font-14 cb-text-orange-8" v-if="i.status == 701" >Pay Now</span> -->
            </div>
            <q-separator />

            <div class="flex text-weight-bolder flex-center q-py-sm cb-font-16 cb-text-grey-4" @click="$router.push('/Home/OrderDetails?order_id='+i.uid+'&service=d')">View Details</div>
          </q-card-section>
        </q-card>

        <div class="text-center q-mt-md" v-else>
          <!-- <q-img src="https://chotabeta.app/dev/testenv/public/imgs/cart-2.png" width="30%"></q-img> -->
          <q-avatar size="80px" square icon="drive_eta" font-size="80px" class="cb-text-orange-8"></q-avatar>
          <h5 class="cb-text-grey-4 text-bold">Orders Not Found.</h5>
          <span class="cb-text-grey-4 cb-font-16">We are here to serve . Get your packages, groceries and many more to your door step at single click.</span>
          <q-btn label="Book your ride now" class="cb-bg-orange-8 text-white q-px-xl q-my-lg cb-round-borders-10" @click="$router.push('/home/dashboard')"></q-btn>
        </div>
      </q-tab-panel>
    </q-tab-panels>
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

  
</template>
<script>
import axios from 'boot/axios'
import { ref } from "vue"
export default {
  setup() {
    return {
      tracking_details:[],
      data: ref(null),
      tab: ref("Active"),
      access_token: ref(null),
      Active_orders: ref([]),
      image_url: ref(null),
      xid:ref(null),
      past_orders:ref([]),
      payment_decline_method:ref(false),
    }
  },

  mounted() {
    this.getAccessToken();
    this.gettodaydata();
    if(this.$route.query.response == 'fail'){
      this.payment_decline_method = true;
    }
    if(this.$route.query.id){
      this.update_payment_status(this.$route.query.id);
    }
  },

  methods: {
    getAccessToken() {
      var ps = this;
      if(ps.$store.state.token){ ps.access_token = ps.$store.state.token; }
      else{ ps.access_token = ps.$store.state.token_cb; }

      if(ps.$store.state.xid){ps.xid = ps.$store.state.xid;}
      else{ps.xid = ps.$store.state.xid_cb;}

      if(ps.access_token == null ||  !ps.access_token){ ps.$router.push('/'); }
    },
    gettodaydata() {
      var ps = this;
      var loader = document.getElementById('loader2');
      loader.style.display="block";
      let config = { headers: { Authorization: `Bearer ${ps.access_token}` } };
      ps.$api.get("/api/v2/my-drives2", config).then(function (response) {
        loader.style.display="none";
        // console.log(response.data, "my drives");
        if(response.data.status_code == 200){
          ps.Active_orders = response.data.active_drives;
          ps.image_url = response.data.image_url;
          ps.past_orders= response.data.past_drives;
        }
      }).catch(function (error) {
        console.log(error);
      });
    },

    trackorderdata(uid) {
      var ps = this;
      ps.$router.push("/LocationTrack?uid="+uid);
    },
    order_payment_function(uid){
      var ps= this;
      var loader = document.getElementById('loader2');
      loader.style.display="block";
      let config = { headers: { Authorization: `Bearer ${ps.access_token}` } };
      ps.$api.get("/api/v4/mydrives-payment?uid="+uid, config).then(function (response) {
        loader.style.display="none";
        if(response.data.status_code == 200){
          var url = "https://pay.easebuzz.in/pay/"+response.data.payment_access_token;
          window.location = url;
        }else{
          ps.$q.notify({ message:response.data.message, type: 'negative',progress: true,});
        }
        console.log(response.data, "v4/mydrives-payment?uid=");
      }).catch(function (error) {
        console.log(error);
      });
    },
    refresh_page_without_response(){
      var ps = this;
      ps.payment_decline_method = false;
      ps.$router.push(ps.$route.path);
    },
    update_payment_status(order_id){
      var ps = this;
      var loader = document.getElementById('loader2');
      loader.style.display="block";
      let config = { headers: { Authorization: `Bearer ${ps.access_token}` } };
      ps.$api.post("/api/update-payment-status",{id: order_id}, config).then(function (response) {
        loader.style.display="none";
      }).catch(function (error) {
        console.log(error);
      });
      ps.$router.push(ps.$route.path);
      ps.gettodaydata();  
    },
    
  },
};
</script>
<template>
  <q-layout view="lHh lpr lFf" class="animate__animated animate__slideInRight">
    <q-header>
      <q-toolbar class="cb-bg-white-2 cb-text-blue-8">
        <q-btn flat dense round icon="arrow_back" @click="Screen_Back_Redirection()" />
        <q-btn icon="place" class="q-pa-none cb-font-12" borderless flat :label="$store.state.showaddress"></q-btn>
        <q-space></q-space>
        <q-btn round dense icon="notifications" flat @click="$router.push('/home/Notification')">
          <q-badge color="red" rounded floating style="margin-top: 8px; margin-right: 8px"></q-badge>
        </q-btn>
        <div style="background: transparent">
          <q-btn round dense icon="shopping_cart" flat style="background: transparent" @click="$router.push('PickFromStore_layouts_s3')">
            <q-badge class="cb-bg-orange-8" rounded floating>0</q-badge>
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <q-page class="q-pa-sm">
        <div id="loader2" class="pre-loader" style="display:none"></div>
        <div class="row justify-center">
          <q-img src="https://chotabeta.app/dev/testenv/public/imgs/cam_order.png"  width="65%"/>
        </div>
        <div class="row justify-center q-my-md">
          <div class="col q-px-xs">
            <q-card class="cb-round-borders-10 q-my-md cb-shadow-1">
              <q-card-section class="cb-bg-grey-2 cb-text-blue-8 text-weight-bolder cb-font-16 q-pa-sm">
                <span>Payment Method</span>
              </q-card-section>
              <q-card-section class="cb-font-16">
                <div v-for="payment_data in array" :key="payment_data">
                  <div class="row  items-center" v-if="payment_data.payment_mode_status == 1">
                  <q-img :src="endPoint+payment_data.images" width="25px"></q-img>
                  <span class="q-px-sm">{{payment_data.payment_modes}}</span>
                  <q-space></q-space>
                    <q-radio v-model="paymentmethod" :val="payment_data.payment_modes" color="orange" />
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
        <div class="row justify-center"  v-if="xid != 2">
          <q-btn
            label="Pay Now"
            class="cb-bg-orange-8 text-white q-px-xl" @click="cam_order_placement()"
          ></q-btn>
        </div>
        <span v-if="xid == 2">
          <div class="row justify-center">
            <q-btn label="Sign In" class="cb-bg-green-8 text-white q-px-xl" @click="$router.push('sign-in?service=CO')"></q-btn>
          </div>
        </span>

        <q-dialog v-model="order_success_dailog" persistent>
          <q-card class="cb-round-borders-10">
            <q-card-section class="text-center q-pa-lg">
              <q-avatar size="70px" font-size="70px" icon="check_circle" class="text-white bg-orange"/>
              <div class="text-h5 q-py-sm "><b>Successfully placed</b></div>
              <div>You can track the delivery in the Orders section</div>
              <q-btn label="continue shopping" color="orange" @click="$router.push('/home/dashboard')" class="q-my-sm cb-round-borders-10"></q-btn><br>
              <q-btn label="go to orders" @click="$router.push('/home/orders')" flat class="text-grey-7"></q-btn>
            </q-card-section>
          </q-card>
        </q-dialog>

      </q-page>
    </q-page-container>
  </q-layout>
</template>
<script>
// let isMobile = window.matchMedia("only screen and (max-width: 760px)").matches;
// if (!isMobile) { window.location = "https://chotabeta.com/pwa"; }
import axios from "boot/axios";
import { ref } from "vue";
export default {
  setup() {
    return {
      address_select: ref(true),
      fevourite_store_dailog: ref(false),
      paymentmethod: ref("Pay Online on Delivery"),
      get_cam_image: ref(""),
      get_lat_lngs: ref(""),
      array: ref([]),
      order_success_dailog:ref(false),
      endPoint:ref(null),
      access_token:ref(null),
      xid:ref(null)
    }
  },
  mounted() {
    this.getToken();
    this.mypath();
    this.get_payment_images();
  },
  methods: {
    getToken() {
      var ps = this;
      if(ps.$store.state.token){ ps.access_token = ps.$store.state.token; }
      else{ ps.access_token = ps.$store.state.token_cb; }
      if(ps.$store.state.xid){ps.xid = ps.$store.state.xid;}
      else{ps.xid = ps.$store.state.xid_cb;}
      if(ps.access_token == null ||  !ps.access_token){ ps.$router.push('/'); }
    },
    cam_order_placement(){
      var ps = this;
      let config = { headers: { "Authorization": `Bearer ${ps.access_token}`,}}
      var cam_uid =  localStorage.getItem('cam_uid');
      ps.get_cam_image = (localStorage.getItem('cam-image'));
      if(ps.paymentmethod == "Cash On Delivery"){ ps.pmt_method = "COD"; }
      else if(ps.paymentmethod == "Pay Online on Delivery"){  ps.pmt_method = "POD"; }
      else{ ps.pmt_method = "POD"; }
      // console.log(JSON.stringify(ps.get_cam_image),'imgggggggg');
      ps.get_lat_lngs = localStorage.getItem('latlongs');
      let formData = new FormData();
      formData.append('transaction_id', ps.transaction_id);
      formData.append('payment_mode', ps.pmt_method);
      formData.append('payment_status',"pending");
      formData.append('order_id', cam_uid);
      var loader = document.getElementById('loader2');
        loader.style.display="block";
      ps.$api.post('/api/place-cam-orders',formData,config).then(function (response) {
        loader.style.display="none";
        if(response.data.status_code == 200){
          ps.order_success_dailog = true;
        }
      }).catch(function (error) {
        console.log(error);
        // ps.$q.notify({ message: error, type: "negative",});
      });
    },
    get_payment_images(){
      var ps = this;
      var loader = document.getElementById('loader2');
        loader.style.display="block";
      let config = { headers: { "Authorization": `Bearer ${ps.access_token}`,}}
      ps.$api.get('/api/get-payment-images',config).then(function (response) {
        loader.style.display="none";
        if(response.data.status_code == 200){
          ps.endPoint = response.data.endPoint;
          ps.payment_modes = response.data.payment_modes;
          ps.payment_mode_status = response.data.payment_mode_status;
          ps.images = response.data.images;
          ps.default_payment_mode = response.data.default_payment_mode;
          ps.transaction_id = response.data.transaction_id;
          ps.array = [];
          ps.payment_modes.forEach((element, i)=> {
            ps.array.push({'payment_modes': element,
              'payment_mode_status': ps.payment_mode_status[i],
              'images': ps.images[i],
            });
          });
          console.log(array,'array');
        }
      }).catch(function (error) {
        console.log(error);
        // ps.$q.notify({ message: error, type: "negative",});
      });

    },
    mypath(){
      var ps=  this;
      var myallpaths = [];
      var i = 0;
      if(localStorage.getItem('mypath')){
        myallpaths = JSON.parse(localStorage.getItem('mypath'));
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
      localStorage.setItem('mypath',JSON.stringify(myallpaths));
    },
    Screen_Back_Redirection(){
      var ps = this;
      var myallpaths = JSON.parse(localStorage.getItem('mypath'));
      var previous = myallpaths.length;
      ps.$router.push(myallpaths[previous-2]);
    }
  },
};
</script>
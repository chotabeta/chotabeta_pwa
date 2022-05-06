<template>
<q-layout  view="lHh lpr lFf" >

  <q-header>
    <q-toolbar class="cb-bg-white-2 cb-text-blue-8">
      <q-btn flat dense icon="arrow_back" @click="Screen_Back_Redirection()"/>
    <q-btn icon="place" class="q-pa-none cb-font-12" borderless flat :label="$store.state.showaddress" @click="$router.push('dashboard_location')"></q-btn>
      <q-space></q-space>
      <q-btn dense icon="notifications" flat @click="$router.push('Notification')">
        <q-badge color="red" rounded floating style="margin-top: 8px; margin-right: 8px"></q-badge>
      </q-btn>
      <q-btn round dense icon="shopping_cart" flat>
        <q-badge class="cb-bg-orange-8" rounded floating>0</q-badge>
      </q-btn>
    </q-toolbar>
  </q-header>

  <q-page-container class="animate__animated animate__slideInRight">
    <q-page class="text-grey-8">
      <div id="loader2" class="pre-loader" style="display:none"></div>

      <div class="flex q-px-md q-py-sm ">
        <q-avatar class="q-mr-sm" size="65px" style="border:1px solid #e6e6e6">  
          <q-img :src="order.image_url+order_data.categ_image" width="40px" height="40px"></q-img>
        </q-avatar >
        <div class="q-pl-sm" style="width: 75%;">
          <div class="row text-weight-bolder">
            <span class="cb-text-blue-8">{{ order_data.category_name }}</span>
            <q-space></q-space>
            <span>Order  #{{order_data.uid}}</span>
          </div>
          <div class="text-right flex">
            <span>{{order_data.service_name}}</span><q-space></q-space>
            <span class="text-weight-bolder">{{ order_data.order_status_string}} <q-icon name="check_circle" size="xs" color="orange"></q-icon></span>
          </div>
          <div class="cb-round-borders-10 text-center cb-text-orange-8 q-my-xs" style="border: 1px solid orange;">
            {{order_data.actual_schedule_timestamp}}
          </div> 
        </div>
      </div>

      <q-separator />

      <div class="flex q-py-xs q-px-md" v-for=" i in payment_details">{{ i.key }}<q-space></q-space>{{ i.Value }}</div>
      <q-separator />
      <div class="flex q-py-sm q-px-md ">
        <span class="text-weight-bolder" v-if="order_data.payment_status == 'pending'">Pay Now</span>
        <span class="text-weight-bolder text-green" v-else>{{ order_data.payment_status }}</span>

        <q-space></q-space>
        <span class="text-weight-bolder">Total: </span>&nbsp; Rs. {{ order_data.amount }}</div>
      <q-separator />
      
      <div class="row q-px-md q-py-sm">
        <div class="col-12 flex q-py-sm" v-if="$route.query.service=='d'">
          <q-icon name="location_on" size="sm" class="cb-text-orange-8"></q-icon>
          <span class="q-px-md text-weight-bolder cb-font-14 cb-text-blue-8">Pick Location</span><br>
          <span class="cb-text-grey-5">{{ order_data.from_location }}</span>
        </div>
        <div class="col-12 flex">
          <q-icon name="location_on" size="sm" class="cb-text-orange-8"></q-icon>
          <span class="q-px-md text-weight-bolder cb-font-14 cb-text-blue-8">Delivered To</span><br>
          <span class="cb-text-grey-5">{{ order_data.to_location }}</span>
        </div>
      </div>

      <div class="row q-px-md cb-bg-grey-2 q-py-xs" v-if="$route.query.service=='a'">
        <span class="cb-text-orange-8 cb-font-14 text-bold">Item Details</span>
      </div>


      <q-list bordered separator >
        <q-item  class="q-py-xs" clickable v-ripple v-for="s in order.items">
          <q-item-section>
            <q-item-label>{{ s.name }}</q-item-label>
            <q-item-label caption lines="1" class="flex">
              <span>Weight - {{ s.weight_desc }}</span><q-space></q-space>
              <span>Qty- {{ s.qty }}</span><q-space></q-space>
              <span class="text-weight-bolder">Mrp ₹{{ s.cost }}</span>
            </q-item-label>
          </q-item-section>
        </q-item>
       </q-list>
      </q-page>
    </q-page-container>
  </q-layout>
</template>
<script>
import axios from 'boot/axios'
import { ref } from "vue";
export default {
  setup() {
    return {
      data: ref(null),
      tab:ref('Active'),
      access_token:ref(null),
      order:ref([]),
      order_data:ref([]),
      image_url:ref(null),
      payment_details:ref([]),
      xid:ref(null),
    };
  },

  mounted() {
    this.getAccessToken();
    this.mypath();
    if(this.$route.query.order_id){
      this.getorderdata();
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
    getorderdata() {
      var ps = this;
      var loader = document.getElementById('loader2');
        loader.style.display="block";
      let config = { headers: { Authorization: `Bearer ${ps.access_token}`, },};
      ps.$api.get('/api/v2/my-order-details?order_id='+this.$route.query.order_id, config).then(function (response) {
        console.log(response,"order_data");
        loader.style.display="none";
        ps.order = response.data;
        ps.order_data = response.data.orders_details_two;
        ps.payment_details =  response.data.payment_details;
      }).catch(function (error) {
        // handle error
        console.log(error);
      });
    },

    postData(e) {
      console.warn(this.posts);
      e.preventDefault();
    },
    mypath(){
      var ps=  this;
      var myallpaths = ['/home/dashboard'];
      // var i = 0;
      // if(localStorage.getItem('mypath')){
      //   myallpaths = JSON.parse(localStorage.getItem('mypath'));
      // }
      // myallpaths.forEach(( path,index ) => {
      //   if(ps.$route.fullPath == path){
      //     if(i == 0){ i = index; }
      //   }
      // });
      // if(i == 0){
      //   myallpaths.push(ps.$route.fullPath);
      // }else{
      //   for(var j=1;j<= myallpaths.length;++j){
      //     if(j<=i){ }else{ myallpaths.splice(j,1); }
      //   }
      // }
      localStorage.setItem('mypath',JSON.stringify(myallpaths));
    },
    Screen_Back_Redirection(){
      var ps = this;
      // var myallpaths = JSON.parse(localStorage.getItem('mypath'));
      // var previous = myallpaths.length;
      // ps.$router.push(myallpaths[previous-2]);
      ps.$router.push('/home/orders');
    }
  },
};
</script>
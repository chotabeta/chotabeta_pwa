<template>
<q-layout>
  <q-header>
    <q-toolbar class="cb-bg-white-2 cb-text-blue-8">
      <q-btn flat dense icon="arrow_back" @click="$router.push('/home/Orders')"/>
      <q-btn icon="place" class="q-pa-none" size="sm" flat label="HUDA Techno Enclave, HITEC City"></q-btn>
      <q-space></q-space>
      <q-btn dense icon="notifications" flat @click="$router.push('Notification')">
        <q-badge color="red" rounded floating style="margin-top: 8px; margin-right: 8px"></q-badge>
      </q-btn>
      <q-btn round dense icon="shopping_cart" flat>
        <q-badge class="cb-bg-orange-8" rounded floating>0</q-badge>
      </q-btn>
    </q-toolbar>
  </q-header>
  <q-page-container>
    <q-page class="text-grey-8">
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
        <span class="text-weight-bolder">Pay Now</span><q-space></q-space>
        <span class="text-weight-bolder">Total: </span>&nbsp; Rs. {{ order_data.total }}</div>
      <q-separator />
      
      <div class="row q-px-md q-py-sm">
        <div class="col-12 flex">
          <q-icon name="location_on" size="sm" class="cb-text-orange-8"></q-icon>
          <span class="q-px-md text-weight-bolder cb-font-14 cb-text-blue-8">Delivered To</span><br>
          <span class="cb-text-grey-5">{{ order_data.to_location }}</span>
        </div>
      </div>
      <div class="row q-px-md cb-bg-grey-2 q-py-xs">
        <span class="cb-text-orange-8 cb-font-14 text-bold">Item Details</span>
      </div>


      <q-list bordered separator>
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
import axios from "axios";
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
    };
  },

  mounted() {
    this.getAccessToken();
    if(this.$route.query.order_id){
      this.getorderdata();
    }
  },

  methods: {
    getAccessToken() {
      var ps = this;
      ps.access_token = ps.$store.state.token;
      if (ps.access_token == null || !ps.access_token) { ps.$router.push(""); }
    },
    getorderdata() {
      var ps = this;
     
      let config = { headers: { Authorization: `Bearer ${ps.access_token}`, },};
      axios.get('https://chotabeta.app/dev/testenv/api/v2/my-order-details?order_id='+this.$route.query.order_id, config).then(function (response) {
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
  },
};
</script>
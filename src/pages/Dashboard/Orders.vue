<template>
  <q-page>
    <div class="row items-center justify-center cb-bg-white-2" >
      <span class="cb-text-orange-8 text-weight-bolder cb-font-16">My Orders</span>
    </div>
    <q-tabs :breakpoint="0" align="center" dense v-model="tab">
      <q-tab class="cb-text-orange-8" label="Active" name="Active"></q-tab>
      <q-tab class="cb-text-orange-8" label="Past" name="Past"></q-tab>
    </q-tabs>

    <q-tab-panels v-model="tab" animated>
      <q-tab-panel name="Active">
        <q-card class="cb-shadow-1 cb-round-borders-10 q-pa-sm q-mb-md" v-for="i in Active_orders">
          <q-card-scetion class="cb-font-12 cb-text-grey-4">
            <div class="flex q-px-md q-py-sm">
              <q-avatar class="q-mr-sm" size="55px" style="border:1px solid grey">  
                <q-img :src="image_url+i.categ_image" width="35px" height="35px"></q-img>
              </q-avatar >
              <div class="col">
                <span class="cb-text-blue-8 text-weight-bolder">{{i.category_name}}</span><br>
                <span class="cb-text-grey-4">{{i.service_name}}</span>
              </div>
              <div class="text-right col text-weight-bolder">
                <span>Order  #{{i.uid}}</span><br>
                <span>{{i.order_status_string}} <q-icon name="check_circle" size="xs" color="orange"></q-icon></span>
              </div>
            </div>
            <q-separator />
            <table class="full-width q-py-xs">
              <tr colspan="2">
                <td>Ordered On:</td> <td>{{i.delivered_at}}</td>
              </tr>
              <tr>
                <td>Payment :</td><td class="flex">{{i.payment_mode}} <q-space></q-space>Amount:Rs.{{i.amount}}</td>
              </tr>
            </table>
            <q-separator />
            <div class="flex q-px-lg q-py-sm">
              <span class="text-weight-bolder cb-font-14 cb-text-blue-8">Track Order</span>
              <q-space></q-space>
              <span class="text-weight-bolder cb-font-14 cb-text-orange-8" v-if="i.status == 701">Pay Now</span>
            </div>
            <q-separator />
            <div class="flex text-weight-bolder flex-center q-py-sm cb-font-16 cb-text-grey-4" @click="$router.push('/Home/OrderDetails?order_id='+i.uid)">View Details</div>
          </q-card-scetion>
        </q-card>    
      </q-tab-panel>

      <q-tab-panel name="Past">
        <div class="text-center q-mt-md">
          <q-img src="https://chotabeta.app/dev/testenv/public/imgs/cart-2.png" width="30%"></q-img>
          <h5 class="cb-text-grey-4 text-bold">NO ORDERS</h5>
          <span class="cb-text-grey-4 text-bold cb-font-16">Order your daily needs, fresh vegetables,fruits,groceries, and
            all your home essentials.One-stop solution for all your daily needs</span>
            <br>
            <br>
          <q-btn  label="Shop now" class="cb-bg-orange-8 text-white q-px-xl" @click="$router.push('/home/dashboard')"></q-btn>
        </div>
      </q-tab-panel>
    </q-tab-panels>

  </q-page>
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
      Active_orders:ref([]),
      image_url:ref(null),
    };
  },

  mounted() {
    this.getAccessToken();
    this.gettodaydata();
  },

  methods: {
    getAccessToken() {
      var ps = this;
      ps.access_token = ps.$store.state.token;
      if (ps.access_token == null || !ps.access_token) { ps.$router.push(""); }
    },
    gettodaydata() {
      var ps = this;
     
      let config = { headers: { Authorization: `Bearer ${ps.access_token}`, },};
      axios.get("https://chotabeta.app/dev/testenv/api/v2/my-orders2", config).then(function (response) {
        console.log(response.data,'my orders');
          ps.Active_orders = response.data.open_orders;
          ps.image_url =  response.data.image_url;
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
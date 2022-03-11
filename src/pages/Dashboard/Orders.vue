<template>
  <q-page>
    <div id="loader2" class="pre-loader" style="display:none"></div>
    <div class="row items-center justify-center cb-bg-white-2">
      <span class="cb-text-orange-8 text-weight-bolder cb-font-16"
        >My Orders</span
      >
    </div>
    <q-tabs :breakpoint="0" align="center" dense v-model="tab">
      <q-tab class="cb-text-orange-8" label="Active" name="Active"></q-tab>
      <q-tab class="cb-text-orange-8" label="Past" name="Past"></q-tab>
    </q-tabs>

    <q-tab-panels v-model="tab" animated>
      <q-tab-panel name="Active">
        <q-card class="cb-shadow-1 cb-round-borders-10 q-pa-sm q-mb-md" v-for="i in Active_orders" :key='i' v-if="Active_orders.length  != 0 ">
          <q-card-scetion class="cb-font-12 cb-text-grey-4">
            <div class="flex q-px-md q-py-sm">
              <q-avatar  class="q-mr-sm" size="55px" style="border: 1px solid grey">
                <q-img :src="image_url + i.categ_image" width="35px" height="35px"></q-img>
              </q-avatar>
              <div class="col">
                <span class="cb-text-blue-8 text-weight-bolder">{{ i.category_name}}</span><br />
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
                <td>Ordered On:</td>
                <td>{{ i.delivered_at }}</td>
              </tr>
              <tr>
                <td>Payment :</td>
                <td class="flex"> {{ i.payment_mode }} <q-space></q-space>Amount:Rs.{{ i.amount }}</td>
              </tr>
            </table>
            <q-separator />
            <div class="flex q-px-lg q-py-sm">
              <q-btn label="Track Order" flat class="text-weight-bolder cb-font-14 cb-text-blue-8" @click="trackorderdata(i.uid)"></q-btn>
              <q-space></q-space>
              <span class="text-weight-bolder cb-font-14 cb-text-orange-8" v-if="i.status == 701" >Pay Now</span>
            </div>
            <q-separator />
            <div class="flex text-weight-bolder flex-center q-py-sm cb-font-16 cb-text-grey-4" @click="$router.push('/Home/OrderDetails?order_id=' + i.uid)">View Details</div>
          </q-card-scetion>
        </q-card>
        <div class="text-center q-mt-md" v-else>
          <q-img src="https://chotabeta.app/dev/testenv/public/imgs/cart-2.png" width="30%"></q-img>
          <h5 class="cb-text-grey-4 text-bold">NO ORDERS</h5>
          <span class="cb-text-grey-4 text-bold cb-font-16">Order your daily needs, fresh vegetables,fruits,groceries, and all
            your home essentials.One-stop solution for all your daily needs</span>
          <q-btn label="Shop now" class="cb-bg-orange-8 text-white q-px-xl q-my-lg" @click="$router.push('/home/dashboard')"></q-btn>
        </div>
      </q-tab-panel>

      <q-tab-panel name="Past">
        <div class="text-center q-mt-md">
          <q-img src="https://chotabeta.app/dev/testenv/public/imgs/cart-2.png" width="30%"></q-img>
          <h5 class="cb-text-grey-4 text-bold">NO ORDERS</h5>
          <span class="cb-text-grey-4 text-bold cb-font-16">Order your daily needs, fresh vegetables,fruits,groceries, and all
            your home essentials.One-stop solution for all your daily needs</span>
          <q-btn label="Shop now" class="cb-bg-orange-8 text-white q-px-xl q-my-lg" @click="$router.push('/home/dashboard')"></q-btn>
        </div>
      </q-tab-panel>
    </q-tab-panels>
  </q-page>

  <q-dialog v-model="trackdailog" :position="position">
    <q-card>
      <q-card-section class="cb-bg-grey-2 q-py-xs text-bold">
        <div class="q-py-sm text-bold text-center">
          <q-icon
            v-close-popup
            name="arrow_drop_down"
            size="lg"
            class="cb-text-grey-4"
          ></q-icon
          ><br />
          <span class="cb-text-blue-8 text-bold"> Order Status Details </span>
        </div>
      </q-card-section>
      <q-card-section>
        <div class="item-center justify-center q-py-sm text-bold">
          <div class="row justify-center q-my-md">
            <q-icon
              size="md"
              class="cb-text-grey-3"
              name="check_circle"
              color="green-6"
            ></q-icon>
            <span class="q-px-md cb-text-grey-4">Order Received</span>
          </div>
          <q-separator />
           <div class="row justify-center q-my-md">
            <q-icon
              size="md"
              class="cb-text-grey-3"
              name="check_circle"
              color="green-6"
            ></q-icon>
            <span class="q-px-md cb-text-grey-4">Order is accepeted by ChotaBeta</span>
          </div>
          <q-separator />
           <div class="row justify-center q-my-md">
            <q-icon
              size="md"
              class="cb-text-grey-3"
              name="check_circle"
              color="green-6"
            ></q-icon>
            <span class="q-px-md cb-text-grey-4">Going to pick the order</span>
          </div>
          <q-separator />
           <div class="row justify-center q-my-md">
            <q-icon
              size="md"
              class="cb-text-grey-3"
              name="check_circle"
              color="green-6"
            ></q-icon>
            <span class="q-px-md cb-text-grey-4">ChotaBeta Pickeduped the order</span>
          </div>
          <q-separator />
           <div class="row justify-center q-my-md">
            <q-icon
              size="md"
              class="cb-text-grey-3"
              name="check_circle"
              color="green-6"
            ></q-icon>
            <span class="q-px-md cb-text-grey-4">ChotaBeta is on the way to delivery</span>
          </div>
          <q-separator />
           <div class="row justify-center q-my-md">
            <q-icon
              size="md"
              class="cb-text-grey-3"
              name="check_circle"
              color="green-6"
            ></q-icon>
            <span class="q-px-md cb-text-grey-4">ChotaBeta delivered order</span>
          </div>
          <q-separator />

          <div class="row justify-center q-py-sm text-bold">
            <q-btn
              label="Close"
              class="cb-bg-orange-8 text-white q-px-xl"
            ></q-btn>
          </div>
        </div>
      </q-card-section>
    </q-card>
  </q-dialog>
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
      trackdailog:ref(false),
      position:ref("bottom")
    }
  },

  mounted() {
    this.getAccessToken();
    this.gettodaydata();
  },

  methods: {
    getAccessToken() {
      var ps = this;
      ps.access_token = ps.$store.state.token;
      if (ps.access_token == null || !ps.access_token) {
        ps.$router.push("");
      }
    },
    gettodaydata() {
      var ps = this;
        var loader = document.getElementById('loader2');
          loader.style.display="block";
      let config = { headers: { Authorization: `Bearer ${ps.access_token}` } };
      ps.$api.get("/api/v2/my-orders2", config).then(function (response) {
        loader.style.display="none";
          console.log(response.data, "my orders");
          ps.Active_orders = response.data.open_orders;
          ps.image_url = response.data.image_url;
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    },

    trackorderdata(uid) {
      var ps = this;
      var loader = document.getElementById('loader2');
          loader.style.display="block";
      let config = { headers: { Authorization: `Bearer ${ps.access_token}` } };
      ps.$api.get('/api/livetrack-two?order_id='+uid,config).then(function (response) {
        loader.style.display="none";
        console.log(response);
        ps.tracking_details = response.data.tracking_details;
        ps.open('bottom');
      }).catch(function (error) {
        // handle error
        console.log(error);
      });
    },
    open(pos){
      var ps = this;
      ps.trackdailog = true;
    },
  },
};
</script>
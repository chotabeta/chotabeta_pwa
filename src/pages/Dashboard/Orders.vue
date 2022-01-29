<template>
  <q-page class="q-px-md">
    <div class="row items-center justify-center cb-bg-white-2" >
      <span class="cb-text-orange-8 text-weight-bolder cb-font">My Orders</span>
    </div>
    <q-tabs :breakpoint="0" align="center" dense indicator-color="transparent">
      <q-tab class="cb-text-orange-8" label="Active"></q-tab>
      <q-tab class="cb-text-orange-8" label="Past"></q-tab>
    </q-tabs>

    <div>
      <q-card>
        <q-card-section>
          <q-avatar>
            <img src="https://chotabeta.com/icons/Group%202.png" />
          </q-avatar>
          <!-- <div class="row"> -->
          <span class="cb-text-blue-8 text-bold">Groceries</span><br>
            <span class="cb-text-grey-5">Grocery</span><br>
            <span class="cb-text-grey-4">Order #</span>
            <!-- </div> -->
        </q-card-section>
        <q-separator />
        <q-card-section> </q-card-section>
        <q-separator />

        <q-card-section> </q-card-section>
        <q-separator />

        <q-card-section> </q-card-section>
        <q-separator />
      </q-card>
    </div>
  </q-page>
</template>
<script>
import axios from "axios";
import { ref } from "vue";
export default {
  setup() {
    return {
      data: ref(null),
    };
  },

  mounted() {
    this.getAccessToken();
    // this.gettodaydata();
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
      var vm = this;
      vm.loading = true;
      console.log("asdfghj");
      let config = {
        headers: {
          Authorization: `Bearer ${vm.access_token}`,
        },
      };
      axios.get("https://chotabeta.app/dev/testenv/api/v2/my-orders2", config)
        .then(function (response) {
          // handle success
          vm.loading = false;
          console.log(response, "getstateeee");
          vm.data = response.data.open_orders;
          console.log(vm.data, "vm.data");
        })
        .catch(function (error) {
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
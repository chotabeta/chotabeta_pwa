<template>
<q-page class="q-pa-md">
  <div class="row items-center justify-center">
    <span class="cb-text-orange-8">We Care | Help</span>
  </div>
  <div class="row">
    <div class="col-8">
        <h6>We would love to help you. let's connect.</h6>
    </div>
    <div class="col-4 row items-center justify-center">
      <q-img src="https://chotabeta.app/dev/testenv/public/uploads/assets/support_girl_we_care.png" style="height: 120px; max-width: 100px"></q-img>
    </div>
  </div>
  <div>
    <q-card>
      <q-card-section class="bg-grey-2 text-gray-9 text-h6 ">
        <span >Connect Us</span>
      </q-card-section>
      <q-card-section>
        <span class="cb-text-blue-8 text-bold">Mail Us: <a href="mailto:support@chotabeta.com" class="cb-text-blue-8">support@chotabeta.com</a></span><br>
        <span class="cb-text-grey-4">Need Help!</span><br>
        <span class="cb-text-grey-4">Mobile Number.</span><br>
        <span class="cb-text-grey-4">Order Id: </span><br>
        <span class="cb-text-grey-4">Issue Description: </span>
      </q-card-section>
    </q-card>
  </div>
</q-page>
</template>
<script>
import axios from 'axios'
import { ref}  from 'vue'
export default {
  setup () {
    return {
      data:ref(null),
    }
  },
  mounted(){
    this.getAccessToken();
    this. gettodaydata();
  },
  methods:{
    getAccessToken(){
      var ps = this;
      ps.access_token = ps.$store.state.token;
      if(ps.access_token == null ||  !ps.access_token){
        ps.$router.push('');
      }
    },
    gettodaydata(){
      var vm = this;
      vm.loading = true;
      let config = { headers: { "Authorization": `Bearer ${vm.access_token}`,} }
      axios.get('https://chotabeta.app/dev/testenv/api/we-care',config).then(function (response) {
        vm.loading = false;
        vm.data = response.data.data;
      }).catch(function (error) {
        console.log(error);
      })
    },
  }
}
</script>
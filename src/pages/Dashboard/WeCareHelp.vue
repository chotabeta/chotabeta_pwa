<template>
<q-page>
  <div id="loader2" class="pre-loader" style="display:none"></div>
  <div class="row justify-center  cb-bg-white-2 text-weight-bolder cb-font-16 q0pb-xs">
    <span class="cb-text-orange-8">We Care | Help</span>
  </div>
  <div class="q-px-md">
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
          <span class="cb-text-grey-4">Need Help!</span><br><br>
          <span class="cb-text-grey-4">Mobile Number.</span><br>
          <span class="cb-text-grey-4">Order Id: </span><br>
          <span class="cb-text-grey-4">Issue Description: </span><br><br>
          <hr style="border:1px solid grey;" class="cb-round-borders-10">
        </q-card-section>
      </q-card>
    </div>
  </div>
</q-page>b
</template>
<script>
import axios from 'boot/axios'
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
      var ps = this;
      var loader = document.getElementById('loader2');
          loader.style.display="block";
      let config = { headers: { "Authorization": `Bearer ${ps.access_token}`,} }
      ps.$api.get('https://chotabeta.app/dev/testenv/api/we-care',config).then(function (response) {
        loader.style.display="none";
        ps.data = response.data.data;
      }).catch(function (error) {
        console.log(error);
      })
    },
  }
}
</script>
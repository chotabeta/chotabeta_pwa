<template>
<q-page >
  <div class="flex cb-bg-white-2 flex-center">
    <span class="cb-text-orange-8 text-subtitle2">Offers</span>
  </div>
  <div v-if="offers.length != 0" class="q-px-md">
    <q-card  class="q-my-md shadow-1" v-for="offer in offers" :key="offer" style="border-radius: 15px;overflow: hidden;">
      <q-card-section class="q-pa-none" >
        <q-img :src="offer.image" height="164px" ></q-img>
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
      offers:ref([]),
      access_token:ref(null)
    }
  },

  mounted(){
    this.getAccessToken();
    this.getalloffers();
  },
  methods:{
    getAccessToken(){
      var ps = this;
      ps.access_token = ps.$store.state.token;
      if(ps.access_token == null ||  !ps.access_token){
        ps.$router.push('');
      }
    },
    getalloffers(){
      var ps = this;
      let config = { headers: { "Authorization": `Bearer ${ps.access_token}`,}}
      axios.get('https://chotabeta.app/dev/testenv/api/get-offers-new',config).then(function (response) {
        // console.log(response.data)
        ps.offers = response.data.offers;
      }).catch(function (error) {
        console.log(error);
      })
    },
  }
}
</script>
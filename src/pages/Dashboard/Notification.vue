<template>
<q-page >
  <div class="flex cb-bg-white-2">
    <q-space></q-space>
    <q-space></q-space>
    <span class="cb-text-orange-8 text-subtitle2">Notifications</span>
    <q-space></q-space>
    <q-btn label="clear" class="cb-text-orange-8 text-subtitle2" icon-right="delete_sweep" size="sm" flat></q-btn>
  </div>
  <div v-if="data != null" class="q-px-md">
    <q-card v-for="note in data" :key="note" class="q-my-md shadow-1">
      <q-card-section class="q-pa-none q-pt-sm">
        <div class="row">
          <div class="col-3 q-pa-md">
            <q-avatar class="fit shadow-3">
              <img src="https://chotabeta.com/icons/Group%202.png">
            </q-avatar>
          </div>
          <div class="col-9">
            <span class="cb-text-blue-8 text-bold">{{ note.subject }}</span><br>
            <span class="cb-text-grey-5">{{ note.message }}</span><br>
            <span class="cb-text-grey-4">Pickup Id : {{ note.id}}</span>
          </div>
        </div>
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
      let config = { headers: { "Authorization": `Bearer ${vm.access_token}`,}}
      axios.get('https://chotabeta.app/dev/testenv/api/my-notifications',config).then(function (response) {
        vm.loading = false;
        vm.data = response.data.notifications;
      }).catch(function (error) {
        console.log(error);
      })
    },
  }
}
</script>
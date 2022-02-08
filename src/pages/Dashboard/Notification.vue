<template>
<q-page>
  <div class="flex cb-bg-white-2 flex-center cb-font-16 text-weight-bolder">
    <q-space></q-space>
    <q-space></q-space>
    <span class="cb-text-orange-8">Notifications</span>
    <q-space></q-space>
    <q-btn label="clear" icon-right="delete_sweep" class="cb-text-orange-8 text-weight-bolder" flat @click="clear_notification = true"></q-btn>
  </div>

  <div v-if="data != null" class="q-px-md">
    <q-card v-for="note in data" :key="note" class="q-my-md cb-shadow-1 cb-round-borders-10">
      <q-card-section class="q-pa-none q-pt-sm">
        <div class="row">
          <div class="col-3 q-pa-md">
            <q-avatar class="fit cb-shadow-2">
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
  <div v-if="data == null"  class="q-px-md text-center cb-text-grey-4 q-mt-xl" >
    <span class="text-h4 text-weight-bolder text-grey-2">0 Results</span><br>
    <q-img src="https://chotabeta.app/dev/testenv/public/imgs/refandearn.png" width="200px"></q-img><br>
    <span class="text-h6 text-weight-bolder">No Notifications</span><br>
    <span>We are to serve .Get your pachages, groceries and many more to your step at single click</span>
  </div>

  <q-dialog v-model="clear_notification">
    <q-card class="q-dialog-plugin cb-round-borders-10">
      <q-card-section class="text-center">
        <q-icon name="help_outline" size="100px" class="cb-text-orange-8 q-my-md"></q-icon><br>
        <span class="text-h6 text-weight-bolder q-my-md">Are You Sure ?</span><br>
        <span>You Want to Clear All The Notifications</span><br>
        <q-btn label="Confirm" class="cb-bg-orange-8 text-white q-mt-lg q-mb-sm" @click="clearnotification"></q-btn><br>
        <q-btn label="Cancel" class="cb-text-grey-5" flat @click="clear_notification = false"></q-btn>
      </q-card-section>
    </q-card>
  </q-dialog>

</q-page>
</template>


<script>
import axios from 'axios'
import { ref}  from 'vue'
export default {
  setup () {
    return {
      data:ref(null),
      clear_notification:ref(false),
    }
  },

  mounted(){
    this.getAccessToken();
    this.gettodaydata();
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
      let config = { headers: { "Authorization": `Bearer ${ps.access_token}`,}}
      axios.get('https://chotabeta.app/dev/testenv/api/my-notifications',config).then(function (response) {
        if(response.data.status_code == 200){
          ps.data = response.data.notifications;
        }else{
          ps.$q.notify({ message:response.data.message, type: 'positive' ,progress: true,});
        }
      }).catch(function (error) {
        console.log(error);
      })
    },

      clearnotification(){
      var ps = this;
      let config = { headers: { "Authorization": `Bearer ${ps.access_token}`,}}
      axios.get('https://www.chotabeta.app/dev/testenv/api/clear-my-notifications',config).then(function (response) {
        if(response.data.status_code == 200){
          ps.$q.notify({ message:response.data.message, type: 'positive' ,progress: true,});
        }else{
          ps.$q.notify({ message:response.data.message, type: 'negative' ,progress: true,});
        }
        ps.gettodaydata();
      }).catch(function (error) {
        console.log(error);
      })
    },
  }
}
</script>
<template>
  <q-page>
    <div id="loader2" class="pre-loader" style="display:none"></div>
    <div class="row justify-center cb-bg-white-2">
      <span class="cb-text-orange-8 cb-font-16 text-weight-bolder q-pb-xs">Refer and Earn</span>
    </div>
    <div class="row">
      <div class="col-12 column items-center justify-center" style="height:200px">
        <q-img src="https://chotabeta.app/dev/testenv/public/imgs/refer_and_earn_bg11.png" height="100%">
         <div class="full-width text-center bg-transparent">
            <span class="text-h4 text-bold">{{ total_points }}</span><br>
            <span class="text-h4 text-bold">{{total_points_text}}</span>
          </div>
        </q-img>
      </div>
    </div>

    <div class="row q-mb-lg" style="margin-top:-30px">
      <div class="col q-px-md">
        <q-card  class="cb-shadow-1 cb-round-borders-10">
          <q-card-section class="q-pa-sm text-bold">
            <span class="cb-text-orange-8">{{total_refrels_text}}<br>
            <q-img src="https://chotabeta.app/dev/testenv/public/imgs/shopping_points.png"  width="25%"/>
            &nbsp;&nbsp;&nbsp;{{ total_refrels_points }}
            </span>
          </q-card-section>
        </q-card>
      </div>
      <div class="col q-px-md" >
        <q-card class="cb-shadow-1 cb-round-borders-10" style="height:100%">
          <q-card-section  class="q-pa-sm text-bold">
            <span class="cb-text-orange-8">{{total_points_in_rs_text}}<br><br>
            <q-img src="https://chotabeta.app/dev/testenv/public/imgs/redeemed_points1.png"  width="25%"/>
             &nbsp;&nbsp;&nbsp;{{ total_points_in_rs }}
            </span>
          </q-card-section>
        </q-card>
      </div>
      <div class="col q-px-md">
        <q-card class="cb-shadow-1 cb-round-borders-10">
          <q-card-section  class="q-pa-sm text-bold">
            <span class="cb-text-orange-8">{{total_redeem_text}}<br>
            <q-img src="https://chotabeta.app/dev/testenv/public/imgs/points_in_rs1.png"  width="25%"/>
             &nbsp;&nbsp;&nbsp;{{ total_redeem_points }}
            </span>
          </q-card-section>
        </q-card>
      </div>
    </div>

    <div class="row text-center cb-text-blue-8">
       <div class="col q-px-md">
         <q-img src="https://chotabeta.app/dev/testenv/public/imgs/invite111.png" width="60%"/><br>
         <span class=" text-bold text-subtitile2">{{invaite_friend_text}}</span>
       </div>
       <div class="col q-px-md">
         <q-img src="https://chotabeta.app/dev/testenv/public/imgs/invite222.png" width="60%"/><br>
         <span  class=" text-bold text-subtitile2">{{earn_20_points_text}}</span>
       </div>
       <div class="col q-px-md">
         <q-img src="https://chotabeta.app/dev/testenv/public/imgs/invite333.png" width="60%"/><br>
         <span class=" text-bold text-subtitile2">{{redeem_your_points_text}}</span>
       </div>
    </div>

    <div class="q-px-md q-py-sm">
      <q-card class="cb-shadow-1 cb-round-borders-10">
        <q-card-section class="cb-bg-grey-2 cb-text-grey-5 q-pa-sm">
          <div class="row items-center">
            <div class="col-2 q-pa-sm">
              <q-img src="https://chotabeta.app/dev/testenv/public/imgs/Group2x.png" width="90%"/>
            </div>
            <div class="col-10">
              <span>{{how_to_use_refer_points}}</span>
            </div>
          </div>
        </q-card-section>
        <q-card-section>
          <div class="row justify-center">
            <div class="text-center">
              <span class="cb-text-blue-8 text-bold">{{sub_text}}</span><br><br>
              <q-btn outline :label="ref_code" class="cb-text-orange-8 cb-round-borders-10 text-weight-bolder q-mt-md"></q-btn>
            </div>
          </div>
        </q-card-section>
      </q-card>
    </div>

    <div class="q-px-sm row">
      <div class="col q-pa-sm">
        <q-btn label="Refer Now" icon-right="share"  class="cb-bg-orange-8 text-white"></q-btn>
      </div>
      <div class="col q-pa-sm">
        <q-btn label="Redeem Now" icon-right="account_balance_wallet" disable ></q-btn>
      </div>
    </div>

    <div class="q-pa-md"> 
      <q-card class="cb-round-borders">
        <q-card-section  class="q-pa-none">
          <q-tabs class="q-pa-none" active-class="cb-text-blue-8">
            <q-tab  label="YOUR REFERRALS"></q-tab>
            <q-tab  label="REDEEM STATUS"></q-tab>
          </q-tabs>
        </q-card-section>
        <q-card-section class="row justify-center q-py-md">
          <div class="text-center">
            <q-img src="https://chotabeta.app/dev/testenv/public/imgs/refandearn.png"   width="70%"/><br>
            <span class="cb-text-blue-6 cb-font text-weight-bolder">No refereal received yet</span>
          </div>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>
<script>
import {ref } from 'vue'
import axios from 'boot/axios'
export default ({
  setup(){
    return {
      access_token:ref(null),
      available_refferal_points:ref(null),
      ref_code:ref(null),
      invaite_friend_text:ref(null),
      earn_20_points_text:ref(null),
      redeem_your_points_text:ref(null),
      total_points:ref(null),
      total_points_in_rs:ref(null),
      total_points_in_rs_text:ref(null),
      total_points_text:ref(null),
      total_redeem_points:ref(null),
      total_redeem_text:ref(null),
      total_refrels_points:ref(null),
      total_refrels_text:ref(null),
      how_to_use_refer_points:ref(null),
      sub_text:ref(null),
    }
  },
  mounted () {
    var ps = this;
    ps.getAccessToken();

    ps.refferandearn();
   
  },
  methods:{
    getAccessToken(){
      var ps = this;
      ps.access_token = ps.$store.state.token;
      if(ps.access_token == null ||  !ps.access_token){
        ps.$router.push('');
      }
    },
    refferandearn(){
      var ps = this;
      var loader = document.getElementById('loader2');
          loader.style.display="block";
      let config = { headers: { Authorization: `Bearer ${ps.access_token}` } };
      ps.$api.get('/api/reffer-earn-two?current_version_name=&device=&playstore_version_name=&xid='+ps.$store.state.xid,config).then(function (response) {
        loader.style.display="none";
      if(response.data.status_code ==200){
        ps.ref_code                  = response.data.ref_code;
        ps.invaite_friend_text = response.data.refer_earn_two.invaite_friend_text;
        ps.earn_20_points_text = response.data.refer_earn_two.earn_20_points_text;
        ps.redeem_your_points_text = response.data.refer_earn_two.redeem_your_points_text;
        ps.total_points = response.data.refer_earn_two.total_points;
        ps.total_points_in_rs = response.data.refer_earn_two.total_points_in_rs;
        ps.total_points_in_rs_text = response.data.refer_earn_two.total_points_in_rs_text;
        ps.total_points_text = response.data.refer_earn_two.total_points_text;
        ps.total_redeem_points = response.data.refer_earn_two.total_redeem_points;
        ps.total_redeem_text = response.data.refer_earn_two.total_redeem_text;
        ps.total_refrels_points = response.data.refer_earn_two.total_refrels_points;
        ps.total_refrels_text = response.data.refer_earn_two.total_refrels_text;
        ps.how_to_use_refer_points = response.data.refer_and_earn_data.how_to_use_refer_points;
        ps.sub_text = response.data.refer_and_earn_data.sub_text;
        // console.log(response.data);
      }else{
        ps.$q.notify({ message:response.data.message, type: 'negative',progress: true, });
      }
    }).catch(function (error) {
      console.log(error);
      // ps.$q.notify({ message:error, type: 'warning',progress: true, });
    });
    },
  }
})
</script>
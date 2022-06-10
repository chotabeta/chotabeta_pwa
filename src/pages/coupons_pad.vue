<template>
	<q-layout view="lHh lpr lFf">
		<q-header>
			<q-toolbar class="cb-bg-white-2 cb-text-blue-8 row justify-center cb-text-blue-8 text-weight-bolder cb-font-16">
				<q-btn flat dense round icon="arrow_back" @click="Screen_Back_Redirection()"/>
				<q-space></q-space>
				Available Coupons
			</q-toolbar>
		</q-header>
		<q-page-container  class="animate__animated animate__slideInRight">
			<q-page class="q-px-sm" v-if="coupons_available == 0">
				<!-- {{coupons_available }} -->
				<div id="loader2" class="pre-loader" style="display:none"></div>
				<div class="row">
					<div class="col-12 row cb-shadow-1 q-my-sm q-pa-sm cb-round-borders-10" v-for="i in coupons">
						<div class="col-2">
							<q-avatar class="shadow-2" size="60px"> <img src="~assets/images/logo.png"></q-avatar>
						</div>
						<div class="col-10 q-pl-md">
							<span class="text-weight-bolder cb-font flex cb-text-blue-8">{{ i.name }}
							<q-space></q-space>
							<q-btn style="border:2px dashed #F58321;width:120px;font-size: 11px;" class="cb-font-16 q-pa-none text-bold cb-text-orange-8" flat size="xs" rounded @click="screen_redirection(i)">{{ i.code }}</q-btn></span>
							<span class="q-py-xs cb-font-12 text-grey-8">{{ i.description }}</span>
						</div>
					</div>
				</div>
			</q-page>
			<q-page class="q-px-sm flex flex-center q-pa-xl" v-else>
				<div class="text-center text-grey-6">
					<q-icon name="emoji_symbols" size="100px"></q-icon><br>
					<p class="text-h6 text-bold">No Coupon Available</p>
					<p class="cb-font-16">We are here to serve. Get your packages,groceries and many more to your door step at single click.</p>
					<q-btn class="full-width cb-round-borders-10 cb-font-16 cb-bg-orange-8 text-white" label="countinue shopping" @click="screen_redirection_no_coupon()"></q-btn>
				</div>
			</q-page>
		</q-page-container>
	</q-layout>
</template>
<script>
// let isMobile = window.matchMedia("only screen and (max-width: 760px)").matches;
// if (!isMobile){ window.location="https://chotabeta.com/pwa"; }
import axios from 'boot/axios'
import {ref } from 'vue'
export default ({
  setup(){
    return {
    	coupons:ref([]),
    	redeem_points:ref(null),
    	category:ref(null),
    	coupons_available:ref(0),
    	access_token:ref(null),
    	xid:ref(null),
    }
  },
  mounted () {
  	this.getToken();  
  	this.mypath();		
  	if(this.$route.query.service_id){
  		this.getcoupons();
  	}
  },
  methods:{
  	getToken(){
  		var ps = this ;
  		if(ps.$store.state.token){ ps.access_token = ps.$store.state.token; }
      else{ ps.access_token = ps.$store.state.token_cb; }
      if(ps.$store.state.xid){ps.xid = ps.$store.state.xid;}
  		else{ps.xid = ps.$store.state.xid_cb;}

      if(ps.access_token == null ||  !ps.access_token){ ps.$router.push('/'); }
  	},
  	getcoupons(){
  		var ps = this;
  		var loader = document.getElementById('loader2');
	      	loader.style.display="block";
  		let config = { headers: { "Authorization": `Bearer ${ps.access_token}`,}}
      	ps.$api.get('/api/available-coupons?service_id='+ps.$route.query.service_id,config).then(function (response) {
      		loader.style.display="none";
        	console.log(response.data);
        	if(response.data.status_code == 204){
        		ps.coupons_available = 1;
        	}else{
						ps.coupons = response.data.coupons;
        		ps.redeem_points = response.data.redeem_points;        	
        	}
        }).catch(function (error) {
          console.log(error);
        });
  	},
  	screen_redirection(coupon){
  		var ps = this;
  		// console.log(coupon,"coupon");
  		ps.category = JSON.parse(sessionStorage.getItem('category'));
  		// console.log(ps.category,'category');
  		if(ps.$route.query.service_id == '1'){
  			sessionStorage.setItem('coupon1',coupon.code);
  			ps.$router.push('PickAndDrop_Checkout');
  		}else if(ps.$route.query.service_id == '3'){
  			sessionStorage.setItem('coupon1',coupon.code);
  			ps.$router.push('DriveMe_Summary');
  		}

  	},
  	screen_redirection_no_coupon(coupon){
  		var ps = this;
  		console.log(coupon,"coupon");
  		ps.category = JSON.parse(sessionStorage.getItem('category'));
  		// console.log(ps.category,'category');
  		if(ps.$route.query.service_id == '1'){
  			ps.$router.push('PickAndDrop_Checkout');
  		}else if(ps.$route.query.service_id == '3'){
  			sessionStorage.setItem('coupon1',coupon.code);
  			ps.$router.push('DriveMe_Summary');
  		}
  	},
  	mypath(){
      var ps=  this;
      var myallpaths = [];
      var i = 0;
      if(sessionStorage.getItem('mypath')){
        myallpaths = JSON.parse(sessionStorage.getItem('mypath'));
      }
      myallpaths.forEach(( path,index ) => {
        if(ps.$route.fullPath == path){
          if(i == 0){ i = index; }
        }
      });
      if(i == 0){
        myallpaths.push(ps.$route.fullPath);
      }else{
        for(var j=1;j<= myallpaths.length;++j){
          if(j<=i){ }else{ myallpaths.splice(j,1); }
        }
      }
      sessionStorage.setItem('mypath',JSON.stringify(myallpaths));
    },
    Screen_Back_Redirection(){
      var ps = this;
      var myallpaths = JSON.parse(sessionStorage.getItem('mypath'));
      var previous = myallpaths.length;
      ps.$router.push(myallpaths[previous-2]);
    }
  	
  }
})
</script>
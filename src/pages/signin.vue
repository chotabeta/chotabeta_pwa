<template>
	<q-layout class="animate__animated animate__slideInRight">
		<q-page-container>
			<q-page class="flex flex-center q-mt-xl q-py-xl" id="sign_in_page" style="display:block">
				<div id="loader2" class="pre-loader" style="display:none"></div>
				<div class="column items-center" >
					<q-avatar size="100px" class="shadow-5">
						<q-img src="~assets/images/logo.png" width="100px" class="shadow-5 "  ></q-img>
					</q-avatar>
					<div class="  text-center q-pa-xl" id="phone_number_div" style="display:block">
						
							<span class="text-weight-bolder text-indigo-6 q-mt-xl text-h5">Sign in</span>
							<div class="q-mt-sm ">
								<q-form @submit="Onsubmit" class="column items-center">
									<q-input v-model="mobile_number" outlined rounded dense type="number" class="cb-font-16" lazy-rules :rules="[ val => val &&  val.length == 10 || 'Please Enter Mobile Number']"> 
										<template v-slot:prepend>
			          						<span class="text-subtitle2">+91</span>
			        					</template>
									</q-input>
									<q-btn label="Send OTP" type="submit" class="bg-orange-8 q-my-sm text-white" ></q-btn>
								</q-form>
							</div>
							<span class="text-subtitle2">A 6-digit Confirmation Code Will be sent to your registered mobile number.</span>
						
					</div>

					<div class="column items-center text-center" style="display:none;" id="otp_div">
						
							<span class="flex flex-center q-mt-xl shadow-2 q-px-sm rounded" style="font-size:12px">
								Sent OTP To - {{ mobile_number }} 
								<q-btn label="Change Number" class="text-orange q-pa-none q-ml-sm" size="12px" @click="changeNumberFunction" flat>
									<q-icon name="edit" size="16px" class="q-pl-sm"></q-icon>
								</q-btn>
							</span><br>
							<span class="text-h6 q-my-md">Enter Your OTP Here</span><br>
							<q-form @submit="SigninWithOtp" class="text-center">
								<div class="flex flex-center q-pa-sm">
									<!-- <q-input v-model="OTP_Full" type="number" class="text-center" dense style="font-size: 20px;" outlined  lazy-rules :rules="[ val => val &&  val.length == 6 || 'Please Enter Valid OTP']"></q-input> -->

									 <input type="number" v-model="OTP_Full" maxlength="5" @input="OTPchangefield" class="text-center" style="font-size: 20px;border:2px solid orange;border-radius: 50px;">


									<!-- <q-input v-model="OTP1" @keyup="OTPchangefield1($event)" type="number" ref="otp1"  dense outlined required class="bg-grey-1 text-h6 q-ml-sm" style="max-width:35px"></q-input>
									<q-input v-model="OTP2" @keyup="OTPchangefield2($event)" type="number" ref="otp2"  dense outlined required class="bg-grey-1 text-h6 q-ml-sm" style="max-width:35px"></q-input>
									<q-input v-model="OTP3" @keyup="OTPchangefield3($event)" type="number" ref="otp3"  dense outlined required class="bg-grey-1 text-h6 q-ml-sm" style="max-width:35px"></q-input>
									<q-input v-model="OTP4" @keyup="OTPchangefield4($event)" type="number" ref="otp4"  dense outlined required class="bg-grey-1 text-h6 q-ml-sm" style="max-width:35px"></q-input>
									<q-input v-model="OTP5" @keyup="OTPchangefield5($event)" type="number" ref="otp5"  dense outlined required class="bg-grey-1 text-h6 q-ml-sm" style="max-width:35px"></q-input>
									<q-input v-model="OTP6" @keyup="OTPchangefield6($event)" type="number" ref="otp6"  dense outlined required class="bg-grey-1 text-h6 q-ml-sm" style="max-width:35px;"></q-input>
									<q-input  type="number" ref="otp7"  dense outlined  class="bg-grey-1 text-h6 q-ml-sm hidden"></q-input> -->
								</div>
								<span class="text-h6 text-cyan"><q-icon name="alarm" class="q-pa-sm"></q-icon>{{ Timer }}</span><br>
								<span>Don't Receive a code? <q-btn class="text-orange-8" label="Resend" @click="Onsubmit" flat></q-btn></span><br>
								<q-btn class="bg-orange-8 text-white q-px-md q-my-sm" ref="submitbtn" label="Submit" type="submit"></q-btn>
							</q-form>
					</div>

				</div>
			</q-page>
			<q-page class="flex flex-center q-pa-xl" id="user_details_add" style="display:none">
				<div class="text-center">
					<q-avatar size="100px" class="shadow-2">
						<img src="~assets/images/logo.png">
					</q-avatar><br><br>
					<span class="text-h5 text-bold">we need some basic information</span><br>
					<p class="text-h6 text-grey-8"> just to know more about you</p>
					<q-form @submit="save_user()" class="q-px-md">
						<q-input  v-model="mobile" outlined  rounded class="text-h6" disable>  
							<template v-slot:prepend>+91 <span class="q-px-xs">|</span></template>
						</q-input>
						<q-input  v-model="name" outlined placeholder="Name" rounded class="text-h6 q-my-sm"></q-input>
						<q-select  v-model="location" outlined placeholder="Select" :options="locations" rounded class="text-h6 q-my-sm"></q-select>
						<q-input v-model="referral" placeholder="Referral code (Optional)" outlined  rounded class="text-h6"></q-input>
						<br>
						<span class="text-h6">T&C <q-icon name="check_circle" color="orange" size="sm"></q-icon></span>
						<br><br>
						<q-btn type="submit" class="cb-bg-orange-8 text-white q-px-xl cb-round-borders-10 cb-font-16" label="submit"></q-btn>
					</q-form>
				</div>
			</q-page>
		</q-page-container>
	</q-layout>
</template>
<script>
	// let isMobile = window.matchMedia("only screen and (max-width: 760px)").matches;
  // if (!isMobile){ window.location="https://chotabeta.com/pwa"; }
import axios from 'boot/axios'
import { ref } from 'vue'

export default {
  setup () {
    return {
      mobile_number : ref(null),
      OTP1 : ref(''),
      OTP2 : ref(''),
      OTP3 : ref(''),
      OTP4 : ref(''),
      OTP5 : ref(''),
      OTP6 : ref(''),
      Timer: ref('00:00'),
      mobile:ref(null),
      locations:ref([]),
      location:ref(null),
      referral:ref(null),
      name:ref(null),
      OTP_Full:ref(null),
    }
  },
  mounted () {
  	// this.gettoken();
  },
  methods:{
  	gettoken(){
  		var ps = this;
  		// if(ps.$store.state.token){ ps.access_token = ps.$store.state.token; }
  		// else{	ps.access_token = ps.$store.state.token_cb;	}
  		// if(ps.access_token != null || ps.access_token){	
  			// ps.$router.push('CheckLocation');
  		// }
  	},
  	otp(){
  		var ps = this;
  		ps.otp = OTP1+''+OTP2+''+OTP3+''+OTP4+''+OTP5+''+OTP6;
  	},
  	Onsubmit(){
  		var ps = this;
  		var loader = document.getElementById('loader2');
	      	loader.style.display="block";
  		ps.$api.post('/api/auth/sign-up-send-otp',{ mobile: ps.mobile_number }).then(function (response) {
  			loader.style.display="none";
    		if(response.data.status_code == 400){
    			// var loader = document.getElementById('loader2');
	      	loader.style.display="block";
    			ps.$api.post('/api/auth/reset-password-send-otp',{ mobile: ps.mobile_number }).then(function (response) {
    				loader.style.display="none";
    				if(response.data.status_code ==200){
    				 	ps.$q.notify({ message:response.data.message, type: 'positive' });
    				 	document.getElementById('phone_number_div').style.display= "none";
    				 	document.getElementById('otp_div').style.display= "block";
    				 	ps.OTPtimer();
    				}else{
    				 	ps.$q.notify({ message:response.data.message, type: 'negative' });
    				}
  				}).catch(function (error) {
    				 // ps.$q.notify({ message:error, type: 'warning',progress: true, });
   				});	
    		}else if(response.data.status_code == 200){
    				ps.$q.notify({ message:response.data.message, type: 'positive' });
   				 	document.getElementById('phone_number_div').style.display= "none";
   				 	document.getElementById('otp_div').style.display= "block";
   				 	ps.OTPtimer();
	    		}else{
    			ps.$q.notify({ message:error, type: 'negative',progress: true, });
    		}
  		}).catch(function (error) {
  			console.log(error);
    		// ps.$q.notify({ message:error, type: 'warning' });
  		});
  	},
  	changeNumberFunction(){
  		document.getElementById('phone_number_div').style.display= "block";
    	document.getElementById('otp_div').style.display= "none";
  	},
  	OTPtimer(){
  		var ps = this;
	  	var count =  59;
	   	setInterval(function(){
	   		if(count >= 10){ ps.Timer = '00:'+(count); }
	   		if(count <10 ){  ps.Timer = '00:0'+(count); }
	   		if(count != 0 ){ count = count - 1 ; }
	   	},1000);
  	},
  	OTPchangefield(event){
      if (event.target.value.length >　event.target.getAttribute("maxlength")) {
        event.target.blur()
      }
  	},
  	// OTPchangefield1(event){ if(this.OTP1.length == 1){ this.$refs.otp2.focus(); }  },
  	// OTPchangefield2(event){ if(event.keyCode == 8){ this.$refs.otp1.focus(); }  if(this.OTP2.length == 1){ this.$refs.otp3.focus(); } },
  	// OTPchangefield3(event){ if(event.keyCode == 8){ this.$refs.otp2.focus(); }  if(this.OTP3.length == 1){ this.$refs.otp4.focus(); }  },
  	// OTPchangefield4(event){ if(event.keyCode == 8){ this.$refs.otp3.focus(); }  if(this.OTP4.length == 1){ this.$refs.otp5.focus(); }  },
  	// OTPchangefield5(event){ if(event.keyCode == 8){ this.$refs.otp4.focus(); }  if(this.OTP5.length == 1){ this.$refs.otp6.focus(); }  },
  	// OTPchangefield6(event){ if(event.keyCode == 8){ this.$refs.otp5.focus(); }  if(this.OTP6.length == 1){ this.$refs.otp7.focus(); } },
  	SigninWithOtp(){
  		var ps =  this;	
  		// var OTP = ps.OTP1+ps.OTP2+ps.OTP3+ps.OTP4+ps.OTP5+ps.OTP6;
  		var loader = document.getElementById('loader2');
	      	loader.style.display="block";
  		ps.$store.dispatch('login',{'mobile':ps.mobile_number, 'password':String(ps.OTP_Full) }).then(res => {
  		 	if(res.status_code == 200){
	  		 	// ps.$q.notify({ message:res.message, type: 'positive' ,progress: true,});
	  		 	// ps.$router.push('CheckLocation');
	  		 	ps.screen_redirection();
	  		}else if(res == 'new'){
	  			ps.mobile = ps.mobile_number;
	  			document.getElementById('sign_in_page').style.display = 'none';
	  			document.getElementById('user_details_add').style.display = 'block';
	  			ps.get_cities();
	  		}
      }).catch(error => {
          	ps.$q.notify({ message:error.message, type: 'negative',progress: true, });
       });
      loader.style.display="none";
  	},
  	get_cities(){
  		var ps = this;
  		ps.$api.get('/api/get-serving-locations').then(function (response) {
  			ps.locations = response.data.locations;
  		}).catch(function (error) {
  			console.log(error);
    		// ps.$q.notify({ message:error, type: 'warning' });
  		});
  	},
  	save_user(){
  		var ps = this;
  		if(!ps.name){ ps.$q.notify({ message:'Name is required', type: 'negative'}); return false;}
  		if(!ps.location){ ps.$q.notify({ message:'Name is required', type: 'negative'}); return false;}
  		var formdata={
									password: "********",
									full_name: ps.name,
									city: ps.location,
									mobile: ps.mobile,
									ref_code: ps.referral,
									l_number:'',
									device: "",
									email: null
									}
			ps.$api.post('/api/auth/self-details',formdata).then(function (response) {
  			ps.$store.dispatch('set_access_token',{'access_token':response.data.access_token, 'xid':response.data.sh }).then(res => {
  				ps.screen_redirection();
  				ps.$router.push('CheckLocation');
				 }).catch(error => {
        	ps.$q.notify({ message:error, type: 'negative',progress: true, });
       });
  		}).catch(function (error) {
  			console.log(error);
    		// ps.$q.notify({ message:error, type: 'warning' });
  		});

  	},
  	screen_redirection(){
  		var ps = this;
  		ps.userdetails();
  		if(ps.$route.query.service=="PFS"){
  			ps.$router.push('/PickFromStore_Checkout');
  		}else if(ps.$route.query.service=="CO"){
  			ps.$router.push('/camorder_checkout');
  		}else if(ps.$route.query.service=="PAD"){
  			ps.$router.push('/PickAndDrop_Checkout');
  		}else if(ps.$route.query.service=="DM"){
  			ps.$router.push('/DriveMe_Summary');
  		}else if(ps.$route.query.service=="RM"){
  			ps.$router.push('/rent_me3');
  		}else if(ps.$route.query.service=="DP"){
  			ps.$router.push('/home/profile');
  		}else if(ps.$route.query.service=="Food"){
  			ps.$router.push('/food-checkout?plan='+ps.$route.query.plan+'&subscription='+ps.$route.query.subscription);
  		}
  	},
  	userdetails(){
      var ps = this;
      var loader = document.getElementById('loader2');
	      	loader.style.display="block";
      let config = { headers: { "Authorization": `Bearer ${ps.$store.state.token}`,}}
      ps.$api.get('/api/user',config).then(function (response) {
      	loader.style.display="none";
      	ps.$store.dispatch('userdetails',{'deatils':response.data }).then(res => {
  		 	}).catch(error => {	ps.$q.notify({ message:error.message, type: 'negative',progress: true, });  });
      	ps.profile_pic =  response.data.profile_pic;
        ps.name = response.data.name;
      }).catch(function (error) {
        console.log(error);
      })
    },
  }
}
</script>

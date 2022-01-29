<template>
	<q-layout>
		<q-page-container>
			<q-page class="flex flex-center">
				<div class="column items-center">
					<q-avatar size="100px" class="shadow-5">
						<q-img src="~assets/images/logo.png" width="100px" class="shadow-5 "  ></q-img>
					</q-avatar>
					<div class="  text-center q-pa-xl" id="phone_number_div" >
						
							<span class="text-weight-bolder text-indigo-6 q-mt-xl text-h5">Sign in</span>
							<div class="q-mt-sm ">
								<q-form @submit="Onsubmit" class="column items-center">
									<q-input v-model="mobile_number" outlined rounded dense type="number"  lazy-rules :rules="[ val => val &&  val.length == 10 || 'Please Enter Mobile Number']"> 
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
							<span class="text-h6 q-my-md">Enter Your OTP Here</span><br><br>
							<q-form @submit="SigninWithOtp" class="text-center">
								<div class="flex flex-center q-pa-sm">
									<q-input v-model="OTP1" @keyup="OTPchangefield1($event)" type="number" ref="otp1"  dense outlined required class="bg-grey-1 text-h6 q-ml-sm" style="max-width:35px"></q-input>
									<q-input v-model="OTP2" @keyup="OTPchangefield2($event)" type="number" ref="otp2"  dense outlined required class="bg-grey-1 text-h6 q-ml-sm" style="max-width:35px"></q-input>
									<q-input v-model="OTP3" @keyup="OTPchangefield3($event)" type="number" ref="otp3"  dense outlined required class="bg-grey-1 text-h6 q-ml-sm" style="max-width:35px"></q-input>
									<q-input v-model="OTP4" @keyup="OTPchangefield4($event)" type="number" ref="otp4"  dense outlined required class="bg-grey-1 text-h6 q-ml-sm" style="max-width:35px"></q-input>
									<q-input v-model="OTP5" @keyup="OTPchangefield5($event)" type="number" ref="otp5"  dense outlined required class="bg-grey-1 text-h6 q-ml-sm" style="max-width:35px"></q-input>
									<q-input v-model="OTP6" @keyup="OTPchangefield6($event)" type="number" ref="otp6"  dense outlined required class="bg-grey-1 text-h6 q-ml-sm" style="max-width:35px;"></q-input>
									<q-input  type="number" ref="otp7"  dense outlined  class="bg-grey-1 text-h6 q-ml-sm hidden"></q-input>
								</div>
								<span class="text-h6 text-cyan"><q-icon name="alarm" class="q-pa-sm"></q-icon>{{ Timer }}</span><br>
								<span>Don't Receive a code? <q-btn class="text-orange-8" label="Resend" @click="Onsubmit" flat></q-btn></span><br>
								<q-btn class="bg-orange-8 text-white q-px-md q-my-sm" ref="submitbtn" label="Submit" type="submit"></q-btn>
							</q-form>
					</div>

				</div>
			</q-page>
		</q-page-container>
	</q-layout>
</template>
<script>
	let isMobile = window.matchMedia("only screen and (max-width: 760px)").matches;
  if (!isMobile){ window.location="https://chotabeta.com/pwa"; }
import axios from 'axios'
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
    }
  },
  mounted () {
  	this.gettoken();
  },
  methods:{
  	gettoken(){
  		var ps = this;
  		ps.access_token = ps.$store.state.token;
  		if(ps.access_token != null || ps.access_token){
  			ps.$router.push('/Home/Dashboard');
  		}
  	},
  	otp(){
  		var ps = this;
  		ps.otp = OTP1+''+OTP2+''+OTP3+''+OTP4+''+OTP5+''+OTP6;
  	},
  	Onsubmit(){
  		var ps = this;
  		axios.post('https://chotabeta.app/dev/testenv/api/auth/sign-up-send-otp',{ mobile: ps.mobile_number }).then(function (response) {
    		if(response.data.status_code == 400){
    			axios.post('https://chotabeta.app/dev/testenv/api/auth/reset-password-send-otp',{ mobile: ps.mobile_number }).then(function (response) {
    				if(response.data.status_code ==200){
    				 	ps.$q.notify({ message:response.data.message, type: 'positive' });
    				 	document.getElementById('phone_number_div').style.display= "none";
    				 	document.getElementById('otp_div').style.display= "block";
    				 	ps.OTPtimer();
    				}else{
    				 	ps.$q.notify({ message:response.data.message, type: 'negative' });
    				}
  				}).catch(function (error) {
    				 ps.$q.notify({ message:error, type: 'warning',progress: true, });
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
    		ps.$q.notify({ message:error, type: 'warning' });
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
  	OTPchangefield1(event){ if(this.OTP1.length == 1){ this.$refs.otp2.focus(); }  },
  	OTPchangefield2(event){ if(event.keyCode == 8){ this.$refs.otp1.focus(); }  if(this.OTP2.length == 1){ this.$refs.otp3.focus(); } },
  	OTPchangefield3(event){ if(event.keyCode == 8){ this.$refs.otp2.focus(); }  if(this.OTP3.length == 1){ this.$refs.otp4.focus(); }  },
  	OTPchangefield4(event){ if(event.keyCode == 8){ this.$refs.otp3.focus(); }  if(this.OTP4.length == 1){ this.$refs.otp5.focus(); }  },
  	OTPchangefield5(event){ if(event.keyCode == 8){ this.$refs.otp4.focus(); }  if(this.OTP5.length == 1){ this.$refs.otp6.focus(); }  },
  	OTPchangefield6(event){ if(event.keyCode == 8){ this.$refs.otp5.focus(); }  if(this.OTP6.length == 1){ this.$refs.otp7.focus(); } },
  	SigninWithOtp(){
  		var ps =  this;	
  		var OTP = ps.OTP1+ps.OTP2+ps.OTP3+ps.OTP4+ps.OTP5+ps.OTP6;
  		ps.$store.dispatch('login',{'mobile':ps.mobile_number, 'password':OTP }).then(res => {
  		 	if(res.status_code == 200){
	  		 	ps.$q.notify({ message:res.message, type: 'positive' ,progress: true,});
	  		 	ps.$router.push('/Home/Dashboard');
  		 	}else{
  		 		
  		 	}
       
       }).catch(error => {
          	ps.$q.notify({ message:error.message, type: 'negative',progress: true, });
       });
  	},
  }
}
</script>
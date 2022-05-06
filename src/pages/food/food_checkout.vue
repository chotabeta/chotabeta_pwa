<template>
<q-layout view="lHh lpr lFf">
	<q-header class="bg-orange-1 q-pt-xs">
	  <q-toolbar class="text-grey-8 text-h6">
	 		<q-btn icon="arrow_back_ios" flat @click="Screen_Back_Redirection()"></q-btn>
	    <q-space></q-space>
	    Checkout
	    <q-space></q-space>
	    <q-space></q-space>
	  </q-toolbar>
	</q-header>
	<q-page-container class="animate__animated animate__slideInRight">
		<div id="loader2" class="pre-loader" style="display:none"></div>
		<q-page class="bg-orange-1 q-px-sm text-grey-8">
			<div class="row">
			<!-- order summery -->
				<div class="col-12 text-body1 text-weight-bolder text-blue-10">Order summery</div>
				<div class="q-pa-none col-12 q-py-sm">
					<table class="full-width cb-font-16">
						<tr>
							<td>Subtotal</td>
							<td class="text-right"><q-icon name="currency_rupee"></q-icon>{{ continue_data.total_selling_price }}</td>
						</tr>
						<tr>
							<td>Delivery Charge</td>
							<td class="text-right"><q-icon name="currency_rupee"></q-icon>{{ continue_data.delivery_fee }}</td>
						</tr>
						<tr>
							<td>Tax & Fees</td>
							<td class="text-right"><q-icon name="currency_rupee"></q-icon>{{ continue_data.gst }}</td>
						</tr>
						<tr class="text-red" v-if="coupon_code != null">
							<td>Discount</td>
							<td class="text-right"><q-icon name="currency_rupee"></q-icon>{{ discount }}</td>
						</tr>
						<tr class="text-weight-bolder">
							<td >Total</td>
							<td class="text-right"><q-icon name="currency_rupee"></q-icon>{{ continue_data.total }}</td>
						</tr>
					</table>
				</div>
			<!-- for coupon -->
				<div class="col-12 bg-orange-3 q-pa-xs cb-round-borders-10" v-if="coupon_code == null">
					<div class="full-width bg-orange-1 flex cb-round-borders-10 q-pa-sm" @click="getcoupons()">
						<span class="text-subtitle1">Apply Coupon</span>
						<q-space></q-space>
						<q-btn label="view all" outline color="orange" icon-right="chevron_right" class="cb-round-borders-10 q-pl-sm" dense></q-btn>
					</div>
				</div>
				<div class="col-12 bg-orange-3 q-pa-xs cb-round-borders-10" v-if="coupon_code != null">
					<div class="full-width bg-orange-1 flex cb-round-borders-10 q-pa-sm">
						<span class="text-subtitle1">{{ coupon_code }} Applied</span>
						<q-space></q-space>
						<q-btn label="Remove" outline color="orange" icon-right="chevron_right" class="cb-round-borders-10 q-pl-sm" dense @click="couponremove_function()"></q-btn>
					</div>
				</div>

			<!-- for delivery address -->
				<div class="col-12 text-body1 text-weight-bolder text-blue-10 q-py-sm">Delivery Address</div>
				<div class="col-12 ">
					<div class="row q-px-sm items-center">
						<div class="col-1"> <q-icon name="check_circle_outline" color="orange" size="md"></q-icon></div>
						<div class="col-8 q-px-sm">	{{ delivery_address }} </div>
						<div class="col-3 text-right">
							<q-btn label="change" outline color="orange" class="q-mb-xs q-px-sm cb-round-borders-10 " size="11px" icon-right="chevron_right"  @click="food_change_address()"></q-btn>
							<br>
							<span>Location</span>
						</div>
					</div>
				</div>

			<!-- instructions -->
				<div class="col-12 q-pa-sm q-py-md ">

					<q-input borderless class="bg-white cb-font-16 shadow-3 q-px-md cb-round-borders-20" style="overflow: hidden;" placeholder="Add instruction here" v-model="instruction"></q-input>
				</div>

			<!-- payment mothods -->
				<div class="col-12 text-body1 text-weight-bolder text-blue-10 q-py-sm" v-if="xid != 2">Payment Method</div>
				<div class="col-12 cb-font-16" v-if="xid != 2">
				  <div v-for="method in payment_modes" :key="method">
				  	<div class="row  items-center" v-if="method.payment_status == 1">
              <q-radio v-model="payment" :val="method.payment_mode" color="orange" />
              <span class="q-px-sm">{{method.payment_mode}}</span>
            </div>
          </div>
				</div>

				<div class="col-12 q-py-md" v-if="xid != 2 && checkout_buton_status == 0">
					<q-btn color="green-4" label="checkout" @click="food_checkout()" class="full-width cb-round-borders-10 cb-font-16"></q-btn>
				</div>

				<div class="col-12 text-center" v-if="xid ==2" >
					<q-btn label="Sign In" class="cb-bg-green-8 text-white q-px-xl" @click="signinscreen()"></q-btn>
				</div>
			 
			</div>


			<q-dialog v-model="coupon_dailog_error">
        <q-card class="cb-round-borders-10" @click="coupon_dailog_error= false">
          <q-card-section class="text-center q-pa-lg">
            <q-avatar color="red" text-color="white" size="60px" class=
            'q-pa-none' icon="sentiment_dissatisfied" font-size="60px"/><br>
            <div class="text-h5 q-py-sm "><b>Oops!</b></div>
            <div>Not applied</div>
            <q-btn label="add another coupon" @click="coupon_dailog_error= false" flat class="text-red-8 text-bold"></q-btn>
          </q-card-section>  
        </q-card>
      </q-dialog>

      <q-dialog v-model="coupon_dailog_applied">
        <q-card class="cb-round-borders-10" @click="coupon_dailog_applied =  false">
          <q-card-section class="text-center q-pa-lg">
            <q-avatar color="green" text-color="white" size="60px" class='q-pa-none' icon="sentiment_satisfied" font-size="60px"/><br>
            <div class="text-h5 q-py-sm "><b>HoHoo!</b></div>
            <div>Coupon Code <span class="text-weight-bolder">{{ coupon_code }}</span> Applied</div>
            <div class="text-green text-bold cb-font-16"><q-icon name="currency_rupee"></q-icon>{{ discount }} Saved</div>
          </q-card-section>  
        </q-card>
      </q-dialog>

      <q-dialog v-model="coupon_dailog_remove">
        <q-card class="cb-round-borders-10" @click="coupon_dailog_remove= false">
          <q-card-section class="text-center q-pa-lg">
            <q-avatar color="green" text-color="white" size="60px" class='q-pa-none' icon="sentiment_satisfied" font-size="60px"/><br>
            <div class="text-h5 q-py-sm "><b>Oops!</b></div>
            <div>Coupon Removed!</div>
            <q-btn label="add another coupon" @click="coupon_dailog_remove= false" flat class="text-red-8 text-weight-bolder"></q-btn>
          </q-card-section>  
        </q-card>
      </q-dialog>

      <q-dialog v-model="continue_to_stoping_dialog" persistent>
        <q-card class="cb-round-borders-20 q-pa-md" style="max-width: 300px;">
        	<q-card-section class="text-center">
        		<q-avatar size="80px" class="cb-bg-orange-2">
        			<q-avatar icon="done" font-size="60px" size="70px" class="cb-text-orange-8 bg-white"></q-avatar>
        		</q-avatar>
        		<p class="text-h6 text-weight-bolder">Your order is successfully placed</p>
        		<p class="cb-font-16">You can track the delivery in the orders section</p>
        		<q-btn label="continue shopping" class="cb-bg-orange-8 text-white cb-round-borders-10" @click="$router.push('/home/dashboard')"></q-btn>
        		<q-btn label="go to orders" flat class="q-my-md" @click="$router.push('/Home/FoodOrders')"></q-btn>
        	</q-card-section>
        </q-card>
      </q-dialog>

      <q-dialog v-model="payment_decline_method">
        <q-card class="q-px-md q-py-md cb-round-borders-20 text-grey-9">
          <q-card-section class="text-center">
            <q-avatar size="80px" class="bg-orange-3">
              <q-avatar size="65px" class="bg-white cb-text-orange-8" font-size="60px" icon="close"></q-avatar>
            </q-avatar><br>
            <span class="text-weight-bolder text-h6">Your Payment Has Been Declined!</span>
            <br>
            <q-btn label="Ok" class="q-px-xl cb-font-16 cb-bg-orange-8 text-white q-mb-sm q-mt-lg" @click="refresh_page_without_response()"></q-btn>
          </q-card-section>
        </q-card>
      </q-dialog>


		</q-page>
	</q-page-container>
</q-layout>
</template>
<script type="text/javascript">

import axios from 'boot/axios'
import { ref } from "vue";
export default {
  setup() {
    return {
      access_token:ref(null),
      xid:ref(null),
      payment_modes:ref([]),
      payment:ref(null),
      default_payment_mode:ref(null),
      instruction:ref(null),
      continue_data:ref([]),
      MyFoodCart:ref([]),
      delivery_territory_id:ref(null),
      food_delivery_address:ref(null),
		  delivery_address:ref(null),
		  delivery_pincode:ref(null),
		  delivery_latlngs:ref(null),
		  food_client_id:ref(null),
		  coupon_code:ref(null),
		  discount:ref(null),
		  coupon_dailog_error:ref(false),
		  coupon_dailog_applied:ref(false),
		  coupon_dailog_remove:ref(false),
		  continue_to_stoping_dialog:ref(false),

		  plan:ref(null),
		  schedule_time:ref(null),
		  data:[],
		  week_end:ref(null),
		  pick_date:ref(null),
		  checkout_buton_status:ref(0),
		  payment_decline_method:ref(false),
   	}
  },
  mounted() {
  	this.getToken();
  	this.mypath();
  	// uncomment this  functions when you move to live
  	this.get_payment_images_function();
	  this.deliveryaddress();  	

  	// comment this functions when you move to live
  	// this.loaddata();
  },
  methods: {
  	getToken(){
  	  var ps = this;
  	  if(ps.$store.state.token){ ps.access_token = ps.$store.state.token; }
      	else{ ps.access_token = ps.$store.state.token_cb; }

      if(ps.$store.state.xid){ps.xid = ps.$store.state.xid;}
  		else{ps.xid = ps.$store.state.xid_cb;}

      if(ps.access_token == null ||  !ps.access_token){ ps.$router.push('/'); }
  	},
  	loaddata(){
  		var ps = this;
  		ps.food_client_id= 1;
  		ps.coupon_code = null;
  		// get_payment_images_function
  		ps.endPoint= "https://www.stackroger.com/public/images/";
    	ps.transaction_id= "08042022Q43A113328";
    	ps.default_payment_mode= 2;
    	ps.payment_modes= [
		        {
		            "payment_mode": "Cash On Delivery",
		            "image": "1.png",
		            "payment_status": 0
		        },
		        {
		            "payment_mode": "Pay Online On Delivery",
		            "image": "2.png",
		            "payment_status": 1
		        },
		        {
		            "payment_mode": "Pay Now Online",
		            "image": "3.png",
		            "payment_status": 1
		        }
		    ];
			ps.payment_modes.forEach((mode,i)=>{
          if( (i+1) == ps.default_payment_mode){ ps.payment = mode.payment_mode; }
			});

			// continue food 
			ps.continue_data = {
				total_mrp: 110,
				total_selling_price: 110,
				delivery_fee: "30",
				gst: 6,
				tota_delivery_fee: 36,
				total_distance: 12,
				total: 146,
				plan: "schedule",
				week_end: "",
				no_of_days: 1,
				coupon_discount: 0,
				coupon_code: "",
				messege_1: "Order once placed cannot be cancelled",
				messege_2: "",
				from_location: "Attapur",
				to_lat_lng: "17.443500056368073,78.37720010429621",
				show_coupon: 0,
				restaurant_name: "Homes Kitchen",
				restaurant_address: "Attapur",
				restaurant_image: "https://stackroger.com/public/uploads/food/restaurants/home_kitchen_logo.png",
				payment_success_msg1: "your order has been placed successfully",
				payment_success_msg2: "you can track the delivery in the orders..",
				payment_failed_msg1: "your order could not placed",
				dialog_title: "Too far",
				dialog_messgae: "Delivery location is too far from the restaurant, please change",
				payment_gateway_selection: 1,
				payment_access_token: "801611054d5ca0098efe073ca6fadbe554251ef965750f2d6ca5e43dfe5123f9",
				payment_hash: "90a68e98391fcb952d8e40a70e56f4a5efbd0334e063a36e6997d00d4f069ea72f88e5945166a7d268371c996fd5bf9a96389225743bdcbed29278d614f9a575"
			};
  	},
  	get_payment_images_function(){
  	  var ps = this;
  	  let config = { headers: { "Authorization": `Bearer ${ps.access_token}`,}};
  	  var loader = document.getElementById('loader2');
	  	loader.style.display="block";
	  	ps.$api.get('/api/food-get-payment-images',config).then(function (response) {
      	console.log(response,"get_payment_images");
      	loader.style.display="none";
      	if(response.data.status_code == 200){
      		ps.endPoint = response.data.endPoint;
					ps.transaction_id =response.data.transaction_id;
					ps.default_payment_mode =response.data.default_payment_mode;
					ps.payment_modes =response.data.payment_modes;
					ps.payment_modes.forEach((mode,i)=>{
		        if( (i+1) == ps.default_payment_mode){ ps.paymnet = mode.payment_mode; }
					})  
        }else{
          ps.$q.notify({ message: response.data.message, type: "negative",});
        }
      }).catch(function (error) {
      	console.log(error);
      });
  	},

  	deliveryaddress(){
  		var ps = this;
  		if(ps.$route.query.adding == '1'){
        // console.log(JSON.parse(localStorage.getItem('pick_from_store_address')));
       	ps.food_delivery_address = JSON.parse(localStorage.getItem('food_delivery_address'));
        ps.delivery_address = ps.food_delivery_address.name;
        ps.delivery_pincode = ps.food_delivery_address.postal_code;
        ps.delivery_latlngs = ps.food_delivery_address.location;
  		}else{
  			ps.delivery_address = ps.$store.state.address;
  			ps.delivery_pincode = ps.$store.state.pincode;
  			ps.delivery_latlngs = ps.$store.state.latlongs;
  		}
  		ps.check_territory(); 	
  	},
  	check_territory(){
  	  var ps = this;
      var loader = document.getElementById('loader2');
          loader.style.display="block";
  		let config = { headers: { Authorization: `Bearer ${ps.access_token}` } };
    	ps.$api.get('/api/check-territory2?base_location='+ps.delivery_latlngs+'&base_pincode=0&cache_hash=&l_number=&lat_lng='+ps.delivery_latlngs+'&pincode='+ps.delivery_pincode+'&playstore_version_name=&xid='+ps.xid,config).then(function (response) {
        loader.style.display="none";
      	console.log(response,'territory');
      	ps.delivery_territory_id = response.data.zone_id;
      	ps.continue_food_one_function();
      }).catch(function (error) {
        console.log(error);
      })
  	},
  	getcoupons(){
  		var ps = this;
  		ps.$router.push('food-coupons?client_id='+ps.food_client_id+'&plan='+ps.$route.query.plan+'&subscription='+ps.$route.query.subscription);
  	},
  	couponremove_function(){
      var ps = this;
      ps.discount = null;
      ps.coupon_code = null;
      localStorage.removeItem('food_coupon');
      ps.coupon_dailog_remove = true;
      ps.continue_food_one_function();
    },
  	continue_food_one_function(){
  	  var ps = this;
  	  if(localStorage.getItem('food_coupon')){
  	  	ps.coupon_code = localStorage.getItem('food_coupon');
  	  }

  	  if( ps.$route.query.subscription == 0 ){
  	  	alert('hai');
  	  	ps.plan = ps.$route.query.plan;
  	  	ps.schedule_time = localStorage.getItem('schedule_time');
  	  	ps.MyFoodCart = JSON.parse(localStorage.getItem('MyFoodCart'));
	  	  ps.data = [];
		  	ps.MyFoodCart.forEach(cart=>{
		  		ps.food_client_id = cart.client_id;
		    	var d = { "qty":cart.no_of_qty,"id":cart.id,};
			   	ps.data.push(d);
		    });
  	  }
  	  else if(ps.$route.query.subscription == 1){
  	  	 var subscription_data = JSON.parse(localStorage.getItem('subscription_data'));
  	  	 ps.plan = subscription_data.plan;
  	  	 ps.week_end = subscription_data.weekend;
  	  	 ps.pick_date = subscription_data.pick_date;
  	  	 ps.data.push(subscription_data.item);
  	  	 ps.schedule_time = subscription_data.schedule_time;
  	  	 ps.food_client_id = subscription_data.client_id;
  	  }

  	  let config = { headers: { "Authorization": `Bearer ${ps.access_token}`,}};
  	  var loader = document.getElementById('loader2');
		  let formData = new FormData;
		  formData.append('service_path',ps.$route.fullPath);
		  formData.append("plan", ps.plan);
		  formData.append("schedule_time", ps.schedule_time);
		  formData.append("items", JSON.stringify(ps.data) );
		  formData.append("code", ps.coupon_code);
		  formData.append("to_lat_lng", ps.delivery_latlngs);
		  formData.append("lat_lng", ps.delivery_latlngs);
		  formData.append("pincode", ps.delivery_pincode);
		  formData.append("user_instructions", ps.instruction);
		  formData.append("xid", ps.xid);
		  formData.append("week_end",ps.week_end );
		  formData.append("client_id", ps.food_client_id);
		  formData.append("territory_id", ps.delivery_territory_id);
		  formData.append("pick_date",ps.pick_date );
		  loader.style.display="block";
      ps.$api.post('/api/continue-food-one',formData,config).then(function (response) {
      	console.log(response,"continue-food-one");
      	loader.style.display="none";
      	if(response.data.status_code == 200){
      		ps.checkout_buton_status = 0;
      		ps.continue_data = response.data;
      		if(localStorage.getItem('food_coupon')){
	  				if(response.data.coupon_discount == 0){
	              ps.coupon_dailog_error = true;
	              localStorage.removeItem('food_coupon');
	              ps.coupon_code = null;
	            }else{
	              ps.discount = response.data.coupon_discount;
	              ps.coupon_dailog_applied = true;
	            }	
	  			}
	  			ps.discount = response.data.coupon_discount;
	  			if(ps.$route.query.response == "pass"){
	          ps.food_checkout_function();
	        }else if(ps.$route.query.response == "fail"){
	          // alert('faile to payment');
	          ps.payment_decline_method = true;
	        }
        }else{
        	ps.$q.notify({ message: response.data.message, type: "negative",});
        	ps.checkout_buton_status = 1;
        }
      }).catch(function (error) {
      	console.log(error);
      });
  	},
  	food_checkout(){
  		var ps = this;
  		if(!ps.payment){
        ps.$q.notify({ message: "Please Select Payment Method", type: "negative",});
        return false;
      }
      if(ps.payment == 'Cash On Delivery'){var payment = 'COD';}
      else if(ps.payment == 'Pay Online on Delivery'){var payment = 'POD';}
      else if(ps.payment == 'Pay Now Online'){var payment = 'Online'; }
      var url = "https://pay.easebuzz.in/pay/"+ps.continue_data.payment_access_token;
      if(payment == "Online"){
        window.location = url; 
      }else{
        ps.food_checkout_function();
      }
  	},
  	food_checkout_function(){
  	  var ps= this;

  	  if(ps.$route.query.response == "pass"){
        var payment_status  = "paid";
        var payment = "Online";
      }else{
        var payment_status = "pending";
        if(ps.payment == 'Cash On Delivery'){var payment = 'COD';}
        else if(ps.payment == 'Pay Online on Delivery'){var payment = 'POD';}
      }

  	  let formData = new FormData;
      formData.append("payment_status", payment_status);
		  formData.append("transaction_id", ps.delivery_territory_id);
		  formData.append("code", ps.coupon_code);
		  formData.append("schedule_time", ps.schedule_time);
		  formData.append("client_id", ps.food_client_id);
		  formData.append("to_lat_lng", ps.delivery_latlngs);
		  formData.append("user_instructions", ps.instruction);
		  formData.append("plan", ps.plan);
		  formData.append("week_end", ps.week_end);
		  formData.append("territory_id", ps.delivery_territory_id);
		  formData.append("pincode", ps.delivery_pincode);
		  formData.append("items", JSON.stringify(ps.data));
		  formData.append("to_location", ps.delivery_address);
		  formData.append("xid", ps.xid);
		  formData.append("pick_date", ps.pick_date);
		  formData.append("payment_mode", payment);
  	  var loader = document.getElementById('loader2');
      loader.style.display="block";
  	  let config = { headers: { Authorization: `Bearer ${ps.access_token}` } };
      ps.$api.post('/api/pay-food',formData,config).then(function (response) {
        loader.style.display="none";
      	console.log(response,'territory');
      	if( response.data.status_code == 200 ){
      		localStorage.removeItem('food_coupon');
      		localStorage.removeItem('schedule_time');
      		localStorage.removeItem('MyFoodCart');
      		localStorage.removeItem('subscription_data');
      		ps.continue_to_stoping_dialog =  true;
      	}
      }).catch(function (error) {
        console.log(error);
      });
  	},
  	food_change_address(){
  		var ps= this;
  		ps.$router.push('Search_location?address=f1&plan='+ps.$route.query.plan+'&subscription='+ps.$route.query.subscription);
  	},
  	signinscreen(){
  		var ps = this;
  		ps.$router.push('sign-in?service=Food&plan='+ps.$route.query.plan+'&subscription='+ps.$route.query.subscription);
  	},
  	refresh_page_without_response(){
  		var ps = this;
      ps.payment_decline_method = false;
      var url = ps.$route.path+'?plan='+ps.$route.query.plan+'&subscription='+ps.$route.query.subscription;
      ps.$router.push(url);
    },
  	mypath(){
      var ps=  this;
      var myallpaths = [];
      var i = 0;
      if(localStorage.getItem('mypath')){
        myallpaths = JSON.parse(localStorage.getItem('mypath'));
      }
      myallpaths.forEach(( path,index ) => {
        if(ps.$route.path == path){
          if(i == 0){ i = index; }
        }
      });
      if(i == 0){
        myallpaths.push(ps.$route.path);
      }else{
        for(var j=1;j<= myallpaths.length;++j){
          if(j<=i){ }else{ myallpaths.splice(j,1); }
        }
      }
      localStorage.setItem('mypath',JSON.stringify(myallpaths));
    },
    Screen_Back_Redirection(){
      var ps = this;
      var myallpaths = JSON.parse(localStorage.getItem('mypath'));
      var previous = myallpaths.length;
      ps.$router.push(myallpaths[previous-2]);
    }
  },
};
</script>
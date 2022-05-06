<template>
<q-layout view="lHh lpr lFf" >

  <q-header>
		<q-toolbar class="cb-bg-white-2 cb-text-blue-8">
	    <q-btn flat dense round icon="arrow_back" @click="Screen_Back_Redirection()"/>
      <q-btn icon="place" class="q-pa-none cb-font-12" borderless flat :label="$store.state.showaddress"></q-btn>
			<q-space></q-space>
			<q-btn round dense icon="notifications" flat @click="$router.push('/home/Notification')"> 
		    <q-badge  color="red" rounded floating style="margin-top:8px;margin-right: 8px;"></q-badge>
		  </q-btn>
		  <div style="background: transparent;">
			  <q-btn round dense icon="shopping_cart" flat style="background: transparent;" @click="$router.push('PickFromStore_layouts_s3')">
			  	<q-badge class="cb-bg-orange-8" rounded floating >{{ cartlength }}</q-badge>
			  </q-btn>
			</div>
		</q-toolbar>
		<div class="cb-text-orange-8 cb-bg-white-2 cb-font-16 text-weight-bolder q-pb-xs flex flex-center">Checkout</div>
  </q-header>

  <q-page-container class="animate__animated animate__slideInRight">
  	<q-page class="q-pa-sm">
      <div id="loader2" class="pre-loader" style="display:none"></div>
  	  <q-card class="cb-round-borders-10 cb-shadow-1"> 
  	  	<q-card-section class="cb-bg-grey-2 q-py-sm">
  	  	  <span class="text-bold cb-text-blue-8 cb-font-16"> Delivery Address </span>
  	  	  <q-icon name="calendar_today" class="cb-text-orange-8 q-px-sm" size="sm" @click="calander_dailog_picktime= true"></q-icon>
  	  	  <span class="cb-text-grey-8 cb-font-12">{{pick_date}} | {{ pick_time }}</span>
  	  	</q-card-section>
  	  	<q-card-section class="q-pa-sm">
  	  	  <div class="row">
  	  	  	<div class="col-2 q-pr-md">
  	  	  		<q-btn class="q-pa-none cb-text-grey-4 cb-round-borders-10 full-height fit" outline @click="$router.push('Search_location?address=p1')">
  	  	  			<q-icon name="add" class="text-bold cb-text-grey-4" size="xl"></q-icon>
  	  	  		</q-btn>
  	  	  	</div>
  	  	  	<div class="col-10 cb-round-borders-10 q-py-xs q-px-sm text-grey-7" style="border:1px solid orange">
  	  	  	  <div class="row items-center">
  	  	  	    <span class="q-pb-sm cb-font-16">Delivery Address</span>
  	  	  	    <q-space></q-space>
  	  	  	    <q-icon name="check_circle" size="sm" color="orange"></q-icon>
  	  	  	  </div>
  	  	  	  <span class="cb-font-12">{{ delivery_address }}</span>
  	  	  	</div>
          </div>
          <div class="row" v-if="!feverate_store">
  	  	  	<div class="col-12 text-center q-pt-sm cb-text-blue-8" v-if="continue_pickstore_data">
  	  	  		<u @click="$router.push('Search_location?address=p1&fev=p1')">{{ continue_pickstore_data.fav_store_link_text }}</u>
  	  	  		<q-icon name="location_on"></q-icon>
  	  	  		<q-icon name="info" class="float-right cb-text-grey-4 " size="sm" @click="fevourite_store_dailog = true"></q-icon>
  	  	  	</div>
  	  	  </div>

          <div class="row q-my-sm" v-if="feverate_store">
            <div class="col-2 q-pr-md">
              <q-btn class="q-pa-none cb-text-grey-4 cb-round-borders-10 full-height fit" outline @click="$router.push('Search_location?address=p1')">
                <q-icon name="storefront" class="text-bold cb-text-grey-4" size="xl"></q-icon>
              </q-btn>
            </div>
            <div class="col-10 cb-round-borders-10 q-py-xs q-px-sm text-grey-7" style="border:1px solid orange">
              <div class="row items-center">
                <span class="q-pb-sm cb-font-16">Store Address</span>
                <q-space></q-space>
                <q-icon name="remove_circle" @click="delete_fev_store_dialog = true" size="sm" color="orange" ></q-icon>
              </div>
              <span class="cb-font-12">{{ feverate_store.name }}</span>
            </div>
          </div>

  	  	</q-card-section>
  	  </q-card>

  	  <!-- <div @click="add_community_dialog = true" class="q-mt-sm q-pa-sm q-px-md cb-text-grey-4 cb-round-borders-10 cb-font-16 text-bold" style="border:1px solid grey" v-if="continue_pickstore_data"> 
  	  	<q-icon name="emoji_symbols" size="sm" class="q-px-md"></q-icon>
  	  	<span>{{ continue_pickstore_data.show_aparmtnet_button_text }}</span>
  	  </div> -->

  	  <div class="cb-shadow-1 q-my-md q-px-md cb-round-borders-10">
  	  	<q-input borderless placeholder="Add instructions here" class="cb-round-borders-10" dense v-model="instructions"></q-input>
  	  </div>

			<div class="flex" v-if="coupon_code == null">
        <div class="cb-shadow-1 cb-round-borders-10 bg-white q-px-sm" style="width:75%">
          <q-input dense placeholder="ENTER COUPON CODE" borderless @click="screenredirection()">
            <template v-slot:prepend>
                <q-avatar><img src="https://chotabeta.app/dev/testenv/public/imgs/discount_1.png"></q-avatar>
            </template>
          </q-input>
        </div>
        <q-btn label="apply" class="cb-bg-orange-8 cb-round-borders-10 text-white q-ml-sm" style="width:22%"></q-btn>
      </div>

      <div class="flex" v-if="coupon_code != null">
        <div class="cb-shadow-1 cb-round-borders-10 bg-white q-px-sm" style="width:75%">
          <q-input dense :placeholder="coupon_code" borderless @click="screenredirection()">
            <template v-slot:prepend>
                <q-avatar><img src="https://chotabeta.app/dev/testenv/public/imgs/discount_1.png"></q-avatar>
            </template>
          </q-input>
        </div>
        <q-btn label="remove" class="cb-bg-orange-8 cb-round-borders-10 text-white q-ml-sm" style="width:22%" @click="couponremove_function()"></q-btn>
      </div>

  	  <q-card class="cb-round-borders-10 q-my-md shadow-4 cb-text-grey-5">
  	  	<q-card-section class="cb-bg-grey-2 cb-text-blue-8 text-weight-bolder cb-font-16 q-pa-sm">
  	  		<span>Order Amount</span>
  	  	</q-card-section >
  	  	<q-card-section class="cb-font-16 text-bold" v-if="continue_pickstore_data == null">
          <table class="full-width">
            <tr class="q-py-xs"><td>Estimated Item Price</td><td class="text-right">RS.0</td> </tr>
            <tr class="q-py-xs"><td>Delivery Charges</td>    <td class="text-right">RS.0</td> </tr>
            <tr class="q-py-xs"> <td>Tax & fees</td>         <td class="text-right">RS.0</td> </tr>
            <tr class="q-py-xs text-h6 text-bold"><td>Total</td><td class="text-right">RS.0</td> </tr>
          </table>
  	  	</q-card-section>
  	  	<q-card-section class="cb-font-16 text-bold" v-else>
          <table class="full-width">
            <tr class="q-py-xs"><td>Estimated Item Price</td><td class="text-right">{{ continue_pickstore_data.items_price }}</td> </tr>
            <tr class="q-py-xs"><td>Delivery Charges</td>    <td class="text-right">{{ continue_pickstore_data.delivery_fee }}</td> </tr>
            <tr class="q-py-xs text-red" v-if="discount!=''"><td>Discount</td> <td  class="text-right">{{discount}}</td> </tr>
            <tr class="q-py-xs"> <td>Tax & fees</td>         <td class="text-right">{{ continue_pickstore_data.gst }}</td> </tr>
            <tr class="q-py-xs text-h6 text-bold"><td>Total</td><td class="text-right">{{ continue_pickstore_data.grand_total }}</td> </tr>
          </table>
  	  	</q-card-section>
  	  </q-card>
      <span v-if="xid != 2">
    	  <q-card class="cb-round-borders-10 q-my-md cb-shadow-1">
    	  	<q-card-section class="cb-bg-grey-2 cb-text-blue-8 text-weight-bolder cb-font-16 q-pa-sm">
    	  		<span>Payment Method</span>
    	  	</q-card-section>
    	  	<q-card-section class="cb-font-16">
    	  		<!-- <q-option-group :options="options" v-model="payment" color="orange"  class="full-width"></q-option-group> -->
            <div v-for="method in payment_methods" :key="method">
                <div class="row  items-center" v-if="method.payment_mode_status == 1">
                <q-img :src="method.images" width="25px"></q-img>
                <span class="q-px-sm">{{method.payment_modes}}</span>
                <q-space></q-space>
                  <q-radio v-model="payment" :val="method.payment_modes" color="orange" />
                </div>
              </div>
    	  	</q-card-section>
    	  </q-card>
    	  <div class="row justify-center">
    	  	<q-btn label="Proceed" class="cb-bg-orange-8 text-white q-px-xl" @click="pay_pickstore_function()"></q-btn>
    	  </div>
      </span>
      <span v-if="xid == 2">
        <div class="row justify-center">
          <q-btn label="Sign In" class="cb-bg-green-8 text-white q-px-xl" @click="$router.push('sign-in?service=PFS')"></q-btn>
        </div>
      </span>

  	  <q-dialog v-model="fevourite_store_dailog">
    		<q-card class="q-dialog-plugin cb-round-borders-10 cb-text-grey-5">
    			<q-card-section>
    				<span class="cb-font-16 text-weight-bolder">What is Locate My Fevourite Store?</span><br>
    				<span class="cb-font-14">{{ continue_pickstore_data.fav_store_info }}
    				</span>
    			</q-card-section>
    			<q-card-actions align="left">
    				<q-btn flat label="cancel" class="cb-text-blue-6" @click="fevourite_store_dailog = false"></q-btn>
    			</q-card-actions>
        </q-card>
  		</q-dialog>

      <q-dialog v-model="calander_dailog_picktime" persistent>
        <q-card class="q-dialog-plugin cb-round-borders-10">
          <q-date v-model="pick_date" mask="YYYY-MM-DD" color="orange" class="fit" @click="select()" v-if="date_change != 1"></q-date>
          <q-time format24h v-model="pick_time" color="orange" mask="HH:mm:ss" class="fit" v-if="date_change == 1"></q-time>
          <q-card-actions align="right" v-if="date_change == 1">
            <q-btn flat label="cancel" @click="pickdate_selection(),calander_dailog_picktime = false"></q-btn>
            <q-btn flat label="Ok" @click="calander_dailog_picktime = false"></q-btn>
          </q-card-actions>
        </q-card>
      </q-dialog>

      <q-dialog v-model="add_community_dialog" persistent>
        <q-card class="q-dialog-plugin cb-round-borders-20 q-pa-sm full-height">
        	<q-card-section class="q-pa-none text-right">
        		<q-icon name="cancel" size="md" color="orange" class="q-ma-sm" @click="add_community_dialog = flase"></q-icon>
        	</q-card-section>
          <q-input placeholder="Search For Community" outlined dense class="cb-font-16 cb-round-borders-10">
          	<template v-slot:prepend>
          		<q-icon name="search" size="md"></q-icon>
          	</template>
          </q-input>
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
        		<q-btn label="go to orders" flat class="q-my-md" @click="$router.push('/home/Orders')"></q-btn>
        	</q-card-section>
        </q-card>
      </q-dialog>

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

      <q-dialog v-model="adding_fev_store_dialog" favstore_address>
        <q-card class="q-px-md q-py-md cb-round-borders-20 text-grey-9">
          <q-card-section class="text-center">
            <q-avatar size="80px" class="bg-orange-3">
              <q-avatar size="65px" class="bg-white cb-text-orange-8" font-size="55px" icon="question_mark"></q-avatar>
            </q-avatar><br>
            <span class="text-weight-bolder text-h6">Adding Favorite Store !</span><br>
            <span>Delivery Fee will be applicable based on the distance from store to delivery location.</span>
            <br><br><br>
            <q-btn label="confirm" class="q-px-lg cb-font-16 cb-bg-orange-8 text-white q-mb-sm" @click="adding_fev_store_function()"></q-btn><br>
            <q-btn label="cancel" class="q-px-lg cb-font-16" flat @click="continue_pickstore_function(),adding_fev_store_dialog = false"></q-btn>
          </q-card-section>
        </q-card>
      </q-dialog>

      <q-dialog v-model="delete_fev_store_dialog">
        <q-card class="q-px-md q-py-md cb-round-borders-20 text-grey-9">
          <q-card-section class="text-center">
            <q-avatar size="80px" class="bg-orange-3">
              <q-avatar size="65px" class="bg-white cb-text-orange-8" font-size="55px" icon="question_mark"></q-avatar>
            </q-avatar><br>
            <span class="text-weight-bolder text-h6">Delete Favorite Store !</span><br>
            <span>You Want Delete Favourite Store this Order.</span>
            <br><br><br>
            <q-btn label="confirm" class="q-px-lg cb-font-16 cb-bg-orange-8 text-white q-mb-sm" @click="deletefevourite_store_function()"></q-btn><br>
            <q-btn label="cancel" class="q-px-lg cb-font-16" flat @click="delete_fev_store_dialog = false"></q-btn>
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
<script>
// 	let isMobile = window.matchMedia("only screen and (max-width: 760px)").matches;
// if (!isMobile){
//      window.location="https://chotabeta.com/pwa";
// }
import axios from 'boot/axios'
import {ref } from 'vue'
export default ({
  setup(){
    return {
    	address_select:ref(true),
    	fevourite_store_dailog:ref(false),	
    	cartlength:ref(0),
    	delivery_address:ref(null),
			delivery_pincode:ref(null),
			delivery_latlngs:ref(null),
			delivery_territory_id:ref(null),
			category:ref(null),
			pick_date:ref(null),
      pick_time:ref(null),
      calander_dailog_picktime:ref(false),
      date_change:ref(null),
      continue_pickstore_data:ref(null),
      options:[
              { label:'Pay Now Online', value:'PO' ,icon: 'restaurant_menu'},
              {label:'Pay Now On Delivery', value:'Online'}
              ],
      payment:ref('Online'),
      items:ref([]),
      userdetails:ref(null),
      service:ref(null),
      add_community_dialog:ref(false),
      instructions:ref(null),
      continue_to_stoping_dialog:ref(false),
      coupon_dailog_error:ref(false),
      coupon_dailog_applied:ref(false),
      coupon_dailog_remove:ref(false),
      coupon_code:ref(''),
      discount:ref(''),
      transaction_id:ref(null),
      payment_methods:ref([]),
      pick_from_store_address:ref(null),
      access_token:ref(null),
      xid:ref(null),
      custom_items:ref([]),
      feverate_store:ref(null),
      adding_fev_store_dialog:ref(false),
      delete_fev_store_dialog:ref(false),
      favstore_address:ref(""),   
      store:ref(''),
      favstore_location:ref(""),
      payment_decline_method:ref(false),
    }
  },
  mounted () {
  	this.getToken(); 
    this.mypath();
    this.get_payment_images();
  	this.date_function();
  	this.mycart_count_and_length();
  	this.deliveryaddress(); 
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
    get_payment_images(){
      var ps = this;
      var loader = document.getElementById('loader2');
        loader.style.display="block";
      let config = { headers: { "Authorization": `Bearer ${ps.access_token}`,}}
      ps.$api.get('/api/get-payment-images?is_gift_wrap=null',config).then(function (response) {
        loader.style.display="none";
        if(response.data.status_code == 200){
          response.data.payment_modes.forEach((element, i)=> {
            if( (i+1) == response.data.default_payment_mode){ ps.payment = element; }
            var payment  = {
                          payment_modes:element,
                          images:(response.data.endPoint+response.data.images[i]),
                          payment_mode_status:response.data.payment_mode_status[i],
                          }
            ps.payment_methods.push(payment);
          }); 
          ps.transaction_id = response.data.transaction_id;
          }else{
            ps.$q.notify({ message: response.data.message, type: "negative",});
          }
        }).catch(function (error) {
          console.log(error);
        });     
    },
  	date_function(){
  		var ps = this;
  		var d = new Date();
      ps.pick_date = d.getFullYear()+'-'+(ps.addZero(d.getDay()+1))+'-'+ps.addZero(d.getUTCDate());
      ps.pick_time = ps.addZero(d.getUTCHours())+":"+ps.addZero(d.getUTCMinutes())+':'+ps.addZero(d.getUTCSeconds());
  	},
  	addZero(i) { if (i < 10) {i = "0" + i} return i; },
  	select(){ var ps = this;ps.date_change = 1;},
  	mycart_count_and_length(){
  		var ps = this;
  		ps.cart_price =0;
  		ps.cartlength =0;
  		if(localStorage.getItem('mycart')){
  			ps.mycart_items = JSON.parse(localStorage.getItem('mycart'));
  			ps.cartlength =  ps.mycart_items.length;
  		}
  		else{ localStorage.setItem('mycart','');	}
      if(localStorage.getItem('custom_item')){
        ps.custom_items = JSON.parse(localStorage.getItem('custom_item')); 
        ps.cartlength = ps.cartlength + ps.custom_items.length;
      }
    },
  	deliveryaddress(){
  		var ps = this;
  		if(ps.$route.query.adding == '1'){
        console.log(JSON.parse(localStorage.getItem('pick_from_store_address')));
        ps.pick_from_store_address = JSON.parse(localStorage.getItem('pick_from_store_address'));
        ps.delivery_address = ps.pick_from_store_address.name;
        ps.delivery_pincode = ps.pick_from_store_address.postal_code;
        ps.delivery_latlngs = ps.pick_from_store_address.location;
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
      	ps.check_feverate_store();
      }).catch(function (error) {
        console.log(error);
      })
  	},
    check_feverate_store(){
      var ps = this;
      if(localStorage.getItem('pick_from_store_fev_store')){
        ps.adding_fev_store_dialog = true;
      }else{
        ps.continue_pickstore_function();
      }
    },
    adding_fev_store_function(){
      var ps = this;
      ps.feverate_store = JSON.parse(localStorage.getItem('pick_from_store_fev_store'));
      ps.favstore_address = ps.feverate_store.name;
      // ps.store = ps.feverate_store.nick_name;
      ps.favstore_location =  ps.feverate_store.location;
      ps.adding_fev_store_dialog = false;
      ps.continue_pickstore_function();
    },
  	continue_pickstore_function(){
  		var ps = this;
			ps.items = [];
			ps.category = JSON.parse(localStorage.getItem('category'));
			ps.service = JSON.parse(localStorage.getItem('service'));
			// console.log(ps.service,"service");
			// console.log(ps.category,'category')
      if(localStorage.getItem('userdetails')){
			  var userdetails = JSON.parse(localStorage.getItem('userdetails'));
			  ps.userdetails = userdetails.deatils;
      }
      ps.cart_items = JSON.parse(localStorage.getItem('mycart'));
			ps.cart_items.forEach(cart=>{
				ps.items.push({id:cart.selected_id,qty:cart.no_of_quantity});
			});
      var cus_items = [];
      if(localStorage.getItem('custom_item')){
        ps.custom_items = JSON.parse(localStorage.getItem('custom_item'));
          ps.custom_items.forEach(cart=>{
          cus_items.push({cart});
        });
      }
      if(localStorage.getItem('coupon_pick')){
			  ps.coupon_code = localStorage.getItem('coupon_pick');
      }
  		let formData = new FormData();
  		formData.append('service_page', ps.$route.fullPath);
      formData.append('store_id', '');
  		formData.append('pincode', ps.delivery_pincode);
  		formData.append('delivery', ps.delivery_address);
  		formData.append('coupon', ps.coupon_code);
  		formData.append('favstore_address', ps.favstore_address);
  		formData.append('store', ps.store);
  		formData.append('delivery_location', ps.delivery_latlngs);
  		formData.append('favstore_location', ps.favstore_location);
  		formData.append('personalized_meesage', '');
  		formData.append('selected_apt', '');
      formData.append('custom_items', JSON.stringify(cus_items));
  		formData.append('xid', ps.xid);
  		formData.append('service_id', ps.category.service_id);
  		formData.append('is_gift_wrap', 0);
  		formData.append('items', JSON.stringify(ps.items));
  		formData.append('territory_id', ps.delivery_territory_id);
  		// console.log(formData,"formData");
      var loader = document.getElementById('loader2');
          loader.style.display="block";
  		let config = { headers: { "Authorization": `Bearer ${ps.access_token}`,}}
  		ps.$api.post('/api/continue-pickstore-new',formData,config).then(function (response) {
        loader.style.display="none";
  			// console.log(response.data,"ref");
  			ps.continue_pickstore_data = response.data;
  			if(localStorage.getItem('coupon_pick')){
  				if(response.data.coupon == "Rs. 0"){
              ps.coupon_dailog_error = true;
            }else{
              ps.discount = response.data.coupon;
              ps.coupon_dailog_applied = true;
            }	
  			}
        ps.discount = response.data.coupon;	
        if(ps.$route.query.response == "pass"){
          ps.pay_pickstore_function_payment_selection();
        }else if(ps.$route.query.response == "fail"){
          // alert('faile to payment');
          ps.payment_decline_method =true;
        }
			}).catch(function (error) {
     		console.log(error,"error");
     		// ps.$q.notify({ message: error, type: "negative",});
    	});
  	},
  	couponremove_function(){
      var ps = this;
      ps.discount = '';
      ps.coupon_code = null;
      localStorage.removeItem('coupon_pick');
      ps.coupon_dailog_remove = true;
      ps.continue_pickstore_function();
    },
    pay_pickstore_function(){
      var ps = this;
      if(!ps.payment){
        ps.$q.notify({ message: "Please Select Payment Method", type: "negative",});
        return false;
      }
      if(ps.payment == 'Cash On Delivery'){var payment = 'COD';}
      else if(ps.payment == 'Pay Online on Delivery'){var payment = 'POD';}
      else if(ps.payment == 'Pay Now Online'){var payment = 'Online';
               // ps.$q.notify({ message: "Pay Now Online is Not Available! Please Try Another Method", });
               }
      var url = "https://pay.easebuzz.in/pay/"+ps.continue_pickstore_data.payment_access_token;
      // console.log(url, "url");
      if(payment == "Online"){
        window.location = url; 
      }else{
        ps.pay_pickstore_function_payment_selection();
      }
    },   
  	pay_pickstore_function_payment_selection(){
  		var ps = this;
      ps.items = [];
      ps.category = JSON.parse(localStorage.getItem('category'));
      ps.service = JSON.parse(localStorage.getItem('service'));
      // console.log(ps.service,"service");
      // console.log(ps.category,'category')
      if(localStorage.getItem('userdetails')){
        var userdetails = JSON.parse(localStorage.getItem('userdetails'));
        ps.userdetails = userdetails.deatils;
      }
      ps.cart_items = JSON.parse(localStorage.getItem('mycart'));
      ps.cart_items.forEach(cart=>{
        ps.items.push({id:cart.selected_id,qty:cart.no_of_quantity});
      });
      if(localStorage.getItem('coupon_pick')){
        ps.coupon_code = localStorage.getItem('coupon_pick');
      }
      var cus_items = [];
      if(localStorage.getItem('custom_item')){
        ps.custom_items = JSON.parse(localStorage.getItem('custom_item'));
          ps.custom_items.forEach(cart=>{
          cus_items.push({cart});
        });
      }

      if(ps.$route.query.response == "pass"){
        var payment_status  = "paid";
        var payment = "Online";
      }else{
        var payment_status = "pending";
        if(ps.payment == 'Cash On Delivery'){var payment = 'COD';}
        else if(ps.payment == 'Pay Online on Delivery'){var payment = 'POD';}
      }

  		var formData = {
										base_location: ps.$store.state.baselatlongs,
										pick_flat: '',
										favstore_address: ps.favstore_address,
										type: null,
										delivery_location: ps.delivery_latlngs,
										base_pincode: "0",
										favstore_location: ps.favstore_location,
										xid: ps.xid,
										to_location: ps.delivery_latlngs,
										category_id: ps.category.id,
										service_id: ps.category.service_id,
										drop_flat: "123",
										user_instructions: ps.instructions,
										from_location: ps.delivery_latlngs,
										pick_date: ps.pick_date,
										from_address: ps.delivery_address,  
										territory_id: ps.delivery_territory_id,
										transaction_id:ps.transaction_id,
										store_id: null,
										pincode: ps.delivery_pincode,
										delivery: ps.delivery_address,
										payment_mode: payment,
										drop_phone: ps.userdetails.mobile,
										coupon: localStorage.getItem('coupon_pick'),
										payment_status: payment_status,
										schedule_timestamp: new Date(),
										pick_phone: ps.userdetails.mobile,
										custom_item: JSON.stringify(cus_items),
										to_address: ps.delivery_address,
										store: ps.store,
										personalized_meesage: '',
										pick_name: ps.userdetails.name,
										selected_apt: null,
										pick_time: ps.pick_time,
										drop_name: ps.userdetails.name,
										is_gift_wrap: "0",
										items: JSON.stringify(ps.items)
  		};
  		// console.log(formData);
      var loader = document.getElementById('loader2');
          loader.style.display="block";
  		let config = { headers: { "Authorization": `Bearer ${ps.access_token}`,}}
  		ps.$api.post('/api/pay-pickstore',formData,config).then(function (response) {
  			// console.log(response.data,"ref");
        loader.style.display="none";
  			if(response.data.status_code == 200){
  				localStorage.removeItem('mycart');
  				localStorage.removeItem('category');
  				localStorage.removeItem('service');
  				localStorage.removeItem('sub_category');
  				localStorage.removeItem('coupon_pick');
          localStorage.removeItem('pick_from_store_fev_store');
          localStorage.removeItem('custom_item')
  				ps.continue_to_stoping_dialog =  true;
  			}
			}).catch(function (error) {
     		console.log(error,"error");
     		// ps.$q.notify({ message: error, type: "negative",});
    	})
  	},
  	screenredirection(){
  		var ps = this;
  		ps.$router.push('Coupons?service_id='+ps.category.service_id);
  	},
    deletefevourite_store_function(){
      var ps = this;
      ps.delete_fev_store_dialog = false;
      localStorage.removeItem('pick_from_store_fev_store');
      ps.feverate_store = null;
      ps.continue_pickstore_function();
    },
    refresh_page_without_response(){
      var ps = this;
      ps.payment_decline_method = false;
      ps.$router.push(ps.$route.path);
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
  }
})
</script>
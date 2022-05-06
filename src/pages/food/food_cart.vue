<template>
	<q-layout view="lHh lpr lFf" >
		<q-header class="bg-orange-1 text-grey-8 text-bold">
			<q-toolbar>
				<q-btn icon="arrow_back_ios" flat @click="Screen_Back_Redirection()"></q-btn>
				<q-space></q-space>
				Mycart
				<q-space></q-space>
				<q-space></q-space>
			</q-toolbar>
			<q-toolbar class="cb-font-10">
				<!-- <q-icon name="swipe_left" size="sm" class="q-pr-sm"></q-icon>Swipe left on the item to delete from cart -->
				<q-space></q-space>
				<span class="cb-font-12">{{ NoOfItemsInCart }} items</span>
			</q-toolbar>
		</q-header>
		<q-page-container class="animate__animated animate__slideInRight">
			<div id="loader2" class="pre-loader" style="display:none"></div>
			<q-page class="flex flex-center bg-orange-1 q-px-md" v-if="NoOfItemsInCart == 0">
				<div class="text-center" >
					<q-img :src="empty_cart_image" width="50%" height="50%"></q-img>
					<p class="text-orange-10 q-pt-md">{{ empty_cart_title }}</p>
					<p class="text-grey-8">{{empty_cart_message}}</p>
				</div>
			</q-page>
			<q-page v-if="NoOfItemsInCart != 0" class="bg-orange-1 q-px-sm">
				<div class="row">
					<div class=" col-12 swipe-container" v-for="item in items_data">
						<div class="row bg-white q-pa-sm cb-round-borders-20 swipe-element" @touchstart="swite_to_delete(i)" id="swipe_container">
							<div class="col-2 column justify-center items-center">
								<q-avatar square class="cb-round-borders-10" size="70px">
									<img :src="item.image" class="fit">
								</q-avatar>
							</div>
							<div class="col-7 q-pl-md cb-font-12">
								<span class="text-bold">{{ item.name }}</span><br>
								<span class="">{{ item.info }}</span>
							</div>
							<div class="col-3 text-center">
								<span class="text-h6 text-bold"><q-icon name="currency_rupee" ></q-icon>{{ item.selling_price }}</span>
								<br>
								<span style="border:1px solid orange" class="cb-round-borders-10 text-orange q-py-xs">
									<q-btn flat icon="remove" dense @click="food_cart_item_remove(item)"></q-btn>
									<span class="q-px-xs text-bold cb-font-16">{{ item.qty }}</span>
									<q-btn flat icon="add" dense @click="food_add_to_cart_more(item)"></q-btn>
								</span>
							</div>
						</div>
						<q-btn label="delete" id="swipe_delete" class="text-white action bg-red-6 q-ml-sm"></q-btn>
					</div>
				</div>
				<div class="row absolute-bottom q-ma-sm">

					<q-btn class="bg-green-8 full-width cb-round-borders-10 text-white cb-font-16" @click="$router.push('food-checkout?plan=null&subscription=0')" v-if="check_schedule == 1">checkout<q-icon name="currency_rupee" class="q-pl-md" size="16px" ></q-icon>{{ total_mrp }} </q-btn>

					<span class="cb-round-borders-10 fit cb-font-16 bg-orange-5 text-white q-pa-sm text-center" @click="get_time_function(),delivery_slot_dialog =true" v-if="check_schedule == 0">Schedule Delivery Time</span>
				</div>

				<q-dialog v-model="delivery_slot_dialog" position='bottom'>
					<q-card class="cb-font-16 text-grey-9 q-ma-sm cb-round-borders-20">
						<q-card-section>
							<span>Delivery Slots</span>
							<q-separator color="orange-1" class="q-pt-xs q-my-sm"></q-separator>
							<span class="text-weight-bolder">{{ delivery_times[0].name }} ({{ delivery_times[0].start_slice }} - {{ delivery_times[0].end_slice }})</span>
							<q-separator color="orange-1" class="q-pt-xs q-my-sm"></q-separator>
							<p>Select Delivery time</p>
							<div class="flex flex-center">
								<q-btn color="orange-8" class="cb-font-16 q-pl-md q-mx-xs cb-round-borders-10" icon-right="expand_more" :label="time_hr" >
									<q-popup-proxy  cover transition-show="scale" transition-hide="scale">
										<q-time v-model="scheduleTime" class="cb-round-borders-10">
						          <div class="row items-center justify-end q-gutter-sm">
						            <q-btn label="Cancel" color="primary" flat v-close-popup />
						            <q-btn label="OK" color="primary" @click="set_schedule_time_function()" flat  v-close-popup />
						          </div>
						        </q-time>
						      </q-popup-proxy>
								</q-btn>
								<q-btn color="orange-8" class="cb-font-16 q-pl-md q-mx-xs cb-round-borders-10" icon-right="expand_more" :label="time_min" >
										<q-popup-proxy  cover transition-show="scale" transition-hide="scale">
										<q-time v-model="scheduleTime" class="cb-round-borders-10">
						          <div class="row items-center justify-end q-gutter-sm">
						            <q-btn label="Cancel" color="primary" flat v-close-popup />
						            <q-btn label="OK" color="primary" flat @click="set_schedule_time_function()" v-close-popup />
						          </div>
						        </q-time>
						      </q-popup-proxy>
								</q-btn>
								<q-btn color="orange-8" class="cb-font-16 q-pl-md q-mx-xs cb-round-borders-10" icon-right="expand_more" :label="time_am_pm" >
									<q-popup-proxy cover transition-show="scale" transition-hide="scale">
									<q-time v-model="scheduleTime" class="cb-round-borders-10">
					          <div class="row items-center justify-end q-gutter-sm">
					            <q-btn label="Cancel" color="primary" flat v-close-popup />
					            <q-btn label="OK" color="primary" flat @click="set_schedule_time_function()" v-close-popup />
					          </div>
					        </q-time>
					      </q-popup-proxy>
								</q-btn>
							</div>
							<p class="text-center text-red q-pt-xs" v-if="schedule_the_order == 0">Delivery not available at {{ seleceted_time }}</p>
							<p class="text-center text-grey-10 q-pt-xs" v-if="schedule_the_order == 1">Order Schedule at {{ seleceted_time }}</p>
							<div class="flex flex-center">
								<q-btn outline color="red" label="cancel" @click="delivery_slot_dialog = false" class="q-mx-sm cb-round-borders-10" style="width:40%"></q-btn>

								<q-btn color="blue-3" label="checkout" disable class=" q-mx-sm cb-round-borders-10" style="width:40%" v-if="schedule_the_order == 0"></q-btn>

								<q-btn color="blue-6" label="checkout" @click="checkout_function('schedule')" class="q-mx-sm cb-round-borders-10" style="width:40%" v-if="schedule_the_order == 1"></q-btn>
							</div>
						</q-card-section>
					</q-card>
				</q-dialog>

				<q-dialog v-model="clear_cart_item_dialog">
    				<q-card class="q-px-md q-py-md cb-round-borders-20 text-grey-9">
    					<q-card-section class="text-center">
    						<q-avatar size="80px" class="bg-orange-3">
    							<q-avatar size="65px" class="bg-white cb-text-orange-8" font-size="55px" icon="question_mark"></q-avatar>
    						</q-avatar><br>
    						<span class="text-weight-bolder text-h6">Are You Sure?</span><br>
    						<span>You Want Delete This Item From Cart.</span>
    						<br><br><br>
    						<q-btn label="confirm" class="q-px-lg cb-font-16 cb-bg-orange-8 text-white q-mb-sm" @click="clear_cart_item_function()"></q-btn><br>
    						<q-btn label="cancel" class="q-px-lg cb-font-16" flat @click="clear_cart_item_dialog = false, splice_index = null"></q-btn>
    					</q-card-section>
				    </q-card>
				</q-dialog>

			</q-page>

		</q-page-container>
	</q-layout>
</template>
<script>

import axios from 'boot/axios'
import { ref } from "vue";
export default {
  setup() {
    return {
    	access_token:ref(null),
			xid:ref(null),
    	select_veg:ref(false),
    	NoOfItemsInCart:ref(0),
    	MyFoodCart:ref([]),
    	schedule_status:ref(null),
			delivery_times:ref(null),
			items_data:ref(null),
			total_mrp:ref(null),
			no_of_disabled_items:ref(null),
			disabled_items_title:ref(null),
			disabled_items_message:ref(null),
			empty_cart_title:ref(null),
			empty_cart_message:ref(null),
			empty_cart_image:ref(null),
			qty_restriction:ref(null),
			qty_restriction_message:ref(null),
			delivery_slot_dialog:ref(false),
			time_hr:ref(20),
			time_min:ref(30),
			time_am_pm:ref('AM'),
			seleceted_time:ref(null),
			scheduleTime:ref(null),
			start_time:ref(null),
			end_time:ref(null),
			check_schedule:ref(0),
			schedule_the_order:ref(0),
			clear_cart_item_dialog:ref(false),
			splice_index:ref(null),
    }
  },
  mounted() {
  	localStorage.removeItem('schedule_time');
  	this.getToken();
  	this.mypath();
  	// comment this functions when you move to live
  	// this.loaddata();

  	// uncomment this functions when you move to live
  	this.Mycartitems_function();

  	
  },
  methods: {
  	loaddata(){
  		var ps = this;
  		ps.schedule_status= 1;
	    ps.delivery_times= [
	        {
	          "name": "Dinner",
	          "start": "19:00",
	          "end": "22:00",
	          "preorder_start": "15",
	          "preorder_end": "17"
	        }
	    									];
	    
	    ps.items_data= [
	        {
	            "id": 52,
	            "name": "North Indian Deluxe meal",
	            "info": "Consists of Salad, 3 Mini Rotis, One dry curry, One wet curry, Dal/Pulses, Plain/Flavoured Rice, Papad, Pickle, Raita, One sweet",
	            "weight_description": "1 Box",
	            "sku": "HK02L03",
	            "mrp": 140,
	            "selling_price": 140,
	            "client_id": 1,
	            "active": 1,
	            "category_id": 2,
	            "sub_category_id": 0,
	            "cuisine_name": "North Indian",
	            "cuisine_image": "https://stackroger.com/public/uploads/food/categories/northindian.png",
	            "image": "https://stackroger.com/public/uploads/food/items/1/2x/HK02L03.png",
	            "item_status": 0,
	            "popular_pick": 1,
	            "schedule_status": 1,
	            "best_seller_status": 0,
	            "best_seller_title": null,
	            "best_seller_description": null,
	            "best_seller_image": null,
	            "redirection": 2,
	            "serving": "1",
	            "pure_veg": 1,
	            "serving_times": "[{\"name\":\"Lunch\",\"start\":\"12:00\",\"end\":\"15:00\"},{\"name\":\"Dinner\",\"start\":\"19:00\",\"end\":\"22:00\"}]",
	            "updated_at": "2021-12-16 11:41:21.277579",
	            "created_at": "2021-09-18 13:30:23.763180",
	            "qty": 1,
	            "status": 1
	        },
	        {
	            "id": 4,
	            "name": "North indian executive meal",
	            "info": "Consists of Salad, 2 Mini Rotis, One dry curry, Dal/Pulses, Flavoured/Plain Rice, Pickle, Raita",
	            "weight_description": "1 Box",
	            "sku": "HK02L01",
	            "mrp": 110,
	            "selling_price": 110,
	            "client_id": 1,
	            "active": 1,
	            "category_id": 2,
	            "sub_category_id": 0,
	            "cuisine_name": "North Indian",
	            "cuisine_image": "https://stackroger.com/public/uploads/food/categories/northindian.png",
	            "image": "https://stackroger.com/public/uploads/food/items/1/2x/HK02L01.png",
	            "item_status": 0,
	            "popular_pick": 1,
	            "schedule_status": 1,
	            "best_seller_status": 0,
	            "best_seller_title": null,
	            "best_seller_description": null,
	            "best_seller_image": null,
	            "redirection": 2,
	            "serving": "1",
	            "pure_veg": 1,
	            "serving_times": "[{\"name\":\"Lunch\",\"start\":\"12:00\",\"end\":\"15:00\"},{\"name\":\"Dinner\",\"start\":\"19:00\",\"end\":\"22:00\"}]",
	            "updated_at": "2021-12-16 11:40:23.680613",
	            "created_at": "2021-09-18 13:30:23.763180",
	            "qty": 1,
	            "status": 1
	        },
	        {
	            "id": 3,
	            "name": "South indian executive meal",
	            "info": "Consists of Salad, 2 Mini Phulkas, One dry curry, Dal, Rice, Pickle, Curd",
	            "weight_description": "1 Box",
	            "sku": "HK01L01",
	            "mrp": 110,
	            "selling_price": 110,
	            "client_id": 1,
	            "active": 1,
	            "category_id": 2,
	            "sub_category_id": 0,
	            "cuisine_name": "South Indian",
	            "cuisine_image": "https://stackroger.com/public/uploads/food/categories/southindian.png",
	            "image": "https://stackroger.com/public/uploads/food/items/1/2x/HK01L01.png",
	            "item_status": 0,
	            "popular_pick": 1,
	            "schedule_status": 1,
	            "best_seller_status": 0,
	            "best_seller_title": null,
	            "best_seller_description": null,
	            "best_seller_image": null,
	            "redirection": 3,
	            "serving": "1",
	            "pure_veg": 1,
	            "serving_times": "[{\"name\":\"Lunch\",\"start\":\"12:00\",\"end\":\"15:00\"},{\"name\":\"Dinner\",\"start\":\"19:00\",\"end\":\"22:00\"}]",
	            "updated_at": "2021-12-16 11:39:26.235572",
	            "created_at": "2021-09-18 13:30:23.763180",
	            "qty": 1,
	            "status": 1
	        }
	    ];
  		ps.NoOfItemsInCart = ps.items_data.length;
	    ps.total_mrp= 360;
	    ps.no_of_disabled_items= 0;
	    ps.disabled_items_title= "Looks like some items in your cart are out of stock or currently not being served.";
	    ps.disabled_items_message= "Please delete the unavalable items to move further. Thank You!";
	    ps.empty_cart_title= "Hey wait... You forgot to add items to me";
	    ps.empty_cart_message= "We found that you have not added any items in cart. Please go back to add items.";
	    ps.empty_cart_image= "https://stackroger.com/public/uploads/food/icons/empty_cart.png";
	    ps.qty_restriction= 5;
	    ps.qty_restriction_message= "Upto 5 qty can only be added to cart.";
  	},
  	getToken(){
  		var ps = this ;
  		if(ps.$store.state.token){ ps.access_token = ps.$store.state.token; }
      else{ ps.access_token = ps.$store.state.token_cb; }

      if(ps.$store.state.xid){ps.xid = ps.$store.state.xid;}
  		else{ps.xid = ps.$store.state.xid_cb;}

      if(ps.access_token == null ||  !ps.access_token){ ps.$router.push('/'); }
  	},
  	Mycartitems_function(){
  		var ps = this;
  		if(!localStorage.getItem('MyFoodCart')){
  			return false;
  		}
  		ps.MyFoodCart = JSON.parse(localStorage.getItem('MyFoodCart'));
  		ps.NoOfItemsInCart = ps.MyFoodCart.length;
  		let formData = new FormData;
	    var data = [];
	    ps.MyFoodCart.forEach(cart=>{
		    var d = {
		    				"qty":cart.no_of_qty,
		    				"sku":cart.sku,
		    				"id":cart.id,
		    				};
		   	data.push(d);
	    });
	    formData.append("item_list", JSON.stringify(data));
	    formData.append("subscription",0);
	    let config = { headers: { "Authorization": `Bearer ${ps.access_token}`,}};
  		var loader = document.getElementById('loader2');
	    loader.style.display="block";
	    ps.$api.post('/api/update-food-cart',formData,config).then(function (response) {
		    loader.style.display="none";
		    console.log(response,"response");
		    if(response.data.status_code == 400){
		    	ps.empty_cart_title= response.data.empty_cart_title ;
   	 			ps.empty_cart_message= response.data.empty_cart_message;
    			ps.empty_cart_image= response.data.empty_cart_image ;
		    }else{
		    	ps.schedule_status= response.data.schedule_status ;
			    ps.delivery_times= response.data.delivery_times ;
			    ps.items_data= response.data.items_data ;
			    ps.total_mrp= response.data.total_mrp ;
			    ps.no_of_disabled_items= response.data.no_of_disabled_items ;
			    ps.disabled_items_title= response.data.disabled_items_title ;			    
			    ps.disabled_items_message= response.data.disabled_items_message ;			    
			    ps.empty_cart_title= response.data.empty_cart_title ;			    
			    ps.empty_cart_message= response.data.empty_cart_message ;			    
			    ps.empty_cart_image= response.data.empty_cart_image ;			    
			    ps.qty_restriction= response.data.qty_restriction ;			    
			    ps.qty_restriction_message= response.data.qty_restriction_message ;
			    ps.get_time_function();	

			  }
		  }).catch(function (error) {
      	console.log(error);
      });
  	},
  	get_time_function(){
  		var ps = this;

  		ps.start_time = ps.delivery_times[0].start.slice(0,2);
	   	if(ps.start_time >= 12){ 
	   		if( ps.start_time == 12 ){
	   			ps.delivery_times[0].start_slice = (ps.start_time)+':00 PM';
	   		}else{
	   			ps.delivery_times[0].start_slice = (ps.start_time-12)+':00 PM';
	   		}
	   	}
	   	else{ ps.delivery_times[0].start_slice = ps.start_time+':00 AM'; }

	   	ps.end_time = ps.delivery_times[0].end.slice(0,2);
	   	if(ps.end_time >= 12){ 

	   		if( ps.end_time == 12 ){ ps.delivery_times[0].end_slice = (ps.end_time)+':00 PM'; }
	   		else{ ps.delivery_times[0].end_slice = (ps.end_time-12)+':00 PM'; }
	   	}
	   	else{ ps.delivery_times[0].end_slice = ps.end_time+':00 AM'; }

  		const d = new Date();
			var time_hr = d.getHours();
			ps.scheduleTime = (ps.addzero(d.getHours())+':'+ps.addzero(d.getMinutes()));

			if( time_hr >= 12){ 
				if( time_hr == 12){ps.time_am_pm ="PM";ps.time_hr = (time_hr);}
				else{ ps.time_am_pm ="PM";ps.time_hr = (time_hr - 12);}
			}
			else{	ps.time_hr = time_hr;	}
			ps.time_min = d.getMinutes();

			ps.seleceted_time = ps.time_hr+':'+ps.time_min+':'+ps.time_am_pm;

			if( ps.start_time <= d.getHours() && d.getHours() <=  ps.end_time){	
				if(d.getHours() ==  ps.end_time){
					if(ps.delivery_times[0].end.slice(3,5) >= d.getMinutes()){
						ps.check_schedule = 1;
					}else{ ps.check_schedule = 0;	}
				}else{	ps.check_schedule = 1;	}
			}else{	ps.check_schedule = 0;	}
  	},
  	addzero(min){
  		var ps = this;
  		if(min<10){ return '0'+min;}
  		else{	return min; }
  	},
  	set_schedule_time_function(){
  		var ps = this;
  		// console.log(ps.scheduleTime,"scheduleTime");
  		var time_hr = ps.scheduleTime.slice(0,2);

  		if(time_hr >= 12){	
  			if( time_hr == 12  ){ ps.time_am_pm ="PM";ps.time_hr = (time_hr); }
  			else{ ps.time_am_pm ="PM";ps.time_hr = (time_hr - 12);}
  		}else{ ps.time_am_pm ="AM";	ps.time_hr = time_hr; }

  		ps.time_min= ps.scheduleTime.slice(3,5);

  		ps.seleceted_time = ps.time_hr+':'+ps.time_min+':'+ps.time_am_pm;

  		if( ps.start_time <= time_hr && time_hr <=  ps.end_time){	
  			if(time_hr ==  ps.end_time){
  				if(ps.delivery_times[0].end.slice(3,5) >= ps.time_min){ 
  					ps.schedule_the_order = 1;	
  					localStorage.setItem('schedule_time',ps.scheduleTime)
  				}else{	ps.schedule_the_order = 0;	}
  			}else{
  				ps.schedule_the_order = 1;
  				localStorage.setItem('schedule_time',ps.scheduleTime)
  				}
  		}else{	ps.schedule_the_order = 0;	}
  	},
  	swite_to_delete(a){
  		var ps = this;
  		var mobile_width = document.getElementById('swipe_container');
  		var btn_width = document.getElementById('swipe_delete');
  		// ps.clear_cart_item_dialog =true;
  		// if(((mobile_width.clientWidth)-100) < btn_width){
  		// 		alert(a);
  		// }
  	},
  	food_add_to_cart_more(item){
  		 var ps = this ;
  		 ps.MyFoodCart.forEach(cart=>{
  			if(cart.sku == item.sku){
  				if(cart.no_of_qty < ps.qty_restriction){
  					item.qty = item.qty +1;
  					cart.no_of_qty = cart.no_of_qty +1;
  				}else{
  					ps.$q.notify({ message: ps.qty_restriction_message, color:'light-blue-10', icon:'close'});
  				}
  			}
  		});
  		localStorage.setItem('MyFoodCart',JSON.stringify(ps.MyFoodCart));
  		ps.Mycartitems_function();
  	},
  	food_cart_item_remove(item){
  		var  ps = this;
  		ps.MyFoodCart.forEach((cart,index)=>{
  			if(cart.sku == item.sku){
  				if(cart.no_of_qty == 1){
  					ps.splice_index  = index;
  					ps.clear_cart_item_dialog = true;
	  			}else{
  					item.qty = item.qty -1;
  					cart.no_of_qty = cart.no_of_qty -1;
  					localStorage.setItem('MyFoodCart',JSON.stringify(ps.MyFoodCart));
  					ps.Mycartitems_function();
   				}
  			}
  		});
  	},
  	checkout_function(type){
  		var  ps= this;
  		ps.$router.push('food-checkout?plan='+type+'&subscription=0');
  	},
  	clear_cart_item_function(){
  		var ps = this;
  		// alert(ps.splice_index);
  		ps.MyFoodCart.splice(ps.splice_index,1);
  		ps.splice_index = null;
  		ps.clear_cart_item_dialog =  false;
  		localStorage.setItem('MyFoodCart',JSON.stringify(ps.MyFoodCart));
  		ps.Mycartitems_function();
  	},
  	mypath(){
      var ps=  this;
      var myallpaths = [];
      var i = 0;
      if(localStorage.getItem('mypath')){
        myallpaths = JSON.parse(localStorage.getItem('mypath'));
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
<style scoped>
	.coupon-wrap{ flex-wrap: nowrap;overflow: scroll;overflow-y: hidden; }
	::-webkit-scrollbar { width: 0;background: transparent; }
	::-webkit-scrollbar-thumb {background: transparent;}
	.swipe-container{
	  display: flex;
	  overflow: auto;
	  overflow-x: scroll;
	  /*overflow-x: hidden;*/
	  scroll-snap-type: x mandatory;
	}
	.action{
		display: flex;
	  align-items: center;
	  min-width: 200px;
	}
	.swipe-element {
	  min-width: 100%;
	  scroll-snap-align: start;
	}
	.q-field{color: white!important; overflow: hidden;}
</style>
<template>
	<q-layout view="lHh lpr lFf">
		<q-header>
			<q-toolbar class="cb-bg-white-2 cb-text-blue-8">
				<!-- <q-btn flat dense round icon="arrow_back" @click="$router.push('')"/> -->
				<q-btn icon="place" size="md" class="q-pa-none q-ml-md" borderless flat :label="$store.state.showaddress"></q-btn>
				<q-space></q-space>
				<q-btn round dense icon="notifications" flat @click="$router.push('/home/Notification')"> 
	    			<q-badge  color="red" rounded floating style="margin-top:8px;margin-right: 8px;"></q-badge>
	  			</q-btn>
	  			<div style="background: transparent;">
		  			<q-btn round dense icon="shopping_cart" flat style="background: transparent;">
		    			<q-badge class="cb-bg-orange-8" rounded floating >{{ cartlength}}</q-badge>
		  			</q-btn>
		  		</div>
			</q-toolbar>
			<div class="cb-text-orange-8 cb-bg-white-2 flex flex-center cb-font-16 text-weight-bolder q-pb-xs" v-if="n!=0">
				<q-space></q-space><q-space></q-space>My Cart<q-space></q-space>
				<q-btn label="clear" icon-right="delete_sweep" dense flat @click="clear_confirm_dialog = true"></q-btn>
			</div>
		</q-header>
		<q-page-container>
			<div id="loader2" class="pre-loader" style="display:none"></div>
			<q-page class="q-mb-xl q-pb-sm" v-if="mycart_items.length != 0 || custom_items != 0">
				<div class="row" v-for="cart in mycart_api_data" :key="cart">
					<div class="col-12 flex cb-bg-grey-3 q-px-md cb-font q-pa-xs text-white">
						<span>{{ cart.category_name }}</span>
						<q-space></q-space>
						<span>{{ cart.category_data.length }} Items</span>
					</div>
					<div class="col-12 cb-text-grey-5 q-px-sm" v-for="item in cart.category_data">
						<div class="row q-pa-xs">
							<div class="col-2" style="border-right: 2px solid grey;" @click="screenredirection_item(item)">
								<q-img :src="item.image"></q-img>
							</div>
							<div class="col-10 q-pl-md" style="font-size: 12px;">
								<div class="flex">
									<span>
										<span style="font-size:11px">{{ item.brands }}</span><br>
										<span class="text-weight-bolder">{{ item.name }}</span>
									</span>
									<q-space></q-space>
									<q-icon name="info" size="sm" class="cb-text-grey-4 q-pr-sm" @click="screenredirection_item(item)"></q-icon>
								</div>
								<div class="flex">
									<span class="text-bold" v-for="(variation,index ) in item.variations"> 
										<span v-if="variation.id == item.selected_id">MRP 
											<q-icon name="currency_rupee"></q-icon>{{ variation.selling_price }}
											<br>
											{{ variation.description }}
										</span>
									</span>
									<q-space></q-space>
									<span class="cb-text-orange-8"  v-if="item.item_disabled == 0">
										<q-btn icon="remove" flat dense @click="RemoveFromCartfunction(item)"></q-btn>
										<span class="q-px-sm text-weight-bolder cb-font-16">{{ item.no_of_quantity}}</span>
										<q-btn icon="add" flat dense @click="AddMoreToCartFunction(item)"></q-btn>
									</span>
									<span v-else class="text-red text-weight-bolder">
									Out of Stock
									<q-icon name="delete_sweep" size="md" color="red" @click="RemoveFromCartfunction(item)" class="q-pl-sm"></q-icon>
								</span>
								</div>
							</div>
						</div>
						<q-separator></q-separator>
					</div>
				</div>

				<div class="row">
					<div class="col-12 flex cb-bg-grey-3 q-px-md cb-font q-pa-xs text-white">
						<span>Other Items</span>
						<q-space></q-space>
						<span>{{ custom_items.length }} Items</span>
					</div>
					<div class="col-12 cb-text-grey-5 q-px-sm" v-for="(item,index) in custom_items">
						<div class="row q-pa-xs">
							<div class="col-2" style="border-right: 2px solid grey;">
								<q-img src="~assets/images/logo.png"></q-img>
							</div>
							<div class="col-10 q-pl-md" style="font-size: 12px;">
								<div class="flex">
									<span>
										<span style="font-size:11px">{{ item.brands }}</span><br>
										<span class="text-weight-bolder">{{ item.name }}</span>
									</span>
									<q-space></q-space>
									<!-- <q-icon name="info" size="sm" class="cb-text-grey-4 q-pr-sm" ></q-icon> -->
								</div>
								<div class="flex">
									<span class="text-bold" v-for="(variation,index ) in item.variations"> 
										<span v-if="variation.id == item.selected_id">MRP 
											<q-icon name="currency_rupee"></q-icon>{{ variation.selling_price }}
											<br>
											{{ variation.description }}
										</span>
									</span>
									<q-space></q-space>
									<span class="cb-text-orange-8" >
										<q-btn icon="remove" flat dense @click="RemoveFrom_custom_Cartfunction(item,index)"></q-btn>
										<span class="q-px-sm text-weight-bolder cb-font-16">{{ item.no_of_quantity}}</span>
										<q-btn icon="add" flat dense @click="AddMoreTo_custom_CartFunction(item,index)"></q-btn>
									</span>
								</div>
							</div>
						</div>
						<q-separator></q-separator>
					</div>
				</div>
			
				<div class="row text-white fixed-bottom ">
					<div class="col cb-bg-grey-3 q-pl-md  row items-center text-bold flex">
						{{ cartlength }} Items| <q-icon name="currency_rupee"></q-icon>{{ cart_price }}
					</div>
					<div class="col cb-bg-orange-8 text-center q-py-sm">
						<q-btn label="checkout" flat icon-right="chevron_right" @click="check_cart_items_count()"></q-btn>
					</div>
					
				</div>

				<q-dialog v-model="clear_confirm_dialog">
    				<q-card class="q-dialog-plugin cb-round-borders-20 cb-text-grey-4">
    					<q-card-section class="text-center">
    						<span class="text-weight-bolder text-h6">DoYou Want Clear Cart?</span><br>
    						<span>Tying to add items from different categoris, Please empty existing cart.</span>
    						<br>
    						<q-btn label="clear" class="q-px-xl cb-bg-orange-8 text-white q-mt-lg q-mb-sm" @click="clear_cart_function()"></q-btn><br>
    						<q-btn label="cancel" class="q-px-lg" flat @click="clear_confirm_dialog = false"></q-btn>
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

				<q-dialog v-model="clear_custom_item_dialog">
    				<q-card class="q-px-md q-py-md cb-round-borders-20 text-grey-9">
    					<q-card-section class="text-center">
    						<q-avatar size="80px" class="bg-orange-3">
    							<q-avatar size="65px" class="bg-white cb-text-orange-8" font-size="55px" icon="question_mark"></q-avatar>
    						</q-avatar><br>
    						<span class="text-weight-bolder text-h6">Are You Sure?</span><br>
    						<span>You Want Delete This Item From Cart.</span>
    						<br><br><br>
    						<q-btn label="confirm" class="q-px-lg cb-font-16 cb-bg-orange-8 text-white q-mb-sm" @click="clear_custom_item_function()"></q-btn><br>
    						<q-btn label="cancel" class="q-px-lg cb-font-16" flat @click="clear_custom_item_dialog = false, splice_index = null"></q-btn>
    					</q-card-section>
				    </q-card>
				</q-dialog>

				<q-dialog v-model="clear_unavailable_item_dialog">
    				<q-card class="q-px-md q-py-md cb-round-borders-20 text-grey-8">
    					<q-card-section class="text-center">
    						<q-avatar size="80px" class="bg-orange-3">
    							<q-avatar size="65px" class="bg-white cb-text-orange-8" font-size="55px" icon="question_mark"></q-avatar>
    						</q-avatar><br>
    						<span class="text-weight-bolder text-h6">{{response_data.item_disabled_message}}.</span>
    						<br>
    						<q-btn label="cancel" class="q-px-lg cb-font-16 q-mt-md" color="orange" dense  @click="clear_unavailable_item_dialog = false"></q-btn>
    					</q-card-section>
				    </q-card>
				</q-dialog>

				<q-dialog v-model="total_qty_retriction_dialog">
    				<q-card class="q-px-md q-pt-md cb-round-borders-20 text-grey-9">
    					<q-card-section class="text-center">
    						<q-avatar size="80px" class="bg-orange-3">
    							<q-avatar size="65px" class="bg-white cb-text-orange-8" font-size="55px" icon="question_mark"></q-avatar>
    						</q-avatar><br><br>
    						<span class="text-weight-bolder text-h6">{{ response_data.total_qty_dialog_title }}</span><br><br>
    						<span>{{ response_data.total_qty_dialog_msg }}</span>
    						<br><br><br>
    						<q-btn label="sure" class="q-px-lg cb-font-16 cb-bg-orange-8 text-white q-mb-sm" @click="total_qty_retriction_dialog = false"></q-btn>
    					</q-card-section>
				    </q-card>
				</q-dialog>

			</q-page>
			<q-page class="flex flex-center q-px-lg" v-else>
        		<div class="col text-center text-bold cb-text-grey-4">
          			<q-img src="https://chotabeta.app/dev/testenv/public/imgs/cart-2.png" width="50%"></q-img>
        			<br>
          			<span class="text-h6">EMPTY CART</span>
        			<br>
        			<br>
        			<span class="">We are here to serve. Get your packages,groceries and many more to your door step at single click.</span><br><br>
        	    	<q-btn label="Shop now" class="cb-bg-orange-8 text-white q-px-xl" @click="$router.push('/home/dashboard')"></q-btn>
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
    	access_token:ref(null),    
    	clear_confirm_dialog:ref(false),
    	mycart_items:ref([]),
    	cartlength:ref(0),
			cart_price:ref(0),
			clear_cart_item_dialog:ref(false),
			splice_index:ref(null),
			mycart_api_data:ref([]),
			response_data:ref(null),
			total_qty_retriction_dialog:ref(false),
			xid:ref(null),
			clear_unavailable_item_dialog:ref(false),
			disabled_items:ref(0),
			custom_items:ref([]),
			clear_custom_item_dialog:ref(false),
			custom_item_index:ref(null),
    }
  },
  mounted () {
  	this.getToken();
  	this.mycart_count_and_length_update();
  	localStorage.removeItem('coupon_pick');
  	this.mycart_count_and_length();	
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

  	mycart_count_and_length(){
  		var ps = this;
  		ps.cart_price =0;
  		ps.cartlength =0;
  		if(localStorage.getItem('mycart')){
  			ps.mycart_items = JSON.parse(localStorage.getItem('mycart'));
  			ps.cartlength =  ps.mycart_items.length;
  			// console.log(ps.mycart_api_dat,"ps.mycart_api_dat");
  			ps.mycart_items.forEach(item=>{
	  				ps.cart_price = ps.cart_price + (item.no_of_quantity*parseInt(item.selected_price));
	  			});
	  		
  		}
  		else{ localStorage.setItem('mycart','');	}
  		if(localStorage.getItem('custom_item')){
  			ps.custom_items = JSON.parse(localStorage.getItem('custom_item')); 
  			ps.cartlength = ps.cartlength + ps.custom_items.length;
  		}
  	},
  	mycart_count_and_length_update(){
  		var ps = this;
  		if(localStorage.getItem('mycart')){
  			var data_sku = [];
  			if(localStorage.getItem('mycart')){
	  			ps.mycart_items = JSON.parse(localStorage.getItem('mycart'));
	  			ps.mycart_items.forEach(cart =>{
	  				var data ={ 
	  										"sku":cart.sku,
	  										"qty":cart.no_of_quantity,
	  										"item_id":cart.selected_id,
	  									}
	  				data_sku.push(data);
	  			});
	  		}
	  		if(localStorage.getItem('custom_item')){
	  			ps.custom_items = JSON.parse(localStorage.getItem('custom_item')); 
	  			ps.custom_items.forEach(cart =>{
	  				var data ={ 
	  										"sku":cart.sku,
	  										"qty":cart.no_of_quantity,
	  										"item_id":cart.selected_id,
	  									}
	  				data_sku.push(data);
	  			});
	  		}

  			let formData = new FormData();
  			formData.append('xid', ps.xid);
        formData.append('data_sku', JSON.stringify(data_sku));
      	var loader = document.getElementById('loader2');
	      loader.style.display="block";
        let config = { headers: { "Authorization": `Bearer ${ps.access_token}`,}}
  			ps.$api.post('/api/update-cart-items',formData,config).then(function (response) {
  				loader.style.display="none";
  				// console.log(response.data,"ref");
  				ps.mycart_api_data = response.data.data;
  				ps.response_data = response.data;
  				ps.mycart_count_and_length();
      	}).catch(function (error) {
       		console.log(error,"error");
       		// ps.$q.notify({ message: error, type: "negative",});
      	})
  		}
  	},

  	AddMoreToCartFunction(item){
  		var ps = this;
  		ps.mycart_items.forEach(cart =>{
  			if(item.frequency != "C"){
	  			if(cart.sku == item.sku){
	  				if(item.no_of_quantity < ps.response_data.qty_retriction_count){
	  					cart.no_of_quantity = cart.no_of_quantity + 1;
	  					item.no_of_quantity = cart.no_of_quantity;
	  				}else{
	  					ps.$q.notify({ message: ps.response_data.qty_restriction_msg, color:'light-blue-10', icon:'close'});
	  				}
	  			}  				
  			}else{
  				ps.$q.notify({ message: ps.response_data.qty_restriction_msg,color:'light-blue-10', icon:'close'});
  			}
  		});
  		localStorage.setItem('mycart',JSON.stringify(ps.mycart_items));
  		ps.mycart_count_and_length();
  	},
  	RemoveFromCartfunction(item){
  		var ps = this;
  		// console.log(item,"item");
  		ps.mycart_items.forEach( (cart,index )=>{
  			if(cart.sku == item.sku){
  				if(cart.no_of_quantity == 1){
  					ps.splice_index  = index;
  					ps.clear_cart_item_dialog = true;
  				}else{
  					cart.no_of_quantity = cart.no_of_quantity - 1;
	  				item.no_of_quantity = cart.no_of_quantity;
  				}
  			}
  		})
  		localStorage.setItem('mycart',JSON.stringify(ps.mycart_items));
  		ps.mycart_count_and_length();
  	},

  	clear_cart_item_function(){
  		var ps = this;
  		ps.mycart_items.splice(ps.splice_index,1);
  		ps.splice_index = null;
  		ps.clear_cart_item_dialog =  false;
  		localStorage.setItem('mycart',JSON.stringify(ps.mycart_items));
  		ps.mycart_count_and_length_update();
  	},

  	clear_cart_function(){
  		var ps = this;
  		localStorage.removeItem('mycart');
  		ps.mycart_items = [];
		  ps.cartlength = 0;
  		ps.clear_confirm_dialog =  false;
  		ps.mycart_count_and_length_update();
  	},
		
		check_cart_items_count(){
			var ps= this;
			ps.mycart_api_data.forEach(cart=>{
	  			cart.category_data.forEach(item=>{
	  				// ps.cart_price = ps.cart_price + (item.no_of_quantity*parseInt(cart.selected_price));
	  				if( item.item_disabled == 1){	ps.disabled_items = ps.disabled_items +1;	}
	  			});
	  		});
			if(ps.disabled_items != 0){
  			ps.clear_unavailable_item_dialog =true;
  			return false;
  		}
			if(ps.mycart_items.length <= ps.response_data.total_qty_retriction_count){
				ps.$router.push('PickFromStore_Checkout');
			}else{
				ps.total_qty_retriction_dialog = true;
			}
		},
		screenredirection_item(i){
			var ps = this;
			ps.$router.push('PickFromStore_Item?sku='+i.sku);
		},
		AddMoreTo_custom_CartFunction(item,index){
			var ps = this;
			ps.custom_items.forEach((cart,i)=>{
					if(i == index){
						if(item.no_of_quantity < ps.response_data.qty_retriction_count){
	  					cart.no_of_quantity = parseInt(cart.no_of_quantity) + 1;
	  				}else{
	  					ps.$q.notify({ message: ps.response_data.qty_restriction_msg, color:'light-blue-10', icon:'close'});
	  				}
					}
			});
			localStorage.setItem('custom_item',JSON.stringify(ps.custom_items));
		},
		RemoveFrom_custom_Cartfunction(item,index){
			var ps = this;
			ps.custom_items.forEach((cart,i)=>{
					if(i == index){
						if(item.no_of_quantity == 1 ){
							ps.custom_item_index = index;
								ps.clear_custom_item_dialog= true;
							// ps.custom_items.splice(index,1);
	  				}else{
	  					cart.no_of_quantity = parseInt(cart.no_of_quantity) - 1;
	  				}
					}
			});
			localStorage.setItem('custom_item',JSON.stringify(ps.custom_items));
		},
		clear_custom_item_function(){
				var ps = this;
				ps.custom_items.splice(ps.custom_item_index ,1);
				ps.clear_custom_item_dialog = false;
		},
  }
})
</script>

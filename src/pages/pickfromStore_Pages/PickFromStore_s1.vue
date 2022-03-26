<template>
<q-layout  view="lHh lpr lFf">
	<q-header  >
		<q-toolbar class="cb-bg-white-2 cb-text-blue-8">
			<!-- <q-btn flat dense round icon="arrow_back"  @click="$router.push('/home/dashboard')"/> -->
			<!-- <q-btn icon="place" size="md" class="q-pa-none" borderless flat :label="$store.state.showaddress" @click="$router.push('dashboard_location')"></q-btn> -->
			<q-btn icon="place" size="md" class="q-pa-none q-ml-md" borderless flat :label="$store.state.showaddress"></q-btn>
			<q-space></q-space>
			<q-btn round dense icon="notifications" flat @click="$router.push('/home/Notification')">
    			<q-badge  color="red" rounded floating style="margin-top:8px;margin-right: 8px;"></q-badge>
  			</q-btn>
  			<q-btn round dense icon="shopping_cart" flat  @click="$router.push('PickFromStore_layouts_s3')">
    			<q-badge   class="cb-bg-orange-8" rounded floating >{{ cartlength }}</q-badge>
  			</q-btn>
		</q-toolbar>
	</q-header>
<q-page-container>
	<q-page class="q-px-sm">
		<div id="loader2" class="pre-loader" style="display:none"></div>
		<div class="full-width q-py-sm">
      <q-carousel animated infinite swipeable v-model="carousels" style="height:164px" class="cb-shadow-2 q-mt-sm cb-round-borders-10 q-mb-xs" autoplay>
        <q-carousel-slide :name="index" :img-src="offer.image" v-for="(offer,index ) in top_offers"/>
      </q-carousel>
      <div class="row justify-center">
      	<q-icon name="fiber_manual_record" :class="(index == carousels)? 'text-blue-10':'text-grey-6'" v-for="(offer,index ) in top_offers" @click='carosel_set(index)'></q-icon>
    	</div>
    </div>
    
	  <div class="cb-shadow-1 q-px-sm cb-round-borders-10">
	   	<q-input borderless placeholder="Search" dense @click="my_function()"> 
				<template v-slot:append> <q-icon name="mic" class="cb-text-orange-8" /></template>
			</q-input>
		</div>

		<div v-if="coupons" class="row coupon-wrap "  >
			<div class="col-8" v-for="coupon in coupons" :key="coupon" >
				<q-img :src="coupon.coupon_image"></q-img>
			</div>
		</div>

	<!-- best sellers -->
		<div class="row ">
			<div class="col-12 cb-font text-weight-bolder text-grey-8 q-py-sm"> {{ heading1 }} </div>
		</div>
		<div class="row coupon-wrap "  >
			<div class="q-py-lg" style="min-width: 150px;" v-for="item in top_sellers">
				<div class="cb-bg-orange-1 cb-round-borders-10 q-px-sm q-mx-xs text-grey-8 cb-font-12">
					<div class="row justify-center" style="height:55px;"  @click="get_item_screen(item)">
						<q-img :src="item.image" width="55px" height="55px" style="margin-top:-25px"></q-img>
					</div>
					<div @click="get_item_screen(item)">{{ item.brands }}</div>
					<div style="height:35px" class="text-bold row items-center overflow-hidden" @click="get_item_screen(item)">{{ item.name }}</div>
					<div class="flex flex-center">
						<q-icon name="currency_rupee"></q-icon>{{ item.mrp }}
						<q-space ></q-space>
						<select  v-model="item.description" @change="change_item(item,item.description)" class="bg-white text-grey-8 shadow-2 rounded-borders q-py-xs" style="width:70px; border :none;">
							<option v-for="variation in item.variations" >{{variation.description}}</option>
						</select>
					</div>
					<div class="row justify-center q-pt-md">
						<div v-if="item.item_disabled == 0">
							<q-btn label="Add To Cart" size="sm" class="cb-text-orange-8 bg-white cb-round-borders-10 text-bold" @click="AddToCartFunction(item,item.description)" v-if="item.no_of_quantity == 0"></q-btn>
							<div class="cb-text-orange-8 bg-white shadow-1 cb-round-borders-10 flex" v-else>
								<q-btn icon="remove" flat dense size="sm" @click="RemoveFromCartfunction(item,item.description)"></q-btn>
								<q-space></q-space>
								<span class="q-px-md text-weight-bolder cb-font-16">{{ item.no_of_quantity }}</span>
								<q-space></q-space>
								<q-btn icon="add" flat dense size="sm" @click="AddMoreToCartFunction(item,item.description)"></q-btn>
							</div>
						</div>
						<span v-else class="text-red text-weight-bolder">Out of Stock</span>
					</div>
				</div>
			</div>
		</div>

	<!-- combos  -->
		<div class="row">
			<div class="col-12 cb-font text-weight-bolder cb-text-grey-5 q-py-sm"> {{ heading2 }}</div>
		</div>
		<div class="row coupon-wrap" v-if="combo_offers" >
			<div class="col-8 q-pa-xs" v-for="combo in combo_offers">
				<q-img :src="combo.images_array" class="cb-round-borders-10 full-height" v-if="combo!=''">
					<div class="full-height full-width" style="background: transparent;">
						<div style="height:90%;width:60%" @click="get_item_screen(combo)">
							<span class="text-weight-bolder cb-font-16">{{ combo.name }}</span><br>
							<span class="cb-font-12">{{ combo.info }}</span>
						</div>
						<div v-for="variation in combo.variations" style="height:10%;min-width:100%;" class="flex flex-center">
				  		<q-icon name="currency_rupee"></q-icon>{{ variation.selling_price }}
				  		<span>&nbsp;| <q-icon name="currency_rupee"></q-icon>
				  			<span class="text-strike text-red">
				  				<span class="text-white">{{ variation.mrp }}</span>
				  			</span>
				  		</span>
				  		<q-space></q-space>
				  			<q-btn label="add to cart" class="cb-text-orange-8 bg-white cb-round-borders-10" size="sm" v-if="combo.no_of_quantity == 0" @click="AddMoreToCartFunction_combo(combo)"></q-btn>
				  			<div class="cb-text-orange-8 bg-white shadow-1 cb-round-borders-10 flex" v-else>
									<q-btn icon="remove" flat dense size="sm" @click="RemoveFromCartfunction_combo(combo)"></q-btn>
									<q-space></q-space>
									<span class="q-px-md text-weight-bolder cb-font-16">{{ combo.no_of_quantity }}</span>
									<q-space></q-space>
									<q-btn icon="add" flat dense size="sm" @click="AddMoreToCartFunction_combo(combo)"></q-btn>
								</div>
				  	</div>
					</div>
					<span class="absolute-top-right cb-text-orange-8" v-if="combo.off != 0">
						<q-icon name="bookmark" color="white" size="60px" style="margin-top: -10px;"></q-icon>
						<span  class="absolute-top q-pl-lg cb-font-12" >{{ combo.off }}%  off</span>
					</span>
				</q-img>
			</div>
		</div>

	    <div class="row">
	    	<div class="col-12 cb-text-grey-5 text-weight-bolder q-py-md cb-font">{{ heading3 }}</div>
				<div class="col-3 text-center cb-text-grey-5 q-mb-md" v-for="item in store_categories" :key="item">
					<q-avatar size="75px" class="shadow-1" @click="pickfromstore_redirection(item)">
						<q-avatar size="50px">
							<img :src="item.category_image_for_mobile">
						</q-avatar>
					</q-avatar><br>
					<span class="cb-font-12 text-weight-bolder">{{ item.name }}</span>
				</div>
	    </div>

	    <div class="row">
	    	<div class="col-12" v-if="bottom_offers" v-for="offer in  bottom_offers">
	    		<q-img :src="offer.image"></q-img>
	    	</div>
	    </div>

	    <div class="cb-bg-orange-8 fixed-bottom row items-center q-px-md q-py-sm text-white text-weight-bolder cb-font-16" v-if="cartlength != 0">
				<span>{{ cartlength }} Items <span class="q-px-xs">|</span> <q-icon name="currency_rupee"></q-icon>{{ cart_price }}.00</span>
				<q-space></q-space>
				<q-btn label="view cart" icon-right="shopping_cart" flat  @click="cart_page_redirection()"></q-btn>
			</div>

			<q-dialog v-model="cart_key_dailog">
        <q-card class="cb-round-borders-20" style="max-width: 300px;">
          <q-card-section class="text-center text-grey-9">
            <p class="text-h6 text-weight-bolder">{{ cart_key_data.empty_cart_title }}</p>
            <p class="cb-font-16">{{ cart_key_data.empty_cart_message }}</p>
            <q-btn label="clear" class="cb-bg-orange-8 text-white q-px-xl cb-round-borders-10" @click="clear_cart_function()"></q-btn>
            <br>
            <q-btn label="cancel" flat @click="cart_key_dailog = false"></q-btn>
          </q-card-section>
        </q-card>
      </q-dialog>

      <q-dialog v-model="mycart_length_restriction">
        <q-card class="cb-round-borders-20" style="max-width: 300px;">
          <q-card-section class="text-center text-grey-9 q-py-xl">
          	<q-avatar size="80px" class="bg-orange-3">
							<q-avatar size="65px" class="bg-white cb-text-orange-8" font-size="55px" icon="question_mark"></q-avatar>
						</q-avatar><br><br>
            <p class="text-h6 text-weight-bolder">{{ response_data.total_qty_dialog_title }}</p>
            <p class="cb-font-16">{{ response_data.total_qty_dialog_msg }}</p>
            <q-btn label="Sure" class="cb-bg-orange-8 text-white q-px-xl cb-round-borders-10" @click="mycart_length_restriction = false"></q-btn>
          </q-card-section>
        </q-card>
      </q-dialog>

      <q-dialog v-model="global_search_dialog_s1" persistent :maximized="maximizedToggle_s1" transition-show="slide-up" transition-hide="slide-down">
      	<q-card>
        	<q-bar>
          	<q-space></q-space>
	          <q-btn dense flat icon="close" @click="search_focusout_s1()">
    	        <q-tooltip class="bg-white text-primary">Close</q-tooltip>
  	        </q-btn>
      	  </q-bar>
        	<q-card-section>
          	<q-input autofocus outlined for="input_id" placeholder="Enter Product Name " v-model="user_search_input_s1" dense @keyup="search_products_s1()">
							<template v-slot:append> <q-icon name="mic" class="cb-text-orange-8" /></template>
						</q-input>
        	</q-card-section>
        	<q-card-section class="q-pt-none">
						<div v-for="products in global_search_data_s1" :key="products" @click="go_to_product_page(products)">
         			<div class="row">
			 					<div class="col-3">
				 					<img :src="products.image" style="min-height:50px !important; min-width:50px !important; max-width:50 px !important; max-height:50px;">
				 				</div>
				 				<div class="col-9">
									<span v-html="products.name"></span>
					 			</div>
			 				</div>
				 			<q-separator color="orange"></q-separator>
				 		</div>
				  </q-card-section>
      	</q-card>
    	</q-dialog>
		</q-page>
	</q-page-container>
</q-layout>
</template>
<script>
// let isMobile = window.matchMedia("only screen and (max-width: 760px)").matches;
// if (!isMobile){
//      window.location="https://chotabeta.com/pwa";
// }
import axios from 'boot/axios'
import {ref } from 'vue'
export default ({
  setup(){
    return {
    	access_token:ref(null),
    	top_offers:ref(null),
    	coupons:ref(null),
    	carousels:ref(0),
    	coup:ref(0),
    	heading1:ref(null),
    	heading2:ref(null),
    	heading3:ref(null),
    	combo_offers:ref([]),
    	store_categories:ref([]),
    	select_weight:ref(null),
    	selling_price_123:ref(null),
    	mrp_123:ref(null),
    	id_123:ref(null),
    	product_id_123:ref(null),
    	weight_123:ref(null),
    	top_sellers:ref([]),
    	bottom_offers:ref([]),
    	mycart_items:ref([]),
    	cartlength:ref(0),
    	cart_price:ref(0),
    	cart_key_data:ref(null),
    	cart_key_dailog:ref(false),
    	response_data:ref(null),
    	mycart_length_restriction:ref(false),
    	global_search_dialog_s1: ref(false),
			maximizedToggle_s1: ref(true),
			user_search_input_s1: ref(null),
			global_search_data_s1: ref([]),
			xid:ref(null),
    }
  },
  mounted () {
  	this.getToken();
  	this.mycart_count_and_length();
  	if(localStorage.getItem('category')){
  		this.category_details();
  		this.cart_key_function();
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

  	mycart_count_and_length(){
  		var ps = this;
  		// console.log(localStorage.getItem('mycart'),"localStorage");
  		ps.cart_price =0;
  		ps.cartlength =0;
  		if(localStorage.getItem('mycart')){
  			ps.mycart_items = JSON.parse(localStorage.getItem('mycart'));
  			ps.cartlength =  ps.mycart_items.length;
  			ps.mycart_items.forEach( cart =>{
  				ps.cart_price = ps.cart_price+(parseInt(cart.no_of_quantity)*parseInt(cart.selected_price));
  			});
  		}
  		else{ localStorage.setItem('mycart','');	}
  	},

  	cart_key_function(){
  		var ps= this;
  		let config = { headers: { "Authorization": `Bearer ${ps.access_token}`,}};
  		let formData = new FormData();
      		formData.append('category_id', ps.category.id);
      		formData.append('service_id', ps.category.service_id);
      		var loader = document.getElementById('loader2');
	      	loader.style.display="block";
      	ps.$api.post('/api/cart-key',formData,config).then(function (response) {
      		loader.style.display="none";
      		// console.log(response,'response');
      		ps.cart_key_data = response.data;
      		// ps.cart_key_dailog = true;
      	}).catch(function (error) {
       		console.log(error);
      	});	
  	},

  	category_details(){
  		var ps = this;
  		ps.category = JSON.parse(localStorage.getItem('category'));
  		let config = { headers: { "Authorization": `Bearer ${ps.access_token}`,}}
  		var items = [];
  		ps.mycart_items.forEach(cart =>{
  			var item = {
  				"sku":cart.sku,
  				"item_id":cart.selected_id,
  				"qty":cart.no_of_quantity
  			}
  			items.push(item); 
  		});
  		let formData = new FormData();
      		formData.append('xid', ps.xid);
      		formData.append('category_id', ps.category.id);
      		formData.append('service_id', ps.category.service_id);
      		formData.append('items', JSON.stringify(items));
      		var loader = document.getElementById('loader2');
	      	loader.style.display="block";
      	ps.$api.post('/api/intermediate-screen-new',formData,config).then(function (response) {
      		loader.style.display="none";
      		// console.log('response');
      		ps.response_data = response.data;
      		ps.top_offers =  response.data.top_offers;
 					ps.coupons =  response.data.coupons;
 					ps.combo_offers = response.data.combo_offers;
 					ps.combo_offers.forEach( item =>{
 						if( item.variations[0].mrp > item.variations[0].selling_price || item.variations[0].mrp < item.variations[0].selling_price ){
 							item.off = ((item.variations[0].mrp - item.variations[0].selling_price)/item.variations[0].mrp)*100;
 						}else{	item.off = 0;	}
 					});
 					ps.heading1 = response.data.heading1;
 					ps.heading2 = response.data.heading2;
 					ps.heading3 = response.data.heading3;
 					ps.store_categories = response.data.store_categories;
 					ps.top_sellers = response.data.top_sellers;
					ps.top_sellers.forEach((item,i) =>{
						item.mrp = item.variations[0].selling_price;
            item.description = item.variations[0].description;
					});

 					ps.bottom_offers = response.data.bottom_offers;
 					ps.cart_checkup_top_seller();
 					// ps.cart_checkup_combo_offers();
      	}).catch(function (error) {
       		console.log(error);
      	})
  	},
  	carosel_set(index){ this.carousels = index; },

	  change_item(data,weight_description){
	  	var ps = this;
	  	console.log(data,"data",weight_description,'weight_description');
		  ps.top_sellers.forEach((item, i) => {
			   if(item.sku == data.sku){
				   item.variations.forEach((variation) => {
					  if(variation.description == weight_description){
						  item.mrp = variation.mrp;
						  // item.id = variation.id;
						  if( item.no_of_quantity != 0 ){
						  	ps.change_cart_items(weight_description,data);
						  }
						}
				  });
		    }
      });
	  },
	  change_cart_items(weight_description,data){
  		var ps = this;
  		ps.mycart_items.forEach(cart=>{
  			if(cart.sku == data.sku){
  				cart.variations.forEach( variation => {
	  				if(variation.description == weight_description){
	  					cart.selected_id = variation.id;
	  					cart.selected_price = variation.selling_price;
	  				}
	  			});
  			}
  		});
  		localStorage.setItem('mycart',JSON.stringify(ps.mycart_items));
  		ps.mycart_count_and_length();
	  },

	  cart_checkup_top_seller(){
  		var ps= this;
  		if(ps.mycart_items.length != 0 ){
  			ps.mycart_items.forEach(cart =>{
	  			ps.top_sellers.forEach(item=>{
	  				if(item.sku == cart.sku){
	  					item.variations.forEach((variation,index) =>{
		  					if( variation.id == cart.selected_id ){
									item.no_of_quantity = cart.no_of_quantity;
									item.selected_id = cart.selected_id;
									item.selected_price = cart.selected_price;
									item.description = variation.description;
									item.mrp = variation.mrp;
		  					}
		  				});
	  				}
	  			});
	  		});
	  	}
  		ps.mycart_count_and_length();
  	},

  	cart_checkup_top_seller_2(){
  		var ps = this;
  		ps.mycart_items.forEach( cart =>{
  			ps.top_sellers.forEach( item =>{
  				if(item.sku == cart.sku){
  					item.variations.forEach((variation,index) =>{
	  					if( variation.id == cart.selected_id ){
								item.no_of_quantity = cart.no_of_quantity;
								item.selected_id = cart.selected_id;
								item.selected_price = cart.selected_price;
								item.description = variation.description;
								item.mrp= variation.selling_price;
	  					}
	  				});
  				}
  			});
  		});
  		ps.mycart_count_and_length();
  	},
  	AddToCartFunction(item,variation){
  		var ps = this;
  		if(ps.mycart_items.length == 0){
  			localStorage.setItem('cart_key',ps.cart_key_data.cart_key);
  		}

  		if( ps.cart_key_data.cart_key == localStorage.getItem('cart_key')){
  			if(variation != null || variation != undefined || variation != ""){
	  			item.variations.forEach(ele =>{
		  			if(variation == ele.description){
		  				item.no_of_quantity = 1;
		  				item.selected_id = ele.id;
		  				item.selected_price = ele.selling_price;
		  				ps.mycart_items.push(item);
		  			}
		  		});
		  		localStorage.setItem('mycart',JSON.stringify(ps.mycart_items));
		  		ps.cart_checkup_top_seller_2();
	  		}
  		}else{
  			ps.cart_key_dailog = true;
  		}
  	},

  	AddMoreToCartFunction(item,variation){
  		var ps = this;
  		ps.mycart_items.forEach(cart => {
	  		if(item.sku == cart.sku ){  
	  			if( cart.no_of_quantity < ps.response_data.qty_retriction_count){
	  				cart.no_of_quantity = cart.no_of_quantity + 1; 
	  			}else{
	  				ps.$q.notify({ message: ps.response_data.qty_restriction_msg, color:'light-blue-10', icon:'close'});
	  			}
	  		}
	  	});
	  	localStorage.setItem('mycart',JSON.stringify(ps.mycart_items));
	  	ps.cart_checkup_top_seller_2();
  	},

  	RemoveFromCartfunction(item,variation){
  		var ps = this;
  		ps.mycart_items.forEach((cart,index) => {
				if(item.sku == cart.sku){
	  			if(cart.no_of_quantity == 1){
	  				ps.mycart_items.splice(index, 1);
	  				item.no_of_quantity = 0;
	  				item.selected_id = 0;
	  				item.selected_price = 0;
	  			}else{
	  				cart.no_of_quantity = cart.no_of_quantity - 1;
	  			}
	  		}
	  	});
	  	localStorage.setItem('mycart',JSON.stringify(ps.mycart_items));
	  	ps.cart_checkup_top_seller_2();
  	},

  	cart_checkup_combo_offers(){
  		var ps= this;
  		ps.mycart_items.forEach(cart =>{
  			ps.combo_offers.forEach(combo =>{
  				if(cart.sku == combo.sku){
  					 combo.no_of_quantity = cart.no_of_quantity; }
  			});
  		});
  		ps.mycart_count_and_length();
  	},

  	AddToCartFunction_combo(combo){
  		var ps = this;
  		// console.log(combo,"combo");
  		if(ps.mycart_items.length == 0){
  			localStorage.setItem('cart_key',ps.cart_key_data.cart_key);
  		}
  		if( ps.cart_key_data.cart_key == localStorage.getItem('cart_key')){
  			combo.no_of_quantity = 1;
  			combo.selected_id = combo.variations[0].id;
  			combo.selected_price = combo.variations[0].selling_price;
	  		ps.mycart_items.push(combo);	
  		}else{
  			ps.cart_key_dailog = true;
  		}
  		localStorage.setItem('mycart',JSON.stringify(ps.mycart_items))
  		ps.cart_checkup_combo_offers();
  	},
		AddMoreToCartFunction_combo(combo){
			var ps = this;
			var existing = null;
			ps.mycart_items.forEach(cart=>{
				if(cart.sku == combo.sku){
					existing = 1;
					if(cart.no_of_quantity < ps.response_data.combo_offers_qty_restriction){
						cart.no_of_quantity = 1 + cart.no_of_quantity;  
					}else{
						ps.$q.notify({ message: ps.response_data.qty_restriction_msg, color:'light-blue-10', icon:'close'});
					}
				}
			});
			if(existing == null){
				ps.AddToCartFunction_combo(combo);
			}
			localStorage.setItem('mycart',JSON.stringify(ps.mycart_items));
			ps.cart_checkup_combo_offers();
		},
  	RemoveFromCartfunction_combo(combo){
  		var ps=  this;
  		ps.mycart_items.forEach((cart,index)=>{
				if(cart.sku == combo.sku){
					if(cart.no_of_quantity == 1 ){
						ps.mycart_items.splice(index, 1);
						combo.no_of_quantity = 0;
  					combo.selected_id = 0;
  					combo.selected_price = 0;
					}else{
						cart.no_of_quantity = cart.no_of_quantity - 1;  
					}
				}
			});
			localStorage.setItem('mycart',JSON.stringify(ps.mycart_items));
			ps.cart_checkup_combo_offers();
  	},
  	pickfromstore_redirection(item){
  		var ps = this;
  		localStorage.setItem('sub_category',JSON.stringify(item));
  		ps.$router.push('/PickFromStore_layouts_s2');
  	},
  	clear_cart_function(){
  		var ps = this;
  		localStorage.removeItem('mycart');
  		ps.mycart_items = [];
  		ps.cart_key_dailog =  false;
  		ps.mycart_count_and_length();
  	},
  	get_item_screen(item){
  		var ps = this;
  		console.log(item);
  		ps.$router.push('PickFromStore_Item?sku='+item.sku);
  	},
  	cart_page_redirection(){
  		var ps = this;
  		if(ps.mycart_items.length <= ps.response_data.total_qty_retriction_count){
  			ps.$router.push('PickFromStore_layouts_s3');
  		}else{
  			ps.mycart_length_restriction = true;
  		}
  	},
  	search_focusout_s1(){
			var ps = this;
			ps.global_search_dialog_s1 = false;
		},

		my_function(){
			this.global_search_dialog_s1 = true; 
				document.getElementById('input_id').focus();
				document.getElementById('input_id').focus();
		},
		search_products_s1(){
			var ps = this;
	  	if(ps.$store.state.latlongs){
		  	if(ps.user_search_input_s1.length > 1){
				  var category = JSON.parse(localStorage.getItem('category'));
					let formData = new FormData();
			     	formData.append('item_name', ps.user_search_input_s1);
			     	formData.append('page_no', 1);
			     	formData.append('service_id', category.service_id);
			     	formData.append('category_id', category.id);
			     	formData.append('sub_category_id', '0');
			 		let config = { headers: { Authorization: `Bearer ${ps.access_token}` } };
			 		var loader = document.getElementById('loader2');
		     	loader.style.display="block";
					ps.$api.post('/api/interim-search-items',formData,config).then(function (response) {
					loader.style.display="none";
					if(response.data.status_code ==200){
						ps.global_search_data_s1 = response.data.products;							 
						}else{
							ps.global_search_data_s1 = '';
						 	ps.$q.notify({ message:response.data.message, type: 'negative',progress: true, });
						}
					}).catch(function (error) {
							// ps.$q.notify({ message:error, type: 'warning',progress: true, });
					});
				}else{
					ps.global_search_data_s1 = '';
				}
		  }else{
		  	ps.global_search_data_s1 = '';
				ps.$q.notify({ message:"Please Refresh", type: 'warning',progress: true, });
		  }
		},

		go_to_product_page(product_data){
  		var ps = this;
  		ps.$router.push('/PickFromStore_Item?sku='+product_data.sku);
		},
  }
})
</script>
<style scoped>
.coupon-wrap{ flex-wrap: nowrap;overflow: scroll;overflow-y: hidden; }
::-webkit-scrollbar { width: 0;background: transparent; }
::-webkit-scrollbar-thumb {background: transparent;}
</style>

<template>
	<q-layout  view="lHh lpr lFf">
		<q-header  class="cb-bg-white-2">
			<q-toolbar class="cb-bg-white-2 cb-text-blue-8">
				<!-- <q-btn flat dense round icon="arrow_back" @click="$router.push('/PickFromStore_layouts_s1')" v-if="category.screen_redirection == 2"></q-btn> -->
				<!-- <q-btn flat dense round icon="arrow_back" @click="$router.push('/home/dashboard')" v-if="category.screen_redirection == 0"></q-btn> -->
				<!-- <q-btn icon="place" size="md" class="q-pa-none" borderless flat :label="$store.state.showaddress" @click="$router.push('dashboard_location')"></q-btn> -->
				<q-btn icon="place" size="md" class="q-pa-none q-ml-md" borderless flat :label="$store.state.showaddress"></q-btn>
				<q-space></q-space>
				<q-btn round dense icon="notifications" flat @click="$router.push('/home/Notification')">
	    			<q-badge  color="red" rounded floating style="margin-top:8px;margin-right: 8px;"></q-badge>
	  			</q-btn>
	  			<div style="background: transparent;">
		  			<q-btn round dense icon="shopping_cart" flat  @click="$router.push('PickFromStore_layouts_s3')">
		    			<q-badge class="cb-bg-orange-8" rounded floating >{{ cartlength }}</q-badge>
		  			</q-btn>
		  		</div>
			</q-toolbar>
			<div class="cb-bg-white-2 text-center cb-font text-weight-bolder cb-text-orange-8">{{ heading }}</div>
			<div class="cb-shadow-1 q-mx-sm q-my-sm q-px-sm cb-round-borders-10">
				<q-input borderless placeholder="Search" dense @click="my_function()">
					<template v-slot:append> <q-icon name="mic" class="cb-text-orange-8" /></template>
				</q-input>
			</div>
			 <div class="cb-bg-grey-3 q-px-sm">
          <q-tabs v-model="tabs" align="left" :breakpoint="0" active-class="cb-bg-white-1 cb-text-grey-8 cb-round-borders-10 q-px-xs" indicator-color="transparent" dense>
            <q-tab :label="i.name" :name="i.id" class="q-my-xs" v-for="i in combinations.sub_categories" :key="i" @click="page = 1,errorpage = null,getItems(i.id)"></q-tab>
          </q-tabs>
        </div>
        <div class="q-ma-sm flex">
        	<q-btn dense label="uploadlist" class="cb-bg-orange-8 q-px-xs" size="sm" icon-right="photo_camera" @click="clickfunction()"></q-btn>
        	<input id="file-input" type="file"  class="hidden" @change="onFileChange_combo" />
        	<q-space></q-space>
        	<q-btn dense label="Add Item"  class="cb-bg-orange-8 q-px-xs" size="sm" icon-right="add" @click="$router.push('Custom_items')"></q-btn>
        </div>
		</q-header>
		<q-page-container>
			<q-page class="q-pa-sm">
				<div id="loader2" class="pre-loader" style="display:none"></div>
				<div class="row" style="padding-bottom: 50px;">

					<div class="col-6  q-pa-xs" v-for="i in data">
						<q-card class="q-px-sm q-pt-xs cb-text-grey-5 cb-font-14">
							<q-card-section  @click="get_item_screen(i)" class="q-pa-none">
								<q-img :src="i.image" @click="" height="200px"></q-img>
							</q-card-section>
							<q-card-section class="row items-center q-pa-none flex">
								<span style="width:80%;overflow:hidden;white-space: nowrap;">{{ i.brands }}</span>
								<q-btn icon="error_outline" flat size="sm" @click="get_item_screen(i)" style="width:20%"></q-btn>
							</q-card-section>
							<q-card-section class="q-pt-sm q-pa-none text-weight-bolder" style="height: 50px;overflow: hidden;">
								{{ i.name }}
							</q-card-section>
							<q-card-section class="q-pa-none row items-center">
								<q-icon name="currency_rupee"></q-icon>{{ i.mrp }}
								<q-space ></q-space>
								<select  v-model="i.description" @change="change_item(i,i.description)" class="bg-white text-grey-8 q-px-sm cb-shadow-1 cb-round-borders-10" style="height: 30px;border:none;width:80px">
									<option v-for="variation in i.variations" >{{variation.description}}</option>
								</select>
							</q-card-section>
							<q-card-section class="q-pa-none flex flex-center q-pt-sm" >
								<span v-if="i.item_disabled == 0">
									<q-btn dense flat class="cb-text-orange-8" label="Add To Cart" @click="AddToCartFunction(i,i.description)" v-if="i.no_of_quantity == 0"></q-btn>
									<div class="cb-text-orange-8" v-else>
										<q-btn icon="remove" flat dense @click="RemoveFromCartfunction(i,i.description)"></q-btn>
 										<span class="q-px-md text-weight-bolder cb-font-16">{{ i.no_of_quantity }}</span>
										<q-btn icon="add" flat dense @click="AddMoreToCartFunction(i,i.description)"></q-btn>
									</div>
								</span>
								<span v-else class="text-red text-weight-bolder">Out of Stock</span>
							</q-card-section>
						</q-card>
					</div>
					<div class="col-12 q-py-xs js-scroll"><!-- sandeep --></div>
				</div>

				<div class="cb-bg-orange-8 fixed-bottom row items-center q-px-md q-py-sm text-white text-weight-bolder cb-font-16" v-if="cartlength != 0">
					<span>{{ cartlength }} Items <span class="q-px-xs">|</span> <q-icon name="currency_rupee"></q-icon>{{ cart_price }}.0</span>
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


        <q-dialog v-model="alert">
		      <q-card style="min-width:75%">
		        <q-card-section>
		          <div class="text-h6">Choose</div>
		        </q-card-section>
		        <q-card-section>
		          <div class="row items-center justify-center">
		            <div class="col">
		          <q-icon name="photo_camera" class="cb-text-grey-4" style="font-size: 3em; align:center !important"></q-icon><br>
		          <span>Camera</span>
		            </div>
		          <div class="col">
		             <label for="file-input">
		            <q-icon name="image" class="cb-text-grey-4" style="font-size: 3em; align:center !important"></q-icon>
		            </label>
		            <br>
		            <input id="file-input" type="file"  class="hidden" @change="onFileChange_combo" />
		          <!-- <q-icon name="image" class="cb-text-grey-4" style="font-size: 3em; align:center !important; cursor:pointer" @click="onFileChange_combo(event)"></q-icon><br> -->
		          <!-- <input type= "file" name="image" class="cb-text-grey-4" style="font-size: 3em; align:center !important" @change="onFileChange_combo"><br> -->
		          <span>Gallery</span>
		          </div>
		          </div>
		        </q-card-section>

		        <q-card-actions align="right">
		          <q-btn flat label="Cancel" color="primary" v-close-popup />
		        </q-card-actions>
		      </q-card>
		    </q-dialog>


		    <q-dialog v-model="cam_dialog" persistent :maximized="maximizedToggle" transition-show="slide-up" transition-hide="slide-down">
		      <q-card class="my-card">
		        <q-card-section class="q-pt-none flex flex-center" style="min-height:90%">
			        <img :src="selected_cam_image" id ="img_id" spinner-color="white" class="justify-center" style="min-height: 100%; width: 100%;margin:auto;margin-top:auto;text-align: center">
					  </q-card-section>
					  <q-card-actions align="right">
		          <q-btn v-close-popup flat color="primary" label="Cancel" ></q-btn><q-space></q-space>
		          <q-btn v-close-popup flat color="primary" round  label="OK" @click="cam_order_placement1()" ></q-btn>
		        </q-card-actions>
		      </q-card>
		    </q-dialog>

				<q-dialog v-model="mycart_length_restriction">
	        <q-card class="cb-round-borders-20" style="max-width: 300px;">
	          <q-card-section class="text-center text-grey-9 q-py-xl">
	          	<q-avatar size="80px" class="bg-orange-3">
								<q-avatar size="65px" class="bg-white cb-text-orange-8" font-size="55px" icon="question_mark"></q-avatar>
							</q-avatar><br><br>
	            <p class="text-h6 text-weight-bolder">{{ restrictions.total_qty_dialog_title }}</p>
	            <p class="cb-font-16">{{ restrictions.total_qty_dialog_msg }}</p>
	            <q-btn label="Sure" class="cb-bg-orange-8 text-white q-px-xl cb-round-borders-10" @click="mycart_length_restriction = false"></q-btn>
	          </q-card-section>
	        </q-card>
	      </q-dialog>

	      <q-dialog v-model="global_search_dialog_s2" persistent :maximized="maximizedToggle_s2" transition-show="slide-up" transition-hide="slide-down">
	      	<q-card >
	        	<q-bar>
	          	<q-space></q-space>
	          	<q-btn dense flat icon="close" @click="search_focusout_s2()">
	            	<q-tooltip class="bg-white text-primary">Close</q-tooltip>
	          	</q-btn>
	        	</q-bar>
		        <q-card-section>
	  	        <q-input autofocus outlined for="input_id" placeholder="Enter Product Name " v-model="user_search_input_s2" dense @keyup="search_products_s2()">
								<template v-slot:append> <q-icon name="mic" class="cb-text-orange-8" /></template>
							</q-input>
	        	</q-card-section>
		        <q-card-section class="q-pt-none">
							<div v-for="products in global_search_data_s2" :key="products" @click="go_to_product_page(products)">
	        			<div class="row">
				 					<div class="col-3">
					 					<img :src="products.image" style="min-height:50px !important; min-width:50px !important; max-width:50 px !important; max-height:50px;" >
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
      alert: ref(false),
    	access_token:ref(null),
    	tabs:ref(null),
    	select_item_size:ref('500'),
    	combinations:ref([]),
    	data:ref([]),
    	heading:ref(null),
      selling_price_123:ref(null),
    	mrp_123:ref(null),
    	id_123:ref(null),
    	page:ref(1),
    	errorpage:ref(null),
    	successpage:ref(null),
    	service:ref([]),
			category:ref([]),
			sub_category:ref([]),
			mycart_items:ref([]),
			cartlength:ref(0),
			cart_price:ref(0),
			cart_key_data:ref(null),
			cart_key_dailog:ref(false),
      cam_dialog: ref(false),
      maximizedToggle: ref(true),
      restrictions:ref(null),
      mycart_length_restriction:ref(false),
      global_search_dialog_s2: ref(false),
			maximizedToggle_s2: ref(true),
			user_search_input_s2: ref(null),
			global_search_data_s2: ref([]),
			xid:ref(null),
    }
  },
  mounted () {
  	this.getToken();
  	this.gettabs_links();
  	this.mycart_count_and_length();
  	this.cart_key_function();

  	const scrollElements = document.querySelectorAll(".js-scroll");
    window.addEventListener("scroll", () => { handleScrollAnimation(); });
    const handleScrollAnimation = () => {
      scrollElements.forEach((el) => {
        if (elementInView(el)) { displayScrollElement(el); }
        else if (elementOutofView(el)) { hideScrollElement(el);}
      })
    }
    const elementInView = (el) => {
    	const elementTop = el.getBoundingClientRect().top;
    	// console.log(elementTop,"elementTop",(window.innerHeight-52),"innerHeight");
    	return ( elementTop <= (window.innerHeight-20) );
    };
    const elementOutofView = (el) => {
      const elementTop = el.getBoundingClientRect().top;
      return ( elementTop >= (window.innerHeight-20) );
    };
    const displayScrollElement = (element) => {
      element.classList.add("scrolled");
      if(this.successpage == this.page){ this.page = 1 + this.page;this.getItems(); }
    };
    const hideScrollElement = (element) => { element.classList.remove("scrolled"); };

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

    onFileChange_combo(event){
 		  this.cam_image = event.target.files[0];
		  localStorage.setItem('cam-image',this.cam_image);
		  this.cam_dialog = true;
		  if(this.cam_image){
		 		this.selected_cam_image = URL.createObjectURL(this.cam_image);
		 	}

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
      })
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
  				ps.cart_price = ps.cart_price+(cart.no_of_quantity * parseInt(cart.selected_price));
  			});
  		}
  		else{ localStorage.setItem('mycart','');	}
  	},

  	gettabs_links(){
  		var ps = this;
  		let config = { headers: { "Authorization": `Bearer ${ps.access_token}`,}}
  		ps.service = JSON.parse(localStorage.getItem('service'));
  		ps.category = JSON.parse(localStorage.getItem('category'));
  		ps.sub_category = JSON.parse(localStorage.getItem('sub_category'));

  		if(ps.category.screen_redirection == 2){
  			ps.heading = ps.sub_category.name;
  			var combinations=[{
										category_id: ps.sub_category.category_id,
										main_service_id: ps.category.main_service_id,
										service_name: ps.sub_category.name,
										service_id: ps.sub_category.service_id,
										mode: ps.service.mode,
										}];
  		}else if(ps.category.screen_redirection == 0){
  			ps.heading = ps.category.name;
  			var combinations=[{
										category_id:ps.category.id,
										main_service_id:ps.category.main_service_id,
										service_name:ps.category.name,
										service_id:ps.category.service_id,
										mode:ps.service.mode,
										}];
  		}

			let formData = new FormData();
      formData.append('combinations', (JSON.stringify(combinations)));
      var loader = document.getElementById('loader2');
	      	loader.style.display="block";
  		ps.$api.post('/api/interim-sub-cat',formData,config).then(function (response) {
  			loader.style.display="none";
				ps.combinations = response.data.combinations[0];
				ps.tabs = response.data.combinations[0].sub_categories[0].id;
				ps.getItems();
    	}).catch(function (error) {
     		console.log(error);
     		// ps.$q.notify({ message: error, type: "negative",});
    	});
  	},

    change_item(data,weight_description){
		  var ps = this;
		  ps.data.forEach((item, i) => {
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

  	getItems(item){
  		var ps = this;
  		if(item!=undefined){ ps.tabs = item; }
		  let config = { headers: { "Authorization": `Bearer ${ps.access_token}`, },}
		 	if( ps.tabs){
	  		if(ps.category.screen_redirection == 2){
	  			var category_id = ps.sub_category.category_id;
	  			var service_id  = ps.sub_category.service_id;
	  			var sub_category_id = ps.tabs;
  			}else if(ps.category.screen_redirection == 0){
  				var category_id = ps.category.id;
	  			var service_id = ps.category.service_id;
	  			var sub_category_id = ps.tabs;
  			}
  		var loader = document.getElementById('loader2');
	      	loader.style.display="block";
  		ps.$api.get('/api/auth/getitems?category_id='+category_id+'&service_id='+service_id+'&sub_category_id='+sub_category_id+'&item_name&update_fromcart=0&page='+ps.page,config).then(function (response) {
  		// ps.$api.get('/swift/public/get-items5?category_id='+category_id+'&service_id='+service_id+'&sub_category_id='+sub_category_id+'&item_name&update_fromcart=0&page='+ps.page,config).then(function (response) {

  			loader.style.display="none";
  				if(response.data.status_code == 400){
  					ps.$q.notify({ message: response.data.items_error_heading});
  					ps.errorpage = 1;
  				}else{
  					ps.successpage = ps.page;
  					if(ps.page > 1){
						  response.data.data.forEach(ele => { ps.data.push(ele); });
						  // console.log(ps.data,"ps.data");
					  }else{
					  	ps.data = [];
					  	window.scrollTo(0,0);
						  ps.data = response.data.data;
					  }
            ps.data.forEach((item,i) =>{
							item.mrp = item.variations[0].mrp;
            	item.description = item.variations[0].description;
					 	});
					 	ps.cart_checkup();
					 	ps.restrictions  = response.data;
  				}
      	}).catch(function (error) {
       		console.log(error,"error");
       		// ps.$q.notify({ message: error, type: "negative",});
      	})
  		}
  	},

  	get_item_screen(item){
  		var ps = this;
  		// console.log(item);
  		ps.$router.push('PickFromStore_Item?sku='+item.sku);
  	},

  	cart_checkup(){
  		var ps= this;
  		if(ps.mycart_items.length != 0){
  			ps.mycart_items.forEach( cart=>{
  				ps.data.forEach( item =>{
  					if(cart.sku == item.sku){
  						item.variations.forEach((variation,index) =>{
		  					if(variation.id == cart.selected_id){
		  						item.no_of_quantity = cart.no_of_quantity;
		  						item.selected_id = cart.selected_id;
		  						item.selected_price = cart.selected_price;
		  						item.description = variation.description;
		  						item.mrp = variation.selling_price;
		  						ps.change_item(item,variation.description);
		  					}
		  				});
  					}
	  			});
  			});
  		}
  		ps.mycart_count_and_length();
  	},

  	AddToCartFunction(item,variation){
  		var ps = this;
  		// console.log(item,"item");
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
		  		// console.log(ps.mycart_items,"mycart_items");
		  		localStorage.setItem('mycart',JSON.stringify(ps.mycart_items));
		  		ps.cart_checkup();
	  		}
	  	}else{
  			ps.cart_key_dailog = true;
  		}
  	},
  	AddMoreToCartFunction(item,variation){
  		var ps = this;
  		// console.log(item,"item");
  		if(variation != null || variation != undefined || variation != ""){
  			// item.variations.forEach(ele =>{
	  			// if(variation == ele.description){
	  				ps.mycart_items.forEach(cart => {
	  					if(item.sku == cart.sku){
	  						if( cart.no_of_quantity < ps.restrictions.qty_retriction_count){
	  							cart.no_of_quantity = cart.no_of_quantity +1;
	  						}
	  						else{
	  							ps.$q.notify({ message: ps.restrictions.qty_restriction_msg, color:'light-blue-10', icon:'close'});
	  						}
	  					}
	  				});
	  			// }
	  		// });
	  		// console.log(ps.mycart_items,"mycart_items");
	  		localStorage.setItem('mycart',JSON.stringify(ps.mycart_items));
	  		ps.cart_checkup();
  		}
  	},
  	RemoveFromCartfunction(item,variation){
  		var ps = this;
  		// console.log(item,"item");
  		if(variation != null || variation != undefined || variation != ""){
  			// item.variations.forEach(ele =>{
	  			// if(variation == ele.description){
	  				ps.mycart_items.forEach((cart,index) => {
	  					if(item.sku == cart.sku){
	  						if(cart.no_of_quantity == 1){
	  							ps.mycart_items.splice(index, 1);
	  							item.no_of_quantity = 0;
	  							item.selected_id = 0;
	  							item.selected_price = 0;
	  						}else{
	  							cart.no_of_quantity = cart.no_of_quantity -1;
	  						}
	  					}
	  				});
	  			// }
	  		// });
	  		// console.log(ps.mycart_items,"mycart_items");
	  		localStorage.setItem('mycart',JSON.stringify(ps.mycart_items));
	  		ps.cart_checkup();
  		}
  	},

  	clear_cart_function(){
  		var ps = this;
  		localStorage.removeItem('mycart');
  		ps.mycart_items = [];
  		ps.cart_key_dailog =  false;
  		ps.mycart_count_and_length();
  	},
  	cam_order_placement1(){
  		var ps = this;
  		let config = { headers: { "Authorization": `Bearer ${ps.access_token}`,}}
  		ps.get_lat_lngs = localStorage.getItem('latlongs');

			let formData = new FormData();
      formData.append('category_id', 1);
      formData.append('service_id', 2);
      formData.append('current_location', ps.get_lat_lngs);
      formData.append('cam_image', ps.cam_image);
      var loader = document.getElementById('loader2');
	      	loader.style.display="block";
  		ps.$api.post('/api/cam-orders',formData,config).then(function (response) {
  			loader.style.display="none";
        if(response.data.status_code == 200){
          ps.order_id = response.data.order_id;
		 		  localStorage.setItem('cam_uid',ps.order_id);
		      ps.order_success_dailog = true;
					ps.$router.push('/camorder_checkout');
        }else{
   				ps.$q.notify({ message: response.data.message[0], type: "negative",});
        }
    	}).catch(function (error) {
     		console.log(error);
    	});
		},
		clickfunction(){
			document.getElementById('file-input').click();
		},
		cart_page_redirection(){
  		var ps = this;
  		if(ps.mycart_items.length <= ps.restrictions.total_qty_retriction_count){
  			ps.$router.push('PickFromStore_layouts_s3');
  		}else{
  			ps.mycart_length_restriction = true;
  		}
  	},
  	search_focusout_s2(){
			var ps = this;
			ps.global_search_dialog_s2 = false;
		},
		my_function(){
			this.global_search_dialog_s2 = true; 
		},
		search_products_s2(){
			var ps = this;
  		if(ps.$store.state.latlongs){
	  		if(ps.user_search_input_s2.length > 1){
				  var category = JSON.parse(localStorage.getItem('category'));
 	        var sub_category = JSON.parse(localStorage.getItem('sub_category'));				 
		  		let formData = new FormData();
		      formData.append('item_name', ps.user_search_input_s2);
		      formData.append('page_no', 1);
		      formData.append('service_id', category.service_id);
		      formData.append('category_id', category.id);
		      formData.append('sub_category_id', sub_category.id);
		      var loader = document.getElementById('loader2');
	      	loader.style.display="block";
		  		let config = { headers: { Authorization: `Bearer ${ps.access_token}` } };
					ps.$api.post('/api/interim-search-items',formData,config).then(function (response) {
						loader.style.display="none";
						if(response.data.status_code ==200){
							ps.global_search_data_s2 = response.data.products;
						}else{
							ps.global_search_data_s2 = '';
						 	ps.$q.notify({ message:response.data.message, type: 'negative',progress: true, });
						}
					}).catch(function (error) {
						// ps.$q.notify({ message:error, type: 'warning',progress: true, });
					});
			  }else{
			  	ps.global_search_data_s2 = '';
			  }
  		}else{
  			ps.global_search_data_s2 = '';
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
<style>
.image-upload>input {
  display: none;
}
</style>


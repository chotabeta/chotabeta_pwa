<template>
  <q-layout view="lHh lpr lFf">
	<q-header class="cb-bg-orange-8 q-pt-xs">
	  <q-toolbar>
	 		<q-btn icon="arrow_back_ios" flat></q-btn>
	    <q-space></q-space>
			<q-btn icon="shopping_cart" flat @click="$router.push('food-cart')">
		    <q-badge rounded floating  class="bg-white text-black">0</q-badge>
			</q-btn>
	  </q-toolbar>
	  <q-card style="border-radius: 30px 30px 0px 0px;" class="shadow-0 q-pt-sm q-px-sm bg-orange-1">
	 	  <q-toolbar class="text-grey-7">
		 	<q-icon name="fastfood" flat size="sm"></q-icon>
		 	<span class="cb-font-14 text-deep-orange text-bold q-pl-sm">Select Cuisine</span>
		    <q-space></q-space>
			<q-toggle color="green" label="Veg" v-model="select_veg" @click="check_pure_veg()" dense></q-toggle>	
		  </q-toolbar>
		  <q-tabs v-model="selected_cuisin"  active-class="selected_class" indicator-color="transparent" class="unselected_class" @click="check_cuisins(selected_cuisin)">
		  	<q-tab ></q-tab>
		  	<q-tab ></q-tab>
		  	<q-tab v-for="(cui,index) in cuisins" :name="cui.category" class="q-pa-sm" :id="'t'+index" @click="check_cuisins(cui.category,'t'+index)">
		  		<q-img src="https://thumbs.dreamstime.com/b/indian-food-lanch-thali-dinner-sweet-salt-spice-healthy-maharashtrian-129366021.jpg" style="width:80px;height:80px" class="cb-round-borders-10 text-center">
		  			<span class="absolute-bottom cb-font-10 q-py-xs" style="background:linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7));">{{ cui.category }}</span>
		  		</q-img>
		  	</q-tab>	
	  		<q-tab ></q-tab>
	  		<q-tab ></q-tab>
	  	</q-tabs>
		</q-card>
	</q-header>
	<q-page-container>
	  <q-page class="bg-orange-1 q-px-md">
	  	<div id="loader2" class="pre-loader" style="display:none"></div>
			<div class="row q-py-xs">
				<div class="col-12 row q-pt-sm" v-for="rest in restaurants" @click="screen_redirection(rest.client_id)">
					<div class="col-3 column justify-end items-center">
						<q-avatar square class="cb-round-borders-10 bg-white" size="70px">
							<q-avatar square size="50px">
								<q-img :src="rest.rest_image"></q-img>
							</q-avatar>
							 <q-badge floating style="background: transparent;width:15px;height:10px">
							 	<img :src="rest.rest_badge" style="width:100%;height:100%">
							 </q-badge>
						</q-avatar>
					</div>
					<div class="col-9 q-pa-xs text-grey-8">
						<div class="full-width cb-font-14 text-bold" style="white-space: nowrap;overflow: hidden;">
							{{ rest.rest_name }} <span class="cb-font-10 q-pl-sm">-&nbsp;&nbsp; {{ rest.rest_address }}</span>
						</div>
						<div class="full-width cb-font-14 " style="white-space:nowrap;overflow:hidden;">
							{{ rest.rest_serves }}
						</div>
						<div class="full-width q-px-sm">
							<q-icon name="star" size="xs"></q-icon>
							<span class="cb-font-16 text-bold q-px-xs">{{ rest.rest_rating }}</span> 
							<q-icon name="currency_rupee" class="q-pl-md"></q-icon><span class="cb-font-12">{{ rest.rest_avg_price }}</span> 
						</div>
					</div>
					<hr style="border:1px dashed orange" class="full-width">
				</div>	
			</div>

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
    	select_veg:ref(false),
    	access_token:ref(null),
			xid:ref(null),
			heading1_img:ref(null),
			heading1:ref(null),
			heading2_img:ref(null),
			heading2:ref(null),
			no_item_found_title:ref(null),
			no_item_found_message:ref(null),
			no_item_found_image:ref(null),
			active_category:ref(null),
			cuisins:ref(null),
			restaurant_data:ref(null),
			restaurants:ref(null),
			selected_cuisin:ref(null),
	  }
  },
  mounted() {
  	this.getToken();
  	// uncomment this  functions when you move to live
  	this.get_all_restarent();

  	// comment this functions when you move to live
  	// this.loaddata();
  },
  methods: {
  	loaddata(){
  		var ps = this;
	   	ps.heading1_img= "https://stackroger.com/public/uploads/food/icons/popular_picks.png";
			ps.heading1= "Select Cuisine";
  		ps.heading2_img= "https://stackroger.com/public/uploads/food/icons/superman.png";
  		ps.heading2= "Kitchens";
  		ps.no_item_found_title= "Sorry!!";
  		ps.no_item_found_message= "There are no restaurants serving this category near you.";
  		ps.no_item_found_image= "https://stackroger.com/public/uploads/food/icons/no_item_found.png";
  		ps.active_category= {
										        "category_id": 3,
										        "category": "Dinner",
										        "status": 1,
										        "image": "https://chotabeta.app/dev/testenv/public/uploads/food/categories/Dinner.png",
										        "redirection": 1,
										        "creared_at": "2021-09-30 14:51:13",
										        "updated_at": "2021-09-30 14:51:13"
										    	};
  		ps.cuisins= [
						        {
						            "category": "All",
						            "cuisine_image": "https://stackroger.com/public/uploads/food/categories/all.png",
						            "active": 1
						        },
						        {
						            "category": "Beverages",
						            "cuisine_image": "https://stackroger.com/public/uploads/food/categories/beverages.png",
						            "active": 0
						        },
						        {
						            "category": "Biryani",
						            "cuisine_image": "https://stackroger.com/public/uploads/food/categories/briyani.png",
						            "active": 0
						        },
						        {
						            "category": "Chinese",
						            "cuisine_image": "https://stackroger.com/public/uploads/food/categories/Chinese.png",
						            "active": 0
						        },
						        {
						            "category": "Continental",
						            "cuisine_image": "https://stackroger.com/public/uploads/food/categories/continental.png",
						            "active": 0
						        },
						        {
						            "category": "Desserts",
						            "cuisine_image": "https://stackroger.com/public/uploads/food/categories/desserts.png",
						            "active": 0
						        },
						        {
						            "category": "Middle Eastern",
						            "cuisine_image": "https://stackroger.com/public/uploads/food/categories/middle_eastern.png",
						            "active": 0
						        },
						        {
						            "category": "North Indian",
						            "cuisine_image": "https://stackroger.com/public/uploads/food/categories/northindian.png",
						            "active": 0
						        },
						        {
						            "category": "South Indian",
						            "cuisine_image": "https://stackroger.com/public/uploads/food/categories/southindian.png",
						            "active": 0
						        }
						    ];
  		ps.restaurant_data= [
								        {
							            "client_id": 1,
							            "rest_name": "Homes Kitchen",
							            "rest_address": "Attapur",
							            "rest_image": "https://stackroger.com/public/uploads/food/restaurants/home_kitchen.png",
							            "rest_serves": "Starters | Main Course | Breakfast",
							            "rest_rating": "4.0",
							            "rest_avg_price": "320 for two",
							            "rest_offer": "",
							            "rest_badge": "https://stackroger.com/public/uploads/food/badges/badge1.png",
							            "pure_veg": 1,
							            "redirection": 2,
							            "cuisines_array": "['All','South Indian','North Indian,'Chinese','Continental','Middle Eastern']"
								        },
								        {
							            "client_id": 5,
							            "rest_name": "Mummy Ki Rassoi Express",
							            "rest_address": "Hafeezpet",
							            "rest_image": "https://stackroger.com/public/uploads/food/restaurants/mummy_rasoi_new.png",
							            "rest_serves": "North Indian | South Indian |Home Food",
							            "rest_rating": "4.4",
							            "rest_avg_price": "150 for two",
							            "rest_offer": "",
							            "rest_badge": "",
							            "pure_veg": 0,
							            "redirection": 3,
							            "cuisines_array": "['All','South Indian','North Indian,'Chinese','Biryani','Sandwich','Pickles','Snacks','Sides','Desserts','Beverages']"
								        }
								    	];
			ps.check_pure_veg();
   		ps.cuisins.forEach(cu=>{
   			if(cu.active == 1){
   				ps.selected_cuisin = cu.category; 
   			}
   		})
   		ps.check_cuisins();
  	},
  	getToken(){
  		var ps = this;
  		if(ps.$store.state.token){ ps.access_token = ps.$store.state.token; }
      else{ ps.access_token = ps.$store.state.token_cb; }
      if(ps.$store.state.xid){ps.xid = ps.$store.state.xid;}
  		else{ps.xid = ps.$store.state.xid_cb;}
      if(ps.access_token == null ||  !ps.access_token){ ps.$router.push('/'); }
  	},
  	get_all_restarent(){
  		var ps = this;
  		let config = { headers: { "Authorization": `Bearer ${ps.access_token}`,}};
  		var loader = document.getElementById('loader2');
	    loader.style.display="block";
	    let formData = new FormData;
	    formData.append("lat_lng", ps.$store.state.latlongs);
	    // formData.append("cat_id", localStorage.getItem('food_category_id'));
	    formData.append("cat_id", ps.$route.query.cat_id);
      ps.$api.post('/api/get-categorywise-restaurants',formData,config).then(function (response) {
      	loader.style.display="none";
      	console.log(response,"response");
    		ps.heading1_img = response.data.heading1_img;
				ps.heading1 = response.data.heading1;
				ps.heading2_img = response.data.heading2_img;
				ps.heading2 = response.data.heading2;
				ps.no_item_found_title = response.data.no_item_found_title;
				ps.no_item_found_message = response.data.no_item_found_message;
				ps.no_item_found_image = response.data.no_item_found_image;
				ps.active_category = response.data.active_category;
				ps.cuisins = response.data.cuisins;
				ps.restaurant_data = response.data.restaurants;
     		ps.check_pure_veg();
     		ps.cuisins.forEach(cu=>{
     			if(cu.active == 1){
     				ps.selected_cuisin = cu.category; 
     			}
     		})
     		ps.check_cuisins();
      }).catch(function (error) {
      	console.log(error);
      });
  	},
  	check_pure_veg(){
  		var ps =  this;
  		ps.cuisins.forEach(cu=>{
   			if(cu.active == 1){ ps.selected_cuisin = cu.category; }
   		});
  		ps.restaurants = ps.restaurant_data.filter(rest =>{
  			if(ps.select_veg == true){
  				if(rest.pure_veg == 1){	return rest;	}
  			}else{	return rest;}
  		});
  	},
  	check_cuisins(selected,i){
  		var ps = this;
  		ps.selected_tab = "T0";
  		if(selected != null){
  			ps.selected_cuisin = selected;
  			// ps.tab_place_set(i);
  		}
  		ps.select_veg = false;
  		ps.restaurants = [];
  		ps.restaurant_data.filter(rest =>{
  			var cuisins =  rest.cuisines_array.replace('[','');
  			var cuisins1 =  cuisins.replace(']','');
  			var cuisins2 = cuisins1.split(',');
  			cuisins2.forEach(cus=>{
  				var cu = cus.replace("'","");
  				var cu1 = cu.replace("'","");
  				if(cu1 == ps.selected_cuisin){
  					ps.restaurants.push(rest);
  				}
  			})
  		});
  		
  	},
  	screen_redirection(id){
  		var ps = this;
  		// localStorage.setItem('food_client_id',id);
  		ps.$router.push('food-restarent?rest_id='+id);
  	},
  	// tab_place_set(selected_tab){
  	// 	var ps = this;
  	// 	var tab = document.getElementById(selected_tab);
  	// 	console.log(tab);
  	// 	tab.style.marginLeft = ((screen.width/2))+'px';

  	// },
  },
};
</script>
<style scoped>
	.coupon-wrap{ flex-wrap: nowrap;overflow: scroll;overflow-y: hidden; }
	::-webkit-scrollbar { width: 0;background: transparent; }
	::-webkit-scrollbar-thumb {background: transparent;}
	.selected_class{ transform-origin:center; transition: 0.3s; transform: scale(1.2);}
	.unselected_class{ transform-origin:center; transform: scale(0.9);}
</style>
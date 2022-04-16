<template>
<q-layout view="lHh lpr lFf">
	<q-header class="cb-bg-orange-8 q-py-xs">
	  <q-toolbar>
	 	<q-btn icon="arrow_back_ios" flat></q-btn>
	      <q-space></q-space>
			<q-btn icon="shopping_cart" flat @click="$router.push('food-cart')">
		      <q-badge rounded floating  class="bg-white text-black">{{ NoOfItemsInCart }}</q-badge>
			</q-btn>
	  </q-toolbar>
	</q-header>
	<q-page-container>
	  <q-page class="cb-bg-orange-8">
	  	<div id="loader2" class="pre-loader" style="display:none"></div>
			<div class="row q-px-md">
		    <div class="col-12">
			  	<q-img :src="header[0].image" class="text-white" v-if="header != null"></q-img>
			  </div>
			</div>
		 	<q-card style="border-radius: 30px 30px 0px 0px;box-shadow:0px -0px 3px 0px grey;" class="q-pt-sm q-px-sm bg-orange-1">
		 	<!-- combos -->
			  <q-card-section class="q-px-none q-pb-none">
					<div class="row coupon-wrap">
					  <div class="col-7 q-pa-xs" v-for="combo in subscriptions" v-if="subscriptions != null">
							<img :src="combo.image" class="cb-round-borders-10 shadow-1" style="width:240px;height:240px">
					  </div>
					</div>
			  </q-card-section>

			<!-- speical offers -->
			  <q-card-section class="q-pa-none">
					<div class="row items-center">
						<q-avatar size="35px" square> 
							<img :src="heading2_img">
						</q-avatar>
						<span class="text-brown cb-font-16 text-weight-bolder q-px-sm">{{ heading2 }}</span>
					</div>
					<div class="row coupon-wrap q-py-sm ">
					  <div class="col-7 q-pa-xs q-pt-md" v-for="offer in special_offers" v-if="special_offers != null">
							<div   :id=offer.id :class="[dynamic(offer.code),'full-width cb-round-borders-20 bg-white row']" @click="screen_redirection(offer.client_id)">
							  <div class="col-8 q-pa-sm">
							  	<span class="cb-font-16">{{ offer.code }}</span><br>
							  	<span>{{ offer.name }}</span>
							  </div>
							  <div class="col-4 q-pr-s">
							  	<q-img :src="offer.image" style="margin-top:-20px;"></q-img>
							  </div>
							</div>
					  </div>
					</div>
			  </q-card-section>

			<!-- pick your choice -->
			  <q-card-section class="q-pa-none">
					<div class="row items-center">
						<q-avatar size="35px" square>
					  	<img src="heading1_img">
					  </q-avatar>
						<span class="text-brown cb-font-16 text-weight-bolder q-px-sm">{{ heading1 }}</span>
					</div>
					<div class="row coupon-wrap q-py-sm" v-if="categories != null">

					  <div class="col-4 q-pa-sm q-pt-md" @click="screen_redirection_all(categories[0].category_id)">
							<div style="height:110px;overflow:hidden" class="full-width cb-round-borders-20 bg-white row">
							  <div class="col-12 q-pa-sm text-center bg-blue-9" style="height:70px">
							  	<span class="cb-font-16 text-white">{{ categories[0].category }}</span>
							  </div>
							  <div class="col-12 text-center q-pb-sm">
							  	<q-img :src="categories[0].image" style="margin-top:-30px;width:70%;"></q-img>
							  </div>
							</div>
					  </div>

					  <div class="col-4 q-pa-sm q-pt-md" @click="screen_redirection_all(categories[1].category_id)">
						<div style="height:110px;overflow:hidden" class="full-width cb-round-borders-20 bg-white row">
						  <div class="col-12 q-pa-sm text-center bg-orange-8" style="height:70px">
						  	<span class="cb-font-16 text-white">{{ categories[1].category }}</span>
						  </div>
						  <div class="col-12 text-center q-pb-sm">
						  	<q-img :src="categories[1].image" style="margin-top:-30px;width:70%;"></q-img>
						  </div>
						</div>
					  </div>

					  <div class="col-4 q-pa-sm q-pt-md" @click="screen_redirection_all(categories[2].category_id)">
						<div style="height:110px;overflow:hidden" class="full-width cb-round-borders-20 bg-white row">
						  <div class="col-12 q-pa-sm text-center bg-green-6" style="height:70px">
						  	<span class="cb-font-16 text-white">{{ categories[2].category }}</span>
						  </div>
						  <div class="col-12 text-center q-pb-sm">
						  	<q-img :src="categories[2].image" style="margin-top:-30px;width:70%;"></q-img>
						  </div>
						</div>
					  </div>
					</div>
			  </q-card-section>

			<!-- select kichen -->
			  <q-card-section class="cb-bg-orange-8 cb-round-borders-20 text-white q-pb-none">
					<div class="row items-center">
						<span class="cb-font-16">{{ heading4 }}</span>
					</div>
					<div class="row coupon-wrap">
					  <div class="col-4 q-px-sm q-pt-md text-center" v-for="rest in restaurants" @click="screen_redirection(rest.id)" v-if="restaurants != null">
					  	<q-avatar size="85px" class="bg-white q-mb-sm">
		   			  	  <q-avatar size="70px">
						    <q-img :src="rest.rest_img" class="full-width"></q-img>
				 	      </q-avatar>
				 	  	</q-avatar>
				 	  	<br>
				 	  	<span class="q-py-sm">{{ rest.name }}</span>
					  </div>
					</div>
			  </q-card-section>

			<!-- best sellers -->
			  <q-card-section class="q-pa-none q-pt-md">
					<div class="row items-center">
						<q-avatar size="35px" square>
					  	<img :src="heading3_img">
					  </q-avatar>
					  <span class="text-brown cb-font-16 text-weight-bolder q-px-sm">{{ heading3 }}</span>
					</div>
					<div class="row coupon-wrap">
					  <div class="col-5 q-pa-xs" v-for="bs in best_sellers" v-if="best_sellers != null">
					  	<q-img :src="bs.best_seller_image" class="cb-round-borders-10 text-center text-white full-width full-height"  @click="screen_redirection(bs.client_id)">
					  		<p class="cb-font-16 q-pt-sm text-bold" style="height:50px;overflow:hidden">{{bs.rest_name}}</p>
						  	<p>{{bs.name}}</p>
					  	</q-img>
						</div>
					</div>
			  </q-card-section>

			<!-- popular pick for you  -->
			  <q-card-section class="q-pt-none">
			  	<div class="row items-center">
			  		<q-avatar size="35px" square>
				  		<img :src="heading5_img">
				  	</q-avatar>
			  		<span class="text-brown cb-font-16 text-weight-bolder">{{ heading5 }}</span>
			  	</div>
			  	<div class="row">
			  	  <div class="col-12 q-py-sm" v-for="i in popular_picks" v-if="popular_picks != null">
			  	  	<div class="row" @click="screen_redirection(i.client_id)">
			  	  	  <div class="col-9 text-grey-8 q-pr-sm">
					  	  	<span class="text-bold">{{ i.name }}</span><br>
					  	  	<span class=" ">{{ i.info }}</span><br>
					  	  	<div class="row items-center">
						  	  	<span class="cb-font-16"><q-icon name="currency_rupee"></q-icon>{{ i.mrp }} </span>&nbsp;
						  	  	<span>| serve-{{ i.serving }}</span>
						  	  </div>
					  	  </div>
					  	  <div class="col-3 column justify-center items-center">
					  	  	<q-avatar square size="90px">
					  	  		<img :src="i.cuisine_image" class="cb-round-borders-10" width="100%">
					  	  	</q-avatar>
					  	  </div>
			  	  	</div>
			  	  	<hr style="border:1px dashed orange;">
			  	  </div>
			  	</div>
			  </q-card-section>
		  </q-card>
		
			<div v-if="footer != null">
				<img :src="footer[0].image" style="height: 150px" class="full-width">
			</div>

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
    	heading1_img:ref(null),
			heading1:ref(null),
			heading2_img:ref(null),
			heading2:ref(null),
			heading3_img:ref(null),
			heading3:ref(null),
			heading4_img:ref(null),
			heading4:ref(null),
			heading5_img:ref(null),
			heading5:ref(null),
			header:ref(null),
			categories:ref(null),
			special_offers:ref(null),
			subscriptions:ref(null),
			best_sellers:ref(null),
			restaurants:ref(null),
			popular_picks:ref(null),
			footer:ref(null), 
			NoOfItemsInCart:ref(0),     
    }
  },
  mounted() {
  	this.getToken();
  	this.MyFoodCart_function();
  	// comment this two functions when you move to live
  	this.Food_dashborad_data();

  	// comment this functions when you move to live
  	// this.loaddata();
  },
  methods: {
  	loaddata(){
  		var ps = this;
  		ps.heading1_img= "https://stackroger.com/public/uploads/food/icons/pick_your_choice.png";
  		ps.heading1= "Pick Your Choice";
  		ps.heading2_img= "https://stackroger.com/public/uploads/food/icons/special_offers.png";
  		ps.heading2= "Special Offers";
  		ps.heading3_img= "https://stackroger.com/public/uploads/food/icons/best_sellers.png";
  		ps.heading3= "Best Sellers";
  		ps.heading4_img= "https://stackroger.com/public/uploads/food/icons/pick_your_choice.png";
  		ps.heading4= "Select Kitchens";
  		ps.heading5_img= "https://stackroger.com/public/uploads/food/icons/popular_picks.png";
  		ps.heading5= "Popular Picks For You";
  		ps.header= [{"id": 1,"image": "https://stackroger.com/public/uploads/food/sliders/header_new.png","redirection": 0}];
    	ps.categories=[
							        {
							            "category_id": 1,
							            "category": "Tiffins",
							            "status": 1,
							            "image": "https://chotabeta.app/dev/testenv/public/uploads/food/categories/Breakfast.png",
							            "redirection": 1,
							            "creared_at": "2021-09-30 14:51:13",
							            "updated_at": "2021-09-30 14:51:13"
							        },
							        {
							            "category_id": 2,
							            "category": "Lunch",
							            "status": 1,
							            "image": "https://chotabeta.app/dev/testenv/public/uploads/food/categories/Lunch.png",
							            "redirection": 1,
							            "creared_at": "2021-09-30 14:51:13",
							            "updated_at": "2021-09-30 14:51:13"
							        },
							        {
							            "category_id": 3,
							            "category": "Dinner",
							            "status": 1,
							            "image": "https://chotabeta.app/dev/testenv/public/uploads/food/categories/Dinner.png",
							            "redirection": 1,
							            "creared_at": "2021-09-30 14:51:13",
							            "updated_at": "2021-09-30 14:51:13"
							        }
							    ];
  		ps.special_offers= [
								        	{
								            "id": 1,
								            "name": "Tiffin's & Lunch",
								            "code": "10% OFF",
								            "type": null,
								            "coupon_discount_type": null,
								            "percent": "10",
								            "value": "50",
								            "description": null,
								            "category_id": 2,
								            "sub_category_id": 1,
								            "client_id": 1,
								            "image": "https://chotabeta.app/dev/testenv/public/uploads/food/offers/coupon1.png",
								            "status": 1,
								            "redirection": 3,
								            "color_code": "#FF0000",
								            "created_at": "2021-09-23 18:26:59",
								            "updated_at": "2021-09-23 18:26:59"
								        	},
								        	{
								            "id": 2,
								            "name": "Tiffin's & Lunch",
								            "code": "10% OFF",
								            "type": null,
								            "coupon_discount_type": null,
								            "percent": "10",
								            "value": "50",
								            "description": null,
								            "category_id": 2,
								            "sub_category_id": 1,
								            "client_id": 1,
								            "image": "https://chotabeta.app/dev/testenv/public/uploads/food/offers/coupon1.png",
								            "status": 1,
								            "redirection": 3,
								            "color_code": "#83AA89",
								            "created_at": "2021-09-23 18:26:59",
								            "updated_at": "2021-09-23 18:26:59"
								        	},
								        	{
								            "id": 3,
								            "name": "Tiffin's & Lunch",
								            "code": "10% OFF",
								            "type": null,
								            "coupon_discount_type": null,
								            "percent": "10",
								            "value": "50",
								            "description": null,
								            "category_id": 2,
								            "sub_category_id": 1,
								            "client_id": 1,
								            "image": "https://chotabeta.app/dev/testenv/public/uploads/food/offers/coupon1.png",
								            "status": 1,
								            "redirection": 3,
								            "color_code": "	#0000FF",
								            "created_at": "2021-09-23 18:26:59",
								            "updated_at": "2021-09-23 18:26:59"
								        	}
  												];
  		ps.subscriptions= [
								        	{
								            "id": 9,
								            "image": "https://stackroger.com/public/uploads/assets/homefood012022.png",
								            "status": 1,
								            "client_id": 3,
								            "redirection": 0,
								            "sort_order": 0,
								            "category_id": 2,
								            "sub_category_id": 2,
								            "subscrption_slider": 1,
								            "header_status": 0,
								            "footer_status": 0,
								            "menu_slider_status": 0,
								            "month": 1,
								            "day": 20,
								            "created_at": "2021-09-23 18:24:10",
								            "updated_at": "2021-09-23 18:24:10"
								        	}
									    	];
  		ps.best_sellers= [
							        	{
							            "id": 7,
							            "name": "Pindari's Chicken Ghee Roast",
							            "info": "Chicken Roasted With Dadima's Secret Ingredients & Ghee. ",
							            "weight_description": "1",
							            "sku": "BB0101",
							            "mrp": 249,
							            "selling_price": 249,
							            "client_id": 3,
							            "active": 1,
							            "category_id": 1,
							            "sub_category_id": 0,
							            "cuisine_name": "South Indian",
							            "cuisine_image": "https://stackroger.com/public/uploads/food/categories/southindian.png",
							            "image": "",
							            "item_status": 0,
							            "popular_pick": 0,
							            "schedule_status": 1,
							            "best_seller_status": 1,
							            "best_seller_title": "",
							            "best_seller_description": "",
							            "best_seller_image": "https://stackroger.com/public/uploads/food/items/3/chicken_ghee_roast.png",
							            "redirection": 3,
							            "serving": "1",
							            "pure_veg": 0,
							            "serving_times": "[{\"name\":\"Lunch\",\"start\":\"12:00\",\"end\":\"15:00\"},{\"name\":\"Dinner\",\"start\":\"19:00\",\"end\":\"22:00\"}]",
							            "updated_at": "2021-12-10 10:58:01.512415",
							            "created_at": "2021-09-29 16:01:29.000000",
							            "category": "Tiffins",
							            "sub_category": "",
							            "rest_name": "Bahubelly Kitchen"
							        	},
							        	{
							            "id": 70,
							            "name": "Dal Makhni Combo",
							            "info": "dal makhni+2 lachha paratha+thums up(250m)",
							            "weight_description": "1",
							            "sku": "MR0204",
							            "mrp": 220,
							            "selling_price": 220,
							            "client_id": 5,
							            "active": 1,
							            "category_id": 2,
							            "sub_category_id": 0,
							            "cuisine_name": "North Indian",
							            "cuisine_image": "https://stackroger.com/public/uploads/food/categories/northindian.png",
							            "image": "",
							            "item_status": 0,
							            "popular_pick": 0,
							            "schedule_status": 1,
							            "best_seller_status": 1,
							            "best_seller_title": "",
							            "best_seller_description": "Enjoy the taste of this amazing dish prepared with the same love as at home.",
							            "best_seller_image": "https://stackroger.com/public/uploads/food/items/5/dal_makhni_combo.png",
							            "redirection": 3,
							            "serving": "1",
							            "pure_veg": 1,
							            "serving_times": "[{\"name\":\"Time\",\"start\":\"11:00\",\"end\":\"23:00\"}]",
							            "updated_at": "2021-12-10 10:58:20.484977",
							            "created_at": "2021-09-18 13:30:23.763180",
							            "category": "Meal Box",
							            "sub_category": "",
							            "rest_name": "Mummy Ki Rassoi Express"
							        	}
							    		];
  		ps.restaurants=[
						        	{
						            "id": 1,
						            "name": "Homes Kitchen",
						            "address": "Attapur",
						            "full_address": "3-4-174/AF/103, Ambience Fort, Radha Krishna Nagar, Attapur, Telangana 500048",
						            "city": "HYDERABAD",
						            "mobile": "9703838828",
						            "email": "homeskitchen@chotabeta.com",
						            "password": "$2y$10$yCuaOMI0HXP5GHkLNrw.FOK/zfBNg9bFoqaOdLBnMfWeBn4W7s7PS",
						            "role_code": 618,
						            "active": 1,
						            "licence_no": "13621015000053",
						            "pure_veg": 1,
						            "image": "https://stackroger.com/public/uploads/food/restaurants/home_kitchen_logo.png",
						            "rest_img": "https://stackroger.com/public/uploads/food/restaurants/home_kitchen.png",
						            "operational_hours": "7:00,23:00",
						            "redirection": 2,
						            "offer": "",
						            "badge": "https://stackroger.com/public/uploads/food/badges/badge1.png",
						            "serves": "Starters | Main Course | Breakfast",
						            "rating": "4.0",
						            "rating_count": 26,
						            "avg_price": "320 for two",
						            "lat_lng": "17.37165215974965,78.42503394902089",
						            "timing_array": "5,6,7,8,9,10,11,12,13,14,15,16,17,18",
						            "show_text": "[{\"time\":\"7,8,9\",\"id\":\"2\",\"text\":\"pre order for lunch upto 7am to 9am | delivered by 1pm \"},{\"time\":\"10,11,12,13,14,15,16,17\",\"id\":\"3\",\"text\":\"pre order for dinner upto 3pm to 5pm| delivered by 8 pm\"}]",
						            "cuisines_array": "['All','South Indian','North Indian,'Chinese','Continental','Middle Eastern']",
						            "updated_at": "2022-02-08 10:55:26",
						            "created_at": "2021-09-18 11:59:43"
						        	},
						        	{
						            "id": 3,
						            "name": "Bahubelly Kitchen",
						            "address": "Secunderabad",
						            "full_address": "Lions Town Colony, Hasmathpet, Bowenpally, Secunderabad, Telangana 500011",
						            "city": "Secunderabad",
						            "mobile": "6301135085",
						            "email": "Bahubelly@chotabeta.com",
						            "password": "$2y$10$ZGZfHom2TchPwxb8ytA7iO5p4LxdTU2vdERDVBQmEyQyrNjFyE1p6",
						            "role_code": 618,
						            "active": 1,
						            "licence_no": "---",
						            "pure_veg": 0,
						            "image": "https://stackroger.com/public/uploads/food/restaurants/bahubelly_new.png",
						            "rest_img": "https://stackroger.com/public/uploads/food/restaurants/bahubelly_new.png",
						            "operational_hours": "7:00,23:00",
						            "redirection": 3,
						            "offer": "",
						            "badge": "",
						            "serves": "Biryani | North Indian | Dinner",
						            "rating": "4.5",
						            "rating_count": 5,
						            "avg_price": "350 for two",
						            "lat_lng": "17.477811091500577,78.48689816177996",
						            "timing_array": "7,8,9,10,11,12,13,14,15,16,17",
						            "show_text": "[{\"time\":\"7,8,9\",\"id\":\"2\",\"text\":\"pre order for lunch upto 7am to 9am | delivered by 1pm \"},{\"time\":\"10,11,12,13,14,15,16,17\",\"id\":\"3\",\"text\":\"pre order for dinner upto 3pm to 5pm| delivered by 8 pm\"}]",
						            "cuisines_array": "['All','South Indian','North Indian,'Middle Eastern','Continental','Biryani','Desserts','Beverages']",
						            "updated_at": "2022-02-22 10:25:12",
						            "created_at": "2021-09-18 11:59:43"
						        	},
						        	{
						            "id": 5,
						            "name": "Mummy Ki Rassoi Express",
						            "address": "Hafeezpet",
						            "full_address": "PLOT NO 83,SCB NAGAR, New Hafeezpet, Hafeezpet, Telangana 500084",
						            "city": "HYDERABAD",
						            "mobile": "8019112034",
						            "email": "MummyKiRassoiExpress@chotabeta.com",
						            "password": "$2y$10$ZGZfHom2TchPwxb8ytA7iO5p4LxdTU2vdERDVBQmEyQyrNjFyE1p6",
						            "role_code": 618,
						            "active": 1,
						            "licence_no": "23621028000326",
						            "pure_veg": 0,
						            "image": "https://stackroger.com/public/uploads/food/restaurants/mummy_rasoi_new.png",
						            "rest_img": "https://stackroger.com/public/uploads/food/restaurants/mummy_rasoi_new.png",
						            "operational_hours": "11:00,23:00",
						            "redirection": 3,
						            "offer": "",
						            "badge": "",
						            "serves": "North Indian | South Indian |Home Food",
						            "rating": "4.4",
						            "rating_count": 22,
						            "avg_price": "150 for two",
						            "lat_lng": "17.4775597,78.3628895",
						            "timing_array": "11,12,13,14,15,16,17,18,19,20,21,22",
						            "show_text": "[{\"time\":\"11,12,13,14,15,16\",\"id\":\"2\",\"text\":\"Order will be delivered within 2 hours\"},{\"time\":\"17,18,19,20,21,22\",\"id\":\"3\",\"text\":\"Order will be delivered within 2 hours\"}]",
						            "cuisines_array": "['All','South Indian','North Indian,'Chinese','Biryani','Sandwich','Pickles','Snacks','Sides','Desserts','Beverages']",
						            "updated_at": "2022-03-03 20:05:41",
						            "created_at": "2021-09-18 11:59:43"
						        	}
						    		];
  		ps.popular_picks=[
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
								            "rest_name": "Homes Kitchen",
								            "category": "Meal Box",
								            "sub_category": ""
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
								            "rest_name": "Homes Kitchen",
								            "category": "Meal Box",
								            "sub_category": ""
								        },
								        {
								            "id": 6,
								            "name": "Sambar Rice",
								            "info": "",
								            "weight_description": "1",
								            "sku": "HK01D02",
								            "mrp": 95,
								            "selling_price": 95,
								            "client_id": 1,
								            "active": 1,
								            "category_id": 3,
								            "sub_category_id": 0,
								            "cuisine_name": "South Indian",
								            "cuisine_image": "https://stackroger.com/public/uploads/food/categories/southindian.png",
								            "image": "https://stackroger.com/public/uploads/food/items/1/2x/HK01D02.png",
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
								            "updated_at": "2021-12-16 11:34:12.391647",
								            "created_at": "2021-09-18 13:30:23.763180",
								            "rest_name": "Homes Kitchen",
								            "category": "Rice Bowls",
								            "sub_category": ""
								        },
								        {
								            "id": 8,
								            "name": "Pindari's Mutton Ghee Roast",
								            "info": "Mutton Roasted With Dadima's Secret Ingredients & Ghee.",
								            "weight_description": "1",
								            "sku": "BB0102",
								            "mrp": 399,
								            "selling_price": 399,
								            "client_id": 3,
								            "active": 1,
								            "category_id": 1,
								            "sub_category_id": 0,
								            "cuisine_name": "South Indian",
								            "cuisine_image": "https://stackroger.com/public/uploads/food/categories/southindian.png",
								            "image": "",
								            "item_status": 0,
								            "popular_pick": 1,
								            "schedule_status": 1,
								            "best_seller_status": 0,
								            "best_seller_title": null,
								            "best_seller_description": null,
								            "best_seller_image": null,
								            "redirection": 3,
								            "serving": "1",
								            "pure_veg": 0,
								            "serving_times": "[{\"name\":\"Lunch\",\"start\":\"12:00\",\"end\":\"15:00\"},{\"name\":\"Dinner\",\"start\":\"19:00\",\"end\":\"22:00\"}]",
								            "updated_at": "2021-12-10 10:58:04.542441",
								            "created_at": "2021-09-29 16:01:29.000000",
								            "rest_name": "Bahubelly Kitchen",
								            "category": "Tiffins",
								            "sub_category": ""
								        },
								        {
								            "id": 10,
								            "name": "Katappa Veg Gyro",
								            "info": "Greek wrap filled with mild crunchy paneer and loaded with traditional sauces and spices.",
								            "weight_description": "1",
								            "sku": "BB0202",
								            "mrp": 125,
								            "selling_price": 125,
								            "client_id": 3,
								            "active": 1,
								            "category_id": 2,
								            "sub_category_id": 0,
								            "cuisine_name": "Middle Eastern",
								            "cuisine_image": "https://stackroger.com/public/uploads/food/categories/middle_eastern.png",
								            "image": "",
								            "item_status": 0,
								            "popular_pick": 1,
								            "schedule_status": 0,
								            "best_seller_status": 0,
								            "best_seller_title": null,
								            "best_seller_description": null,
								            "best_seller_image": null,
								            "redirection": 3,
								            "serving": "1",
								            "pure_veg": 1,
								            "serving_times": "[{\"name\":\"Lunch\",\"start\":\"12:00\",\"end\":\"15:00\"},{\"name\":\"Dinner\",\"start\":\"19:00\",\"end\":\"22:00\"}]",
								            "updated_at": "2021-11-18 13:09:12.821724",
								            "created_at": "2021-09-29 16:01:29.000000",
								            "rest_name": "Bahubelly Kitchen",
								            "category": "Meal Box",
								            "sub_category": ""
								        }
								    	];
 	 		ps.footer=[
					        	{
					            "id": 2,
					            "image": "https://stackroger.com/public/uploads/food/sliders/static_footer.png",
					            "redirection": 0
					        	}
    							];
  	},
  	getToken(){
  		var ps = this ;
  		if(ps.$store.state.token){ ps.access_token = ps.$store.state.token; }
      else{ ps.access_token = ps.$store.state.token_cb; }
      if(ps.$store.state.xid){ps.xid = ps.$store.state.xid;}
  		else{ps.xid = ps.$store.state.xid_cb;}
      if(ps.access_token == null ||  !ps.access_token){ ps.$router.push('/'); }
  	},
  	MyFoodCart_function(){
  		var ps=this;
  		if(localStorage.getItem('MyFoodCart')){
  			ps.MyFoodCart = JSON.parse(localStorage.getItem('MyFoodCart'));
  			ps.NoOfItemsInCart = ps.MyFoodCart.length;
  		}
  	},
  	Food_dashborad_data(){
  		var ps = this;
  		let config = { headers: { "Authorization": `Bearer ${ps.access_token}`,}};
  		var loader = document.getElementById('loader2');
	    loader.style.display="block";
      ps.$api.get('/api/get-food-dashboard-data?lat_lng='+ps.$store.state.latlongs+'&pincode='+ps.$store.state.pincode+'&xid='+ps.xid,config).then(function (response) {
      	loader.style.display="none";
      	// console.log(response,'response');
      	ps.heading1_img=response.data.heading1_img;
      	ps.heading1=response.data.heading1;
      	ps.heading2_img=response.data.heading2_img;
      	ps.heading2=response.data.heading2;
      	ps.heading3_img=response.data.heading3_img;
      	ps.heading3=response.data.heading3;
      	ps.heading4_img=response.data.heading4_img;
      	ps.heading4=response.data.heading4;
      	ps.heading5_img=response.data.heading5_img;
      	ps.heading5=response.data.heading5;
      	ps.header=response.data.header;
      	ps.categories=response.data.categories;
      	ps.special_offers=response.data.special_offers;
      	ps.subscriptions=response.data.subscriptions;
      	ps.best_sellers=response.data.best_sellers;
      	ps.restaurants=response.data.restaurants;
      	ps.popular_picks=response.data.popular_picks;
      	ps.footer=response.data.footer; 	
      }).catch(function (error) {
      	console.log(error);
      });
  	},
  	screen_redirection(id){
  		var ps = this;
  		// localStorage.setItem('food_client_id',id);
  		ps.$router.push('food-restarent?rest_id='+id);
  	},
  	screen_redirection_all(id){
  		var ps = this;
  		// localStorage.setItem('food_category_id',id);
  		ps.$router.push('all-restarents?cat_id='+id);
  	},
  	dynamic(code){
		  var ps = this;
			console.log(code,'code');
			var tid = setInterval( function () {
				if ( document.readyState !== 'complete' ){ return };
				clearInterval( tid );    
				ps.special_offers.forEach(element => {
					if(element.code == code){
						var id =  document.getElementById(element.id);
						id.style.color = element.color_code;
						id.style.border = '2px dashed'+element.color_code;
						id.style.fontWeight = "500" ;
					}
				});
			}, 100 );
		},
  },
};
</script>
<style scoped>
.coupon-wrap{ flex-wrap: nowrap;overflow: scroll;overflow-y: hidden; }
::-webkit-scrollbar { width: 0;background: transparent; }
::-webkit-scrollbar-thumb {background: transparent;}
</style>
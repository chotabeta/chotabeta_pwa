<template>
  <q-layout view="lHh lpr lFf">
	<q-header class="cb-bg-orange-8 q-pt-xs">
	  <q-toolbar>
	 	<q-btn icon="arrow_back_ios" flat @click="Screen_Back_Redirection()"></q-btn>
	      <q-space></q-space>
			<q-btn icon="shopping_cart" flat @click="$router.push('food-cart')">
		      <q-badge rounded floating  class="bg-white text-black">{{ NoOfItemsInCart }}</q-badge>
			</q-btn>
	  </q-toolbar>
	  <q-card style="border-radius: 30px 30px 0px 0px;" class="shadow-0 q-pt-sm q-px-sm bg-orange-1">
	 	  <q-card-section class="text-black" v-if="restaurant_details !=null">
			<div class="row items-center text-grey-9">
				<div class="col-2"> 
				  <q-avatar size="50px" font-size="40px">
				  	<img :src="restaurant_details.rest_img">
				  </q-avatar>
				</div>
			  	<div class="col-8 q-pa-xs">
			  		<span class="cb-font-16 text-bold">{{restaurant_details.name}}</span>
			  		<span class="cb-font-12 q-px-sm">-</span>
			  		<span class="cb-font-12">{{ restaurant_details.address }}</span>
			  	</div>
			  	<div class="col-2 text-right">{{ restaurant_details.rating }} <q-icon name="star" size="xs"></q-icon></div>
			</div>
			<div class="row items-center text-grey-9">
				<div class="col-2"> </div>
			  	<div class="col-10 q-pa-xs">fassi Lic:{{restaurant_details.licence_no}}</div>
			</div>
		  	<q-tabs v-model="type" indicator-color="transparent" inline-label align="justify" class="bg-white cb-round-borders-10 text-deep-orange-10 q-mt-xs" active-class="bg-deep-orange-10 cb-round-borders-10 text-white"  :breakpoint="0">
		  		<!-- UNCOMMENT THIS ONE WHEN YOU MOVE TO LIVE -->
		  		<q-tab name="menu" label="Menu" icon="book" @click="get_restarent()"></q-tab>
		  		<q-tab name="Subscription" label="Subscription" icon="person" @click="get_subscription_items()"></q-tab>

		  	</q-tabs>{{  type }}
		  	<div class="row">
		  		<q-toggle color="deep-orange" label="Non-Veg" v-model="selection" val="non-veg"></q-toggle>
			    <q-toggle color="green" label="Veg" v-model="selection" val="veg"></q-toggle>
		  	</div>
		  </q-card-section>
		</q-card>
	</q-header>
	<q-page-container class="animate__animated animate__slideInRight">
	  <q-page class="bg-orange-1 q-px-md q-pb-xl">
	  		<div id="loader2" class="pre-loader" style="display:none"></div>
				<div class="row q-py-sm" v-for="(me,index) in Menu" v-if="type== 'menu' && Menu != null" >
					<div class="col-12">
						<span class="cb-font-16 text-weight-bolder">{{ me.category }}</span><br>
						<span class="text-red cb-font-12">{{ me.cat_text }}</span>
					</div>

					<div class="col-12" v-for="(item,sub_index) in me.sub_categories[0].data">
						
						<span :id="'i'+index+'j'+sub_index+'l'">
							<div class="col-12 q-py-xs" >
								<div class="row">
								<div class="col-3 q-pa-xs" style="overflow: hidden;">
									<q-avatar square class="cb-round-borders-10 full-height full-width shadow-2">
										<img :src="item.image" class="fit">
									</q-avatar>
								</div>
								<div class="col-9 full-height bg-white cb-round-borders-10 q-pa-xs">
									<div class="row">
									<div class="col-10">
										<div class="full-width cb-font-14 text-bold" style="white-space: nowrap;overflow: hidden;">{{ item.name }}</div>
										<div class="full-width cb-font-12" style="overflow: hidden;height:34px">{{ item.info }} </div>
										<div class="full-width text-right cb-font-12 q-px-md text-deep-orange-10 text-weight-bolder">
											<span @click="more_function('i'+index+'j'+sub_index+'m','i'+index+'j'+sub_index+'l')">more</span>
										</div>
										<div class="full-width q-px-sm">
											<q-icon name="currency_rupee" size="xs"></q-icon><span class="cb-font-16 text-bold">{{ item.selling_price }}</span> 
											<span class="q-px-xs">|</span> serve-{{ item.serving }}
										</div>
									</div>
									<div class="col-2 q-py-sm  column justify-end items-center" v-if="item.no_of_qty == 0">
										<q-btn icon="shopping_cart" color="orange" dense @click="food_add_to_cart(item)"></q-btn>
									</div>
									<div class="col-2 column justify-end items-center" v-else>
										<div class="cb-round-borders-10 text-center bg-orange text-white">
											<q-btn icon="add" flat dense @click="food_add_to_cart_more(item)"></q-btn><br>
											<span class="text-bold">{{ item.no_of_qty }}</span><br>
											<q-btn icon="remove" flat dense @click="food_cart_item_remove(item)"></q-btn>
										</div>
									</div>
								</div>
								</div>
							</div>
							</div>	
						</span>

						<span :id="'i'+index+'j'+sub_index+'m'" style="display: none;">
							<div class="row cb-round-borders-10 bg-white q-pa-sm" >
								<div class="col-10">
									<span class="cb-font-14 text-bold">{{ item.name }}</span><br>
									<span class="cb-font-12">{{ item.info }}</span>
								</div>
								<div class="col-2 text-right">
									<q-avatar square size="50px" class="cb-round-borders-10">
										<q-img :src="item.image" class="fit"></q-img>
									</q-avatar>
								</div>
								<div class="col-10 row items-center">
									<q-icon name="currency_rupee" size="xs"></q-icon><span class="cb-font-16 text-bold">{{ item.selling_price }}</span> 
									<span class="q-px-xs">|</span> serve-{{ item.serving }}
									<q-space></q-space>
											<span @click="more_function('i'+index+'j'+sub_index+'l','i'+index+'j'+sub_index+'m')"
											class=" cb-font-12 q-px-md text-deep-orange-10 text-weight-bolder">less</span>
								</div>
								<div class="col-2 q-py-sm  column justify-end items-center" v-if="item.no_of_qty == 0">
									<q-btn icon="shopping_cart" color="orange" dense @click="food_add_to_cart(item)"></q-btn>
								</div>
								<div class="col-2 column justify-end items-center" v-else>
									<div class="cb-round-borders-10 text-center bg-orange text-white">
										<q-btn icon="add" flat dense @click="food_add_to_cart_more(item)"></q-btn><br>
										<span class="text-bold">{{ item.no_of_qty }}</span><br>
										<q-btn icon="remove" flat dense @click="food_cart_item_remove(item)"></q-btn>
									</div>
								</div>
							</div>
						</span>

					</div>
				</div>

				<div class="row q-py-sm" v-for="(sub,index) in subscription" v-if="type== 'Subscription' && subscription != null">
					<div class="col-12">
						<span class="cb-font-16 text-weight-bolder">{{ sub.category }}</span><br>
						<span class="text-red cb-font-12">{{ sub.cat_text }}</span>
					</div>

					<div class="col-12" v-for="(item,sub_index) in sub.sub_categories[0].data">

						<span :id="'i'+index+'j'+sub_index+'l'">
							<div class="col-12 q-py-xs" >
								<div class="row">
								<div class="col-3 q-pa-xs" style="overflow: hidden;">
									<q-avatar square class="cb-round-borders-10 full-height full-width shadow-2">
										<img :src="item.image" class="fit">
									</q-avatar>
								</div>
								<div class="col-9 full-height bg-white cb-round-borders-10 q-pa-xs">
									<div class="row">
									<div class="col-10">
										<div class="full-width cb-font-14 text-bold" style="white-space: nowrap;overflow: hidden;">{{ item.name }}</div>
										<div class="full-width cb-font-12" style="overflow: hidden;height:34px">{{ item.info }} </div>
										<div class="full-width text-right cb-font-12 q-px-md text-deep-orange-10 text-weight-bolder">
											<span @click="more_function('i'+index+'j'+sub_index+'m','i'+index+'j'+sub_index+'l')">more</span>
										</div>
										<div class="full-width q-px-sm">
											<q-icon name="currency_rupee" size="xs"></q-icon><span class="cb-font-16 text-bold">{{ item.selling_price }}</span> 
											<span class="q-px-xs">|</span> serve-{{ item.serving }}
										</div>
									</div>
									<div class="col-2 q-py-sm  column justify-end items-center">
										<q-btn icon="insert_invitation" color="orange" @click="$router.push('food-subscription?sku='+item.sku)" dense ></q-btn>
									</div>
								</div>
								</div>
							</div>
							</div>	
						</span>

						<span :id="'i'+index+'j'+sub_index+'m'" style="display: none;">
							<div class="row cb-round-borders-10 bg-white q-pa-sm" >
								<div class="col-10">
									<span class="cb-font-14 text-bold">{{ item.name }}</span><br>
									<span class="cb-font-12">{{ item.info }}</span>
								</div>
								<div class="col-2 text-right">
									<q-avatar square size="50px" class="cb-round-borders-10">
										<q-img :src="item.image" class="fit"></q-img>
									</q-avatar>
								</div>
								<div class="col-10 row items-center">
									<q-icon name="currency_rupee" size="xs"></q-icon><span class="cb-font-16 text-bold">{{ item.selling_price }}</span> 
									<span class="q-px-xs">|</span> serve-{{ item.serving }}
									<q-space></q-space>
											<span @click="more_function('i'+index+'j'+sub_index+'l','i'+index+'j'+sub_index+'m')"
											class=" cb-font-12 q-px-md text-deep-orange-10 text-weight-bolder">less</span>
								</div>
								<div class="col-2 q-py-sm  column justify-end items-center">
									<q-btn icon="insert_invitation" color="orange" @click="$router.push('food-subscription?sku='+item.sku)" dense ></q-btn>
								</div>
							</div>
						</span>

					</div>
				</div>

				<div class="bg-green-8 text-white row cb-round-borders-20 items-center q-px-md q-py-xs fixed-bottom q-ma-sm" v-if="NoOfItemsInCart != 0">
						<div class="col-6 cb-font-16 text-center">
							{{ NoOfItemsInCart }} items | 
							<q-icon name="currency_rupee"></q-icon>{{ MyCartItemsCost }}
						</div>
						<div class="col-6 text-center">
							<q-btn label="view cart" icon-right="shopping_cart" flat @click="$router.push('food-cart')"></q-btn>
						</div>
				</div>


				<q-dialog v-model="cart_key_message_dialog">
					<q-card class="cb-round-borders-20 q-py-md">
						<q-card-section class="text-center">
							<p class="text-h6 text-weight-bolder text-grey-10">{{ empty_cart_title }}</p>
							<p class="cb-font-16">{{ empty_cart_message }}</p>
							<q-btn label="clear" class="cb-bg-orange-8 q-px-xl text-white q-my-md" @click="clearcart_function()"></q-btn><br>
							<q-btn label="cancel" flat class="text-grey-8 cb-font-16" @click="cart_key_message_dialog = false"></q-btn>
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
    	type:ref('menu'),
    	selection:ref(true),
    	cart_item:ref(0),
    	no_item_found_title: ref(null),
    	no_item_found_message: ref(null),
    	no_item_found_image: ref(null),
    	qty_restriction: ref(null),
    	qty_restriction_message: ref(null),
    	subscription_status: ref(null),
    	restaurant_details: ref(null),
			menu_sliders: ref(),
			Menu: ref(null),
			subscription:ref(null),
			MyFoodCart:ref([]),
			NoOfItemsInCart:ref(0),
			MyCartItemsCost:ref(0),
			cart_key_message_dialog:ref(false),
			cart_key:ref(null),
			empty_cart_title:ref(null),
			empty_cart_message:ref(null)
    }
  },
  mounted() {
  	this.getToken();
  	this.mypath();
  	this.MyFoodCart_function();
  	// Uncomment this two functions when you move to live
  	this.get_restarent();
  	this.getcartkey();

  	// comment this two functions when you move to live
  	// this.loaddata();
  },
  methods: {
  	loaddata(){
  		var ps = this;
  		// getcartkey
			ps.cart_key= "1HK1011";
  		ps.empty_cart_title="Do you want clear cart?";
  		ps.empty_cart_message="Trying to add items from different restaurant, Please empty existing cart.";

  		//get_restarent
  			ps.no_item_found_title= "I could not find the item...";
		    ps.no_item_found_message= "We did not find any matches for the search you have made...";
    		ps.no_item_found_image= "https://stackroger.com/public/uploads/food/icons/no_item_found.png";
    		ps.qty_restriction= 5;
    		ps.qty_restriction_message= "Upto 5 qty can only be added to cart.";
    		ps.subscription_status= 1;
    		ps.restaurant_details= {
												        "id": 1,
												        "name": "Homes Kitchen",
												        "address": "Attapur",
												        "city": "HYDERABAD",
												        "rest_img": "https://stackroger.com/public/uploads/food/restaurants/home_kitchen.png",
												        "serves": "Starters | Main Course | Breakfast",
												        "rating": "4.0",
												        "timing_array": "5,6,7,8,9,10,11,12,13,14,15,16,17,18",
												        "show_text": "[{\"time\":\"7,8,9\",\"id\":\"2\",\"text\":\"pre order for lunch upto 7am to 9am | delivered by 1pm \"},{\"time\":\"10,11,12,13,14,15,16,17\",\"id\":\"3\",\"text\":\"pre order for dinner upto 3pm to 5pm| delivered by 8 pm\"}]",
												        "pure_veg": 1,
												        "licence_no": "13621015000053"
												    	};
    		ps.menu_sliders= [];
    		ps.Menu= [
					        {
					            "category": "Your Pick",
					            "cat_text": " Delivery Between 7 PM - 10 PM",
					            "est_delivery": null,
					            "serving_type": 2,
					            "sub_categories": [
					                {
					                    "sub_category": "",
					                    "data": [
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
					                            "status": 1,
					                            "cat_item_text": " Delivery Between 7 PM - 10 PM"
					                        }
					                    ]
					                }
					            ]
					        },
					        {
					            "category": "Meal Box",
					            "serving_type": 1,
					            "cat_text": " Delivery Between 7 PM - 10 PM",
					            "est_delivery": null,
					            "sub_categories": [
					                {
					                    "sub_category": "",
					                    "data": [
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
					                            "status": 1,
					                            "cat_item_text": " Delivery Between 7 PM - 10 PM"
					                        },
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
					                            "status": 1,
					                            "cat_item_text": " Delivery Between 7 PM - 10 PM"
					                        },
					                        {
					                            "id": 53,
					                            "name": "South Indian Deluxe Meal",
					                            "info": "Consists of Salad, 3 Mini Phulkas, One dry curry, Dal, Sambar/Rasam, Plain/Flavoured Rice, Fryums, Pickle, Curd, One sweet",
					                            "weight_description": "1 Box",
					                            "sku": "HK01L04",
					                            "mrp": 140,
					                            "selling_price": 140,
					                            "client_id": 1,
					                            "active": 1,
					                            "category_id": 2,
					                            "sub_category_id": 0,
					                            "cuisine_name": "South Indian",
					                            "cuisine_image": "https://stackroger.com/public/uploads/food/categories/southindian.png",
					                            "image": "https://stackroger.com/public/uploads/food/items/1/2x/HK01L04.png",
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
					                            "updated_at": "2021-12-16 11:41:57.019629",
					                            "created_at": "2021-09-18 13:30:23.763180",
					                            "status": 1,
					                            "cat_item_text": " Delivery Between 7 PM - 10 PM"
					                        },
					                        {
					                            "id": 54,
					                            "name": "chinese meal box",
					                            "info": "Consists of Salad, Veg Soft Noodles, Veg Fried Rice & 2 Chinese gravies",
					                            "weight_description": "1 Box",
					                            "sku": "HK02L05",
					                            "mrp": 125,
					                            "selling_price": 125,
					                            "client_id": 1,
					                            "active": 1,
					                            "category_id": 2,
					                            "sub_category_id": 0,
					                            "cuisine_name": "Chinese",
					                            "cuisine_image": "https://stackroger.com/public/uploads/food/categories/Chinese.png",
					                            "image": "https://stackroger.com/public/uploads/food/items/1/2x/HK02L05.png",
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
					                            "updated_at": "2021-12-16 11:42:25.517311",
					                            "created_at": "2021-09-18 13:30:23.763180",
					                            "status": 1,
					                            "cat_item_text": " Delivery Between 7 PM - 10 PM"
					                        }
					                    ]
					                }
					            ]
					        },
					        {
					            "category": "Rice Bowls",
					            "serving_type": 1,
					            "cat_text": " Delivery Between 7 PM - 10 PM",
					            "est_delivery": null,
					            "sub_categories": [
					                {
					                    "sub_category": "",
					                    "data": [
					                        {
					                            "id": 5,
					                            "name": "Jeera Rice & Dal Tadka",
					                            "info": "",
					                            "weight_description": "1",
					                            "sku": "HK01D01",
					                            "mrp": 95,
					                            "selling_price": 95,
					                            "client_id": 1,
					                            "active": 1,
					                            "category_id": 3,
					                            "sub_category_id": 0,
					                            "cuisine_name": "North Indian",
					                            "cuisine_image": "https://stackroger.com/public/uploads/food/categories/northindian.png",
					                            "image": "https://stackroger.com/public/uploads/food/items/1/2x/HK01D01.png",
					                            "item_status": 0,
					                            "popular_pick": 0,
					                            "schedule_status": 1,
					                            "best_seller_status": 0,
					                            "best_seller_title": null,
					                            "best_seller_description": null,
					                            "best_seller_image": null,
					                            "redirection": 0,
					                            "serving": "1",
					                            "pure_veg": 1,
					                            "serving_times": "[{\"name\":\"Lunch\",\"start\":\"12:00\",\"end\":\"15:00\"},{\"name\":\"Dinner\",\"start\":\"19:00\",\"end\":\"22:00\"}]",
					                            "updated_at": "2021-12-16 11:33:51.781550",
					                            "created_at": "2021-09-18 13:30:23.763180",
					                            "status": 1,
					                            "cat_item_text": " Delivery Between 7 PM - 10 PM"
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
					                            "status": 1,
					                            "cat_item_text": " Delivery Between 7 PM - 10 PM"
					                        },
					                        {
					                            "id": 56,
					                            "name": "Veg Dum Biryani, Raita & Salan",
					                            "info": "",
					                            "weight_description": "1",
					                            "sku": "HK01D03",
					                            "mrp": 110,
					                            "selling_price": 110,
					                            "client_id": 1,
					                            "active": 1,
					                            "category_id": 3,
					                            "sub_category_id": 0,
					                            "cuisine_name": "Middle Eastern",
					                            "cuisine_image": "https://stackroger.com/public/uploads/food/categories/middle_eastern.png",
					                            "image": "https://stackroger.com/public/uploads/food/items/1/2x/HK01D03.png",
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
					                            "updated_at": "2021-12-16 11:34:51.827775",
					                            "created_at": "2021-09-18 13:30:23.763180",
					                            "status": 1,
					                            "cat_item_text": " Delivery Between 7 PM - 10 PM"
					                        },
					                        {
					                            "id": 57,
					                            "name": "Schezwan Fried rice & Manchurian",
					                            "info": "",
					                            "weight_description": "1",
					                            "sku": "HK01D04",
					                            "mrp": 110,
					                            "selling_price": 110,
					                            "client_id": 1,
					                            "active": 1,
					                            "category_id": 3,
					                            "sub_category_id": 0,
					                            "cuisine_name": "Chinese",
					                            "cuisine_image": "https://stackroger.com/public/uploads/food/categories/Chinese.png",
					                            "image": "https://stackroger.com/public/uploads/food/items/1/2x/HK01D04.png",
					                            "item_status": 0,
					                            "popular_pick": 0,
					                            "schedule_status": 1,
					                            "best_seller_status": 0,
					                            "best_seller_title": null,
					                            "best_seller_description": null,
					                            "best_seller_image": null,
					                            "redirection": 2,
					                            "serving": "1",
					                            "pure_veg": 1,
					                            "serving_times": "[{\"name\":\"Lunch\",\"start\":\"12:00\",\"end\":\"15:00\"},{\"name\":\"Dinner\",\"start\":\"19:00\",\"end\":\"22:00\"}]",
					                            "updated_at": "2021-12-16 11:35:17.345554",
					                            "created_at": "2021-09-18 13:30:23.763180",
					                            "status": 1,
					                            "cat_item_text": " Delivery Between 7 PM - 10 PM"
					                        },
					                        {
					                            "id": 58,
					                            "name": "Peas Pulao & Paneer Butter Masala",
					                            "info": "",
					                            "weight_description": "1",
					                            "sku": "HK01D05",
					                            "mrp": 125,
					                            "selling_price": 125,
					                            "client_id": 1,
					                            "active": 1,
					                            "category_id": 3,
					                            "sub_category_id": 0,
					                            "cuisine_name": "North Indian",
					                            "cuisine_image": "https://stackroger.com/public/uploads/food/categories/northindian.png",
					                            "image": "https://stackroger.com/public/uploads/food/items/1/2x/HK01D05.png",
					                            "item_status": 0,
					                            "popular_pick": 0,
					                            "schedule_status": 1,
					                            "best_seller_status": 0,
					                            "best_seller_title": null,
					                            "best_seller_description": null,
					                            "best_seller_image": null,
					                            "redirection": 2,
					                            "serving": "1",
					                            "pure_veg": 1,
					                            "serving_times": "[{\"name\":\"Lunch\",\"start\":\"12:00\",\"end\":\"15:00\"},{\"name\":\"Dinner\",\"start\":\"19:00\",\"end\":\"22:00\"}]",
					                            "updated_at": "2021-12-16 11:38:30.902011",
					                            "created_at": "2021-09-18 13:30:23.763180",
					                            "status": 1,
					                            "cat_item_text": " Delivery Between 7 PM - 10 PM"
					                        }
					                    ]
					                }
					            ]
					        }
					    ]
  			ps.check_mycart_menu();
  		// get_subscription_items
  			ps.no_item_found_title= "I could not find the item...";
		    ps.no_item_found_message= "We did not find any matches for the search you have made...";
    		ps.no_item_found_image= "https://stackroger.com/public/uploads/food/icons/no_item_found.png";
    		ps.qty_restriction= 5;
    		ps.qty_restriction_message= "Upto 5 qty can only be added to cart.";
    		ps.subscription_status= 1;
    		ps.restaurant_details= {
												        "id": 1,
												        "name": "Homes Kitchen",
												        "address": "Attapur",
												        "city": "HYDERABAD",
												        "rest_img": "https://stackroger.com/public/uploads/food/restaurants/home_kitchen.png",
												        "serves": "Starters | Main Course | Breakfast",
												        "rating": "4.0",
												        "timing_array": "5,6,7,8,9,10,11,12,13,14,15,16,17,18",
												        "show_text": "[{\"time\":\"7,8,9\",\"id\":\"2\",\"text\":\"pre order for lunch upto 7am to 9am | delivered by 1pm \"},{\"time\":\"10,11,12,13,14,15,16,17\",\"id\":\"3\",\"text\":\"pre order for dinner upto 3pm to 5pm| delivered by 8 pm\"}]",
												        "pure_veg": 1,
												        "licence_no": "13621015000053"
												    	};
    		ps.menu_sliders= [];
    		ps.subscription= [
        					{
				            "category": "Tiffins",
				            "serving_type": 1,
				            "cat_text": "",
				            "est_delivery": null,
				            "sub_categories": [
				                {
				                    "sub_category": "",
				                    "data": [
				                        {
				                            "id": 1,
				                            "name": "Breakfast Meal Box",
				                            "info": "Enjoy 2 - 3 different types  of breakfast dishes everyday",
				                            "weight_description": "1 Box",
				                            "sku": "HK01B023",
				                            "mrp": 100,
				                            "selling_price": 100,
				                            "client_id": 1,
				                            "active": 1,
				                            "category_id": 1,
				                            "sub_category_id": 0,
				                            "cuisine_name": "South Indian",
				                            "cuisine_image": "https://stackroger.com/public/uploads/food/categories/southindian.png",
				                            "image": "https://stackroger.com/public/uploads/food/items/1/2x/HK01B023.png",
				                            "item_status": 0,
				                            "popular_pick": 0,
				                            "schedule_status": 1,
				                            "best_seller_status": 0,
				                            "best_seller_title": "30% OFF",
				                            "best_seller_description": null,
				                            "best_seller_image": "https://chotabeta.app/dev/testenv/public/uploads/food/items/1/HK01L01_BS.png",
				                            "redirection": 3,
				                            "serving": "1",
				                            "pure_veg": 1,
				                            "serving_times": "[{\"name\":\"Breakfast\",\"start\":\"08:00\",\"end\":\"11:00\"}]",
				                            "updated_at": "2021-11-26 16:19:12.686134",
				                            "created_at": "2021-09-18 13:30:23.763180",
				                            "status": 1
				                        },
				                        {
				                            "id": 2,
				                            "name": "Idly Bowl",
				                            "info": "3pcs Idly with Sambar",
				                            "weight_description": "3 pc",
				                            "sku": "HK01B02",
				                            "mrp": 70,
				                            "selling_price": 70,
				                            "client_id": 1,
				                            "active": 1,
				                            "category_id": 1,
				                            "sub_category_id": 0,
				                            "cuisine_name": "South Indian",
				                            "cuisine_image": "https://stackroger.com/public/uploads/food/categories/southindian.png",
				                            "image": "https://stackroger.com/public/uploads/food/items/1/2x/HK01B02.png",
				                            "item_status": 0,
				                            "popular_pick": 0,
				                            "schedule_status": 1,
				                            "best_seller_status": 0,
				                            "best_seller_title": "30% OFF",
				                            "best_seller_description": null,
				                            "best_seller_image": "https://chotabeta.app/dev/testenv/public/uploads/food/items/1/HK01L01_BS.png",
				                            "redirection": 3,
				                            "serving": "1",
				                            "pure_veg": 1,
				                            "serving_times": "[{\"name\":\"Breakfast\",\"start\":\"08:00\",\"end\":\"11:00\"}]",
				                            "updated_at": "2021-11-26 16:19:25.788378",
				                            "created_at": "2021-09-18 13:30:23.763180",
				                            "status": 1
				                        },
				                        {
				                            "id": 50,
				                            "name": "Aloo Paratha Combo",
				                            "info": "2 Aloo Parathas, Curd & Pickle",
				                            "weight_description": "1",
				                            "sku": "HK01B03",
				                            "mrp": 70,
				                            "selling_price": 70,
				                            "client_id": 1,
				                            "active": 1,
				                            "category_id": 1,
				                            "sub_category_id": 0,
				                            "cuisine_name": "North Indian",
				                            "cuisine_image": "https://stackroger.com/public/uploads/food/categories/northindian.png",
				                            "image": "https://stackroger.com/public/uploads/food/items/1/2x/HK01B03.png",
				                            "item_status": 0,
				                            "popular_pick": 0,
				                            "schedule_status": 1,
				                            "best_seller_status": 0,
				                            "best_seller_title": "30% OFF",
				                            "best_seller_description": null,
				                            "best_seller_image": "https://chotabeta.app/dev/testenv/public/uploads/food/items/1/HK01L01_BS.png",
				                            "redirection": 3,
				                            "serving": "1",
				                            "pure_veg": 1,
				                            "serving_times": "[{\"name\":\"Breakfast\",\"start\":\"08:00\",\"end\":\"11:00\"}]",
				                            "updated_at": "2021-12-16 11:33:08.303775",
				                            "created_at": "2021-09-18 13:30:23.763180",
				                            "status": 1
				                        },
				                        {
				                            "id": 51,
				                            "name": "Poha Bowl",
				                            "info": "",
				                            "weight_description": "1",
				                            "sku": "HK01B04",
				                            "mrp": 70,
				                            "selling_price": 70,
				                            "client_id": 1,
				                            "active": 1,
				                            "category_id": 1,
				                            "sub_category_id": 0,
				                            "cuisine_name": "South Indian",
				                            "cuisine_image": "https://stackroger.com/public/uploads/food/categories/southindian.png",
				                            "image": "https://stackroger.com/public/uploads/food/items/1/2x/HK01B04.png",
				                            "item_status": 0,
				                            "popular_pick": 0,
				                            "schedule_status": 1,
				                            "best_seller_status": 0,
				                            "best_seller_title": null,
				                            "best_seller_description": null,
				                            "best_seller_image": "https://chotabeta.app/dev/testenv/public/uploads/food/items/1/HK01L01_BS.png",
				                            "redirection": 3,
				                            "serving": "1",
				                            "pure_veg": 1,
				                            "serving_times": "[{\"name\":\"Breakfast\",\"start\":\"08:00\",\"end\":\"11:00\"}]",
				                            "updated_at": "2021-11-26 16:21:07.799341",
				                            "created_at": "2021-09-18 13:30:23.763180",
				                            "status": 1
				                        }
				                    ]
				                }
				            ]
					        },
					        {
					            "category": "Meal Box",
					            "serving_type": 1,
					            "cat_text": "",
					            "est_delivery": null,
					            "sub_categories": [
					                {
					                    "sub_category": "",
					                    "data": [
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
					                            "status": 1
					                        },
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
					                            "status": 1
					                        },
					                        {
					                            "id": 53,
					                            "name": "South Indian Deluxe Meal",
					                            "info": "Consists of Salad, 3 Mini Phulkas, One dry curry, Dal, Sambar/Rasam, Plain/Flavoured Rice, Fryums, Pickle, Curd, One sweet",
					                            "weight_description": "1 Box",
					                            "sku": "HK01L04",
					                            "mrp": 140,
					                            "selling_price": 140,
					                            "client_id": 1,
					                            "active": 1,
					                            "category_id": 2,
					                            "sub_category_id": 0,
					                            "cuisine_name": "South Indian",
					                            "cuisine_image": "https://stackroger.com/public/uploads/food/categories/southindian.png",
					                            "image": "https://stackroger.com/public/uploads/food/items/1/2x/HK01L04.png",
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
					                            "updated_at": "2021-12-16 11:41:57.019629",
					                            "created_at": "2021-09-18 13:30:23.763180",
					                            "status": 1
					                        },
					                        {
					                            "id": 54,
					                            "name": "chinese meal box",
					                            "info": "Consists of Salad, Veg Soft Noodles, Veg Fried Rice & 2 Chinese gravies",
					                            "weight_description": "1 Box",
					                            "sku": "HK02L05",
					                            "mrp": 125,
					                            "selling_price": 125,
					                            "client_id": 1,
					                            "active": 1,
					                            "category_id": 2,
					                            "sub_category_id": 0,
					                            "cuisine_name": "Chinese",
					                            "cuisine_image": "https://stackroger.com/public/uploads/food/categories/Chinese.png",
					                            "image": "https://stackroger.com/public/uploads/food/items/1/2x/HK02L05.png",
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
					                            "updated_at": "2021-12-16 11:42:25.517311",
					                            "created_at": "2021-09-18 13:30:23.763180",
					                            "status": 1
					                        }
					                    ]
					                }
					            ]
					        },
					        {
					            "category": "Rice Bowls",
					            "serving_type": 1,
					            "cat_text": "",
					            "est_delivery": null,
					            "sub_categories": [
					                {
					                    "sub_category": "",
					                    "data": [
					                        {
					                            "id": 5,
					                            "name": "Jeera Rice & Dal Tadka",
					                            "info": "",
					                            "weight_description": "1",
					                            "sku": "HK01D01",
					                            "mrp": 95,
					                            "selling_price": 95,
					                            "client_id": 1,
					                            "active": 1,
					                            "category_id": 3,
					                            "sub_category_id": 0,
					                            "cuisine_name": "North Indian",
					                            "cuisine_image": "https://stackroger.com/public/uploads/food/categories/northindian.png",
					                            "image": "https://stackroger.com/public/uploads/food/items/1/2x/HK01D01.png",
					                            "item_status": 0,
					                            "popular_pick": 0,
					                            "schedule_status": 1,
					                            "best_seller_status": 0,
					                            "best_seller_title": null,
					                            "best_seller_description": null,
					                            "best_seller_image": null,
					                            "redirection": 0,
					                            "serving": "1",
					                            "pure_veg": 1,
					                            "serving_times": "[{\"name\":\"Lunch\",\"start\":\"12:00\",\"end\":\"15:00\"},{\"name\":\"Dinner\",\"start\":\"19:00\",\"end\":\"22:00\"}]",
					                            "updated_at": "2021-12-16 11:33:51.781550",
					                            "created_at": "2021-09-18 13:30:23.763180",
					                            "status": 1
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
					                            "status": 1
					                        },
					                        {
					                            "id": 56,
					                            "name": "Veg Dum Biryani, Raita & Salan",
					                            "info": "",
					                            "weight_description": "1",
					                            "sku": "HK01D03",
					                            "mrp": 110,
					                            "selling_price": 110,
					                            "client_id": 1,
					                            "active": 1,
					                            "category_id": 3,
					                            "sub_category_id": 0,
					                            "cuisine_name": "Middle Eastern",
					                            "cuisine_image": "https://stackroger.com/public/uploads/food/categories/middle_eastern.png",
					                            "image": "https://stackroger.com/public/uploads/food/items/1/2x/HK01D03.png",
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
					                            "updated_at": "2021-12-16 11:34:51.827775",
					                            "created_at": "2021-09-18 13:30:23.763180",
					                            "status": 1
					                        },
					                        {
					                            "id": 57,
					                            "name": "Schezwan Fried rice & Manchurian",
					                            "info": "",
					                            "weight_description": "1",
					                            "sku": "HK01D04",
					                            "mrp": 110,
					                            "selling_price": 110,
					                            "client_id": 1,
					                            "active": 1,
					                            "category_id": 3,
					                            "sub_category_id": 0,
					                            "cuisine_name": "Chinese",
					                            "cuisine_image": "https://stackroger.com/public/uploads/food/categories/Chinese.png",
					                            "image": "https://stackroger.com/public/uploads/food/items/1/2x/HK01D04.png",
					                            "item_status": 0,
					                            "popular_pick": 0,
					                            "schedule_status": 1,
					                            "best_seller_status": 0,
					                            "best_seller_title": null,
					                            "best_seller_description": null,
					                            "best_seller_image": null,
					                            "redirection": 2,
					                            "serving": "1",
					                            "pure_veg": 1,
					                            "serving_times": "[{\"name\":\"Lunch\",\"start\":\"12:00\",\"end\":\"15:00\"},{\"name\":\"Dinner\",\"start\":\"19:00\",\"end\":\"22:00\"}]",
					                            "updated_at": "2021-12-16 11:35:17.345554",
					                            "created_at": "2021-09-18 13:30:23.763180",
					                            "status": 1
					                        },
					                        {
					                            "id": 58,
					                            "name": "Peas Pulao & Paneer Butter Masala",
					                            "info": "",
					                            "weight_description": "1",
					                            "sku": "HK01D05",
					                            "mrp": 125,
					                            "selling_price": 125,
					                            "client_id": 1,
					                            "active": 1,
					                            "category_id": 3,
					                            "sub_category_id": 0,
					                            "cuisine_name": "North Indian",
					                            "cuisine_image": "https://stackroger.com/public/uploads/food/categories/northindian.png",
					                            "image": "https://stackroger.com/public/uploads/food/items/1/2x/HK01D05.png",
					                            "item_status": 0,
					                            "popular_pick": 0,
					                            "schedule_status": 1,
					                            "best_seller_status": 0,
					                            "best_seller_title": null,
					                            "best_seller_description": null,
					                            "best_seller_image": null,
					                            "redirection": 2,
					                            "serving": "1",
					                            "pure_veg": 1,
					                            "serving_times": "[{\"name\":\"Lunch\",\"start\":\"12:00\",\"end\":\"15:00\"},{\"name\":\"Dinner\",\"start\":\"19:00\",\"end\":\"22:00\"}]",
					                            "updated_at": "2021-12-16 11:38:30.902011",
					                            "created_at": "2021-09-18 13:30:23.763180",
					                            "status": 1
					                        }
					                    ]
					                }
					            ]
					        }
					    ]
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
  		ps.MyCartItemsCost= 0;
  		if(localStorage.getItem('MyFoodCart')){
  			ps.MyFoodCart = JSON.parse(localStorage.getItem('MyFoodCart'));
	  		ps.NoOfItemsInCart = ps.MyFoodCart.length;
	  		ps.MyFoodCart.forEach(cart=>{
	  			ps.MyCartItemsCost = ps.MyCartItemsCost + (cart.selling_price* cart.no_of_qty);
	  		});
  		}
  	},
  	more_function(show_id,hide_id){
  		var ps= this;
  		// console.log(hide_id, show_id,'sasasas');
  		document.getElementById(hide_id).style.display = "none";
  		document.getElementById(show_id).style.display = "block";
  	},
  	getcartkey(){
  		var ps = this;
  		let config = { headers: { "Authorization": `Bearer ${ps.access_token}`,}};
  		var loader = document.getElementById('loader2');
	    loader.style.display="block";
	    // var rest_id = localStorage.getItem('food_client_id');
	    var rest_id = ps.$route.query.rest_id;
  		ps.$api.get('/api/food-cart-key?rest_id='+rest_id+'&subscription=3',config).then(function (response) {
  			loader.style.display="none";
  			ps.cart_key= response.data.cart_key;
    		ps.empty_cart_title=response.data.empty_cart_title;
    		ps.empty_cart_message=response.data.empty_cart_message;
  			if(ps.MyFoodCart.length == 0 ){
  				localStorage.setItem('food_cart_key',response.data.cart_key);
  			}
  		}).catch(function (error) {
      	console.log(error);
      });
  	},
  	get_restarent(){
  		var ps = this;
  		let config = { headers: { "Authorization": `Bearer ${ps.access_token}`,}};
  		var loader = document.getElementById('loader2');
	    loader.style.display="block";
	    let formData = new FormData;
	    formData.append("rest_id", ps.$route.query.rest_id);
	    formData.append("item_sku", '');
	    formData.append("veg",'');
	    formData.append("non_veg", '');
    	ps.$api.post('/api/get-menu',formData,config).then(function (response) {
      	loader.style.display="none";
    	// 	console.log(response,'response');
    		ps.no_item_found_title= response.data.no_item_found_title;
				ps.no_item_found_message= response.data.no_item_found_message;
				ps.no_item_found_image= response.data.no_item_found_image;
				ps.qty_restriction= response.data.qty_restriction;
				ps.qty_restriction_message= response.data.qty_restriction_message;
				ps.subscription_status= response.data.subscription_status;
				ps.restaurant_details= response.data.restaurant_details;
				ps.menu_sliders= response.data.menu_sliders;
				ps.Menu= response.data.Menu;
     		ps.check_mycart_menu();
      }).catch(function (error) {
      	console.log(error);
      });
  	},
  	get_subscription_items(){
  		var ps = this;
  		let config = { headers: { "Authorization": `Bearer ${ps.access_token}`,}};
  		var loader = document.getElementById('loader2');
	    loader.style.display="block";
	    let formData = new FormData;
	    formData.append("rest_id", ps.$route.query.rest_id);
	    formData.append("item_sku", '');
	    formData.append("veg",'');
	    formData.append("non_veg", '');
	    ps.$api.post('/api/get-subscription-items',formData,config).then(function (response) {
      	loader.style.display="none";
      	console.log(response,"response");
      	ps.no_item_found_title= response.data.no_item_found_title;
				ps.no_item_found_message= response.data.no_item_found_message;
				ps.no_item_found_image= response.data.no_item_found_image;
				ps.qty_restriction= response.data.qty_restriction;
				ps.qty_restriction_message= response.data.qty_restriction_message;
				ps.subscription_status= response.data.subscription_status;
				ps.restaurant_details= response.data.restaurant_details;
				ps.menu_sliders= response.data.menu_sliders;
				ps.subscription= response.data.Menu;
     }).catch(function (error) {
      	console.log(error);
      });
  	},

  	check_mycart_menu(){
  		var ps= this;
  		ps.MyFoodCart_function();
  		ps.Menu.forEach(item =>{
  			item.sub_categories[0].data.forEach(sub_item=>{
  				sub_item.no_of_qty = 0;
  			});
  		});
  		ps.Menu.forEach(item =>{
  			item.sub_categories[0].data.forEach(sub_item=>{
  				ps.MyFoodCart.forEach(cart=>{
  					if(cart.sku == sub_item.sku){
  						sub_item.no_of_qty = cart.no_of_qty;
  					}
  				});
  			});
  		});
  	},
  	food_add_to_cart(item){
  		var ps = this;
  		var excisting  = 0;
  		if(localStorage.getItem('food_cart_key') == ps.cart_key){
  			ps.MyFoodCart.forEach(cart=>{
	  			if(cart.sku == item.sku){
	  				excisting = cart.no_of_qty;
	  			}
	  		});
	  		if(excisting == 0){
	  			item.no_of_qty = 1;
	  			ps.MyFoodCart.push(item);
	  			localStorage.setItem('MyFoodCart',JSON.stringify(ps.MyFoodCart));
	  		}
	  		ps.check_mycart_menu();
  		}else{
  			ps.cart_key_message_dialog = true;
  		}
  	},
  	food_add_to_cart_more(item){
  		 var ps = this ;
  		 ps.MyFoodCart.forEach(cart=>{
  			if(cart.sku == item.sku){
  				if(cart.no_of_qty < ps.qty_restriction){
  					item.no_of_qty = item.no_of_qty +1;
  					cart.no_of_qty = cart.no_of_qty +1;
  				}else{
  					ps.$q.notify({ message: ps.qty_restriction_message, color:'light-blue-10', icon:'close'});
  				}
  			}
  		});
  		localStorage.setItem('MyFoodCart',JSON.stringify(ps.MyFoodCart));
  		ps.check_mycart_menu();
  	},
  	food_cart_item_remove(item){
  		var  ps = this;
  		ps.MyFoodCart.forEach((cart,index)=>{
  			if(cart.sku == item.sku){
  				if(cart.no_of_qty == 1){
  					ps.MyFoodCart.splice(index, 1);
	  			}else{
  					item.no_of_qty = item.no_of_qty -1;
  					cart.no_of_qty = cart.no_of_qty -1;
   				}
  			}
  		});
  		localStorage.setItem('MyFoodCart',JSON.stringify(ps.MyFoodCart));
  		ps.check_mycart_menu();
  	},
  	clearcart_function(){
  		var ps = this;
  		localStorage.setItem('MyFoodCart','[]');
  		localStorage.setItem('food_cart_key',ps.cart_key);
  		ps.cart_key_message_dialog = false;
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
</style>	
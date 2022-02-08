<template>
	<q-layout view="lHh lpr lFf">
		<q-header>
			<q-toolbar class="cb-bg-white-2 cb-text-blue-8">
				<q-btn flat dense round icon="arrow_back" @click="$router.push('')"/>
				<q-btn icon="place" class="q-pa-none" size="sm" flat label="HUDA Techno Enclave, HITEC City"></q-btn>
				<q-space></q-space>
				<q-btn round dense icon="notifications" flat @click="$router.push('Notification')"> 
	    			<q-badge  color="red" rounded floating style="margin-top:8px;margin-right: 8px;"></q-badge>
	  			</q-btn>
	  			<div style="background: transparent;">
		  			<q-btn round dense icon="shopping_cart" flat style="background: transparent;">
		    			<q-badge class="cb-bg-orange-8" rounded floating >0</q-badge>
		  			</q-btn>
		  		</div>
			</q-toolbar>
			<div class="cb-text-orange-8 cb-bg-white-2 flex flex-center cb-font-16 text-weight-bolder q-pb-xs" v-if="n!=0">
				<q-space></q-space><q-space></q-space>My Cart<q-space></q-space>
				<q-btn label="clear" icon-right="delete_sweep" dense flat @click="clear_confirm_dialog = true"></q-btn>
			</div>
		</q-header>
		<q-page-container>
			<q-page class="q-mb-xl q-pb-sm" v-if="n != 0">
				<div class="row" v-if="n!=0">
					<div class="col-12 flex cb-bg-grey-3 q-px-md cb-font q-pa-xs text-white">
						<span>Fruits & Vegitables</span>
						<q-space></q-space>
						<span>2 Items</span>
					</div>
					<div class="col-12 cb-text-grey-5 q-pr-sm" v-for="i in n">
						<div class="row q-pa-xs">
							<div class="col-2" style="border-right: 2px solid grey;" @click="$router.push('PickFromStore_Item')">
								<q-img src="https://chotabeta.app/dev/testenv/public/uploads/new_items/1/66/100061.png"></q-img>
							</div>
							<div class="col-6 q-pl-md" style="font-size: 12px;">
								<span style="font-size:11px">FRUITS</span><br>
								<span class="text-weight-bolder">Promegranate</span><br>
								<span class="text-bold">MRP <q-icon name="currency_rupee"></q-icon>80</span><br>
								<i>500 gm</i>
							</div>
							<div class="col-4 text-right cb-text-orange-8 text-weight-bolder">
								<q-icon name="info" size="sm" class="cb-text-grey-4 q-pr-sm" @click="$router.push('PickFromStore_Item')"></q-icon>
								<br>
								<br>
								<q-btn icon="remove" flat dense></q-btn>
								<span class="q-px-sm">1</span>
								<q-btn icon="add" flat dense></q-btn>
							</div>
						</div>
						<q-separator></q-separator>
					</div>
				</div>

				<div class="row"  v-if="n!=0">
					<div class="col-12 flex cb-bg-grey-3 q-px-md cb-font q-pa-xs text-white">
						<span>Home Essentials</span>
						<q-space></q-space>
						<span>2 Items</span>
					</div>
					<div class="col-12 cb-text-grey-5 q-pr-sm" v-for="i in n">
						<div class="row q-pa-xs">
							<div class="col-2" style="border-right: 2px solid grey;" @click="$router.push('PickFromStore_Item')">
								<q-img src="https://chotabeta.app/dev/testenv/public/uploads/new_items/1/66/100061.png"></q-img>
							</div>
							<div class="col-6 q-pl-md" style="font-size: 12px;">
								<span style="font-size:11px">FRUITS</span><br>
								<span class="text-weight-bolder">Promegranate</span><br>
								<span class="text-bold">MRP <q-icon name="currency_rupee"></q-icon>80</span><br>
								<i>500 gm</i>
							</div>
							<div class="col-4 text-right cb-text-orange-8 text-weight-bolder">
								<q-icon name="info" size="sm" class="cb-text-grey-4 q-pr-sm" @click="$router.push('PickFromStore_Item')"></q-icon>
								<br>
								<br>
								<q-btn icon="remove" flat dense></q-btn>
								<span class="q-px-sm">1</span>
								<q-btn icon="add" flat dense></q-btn>
							</div>
						</div>
						<q-separator></q-separator>
					</div>
				</div>

				<div class="row"  v-if="n!=0">
					<div class="col-12 flex cb-bg-grey-3 q-px-md cb-font q-pa-xs text-white">
						<span>Staples</span>
						<q-space></q-space>
						<span>2 Items</span>
					</div>
					<div class="col-12 cb-text-grey-5 q-pr-sm" v-for="i in n">
						<div class="row q-pa-xs">
							<div class="col-2" style="border-right: 2px solid grey;" @click="$router.push('PickFromStore_Item')">
								<q-img src="https://chotabeta.app/dev/testenv/public/uploads/new_items/1/66/100061.png"></q-img>
							</div>
							<div class="col-6 q-pl-md" style="font-size: 12px;">
								<span style="font-size:11px">FRUITS</span><br>
								<span class="text-weight-bolder">Promegranate</span><br>
								<span class="text-bold">MRP <q-icon name="currency_rupee"></q-icon>80</span><br>
								<i>500 gm</i>
							</div>
							<div class="col-4 text-right cb-text-orange-8 text-weight-bolder">
								<q-icon name="info" size="sm" class="cb-text-grey-4 q-pr-sm" @click="$router.push('PickFromStore_Item')"></q-icon>
								<br>
								<br>
								<q-btn icon="remove" flat dense></q-btn>
								<span class="q-px-sm">1</span>
								<q-btn icon="add" flat dense></q-btn>
							</div>
						</div>
						<q-separator></q-separator>
					</div>
				</div>

				<div class="row text-white fixed-bottom ">
					<div class="col cb-bg-grey-3 q-pl-md  column justify-center text-bold">
						<i>1 Items| <q-icon name="currency_rupee"></q-icon>240</i>
					</div>
					<div class="col cb-bg-orange-8 text-center q-py-sm">
						<q-btn label="checkout" flat icon-right="chevron_right" @click="$router.push('PickFromStore_Checkout')"></q-btn>
					</div>
				</div>

				<q-dialog v-model="clear_confirm_dialog">
    				<q-card class="q-dialog-plugin cb-round-borders-20 cb-text-grey-4">
    					<q-card-section class="text-center">
    						<span class="text-weight-bolder cb-font-16">DoYou Want Clear Cart?</span><br>
    						<span>Tying to add items from different categoris, Please empty existing cart.</span>
    						<br>
    						<q-btn label="clear" class="q-px-xl cb-bg-orange-8 text-white q-mt-lg q-mb-sm" @click="n=0"></q-btn><br>
    						<q-btn label="cancel" class="q-px-lg" flat @click="clear_confirm_dialog = false"></q-btn>
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
        	    	<q-btn label="Shop now" class="cb-bg-orange-8 text-white q-px-xl" @click="$router.push('/')"></q-btn>
        		</div>
      		</q-page>

		</q-page-container>
	</q-layout>
</template>
<script>
let isMobile = window.matchMedia("only screen and (max-width: 760px)").matches;
if (!isMobile){
     window.location="https://chotabeta.com/pwa";
}
import axios from 'axios'
import {ref } from 'vue'
export default ({
  setup(){
    return {
    	access_token:ref(null),    
    	clear_confirm_dialog:ref(false),
    	n:ref(3)
    }
  },
  mounted () {
  	this.getToken();  		
  },
  methods:{
  	getToken(){
  		var ps = this ;
  		ps.access_token = ps.$store.state.token;
  		if(ps.access_token == null){
  			ps.$router.push('');
  		}  	
  	},	
  	pickfromstore_redirection(item){
  		var ps = this;
  		console.log(item);
  		ps.$router.push('/PickFromStore_layouts_s2?combinations='+item);
  	}
  }
})
</script>

<template>
	<q-layout view="lHh lpr lFf">
		<q-header>
			<q-toolbar class="cb-bg-white-2 cb-text-blue-8">
				<q-btn flat dense round icon="arrow_back" @click="$router.push('')"/>
				<q-btn icon="place" class="q-pa-none" flat :label="$store.state.latlongs"></q-btn>
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
			<div class="cb-text-orange-8 cb-bg-white-2 flex cb-font text-weight-bolder q-pb-xs">
				<q-space></q-space><q-space></q-space>My Cart<q-space></q-space>
				<q-btn label="clear" icon-right="delete_sweep" dense flat></q-btn>
			</div>
			<div class="flex cb-bg-grey-3 q-px-md cb-font q-pa-xs">
				<span>Fruits & vegitables</span>
				<q-space></q-space>
				<span>3 Items</span>
			</div>
		</q-header>
		<q-page-container>
			<q-page>
				<div class="row" style="margin-bottom: 50px;">
					<div class="col-12  q-pa-xs q-pr-sm" v-for="i in 10">
						<div class="row">
							<div class="col-2" style="border-right: 2px solid grey;" @click="$router.push('PickFromStore_Item')">
								<q-img src="https://chotabeta.app/dev/testenv/public/uploads/new_items/1/66/100061.png"></q-img>
							</div>
							<div class="col-7 q-pl-md cb-text-grey-8" style="font-size: 12px;">
								<span style="font-size:11px">FRUITS</span><br>
								<span class="text-weight-bolder">Promegranate</span><br>
								<span class="text-bold">MRP <q-icon name="currency_rupee"></q-icon>80</span><br>
								<i>500 gm</i>
							</div>
							<div class="col-3 text-right cb-text-orange-8 text-weight-bolder">
								<q-icon name="info" size="sm" class="cb-text-grey-4 q-pr-sm"></q-icon>
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
			</q-page>
		</q-page-container>
	</q-layout>
</template>
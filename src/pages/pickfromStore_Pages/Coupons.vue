<template>
	<q-layout view="lHh lpr lFf">
		<q-header>
			<q-toolbar class="cb-bg-white-2 cb-text-blue-8 text-center">
				<q-btn flat dense round icon="arrow_back" @click="$router.push('PickFromStore_Checkout')"/>
				<q-space></q-space>
				<div class="cb-text-grey-6 text-bold ">Available Coupons</div>
				<q-space></q-space>
			</q-toolbar>
		</q-header>
		<q-page-container>
			<q-page class="q-px-sm">
				<div class="row">
					<div class="col-12 flex cb-shadow-1 q-my-sm q-pa-sm cb-round-borders-10" v-for="i in 5">
						<q-avatar class="shadow-2" size="60px">
							<img src="https://chotabeta.com/icons/Group%202.png">
						</q-avatar>
						<div class="cb-text-blue-8 q-pl-md">
							<span class="text-weight-bolder cb-font">Test {{i}}</span><br>
							<span style="font-size: 12px;">Test Coupens</span>
						</div>
						<q-space></q-space>
						<q-btn style="border: 3px dotted orange;width:100px;height:10px" flat outlined rounded @click="$router.push('PickFromStore_Checkout')">test{{i}}</q-btn>
					</div>
				</div>
			</q-page>
		</q-page-container>
	</q-layout>
</template>
<template>
	<q-layout view="lHh lpr lFf">
		<q-header class="cb-bg-orange-8 q-py-xs">
			<q-toolbar>
				<q-btn icon="arrow_back_ios" flat></q-btn>
				<q-space></q-space>
				<q-btn icon="shopping_cart" flat>
					<q-badge rounded floating  class="bg-white text-black">0</q-badge>
				</q-btn>
			</q-toolbar>
		</q-header>
		<q-page-container>
			<q-page class="cb-bg-orange-8">
				<div class="row q-px-md">
					<div class="col-4 text-h5 text-weight-bolder text-white row items-center">HEALTHY FOOD FOR A WEALTHY MOOD</div>
					<div class="col-8"><img src="https://chotabeta.app/dev/testenv/public/uploads/assets/pick_from_store.png" class="full-width"></div>
				</div>
				<q-card style="border-radius: 30px 30px 0px 0px;box-shadow:0px -0px 3px 0px grey;" class="q-pt-sm q-px-sm">
					<q-card-section class="q-px-none q-pb-none">
						<div class="row coupon-wrap">
							<div class="col-7 q-pa-xs" v-for="combo in 5">
								<q-img src="https://chotabeta.app/dev/testenv/public/uploads/muching.png" class="cb-round-borders-10 full-height" v-if="combo!=''"></q-img>
							</div>
						</div>
					</q-card-section>
					<q-card-section class="q-pa-none">
						<div class="row">
							<q-icon name="emoji_symbols" size="sm"></q-icon>
							<span class="text-brown cb-font-16 text-weight-bolder">Speical offer</span>
						</div>
						<div class="row coupon-wrap q-py-sm">
							<div class="col-7 q-pa-xs" v-for="combo in 5">
								<q-img src="https://chotabeta.app/dev/testenv/public/uploads/assets/grab30.png" class="cb-round-borders-10 full-height" v-if="combo!=''"></q-img>
							</div>
						</div>
					</q-card-section>
				</q-card>
				
			</q-page>
		</q-page-container>
	</q-layout>
</template>
<style scoped>
.coupon-wrap{ flex-wrap: nowrap;overflow: scroll;overflow-y: hidden; }
::-webkit-scrollbar { width: 0;background: transparent; }
::-webkit-scrollbar-thumb {background: transparent;}
</style>
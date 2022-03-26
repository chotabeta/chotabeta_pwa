<template>
	<q-page>
		<div id="loader2" class="pre-loader" style="display:none"></div>

		<div class="row cb-bg-white-2 text-h6 cb-text-orange-8 justify-center" >
			<span v-if="$route.query.id == 2">Pick From Store</span>
			<span v-if="$route.query.id == 1">Pick And Drop</span>
		</div>

		<q-card class="q-ma-md cb-round-borders-20 shadow-5">
			<q-card-section class="text-h6 q-pa-sm cb-bg-blue-8 cb-text-white-1">
				Select Category
			</q-card-section>
			<q-card-section class="q-pa-sm" >
				<div class="row" v-if="categories.length != 0" style="height:70vh;overflow: scroll;">
					<div class="col-4 text-center cb-text-grey-4 q-mt-sm" v-for="item in categories" :key="item">
							<q-avatar size="70px" class="shadow-2 " @click="services_page_redirection(item)">
								<q-avatar size="40px" square>
									<img :src="item.category_image_for_mobile" >
									<!-- <img src="https://chotabeta.app/dev/testenv/public/uploads/assets/fruits_vegges.png" class="fit"> -->
								</q-avatar>
							</q-avatar><br>
						<span class="text-black">{{ item.name }}</span>
					
					</div>
				</div> 
			</q-card-section>
			<q-card-section class="q-py-md">  </q-card-section>
		</q-card>
	</q-page>
</template>
<script>
import {ref } from 'vue'
import axios from 'boot/axios'
export default ({
  setup(){
    return {
      access_token:ref(null),
      categories:ref([]),
      xid:ref(null),
    }
  },
  mounted () {
  	var ps = this;
  	ps.getAccessToken();
  	if (this.$route.query.id) {
  	 	this.service_page();
    }
  },
  methods:{
  	getAccessToken(){
  		var ps = this;
  		if(ps.$store.state.token){ ps.access_token = ps.$store.state.token; }
      else{ ps.access_token = ps.$store.state.token_cb; }

      if(ps.$store.state.xid){ps.xid = ps.$store.state.xid;}
  		else{ps.xid = ps.$store.state.xid_cb;}

      if(ps.access_token == null ||  !ps.access_token){ ps.$router.push('/'); }
  	},
  	service_page(){
  		var ps = this;
  		var loader = document.getElementById('loader2');
	      loader.style.display="block";
  		let config = { headers: { Authorization: `Bearer ${ps.access_token}` } };
			ps.$api.get('/api/get-categories-new?pincode='+ps.$store.state.pincode+'&service_id='+ps.$route.query.id+'&xid='+ps.xid,config).then(function (response) {
				loader.style.display="none";
				if(response.data.status_code ==200){
			 		// console.log(response.data);
			 		ps.categories = response.data.all_categories;
 					localStorage.setItem('categories',JSON.stringify(ps.categories));
				}else{
			 		ps.$q.notify({ message:response.data.message, type: 'negative',progress: true, });
				}
			}).catch(function (error) {
				console.log(error);
			// ps.$q.notify({ message:error, type: 'warning',progress: true, });
			});
  	},

  	services_page_redirection(item){
  		var ps = this;
  		localStorage.setItem('category',JSON.stringify(item));
  		if(item.main_service_id == 2){
  			if( item.screen_redirection == 2 ){
  				ps.$router.push('/PickFromStore_layouts_s1');
  			}else if(item.screen_redirection == 0 ){
  				ps.$router.push('/PickFromStore_layouts_s2');
  			}
  		}else if(item.main_service_id == 1){
  			console.log(item);
  			if(item.id == 30){
  				ps.PAD_others_Dailog = true;
  			}else{
  				ps.$router.push('/PickAndDrop_s1');
  			}
  		}else if(item.main_service_id == 3){
				// localStorage.setItem('dm_vehicle_data', JSON.stringify(item));
			  ps.$router.push('/PickAndDrop_s1?s_id=3');
		  }
  	},
  }
})
</script>

<template>
	<q-page>
		<div class="row cb-bg-white-2 text-h6 cb-text-orange-8 justify-center" >
			<span v-if="$route.query.id == 2">Pick From Store</span>
			<span v-if="$route.query.id == 1">Pick And Drop</span>
		</div>
		<q-card class="q-ma-md cb-round-borders shadow-5">
			<q-card-section class="text-h6 q-pa-sm cb-bg-blue-8 cb-text-white-1">
				Select Category
			</q-card-section>
			<q-card-section class="q-pa-sm" >
				<div class="row" v-if="categories.length != 0" style="height:70vh;overflow: scroll;">
					<div class="col-4 text-center cb-text-grey-4 q-mt-sm" v-for="item in categories" :key="item">
						<div class="q-px-sm" style="border-radius: 100%;" >
							<q-avatar size="65px" class="shadow-2 " @click="services_page_redirection(item)">
								<q-avatar size="50px">
									<img :src="item.category_image_for_mobile" >
								</q-avatar>
							</q-avatar><br>
						<span class="text-black">{{ item.name }}</span>
						</div>
					</div>
				</div> 
			</q-card-section>
			<q-card-section class="q-py-md">  </q-card-section>
		</q-card>
	</q-page>
</template>
<script>
import {ref } from 'vue'
import axios from 'axios'
export default ({
  setup(){
    return {
      access_token:ref(null),
      categories:ref([]),
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
  		ps.access_token = ps.$store.state.token;
  		if(ps.access_token == null ||  !ps.access_token){
  			ps.$router.push('');
  		}
  	},
  	service_page(){
  		var ps = this;
  		let config = { headers: { Authorization: `Bearer ${ps.access_token}` } };
			axios.get('https://chotabeta.app/dev/testenv/api/get-categories-new?pincode='+ps.$store.state.pincode+'&service_id='+ps.$route.query.id+'&xid='+ps.$store.state.xid,config).then(function (response) {
			if(response.data.status_code ==200){
			 		// console.log(response.data);
			 	ps.categories = response.data.all_categories;
			}else{
			 	ps.$q.notify({ message:response.data.message, type: 'negative',progress: true, });
			}
		}).catch(function (error) {
			ps.$q.notify({ message:error, type: 'warning',progress: true, });
		});
			
  	},
  	services_page_redirection(item){
  		var ps = this ;
			if(item.main_service_id == 2){
  			ps.$router.push('/PickFromStore_layouts_s1?id='+item.id+'&service_id='+item.service_id);
  		}else if(item.main_service_id == 1){
  			ps.$q.notify({ message:"Pick and Drop pages are Not craeted", type: 'warning',progress: true, });
  		}
  	}

  }
})
</script>

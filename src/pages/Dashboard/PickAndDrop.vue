<template>
	<q-page>
		
	</q-page>
</template>
<script>
import {ref } from 'vue'
import axios from 'axios'
export default ({
  setup(){
    return {
      access_token:ref(null),
    },
      props: {
    leadId: Number,
    startTab: String
  },
  },

  mounted () {
  	var ps = this;
  	ps.getAccessToken();
  	setTimeout(function() {
  		
  	}, 100);
  },
  methods:{
  	getAccessToken(){
  		var ps = this;
  		ps.access_token = ps.$store.state.token;
  		if(ps.access_token == null ||  !ps.access_token){
  			ps.$router.push('');
  		}
  	},
  	service_page(service){
  		var ps = this;
 			console.log(service,'sandeep perikala');
 			ps.$router.push('');
 			let config = { headers: { Authorization: `Bearer ${ps.access_token}` } };
			axios.get('https://chotabeta.app/dev/testenv/api/get-categories-new?pincode=500081&service_id='+service.id+'&xid='+ps.$store.state.xid,config).then(function (response) {
				if(response.data.status_code ==200){
				 		console.log(response.data);
				 
				}else{
				 	ps.$q.notify({ message:response.data.message, type: 'negative',progress: true, });
				}
			}).catch(function (error) {
				// ps.$q.notify({ message:error, type: 'warning',progress: true, });
			});
 			
  	},

  }
})
</script>
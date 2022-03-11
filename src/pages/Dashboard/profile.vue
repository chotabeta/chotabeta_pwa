<template>
<q-page>
	<div id="loader2" class="pre-loader" style="display:none"></div>
	<div class=" flex cb-bg-white-2">
		<q-space></q-space>
		<q-space></q-space>
		<span class="cb-text-orange-8 text-subtitle2">Profile</span>
		<q-space></q-space>
		<q-btn label="logout" class="cb-text-orange-8" flat size="sm" icon-right="logout" @click="logout"></q-btn>
	</div>

	<q-card class="q-ma-md shadow-3">
	  	<q-card-section class="flex flex-center">
	  	  <q-avatar class="shadow-3" size="100px">	
	     	<img :src="profile_pic" v-if="profile_pic">
	     	<img src="https://chotabeta.com/icons/Group%202.png" v-else>
	     	<q-btn icon="photo_camera" size="sm" round   class="absolute-bottom-right cb-bg-orange-8 text-white" style="margin-right:-3px;margin-bottom:-3px"></q-btn>
	      </q-avatar>
	  	</q-card-section>
	  	<q-card-section class="cb-text-grey-4">
	  		<div class="flex q-px-sm">Username<q-space></q-space>{{ name }}</div><hr>
	  		<div class="flex q-px-sm">Email<q-space></q-space>
	  			<span v-if="!email"><q-btn @click="update_email" label="Update Email" class="cb-text-orange-8" flat dense size="sm"></q-btn></span>
	  			<span v-else>{{ email }}</span>
	  		</div><hr>
	  		<div class="flex q-px-sm">Phone<q-space></q-space>{{ mobile }}</div><hr>
	  		<div class="flex q-px-sm">Address<q-space></q-space>{{ address }}</div>
	  		<div> 
	  		  <q-btn label="Edit Profile"  flat size="md" class="q-pa-none cb-text-orange-8" @click="get_servicing_cities(),edit_profile = true">
	  			<q-icon name="edit"  style="font-size: 14px;" class="q-px-sm"></q-icon>		
	  			</q-btn> 
	  		</div>
	  	</q-card-section>
	</q-card>

	<q-card class="q-mx-md shadow-3">
	  	<q-card-section class="cb-bg-white-2 cb-text-blue-8 text-weight-bolder">
	  		SAVED ADDRESSES
	  	</q-card-section>
	  	<q-card-section class="q-pa-sm">
	  		<div class="flex q-py-sm" style="border-bottom:1px solid #D9D9D9;" v-for="i in n" :key="i">
		  		<div style="width:10%">
		  			<q-btn icon="house" round class="cb-bg-orange-8 text-white" size="sm"></q-btn> 
		  		</div>
	  			<div class="q-px-sm"  style="width:90%">
	  				<div class="text-subtitle2 cb-text-blue-8 text-weight-bolder"> Home <q-btn icon-right="delete" label="Delete" class="cb-text-orange-8 float-right" dense size="sm" flat></q-btn> 
	  				</div>
	  				<div style="font-size: 11px">  Province or State as appropriate; mail code as appropriate; and country. Sample 1. Sample 2. Sample 3 </div>
	  			</div>
	  		</div>
	  	</q-card-section>
	  	<q-card-actions>
	  		<q-btn label="View More" flat dense size="sm" class="cb-text-orange-8" v-if="n==3" @click="address_count(n)"></q-btn>
	  		<q-btn label="View less" flat dense size="sm" class="cb-text-orange-8" v-else @click="address_count(n)"></q-btn>
	  	</q-card-actions>
	</q-card>

	<q-dialog v-model="edit_profile">
		<q-card class=" full-width">
			<q-card-section class="cb-text-blue-8 cb-bg-white-2">
				Update Profile
			</q-card-section>
			<q-card-section class="q-pa-md">
				<q-form @submit="update_email" class="text-center">
					<q-input dense outlined class="q-mb-sm" placeholder="name" v-model="name"></q-input>
					<q-input dense outlined class="q-mb-sm" placeholder="email" v-model="email" type="email"></q-input>
					<q-select dense outlined class="q-mb-sm" placeholder="" v-model="address" :options="cities"></q-select>
					<q-btn type="submit" label="Update" class="cb-bg-orange-8 text-white q-px-lg"></q-btn>
				</q-form>
			</q-card-section>
		</q-card>
	</q-dialog>
</q-page>
</template>
<script>
import axios from 'boot/axios'
import { ref}  from 'vue'
export default {
  setup () {
    return {
      data:ref(null),
      access_token:ref(null),
      profile_pic:ref(null),
      name:ref(null),
	  email:ref(null),
	  mobile:ref(null),
	  address:ref(null),
	  n:ref(3),
	  edit_profile:ref(false),
	  cities:ref([]),
    }
  },

  mounted(){
    this.getAccessToken();
    this.userdetails();
  },
  methods:{
    getAccessToken(){
      var ps = this;
      ps.access_token = ps.$store.state.token;
      if(ps.access_token == null ||  !ps.access_token){
        ps.$router.push('');
      }
    },
    userdetails(){
      var ps = this;
      var loader = document.getElementById('loader2');
	      	loader.style.display="block";
      let config = { headers: { "Authorization": `Bearer ${ps.access_token}`,}}
      ps.$api.get('/api/user',config).then(function (response) {
      	loader.style.display="none";
      	ps.profile_pic =  response.data.profile_pic;
        ps.name = response.data.name;
        ps.email = response.data.email;
        ps.mobile = response.data.mobile;
        ps.address = response.data.address;
      }).catch(function (error) {
        console.log(error);
      })
    },
    address_count(n){
    	var ps = this;
    	if(n ==3){
    		ps.n = 10;
    	}else{
    		ps.n = 3;
    	}
    },
    get_servicing_cities(){
    	 var ps = this;
    	 var loader = document.getElementById('loader2');
	      	loader.style.display="block";
    	let config = { headers: { Authorization: `Bearer ${ps.access_token}` } };
        ps.$api.get("/api/get-serving-locations",config).then(function(response) {
        	loader.style.display="none";
                  if(response.data.status_code == 200){
                   	ps.cities = response.data.locations;
                  }else{
                   	ps.$q.notify({ message:response.data.message, type: 'negative',progress: true, });
                  }
            }).catch(function(error){
                console.log(error);
            });  
    },
    update_email(){
    	var ps = this;
    	var loader = document.getElementById('loader2');
	      	loader.style.display="block";
    	let config = { headers: { Authorization: `Bearer ${ps.access_token}` } };
        ps.$api.post("/api/edit-profile",{
        	name:ps.name,
        	city:ps.address,
        	email:ps.email
        },config).then(function(response) {
        	loader.style.display="none";
                  if(response.data.status_code == 200){
                  	ps.$q.notify({ message:response.data.message, type: 'positive',progress: true, });
                  }else{
                   	ps.$q.notify({ message:response.data.message, type: 'negative',progress: true, });
                  }
            }).catch(function(error){
                console.log(error);
            });   
    },
    logout(){
		var ps = this;
		var loader = document.getElementById('loader2');
	      	loader.style.display="block";
	    let config = { headers: { Authorization: `Bearer ${ps.$store.state.token}` } };
	    ps.$api.get("/api/logout",config).then(function(response) {
	    	console.log(response);
	    	loader.style.display="none";
	            if(response.data.status_code == 200){
	            	ps.$store.dispatch('logout').then(res => {
								ps.$q.notify({ message: res , type: 'positive' ,progress: true, });
								ps.$router.push('/');
	  		 				}).catch(error => {
	  		 					console.log(error);
	        			// ps.$q.notify({ message: error , type: 'negative' ,progress: true, });  	
	       				});
	              
	            }else{
	              
	            }
	      }).catch(function(error){
	           console.log(error);
	      });
	   	ps.$router.push('');
		},
  }
}
</script>
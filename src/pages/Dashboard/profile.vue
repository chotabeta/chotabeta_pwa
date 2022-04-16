<template>
	<q-page v-if="xid != 2">

		<div id="loader2" class="pre-loader" style="display:none"></div>

		<div class=" flex cb-bg-white-2 cb-font-16">
			<q-space></q-space>
			<q-space></q-space>
			<span class="cb-text-orange-8">Profile</span>
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

		<q-card class="q-ma-md shadow-3">
			<q-card-section>
				<div class="row">
		       <div class="col-12"><span class="cb-text-blue-8 cb-font text-bold">Saved Locations</span></div>
		        <div class="col-12" style="max-height: 200px;overflow: scroll;">
		        	<q-list  separator>
		  		      <q-item clickable v-ripple v-for="i in saved_locations" :key="i"  class="q-px-xs" @click="saved_location_add(i)"> 
		  		        <q-item-section avatar  class="q-px-xs">
		  		        	<q-icon name="home" v-if="i.location_type == 'Home'" size="xs" class="cb-bg-orange-8 q-pa-xs text-white cb-font " style="border-radius: 100%;"></q-icon>
		                		<q-icon name="location_on" v-if="i.location_type != 'Home'" size="xs" class="cb-bg-orange-8 q-pa-xs text-white cb-font" style="border-radius: 100%;"></q-icon>
		  		        </q-item-section>
		  		        <q-item-section>
		  		        	<q-item-label>{{ i.location_type }}</q-item-label>
		            		<q-item-label caption lines="2">{{ i.name }}</q-item-label>
		  		        </q-item-section>
		  		      </q-item>
		  		  	</q-list>
		        </div>
		        <!-- <div class="col-12 text-right cb-text-grey-4 q-py-sm">View More</div> -->
		      </div>
		    </q-card-section>
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
	<q-page v-if="xid == 2" class="flex flex-center bg_style text-white">
		<div class="text-center full-width q-px-xl">
			<img src="https://chotabeta.com/images/images/white-logo.svg" style="width:70%">
			<br>
			<p class="text-weight-bolder">Something text about ChotaBeta</p>
			<q-btn label="Sign In" class="cb-bg-green-8 cb-font-16 cb-round-borders-20 text-white q-px-xl" @click="$router.push('/sign-in?service=DP')"></q-btn>
		</div>
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
		  xid:ref(null),
		  saved_locations:ref(null)
    }
  },

  mounted(){
    this.getAccessToken();
    if(this.$store.state.token){
    	this.userdetails();
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
        ps.saved_locations_function();
      }).catch(function (error) {
        console.log(error);
      })
    },
    address_count(n){
    	var ps = this;
    	if(n ==3){ ps.n = 10; }
    	else{	ps.n = 3; }
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
	    	// console.log(response);
	    	loader.style.display="none";
	      if(response.data.status_code == 200){
	       	ps.$store.dispatch('logout').then(res => {
						ps.$q.notify({ message: res , type: 'positive' ,progress: true, });
						ps.$router.push('/');
	  		 	}).catch(error => {
	  		 		console.log(error);
	        			});
	      }
	    }).catch(function(error){
	      console.log(error);
	    });
	   	ps.$router.push('');
		},
		saved_locations_function(){
      var ps = this;
      var loader = document.getElementById('loader2');
      loader.style.display="block";
      let config = { headers: { "Authorization": `Bearer ${ps.$store.state.token}`,}}
      ps.$api.get('/api/favourite-locations-get-two',config).then(function (response) {
        // console.log('response');
        loader.style.display="none";
        ps.saved_locations =  response.data.favourite_locations;
      }).catch(function (error) {
        console.log(error);
      });
    },
  }
}
</script>
<style>
	.bg_style{background-image: linear-gradient(to bottom, #FD9A55 50%, #F8766C 100%);}
</style>
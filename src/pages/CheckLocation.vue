<template>
	<q-layout  view="lHh lpr lFf">
		<q-page-container>
			<div id="loader2" class="pre-loader" style="display:none"></div>
			<q-dialog v-model="location_check" persistent>
				<q-card class="full-width cb-round-borders-20">
					<q-card-section class="text-center">
						<q-avatar class="bg-red">
							<q-icon name="sentiment_dissatisfied" size="xl" class="text-white"></q-icon>
						</q-avatar><br><br>
						<span class="cb-font-16 text-weight-bolder q-my-md"><q-icon size="sm" name="location_on"></q-icon>Service Location Alert</span><br><br>
						<span>{{ pick_not_in_territory }}</span><br>
						<q-btn label="change the location" class="text-red text-bold" @click="$router.push('/home/dashboard_Location')" flat></q-btn>
					</q-card-section>
				</q-card>
			</q-dialog>
     	</q-page-container>
	</q-layout>
</template>
<script>
let isMobile = window.matchMedia("only screen and (max-width: 760px)").matches;
if (!isMobile){
 window.location="https://chotabeta.com/pwa";
}
import axios from 'boot/axios'
import {ref } from 'vue'
export default ({
  setup(){
    return {
      leftDrawerOpen :ref(false),
      latlongs:ref(null),
      name:ref(null),
      Address:ref(''),
      profile_pic:ref(null),
      location_check:ref(false),
      pick_not_in_territory:ref(null)
    }
  },
  mounted () {
  	this.getToken();
  	this.getLocation();
  },
  methods:{
  	getToken(){
  		var ps = this ;
  		ps.access_token = ps.$store.state.token;
  		if(ps.access_token == null){
  			ps.$router.push('/');
  		}  
  	},
  	getLocation() {
  		var ss =  this;
  		if (navigator.geolocation) { navigator.geolocation.getCurrentPosition(this.showPosition, this.showError); }
  		else { ps.$q.notify({ message:"Geolocation is not supported by this browser.", type: 'Warning',progress: true, }); }	
		},
		showPosition(position) {
			var ps = this;
			ps.$store.dispatch('latlongs_data',{'position': position.coords }).then(res => {
				// console.log(ps.$store.state.latlongs,"latlongs");
				// console.log(position.coords,'position');
				ps.getReverseGeocodingData(position.coords.latitude,position.coords.longitude);
	  	}).catch(error => {
	     	console.log(error);
	    });
			// var location =ref(position.coords.latitude +','+ position.coords.longitude);
			// ps.latlongs = location.value
		},
		showError(error) {
		  var ps = this;
		  switch(error.code) {
		    case error.PERMISSION_DENIED:
		    	ps.$q.notify({ message:"User denied the request for Geolocation.", type: 'Warning',progress: true, });
		     	break;
		    case error.POSITION_UNAVAILABLE:
		      	ps.$q.notify({ message:"Location information is unavailable.", type: 'Warning',progress: true, });
		     	break;
		    case error.TIMEOUT:
		      	ps.$q.notify({ message:"The request to get user location timed out.", type: 'Warning' ,progress: true,});
		     	break;
		    case error.UNKNOWN_ERROR:
		     	ps.$q.notify({ message:"An unknown error occurred.", type: 'Warning',progress: true, });
		     	break;
		  }
		},
    territory_checkup(){
    	var ps = this;
    	var loader = document.getElementById('loader2');
	      	loader.style.display="block";
    	let config = { headers: { Authorization: `Bearer ${ps.access_token}` } };
    	ps.$api.get('/api/check-territory2?base_location='+ps.$store.state.latlongs+'&base_pincode=0&cache_hash=&l_number=&lat_lng='+ps.$store.state.latlongs+'&pincode='+ps.$store.state.pincode+'&playstore_version_name=&xid='+ps.$store.state.xid,config).then(function (response) {
    		loader.style.display="none";
      	console.log(response,'territory');
      	if(response.data.change_location_button_status == 1){
      		ps.pick_not_in_territory =  response.data.pick_not_in_territory;
      		ps.location_check = true;
      	}else{
      		ps.$router.push('/Home/Dashboard');
      	}
      }).catch(function (error) {
        console.log(error);
      })
    },
    getReverseGeocodingData(lat, lng) {
    	console.log(lat,lng,"latlongs dataaaaaaaaaaaaaaa");
    	var latlng = new google.maps.LatLng(lat,lng);
    	// This is making the Geocode request
    	var geocoder = new google.maps.Geocoder();
    	geocoder.geocode({ 'latLng': latlng },  (results, status) =>{
        if (status !== google.maps.GeocoderStatus.OK) { alert(status); }
        // This is checking to see if the Geocode Status is OK before proceeding
        if (status == google.maps.GeocoderStatus.OK) {
            // console.log(results);
            var address = (results[0]);
            // console.log(address,"address")
          	this.$store.dispatch('adddress_data',{'address': address }).then(res => {
						this.territory_checkup();
					}).catch(error => {
	     			console.log(error);
	    		});
        }
    	});
		}
  }
})
</script>
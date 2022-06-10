<template>
  <q-layout view="lHh lpr lFf" class="animate__animated animate__slideInRight">
	<q-header class="text-orange-8 bg-white text-bold">
	  <q-toolbar>
		<!-- <q-btn icon="arrow_back_ios" flat size="sm"></q-btn> -->
	  	<q-space></q-space>
		  Order Track
		  <q-space></q-space>
		  <q-space></q-space>
	  </q-toolbar>
	</q-header>
  	<q-page-container>
 	  <div id="loader2" class="pre-loader" style="display:none"></div>
 	  <q-page>
 	  	<div class="full-width" style="min-height: 550px;" id="map-canvas"> 	  	
 	  	<!-- <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60910.91201828438!2d78.3955557446126!3d17.41505064173751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1644564642528!5m2!1sen!2sin" class="full-width" style="min-height:550px" allowfullscreen="" loading="lazy"></iframe> -->
 	  	</div>
	  </q-page>
 	  	<div class="row absolute-bottom q-py-md justify-center bg-white" v-if="cancle_order_button == 1 ">
 	  	  <q-btn label="cancel order" color="orange-9" @click="trackdailog = true"></q-btn>
 	  	</div>
 	  	<q-dialog v-model="trackdailog" position="bottom">
    	  <q-card>
      		<q-card-section class="cb-bg-grey-2  text-bold q-pa-none">
        	  <div class="text-bold text-center" v-close-popup>
          		<q-icon  name="arrow_drop_down" size="sm" class="cb-text-grey-4"></q-icon>
          		<br/>
          		<span class="cb-text-blue-8 text-weight-bolder cb-font-16">{{ rating_text1 }} </span>
        	  </div>
      	 	</q-card-section>
      		<q-card-section class="q-pa-sm">
        	  <div v-for="re in cancellation_reason_predefined_texts" :key="re" class="row items-center">
        	  	<div class="col-8 text-center cb-text-blue-8"> <span class="q-px-sm">{{ re }}</span></div>
			    <div class="col-4"><q-radio v-model="reason" :val="re" color="orange" /></div>
              </div>
              <div class="row justify-center q-pt-md">
              	<q-btn label="cancel order" color="orange-8" dense class="q-px-lg" @click="cancel_order_fun()"></q-btn>
              </div>
          	</q-card-section>
    	  </q-card>
  		</q-dialog>
  	</q-page-container>
  </q-layout>
</template>
<script>
import axios from 'boot/axios'
import { ref } from "vue"
export default {
  setup() {
    return {
      access_token: ref(null),
      xid:ref(null),
      trackdailog:ref(false),
      cancellation_reason_predefined_texts:[],
      reason:ref(null),
      rating_text1:ref(null),
      cancle_order_button:ref(null),
      distance:ref(null),
	    est:ref(null),
	    rating_text2:ref(null),
	    order:ref(null),
    }

  },

  mounted() {
  	var ps = this;
    ps.getAccessToken();  
    this.GetDeliveryBoydata();
    setInterval(function(){  ps.GetDeliveryBoydata() }, 60000);
    // ps.load_data();
    // setInterval(function(){  ps.load_data() }, 60000);

  },

  methods: {
  	load_data(){
  	  var ps = this;
  	  ps.cancle_order_button= 1;
      ps.cancellation_reason_predefined_texts= [
										        "Delivery Boy Not Assigned Yet",
										        " Order Delivery Too Late",
										        " I Forgot Some Items",
										        " I Changed My Mind",
										        " Others"
										    ];
      ps.distance = "";
      ps.est = "";
      ps.rating_text1 = "Rate Your Delivery";
      ps.rating_text2 = "Rate Driver";
      ps.order = {
	    			id: 290220,
	    			uid: "HYU1258675",
	    			status: "701",
	    			delivery_person_id: null,
	    			from_lat_lng: "17.4056861,78.3261244",
	    			to_lat_lng: "17.448294,78.391487",
	    			from_location: "new,Vattinagulapalle, Hyderabad, India, 500075",
	    			to_location: "new,Vattinagulapalle, Hyderabad, India, 500075",
	    			service_id: 11,
	    			order_status_string: "New",
	    			delivery_boy_name: "sandeep",
	    			delivery_boy_img: "",
	    			delivery_boy_rating: "",
	    			delivery_boy_mobile: "",
	    			delivery_boy_bikeno: "12357890",
	    			rider_lat_lng: "17.4056861,78.3261244",
	    			no_of_deliveries: "",
	    			refresh_time: ""
    			};
      if(ps.order.rider_lat_lng){
      	var picklats = ps.order.rider_lat_lng;
      	var pickimg = 'https://chotabeta.app/img/rider_dir.png';
      	var start_title = "<strong>"+"Pick Location"+"</strong>"+"<br/>"+ps.order.rider_lat_lng+"<br/>"+ps.order.delivery_boy_name+','+ps.order.delivery_boy_bikeno;
      }else{
      	var picklats = ps.order.from_lat_lng;
      	var pickimg = 'https://chotabeta.app/img/pickpoint.png';
      	var start_title = "<strong>"+"Pick Location"+"</strong>"+"<br/>"+ps.order.from_location+"<br/>"+"Rider Not Assigned";
      }

      var droplats = ps.order.to_lat_lng;
      var dropimg = 'https://chotabeta.app/img/droppoint1.png';
      var end_title = "<strong>"+"Drop Location"+"</strong>"+"<br/>"+ps.order.to_location+"<br/>"+"Rider Not Assigned";
      ps.initMap(picklats,droplats,pickimg,dropimg,start_title,end_title);
  	},
    getAccessToken() {
      var ps = this;
      if(ps.$store.state.token){ ps.access_token = ps.$store.state.token; }
      else{ ps.access_token = ps.$store.state.token_cb; }

      if(ps.$store.state.xid){ps.xid = ps.$store.state.xid;}
      else{ps.xid = ps.$store.state.xid_cb;}

      if(ps.access_token == null ||  !ps.access_token){ ps.$router.push('/'); }
    },
    GetDeliveryBoydata(){
      var ps = this;
      var loader = document.getElementById('loader2');
      loader.style.display="block";
      let config = { headers: { "Authorization": `Bearer ${ps.access_token}`,}}
      ps.$api.post('/api/vendor/get-userapp-rider-latlong?order_id='+ps.$route.query.uid,config).then(function (response) {
        console.log('response');
        loader.style.display="none";
        ps.cancle_order_button = response.data.cancle_order_button;
    		ps.cancellation_reason_predefined_texts = response.data.cancellation_reason_predefined_texts;
    		ps.distance = response.data.distance;
    		ps.est = response.data.est;
    		ps.rating_text1 = response.data.rating_text1;
    		ps.rating_text2 = response.data.rating_text2;
    		ps.order = response.data.order;
    		var picklats = ps.order.from_lat_lng;
        var droplats = ps.order.to_lat_lng;
        var pickimg = 'https://chotabeta.app/img/pickpoint.png';
        var dropimg = 'https://chotabeta.app/img/droppoint1.png';
        var start_title = "<strong>"+"Pick Location"+"</strong>"+"<br/>"+ps.order.from_location+"<br/>"+"Rider Not Assigned";
        var end_title = "<strong>"+"Drop Location"+"</strong>"+"<br/>"+ps.order.to_location+"<br/>"+"Rider Not Assigned";
        ps.initMap(picklats,droplats,pickimg,dropimg,start_title,end_title);
      }).catch(function (error) {
        console.log(error);
      })
    },
    initMap(picklat,droplat,pickimg,dropimg,start_title,end_title){
      console.log(picklat,"picklat",droplat,"droplat",pickimg,"pickimg",dropimg,"dropimg",start_title,"start_title",end_title,"end_title")
      var ps = this;
      var directionsDisplay;
      var start = picklat;
      var end = droplat;
      var directionsService = new google.maps.DirectionsService();
      var map = null;
      var marker;
      var icons = {
              start: new google.maps.MarkerImage(
	              pickimg,
	              new google.maps.Size( 50, 50 ),
	              new google.maps.Point( 0, 0 ),
	              new google.maps.Point( 22, 32 )
              ),
              end: new google.maps.MarkerImage(
	              dropimg,
	              new google.maps.Size( 50, 50 ),
	              new google.maps.Point( 0, 0 ),
	              new google.maps.Point( 22, 32 )
              )
            };
      directionsDisplay = new google.maps.DirectionsRenderer({suppressMarkers: true});
      var mapOptions = {
              zoom: 17,
              mapTypeId: google.maps.MapTypeId.ROADMAP,
              center: new google.maps.LatLng(picklat),
            };
      map = new google.maps.Map(document.getElementById('map-canvas'),mapOptions);
      directionsDisplay.setMap(map);
      var request = {
              origin: start,
              destination: end,
              travelMode: google.maps.TravelMode.DRIVING
            };
      directionsService.route(request, function(response, status) {
        if (status == google.maps.DirectionsStatus.OK) {
          directionsDisplay.setDirections(response);
          var leg = response.routes[ 0 ].legs[ 0 ];
          makeMarker( leg.start_location, icons.start, start_title );
          makeMarker( leg.end_location, icons.end, end_title );
        }
      });
      function makeMarker( position, icon, title ) {
        marker = new google.maps.Marker({
      	        position: position,
                map: map,
                icon: icon,
                title: title
              });
        var infowindow = new google.maps.InfoWindow();
        google.maps.event.addListener(marker, 'click', (function(marker) {
	      return function() {
	        infowindow.setContent(title);
	        infowindow.open(map, marker);
	      }
	    })(marker));
      }
    },
    cancel_order_fun(){
      var ps = this;
      if(!ps.reason){
	   ps.$q.notify({ message:"Please Select Reason", type: 'negative',progress: true, });
      	return false;
      }
      var loader = document.getElementById('loader2');
      loader.style.display="block";
      let formData  = new FormData();
      formData.append('reason',ps.reason)
      formData.append('order_id',ps.$route.query.uid)
      let config = { headers: { "Authorization": `Bearer ${ps.access_token}`,}}
      ps.$api.post('/api/request-order-cancellation',formData,config).then(function (response) {
        // console.log('response');
        loader.style.display="none";
      }).catch(function (error) {
        console.log(error);
      })
    },
  },
}
</script>
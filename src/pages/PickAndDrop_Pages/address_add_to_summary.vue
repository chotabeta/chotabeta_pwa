<template>
<q-layout view="lHh lpr lFf">
  <q-header>
    <q-toolbar class="cb-bg-white-2 cb-text-blue-8">
      <q-btn flat dense round icon="arrow_back"  @click="$router.push('PickAndDrop_Checkout')"></q-btn>
      <span class="cb-font-16 text-weight-bolder q-px-sm">Search For Your Location</span>
    </q-toolbar>
  </q-header>
  <q-page-container>
    <q-page class="q-px-md q-py-xs">
      <div id="loader2" class="pre-loader" style="display:none"></div>
      <div class="cb-shadow-1 q-px-sm cb-round-borders-10" >
        <q-input borderless placeholder="Address Search e.g. Prashant Towers" @click="initAutocomplete()" v-model="location_search" for="toLocation1">
          <template v-slot:prepend> <q-icon name="search" class="cb-text-orange-8" /> </template>
        </q-input>
      </div>

      <div class="row justify-center q-py-sm text-bold"><span class="cb-text-grey-4">OR</span></div>

      <div class="row cb-text-blue-8 text-bold">
        <q-img src="https://chotabeta.app/dev/testenv/public/imgs/google-maps-48.png" width="30px"/>
        <span class="cb-text-blue-4 cb-font-16 q-px-sm">Choose Location from Map</span>
      </div>

      <div class="row justify-center q-py-sm text-bold"><span class="cb-text-grey-4">OR</span></div>

      <div class="row cb-text-blue-8 text-bold">
        <q-img src="https://chotabeta.app/dev/testenv/public/imgs/house-48.png" width="30px" />
        <span class="cb-text-blue-4 cb-font-16 q-px-sm">ChotaBeta Communities</span>
      </div>

      <div class="text-center cb-text-grey-4 cb-round-borders-10 cb-shadow-1 q-my-md q-py-xs text-bold">
        <span>Choose Your Community</span>
      </div>

      <div class="row">
        <div class="col-12"><span class="cb-text-blue-8 cb-font text-bold">Recent Searches</span></div>
        <div class="col-12 row q-pl-md">
          <div class="col-12 flex q-py-xs" v-for="i in 3">
            <q-img src="https://chotabeta.app/dev/testenv/public/imgs/house-48.png" width="25px"></q-img>
            <div class="q-px-md">
              <span class="cb-text-blue-8">Other</span><br>
              <span class="cb-text-grey-4" style="font-size: 12px;">Not Assigned</span>
            </div>
             <q-separator />
          </div>
        </div>
        <div class="col-12 text-right cb-text-grey-4 q-py-sm">View More</div>
      </div>

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

      <q-dialog  v-model="territory_checkup_dialog" persistent>
        <q-card class="cb-round-borders-20">
          <q-card-section class="text-center">
            <q-avatar color="red" text-color="white" size="60px" icon="sentiment_dissatisfied" font-size="60px"/><br>
            <q-icon name="location_on" size="sm" class="cb-text-grey-5 q-py-sm"></q-icon>
            {{ territory_data.custom_text }}<br>
            {{ territory_data.pick_and_drop_too_far_away }}<br>
            <q-btn label="change the location" class="text-red text-bold" flat @click="territory_checkup_dialog = false,location_search =null "></q-btn>
          </q-card-section>
        </q-card>
      </q-dialog >

    </q-page>
  </q-page-container>
</q-layout>
</template>
<script>
import axios from 'boot/axios'
import {ref } from 'vue'
export default ({
  setup(){
    return {
      access_token:ref(null),
      saved_locations:ref([]),
      carousels:ref(0),
      step: ref(1,2,3),
      data:ref(null),
      location_search:ref(null),
      searched_latlong:ref(null),
      selected_location:ref(null),
      territory_checkup_dialog:ref(false),
      territory_data:ref([]),
    }
  },
  mounted () {
    this.getToken();
    this.pickanddrop_locationsearch();
  },
  methods:{
    getToken(){
      var ps = this ;
      ps.access_token = ps.$store.state.token;
      if(ps.access_token == null){ ps.$router.push(''); }
    },
    pickanddrop_locationsearch(){
      var ps = this;
      var loader = document.getElementById('loader2');
          loader.style.display="block";
      let config = { headers: { "Authorization": `Bearer ${ps.access_token}`,}}
        ps.$api.get('/api/favourite-locations-get-two',config).then(function (response) {
          loader.style.display="none";
          // console.log('response');
          ps.saved_locations =  response.data.favourite_locations;
        }).catch(function (error) {
          console.log(error);
        })
    },
    initAutocomplete(){
        var ps = this;
        var input_data = document.getElementById('toLocation1');
        const options = {
         fields: ["formatted_address", "geometry.location"],
        };
        var autocomplete = new google.maps.places.Autocomplete(input_data,options);
        // console.log(autocomplete,'autocomplete');
        google.maps.event.addListener(autocomplete, 'place_changed', function () {
              var place = autocomplete.getPlace();
              // console.log(place,"place",place.formatted_address);
              var aaa=place.geometry.location.lat();
              var bbb = place.geometry.location.lng();
              var x = aaa+ ',' +bbb;
              // console.log(x,"jygsdyu");
              ps.location_search = place.formatted_address;
              ps.searched_latlong  = x;
              // console.log(place);
              ps.territory_checkup();
            });
    },
    territory_checkup(){
      var ps = this;
      var myArray = ps.searched_latlong.split(",");
      var latlng = new google.maps.LatLng(myArray[0], myArray[1]);
      // This is making the Geocode request
      var geocoder = new google.maps.Geocoder();
      geocoder.geocode({ latLng: latlng }, (results, status) => {
        if (status !== google.maps.GeocoderStatus.OK) { alert(status); }
        // This is checking to see if the Geocode Status is OK before proceeding
        if (status == google.maps.GeocoderStatus.OK) {
          // console.log(results);
          var address = results[0];
          // console.log(address);
          var length = address.address_components.length;
          var pincode = address.address_components[length - 1].long_name;
            var loader = document.getElementById('loader2');
          loader.style.display="block";
          let config = { headers: { "Authorization": `Bearer ${ps.access_token}`,}}
          ps.$api.get('/api/check-territory2?lat_lng='+ps.searched_latlong+'&pincode='+pincode+'&xid='+ps.$store.state.xid,config).then(function (response) {
            loader.style.display="none";
              console.log(response);
              if( response.data.full_screen_error_status == 0 ){
                ps.$router.push('/add_address_page?searchaddress='+ps.location_search+'&searched_latlong='+ps.searched_latlong+'&pincode='+pincode+'&address='+ps.$route.query.address);
              }else{
                ps.territory_data  = response.data;
                ps.territory_checkup_dialog = true;
              }
            }).catch(function (error) {
              console.log(error);
            });
      }
    });
    },
    saved_location_add(location){
      var ps = this;
      // console.log(location,"saved location");
      ps.selected_location =  location;
      ps.getReverseGeocodingData(location.location);
    },
    getReverseGeocodingData(latlongs) {
      var ps= this;
      // console.log(latlongs,"latlongs dataaaaaaaaaaaaaaa");
      var myArray = latlongs.split(',');
      var latlng = new google.maps.LatLng(myArray[0],myArray[1]);
      // This is making the Geocode request
      var geocoder = new google.maps.Geocoder();
      geocoder.geocode({ 'latLng': latlng },  (results, status) =>{
        if (status !== google.maps.GeocoderStatus.OK) { 
          // console.log(google.maps.GeocoderStatus);
          alert(status); }
        // This is checking to see if the Geocode Status is OK before proceeding
        if (status == google.maps.GeocoderStatus.OK) {
          // console.log(results);
          var address = (results[0]);
          var length = address.address_components.length;
          ps.selected_location.postal_code = address.address_components[length-1].long_name;

          if(ps.$route.query.address =="1"){          
            localStorage.setItem('pickup_address',JSON.stringify(ps.selected_location));
            // console.log(localStorage.getItem('pickup_address'));
            ps.$router.push('/PickAndDrop_s1?address=1');
          }
          if(ps.$route.query.address =="2"){
            localStorage.setItem('delivery_address',JSON.stringify(ps.selected_location));
            // console.log(localStorage.getItem('pickup_address'));
            if(localStorage.getItem('pickup_address') == null || localStorage.getItem('pickup_address') == ''){
              ps.$router.push('/PickAndDrop_s1?address=2');
            }else{
              ps.$router.push('/PickAndDrop_s1?address=12');
            }
          }
        }
      });
    },
    screen_back_redirection(){
      var ps = this;
      if(ps.$route.query.address =="1"){ ps.$router.push('PickAndDrop_s1?address=1'); }
      else if(ps.$route.query.address =="2"){ ps.$router.push('PickAndDrop_s1?address=2'); }
    },
  }
})
</script>
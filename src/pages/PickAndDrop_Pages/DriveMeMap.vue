<template>
<q-layout  view="lHh lpr lFf">
  
<q-page-container>
  <div id="loader2" class="pre-loader" style="display:none"></div>
  <q-page class="q-px-sm">
        <div class="row q-py-sm" style="width:95vw;min-width:95vw;height:70vh; min-height:70vh !important">
    <q-card class="my-card" >
      <!-- <q-img src="https://cdn.quasar.dev/img/chicken-salad.jpg" /> -->

     
      <q-card-section style="width:95vw; height:100%">
          <div class="row" style="width: 100%; height:100%;" ><iframe width="100%"  frameborder="0" scrolling="no" marginheight="0" marginwidth="0"
           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60910.91201828438!2d78.3955557446126!3d17.41505064173751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1644564642528!5m2!1sen!2sin">
           <a href="https://www.google.com/maps">Map</a></iframe></div>
      </q-card-section>
        


      
    </q-card>
    </div>

       <div class="row q-py-sm" style="width:95vw;min-width:95vw;height:30vh; min-height:30vh !important">
    <q-card class="my-card" >

      <q-card-section style="width:95vw;" class="q-pt-none">
          <div class=" col-12 row q-py-md" style="max-height:50px;" >
              <div class="col-5">
                  <span style="font-size:17px;color:blue"><b>Trip Type</b></span>
              </div>
              <div class="col-7">
                  <q-btn-toggle style="margin-left:7%"
                        v-model="dm_trip_type"
                        push size="sm"
                        toggle-color="primary"
                        :options="[
                        {label: 'One way', value: '0'},
                        {label: 'Round trip', value: '1'},
                        ]"
                    />

              </div>
              </div>
          <div class=" col-12 row q-py-md" style="max-height:50px;">
              <div class="col-5">
                  <span style="font-size:17px;color:blue"><b>Vehicle Type</b></span>
              </div>
           <div class="col-7">
                  <q-btn-toggle style="margin-left:7%"
                        v-model="dm_veh_type"
                        push size="sm"
                        toggle-color="primary"
                        :options="[
                        {label: 'Automatic', value: '0'},
                        {label: 'Manual', value: '1'},
                        ]"
                    />

              </div>
              </div>
          <div class=" col-12 row q-py-md" style="max-height:50px;">
              <div class="col-6 q-px-sm">
                <q-btn color="orange" class="full-width" label="Schedule" @click="calander_dailog_1 = true" />
              </div>
           <div class="col-6 q-px-sm">
                  <q-btn color="orange" class="full-width" label="Book" @click="go_to_dm_summ()" />

              </div>
              </div>
      </q-card-section>
        


      
    </q-card>
    </div>

      <q-dialog v-model="calander_dailog_1" persistent>
          <q-card class="q-dialog-plugin cb-round-borders-10">
            <q-date v-model="pick_date" mask="YYYY-MM-DD" color="orange" class="fit" @click="select()" v-if="date_change != 1"></q-date>
            <q-time format24h v-model="pick_time" color="orange" mask="HH:mm:ss" class="fit" v-if="date_change == 1"></q-time>
            <q-card-actions align="right" v-if="date_change == 1">
              <q-btn flat label="cancel" @click="pickdate_selection(),calander_dailog_1 = false"></q-btn>
              <q-btn flat label="Ok" @click="store_date_time();calander_dailog_1 = false"></q-btn>
            </q-card-actions>
          </q-card>
        </q-dialog>
    

  </q-page>

</q-page-container>
</q-layout>
</template>



<script>

let isMobile = window.matchMedia("only screen and (max-width: 760px)").matches;
if (!isMobile){
     window.location="https://chotabeta.com/pwa";
}

//   function initMap(picklat,droplat,pickimg,dropimg,start_title,end_title) {
//     // var picklat = parseFloat(picklat);
//     //   var droplat = parseFloat(droplat);
//     // var picklat = '17.50405332475551,78.3732865330047';
//     var lat = 17.50405332475551;
//     var lng = 78.3732865330047;
//     var d_lat = 17.49742283903829;
//     var d_lng = 78.42581491418781;
//       // var droplat = '17.49742283903829,78.42581491418781';
//       console.log("initmappp",picklat,droplat,pickimg,dropimg,start_title,end_title);
//       var directionsDisplay;
// // var start = picklat;
// // var end = droplat;
// var directionsService = new google.maps.DirectionsService();
// var map = null;
//  var icons = {
//   start: new google.maps.MarkerImage(
//    pickimg,
//    new google.maps.Size( 50, 50 ),
//    new google.maps.Point( 0, 0 ),
//    new google.maps.Point( 22, 32 )
//   ),
//   end: new google.maps.MarkerImage(
//    dropimg,
//    new google.maps.Size( 50, 50 ),
//    new google.maps.Point( 0, 0 ),
//    new google.maps.Point( 22, 32 )
//   )
//  };
//   directionsDisplay = new google.maps.DirectionsRenderer({suppressMarkers: true});
//   var mapOptions = {
//     zoom: 17,
//     mapTypeId: google.maps.MapTypeId.ROADMAP,
//     // center: new google.maps.LatLng(picklat)
//     center: {
//             lat: lat,
//             lng: lng
//         },
//   };
//   // alert(document.getElementById('dm_map'));
//   map = new google.maps.Map(document.getElementById('dm_map'),
//       mapOptions);
//   directionsDisplay.setMap(map);
//   // alert(map);

//   var request = {
//     // origin: picklat,
//     origin:  {
//             lat: lat,
//             lng: lng
//         },
//     destination:  {
//             lat: d_lat,
//             lng: d_lng
//         },
//     travelMode: google.maps.TravelMode.DRIVING
//   };
//   directionsService.route(request, function(response, status) {
//     if (status == google.maps.DirectionsStatus.OK) {
//       directionsDisplay.setDirections(response);
//         var leg = response.routes[ 0 ].legs[ 0 ];
//   makeMarker( leg.start_location, icons.start, start_title );
//   makeMarker( leg.end_location, icons.end, end_title );
//     }
//   });

// function makeMarker( position, icon, title ) {
//  var marker = new google.maps.Marker({
//   position: position,
//   map: map,
//   icon: icon,
//   title: title
//  });
// var infowindow = new google.maps.InfoWindow();

// google.maps.event.addListener(marker, 'click', (function(marker) {
//   return function() {
//     infowindow.setContent(title);
//     infowindow.open(map, marker);
//   }
// })(marker));

// }

//     }



import axios from 'boot/axios'
import {ref } from 'vue'
export default ({
  setup(){
    return {
      access_token:ref(null),
        dm_trip_type: ref('0'),
        dm_veh_type: ref('0'),
        calander_dailog_1: ref(false),
        date_change:ref(null),
      
    }
  },
  mounted () {
    this.getToken();
    this.load_map();
  
  },
  methods:{
    getToken(){
      var ps = this ;
      ps.access_token = ps.$store.state.token;
      if(ps.access_token == null){
        ps.$router.push('');
      }
    },

    load_map(){
      var ps = this;
      var pickup_address = JSON.parse(localStorage.getItem('pickup_address'));
      var drop_address = JSON.parse(localStorage.getItem('delivery_address'));  
      var pickup_latlng = parseInt(pickup_address.location);
      var drop_latlng = parseInt(drop_address.location);
      var pickimg = 'https://chotabeta.app/img/pickpoint.png';
      var dropimg = 'https://chotabeta.app/img/droppoint1.png';
      var start_title = "<strong>"+"Pick Location"+"</strong>"+"<br/>"+pickup_address.name+"<br/>"+"Rider Not Assigned" ;
      var end_title = "<strong>"+"Drop Location"+"</strong>"+"<br/>"+drop_address.name+"<br/>"+"Rider Not Assigned";
      $(document).ready(function(){
        initMap(pickup_latlng,drop_latlng,pickimg,dropimg,start_title,end_title);
      });
    },
    go_to_dm_summ(){
      var ps = this;
      localStorage.setItem('dm_trip_type',ps.dm_trip_type);
      localStorage.setItem('dm_veh_type',ps.dm_veh_type);
      localStorage.removeItem('usage_hrs'); //new
      ps.$router.push('/DriveMe_Summary');
    },
    select(){
      var ps = this;
      ps.date_change = 1;
    },

    store_date_time(){
      var ps = this;
      localStorage.setItem('pick_date',ps.pick_date);
      localStorage.setItem('pick_time',ps.pick_time);
       ps.date_change = '';

    }
  }
})
</script>

<style scoped>
.coupon-wrap{ flex-wrap: nowrap;overflow: scroll;overflow-y: hidden; }
::-webkit-scrollbar { width: 0;background: transparent; }
::-webkit-scrollbar-thumb {background: transparent;}
</style>

<style lang="sass" scoped>
.my-custom-toggle
  border: 1px solid #027be3
</style>
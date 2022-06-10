<template>
<q-layout  view="lHh lpr lFf">
  <q-header>
    <q-toolbar class="cb-bg-white-2 cb-text-blue-8">
      <q-btn flat dense round icon="arrow_back"  @click="Screen_Back_Redirection()"/>
    </q-toolbar>
  </q-header>
  <q-page-container class="animate__animated animate__slideInRight">
    <div id="loader2" class="pre-loader" style="display:none"></div>
    <q-page class="q-pa-sm">
        <q-card class="q-pa-sm">
          <q-card-section style="height:105vw" id="map-canvas"></q-card-section>
        </q-card>
        <q-card class="q-mt-sm">
          <q-card-section >
            <div class="row">
              <span class="text-subtitle1 text-bold text-blue-10">Trip Type</span>
              <q-space></q-space>
              <q-btn-toggle v-model="dm_trip_type" push size="md" toggle-color="primary" :options="[{label: 'One way', value: '0'},{label: 'Round trip', value: '1'},]"/>
            </div>
            <div class="row q-py-sm">
              <span class="text-subtitle1 text-blue-10"><b>Vehicle Type</b></span>
              <q-space></q-space>
              <q-btn-toggle v-model="dm_veh_type" push size="md" toggle-color="primary" :options="[{label: 'Automatic', value: '0'},{label: 'Manual', value: '1'},]"/>
            </div>
            <div class="row q-pt-sm">
              <div class="col-6 q-px-sm">
                <q-btn color="orange" class="full-width" label="Schedule" @click="calander_dailog_1 = true" />
              </div>
              <div class="col-6 q-px-sm">
                <q-btn color="orange" class="full-width" label="Book" @click="go_to_dm_summ()" />
              </div>
            </div>
          </q-card-section>
        </q-card>

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
      xid:ref(null),
    }
  },
  mounted () {
    this.getToken();
    this.mypath();
    this.load_map();
  
  },
  methods:{
    getToken(){
      var ps = this ;
      if(ps.$store.state.token){ ps.access_token = ps.$store.state.token; }
      else{ ps.access_token = ps.$store.state.token_cb; }
      if(ps.$store.state.xid){ps.xid = ps.$store.state.xid;}
      else{ps.xid = ps.$store.state.xid_cb;}
      if(ps.access_token == null ||  !ps.access_token){ ps.$router.push('/'); }
    },

    // load_map(){
    //   var ps = this;
    //   var pickup_address = JSON.parse(sessionStorage.getItem('pickup_address'));
    //   var drop_address = JSON.parse(sessionStorage.getItem('delivery_address'));  
    //   var pickup_latlng = parseInt(pickup_address.location);
    //   var drop_latlng = parseInt(drop_address.location);
    //   var pickimg = 'https://chotabeta.app/img/pickpoint.png';
    //   var dropimg = 'https://chotabeta.app/img/droppoint1.png';
    //   var start_title = "<strong>"+"Pick Location"+"</strong>"+"<br/>"+pickup_address.name+"<br/>"+"Rider Not Assigned" ;
    //   var end_title = "<strong>"+"Drop Location"+"</strong>"+"<br/>"+drop_address.name+"<br/>"+"Rider Not Assigned";
    //   $(document).ready(function(){
    //     initMap(pickup_latlng,drop_latlng,pickimg,dropimg,start_title,end_title);
    //   });
    // },
    go_to_dm_summ(){
      var ps = this;
      sessionStorage.setItem('dm_trip_type',ps.dm_trip_type);
      sessionStorage.setItem('dm_veh_type',ps.dm_veh_type);
      sessionStorage.removeItem('usage_hrs'); //new
      ps.$router.push('/DriveMe_Summary');
    },
    select(){
      var ps = this;
      ps.date_change = 1;
    },
    store_date_time(){
      var ps = this;
      sessionStorage.setItem('pick_date',ps.pick_date);
      sessionStorage.setItem('pick_time',ps.pick_time);
      ps.date_change = '';
    },
    load_map(){
      var ps = this;
      var pickup_address = JSON.parse(sessionStorage.getItem('pickup_address'));
      var drop_address = JSON.parse(sessionStorage.getItem('delivery_address'));  
      var pickup_latlng = pickup_address.location;
      var drop_latlng = drop_address.location;
      var pickimg = 'https://chotabeta.app/img/pickpoint.png';
      var dropimg = 'https://chotabeta.app/img/droppoint1.png';
      var start_title = "<strong>Pick Location</strong><br/>"+pickup_latlng;
      var end_title = "<strong>Drop Location</strong><br/>"+drop_latlng;
      ps.initMap(pickup_latlng,drop_latlng,pickimg,dropimg,start_title,end_title);
    },
    initMap(picklat,droplat,pickimg,dropimg,start_title,end_title){
      // console.log(picklat,"picklat",droplat,"droplat",pickimg,"pickimg",dropimg,"dropimg",start_title,"start_title",end_title,"end_title")
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
    mypath(){
      var ps=  this;
      var myallpaths = [];
      var i = 0;
      if(sessionStorage.getItem('mypath')){
        myallpaths = JSON.parse(sessionStorage.getItem('mypath'));
      }
      myallpaths.forEach(( path,index ) => {
        if(ps.$route.fullPath == path){
          if(i == 0){ i = index; }
        }
      });
      if(i == 0){
        myallpaths.push(ps.$route.fullPath);
      }else{
        for(var j=1;j<= myallpaths.length;++j){
          if(j<=i){ }else{ myallpaths.splice(j,1); }
        }
      }
      sessionStorage.setItem('mypath',JSON.stringify(myallpaths));
    },
    Screen_Back_Redirection(){
      var ps = this;
      var myallpaths = JSON.parse(sessionStorage.getItem('mypath'));
      var previous = myallpaths.length;
      ps.$router.push(myallpaths[previous-2]);
    }
  }
})
</script>
<style scoped>
.coupon-wrap{ flex-wrap: nowrap;overflow: scroll;overflow-y: hidden; }
::-webkit-scrollbar { width: 0;background: transparent; }
::-webkit-scrollbar-thumb {background: transparent;}
.my-custom-toggle{ border: 1px solid #027be3; }
</style>
<template>
<q-layout  view="lHh lpr lFf">

  <q-header>
    <q-toolbar class="cb-bg-white-2 cb-text-blue-8">
      <q-btn flat dense round icon="arrow_back"  @click="Screen_Back_Redirection()"/>
      <q-btn icon="place" class="q-pa-none cb-font-12" borderless flat :label="$store.state.showaddress"></q-btn>
      <q-space></q-space>
      <q-btn round dense icon="notifications" flat @click="$router.push('/home/Notification')"> 
        <q-badge  color="red" rounded floating style="margin-top:8px;margin-right: 8px;"></q-badge>
      </q-btn>
      <q-btn round dense icon="shopping_cart" flat>
        <q-badge   class="cb-bg-orange-8" rounded floating >0</q-badge>
      </q-btn>
    </q-toolbar>
  </q-header>

  <q-page-container class="animate__animated animate__slideInRight">
    <q-page class="q-pb-sm q-px-sm">
      <div id="loader2" class="pre-loader" style="display:none"></div>
		  <q-carousel v-model="carousels" swipeable style="height:164px" class="cb-shadow-1 q-my-md cb-round-borders-10" navigation animated infinite control-color="primary">
			  <template v-slot:navigation-icon="{ active, btnProps, onClick }">
      		<q-btn v-if="active" size="xs" :icon="btnProps.icon" color="red-7" flat round dense @click="onClick" />
      		<q-btn v-else :icon="btnProps.icon" color="grey-5" class="q-px-none" size="xs" flat round dense @click="onClick" />
   		  </template>
     	  <q-carousel-slide :name="index" class="column no-wrap q-pa-none" v-for="(offer,index ) in sliders" :key="offer" >
        	<q-img class="rounded-borders" :src="offer.link"></q-img>
      	</q-carousel-slide>
      </q-carousel>

      <q-form class="full-height" @submit="onsubmit">
        <div class="row">
          <div class="col-12 row">
            <div class="col-1 text-center">
              <q-icon name="radio_button_checked" size="sm" color="orange" v-if="picked_address"></q-icon>
              <q-icon name="radio_button_unchecked" size="sm" color="grey" v-else></q-icon>
            </div>
            <div class="col-11 q-px-md column justify-center cb-text-blue-8 text-bold">Pickup Address</div>
          </div> 
          <div class="col-12 row">
            <div class="col-1 column items-center justify-center text-bold ">
              <span style="transform: rotate(90deg);" class="cb-text-orange-8" v-if="picked_address">.........</span>
              <span style="transform: rotate(90deg);" class="text-black" v-else>.........</span>
            </div>
            <div class="col-11 q-px-md q-my-sm">
              <div class="cb-shadow-1 q-pa-sm row items-center cb-round-borders-10 cb-font-12" @click="$router.push('Search_location?address=1')">
                <div style="width:93%;overflow-y:scroll;height:50px;word-wrap: break-word;" class="row items-center">{{ picked_address }}</div>
                <div style="width:7%"><q-icon name="search" class="text-right text-bold cb-text-orange-8" size="sm"></q-icon></div>
              </div>
            </div>
          </div> 
          <div class="col-12 row">
            <div class="col-1 text-center">
              <q-icon name="radio_button_checked" size="sm" color="orange" v-if="delivery_address"></q-icon> 
              <q-icon name="radio_button_unchecked" size="sm" color="grey" v-else></q-icon> 
            </div>
            <div class="col-11 q-px-md column justify-center cb-text-blue-8 text-bold">Delivery Address</div>
          </div>
          <div class="col-12 row">
            <div class="col-1 column items-center justify-center text-bold">
              <span style="transform: rotate(90deg);" class="cb-text-orange-8" v-if="delivery_address">.........</span>
              <span style="transform: rotate(90deg);" class="text-black" v-else>.........</span>
            </div>
            <div class="col-11 q-px-md q-my-sm">
              <div class="cb-shadow-1 q-pa-sm row items-center cb-round-borders-10 cb-font-12" @click="$router.push('Search_location?address=2')">
                <div style="width:93%;overflow-y:scroll;height:50px;word-wrap: break-word;" class="row items-center">{{ delivery_address }}</div>
                <div style="width:7%"><q-icon name="search" class="text-right text-bold cb-text-orange-8" size="sm"></q-icon></div>
              </div>
            </div>
          </div> 
          <div class="col-12 row">
            <div class="col-1 text-center">
              <q-icon name="radio_button_checked" size="sm" color="orange" v-if="instructions"></q-icon>
              <q-icon name="radio_button_unchecked" size="sm" color="grey" v-else></q-icon>
            </div>
            <div class="col-11 q-px-md column justify-center cb-text-blue-8 text-bold">Any Instructions</div>
          </div>
          <div class="col-12 row">
            <div class="col-1"></div>
            <div class="col-11 q-px-md">
              <div class="cb-shadow-1 cb-round-borders-10 q-px-sm">
                <q-input borderless dense placeholder="E.g Please call before delivery" v-model="instructions"></q-input>
              </div>
            </div>
          </div>
        </div>
        <div class="row justify-center q-mt-xl q-pt-xl">
          <q-btn type="submit" class="q-px-lg cb-bg-orange-8 text-white" label="Confirm"></q-btn>
        </div>
      </q-form>

      <q-dialog  v-model="territory_checkup_dialog" persistent>
        <q-card class="cb-round-borders-20">
          <q-card-section class="text-center">
            <q-avatar color="red" text-color="white" size="60px" icon="sentiment_dissatisfied" font-size="60px"/><br>
            <q-icon name="location_on" size="sm" class="cb-text-grey-5 q-py-sm"></q-icon>
            {{ territory_data.custom_text }}<br>
            {{ territory_data.pick_and_drop_too_far_away }}<br>
            <q-btn label="change the location" class="text-red text-bold" flat @click="territory_checkup_dialog = false"></q-btn>
          </q-card-section>
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
    	sliders:ref(null),
    	carousels:ref(0),
      step: ref(1,2,3),
      picked_address:ref(null),
      delivery_address:ref(null),
      instructions:ref(null),
      delivery_address_array:ref([]),
      picked_address_array:ref([]),
      territory_checkup_dialog:ref(false),
      territory_data:ref([]),
      vicinity_range:ref(null),
      category:ref(null),
      xid:ref(null),
    }
  },
  mounted () {
    var ps = this;
  	ps.getToken();
    ps.mypath();
    ps.pickanddrop_sliders();
    ps.pickupaddress_select();   
    localStorage.removeItem('coupon1');
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
  	pickanddrop_sliders(){
  		var ps = this;
      var loader = document.getElementById('loader2');
        loader.style.display="block";
    	let config = { headers: { "Authorization": `Bearer ${ps.access_token}`,}}
      ps.$api.get('/api/pick-and-drop-sliders',config).then(function (response) {
        loader.style.display="none";
      	// console.log('response');
        ps.sliders =  response.data.sliders;
      }).catch(function (error) {
      	console.log(error);
        // ps.$q.notify({ message: error, type: "negative",}); 
      });
  	},
    pickupaddress_select(){
      var ps = this;
      let config = { headers: { "Authorization": `Bearer ${ps.access_token}`,}}
      if(ps.$route.query.address == null ){
        var loader = document.getElementById('loader2');
        loader.style.display="block";
        ps.$api.get('/api/check-territory2?lat_lng='+ps.$store.state.latlongs+'&pincode='+ps.$store.state.pincode+'&xid='+ps.xid,config).then(function (response) {
          loader.style.display="none";
          if(response.data.full_screen_error_status == 0){
              ps.territory_data = response.data;
              ps.picked_address_array = { 
                                          flat_no: null,
                                          location: ps.$store.state.latlongs,
                                          location_type: null,
                                          name: ps.$store.state.address,
                                          postal_code: ps.$store.state.pincode,
                                          user_id: ps.$store.state.xid,
                                          territory_id:response.data.zone_id,
                                        }
              localStorage.setItem('pickup_address',JSON.stringify(ps.picked_address_array));
              ps.picked_address  = ps.picked_address_array.name; 
              }else{
                ps.territory_checkup_dialog =  true;
              }
            }).catch(function (error) {
              console.log(error);
              // ps.$q.notify({ message: error, type: "negative",});
            });
      }else if(ps.$route.query.address == 1){
        var loader = document.getElementById('loader2');
        loader.style.display="block";
        var picked_address_array =  JSON.parse(localStorage.getItem('pickup_address'));
        ps.$api.get('/api/check-territory2?lat_lng='+picked_address_array.location+'&pincode='+picked_address_array.postal_code+'&xid='+ps.xid,config).then(function (response) {
          loader.style.display="none";
          if(response.data.full_screen_error_status == 0){
            ps.territory_data = response.data;
              ps.picked_address_array = {   drop_flat:      picked_address_array.drop_flat,
                                            flat_no:        picked_address_array.flat_no,
                                            id:             picked_address_array.id,
                                            location:       picked_address_array.location,
                                            location_type:  picked_address_array.location_type,
                                            name:           picked_address_array.name,
                                            nick_name:      picked_address_array.nick_name,
                                            pick_flat:      picked_address_array.pick_flat,
                                            postal_code:    picked_address_array.postal_code,
                                            updated_at:     picked_address_array.updated_at,
                                            user_id:        picked_address_array.user_id,
                                            territory_id:   response.data.zone_id,
                                        }
              ps.picked_address        =  ps.picked_address_array.name;
              localStorage.setItem('pickup_address',JSON.stringify(ps.picked_address_array));
              }
              else{
                ps.territory_checkup_dialog =  true;
              }
            }).catch(function (error) {
              console.log(error);
              // ps.$q.notify({ message: error, type: "negative",});
            });
      }else if(ps.$route.query.address == 2){
        var loader = document.getElementById('loader2');
          loader.style.display="block";
        ps.$api.get('/api/check-territory2?lat_lng='+ps.$store.state.latlongs+'&pincode='+ps.$store.state.pincode+'&xid='+ps.xid,config).then(function (response) {
          loader.style.display="none";
          if(response.data.full_screen_error_status == 0){
            ps.territory_data = response.data;
              ps.picked_address_array = { flat_no: null,
                                          location: ps.$store.state.latlongs,
                                          location_type: null,
                                          name: ps.$store.state.address,
                                          postal_code: ps.$store.state.pincode,
                                          user_id: ps.$store.state.xid,
                                          territory_id:response.data.zone_id,
                                        }
              localStorage.setItem('pickup_address',JSON.stringify(ps.picked_address_array));
              ps.picked_address  = ps.picked_address_array.name; 
              }
              else{
                ps.territory_checkup_dialog =  true;
              }
            }).catch(function (error) {
              console.log(error);
              // ps.$q.notify({ message: error, type: "negative",});
        });
        var loader = document.getElementById('loader2');
          loader.style.display="block";
        var delivery_address_array     =  JSON.parse(localStorage.getItem('delivery_address'));
        ps.$api.get('/api/check-territory2?lat_lng='+delivery_address_array.location+'&pincode='+delivery_address_array.postal_code+'&xid='+ps.xid,config).then(function (response) {
          loader.style.display="none";
          if(response.data.full_screen_error_status == 0){
              ps.delivery_address_array = { drop_flat:      delivery_address_array.drop_flat,
                                            flat_no:        delivery_address_array.flat_no,
                                            id:             delivery_address_array.id,
                                            location:       delivery_address_array.location,
                                            location_type:  delivery_address_array.location_type,
                                            name:           delivery_address_array.name,
                                            nick_name:      delivery_address_array.nick_name,
                                            pick_flat:      delivery_address_array.pick_flat,
                                            postal_code:    delivery_address_array.postal_code,
                                            updated_at:     delivery_address_array.updated_at,
                                            user_id:        delivery_address_array.user_id,
                                            territory_id:   response.data.zone_id,
                                        }
                localStorage.setItem('delivery_address',JSON.stringify(ps.delivery_address_array));
                ps.delivery_address      =  ps.delivery_address_array.name; 
                }
              else{
                ps.territory_checkup_dialog =  true;
              }
            }).catch(function (error) {
              console.log(error);
              // ps.$q.notify({ message: error, type: "negative",});
            });


      }else if(ps.$route.query.address == 12){
          var loader = document.getElementById('loader2');
          loader.style.display="block";
        var picked_address_array =  JSON.parse(localStorage.getItem('pickup_address'));
        ps.$api.get('/api/check-territory2?lat_lng='+picked_address_array.location+'&pincode='+picked_address_array.postal_code+'&xid='+ps.xid,config).then(function (response) {
          loader.style.display="none";
            if(response.data.full_screen_error_status == 0){
              ps.territory_data = response.data;
              ps.picked_address_array = {   drop_flat:      picked_address_array.drop_flat,
                                            flat_no:        picked_address_array.flat_no,
                                            id:             picked_address_array.id,
                                            location:       picked_address_array.location,
                                            location_type:  picked_address_array.location_type,
                                            name:           picked_address_array.name,
                                            nick_name:      picked_address_array.nick_name,
                                            pick_flat:      picked_address_array.pick_flat,
                                            postal_code:    picked_address_array.postal_code,
                                            updated_at:     picked_address_array.updated_at,
                                            user_id:        picked_address_array.user_id,
                                            territory_id:   response.data.zone_id,
                                        }
                localStorage.setItem('pickup_address',JSON.stringify(ps.picked_address_array));
                ps.picked_address        =  ps.picked_address_array.name;
                }
              else{
                ps.territory_checkup_dialog =  true;
              }
            }).catch(function (error) {
              console.log(error);
              // ps.$q.notify({ message: error, type: "negative",});
            });
        var loader = document.getElementById('loader2');
          loader.style.display="block";
        var delivery_address_array     =  JSON.parse(localStorage.getItem('delivery_address'));
        ps.$api.get('/api/check-territory2?lat_lng='+delivery_address_array.location+'&pincode='+delivery_address_array.postal_code+'&xid='+ps.xid,config).then(function (response) {
          loader.style.display="none";
          if(response.data.full_screen_error_status ==0){

              ps.delivery_address_array = {   drop_flat:      delivery_address_array.drop_flat,
                                            flat_no:        delivery_address_array.flat_no,
                                            id:             delivery_address_array.id,
                                            location:       delivery_address_array.location,
                                            location_type:  delivery_address_array.location_type,
                                            name:           delivery_address_array.name,
                                            nick_name:      delivery_address_array.nick_name,
                                            pick_flat:      delivery_address_array.pick_flat,
                                            postal_code:    delivery_address_array.postal_code,
                                            updated_at:     delivery_address_array.updated_at,
                                            user_id:        delivery_address_array.user_id,
                                            territory_id:   response.data.zone_id,
                                        }
                ps.delivery_address      =  ps.delivery_address_array.name;  
                localStorage.setItem('delivery_address',JSON.stringify(ps.delivery_address_array));
              }
              else{
                ps.territory_checkup_dialog =  true;
              }
            }).catch(function (error) {
              console.log(error);
              // ps.$q.notify({ message: error, type: "negative",});
            });
      }
    },
    onsubmit(){
      var ps = this;
      if(!ps.picked_address){
        ps.$q.notify({ message: "Please Select Pickup Address", type: "negative",}); 
        return false;
      }
      if(!ps.delivery_address){
        ps.$q.notify({ message: "Please Select Drop Address", type: "negative",}); 
        return false;}
      if(ps.delivery_address_array.location == ps.picked_address_array.location ){
        ps.$q.notify({ message: "Both Pick and Drop Location Are same...", type: "negative",icon:"close"}); 
        return false;
      }
      if(ps.instructions){ localStorage.setItem('instructions',ps.instructions); }
      const d = new Date();
      let formData = new FormData();
      formData.append("to_location", ps.picked_address_array.location);
      formData.append("coupon", null);
      formData.append("pick_time", (d.getUTCHours()+":"+d.getUTCMinutes()+':'+d.getUTCSeconds()) );
      formData.append("drop_territory_id", ps.delivery_address_array.territory_id );
      formData.append("from_location", ps.delivery_address_array.location);
      formData.append("weight", null);
      formData.append("pick_date", d.getFullYear()+'-'+ps.addZero(d.getDay())+'-'+ps.addZero(d.getUTCDate()));
      formData.append("schedule_timestamp",null );
      formData.append("week_end", null);
      formData.append("plan", null);
      formData.append("pick_territory_id", ps.picked_address_array.territory_id);
      var loader = document.getElementById('loader2');
      loader.style.display="block";
      let config = { headers: { "Authorization": `Bearer ${ps.access_token}`,}}
      ps.$api.post('/api/fare-pickdrop',formData,config).then(function (response) {
        loader.style.display="none";
        ps.category = JSON.parse(localStorage.getItem('category'));
        if( ps.category.main_service_id == 3){
         if(response.data.distance_in_km <= (ps.territory_data.vicinity_range/1000)){ ps.$router.push('/DriveMeMap'); }
         else{  ps.territory_checkup_dialog = true; }
        }else{
          if(response.data.distance_in_km <= (ps.territory_data.vicinity_range/1000)){ ps.$router.push('PickAndDrop_Checkout'); }
           else{  ps.territory_checkup_dialog = true; }
        }
      }).catch(function (error) {
        console.log(error);
        // ps.$q.notify({ message: error, type: "negative",});
      });
    },
    addZero(i) {
     if (i < 10) {i = "0" + i}
      return i;
    },
    mypath(){
      var ps=  this;
      var myallpaths = [];
      var i = 0;
      if(localStorage.getItem('mypath')){
        myallpaths = JSON.parse(localStorage.getItem('mypath'));
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
      localStorage.setItem('mypath',JSON.stringify(myallpaths));
    },
    Screen_Back_Redirection(){
      var ps = this;
      var myallpaths = JSON.parse(localStorage.getItem('mypath'));
      var previous = myallpaths.length;
      ps.$router.push(myallpaths[previous-2]);
    }
  }
})
</script>
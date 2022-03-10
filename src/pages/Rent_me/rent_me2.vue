<template>
<q-layout  view="lHh lpr lFf">
  <q-header>
    <q-toolbar class="cb-bg-white-2 cb-text-blue-8"><!-- 
      <q-btn flat dense round icon="arrow_back"  @click="$router.push('/home/dashboard')"/> -->
      <q-btn icon="place" size="md" class="q-pa-none q-ml-md" borderless flat :label="$store.state.showaddress"></q-btn>
      <q-space></q-space>
      <q-btn round dense icon="notifications" flat @click="$router.push('Notification')">
        <q-badge  color="red" rounded floating style="margin-top:8px;margin-right: 8px;"></q-badge>
      </q-btn>
      <q-btn round dense icon="shopping_cart" flat>
        <q-badge   class="cb-bg-orange-8" rounded floating >0</q-badge>
      </q-btn>
    </q-toolbar>
  </q-header>
  <q-page-container>
    <q-page class="q-pb-sm q-px-sm">

		  <q-carousel v-model="carousels" swipeable style="height:164px" class="cb-shadow-1 q-my-md cb-round-borders-10" navigation animated infinite control-color="primary">
			  <template v-slot:navigation-icon="{ active, btnProps, onClick }">
      		<q-btn v-if="active" size="xs" :icon="btnProps.icon" color="red-7" flat round dense @click="onClick" />
      		<q-btn v-else :icon="btnProps.icon" color="grey-5" class="q-px-none" size="xs" flat round dense @click="onClick" />
   		  </template>
     	  <q-carousel-slide :name="index"  class="column no-wrap q-pa-none" v-for="(offer,index ) in sliders" :key="offer" >
        	<q-img class="rounded-borders "  :src="offer.link"></q-img>
      	</q-carousel-slide>
      </q-carousel>

      <q-form class="full-height">
          <div class="col-12 text-bold row justify-center">
            {{ added_task_aray.length }}  Tasks Added
          </div>
          <br />
           <q-card class="my-card">
            <q-card-section>
              <div class="cb-shadow-1 cb-round-borders-10 q-px-sm" style="min-height:100px;">
                <q-input borderless dense placeholder="Task Description" v-model="taskadding" >
                  <template v-slot:prepend><q-icon name="filter_list" color="orange-8" /></template>
                </q-input>
              </div>
              <br />
              <span v-if="add_update == 'add'" class="cb-text-orange-8 text-bold" @click="addtask()">Add Tasks +</span>
              <span v-else class="cb-text-orange-8 text-bold" @click="update_task()">Update Tasks +</span>
            </q-card-section>
          </q-card>
          <br />


           	  <q-card class="cb-round-borders-10 q-my-md shadow-4 cb-text-grey-5">
  	  	<q-card-section class="cb-bg-grey-2 text-weight-bolder cb-font-16 q-pa-sm">
  	  		<span >Tasks Added</span>
  	  	</q-card-section>
  	  	<q-card-section>
              <q-list>

      <q-item clickable v-ripple v-for="(ik, i) in added_task_aray" :key="ik">
        <q-item-section>
          <q-item-label> {{ ik }}</q-item-label>
        </q-item-section>

        <q-item-section side top>
          <div class="q-gutter-xs">
            <q-btn  size="10px" flat dense round icon="edit"  label="Edit" class="cb-text-orange-8" @click="edit_task_datails(ik,i)"/>
           <q-btn  size="10px" flat dense round icon="delete" label="Delete" class="cb-text-orange-8" @click="removeRow(i)" />
          </div>
        </q-item-section>
      </q-item>
              </q-list>

  	  	</q-card-section>
  	  </q-card>

        <div class="row justify-center q-pt-lg">
          <q-btn type="submit" class="q-px-lg cb-bg-orange-8 text-white" @click="redi_to_rm_summary()" label="Confirm"></q-btn>
        </div>
      </q-form>
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
      added_task_aray:ref([]),
      taskadding:ref(null),
      add_update:ref('add'),
    }
  },
  mounted () {
    var ps = this;
  	ps.getToken();
    ps.pickanddrop_sliders();
    this.pickupaddress_select();
    this.gettasks();
  },
  methods:{
  	getToken(){
  		var ps = this ;
  		ps.access_token = ps.$store.state.token;
  		if(ps.access_token == null){	ps.$router.push('');	}
  	},


      removeRow(index) {

          this.added_task_aray.splice(index, 1);

      },

      gettasks(){
        var ps = this;

        if (!(localStorage.getItem("tasks_temp") == null )) {
          ps.added_task_aray1 =   localStorage.getItem('tasks_temp');
          ps.added_task_aray = JSON.parse(ps.added_task_aray1);


          // console.log(typeof(ps.added_task_aray1),'54');
      // ps.added_task_aray =    JSON.stringify(ps.added_task_aray);
    //  ps.added_task_aray =  ps.added_task_aray1.toArray();
}

      },

    addtask(){
      var ps = this ;
      if(ps.taskadding !== null){
      ps.added_task_aray.push(ps.taskadding);
      ps.taskadding = null;

      console.log(ps.added_task_aray,'aaaa');
      }
    },
    update_task(){
      var ps = this ;
      if(ps.taskadding !== null){
       ps.added_task_aray[ps.add_update] = ps.taskadding;

      ps.taskadding = null;
      ps.add_update = 'add';
      }
    },

    edit_task_datails(task,i){
      var ps = this;
      ps.taskadding = task;
      ps.add_update = i;



    },

  	pickanddrop_sliders(){
  		var ps = this;
    	let config = { headers: { "Authorization": `Bearer ${ps.access_token}`,}}
      	ps.$api.get('/api/rent-me-sliders',config).then(function (response) {
      		// console.log('response');
          ps.sliders =  response.data.sliders;
      	}).catch(function (error) {
       		console.log(error);
      	});
  	},
    pickupaddress_select(){
      var ps = this;
      let config = { headers: { "Authorization": `Bearer ${ps.access_token}`,}}

      if(ps.$route.query.address == null ){
        ps.$api.get('/api/check-territory2?lat_lng='+ps.$store.state.latlongs+'&pincode='+ps.$store.state.pincode+'&xid='+ps.$store.state.xid,config).then(function (response) {
          if(response.data.full_screen_error_status == 0){
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
            });

      }else if(ps.$route.query.address == 1){

        var picked_address_array =  JSON.parse(localStorage.getItem('pickup_address'));
        ps.$api.get('/api/check-territory2?lat_lng='+picked_address_array.location+'&pincode='+picked_address_array.postal_code+'&xid='+ps.$store.state.xid,config).then(function (response) {
          if(response.data.full_screen_error_status == 0){
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
            });

      }else if(ps.$route.query.address == 2){

        ps.$api.get('/api/check-territory2?lat_lng='+ps.$store.state.latlongs+'&pincode='+ps.$store.state.pincode+'&xid='+ps.$store.state.xid,config).then(function (response) {
          if(response.data.full_screen_error_status == 0){
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
        });

        var delivery_address_array     =  JSON.parse(localStorage.getItem('delivery_address'));
        ps.$api.get('/api/check-territory2?lat_lng='+delivery_address_array.location+'&pincode='+delivery_address_array.postal_code+'&xid='+ps.$store.state.xid,config).then(function (response) {
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
            });


      }else if(ps.$route.query.address == 12){

        var picked_address_array =  JSON.parse(localStorage.getItem('pickup_address'));
        ps.$api.get('/api/check-territory2?lat_lng='+picked_address_array.location+'&pincode='+picked_address_array.postal_code+'&xid='+ps.$store.state.xid,config).then(function (response) {
            if(response.data.full_screen_error_status == 0){
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
            });

        var delivery_address_array     =  JSON.parse(localStorage.getItem('delivery_address'));
        ps.$api.get('/api/check-territory2?lat_lng='+delivery_address_array.location+'&pincode='+delivery_address_array.postal_code+'&xid='+ps.$store.state.xid,config).then(function (response) {
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
            });
      }
    },
    redi_to_rm_summary(){
      var ps = this;
      if(ps.added_task_aray != null){
        var obj1  = [];
        var obj  = {};
        var obj_temp  = [];
        ps.added_task_aray.forEach(element => {
          obj = {'task' : element};
          obj1.push(obj);
          // obj_temp = element;

        });

     var  obj_temp  =   ps.added_task_aray.map(element =>{
          return element;

        });

        console.log(obj1);
        localStorage.setItem('tasks',JSON.stringify(obj1));
        localStorage.setItem('tasks_temp',JSON.stringify(ps.added_task_aray));

        ps.$router.push('rent_me3');

      }


    },

    addZero(i) {
     if (i < 10) {i = "0" + i}
      return i;
    }
  }
})
</script>

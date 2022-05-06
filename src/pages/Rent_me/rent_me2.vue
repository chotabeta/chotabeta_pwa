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
    <q-page class="q-pa-sm">
      <div id="loader2" class="pre-loader" style="display:none"></div>
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
         
          <q-card class="my-card cb-round-borders-10">
            <q-card-section>
              <div class="cb-shadow-1 cb-round-borders-10 q-px-sm row items-center" style="min-height:100px;">
                <q-input  placeholder="Task Description" borderless v-model="taskadding" type="textarea" rows="3" class="full-width text-center">
                  <template v-slot:prepend><q-icon name="filter_list" color="orange-8" /></template>
                </q-input>
              </div>
              <br />
              <span v-if="add_update == 'add'" class="cb-text-orange-8 text-bold cb-font-16" @click="addtask()">Add Tasks +</span>
              <span v-else class="cb-text-orange-8 text-bold cb-font-16" @click="update_task()">Update Tasks +</span>
            </q-card-section>
          </q-card>
          
          <q-card class="cb-round-borders-10 q-my-md shadow-4 cb-text-grey-5">
  	  	    <q-card-section class="cb-bg-grey-2 text-weight-bolder cb-font-16 q-pa-sm">
  	  		    <span >Tasks Added</span>
      	  	</q-card-section>
      	  	<q-card-section>
              <q-list>
                <q-item clickable v-ripple v-for="(ik, i) in added_task_aray" :key="ik">
                  <q-item-section class="q-py-none">
                    <q-item-label class="cb-font-16"> {{ ik }}</q-item-label>
                  </q-item-section>
                  <q-item-section side top>
                    <div class="q-gutter-xs">
                      <q-btn  size="12px" flat dense round icon="edit"  label="Edit" class="cb-text-orange-8 q-px-sm" @click="edit_task_datails(ik,i)"/>
                     <q-btn  size="12px" flat dense round icon="delete" label="Delete" class="cb-text-orange-8" @click="removeRow(i)" />
                    </div>
                  </q-item-section>
                </q-item>
              </q-list>
  	  	    </q-card-section>
  	      </q-card>

        <div class="row justify-center q-pt-lg">
          <q-btn  class="q-px-lg cb-bg-orange-8 text-white" @click="redi_to_rm_summary()" label="Confirm"></q-btn>
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
      xid:ref(null),
    }
  },
  mounted () {
    var ps = this;
  	ps.getToken();
    ps.mypath();
    ps.pickanddrop_sliders();
    ps.gettasks();
    localStorage.removeItem('coupon_rent_me');
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
    removeRow(index) {
      this.added_task_aray.splice(index, 1);
    },
    gettasks(){
      var ps = this;
      if (!(localStorage.getItem("tasks_temp") == null )) {
        ps.added_task_aray = JSON.parse(localStorage.getItem('tasks_temp'));
      }
    },
    addtask(){
      var ps = this ;
      if(ps.taskadding !== null){
        ps.added_task_aray.push(ps.taskadding);
        ps.taskadding = null;
        // console.log(ps.added_task_aray,'aaaa');
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
      var loader = document.getElementById('loader2');
      loader.style.display="block";
    	let config = { headers: { "Authorization": `Bearer ${ps.access_token}`,}}
    	ps.$api.get('/api/rent-me-sliders',config).then(function (response) {
        loader.style.display="none";
    		// console.log('response');
        ps.sliders =  response.data.sliders;
    	}).catch(function (error) {
     		console.log(error);
    	});
  	},
    redi_to_rm_summary(){
      var ps = this;
      if(ps.added_task_aray != null){
        var obj1  = [];
        ps.added_task_aray.forEach(element => {
          var obj = {'task' : element};
          obj1.push(obj);
        });
        // console.log(obj1);
        localStorage.setItem('tasks',JSON.stringify(obj1));
        localStorage.setItem('tasks_temp',JSON.stringify(ps.added_task_aray));
        ps.$router.push('rent_me3');
      }
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

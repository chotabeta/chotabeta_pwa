<template>
  <q-layout view="lHh lpr lFf">
	<q-header class="bg-orange-8">
	  <q-toolbar>
	  	<q-btn flat icon="arrow_back_ios" @click="Screen_Back_Redirection()"></q-btn>
	  </q-toolbar>
	</q-header>	
	<q-page-container class="bg-orange-8 animate__animated animate__slideInRight">
		<div id="loader2" class="pre-loader" style="display:none"></div>
		
	  <q-page style="border-radius: 30px 30px 0px 0px;box-shadow:0px -0px 3px 0px grey;" class="q-pt-sm q-px-md bg-orange-1">
	  	<div class="row q-pt-md q-px-sm text-grey-8" v-for="(item,i) in item_details" >
	  	  <div class="col-8" v-if="i== 0">
	  		<span class="text-weight-bolder">{{ item.name }}</span><br>
	  		<span class="cb-font-12">{{ item.info }}</span><br>
	  		<span class="text-weight-bolder cb-font-16">
	  			<q-icon name="currency_rupee"></q-icon>{{ item.selling_price }} <span class="q-px-xs">|</span>
	  			serve - {{ item.serving }} 
	  		</span><br>
	  	  </div>
	  	  <div class="col-4 text-right">
	  	  	<q-avatar size="90px" square class="cb-round-borders-10">
	  	  		<img :src="item.image" class="cb-round-borders-10">
	  	  	</q-avatar>
	  	  </div>
	  	</div>
	  	<div class="q-my-md">
	  		
	  		<q-select :options="meal_plan"  option-label="name" label="Meal Plan" v-model="plan" borderless dense class="bg-orange-3 cb-round-borders-10 q-px-lg q-my-sm text-weight-bolder" color="grey-6"></q-select>

	  		<div v-for="(item,i) in item_details">
	  			<q-select :options="item.serving_times" option-label="label" label="Available Slot" v-model="slot" borderless dense class="bg-orange-3 cb-round-borders-10 q-px-lg q-my-sm text-weight-bolder" v-if=" i == 0"></q-select>
	  		</div>


	  		<div class=" bg-orange-3 row items-center full-width cb-round-borders-10 q-px-lg q-py-xs q-my-sm text-grey-8" @click="set_available_time()">
	   		  <span class="cb-font-16" v-if="slot_time == null">Select Meal Time</span>
	   		  <span class="cb-font-16 text-weight-bolder" v-else>{{ slot_time }}</span>
	   		  <q-space></q-space>
	   		  	<q-btn flat round icon="refresh" class="bg-white" dense></q-btn>
	   		</div>

	  	</div>
	  	<p class="text-blue-8 text-weight-bolder cb-font-16">Select From & To Dates</p>
	  	<q-card class="cb-round-borders-20">
	  		<q-card-section>
	  			<q-date name="wedding" :options="optionsFn" :events="events" v-model="date" class="full-width shadow-0" color="orange-5"></q-date>
	  			<div class="row ">
	  				<div class="col text-center">
	  					<q-btn label="remove" outline color="red" icon-right="delete" class="cb-round-borders-10" @click="backto_restuarent()"></q-btn>
	  				</div>
	  				<div class="col text-center">
	  					<q-btn label="Confirm" color="blue" icon-right="arrow_right" class="cb-round-borders-10" @click="confirm_to_checkout()"></q-btn>
	  				</div>			
	  			 </div>
	  		</q-card-section>
	  	</q-card>

	  	<q-dialog v-model="Available_slot_set_time">
	  		<q-card> 
	  			<q-card-section class="q-pa-none">
	  				<q-time v-model="slot_time" class="shadow-0" @click="change_time()" :hour-options="hourOptionsTime1" :minute-options="minuteOptionsTime1">
              	<div class="row items-center justify-end">
              		<q-btn v-close-popup label="Close" color="primary" flat />
              	</div>
            	</q-time>
	  			</q-card-section>
	  		</q-card>
	  	</q-dialog>

	  	<q-dialog v-model="error_dialog">
	  		<q-card> 
	  			<q-card-section class="text-center">
	  				<p class="text-weight-bolder text-blue-8">Alert</p>
	  				Please Select Available Slot
	  			</q-card-section>
	  			<q-separator />
	        <q-card-actions align="center">
		  			<q-btn label="ok" dense flat color="blue" v-close-popup></q-btn>
	  			</q-card-actions>
	  		</q-card>
	  	</q-dialog>
	  </q-page>
	</q-page-container>
  </q-layout>
</template>
<script>
import axios from 'boot/axios'
import { ref } from "vue";
import { date } from 'quasar'
export default {
  setup() {
    return {
    	access_token:ref(null),
    	xid:ref(null),
    	item_details:ref([]),
    	meal_plan:ref([]),
    	plan:ref(null),
    	slot:ref(null),
    	slot_time:ref(null),
    	availabletime:ref(null),
    	date:ref(null),
    	events:ref([]),
    	Available_slot_set_time:ref(false),
    	error_dialog:ref(false),
    	optionsFn (d) {
    	 	return d >=  date.formatDate(Date.now(), 'YYYY/MM/DD')
      },
      hourOptionsTime1: [],
      minuteOptionsTime1: [],
      secondOptionsTime1: [],
    }
  },
  mounted() {
  	var d = new Date();
  	this.events = [d.getFullYear()+'/'+(d.getMonth() + 1)+'/'+d.getDate()]
  	this.getToken();
  	this.mypath();
  	// comment this two functions when you move to live
  	this.getsubscription();
  	

  	// comment this functions when you move to live
  	// this.loaddata();
  },
  methods: {
  	setdate(date){
  		var ps= this;
  		var d = new Date();
  		return date = d.getFullYear()+'/'+(d.getMonth() + 1)+'/'+d.getDate();
  	},
  	loaddata(){
  	  	var ps = this;
  	  	ps.item_details= [
        				  {
							id: 1,
							name: "Breakfast Meal Box",
							info: "Enjoy 2 - 3 different types  of breakfast dishes everyday",
							weight_description: "1 Box",
							pure_veg: 1,
							sku: "HK01B023",
							mrp: 100,
							selling_price: 100,
							client_id: 1,
							serving: "1",
							cuisine_name: "South Indian",
							image: "https://stackroger.com/public/uploads/food/items/1/2x/HK01B023.png",
							category_id: 1,
							sub_category_id: 0,
							serving_times: [
															{
																end: "12:00",
																name: "Lunch",
																start: "10:00"
															},
							                {
										        		end: "22:00",
																name: "Dinner",
																start: "19:00"	
							                }
							            ]
				          }
    				    ];
    	ps.meal_plan= [
	        {
	        		id: 1,
	        		plan: "one_day",
	        		weekend: "yes",
	        		name: "One Day"
	        },
	        {
	        		id: 2,
	        		plan: "week ",
	        		weekend: "yes",
	        		name: "Week With Weekend"
	        },
	        {
	        		id: 3,
	        		plan: "week",
	        		weekend: "no",
	        		name: "Week Without Weekend"
	        },
	        {
	        		id: 4,
	        		plan: "month ",
	        		weekend: "yes",
	        		name: "Month With Weekends"
	        },
	        {
	        		id: 5,
	        		plan: "month",
	        		weekend: "no",
	        		name: "Month Without Weekends"
	        }
	    ];
	    ps.settime_24_to_12();
  	},
  	getToken(){
  	  var ps = this ;
  	  if(ps.$store.state.token){ ps.access_token = ps.$store.state.token; }
        else{ ps.access_token = ps.$store.state.token_cb; }
      if(ps.$store.state.xid){ps.xid = ps.$store.state.xid;}
  		else{ps.xid = ps.$store.state.xid_cb;}
      if(ps.access_token == null ||  !ps.access_token){ ps.$router.push('/'); }
  	},
  	getsubscription(){
  		var ps = this;
  		let formData = new FormData;
      formData.append("sku", ps.$route.query.sku);
      var loader = document.getElementById('loader2');
      loader.style.display="block";
  		let config = { headers: { Authorization: `Bearer ${ps.access_token}` } };
      ps.$api.post('/api/get-subscribed-item',formData,config).then(function (response) {
        loader.style.display="none";
      	console.log(response,'response');
      	if( response.data.status_code == 200 ){
      		ps.item_details = response.data.item_details;
      		ps.meal_plan = response.data.meal_plan;
      		ps.settime_24_to_12();
      	}else{
      		ps.$q.notify({ message: response.data.message, type: "negative",});
      	}
      }).catch(function (error) {
        console.log(error);
      });
  	},
  	settime_24_to_12(){
  	  var ps = this;
  	  ps.item_details.forEach(item=>{
  	  	item.serving_times.forEach(time=>{
  	  		// ps.slot_time =  time.start;
  	  		var start_time_hr = time.start.slice(0,2);
  	  		var start_time_min = time.start.slice(3,5);
  	  		if(start_time_hr >= 12){ 
  	  			if(start_time_hr == 12){time.start_time = (start_time_hr)+':00 PM'; }
  	  			else{ time.start_time = (start_time_hr-12)+':00 PM';}
  	  		}
  	  		else{ time.start_time = start_time_hr+':00 AM'; }

  	  		var end_time_hr = time.end.slice(0,2);
  	  		var end_time_min = time.end.slice(3,5);
  	  		if( end_time_hr >= 12){ 
  	  			if( end_time_hr == 12 ){ time.end_time = (end_time_hr)+':00 PM'; }
  	  			else { time.end_time = (end_time_hr-12)+':00 PM'; }
  	  		}
  	  		else{ time.end_time = end_time_hr+':00 AM' }

  	  		time.label = time.name+'('+ time.start_time+'-'+ time.end_time+')';
  	  		// ps.availabletime(hr,min,sec){
  	  		// 	if(start_time <= hr && hr <= end_time){
  	  		// 		return false;
  	  		// 	}

  	  		// };
  	  	});
  	  });
  	},
  	backto_restuarent(){
  		var ps= this;
  		var id = ps.item_details[0].client_id;
  		ps.$router.push('food-restarent?rest_id='+id);
  	},
  	confirm_to_checkout(){
  		var ps = this;
  		if(!ps.plan){  ps.$q.notify({ message: "Please Select The Meal Plan", type: "warning", icon:'error_outline',}); return false;}
  		if(!ps.slot){ ps.$q.notify({ message: "Please Select The Meal Timing", type: "warning", icon:'error_outline',}); return false;}
  		// console.log(ps.plan);
  		var subscription = {
					  							"plan" : ps.plan.plan,
					  							"weekend": ps.plan.weekend,
					  							"pick_date":ps.date,
					  							"schedule_time":ps.slot_time,
					  							"item" : { 
					  							 				"id": ps.item_details[0].id,
					  							 				"qty":1,
					  							 				'sku': ps.item_details[0].sku,
					  							       },
					  							 "client_id": ps.item_details[0].client_id,
  												};
  			localStorage.setItem("subscription_data",JSON.stringify(subscription));
  			ps.$router.push('food-checkout?subscription=1&plan=');
  	},
  	set_available_time(){
  		var ps = this;
  		ps.hourOptionsTime1= [];
     	ps.minuteOptionsTime1= [];
  		if( ps.slot ){
  			console.log(ps.slot);
  			// ps.slot_time = ps.slot.start;
  			var start_time_hr = ps.slot.start.slice(0,2);
  			var end_time_hr = ps.slot.end.slice(0,2);
  			var start_time_min = ps.slot.start.slice(3,5);
  			var end_time_min = ps.slot.end.slice(3,5);
  			// if( end_time_min == '00' ){
  				for( var i=start_time_hr;i<end_time_hr;i++ ){
  					if(i < end_time_hr){ i++; i--;  }
  					ps.hourOptionsTime1.push(i);
  				}
  				for( var i=0;i<59;i++ ){
  					ps.minuteOptionsTime1.push(i);
  				}
  			// }else{
  				// for( var i=start_time_hr;i<=end_time_hr;i++ ){
  					// if(i < 10){ i++; i--; }
  					// ps.hourOptionsTime1.push(i);
  				// }
  				// for( var i=0;i<=end_time_min;i++ ){
  					// ps.minuteOptionsTime1.push(i);
  				// }
  			// }
  			ps.Available_slot_set_time =  true;
  		}else{
  			ps.error_dialog = true;
  		}
  	},
  	change_time(){
  		var ps= this;
  		console.log(ps.slot_time)
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
};
</script>
<style>
	.q-field__native,.q-field__label{
		color: #616161;
		font-weight: bold;
		font-size: 16px;
	}
</style>
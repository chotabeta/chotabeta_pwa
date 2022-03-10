<template>
  <q-layout view="lHh lpr lFf">
    <q-header>
      <q-toolbar class="cb-bg-white-2 cb-text-blue-8">
        <q-btn flat dense round icon="arrow_back" />
        <span class="cb-font-16 text-weight-bolder q-px-sm">Search For Your Location</span>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <q-page class="bg-white">
        <div class="q-pa-xs">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60910.91201828438!2d78.3955557446126!3d17.41505064173751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1644564642528!5m2!1sen!2sin" class="full-width" style="height: 300px" allowfullscreen="" loading="lazy"></iframe>
        </div>

        <div class="row q-px-md bg-white">

          <div class="col-12 shadow-2 cb-round-borders-10 q-mb-xs">

            <q-item class="q-px-sm q-py-none" style="min-height: 30px">
              <q-item-section style="max-width: 30px">
                <q-icon class="text-grey-5" name="home" size="sm"></q-icon>
              </q-item-section>
              <q-item-section>
                <q-input borderless dense placeholder="Flat,Floor,Building Name" v-model="building_floor" class="bg-white cb-round-borders-10" ></q-input>
              </q-item-section>
            </q-item>
          </div>

          <div class="col-12 shadow-2 cb-round-borders-10 q-mb-xs">
             
            <q-item class="q-px-sm" style="min-height: 30px">
              <q-item-section style="max-width: 30px">
                <q-icon class="text-grey-5" name="location_on" size="sm"/>
              </q-item-section>
              <q-item-section>
                <q-item-label caption lines="2" class="text-black">{{ $route.query.searchaddress }}</q-item-label>
              </q-item-section>
            </q-item>
          </div>

          <div class="col-12 shadow-2 cb-round-borders-10 q-my-xs">
            <q-item class="q-px-sm q-py-none" style="min-height: 30px">
              <q-item-section style="max-width: 30px">
                <q-icon class="text-grey-5" name="location_on" size="sm"
              /></q-item-section>
              <q-item-section>
                <q-input borderless placeholder="Landmark (Optional)" v-model="landmark" class="bg-white cb-round-borders-10" dense ></q-input>
              </q-item-section>
            </q-item>
          </div>

          <div class="col-12 shadow-2 cb-round-borders-10 q-my-xs">
            <q-item class="q-px-sm q-py-none" style="min-height: 30px">
              <q-item-section style="max-width: 30px">
                <q-icon class="text-grey-5" name="phone" size="sm"
              /></q-item-section>
              <q-item-section>
                <q-input borderless placeholder="Contact Details" v-model="phone" class="bg-white cb-round-borders-10" type="number" dense>
                  <template v-slot:append><q-icon name="perm_contact_calendar" class="cb-text-blue-8"></q-icon></template>
                </q-input>
              </q-item-section>
            </q-item>
          </div>

          <div class="col-12 text-grey-8 q-py-sm">Save As
            <q-option-group :options="options" v-model="type" color="orange" inline v-if="type != 'Others'"></q-option-group>
            <div class="shadow-5 cb-round-borders-10" v-if="type == 'Others'">
              <q-item class="q-px-sm q-py-none" style="min-height: 30px">
                <q-item-section style="max-width: 30px">
                  <q-icon class="text-grey-5" name="location_on" size="sm"/>
                </q-item-section>
                <q-item-section>
                  <q-input borderless placeholder="eg. New Office." class="bg-white cb-round-borders-10" v-model="custom_type" dense>
                    <template v-slot:append>
                      <q-icon name="cancel" @click="type = null" class="cb-text-orange-8"></q-icon>
                    </template>
                  </q-input>
                </q-item-section>
              </q-item>
            </div>
          </div>

          <div class="col-12 text-center q-pb-lg q-pt-sm">
            <q-btn label="Next" class="cb-bg-orange-8 text-white q-px-xl" @click="add_address()" dense></q-btn>
          </div>

        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>
<script>

let isMobile = window.matchMedia("only screen and (max-width: 760px)").matches;
if (!isMobile) { window.location = "https://chotabeta.com/pwa"; }

import axios from 'boot/axios'
import { ref } from "vue";
export default {
  setup() {
    return {
      device_height: ref(null),
      type: ref(null),
      options: [
        { label: "Home", value: "Home" },
        { label: "Office", value: "Office" },
        { label: "Others", value: "Others" },
      ],
      custom_type: ref(null),
      building_floor: ref(null),
      landmark: ref(null),
      phone: ref(null),
      address_data: ref(null),
    };
  },
  mounted() {
    this.getToken();
    if (this.$route.query.searchaddress && this.$route.query.searched_latlong) {
    }
  },
  methods: {
    getToken() {
      var ps = this;
      ps.access_token = ps.$store.state.token;
      if (ps.access_token == null) { ps.$router.push("/"); }
    },
    add_address() {
      var ps = this;
     
      if (ps.type == "Others") { ps.type = ps.custom_type; } 
      if (ps.building_floor == null) {
        ps.$q.notify({ message: "Invalid Flat,Floor,Building Name", type: "negative",});
        return false;
      }
      if (ps.phone == null) {
        ps.$q.notify({ message: "Invalid contact Details", type: "negative" });
        return false;
      }
      if (ps.type == null) {
        ps.$q.notify({ message: "Invalid Select As", type: "negative" });
        return false;
      }
      ps.address_data = ps.building_floor+"," +ps.landmark+"," +ps.$route.query.searchaddress;
      ps.getReverseGeocodingData();
      ps.storing_the_address();
    },
    getReverseGeocodingData() {
      var ps = this;
      const picked_address_select = {
                                      drop_flat:    null,
                                      flat_no:      ps.building_floor,
                                      id:           null,
                                      location:     ps.$route.query.searched_latlong,
                                      location_type:ps.type,
                                      location_type_ios: null,
                                      name:         ps.address_data,
                                      nick_name:    null,
                                      pick_flat:    null,
                                      postal_code:  ps.$route.query.pincode,
                                      user_id:      ps.$store.state.xid,
                                    };
      if(ps.$route.query.address =="1"){          
        localStorage.setItem('pickup_address',JSON.stringify(picked_address_select));
        // console.log(localStorage.getItem('pickup_address'));
        ps.$router.push('/PickAndDrop_s1?address=1');
      }
      else if(ps.$route.query.address =="2"){
        localStorage.setItem('delivery_address',JSON.stringify(picked_address_select));
        // console.log(localStorage.getItem('pickup_address'));
        if(localStorage.getItem('pickup_address') != null){
          ps.$router.push('/PickAndDrop_s1?address=2');
        }else{
          ps.$router.push('/PickAndDrop_s1?address=12');
        }
      }
      else if(ps.$route.query.address =="c1"){
            localStorage.setItem('pickup_address',JSON.stringify(ps.selected_location));
            ps.$router.push('/PickAndDrop_Checkout');
          }else if(ps.$route.query.address =="c2"){
            localStorage.setItem('delivery_address',JSON.stringify(ps.selected_location));
            ps.$router.push('/PickAndDrop_Checkout');
          }else if(ps.$route.query.address =="r1"){
            localStorage.setItem('rentment_address',JSON.stringify(ps.selected_location));
            ps.$router.push('/rent_me3');
          }                             
    },

    storing_the_address() {
      var ps = this;
      let formData = new FormData();
      formData.append("location_lat_lng", ps.$route.query.searched_latlong);
      formData.append("flat_no", ps.building_floor);
      formData.append("location_name", ps.address_data);
      formData.append("location_nick_name", 'None');
      formData.append("location_type", ps.type);
      let config = { headers: { Authorization: `Bearer ${ps.access_token}` } };
      ps.$api.post("/api/favourite-locations",formData,config).then(function (response) {
        // ps.saved_locations = response.data.favourite_locations;
      }).catch(function (error) {
        console.log(error);
      });
    },
  },
};
</script>
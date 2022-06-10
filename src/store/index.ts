import { store } from 'quasar/wrappers'
import { InjectionKey } from 'vue'
import { createStore, Store as VuexStore,useStore as vuexUseStore,} from 'vuex'
import Vuex from 'vuex'
import axios from 'axios'

// import example from './module-example'
// import { ExampleStateInterface } from './module-example/state';

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export interface StateInterface {
  // Define your own store structure, using submodules if needed
  // example: ExampleStateInterface;
  // Declared as unknown to avoid linting issue. Best to strongly type as per the line above.
  example: unknown
}

// provide typings for `this.$store`
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $store: VuexStore<StateInterface>
  }
}

// provide typings for `useStore` helper
export const storeKey: InjectionKey<VuexStore<StateInterface>> = Symbol('vuex-key')

export default store(function (/* { ssrContext } */) {
  // const Store = createStore<StateInterface>({
    // modules: {
      // example
    // },

    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    // strict: !!process.env.DEBUGGING
  const Store = new Vuex.Store({
    // modules: {
      // example
    // },

    // enable strict mode (adds overhead!)
    // for dev mode only
    // strict: process.env.DEBUGGING


    state: {
      token:      sessionStorage.getItem('token')       || null,
      xid:        sessionStorage.getItem('xid')         || null,

      token_cb:   sessionStorage.getItem('token_cb')    || null,
      xid_cb:     sessionStorage.getItem('xid_cb')      || null,
      
      pincode:    sessionStorage.getItem('pincode')     || null,
      latlongs:   sessionStorage.getItem('latlongs')    || null,
      address:    sessionStorage.getItem('address')     || null,
      showaddress:sessionStorage.getItem('showaddress') || null,
      userdetails:sessionStorage.getItem('userdetails') || null,
      baselatlongs:sessionStorage.getItem('baselatlongs') || null,
    },
    mutations: {
      setToken(state, token) {      state.token       = token;},
      setxid(state, xid) {          state.xid         = xid;},
      setlatlongs(state,latlong){   state.latlongs    = latlong;},
      setpincode(state,pincode){    state.pincode     = pincode;},
      setaddress(state,address){    state.address     = address;},
      setshowaddress(state,address){state.showaddress = (address+('...'));},
      setuserdetails(state,userdetails){state.userdetails = userdetails;},
      setbaselatlongs(state,baselatlongs){state.baselatlongs = baselatlongs;},
      
      clearToken(state) {       state.token       = null;},
      clearXid(state) {         state.xid         = null;},
      clearlatlongs(state){     state.latlongs    = null;},
      clearpincode(state){      state.pincode     = null;},
      clearaddress(state){      state.address     = null;},
      clearshowaddress(state){  state.showaddress = null;},
      clearuserdetails(state){  state.userdetails = null;},

    },
    actions: {
      login(context,data){
        return new Promise((resolve, reject) => {
          axios.post('https://stackroger.com/api/auth/sign-up', {'mobile':data.mobile,'otp':data.password}).then(function (response) {
            if(response.data.status_code == 409){
              axios.post("https://stackroger.com/api/auth/login",{'mobile':data.mobile,'password':data.password}).then(function(response) {
                    if(response.data.status_code == 200){
                      context.commit('setToken',response.data.access_token);
                      context.commit('setxid',response.data.xid);
                      sessionStorage.setItem('token',response.data.access_token);
                      sessionStorage.setItem('xid',response.data.xid);
                      resolve(response.data); 
                    }else{
                      reject(response.data);
                    }
              }).catch(function(error){
                   reject(error);
              });
            }
            else if(response.data.status_code == 200){
              resolve('new');
            }else{
              reject(response.data);
            }
          }).catch(function (error) {
            reject(error);
          });
        });
      },
      set_access_token(context,data){
        return new Promise((resolve, reject) => {
          context.commit('setToken',data.access_token);
          context.commit('setxid',data.xid);
          sessionStorage.setItem('token',data.access_token);
          sessionStorage.setItem('xid',data.xid);
          resolve('');
        });
      },
      logout(context){
        return new Promise((resolve, reject) => {
          sessionStorage.removeItem('token');
          sessionStorage.removeItem('xid');
          sessionStorage.removeItem('latlongs');
          sessionStorage.removeItem('pincode');
          sessionStorage.removeItem('address');
          sessionStorage.removeItem('showaddress');
          sessionStorage.removeItem('userdetails');

          context.commit('clearToken');
          context.commit('clearXid');
          context.commit('clearlatlongs');
          context.commit('clearpincode');
          context.commit('clearaddress');
          context.commit('clearshowaddress');
          context.commit('clearuserdetails');

          resolve('LogOut Successfully')
        });
      },
      latlongs_data(context,data){
        return new Promise((resolve, reject) => {
          sessionStorage.removeItem('latlongs');
          context.commit('clearlatlongs');

          sessionStorage.setItem('baselatlongs',(data.position.latitude+','+data.position.longitude));
          context.commit('setbaselatlongs',(data.position.latitude+','+data.position.longitude));

          sessionStorage.setItem('latlongs',(data.position.latitude+','+data.position.longitude));
          context.commit('setlatlongs',(data.position.latitude+','+data.position.longitude));
          resolve(data.position.latitude+','+data.position.longitude);
        });
      },
      adddress_data(context, data){
        return new Promise((resolve, reject) => {
          sessionStorage.removeItem('pincode');
          context.commit('clearpincode');
          sessionStorage.removeItem('address');
          sessionStorage.removeItem('showaddress');
          context.commit('clearaddress');
          context.commit('clearshowaddress');

          var length = (data.address.address_components).length;
          if(data.address.address_components[length-1].long_name){
            sessionStorage.setItem('pincode',data.address.address_components[length-1].long_name);
            context.commit('setpincode',data.address.address_components[length-1].long_name);     
          }else{
            reject('please select pincode');
          }
          sessionStorage.setItem('address',data.address.formatted_address);
          context.commit('setaddress',data.address.formatted_address);
          var showaddress = (data.address.formatted_address).substring(0,28);
          sessionStorage.setItem('showaddress',showaddress);
          context.commit('setshowaddress',showaddress);
          resolve("success");
        });
      },
      saved_asdderss_data(context, data){
        return new Promise((resolve, reject) => {
          sessionStorage.removeItem('latlongs');
          context.commit('clearlatlongs');
          sessionStorage.removeItem('pincode');
          context.commit('clearpincode');
          sessionStorage.removeItem('address');
          sessionStorage.removeItem('showaddress');
          context.commit('clearaddress');
          context.commit('clearshowaddress');

          var length = (data.address.address_components).length;
          if(data.address.address_components[length-1].long_name){
            sessionStorage.setItem('pincode',data.address.address_components[length-1].long_name);
            context.commit('setpincode',data.address.address_components[length-1].long_name);     
          }else{ reject('please select pincode'); }

          sessionStorage.setItem('latlongs',(data.saved_address.location));
          context.commit('setlatlongs',(data.saved_address.location));

          sessionStorage.setItem('address',data.saved_address.name);
          sessionStorage.setItem('showaddress',(data.saved_address.name).substring(0,28));
          context.commit('setaddress',data.saved_address.name);
          context.commit('setshowaddress',(data.saved_address.name).substring(0,28));
          
          resolve('200');

        });
      },
      searched_adderss_data(context, data){
        console.log(data,"searched data");
        return new Promise((resolve, reject) => {
          sessionStorage.removeItem('latlongs');
          context.commit('clearlatlongs');
          sessionStorage.removeItem('pincode');
          context.commit('clearpincode');
          sessionStorage.removeItem('address');
          sessionStorage.removeItem('showaddress');
          context.commit('clearaddress');
          context.commit('clearshowaddress');

          sessionStorage.setItem('pincode',data.pincode);
          context.commit('setpincode',data.pincode);     
         
          sessionStorage.setItem('latlongs',(data.latlongs));
          context.commit('setlatlongs',(data.latlongs));

          sessionStorage.setItem('address',data.address_data);
          sessionStorage.setItem('showaddress',(data.address_data).substring(0,28));
          context.commit('setaddress',data.address_data);
          context.commit('setshowaddress',(data.address_data).substring(0,28));
          resolve('200');
        });
      },
      userdetails(context, data){
        return new Promise((resolve, reject) => {
          var details = JSON.stringify(data);
          context.commit('setuserdetails',details);
          sessionStorage.setItem('userdetails',details);
        });
      }

    }
  // })
  })

  return Store;
})

export function useStore() {
  return vuexUseStore(storeKey)
}
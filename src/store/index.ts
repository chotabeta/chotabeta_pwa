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
      token: localStorage.getItem('token') || null,
      xid: localStorage.getItem('xid') || null,
      pincode:localStorage.getItem('pincode') || null ,
      latlongs:localStorage.getItem('latlongs') || null,
    },
    mutations: {
      setToken(state, token) {
        state.token = token;
      },
      setxid(state, xid) {
        state.xid = xid;
      },
      setlatlongs(state,latlong){
        state.latlongs = latlong;
      },
      setpincode(state,pincode){
        state.pincode = pincode;
      },
      
      clearToken(state) {
        state.token = null;
      },
      clearXid(state) {
        state.xid = null;
      },
    },
    actions: {
      login(context,data){
        return new Promise((resolve, reject) => {
          axios.post('https://chotabeta.app/dev/testenv/api/auth/sign-up', {'mobile':data.mobile,'otp':data.password}).then(function (response) {
            if(response.data.status_code == 409){
              axios.post("https://chotabeta.app/dev/testenv/api/auth/login",{'mobile':data.mobile,'password':data.password}).then(function(response) {
                    if(response.data.status_code == 200){
                      context.commit('setToken',response.data.access_token);
                      context.commit('setxid',response.data.xid);
                      localStorage.setItem('token',response.data.access_token);
                      localStorage.setItem('xid',response.data.xid);
                      resolve(response.data); 
                    }else{
                      reject(response.data);
                    }
              }).catch(function(error){
                   reject(error);
              });
            }
            else if(response.data.status_code == 200){
              context.commit('setToken',response.data.access_token);
              context.commit('setxid',response.data.xid);
              localStorage.setItem('token',response.data.access_token);
              localStorage.setItem('xid',response.data.xid);
              resolve(response.data);
            }else{
              reject(response.data);
            }
          }).catch(function (error) {
            reject(error);
          });
        });
      },
      logout(context){
        return new Promise((resolve, reject) => {
          context.commit('clearToken');
          context.commit('clearXid');
          localStorage.removeItem('token');
          localStorage.removeItem('xid');
          resolve('LogOut Successfully')
        })
      },
      latlongs_data(context,data){
        return new Promise((resolve, reject) => {
            // console.log(data.position,'sandeep perikala');
            // localStorage.setItem('latlongs',(data.position.latitude+','+data.position.longitude));
            // context.commit('latlongs',(data.position.latitude+','+data.position.longitude));

            localStorage.setItem('latlongs','17.4922902,78.3999551');
            context.commit('setlatlongs','17.4922902,78.3999551');

            localStorage.setItem('pincode','500072');
            context.commit('setpincode','500072');

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
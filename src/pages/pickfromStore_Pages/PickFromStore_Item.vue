<template>
    <q-layout view="lHh lpr lFf">
      <q-header>
        <q-toolbar class="cb-bg-white-2 cb-text-blue-8">
          <!-- <q-btn flat dense round icon="arrow_back" @click="$router.push('/PickFromStore_layouts_s2')"></q-btn> -->
          <q-btn icon="place" class="q-pa-none q-ml-md" size="md" flat :label="$store.state.showaddress"></q-btn>
          <q-space></q-space>
          <q-btn round dense icon="notifications" flat @click="$router.push('Notification')">
            <q-badge color="red" rounded floating style="margin-top: 8px; margin-right: 8px"></q-badge>
          </q-btn>
          <div style="background: transparent">
            <q-btn round dense icon="shopping_cart" flat  @click="$router.push('PickFromStore_layouts_s3')">
              <q-badge class="cb-bg-orange-8" rounded floating> {{ cartlength }} </q-badge>
            </q-btn>
          </div>
        </q-toolbar>
      </q-header>
      <q-page-container>
        <q-page class="q-pb-xl q-mb-sm">

          <div class="row justify-center q-pa-sm">
            <q-carousel animated infinite v-model="item_iamge" style="width:250px;height:250px" class="rounded-borders" control-class="cb-text-blue-8">
              <q-carousel-slide :name="index" :img-src="i.url" v-for="(i,index) in images_array"/>
            </q-carousel>
          </div>
          <div class="row justify-center">
            <q-icon name="fiber_manual_record" color="blue" v-for="(i,index) in images_array" @click='carosel_set(index)'></q-icon>
          </div>

          <q-card style="border-radius: 30px 30px 0px 0px;box-shadow:0px -0px 3px 0px grey;" class="q-mt-sm">
            <q-card-section class="q-px-lg cb-text-grey-5">
              <div class="flex flex-center cb-font-16 q-py-xs">
                <span>{{ product.brands }}</span>
                <q-space></q-space>
                <select v-model="product.weight_description" @change="change_item(product.weight_description)" class="text-grey-8 q-pa-sm" style="width:80px;background: transparent;border: none;width:100px">
                  <option v-for="variation in product.variations">{{ variation.description }}</option>
                </select>
              </div>
              <div class="flex flex-center">
                <span class="text-weight-bolder">{{ product.name }}</span>
                <q-space></q-space>
                <q-btn label="add to cart" dense class="q-px-sm cb-bg-orange-8 text-white rounded-borders" @click="AddToCartFunction_product(product,product.weight_description)" v-if="mycart == 0"></q-btn>
                <div class="cb-bg-orange-8 rounded-borders text-white" v-else>
                  <q-btn icon="remove" flat dense @click="RemoveToCartFunction_product(product,product.weight_description)"></q-btn>
                  <span class="q-px-md text-weight-bolder cb-font-16">{{ mycart }}</span>
                  <q-btn icon="add" flat dense @click="AddMoreToCartFunction_product(product,product.weight_description)"> </q-btn>
                </div>
              </div>
              <div class="text-weight-bolder cb-font-16">
                <q-icon name="currency_rupee"></q-icon>{{ sample_mrp }}
              </div>
              <q-card>
                <q-card-section class="q-pa-sm q-my-sm">
                  <span>{{ info }}</span>
                </q-card-section>
                <q-card-actions align="right" class="q-py-none q-pb-xs cb-text-orange-8">
                  <q-icon :name="readmore?'keyboard_double_arrow_down':'keyboard_double_arrow_up'" size="xs" @click="readmore=!readmore,readmore_function()"></q-icon>
                </q-card-actions>
              </q-card>
            </q-card-section>
            <q-card-section class="q-py-none">
              <div class="row coupon-wrap">
                <div class="q-px-sm" style="min-width: 300px;" v-for="coupon in coupons">
                  <q-img :src="coupon.coupon_image" class="cb-round-borders-10"></q-img>
                </div>
              </div>
            </q-card-section>
            <q-card-section class="q-pa-none">
              <div class="row q-px-sm">
                <div class="col-12 q-py-sm text-grey-8 text-bold cb-font-16">Similar Items</div>
                <div class="col-6 q-pa-xs" v-for="i in similar_products">
                  <q-card class="q-px-sm q-pt-xs cb-text-grey-5 cb-font-14">
                    <q-card-section  @click="get_item_screen(i)" class="q-pa-none">
                      <q-img :src="i.image" @click="" height="200px"></q-img>
                    </q-card-section>
                    <q-card-section class="row items-center q-pa-none flex">
                      <span style="width:80%;overflow:hidden;white-space: nowrap;">{{ i.brands }}</span>
                      <q-btn icon="error_outline" flat size="sm" @click="get_item_screen(i)" style="width:20%"></q-btn>
                    </q-card-section>
                    <q-card-section class="q-pt-sm q-pa-none text-weight-bolder" style="height: 50px;overflow: hidden;">
                      {{ i.name }}
                    </q-card-section>
                    <q-card-section class="q-pa-none row items-center">
                      <q-icon name="currency_rupee"></q-icon>{{ i.mrp }}
                      <q-space ></q-space>
                      <select v-model="i.description" @change="change_item1(i, i.description)" class="bg-white text-grey-8 q-px-sm cb-shadow-1 cb-round-borders-10" style="height: 30px;border:none;width:80px">
                        <option v-for="variation in i.variations" >{{variation.description}}</option>
                      </select>
                    </q-card-section>
                    <q-card-section class="q-pa-none flex flex-center q-pt-sm cb-text-orange-8">
                      <q-btn dense flat class="cb-text-orange-8" label="Add To Cart" v-if="i.mycart == 0" @click="AddToCartFunction(i,i.description)"></q-btn>
                      <span v-else>
                        <q-btn icon="remove" flat dense @click="RemoveFromCartfunction(i,i.description)"></q-btn>
                        <span class="q-px-md">{{ i.mycart }}</span>
                        <q-btn icon="add" flat dense @click="AddMoreToCartFunction(i,i.description)"></q-btn>
                      </span>
                    </q-card-section>
                    <q-card-section class="q-pa-none flex flex-center q-pt-sm  text-weight-bolder">
                    </q-card-section>
                  </q-card>
                </div>
              </div>
            </q-card-section>
          </q-card>

          <div class="cb-bg-orange-8 fixed-bottom row items-center q-px-md q-py-sm text-white text-weight-bolder cb-font-16" v-if="cartlength != 0">
            <span>{{ cartlength }} Items | <q-icon name="currency_rupee"></q-icon>{{ cart_price }}.0</span>
            <q-space></q-space>
            <q-btn label="view cart" icon-right="shopping_cart" flat @click="cart_page_redirection"></q-btn>
          </div>

          <q-dialog v-model="cart_key_dailog">
            <q-card class="cb-round-borders-20" style="max-width: 300px;">
              <q-card-section class="text-center text-grey-9">
                <p class="text-h6 text-weight-bolder">{{ cart_key_data.empty_cart_title }}</p>
                <p class="cb-font-16">{{ cart_key_data.empty_cart_message }}</p>
                <q-btn label="clear" class="cb-bg-orange-8 text-white q-px-xl cb-round-borders-10" @click="clear_cart_function()"></q-btn>
                <br>
                <q-btn label="cancel" flat @click="cart_key_dailog = false"></q-btn>
              </q-card-section>
            </q-card>
          </q-dialog>

          <q-dialog v-model="mycart_length_restriction">
            <q-card class="cb-round-borders-20" style="max-width: 300px;">
              <q-card-section class="text-center text-grey-9 q-py-xl">
                <q-avatar size="80px" class="bg-orange-3">
                  <q-avatar size="65px" class="bg-white cb-text-orange-8" font-size="55px" icon="question_mark"></q-avatar>
                </q-avatar><br><br>
                <p class="text-h6 text-weight-bolder">{{ restrictions.total_qty_dialog_title }}</p>
                <p class="cb-font-16">{{ restrictions.total_qty_dialog_msg }}</p>
                <q-btn label="Sure" class="cb-bg-orange-8 text-white q-px-xl cb-round-borders-10" @click="mycart_length_restriction = false"></q-btn>
              </q-card-section>
            </q-card>
          </q-dialog>


        </q-page>
      </q-page-container>
    </q-layout>
  </template>
  <script>
  let isMobile = window.matchMedia("only screen and (max-width: 760px)").matches;
  if (!isMobile) { window.location = "https://chotabeta.com/pwa"; }
  import axios from 'boot/axios'
  import { ref } from "vue"
  export default {
    setup() {
      return {
        number: 0,
        similar_products: ref([]),
        sample_mrp: ref(null),
        mrp_123: ref(null),
        id_123: ref(null),
        product_id_123: ref(null),
        mrp_1234: ref(null),
        id_1234: ref(null),
        product_id_1234: ref(null),
        tabs: ref("fruits"),
        select_item_size: ref("500"),


        access_token: ref(null),
        selected_item:ref([]),
        item_iamge:ref(0),
        images_array: ref(null),
        product: [],
        informaton:ref(null),
        info:ref(null),
        readmore:ref(true),
        coupons:ref(null),
        mycart_items:[],
        mycart:ref(0),
        cartlength:ref(0),
        cart_price:ref(0),
        cart_key_data:ref(null),
        category:ref([]),
        cart_key_dailog:ref(false),
        mycart_length_restriction:ref(false),
        restrictions:ref(null),
      }
    },
    mounted() {
      this.getToken();
      this.mycart_count_and_length();
      if(this.$route.query.sku){
        this.details_individualitem();
        this.cart_key_function();
      }
    },
    methods: {
      carosel_set(index){ this.item_iamge = index; },
      getToken() {
        var ps = this;
        ps.access_token = ps.$store.state.token;
        if (ps.access_token == null) { ps.$router.push(""); }
      },
      mycart_count_and_length(){
        var ps = this;
        // console.log(localStorage.getItem('mycart'),"localStorage");
        ps.cart_price =0;
        ps.cartlength =0;
        if(localStorage.getItem('mycart')){
          ps.mycart_items = JSON.parse(localStorage.getItem('mycart'));
          ps.cartlength =  ps.mycart_items.length;
          ps.mycart_items.forEach( cart =>{
            ps.cart_price = ps.cart_price+(cart.selected_variation.mycart * parseInt(cart.selected_variation.selling_price));
          });
        }
        else{ localStorage.setItem('mycart','');  }
      },

      cart_key_function(){
        var ps= this;
        ps.category = JSON.parse(localStorage.getItem('category'));
        let config = { headers: { "Authorization": `Bearer ${ps.access_token}`,}};
        let formData = new FormData();
        formData.append('category_id', ps.category.id);
        formData.append('service_id', ps.category.service_id);
        ps.$api.post('/api/cart-key',formData,config).then(function (response) {
          console.log(response,'response');
          ps.cart_key_data = response.data;
          // ps.cart_key_dailog = true;
        }).catch(function (error) {
          console.log(error);
        })
        
      },

      details_individualitem() {
        var ps = this;
        let config = { headers: { Authorization: `Bearer ${ps.access_token}` } };
        ps.$api.post("/api/get-product-details",{
              xid: ps.$store.state.xid,
              sku: ps.$route.query.sku,
              items: "[]",
            },config).then(function (response) {
              // console.log(response.data,"response.data");
              ps.images_array = response.data.images_array;
              ps.product = response.data.product;
              ps.informaton = ps.product.info;
              ps.readmore_function();
              ps.cart_checkup_product();
              ps.coupons = response.data.coupons;
              ps.restrictions = response.data;
              ps.similar_products = response.data.similar_products;
              ps.similar_products.forEach((item, i) => {
                item.mrp = item.variations[0].mrp;
                item.description = item.variations[0].description;
              });
              ps.sample_mrp = ps.product.variations[0].mrp;
              ps.cart_checkup_similar_products();
            // console.log(ps.product);
          }).catch(function (error) {
            console.log(error);
          });
      },
      readmore_function(){
          var ps = this;
          if(ps.readmore){ var info = ps.informaton.substring(0,133); ps.info = info+('...');}
          else{ ps.info = ps.informaton; }
      },
      change_item(weight_description) {
        var vm = this;
        vm.sample_mrp = null;
        vm.product.variations.forEach((item2) => {
          if (item2.description == weight_description) {
            vm.mrp_123 = item2.mrp;
            vm.id_123 = item2.id;

            vm.product_id_123 = item2.product_id;
            // console.log(vm.mrp_123, "sp");
          }
        });
        vm.sample_mrp = vm.mrp_123;
      },

      change_item1(data, weight_description) {
        var vm = this;
        vm.similar_products.forEach((item, i) => {
          if (item.id == data.id) {
            item.variations.forEach((item2) => {
              if (item2.description == weight_description) {
                vm.mrp_1234 = item2.mrp;
                vm.id_1234 = item2.id;
                item.mycart = item2.mycart;
                vm.product_id_1234 = item2.product_id;
                // console.log(vm.mrp_1234, "sp");
              }
            });
            item.mrp = vm.mrp_1234;
            item.id = vm.id_1234;
          }
        });
      },
      get_item_screen(item){
        var ps = this;
        ps.$router.push('PickFromStore_Item?sku='+item.sku);
      },
      cart_checkup_similar_products(){
        var ps= this;

        ps.similar_products.forEach( item =>{
          item.variations.forEach(ele=>{ ele.mycart = 0; });
          item.mycart = item.variations[0].mycart;
        });

        ps.mycart_items.forEach(cart =>{
          ps.similar_products.forEach(item=>{
            item.variations.forEach(ele=>{
              if(ele.id == cart.selected_variation.id){
                ele.mycart = cart.mycart;
                item.mycart = cart.mycart;
              }
            });
          });
        });
        ps.mycart_count_and_length();
      },

      cart_checkup_similar_products_2(){
        var ps = this;
        ps.mycart_items.forEach( cart =>{
          ps.similar_products.forEach( item =>{
            item.variations.forEach((ele,index) =>{
              if(ele.id == cart.selected_variation.id){
                ele.mycart = cart.mycart;
                ps.change_item1(item,ele.description);
              }
            });
          });
        });
        ps.mycart_count_and_length();
      },
      AddToCartFunction(item,variation){
        var ps = this;
        // console.log(item,"item");

        if(ps.mycart_items.length == 0){
          localStorage.setItem('cart_key',ps.cart_key_data.cart_key);
        }
        if( ps.cart_key_data.cart_key == localStorage.getItem('cart_key')){
          if(variation != null || variation != undefined || variation != ""){
            item.variations.forEach(ele =>{
              if(variation == ele.description){
                item.selected_variation = ele;
                item.selected_variation.mycart = 1;
                item.mycart = 1;
                ps.mycart_items.push(item);
              }
            });
            localStorage.setItem('mycart',JSON.stringify(ps.mycart_items));
            ps.cart_checkup_similar_products_2();
          }
        }else{
          ps.cart_key_dailog = true;
        }
      },
      AddMoreToCartFunction(item,variation){
        var ps = this;
        if(variation != null || variation != undefined || variation != ""){
          item.variations.forEach(ele =>{
            if(variation == ele.description){
              ps.mycart_items.forEach(cart => {
                if(ele.id == cart.selected_variation.id){ 
                  if( cart.mycart < ps.restrictions.qty_retriction_count){
                    cart.selected_variation.mycart = cart.selected_variation.mycart +1;
                    cart.mycart = cart.mycart + 1;
                  }
                  else{
                    ps.$q.notify({ message: ps.restrictions.qty_restriction_msg, color:'light-blue-10', icon:'close'});
                  }
                }
              });
            }
          });
          // console.log(ps.mycart_items,"mycart_items");
          localStorage.setItem('mycart',JSON.stringify(ps.mycart_items));
          ps.cart_checkup_similar_products_2();
        }
      },
      RemoveFromCartfunction(item,variation){
        var ps = this;
        // console.log(item,"item");
        if(variation != null || variation != undefined || variation != ""){
          item.variations.forEach(ele =>{
            if(variation == ele.description){
              ps.mycart_items.forEach((cart,index) => {
                if(ele.id == cart.selected_variation.id){
                  if(cart.mycart == 1){
                    ps.mycart_items.splice(index, 1);
                  }else{
                    cart.selected_variation.mycart = cart.selected_variation.mycart -1;
                    cart.mycart = cart.mycart - 1; 
                  }
                }
              });
            }
          });
          // console.log(ps.mycart_items,"mycart_items");
          localStorage.setItem('mycart',JSON.stringify(ps.mycart_items));
          ps.cart_checkup_similar_products();
        }
      },

      cart_checkup_product(){
        var ps = this;
        ps.mycart = 0;
        if(ps.mycart_items.length != 0 ){
          ps.mycart_items.forEach( cart =>{
            if( ps.product.id == cart.selected_variation.id ){
              ps.mycart = cart.mycart;
            }
          });
        }
        ps.mycart_count_and_length();
        // console.log(ps.product,"product")
      },
      AddToCartFunction_product(item,variation){
        // console.log(item,"item",variation,"variation");
        var ps =  this;

      if(ps.mycart_items.length == 0){
        localStorage.setItem('cart_key',ps.cart_key_data.cart_key);
      }
      if( ps.cart_key_data.cart_key == localStorage.getItem('cart_key')){
          item.variations.forEach( ele =>{
            if( ele.description == variation){
                item.selected_variation = ele;
                item.selected_variation.mycart = 1;
                item.mycart = 1;
                ps.mycart_items.push(item);
              }
          });
          // console.log(ps.mycart_items,"mycart_items");
          localStorage.setItem('mycart',JSON.stringify(ps.mycart_items));
          ps.cart_checkup_product();
        }else{
          ps.cart_key_dailog = true;
        }
      },

      AddMoreToCartFunction_product(item,variation){
        var ps = this;
        // console.log(item,"item");
        ps.mycart_items.forEach( cart =>{
          if(cart.selected_variation.id == item.id ){
            if( cart.mycart < ps.restrictions.qty_retriction_count){
                  cart.selected_variation.mycart = cart.selected_variation.mycart +1;
                  cart.mycart = cart.mycart + 1;
                }
                else{
                  ps.$q.notify({ message: ps.restrictions.qty_restriction_msg, color:'light-blue-10', icon:'close'});
                }
          }
        });
        // console.log(ps.mycart_items,"mycart_items");
        localStorage.setItem('mycart',JSON.stringify(ps.mycart_items));
        ps.cart_checkup_product();
      },
      RemoveToCartFunction_product(item,variation){
        var ps = this;
        // console.log(item,"item");
        ps.mycart_items.forEach( (cart,index) =>{
          if(cart.selected_variation.id == item.id ){
            if(cart.mycart == 1 ){
              ps.mycart_items.splice(index, 1);
            }else{
              cart.selected_variation.mycart = cart.selected_variation.mycart - 1;
              cart.mycart = cart.mycart - 1;
            }
          }
        });
        localStorage.setItem('mycart',JSON.stringify(ps.mycart_items));
        ps.cart_checkup_product();
      },
      clear_cart_function(){
        var ps = this;
        localStorage.removeItem('mycart');
        ps.mycart_items = [];
        ps.cart_key_dailog =  false;
        ps.mycart_count_and_length();
      },

      cart_page_redirection(){
        var ps = this;
        if(ps.mycart_items.length <= ps.restrictions.total_qty_retriction_count){
          ps.$router.push('PickFromStore_layouts_s3');
        }else{
          ps.mycart_length_restriction = true;
        }
      }
    },
  };
  </script>
  <style scoped>
  .coupon-wrap{ flex-wrap: nowrap;overflow: scroll;overflow-y: hidden; }
  ::-webkit-scrollbar { width: 0;background: transparent; }
  ::-webkit-scrollbar-thumb {background: transparent;}
  </style>
import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '',
    component: () => import('pages/cb_user_set.vue'),
  },
  {
    path: '/sign-in',
    component: () => import('pages/signin.vue'),
  },
  {
    path: '/CheckLocation',
    component: () => import('pages/CheckLocation.vue'),
  },
  {
    path: '/adding_address_page',
    component: () => import('pages/Dashboard/adding_address_page.vue'),
  },
  {
    path: '/Home',
    component: () => import('layouts/Home.vue'),
    children: [
        { path: 'Dashboard', component: () => import('pages/Dashboard/Index.vue') },
        { path: 'Notification', component: () => import('pages/Dashboard/Notification.vue') },
        { path: 'Orders', component: () => import('pages/Dashboard/Orders.vue') },
        { path: 'Offers', component: () => import('pages/Dashboard/Offers.vue') },
        { path: 'Settings', component: () => import('pages/Dashboard/Settings.vue') },
        { path: 'ReferAndEarn', component: () => import('pages/Dashboard/ReferAndEarn.vue') },
        { path: 'WeCareHelp', component: () => import('pages/Dashboard/WeCareHelp.vue') },
        { path: 'profile', component: () => import('pages/Dashboard/profile.vue') },
        { path: 'Services', component: () => import('pages/Dashboard/Services.vue') },
    ],
  },
  {
    path: '/Home/dashboard_Location',
    component: () => import('pages/Dashboard/dashboard_Location.vue')
  },
  {
    path: '/Home/RatingAndReview',
    component: () => import('pages/Dashboard/RatingAndReview.vue')
  },
  {
    path: '/Home/FoodOrders',
    component: () => import('pages/Dashboard/FoodOrders.vue')
  },
  {
    path: '/Home/OrderDetails',
    component: () => import('pages/Dashboard/OrderDetails.vue'),
  },

//pick From Store Pages
  {
    path: '/PickFromStore_layouts_s1',
    component: () => import('pages/pickfromStore_Pages/PickFromStore_s1.vue'),
  },
  {
    path: '/PickFromStore_layouts_s2',
    component: () => import('pages/pickfromStore_Pages/PickFromStore_s2.vue'),
  },
  {
    path: '/PickFromStore_layouts_s3',
    component: () => import('pages/pickfromStore_Pages/PickFromStore_s3.vue'),
  },
  {
    path: '/PickFromStore_Item',
    component: () => import('pages/pickfromStore_Pages/PickFromStore_Item.vue'),
  },
  {
    path: '/PickFromStore_Checkout',
    component: () => import('pages/pickfromStore_Pages/PickFromStore_Checkout.vue'),
  },
  {
    path: '/Coupons',
    component: () => import('pages/Coupons.vue'),
  },
  {
    path: '/Coupons_pad',
    component: () => import('pages/coupons_pad.vue'),
  },
  {
    path: '/Coupons_rentme',
    component: () => import('pages/Coupons_rentme.vue'),
  },
  {
    path: '/Custom_items',
    component: () => import('pages/pickfromStore_Pages/Custom_items.vue'),
  },
  {
    path: '/camorder_checkout',
    component: () => import('pages/pickfromStore_Pages/camorder_checkout.vue'),
  },



// Rent Me
  {
    path: '/rent_me1',
    component: () => import('pages/Rent_me/rent_me1.vue'),
  },
  {
    path: '/rent_me2',
    component: () => import('pages/Rent_me/rent_me2.vue'),
  },
  {
    path: '/rent_me3',
    component: () => import('pages/Rent_me/rent_me3.vue'),
  },


// Pick And Drop
  {
    path: '/PickAndDrop_s1',
    component: () => import('pages/PickAndDrop_Pages/PickAndDrop_s1.vue'),
  },
  {
    path: '/PickAndDrop_Checkout',
    component: () => import('pages/PickAndDrop_Pages/PickAndDrop_Checkout.vue')
  },

  //location search pages
  {
    path: '/Search_location',
    component: () => import('pages/PickAndDrop_Pages/search.vue'),
  },
  {
    path: '/add_address_page',
    component: () => import('pages/PickAndDrop_Pages/add_address_page.vue'),
  },
  {
    path: '/dashboard',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/Index.vue') }],
  },
  {
    path: '/DriveMeMap',
    component: () => import('pages/PickAndDrop_Pages/DriveMeMap.vue')
  },
  {
    path: '/DriveMe_Summary',
    component: () => import('pages/PickAndDrop_Pages/DriveMe_Summary.vue')
  },

// food pages
  {
    path:'/food',
    component:()=>import('pages/food/food_home.vue')
  },
  {
    path:'/food-restarent',
    component:()=>import('pages/food/food_restarent.vue')
  },
  {
    path:'/all-restarents',
    component:()=>import('pages/food/food_all_restarents.vue')
  },
  {
    path:'/food-cart',
    component:()=>import('pages/food/food_cart.vue')
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue'),
  },
];

export default routes;

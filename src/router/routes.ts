import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '',
    component: () => import('pages/signin.vue'),
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
    path: '/Home/FoodOrders',
    component: () => import('pages/Dashboard/FoodOrders.vue')
  },

  //pick From Store Pages
  {
    path: '/PickFromStore_layouts_s1',
    component: () => import('layouts/PickFromStore_layouts/PickFromStore_s1.vue'),
    children: [ { path: '', component: () => import('pages/pickfromStore_Pages/PickFromStore_s1.vue') } ],
  },
  {
    path: '/PickFromStore_layouts_s2',
    component: () => import('pages/pickfromStore_Pages/PickFromStore_s2.vue'),
    // children: [ { path: '', component: () => import('') } ],
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
    component: () => import('pages/pickfromStore_Pages/Coupons.vue'),
  },
  {
    path: '/Custom_items',
    component: () => import('pages/pickfromStore_Pages/Custom_items.vue'),
  },

  // Pick And Drop
  {
    path: '/PickAndDrop_s1',
    component: () => import('layouts/PickAndDrop_Layouts/PickAndDrop_s1.vue'),
    children: [ { path: '', component: () => import('pages/PickAndDrop_Pages/PickAndDrop_s1.vue') } ],
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
    path: '/dashboard',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/Index.vue') }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue'),
  },
];

export default routes;

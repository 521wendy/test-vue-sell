// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import router from './router/index.js';
//import Goods from './components/goods/goods.vue';
//import Ratings from './components/goods/ratings.vue';
//import Seller from './components/goods/seller.vue';
//import axios from 'axios';
//var qs = require('qs');
//var instance = axios.create({
//  headers:{'content-type':'application/x-www-form-urlencoded'}
//});
//Vue.use(VueRouter);
//Vue.use(VueResource);
//Vue.prototype.$axios = axios;
//const routes = [
//  {path: '/goods', component: Goods},
//  {path: '/ratings', component: Ratings},
//  {path: '/seller', component: Seller}
//];
//const router = new VueRouter({
//  routes
//});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
});

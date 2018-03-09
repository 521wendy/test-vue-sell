import Vue from 'vue';
import Router from 'vue-router';
import VueResource from 'vue-resource';
import HelloWorld from '@/components/HelloWorld';
import Goods from '@/components/goods/goods.vue';
import Ratings from '@/components/goods/ratings.vue';
import Seller from '@/components/goods/seller.vue';

Vue.use(Router);
Vue.use(VueResource);

export default new Router({
  routes: [
    //{
    //  path: '/',
    //  name: 'HelloWorld',
    //  component: HelloWorld
    //},
    {
      path: '/goods',
      name: 'goods',
      component: Goods
    },
    {
      path: '/seller',
      name: 'seller',
      component: Seller
    },
    {
      path: '/ratings',
      name: 'ratings',
      component: Ratings
    }
  ]
});

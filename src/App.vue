<template>
  <div>
     <v-header :seller="seller"></v-header>
     <div class="tab">
       <div class="tab-item">
         <router-link to="/goods" class="link">商品</router-link>
       </div>
       <div class="tab-item">
        <router-link to="/ratings" class="link">介绍</router-link>
       </div>
       <div class="tab-item">
        <router-link to="/seller" class="link">商家</router-link>
       </div>
     </div>
       <router-view  :seller="seller" keep-alive></router-view>
  </div>
</template>
<script type="text/ecmascript-6">
 /*
  引入header组件 1
 */
import header from './components/header/header.vue';
const ERR_OK = 0;
export default{
    data() {
      return{
      seller: {},
      goods: {},
      ratings: {}
      };
    },
    /*
       调用ajax获取页面初始化的数据
    */
  created(){
    /*
     对商家进行数据请求，返回的数据seller显示
    */
    this.$http.get('/api/shangjia').then((response) =>{
     response = response.body;
       if(response.errno === ERR_OK){
       this.seller = response.data;
         }
     });

     this.$http.get('/api/shangjia').then((response) => {
       response = response.body;
       if(response.errno === ERR_OK){
       this.seller = response.data;
       }
     });


     this.$http.get('/api/pingfen').then((response) =>{
     response = response.body;
       if(response.errno === ERR_OK){
       this.ratings = response.data;
       }
     });
  },
   /*
    注册header组件 2
    */
 components: {
    'v-header': header
  },
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
 .tab
   display: flex
   width:100%
   height:40px
   line-height:40px
   border-bottom: 1px solid #ccc
   .tab-item
    flex: 1
    text-align:center
    .link
     display:block
     text-decoration: none
     font-size:14px
    .router-link-active
        color:rgb(240,20,20)
</style>

<template>
  <div class="ratings">
      <div class="overview">
        <div class="overview-left">
          <h1 class="score">{{seller.score}}</h1>
          <div class="title">综合评分</div>
          <div class="rank">高于周围商家{{seller.rankRate}}%</div>
        </div>
        <div class="overview-right">
          <div class="score-wrapper">
            <span class="title">服务态度</span>
            <star :size="24" :score="seller.score"></star>
            <span class="score">{{seller.serviceScore}}</span>
          </div>
          <div class="score-wrapper">
             <span class="title">商品评分</span>
             <star :size="24" :score="seller.foodScore"></star>
             <span class="score">{{seller.foodScore}}</span>
          </div>
          <div class="deliveryTime">
              <span class="title">送达时间</span>
              <span class="score"> {{seller.deliveryTime}}分钟</span>
          </div>
        </div>
      </div>
      <div class="rating-content" v-for="rating in ratings">
        <div class="content-left">
          <img class="avatimg" :src="rating.avatar">
        </div>
        <div class="content-right">
          <p class="name">{{rating.username}}</p>
          <star :size="24" :score="rating.score"></star>
          <span class="time">{{rating.deliveryTime}}分钟送达</span>
          <p class="rating">{{rating.text}}</p>
          <p class="rating-foot">
              <span class="good"></span>
              <span class="recommend" v-for="recommend in rating.recommend">{{recommend}}</span>
          </p>
         </div>
      </div>
  </div>
</template>
<script type="text/ecmascript-6">
const ERR_OK = 0;
import star from '../star/star.vue';
 export default {
  props:{
    seller:{
      type:Object
    }
  },
  data()
  {
    return {
     ratings:[]
    };
  },
  components:
   {
     star
   },
     created() {
        this.$http.get('/api/pingfen').then((response) =>{
           response = response.body;
             if(response.errno === ERR_OK){
              this.ratings = response.data
             }
        });
     },
 }

</script>
<style lang="stylus" rel="stylesheet/stylus">
 @import "../../common/stylus/mixin";
 .ratings
  position:absolute
  top:174px
  bottom:0
  left:0
  width:100%
  .overview
   display:flex
   padding:18px 0
  .overview-left
    flex:0 0 137px
    width:137px
    border-right: 1px solid rgba(7,17,27,0.2);
    text-align:center
    padding:6px 0
    @media only screen and (max-width:320px)
       flex:0 0 120px
       width:120px
    .score
      margin-bottom:6px
      font-size:24px
      line-height:28px
      color:rgb(255,153,0)
    .title
      margin-bottom:8px
      line-height:12px
      font-size:12px
      color:rgb(7,17,27)
    .rank
      padding-bottom:6px
      line-height:10px
      font-size:10px
      color:rgb(147,153,159)
  .overview-right
    flex:1
    padding: 6px 20px
    .score-wrapper
      margin-bottom:7px
      font-size:0
      .title
       line-height:18px
       display:inline-block
       vertical-align:top
       font-size:13px
       color:rgb(7,17,27)
      .star
       line-height:18px
       display:inline-block
       vertical-align:top
       margin:4px
      .score
       line-height:18px
       display:inline-block
       vertical-align:top
       color:rgb(255,153,0)
       font-size:12px
    .deliveryTime
       margin-right:12px
       line-height:18px
       margin-bottom:8px
       font-size:0
       .title
        font-size:13px
        color:rgb(7,17,27)
       .score
        margin-left: 5px;
        font-size:12px
  .rating-content
   display:flex
   padding:10px
   border-top:1px solid rgba(7,17,27,0.2)
   .content-left
    flex:0 0 50px
    width:50px
    text-align:center
    .avatimg
     width:30px
     height:30px
     border-radius:50px
   .content-right
    flex:1
    margin-left: 17px
    font-size:0
    .name
     font-size:12px
    .star
     display:inline-block
    .time
      font-size:12px
      margin-left:10px
      color:rgba(7,17,27,0.5)
    .rating
     font-size:12px
     margin-top: 6px
     line-height:16px
    .rating-foot
     padding-top:5px
    .good
     display:inline-block
     bg-image('good')
     width:22px
     height:24px
     background-size:22px 24px
     background-repeat:no-repeat
     vertical-align: top
     margin-right:5px
    .recommend
     font-size:12px
     display: inline-block;
     border: 1px solid #ccc;
     padding: 5px;
     border-radius: 3px;
     text-align: center;
     background: rgba(7,17,27,0.1);
     margin-right:5px
</style>

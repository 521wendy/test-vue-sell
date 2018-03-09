<template>
  <div class="seller-wrapper">
    <div class="content" ref="seller">
     <div class="overview">
      <h1 class="title">{{seller.name}}</h1>
      <div class="desc border-1px">
         <star :size="24" :score="seller.score"></star>
         <span class="text">({{seller.ratingCount}})</span>
         <span class="text">月销{{seller.sellCount}}单</span>
      </div>
      <ul class="remark">
        <li class="block">
          <h2>起送价</h2>
          <div class="content">
            <span class="stress">{{seller.minPrice}}元</span>
          </div>
        </li>
        <li class="block">
           <h2>商家配送</h2>
           <div class="content">
             <span class="stress">{{seller.deliveryPrice}}元</span>
           </div>
        </li>
        <li class="block">
           <h2>平均配送时间</h2>
           <div class="content">
             <span class="stress">{{seller.deliveryTime}}分钟</span>
           </div>
        </li>
      </ul>
      <div class="favorite" @click="toggleFavorite">
        <span class="favorite-icon">{{favorite}}</span>
        <span class="text">{{favoriteText}}</span>
      </div>
     </div>
     <div class="bulletin">
      <h1 class="title border-1px">公告与活动</h1>
      <div class="content-wrapper">
       <p class="content">{{seller.bulletin}}</p>
      </div>
     </div>
     <ul v-if="seller.supports" class="supports">
       <li class="support-item border-1px " v-for="item in seller.supports">
       <span class="icon" :class="classMap[seller.supports[2].type]"></span>
       <span class="text">{{seller.supports[2].description}}</span>
       </li>
     </ul>
     <div class="pics">
        <h1 class="title">商家实景</h1>
         <div class="pic-wrapper">
           <ul class="pic-list">
              <li class="pic-item" v-for="pic in seller.pics">
                <img :src="pic" width="120" height="90">
              </li>
           </ul>
         </div>
     </div>
     <div class="info">
      <h1 class="title border-1px">商家信息</h1>
      <ul>
        <li class="info-item" v-for="info in seller.infos">{{info}}</li>
      </ul>
     </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
import BScroll from 'better-scroll'
import star from '../star/star.vue'
 const ERR_OK = 0;
 export default {
   props:{
      seller:{
       type:Object
      }
     },
     data() {
      return {
        favorite:false
      }
     },
     computed:{
      favoriteText() {
        return this.favorite ? '已经收藏' : '收藏'
      }
     },
   created() {
       this.classMap = ['decrease','discount','special','invoice','guarantee'];
   },
     components:{
      star
     },
     watch: {
       'seller'() {
        this._initScroll();
       }
     },
    methods: {
    toggleFavorite(event){
      if(!event._constructed){
         console.log("1111111")
         return;
      }
      this.favorite = !this.favorite
    },
     _initScroll() {
      this.sellerScroll = new BScroll(this.$refs.seller,{})
     }
    }
 };
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixin";
.seller-wrapper
  position:absolute
  top:174px
  bottom:0
  left:0
  width:100%
  .overview
   position:relative
   padding:18px
   .title
    font-size:14px
    margin-bottom:8px
    color:rgb(7,17,27)
    line-height:14px
   .desc
    padding-bottom:18px
    font-size:0
    border-1px:(rgba(7,17,27,0.1))
    .star
     display:inline-block
     margin-right:8px
     vertical-align:top
    .text
     line-height:18px
     display:inline-block
     vertical-align:top
     font-size:10px
     color:rgb(74,85,93)
   .remark
     display:flex
     padding-top:18px
     .block
      flex:1
      text-align:center
      border-right:1px solid rgba(7,17,27,0.1)
      &:last-child
       border:none
     h2
      font-size:10px
      margin-bottom:4px
      line-height:10px
      color:rgba(7,17,27,0.5)
     .content
       line-height:24px
       font-size:10px
       color:rgb(7,17,27)
       margin-top:8px
      .stress
       font-size:24px
   .favorite
     position:absolute
     top:18px
     right:18px
     text-align:center
     .favorite-icon
      lien-height:24px
      display:inline-block
      bg-image('favicon')
      width:20px
      height:20px
      background-size:20px 20px
      background-repeat:no-repeat
     .text
      line-height:10px
      color:rgb(97,25,93)
      font-size:12px
      line-height:20px


  .bulletin
    padding:18px 18px 0 18px
    .title
      font-size:20px
      margin-bottom:8px
      color:rgb(7,17,27)
      line-height:14px
     .content-wrapper
       padding:0 12px 16px 12px
       border-1px:(rgba(7,17,27,0.1))
       .content
        line-height:24px
        font-size:14px
        color:red
  .supports
    width:80%
    margin:0 auto
    margin-top:10px
   .support-item
     padding:10px 12px
     margin-bottom:12px
     font-size:12px
     border-1px:(rgba(7,17,27,0.1))
     &:last-child
      margin-bottom:0
     .icon
       display:inline-block
       width:16px
       height:16px
       vertical-align:top
       background-size:16px 16px
       background-repeat:no-repeat
       &.decrease
         bg-image('decrease_2')
       &.discount
         bg-image('discount_2')
       &.guarantee
         bg-image('guarantee_2')
       &.invoice
         bg-image('invoice_2')
       &.special
         bg-image('special_2')
       .text
        font-size:12px
        line-height:12px
   .pics
    padding:18px
    .title
     margin-bottom:12px
     line-height:14px
     color:rgb(7,17,27)
     font-size:14px
    .pic-wrapper
      width:100%
      overflow:hidden
      white-space:nowrap
      .pic-list
       font-size:0
       .pic-item
        margin-right:6px
        display:inline-block
        width:120px
        height:90px
        &:last-child
         margin:0
  .info
   padding:18px 18px 0 18px
   .title
    padding-bottom:12px
    line-height:14px
    border-1px(rgba(7,17,27,0.1))
    color:rgb(7,17,27)
    font-size:14px
   .info-item
    padding:16px 12px
    line-height:12px
    border-1px(rgba(7,17,27,0.1))
    color:rgb(7,17,27)
    font-size:12px



</style>

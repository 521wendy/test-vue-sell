<template>
  <div class="goods">
    <div class="menu-wrapper" ref="menu">
      <ul>
        <li v-for="item in goods" class="menu-item">
         <span class="text border-1px">
         <span v-show="item.type>0" class="icon" :class="classMap[item.type]">
          </span>{{item.name}}
         </span>
        </li>
      </ul>
    </div>
    <div class="foods-wrapper" ref="foods">
      <ul>
        <li v-for="item in goods" class="food-list">
          <h1 class="title">{{item.name}}</h1>
            <ul>
              <li v-for="food in item.foods" class="food-item border-1px">
                <div class="icon">
                  <img :src="food.icon">
                </div>
                <div class="content">
                   <h2 class="name">{{food.name}}</h2>
                   <p class="desc">{{food.description}}</p>
                   <div class="extra">
                    <span class="count">月销{{food.sellCount}}/份</span>
                    <span class="rating">好评率{{food.rating}}%</span>
                   </div>
                   <div class="price">
                   <span class="now">￥{{food.price}}</span>
                   <span class="old" v-show="food.oldPrice">￥{{food.oldPrice}}</span>
                   </div>
                </div>
              </li>
            </ul>
        </li>
      </ul>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
import BScroll from 'better-scroll'
 const ERR_OK = 0;
 export default {
   props: {
    seller:{
    type:Object
    }
   },
    data() {
     return{
      goods:[]
     };
    },
    created() {
     this.$http.get('/api/shangpin').then((response) =>{
        response = response.body;
          if(response.errno === ERR_OK){
           this.goods = response.data
           this.$nextTick(() => {
            this._initScroll()
           })
          }
     });
     this.classMap = ['decrease','discount','special','invoice','guarantee'];
    },
    methods: {
     _initScroll() {
      this.menuScroll = new BScroll(this.$refs.menu,{})
      this.foodsScroll = new BScroll(this.$refs.foods,{})
     }
    }

 };
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixin";
  .goods
   width:100%
   display:flex
   position:absolute
   top:174px
   bottom:46px
   overflow:hidden
   .menu-wrapper
    flex:0 0 80px
    background:#f3f5f7
    width:80px
    .menu-item
      display:table
      width:60px
      height:54px
      line-height:14px
      text-align:center
      .icon
       display:inline-block
       width:12px
       height:12px
       margin-right:4px
       background-size:12px 12px
       background-repeat:no-repeat
       &.decrease
         bg-image('decrease_3')
       &.discount
         bg-image('discount_3')
       &.guarantee
         bg-image('guarantee_3')
       &.invoice
         bg-image('invoice_3')
       &.special
         bg-image('special_3')
      .text
       display:table-cell
       font-size:12px
       width:56px
       vertical-align:middle
       border-1px(rgba(7,17,27,0.1))
   .foods-wrapper
    flex:1
    .title
     padding-left:14px
     height:26px
     line-height:26px
     border-left:2px solid #d9dde1
     font-size:12px
     color:rgb(147,153,159)
     background:#f3f5f7
    .food-item
     display:flex
     margin:18px
     border-1px(rgba(7,17,27,0.1))
     &:last-child
      border-none
     .icon
      flex:0 0 56px
      margin-right:10px
     .content
      flex:1
      .name
       margin:2px 0 8px 0
       height:14px
       line-height:14px
       font-size:14px
       color:rgb(7,17,27)
      .desc
       height:14px
       color:rgb(7,17,27)
       font-size:10px
      .extra
       line-height:10px
       font-size:10px

       color:rgb(147,153,159)
       margin:5px 0
      .count
       margin-right:12px
      .price
       font-weight:700
       line-height:24px
       .now
        margin-right:8px
        font-size:14px
        color:rgb(240,20,20)
       .old
        font-size:10px
        color:rgb(147,153,159)





</style>

<template>
  <div class="header">
    <div class="content-wrapper">
        <div class="avatar">
        <img width="64" height="64" :src="seller.avatar">
        </div>
        <div class="content">
          <div class="title">
            <span class="brand"></span>
            <span class="name">{{seller.name}}</span>
          </div>
          <div class="description">
           {{seller.description}}/{{seller.deliveryTime}}分钟送达
          </div>
          <div v-if="seller.supports" class="support">
            <span class="icon" :class="classMap[seller.supports[4].type]"></span>
            <span class="text">{{seller.supports[0].description}}</span>
          </div>
        </div>
        <div class="support-count" v-if="seller.supports" @click="showDetail">
        <span class="count">{{seller.supports.length}} 个</span>
        <i class=" icon-keyboard_arrow_right"></i>
        </div>
    </div>
    <div class="bulletin-wrapper" v-if="seller.bulletin" @click="showDetail">
    <span class="bulletin-brand"></span>
    <span class="bulletin-text">{{seller.bulletin}}</span>
    <i class="icon-keyboard_arrow_right"></i>
    </div>
    <div class="background">
    <img :src="seller.avatar" width="100%" height="100%">
    </div>
    <div class="detail" v-show="detailShow">
       <div class="detail-wrapper clearfix">
          <div class="detail-main">
            <h1>{{seller.name}}</h1>
            <div class="star-wrapper">
              <star :size="48" :score="seller.serviceScore"></star>
            </div>
            <div class="title">
              <div class="line"></div>
              <div class="text">活动优惠</div>
              <div class="line"></div>
            </div>
            <ul v-if="seller.supports" class="supports">
              <li class="support-item" v-for="item in seller.supports">
               <span class="icon" :class="classMap[seller.supports[2].type]"></span>
               <span class="text">{{seller.supports[2].description}}</span>
              </li>
            </ul>
            <div class="title-sec">
              <div class="line"></div>
              <div class="text">商家公告</div>
              <div class="line"></div>
            </div>
            <p class="bulletin">{{seller.bulletin}}</p>
          </div>
       </div>
       <div class="detail-close" @click="hideDetail">
        <span class="close" ></span>
       </div>
    </div>
  </div>
</template>

<script type=text-ecmascript-6>
import star from '../star/star.vue';
 export default{
 /*
    不能(也不应该)在子组件的模板内直接引用父组件的数据。
    要让子组件使用父组件的数据，我们需要通过子组件的props选项。
    父组件的数据要通过prop下发到子组件中
 */
    props:{
      seller:{
         type:Object
      }
     },
     /*
      v-show简单的判断元素的display样式，false是不显示，点击事件等于true时显示。
     */
     data() {
       return {
        detailShow:false
       }
     },

 /*
   事件的方法
 */
     methods:{
       showDetail:function(){
         this.detailShow = !this.detailShow
       },
       hideDetail:function() {
         this.detailShow = false
       }
     },
     /*
      vue实例生成后调用此函数，绑定到html元素上，进行编译插入到DOM中
     */
     created() {
     this.classMap = ['decrease','discount','special','invoice','guarantee'];
     },
     components: {
          star
      }
   };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin";
   .clearfix
      display:inline-block
 .header
     overflow: hidden
     position:relative
     color:#fff
     background:rgba(7,17,27,0.5)
    .content-wrapper
      padding:24px 12px 18px 24px
      font-size:0
      position:relative
      .avatar
        vertical-align:top
        display:inline-block
        img
          border-radius:2px
      .content
        display:inline-block
        font-size:16px
        margin-left:16px
        .title
          margin:2px 0 8px 0
          .brand
            display:inline-block
            vertical-align:top
            width:30px
            height:18px
            bg-image('brand')
            background-size:30px 18px
            background-repeat:no-repeat
            .name
              margin-left:6px
              font-size:16px
              line-height:18px
              font-weight:bold
            .description
              margin-bottom:10px
              font-size:12px
              line-height:12px
        .support
            line-height:12px
            margin-top:6px
            .icon
              display:inline-block
              width:12px
              height:12px
              margin-right:4px
              background-size:12px 12px
              background-repeat:no-repeat
              &.decrease
                bg-image('decrease')
              &.discount
                bg-image('discount')
              &.guarantee
                bg-image('guarantee')
              &.invoice
                bg-image('invoice')
              &.special
                bg-image('special')
            .text
                vertical-align:top
                font-size:12px
                line-height:12px
      .support-count
         position:absolute
         right:12px
         bottom:18px
         padding:0 8px
         height:20px
         line-height:20px
         border-radius:14px
         background:rgba(0, 0, 0, 0.6)
         text-align:center
         .count
           font-size:10px
         .icon-keyboard_arrow_right
           width:14px
           margin-left:4px
           font-size:10px
           line-height:21px
    .bulletin-wrapper
       background:#8d8986
       line-height:24px
       padding:0 22px 0 11px
       overflow:hidden
       text-overflow:ellipsis
       white-space:nowrap
       .bulletin-brand
          display:inline-block
          width:22px
          height:14px
          bg-image('bulletin')
          background-size:22px 14px
          background-repeat:no-repeat
          margin-right:4px
       .bulletin-text
          vertical-align:top
          font-size:10px
          line-height:21px
    .background
      position: absolute
      top: 0
      left: 0
      width:100%
      height:100%
      z-index:-1
      filter:blur(10px)
    .detail
     position:fixed
     top:0
     left:0
     width:100%
     height:100%
     background:rgba(7,17,27,0.8)
     z-index:100
     .detail-wrapper
        width:100%
        min-height:100%
        text-align:center
        .detail-main
          margin-top:64px
          padding-bottom:64px
          .star-wrapper
           margin-top: 14px
           text-align: center
           padding: 2px 0
          .title
           width:80%
           display:flex
           margin:30px auto 24px auto
          .line
           flex:1
           position:relative
           top:-6px
           border-bottom:1px solid rgba(255,255,255,0.2)
         .text
           padding:0 12px
           font-size:14px
           font-weight:700
         .supports
           width:80%
           margin:0 auto
           .support-item
             padding:0 12px
             margin-bottom:12px
             font-size:0
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
         .title-sec
           width:80%
           display:flex
           margin:30px auto 10px auto
         .line
          flex:1
          position:relative
          top:-6px
          color:rgba(255,255,255,0.2)
        .bulletin
          width:80%
          margin:0 auto
          padding:10px
     .detail-close
        position:relative
        width:32px
        height:32px
        margin:-64px auto 0 auto
        clear:both
        font-size:32px
        .close
          display:block
          width:32px
          height:32px
          bg-image('close')
          background-size:32px 32px
          background-repeat:no-repeat





</style>


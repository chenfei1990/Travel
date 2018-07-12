<template>
<div class="header">
   <div class="header-left">
       <div class="iconfont back-icon">&#xe624;</div>
   </div>
   <div class="header-input">
       <span class="iconfont">&#xe632;</span>
       输入城市/景点/游玩主题
   </div>
   <router-link to="/city">
    <div class="header-right">
        {{this.city}}
        <!-- {{this.$store.state.city}} -->
        <span class="iconfont arrow-icon">&#xe65e;</span>
      </div>
    </router-link>
</div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Header',
  computed: {
    ...mapState(['city'])
  }
}
</script>

<style lang="stylus" scoped>
  @import '~@/assets/styles/varibale.styl';
  .header
    display flex
    line-height: .86rem
    background : $bgColor
    color : #fff
    .header-left
      width: .64rem
      float: left
      .back-icon
        text-align :center
        font-size : .4rem
    .header-input
      flex : 1
      background : #fff
      border-radius : .1rem
      margin-top : .12rem
      height : .60rem
      line-height : .60rem
      padding-left : .2rem
      margin-left : .2rem
      color : #ccc
    .header-right
      min-width : 1.04rem
      padding : 0 .1rem
      float : right
      text-align : center
      color : #fff
      .arrow-icon
        font-size : .24rem
        margin-left : -.04rem
</style>

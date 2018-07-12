<template>
    <div>
       <router-link tag="div" to="/" class="header-abs" v-show="showAbs">  <div class="iconfont abs-back">&#xe624;</div></router-link>
       <div class="header-fixed"  v-show="!showAbs" :style="opacityStyle">
           <router-link to="/">
                <div class="iconfont header-fixed-back">&#xe624;</div>
            </router-link>
           景点详情
       </div>
    </div>
</template>
<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  },
  deactivated () {
    //   也是 keep alive
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll () {
      const top = document.documentElement.scrollTop
      if (top > 60) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = {
          opacity
        }
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }
  }
}
</script>

<style lang="stylus" scope>
        @import '~@/assets/styles/varibale.styl';
        .header-abs
            position : absolute
            left: .2rem
            top: .2rem
            width : .8rem
            height : .8rem
            line-height : .8rem
            border-radius : 4rem
            background : rgba(0,0,0,.8)
            text-align : center
            .abs-back
                color : #fff
                font-size : .4rem
        .header-fixed
            z-index : 2
            position :fixed
            top: 0
            right :0
            left :0
            height : .86rem
            line-height : .86rem
            text-align : center
            color : #fff
            background : $bgColor
            font-size : .32rem
            .header-fixed-back
                position : absolute
                top : 0
                left : 0
                text-align : center
                width : .64rem
                font-size : .4rem
                color : #fff
</style>

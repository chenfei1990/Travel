<template>
    <div>
        <div class="banner" @click="handleBannerClick">
            <img class="banner-img" :src="bannerImg" >
            <div class="banner-info">
                <div class="banner-title">{{sightName}}</div>
                <div class="banner-number"><span class="iconfont banner-icon">&#xe600;</span>{{gallaryImgs.length}}</div>
            </div>
        </div>
        <fade-animation>
            <common-gallary :imgs="gallaryImgs" v-show="gallaryShow"  @close ="handleGallaryClose"></common-gallary>
        </fade-animation>
    </div>
</template>
<script>
import CommonGallary from 'common/gallary/Gallary'
import FadeAnimation from 'common/fade/Fade'
export default {
  name: 'Banner',
  props: {
    sightName: String,
    bannerImg: String,
    gallaryImgs: Array
  },
  data () {
    return {
      gallaryShow: false
    }
  },
  components: {
    CommonGallary,
    FadeAnimation
  },
  methods: {
    handleBannerClick () {
      this.gallaryShow = true
    },
    handleGallaryClose () {
      this.gallaryShow = false
    }
  }
}
</script>
<style lang="stylus" scope>
    .banner
        position : relative
        overflow : hidden
        height : 0
        padding-bottom : 55%
        .banner-img
            width : 100%
        .banner-info
            display : flex
            position : absolute
            left : 0
            bottom : 0
            right : 0
            line-height : .6rem
            color : #fff
            background-image : linear-gradient(to top,rgba(0,0,0,0),rgba(0,0,0,0.8))
            .banner-title
                flex : 1
                font-size : .32rem
                padding : 0 .2rem
            .banner-number
                height : .32rem
                line-height : .32rem
                padding : 0 .4rem
                margin-top : .14rem
                border-radius : .2rem
                background : rgba(0,0,0,.8)
                font-size : .24rem
                .banner-icon
                    font-size : .24rem
</style>

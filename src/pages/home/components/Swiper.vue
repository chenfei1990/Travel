<template>
  <div class="wrapper">
      <swiper :options="swiperOption" v-if="showSwiper">
        <!-- slides -->
        <swiper-slide v-for="item in swiperList" :key="item.id">
          <img class="swiper-img"  :src="item.imgUrl">
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
        <!-- 左右箭头 -->
        <!-- <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div> -->
        <!-- 滚筒条 -->
        <!-- <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
      </swiper>
  </div>
</template>

<script>

export default {
  name: 'HomeSwiper',
  data () {
    return {swiperOption: {
      pagination: '.swiper-pagination',
      loop: true,
      autoplay: 3000
    }
    }
  },
  props: {
    swiperList: Array
  },
  computed: {
    showSwiper () {
      return this.swiperList.length > 0
    }
  }
}
</script>

<style lang='stylus' scoped>
  .wrapper >>> .swiper-pagination-bullet-active
    background: #fff
  .wrapper
    overflow : hidden
    width : 100%
    height :0
    padding-bottom : 29.5%
    .swiper-img
      width: 100%
</style>

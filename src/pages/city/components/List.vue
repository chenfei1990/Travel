<template>
    <div class="list" ref="wrapper">
        <div>
            <div class="area">
                <div class="title border-topbottom">当前城市</div>
                <div class="botton-list">
                    <div class="botton-wrapper">
                        <div class="button">{{this.currentCity}}</div>
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title border-topbottom">热门城市</div>
                <div class="botton-list">
                    <div class="botton-wrapper" v-for="item in hot" :key="item.id" @click="handleCityClick(item.name)">
                        <div class="button">{{item.name}}</div>
                    </div>
                </div>
            </div>
            <div class="area" v-for="(item ,key)  of  cities" :key="key" :ref="key">
                <div class="title border-topbottom">{{key}}</div>
                <div class="item-list">
                    <div class="item border-bottom" v-for="innerItem in item" :key="innerItem.id"  @click="handleCityClick(innerItem.name)">
                        {{innerItem.name}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
/* eslint-disable */
import BScrool from 'better-scroll'
import { mapState , mapMutations } from "vuex"
export default {
  name: 'CityList',
  props: {
    hot: Array,
    cities: Object,
    letter: String
  },
  mounted () {
    this.scrool = new BScrool(this.$refs.wrapper)
  },
  watch: {
    letter () {
      if (this.letter) {
        const element = this.$refs[this.letter][0]
        this.scrool.scrollToElement(element)
      }
    }
  },
  methods: {
    handleCityClick (city) {
    //   this.$store.commit('changeCity', city)
      this.changeCity(city)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  },
  computed : {
      ...mapState({
          currentCity: 'city'
      })
  }
}
</script>

<style lang="stylus" scoped>
    @import '~@/assets/styles/varibale.styl';
    .border-topbottom
        &:before
            border-color: #ccc
        &:after
            border-color: #ccc
    .border-bottom
        &:before
            border-color: #ccc
    .list
        position : absolute
        top: 1.55rem
        left: 0
        right : 0
        bottom : 0
        overflow : hidden
        .title
            line-height : .54rem
            background : #eee
            padding-left : .2rem
            color : #666
            font-size : .26rem
        .botton-list
            overflow : hidden
            padding : .1rem .6rem .1rem .1rem
            .botton-wrapper
                float : left
                width : 33.33%
                .button
                    padding : .1rem 0
                    margin : .1rem
                    text-align : center
                    border : .02rem solid #ccc
                    border-radius : .06rem
        .item-list
            .item
                line-height : .76rem
                padding-left : .2rem
</style>

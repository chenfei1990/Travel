<template>
    <div>
        <div class="search">
            <input v-model="keyword" class="serachInput" type="text" placeholder="请输入城市名或拼音 ">
        </div>
        <div class="search-content" ref="content" v-show="keyword">
            <ul>
                <li class="search-item border-bottom" v-for="item in list" :key="item.id" @click="handleCityClick(item.name)">{{item.name}}</li>
                <li class="search-item border-bottom" v-show="hasNoData">没找到匹配项</li>
            </ul>
        </div>
    </div>
</template>

<script>
/* eslint-disable */ 
import Bscroll from 'better-scroll'
import { mapMutations } from "vuex";
export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  computed: {
      hasNoData () {
          return !this.list.length
      }
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
          this.list = []
          return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
            this.cities[i].forEach(element => {
                if (element.spell.indexOf(this.keyword) > -1 || element.name.indexOf(this.keyword) > -1) {
                    result.push(element)
                }
            })
        }
        this.list = result
      }, 100)
    }
  },
  mounted () {
     this.scroll = new Bscroll(this.$refs.content)
  },
  methods : {
    handleCityClick (city) {
      this.$store.commit('changeCity', city)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  }
}
</script>

<style lang="stylus" scoped>
    @import '~@/assets/styles/varibale.styl';
    .search
        background : $bgColor
        height : .74rem
        padding 0 .1rem
        touch-action: none
        .serachInput
            height : .62rem
            line-height : .62rem
            width : 100%
            text-align : center
            border-radius : .06rem
            color : #666
            padding : 0 .1rem
            box-sizing : border-box
    .search-content
        overflow : hidden
        position : absolute
        top : 1.56rem
        left: 0
        right : 0
        bottom : 0
        z-index : 1
        background : #eee
        .search-item
            line-height : .62rem
            padding-left : .2rem
            color : #666
            background : #fff
</style>

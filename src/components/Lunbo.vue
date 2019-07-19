<template>
  <div class="lunbo" ref="lunbo">
    <el-carousel :height="elHeight">
      <el-carousel-item v-for="(item,index) in lunboArr" :key="index">
        <img class="el-img" :src="item.img" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
import utils from '../utils/utils'
export default {
  data () {
    return {
      lunboArr: [
//        {img: require('../assets/index/banner.png')},
//        {img: require('../assets/index/lunbotu_zhaongjian.png')},
      ],
      elHeight: '608px' // 设计图的高
    }
  },
  props: {
    imgArr: {
      type: Array,
      default: null
    }
  },

  components: {},

  computed: {},

  methods: {
    /**
     * 设置banner容器高度
     */
    setBannerHeight () {
      const theH = this.$refs['lunbo'].offsetHeight
      this.elHeight = theH + 'px'
    }
  },
  
  created () {},

  mounted () {
    utils.hasSetRem(this.setBannerHeight)
    this.lunboArr = this.imgArr
  },

  beforeDestroy () {}
}
</script>

<style lang='scss' scoped>
.lunbo {
  width: 100%;
  height: 608px;
}
.el-img {
  width: 100%;
  height: 100%;
}
</style>

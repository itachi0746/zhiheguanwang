<template>
  <div>
    <Header :activeItem="activeItem"/>
    <Lunbo v-if="lunboArr" :imgArr="lunboArr" />
    <div class="main-box w1200">
      <ul class="icon-list">
        <li v-for="(item,index) in listData" :key="index">
          <div class="li-box">
            <div class="li-box-icon">
              <img :src="item.img" alt="">
            </div>
            <div class="li-box-name">{{item.name}}</div>
            <div class="li-box-ct">
              {{item.content}}
            </div>
          </div>
        </li>
      </ul>

      <div class="map-box">
        <el-amap class="amap-box" :vid="'amap-vue'"></el-amap>
      </div>
    </div>
    <TopBtn></TopBtn>
    <Footer></Footer>
  </div>
</template>

<script>
import * as http from '../../utils/core/http'
import utils from '../../utils/utils'
import Header from '../../components/Header.vue'
import Footer from '../../components/Footer.vue'
import Lunbo from '../../components/Lunbo.vue'
import TopBtn from '../../components/TopBtn.vue'
import TabComp from '../../components/TabComp.vue'
import TypeSearch from '../../components/TypeSearch.vue'

export default {
  data () {
    return {
      lunboArr: [
        {img: require('./assets/banner.png')},
        {img: require('./assets/banner2.png')},
      ],
      activeItem: 5,
      activeTab: 3, // 当前tab
      tabData: [
        {name: '知识产权基础理论', tabId: 0},
        {name: '著作权研究', tabId: 1},
        {name: '商标权研究', tabId: 2},
        {name: '专利权研究', tabId: 3},
      ],
      listData: [
        {name: '地址', content: '广州市白云区嘉禾街空港大道88号嘉大广场B塔1208-1210室', img: require('./assets/icon_dizhi.png')},
        {name: '联系电话', content: '020-29837600', img: require('./assets/icon_lianxidianhua.png')},
        {name: '传真', content: '020-66698165', img: require('./assets/icon_chuanzheng.png')},
        {name: '网址', content: 'www.zhhc-ip.com ', img: require('./assets/icon_wangzhi.png')}
      ]
    }
  },

  components: {
    Header,
    Lunbo,
    Footer,
    TopBtn,
    TabComp,
    TypeSearch
  },

  computed: {},

  methods: {
    clickTab (idx) {
      this.activeTab = idx
    },
    clickBtn (id) {
      this.activeComp = id
    },
    changeTab (idx) {
      this.activeTab = idx
    },

  },
  
  created () {},

  mounted () {

  },

  beforeDestroy () {}
}
</script>

<style lang='scss' scoped>
  .w1200 {
    width: 1200px;
    margin: 0 auto;
  }
  .tab-box {
    background-color: #E5E5E5;
    color: #ffffff;
    font-size: 16px;
    margin-bottom: 80px;
  }
  .tab-ul {
    display: flex;
    li {
      @include defaultFlex;
      border-right: 1px solid #ffffff;
      width: 300px;
      height: 50px;
      background-color: #CFA972;
    }
    li.active {
      color: #131313;
      background-color: #fff;
    }
  }
  .tab-ul li:nth-last-child(1) {
    border: 0px;
  }
  .main-box {
    font-size: 16px;
    color: #131313;
    margin-bottom: 100px;
    /*display: flex;*/
  }
  .icon-list {
    display: flex;
    justify-content: space-between;
    margin-top: 80px;
    width: 100%;
    li {
      width: 248px;
    }
  }
  .li-box {

  }
  .li-box-icon {
    padding: 0 91px;
    img {
      width: 66px;
      height: 66px;
    }
  }
  .li-box-name {
    color: #999999;
    text-align: center;
    margin-bottom: 15px;
    margin-top: 10px;
  }
  .li-box-ct {
    text-align: center;
    line-height: 25px;
  }
  .map-box {
    width: 1200px;
    height: 525px;
    margin-top: 100px;
  }
  .amap-box {
    width: 100%;
    height: 100%;
  }
</style>

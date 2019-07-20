<template>
  <div>
    <Header :activeItem="activeItem"/>
    <Lunbo v-if="lunboArr" :imgArr="lunboArr" />
    <div>
      <div class="tab-box">
        <div class="w1200">
          <TabComp v-if="tabData.length" :activeTab="activeTab" :tabData="tabData" @changeTab="changeTab"></TabComp>
        </div>
      </div>

      <div class="main-box w1200">

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

export default {
  data () {
    return {
      lunboArr: [
        {img: require('./assets/banner.png')},
        {img: require('./assets/banner2.png')},
      ],
      activeItem: 1,
      activeTab: 0, // 当前tab
      tabData: [
        {name: '商标分类', tabId: 0},
        {name: '发明专利', tabId: 1},
        {name: '实用新型', tabId: 2},
        {name: '外观专利', tabId: 3},
      ]
    }
  },

  components: {
    Header,
    Lunbo,
    Footer,
    TopBtn,
    TabComp
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
    }
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
    font-size: 14px;
    color: #666666;
    margin-bottom: 100px;
  }
  .tab1 {
    justify-content: space-between;
    display: flex;
  }
  .main-item {
    width: 570px;
    height: 486px;
  }
  .the-title {
    font-size: 18px;
    color: #333;
    margin-bottom: 10px;
  }
  .mt30 {
    margin-top: 23px;
  }
  .mt40 {
    margin-top: 40px;
  }
  .lh25 {
    line-height: 25px;
  }
  .tab2-title {
    font-size: 18px;
    color: #131313;
  }
  .fz12 {
    font-size: 12px;
  }
  .tab2-ul {
    display: flex;
    justify-content: space-between;
    padding: 0 135px;
    margin-top: 52px;
    flex-wrap: wrap;
    li {
      margin-bottom: 16px;
      @include defaultFlex;
      width: 300px;
      height: 217px;
      /*background-color: #000;*/
      border-radius: 16px;
    }
  }
  .tab2-ul li:nth-child(1) {
    margin-left: 190px;
  }
  .tab2-ul li:nth-child(2) {
    margin-right: 125px;
  }
  .tab2-li-ct {
    color: #ffffff;
    font-size: 20px;
    text-align: center;
  }
  .tab2-li-ct-t {
    font-size: 28px;
    font-weight: bold;
  }
  .tab3-ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    color: #131313;
    font-size: 14px;

    li {
      height: 180px;
      width: 566px;
      display: flex;
    }
  }
  .tab3-li-title {
    color: #BE2027;
    font-size: 18px;
    margin-bottom: 10px;
  }
  .tab3-li-img {
    width: 58px;
    height: 58px;
  }
  .tab3-li-r {
    width: 495px;
    margin-left: 10px;
  }
  .tab3-li-ct {
    color: #000;
    ::v-deep p {
      text-indent: 2em;
    }
  }
  .table-head {
    display: flex;
    font-size: 16px;
    color: #666666;
    padding-left: 41px;
    li {
      width: 25%;
      height: 50px;
      line-height: 50px;
      text-align: center;
    }
  }
  .tab4-comp {
    display: flex;
    font-size: 16px;
    color: #ffffff;
    margin-bottom: 29px;
  }
  .tab4-comp-l {
    width: 41px;
    height: 50px;
    @include defaultFlex;
    img {
      width: 26px;
      height: 26px;
    }
  }
  .tab4-comp-r {
    width: 1160px;
  }
  .tab4-comp-r-header {
    display: flex;
    background-color: #A0A0A0;
    li {
      width: 25%;
      height: 50px;
      line-height: 50px;
      text-align: center;
    }
  }
  .tab4-comp-r-body {
    border: 1px solid #BE2027;
    font-size: 14px;
    color: #131313;
    padding: 49px 59px;
  }
  .tab4-comp-r-body-inner {
    width: 100%;
    height: 100%;

    ::v-deep * {
      color: #131313!important;
      /*font-size: 14px!important;*/
      font-family:MicrosoftYaHei;
      line-height:32px;
    }
  }
  .comp-color {
    background-color: #BE2027!important;
  }
</style>

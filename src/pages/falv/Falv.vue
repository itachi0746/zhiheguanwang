<template>
  <div>
    <Header :activeItem="activeItem"/>
    <Lunbo v-if="lunboArr" :imgArr="lunboArr" />
    <div>
      <div class="tab-box">
        <div class="w1200">
          <ul class="tab-ul">
            <li :class="{'active': activeTab===index}" v-for="(item,index) in tabData" :key="index" @click="clickTab(index)">{{item.name}}</li>
          </ul>
        </div>
      </div>

      <div class="main-box w1200">
        <div class="tab1" v-if="activeTab===0">
          <ul class="tab1-ul">
            <li>
              <div>
                <img class="tab1-li-img" src="./assets/chengchunhui.png" alt="">
              </div>
              <div class="tab1-li-ct">
                <div class="tab1-li-name">
                  <span>陈春晖</span>
                  <span>经理</span>
                </div>
                <div class="tab1-li-data">
                  <div class="tab1-li-data-item">
                    <img src="./assets/icon_dianhua.png" alt="">
                    <span>15622204997</span>
                  </div>
                  <div class="tab1-li-data-item">
                    <img src="./assets/icon_qq.png" alt="">
                    <span>530352101</span>
                  </div>
                  <div class="tab1-li-data-item">
                    <img src="./assets/icon_weixin.png" alt="">
                    <span>CCH_321</span>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div>
                <img class="tab1-li-img" src="./assets/yijing.png" alt="">
              </div>
              <div class="tab1-li-ct">
                <div class="tab1-li-name">
                  <span>易靖</span>
                  <span>经理</span>
                </div>
                <div class="tab1-li-data">
                  <div class="tab1-li-data-item">
                    <img src="./assets/icon_dianhua.png" alt="">
                    <span>13924090704</span>
                  </div>
                  <div class="tab1-li-data-item">
                    <img src="./assets/icon_qq.png" alt="">
                    <span>306274030</span>
                  </div>
                  <div class="tab1-li-data-item">
                    <img src="./assets/icon_weixin.png" alt="">
                    <span>wxid_4g66p5ykqyx121</span>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div>
                <img class="tab1-li-img" src="./assets/chengbaiji.png" alt="">
              </div>
              <div class="tab1-li-ct">
                <div class="tab1-li-name">
                  <span>陈柏季</span>
                  <span>陈先生</span>
                </div>
                <div class="tab1-li-data">
                  <div class="tab1-li-data-item">
                    <img src="./assets/icon_dianhua.png" alt="">
                    <span>15767900299</span>
                  </div>
                  <div class="tab1-li-data-item">
                    <img src="./assets/icon_qq.png" alt="">
                    <span>1225421218</span>
                  </div>
                  <div class="tab1-li-data-item">
                    <img src="./assets/icon_weixin.png" alt="">
                    <span>LOVEmeng1225421218</span>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <div class="tab2" v-if="activeTab===1">

        </div>
        <div class="tab3" v-if="activeTab===2">

        </div>
        <div class="tab4" v-if="activeTab===3">


        </div>
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

export default {
  data () {
    return {
      lunboArr: [
        {img: require('./assets/banner.png')},
        {img: require('./assets/banner2.png')},
      ],
      tabData: [
        {name: '服务咨询', tabId: 0},
        {name: '申请流程', tabId: 1},
        {name: '行业新闻', tabId: 2},
        {name: '近期新闻', tabId: 3},
      ],
      activeItem: 2,
      activeTab: 0, // 当前tab
    }
  },

  components: {
    Header,
    Lunbo,
    Footer,
    TopBtn
  },

  computed: {},

  methods: {
    clickTab (idx) {
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

  .lh25 {
    line-height: 25px;
  }

  .tab1-ul {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    color: #131313;
    font-size: 16px;
    li {
      width: 320px;
    }
    .tab1-li-img {
      width: 320px;
      height: 220px;
    }
  }
  .tab1-li-ct {
    padding: 20px 0px;
  }
  .tab1-li-data {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .tab1-li-data-item {
    min-width: 50%;
    margin-bottom: 19px;
    display: flex;
    align-items: center;
    img {
      width: 20px;
      height: 20px;
      margin-right: 9px;
    }
  }
  .tab1-li-name span:nth-child(1) {
    font-size: 18px;
    font-weight: bold;
    margin-right: 10px;
  }
  .tab1-li-name {
    margin-bottom: 16px;
  }
</style>

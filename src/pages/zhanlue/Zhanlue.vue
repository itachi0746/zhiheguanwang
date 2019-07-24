<template>
  <div>
    <Header v-if="resData" :resData="resData" :activeItem="activeItem"/>
    <Lunbo v-if="lunboArr" :imgArr="lunboArr" />
    <div>
      <div class="tab-box">
        <div class="w1200">
          <TabComp v-if="tabData.length" :activeTab="activeTab" :tabData="tabData" @changeTab="changeTab"></TabComp>
        </div>
      </div>

      <div class="main-box w1200">

        <div class="tab1" v-if="activeTab===0">

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
import TabComp from '../../components/TabComp.vue'
import TypeSearch from '../../components/TypeSearch.vue'

export default {
  data () {
    return {
      lunboArr: [
        {img: require('./assets/banner.png')},
        {img: require('./assets/banner2.png')},
      ],
      resData: null,
      activeItem: 'L5',
      activeTab: 3, // 当前tab
      tabData: [
        {name: '知识产权基础理论', tabId: 0},
        {name: '著作权研究', tabId: 1},
        {name: '商标权研究', tabId: 2},
        {name: '专利权研究', tabId: 3},
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
    async getInfo () {
      const EntId = process.env.VUE_APP_TEST_ENTID
      const OrgId = process.env.VUE_APP_TEST_ORGID
      const ParentId = ''
      const url = `/PartBase/Search?EntId=${EntId}&OrgId=${OrgId}&ParentId=${ParentId}`
      const result = await http.post(url, {})
      console.log(result)
      this.resData = result.Data

    }
  },
  
  created () {
    this.getInfo()

  },

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
    color: #666;
    margin-bottom: 100px;
    display: flex;
  }
  .tab1,.tab2,.tab3,.tab4 {
    width: 100%;
  }

</style>

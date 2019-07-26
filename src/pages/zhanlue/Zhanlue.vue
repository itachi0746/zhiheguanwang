<template>
  <div>
    <Header :activeItem="activeItem" @initHeader="handleHeader"/>
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
      parentId: null, // 父栏目id
      partId: null, // 栏目id
      lunboArr: [
        {img: require('./assets/banner.png')},
        {img: require('./assets/banner2.png')},
      ],
      resData: null,
      activeItem: 'L5',
      activeTab: 0, // 当前tab
      tabData: [
//        {name: '知识产权基础理论', tabId: 0},
//        {name: '著作权研究', tabId: 1},
//        {name: '商标权研究', tabId: 2},
//        {name: '专利权研究', tabId: 3},
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
    /**
     * 处理头部传来的数据
     * @param data 传来的数据 数组
     */
    handleHeader (data) {
      this.resData = data
      for (let obj of this.resData) {
        if (obj.CM01_PART_CODE === this.activeItem) { // 根据栏目code, 找到自己的栏目id,父栏目id
          this.partId = obj.CM01_PART_ID
          this.parentId = obj.CM01_PARENT_ID
        }
      }
      this.getTabData()
    },
    /**
     * 获取tab切换(子栏目)的数据
     */
    async getTabData () {
      const EntId = process.env.VUE_APP_TEST_ENTID
      const OrgId = process.env.VUE_APP_TEST_ORGID
      const ParentId = this.partId
      const url = `/PartBase/Search?EntId=${EntId}&OrgId=${OrgId}&ParentId=${ParentId}`
      const result = await http.post(url, {})
      //      console.log(result)
      if (!result.Data.length) {
        console.log('result 为空')
        return
      }
      for (let obj of result.Data) {
        this.tabData.push({ name: obj.CM01_FULL_NAME_1, orderNo: obj.CM01_VIEW_ORDER, partId: obj.CM01_PART_ID })
      }
      this.tabData = _.sortBy(this.tabData, 'orderNo')
    },
  },
  
  created () {

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

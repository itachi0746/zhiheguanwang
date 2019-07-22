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
        <div class="tab1" v-if="activeTab===0">
          <div class="main-item">
            <div class="the-title">
              聚天下智慧、促企业创新
            </div>
            <div class="lh25">
              智合汇创知识产权创新研究院，是在移动互联网浪潮下，由国内行业专家投资兴办，集科学研究、知识产权研究、产业化及服务于一体的专业智库。研究院根本出发点和最终目的是“实现企业知识产权价值、助力创新型国家”。研究院是对知识产权的创造、管理、运用、保护等的理论与实务进行研究的部门。研究院建立了横跨技术、法律、投资等领域的研究团队，通过对技术创新、知识产权生态进行系统研究，开展国际交流与合作，提出长远而切实的方略与举措，提升产业整体竞争力，实现我国百年“强国梦”。
            </div>
            <div class="mt30">
              <img src="./assets/jianjietupian.png" alt="">
            </div>
          </div>
          <div class="main-item lh25">
            <div>
              <strong>愿景: </strong>
              <span>实现企业知识产权价值，助力企业创新驱动发展。</span>
            </div>
            <div>
              <strong>使命: </strong>
              <span>产业建议，市场观点，服务国家；全球视野，专业务实，助力产业。</span>
            </div>
            <div>
              <strong>领域: </strong>
              <span>知识产权、驱动创新与政策、侵权打假、专利布局。</span>
            </div>
            <div class="mt40">
              <div>
                <strong>企研室</strong>
              </div>
              <div>
                企研室主要通过借助战略合作伙伴粤标集团客户资源，结合研究院本身强有力的科研团队以及顾问团队，为各企打造属于自己企业及行业的知识产权分析报告。帮其建立统一的知识产权保护、发展及创新的战略平台，为企业的快速发展保驾护航。
              </div>
            </div>
            <div class="mt40">
              <div>
                <strong>政研室</strong>
              </div>
              <div>
                政研室主要定位于国家、省、市一级的地方相关知识产权政策以及法律相关的研究咨询业务，为地方企业提供全面的知识产权战略发展规划设计书。研究院通过国内资深的知识产权界国家级智囊团队的研究力量，可以协助企业完成相关知识产权发展研究框架以及政策。
              </div>
            </div>
            <div class="mt40">
              <div>
                <strong>产研室</strong>
              </div>
              <div>
                产研室主要聚焦在目前高校、研究院较多，越来越多的企业对科技创新的重视。结合相关行业领域的资深教授专家业，为相关企业提供技术交流、数据分析、技术解决、协助研发、知识产权保护与应用，让企业实现创新改变未来。
              </div>
            </div>
          </div>
        </div>

        <div class="tab2" v-if="activeTab===1">
          <div class="tab2-title">
            <span>团结、理念、使命、愿景、价值观</span>
          </div>
          <div class="fz12">
            Unity, philosophy, mission, vision, values
          </div>
          <ul class="tab2-ul">
            <li v-for="(item,index) in tab2Data" :key="index" :style="{'backgroundImage': `url(${item.img})`}">
              <div class="tab2-li-ct">
                <div class="tab2-li-ct-t">{{item['name-c']}}</div>
                <div>{{item['name-e']}}</div>
              </div>
            </li>
          </ul>
        </div>
        <div class="tab3" v-if="activeTab===2">
          <ul class="tab3-ul">
            <li v-for="(item,index) in tab3Data" :key="index">
              <div>
                <img :src="item.img" alt="" class="tab3-li-img">
              </div>
              <div class="tab3-li-r lh25">
                <div class="tab3-li-title">
                  {{item.title}}
                </div>
                <div class="tab3-li-ct" v-html="item.content">
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="tab4" v-if="activeTab===3">
          <ul class="table-head">
            <li>职位</li>
            <li>人数</li>
            <li>学历要求</li>
            <li>发布时间</li>
          </ul>
          <div class="tab4-comp">
            <div class="tab4-comp-l" @click="clickBtn(0)">
              <img src="./assets/icon_guanbi.png" alt="" v-if="activeComp===0">
              <img src="./assets/icon_dakai.png" alt="" v-else>
            </div>
            <div class="tab4-comp-r">
              <ul :class="['tab4-comp-r-header', {'comp-color': activeComp===0}]">
                <li>专利工程师（合伙人）</li>
                <li>若干人</li>
                <li>专科以上学历</li>
                <li>2019.6.15</li>
              </ul>
              <div class="tab4-comp-r-body" v-if="activeComp===0">
                <div class="tab4-comp-r-body-inner">

                  1、完成公司业绩目标要求的工作；
                  2、挖掘业务需要的潜在客户并促成订单；
                  3、在部门经理领导下，负责商标、专利、版权、科技项目案源开拓和知识产权市场营销；
                  4、开发新客户，完成并跟进客户委托的案件，进行客户管理和档案管理；
                  5、办理自己开发客户的商标、专利、版权、诉讼案件，并做好跟踪回访工作；

                </div>
              </div>
            </div>
          </div>
          <div class="tab4-comp">
            <div class="tab4-comp-l" @click="clickBtn(1)">
              <img src="./assets/icon_guanbi.png" alt="" v-if="activeComp===1">
              <img src="./assets/icon_dakai.png" alt="" v-else>
            </div>
            <div class="tab4-comp-r">
              <ul :class="['tab4-comp-r-header', {'comp-color': activeComp===1}]">
                <li>专利工程师（合伙人）</li>
                <li>若干人</li>
                <li>专科以上学历</li>
                <li>2019.6.15</li>
              </ul>
              <div class="tab4-comp-r-body"  v-if="activeComp===1">
                <div class="tab4-comp-r-body-inner">

                  1、完成公司业绩目标要求的工作；
                  2、挖掘业务需要的潜在客户并促成订单；
                  3、在部门经理领导下，负责商标、专利、版权、科技项目案源开拓和知识产权市场营销；
                  4、开发新客户，完成并跟进客户委托的案件，进行客户管理和档案管理；
                  5、办理自己开发客户的商标、专利、版权、诉讼案件，并做好跟踪回访工作；

                </div>
              </div>
            </div>
          </div>

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

export default {
  data () {
    return {
      lunboArr: [
        {img: require('./assets/banner.png')},
        {img: require('./assets/banner2.png')},
      ],
      activeItem: 1,
      activeTab: 0, // 当前tab
      activeComp: 0, // 诚聘英才 激活的id
      tabData: [
        {name: '公司简介', tabId: 0},
        {name: '公司文化', tabId: 1},
        {name: '业务综述', tabId: 2},
        {name: '诚聘英才', tabId: 3},
      ],
      tab2Data: [
        {'name-c': '团结', 'name-e': 'UNITY', 'img': require('./assets/tuanjie.png')},
        {'name-c': '理念', 'name-e': 'CONCEPT', 'img': require('./assets/linian.png')},
        {'name-c': '使命', 'name-e': 'MISSION', 'img': require('./assets/shiming.png')},
        {'name-c': '愿景', 'name-e': 'VISION', 'img': require('./assets/yuanjing.png')},
        {'name-c': '价值观', 'name-e': 'VALUES', 'img': require('./assets/jiazhiguan.png')}
      ],
      tab3Data: [
        {title: '从事知识产权战略理论研究', img: require('./assets/icon_lilunyanjiu.png'), content: '<p>接受政府、社会、高校院所和企业等组织机构的课题委托，进行知识产权战略理论、知识产权战略环境、公共政策、企业实践和法律实务研究，分析和总结国内外知识产权战略实施经验与教训，探寻未来知识产权战略发展方向，为企业实施知识产权战略提供经验范本与前景指引。</p>'},
        {title: '提供知识产权战略决策咨询', img: require('./assets/icon_juecezixun.png'), content: '<p>根据国家、地区、行业和企业的要求，进行知识产权专项调研，设计“贴身”的知识产权战略方案，并指导企业实施，包括：知识产权创造及战略部署，知识产权的有效经营和使用，企业知识产权的保护与维权，知识产权危机预警与化解，知识产权的高效管理，知识产权人才培养和知识产权文化的培育等，并对战略实施效果进行评估、反馈与校正，从而促进企业知识产权工作科学、有序发展。</p>'},
        {title: '提供知识产权战略人才培训', img: require('./assets/icon_rencaipeixun.png'), content: '<p>联合国内外知识产权政府主管部门、高等院校、科研院所、知识产权中介组织、企业等搭建培养链条，针对普通职员、业务人员、科研人员、管理人员等的不同需求，提供不同的知识产权培训及人才培养服务。</p>' +
        '<p>研究和推行知识产权工程师培养和认证制度，帮助企业建立专业的知识产权人才团队，为企业培养一批既懂技术，又精通法律，同时熟悉商业运作的世界级劳动力。</p>'},
        {title: '提供知识产权战略信息服务', img: require('./assets/icon_xinxnifuwu.png'), content: '<p>编辑《知识产权战略导刊》，创建知识产权战略公益性网站，提供国内外知识产权战略发展最新动态。</p>' +
        '<p>研究并建立知识产权信息系统，包括知识产权检索、知识产权统计分析与预警、知识产权评估与交易、管理共享和延伸服务五大应用功能，提供全面的知识产权信息服务。</p>'},

      ],
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
      margin-bottom: 40px;
    }
  }
  .tab3-li-title {
    color: $activeColor;
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
    border: 1px solid $activeColor;
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
    background-color: $activeColor!important;
  }
</style>

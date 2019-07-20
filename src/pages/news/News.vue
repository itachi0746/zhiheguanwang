<template>
  <div>
    <Header :activeItem="activeItem"/>
    <Lunbo v-if="lunboArr" :imgArr="lunboArr" />
    <div class="main-box w1200">
      <div class="loca">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>活动管理</el-breadcrumb-item>
          <el-breadcrumb-item>活动列表</el-breadcrumb-item>
          <el-breadcrumb-item>活动详情</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="w850">
        <div class="news-ct">

          《报告》显示，2018年，中国知识产权审查周期大幅缩短，商标注册平均审查周期压缩到6个月、高价值专利审查周期压缩10%。知识产权行政事业性收费减免力度加大，专利代理行业准入放宽。
          《报告》还显示，中国对知识产权保护的行政执法和司法保护力度显著加强。2018年，全国行政执法部门查处侵权假冒案件21.5万件，其中专利侵权假冒案件7.7万件、商标违法案件3.1万件、侵权盗版案件2500余件，海关查扣进出境侵权货物4.72万批、2480万件，公安机关破获侵权假冒案件1.9万余件，检察机关批捕涉及侵犯知识产权犯罪案件3306件5627人，全国法院审结各类知识产权案件近32万件，同比上升41.6%。侵权假冒商品依法销毁，全国无害化销毁侵权假冒商品约3500吨。这些，彰显了中国政府严厉打击侵权假冒、依法保护知识产权的一贯立场和坚定决心。
          在国务院新闻办举行的新闻发布会上，全国打击侵权假冒工作领导小组办公室主任、国家市场监督管理总局副局长甘霖表示，侵权假冒对经济、社会、文化、生态等各方面造成危害，中国政府严厉打击侵权假冒的立场明确而坚定。
          甘霖表示，下一步有关部门将重点做好以下工作：
          一是加强统筹谋划，按照依法治理、打建结合、统筹协作、社会共治的原则，深入推动知识产权保护，持续加强打击侵权假冒工作。
          二是创新监管方式，加快建立健全以“双随机、一公开”为基本手段、以重点监管为补充、以信用监管为基础的新型监管机制；加快新技术新手段应用，提升线索发现、追踪溯源和精准打击能力。
          三是加大惩治力度，加强重点领域、重点商品、重点市场治理，持续开展跨部门、跨领域、跨区域联合打假。同时，强化刑事打击与司法保护，推动信息公开与联合惩戒，大幅提升违法成本，让违法者付出沉重代价。
          四是严打跨境犯罪。建立和完善多双边执法协作机制，加强线索通报和案件协查，加强统筹协调和信息反馈，加强工作交流和经验分享，共同打击跨境违法犯罪，助力“一带一路”建设，促进全球经济健康发展。
          国家知识产权局副局长甘绍宁表示，国家知识产权局将启动面向2035年的国家知识产权强国战略纲要的制定工作，对强化知识产权保护作出整体部署，进一步营造更加良好的营商环境，更好地满足高质量发展需求。
          海关总署综合业务司负责人金海表示，海关将继续开展相关领域的专项整治工作，支持企业特别是民营企业和中小企业开展创新，加强对外商投资企业知识产权的保护，完善互联网领域打击侵权假冒执法联动机制。同时，继续拓展国际海关执法合作，努力营造国际一流营商环境。
          世界银行发布的《2019年营商环境报告》显示，2018年中国营商环境改善幅度居全球第三，东亚太平洋地区之首。（记者 王俊岭）


          来源：人民网－人民日报海外版

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
      activeItem: 2,
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
  .w850 {
    width: 850px;
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
    color: #333;
    margin-bottom: 100px;
  }
  .loca {
    padding: 20px 0px;
    border-bottom: 1px solid #E5E5E5;
    margin-bottom: 30px;
  }
  .news-ct {
    ::v-deep * {
      color: #333!important;
      /*font-size: 14px!important;*/
      font-family:MicrosoftYaHei;
      line-height:32px;
    }
    ::v-deep img {
      max-width: 850px;
    }
  }
</style>

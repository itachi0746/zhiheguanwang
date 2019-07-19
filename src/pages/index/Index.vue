<template>
  <div>
    <Header :activeItem="activeItem"/>
    <Lunbo v-if="lunboArr" :imgArr="lunboArr" />

    <div class="index">
      <!--服务范围-->
      <div class="part1 part-box">
        <div class="the-title">
          <div>SERVICE</div>
          <div>SCOPE</div>
        </div>
        <div class="p-name">
          服务范围
        </div>
        <div class="the-line">
          <i></i>
        </div>
        <ul class="part1-list">
          <li v-for="(item,index) in part1List" :key="index">
            <div class="li-img" :style="{'backgroundImage': `url(${item.img})`}"></div>
            <div class="li-name-c">{{item['name-c']}}</div>
            <div class="li-name-e">{{item['name-e']}}</div>
          </li>
        </ul>
      </div>
      <!--企业痛点-->
      <div class="part2 part-box">
        <div class="the-title">
          <div>BUSINESS</div>
          <div>PAIN POINTS</div>
        </div>
        <div class="p-name">
          企业痛点
        </div>
        <div class="the-line">
          <i></i>
        </div>
        <ul class="part2-list">
          <li v-for="(item,index) in part2List" :key="index" :class="{'white-li': item.white}">
            <div class="li-no">NO.{{item.no}}</div>
            <div class="li-font">{{item.content}}</div>
          </li>
        </ul>
      </div>
      <div class="mid-img"></div>
      <!--知识产权顾问的好处-->
      <div class="part3 part-box">
        <div class="the-title">
          <div>BENEFITS</div>
          <div>OF CONSULTANTS</div>
        </div>
        <div class="p-name">
          知识产权顾问的好处
        </div>
        <div class="the-line">
          <i></i>
        </div>
        <ul class="part3-list">
          <li v-for="(item,index) in part3List" :key="index">
            <div class="part3-libox" :style="{'backgroundImage': `url(${item.img})`}"></div>
            <div>
              <span>{{item.content1}}</span>
              <span class="part3-li-num">{{item.content2}}</span>
            </div>
          </li>
        </ul>
        <div class="Effect-box">
          <div class="mid-font">作用</div>
          <div class="e-line e-r-line1">结合全球专利大数据全程参与提供技术支持（创新管家）</div>
          <div class="e-line e-r-line2">通过大数据分析快速洞察行业先机</div>
          <div class="e-line e-r-line3">提升企业持续优质的创新能力</div>
          <div class="e-line e-r-line4">提升产品的竞争力</div>
          <div class="e-line e-r-line5">规避降低经营风险</div>

          <div class="e-line right-text e-l-line1">科学规划，不仅不怎么花钱，还能赚钱</div>
          <div class="e-line right-text e-l-line2">助力科技成果保护与转化</div>
          <div class="e-line right-text e-l-line3">企业知识产权实时监控</div>
          <div class="e-line right-text e-l-line4">企业无形资产价值倍增</div>
          <div class="e-line right-text e-l-line5">企业转型升级的军师</div>
        </div>
      </div>
      <!--智合优势-->
      <div class="part4 part-box">
        <div class="the-title">
          <div>ZHIHE</div>
          <div>ADVANTAGE</div>
        </div>
        <div class="p-name">
          智合优势
        </div>
        <div class="the-line">
          <i></i>
        </div>
        <ul class="part4-list">
          <li v-for="(item,index) in part4List" :key="index">
            <div :class="['p4-li-img', item.cls]"></div>
            <div class="p4-li-desc">
              <div class="p4-li-title">{{item.title}}</div>
              <div class="p4-li-line">
                <div class="p4-li-line-l"></div>
                <div class="p4-li-line-r"></div>
              </div>
              <div class="p4-li-main">
                {{item.content}}
              </div>
            </div>
          </li>
        </ul>
      </div>
      <!--合作伙伴-->
      <div class="part5 part-box">
        <div class="the-title">
          <div>COOPERATIVE</div>
          <div>PARTNER</div>
        </div>
        <div class="p-name">
          合作伙伴
        </div>
        <div class="the-line">
          <i></i>
        </div>
        <ul class="part5-list">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
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
      activeItem: 0,
      lunboArr: [
        {img: require('./assets/banner.png')},
        {img: require('./assets/banner2.png')},
      ],
      part1List: [
        {'name-c': '商标注册', 'name-e': 'TRADEMARK REGISTRATION', 'img': require('./assets/shangbiao.png')},
        {'name-c': '专利申请', 'name-e': 'PATENT APPLICATION', 'img': require('./assets/zhaunli.png')},
        {'name-c': '版权服务', 'name-e': 'COPYRIGHT SERVICES', 'img': require('./assets/banquan.png')},
        {'name-c': '科技项目申请', 'name-e': 'TECHNOLOGY PROJECT APPLICATION', 'img': require('./assets/kejixiangmu.png')},
        {'name-c': '质押融资', 'name-e': 'PLEDGE FINANCING', 'img': require('./assets/zhiyarongzi.png')},
        {'name-c': '知识产权法律诉讼', 'name-e': 'INTELLECTUAL PROPERTY LITIGATION', 'img': require('./assets/zhishichanquan.png')},
        {'name-c': '商标专利买卖', 'name-e': 'TRADEMARK PATENT TRADING', 'img': require('./assets/shangbiaozhaunli.png')},
        {'name-c': '企业品牌策划', 'name-e': 'ENTERPRISE BRAND PLANNING', 'img': require('./assets/qiyepingpai.png')},
      ],
      part2List: [
        {content: '研发无方向', no: 1, white: false},
        {content: '研发（效率低）成本投入高、产出低', no: 2, white: true},
        {content: '研发出一款新产品人家早已经申请了专利', no: 3, white: false},
        {content: '无专利权保护产品单价一降再降', no: 4, white: true},
        {content: '市面上的所谓爆款产品别人有专利', no: 5, white: false},
        {content: '自身专利未给企业创造价值', no: 6, white: false},
        {content: '研发技术人员离职容易带走本企业核心技术', no: 7, white: true},
        {content: '明知对方侵权且素手无策', no: 8, white: false},
        {content: '想做特色产品却苦无技术支持', no: 9, white: true},
        {content: '一旦涉及侵权病急乱投医', no: 10, white: false},
      ],
      part3List: [
        {content1: '研发成本降低', content2: '75%', img: require('./assets/yanfacb.png')},
        {content1: '技术产出提升', content2: '300%', img: require('./assets/jishuchanchu.png')},
        {content1: '研发效率提升', content2: '10倍', img: require('./assets/yanfaxiaolv.png')},
        {content1: '产品竞争力提升', content2: '50倍', img: require('./assets/chanpingjingzheng.png')},
        {content1: '销售利润提升', content2: '10倍', img: require('./assets/xiaoshoulirun.png')},
        {content1: '行业地位提升', content2: '100倍', img: require('./assets/hangyediwei.png')},
      ],
      part4List: [
        {title: '丰富的知识产权顾问经验', content: '我院从事过数十家企业的知识产权顾问工作，积累了丰富的知识产权顾问经验。同时，也从事过百余件知识产权培训、专利挖掘、专利布局、专利信息分析、海外预警、知识产权战略、知识产权评议、商标布局等工作内容。', cls: 'p4-li-img1'},
        {title: '形成了完善的知识产权顾问工作方案', content: '我院自第一家知识产权顾问开始，就在尝试构建知识产权顾问方案。通过不断的经验积累，客户沟通反馈，已经建立了完善的工作方案，工作流程，保证公司的知识产权顾问效果。', cls: 'p4-li-img2'},
        {title: '强大的知识产权顾问专业队伍', content: '我院从事过数十家企业的知识产权顾问工作，积累了丰富的知识产权顾问经验。同时，也从事过百余件知识产权培训、专利挖掘、专利布局、专利信息分析、海外预警、知识产权战略、知识产权评议、商标布局等工作内容。', cls: 'p4-li-img3'},
        {title: '知识产权管理经验丰富', content: '我院自第一家知识产权顾问开始，就在尝试构建知识产权顾问方案。通过不断的经验积累，客户沟通反馈，已经建立了完善的工作方案，工作流程，保证公司的知识产权顾问效果。', cls: 'p4-li-img4'},
        {title: '可量化的知识产权顾问目标', content: '我院在知识产权顾问服务中，均会根据企业的基本情况，竞争情况等，和企业一道制定可量化的知识产权目标，比如专利申请量、专利授权率、知产培训量、专利布局数等等。通过可量化的目标一方面可以对顾问内容进行效果检验，另一方面可以提升公司的知识产权实质效果。', cls: 'p4-li-img5'},
      ]
    }
  },

  components: {
    Header,
    Lunbo,
    Footer,
    TopBtn
  },

  computed: {},

  methods: {},
  
  created () {},

  mounted () {},

  beforeDestroy () {}
}
</script>

<style lang='scss' scoped>
  .index {
    /*margin: 0 360px;*/
    margin: 0 auto;
    width: 1200px;
  }
  .part-box {
    padding-top: 50px;
  }
  .the-title {
    color: #E6E6E6;
    font-size: 36px;
    text-align: center;
    line-height: 0.9;
  }
  .the-title div:nth-child(2) {
    font-size: 44px;
    font-weight: bold;
  }
  .p-name {
    font-size: 26px;
    color: #131313;
    margin-top: 21px;
    margin-bottom: 13px;
    text-align: center;
  }
  .the-line {
    text-align: center;
    font-size: 0;
    /*margin-bottom: 50px;*/
    i {
      width: 42px;
      height: 2px;
      min-height: 1px;
      background-color: #A1A1A1;
      display: inline-block;
    }
  }
  .part1-list {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    color: #131313;
    text-align: center;
    li {
      width:252px;
      height:294px;
      border: 1px solid rgba(216,216,216,1);
      margin-top: 50px;
      @include borderBox();
      padding-top: 52px;
    }
  }
  .part2-list {
    display: flex;
    /*justify-content: space-between;*/
    align-content: space-between;
    flex-wrap: wrap;
    flex-direction: column;
    margin-top: 50px;
    padding: 0 93px;
    height: 440px;
    color: #ffffff;
    li {
      display: flex;
      width: 431px;
      height: 73px;
      margin-bottom: 15px;
      /*background-size: contain;*/
      background-position: center;
      background-repeat: no-repeat;
      background-image: url("./assets/hongdi.png");
      font-size: 17px;
      text-align: center;
    }
  }
  .part3-list {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    color: #131313;
    font-size: 18px;
    margin-top: 46px;
    /*padding: 0 132px;*/
    li {
      width: 33%;
      text-align: center;
      margin-bottom: 63px;
    }
  }
  .part4-list2 {
    margin-bottom: 50px;
  }
  .part4-list, .part4-list2 {
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    color: #666666;
    font-size: 14px;
    li {
      width: 367px;
      margin-bottom: 50px;
      /*height: 452px;*/
    }
  }
  .part4-list li:nth-child(1) {
    margin-left: 208px;
  }
  .part4-list li:nth-child(2) {
    margin-right: 208px;
  }
  .part5-list {
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    li {
      width: 186px;
      height: 90px;
      margin-bottom: 18px;
      background-color: #000;
      background: url("./assets/huoban1.png") no-repeat;
      background-size: 100% 100%;
    }
  }

  .p4-li-desc {
    width: 367px;
    height: 240px;
    background-color: #EFEFEF;
  }
  .p4-li-img {
    width: 367px;
    height: 240px;
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
  .p4-li-img1 {
    background-image: url("./assets/youshi__jianyan.png");
  }
  .p4-li-img2 {
    background-image: url("./assets/youshi_fangan.png");
  }
  .p4-li-img3 {
    background-image: url("./assets/yushi_duiwu.png");
  }
  .p4-li-img4 {
    background-image: url("./assets/youshi_guanli.png");
  }
  .p4-li-img5 {
    background-image: url("./assets/youshi_mubiao.png");
  }
  .p4-li-title {
    font-size: 18px;
    color: #BE2027;
    height: 53px;
    line-height: 53px;
    padding-left: 16px;
  }
  .p4-li-line {
    width: 100%;
    height: 2px;
    display: flex;
  }
  .p4-li-main {
    padding: 14px 16px;
    line-height: 25px;
  }
  .p4-li-line-l {
    width: 215px;
    height: 2px;
    background-color: #D5D5D5;
  }
  .p4-li-line-r {
    width: 152px;
    height: 2px;
    background-color: #ffffff;
  }
  .li-no {
    font-weight: bold;
    width: 73px;
    height: 73px;
    line-height: 73px;
  }
  .li-font {
    width: 358px;
    height: 73px;
    line-height: 73px;

  }
  .li-img {
    width: 100px;
    height: 100px;
    margin: 0 auto 36px;
    background-size: 100% 100%;

  }
  .li-name-c {
    font-size: 20px;
  }
  .li-name-e {
    font-size: 12px;
  }
  .white-li {
    color: #131313!important;
    background-image: url("./assets/tongdian_ditu.png")!important;
  }
  .mid-img {
    width: 1200px;
    height: 368px;
    background: url("assets/banner2.png") no-repeat;
    background-size: 100% 100%;
    margin-top: 25px;
    margin-bottom: 50px;
  }
  .part3-libox {
    width: 140px;
    height: 140px;
    border: 1px dashed #131313;
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
    /*background-image: url("./assets/yanfacb.png");*/
    margin: 0 auto;
  }
  .part3-li-num {
    font-weight: bold;
    color: #FF9C00;
  }
  .Effect-box {
    width: 544px;
    height: 346px;
    background: url("./assets/zuoyong.png") no-repeat;
    background-size: 100% 100%;
    position: relative;
    margin: 0 auto;
  }
  .e-line {
    position: absolute;
    color: #333;
    font-size: 16px;
  }
  .e-r-line1 {
    top: 11px;
    left: 466px;
    width: 410px;
  }
  .e-l-line1 {
    top: 11px;
    right: 466px;
    width: 410px;
  }
  .e-r-line2 {
    top: 80px;
    left: 538px;
    width: 250px;
  }
  .e-l-line2 {
    top: 80px;
    right: 538px;
    width: 250px;
  }
  .e-r-line3 {
    left: 558px;
    top: 160px;
    width: 220px;
  }
  .e-l-line3 {
    right: 558px;
    top: 160px;
    width: 220px;
  }
  .e-r-line4 {
    width: 135px;
    top: 247px;
    left: 534px;
  }
  .e-l-line4 {
    width: 175px;
    top: 247px;
    right: 534px;
  }
  .e-r-line5 {
    width: 140px;
    left: 464px;
    top: 318px;
  }
  .e-l-line5 {
    width: 180px;
    right: 464px;
    top: 318px;
  }
  .mid-font {
    color: #ffffff;
    font-size: 30px;
    width: 35px;
    word-wrap: break-word;
    @include center;
  }

  .right-text {
    text-align: right;
  }
</style>

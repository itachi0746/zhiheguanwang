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
          <div class="tab1-ct">
            <!--分类-->
            <ul class="type-list">
              <li v-for="(item,index) in typeList" :key="index">{{item.name}}</li>
            </ul>
            <!--分类大框-->
            <div class="type-list-big" v-if="true">
              <TypeSearch></TypeSearch>
              <ul class="type-list-big-ct">
                <li>
                  <div class="li-label">第一类</div>
                  <div class="li-ct">
                    颜料，清漆，漆；防锈剂和木材防腐剂；着色剂；媒染剂；未加工的天然树脂；绘画、装饰、印刷和艺术用金属箔及金属粉
                  </div>
                </li>
                <li>
                  <div class="li-label">第一类</div>
                  <div class="li-ct">
                    颜料，清漆，漆；防锈剂和木材防腐剂；着色剂；媒染剂；未加工的天然树脂；绘画、装饰、印刷和艺术用金属箔及金属粉
                  </div>
                </li>
              </ul>
            </div>
            <!--分类 具体内容-->
            <div class="type-detail" v-if="false">
              <div class="type-detail-title">
                用于工业、科学、摄影、农业、园艺和林业的化学品；未加工人造合成树脂；未加工塑料物质；肥料；灭火用合成物；淬火和焊接用制剂；保存食品用化学品；鞣料；工业用粘合剂
              </div>
              <TypeSearch></TypeSearch>
              <div class="type-detail-main"></div>
            </div>
          </div>

        </div>

        <div class="tab2" v-if="activeTab===1">
          <div class="tab2-ct">
            <div class="tab2-ct-p">
              <div class="tab2-ct-p-title">
                专利法所称发明是指对产品、方法或者其改进所提出的新的技术方案
              </div>
              <div class="tab2-ct-p-label">
                特点:
              </div>
              <div class="tab2-ct-p-font mb29">
                1、发明是一项新的技术方案。是利用自然规律解决生产、科研、实验中各种问题的技术解决方案，一般由若干技术特征组成。
              </div>
              <div class="tab2-ct-p-font">
                2、按照性质划分,发明权利要求有两种基本类型，分为产品权利要求和方法权利要求。产品权利要求包括人类技术生产的物（产品、设备），方法权利要求包括有时间过程要素的活动，又可以分成方法和用途两种类型。专利法保护的发明也可以是对现有产品或方法的改进。
              </div>
            </div>
            <div class="tab2-ct-p">
              <div class="tab2-ct-p-title">
                授予专利权的发明，应当具备新颖性、创造性和实用性
              </div>
              <div class="tab2-ct-p-label mb13">
                新颖性
              </div>
              <div class="tab2-ct-p-font">
                是指该发明不属于现有技术；也没有任何单位或者个人就同样的发明或者实用新型在申请日以前向专利局提出过申请，并记载在申请日以后（含申请日）公布的专利申请文件或者公告的专利文件中。
              </div>
              <div class="tab2-ct-p-label mb13">
                创造性
              </div>
              <div class="tab2-ct-p-font">
                是指与申请日以前在国内外为公众所知的技术相比，该发明具有突出的实质性特点和显著的进步。
              </div>
              <div class="tab2-ct-p-label mb13">
                实用性
              </div>
              <div class="tab2-ct-p-font">
                是指该发明能够制造或者使用，并且能够产生积极效果。
              </div>
            </div>
          </div>
          <div class="tab2-bg"></div>
        </div>

        <div class="tab3" v-if="activeTab===2">
          <div class="tab3-ct-box">
            <div class="tab3-ct">
              <div class="tab3-ct-p">
                实用新型是指对产品的形状、构造或者其结合所提出的适于实用的新的技术方案，专利法中对实用新型的创造性和技术水平较发明专利低，但实用价值大，在这个意义上，实用新型有时会被人们又称小发明或小专利。针对实用新型，在专利权审批上采取简化审批程序、缩短保护期限、降低收费标准等办法加以保护。关于实用新型，有些国家并没有将其列为专利保护的独立类型，而是将其放在发明专利中予以保护。另外有些国家，实用新型则列为专利保护的独立类型。
              </div>
              <div class="tab3-ct-img1"></div>
            </div>
            <div class="tab3-ct">
              <div class="tab3-ct-label">产生的原因</div>
              <div class="tab3-ct-s">
                <div class="tab3-ct-s-p">
                  1、国家之所以保护实用新型，目的在于鼓励低成本、研制周期短的小发明的创造，更快的适应经济发展的需要。但这并不意味着只有小发明才能申请实用新型，对于创造性较高的其它发明创造，只要是符合实用新型的保护客体，也是可以申请实用新型的。
                </div>
                <div class="tab3-ct-s-img1"></div>
              </div>

              <div class="tab3-ct-s">
                <div class="tab3-ct-s-p">
                  2、由于发明专利授权时间周期一般长达2-3年，并且要求较高，不易通过审查，为了使得专利权人能快速的得到授权，特设置实用新型专利，在先授予专利权后，如果发生专利侵权纠纷，再启动相应的实质审查程序，包括评论该专利权的实用性、新颖性、创造性。可节约大量的审查资源。
                </div>
                <div class="tab3-ct-s-img2"></div>
              </div>
            </div>
          </div>

        </div>

        <div class="tab4" v-if="activeTab===3">
          <div class="tab4-ct">
            <div class="tab4-ct-p">
              <div class="tab4-ct-p-font">
                外观设计是指产品外观的设计方案。它与发明或实用新型完全不同，即外观设计不是技术方案。我国《专利法实施细则》第二条中规定：“外观设计，是指对产品的形状、图案或者其结合以及色彩与形状、图案的结合所做出的富有美感并适于工业应用的新设计。
              </div>
              <div class="tab4-ct-p-label">
                外观设计专利应当符合以下要求
              </div>
              <div class="tab4-ct-p-font2">
                （1）是指形状、图案或者其结合以及色彩与形状、图案的结合的设计；
              </div>
              <div class="tab4-ct-p-font2">
                （2）必须是对产品的外观所作的设计；
              </div>
              <div class="tab4-ct-p-font2">
                （3）必须富有美感；
              </div>
              <div class="tab4-ct-p-font2">
                （4）必须是适于工业上的应用。
              </div>
            </div>
            <div class="tab4-ct-p">
              <div class="tab4-ct-p-img"></div>
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
import TypeSearch from '../../components/TypeSearch.vue'

export default {
  data () {
    return {
      lunboArr: [
        {img: require('./assets/banner.png')},
        {img: require('./assets/banner2.png')},
      ],
      activeItem: 'L4',
      resData: null, // 请求的数据
      activeTab: 3, // 当前tab
      tabData: [
        {name: '商标分类', tabId: 0},
        {name: '发明专利', tabId: 1},
        {name: '实用新型', tabId: 2},
        {name: '外观专利', tabId: 3},
      ],
      typeList: [ // 类别列表
        {name: '第一类'},
        {name: '第二类'},
        {name: '第三类'},
        {name: '第四类'},
      ],

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
  .type-list {
    padding: 0 22px;
    margin-top: 32px;
    border:1px solid rgba(209,211,212,1);
    color: #131313;
    /*width: 225px;*/
    li {
      width: 180px;
      height: 38px;
      line-height: 38px;
      border-bottom: 1px dashed #D1D3D4;
      padding-left: 36px;
      cursor: pointer;
    }
    li:hover {
      color: $activeColor;
    }
  }
  .type-list-big {
    border: 1px solid rgba(209,211,212,1);
    padding: 34px 22px 34px 39px;
    width: 976px;
  }
  .type-detail {
    border: 1px solid rgba(209,211,212,1);
    padding: 34px 30px;
    width: 976px;
  }
  .type-detail-title {
    color: #131313;
    line-height: 25px;
    border-bottom: 1px solid #D1D3D4;
    padding-bottom: 21px;
  }

  .type-list-big-ct {
    width: 100%;
    padding: 10px 0;
    li {
      width: 100%;
      border-bottom: 1px dashed rgba(209,211,212,1);
      display: flex;
      align-items: center;
      padding: 12px 0;
      cursor: pointer;
    }
    li:hover {
      color: $activeColor;
    }
    li:hover .li-label {
      color: $activeColor;
    }
    .li-label {
      color: #131313;
      margin-right: 5px;
    }
  }
  .type-detail-main {
    ::v-deep * {
      color: #666!important;
      font-size: 14px!important;
      font-family:MicrosoftYaHei;
      line-height:25px;
    }
  }
  .tab2-ct, .tab4-ct {
    display: flex;
    justify-content: space-between;
    color: #131313;
    font-size: 16px;
  }
  .tab2-bg {
    width: 100%;
    height: 320px;
    background: url("./assets/famingzhuanli.png") no-repeat;
    background-size: contain;
    margin-top: 80px;
  }
  .tab2-ct-p,.tab4-ct-p {
    width: 551px;

  }
  .tab2-ct-p-title {
    color: $activeColor;
    font-weight: bold;
    font-size: 16px;
    margin-bottom: 21px;
  }

  .tab2-ct-p-label {
    font-size: 16px;
    color: #131313;
    font-weight: bold;
    margin-bottom: 19px;
  }
  .tab4-ct-p-label {
    font-size: 16px;
    color: #131313;
    font-weight: bold;
    margin-bottom: 19px;
  }
  .tab2-ct-p-font, .tab4-ct-p-font {
    font-size: 16px;
    color: #131313;
    line-height: 28px;
    margin-bottom: 21px;
  }
  .tab4-ct-p-font {
    margin-bottom: 28px;
  }
  .tab4-ct-p-img {
    width: 596px;
    height: 323px;
    background: url("./assets/waiguanzhaunli.png") no-repeat;
    background-size: contain;
  }
  .mb13 {
    margin-bottom: 13px!important;
  }
  .mb29 {
    margin-bottom: 29px!important;
  }
  .tab3-ct-box {
    width: 100%;
    display: flex;
    justify-content: space-between;
    font-size: 16px;
    color: #131313;
  }
  .tab3-ct {
    width: 550px;

  }
  .tab3-ct-s {
    width: 100%;
    display: flex;
    justify-content:space-between;
    margin-bottom: 40px;
  }
  .tab3-ct-label {
    font-weight: bold;
    margin-bottom: 40px;
  }
  .tab3-ct-p {
    width: 550px;
    margin-bottom: 30px;
    line-height: 28px;
  }
  .tab3-ct-s-p {
    width: 356px;
    line-height: 28px;

  }
  .tab3-ct-img1 {
    width: 550px;
    height: 290px;
    background: url("./assets/shiyong.png") no-repeat;
    background-size: contain;
  }
  .tab3-ct-s-img1 {
    width: 165px;
    height: 188px;
    background: url("./assets/yuanying.png") no-repeat;
    background-size: contain;
  }
  .tab3-ct-s-img2 {
    width: 165px;
    height: 188px;
    background: url("./assets/yuanying_shijain.png") no-repeat;
    background-size: contain;
  }
  .tab4-ct-p-font2 {
    margin-bottom: 20px;
    text-indent: 1em;
  }
  .tab1-ct {
    display: flex;
    justify-content: space-between;
  }
</style>

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
          <!--商标申请-->
          <div class="tab2-title-box">
            <div class="tab2-title">商标申请</div>
          </div>
          <div class="tab2-part1">
            <div>
              <div class="tab2-step">第一步: 商标查询</div>
              <div class="ti2 lh26">
                根据客户提交的商标及商标使用的商品或服务给予专业的查询，依据查询的结果，给予客户需申报商标注册可行性行分析及建议，最大限度降低商标被驳回的风险。
              </div>
              <div class="tab2-part1-img1"></div>
            </div>
            <div class="tab2-part1-div2">
              <div class="tab2-step pl20">第二步: 申请注册</div>
              <div class="tab2-title-s">
                <i></i>
                <span>申请报标阶段</span>
              </div>
              <div class="pl20">
                当天上报商标局，当天返回商标局报送清单。
              </div>
              <div class="tab2-title-s mt20">
                <i></i>
                <span>商标局审查阶段</span>
              </div>
              <div class="step-box">
                <div class="step-comp">
                  <div class="step-comp-img">
                    <img src="./assets/icon_shengchatongguo.png" alt="">
                  </div>
                  <div class="step-comp-font">形式审查通过</div>
                </div>
                <img class="step-box-arrow" src="./assets/icon_jiantou.png" alt="">
                <div class="step-comp">
                  <div class="step-comp-img">
                    <img src="./assets/icon_tongzhishu.png" alt="">
                  </div>
                  <div class="step-comp-font">商标局发出受理通知书</div>
                </div>
                <img class="step-box-arrow" src="./assets/icon_jiantou.png" alt="">
                <div class="step-comp">
                  <div class="step-comp-img">
                    <img src="./assets/icon_shizhishengcha.png" alt="">
                  </div>
                  <div class="step-comp-font">实质审查</div>
                </div>
              </div>
              <div class="tab2-title-s mt20">
                <i></i>
                <span>初审公告、核准注册阶段</span>
              </div>
              <div class="step-box">
                <div class="step-comp">
                  <div class="step-comp-img">
                    <img src="./assets/icon_shizhishengcha .png" alt="">
                  </div>
                  <div class="step-comp-font">实质审查通过</div>
                </div>
                <img class="step-box-arrow" src="./assets/icon_jiantou.png" alt="">
                <div class="step-comp">
                  <div class="step-comp-img">
                    <img src="./assets/icon_chushenggonggao.png" alt="">
                  </div>
                  <div class="step-comp-font">初审公告</div>
                </div>
                <img class="step-box-arrow" src="./assets/icon_jiantou.png" alt="">
                <div class="step-comp">
                  <div class="step-comp-img">
                    <img src="./assets/icon_yiyiqi.png" alt="">
                  </div>
                  <div class="step-comp-font">异议期</div>
                </div>
                <img class="step-box-arrow" src="./assets/icon_jiantou.png" alt="">

                <div class="step-comp">
                  <div class="step-comp-img">
                    <img src="./assets/icon_hezhunzhuce.png" alt="">
                  </div>
                  <div class="step-comp-font">核准注册</div>
                </div>
              </div>
            </div>
          </div>
          <!--专利申请-->
          <div class="tab2-part2">
            <div class="tab2-title-box">
              <div class="tab2-title">商标申请</div>
            </div>

            <div class="tab2-step">一、发明专利的申请</div>
            <div class="fz18">1、发明专利申请审批流程</div>
            <div class="step-box">
              <div class="step-comp">
                <div class="step-comp-img">
                  <img src="./assets/icon_zhuanlishengqing.png" alt="">
                </div>
                <div class="step-comp-font">专利申请</div>
              </div>
              <img class="step-box-arrow" src="./assets/icon_jiantou.png" alt="">

              <div class="step-comp">
                <div class="step-comp-img">
                  <img src="./assets/icon_shouli.png" alt="">
                </div>
                <div class="step-comp-font">受理</div>
              </div>
              <img class="step-box-arrow" src="./assets/icon_jiantou.png" alt="">

              <div class="step-comp">
                <div class="step-comp-img">
                  <img src="./assets/icon_chusheng.png" alt="">
                </div>
                <div class="step-comp-font">初审</div>
              </div>
              <img class="step-box-arrow" src="./assets/icon_jiantou.png" alt="">

              <div class="step-comp">
                <div class="step-comp-img">
                  <img src="./assets/icon_gongbu.png" alt="">
                </div>
                <div class="step-comp-font">公布</div>
              </div>
              <img class="step-box-arrow" src="./assets/icon_jiantou.png" alt="">

              <div class="step-comp">
                <div class="step-comp-img">
                  <img src="./assets/icon_shengcheqaingqiu.png" alt="">
                </div>
                <div class="step-comp-font">实质审查请求</div>
              </div>
              <img class="step-box-arrow" src="./assets/icon_jiantou.png" alt="">

              <div class="step-comp">
                <div class="step-comp-img">
                  <img src="./assets/icon_shizhishengcha(1).png" alt="">
                </div>
                <div class="step-comp-font">实质审查</div>
              </div>
              <img class="step-box-arrow" src="./assets/icon_jiantou.png" alt="">

              <div class="step-comp">
                <div class="step-comp-img">
                  <img src="./assets/icon_shouquan.png" alt="">
                </div>
                <div class="step-comp-font">授权</div>
              </div>

            </div>
            <div class="tab2-part2-2">
              <div class="tab2-part2-2-l">
                <div class="fz18">2、申请实用新型专利需要提交的文件 </div>
                <div class="tab2-title-ss">(1)请求书</div>
                <div>包括发明专利的名称、发明人或设计人的姓名、申请人的姓名和名称、地址等。</div>
                <div class="tab2-title-ss">(2)说明书</div>
                <div>包括发明专利的名称、所属技术领域、背景技术、发明内容、附图说明和具体实施方式。</div>
                <div class="tab2-title-ss">(3)权利要求书</div>
                <div>说明实用新型的技术特征，清楚、简要地表述请求保护的内容。</div>
                <div class="tab2-title-ss">(4)说明书附图</div>
                <div>发明专利常有附图，如果仅用文字就足以清楚、完整地描述技术方案的，可以没有附图。</div>
              </div>
              <div class="tab2-part2-2-r tab2-part2-2-r-bg1"></div>
            </div>

            <div class="tab2-step">二、实用新型专利申请</div>
            <div class="fz18">1、实用新型专利申请审批流程</div>
            <div class="step-box">
              <div class="step-comp">
                <div class="step-comp-img">
                  <img src="./assets/icon_zhuanlishengqing.png" alt="">
                </div>
                <div class="step-comp-font">专利申请</div>
              </div>
              <img class="step-box-arrow" src="./assets/icon_jiantou.png" alt="">

              <div class="step-comp">
                <div class="step-comp-img">
                  <img src="./assets/icon_shouli.png" alt="">
                </div>
                <div class="step-comp-font">受理</div>
              </div>
              <img class="step-box-arrow" src="./assets/icon_jiantou.png" alt="">

              <div class="step-comp">
                <div class="step-comp-img">
                  <img src="./assets/icon_chusheng.png" alt="">
                </div>
                <div class="step-comp-font">初审</div>
              </div>
              <img class="step-box-arrow" src="./assets/icon_jiantou.png" alt="">

              <div class="step-comp">
                <div class="step-comp-img">
                  <img src="./assets/icon_gongbu.png" alt="">
                </div>
                <div class="step-comp-font">公告</div>
              </div>
              <img class="step-box-arrow" src="./assets/icon_jiantou.png" alt="">

              <div class="step-comp">
                <div class="step-comp-img">
                  <img src="./assets/icon_shouquan.png" alt="">
                </div>
                <div class="step-comp-font">授权</div>
              </div>


            </div>
            <div class="tab2-part2-2">
              <div class="tab2-part2-2-l">
                <div class="fz18">2、申请实用新型专利需要提交的文件 </div>
                <div class="tab2-title-ss">(1)请求书</div>
                <div>包括实用新型专利的名称、发明人或设计人的姓名、申请人的姓名和名称、地址等。</div>
                <div class="tab2-title-ss">(2)说明书</div>
                <div class="lh28">包括实用新型专利的名称、所属技术领域、背景技术、发明内容、附图说明和具体实施方式。说明书内容的撰写应当详尽，所述的技术内容应以所属技术领域的普通技术人员阅读后能予以实现为准。</div>
                <div class="tab2-title-ss">(3)权利要求书</div>
                <div>说明实用新型的技术特征，清楚、简要地表述请求保护的内容。</div>
                <div class="tab2-title-ss">(4)说明书附图</div>
                <div>实用新型专利一定要有附图说明。</div>
                <div class="tab2-title-ss">(5)说明书摘要</div>
                <div>清楚地反映发明要解决的技术问题，解决该问题的技术方案的要点以及主要用途。</div>
              </div>
              <div class="tab2-part2-2-r tab2-part2-2-r-bg2"></div>
            </div>

            <div class="tab2-step">三、外观专利的申请</div>
            <div class="fz18">1、申请外观专利的流程</div>
            <div class="step-box">
              <div class="step-comp">
                <div class="step-comp-img">
                  <img src="./assets/icon_zhuanlishengqing.png" alt="">
                </div>
                <div class="step-comp-font">专利申请</div>
              </div>
              <img class="step-box-arrow" src="./assets/icon_jiantou.png" alt="">

              <div class="step-comp">
                <div class="step-comp-img">
                  <img src="./assets/icon_shouli.png" alt="">
                </div>
                <div class="step-comp-font">受理</div>
              </div>
              <img class="step-box-arrow" src="./assets/icon_jiantou.png" alt="">

              <div class="step-comp">
                <div class="step-comp-img">
                  <img src="./assets/icon_chusheng.png" alt="">
                </div>
                <div class="step-comp-font">初审</div>
              </div>
              <img class="step-box-arrow" src="./assets/icon_jiantou.png" alt="">

              <div class="step-comp">
                <div class="step-comp-img">
                  <img src="./assets/icon_gongbu.png" alt="">
                </div>
                <div class="step-comp-font">公告</div>
              </div>
              <img class="step-box-arrow" src="./assets/icon_jiantou.png" alt="">

              <div class="step-comp">
                <div class="step-comp-img">
                  <img src="./assets/icon_shouquan.png" alt="">
                </div>
                <div class="step-comp-font">授权</div>
              </div>


            </div>
            <div class="tab2-part2-2">
              <div class="tab2-part2-2-l">
                <div class="fz18">2、外观专利需要提交的文件 </div>
                <div class="tab2-title-ss">(1)请求书</div>
                <div>包括外观专利的名称、设计人的姓名、申请人的姓名、名称、地址等。</div>
                <div class="tab2-title-ss">(2)外观设计图片或照片</div>
                <div class="lh28">至少两套图片或照片(前视图、后视图、俯视图、仰视图、左视图、右视图，如果必要还是提供立体图)。</div>
                <div class="tab2-title-ss">(3)外观设计简要说明</div>
                <div>必要时应提交外观设计简要说明。</div>
              </div>
              <div class="tab2-part2-2-r tab2-part2-2-r-bg3"></div>
            </div>
          </div>

        </div>
        <div class="tab3" v-if="activeTab===2">
          <ul class="tab3-ul">
            <li @click="clickNews">
              <div class="tab3-li-img tab3-li-test"></div>
              <div class="tab3-li-ct">
                <div class="tab3-li-ct-title">新专利曝光！苹果也加入折叠屏战场</div>
                <div class="tab3-li-ct-main">
                  美国专利商标局今天正式公布了苹果获得的85项新专利。在这篇文章中，给大家介绍一项涉及未来可能的可折叠苹果产品的专利——具有可折叠显示器和盖子的苹果产品。这项专利涉及具有柔性或...
                </div>
                <div class="tab3-li-ct-time">
                  <img src="./assets/clock.png" alt="">
                  <span>2019-6-17</span>
                </div>
              </div>
            </li>

          </ul>

          <!--分页-->
          <div class="tab3-pg">
            <el-pagination
              background
              layout="prev, pager, next"
              :total="1000">
            </el-pagination>
          </div>

        </div>
        <div class="tab4" v-if="activeTab===3">
          <ul class="tab3-ul">
            <li @click="clickNews">
              <div class="tab3-li-img tab3-li-test"></div>
              <div class="tab3-li-ct">
                <div class="tab3-li-ct-title">新专利曝光！苹果也加入折叠屏战场</div>
                <div class="tab3-li-ct-main">
                  美国专利商标局今天正式公布了苹果获得的85项新专利。在这篇文章中，给大家介绍一项涉及未来可能的可折叠苹果产品的专利——具有可折叠显示器和盖子的苹果产品。这项专利涉及具有柔性或...
                </div>
                <div class="tab3-li-ct-time">
                  <img src="./assets/clock.png" alt="">
                  <span>2019-6-17</span>
                </div>
              </div>
            </li>
          </ul>

          <!--分页-->
          <div class="tab3-pg">
            <el-pagination
              background
              layout="prev, pager, next"
              :total="1000">
            </el-pagination>
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
      tabData: [
        {name: '服务咨询', tabId: 0},
        {name: '申请流程', tabId: 1},
        {name: '行业新闻', tabId: 2},
        {name: '近期新闻', tabId: 3},
      ],
      resData: null,
      activeItem: 'L3',
      activeTab: 0, // 当前tab
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
    async getInfo () {
      const EntId = process.env.VUE_APP_TEST_ENTID
      const OrgId = process.env.VUE_APP_TEST_ORGID
      const ParentId = ''
      const url = `/PartBase/Search?EntId=${EntId}&OrgId=${OrgId}&ParentId=${ParentId}`
      const result = await http.post(url, {})
      console.log(result)
      this.resData = result.Data

    },
    clickNews () {
      window.location.href = 'news.html'
    },
    changeTab (idx) {
      this.activeTab = idx
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
  .tab2 {
    font-size: 16px;
    color: #131313;
  }
  .tab2-title-box {
    margin-bottom: 30px;
  }
  .tab2-title {
    color: #ffffff;
    font-size: 18px;
    font-weight: bold;
    background-color: $activeColor;
    width: 107px;
    height: 36px;
    line-height: 36px;
    text-align: center;
  }
  .tab2-step {
    font-weight: bold;
    margin-bottom: 20px;
    font-size: 18px;
  }
  .tab2-part1 {
    display: flex;
    justify-content: space-between;
    margin-bottom: 60px;
  }
  .tab2-part1 > div {
    width: 551px;
  }
  .tab2-part1 .tab2-part1-div2 {
    width: 600px;
  }
  .tab2-part1-img1 {
    width: 551px;
    height: 297px;
    margin-top: 40px;
    background: url("./assets/shangbiaosengqinag.png") no-repeat;
    background-size: 100% 100%;
  }
  .pl20 {
    padding-left: 20px;
  }
  .tab2-title-s {
    font-size: 16px;
    font-weight: bold;
    line-height: 32px;
    i {
      width: 10px;
      height: 10px;
      margin-right: 10px;
      background-color: $activeColor;
      display: inline-block;
      border-radius: 50%;
    }
  }
  .mt20 {
    margin-top: 20px;
  }
  .step-box {
    padding: 20px 0px 30px;
    overflow: hidden;
  }
  .step-comp {
    width: 135px;
    height: 96px;
    text-align: center;
    float: left;
  }
  .step-comp-img {
    margin-bottom: 9px;
    width: 100%;
    img {
      width: 56px;
      height: 56px;
    }
  }
  .step-comp-font {
    width: 100%;
  }
  .step-box-arrow {
    float: left;
    margin-top: 20px;
  }
  .lh26 {
    line-height: 26px;
  }
  .lh28 {
    line-height: 28px;
  }
  .fz18 {
    font-size: 18px;
  }
  .tab2-title-ss {
    font-weight: bold;
    margin-top: 20px;
    margin-bottom: 5px;
  }
  .tab2-part2-2 {
    display: flex;
    margin-bottom: 60px;
  }
  .tab2-part2-2-l {
    width: 660px;
  }
  .tab2-part2-2-r {
    width: 255px;
    height: 255px;
  }
  .tab2-part2-2-r-bg1 {
    width: 280px;
    height: 280px;
    background: url("./assets/famingzhuanli.png") no-repeat;
    background-size: contain;
    margin: 10px 0 0  189px;

  }
  .tab2-part2-2-r-bg2 {
    background: url("./assets/xinxingzhuanli.png") no-repeat;
    background-size: contain;
    margin: 10px 0 0  174px;

  }
  .tab2-part2-2-r-bg3 {
    background: url("./assets/waiguanzhaunli.png") no-repeat;
    background-size: contain;
    margin: 10px 0 0  189px;
  }
  .tab3-ul {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    font-size: 14px;
    color: #131313;
    li {
      padding-bottom: 30px;
      margin-bottom: 30px;
      width: 566px;
      display: flex;
      border-bottom: 1px solid #DEDEDE;
    }
    li:hover {
      color: $activeColor;
    }
  }
  .tab3-pg {
    display: flex;
    justify-content: center;
    padding-top: 20px;
  }
  .tab3-li-img {
    width: 125px;
    height: 126px;
    margin-right: 20px;

  }
  .tab3-li-test {
    background: url("./assets/test.png") no-repeat;
    background-size: contain;
  }
  .tab3-li-ct-time {
    display: flex;
    align-items: center;
    margin-top: 10px;
    img {
      width: 20px;
      height: 20px;
    }
  }
  .tab3-li-ct-title {
    margin-bottom: 10px;
  }
  .tab3-li-ct-main {
    line-height: 24px;
  }
  .tab3-li-ct {
    width: 421px;
  }
</style>

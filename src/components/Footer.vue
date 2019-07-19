<template>
  <div class="footer">
    <div class="f-inner">
      <div class="f-main">
        <div class="main-l">
          <div>
            <img class="main-l-img1" src="../assets/footer/logo_xia.png" alt="">
          </div>
          <div>
            <img class="main-l-img2" src="../assets/footer/code.png" alt="">
          </div>
        </div>
        <div class="main-m">
          <div>
            <div>电 话：020-29837600</div>
            <div>联系人：童盟皓    18820101265</div>
            <div>传 真：020-66698165</div>
            <div>网 址：www.zhhc-ip.com</div>
            <div>深圳总部：广州市白云区嘉禾街空港大道88号嘉大广场B塔1208-1210室</div>
          </div>
        </div>
        <div class="main-r">
          <div v-for="(item,index) in fData" :key="index" @click="clickFootLink(item.link)">{{item.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      fData: [
        {name: '首页', link: 'index.html'},
        {name: '关于我们', link: 'about.html'},
        {name: '法律服务', link: 'falv.html'},
        {name: '业务类别', link: 'yewu.html'},
        {name: '战略研究', link: 'zhanlue.html'},
        {name: '联系我们', link: 'contact.html'},
      ]
    }
  },

  components: {},

  computed: {},

  methods: {
    clickFootLink (link) {
      window.location.href = link
    }
  },
  
  created () {},

  mounted () {},

  beforeDestroy () {}
}
</script>

<style lang='scss' scoped>
.footer {
  height: 298px;
  width: 100%;
  background-color: #3A3C3D;
  padding: 30px 0 50px;
  color: #FEFEFE;
  font-size: 14px;
}
  .f-inner {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
  }
  .main-l {
    padding: 0 50px;
    text-align: center;
    border-right: 1px solid #545657;
  }
  .main-m {
    padding: 0 50px;
    border-right: 1px solid #545657;
    display: flex;
    align-items: center;
    line-height:30px;
    &>div {
      width: 260px;
    }
  }

  .main-l-img1 {
    margin-bottom: 25px;
    width: 53px;
    height: 66px;
  }
  .main-l-img2 {
    width: 116px;
    height: 116px;
  }
  .f-main {
    display: flex;
  }
  .main-r {
    padding-left: 50px;
    padding-right: 50px;
    text-align: center;
    line-height: 37px;
  }
  .main-r div:hover {
    color: #BE2027;
  }
</style>

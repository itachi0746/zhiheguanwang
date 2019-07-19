<template>
  <div class="header" id="header">
    <div class="inner">
      <div class="logo">
      </div>
      <div class="header-ul-box">
        <ul class="header-ul">
          <li :class="{'active': index===activeItem}" v-for="(item,index) in hData" :key="index" @click="clickLi(item.link)">{{item.name}}</li>
        </ul>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      hData: [
        {name: '首页', link: 'index.html'},
        {name: '关于我们', link: 'about.html'},
        {name: '法律服务', link: 'falv.html'},
        {name: '业务类别', link: 'yewu.html'},
        {name: '战略研究', link: 'zhanlue.html'},
        {name: '联系我们', link: 'contact.html'},
      ]
    }
  },
  props: {
    activeItem: {
      type: Number,
      default: 0
    }
  },
  created () {
  },
  methods: {
    clickLi (link) {
      window.location.href = link
    }
  }
}
</script>
<style lang="scss">
.header {
  padding: 16px 0;
  height: 90px;
}
.inner {
  height: 100%;
  position: relative;

}
  .logo {
    width: 261px;
    height: 58px;
    top: 0;
    position: absolute;
    left: 355px;
    background: url("../assets/header/logo.png") no-repeat;
    background-size: 100% 100%;
  }
  .header-ul-box {
    display: flex;
    position: absolute;
    top: 5px;
    right: 350px;
    align-items: center;
  }
  .header-ul {
    overflow: hidden;
    color: #131313;
    font-size: 16px;
    li {
      float: left;
      height: 42px;
      width: 73px;
      text-align: center;
      line-height: 42px;
      border-bottom: 2px solid transparent;
      margin-right: 15px;
      cursor: pointer;
    }
    li.active {
      border-bottom: 2px solid #BE2027;
      color: #BE2027;
    }
  }
</style>
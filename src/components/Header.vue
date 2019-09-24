<template>
  <div class="header" id="header">
    <div class="inner">
      <div class="logo">
      </div>
      <div class="header-ul-box">
        <ul class="header-ul" v-if="hData.length">
          <li :class="{'active': item.partCode===activeItem}" v-for="(item,index) in hData" :key="index" @click="clickLi(item.link)">{{item.name}}</li>
        </ul>
      </div>

    </div>

  </div>
</template>

<script>
import * as http from '../utils/core/http'
import * as _ from 'underscore'
export default {
  name: 'Header',
  data () {
    return {
      codeData: [ // partCode: 对照码 跟后台配置的保持一致
        {partCode: 'L1', link: 'index.html'},
        {partCode: 'L2', link: 'about.html'},
        {partCode: 'L3', link: 'falv.html'},
        {partCode: 'L4', link: 'yewu.html'},
        {partCode: 'L5', link: 'zhanlue.html'},
        {partCode: 'L6', link: 'contact.html'},
      ],
      hData: [],
      resData: null
    }
  },
  props: {
    activeItem: {
      type: String,
      default: 'L1'
    }
  },
  created () {
    this.getInfo()

  },
  mounted () {
  },
  methods: {
    clickLi (link) {
      window.location.href = link
    },
    async getInfo () {
      const EntId = process.env.VUE_APP_TEST_ENTID
      const OrgId = process.env.VUE_APP_TEST_ORGID
      const ParentId = ''
      const url = `/PartBase/Search?EntId=${EntId}&OrgId=${OrgId}&ParentId=${ParentId}`

      const result = await http.post(url, {})
      console.log(result)
      this.resData = result.Data
      for (let obj of this.resData) {
        for (let obj2 of this.codeData) {
          if (obj.CM01_PART_CODE === obj2.partCode) { // 相同则添加
            obj2.name = obj.CM01_FULL_NAME_1 // 名字
            obj2.orderNo = obj.CM01_VIEW_ORDER // 排序用的key
            this.hData.push(obj2)
          }
        }
      }
      this.hData = _.sortBy(this.hData, 'orderNo') // 排序
      this.$emit('initHeader', this.resData)

    },
    handleData () {
      for (let obj of this.resData) {
        for (let obj2 of this.codeData) {
          if (obj.CM01_PART_CODE === obj2.partCode) { // 相同则添加
            obj2.name = obj.CM01_FULL_NAME_1 // 名字
            obj2.orderNo = obj.CM01_VIEW_ORDER
            this.hData.push(obj2)
          }
        }
      }
      this.hData = _.sortBy(this.hData, 'orderNo') // 排序
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
      min-width: 73px;
      text-align: center;
      line-height: 42px;
      border-bottom: 2px solid transparent;
      margin-right: 15px;
      cursor: pointer;
    }
    li.active {
      border-bottom: 2px solid $activeColor;
      color: $activeColor;
    }
  }
</style>
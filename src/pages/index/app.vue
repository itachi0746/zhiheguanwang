<template>
  <div>
    <Header />
    <h1 @click="getInfo">This is index page </h1>
    <a href="/user/index">用户主页</a><br>
    <a href="/about.html">关于</a>
    <!--<van-button type="default">默认按钮</van-button>-->
    <!--<van-button type="primary">主要按钮</van-button>-->
    <!--<van-button type="info">信息按钮</van-button>-->
    <!--<van-button type="warning">警告按钮</van-button>-->
    <!--<van-button type="danger">危险按钮</van-button>-->
    <input type="text">
    <div>wwwwe</div>

    <el-button>默认按钮</el-button>
    <el-button type="primary">主要按钮</el-button>
    <el-button type="success">成功按钮</el-button>
    <el-button type="info">信息按钮</el-button>
    <el-button type="warning">警告按钮</el-button>
    <el-button type="danger">危险按钮</el-button>
  </div>
</template>
<style lang="scss">
  a {
    color: green;
    display: flex;
    font-size: 40px;
  }

</style>
<script>
import * as http from '../../utils/core/http'
import '@/style/index.scss'
import Header from '@/components/header/header.vue'
import utils from '../../utils/utils'

export default {
  components: {
    Header
  },
  created () {
    const url = '/ActivityInfo'
    http.post(url, {}).then((res) => {
      console.log(res)
    })
    console.log(process.env)
  },
  methods: {
    // 接口调用示例
    async getInfo () {
      const params = {
        test: 'test'
      }
      const result = await http.post('/test', params)
      console.log(result)
    }
  }

}
</script>

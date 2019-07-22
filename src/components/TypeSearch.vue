<template>
  <div class="type-list-big-search">
    <!--分类搜索-->
    <el-form :inline="true"  ref="form" :model="form" label-width="">
      <el-form-item label="商品和服务项目检索：">
        <el-input v-model="form.name"></el-input>
      </el-form-item>

      <el-form-item label="">
        <el-radio-group v-model="form.resource">
          <el-radio label="名称"></el-radio>
          <el-radio label="英文名称"></el-radio>
          <el-radio label="编号"></el-radio>
          <el-radio label="类别"></el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item label="">
        <button class="s-btn" @click="onSubmit">商品搜索</button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        name: '',
        resource: '',
      }
    }
  },

  components: {},

  computed: {},

  methods: {
    onSubmit () {

    }
  },
  
  created () {},

  mounted () {},

  beforeDestroy () {}
}
</script>

<style lang='scss' scoped>
  .type-list-big-search {
    border-bottom: 1px solid rgba(209,211,212,1);
    padding: 52px 0 53px;
    color: #131313;
  }
  .s-btn {
    width: 92px;
    height: 27px;
    text-align: center;
    line-height: 25px;
    color: #131313;
    background:rgba(223,223,223,1);
    border:1px solid rgba(118,118,118,1);
    margin-left: 9px;
    cursor: pointer;
  }
</style>

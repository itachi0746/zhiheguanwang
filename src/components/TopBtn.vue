<template>
  <div class="top-btn">
    <a href="#header"></a>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },

  components: {},

  computed: {},

  methods: {
  },
  
  created () {},

  mounted () {},

  beforeDestroy () {}
}
</script>

<style lang='scss' scoped>
.top-btn {
  position: fixed;
  right: 247px;
  bottom: 158px;
  z-index: 10;
  width: 56px;
  height: 38px;
  background: url("../assets/fanhuidingbu.png") no-repeat;
  background-size: 100% 100%;
  cursor: pointer;
  font-size: 0;
}
  a {
    width: 100%;
    height: 100%;
    display: inline-block;
  }
</style>

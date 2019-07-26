<template>
  <ul class="tab-ul">
    <li :class="{'active': activeTab===index}" v-for="(item,index) in tabData" :key="index" @click="clickTab(index)">{{item.name}}</li>
  </ul>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  props: {
    activeTab: {
      type: Number,
      default: 0
    },
    tabData: {
      type: Array,
      default: null
    }
  },

  components: {},

  computed: {},

  methods: {
    clickTab (idx) {
      this.$emit('changeTab', idx)
    },
  },
  
  created () {},

  mounted () {},

  beforeDestroy () {}
}
</script>

<style lang='scss' scoped>
  .tab-ul {
    display: flex;
    li {
      @include defaultFlex;
      border-right: 1px solid #ffffff;
      width: 300px;
      height: 50px;
      background-color: #CFA972;
      cursor: pointer;
    }
    li.active {
      color: #131313;
      background-color: #fff;
    }
  }
  .tab-ul li:nth-last-child(1) {
    border: 0px;
  }
</style>

<template>
  <div>

    <Index />

  </div>
</template>
<script>
import Index from './Index.vue'


export default {
  components: {
    Index
  },
  created () {
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
<style lang="scss">

</style>
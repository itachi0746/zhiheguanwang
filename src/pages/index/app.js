import Vue from 'vue'
import App from './app.vue'
import '@/utils/rem.js'
import '@/style/common.css'
import { Button } from 'element-ui'
Vue.use(Button)
new Vue({
  el: '#app',
  render: h => h(App)
})

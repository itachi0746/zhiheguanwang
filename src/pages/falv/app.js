import Vue from 'vue'
import App from './app.vue'
import '@/utils/rem.js'
import '@/style/reset.scss'
import '@/style/common.css'
import { Button, Carousel, CarouselItem } from 'element-ui'
Vue.use(Button)
Vue.use(Carousel)
Vue.use(CarouselItem)
new Vue({
  el: '#app',
  render: h => h(App)
})

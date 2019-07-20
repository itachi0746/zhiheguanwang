import Vue from 'vue'
import App from './app.vue'
import '@/utils/rem.js'
import '@/style/reset.scss'
import '@/style/common.css'
import { Button, Carousel, CarouselItem, Breadcrumb, BreadcrumbItem } from 'element-ui'
Vue.use(Button)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
new Vue({
  el: '#app',
  render: h => h(App)
})

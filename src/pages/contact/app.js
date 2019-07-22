import Vue from 'vue'
import App from './app.vue'
import VueAMap from 'vue-amap';
import '@/utils/rem.js'
import '@/style/reset.scss'
import '@/style/common.css'
import { Button, Carousel, CarouselItem } from 'element-ui'
Vue.use(Button)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(VueAMap);
VueAMap.initAMapApiLoader({
  key: '524622d1c35770d3b325c5b37b712de7',
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
  // 默认高德 sdk 版本为 1.4.4
  v: '1.4.4'
});
new Vue({
  el: '#app',
  render: h => h(App)
})

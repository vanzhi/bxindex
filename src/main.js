// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {Row, Col, Carousel, CarouselItem} from 'element-ui'
import AMap from 'vue-amap';
import 'normalize.css'
import '@/style/fonts/iconfont.css'
import '@/style/index.scss'
import 'babel-polyfill'

Vue.use(Row)
Vue.use(Col)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(AMap)

AMap.initAMapApiLoader({
    // 申请的高德key
    key: 'b26b7c08a5230144460c3c164f61d619',
    // 插件集合
    plugin: ['AMap.ToolBar']
});

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

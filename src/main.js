// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import {Row, Col, Carousel, CarouselItem, Pagination, Loading} from 'element-ui'
import AMap from 'vue-amap'
import store from './store/store'
import {API_GetMenuList} from './fetch/restApi'
import 'normalize.css'
import '@/style/fonts/iconfont.css'
import '@/style/index.scss'
import 'babel-polyfill'

/* el */
Vue.use(Row)
Vue.use(Col)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(Pagination)
Vue.use(AMap)
Vue.use(Loading)
AMap.initAMapApiLoader({
    // 申请的高德key
    key: 'b26b7c08a5230144460c3c164f61d619',
    // 插件集合
    plugin: ['AMap.ToolBar']
});

// router.beforeEach((to, from, each) => {

// })

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
import article from '@/pages/article'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    }, {
      path: '/article/:nodepath*',
      name: 'article',
      component: article
    }, {
      path: '*',
      redirect: '/index'
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
import major from '@/pages/major'
import trade from '@/pages/trade'
import about from '@/pages/about'
import investor from '@/pages/investor'
import join from '@/pages/join'
import media from '@/pages/media'
import contact from '@/pages/contact'
import article from '@/pages/article'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    }, {
      path: '/article',
      name: 'article',
      component: article
    }, {
      path: '/major',
      name: 'major',
      component: major
    }, {
      path: '/trade',
      name: 'trade',
      component: trade
    }, {
      path: '/about',
      name: 'about',
      component: about
    }, {
      path: '/investor',
      name: 'investor',
      component: investor
    }, {
      path: '/join',
      name: 'join',
      component: join
    }, {
      path: '/media',
      name: 'media',
      component: media
    }, {
      path: '/contact',
      name: 'contact',
      component: contact
    }, {
      path: '*',
      redirect: '/index'
    }
  ]
})

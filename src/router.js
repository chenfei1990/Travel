import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/home/Home'
import city from './pages/city/City'
import Detail from './pages/detail/Detail'
Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    component: Home
  },
  {
    path: '/city',
    component: city
  },
  {
    path: '/detail/:id',
    component: Detail
  }
  ],
  scrollBehavior (to, from, savedPosition) {
    return {x: 0, y: 0}
  }
})

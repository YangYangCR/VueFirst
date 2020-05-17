import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'

Vue.use(Router)
Vue.use(VueResource)

const BusinessDetail = () => import('@/pages/Business')

export default new Router({
  // mode: 'history',
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/business',
      name: 'business',
      component: BusinessDetail
    }
  ]
})

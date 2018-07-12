import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)


import Home from '../views/home/home.vue'
import UserCenter from '../views/userCenter/index.vue'
import ProductCenter from '../views/productCenter/index.vue'
import FeedBack from '../views/feedBack/index.vue'

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/user_center',
      name: 'UserCenter',
      component: UserCenter
    },
    {
      path: '/product_center',
      name: 'ProductCenter',
      component: ProductCenter
    },
    {
      path: '/feed_back',
      name: 'FeedBack',
      component: FeedBack
    }
  ]
})

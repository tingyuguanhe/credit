import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)


import Home from '../views/home/home.vue'
import UserCenter from '../views/userCenter/index.vue'
import ProductCenter from '../views/productCenter/index.vue'
import FeedBack from '../views/feedBack/index.vue'
import Register from '../views/register/index.vue'
import Setting from '../views/userCenter/setting.vue'
import ArticleEdit from '../views/tools/articleEdit.vue';

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta:{
        title:'首页'
      }
    },
    {
      path: '/user_center',
      name: 'UserCenter',
      component: UserCenter,
      meta:{
        title:'个人中心'
      }
    },
    {
      path: '/product_center/:id',
      name: 'ProductCenter',
      component: ProductCenter,
      meta:{
        title:'产品展示'
      }
    },
    {
      path: '/feed_back',
      name: 'FeedBack',
      component: FeedBack,
      meta:{
        title:'用户反馈'
      }
    },
    {
      path: '/register',
      name: 'Register',
      component: Register,
      meta:{
        title:'在线申请'
      }
    },
    {
      path: '/setting',
      name: 'Setting',
      component: Setting,
      meta:{
        title:'基础设置'
      }
    },
    {
      path: '/article_edit',
      name: 'ArticleEdit',
      component: ArticleEdit,
      meta:{
        title:'软文编辑'
      }
    },
    
    
    
    
  ]
})


router.beforeEach((to, from, next)=>{
  document.title = to.meta.title;
  next();
})


export default router
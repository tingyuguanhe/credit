import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)


import Home from '../views/home/home.vue'
import UserCenter from '../views/userCenter/index.vue'
import ProductCenter from '../views/productCenter/index.vue'
import FeedBack from '../views/feedBack/index.vue'
import RegisterOneStep from '../views/apply/oneStep.vue'
import Finished from '../views/apply/finished.vue'

import Setting from '../views/userCenter/setting.vue'
import ArticleEdit from '../views/tools/articleEdit.vue';
import Help from '../views/userCenter/help.vue'
import Utils from '../views/userCenter/utils.vue'
import BaseUserInfo from '../views/userInfo/baseInfo.vue'
import IdCards from '../views/userInfo/idCards.vue'
import PhotoAndWechat from '../views/userInfo/photoAndWechat.vue'

import ChangePsd from '../views/userCenter/changePsd.vue'
import CheckCode from '../views/userCenter/checkCode.vue'

import MyIncome from '../views/userCenter/income.vue'

import MakePlacard from '../views/tools/makePlacard.vue'
import PlacardTpl from '../views/tools/placardTpl.vue'

import OnlineApply from '../views/apply/onlineApply.vue'

import Authorize from '../views/authorize/index.vue'

import Login from '../views/login/index.vue'

import ArticleLibrary from '../views/tools/articleLibrary.vue'

import Agreement from '../views/userCenter/agreement.vue'

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
      path: '/register_one_step',
      name: 'RegisterOneStep',
      component: RegisterOneStep,
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
    {
      path: '/help',
      name: 'Help',
      component: Help,
      meta:{
        title:'帮助与反馈'
      }
    },
    {
      path: '/utils',
      name: 'Utils',
      component: Utils,
      meta:{
        title:'实用工具'
      }
    },
    {
      path: '/base_user_info',
      name: 'BaseUserInfo',
      component: BaseUserInfo,
      meta:{
        title:'编辑用户信息'
      }
    },
    {
      path: '/change_psd',
      name: 'ChangePsd',
      component: ChangePsd,
      meta:{
        title:'修改密码'
      }
    },
    {
      path: '/check_code',
      name: 'CheckCode',
      component: CheckCode,
      meta:{
        title:'申请修改填报信息'
      }
    },
    {
      path: '/income',
      name: 'MyIncome',
      component: MyIncome,
      meta:{
        title:'我的收益'
      }
    },
    {
      path: '/finished',
      name: 'Finished',
      component: Finished,
      meta:{
        title:'完成认证'
      }
    },
    {
      path: '/make_placard/:id',
      name: 'MakePlacard',
      component: MakePlacard,
      meta:{
        title:'海报生成器'
      }
    },
    {
      path: '/placard_tpl',
      name: 'PlacardTpl',
      component: PlacardTpl,
      meta:{
        title:'海报生成器'
      }
    },
    {
      path: '/online_apply',
      name: 'OnlineApply',
      component: OnlineApply,
      meta:{
        title:'在线申请'
      }
    },
    {
      path: '/authorize',
      name: 'Authorize',
      component: Authorize,
      meta:{
        title:'授权'
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta:{
        title:'登录'
      }
    },
    {
      path: '/article_library',
      name: 'ArticleLibrary',
      component: ArticleLibrary,
      meta:{
        title:'文章库'
      }
    },
    {
      path: '/id_cards',
      name: 'IdCards',
      component: IdCards,
      meta:{
        title:'上传身份证信息'
      }
    },
    {
      path: '/photo_and_wechat',
      name: 'PhotoAndWechat',
      component: PhotoAndWechat,
      meta:{
        title:'上传头像和微信二维码'
      }
    },
    {
      path: '/agreement',
      name: 'Agreement',
      component: Agreement,
      meta:{
        title:'服务协议'
      }
    }

    
    
    
    

    

    
    
    

    
    


    
  ]
})


router.beforeEach((to, from, next)=>{
  document.title = to.meta.title;
  next();
})


export default router
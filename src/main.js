// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

import '../src/styles/common.scss'
import VideoPlayer from 'vue-video-player'

import { Area,Popup } from 'vant';

Vue.use(Popup);
Vue.use(Area);
import 'vant/lib/vant-css/index.css';

require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')
Vue.use(VideoPlayer)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

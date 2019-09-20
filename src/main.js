// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import "./assets/css/base.css"  /* 样式初始化文件 */

import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'
Vue.use(Mint);


Vue.config.productionTip = false

// 类似于$http交互
import axios from 'axios'
Vue.prototype.$http = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

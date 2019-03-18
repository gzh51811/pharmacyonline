Vue.config.productionTip = false

import Vue from 'vue'
import App from './App.vue'
import router from './router/index'  //引入路由
import axios from 'axios'  //引入路由
import Vant from 'vant'// 引入UI框架
import 'vant/lib/index.css' // 引入UI css

Vue.use(Vant) // 使用UI框架

Vue.prototype.$axios = axios;


new Vue({
  render: h => h(App),
  router,
  axios

}).$mount('#app')

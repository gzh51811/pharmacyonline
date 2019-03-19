Vue.config.productionTip = false

import Vue from 'vue'
import App from './App.vue'
import router from './router/index'  //引入路由
import axios from 'axios'  //引入
import Vant from 'vant'// 引入UI框架
import 'vant/lib/index.css' // 引入UI css

Vue.use(Vant) // 使用UI框架




axios.defaults.baseURL = 'http://localhost';
// axios.defaults.headers.common['Authorization'] = 'AUTH_TOKEN';
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';




Vue.prototype.$axios = axios;

axios.defaults.headers.post["Content-type"] = "application/json"

new Vue({
  render: h => h(App),
  router,
  axios

}).$mount('#app')

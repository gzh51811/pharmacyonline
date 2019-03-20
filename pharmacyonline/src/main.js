Vue.config.productionTip = false

import Vue from 'vue'
import App from './App.vue'
import router from './router/index'  //引入路由
import axios from 'axios'  //引入
import Vant from 'vant'// 引入UI框架
import 'vant/lib/index.css' // 引入UI css
// import axios from "axios";

import 'element-ui/lib/theme-chalk/index.css';
import element from 'element-ui';


Vue.use(element)
Vue.use(Vant) // 使用UI框架
// axios.defaults.baseURL = '/api'

Vue.prototype.$axios = axios;

var tunhuoji = axios.create({ baseURL: 'http://localhost:12000' })


Vue.prototype.$tunhuoji = tunhuoji;


axios.defaults.headers.post["Content-type"] = "application/json"

new Vue({
  render: h => h(App),
  router,
  // axios

}).$mount('#app')

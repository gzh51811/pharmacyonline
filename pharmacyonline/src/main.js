// Vue.config.productionTip = false

import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

// import "./static/common.scss";


// 引入页面
import home from './page/home.vue'//首页
import login from './page/login.vue'//登录
import register from './page/register.vue'//注册
import list from './page/list.vue'//列表
import details from './page/details.vue'  //详情
import cart from './page/cart.vue'//购物车
import order from './page/order.vue'//订单




// 引入UI框架
import Vant from 'vant'
import 'vant/lib/index.css'





Vue.use(Vant) // 使用UI框架
Vue.use(VueRouter); // 使用UI框架

const router = new VueRouter({
  routes: [
    { path: '/', component: home },//首页
    { path: '/home', component: home },//首页
    { path: '/login', component: login },//登录
    { path: '/register', component: register },//注册
    { path: '/list', component: list },//列表
    { path: '/details', component: details }, //详情
    { path: '/cart', component: cart },//购物车
    { path: '/order', component: order },//订单
  ]
})









new Vue({
  render: h => h(App),
  router

}).$mount('#app')

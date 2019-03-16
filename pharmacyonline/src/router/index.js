import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

// 引入页面
import home from '../page/home.vue'//首页
import login from '../page/login.vue'//登录
import register from '../page/register.vue'//注册
import list from '../page/list.vue'//列表
import details from '../page/details.vue'  //详情
import cart from '../page/cart.vue'//购物车
import order from '../page/order.vue'//订单
import wode from '../page/wode.vue'//个人中心
import goodslist from '../page/goodslist.vue'//商品列表


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
        { path: '/wode', component: wode },//个人中心
        { path: '/goodslist', component: goodslist },//商品列表
        // { path: '/*', component: home },//首页
    ]
})

export default router;

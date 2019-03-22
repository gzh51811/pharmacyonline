
const express = require('express');
const Router = express.Router();
// const bodyParser = require('body-parser');




// 路由
const cart = require('./cart.js');
const list = require('./list.js');
// const loginoutRouter = require('./loginout.js');
// const adminListRouter = require('./adminList.js');
const goodslist = require('./goodslist.js');
const home = require('./home.js');
const banan = require('./banan.js');

// const commodityEditor = require('./commodityEditor.js');
// const category = require('./category.js');
// const token = require('./token.js');

// Router.use(bodyParser.json());//数据JSON类型
// Router.use(bodyParser.urlencoded({ extended: false }));//解析post请求数据



Router.use('/nodelist', list); //调到首页
// Router.use('/adminList', adminListRouter); //调到用户列表
// Router.use('/loginout', loginoutRouter);  //退出
Router.use('/nodecart', cart); //调到登录
Router.use('/nodegoodslist', goodslist);  //商品列表页
// Router.use('/commodityEditor', commodityEditor);  //商品编辑
// Router.use('/category', category);  //分类管理
// Router.use('/token', token);  //token验证
Router.use('/home', home);
Router.use('/banan', banan);


module.exports = Router;































// async function _insert() {
//     let ws = await mongodb.insert('user', { name: 'xosdfsdf', age: 100 });
//     console.log(ws);
// }

// async function _select() {
//     let ws = await mongodb.find('user', {});
//     console.log(ws);
// }
// async function _update() {
//     let ws = await mongodb.update('user', { age: 100 }, { $set: { age: '10' } });
//     console.log(ws);
// }
// async function _delete() {
//     let ws = await mongodb.delete('user', { age: { $gt: 18 } });
//     console.log('del' + ws);
// }

// _select();
const mongodb = require('./db');
const express = require('express');
const token = require('./token');
const Router = express.Router();


// 验证登录
Router.post('/token', (req, res, next) => {
    let tokenverify = token.verify(req.body.token);
    if (!tokenverify) {
        res.send({ msg: 0 });
    } else {
        res.send({ msg: 1, result: tokenverify });
        next();
    }

})

Router.get('/', (req, res) => {
    res.send('11111');
})


Router.get('/welcome', (req, res) => {
    res.render('welcome');
})

// 查询用户信息
Router.post('/', async (req, res) => {
    let name = req.body.name;
    let findname = await mongodb.find('user', { name });
    if (findname.length) {
        res.send({ findname, status: 1 });
    } else {
        res.send({ findname, status: 0 });
    }

})


module.exports = Router;
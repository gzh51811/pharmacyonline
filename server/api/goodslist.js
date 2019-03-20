const mongodb = require('./db');
const express = require('express');
const mongoose = require('mongoose');
const request = require('request');
const Router = express.Router();






// 返回列表前端数据
Router.get('/', (req, res) => {
    let id = req.query.id;
    // console.log(id)
    (async () => {
        let result = await mongodb.find('goodslist', { "gc_id": id });
        res.send({ result });
    })();
})

// 返回前端详情数据
Router.get('/details', (req, res) => {
    let ids = JSON.parse(req.query.id).id;
    (async () => {
        let result = await mongodb.find('goodslist', { "goods_id": ids });
        res.send({ result });
    })();
})




Router.get('/delete', async (req, res) => {
    let id = mongoose.Types.ObjectId(req.query.id);
    let _res = await mongodb.delete('goodslist', { "_id": id });
    if (_res.deletedCount) {
        res.send('1');
    } else {
        res.send('0');
    }
});

module.exports = Router;
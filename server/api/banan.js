const mongodb = require('./db');
const express = require('express');
const mongoose = require('mongoose');
const request = require('request');
const Router = express.Router();



Router.get('/', (req, res) => {

    //let id = JSON.parse(req.query.id).id;

    var options = {
        method: 'get',
        url: `https://www.huajuanmall.com/pc/goods/gcGoods?gc_id=20&limit=15&offset=0`,
        form: 'content',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    };

    request(options, async (err, res, body) => {
        console.log("banan:", res.body);
        console.log(121212);
        if (err) {
            console.log(err)
        } else {

            let data = JSON.parse(body).goods_info;
            res.send(data);

        }
    })


})











// ����ǰ����������
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
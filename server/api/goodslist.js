const mongodb = require('./db');
const express = require('express');
const mongoose = require('mongoose');
const request = require('request');
const Router = express.Router();






// // 返回列表前端数据
// Router.get('/', (req, res) => {
//     let id = JSON.parse(req.query.id).id;
//     // console.log(id)
//     (async () => {
//         let result = await mongodb.find('goodslist', { "gc_id": id });
//         res.send({ result });
//     })();
// })


Router.get('/', (req, res) => {

    let id = JSON.parse(req.query.id).id;

    var options = {
        method: 'get',
        url: `https://www.huajuanmall.com/pc/goods/gcGoods?gc_id=${id}&limit=30&offset=0`,
        form: 'content',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    };

    request(options, async (err, ress, body) => {
        if (err) {
            console.log(err)
        } else {

            let data = JSON.parse(body).goods_info;
            res.send(data);
            // console.log(data)

            // let inserts = await mongodb.insert("goodslist", data);
            // console.log(inserts);
            // if (inserts) {
            //     res.send(body);
            // } else {
            //     res.send("错误：000000000");
            // }
            // console.log(body);
        }
    })


});

Router.get('/a', (req, resa) => {
    console.log(12121);
    var options = {
        method: 'get',
        url: `https://www.huajuanmall.com/pc/goods/gcGoods?gc_id=1&limit=30&offset=0`,
        form: 'content',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    };

    request(options, (err, resb, body) => {
        // console.log(res.body);
        if (err) {
            console.log(err)
        } else {

            // let data = JSON.parse(body).goods_info;
            resa.send(body);

        }
    })


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
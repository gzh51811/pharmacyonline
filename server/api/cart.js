const mongodb = require('./db');
const express = require('express');
const Router = express.Router();
const request = require('request');





// 加入购物车
Router.get('/', (req, res) => {
    let id = JSON.parse(req.query.id);
    // console.log(id)
    (async () => {

        // let result = await mongodb.insert('cart', { "goods_id": id, "number": 1 });

        let findresult = await mongodb.find('cart', { "goods_id": id });
        if (findresult.length != 0) {
            let number = ((findresult[0].number) + 1);
            // console.log(number);
            let result = await mongodb.update('cart', { "goods_id": id }, { $set: { "number": number } });
            res.send({ result });
        } else {
            let result = await mongodb.insert('cart', { "goods_id": id, "number": 1 });
            res.send({ result });
        }
    })();
})


// 购物车所有商品
Router.get('/list', (req, res) => {
    (async () => {
        let cartlist = await mongodb.find('cart');

        let goodslist = await mongodb.find('goodslist');
        for (let i = 0; i < cartlist.length; i++) {
            for (let j = 0; j < goodslist.length; j++) {
                if (cartlist[i].goods_id == goodslist[j].goods_id) {
                    goodslist[j]['cart_number'] = cartlist[i]['number'];
                    cartlist[i] = goodslist[j];
                }
            }
        }
        res.send({ cartlist });

    })();
})








module.exports = Router;
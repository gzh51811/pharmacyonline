const mongodb = require('./db');
const express = require('express');
const Router = express.Router();
const request = require('request');





// 加入购物车
Router.get('/', (req, res) => {
    let goodsid = JSON.parse(req.query.id);
    var options = {
        method: 'get',
        url: `https://www.huajuanmall.com/pc/goods/getGoodsDetail?goods_id=${goodsid}`,
        form: 'content',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    };

    request(options, async (err, res, body) => {
        if (err) {
            console.log(err)
        } else {
            let data = JSON.parse(body).goodsInfo;

            let findresult = await mongodb.find('cart', { "goods_id": goodsid });
            if (findresult.length != 0) {
                let number = ((findresult[0].number) + 1);
                // console.log(number);
                let result = await mongodb.update('cart', { "goods_id": goodsid }, { $set: { "cart_number": number } });
                res.send({ result });
            } else {
                data['cart_number'] = 1;
                let inserts = await mongodb.insert("cart", data);
                res.send({ inserts });
            }
        }
    })
});


// 查询购物车所有商品
Router.get('/list', (req, res) => {
    (async () => {
        let cartlist = await mongodb.find('cart');
        res.send({ cartlist });
    })();

})


//增加数量
Router.get('/addnumber', (req, res) => {
    let goodsid = req.query.goods_id;
    let value = req.query.value;
    (async () => {
        let result = await mongodb.update('cart', { "goods_id": goodsid }, { $set: { "cart_number": value } });
        res.send({ result });
    })();

})








module.exports = Router;
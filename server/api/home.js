const mongodb = require('./db');
const express = require('express');
const Router = express.Router();
const request = require('request');



Router.get('/', (req, res) => {

    // let id = JSON.parse(req.query.id).id;

    var options = {
        method: 'get',
        url: `https://cn.pharmacyonline.com.au/cmsapi/home/banners?website_id=2&client=1`,
        form: 'content',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    };

    request(options, async (err, res, body) => {
        // console.log(res.body);
        if (err) {
            // console.log(err)
        } else {
            res.send(body);
            // let data = JSON.parse(body);
        }
    })


})





module.exports = Router;
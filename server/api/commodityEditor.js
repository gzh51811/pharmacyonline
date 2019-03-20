const mongodb = require('./db');
const express = require('express');
const mongoose = require('mongoose');
const Router = express.Router();
Router.get('/', (req, res) => {
    res.render('commodityEditor');
})

Router.get('/:id', async (req, res) => {
    let id = mongoose.Types.ObjectId(req.params.id);
    let find = await mongodb.find('goodslist', { '_id': id });
    if (find) {
        res.render('commodityEditor', {
            'id': id,
            'goodsname': find[0].goodsname,
            'classt': find[0].class,
            'opirce': find[0].opirce,
            'ppirce': find[0].ppirce,
            'stuck': find[0].stuck,
            'images': find[0].images,
            'time': find[0].time,
            'describe': find[0].describe,
            'state': find[0].state,
        })
    }
})
module.exports = Router;
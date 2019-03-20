const mongodb = require('./db');
const express = require('express');
const Router = express.Router();

Router.get('/', (req, res) => {
    res.render('login', {
        loginout: 1
    })
})

module.exports = Router;
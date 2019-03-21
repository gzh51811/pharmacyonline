const express = require('express');

const app = express();


app.all("*", function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");

    next();
})




// 路由
let Router = require('./api')

app.use(express.static('./'));

app.use('/', Router);

app.listen(12000, () => {
    console.log('服务器启动成功：localhost:12000');
})
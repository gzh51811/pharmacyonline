const express = require('express');

const ejs = require('ejs');

const app = express();


app.all("*", function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");

    next();
})



app.set('view engine', 'ejs');  //配置ejs模板引擎。ejs只需要配置，不需要引入(express中已经引入)
app.set('views', __dirname + '/view');




// 路由
let Router = require('./api')

app.use(express.static('./'));

app.use('/', Router);

app.listen(12000, () => {
    console.log('服务器启动成功：localhost:12000');
})
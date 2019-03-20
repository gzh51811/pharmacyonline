const mongodb = require('./db');
const express = require('express');
const md5 = require('md5');
const mongoose = require('mongoose');



const Router = express.Router();


// Router.use(bodyParser.json());//数据JSON类型
// Router.use(bodyParser.urlencoded({ extended: false }));//解析post请求数据

Router.get('/', (req, res) => {
    res.render('adminList');
})

Router.get('/add', (req, res) => {
    res.render('adminAdd');
})


// 停用
Router.post('/staticstop', async (req, res) => {
    var id = req.body.name;
    let deletename = await mongodb.update('user', { 'name': id }, { $set: { static: '已停用' } });
    if (deletename.upsertedCount) {
        return 0;
    } else {
        return 1;
    }
})

// 启用
Router.post('/staticstart', async (req, res) => {
    var id = req.body.name;
    let deletename = await mongodb.update('user', { 'name': id }, { $set: { static: '已启用' } });

    if (deletename.upsertedCount) {
        return 1;
    } else {
        return 0;
    }
})


// 删除当前用户信息
Router.post('/deleteadmin', async (req, res) => {
    var id = mongoose.Types.ObjectId(req.body.id);
    let deletename = await mongodb.delete('user', { '_id': id });
    // console.log(id);
    // console.log(deletename);
    if (deletename.deletedCount) {
        res.send({ deletename, status: 1 });
    } else {
        res.send({ deletename, status: 0 });
    }
})



// 修改时获取当前用户信息
Router.get('/edit/:id', async (req, res) => {
    var id = mongoose.Types.ObjectId(req.params.id);
    let findname = await mongodb.find('user', { '_id': id });

    // console.log(findname)
    if (findname.length) {
        // var data = { findname, status: 1 };
        res.render('adminEdit', {
            'id': id,
            'name': findname[0].name,
            'phone': findname[0].phone,
            'email': findname[0].email,
            'role': findname[0].role,
            'passward': findname[0].passward,
            'status': 1
        });
    } else {
        res.render('adminEdit', { ' status': 1 });
    }
});

// 修改当前用户信息提交
Router.post('/edit', async (req, res) => {
    // res.render('adminAdd');
    let name = req.body.username;
    let passward = md5(req.body.password);
    let phone = req.body.phone;
    let email = req.body.email;
    var id = mongoose.Types.ObjectId(req.body.id);
    let role = req.body.role;  //角色
    //状态 是否启用  0 不启用 ,1启用
    (async () => {
        let updateuser = await mongodb.update('user', { '_id': id }, { $set: { name, passward, phone, email, role } });
        if (updateuser.result.ok) {
            res.send({ updateuser, status: 1 });
        } else {
            res.send({ updateuser, status: 0 });
        }
    })();
});

// 用户列表
Router.get('/list', async (req, res) => {
    let findname = await mongodb.find('user', '');
    if (findname.length) {
        res.send({ findname, status: 1 });
    } else {
        res.send({ findname, status: 0 });
    }
})

// 查询用户名是否存在
Router.post('/name', async (req, res) => {

    let name = req.body.username;
    let findname = await mongodb.find('user', { name });
    if (findname.length) {
        res.send({ findname, status: 1 });
    } else {
        res.send({ findname, status: 0 });
    }

})



// 添加管理员
Router.post('/add', (req, res) => {
    // res.render('adminAdd');
    let name = req.body.username;
    let passward = md5(req.body.password);
    let phone = req.body.phone;
    let email = req.body.email;
    let role = req.body.role;  //角色
    let datetime = Date.now();
    let time = setTimes(datetime);
    let static = "已启用"; //状态 是否启用  0 不启用 ,1启用

    (async () => {
        let findname = await mongodb.find('user', { name });
        if (findname.length) {
            res.send({ findname, status: -1 }); //状态 -1用户已存在
        } else {
            let insertuser = await mongodb.insert('user', { name, passward, phone, email, role, time, static });
            if (insertuser.insertedCount) {
                res.send({ insertuser, status: 1 });
            } else {
                res.send({ insertuser, status: 0 });
            }
        }
    })()

})





/*
 	秒转成时间：xx天xx时xx分xx秒   ：  -
 	setTime(num)
 		* 参数： 秒
 		* 返回值： {}数据返回(灵活一点)
 		
 */

function setTimes(timer) {
    var time = new Date(timer);
    var year = time.getFullYear();//年
    var mon = time.getMonth() + 1;//0 
    var day = time.getDate();//24
    var hour = time.getHours();//时
    var min = time.getMinutes();//分
    var sec = time.getSeconds();//秒
    return year + "-" + mon + "-" + day + "&nbsp; " + hour + ":" + min + ":" + sec;
}

module.exports = Router;
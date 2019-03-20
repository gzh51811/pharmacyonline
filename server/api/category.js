const mongodb = require('./db');
const express = require('express');
const mongoose = require('mongoose');

const Router = express.Router();

Router.get('/', (req, res) => {
    res.render('category');
})

Router.get('/cateEdit', (req, res) => {

    res.render('cateEdit');
});

// 所属分类查询
Router.post('/cate', async (req, res) => {
    let find = await mongodb.find('cate', { 'classname': '0' });
    for (var i = 0; i < find.length; i++) {
        let classid = find[i]._id;
        var ids = mongoose.Types.ObjectId(classid);
        find[i]['cate'] = await mongodb.find('cate', { 'classname': ids });
    }
    // console.log(find);
    res.send(find);
});

// 分类列表
Router.post('/catelist', async (req, res) => {
    let find = await mongodb.find('cate', {});
    res.send(find);
    // let arrs = [];
    // for (var i = 0; i < find.length; i++) {
    //     if (find[i].classname != '0') {
    //         arrs.push(find[i]);
    //     }
    // }

    // console.log(arrs);


    // for (var i = 0; i < arrs.length; i++) {

    //     for (var j = 0; j < find.length; j++) {

    //         if (mongoose.Types.ObjectId(arrs[i].classname) != mongoose.Types.ObjectId(find[j]._id)) {
    //             var a = arrs[i]['cate'] = find[j];
    //             // res.send(a);
    //             console.log(a);
    //         }

    //     }
    // }

    // console.log(reslut);
    // console.log(ids);
    // console.log(a);



    // let classid = find[i].classname;
    // var ids = mongoose.Types.ObjectId(classid);
    // find[i]['cate'] = await mongodb.find('cate', { '_id': ids });

    // let find = await mongodb.find('cate', { classname: { $nin: ['0'] } });




    // for (var i = 0; i < find.length; i++) {
    //     let classid = find[i].classname;
    //     var ids = mongoose.Types.ObjectId(classid);
    //     find[i]['cate'] = await mongodb.find('cate', { '_id': ids });
    // }
    // res.send(find);
});


// 删除分类
Router.post('/catedelete', async (req, res) => {
    let classname = req.body.id;
    var id = mongoose.Types.ObjectId(classname);
    let del = await mongodb.delete('cate', { '_id': id });
    // console.log(id);
    if (del) {
        res.send({ msg: 1 });
    } else {
        res.send({ msg: 0 });
    }
});

// 修改分类
Router.get('/cateupdate/:id', async (req, res) => {
    let classname = req.params.id;
    var id = mongoose.Types.ObjectId(classname);
    let finds = await mongodb.find('cate', { '_id': id });
    let name = finds[0].name;
    if (finds) {
        res.render('cateupdate', { 'name': name });
    } else {
        res.render('cateupdate');
    }
});




// 添加分类
Router.post('/fenleiname', async (req, res) => {
    let name = req.body.name;
    let classname = req.body.classname;
    var id = mongoose.Types.ObjectId(classname);
    // console.log(name);
    // console.log(classname);
    let find = await mongodb.find('cate', { "_id": id });
    // console.log(find);
    if (classname == '0') {
        let insert = await mongodb.insert('cate', { name, classname });

        // console.log(insert);
        if (insert) {
            res.send({ msg: 1, finds: find });
        } else {
            res.send({ msg: 0 });
        }
    } else {

        let insert = await mongodb.insert('cate', { name, 'classname': id });
        if (insert) { res.send({ msg: 1, finds: find }); } else { res.send({ msg: 0 }); }
    }

    // console.log(req.body);
    // res.render('fadf');
});



module.exports = Router;
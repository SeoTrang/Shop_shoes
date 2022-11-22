const users = require('../model/users');
var alert = require('alert');



function checkAdmin(req,res,next) {
    users.find({_id:req.cookies._id})
    .then( user =>{
        // if(user[0].role === '0'){
        //     res.json('ok')
        // }
        if(user[0].role === '1'){
        // res.json("hello");

            next();
        }else{
            alert('Bạn không có quyền truy cập admin!')
            res.redirect('/');
        }
    })
    .catch(err =>{
        res.status(500).json('cookies het han vui long dang nhap lai !');
    })
    // res.json(req.cookies._id);
    
}

module.exports = checkAdmin;
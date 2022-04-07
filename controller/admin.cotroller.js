

class admin{
    home(req,res,next){
        res.render('admin/home',{layout:"admin_layout",name:"trang"})
    }
}

module.exports = new admin;
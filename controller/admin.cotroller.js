

class admin{
    home(req,res,next){
        res.render('admin/home',{layout:"admin_layout",name:"trang"})
    }



    // -----------------------------------------------product------------------------

    // [get]/addproduct
    addNewOrder(req,res,next){
        res.render('admin/add_new_ordert',{layout:'admin_layout'});
    }

    // [post]/store-order
    storeOrder(req,res,next){
        
        // res.json(req.body.count.length);
        var tam = [];
        // console.log(req.body.count.length)
        for (let index = 0; index < req.body.count.length; index++) {
            
            if(req.body.count[index]){
                console.log(index," : ",req.body.count[index])
                tam.push(req.body.count[index]);
            }
        }
        res.json(tam)
    }


    // [get]/wait-for-confirmation
    orderWaitConfirm(req,res,next){
        res.render('admin/order_wait_confirm',{layout:"admin_layout"});
    }

    // [get]/booked
    booked(req,res,next){
        res.render('admin/booked',{layout:'admin_layout'})
    }


    // -----------------------product----------------------------------------

    addNewProduct(req,res,next){
        res.render('admin/add_new_product',{layout:'admin_layout'})
    }


    viewProducts(req,res,next){
        res.render('admin/view_products',{layout:"admin_layout"});
    }
    // view-categorys
    viewCategory(req,res,next){
        res.render('admin/view_category',{layout:'admin_layout'})
    }


    // -------------------------------user------------------------------

    // [get]/view-users
    viewUser(req,res,next){
        res.render('admin/view_users',{layout:'admin_layout'});
    }
    
    // [get]/add-new-user
    addNewUser(req,res,next){
        res.render('admin/add_user',{layout:'admin_layout'})
    }
}

module.exports = new admin;
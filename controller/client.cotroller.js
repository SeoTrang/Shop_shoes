

class siteControllers{
    home(req,res,next){
        res.render('home');
    }
    test(req,res,next){
        res.render('client/detail_product');
    }

    detail(req,res,next){
        res.render('client/detail_product');
    }

    cart(req,res,next){
        res.render('client/cart');
    }
   
    checkOrder(req,res,next){
        res.render('client/check_order');
    }
    
}

module.exports = new siteControllers;
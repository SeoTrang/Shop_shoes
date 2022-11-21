<<<<<<< HEAD
const { mutipleMogooseToObject } = require('../util/mongoose');
const { mongoosesToObject }     = require('../util/mongoose');

const users         = require('../model/users');
const categorys     = require('../model/categorys');
const products      =require('../model/products');
const orders        = require('../model/orders');

var now = new Date();
var date = now.toISOString().slice(0,10);

// now.format("dd/MM/yyyy hh:mm TT");
var time_now = date+" "+ now.getHours()+":"+now.getMinutes();
var path_product = './img/Products/';

class admin{

// *************************middleware data****************************

    middlewareCategory(req,res,next){
        categorys.find({})
        .then(categorys =>{
            req.categorys = categorys;
            next();
        })
        .catch(err =>{
            res.json("Loi middleware category!");
        })
    }






    home(req,res,next){
        products.find({}).limit(10)
        .then(products =>{
            res.render('admin/home',{layout:"admin_layout",name:"trang",
                products:mutipleMogooseToObject(products)
            })
        })
    }



    // -----------------------------------------------order------------------------

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
        // res.render('admin/booked',{layout:'admin_layout'})
        orders.find({})
        .then(orders =>{
            // res.json(orders)
            
            // users.find({_id:{$in:}})
            // .then(users =>{
                
            // })
            res.render('admin/booked',{layout:'admin_layout',
                orders:mutipleMogooseToObject(orders)
            })
        })
    }


    // -----------------------product----------------------------------------

    addNewProduct(req,res,next){
        categorys.find({})
        .then(categorys =>{
            res.render('admin/add_new_product',{layout:'admin_layout',
                categorys:mutipleMogooseToObject(categorys)
            });
        })
    }

    // [post]/admin/store-product
    storeProduct(req,res,next){
        // console.log(req.query);
        // res.json(req.file);
        // res.json('hello')
        const products_save = new products({
            name        :req.body.name,
            createdAt   :time_now,
            count       :0,
            booked      :0,
            priceOld    :req.body.priceOld,
            price       :req.body.price,
            idCategory  :req.body.category,
            size        :req.body.size,
            img         :path_product+req.file.filename,
            promo       :req.body.promo,
            temp        :""
        });
        products_save.save();
        res.redirect('/admin/view-products');

        
    }

    viewProducts(req,res,next){
        products.find({})
        .then(products =>{
            res.render('admin/view_products',{layout:"admin_layout",
                products:mutipleMogooseToObject(products),
                categorys:mutipleMogooseToObject(req.categorys)
            });
        })
    }


    //[get]/update/:slug

    updateProducts(req,res,next){
        // products.findById({})
        categorys.find({})
        .then(categorys =>{
            products.findOne({slug:req.params.slug})
            .then(product =>{
                // res.json(product)
                res.render("admin/update_product",{
                    layout:"admin_layout",
                    product:mongoosesToObject(product),
                    categorys:mutipleMogooseToObject(categorys)
                })
                // res.render('admin/update_product',{
                //  layout:"admin_layout",
                //  products:mongoosesToObject(product)})
            })
        })
       
    }


    //[post]/update/:slug

    async StoreUpdateProducts(req,res,next){

        // res.json(req.params.slug);

     
            try {
                await products.findOneAndUpdate({slug:req.params.slug},
                    {
                        name        :req.body.name,               
                        count       :0,
                        booked      :0,
                        priceOld    :req.body.priceOld,
                        price       :req.body.price,
                        idCategory  :req.body.category,
                        size        :req.body.size,
                        img         :path_product+req.file.filename,
                        promo       :req.body.promo,
                        temp        :""
                    }
                )
            } catch (error) {
                await products.findOneAndUpdate({slug:req.params.slug},
                    {
                        name        :req.body.name,               
                        count       :0,
                        booked      :0,
                        priceOld    :req.body.priceOld,
                        price       :req.body.price,
                        idCategory  :req.body.category,
                        size        :req.body.size,
                       
                        promo       :req.body.promo,
                        temp        :""
                    }
                )
                

            }
      
            

        products.findOne({slug:req.params.slug})
            .then(product =>{
                res.json(product)
            })

            
    }



    // ----------------------------categorys---------------------
    viewCategory(req,res,next){
        categorys.find({})
        .then(categorys =>{
            res.render('admin/view_category',{layout:'admin_layout',
                categorys:mutipleMogooseToObject(categorys)
            })

        })
        // res.render('admin/view_category',{layout:'admin_layout'})
    }

    storeCategory(req,res,next){
        // res.json(req.body);
        const category_save = new categorys({
            name        :req.body.mycategory,
            createdAt   :time_now,
            count       :0,
            booked      :0,
            temp        :""
        });
        category_save.save();
        res.redirect('/admin/view-categorys')
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

    // [post]/store-user
    storeUser(req,res,next){
        // res.json(req.body);
        const user_save = new users({
            name       :req.body.name,
            email      :req.body.email,
            phone      :req.body.phone,
            pass       :req.body.passWord,
            avatar     :"",
            createdAt  :time_now,
            booked     :'0',
            temp       :'0',
            role       :'0'
        });
        user_save.save();
        res.redirect('/admin/view-users');
    }


}

=======
const { mutipleMogooseToObject } = require('../util/mongoose');
const { mongoosesToObject }     = require('../util/mongoose');

const users         = require('../model/users');
const categorys     = require('../model/categorys');
const products      =require('../model/products');
const orders        = require('../model/orders');

var now = new Date();
var date = now.toISOString().slice(0,10);

// now.format("dd/MM/yyyy hh:mm TT");
var time_now = date+" "+ now.getHours()+":"+now.getMinutes();
var path_product = './img/Products/';

class admin{

// *************************middleware data****************************

    middlewareCategory(req,res,next){
        categorys.find({})
        .then(categorys =>{
            req.categorys = categorys;
            next();
        })
        .catch(err =>{
            res.json("Loi middleware category!");
        })
    }






    home(req,res,next){
        products.find({}).limit(10)
        .then(products =>{
            res.render('admin/home',{layout:"admin_layout",name:"trang",
                products:mutipleMogooseToObject(products)
            })
        })
    }



    // -----------------------------------------------order------------------------

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
        // res.render('admin/booked',{layout:'admin_layout'})
        orders.find({})
        .then(orders =>{
            // res.json(orders)
            
            // users.find({_id:{$in:}})
            // .then(users =>{
                
            // })
            res.render('admin/booked',{layout:'admin_layout',
                orders:mutipleMogooseToObject(orders)
            })
        })
    }


    // -----------------------product----------------------------------------

    addNewProduct(req,res,next){
        categorys.find({})
        .then(categorys =>{
            res.render('admin/add_new_product',{layout:'admin_layout',
                categorys:mutipleMogooseToObject(categorys)
            });
        })
    }

    // [post]/admin/store-product
    storeProduct(req,res,next){
        // console.log(req.query);
        // res.json(req.file);
        // res.json('hello')
        const products_save = new products({
            name        :req.body.name,
            createdAt   :time_now,
            count       :0,
            booked      :0,
            priceOld    :req.body.priceOld,
            price       :req.body.price,
            idCategory  :req.body.category,
            size        :req.body.size,
            img         :path_product+req.file.filename,
            promo       :req.body.promo,
            temp        :""
        });
        products_save.save();
        res.redirect('/admin/view-products');

        
    }

    viewProducts(req,res,next){
        products.find({})
        .then(products =>{
            res.render('admin/view_products',{layout:"admin_layout",
                products:mutipleMogooseToObject(products),
                categorys:mutipleMogooseToObject(req.categorys)
            });
        })
    }







    // ----------------------------categorys---------------------
    viewCategory(req,res,next){
        categorys.find({})
        .then(categorys =>{
            res.render('admin/view_category',{layout:'admin_layout',
                categorys:mutipleMogooseToObject(categorys)
            })

        })
        // res.render('admin/view_category',{layout:'admin_layout'})
    }

    storeCategory(req,res,next){
        // res.json(req.body);
        const category_save = new categorys({
            name        :req.body.mycategory,
            createdAt   :time_now,
            count       :0,
            booked      :0,
            temp        :""
        });
        category_save.save();
        res.redirect('/admin/view-categorys')
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

    // [post]/store-user
    storeUser(req,res,next){
        // res.json(req.body);
        const user_save = new users({
            name       :req.body.name,
            email      :req.body.email,
            phone      :req.body.phone,
            pass       :req.body.passWord,
            avatar     :"",
            createdAt  :time_now,
            booked     :'0',
            temp       :'0',
            role       :'0'
        });
        user_save.save();
        res.redirect('/admin/view-users');
    }
}

>>>>>>> bbf8e4cb3a63354c4dadc95e587bbd7331ea4b20
module.exports = new admin;
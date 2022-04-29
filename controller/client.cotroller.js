const { mutipleMogooseToObject } = require('../util/mongoose');
const { mongoosesToObject }     = require('../util/mongoose');
var jwt             = require('jsonwebtoken');
const users         = require('../model/users');
const products      = require('../model/products');
const categorys     = require('../model/categorys');
const orders        = require('../model/orders');
const carts          = require('../model/cart');
const { use } = require('../routes/admin.route');


var now = new Date();
var date = now.toISOString().slice(0,10);

// now.format("dd/MM/yyyy hh:mm TT");
var time_now = date+" "+ now.getHours()+":"+now.getMinutes();
var path_avatar = './img/avatar/';

class siteControllers{


    // authentication
    getSignIn(req,res,next){
        res.render('login',{layout:false});
    }

    postSignIn(req,res,next){
        // res.json(req.body);

        var email = req.body.email;
        var password = req.body.password;


        users.findOne({
            email:email,
            pass:password
        })
        .then(data =>{
            if(data){
                // res.json(data);
                var token = jwt.sign({_id:data._id},'jwt');
                res.json({
                    message:'thanh cong',
                    token:token
                });
                // console.log(token);
            }else{
                res.redirect('/sign-in');

            }
        })
        .catch(err =>{
            res.status(500).json('loi server')
        })
    }


    getSignUp(req,res,next){
        res.render('register',{layout:false});
        // // res.render('login',{layout:false});
        // res.json('hello');

    }

    postSignUp(req,res,next){

        // res.json(req.file);
        // res.json(req.body);
        
        const user = new users({
            name       :req.body.name,
            email      :req.body.email,
            phone      :req.body.phone,
            pass       :req.body.passWord,
            avatar     :path_avatar+req.file.filename,
            createdAt  :time_now,
            booked     :'0',
            temp       :'0',
            role       :'0'
        })

        user.save();
        res.redirect('/');
        
    }




    home(req,res,next){
        products.find({})
        .then(products =>{
            res.render('home',{
                products:mutipleMogooseToObject(products)
            });
        })
    }
    test(req,res,next){
        res.render('client/detail_product');
    }

    // product
    products(req,res,next){
        products.find({})
        .then(products =>{
            res.render('client/products',{
                products:mutipleMogooseToObject(products)
            })
        })
    }

    detail(req,res,next){
        // res.json(req.params.slug);
        products.findOne({slug:req.params.slug})
        .then(product =>{
            res.render('client/detail_product',{
                layout:"main",
                product:mongoosesToObject(product)
            });
        })
        // res.render('client/detail_product');
    }

    cart(req,res,next){
        carts.findOne({idUser:req.cookies._id})
        .then(carts =>{
            // res.json(carts);
            // var tam = []
            // var products;
            products.find({_id:{$in:carts.idProducts}})
            .then(products=>{
                // res.json(products[0])
                // res.json(carts.count.length);
                var len = carts.count.length;
                for (let index = 0; index < len; index++) {
                    products[index].temp = carts.count[index]
                    
                }
                // res.json(products)
                res.render('client/cart',{
                    products:mutipleMogooseToObject(products)
                });
            })
           
        })
        .catch(()=>{
            res.render('client/cart');
        })
    }

    // [post]/cart
    storeCart(req,res,next){
        // var cookieTemp = req.headers?.cookie;
        // var cookies = cookieTemp.split(';');

        // res.json(cookies[1]);
        // res.json(req.cookies._id);
        // var tam = 1;
 
        carts.findOne({idUser:req.cookies._id})
        .then( cart=>{
            // res.json(cart)
            // tam = 0;
            


           
            var len = cart.idProducts.length; 
            // res.json( cart.idProducts[0])
            var flag = 0;
            for (let index = 0; index < len; index++) {
                if(req.body.idProduct == cart.idProducts[index]){
                    console.log(cart.idProducts[index])
                    flag = 1;
                   
                    break;
                    
            
                }
            }

            if(flag == 1){
                // res.json('da co san pham trong gio hang');
                res.redirect('/cart');

            }else{
                
                cart.idProducts.push(req.body.idProduct);
                cart.count.push(req.body.amount);
                cart.save();
                res.redirect('/cart');
            }

            

            
            
        })
        .catch( err=>{
            
                const cart_save = new carts({
                    idUser      :req.cookies._id,
                    idProducts  :req.body.idProduct,
                    createdAt   :time_now,
                    count       :req.body.amount
                })
                cart_save.save();
                // res.redirect('/');
                // next();
                // res.json('tam')
                res.redirect('/cart')
       
            
        });

        
        
    }
   
    checkOrder(req,res,next){
        // res.render('client/check_order');

        carts.findOne({idUser:req.cookies._id})
        .then(carts =>{
            // res.json(carts);
            // var tam = []
            // var products;
            products.find({_id:{$in:carts.idProducts}})
            .then(products=>{
                // res.json(products[0])
                // res.json(carts.count.length);
                var len = carts.count.length;
                for (let index = 0; index < len; index++) {
                    products[index].temp = carts.count[index]
                    
                }

                users.findById({_id:req.cookies._id})
                .then(users =>{
                    // res.json(users)
                    res.render('client/check_order',{
                        products:mutipleMogooseToObject(products),
                        user    :mongoosesToObject(users)
                    });
                })
               
            })
           
        })
        .catch(()=>{
            res.render('client/cart');
        })
    }

    // [post]/store-order

    storeOrder(req,res,next){
        // res.json(req.body);
        const order_save = new orders({
            customerName        :req.body.customerName,
            customerAddress     :req.body.customerAddress,
            customerPhone       :req.body.customerPhone,
            customerEmail       :req.body.customerEmail,
            createdAt           :time_now,
            state               :0,
            idProducts          :req.body.idProducts,
            count               :req.body.count,
            idUser              :req.cookies._id,
            temp1               :"",
            nameProducts        :req.body.nameProducts

        });

        order_save.save();

        carts.deleteOne({idUser:req.cookies._id})
        .then(()=>{
            res.render('notification');
        })
        // res.render('notification');
      
        

    }
    
}

module.exports = new siteControllers;
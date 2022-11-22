var express = require('express');
var router = express.Router();

var admin = require('../controller/admin.cotroller');
var check_admin = require('../middleware/check_admin');
var checksigned = require('../middleware/auth');

// express multer 
const multer  = require('multer')
const product_img = multer({ dest: 'public/img/Products/' })




// product
router.get('/add-new-product',check_admin,admin.addNewProduct);

router.get('/view-products',check_admin,check_admin,
                            admin.middlewareCategory,
                            admin.viewProducts);
router.post('/store-new-product',check_admin,product_img.single('img'),
                                admin.storeProduct);

router.get('/update-product/:slug',checksigned,
                                check_admin,
                                admin.updateProducts);

router.post('/store-update-product/:slug',checksigned,check_admin,product_img.single('img'),
                                admin.StoreUpdateProducts);

// order
router.get('/wait-for-confirmation',check_admin,admin.orderWaitConfirm); 

router.get('/booked',check_admin,admin.booked);
router.get('/add-new-order',check_admin,admin.addNewOrder); 
router.post('/store-order',check_admin,admin.storeOrder); 


// category
router.get('/view-categorys',check_admin,admin.viewCategory);
router.post('/store-category',check_admin,admin.storeCategory);


// user
router.get('/view-users',check_admin,admin.viewUser);
router.get('/add-new-user',check_admin,admin.addNewUser);
router.post('/store-user',check_admin,admin.storeUser);

router.get('/',checksigned,check_admin,admin.home);




module.exports = router;
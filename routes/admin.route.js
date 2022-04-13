var express = require('express');
var router = express.Router();

var admin = require('../controller/admin.cotroller');



// get home page

// product
router.get('/add-new-product',admin.addNewProduct);
router.get('/view-products',admin.viewProducts);

// order
router.get('/wait-for-confirmation',admin.orderWaitConfirm); 

router.get('/booked',admin.booked);
router.get('/add-new-order',admin.addNewOrder); 
router.post('/store-order',admin.storeOrder); 


// category
router.get('/view-categorys',admin.viewCategory);


// user
router.get('/view-users',admin.viewUser);
router.get('/add-new-user',admin.addNewUser);

router.get('/',admin.home);




module.exports = router;
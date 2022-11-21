<<<<<<< HEAD
var express = require('express');
var router = express.Router();

var jwt = require('jsonwebtoken');
var checksigned = require('../middleware/auth');

const multer  = require('multer');
const avatar = multer({ dest: 'public/img/avatar/' });


var clientCotroller = require('../controller/client.cotroller');
const adminCotroller = require('../controller/admin.cotroller');

// athentication
router.get('/sign-in',clientCotroller.getSignIn);
router.post('/sign-in',clientCotroller.postSignIn);

// products
router.get('/products',clientCotroller.products);


router.get('/sign-up',clientCotroller.getSignUp);
router.post('/store-user',avatar.single('avatar'),
                        clientCotroller.postSignUp);

// get home page
router.get('/detail/:slug',clientCotroller.detail);

router.get('/cart',checksigned,clientCotroller.cart);
router.post('/cart',checksigned,clientCotroller.storeCart);

router.get('/check-order',checksigned,clientCotroller.checkOrder);
router.post('/store-order',checksigned,clientCotroller.storeOrder);

router.get('/',clientCotroller.home);
router.get('/test',clientCotroller.test);





=======
var express = require('express');
var router = express.Router();

var jwt = require('jsonwebtoken');
var checksigned = require('../middleware/auth');

const multer  = require('multer');
const avatar = multer({ dest: 'public/img/avatar/' });


var clientCotroller = require('../controller/client.cotroller');
const adminCotroller = require('../controller/admin.cotroller');

// athentication
router.get('/sign-in',clientCotroller.getSignIn);
router.post('/sign-in',clientCotroller.postSignIn);

// products
router.get('/products',clientCotroller.products);


router.get('/sign-up',clientCotroller.getSignUp);
router.post('/store-user',avatar.single('avatar'),
                        clientCotroller.postSignUp);

// get home page
router.get('/detail/:slug',clientCotroller.detail);

router.get('/cart',checksigned,clientCotroller.cart);
router.post('/cart',checksigned,clientCotroller.storeCart);

router.get('/check-order',checksigned,clientCotroller.checkOrder);
router.post('/store-order',checksigned,clientCotroller.storeOrder);

router.get('/',clientCotroller.home);
router.get('/test',clientCotroller.test);





>>>>>>> bbf8e4cb3a63354c4dadc95e587bbd7331ea4b20
module.exports = router;
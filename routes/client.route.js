var express = require('express');
var router = express.Router();

var clientCotroller = require('../controller/client.cotroller');



// get home page
router.get('/detail',clientCotroller.detail);

router.get('/cart',clientCotroller.cart);

router.get('/check-order',clientCotroller.checkOrder);

router.get('/',clientCotroller.home);
router.get('/test',clientCotroller.test);





module.exports = router;
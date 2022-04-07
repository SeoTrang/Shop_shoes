var express = require('express');
var router = express.Router();

var admin = require('../controller/admin.cotroller');



// get home page
router.get('/',admin.home);






module.exports = router;
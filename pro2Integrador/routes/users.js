var express = require('express');
const userController = require('../controllers/userController');
var router = express.Router();

/* GET users listing. */

router.get('/register', userController.register );


router.get('/login', userController.login);


module.exports = router;

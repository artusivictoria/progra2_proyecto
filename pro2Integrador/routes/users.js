var express = require('express');
const userController = require('../controllers/userController');
var router = express.Router();

/* GET users listing. */

router.get('/register', userController.register );
//FALTA REGISTER POST

router.post('/login', userController.login);
//FALTA LOGIN GET 

router.post("/logout", userController.logout)

module.exports = router;

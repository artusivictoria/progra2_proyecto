var express = require('express');
const userController = require('../controllers/userController');
var router = express.Router();

/* GET users listing. */

router.get('/register', userController.register );


router.post('/login', userController.login);

router.post("/logout", userController.logout)

module.exports = router;

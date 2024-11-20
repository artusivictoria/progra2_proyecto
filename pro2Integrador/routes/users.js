var express = require('express');
const userController = require('../controllers/userController');
var router = express.Router();

/* GET users listing. */

/* crear sufijos Registro*/
router.get ('/register', userController.register);

router.post("/register", userController.registerPost)


/* crear sufijos Login*/
router.get ('/login', userController.login);

router.post("/login", userController.loginPost)


router.post("/logout", userController.logout)

module.exports = router;

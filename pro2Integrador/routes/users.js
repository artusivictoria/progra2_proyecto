var express = require('express');
const userController = require('../controllers/userController');
var router = express.Router();

/* GET users listing. */

/* crear sufijos Registro*/
router.get ('/register', userController.register); //obs. este sirve para mostrar el formulario de login y el de abajo, de post, sirve para procesar el formulario de login

router.post("/register", userController.registerPost)


/* crear sufijos Login*/
router.get ('/login', userController.login);

router.post("/login", userController.loginPost)

/* sufijo logout*/

router.post("/logout", userController.logout)

router.get ('/perfil/:idPerfil', userController.perfil);

router.get ('/miperfil/:idPerfil', userController.miPerfil);


module.exports = router;

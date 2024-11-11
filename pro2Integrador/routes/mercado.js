var express = require('express');
const mercadoController = require('../controllers/mercadoController');
var router = express.Router();

/* GET home page. */
router.get('/', mercadoController.index);

router.get('/register', mercadoController.register );

router.get('/login', mercadoController.login);

router.get('/product', mercadoController.product);

module.exports = router;
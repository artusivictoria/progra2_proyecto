var express = require('express');
const mercadoController = require('../controllers/productoController');
var router = express.Router();

/* GET home page. */
router.get('/', mercadoController.index);

router.get('/product', mercadoController.product);

module.exports = router;
var express = require('express');
const mercadoController = require('../controllers/productoController');
var router = express.Router();

/* GET home page. */
router.get('/', mercadoController.index);

router.get('/product', mercadoController.product);

/* GET crear producto */
router.get('/register', productoController.showFormCreate);
//ruta de post producto
router.post('/register' , prroductoController.store)


module.exports = router;
var express = require('express');
var router = express.Router();

//const mercadoController = require('../controllers/productoController');
const productoController = require('../controllers/productoController');


/* GET home page. */
router.get('/', productoController.index);

router.get('/product/:idProducto', productoController.product);




/* GET crear producto */
router.get('/registerProd', productoController.showFormCreate);

//ruta de post producto
router.post('/registerProd' , productoController.store)

/* GET buscar producto */
router.get('/busqueda', productoController.search);

module.exports = router;
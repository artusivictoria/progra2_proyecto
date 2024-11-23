var express = require('express');
var router = express.Router();


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

//router.get('/update/:id', productoController.showFormUpdate);
//Cuando proceso datos por formulario, necesito ruta get(lista) y ruta POST:
//router.post('/update' , productoController.update)


module.exports = router;
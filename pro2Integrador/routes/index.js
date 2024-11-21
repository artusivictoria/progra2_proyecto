var express = require('express');
var router = express.Router();

const productoController = require('../controllers/productoController');

/* GET home page. */
router.get('/', productoController.index);

module.exports = router;
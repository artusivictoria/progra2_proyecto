var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("entrar a /mercado en el navegador");
});

module.exports = router;
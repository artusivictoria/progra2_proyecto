const op= db.Sequelize.Op;
const db = require("../database/models"); //ESTO TODAVIA NO EXISTE LO TENGO QUE HACER
const { where } = require('sequelize');

const productoController = {
    index: (function(req, res){

        res.render('index')

    }),

    product: (function(req, res){
        res.render('product')
    }),

    showFormCreate: function (req, res) {
        return res.render("product-add");
      },

    store: function (req, res) {
        //proceso los datos que vienen del formulario
    
        let producto = req.body;
        //return res.send(producto)
    
        db.Product.create(producto)
    
        .then(function(results){
          return res.redirect('/mercado');
        })
        .catch(function (err) {
          console.log(err)
        })
    
    
        //primer paso siempre veo los datos que vienen del formulario crear
        //return res.send(req.body) 
      },

      search: function (req,res) {

        let qs = req.query.producto; 
    
    
        let filtrado = {
            where: [{nombre: {[op.like]: `%${qs}%`}}],
            order: [["createdAt", "DESC"]],
            offset: 1
        }
        
    
        db.Product.findAll(filtrado)
        .then(function (results) {
    
          return res.send(results);
        })//si todo sale bien
        .catch( (err) => { //en vez de err podes ponerle lo que se te cante
          return console.log(err) ;
        })
    
      }
    
    
};

module.exports = productoController;

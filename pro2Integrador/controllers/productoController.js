const db = require('../database/models')
const op= db.Sequelize.Op;
const { where } = require('sequelize');


//Si te tira error de listaProductos no esta definido: poner res.send en index en vez del return. poner /mercado en localhost. volver poner el return del render
const productoController = {
    index: (function(req, res){

      db.Product.findAll()
      
      .then(function (result) {
        //res.send(result)
        return res.render("index", { listaProductos: result })
      })
      .catch(function (err) {
        console.log(err);
      });


    }),


    product: (function(req, res){

      let productoBuscado = req.params.idProducto;

      let filtrado = {
        include: {
          all: true, //todas las relaciones
          nested: true //y las relaciones anidadas
        }
      }

      

      db.Product.findByPk(productoBuscado, filtrado)
      .then(function (results) {
        //return res.send(results)
        return res.render("product", { product: results });
      })
      .catch(function (err) {
        console.log(err);
      });

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
          //return res.send(results)
          return res.redirect('/mercado');
        })
        .catch(function (err) {
          res.send('Hubo un error al guardar el producto.')
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
            //offset: 1
        }
        
    
        db.Product.findAll(filtrado)
        .then(function (results) {

          return res.render("search-results", { prodBuscado: results })
    
          //return res.send(results);
        })//si todo sale bien
        .catch( (err) => { //en vez de err podes ponerle lo que 
          return console.log(err) ;
        })
    
      }


/*
      showFormUpdate: function(req,res){
        let id = req.params.id
    
        db.Product.findByPk(id)
        .then(function(results){
        return res.render('updateProduct' , {product :results}) 
        })
        .catch(function (err) {
          console.log(err)
        })
     
        //return res.send(id) para comprobar si me trae el id. 
    
       
    
      },
      
      update: function(req,res){
        let newInfo = req.body
        let id = req.body.id

        let filtrado = {where: [{id:id}]}
    
        db.Product.update(newInfo, filtrado)
    
        .then(function(result){
          return res.redirect('/mercado') 
          })
        .catch(function (err) {
          console.log(err)
          })
    
    
        //res.send(newinfo)
    
      }


    
  */
};

module.exports = productoController;

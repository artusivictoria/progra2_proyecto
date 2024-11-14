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
      }


};

module.exports = productoController;

const productoController = {
    index: (function(req, res){

        res.render('index')

    }),

    product: (function(req, res){
        res.render('product')
    })

};

module.exports = productoController;

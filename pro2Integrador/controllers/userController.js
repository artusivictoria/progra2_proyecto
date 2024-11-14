const db = require("../database/models"); //ESTO TODAVIA NO EXISTE LO TENGO QUE HACER
const bcryptjs = require('bcryptjs');

const userController = {
    register: (function(req, res){

        res.render('register')

    }),

    login: (function(req, res){
        let form = req.body;   //Para obtener los datos del formulario en el controlador usaremos la propiedad  body dentro del objeto request: req.body que es un objeto literal. 
        //return res.send(form) //para mostrar los datos 
        
        let filtro = {
            where:{email: form.email} //VER BIEN ESTOOO
        }

        db.User.findOne(filtro)         //Obs. tenes qeu ir a la base de datos, buscar un mail que este ahi, y poner ese mail en la pagina web. Osea te tnees que haber registrado con ese mail previamente.igl para esto esta la validacion
                                        //Obs2. PARA USAR ESTO NECESITO EL MODELO USER QUE VOY A HACER
        .then(function(results){

            if (!results) {
                return res.send("no hay mail, este mail no existe")
            } else {
                
                let check =  bcryptjs.compareSync(form.contrasenia, results.contrasenia);  //compareSync() retorna un booleano. viene del paquete bcrypt y funciona para comparar un texto plano contra un hash. 
                //PREG contrasenia y password depneden del nombre del form y la otra de elnombre que le das en la columna de la base de datos NO???????
                if (check) {
                    //return res.send("mail y contrasenia son correctos") 
                    req.session.user = results.dataValues;  //los datos consisos que tenga la tabla
                    return res.redirect("/"); //redirige al usuario a la página principal


                } else {
                    return res.send("contrasenia incorrecta");
                }
            }
        })
        .catch (function(err){
          console.log(err)
        })
       
      
    }),
    logout: function(req,res) {
        req.session.destroy();
        return redirect("/")
    }

};

module.exports = userController;
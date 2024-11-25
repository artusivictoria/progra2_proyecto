const db = require('../database/models');
const bcryptjs = require('bcryptjs');
const { where } = require('sequelize'); //obs. no la usamos 

const userController = {
    register: (req, res)=>{
        return res.render("register")
    },
    login: (req, res)=>{

        if (req.session.user) {
      
            return res.redirect('/mercado');
        }
        
          return res.render("login");
            
    },
    registerPost: function(req, res) {
        let form = req.body;
        
        // Consigna de validar campos obligatorios
        if (!form.nombreUsuario || form.nombreUsuario === "") {
            return res.send("El campo Nombre de usuario es obligatorio! :)");
        }
        if (!form.email || form.email === "") {
            return res.send("El campo Email es obligatorio  :)");
        }
        if (!form.contrasenia || form.contrasenia === "") {
            return res.send("El campo Contraseña es obligatorio :)");
        }
    
        // Consigna de validar duplicado de Email
        db.User.findOne({ where: { email: form.email } })
            .then(userFound => {
                if (userFound) {
                    return res.send("El Email ingresado ya está registrado.");
                }
    
                //return res.send(form) //para mostrar los datos que me esta enviando el usuario
                form.contrasenia = bcryptjs.hashSync(form.contrasenia, 10); // ES CONTRASEÑIA, tiene que ser igual a base de datos.
                db.User.create(form)
                    .then(function(results) {
                        return res.redirect("/users/login");
                    })
                    .catch(function(err) {
                        console.log(err);
                    });
            }) // <--- Este es el paréntesis que faltaba cerrar.
            .catch(function(err) {
                console.log(err);
            });
    },
    loginPost: function(req, res){
        let form = req.body;   //Para obtener los datos del formulario en el controlador usaremos la propiedad  body dentro del objeto request: req.body que es un objeto literal. 
        //return res.send(form) //para mostrar los datos 
        
        let filtro = {
            where:{email: form.email} //VER BIEN ESTOOO
        }

        db.User.findOne(filtro)         //Obs. tenes qeu ir a la base de datos, buscar un mail que este ahi, y poner ese mail en la pagina web. Osea te tnees que haber registrado con ese mail previamente.igl para esto esta la validacion
                                        //Obs2. con esto busca al usuario en la base de datos mercado
        .then(function(results){

            if (!results) {
                return res.send("no hay mail, este mail no existe")
            } else {
                
                let check =  bcryptjs.compareSync(form.contrasenia, results.contrasenia);  //compareSync() retorna un booleano. viene del paquete bcrypt y funciona para comparar un texto plano contra un hash. 
                //obs. El campo password que envio desde el formulario(que defino en mi ejs de login) debe coincidir con el nombre que uso en el controlador.
                if (check) {
                    //return res.send("mail y contrasenia son correctos") 
                    req.session.user = results.dataValues;  //los datos consisos que tenga la tabla, es decir, cn esto guardo los datos del usuario en la sesion //obs. req.session.user permite que el usuario logueado est disponible en cualquier controlador
                    return res.redirect("/mercado"); //redirige al usuario a la página principal


                } else {
                    return res.send("contrasenia incorrecta");
                }
            }
        })
        .catch (function(err){
          console.log(err)
        })
       
      
    },


    logout: function(req,res) {
        req.session.destroy();
        return res.redirect('/')
    }, 

    perfil: function(req,res) {

    let idPerfil = req.params.idPerfil;

      let filtrado = {
        include: {
          all: true, //todas las relaciones
          nested: true //y las relaciones anidadas
        }
      }

      
      db.Product.findByPk(idPerfil, filtrado)
      .then(function (results) {
        //return res.send(results)
        return res.render("perfil", { perfilInfo: results });
      })
      .catch(function (err) {
        console.log(err);
      });
        //return res.render("perfil")
       
    }, 

    miPerfil: function(req,res) {
        let idPerfil = req.params.idPerfil
        db.User.findByPk(idPerfil)
      .then(function (results) {
        return res.send(results)
        
      })
      .catch(function (err) {
        console.log(err);
      });
      
        
    }

};

module.exports = userController;

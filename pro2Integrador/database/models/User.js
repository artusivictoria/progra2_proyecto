module.exports = function(sequelize, datatypes){
    
    //alias para llamarlo desde controller
    let alias = 'User'

    let cols = {
        id: {

            autoIncrement: true,
            primaryKey: true,
            type: datatypes.INTEGER

        },

        email: {
            type: datatypes.STRING(100)
        },

        nombreUsuario: {
            type: datatypes.STRING(100)

        },

        contrasenia: {
            type: datatypes.STRING(100)

        }, 

        createdAt: {
            type: datatypes.DATE
        },

        updatedAt: {
            type: datatypes.DATE
        },

        deletedAt: {
            type: datatypes.DATE
        }

    }

    let config = {
        tablename: 'users',
        timestamps: true ,
        underscore: false 
    }

    const User = sequelize.define(alias, cols, config)
    //Como Un producto tiene/pertenece a un usuario que publica ese producto, Un usuario puede haber publicado muchos productos
    User.associate = function (models) {
        User.hasMany(models.Product, {
            as: "product",    //LE PUEDO PONER EL NOMBRE QEU QUIERA              
            foreignKey: "idUsers", //Pongo la foreign key que tenia en la base de datos en la tabla de Products. no importa que en Users no este esta foreign key
          
          
        }
        ) 
    }

    return User;

}

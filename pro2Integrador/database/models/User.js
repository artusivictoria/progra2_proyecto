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

    return User;

}

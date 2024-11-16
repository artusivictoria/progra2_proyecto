module.exports = function(sequelize, datatypes){
    
    //alias para llamarlo desde controller
    let alias = 'Product'

    let cols = {
        id: {

            autoIncrement: true,
            primaryKey: true,
            type: datatypes.INTEGER

        },

        imagen: {
            type: datatypes.STRING(100)
        },

        nombre: {
            type: datatypes.STRING(100)

        },

        descripcion: {
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
        },

        idUsers: {
            type: datatypes.INTEGER
        }

    }

    let config = {
        tablename: 'products',
        timestamps: true ,
        underscore: false 
    }


    const Product = sequelize.define(alias, cols, config)

    Product.associate = function(models){
        
        Product.belongsTo(models.User , {
            as: "user", //nombre del modelo a relacionar
            foreignKey: "idUsers" //la columna que relaciona las dos tablas
        } );
    };


    return Product;

};
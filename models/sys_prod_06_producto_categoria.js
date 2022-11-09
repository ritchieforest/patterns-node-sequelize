const { DataTypes, Model} = require('sequelize');
const sequelize = require("../database");
const sys_prod_01_products=require("./sys_prod_01_products")
const sys_prod_02_categoria=require("./sys_prod_02_categoria")
class sys_prod_06_producto_categoria extends Model {}

sys_prod_06_producto_categoria.init({
// Model attributes are defined here
    id_sysprod06: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    fk_sysprod01:{
        type: DataTypes.INTEGER,
        references: {
            model: sys_prod_01_products,
            key: 'id_sysprod01',
        }
    },
    fk_sysprod02:{
        type: DataTypes.INTEGER,
        references: {
            model: sys_prod_02_categoria,
            key: 'id_sysprod02',
        }
    },
    sysprod06_precio_compra:{
        type:DataTypes.DECIMAL(10,2),
        allowNull:false,
    },
    sysprod06_porcentaje:{
        type:DataTypes.DECIMAL(10,2),
        allowNull:false,
    },
}, {
    sequelize, // We need to pass the connection instance
    createdAt: 'sysprod06_aud_fecha_alta',
    updatedAt: 'sysprod06_aud_fecha_modi'
});
module.exports=sys_prod_06_producto_categoria;
const { DataTypes, Model } = require('sequelize');
const sequelize = require("../database");
const sys_prod_06_producto_categoria = require('./sys_prod_06_producto_categoria');

class sys_prod_03_stock extends Model {}

sys_prod_03_stock.init({
// Model attributes are defined here
    id_sysprod03: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    sysprod03_stock_minimo:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    sysprod03_stock_maximo:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    sysprod03_stock:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    sysprod03_baja:{
        type:DataTypes.BOOLEAN,
        allowNull:false,
    },
    fk_sysprod06:{
        type: DataTypes.INTEGER,
        references: {
            model: sys_prod_06_producto_categoria,
            key: 'id_sysprod06',
        }
    },
}, {
    sequelize, // We need to pass the connection instance
    createdAt: 'sysprod03_aud_fecha_alta',
    updatedAt: 'sysprod03_aud_fecha_modi'
});
module.exports=sys_prod_03_stock;
const { DataTypes, Model } = require('sequelize');
const sequelize = require("../database");
const sys_targ_03_config_empresa = require('./sys_targ_03_config_empresa');
const sys_prod_06_producto_categoria = require('./sys_prod_06_producto_categoria');

class sys_prod_08_precio_productos extends Model {}

sys_prod_08_precio_productos.init({
// Model attributes are defined here
    id_sysprod08: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    fk_systarg03:{
        type: DataTypes.INTEGER,
        references: {
            model: sys_targ_03_config_empresa,
            key: 'id_systarg03',
        }
    },
    fk_sysprod06:{
        type: DataTypes.INTEGER,
        references: {
            model: sys_prod_06_producto_categoria,
            key: 'id_sysprod06',
        }
    },
    sysprod08_precio:{
        type:DataTypes.DECIMAL(10,2),
        allowNull:false,
    },
}, {
    sequelize, // We need to pass the connection instance
    createdAt: 'sysprod08_aud_fecha_alta',
    updatedAt: 'sysprod08_aud_fecha_modi'
});
module.exports=sys_prod_08_precio_productos;
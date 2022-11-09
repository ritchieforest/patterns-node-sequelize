const { DataTypes, Model } = require('sequelize');
const sequelize = require("../database");
const sys_comp_01_compras = require('./sys_comp_01_compras');
const sys_prod_07_producto_proveedor = require('./sys_prod_07_producto_proveedor');
const sys_user_02_usuarios = require('./sys_user_02_usuarios');

class sys_comp_02_detalle_compra extends Model {}

sys_comp_02_detalle_compra.init({
// Model attributes are defined here
    id_syscomp02: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    fk_syscomp01: {
        type: DataTypes.INTEGER,
        references: {
            model: sys_comp_01_compras,
            key: 'id_syscomp01',
        }
    },
    fk_sysprod07: {
        type: DataTypes.INTEGER,
        references: {
            model: sys_prod_07_producto_proveedor,
            key: 'id_sysprod07',
        }
    },
    fk_sysuser02: {
        type: DataTypes.INTEGER,
        references: {
            model: sys_user_02_usuarios,
            key: 'id_sysuser02',
        }
    },
    syscomp02_observacion:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    syscomp02_precio:{
        type:DataTypes.DECIMAL(10,2),
        allowNull:false,
    },
    syscomp02_cantidad:{
        type:DataTypes.INTEGER,
        allowNull:false,
    },
    syscomp02_estado:{
        type:DataTypes.BOOLEAN,
        allowNull:false,
    },
}, {
    sequelize, // We need to pass the connection instance
    createdAt: 'syscomp02_aud_fecha_alta',
    updatedAt: 'syscomp02_aud_fecha_modi'
});
 
module.exports=sys_comp_02_detalle_compra;
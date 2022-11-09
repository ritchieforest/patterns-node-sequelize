const { DataTypes, Model } = require('sequelize');
const sequelize = require("../database");
const sys_prod_07_producto_proveedor = require('./sys_prod_07_producto_proveedor');
const sys_targ_03_config_empresa = require('./sys_targ_03_config_empresa');
const sys_user_02_usuarios = require('./sys_user_02_usuarios');
const sys_vent_02_venta = require('./sys_vent_02_venta');


class sys_vent_03_detalle_venta extends Model {}

sys_vent_03_detalle_venta.init({
// Model attributes are defined here
    id_sysvent03: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    fk_sysvent02: {
        type: DataTypes.INTEGER,
        references: {
            model: sys_vent_02_venta,
            key: 'id_sysvent02',
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
    fk_systarg03:{
        type: DataTypes.INTEGER,
        references: {
            model: sys_targ_03_config_empresa,
            key: 'id_systarg03',
        }
    },
    sysvent03_observacion:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    sysvent03_precio:{
        type:DataTypes.DECIMAL(10,2),
        allowNull:false,
    },
    sysvent03_cantidad:{
        type:DataTypes.INTEGER,
        allowNull:false,
    },
    sysvent03_estado:{
        type:DataTypes.BOOLEAN,
        allowNull:false,
    },

}, {
    sequelize, // We need to pass the connection instance
    createdAt: 'sysvent03_aud_fecha_alta',
    updatedAt: 'sysvent03_aud_fecha_modi'
});
 
module.exports=sys_vent_03_detalle_venta;
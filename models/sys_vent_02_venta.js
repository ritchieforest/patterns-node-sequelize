const { DataTypes, Model } = require('sequelize');
const sequelize = require("../database");
const sys_empr_01_empresa = require('./sys_empr_01_empresa');
const sys_user_02_usuarios = require('./sys_user_02_usuarios');
const sys_vent_01_estado_venta = require('./sys_vent_01_estado_venta');

class sys_vent_02_venta extends Model {}

sys_vent_02_venta.init({
// Model attributes are defined here
    id_sysvent02: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    fk_sysempr01: {
        type: DataTypes.INTEGER,
        references: {
            model: sys_empr_01_empresa,
            key: 'id_sysempr01',
        }
    },
    fk_sysvent01: {
        type: DataTypes.INTEGER,
        references: {
            model: sys_vent_01_estado_venta,
            key: 'id_sysvent01',
        }
    },
    fk_sysuser02: {
        type: DataTypes.INTEGER,
        references: {
            model: sys_user_02_usuarios,
            key: 'id_sysuser02',
        }
    },
    sysvent02_observacion:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    sysvent02_codigo_factura:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    sysvent02_fecha:{
        type:DataTypes.DATE,
        allowNull:false,
    },
    sysvent02_correo: {
        type:DataTypes.STRING,
    }
}, {
    sequelize, // We need to pass the connection instance
    createdAt: 'sysvent02_aud_fecha_alta',
    updatedAt: 'sysvent02_aud_fecha_modi'
});
 
module.exports=sys_vent_02_venta;
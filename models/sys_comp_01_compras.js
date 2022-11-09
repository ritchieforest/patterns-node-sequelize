const { DataTypes, Model } = require('sequelize');
const sequelize = require("../database");
const sys_comp_03_estado_compra = require('./sys_comp_03_estado_compra');
const sys_empr_01_empresa = require('./sys_empr_01_empresa');
const sys_user_02_usuarios = require('./sys_user_02_usuarios');

class sys_comp_01_compras extends Model {}

sys_comp_01_compras.init({
// Model attributes are defined here
    id_syscomp01: {
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
    fk_syscomp03: {
        type: DataTypes.INTEGER,
        references: {
            model: sys_comp_03_estado_compra,
            key: 'id_syscomp03',
        }
    },
    fk_sysuser02: {
        type: DataTypes.INTEGER,
        references: {
            model: sys_user_02_usuarios,
            key: 'id_sysuser02',
        }
    },
    syscomp01_observacion:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    syscomp01_codigo_factura:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    syscomp01_fecha:{
        type:DataTypes.DATE,
        allowNull:false,
    },

}, {
    sequelize, // We need to pass the connection instance
    createdAt: 'syscomp01_aud_fecha_alta',
    updatedAt: 'syscomp01_aud_fecha_modi'
});
 
module.exports=sys_comp_01_compras;
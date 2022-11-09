const { DataTypes, Model } = require('sequelize');
const sequelize = require("../database");
const sys_empr_01_empresa = require('./sys_empr_01_empresa');

class sys_prod_02_categoria extends Model {}

sys_prod_02_categoria.init({
// Model attributes are defined here
    id_sysprod02: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    sysprod02_descripcion:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    sysprod02_cant_subcategoria:{
        type:DataTypes.INTEGER,
        allowNull:false,
    },
    fk_sysprod02:{
        type: DataTypes.INTEGER,
        references: {
            model: sys_prod_02_categoria,
            key: 'id_sysprod02',
        }
    },
    fk_sysempr01: {
        type: DataTypes.INTEGER,
        references: {
            model: sys_empr_01_empresa,
            key: 'id_sysempr01',
        }
    },
}, {
    sequelize, // We need to pass the connection instance
    createdAt: 'sysprod02_aud_fecha_alta',
    updatedAt: 'sysprod02_aud_fecha_modi'
});
module.exports=sys_prod_02_categoria;
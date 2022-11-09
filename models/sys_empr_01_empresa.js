const { DataTypes, Model } = require('sequelize');
const sequelize = require("../database");

class sys_empr_01_empresa extends Model { }

sys_empr_01_empresa.init({
    // Model attributes are defined here
    id_sysempr01: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    sysempr01_nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    sysempr01_cuit: {
        type: DataTypes.STRING,
        allowNull: false,
        unique:true
    },
    sysempr01_logo:{
        type: DataTypes.STRING,
    }
}, {
    sequelize, // We need to pass the connection instance
    createdAt: 'sysempr01_aud_fecha_alta',
    updatedAt: 'sysempr01_aud_fecha_modi',
});
    // Code here
module.exports = sys_empr_01_empresa;
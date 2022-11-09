const { DataTypes, Model } = require('sequelize');
const sequelize = require("../database");

class sys_prov_01_proveedor extends Model { }

sys_prov_01_proveedor.init({
    // Model attributes are defined here
    id_sysprov01: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    sysprov01_nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    sysprov01_cuit: {
        type: DataTypes.STRING,
        allowNull: false,
        unique:true
    },
    sysprov01_logo:{
        type: DataTypes.STRING,
    }
}, {
    sequelize, // We need to pass the connection instance
    createdAt: 'sysprov01_aud_fecha_alta',
    updatedAt: 'sysprov01_aud_fecha_modi',
});
    // Code here
module.exports = sys_prov_01_proveedor;
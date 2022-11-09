const { DataTypes, Model } = require('sequelize');
const sequelize = require("../database");

class sys_targ_01_tarjeta extends Model { }

sys_targ_01_tarjeta.init({
    // Model attributes are defined here
    id_systarg01: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    systarg01_nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize, // We need to pass the connection instance
    createdAt: 'systarg01_aud_fecha_alta',
    updatedAt: 'systarg01_aud_fecha_modi',
});
    // Code here
module.exports = sys_targ_01_tarjeta;
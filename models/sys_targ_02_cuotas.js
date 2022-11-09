const { DataTypes, Model } = require('sequelize');
const sequelize = require("../database");

class sys_targ_02_cuotas extends Model { }

sys_targ_02_cuotas.init({
    // Model attributes are defined here
    id_systarg02: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    systarg02_nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize, // We need to pass the connection instance
    createdAt: 'systarg02_aud_fecha_alta',
    updatedAt: 'systarg02_aud_fecha_modi',
});
    // Code here
module.exports = sys_targ_02_cuotas;
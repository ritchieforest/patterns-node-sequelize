const { DataTypes, Model } = require('sequelize');
const sequelize = require("../database");

class sys_vent_01_estado_venta extends Model {}

sys_vent_01_estado_venta.init({
// Model attributes are defined here
    id_sysvent01: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    sysvent01_descripcion:{
        type:DataTypes.STRING,
        allowNull:false,
    },
}, {
    sequelize, // We need to pass the connection instance
    createdAt: 'sysvent01_aud_fecha_alta',
    updatedAt: 'sysvent01_aud_fecha_modi'
});
 
module.exports=sys_vent_01_estado_venta;
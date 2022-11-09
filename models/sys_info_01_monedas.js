const { DataTypes, Model } = require('sequelize');
const sequelize = require("../database");

class sys_info_01_monedas extends Model {}

sys_info_01_monedas.init({
// Model attributes are defined here
    id_sysinfo01: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    sysinfo01_descripcion:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    sysinfo01_format:{
        type:DataTypes.STRING,
        allowNull:false,
    },
}, {
    sequelize, // We need to pass the connection instance
    createdAt: 'sysinfo01_aud_fecha_alta',
    updatedAt: 'sysinfo01_aud_fecha_modi'
});
module.exports=sys_info_01_monedas;
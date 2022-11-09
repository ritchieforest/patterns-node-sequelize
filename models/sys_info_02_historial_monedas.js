const { DataTypes, Model } = require('sequelize');
const sequelize = require("../database");
const sys_info_01_monedas = require('./sys_info_01_monedas');

class sys_info_02_historial_monedas extends Model {}

sys_info_02_historial_monedas.init({
// Model attributes are defined here
    id_sysinfo02: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    sysinfo02_anio:{
        type:DataTypes.INTEGER,
        allowNull:false,
    },
    sysinfo02_mes:{
        type:DataTypes.INTEGER,
        allowNull:false,
    },
    sysinfo02_dia:{
        type:DataTypes.INTEGER,
        allowNull:false,
    },
    sysinfo02_fecha:{
        type:DataTypes.DATE,
        allowNull:false,
    },
    fk_sysinfo01: {
        type: DataTypes.INTEGER,
        references: {
            model: sys_info_01_monedas,
            key: 'id_sysinfo01',
        }
    },
}, {
    sequelize, // We need to pass the connection instance
    createdAt: 'sysinfo02_aud_fecha_alta',
    updatedAt: 'sysinfo02_aud_fecha_modi'
});
module.exports=sys_info_02_historial_monedas;
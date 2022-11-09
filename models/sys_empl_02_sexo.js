const { DataTypes, Model } = require('sequelize');
const sequelize = require("../database");

class sys_empl_02_sexo extends Model {}

sys_empl_02_sexo.init({
// Model attributes are defined here
    id_sysempl02: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    sysempl02_descripcion:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    sysempl02_codigo:{
        type:DataTypes.STRING,
        allowNull:false,
    },

}, {
    sequelize, // We need to pass the connection instance
    createdAt: 'sysempl02_aud_fecha_alta',
    updatedAt: 'sysempl02_aud_fecha_modi'
});

 
module.exports=sys_empl_02_sexo;
const { DataTypes, Model,Deferrable } = require('sequelize');
const sequelize = require("../database");

class sys_user_01_tipo_usuario extends Model {}

sys_user_01_tipo_usuario.init({
// Model attributes are defined here
    id_sysuser01: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    sysuser01_descripcion:{
        type:DataTypes.STRING,
        allowNull:false,
    },

}, {
    sequelize, // We need to pass the connection instance
    createdAt: 'sysuser01_aud_fecha_alta',
    updatedAt: 'sysuser01_aud_fecha_modi'
});
module.exports=sys_user_01_tipo_usuario;
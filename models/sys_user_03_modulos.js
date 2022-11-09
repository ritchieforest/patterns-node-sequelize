const { DataTypes, Model,Deferrable } = require('sequelize');
const sequelize = require("../database");

class sys_user_03_modulos extends Model {}

sys_user_03_modulos.init({
// Model attributes are defined here
    id_sysuser03: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    sysuser03_descripcion:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    fk_sysuser03:{
        type: DataTypes.INTEGER,
        references: {
            model: sys_user_03_modulos,
            key: 'id_sysuser03',
        }
    },
}, {
    sequelize, // We need to pass the connection instance
    createdAt: 'sysuser03_aud_fecha_alta',
    updatedAt: 'sysuser03_aud_fecha_modi'
});
module.exports=sys_user_03_modulos;
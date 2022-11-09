const { DataTypes, Model } = require('sequelize');
const sequelize = require("../database");

class sys_prod_05_tipo_modificacion extends Model {}

sys_prod_05_tipo_modificacion.init({
// Model attributes are defined here
    id_sysprod05: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    sysprod05_descripcion:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    sysprod05_codigo:{
        type:DataTypes.STRING,
        allowNull:false,
    },

}, {
    sequelize, // We need to pass the connection instance
    createdAt: 'sysprod05_aud_fecha_alta',
    updatedAt: 'sysprod05_aud_fecha_modi'
});

 
module.exports=sys_prod_05_tipo_modificacion;
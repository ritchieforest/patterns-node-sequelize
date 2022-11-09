const { DataTypes, Model } = require('sequelize');
const sequelize = require("../database");

class sys_empl_01_tipo_documento extends Model {}

sys_empl_01_tipo_documento.init({
// Model attributes are defined here
    id_sysempl01: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    sysempl01_descripcion:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    sysempl01_codigo:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    

}, {
    sequelize, // We need to pass the connection instance
    createdAt: 'sysempl01_aud_fecha_alta',
    updatedAt: 'sysempl01_aud_fecha_modi'
});
 
module.exports=sys_empl_01_tipo_documento;
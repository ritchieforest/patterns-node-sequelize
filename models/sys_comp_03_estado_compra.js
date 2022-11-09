const { DataTypes, Model } = require('sequelize');
const sequelize = require("../database");

class sys_comp_03_estado_compra extends Model {}

sys_comp_03_estado_compra.init({
// Model attributes are defined here
    id_syscomp03: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    syscomp03_descripcion:{
        type:DataTypes.STRING,
        allowNull:false,
    },
}, {
    sequelize, // We need to pass the connection instance
    createdAt: 'syscomp03_aud_fecha_alta',
    updatedAt: 'syscomp03_aud_fecha_modi'
});
 
module.exports=sys_comp_03_estado_compra;
const { DataTypes, Model } = require('sequelize');
const sequelize = require("../database");
const sys_empr_01_empresa=require("./sys_empr_01_empresa")
class sys_prod_01_products extends Model {}

sys_prod_01_products.init({
// Model attributes are defined here
    id_sysprod01: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    sysprod01_descripcion:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    fk_sysempr01: {
        type: DataTypes.INTEGER,
        references: {
            model: sys_empr_01_empresa,
            key: 'id_sysempr01',
        }
    },
}, {
    sequelize, // We need to pass the connection instance
    createdAt: 'sysprod01_aud_fecha_alta',
    updatedAt: 'sysprod01_aud_fecha_modi'
});
module.exports=sys_prod_01_products;
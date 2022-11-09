const { DataTypes, Model,Deferrable } = require('sequelize');
const sequelize = require("../database");
const sys_prod_03_stock = require('./sys_prod_03_stock');
const sys_prod_05_tipo_modificacion = require('./sys_prod_05_tipo_modificacion');

class sys_prod_09_historial_precio extends Model {}

sys_prod_09_historial_precio.init({
// Model attributes are defined here
    id_sysprod09: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    sysprod09_precio:{
        type:DataTypes.JSON,
        allowNull:false,
    },
    sysprod09_fecha_modificacion:{
        type:DataTypes.DATE,
        allowNull:false
    },
    fk_sysprod03:{
        type: DataTypes.INTEGER,
        references: {
            model: sys_prod_03_stock,
            key: 'id_sysprod03',
        }
    },
    fk_sysprod05:{
        type: DataTypes.INTEGER,
        references: {
            model: sys_prod_05_tipo_modificacion,
            key: 'id_sysprod05',
        }
    }
    
}, {
    sequelize, // We need to pass the connection instance
    createdAt: 'sysprod09_aud_fecha_alta',
    updatedAt: 'sysprod09_aud_fecha_modi'
});
module.exports=sys_prod_09_historial_precio;
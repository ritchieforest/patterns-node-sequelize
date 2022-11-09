const { DataTypes, Model,Deferrable } = require('sequelize');
const sequelize = require("../database");
const sys_prod_03_stock = require('./sys_prod_03_stock');
const sys_prod_05_tipo_modificacion = require('./sys_prod_05_tipo_modificacion');

class sys_prod_04_historial_stock extends Model {}

sys_prod_04_historial_stock.init({
// Model attributes are defined here
    id_sysprod04: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    sysprod04_stock_antes:{
        type:DataTypes.JSON,
        allowNull:false,
    },
    sysprod04_stock_actual:{
        type:DataTypes.JSON,
        allowNull:false,
    },
    sysprod04_fecha_modificacion:{
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
    createdAt: 'sysprod04_aud_fecha_alta',
    updatedAt: 'sysprod04_aud_fecha_modi'
});
module.exports=sys_prod_04_historial_stock;
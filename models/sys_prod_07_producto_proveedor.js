const { DataTypes, Model} = require('sequelize');
const sequelize = require("../database");

const sys_prod_06_producto_categoria=require("./sys_prod_06_producto_categoria")
const sys_prov_01_proveedor=require("./sys_prov_01_proveedor")
class sys_prod_07_producto_proveedor extends Model {}

sys_prod_07_producto_proveedor.init({
// Model attributes are defined here
    id_sysprod07: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    fk_sysprod06:{
        type: DataTypes.INTEGER,
        references: {
            model: sys_prod_06_producto_categoria,
            key: 'id_sysprod06',
        }
    },
    fk_sysprov01:{
        type: DataTypes.INTEGER,
        references: {
            model: sys_prov_01_proveedor,
            key: 'id_sysprov01',
        }
    },
}, {
    sequelize, // We need to pass the connection instance
    createdAt: 'sysprod07_aud_fecha_alta',
    updatedAt: 'sysprod07_aud_fecha_modi'
});
module.exports=sys_prod_07_producto_proveedor;
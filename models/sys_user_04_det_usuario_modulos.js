const { DataTypes, Model,Deferrable } = require('sequelize');
const sequelize = require("../database");
const sys_user_02_usuarios =require("./sys_user_02_usuarios")
const sys_user_03_modulos =require("./sys_user_03_modulos")


class sys_user_04_det_usuario_modulos extends Model {}

sys_user_04_det_usuario_modulos.init({
// Model attributes are defined here
    id_sysuser03: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    sysuser03_alta:{
        type:DataTypes.BOOLEAN,
    },
    sysuser03_baja:{
        type:DataTypes.STRING,
    },
    sysuser03_modificacion:{
        type:DataTypes.STRING,
    },
    sysuser03_listado:{
        type:DataTypes.STRING,
    },
    fk_sysuser01:{
        type: DataTypes.INTEGER,
        references: {
            model: sys_user_02_usuarios,
            key: 'id_sysuser02',
        }
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

    // Code here
module.exports=sys_user_04_det_usuario_modulos;
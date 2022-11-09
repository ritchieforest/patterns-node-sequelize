const { DataTypes, Model } = require('sequelize');
const sys_empl_02_sexo = require("./sys_empl_02_sexo");
const sys_empl_01_tipo_documento  = require("./sys_empl_01_tipo_documento");
const sequelize = require("../database");
const sys_empr_01_empresa = require('./sys_empr_01_empresa');

class sys_empl_03_empleado extends Model { }

sys_empl_03_empleado.init({
    // Model attributes are defined here
    id_sysempl03: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    fk_sysempl02: {
        type: DataTypes.INTEGER,
        references: {
            model: sys_empl_02_sexo,
            key: 'id_sysempl02',
        }
    },
    fk_sysempr01: {
        type: DataTypes.INTEGER,
        references: {
            model: sys_empr_01_empresa,
            key: 'id_sysempr01',
        }
    },
    fk_sysempl01: {
        type: DataTypes.INTEGER,
        references: {
            model: sys_empl_01_tipo_documento,
            key: 'id_sysempl01',
        }
    },
    sysempl03_nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    sysempl03_apellido: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    sysempl03_dni: {
        type: DataTypes.STRING,
        allowNull: false,
        unique:true
    },
    sysempl03_cuil: {
        type: DataTypes.STRING,
        allowNull: false,
        unique:true
    },
}, {
    sequelize, // We need to pass the connection instance
    createdAt: 'sysempl03_aud_fecha_alta',
    updatedAt: 'sysempl03_aud_fecha_modi',
});
    // Code here
module.exports = sys_empl_03_empleado;
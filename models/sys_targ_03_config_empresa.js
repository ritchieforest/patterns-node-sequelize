const { DataTypes, Model } = require('sequelize');
const sequelize = require("../database");
const sys_empr_01_empresa = require('./sys_empr_01_empresa');
const sys_targ_01_tarjeta = require('./sys_targ_01_tarjeta');
const sys_targ_02_cuotas = require('./sys_targ_02_cuotas');

class sys_targ_03_config_empresa extends Model { }

sys_targ_03_config_empresa.init({
    // Model attributes are defined here
    id_systarg03: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    fk_systarg01:{
        type: DataTypes.INTEGER,
        references: {
            model: sys_targ_01_tarjeta,
            key: 'id_systarg01',
        }
    },
    fk_systarg02:{
        type: DataTypes.INTEGER,
        references: {
            model: sys_targ_02_cuotas,
            key: 'id_systarg02',
        }
    },
    fk_sysempr01:{
        type: DataTypes.INTEGER,
        references: {
            model: sys_empr_01_empresa,
            key: 'id_sysempr01',
        }
    },
    systarg03_porcentaje:{
        type: DataTypes.DECIMAL(3,2),
        allowNull: false,
    },
}, {
    sequelize, // We need to pass the connection instance
    createdAt: 'systarg03_aud_fecha_alta',
    updatedAt: 'systarg03_aud_fecha_modi',
});
    // Code here
module.exports = sys_targ_03_config_empresa;
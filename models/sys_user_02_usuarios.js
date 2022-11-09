const { DataTypes, Model,Deferrable } = require('sequelize');
const sequelize = require("../database");
const sys_empl_03_empleado=require("./sys_empl_03_empleado")
const sys_user_01_tipo_usuario=require("./sys_user_01_tipo_usuario")
const useBcrypt = require('sequelize-bcrypt');

class sys_user_02_usuarios extends Model {}

sys_user_02_usuarios.init({
// Model attributes are defined here
    id_sysuser02: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    fk_sysempl01:{
        type: DataTypes.INTEGER,
        references: {
            model: sys_empl_03_empleado,
            key: 'id_sysempl03',
        },
        unique:true,
    },
    fk_sysuser01:{
        type: DataTypes.INTEGER,
        references: {
            model: sys_user_01_tipo_usuario,
            key: 'id_sysuser01',
        }
    },
    sysuser02_usuario:{
        type:DataTypes.STRING,
        allowNull:false,
        unique: true
    },
    sysuser02_password:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    sysuser02_url_verify:{
        type:DataTypes.STRING,
        allowNull:true,
        unique:true
    },
    sysuser02_fecha_verify:{
        type:DataTypes.DATE,
        allowNull:true,
    },
    sysuser02_active:{
        type:DataTypes.BOOLEAN,
        defaultValue:false,
        allowNull:false
    },
    sysuser02_token:{
        type:DataTypes.STRING(1234),
    }
}, {
    sequelize, // We need to pass the connection instance
    createdAt: 'sysuser02_aud_fecha_alta',
    updatedAt: 'sysuser02_aud_fecha_modi'
});

const options={
    field: 'sysuser02_password', // secret field to hash, default: 'password'
    rounds: 16, // used to generate bcrypt salt, default: 12
    compare: 'authenticate', // method used to compare secrets, default: 'authenticate'
}
useBcrypt(sys_user_02_usuarios, options);
module.exports=sys_user_02_usuarios;

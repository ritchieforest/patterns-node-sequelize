const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('database', 'user', 'pass', {
    
    host: 'localhost',
    dialect: 'mysql',/* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
    freezeTableName: true
});
const conect_database = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }

}

module.exports = sequelize;
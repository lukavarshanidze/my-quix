const { Sequelize } = require('sequelize')


const sequelize = new Sequelize('shop', 'root', 'mysqlserver', {
    dialect: 'mysql',
    host: 'localhost',
})

module.exports = sequelize
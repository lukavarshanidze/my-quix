const { Sequelize, DataTypes } = require('sequelize')

const sequelize = require('../utils/database')

const User = sequelize.define('User', {
    uuid: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
    },

})

module.exports = User;
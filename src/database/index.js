const Sequelize = require('sequelize')
const dbConfig = require('../config/database')

const User = require('../models/User')
const Motor = require('../models/Motor')

const connection = new Sequelize(dbConfig)

User.init(connection)
Motor.init(connection)

module.exports = connection

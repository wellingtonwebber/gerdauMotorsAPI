const express = require('express')
const MotorController = require('../controllers/MotorController')

const routes = express.Router()

routes.get('/motors', MotorController.index)

module.exports = routes

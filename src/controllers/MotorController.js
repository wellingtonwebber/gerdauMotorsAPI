const Motor = require('../models/Motor')

module.exports = {
    async index (req, res) {
        const motors = await Motor.findAll()

        return res.json(motors)
    }
}

const User = require('../models/User')

module.exports = {
    async index (req, res) {
        const users = await User.findAll()

        return res.json(users)
    },

    async store (req, res) {
        const { name, np, area, email, password } = req.body

        const user = await User.create({ name, np, area, email, password })

        return res.json(user)
    }
}

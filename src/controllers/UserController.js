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
    },

    async update (req, res) {
        const { id, name, np, area, email } = req.body

        const user = await User.update({ name, np, area, email }, { where: { id } })

        return res.json(user)
    },

    async delete (req, res) {
        const { id } = req.body

        const user = await User.destroy({ where: { id } })

        return res.json(user)
    },

    async login (req, res) {

    }

}

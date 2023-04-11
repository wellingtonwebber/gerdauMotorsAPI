const { Model, DataTypes } = require('sequelize')

class User extends Model {
    static init (sequelize) {
        super.init({
            name: DataTypes.STRING,
            np: DataTypes.STRING,
            area: DataTypes.STRING,
            email: DataTypes.STRING,
            password: DataTypes.STRING
        }, {
            sequelize
        })
    }
}

module.exports = User

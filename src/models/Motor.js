const { Model, DataTypes } = require('sequelize')

class Motor extends Model {
    static init (sequelize) {
        super.init({
            code: DataTypes.STRING,
            manufacturer: DataTypes.STRING,
            voltage: DataTypes.STRING,
            current: DataTypes.STRING,
            frame: DataTypes.STRING,
            rpm: DataTypes.STRING,
            type: DataTypes.STRING,
            model: DataTypes.STRING,
            status: DataTypes.STRING
        }, {
            sequelize
        })
    }
}

module.exports = Motor

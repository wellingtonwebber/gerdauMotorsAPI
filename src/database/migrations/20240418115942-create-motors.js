'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up (queryInterface, Sequelize) {
        await queryInterface.createTable('motors', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            code: {
                type: Sequelize.STRING,
                allowNull: false
            },
            manufacturer: {
                type: Sequelize.STRING,
                allowNull: false
            },
            voltage: {
                type: Sequelize.STRING,
                allowNull: false
            },
            current: {
                type: Sequelize.STRING,
                allowNull: false
            },
            frame: {
                type: Sequelize.STRING,
                allowNull: false
            },
            rpm: {
                type: Sequelize.STRING,
                allowNull: false
            },
            type: {
                type: Sequelize.STRING,
                allowNull: false
            },
            model: {
                type: Sequelize.STRING,
                allowNull: false
            },
            status: {
                type: Sequelize.STRING,
                allowNull: false
            },
            fkLocationId: {
                type: Sequelize.STRING,
                allowNull: false
            },
            created_at: {
                type: Sequelize.DATE,
                allowNull: false
            },
            updated_at: {
                type: Sequelize.DATE,
                allowNull: false
            }

        })
    },

    async down (queryInterface, Sequelize) {
        await queryInterface.dropTable('motors')
    }
}

const Sequelize = require('sequelize');
const sequelize = require('../../config/database');

const User = sequelize.define('Users', {
    name: {
        allowNull: false,
        type: Sequelize.STRING,
    },
    email: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: true,
    }
});

module.exports = User;
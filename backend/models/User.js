const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.js');

const User = sequelize.define('User', {
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    role: {
        type: DataTypes.ENUM('administrator', 'mahasiswa', 'program_studi', 'fakultas'),
        allowNull: false
    },
    program_studi_id: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    fakultas_id: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
});

module.exports = User;

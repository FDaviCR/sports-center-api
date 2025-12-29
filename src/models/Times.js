const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');


const Times = sequelize.define('Times', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    idTime: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    codigo: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    paisDeOrigem: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    selecaoNacional: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    logo: {
        type: DataTypes.STRING,
        allowNull: true,
    },
});


module.exports = Times;
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');


const Ligas = sequelize.define('Ligas', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    tipo: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    logo: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    paisDeOrigem: {
        type: DataTypes.STRING,
        allowNull: true,
    },
});


module.exports = Ligas;
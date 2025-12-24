const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');


const Pais = sequelize.define('Pais', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    codigo: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    bandeira: {
        type: DataTypes.STRING,
        allowNull: true,
    },
});


module.exports = Pais;
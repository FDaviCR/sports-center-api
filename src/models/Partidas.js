const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');


const Partidas = sequelize.define('Partidas', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    rodada: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    idMandante: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    idVisitante: {
        type: DataTypes.INTEGER,    
        allowNull: false,
    },
    golsMandante: {
        type: DataTypes.INTEGER,
        allowNull: true,    
    },
    golsVisitante: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    partidaConcluida: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    idLiga: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    idTemporada: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
});


module.exports = Partidas;
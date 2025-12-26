const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');


const LogAtualizacoes = sequelize.define('log_atualizacoes', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    tabela: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    data: {
        type: DataTypes.DATE,
        allowNull: true,
    }
});


module.exports = LogAtualizacoes;
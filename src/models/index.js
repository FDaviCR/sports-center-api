const sequelize = require('../config/database');
const Paises = require('./Paises');
const Ligas = require('./Ligas');
const LogAtualizacoes = require('./LogAtualizacoes');

const db = {
    sequelize,
    Paises,
    Ligas,
    LogAtualizacoes
};

module.exports = db;
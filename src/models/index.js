const sequelize = require('../config/database');
const Paises = require('./Paises');
const Ligas = require('./Ligas');
const Times = require('./Times');
const LogAtualizacoes = require('./LogAtualizacoes');

const db = {
    sequelize,
    Paises,
    Ligas,
    LogAtualizacoes,
    Times,
};

module.exports = db;
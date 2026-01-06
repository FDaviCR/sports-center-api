const sequelize = require('../config/database');
const Paises = require('./Paises');
const Ligas = require('./Ligas');
const Times = require('./Times');
const LogAtualizacoes = require('./LogAtualizacoes');
const Temporadas = require('./Temporadas');

const db = {
    sequelize,
    Paises,
    Ligas,
    LogAtualizacoes,
    Times,
    Temporadas,
};

module.exports = db;
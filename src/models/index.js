const sequelize = require('../config/database');
const Paises = require('./Paises');
const Ligas = require('./Ligas');

const db = {
    sequelize,
    Paises,
    Ligas
};

module.exports = db;
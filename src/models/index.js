const sequelize = require('../config/database');
const Pais = require('./Paises');

const db = {
    sequelize,
    Pais,
};

module.exports = db;
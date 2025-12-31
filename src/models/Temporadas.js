const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');


const Temporadas = sequelize.define('Temporadas', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    ano: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            isInt: {
                msg: 'O ano deve ser um número inteiro'
            },
            min: {
                args: [2000],
                msg: 'Ano inválido'
            },
            max: {
                args: [2100],
                msg: 'Ano inválido'
            }
        }
    }
});


module.exports = Temporadas;
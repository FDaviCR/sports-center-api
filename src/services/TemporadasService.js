const LogService = require('../services/LogAtualizacoesService');
const { Temporadas } = require('../models');
require('dotenv').config();
const axios = require('axios');

class TemporadaService {
    static async create(data) {
        return Temporadas.create(data);
    }

    static async findAll() {
        return Temporadas.findAll();
    }
}

module.exports = TemporadaService;
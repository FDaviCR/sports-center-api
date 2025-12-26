const { LogAtualizacoes } = require('../models');
require('dotenv').config();

class LogAtualizacoesService {
    static async create(data) {
        return LogAtualizacoes.create(data);
    }

    static async findAll() {
        return LogAtualizacoes.index();
    }

    static async updateDataByTabela(tabela, data) {
        return LogAtualizacoes.update(
            { data },
            { where: { tabela } }
        );
    }

}

module.exports = LogAtualizacoesService;
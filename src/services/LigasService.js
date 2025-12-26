const LogService = require('../services/LogAtualizacoesService');
const { Ligas } = require('../models');
require('dotenv').config();
const axios = require('axios');

class LigaService {
    static async create(data) {
        return Ligas.create(data);
    }


    static async findAll() {
        return Ligas.findAll();
    }

    static async loadAll() {
        const response = await axios.get(
            process.env.API_URL + '/leagues',
            {
                headers: {
                    'x-apisports-key': process.env.API_KEY
                }
            }
        );

        const leagues = response.data;

        await Ligas.truncate();

        for (const league of leagues.response) {
            await Ligas.create({
                nome: league.league.name,
                tipo: league.league.type,
                logo: league.league.logo,
                paisDeOrigem: league.country.name
            });
        }

        if (await LogService.find('Ligas')) {
            let dataAtualizacao = new Date();
            await LogService.updateDataByTabela('Ligas', dataAtualizacao);
        } else {
            await LogService.create({
                tabela: 'Ligas',
                data: new Date(),
            });
        }

        return await Ligas.findAll();
    }

}

module.exports = LigaService;
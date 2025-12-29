const LogService = require('../services/LogAtualizacoesService');
const { Times } = require('../models');
require('dotenv').config();
const axios = require('axios');

class TimesService {
    static async create(data) {
        return Times.create(data);
    }


    static async findAll() {
        return Times.findAll();
    }

    static async loadAll() {
        const response = await axios.get(
            process.env.API_URL + '/teams',
            {
                headers: {
                    'x-apisports-key': process.env.API_KEY
                },
                params: {   
                    country:'Brazil'
                }
            }
        );

        const teams = response.data;



        await Times.truncate();

        await Promise.all(
            teams.response.map(team =>
                Times.create({
                    idTime: team.team.id,
                    nome: team.team.name,
                    codigo: team.team.code,
                    paisDeOrigem: team.team.country,
                    selecaoNacional: team.team.national,
                    logo: team.team.logo
                })
            )
        );

        if (await LogService.find('Times')) {
            let dataAtualizacao = new Date();
            await LogService.updateDataByTabela('Times', dataAtualizacao);
        } else {
            await LogService.create({
                tabela: 'Times',
                data: new Date(),
            });
        }

        return await Times.findAll();
    }

}

module.exports = TimesService;
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

    static async loadAll(pais) {
        console.log('Carregando times para o pais: ' + pais);
        const response = await axios.get(
            process.env.API_URL + '/teams',
            {
                headers: {
                    'x-apisports-key': process.env.API_KEY
                },
                params: {
                    country: pais
                }
            }
        );

        const teams = response.data;

        /*await Promise.all(
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
            
        );*/
        let dados = teams.response.map(time => ({
            idTime: time.team.id,
            nome: time.team.name,
            codigo: time.team.code,
            paisDeOrigem: time.team.country,
            selecaoNacional: time.team.national,
            logo: time.team.logo
        }));

        await Times.bulkCreate(dados, {
            updateOnDuplicate: ['nome', 'codigo', 'paisDeOrigem', 'selecaoNacional', 'logo']
        });

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
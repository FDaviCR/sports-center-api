const LogService = require('../services/LogAtualizacoesService');
const { Paises } = require('../models');
require('dotenv').config();
const axios = require('axios');

class PaisService {
    static async create(data) {
        return Paises.create(data);
    }


    static async findAll() {
        return Paises.findAll();
    }

    static async loadAll() {
        const response = await axios.get(
            process.env.API_URL + '/countries',
            {
                headers: {
                    'x-apisports-key': process.env.API_KEY
                }
            }
        );

        const countries = response.data;

        await Paises.truncate();

        await Promise.all(
            countries.response.map(country =>
                Paises.create({
                    nome: country.name,
                    codigo: country.code,
                    bandeira: country.flag
                })
            )
        );

        if (await LogService.find('Países')) {
            let dataAtualizacao = new Date();
            await LogService.updateDataByTabela('Países', dataAtualizacao);
        } else {
            await LogService.create({
                tabela: 'Países',
                data: new Date(),
            });
        }

        return await Paises.findAll();
    }

}

module.exports = PaisService;
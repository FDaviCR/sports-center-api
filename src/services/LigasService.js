const { Ligas } = require('../models');
require('dotenv').config();
const request = require("request");

class LigaService {
    static async create(data) {
        return Ligas.create(data);
    }


    static async findAll() {
        return Ligas.index();
    }

    static async loadAll() {
        var options = {
            method: 'GET',
            url: process.env.API_URL + '/leagues',
            headers: {
                'x-apisports-key': process.env.API_KEY
            }
        };

        request(options, function (error, response, body) {
            if (error) throw new Error(error);

            const leagues = JSON.parse(body);

            //console.log(leagues);

            leagues.response.forEach(league => {
                Ligas.create({
                    nome: league.league.name,
                    tipo: league.league.type,
                    logo: league.league.logo,
                    paisDeOrigem: league.country.name
                });
            });
        });

        return 1;//Liga.index();
    }
}

module.exports = LigaService;
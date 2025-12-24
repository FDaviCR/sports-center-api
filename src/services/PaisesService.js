const { Pais } = require('../models');
require('dotenv').config();
const request = require("request");

class PaisService {
    static async create(data) {
        return Pais.create(data);
    }


    static async findAll() {
        return Pais.findAll();
    }

    static async loadAll() {
        var options = {
            method: 'GET',
            url: process.env.API_URL + '/countries',
            headers: {
                'x-apisports-key': process.env.API_KEY
            }
        };

        request(options, function (error, response, body) {
            if (error) throw new Error(error);

            const countries = JSON.parse(body);

            countries.response.forEach(country => {
                Pais.create({
                    nome: country.name,
                    codigo: country.code,
                    bandeira: country.flag
                });
            });
        });

        return Pais.findAll();
    }
}

module.exports = PaisService;
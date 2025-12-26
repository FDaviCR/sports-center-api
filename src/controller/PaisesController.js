const PaisService = require('../services/PaisesService');
//const LogService = require('../services/LogService');


class PaisController {
    static async store(req, res, next) {
        try {
            const Pais = await PaisService.create(req.body);

            /*
            await LogService.create({
                action: 'Criou usuário',
                PaisId: Pais.id,
            });
            */


            res.status(201).json(Pais);
        } catch (err) {
            next(err);
        }
    }


    static async index(req, res, next) {
        try {
            const Pais = await PaisService.findAll();
            res.json(Pais);
        } catch (err) {
            next(err);
        }
    }

    static async loadAll(req, res, next) {
        try {
            const Pais = await PaisService.loadAll();
            res.json(Pais);
        } catch (err) {
            next(err);
        }
    }
}


module.exports = PaisController;
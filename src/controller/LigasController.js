const LigasService = require('../services/LigasService');
//const LogService = require('../services/LogService');


class LigasController {
    static async store(req, res, next) {
        try {
            const Ligas = await LigasService.create(req.body);

            /*
            await LogService.create({
                action: 'Criou usuário',
                LigasId: Ligas.id,
            });
            */


            res.status(201).json(Ligas);
        } catch (err) {
            next(err);
        }
    }


    static async index(req, res, next) {
        try {
            const Ligas = await LigasService.findAll();
            res.json(Ligas);
        } catch (err) {
            next(err);
        }
    }

    static async loadAll(req, res, next) {
        try {
            const Ligas = await LigasService.loadAll();
            res.json(Ligas);
        } catch (err) {
            next(err);
        }
    }
}


module.exports = LigasController;
const LigasService = require('../services/LigasService');

class LigasController {
    static async store(req, res, next) {
        try {
            const Ligas = await LigasService.create(req.body);

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
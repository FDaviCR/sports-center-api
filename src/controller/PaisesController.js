const PaisService = require('../services/PaisesService');

class PaisController {
    static async store(req, res, next) {
        try {
            const Pais = await PaisService.create(req.body);
            
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
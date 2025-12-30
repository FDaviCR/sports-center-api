const TimesService = require('../services/TimesService');

class TimesController {
    static async store(req, res, next) {
        try {
            const Times = await TimesService.create(req.body);
            
            res.status(201).json(Times);
        } catch (err) {
            next(err);
        }
    }


    static async index(req, res, next) {
        try {
            const Times = await TimesService.findAll();
            res.json(Times);
        } catch (err) {
            next(err);
        }
    }

    static async loadAll(req, res, next) {
        const { pais } = req.query;

        try {
            const Times = await TimesService.loadAll(pais);
            res.json(Times);
        } catch (err) {
            next(err);
        }
    }
}


module.exports = TimesController;
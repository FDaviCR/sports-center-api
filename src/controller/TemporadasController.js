const TemporadaService = require('../services/TemporadasService');

class TemporadaController {
    static async store(req, res, next) {
        try {
            const Temporada = await TemporadaService.create(req.body);
            
            res.status(201).json(Temporada);
        } catch (err) {
            next(err);
        }
    }


    static async index(req, res, next) {
        try {
            const Temporada = await TemporadaService.findAll();
            res.json(Temporada);
        } catch (err) {
            next(err);
        }
    }
}


module.exports = TemporadaController;
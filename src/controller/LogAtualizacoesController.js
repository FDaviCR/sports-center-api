const LogAtualizacoesService = require('../services/LogAtualizacoesService');

class LogAtualizacoesController {
    static async store(req, res, next) {
        try {
            const LogAtualizacoes = await LogAtualizacoesService.create(req.body);
            
            res.status(201).json(LogAtualizacoes);
        } catch (err) {
            next(err);
        }
    }


    static async findAll(req, res, next) {
        try {
            const LogAtualizacoes = await LogAtualizacoesService.findAll();
            res.json(LogAtualizacoes);
        } catch (err) {
            next(err);
        }
    }

}


module.exports = LogAtualizacoesController;
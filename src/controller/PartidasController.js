const PartidasService = require('../services/PartidasService');

class PartidasController {

    static async index(req, res) {
        try {
            const partidas = await PartidasService.findAll();
            return res.json(partidas);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    static async show(req, res) {
        try {
            const partida = await PartidasService.findById(req.params.id);
            return res.json(partida);
        } catch (error) {
            return res.status(404).json({ error: error.message });
        }
    }

    static async store(req, res) {
        try {
            const partida = await PartidasService.create(req.body);
            return res.status(201).json(partida);
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }

    static async update(req, res) {
        try {
            const partida = await PartidasService.update(req.params.id, req.body);
            return res.json(partida);
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }

    static async delete(req, res) {
        try {
            await PartidasService.delete(req.params.id);
            return res.status(204).send();
        } catch (error) {
            return res.status(404).json({ error: error.message });
        }
    }
}

module.exports = PartidasController;

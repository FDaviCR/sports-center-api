const Partidas = require('../models/Partidas');
const Times = require('../models/Times');
const Ligas = require('../models/Ligas');
const Temporadas = require('../models/Temporadas');

class PartidasService {

    static async validarRelacionamentos({ idMandante, idVisitante, idLiga, idTemporada }) {
        const [mandante, visitante, liga, temporada] = await Promise.all([
            Times.findByPk(idMandante),
            Times.findByPk(idVisitante),
            Ligas.findByPk(idLiga),
            Temporadas.findByPk(idTemporada),
        ]);

        if (!mandante) throw new Error('Time mandante não encontrado');
        if (!visitante) throw new Error('Time visitante não encontrado');
        if (!liga) throw new Error('Liga não encontrada');
        if (!temporada) throw new Error('Temporada não encontrada');
    }

    static async create(data) {
        await this.validarRelacionamentos(data);
        return Partidas.create(data);
    }

    static async update(id, data) {
        const partida = await Partidas.findByPk(id);
        if (!partida) throw new Error('Partida não encontrada');

        await this.validarRelacionamentos(data);
        await partida.update(data);

        return partida;
    }

    static async findAll() {
        return Partidas.findAll();
    }

    static async findById(id) {
        const partida = await Partidas.findByPk(id);
        if (!partida) throw new Error('Partida não encontrada');
        return partida;
    }

    static async delete(id) {
        const partida = await Partidas.findByPk(id);
        if (!partida) throw new Error('Partida não encontrada');

        await partida.destroy();
        return true;
    }
}

module.exports = PartidasService;

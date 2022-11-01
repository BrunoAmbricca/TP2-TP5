import config from '../config.js'
import NotasFactoryDAO from '../model/DAO/notasFactory.js'


class ApiNotas {
    constructor() {
        this.notasModel = NotasFactoryDAO.get(config.MODO_PERSISTENCIA)
    }

    obtenerNotas = async id => {
        return id? await this.notasModel.findNota(id) : await this.notasModel.findNotas()
    }

    guardarNota = async nota => {
        return await this.notasModel.saveNota(nota)
    }

    obtenerPromedioNotas = async _ => {
        let notas = await this.notasModel.findNotas()

        var totalNotas = 0
        var cantidadNotas = 0

        notas.forEach(nota => {
            totalNotas += nota.nota
            cantidadNotas ++
        })

        return {
            promedio: totalNotas / cantidadNotas,
            cantidadNotas: cantidadNotas
        }

    }
}

export default ApiNotas
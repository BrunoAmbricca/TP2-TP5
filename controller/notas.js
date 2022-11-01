import ApiNotas from '../api/notas.js'


class ControladorNotas {

    constructor() {
        this.apiNotas = new ApiNotas()
    }

    getNotas = async (req,res) => {
        const { id } = req.params
        res.json( await this.apiNotas.obtenerNotas(id) )
    }

    postNota = async (req,res) => {
        const nota = req.body
        res.json(await this.apiNotas.guardarNota(nota))
    }

    getPromedioNotas = async (req,res) => {
        res.json( await this.apiNotas.obtenerPromedioNotas() )
    }
}

export default ControladorNotas
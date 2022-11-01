import express from 'express'
import ControladorNotas from '../controller/notas.js'


export class RouterNotas {
    constructor() {
        this.router = express.Router()
        this.controladorNotas = new ControladorNotas()
    }

    start() {
        this.router.get('/promedio', this.controladorNotas.getPromedioNotas)
        this.router.get('/:id?', this.controladorNotas.getNotas)
        this.router.post('/', this.controladorNotas.postNota)
        
        return this.router
    }
}

class NotasMemDAO {

    constructor() {
        this.notas = [
            { id: '1', nota: 7, nombre: 'Juan', apellido: 'Gomez', curso: 'Matematica' },
            { id: '2', nota: 8, nombre: 'Ana', apellido: 'Perez', curso: 'Lengua' },
        ]
    }

    findNota = async id => {
        return this.notas.find(nota => nota.id == id)    
    }

    findNotas = async ()  => {
        try {
            return this.notas
        }
        catch {
            return []
        }
    }

    saveNota = async nota => {
        nota.nota = parseInt(nota.nota)
        
        const id = parseInt(this.notas[this.notas.length-1].id) + 1
        nota.id = String(id)

        this.notas.push(nota)

        return {status: 'OK'}    
    }
}

export default NotasMemDAO

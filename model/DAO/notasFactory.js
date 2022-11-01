import NotasMemDAO from './notasMem.js'
import ClientesMongoDAO from './notasMongoDB.js'

class ClientesFactoryDAO {
    static get(tipo) {
        switch(tipo) {
            case 'MEM' :
                console.log(' ***** Persistiendo en Memoria ***** ')
                return new NotasMemDAO()

            case 'MONGO' :
                console.log(' ***** Persistiendo en MongoDB ***** ')
                return new ClientesMongoDAO()

            default: 
                console.log(' ***** Persistiendo en default (Memoria) ***** ')
                return new NotasMemDAO()
        }
    }
}

export default ClientesFactoryDAO
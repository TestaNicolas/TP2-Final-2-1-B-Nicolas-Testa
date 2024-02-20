//import NumerosFile from "../model/DAO/numeros.js"

class ServicioNombre {

    constructor() {
        //this.numerosFile = new NumerosFile()
    }

    async obtenerNombres() { 
        //const numeros = await this.numerosFile.obtenerNombres()
        return "{numeros: numeros.map(item => item.nombre)}"
    }

}

export default ServicioNombre
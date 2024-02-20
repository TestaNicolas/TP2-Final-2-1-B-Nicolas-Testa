import ServicioNombre from "../servicio/nombre.js"

class ControladorNombre {

    constructor() {
        this.servicioNombre = new ServicioNombre()
    }

    obtenerNombres = async (req,res) => {
        try {
            const numeros = await this.servicioNombre.obtenerNombres()
            res.json(numeros)
        }
        catch(error) {
            console.log(`Error al intentar obtener los nombres... ${error}`)
        }
    }

}

export default ControladorNombre
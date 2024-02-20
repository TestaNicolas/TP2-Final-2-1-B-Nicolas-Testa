import express from 'express'
import ControladorNombre from '../controlador/nombre.js'

class RouterNombre {

    constructor() {
        this.controladorNombre = new ControladorNombre()
        this.router = express.Router()
    }

    OnInit() {
        this.router.get('/', this.controladorNombre.obtenerNombres)

        return this.router
    }
}

export default RouterNombre
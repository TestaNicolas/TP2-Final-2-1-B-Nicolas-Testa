import express from 'express'
import ControladorLibro from '../controlador/libro.js'

class RouterLibro {

    constructor() {
        this.controladorLibro = new ControladorLibro()
        this.router = express.Router()
    }

    OnInit() {
        this.router.post('/altaLibro', this.controladorLibro.altaLibro);
        this.router.post('/alquilarLibro', this.controladorLibro.alquilarLibro);
        this.router.post('/devolverLibro', this.controladorLibro.devolverLibro);
        this.router.post('/noAptoLibro', this.controladorLibro.noAptoLibro);
        this.router.get('/libros', this.controladorLibro.obtenerLibros);
        this.router.get('/libros/:estado?', this.controladorLibro.obtenerLibrosPorEstado);





        this.router.delete('/bajaLibro', this.controladorLibro.bajaLibro)

        return this.router
    }
}
export default RouterLibro
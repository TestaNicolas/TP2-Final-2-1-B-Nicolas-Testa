import ServicioLibro from "../servicio/libro.js";

class ControladorLibro {

    constructor() {
        this.servicioLibro = new ServicioLibro();
    }

    obtenerLibros = async (req,res) => {
        try {
            const libros = await this.servicioLibro.obtenerLibros();
            res.json(libros)
        }
        catch(error) {
            res.status(400).json({ errorMsg: error.message }); 
        }
    }

    obtenerLibrosPorEstado = async (req,res) => {
        try {
            const {estado} = req.params;
            const libros = await this.servicioLibro.obtenerLibrosPorEstado(estado);
            res.json(libros)
        }
        catch(error) {
            res.status(400).json({ errorMsg: error.message }); 
        }
    }

    altaLibro = async (req, res) => {
        const body = req.body;
        try {
            const libro = await this.servicioLibro.altaLibro(body);
            res.json(libro);
        } catch(error) {
            res.status(400).json({ errorMsg: error.message }); 
        }
    }

    bajaLibro = async (req, res) => {
        const codigo = req.body.codigo;
        try {
            const libroBaja = await this.servicioLibro.bajaLibro(codigo);
            res.json(libroBaja);
        } catch(error) {
            res.status(400).json({ errorMsg: error.message }); 
        }
    }

    alquilarLibro = async (req, res) => {
        const codigo = req.body.codigo;
        try {
            const libroAlquilado = await this.servicioLibro.alquilarLibro(codigo);
            res.json(libroAlquilado);
        } catch(error) {
            res.status(400).json({ errorMsg: error.message }); 
        }
    }

    devolverLibro = async (req, res) => {
        const codigo = req.body.codigo;
        try {
            const libroDevuelto = await this.servicioLibro.devolverLibro(codigo);
            res.json(libroDevuelto);
        } catch(error) {
            res.status(400).json({ errorMsg: error.message }); 
        }
    }

    noAptoLibro = async (req, res) => {
        const codigo = req.body.codigo;
        try {
            const libroNoApto = await this.servicioLibro.noAptoLibro(codigo);
            res.json(libroNoApto);
        } catch(error) {
            res.status(400).json({ errorMsg: error.message }); 
        }
    }
}

export default ControladorLibro;

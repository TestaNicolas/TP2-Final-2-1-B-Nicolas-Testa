import LibroFile from "../model/DAO/libro.js"
import axios from 'axios';

class ServicioLibro {

    constructor() {
        this.libroFile = new LibroFile()
    }

    async altaLibro(body) { 
        const Nuevolibro = await this.libroFile.altaLibro(body)
        return Nuevolibro;
    }

    async bajaLibro(codigo) { 
        const libroBaja = await this.libroFile.bajaLibro(codigo)
        return libroBaja;
    }

    async alquilarLibro(codigo) { 
        const respuesta = await axios.get('https://libros.deno.dev/premios');
        console.log(respuesta.data)
        let libroAlquilado;
        if (respuesta.data.premio) {
            this.bajaLibro(codigo)
            return `¡Felicidades! Has ganado el sorteo y te puedes quedar con el libro!`;
        } else {
            libroAlquilado = await this.libroFile.alquilarLibro(codigo);
            return libroAlquilado;
        }
    }

    async devolverLibro(codigo) { 
        const libroDevuelto = await this.libroFile.devolverLibro(codigo)
        return libroDevuelto;
    }
    
    async noAptoLibro(codigo) { 
        const libroNoApto = await this.libroFile.noAptoLibro(codigo)
        return libroNoApto;
    }

    async obtenerLibros() { 
        const libros = await this.libroFile.obtenerLibros()
        return libros;
    }

    async obtenerLibrosPorEstado(estado) { 
        const libros = await this.libroFile.obtenerLibrosPorEstado(estado)
        return libros;
    }



}

export default ServicioLibro
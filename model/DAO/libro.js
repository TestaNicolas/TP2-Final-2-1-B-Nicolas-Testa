import fs from 'fs/promises'
const archivo = 'nombre.json'

class Libro {
    constructor(body) {
      this.codigo = body.codigo;
      this.titulo = body.titulo;
      this.autor = body.autor;
      this.estado = "disponible";
    }
  }

class NombresFile {

    constructor() { }

    leerArchivo = async (archivo) => {
        try {
            const usuarios = await fs.readFile(archivo, 'utf-8')
            const usuariosJson = JSON.parse(usuarios)
            return usuariosJson
        } catch (error) {console.log(`Error al leer el archivo... ${error}`);}
    }

    escribirArchivo = async (archivo, TextoAEscribir) => {
        try {
            await fs.writeFile(archivo, JSON.stringify(TextoAEscribir,null,'\t'))
        } catch(err) {
            console.error("Error al escribir en el archivo");
        }
    }

    obtenerLibros = async () => {
        const libros = await this.leerArchivo(archivo)
        return libros   
    }

    obtenerLibrosPorEstado = async (estado) => {
        const libros = await this.leerArchivo(archivo);
        return libros.filter(libro => libro.estado === estado);
    }

    altaLibro = async (body) => {
        const libros = await this.leerArchivo(archivo);
        const nuevoLibro = new Libro(body);
        libros.push(nuevoLibro);
        await this.escribirArchivo(archivo, libros);
        return nuevoLibro; 
    }

    bajaLibro = async (codigo) => {
        let libros = await this.leerArchivo(archivo);
        const libroBaja = libros.find(libro => libro.codigo === codigo);
        if (libroBaja) {
            libros = libros.filter(libro => libro.codigo !== codigo); 
            await this.escribirArchivo(archivo, libros);
            return libroBaja;
        } else {
            throw new Error("El libro no existe");
        }
    }

    alquilarLibro = async (codigo) => {
        let libros = await this.leerArchivo(archivo);
        const libroAlquilado = libros.find(libro => libro.codigo === codigo);
        console.log(libroAlquilado)
        if (libroAlquilado) {
            if (libroAlquilado.estado === "disponible") {
                libroAlquilado.estado = "alquilado";
                await this.escribirArchivo(archivo, libros);
                return libroAlquilado;
            } else {
                throw new Error("El libro no está disponible para alquilar.");
            }
        } else {
            throw new Error("El libro no existe.");
        }
    }

    async devolverLibro(codigo) {
        let libros = await this.leerArchivo(archivo);
        const libroDevuelto = libros.find(libro => libro.codigo === codigo);
        if (libroDevuelto) {
            if (libroDevuelto.estado === "alquilado") {
                libroDevuelto.estado = "disponible";
                await this.escribirArchivo(archivo, libros);
                return libroDevuelto;
            } else {
                throw new Error("El libro no está alquilado.");
            }
        } else {
            throw new Error("El libro no existe.");
        }
    }
    
    async noAptoLibro(codigo) {
        let libros = await this.leerArchivo(archivo);
        const libroNoApto = libros.find(libro => libro.codigo === codigo);
        if (libroNoApto) {
            libroNoApto.estado = "no-apto";
            await this.escribirArchivo(archivo, libros);
            return libroNoApto;
        } else {
            throw new Error("El libro no existe.");
        }
    }
    


    

}

export default NombresFile
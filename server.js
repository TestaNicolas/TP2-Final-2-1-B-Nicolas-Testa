import express from 'express'
import RouterLibro from './router/libro.js'

const app = express()
const PORT = 8080

// APP USE
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// RUTAS
app.use('/libro', new RouterLibro().OnInit())

// APP LISTEN
const server = app.listen(PORT, () => console.log(`Servidor escuchado en el puerto ... ${PORT}`))
server.on('error', error => console.log('Error al levantar el servidor:', error) )
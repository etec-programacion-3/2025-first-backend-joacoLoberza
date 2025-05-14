import express from 'express'
import { booksRouter } from './routers/bookRouters';

//Create app, define the logical port, activete de JSON midleware.
const app = express()
const PORT = process.env.PORT || 3000;
app.use(express.json())

//Define url routes for the routers.
app.use('/libros',booksRouter)

//Initializate the server.
try {
    app.listen(PORT, () => {
        console.log(`Server listening in port ${PORT}...`)
    })
} catch (error) {
    throw new Error(`ERROR\nCan't initialize the server: ${error}`)
}

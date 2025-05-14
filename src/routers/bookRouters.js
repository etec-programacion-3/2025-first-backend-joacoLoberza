import express from 'express'
import { getAllBooks,getBookById, getBookByParam, deleteBook, addBook, updateBook } from '../handling/bookHandling'

//Create the books router
const booksRouter = express.Router()

booksRouter.get('/', getAllBooks)
booksRouter.get('/:id', getBookById)
booksRouter.get('/buscar/:param', getBookByParam)
booksRouter.post('/', addBook)
booksRouter.put('/:id', updateBook)
booksRouter.delete('/:id', deleteBook)

export {booksRouter}
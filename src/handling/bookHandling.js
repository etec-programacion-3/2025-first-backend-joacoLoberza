import { Book } from "../database/models/defineModels"

export const getAllBooks = async (req,res) => {
    try {
        const books = await Book.findAll()
        res.status(200).json(books)
    } catch (error) {
        res.status(500).send(error)
        console.error(`ERROR\nThe server can't handle the request: ${error}`)
    }
}

export const getBookById = async (req, res) => {
    try {
        const bookId = req.params.id
        const book = await Book.findByPk(bookId)
        if (book) {
            res.status(200).json(book)
        } else if (typeof book === "object") {
            res.status(404).json({message: "Couldn't find the book."})
            console.error("ERROR: The server couldn't find the book.")        
        } else {
            res.status(400).json({message: "Invalid book id."})
            console.error("ERROR: Invalid id syntax.")
        }
    } catch (error) {
        res.status(500).send(error)
        console.error(`ERROR\nThe server can't handel the request: ${error}`)
    }
}

export const getBookByParam = async (req, res) => {

}

export const addBook = async (req, res) => {
    try {
        await Book.create(req.body)
        res.status(200)
    } catch (error) {
        res.status(500).send(error)
        console.error(`ERROR\nThe server can't create a new book in the data base: ${error}`)
    }
}

export const updateBook = async (req, res) => {
    try {
        const book = await Book.findByPk(req.params.id)
        if (book){
            await book.update(req.body)
            res.status(200)
        }
        else if (typeof req.body === "object") {
            res.status(404).json({message: "Couldn't find the book."})
            console.error("ERROR: The server couldn't find the book.")        
        } else {
            res.status(400).json({message: "Invalid book id."})
            console.error("ERROR: Invalid id syntax.")
        }
    } catch (error) {
        res.status(500).send(error)
        console.error(`ERROR\nTher server can't update the book in the data base: ${error}`)
    }
}

export const deleteBook = async (req, res) => {
    try {
        const book = await Book.findByPk(req.params.id)
        if (book){
            await Book.destroy(book)
            res.status(200)
        }
        else if (typeof req.body === "object") {
            res.status(404).json({message: "Couldn't find the book."})
            console.error("ERROR: The server couldn't find the book.")        
        } else {
            res.status(400).json({message: "Invalid book id."})
            console.error("ERROR: Invalid id syntax.")
        }
    } catch (error) {
        res.status(500).send(error)
        console.error(`ERROR\nTher server can't remove the book: ${error}`)
    }
}
### Library Management System
### Description
  This is a small backend system for managing library books, handling book data, users, permissions, and requests.

### Author
  Joaquín Lobrerza

### Characteristics
  -Search books filtering them.
  -Add new books.
  -Delete books.
  -User and permissions system.
  -Register of books requests.

### API Endpoints
| Method | Route                  | Description                       |
|--------|------------------------|-----------------------------------|
| GET    | `/libros`              | Retrieves all books               |
| GET    | `/libros/:id`          | Retrieves a book using an ID      |
| GET    | `/libros/buscar/:param`| Retrieves a book using a parameter|
| POST   | `/libros`              | Creates a new book                |
| PUT    | `/libros/:id`          | Updates a book                    |
| DELETE | `/libros/:id`          | Deletes a book                    |

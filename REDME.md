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
| Method | Route          | Description                       |
|--------|----------------|-----------------------------------|
| GET    | `/books`       | Retrieves all books               |
| GET    | `/books/:id`   | Retrieves a book using an ID      |
| GET    | `/books/:param`| Retrieves a book using a parameter|
| POST   | `/books`       | Creates a new book                |
| PUT    | `/books/:id`   | Updates a book                    |
| DELETE | `/books/:id`   | Deletes a book                    |

const AuthorController = require('../controllers/author.controllers')
module.exports = app => {

    app.get('/api/author', AuthorController.author)
    app.get('/api/author/:id', AuthorController.getOneAuthor)
    app.put('/api/updateAuthor/:id', AuthorController.updateAuthor )
    app.post('/api/createAuthor', AuthorController.createAuthor)
    app.delete('/api/deleteAuthor/:id', AuthorController.deleteAuthor)
}
const jokeController = require('../controllers/jokes.controller')

module.exports = app => {
    app.get('/api/jokes', jokeController.allJokes)
    app.get('/api/jokes/:id', jokeController.oneJoke)
    app.put('/api/jokes/:id', jokeController.updateJoke)
    app.post('/api/jokes', jokeController.createNewJoke)
    app.delete('/api/jokes/:id', jokeController.deleteJoke)
}
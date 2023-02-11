const Joke = require('../models/jokes.models')

module.exports.allJokes = (req,res) => {
    Joke.find({ })
        .then((allJokes) => {
            res.json(allJokes)
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        })
}

module.exports.oneJoke = (req,res) => {
    Joke.findOne({_id: req.params.id})
        .then(result => {
            res.json(result)
        })
        .catch(err => {
            res.json({ message: 'Something went wrong', error: err })
        })
}

module.exports.createNewJoke = (req,res) => {
    Joke.create(req.body)
        .then(newJoke => {
            res.json(newJoke)
        })
        .catch(err => {
            res.json({ message: 'Something went wrong', error: err })
        })
}

module.exports.updateJoke = (req,res) => {
    Joke.findOneAndUpdate({ _id: req.params.id },
        req.body,
        { new: true, runValidators: true } )
        .then(updatedJoke => {
            res.json(updatedJoke)
        })
        .catch(err => {
            res.json({ message: 'Something went wrong', error: err })
        })
}

module.exports.deleteJoke = (req,res) => {
    Joke.deleteOne( { _id: req.params.id })
        .then(result => {
            res.json({ result: result })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        })
}
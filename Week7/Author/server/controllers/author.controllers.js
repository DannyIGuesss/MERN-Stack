const Author = require('../models/author.model')

module.exports = {
    author: (req,res) => {
        Author.find({})
            .then( results => {
                res.json(results)
            })
            .catch(err => {
                console.log(err);
            })
    },

    getOneAuthor: (req,res) => {
        Author.findOne({_id: req.params.id})
            .then(results => {
                console.log(results);
                res.json(results)
            })
            .catch(err => {
                console.log(err);
            })
    },

    updateAuthor: (req,res) => {
        Author.findOneAndUpdate({_id: req.params.id}, req.body, { new: true, runValidators: true })
            .then (results => {
                res.json(results)
            })
            .catch((err) => {
                res.status(500).json(err)
            })
    },

    createAuthor: (req,res) => {
        Author.create(req.body)
            .then( results => {
                res.json(results)
            })
            .catch((err) => {
                res.status(500).json(err)
            })
    },

    deleteAuthor: (req,res) => {
        Author.deleteOne({_id: req.params.id})
            .then(results => {
                res.json(results);
            })
            .catch (err => {
                console.log(err);
            })
    }
}
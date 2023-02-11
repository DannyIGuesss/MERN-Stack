const mongoose = require('mongoose');

const jokeSchema = new mongoose.Schema({
    setup: "",
    punchline: ""
})

const Joke = mongoose.model("Joke", jokeSchema)

module.exports = Joke
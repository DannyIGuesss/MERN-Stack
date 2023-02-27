const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    fullName: {
        type: String,
        require: [true, 'Author Name is required'],
        minLength: [3, 'Name must be more than 3 characters long']
    }
}, {timestamps: true})
module.exports = mongoose.model('Author', AuthorSchema)
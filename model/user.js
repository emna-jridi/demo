const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    id: Number,
    username: String,
    email: String,
    age: Number,
})
module.exports = mongoose.model('user',userSchema) ;
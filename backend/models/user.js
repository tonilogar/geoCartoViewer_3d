const { Schema, model } = require('mongoose')

const UserSchema = new Schema({
    userName: { type: String, required: true },
    category: { type: String, required: true },
    email: { type: String, required: true },
    telefon: { type: String },
    imageUser: { type: String },
    aboutYou: { type: String },
    created_at: { type: Date, default: Date.now }
})

module.exports = model('user', UserSchema)
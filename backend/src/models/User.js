const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
        username: {type: String, required: true, unique: true, trim: true},
        email: { type: String },
        password: { type: String },
        date: { type: Date, default: Date.now },
        
    }, 
    {
        timestamps: true
    });

module.exports = model('User', userSchema);
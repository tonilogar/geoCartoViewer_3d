const { Schema, model } = require('mongoose');

const BackgroundSchema = new Schema({
    titleBackground: { type: String, required: true },
    dataBackground: { type: Array, required: true },
    created_at: { type: Date, default: Date.now }
});

module.exports = model('background', BackgroundSchema);
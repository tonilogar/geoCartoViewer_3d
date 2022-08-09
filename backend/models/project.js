const { Schema, model } = require('mongoose');

const ProjectSchema = new Schema({
    projectType: { type: String, required: true },
    titleProject: { type: String, required: true },
    subTitleProject: { type: String, required: true },
    dataProject: { type: Array, required: true },
    imageLegend: { type: String },
    created_at: { type: Date, default: Date.now }
});

module.exports = model('project', ProjectSchema);
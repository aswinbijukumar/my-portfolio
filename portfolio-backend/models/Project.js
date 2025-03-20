const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    githubLink: { type: String },
    liveDemo: { type: String },
    technologies: [{ type: String }]
});

module.exports = mongoose.model("Project", projectSchema);

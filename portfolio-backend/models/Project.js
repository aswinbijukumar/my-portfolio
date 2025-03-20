const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    githubLink: { type: String },
    liveDemo: { type: String },
    technologies: [{ type: String }],
    image: { type: String } // <-- Add this field for project image URL
});

module.exports = mongoose.model("Project", projectSchema);

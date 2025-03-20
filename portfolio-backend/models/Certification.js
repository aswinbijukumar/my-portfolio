const mongoose = require("mongoose");

const certificationSchema = new mongoose.Schema({
    title: { type: String, required: true },
    issuingOrganization: { type: String, required: true },
    issueDate: { type: Date, required: true },
    certificateUrl: { type: String }
});

module.exports = mongoose.model("Certification", certificationSchema);

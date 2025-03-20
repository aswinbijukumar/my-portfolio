const mongoose = require("mongoose");

const certificationSchema = new mongoose.Schema({
    title: { type: String, required: true },
    issuingOrganization: { type: String, required: true },
    issueDate: { type: Date, required: true },
    linkedinUrl: { type: String, required: true } // ✅ This is now required
});

module.exports = mongoose.model("Certification", certificationSchema);

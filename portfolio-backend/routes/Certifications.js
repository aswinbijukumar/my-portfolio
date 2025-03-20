const express = require("express");
const Certification = require("../models/Certification");

const router = express.Router();

// Add a certification
router.post("/", async (req, res) => {
    try {
        const { title, issuingOrganization, issueDate, linkedinUrl } = req.body;

        // Validate required fields
        if (!title || !issuingOrganization || !issueDate || !linkedinUrl) {
            return res.status(400).json({ message: "All fields, including LinkedIn URL, are required" });
        }

        const certification = new Certification({ title, issuingOrganization, issueDate, linkedinUrl });
        await certification.save();
        res.status(201).json(certification);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Get all certifications
router.get("/", async (req, res) => {
    try {
        const certifications = await Certification.find();
        res.json(certifications);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;

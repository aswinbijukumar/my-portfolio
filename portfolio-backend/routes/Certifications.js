const express = require("express");
const Certification = require("../models/Certification");

const router = express.Router();

// Add a certification
router.post("/", async (req, res) => {
    try {
        const certification = new Certification(req.body);
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

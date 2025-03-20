const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact"); // Import the Contact model

// GET all contacts
router.get("/", async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (error) {
    console.error("❌ Error fetching contacts:", error.message);
    res.status(500).json({ error: "Failed to fetch contacts" });
  }
});

// POST a new contact (Store in MongoDB)
router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Create and save new contact
    const newContact = new Contact({ name, email, message });
    await newContact.save();

    // Send response
    res.status(201).json({ message: "Message sent successfully!" });

  } catch (error) {
    console.error("❌ Error saving contact:", error.message);
    res.status(500).json({ error: "Failed to send message. Please try again later." });
  }
});

module.exports = router;

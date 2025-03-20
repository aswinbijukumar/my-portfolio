require("dotenv").config();  // Load the environment variables from the .env file
const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact"); // Import the Contact model
const nodemailer = require("nodemailer"); // Import Nodemailer

// Create a transport for Nodemailer
const transporter = nodemailer.createTransport({
  service: "Gmail", // Use Gmail for sending emails
  auth: {
    user: process.env.EMAIL_USER, // Add your email from the .env file
    pass: process.env.EMAIL_PASS, // Add your password or app password from the .env file
  },
});

// Function to send email using Nodemailer
const sendEmail = (name, email, message) => {
  const mailOptions = {
    from: process.env.EMAIL_USER, // sender address
    to: "aswinblm10@gmail.com", // receiver email (where you want to receive the messages)
    subject: "New Contact Message", // Subject line
    text: `You have received a new message from ${name} (${email}):\n\n${message}`, // Email body
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("❌ Error sending email:", error);
    } else {
      console.log("✔️ Email sent: " + info.response);
    }
  });
};

// GET all contacts (Optional, for checking saved data)
router.get("/", async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (error) {
    console.error("❌ Error fetching contacts:", error.message);
    res.status(500).json({ error: "Failed to fetch contacts" });
  }
});

// POST a new contact (Store in MongoDB and send an email)
router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Create and save new contact to MongoDB
    const newContact = new Contact({ name, email, message });
    await newContact.save();

    // Send email notification
    sendEmail(name, email, message);

    // Send response
    res.status(201).json({ message: "Message sent successfully!" });

  } catch (error) {
    console.error("❌ Error saving contact:", error.message);
    res.status(500).json({ error: "Failed to send message. Please try again later." });
  }
});

module.exports = router;

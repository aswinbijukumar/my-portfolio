require("dotenv").config();
const express = require("express");
const Contact = require("../models/Contact");
const nodemailer = require("nodemailer");

const router = express.Router();

// Nodemailer Transporter Setup
const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Verify Nodemailer Transporter
transporter.verify((error, success) => {
  if (error) {
    console.error("❌ Nodemailer transporter verification failed:", error);
  } else {
    console.log("✔️ Nodemailer transporter is ready to send emails");
  }
});

// Function to send email
const sendEmail = async (name, email, message) => {
  try {
    const mailOptions = {
      from: process.env.EMAIL_USER, // Sender (your email)
      to: process.env.EMAIL_USER, // Recipient (your email)
      subject: "New Contact Form Submission",
      text: `You have received a new message:\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`,
      replyTo: email, // Allows you to reply directly to the sender
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("✔️ Email sent successfully: ", info.response);
  } catch (error) {
    console.error("❌ Email sending failed: ", error.message);
    console.error("❌ Full error object:", error);
  }
};

// POST a new contact (Save to DB & Send Email)
router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;
    console.log("📨 Received form data:", { name, email, message });

    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Save to MongoDB
    const newContact = new Contact({ name, email, message });
    await newContact.save();
    console.log("✔️ Contact saved to database:", newContact);

    // Send email
    await sendEmail(name, email, message);

    res.status(201).json({ message: "Message sent successfully!" });
  } catch (error) {
    console.error("❌ Error saving contact:", error.message);
    res.status(500).json({ error: "Failed to send message. Please try again later." });
  }
});

module.exports = router;
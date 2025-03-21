require("dotenv").config(); // Load environment variables
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// Import Routes
const certificationRoutes = require("./routes/Certifications");
const projectRoutes = require("./routes/Projects");
const contactRoutes = require("./routes/Contacts");

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 3000; // Use environment variable for port

// Middleware
app.use(cors({
    origin: process.env.FRONTEND_URL || "https://aswinbijukumar.vercel.app", // Allow your hosted frontend
    credentials: true, // Allow cookies and authentication headers
  }));
app.use(express.json()); // Parse JSON request bodies

// MongoDB connection URI
const mongoURI = process.env.MONGODB_URI;

// Connect to MongoDB Atlas
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch(err => console.error("❌ Database connection error:", err));

// MongoDB connection event handlers
mongoose.connection.on("connected", () => {
  console.log("🚀 MongoDB connection established");
});

mongoose.connection.on("error", (err) => {
  console.error("❌ MongoDB connection error:", err);
});

mongoose.connection.on("disconnected", () => {
  console.log("⚠️ MongoDB connection disconnected");
});

// Gracefully close the MongoDB connection on app termination
process.on("SIGINT", () => {
  mongoose.connection.close(() => {
    console.log("🛑 MongoDB connection closed due to app termination");
    process.exit(0);
  });
});

// Routes
app.use("/api/certifications", certificationRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/contacts", contactRoutes);

// Root Route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to my API" });
});

// 404 Route (Handle undefined routes)
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error("❌ Global error handler:", err.message);
  res.status(500).json({ error: "Something went wrong on the server" });
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
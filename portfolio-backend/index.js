const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// Import Routes
const certificationRoutes = require("./routes/Certifications"); // Corrected casing
const projectRoutes = require("./routes/Projects"); // Corrected casing
const contactRoutes = require("./routes/Contacts"); // Corrected casing

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Connect to MongoDB Atlas
mongoose.connect("mongodb+srv://aswinbijukumar:aswinrdjmessi5@portfolio.chdg9.mongodb.net/?retryWrites=true&w=majority&appName=portfolio", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("✅ Connected to MongoDB"))
  .catch(err => console.error("❌ Database connection error:", err));

// Routes
app.use("/api/certifications", certificationRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/contacts", contactRoutes);

// Root Route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to my API" });
});

// Start Server
app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
});

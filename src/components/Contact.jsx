import React, { useState } from "react";
import axios from "axios";
import "./Contact.css";
import "bulma/css/bulma.min.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState({ type: "", message: "" });

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/api/contacts", formData);
      if (response.status === 201) {
        setStatus({ type: "success", message: "Message sent successfully!" });
        setFormData({ name: "", email: "", message: "" }); // Reset form
      }
    } catch (error) {
      console.error("Error sending message:", error.response ? error.response.data : error.message);
      setStatus({ type: "error", message: "Failed to send message. Please try again." });
    }
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <h1 className="title has-text-centered" style={{ color: "#333" }}>Contact Me</h1>
        <p className="subtitle has-text-centered" style={{ color: "#666" }}>
          Let's work together!
        </p>

        {/* Contact Form */}
        <div className="columns is-centered">
          <div className="column is-half">
            <form onSubmit={handleSubmit}>
              {/* Name Field */}
              <div className="field">
                <label className="label" style={{ color: "#333" }}>Name</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    style={{
                      backgroundColor: "#f5f5f5",
                      color: "#333",
                      border: "1px solid #ddd",
                      borderRadius: "8px",
                    }}
                  />
                </div>
              </div>

              {/* Email Field */}
              <div className="field">
                <label className="label" style={{ color: "#333" }}>Email</label>
                <div className="control">
                  <input
                    className="input"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    required
                    style={{
                      backgroundColor: "#f5f5f5",
                      color: "#333",
                      border: "1px solid #ddd",
                      borderRadius: "8px",
                    }}
                  />
                </div>
              </div>

              {/* Message Field */}
              <div className="field">
                <label className="label" style={{ color: "#333" }}>Message</label>
                <div className="control">
                  <textarea
                    className="textarea"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    required
                    style={{
                      backgroundColor: "#f5f5f5",
                      color: "#333",
                      border: "1px solid #ddd",
                      borderRadius: "8px",
                    }}
                  ></textarea>
                </div>
              </div>

              {/* Submit Button */}
              <div className="field">
                <div className="control has-text-centered">
                  <button
                    className="button is-large"
                    type="submit"
                    style={{
                      backgroundColor: "#00ffff",
                      color: "white",
                      borderRadius: "8px",
                      transition: "all 0.3s",
                    }}
                  >
                    Send Message
                  </button>
                </div>
              </div>

              {/* Status Message */}
              {status.message && (
                <p
                  className="has-text-centered"
                  style={{
                    color: status.type === "success" ? "green" : "red",
                    fontWeight: "bold",
                  }}
                >
                  {status.message}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

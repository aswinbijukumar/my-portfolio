import React, { useState, useEffect } from "react";
import axios from "axios";
import "bulma/css/bulma.min.css";

const Certifications = () => {
  const [certifications, setCertifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCertifications = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/certifications");
        console.log("Certifications Data:", response.data);
        setCertifications(response.data);
      } catch (error) {
        setError("Failed to load certifications. Please try again later.");
        console.error("Error fetching certifications:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCertifications();
  }, []);

  return (
    <section
      className="section"
      id="certifications"
      style={{
        background: "linear-gradient(135deg, #ffffff 0%, #6E07F3 100%)",
        padding: "3rem 0",
      }}
    >
      <div className="container">
        <h2 className="title is-2 has-text-centered" style={{ color: "#4B0082" }}>
          Certifications
        </h2>

        {loading && <p className="has-text-centered has-text-white">Loading certifications...</p>}
        {error && <p className="has-text-centered has-text-danger">{error}</p>}

        {!loading && !error && certifications.length > 0 ? (
          <div
            className="certifications-container"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "stretch", // Ensures cards have the same height
              overflowX: "auto",
              gap: "20px",
              paddingBottom: "20px",
              scrollBehavior: "smooth",
              maxWidth: "100%",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="card has-text-centered"
                style={{
                  flex: "0 0 auto",
                  width: "300px", // Fixed width for all cards
                  height: "350px", // Ensures uniform height
                  borderRadius: "12px",
                  overflow: "hidden",
                  backdropFilter: "blur(10px)",
                  background: "rgba(255, 255, 255, 0.2)",
                  boxShadow: "0px 5px 15px rgba(0,0,0,0.2)",
                  transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                  e.currentTarget.style.boxShadow = "0px 8px 20px rgba(0,0,0,0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "0px 5px 15px rgba(0,0,0,0.2)";
                }}
              >
                <div className="card-content" style={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                  <div>
                    <p className="title is-5 has-text-white">{cert.title}</p>
                    <p className="subtitle is-6 has-text-light">
                      <strong>Issued by:</strong> {cert.issuingOrganization}
                    </p>
                    <p className="is-size-7 has-text-light">
                      <strong>Date Earned:</strong> {new Date(cert.issueDate).toLocaleDateString()}
                    </p>
                  </div>

                  {/* View Certificate Button */}
                  {cert.linkedinUrl && (
                    <a
                      href={cert.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="button is-light is-fullwidth mt-3"
                      style={{
                        borderRadius: "8px",
                        transition: "background 0.3s",
                      }}
                      onMouseEnter={(e) => (e.target.style.background = "#5A06D2")}
                      onMouseLeave={(e) => (e.target.style.background = "white")}
                    >
                      View Certificate
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          !loading && <p className="has-text-centered has-text-white">No certifications found.</p>
        )}
      </div>
    </section>
  );
};

export default Certifications;

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
        console.log("Certifications Data:", response.data); // Debugging line
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
    <section className="section" id="certifications">
      <div className="container">
        <h2 className="title is-2 has-text-centered">Certifications</h2>

        {loading && <p className="has-text-centered">Loading certifications...</p>}
        {error && <p className="has-text-centered has-text-danger">{error}</p>}

        {!loading && !error && certifications.length > 0 ? (
          <div className="columns is-multiline">
            {certifications.map((cert, index) => (
              <div className="column is-one-third" key={index}>
                <div className="card">
                  <div className="card-content">
                    <p className="title is-4">{cert.title}</p>
                    <p className="subtitle is-6">
                      <strong>Issued by:</strong> {cert.issuingOrganization}
                    </p>
                    <p className="subtitle is-6">
                      <strong>Date Earned:</strong> {new Date(cert.issueDate).toLocaleDateString()}
                    </p>
                    {cert.certificateUrl && (
                      <a
                        href={cert.certificateUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="button is-primary is-small"
                      >
                        View Certificate
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          !loading && <p className="has-text-centered has-text-danger">No certifications found.</p>
        )}
      </div>
    </section>
  );
};

export default Certifications;

import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Projects.css";
import "bulma/css/bulma.min.css";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/projects");
        console.log("Projects Data:", response.data); // Debugging line
        setProjects(response.data);
      } catch (error) {
        setError("Failed to load projects. Please try again later.");
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section id="projects" className="section" style={{ backgroundColor: "#6E07F3" }}>
      <div className="container">
        <h1 className="title has-text-centered" style={{ color: "white" }}>Projects</h1>
        <p className="subtitle has-text-centered" style={{ color: "white" }}>
          Here are some of the projects I've worked on.
        </p>

        {/* Loading State */}
        {loading && <p className="has-text-centered" style={{ color: "white" }}>Loading projects...</p>}

        {/* Error State */}
        {error && <p className="has-text-centered has-text-danger">{error}</p>}

        {/* Projects Grid */}
        {!loading && !error && projects.length > 0 ? (
          <div className="columns is-multiline">
            {projects.map((project, index) => (
              <div className="column is-one-third" key={index}>
                <div className="card project-card" style={{ maxWidth: "300px", margin: "0 auto" }}>
                  <div className="card-image">
                    <figure className="image is-4by3">
                      <img src={project.image || "default_project_image.jpg"} alt={project.name} />
                    </figure>
                  </div>
                  <div className="card-content">
                    <p className="title is-5" style={{ color: "white" }}>{project.name}</p>
                    <p className="subtitle is-6" style={{ color: "white" }}>{project.description}</p>
                    <a href={project.githubLink} className="is-small" style={{ color: "white", textDecoration: "underline" }} target="_blank" rel="noopener noreferrer">
                      GitHub
                    </a>
                    {project.liveDemo && (
                      <>
                        {" | "}
                        <a href={project.liveDemo} className="is-small" style={{ color: "white", textDecoration: "underline" }} target="_blank" rel="noopener noreferrer">
                          Live Demo
                        </a>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          !loading && <p className="has-text-centered" style={{ color: "white" }}>No projects found.</p>
        )}

        {/* Additional Information */}
        <div className="has-text-centered" style={{ marginTop: "2rem" }}>
          <p style={{ color: "white" }}>If you are interested and want to see more of them, feel free to reach out!</p>
          <a href="mailto:aswinblm@gmail.com" className="is-small" style={{ color: "yellow", fontWeight: "bold", textDecoration: "underline" }}>
            Email Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;

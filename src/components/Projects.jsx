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
        const response = await axios.get("https://my-portfolio-1wj8.onrender.com/api/projects");
        console.log("Projects Data:", response.data);
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
        <h1 className="title has-text-centered has-text-white">Projects</h1>
        <p className="subtitle has-text-centered has-text-white">
  Here are some of the projects I've worked on. You can reach me at <a href="mailto:aswinblm10@gmail.com" className="has-text-white has-text-weight-bold is-underlined">aswinblm10@gmail.com</a>.
</p>

        {loading && <p className="has-text-centered has-text-white">Loading projects...</p>}
        {error && <p className="has-text-centered has-text-danger">{error}</p>}

        {!loading && !error && projects.length > 0 ? (
          <div className="columns is-multiline is-centered">
            {projects.map((project, index) => (
              <div key={index} className="column is-4-desktop is-6-tablet is-12-mobile">
                <div 
                  className="card project-card"
                  style={{ 
                    borderRadius: "12px", 
                    overflow: "hidden", 
                    backgroundColor: "#4C06B3", // Darker shade of purple for contrast
                    boxShadow: "0px 5px 15px rgba(0,0,0,0.2)",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease"
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
                  <div className="card-image">
                    <figure className="image is-5by3">
                      <img 
                        src={project.image || "https://via.placeholder.com/300"} 
                        alt={project.name} 
                        style={{ objectFit: "cover", width: "100%", height: "100%" }}
                      />
                    </figure>
                  </div>
                  <div className="card-content" style={{ padding: "16px" }}>
                    <p className="title is-6 has-text-white">{project.name}</p>
                    <p className="subtitle is-7 has-text-white">{project.description}</p>

                    {project.technologies && project.technologies.length > 0 && (
                      <div className="tags">
                        {project.technologies.map((tech, idx) => (
                          <span key={idx} className="tag is-warning is-light">{tech}</span>
                        ))}
                      </div>
                    )}

                    <div className="buttons mt-3">
                      {project.githubLink && (
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="button is-small is-dark">
                          GitHub
                        </a>
                      )}
                      {project.liveDemo && (
                        <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="button is-small is-success">
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          !loading && <p className="has-text-centered has-text-white">No projects found.</p>
        )}
      </div>
    </section>
  );
};

export default Projects;

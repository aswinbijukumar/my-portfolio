import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "bulma/css/bulma.min.css";
import "../components/Navbar.css"; // Import custom CSS
import logo from "../assets/logonew.png"; // Import the logo image

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const location = useLocation();

  return (
    <nav className="navbar is-white py-3" role="navigation" aria-label="main navigation">
      <div className="container is-flex is-align-items-center is-justify-content-space-between">
        
        {/* Navbar Brand (Logo) */}
        <div className="navbar-brand">
          <Link to="/" className="navbar-item" onClick={() => setIsActive(false)}>
            <img 
              src={logo} 
              alt="Logo" 
              style={{ height: "130px", width: "auto", maxHeight: "150px" }} // Adjust size here
            />
          </Link>

          {/* Hamburger Menu for Mobile */}
          <a
            role="button"
            className={`navbar-burger ${isActive ? "is-active" : ""}`}
            aria-label="menu"
            aria-expanded="false"
            onClick={() => setIsActive(!isActive)}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        {/* Navbar Menu */}
        <div className={`navbar-menu ${isActive ? "is-active" : ""}`}>
          <div className="navbar-end">
            <Link 
              to="/projects" 
              className={`navbar-item has-text-weight-bold is-size-4 p-4 ${location.pathname === "/projects" ? "has-text-primary" : ""}`}
              style={{
                color: location.pathname === "/projects" ? "#6E07F3" : "",
                transition: "color 0.3s ease, transform 0.3s ease", // Smooth transition for color and transform
              }}
              onClick={() => setIsActive(false)}
              onMouseEnter={(e) => {
                e.target.style.color = "#6E07F3";  // Apply the purple color when hovered
                e.target.style.transform = "scale(1.1)";  // Scale up the text on hover
              }}
              onMouseLeave={(e) => {
                e.target.style.color = "";  // Reset color when hover is removed
                e.target.style.transform = "scale(1)";  // Reset scaling
              }}
            >
              Projects
            </Link>

            <Link 
              to="/contact" 
              className="navbar-item p-4" 
              onClick={() => setIsActive(false)}
            >
              <button 
                className="button is-rounded is-large is-uppercase has-text-weight-bold"
                style={{
                  backgroundColor: "#6E07F3", 
                  color: "white",
                  transition: "all 0.3s ease", // Smooth transition for background and transform
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#4e06b2";  // Darker color on hover
                  e.target.style.transform = "scale(1.1)";  // Scale up the button
                  e.target.style.boxShadow = "0 10px 20px rgba(110, 7, 243, 0.4)";  // Add a shadow effect
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "#6E07F3";  // Reset color
                  e.target.style.transform = "scale(1)";  // Reset scaling
                  e.target.style.boxShadow = "none";  // Remove shadow
                }}
              >
                Say Hello
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../components/Navbar.css";
import "bulma/css/bulma.min.css";
import logo from "../assets/logonew.png"; // Import the logo image

const Navbar = () => {
  const [isActive, setIsActive] = useState(false); // State for mobile menu
  const location = useLocation(); // Get current route location

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsActive(!isActive);
  };

  // Close mobile menu when a link is clicked
  const closeMobileMenu = () => {
    setIsActive(false);
  };

  return (
    <nav className="navbar has-background-white" role="navigation" aria-label="main navigation">
      <div className="container">
        {/* Navbar Brand */}
        <div className="navbar-brand">
          <Link to="/" onClick={closeMobileMenu} className="navbar-logo-container" style={{ marginLeft: "100px", display: "flex", alignItems: "center" }}>
            <img
              src={logo}
              alt="Logo"
              className="navbar-logo"
              style={{ height: "100px", flexShrink: 0 }} 
            />
          </Link>

          {/* Hamburger Menu for Mobile */}
          <a
            role="button"
            className={`navbar-burger ${isActive ? "is-active" : ""}`}
            aria-label="menu"
            aria-expanded="false"
            onClick={toggleMobileMenu}
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
              className={`navbar-item button-style ${location.pathname === "/projects" ? "is-active" : ""}`}
              onClick={closeMobileMenu}
            >
              Projects
            </Link>
            <Link
              to="/contact"
              className={`navbar-item button-style ${location.pathname === "/contact" ? "is-active" : ""}`}
              onClick={closeMobileMenu}
            >
              Say Hello
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
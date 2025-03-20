import React from "react";
import logo from "../assets/logonew1.png"; // Import logo

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faWhatsapp,
  faYoutube,
  faLinkedin,
  faGithub,
  faTwitter,
  faTwitch,
} from "@fortawesome/free-brands-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons"; // Placeholder for LeetCode icon

const Footer = () => {
  return (
    <footer className="footer" style={{ backgroundColor: "#6E07F3", color: "white" }}>
      <div className="container">
        <div className="content has-text-centered">
          {/* Logo */}
          <img
            src={logo}
            alt="Logo"
            style={{ height: "50px", marginBottom: "1rem" }}
          />

          {/* Sample Quote */}
          <p className="is-size-5" style={{ marginBottom: "1rem" }}>
            "Innovation distinguishes between a leader and a follower."
          </p>

          {/* Social Media Icons */}
          <div className="social-icons" style={{ marginBottom: "1rem" }}>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: "white", margin: "0 0.5rem" }}>
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a href="https://wa.me/yourphonenumber" target="_blank" rel="noopener noreferrer" style={{ color: "white", margin: "0 0.5rem" }}>
              <FontAwesomeIcon icon={faWhatsapp} size="2x" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" style={{ color: "white", margin: "0 0.5rem" }}>
              <FontAwesomeIcon icon={faYoutube} size="2x" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{ color: "white", margin: "0 0.5rem" }}>
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" style={{ color: "white", margin: "0 0.5rem" }}>
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{ color: "white", margin: "0 0.5rem" }}>
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a href="https://twitch.tv" target="_blank" rel="noopener noreferrer" style={{ color: "white", margin: "0 0.5rem" }}>
              <FontAwesomeIcon icon={faTwitch} size="2x" />
            </a>
            <a href="https://leetcode.com/yourusername" target="_blank" rel="noopener noreferrer" style={{ color: "white", margin: "0 0.5rem" }}>
              <FontAwesomeIcon icon={faCode} size="2x" /> {/* LeetCode Icon */}
            </a>
          </div>

          {/* Copyright Text */}
          <p>
            &copy; {new Date().getFullYear()} My Portfolio. Built with <strong>React</strong> and{" "}
            <strong>Bulma</strong>.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

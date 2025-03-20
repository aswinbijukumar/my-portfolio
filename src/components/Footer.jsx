import React from "react";
import logo from "../assets/logonew.png"; // Import logo
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
    <footer className="footer has-background-light has-text-centered">
      <div className="container">
        <div className="columns is-multiline is-centered">
          
          {/* Logo */}
          <div className="column is-12">
            <figure className="image is-128x128 is-inline-block">
              <img src={logo} alt="Logo" className="is-rounded" />
            </figure>
          </div>

          {/* Social Media Icons */}
          <div className="column is-12">
            <div className="buttons is-centered">
              {[
                { link: "https://www.instagram.com/aswin_bijukumar/", icon: faInstagram },
                { link: "https://wa.me/8590184168", icon: faWhatsapp },
                { link: "https://youtube.com/@myr_oogysama?si=fweedgbPZNQd343p", icon: faYoutube },
                { link: "https://www.linkedin.com/in/aswinbijukumar/", icon: faLinkedin },
                { link: "https://github.com/aswinbijukumar/", icon: faGithub },
                { link: "https://x.com/Aswinlm101", icon: faTwitter },
                { link: "https://www.twitch.tv/oogysama", icon: faTwitch },
                { link: "https://leetcode.com/u/OOGYSAMA/", icon: faCode },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button is-light is-medium"
                  style={{ color: "#6E07F3", transition: "color 0.3s ease" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#3a0ca3")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#6E07F3")}
                >
                  <span className="icon is-large">
                    <FontAwesomeIcon icon={social.icon} size="2x" />
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Quote */}
          <div className="column is-12">
            <p className="has-text-grey-dark is-size-5 has-text-weight-semibold" style={{ fontFamily: "Poppins, sans-serif", color: "#3a0ca3" }}>
              "Code with passion, build with purpose."
            </p>
          </div>

          {/* Copyright */}
          <div className="column is-12">
            <p className="has-text-grey-dark is-size-6" style={{ fontFamily: "Poppins, sans-serif", fontSize: "1rem" }}>
              &copy; {new Date().getFullYear()} <strong style={{ color: "#6E07F3" }}>My Portfolio</strong>. 
              <br />
              Built with <strong className="has-text-primary">React</strong> & <strong className="has-text-danger">Bulma</strong>.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

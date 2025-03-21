import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPalette,
  faCode,
  faLightbulb,
  faMobile,
  faRocket,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import "bulma/css/bulma.min.css";
import "./Aboutme.css"; // Custom styles for interactivity

const skills = [
  { icon: faPalette, title: "Designer", color: "#e63946", desc: "Creating visually stunning and user-friendly designs." },
  { icon: faCode, title: "Front-End Developer", color: "#00b4d8", desc: "Building high-performance, responsive web applications." },
  { icon: faLightbulb, title: "Problem Solver", color: "#f4a261", desc: "Enjoy tackling complex challenges efficiently." },
  { icon: faMobile, title: "Mobile Design", color: "#2a9d8f", desc: "Crafting seamless mobile-first experiences." },
  { icon: faRocket, title: "Fast Development", color: "#9b5de5", desc: "Delivering projects quickly with high quality." },
  { icon: faUsers, title: "Team Player", color: "#ff6b6b", desc: "Thriving in collaboration with teams & clients." },
];

const AboutMe = () => {
  return (
    <section id="about-me" className="section has-background-light">
      <div className="container">
        
        {/* Skills Grid */}
        <div className="columns is-multiline is-centered mt-5">
          {skills.map((skill, index) => (
            <div key={index} className="column is-4-desktop is-6-tablet is-12-mobile">
              <div className="box skill-card">
                <span className="icon is-large">
                  <FontAwesomeIcon
                    icon={skill.icon}
                    size="2x"
                    style={{ color: skill.color }}
                    className="skill-icon"
                  />
                </span>
                <h3 className="title is-5">{skill.title}</h3>
                <p className="subtitle is-6">{skill.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

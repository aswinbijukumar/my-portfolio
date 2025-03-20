import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPalette,
  faCode,
  faChalkboardTeacher,
  faMobile,
  faRocket,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import "./AboutMe.css";
import "bulma/css/bulma.min.css";

const AboutMe = () => {
  return (
    <section id="about-me" className="section about-me">
      <div className="container">
        {/* Two-Column Layout */}
       

        {/* Skills Grid */}
        <div className="columns is-multiline">
          {/* Designer */}
          <div className="column is-4">
            <div className="skill-box has-text-centered">
              <span className="icon is-large" style={{ color: ' ' }}>
                <FontAwesomeIcon icon={faPalette} size="2x" />
              </span>
              <h2 className="title is-5">Designer</h2>
              <p className="subtitle is-6">
                I create visually stunning designs that are both user-friendly and impactful.
              </p>
            </div>
          </div>

          {/* Front-End Developer */}
          <div className="column is-4">
            <div className="skill-box has-text-centered">
              <span className="icon is-large" style={{ color: '#00d1b2' }}>
                <FontAwesomeIcon icon={faCode} size="2x" />
              </span>
              <h2 className="title is-5">Front-End Developer</h2>
              <p className="subtitle is-6">
                I build responsive and performant web applications using modern technologies.
              </p>
            </div>
          </div>

          {/* Mentor */}
          <div className="column is-4">
            <div className="skill-box has-text-centered">
              <span className="icon is-large" style={{ color: '#00d1b2' }}>
                <FontAwesomeIcon icon={faChalkboardTeacher} size="2x" />
              </span>
              <h2 className="title is-5">Mentor</h2>
              <p className="subtitle is-6">
                I guide and inspire others to grow their skills and achieve their goals.
              </p>
            </div>
          </div>

          {/* Additional Skills (Optional) */}
          <div className="column is-4">
            <div className="skill-box has-text-centered">
              <span className="icon is-large" style={{ color: '#00d1b2' }}>
                <FontAwesomeIcon icon={faMobile} size="2x" />
              </span>
              <h2 className="title is-5">Mobile Design</h2>
              <p className="subtitle is-6">
                I specialize in creating mobile-friendly designs and interfaces.
              </p>
            </div>
          </div>

          <div className="column is-4">
            <div className="skill-box has-text-centered">
              <span className="icon is-large" style={{ color: '#00d1b2' }}>
                <FontAwesomeIcon icon={faRocket} size="2x" />
              </span>
              <h2 className="title is-5">Fast Development</h2>
              <p className="subtitle is-6">
                I deliver high-quality projects quickly and efficiently.
              </p>
            </div>
          </div>

          <div className="column is-4">
            <div className="skill-box has-text-centered">
              <span className="icon is-large" style={{ color: '#00d1b2' }}>
                <FontAwesomeIcon icon={faUsers} size="2x" />
              </span>
              <h2 className="title is-5">Collaboration</h2>
              <p className="subtitle is-6">
                I work well with teams and clients to bring ideas to life.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
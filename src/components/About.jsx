import React from "react";
import "./About.css";
import "bulma/css/bulma.min.css";

const About = () => {
  return (
    <section id="about" className="section" style={{ backgroundColor: "#6E07F3" }}> {/* Blue background color */}
      <div className="container">
        <h1 className="title has-text-centered" style={{ color: "#ffffff" }}>About Me</h1> {/* White text color */}
        <p className="subtitle has-text-centered" style={{ color: "#ffffff" }}>
          Hi, I'm a web developer with a passion for creating clean, responsive, and user-friendly websites.
        </p>

        {/* Detailed Description */}
        <div className="content has-text-centered">
          <p style={{ color: "#ffffff" }}>
            I'm a <strong>Full-stack Developer</strong> with expertise in building modern web applications using
            technologies like <strong>React</strong>, <strong>Node.js</strong>, and <strong>MongoDB</strong>. I have a
            strong passion for creating intuitive and efficient user experiences.
          </p>
          <p style={{ color: "#ffffff" }}>
            Over the years, I've worked on various projects, from small business websites to large-scale web
            applications. I enjoy solving complex problems and turning ideas into reality through code.
          </p>
          <p style={{ color: "#ffffff" }}>
            When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or
            enjoying a good cup of coffee.
          </p>
        </div>

       
      </div>
    </section>
  );
};

export default About;
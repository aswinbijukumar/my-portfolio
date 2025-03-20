import React from "react";
import "bulma/css/bulma.min.css";

const About = () => {
  return (
    <section id="about" className="section" style={{ backgroundColor: "#6E07F3", color: "white" }}>
      <div className="container has-text-centered">
        <h1 className="title is-size-2 has-text-weight-bold">Hi, I’m Aswin. Nice to meet you.</h1>
        <p className="is-size-4" style={{ maxWidth: "800px", margin: "0 auto" }}>
          A passionate <strong>developer, designer, and problem-solver</strong>, I’m currently pursuing my 
          Master’s degree at <strong>Amal Jyothi College of Engineering</strong>. I specialize in 
          <strong> full-stack web development, cloud computing, DevOps, UI/UX design, and automation</strong>.  
          From crafting sleek, interactive websites. I thrive on creating seamless digital experiences.  
          Beyond coding, I enjoy <strong> watching movies, and playing games</strong>.  
          Let’s build something extraordinary together! 🚀
        </p>
      </div>
    </section>
  );
};

export default About;

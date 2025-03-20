import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import AboutMe from "../components/Aboutme"; // Import the AboutMe component
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Certifications from "../components/Certifications";


const HomePage = () => {
  return (
    <div className="homepage">
      <Hero />
      <About />
      <AboutMe /> {/* Add the AboutMe component here */}
      <Projects />
      <Certifications/>
      <Contact />
      <Footer />
      
    </div>
  );
};

export default HomePage;
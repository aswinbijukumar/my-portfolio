import React from "react";
import "../components/Hero.css";
import "bulma/css/bulma.min.css";
import profilePhoto from "../assets/aswinpic.jpg"; // Import the profile photo
import heroDevices from "../assets/herocon.jpg"; // Import the devices illustration

const Hero = () => {
  return (
    <section className="hero is-fullheight" style={{ paddingTop: "20px" }}>
      {/* Reduced padding to bring content closer to navbar */}
      <div className="hero-body">
        <div className="container has-text-centered">
          {/* Profile Photo */}
          <div className="profile-photo-container">
            <img
              src={profilePhoto}
              alt="Aswin Bijukumar"
              className="profile-photo"
            />
          </div>

          {/* Title and Subtitle */}
          <h1 className="title is-1" style={{ marginBottom: "0.5rem" }}>
            Designer, Frontend Developer & Tech-Enthusiast
          </h1>
          <h2 className="subtitle is-3">
            I design and code beautifully simple things, and I love what I do.
          </h2>
        </div>
      </div>

      {/* Devices Illustration */}
      <div className="hero-foot">
        {/* Use Bulma's hero-foot for bottom alignment */}
        <div className="container has-text-centered">
          <img
            src={heroDevices}
            alt="Devices"
            className="devices-image"
            style={{ width: "100%", maxWidth: "800px", height: "auto" }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

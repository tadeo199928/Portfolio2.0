import React from "react";
import "./About.css";

const About: React.FC = () => {
  return (
    <section id="about" className="about-container">
      <div className="carrousel">
        <img
          src="https://media.licdn.com/dms/image/v2/D4D03AQGBsttCz1NH9w/profile-displayphoto-crop_800_800/B4DZpJbWp3GQAI-/0/1762168499454?e=1763596800&v=beta&t=Mp0RXu-DAfWtrxbemscf1RVwOMPlQ-quaq7YEud58eQ"
          alt="Jose Vasconcelos"
        />
      </div>
      <p>
        Front-end developer specializing in React and TypeScript, with hands-on
        experience creating dynamic, user-centric web applications. Proficient
        in the full development stack including Node.js, Git, and modern CSS
        frameworks. I bring a problem-solving mindset and quick learning ability
        to every project I tackle.
      </p>
      <a
        href="/Jose_Vasconcelos_CV.pdf"
        download="Jose_Vasconcelos_CV.pdf"
        className="download-cv-button"
      >
        Download CV
      </a>
    </section>
  );
};

export default About;

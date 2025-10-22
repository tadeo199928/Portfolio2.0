import React from "react";
import "./About.css";

const About: React.FC = () => {
  return (
    <section id="about" className="about-container">
      <div className="carrousel">
        <img
          src="https://media.licdn.com/dms/image/v2/D4D03AQGwBybA6rlNew/profile-displayphoto-shrink_800_800/B4DZRSpGbAHcAc-/0/1736553294135?e=1762992000&v=beta&t=QRq16GoHnYcllgV_yhb61ycGS5qLtGJGXWPaMWSU2No"
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

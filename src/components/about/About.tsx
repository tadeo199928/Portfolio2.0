import React from "react";
import "./About.css";

const About: React.FC = () => {
  return (
    <section className="about-container">
      <div className="carrousel">
        <img src="/Myimg.jpeg" alt="Photo of Jose Vasconcelos" loading="lazy" />
      </div>
      <div className="about-text">
        <p>
          Frontend-leaning Full Stack Developer with hands-on experience
          shipping production code at Bedrock Streaming, one of Europe's leading
          OTT platforms. Skilled in React, TypeScript, and modern testing (Jest,
          Cypress, Playwright), with additional backend exposure through
          Node.js, PHP, MySQL, and Docker. Background in data analysis and fraud
          detection brings a sharp eye for detail and strong documentation
          habits. Comfortable in Agile/Scrum teams across distributed
          environments.
        </p>

        <p>
          During my Frontend Developer internship at{" "}
          <strong>Bedrock Streaming</strong>, I contributed features to
          production codebases, collaborated in Agile/Scrum, and strengthened
          quality with tests across levels (Jest, Cypress, Playwright). I worked
          with API integration, state management, and component architecture.
        </p>
        <p>
          <strong>Related skills and Tools</strong>{" "}
        </p>
        <ul className="about-highlights">
          <li>Frontend: React, TypeScript, JavaScript, HTML, CSS</li>
          <li>Testing: Jest, Cypress, Playwright</li>
          <li>Tooling: Git, GitHub, Vite • Practices: Agile/Scrum</li>
          <li>Languages: Spanish (Native), Portuguese (C1), English (C1)</li>
        </ul>
      </div>
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

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
        I'm a Junior Frontend Developer based in Portugal. I build responsive,
        accessible web apps with React and TypeScript, and I care about clean
        components, testing, and great user experience. I'm open to roles in
        Portugal or remote (EU time zone).
      </p>

      <p>
        During my Frontend Developer internship at{" "}
        <strong>Bedrock Streaming</strong>, I contributed features to production
        codebases, collaborated in Agile/Scrum, and strengthened quality with
        tests across levels (Jest, Cypress, Playwright). I worked with API
        integration, state management, and component architecture.
      </p>
      <p><strong>Related skills and Tools</strong> </p>
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

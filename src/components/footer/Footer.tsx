import React from "react";
import "./Footer.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>
          &copy; {new Date().getFullYear()} Jose Vasconcelos. All rights
          reserved.
        </p>
        <div className="footer-links">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            <FaGithub />
            <span>GitHub</span>
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            <FaLinkedin />
            <span>LinkedIn</span>
          </a>
          <a
            href="mailto:your.email@example.com"
            className="footer-link"
          >
            <FaEnvelope />
            <span>Email</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
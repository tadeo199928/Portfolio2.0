import React from "react";
import "./Footer.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>
          &copy; {new Date().getFullYear()} Jose Vasconcelos
        </p>
        <div className="footer-links">
          <a
            href="https://github.com/tadeo199928"
            target="_blank"
            rel="Github"
            className="footer-link"
          >
            <FaGithub />
            <span>GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/tadeo199928j/"
            target="_blank"
            rel="LinkedIn"
            className="footer-link"
          >
            <FaLinkedin />
            <span>LinkedIn</span>
          </a>
          <a
            href="mailto:tadeo199928@gmail.com"
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
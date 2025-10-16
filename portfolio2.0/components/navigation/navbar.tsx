import { useState } from "react";
import { FaBars } from "react-icons/fa";
import "./navbar.css";

const NavigationBar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  return (
    <nav>
      <div className="navbar-container">
        <h1 className="navbar-title">My Portfolio</h1>
        <button
          className="navbar-toggle"
          onClick={() => {
            setMenuOpen((open) => !open);
            setDropdownOpen(false);
          }}
          aria-label="Toggle navigation"
        >
          <FaBars />
        </button>
        <ul className={`navbar-menu ${menuOpen ? "open" : ""}`}>
          <li className="navbar-item">
            <a href="#home">Home</a>
          </li>
          <li className="navbar-item">
            <a href="#about">About</a>
          </li>
          <li className="navbar-item dropdown">
            <button
              className="dropbtn"
              onClick={() => setDropdownOpen((open) => !open)}
              aria-expanded={dropdownOpen}
            >
              Projects
            </button>
            <ul className={`dropdown-menu ${dropdownOpen ? "open" : ""}`}>
              <li className="dropdown-item">
                <a href="#project1">Project 1</a>
              </li>
              <li className="dropdown-item">
                <a href="#project2">Project 2</a>
              </li>
              <li className="dropdown-item">
                <a href="#project3">Project 3</a>
              </li>
            </ul>
          </li>
          <li className="navbar-item">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavigationBar;

import { useState } from "react";
import { FaBars } from "react-icons/fa";
import "./navbar.css";
import Toggle from "../ui/darkMode/Toggle";
import { useDarkMode } from "../ui/darkMode/darkModeContext";

const NavigationBar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { isDarkMode, setIsDarkMode } = useDarkMode();

  const handleToggleChange = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <nav>
      <div className="navbar-container">
        <h1 className="navbar-title">Portfolio</h1>
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
          <li className="navbar-item">
            <Toggle handledChange={handleToggleChange} isChecked={isDarkMode} />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavigationBar;

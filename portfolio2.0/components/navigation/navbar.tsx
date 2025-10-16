import './navbar.css';
import React from "react";

const NavigationBar: React.FC = () => {
  return (
    <nav>
      <div className="navbar-container">
        <h1 className="navbar-title">My Portfolio</h1>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <a href="#home">Home</a>
          </li>
          <li className="navbar-item">
            <a href="#about">About</a>
          </li>
          <li className="navbar-item dropdown">
            <button className="dropbtn">Projects</button>
            <ul className="dropdown-menu">
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

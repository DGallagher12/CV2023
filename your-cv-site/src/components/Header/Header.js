import React from "react";
import "./Header.css";
import profileImage from "../../assets/images/Profile.webp"; // Importing the image

const Header = () => {
  return (
    <header className="header-container">
      <div className="header-content">
        <img src={profileImage} alt="Your Name" className="header-image" />
        <h1 className="header-title">Your Name</h1>
        <p className="header-tagline">
          Full Stack Developer | 9 Years of Customer Support Experience
        </p>
      </div>
      <nav className="header-nav">
        <a href="#about" className="nav-link">
          About
        </a>
        <a href="#experience" className="nav-link">
          Experience
        </a>
        <a href="#projects" className="nav-link">
          Projects
        </a>
        <a href="#contact" className="nav-link">
          Contact
        </a>
      </nav>
    </header>
  );
};

export default Header;

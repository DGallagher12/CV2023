import React from "react";
import "./Header.css";
import profileImage from "../../assets/images/Profile.webp"; // If you've added a profile picture

const Header = () => {
  return (
    <header className="header">
      <img src={profileImage} alt="Your Name" className="profile-image" />
      <h1>Your Name</h1>
      <p className="tagline">Your Tagline</p>
      <div className="header-nav">
        <button className="nav-btn">About</button>
        <button className="nav-btn">Skills</button>
        <button className="nav-btn">Projects</button>
        <button className="nav-btn">Experience</button>
      </div>
    </header>
  );
};

export default Header;

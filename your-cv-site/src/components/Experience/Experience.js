// src/components/Experience/Experience.js

import React, { useState } from "react";
import "./Experience.css";

const educationData = [
  // Sample data
  {
    year: "2020 - 2023",
    description: "Bachelor in Computer Science, University X",
  },
  // ... Other educational experiences
];

const professionalData = [
  // Sample data
  { year: "2023 - Present", description: "Software Developer, TechCompany Y" },
  // ... Other professional experiences
];

const personalData = [
  // Sample data
  {
    year: "2021",
    description: "Developed a personal project using React and Node.js",
  },
  // ... Other personal experiences
];

const Experience = () => {
  const [selectedTab, setSelectedTab] = useState("education"); // Default to showing 'education'

  const renderData = (data) => {
    return data.map((entry, index) => (
      <div key={index} className="experience-item">
        <span>{entry.year}</span>
        <p>{entry.description}</p>
      </div>
    ));
  };

  return (
    <div className="experience-container">
      <h2>Experience</h2>
      <div className="experience-tabs">
        <button
          onClick={() => setSelectedTab("education")}
          className={selectedTab === "education" ? "active" : ""}
        >
          Education
        </button>
        <button
          onClick={() => setSelectedTab("professional")}
          className={selectedTab === "professional" ? "active" : ""}
        >
          Professional
        </button>
        <button
          onClick={() => setSelectedTab("personal")}
          className={selectedTab === "personal" ? "active" : ""}
        >
          Personal
        </button>
      </div>

      <div className="experience-content">
        {selectedTab === "education" && renderData(educationData)}
        {selectedTab === "professional" && renderData(professionalData)}
        {selectedTab === "personal" && renderData(personalData)}
      </div>
    </div>
  );
};

export default Experience;

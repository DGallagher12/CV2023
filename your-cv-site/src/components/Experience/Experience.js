import React, { useState } from "react";
import "./Experience.css";

const Experience = () => {
  const [activeTab, setActiveTab] = useState("work"); // Default is 'work'
  const [activeWorkIndex, setActiveWorkIndex] = useState(0);
  const [activeEducationIndex, setActiveEducationIndex] = useState(0);

  const workEntries = [
    {
      company: "Company 1",
      role: "Role 1",
      duration: "Year-Year",
      description: "Description 1",
    },
    {
      company: "Company 2",
      role: "Role 2",
      duration: "Year-Year",
      description: "Description 2",
    },
    {
      company: "Company 3",
      role: "Role 3",
      duration: "Year-Year",
      description: "Description 3",
    },
    // Add more entries as needed
  ];

  const educationEntries = [
    {
      university: "University 1",
      degree: "Degree 1",
      duration: "Year-Year",
      description: "Description 1",
    },
    {
      university: "University 2",
      degree: "Degree 2",
      duration: "Year-Year",
      description: "Description 2",
    },
    {
      university: "University 3",
      degree: "Degree 3",
      duration: "Year-Year",
      description: "Description 3",
    },
    // Add more entries as needed
  ];

  return (
    <div className="experience">
      <div className="tabs">
        <button
          className={`tab-button ${activeTab === "work" && "active"}`}
          onClick={() => setActiveTab("work")}
        >
          Work
        </button>
        <button
          className={`tab-button ${activeTab === "education" && "active"}`}
          onClick={() => setActiveTab("education")}
        >
          Education
        </button>
      </div>

      {activeTab === "work" && (
        <div className="work-experience">
          <h3>{workEntries[activeWorkIndex].company}</h3>
          <p>Role: {workEntries[activeWorkIndex].role}</p>
          <p>Duration: {workEntries[activeWorkIndex].duration}</p>
          <p>Description: {workEntries[activeWorkIndex].description}</p>

          <div className="navigation">
            <button
              onClick={() =>
                setActiveWorkIndex(
                  (prevIndex) =>
                    (prevIndex - 1 + workEntries.length) % workEntries.length
                )
              }
            >
              &lt;
            </button>
            {workEntries.map((_, index) => (
              <span
                key={index}
                className={`dot ${index === activeWorkIndex && "active"}`}
              ></span>
            ))}
            <button
              onClick={() =>
                setActiveWorkIndex(
                  (prevIndex) => (prevIndex + 1) % workEntries.length
                )
              }
            >
              &gt;
            </button>
          </div>
        </div>
      )}

      {activeTab === "education" && (
        <div className="education-experience">
          <h3>{educationEntries[activeEducationIndex].university}</h3>
          <p>Degree: {educationEntries[activeEducationIndex].degree}</p>
          <p>Duration: {educationEntries[activeEducationIndex].duration}</p>
          <p>
            Description: {educationEntries[activeEducationIndex].description}
          </p>

          <div className="navigation">
            <button
              onClick={() =>
                setActiveEducationIndex(
                  (prevIndex) =>
                    (prevIndex - 1 + educationEntries.length) %
                    educationEntries.length
                )
              }
            >
              &lt;
            </button>
            {educationEntries.map((_, index) => (
              <span
                key={index}
                className={`dot ${index === activeEducationIndex && "active"}`}
              ></span>
            ))}
            <button
              onClick={() =>
                setActiveEducationIndex(
                  (prevIndex) => (prevIndex + 1) % educationEntries.length
                )
              }
            >
              &gt;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Experience;

// src/components/Skills/Skills.js

import React from "react";
import "./Skills.css";

const skills = [
  "JavaScript",
  "React",
  "Ruby on Rails",
  "SQL",
  "Java",
  "HTML & CSS",
  "Customer Support",
  "CI/CD",
  //... Add other skills here
];

const Skills = () => {
  return (
    <div className="skills-container">
      <h2>Skills</h2>
      <div className="skills-list">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;

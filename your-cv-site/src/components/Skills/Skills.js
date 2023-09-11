import React from "react";
import "./Skills.css";

const Skill = () => {
  const skillsData = [
    {
      name: "Java",
      description:
        "Object-oriented language known for portability across platforms.",
    },
    {
      name: "JavaScript",
      description: "Versatile scripting language for dynamic web content.",
    },
    {
      name: "React",
      description: "JavaScript library for building interactive UI components.",
    },
    {
      name: "SQL",
      description:
        "Structured Query Language for managing relational databases.",
    },
    {
      name: "CI/CD",
      description:
        "Continuous Integration and Continuous Deployment for automated code deployment.",
    },
    {
      name: "HTML",
      description:
        "HyperText Markup Language used for structuring web content.",
    },
    {
      name: "CSS",
      description:
        "Cascading Style Sheets for styling and layout of web pages.",
    },
    {
      name: "Kibana",
      description: "Visualization dashboard for Elasticsearch data.",
    },
    {
      name: "API",
      description:
        "Application Programming Interface allowing communication between software.",
    },
  ];

  return (
    <div className="skills">
      {skillsData.map((skill) => (
        <div key={skill.name} className="skill-card">
          <span>{skill.name}</span>
          <div className="skill-description">{skill.description}</div>
        </div>
      ))}
    </div>
  );
};

export default Skill;

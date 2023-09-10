// src/components/Projects/Projects.js

import React from "react";
import "./Projects.css";

const projectData = [
  {
    title: "Project One",
    description:
      "This is a brief description of Project One. It was created using React and connects to a backend built with Ruby on Rails.",
    techStack: ["React", "Ruby on Rails"],
    link: "https://projectone.com",
    source: "https://github.com/username/project-one",
  },
  // ... Add other projects in a similar structure here
];

const Projects = () => {
  return (
    <div className="projects-container">
      <h2>Projects</h2>
      {projectData.map((project, index) => (
        <div key={index} className="project-card">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <p>
            <strong>Tech Stack:</strong> {project.techStack.join(", ")}
          </p>
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            Live Project
          </a>
          <a href={project.source} target="_blank" rel="noopener noreferrer">
            Source Code
          </a>
        </div>
      ))}
    </div>
  );
};

export default Projects;

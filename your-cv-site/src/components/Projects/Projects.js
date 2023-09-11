import React from "react";
import ProjectCard from "./ProjectCard.js";

const sampleProjects = [
  {
    title: "Project 1",
    shortDescription: "This is a sample description for Project 1.",
    tags: ["React", "Web App"],
    image: "path_to_image_1.jpg",
  },
  {
    title: "Project 2",
    shortDescription: "This is a sample description for Project 2.",
    tags: ["React", "Web App"],
    image: "path_to_image_2.jpg",
  },
  //... add more sample projects
];

function Projects() {
  return (
    <div className="projects-container">
      {sampleProjects.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </div>
  );
}

export default Projects;

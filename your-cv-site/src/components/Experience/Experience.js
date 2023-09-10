import React from "react";
import "./Experience.css";

const Experience = () => {
  const jobData = [
    {
      company: "Tech Company A",
      role: "Customer Support Representative",
      duration: "2014 - 2020",
      description:
        "Handled technical queries, improved customer retention, and collaborated with the tech team to relay feedback.",
    },
    {
      company: "Tech Company B",
      role: "Support Team Lead",
      duration: "2020 - 2023",
      description:
        "Led a team of 15 support representatives, streamlined the query process, and introduced a training program for new recruits.",
    },
    // Add more experiences as needed.
  ];

  return (
    <section id="experience" className="experience-container">
      <h2 className="experience-title">Experience</h2>
      {jobData.map((job, index) => (
        <div key={index} className="job">
          <h3 className="job-role">{job.role}</h3>
          <p className="job-company">{job.company}</p>
          <p className="job-duration">{job.duration}</p>
          <p className="job-description">{job.description}</p>
        </div>
      ))}
    </section>
  );
};

export default Experience;

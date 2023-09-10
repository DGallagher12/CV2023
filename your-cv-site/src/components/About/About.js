import React from "react";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="about-container">
      <h2 className="about-title">About Me</h2>
      <p className="about-description">
        With nearly a decade of experience in customer support for leading tech
        companies, I have honed my skills in troubleshooting, effective
        communication, and user advocacy. Recognizing the growing importance of
        tech knowledge, I recently completed a comprehensive full-stack web
        development course. This program empowered me with proficiency in a
        suite of modern web technologies, including Java, JavaScript, React, and
        Ruby on Rails.
      </p>
      <p className="about-description">
        Throughout my career, I've always been passionate about blending my
        technical acumen with my natural people skills. This unique combination
        allows me to not only diagnose and resolve issues but also to offer a
        tailored and user-friendly solution. I'm now eager to pivot towards a
        more technical role, where I can leverage both my past experience and my
        new coding skills to contribute to meaningful projects.
      </p>
    </section>
  );
};

export default About;

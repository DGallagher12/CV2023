import React from "react";
import Header from "./components/Header/Header.js";
import About from "./components/About/About.js";
import Experience from "./components/Experience/Experience.js";
import Skills from "./components/Skills/Skills.js";
import Projects from "./components/Projects/Projects.js";
import Contact from "./components/Contact/Contact";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Contact />
      <div className="main-content">
        {" "}
        {/* Add this wrapper */}
        <Header />
        <About />
        <Experience />
        <Skills />
        <Projects />
        {/* ... Other components will go here */}
      </div>
    </div>
  );
}

export default App;

import React from "react";
import Header from "./components/Header/Header.js";
import About from "./components/About/About.js";
import Experience from "./components/Experience/Experience.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Experience />
      {/* You can add other components here as you create them */}
    </div>
  );
}

export default App;

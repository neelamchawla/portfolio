import React, { useState, useContext } from "react";
import { themeContext } from "./Context";
import "./App.css";
import Navbar from "./components/HomePage/Navbar/Navbar";
import Home from "./components/HomePage/Home/Home";
import Services from "./components/HomePage/Services/Services";
import Education from "./components/HomePage/Education/Education";
import Experience from "./components/HomePage/Experience/Experience";
import TechSkills from "./components/HomePage/TechSkills/TechSkills";
import Projects from "./components/HomePage/Projects/Projects";
import Gallery from "./components/HomePage/Gallery/Gallery";
import Contact from "./components/HomePage/Contact/Contact";
import Social from "./components/HomePage/socialMedia/social";
import Footer from "./components/HomePage/Footer/Footer";
import Wave1 from "../src/img/wave/wave1.png";
import Wave1b from "../src/img/wave/wave1b.png";
import Wave2 from "../src/img/wave/wave2.png";
import Wave2b from "../src/img/wave/wave6.png";
import Wave3 from "../src/img/wave/wave7.png";
import Wave4 from "../src/img/wave/wave10.png";
import Wave5 from "../src/img/wave/wave3.png";

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <img src={Wave1} alt="wave" className="wave1" style={{ display: darkMode ? "" : "none" }} />
      <img src={Wave1b} alt="wave" className="wave1b" style={{ display: darkMode ? "none" : "" }} />
      <Navbar />
      <Social />
      <Home />
      <Services />
      <img src={Wave2} alt="wave" className="wave2" style={{ display: darkMode ? "none" : "" }} />
      <img src={Wave2b} alt="wave" className="wave2b" style={{ display: darkMode ? "" : "none" }} />
      <Education />
      <Experience />
      <img src={Wave3} alt="wave" className="wave3"/>
      <TechSkills />
      <img src={Wave2} alt="wave" className="wave4" style={{ display: darkMode ? "none" : "" }} />
      <img src={Wave4} alt="wave" className="wave4b" style={{ display: darkMode ? "" : "none" }} />
      <Projects />
      <Gallery />
      <img src={Wave5} alt="wave" className="wave5" style={{ display: darkMode ? "none" : "" }} />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

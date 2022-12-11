import Navbar from "./components/HomePage/Navbar/Navbar";
import Home from "./components/HomePage/Home/Home";
import Services from "./components/HomePage/Services/Services";
import "./App.css";
import Works from "./components/HomePage/Works/Works";
import Portfolio from "./components/HomePage/Portfolio/Portfolio";
import Contact from "./components/HomePage/Contact/Contact";
import Footer from "./components/HomePage/Footer/Footer";
import { useContext } from "react";
import { themeContext } from "./Context";
import Social from "./components/HomePage/socialMedia/social";
import Education from "./components/HomePage/Education/Education";
import Experience from "./components/HomePage/Experience/Experience";
import Wave1 from "../src/img/wave1.png";
import Wave2 from "../src/img/wave2.png";
import Wave2b from "../src/img/wave6.png";
import Wave3 from "../src/img/wave7.png";
import Wave4 from "../src/img/wave10.png";
import Wave5 from "../src/img/wave3.png";

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
      <img src={Wave1} alt="" className="wave1" style={{ display: darkMode ? "" : "none" }} />
      <Navbar />
      <Social />
      <Home />
      <Services />
      <img src={Wave2} alt="" className="wave2" style={{ display: darkMode ? "none" : "" }} />
      <img src={Wave2b} alt="" className="wave2b" style={{ display: darkMode ? "" : "none" }} />
      <Education />
      <Experience />
      <img src={Wave3} alt="" className="wave3"/>
      <Works />
      <img src={Wave2} alt="" className="wave4" style={{ display: darkMode ? "none" : "" }} />
      <img src={Wave4} alt="" className="wave4b" style={{ display: darkMode ? "" : "none" }} />
      <Portfolio />
      <img src={Wave5} alt="" className="wave5" style={{ display: darkMode ? "none" : "" }} />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

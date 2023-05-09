import React, { useContext } from "react";
import "./Services.css";
import Card from "./Card/Card";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import { themeContext } from "../../../Context";
import { motion } from "framer-motion";
import Resume from './Resume1.pdf';
import { saveAs } from "file-saver";

const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  const saveFile = () => {
    saveAs(
      Resume,
      "Neelam Chawla - Resume.pdf"
    );
  };

  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
        <span>Services</span>
        <span>
          Seasoned and independent Front End Developer with 5+ years of experience in blending the art of design with the skill of programming to deliver an immersive and engaging user experience through efficient website development, proactive feature optimization, and relentless debugging. Very passionate about Emerging Tech, UI / UX design, and upskilling.<br />
        </span>
        <button onClick={saveFile} className="button s-button" style={{ marginTop: "4rem" }}>
          Download CV
        </button>
        {/* </a> */}
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}
      <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
          <Card
            emoji={HeartEmoji}
            heading={"Design"}
            detail={"Adobe: Photoshop, Illustrator, XD, InDesign"}
          />
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          <Card
            emoji={Glasses}
            heading={"Developer"}
            detail={"React, Angular, Vue, Node.js, Express.js"}
          />
        </motion.div>
        {/* 3rd card */}
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        >
          <Card
            emoji={Humble}
            heading={"UI / UX"}
            detail={
              "Glassmorphism, Parallax Effect, Dynamic Swatch Color, Mock-Ups"
            }
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;

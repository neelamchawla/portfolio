import React, { useContext } from "react";
import "./Services.css";
import Card from "./Card/Card";
import HeartEmoji from "../../../img/heartemoji.png";
import Glasses from "../../../img/glasses.png";
import Humble from "../../../img/humble.png";
import { themeContext } from "../../../Context";
import { motion } from "framer-motion";
import Resume from './Resume.pdf';
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
        {/* I am passionate about crafting elegant and intuitive solutions to complex problems through the use of design, code, and technology for an experience that's both functional and beautiful. I have more than several years of industry experience with my primary area of focus being User Experience Design & Development (UX/UI) in Web-based applications using AngularJS, ReactJS, VueJS, and various other web frameworks. Additionally, I also take great interest in developing software and products in order to simplify the end-user experience, while enhancing their productivity and efficiency */}
        Seasoned and independent Front End Developer with 5+ years of experience in blending the art of design with the skill of programming to deliver an immersive and engaging user experience through efficient website development, proactive feature optimization, and relentless debugging. Very passionate about Emerging Tech, UI / UX design and upskilling.<br/>
        {/* I have a degree in computer science and have been working as a react developer for the past 3 years. I have experience building both small and large scale web applications and am always looking to learn and improve my skills. */}
        </span>
        {/* <a href={Resume} download style={{zIndex: "1111"}}> */}
          <button onClick={saveFile} className="button s-button" style={{marginTop: "4rem"}}>
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
        {/* 3rd */}
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

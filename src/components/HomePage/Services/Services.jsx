import React, { useContext, useState } from "react";
import "./Services.css";
import Card from "./Card/Card";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import { themeContext } from "../../../Context";
// import { motion } from "framer-motion";
import Resume from "./Resume.pdf";
import { saveAs } from "file-saver";
import "../../../../node_modules/video-react/dist/video-react.css";
import { Player } from "video-react";
import VideoResume from "../../img/Video.mp4";
import Thumbnail from "../../img/thumbnail.png";

class Popup extends React.Component {
  render() {
    return (
      <div className="popup_video">
        <div className="popup_inner_video">
          <button onClick={this.props.closePopup}>X</button>
        </div>
        <Player playsInline poster={Thumbnail} src={VideoResume} />
      </div>
    );
  }
}

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
    saveAs(Resume, "Neelam Chawla - Resume.pdf");
  };

  const [ShowPopup, setShowPopup] = useState(false);
  const togglePopup = () => {
    setShowPopup(!ShowPopup);
  };

  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
        <span>Services</span>
        <span>
          🔥 Seasoned and independent React.js Developer with 6+ years of
          experience in front-end development, specializing in creating
          scalable, high-performance web applications. Expert in React.js,
          JavaScript (ES6+), TypeScript, and API integration with a strong focus
          on UI/UX design to deliver intuitive, user-friendly interfaces.
          <br />
          🌐 Adept at building and optimizing interactive components, enhancing
          application performance, and ensuring seamless data flow through
          RESTful APIs and modern frameworks. Proven ability to lead development
          teams, manage complex projects, and implement innovative solutions
          that align with business goals.
          <br />
          💼 Leveraging my expertise in React.js and front-end technologies in a
          dynamic environment focused on building cutting-edge digital products.
          {/* Seasoned and independent Front End Developer with 6+ years of experience in blending the art of design with the skill of programming to deliver an immersive and engaging user experience through efficient website development, proactive feature optimization, and relentless debugging. Very passionate about Emerging Tech, UI / UX design, and upskilling. */}
          <br />
        </span>
        <button
          onClick={saveFile}
          className="button s-button"
          style={{ marginTop: "4rem" }}
        >
          Download CV
        </button>

        <>
          <button
            className="c-h-button c-h-button--gooey"
            onClick={togglePopup}
          >
            {" "}
            Video CV
            <div className="c-h-button__blobs">
              <div />
              <div />
              <div />
            </div>
          </button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            style={{ display: "block", height: 0, width: 0 }}
          >
            <defs>
              <filter id="goo">
                <feGaussianBlur
                  in="SourceGraphic"
                  stdDeviation={10}
                  result="blur"
                />
                <feColorMatrix
                  in="blur"
                  mode="matrix"
                  values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
                  result="goo"
                />
                <feBlend in="SourceGraphic" in2="goo" />
              </filter>
            </defs>
          </svg>

          {ShowPopup ? (
            <Popup text="Close Me" closePopup={togglePopup} />
          ) : null}
        </>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}
      <div className="cards">
        {/* first card */}
        {/* <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        > */}
        <div>
          <Card
            emoji={HeartEmoji}
            heading={"Design"}
            detail={"Adobe: Photoshop, Illustrator, XD, InDesign"}
          />
        </div>
        {/* </motion.div> */}
        {/* second card */}
        {/* <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        > */}
        <div>
          <Card
            emoji={Glasses}
            heading={"Developer"}
            detail={"React, Angular, Vue, Node.js, Express.js"}
          />
        </div>
        {/* </motion.div> */}
        {/* 3rd card */}
        {/* <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        > */}
        <div>
          <Card
            emoji={Humble}
            heading={"UI / UX"}
            detail={
              "Glassmorphism, Parallax Effect, Dynamic Swatch Color, Mock-Ups"
            }
            color="rgba(252, 166, 31, 0.45)"
          />
        </div>
        {/* </motion.div> */}
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;

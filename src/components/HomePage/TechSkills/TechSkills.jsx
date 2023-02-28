import React, { useContext } from "react";
import { themeContext } from "../../../Context";
import { motion } from "framer-motion";
import { Link } from 'react-scroll';
import TabCarousel from "./TabCarousel";
import ReactLogo from "../../img/logo/react-logo.png";
import AngularLogo from "../../img/logo/angular.png";
import VueLogo from "../../img/logo/vue.png";
import Shopify from "../../img/logo/Shopify.png";
import Wordpress from "../../img/logo/Wordpress.png";
import "./TechSkills.css";

const TechSkills = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="work">
          {/* dark Mode */}
          <div>
            <span style={{ color: darkMode ? "white" : "" }}>
              Have A Project
            </span>
            <span>On Your Mind</span>
            <Link to="contact" smooth={true} spy={true}>
              <button className="button tech-button extra" style={{ marginTop: "-3rem" }}>Contact</button>
            </Link>
          </div>
          <TabCarousel darkMode={darkMode} />
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>

      {/* right side */}
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={AngularLogo} alt="angular" />
          </div>
          <div className="w-secCircle">
            <img src={VueLogo} alt="vue" />
          </div>
          <div className="w-secCircle">
            <img className="rotate" src={ReactLogo} alt="react" />
          </div>{" "}
          <div className="w-secCircle">
            <img src={Shopify} alt="shopify" />
          </div>
          <div className="w-secCircle">
            <img src={Wordpress} alt="wordpress" />
          </div>
        </motion.div>

        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>

      </div>
    </div>
  );
};

export default TechSkills;

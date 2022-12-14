import React, { useContext } from "react";
import "./TechSkills.css";
import ReactLogo from "../../../img/react-logo.png";
import AngularLogo from "../../../img/angular.png";
import VueLogo from "../../../img/vue.png";
import Shopify from "../../../img/Shopify.png";
import Wordpress from "../../../img/Wordpress.png";
import { themeContext } from "../../../Context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll';

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
              <button className="button s-button extra" style={{marginTop: "-3rem"}}>Contact</button>
            </Link>
          </div>
            {/* <p>
            React.Js / Angular / Vue.Js /
            JSX / JS / TS /
            MySql / MongoDB /
            JavaScript / HTML / PHP - Laravel /
            CSS / SASS /
            Tailwind CSS / Bootstrap /
            Kendo UI / Material UI /
            Firebase / Github / Netlify / Heroku /
            Wordpress / Shopify
            </p> */}
            <p>
            <Link to="portfolio" smooth={true} spy={true}>
              <button className="button s-button" style={{marginTop: "3rem", width: "auto"}}>React.Js / Angular / Vue.Js</button>
            </Link>
            <Link to="portfolio" smooth={true} spy={true}>
              <button className="button s-button" style={{marginTop: "3rem", width: "auto"}}>JSX / JS / TS</button>
            </Link>
            <Link to="portfolio" smooth={true} spy={true}>
              <button className="button s-button" style={{marginTop: "3rem", width: "auto"}}>MySql / MongoDB / Firebase</button>
            </Link>
            <Link to="portfolio" smooth={true} spy={true}>
              <button className="button s-button" style={{marginTop: "3rem", width: "auto"}}>JavaScript / HTML / PHP - Laravel</button>
            </Link>
            <Link to="portfolio" smooth={true} spy={true}>
              <button className="button s-button" style={{marginTop: "3rem", width: "auto"}}>Wordpress / Shopify</button>
            </Link>
            <Link to="portfolio" smooth={true} spy={true}>
              <button className="button s-button" style={{marginTop: "3rem", width: "auto"}}>CSS / SASS / Tailwind CSS / Bootstrap / Kendo UI / Material UI</button>
            </Link>
            <Link to="portfolio" smooth={true} spy={true}>
              <button className="button s-button" style={{marginTop: "3rem", width: "auto"}}>Firebase / Github / Netlify / Heroku</button>
            </Link>
            <Link to="portfolio" smooth={true} spy={true}>
              <button className="button s-button" style={{marginTop: "3rem", width: "auto"}}>Asana / Trello / Jira / ZOHO / Slack</button>
            </Link>

            </p>
          {/* </div> */}
          {/* <span>
            For Front-end Based on React, Angular, VueJS
            <br />
            Or For Back-end Based on NodeJs, Firebase, Laravel.
            <br />
            You Can Also, contact for Mockup Designs,
            <br />
            Based on: Figma, Webflow, AxureRP, Adobe: Xd, Ps, Ai, Id.
            <br />
            Wordpress, Shopify, Slack, Upwork, Freelancer, Github, Netlify... 
            <br />
            These are some of the website I've been working on, for deploying my Projects
          </span> */}
          <span>
            {/* <div className="my-skills">
              <div className="">
                <div className="progress">
                  <div className="technique">
                    <h3>React / Angular / Vue</h3>
                    <div>
                      <span style={{ width: "80%" }}>80% &nbsp;</span>
                    </div>
                  </div>
                  <div className="technique">
                    <h3>HTML / CSS</h3>
                    <div>
                      <span style={{ width: "83%" }}>83% &nbsp;</span>
                    </div>
                  </div>
                  <div className="technique">
                    <h3>MongoDB / MySql / Firebase</h3>
                    <div>
                      <span style={{ width: "58%" }}>58% &nbsp;</span>
                    </div>
                  </div>
                  <div className="technique">
                    <h3>Wordpress / Shopify</h3>
                    <div>
                      <span style={{ width: "52%" }}>52% &nbsp;</span>
                    </div>
                  </div>
                  <div className="technique">
                    <h3>Graphic Design</h3>
                    <div>
                      <span style={{ width: "79%" }}>79% &nbsp;</span>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </span>


          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
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

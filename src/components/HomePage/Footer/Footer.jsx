import React, { useState, useEffect, useContext } from "react";
import "./Footer.css";
// import "./Waves.css";
import Wave from "../../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";
import { themeContext } from "../../../Context";
import {MenuButton, Menu, toRadians} from "../Navbar/Menu/Menu";
import QRCode from "../../../img/QRcode.png";

const Footer = () => {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  useEffect(() => {
  const scrollButton = document.querySelector(".scroll-top");
    scrollButton.addEventListener("click", () => {
      window.scrollTo(0, 0);
    });
  }, [])

  const today = new Date();

  return (
    <div className="footer">
      <img src={Wave} alt="bg" style={{ width: "100%" }} />
{/*Waves Container*/}
{/* <div>
  <svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
    <defs>
      <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
    </defs>
    <g className="parallax">
      <use xlinkHref="#gentle-wave" x={48} y={0} fill="rgba(255,255,255,0.7" />
      <use xlinkHref="#gentle-wave" x={48} y={3} fill="rgba(255,255,255,0.5)" />
      <use xlinkHref="#gentle-wave" x={48} y={5} fill="rgba(255,255,255,0.3)" />
      <use xlinkHref="#gentle-wave" x={48} y={7} fill="#fff" />
    </g>
  </svg>
</div> */}
{/*Waves end*/}
      <div className="f-content">
        <span>
          <a href="mailto:neelam.projects@gmail.com">
            neelam.projects@gmail.com
          </a>
          </span>
        <div className="f-icons">
            <Insta className="insta" color="white" size={"3rem"} />
            <Facebook className="fb" color="white" size={"3rem"} />
            <Gitub className="git" color="white" size={"3rem"} />
        </div>
      <img title="VCard" src={QRCode} className="QRCode" style={{width: "7%"}} alt="qrcode" />
      </div>

      <div className="scroll-top">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          style={{color: darkMode ? '': 'white'}}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 11l7-7 7 7M5 19l7-7 7 7"
          />
        </svg>
      </div>

      <div className="content">
      Copyright © {today.getFullYear()} Neelam Chawla, All Rights Reserved
      </div>
    </div>
  );
};

export default Footer;



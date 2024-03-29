import React, { useEffect, useContext } from "react";
import { themeContext } from "../../../Context";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";
import Wave from "../../img/wave/wave.png";
import QRCode from "../../img/QRcode.png";
import "./Footer.css";
import PopupBox from "../Popup";

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
      <img className="footer-wave" src={Wave} alt="bg" style={{ width: "100%" }} />
      <div className="f-content">
        <a href="mailto:neelam.projects@gmail.com">
          neelam.projects@gmail.com
        </a>

        <div className="f-icons">
          <Insta className="insta" color="white" size={"3rem"} />
          <Facebook className="fb" color="white" size={"3rem"} />
          <Gitub className="git" color="white" size={"3rem"} />
        </div>
        <img title="VCard" src={QRCode} className="QRCode" alt="qrcode" />
      </div>

      <div className="scroll-top">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          style={{ color: darkMode ? '' : 'white' }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 11l7-7 7 7M5 19l7-7 7 7"
          />
        </svg>
      </div>

      <div className="Copyright">
        Copyright © {today.getFullYear()} Neelam Chawla, All Rights Reserved
        <PopupBox />
      </div>
    </div>
  );
};

export default Footer;



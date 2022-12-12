import React, { useContext } from "react";
import { themeContext } from "../../../Context";
import "./Experience.css";
import TabCarousel from "./TabCarousel";
import stars from "../../../img/stars.gif";

const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="experience" id='experience'>
      <div style={{backgroundImage: darkMode && `url(${stars})`,
      height: darkMode && "90vh",
      width: darkMode && "100%",
      boxShadow: darkMode && "0 0 8px 30px black inset",
      position: darkMode && "absolute",
      // opacity: darkMode && "0.3"
    }}></div>
    {/* url(https://c.tenor.com/pAlz7X3u0dAAAAAC/tenor.gif) */}
    {/* https://th.bing.com/th/id/R.08c5a78…?rik=TY1CsqyOOJGnwg&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f06%2fStarry-night-wide-wallpaper-hd.jpg&ehk=ILdotE%2bKX%2bNG8LV5RmgblJbE%2bjJTkjx3%2bZzM27YOfRc%3d&risl=&pid=ImgRaw&r=0 */}
    <TabCarousel />
      {/* <div className="achievement">
        <div className="circle" style={{color: darkMode?'var(--orange)':'',
        background: darkMode ? "linear-gradient(#fff, #fff) padding-box, linear-gradient(45deg, slateblue, coral) border-box" : "",
        border: darkMode ? "8px solid transparent" : ""
      }}>3+</div>
        <span  style={{color: darkMode?'white':''}}>years </span>
        <span>Experience</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{color: darkMode?'var(--orange)':'',
        background: darkMode ? "linear-gradient(#fff, #fff) padding-box, linear-gradient(45deg, slateblue, coral) border-box" : "",
        border: darkMode ? "8px solid transparent" : ""
      }}>20+</div>
        <span  style={{color: darkMode?'white':''}}>completed </span>
        <span>Projects</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{color: darkMode?'var(--orange)':'',
        background: darkMode ? "linear-gradient(#fff, #fff) padding-box, linear-gradient(45deg, slateblue, coral) border-box" : "",
        border: darkMode ? "8px solid transparent" : ""
      }}>5+</div>
        <span  style={{color: darkMode?'white':''}}>companies </span>
        <span>Work</span>
      </div> */}
    </div>
  );
};

export default Experience;

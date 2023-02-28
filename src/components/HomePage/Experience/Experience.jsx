import React, { useContext } from "react";
import { themeContext } from "../../../Context";
import TabCarousel from "./TabCarousel";
import "./Experience.css";
import stars from "../../img/stars.gif";

const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="experience" id='experience'>
      <div style={{
        backgroundImage: darkMode && `url(${stars})`,
        height: darkMode ? "90vh" : "90vh",
        width: darkMode ? "100%" : "100%",
        boxShadow: darkMode && "0 0 8px 30px black inset",
        position: darkMode ? "absolute" : "absolute",
      }}></div>
      <TabCarousel />
    </div>
  );
};

export default Experience;

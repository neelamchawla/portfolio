import React, { useContext } from "react";
import { themeContext } from "../../../Context";
import Edu from "./Edu";
import "./Education.css";

const Education = () => {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div id="education" className="education">
      <Edu darkMode={darkMode} />
    </div>
  )
}

export default Education;

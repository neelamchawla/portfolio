import React, { useContext } from "react";
import { themeContext } from "../../../Context";
import "./Education.css";

const Education = () => {
    
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div id="education" className="education">
        <div id="education" className="my-education">
        <div className="main">
        <span>
            Education
        </span>
        </div>

        <div className="exp">
        <div className="certificate">
            <h3 className="he">Post Graduate Diploma in Network Administration</h3>
            <span className="sp">
            <strong>Gujarat University</strong>
            </span>
            <span>2017</span>
            <hr className="hr" />
        </div>
        <div className="certificate">
            <h3 className="he">Masters of Computer Applications</h3>
            <span className="sp">
            <strong>S M University</strong>
            </span>
            <span>2015</span>
            <hr className="hr" />
            <p className="paragrph">
            </p>
        </div>
        <div className="certificate">
            <h3 className="he">Bachelor of Computer Applications</h3>
            <span className="sp">
            <strong>S M University</strong>
            </span>
            <span>2013</span>
            <p className="paragrph">
            </p>
        </div>
        </div>
        <div className="main">
        <span>
//             Experience
        </span>
        </div>
        <div className="exp">
        <div className="certificate">
//             <h3 className="he">Front End Developer</h3>
//             <span className="sp">
//             <strong>OpenEyes Technologies Inc.</strong>
//             </span>
//             <span>Dec 2021 - Present</span>
//             <hr className="hr" />
      <img src="https://png.pngtree.com/png-vector/20200310/ourmid/pngtree-online-education-training-course-design-concept-vector-illustration-png-image_2158408.jpg" alt="edu" style="
    border-radius: 55% 46% 36% 46%; margin-left: 15%;">
        </div>
       {/*  <div className="certificate">
            <h3 className="he">Web Developer</h3>
            <span className="sp">
            <strong>Future Link Consultants</strong>
            </span>
            <span>Sep 2020 - Nov 2021</span>
            <hr className="hr" />
        </div>
        <div className="certificate">
            <h3 className="he">React Developer</h3>
            <span className="sp">
            <strong>CodeZeros</strong>
            </span>
            <span>Jan 2020 - Aug 2020</span>
            <hr className="hr" />
        </div>
        <div className="certificate">
            <h3 className="he">PHP Developer</h3>
            <span className="sp">
            <strong>Padmavati Online Services</strong>
            </span>
            <span>Jun 2018 - Feb 2019</span>
        </div>
        </div> */}

        </div>
    </div>
  )
}

export default Education;

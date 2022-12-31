import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
// import "./Education.css";
// import SchoolIcon from "@material-ui/icons/School";
// import StarIcon from "@material-ui/icons/typcn-star-full-outline";
import {TiStarFullOutline, TiMortarBoard, TiArrowDownOutline, TiArrowDownThick } from 'react-icons/ti';

import eduData from "./eduData";

function Edu({darkMode}) {
  return (
    <section className="sectionEdu" id="education">
        {/* <h1>Education</h1> */}
        {/* <h6>My Qualifications</h6> */}
        <div className="main">
        <span>
            Education
        </span>
        </div>
        <VerticalTimeline>
          {eduData.map((education, index) => (
            <VerticalTimelineElement
              key={index}
              contentStyle={{ background: "linear-gradient(45deg, rgb(168, 49, 134), #833ab4)", color: darkMode ? "white" : "#19193c", boxShadow: darkMode ? "0 3px 5px #ddd" : "0 3px 5px #0000008a" }}
              // contentArrowStyle={{ borderLeft: "7px solid  #086972" }}
              contentArrowStyle={{ borderLeft: "7px solid  #3c84f7", borderRight: "7px solid #fdc50f" }}
              date={education.date}
              dateClassName="education-date"
              iconStyle={{ background: "deeppink", color: darkMode ? "white" : "#071a52", boxShadow: darkMode ? "white 0px 0px 12px 5px" : "0 0 20px 2px #393838" }}
              icon={<TiMortarBoard />}
            >
              <h3 dangerouslySetInnerHTML={{ __html: education.event }} />
              {/* <a href={education.url}>{education.icon}</a> */}
              <h5 dangerouslySetInnerHTML={{ __html: education.detail }} />
            </VerticalTimelineElement>
          ))}
          <VerticalTimelineElement
            iconStyle={{
              background: "deeppink",
              color: "#071a52"
            }}
            icon={<TiStarFullOutline />}
          />
        </VerticalTimeline>
    </section>
  );
}

export default Edu;

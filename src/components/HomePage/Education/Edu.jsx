import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
// import "./styles/education.css";
// import SchoolIcon from "@material-ui/icons/School";
// import StarIcon from "@material-ui/icons/typcn-star-full-outline";
import {TiStarFullOutline, TiMortarBoard, TiArrowDownOutline, TiArrowDownThick } from 'react-icons/ti';

import eduData from "./eduData";

function Edu() {
  return (
    <section className="sectionEdu" id="education">
        {/* <h1>Education</h1> */}
        <h6>My Qualifications</h6>
        <VerticalTimeline>
          {eduData.map((education, index) => (
            <VerticalTimelineElement
              key={index}
              contentStyle={{ background: "#17b978", color: "#fff" }}
              contentArrowStyle={{ borderLeft: "7px solid  #086972" }}
              date={education.date}
              dateClassName="education-date"
              iconStyle={{ background: "#071a52", color: "#fff" }}
              icon={<TiMortarBoard />}
            >
              <h3 dangerouslySetInnerHTML={{ __html: education.event }} />
              {/* <a href={education.url}>{education.icon}</a> */}
              <h5 dangerouslySetInnerHTML={{ __html: education.detail }} />
            </VerticalTimelineElement>
          ))}
          <VerticalTimelineElement
            iconStyle={{
              background: "#17b978",
              color: "#071a52"
            }}
            icon={<TiStarFullOutline />}
          />
        </VerticalTimeline>
    </section>
  );
}

export default Edu;

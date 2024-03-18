import React from "react";
import "./Education.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdSchool } from "react-icons/md";
import { FaUniversity } from "react-icons/fa";
const Education = () => {
  return (
    <>
      <div className=" education" id="education">
        <h2 className="col-12 text-center text-white text-uppercase">
          Education Details
        </h2>
        <hr />
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="2020 - 2023"
            iconStyle={{ background: "black", color: "#fff" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">
              Bachelor of Science
            </h3>
            <h5 className="vertical-timeline-element-subtitle">
              Information technology
            </h5>
            <p>
              Pt. Charanji Lal Sharma Govt. College Karnal <br /> ({" "}
              <FaUniversity /> Kurukshetra University )
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Education;

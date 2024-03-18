import React from "react";
import "./WorkExp.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { AiFillAppstore } from "react-icons/ai";
const WorkExp = () => {
  return (
    <>
      <div className="container work" id="work">
        <div className="workExp">
          <h2 className="col-12 text-center text-white text-uppercase">
            Work Experience
          </h2>
          <hr />
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "black" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date="05/06/2023 - present"
              iconStyle={{ background: "black", color: "#fff" }}
              icon={<AiFillAppstore />}
            >
              <h3 className="vertical-timeline-element-title">
                Full Stack Developer
              </h3>
              <h5 className="vertical-timeline-element-subtitle">
                LevNext Pvt. Ltd. Karnal
              </h5>
              <p className="workPera" style={{ fontSize: "11px" }}>
                I am working as Software Developer Trainee at LevNext Pvt. Ltd
                in Karnal. I am working on MVC architectural pattern and created
                a responsive UI (User Interface ).Experienced and seasoned MySQL
                Developer with a proven record of strong database development
                and maintenance.
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

export default WorkExp;

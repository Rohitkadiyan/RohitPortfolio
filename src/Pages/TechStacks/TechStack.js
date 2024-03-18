import React from "react";
import "./TechStack.css";
import { TechStackList } from "../../utils/TechStackList";
import RubberBand from "react-reveal/RubberBand";
import Fade from "react-reveal/Fade";
const TechStack = () => {
  return (
    <>
      <div className="container techStack" id="techstack">
        <RubberBand>
          <h2 className="col-12 text-center text-success text-uppercase">
            Technologies Stack
          </h2>
          <hr />
          <p className="text-center">
            👉 Including programming Langauges, Framework, Database, Front-End
            and Back-End tools and APIs{" "}
          </p>
        </RubberBand>

        <div className="row">
          {TechStackList.map((tech) => (
            <Fade left>
              <div key={tech._id} className="col-md-3">
                <div className="card m-2">
                  <div className="card-content">
                    <div className="card-body">
                      <div className="media d-flex justify-content-center">
                        <div className="alig-self-center">
                          <tech.icon className="tech-icon" />
                        </div>
                        <div className="media-body"> {tech.Name}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </>
  );
};

export default TechStack;

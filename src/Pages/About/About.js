import React from "react";
import ProfileImage from "../../assets/Images/profile.jpeg";
import "./About.css";
const About = () => {
  return (
    <>
      <div className="about" id="about">
        <div className="row">
          <div className="col-md-6 about-Image">
            {" "}
            <img src={ProfileImage} />{" "}
          </div>
          <div className="col-md-6 about-content">
            <h2>About Me</h2>
            <p>
              Highly Qualified, Self-motivated and extensively focused Engineer
              with web development looking for a full-time position who
              challenges the technologies involving tremendous learning and
              complex programming. Able to work independently or as a team with
              perfect work ethics and propose new ideas for team's benefit.
              Enthusiastic to learn and implement any new skills in a given
              task.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

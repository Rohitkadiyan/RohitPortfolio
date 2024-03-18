import React from "react";
import "./Project.css";
import AgeCalculator from "../../assets/Images/AgeCalculator.png";
import TextConvertor from "../../assets/Images/TextConvertor.png";
import Spin from "react-reveal/Spin";
const Projects = () => {
  return (
    <>
      <div className="container project" id="project">
        <h2 className="col-12 text-center text-success text-uppercase">
          Top Recent Projects
        </h2>
        <hr />
        <p className="text-center">
          👉 Here are my top 3 recent project with live links and source code
        </p>
        <div className="row" id="ads">
          <Spin>
            <div className="col-md-4 grid">
              <div className="card-project rounded">
                <div className="card-image">
                  <span className="card-notify-badge">ReactJs</span>
                  <img src={AgeCalculator} alt="Project" />
                </div>
                <div className="card-image-overly text-center mt-2">
                  <span className="card-badge-details">HTML </span>
                  <span className="card-badge-details">CSS </span>
                  <span className="card-badge-details">JavaScript </span>
                  <span className="card-badge-details">ReactJS</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title">
                    <h5 className="text-uppercase">
                      Technifoyt Shoping Website
                    </h5>
                  </div>
                  <div className="text-center">
                    <a
                      href="https://calculateagerohit.netlify.app/"
                      className="ad-btn "
                      target="_blank"
                    >
                      View
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Spin>
          <Spin>
            <div className="col-md-4 grid">
              <div className="card-project rounded">
                <div className="card-image">
                  <span className="card-notify-badge">ReactJs</span>
                  <img src={TextConvertor} alt="Project" />
                </div>
                <div className="card-image-overly text-center mt-2">
                  <span className="card-badge-details">HTML </span>
                  <span className="card-badge-details">CSS </span>
                  <span className="card-badge-details">JavaScript </span>
                  <span className="card-badge-details">ReactJS</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title">
                    <h5 className="text-uppercase">
                      Technifoyt Shoping Website
                    </h5>
                  </div>
                  <div className="text-center">
                    <a
                      href="https://texteditorrohit.netlify.app/home"
                      className="ad-btn "
                      target="_blank"
                    >
                      View
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Spin>
        </div>
      </div>
    </>
  );
};

export default Projects;

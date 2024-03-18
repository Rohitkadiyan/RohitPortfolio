import React from "react";
import Typewriter from "typewriter-effect";
import Resume from "../../assets/Docs/RohitCV.pdf";
import Fade from "react-reveal/Fade";
import "./Home.css";
const Home = () => {
  return (
    <>
      <div className="container-fluid home-container" id="home">
        <div className="container home-content">
          <Fade right>
            <h1> 🙋‍♂️ Hi I'm a Software Engineer</h1>
            <h2>
              <Typewriter
                options={{
                  strings: ["Full Stack Developer !", "MERN Stack Developer !"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h2>
          </Fade>
        </div>
        <Fade bottom>
          <div className="btn-Groups container mt-4">
            <a
              className="btn btn-hire me-2"
              href="https://api.whatsapp.com/send?phone=7419030683"
              target="_blank"
            >
              Hire Me{" "}
            </a>
            <a className="btn btn-cv" href={Resume} download="RohitCV">
              Resume{" "}
            </a>
          </div>
        </Fade>
      </div>
    </>
  );
};

export default Home;

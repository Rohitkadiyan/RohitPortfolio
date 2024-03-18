import React from "react";
import "./Contact.css";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import Rubberband from "react-reveal/RubberBand";
const Contact = () => {
  return (
    <>
      <div className="container Contact" id="con">
        <div className=" card0 border-0">
          <div className="row">
            <div className="col-md-5 col-lg-5 col-xl-5 col-sm-5 col-12 ContactCardImg ">
              <div className="card1">
                <img
                  src="https://t4.ftcdn.net/jpg/03/37/96/33/360_F_337963325_EJuPjWslX3vAFxJ59L3y1cm6IsSfo07s.jpg"
                  alt="Contact"
                />
              </div>
            </div>
            <div className="col-md-7 col-lg-7 text-center  ">
              <h5 className="mt-4 ">
                Contact With <FaLinkedin color="blue" size={30} />
                <FaInstagram size={30} color="red" />
              </h5>
              <div className="d-flex" style={{ width: "90%", margin: "auto" }}>
                <div style={{ width: "45%" }}>
                  <hr />
                </div>
                <div style={{ width: "10%" }}>OR</div>
                <div style={{ width: "45%" }}>
                  <hr />
                </div>
              </div>
              <div className="form-details">
                <input
                  type="text"
                  name="name"
                  className="Input"
                  placeholder="Enter Your Name"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Your email"
                />
                <textarea
                  type="text"
                  name="msg"
                  placeholder="Write Your Message"
                />
                <button className="btn btn-success mb-4 " type="submit">
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

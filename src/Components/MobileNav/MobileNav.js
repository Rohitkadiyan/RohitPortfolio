import React, { useState } from "react";
import "./MobileNav.css";
import { BsFillMenuButtonWideFill, BsFillMenuAppFill } from "react-icons/bs";
import { GoHomeFill } from "react-icons/go";
import {
  FcAbout,
  FcDepartment,
  FcDataRecovery,
  FcBearish,
  FcAssistant,
  FcNightPortrait,
} from "react-icons/fc";
import { Link } from "react-scroll";
const MobileNav = () => {
  const [open, setOpen] = useState(false);

  // Handle Open menus
  const handleMenu = () => {
    setOpen(!open);
  };

  //handle Menu click
  const handleClickMenu = () => {
    setOpen(false);
  };
  return (
    <>
      <div className="mobile-nav">
        <div className="mobile-nav-header">
          {open ? (
            <BsFillMenuAppFill size={30} onClick={handleMenu} />
          ) : (
            <BsFillMenuButtonWideFill size={30} onClick={handleMenu} />
          )}

          <span className="mobile-nav-title"> {"  "}My Portfolio App</span>
        </div>
        <div className="mobile-menus">
          {open && (
            <div className="nav-items">
              <div className="nav-item">
                <div className="nav-link">
                  <Link
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                    onClick={handleClickMenu}
                  >
                    <GoHomeFill size={25} />
                    Home
                  </Link>
                </div>
                <div className="nav-link">
                  <Link
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                    onClick={handleClickMenu}
                  >
                    <FcAbout size={25} />
                    About
                  </Link>
                </div>
                <div className="nav-link">
                  <Link
                    to="education"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                    onClick={handleClickMenu}
                  >
                    <FcDepartment size={25} />
                    Education
                  </Link>
                </div>

                <div className="nav-link">
                  <Link
                    to="techstack"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                    onClick={handleClickMenu}
                  >
                    <FcBearish size={25} />
                    Tech Stack
                  </Link>
                </div>

                <div className="nav-link">
                  <Link
                    to="project"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                    onClick={handleClickMenu}
                  >
                    <FcDataRecovery size={25} />
                    Projects
                  </Link>
                </div>
                <div className="nav-link">
                  <Link
                    to="work"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                    onClick={handleClickMenu}
                  >
                    <FcNightPortrait size={25} />
                    Work Experience
                  </Link>
                </div>
                <div className="nav-link">
                  <Link
                    to="con"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                    onClick={handleClickMenu}
                  >
                    <FcAssistant size={25} />
                    Contacts
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default MobileNav;

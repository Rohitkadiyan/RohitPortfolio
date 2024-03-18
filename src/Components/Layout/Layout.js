import React, { useState } from "react";
import Home from "../../Pages/Home/Home";
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
import "./layout.css";
import Menu from "../Menus/Menu";
const Layout = () => {
  const [toggel, setToggle] = useState(true);
  //handle Toggle
  const handleToggle = () => {
    setToggle(!toggel);
  };
  return (
    <>
      <div className="sidebar-section">
        <div className={toggel ? "sideBar-toggle sidebar" : "sidebar"}>
          <div className="sidebar-toggle-icon">
            <p onClick={handleToggle}>
              {toggel ? (
                <AiOutlineDoubleLeft size={30} />
              ) : (
                <AiOutlineDoubleRight size={30} />
              )}
            </p>
          </div>
          <Menu toggel={toggel} />
        </div>
        <div className="container">
          <Home />
        </div>
      </div>
    </>
  );
};

export default Layout;

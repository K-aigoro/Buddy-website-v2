// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
// import { MdMenuOpen } from "react-icons/md";
import Sidebar from "../components/sideNavbar/Index";
import { MdMenuOpen } from "react-icons/md";
import TopNavbar from "../components/topNavbar/Index";
// import TopNavbar from "../components/topNavbar/Index";
import "./style/style.css";

function Portfolio() {
  const [toggle, setToggle] = useState(true);

  const toggler = () => {
    setToggle(!toggle);
    console.log(toggle);
  };
  return (
    <div className="dashboard">
    <div>
      <div
        className={` ${toggle ? "hide" : "show"}`} 
      >
        
        <Sidebar/>
      </div>
      <div
        className={`toggle ${
          toggle ? "toggle_position" : null
        }`}
        onClick={toggler}
      >
        <MdMenuOpen size={20} />
      </div>
    </div>
    <div className="main">
      <div className="">
        <TopNavbar />

      </div>
      <div className=" content">
        {/* <DashboardMain /> */}
        {/* <RightSideBar /> */}
      </div>
    </div>
  </div>
  );
}

export default Portfolio;

// eslint-disable-next-line no-unused-vars
import React from "react";
// import { MdMenuOpen } from "react-icons/md";
import Sidebar from "../components/sideNavbar/Index";
import TopNavbar from "../components/topNavbar/Index";
// import TopNavbar from "../components/topNavbar/Index";

function Portfolio() {
  return (
    <div className="block md:grid grid-cols-[24rem] md:grid-cols-[10rem">
      <div>
        <Sidebar />
        <div>
        {/* <MdMenuOpen size={20} /> */}
        </div>
      </div>
      <TopNavbar />
    </div>
  );
}

export default Portfolio;

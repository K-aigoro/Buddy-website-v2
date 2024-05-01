// eslint-disable-next-line no-unused-vars
import React from "react";
import { RiSearchLine } from "react-icons/ri";
import { HiOutlinePlus } from "react-icons/hi";
import { FiBell } from "react-icons/fi";
import "./nav.css";

function TopNavbar() {
  return (
    <div className="top_nav">
      <h1 className="title">
        My Portfolio
      </h1>
      <div className="top_container">
        <div className="search">
          <RiSearchLine size={18} className="icon" />
          <div className="">
            <input type="text" placeholder="Search" className="input"/>
          </div>
        </div>
        <div className="p-[12px]  flex mt-1 items-center bg-white rounded-[50px]">
        <HiOutlinePlus size={14} />
        </div>
        <div className="p-[12px] flex mt-1 items-center bg-white rounded-[50px]">
        <FiBell size={14} />
        </div>
      </div>
    </div>
    
  );
}

export default TopNavbar;

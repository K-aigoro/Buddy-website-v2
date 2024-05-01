// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
// import Logo from "../banner/logo";
// eslint-disable-next-line no-unused-vars
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import Logo from "../../assets/image/logo.svg";
import User from "../../assets/image/user.svg";
import Group from "../../assets/image/Vector (1).svg";
import Message from "../../assets/image/message.svg";
import Ellipse from "../../assets/image/Ellipse 1.png";
import Analytics from "../../assets/image/Vector (2).svg";
import Packs from "../../assets/image/dollar coin.svg";
import Logout from "../../assets/image/logout.svg";
import Setting from "../../assets/image/Setting.svg";
import './side.css'

function Sidebar() {
  // const [active, setActive] = useState(false);

  const url = useLocation().pathname;

  console.log(url);
  return (
    <div className="side_nav">
      <div className="">
        <div className="buddylogo">
          <center>
            {" "}
            <img src={Logo} alt="logo"  className=""/>{" "}
          </center>
        </div>
        <div className="navlinks mt-7">
          <nav className="nav">
            <ul className="nav1">
              <NavLink
                to="/portfolio"
                className={url === "/dashboard" ? "active" : ""}
              >
                <li>
                  <img src={User} alt="my portfolio" />
                  <p> My Portfolio</p>
                </li>
              </NavLink>
              <NavLink
                to="mygroup"
                className={(navData) => (navData.isActive ? `active` : "")}
              >
                <li>
                  <img src={Group} alt="my group" />
                  <p> My Group</p>
                </li>
              </NavLink>
              <NavLink
                to="analytics"
                className={(navData) => (navData.isActive ? `active` : "")}
              >
                <li>
                  <img src={Message} alt="analytics" />
                  <p> My Analytics</p>
                </li>
              </NavLink>
              <NavLink
                to="analytics"
                className={(navData) => (navData.isActive ? `active` : "")}
              >
                <li>
                  <img src={Analytics} alt="analytics" />
                  <p className="text-base"> My Analytics</p>
                </li>
              </NavLink>
              <NavLink
                to="pack"
                className={(navData) => (navData.isActive ? `active` : "")}
              >
                <li>
                  <img src={Packs} alt="pack" />
                  <p className="text-base"> Pack</p>
                </li>
              </NavLink>
              <NavLink
                to="settings"
                className={(navData) => (navData.isActive ? "active" : "")}
              >
                <li>
                  <img src={Setting} alt="settings" />
                  <p> Settings</p>
                </li>
              </NavLink>
            </ul>
          </nav>
        </div>
        <Outlet />
      </div>
        <div className="bg-white flex m-6 relative justify-center p-4 shadow-lg mb-8 rounded-[16px]">
          <div className="md:grid md:justify-center">
            <center>
              <img src={Ellipse} alt="logo" className="mt-[-3rem]" />{" "}
            </center>

            <h3 className="text-center text-2xl font-medium leading-6 mt-2">Theresa milly</h3>
            <p className="text-center text-gray-500 mt-1 pb-4">Influencer</p>
            <center>
              <button className="py-3 px-12 gap-2 bg-orange-200 rounded-lg flex justify-center items-center  gap-x-3">
                <img src={Logout} alt="alt" />
                <p className="font-[500] text-orange-400">Logout</p>
              </button>
            </center>
          </div>
        </div>
    </div>
  );
}

export default Sidebar;

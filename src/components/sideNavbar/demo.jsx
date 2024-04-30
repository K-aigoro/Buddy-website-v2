// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Logo from "../banner/logo";
import { Link } from "react-router-dom";
import User from "../../assets/image/user.svg";
import Group from "../../assets/image/Vector (1).svg";
import Message from "../../assets/image/message.svg";
import Ellipse from "../../assets/image/Ellipse 1.png";
import Analytics from "../../assets/image/Vector (2).svg";
import Pasks from "../../assets/image/dollar coin.svg";
import Logout from "../../assets/image/logout.svg";
import Setting from "../../assets/image/Setting.svg";

function Sidebar() {
  // const [active, setActive] = useState(false);
  // const url = useLocation().pathname;

  // console.log(url);
  return (

    <div className="flex fixed flex-col h-full grow items-center px-16 pt-5 pb-20 text-lg leading-6 text-gray-500 bg-white max-md:px-5 max-md:max-w-full">
      <div className="">
        <div className="">
          <Logo />
        </div>
        <div className="flex justify-center mt-[2rem] ">
          <nav className="w-full md:w-auto flex justify-center">
            <ul className="text-[1.2rem]">
              <Link to="/dashboard">
                <li className="py-2 flex gap-2 items-center">
                  <img src={User} alt="" />
                  <p>My profile</p>
                </li>
              </Link>
              <Link to="/mygroup">
                <li className="py-2 flex gap-2 items-center">
                  <img src={Group} alt="" />
                  <p>My Group</p>
                </li>
              </Link>
              <Link to="/dashboard">
                <li className="py-2 flex gap-2 items-center">
                  <img src={Message} alt="" />
                  <p>My Message</p>
                </li>
              </Link>
              <Link to="/dashboard">
                <li className="py-4 flex gap-2 items-center">
                  <img src={Analytics} alt="" />
                  <p>My Analytics</p>
                </li>
              </Link>
              <Link to="/dashboard">
                <li className="py-2 flex gap-2 items-center">
                  <img src={Pasks} alt="" />
                  <p>Packs</p>
                </li>
              </Link>
              <Link to="/dashboard">
                <li className="py-2 flex gap-2 items-center">
                  <img src={Setting} alt="" />
                  <p>Settings</p>
                </li>
              </Link>
            </ul>
          </nav>
        </div>
      </div>
      <footer>
        <div className='bg-white flex m-6 justify-center p-4 shadow-lg mb-8 rounded-xl"'>
          <div className="grid justify-center m-0  mt-absolute ">
            <center>
              <img src={Ellipse} alt="logo" className="gap-y-4 w-70" />{" "}
            </center>
            <div className="">
              <h3 className="text-center text-base font-medium leading-6 tracking-tighter">
                Theresa milly
              </h3>
              <p className="text-center text-gray-500 pb-3">Influencer</p>
              <center>
                <button className="py-2 gap-2 bg-orange-200 border-none rounded-lg flex justify-center items-center p-4 gap-x-4">
                  <img src={Logout} alt="alt" />
                  <p className="text-sm  font-[400] text-orange-400">Logout</p>
                </button>
              </center>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Sidebar;

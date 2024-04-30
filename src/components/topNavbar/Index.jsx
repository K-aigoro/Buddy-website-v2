// eslint-disable-next-line no-unused-vars
import React from "react";
import { RiSearchLine } from "react-icons/ri";
import { HiOutlinePlus } from "react-icons/hi";
import { FiBell } from "react-icons/fi";

function TopNavbar() {
  return (
    <div className="">
    <div className="flex md:flex-row bg-gray-200 py-[1.4rem] ml-[250px] justify-between items-center">
      <h1 className="mx-auto font-bold text-[25px] leading-[133%] text-start text-gray-700 ">
        My Portfolio
      </h1>
      <div className="flex flex-row items-start p-0 gap-[16px] mx-auto ">
        <div className="py-[12px] w-[422px] h-[48px] flex items-center relative">
          <RiSearchLine size={18} className=" absolute left-3" />
          <div className="flex-1">
            <input type="text" placeholder="Search" className="border font-normal text-[14px] outline-none text-sm rounded-[16px]  w-full pl-10 p-2.5"/>
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
    </div>
  );
}

export default TopNavbar;

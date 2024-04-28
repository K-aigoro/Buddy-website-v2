// eslint-disable-next-line no-unused-vars
import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import Logo from "./logo";

function Banner() {
  return (
    <div className="flex flex-col grow items-center px-16 pt-12 pb-20 w-full text-lg leading-6 text-gray-500 bg-white max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col py-0.5 max-w-full w-[488px]">
        {/* COMPANY LOGO  */}
        <Logo />
        {/* list  */}
        <div className="flex gap-4 mt-32 tracking-normal max-md:flex-wrap max-md:mt-10">
          <FaCheckCircle className="shrink-0 my-auto w-6 text-yellow-500" />
          <div className="max-md:max-w-full">
            Track real-time overview of company’s financial performance.
          </div>
        </div>
        <div className="flex gap-4 mt-9 tracking-normal max-md:flex-wrap">
          <FaCheckCircle className="shrink-0 my-auto w-6 text-yellow-500" />
          <div className="max-md:max-w-full">
            Track created projects budget against actual revenue and expenses.
          </div>
        </div>
        <div className="flex gap-4 mt-9 tracking-normal max-md:flex-wrap">
          <FaCheckCircle className="shrink-0 my-auto w-6 text-yellow-500" />
          <div className="max-md:max-w-full">
            Highlighted reports on budget deficit and surplus, accounting
            dimensions, balance sheets and real-time sales margin estimation.
          </div>
        </div>
        {/* copyright */}
        <div className="mt-24 text-sm tracking-normal leading-5 text-gray-400 max-md:mt-10 max-md:max-w-full">
          © 2022 Revvex. All rights reserved
        </div>
      </div>
    </div>
  );
}

export default Banner;

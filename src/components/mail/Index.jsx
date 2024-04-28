// eslint-disable-next-line no-unused-vars
import React from "react";
import Email from "../../assets/image/envelope-circle-check-solid 1.svg";

function Mail() {
  return (
    <div className="flex grow justify-center items-center px-16 py-20 w-full text-sm bg-slate-50 max-md:px-5 max-md:max-w-full .text-gray-500">
      <div className="flex flex-col  m-auto bg-white items-center border border-solid border-gray-300 shadow-md rounded-lg p-20">
        <img src={Email} className="pb-7"/>
        <h1 className="font-bold text-2xl leading-9 text-center pb-4">
          Email verified!
        </h1>
        <h2 className="font-medium text-[14px] leading-6 text-center tracking-tight pb-8 text-gray-600">
          The verified Email address will be associated with your account. Click
          on the button below to continue
        </h2>
        <button className="bg-orange-500 text-white border-none px-16 py-2.5 text-lg font-semibold leading-6 rounded-md">Continue</button>
      </div>
    </div>
  );
}

export default Mail;

// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import Sent from "../../assets/image/sent-email 1.svg";

function Checkmail() {
  return (
    <div className="flex grow justify-center items-center px-16 py-20 w-full text-sm bg-slate-50 max-md:px-5 max-md:max-w-full .text-gray-500">
      <div className="flex flex-col  m-auto bg-white items-center border border-solid border-gray-300 shadow-md rounded-lg p-20">
        <img src={Sent} className="pb-3" />
        <h1 className="font-bold text-2xl leading-9 text-center pb-3">
          Check your Mailbox !
        </h1>
        <h2 className="font-medium text-[14px] leading-6 text-center tracking-tight pb-8 text-gray-600">
          We ve sent an email to seyi@zojatech.com with <br></br> an OTP to
          confirm your account. Check your inbox to activate your account
        </h2>
        <Link to='/otp'>
        <button className="bg-orange-500 text-white border-none px-16 py-2.5 text-lg font-semibold leading-6 rounded-md">
          Confirm Email
        </button>
        </Link>
        <span className="mt-[2rem] font-medium tracking-normal ">
          Didn t get the mail? <span className="text-amber-500">Resend </span>{" "}
        </span>
      </div>
    </div>
  );
}

export default Checkmail;

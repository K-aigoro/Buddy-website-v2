// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Link } from "react-router-dom";


function Otp() {
  const [otp, setOtp] = useState(new Array(4).fill(""));
  const userid = "seyi@Zojatech.com";
  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    //Focus next input
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };
  return (
    <div className="flex grow justify-center items-center px-16 py-20 w-full text-sm bg-slate-50 max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col mt-20 max-w-full w-[489px] max-md:mt-10">
        <div className="flex flex-col p-12 leading-6 bg-white rounded-lg border border-solid shadow-2xl border-zinc-200 max-md:px-5 max-md:max-w-full">
          <div className="text-gray-800 text-2xl font-[700]">
            Verify your email
          </div>
          <div className="mt-3 text-gray-500 font-medium">
            {" "}
            A four digit OTP code has been sent to your email{" "}
          </div>
          <span className="text-orange-500">{userid}</span>
          <div className=" grid grid-cols-5 md:flex md:flex-row md:items-start md:mt-8 p-0 gap-6 w-[272px] h-[50px]">
            {otp.map((data, index) => {
              return (
                <input
                  className="w-[50px] h-[50px] rounded-[10px] border border-gray-600 text-gray-600 text-[24px] text-center font-[700] focus:outline-orange-500"
                  type="text"
                  name="otp"
                  maxLength="1"
                  key={index}
                  value={data}
                  onChange={(e) => handleChange(e.target, index)}
                  onFocus={(e) => e.target.select()}
                />
              );
            })}
          </div>
          <div className="">
            <Link to='/verifyEmail'>
            <button className="mt-6 w-40 h-[40px] py-2 px-0 bg-orange-500 items-center text-gray-100 rounded-md cursor-pointer text-lg font-normal ">
              Confirm code
            </button>
            </Link>
          </div>

          <div className="flex gap-2 py-1 mt-7 text-right max-md:mt-10">
            <div className="tracking-normal text-gray-500">
            Didn’t get the mail?
            </div>
            <div className="font-medium tracking-normal text-amber-500">
            Resend
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Otp;

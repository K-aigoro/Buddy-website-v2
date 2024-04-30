// eslint-disable-next-line no-unused-vars
import React from "react";
import User from "../../assets/image/user.svg";
import Mail from "../../assets/image/email.svg";
import { Link } from "react-router-dom";
import Lock from "../../assets/image/lock_open.svg";
// import Google from "../../assets/image/google.svg";
// import { IoMail } from "react-icons/io5";

function Signup() {
  return (
    <div className="flex grow justify-center items-center px-16 py-20 w-full text-sm bg-slate-50 max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col mt-20 max-w-full w-[489px] max-md:mt-10">
        <div className="flex flex-col p-12 leading-6 bg-white rounded-lg border border-solid shadow-2xl border-zinc-200 max-md:px-5 max-md:max-w-full">
          <div className="text-2xl font-bold tracking-tight leading-6 text-stone-900">
            Register your account
          </div>
          <div className="mt-3 text-gray-500">
            Proceed to create account and setup your organization
          </div>
          <form>
            <div>
              <div className="flex gap-5">
                <div className="flex items-center mb-4 relative">
                  <img
                    src={User}
                    alt=""
                    className="text-gray-500 absolute left-3"
                  />
                  <div className="flex-1">
                    <input
                      type="text"
                      placeholder="First Name"
                      className="border border-gray-300 outline-none text-sm rounded-lg  w-full pl-10 p-2.5"
                    />
                  </div>
                </div>
                <div className="flex items-center mb-4 relative">
                  <img
                    src={User}
                    alt=""
                    className="text-gray-500 absolute left-3"
                  />
                  <div className="flex-1">
                    <input
                      type="text"
                      placeholder="E-mail"
                      className="border border-gray-300 outline-none text-sm rounded-lg  w-full pl-10 p-2.5"
                    />
                  </div>
                </div>
              </div>
              <div className="flex items-center mb-4 relative">
                <img
                  src={Mail}
                  alt=""
                  className="text-gray-500 absolute left-3"
                />
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="Work Email"
                    className="border border-gray-300 outline-none text-sm rounded-lg  w-full pl-10 p-2.5"
                  />
                </div>
              </div>
              <div className="flex items-center mb-4 relative">
                <img
                  src={Lock}
                  alt=""
                  className="text-gray-500 absolute left-3"
                />
                <div className="flex-1">
                  <input
                    type="password"
                    placeholder="Password"
                    className="border border-gray-300 outline-none text-sm rounded-lg  w-full pl-10 p-2.5"
                  />
                </div>
              </div>
              <div className="">
                <Link to="/checkMail">
                  <button
                    type="submit"
                    className="mt-[1rem] w-[100%] h-[2.5rem] py-[.4rem] px-[0] border border-gray-200 bg-gray-100 rounded-lg text-gray-400 cursor-pointer transition duration-300 ease-in-out  focus:bg-orange-500 focus:text-white transform focus:-skew-x-60 focus:border-transparent hover:bg-orange-500 hover:text-white hover:transform hover:-skew-x-60 hover:border-transparent"
                  >
                    Create account
                  </button>
                </Link>
              </div>
            </div>
          </form>

          <div className="mt-10 text-sm tracking-normal leading-5  text-gray-500 max-md:mt-10">
            By clicking the button above, you agree to our{" "}
            <span className="text-amber-500">Terms of Service</span> and{" "}
            <span className="text-amber-500">Privacy Policy</span>.
          </div>
          <div className="flex gap-2 px-2 py-1 mt-20 text-right max-md:mt-10">
            <div className="tracking-normal text-gray-500">
              Already have an account?
            </div>
            <div className="font-medium tracking-normal text-amber-500">
              <Link to="/login">Login</Link>
            </div>
          </div>
        </div>
        {/* <div className="flex gap-px self-end p-4 mt-64 font-semibold tracking-normal text-white bg-amber-500 shadow-xl leading-[171%] rounded-[60.714px] max-md:mt-10">
          <div>Get Help</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/10fd343eeb6a0eff5d6985087738df82beee0239844ba8fee39eb508845487d9?apiKey=5ad4cb6eda3c4717b3989f3a78087890&"
            className="shrink-0 self-start aspect-square w-[19px]"
          />
        </div> */}
      </div>
    </div>
  );
}

export default Signup;

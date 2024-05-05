// eslint-disable-next-line no-unused-vars
import React from "react";
import Google from "../../assets/image/google.svg";
import { Link } from "react-router-dom";
import { IoMail } from "react-icons/io5";

function Register() {
  return (
    <div className="flex grow justify-center items-center px-16 py-20 w-full text-sm bg-slate-50 max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col mt-20 max-w-full w-[489px] max-md:mt-10">
        <div className="flex flex-col p-12 leading-6 bg-white rounded-lg border border-solid shadow-2xl border-zinc-200 max-md:px-5 max-md:max-w-full">
          <div className="text-2xl font-bold tracking-tight leading-6 text-stone-900">
            Register your account
          </div>
          <div className="flex flex-col justify-center items-start px-16 py-2 mt-8 tracking-normal text-gray-500 rounded-md border border-solid border-zinc-200 max-md:px-5">
            <Link to="/register">
              <div className="flex items-center gap-2 px-4 ml-8  max-md:ml-2.5 ">
                <IoMail className="shrink-0 w-6 text-black size-5" />
                <div>Sign up with email</div>
              </div>
            </Link>
          </div>
          <div className="flex gap-4 items-center mt-3 text-sm tracking-normal leading-5 text-gray-500 whitespace-nowrap">
            <hr className="my-auto max-w-full border border-solid aspect-[100] border-zinc-200  w-[172px]" />
            <div className="self-stretch">or</div>
            <hr className="my-auto max-w-full border border-solid aspect-[100] border-zinc-200 w-[200px]" />
          </div>
          <div className="flex flex-col justify-center items-start px-16 py-2 mt-3 tracking-normal text-gray-500 rounded-md border border-solid border-zinc-200 max-md:px-5">
            <div className="flex items-center gap-2 px-4 ml-8  max-md:ml-2.5">
              <img src={Google} />
              <div>Sign up with Google</div>
            </div>
          </div>
          <div className="mt-10 text-sm tracking-normal leading-5 text-amber-500 max-md:mt-10">
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
              {/* <a href="/login"> Login</a> */}
              {/* Login */}
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

export default Register;

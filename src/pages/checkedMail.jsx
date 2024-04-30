// eslint-disable-next-line no-unused-vars
import React from "react";
import Banner from "../components/banner/Index";
import Checkmail from "../components/checkMail/Index";

function Checkedmail() {
  return (
    <div className="justify-center bg-slate-50">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <Banner />
        <Checkmail />

      </div>
    </div>
  );
}

export default Checkedmail;

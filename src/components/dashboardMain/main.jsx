// eslint-disable-next-line no-unused-vars
import React from "react";
import "./main.css";
import Analytics from "../analytics";
import Overview from "../overview";
import Trending from "../trending/Index";
import Members from "../member";

function Main() {
  return (
    <div className="dashboard_main">
      <Analytics />
      <Overview />
      <Trending />
      <Members />
    </div>
  );
}

export default Main;

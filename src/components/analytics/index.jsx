// eslint-disable-next-line no-unused-vars
import React from "react";
import Account from "../../assets/image/add account.svg";
import Group from "../../assets/image/Group 3.svg";
import Growth from "../../assets/image/growth.png";
import "./stats.css";

function Analytics() {
  return (
    <div className="stats">
        <div className="stat stat_one">
          <div className="stat_text">
            <h2>51</h2>
            <p>Total Channels</p>
          </div>
          <img src={Group} alt="" />
        </div>
        <div className="stat stat_two">
          <div className="stat_text">
            <h2>125</h2>
            <p>New Members</p>
          </div>
          <img src={Account}alt="" />
        </div>
        <div className=" stat stat_three">
          <div className="stat_text">
            <h2>789</h2>
            <p>All Impressions</p>
          </div>
          <img src={Growth} alt="" />
        </div>
      </div>
  );
}

export default Analytics;

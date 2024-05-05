// eslint-disable-next-line no-unused-vars
import React from "react";
import chartup from "../../assets/image/chartup.svg";
import avatarpotential from "../../assets/image/avatar_potential.svg";
import "./member.css";

function Members() {
  return (
    <div className="dashboard_main_members">
      <h2 className="members_h2">Potential Members</h2>
      <div className="member_cards">
        <div className="member_card">
          <img src={avatarpotential} alt="Wanda Parker" className="card_img"/>
          <h3 className="card_h3">Wanda Parker</h3>
          <p className="card_p">@ashking1234</p>
          <div className="member_card_chart">
            <img src={chartup} alt="" />
            <h4 className="chart_h4">10.3%</h4>
          </div>
        </div>
        <div className="member_card">
          <img src={avatarpotential} alt="Wanda Parker" className="card_img"/>
          <h3 className="card_h3">Wanda Parker</h3>
          <p className="card_p">@ashking1234</p>
          <div className="member_card_chart">
            <img src={chartup} alt="" />
            <h4 className="chart_h4">10.3%</h4>
          </div>
        </div>
        <div className="member_card">
          <img src={avatarpotential} alt="Wanda Parker" className="card_img" />
          <h3 className="card_h3">Wanda Parker</h3>
          <p className="card_p">@ashking1234</p>
          <div className="member_card_chart">
            <img src={chartup} alt="" />
            <h4 className="chart_h4">10.3%</h4>
          </div>
        </div>
        <div className="member_card">
          <img src={avatarpotential} alt="Wanda Parker" className="card_img"/>
          <h3 className="card_h3">Wanda Parker</h3>
          <p className="card_p">@ashking1234</p>
          <div className="member_card_chart">
            <img src={chartup} alt="" />
            <h4 className="chart_h4">10.3%</h4>
          </div>
        </div>
        <div className="member_card">
          <img src={avatarpotential} alt="Wanda Parker" className="card_img"/>
          <h3 className="card_h3">Wanda Parker</h3>
          <p className="card_p">@ashking1234</p>
          <div className="member_card_chart">
            <img src={chartup} alt="" />
            <h4 className="chart_h4">10.3%</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Members;

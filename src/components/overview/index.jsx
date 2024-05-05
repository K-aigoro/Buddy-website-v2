// eslint-disable-next-line no-unused-vars
import React from 'react';
import "./overview.css";

function Overview() {
  return (
    <div className="overview">
    <div className="heading">
      <h2 className='overview_h2'>Overview</h2>
      <div className="categories">
        <div className="category">
          <p className='category_p'>Robbin Hood</p>
        </div>
        <div className="category">
          <p>Amreitrade</p>
        </div>
        <div className="category">
          <p>Fidelity</p>
        </div>
        <div className="category">
          <p>Charles</p>
        </div>
      </div>
    </div>
    <div className="chart">
      {/* <MyResponsiveBar /> */}
    </div>
  </div>
  )
}

export default Overview;
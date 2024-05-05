// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link } from "react-router-dom"

function RightSidebar(props) {
  return (
    <div className="wrapper">
    <div className="contain">
      <div className="header">
        <div>
          <h3 className='h3'>Watchlist</h3>
        </div>

        <div>
          <Link to="./" className="view_text">
            View all
          </Link>
        </div>
      </div>

      <div className="watch_tab">
        {/* <Watchlist
          title={"AAPL"}
          image={arrowup}
          price={142.9}
          percent={+0.47}
        /> */}
      </div>

      <div>
        {/* <Watchlist
          title={"BPL"}
          image={arrowdown}
          price={142.9}
          percent={-0.78}
        /> */}
      </div>
    </div>

    <div className="rev">
      {/* <Revenue /> */}
    </div>

    <div className="news">
      {/* <News /> */}
    </div>
  </div>
);
}

export default RightSidebar;
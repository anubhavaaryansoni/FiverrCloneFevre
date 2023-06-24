import React from "react";
import "./gigs.scss";
const Gigs = () => {
  return (
    <div className="gigs">
      <div className="container">
        <span className="breadcrumbs">FEVRE > GRAPHCS AND DESIGN></span>

        <h1>AI ARTIST</h1>
        <p>
          Explore the boundaries of art and technology with fevre's AI artist
        </p>
        <div className="menu">
          <div className="left">
            <span>Budget</span>
            <input type="text" placeholder="min" />
            <input type="text" placeholder="max" />
            <button>Apply</button>
          </div>
          <div className="right">
            <span className="sortBy">Sort By</span>
            <span className="sortType">Best Selling</span>
            <img src="./images/down.png" alt="" />
            <div className="rightmenu">
              <span>Newest</span>
              <span>Best Selling</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Gigs;

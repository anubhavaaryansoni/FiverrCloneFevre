import React from "react";
import "./featured.scss";

const Featured = () => {
  return (
    <div className="featured">
      <div className="container">
        <div className="left">
          <h1>Find the perfect <i>freelance</i> service for your buisness</h1>
          <div className="search">
            <div className="searchinput">
              <img src="./public/images/search.png" alt=""></img>
              <input type="text" placeholder="'Try building mobile app'" />
            </div>
            <button>Search</button>
          </div>
          <div className="popular">
            <span>Popular:</span>
            <button>Web design</button>
            <button>Wordpress</button>
            <button>Logo Design</button>
            <button>AI Services</button>
          </div>
        </div>
        <div className="right">
        <img src="./public/images/man.png" alt=""></img></div>
      </div>
    </div>
  );
};
export default Featured;

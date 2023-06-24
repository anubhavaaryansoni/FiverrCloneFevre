import React from "react";
import "./gigcard.scss";
import { Link } from "react-router-dom";

const Gigcard = ({ item }) => {
  return (
    <Link to="/gig/123">
      <div className="gigcard">
        <img src={item.img} alt="" />
        <div className="info">
          <div className="user">
            <img src={item.pp} alt="" />
            <span>{item.username}</span>
          </div>
          <p>{item.desc}</p>
          <div className="star">
            <img src="./images/star.png" alt="" />
            <span>{item.star}</span>
          </div>
        </div>
        <hr/>
        <div className="details">
          
          <img src="./img/heart.png" alt="" />
          <div className="price">
            <span>STARTING AT</span>
            <h2>
              $ {item.price}
              <sup>99</sup>
            </h2>
          </div>
        </div>
      </div>
      ;
    </Link>
  );
};
export default Gigcard;

import React from "react";
import "./catcard.scss";
import { Link } from "react-router-dom";
const Catcard = ({ item }) => {
  return (
    <Link to ='/gigs?Project=design'>
      <div className="catcard">
        <img src={item.img} alt="" />
        <span className="desc">{item.desc}</span>
        <span className="title">{item.title}</span>
      </div>
    </Link>
  );
};

export default Catcard;

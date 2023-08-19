import React, { useState } from "react";
import "./gigs.scss";
import Gigcard from "../../components/gigcard/gigcard";
import { gigs } from "../data"
const Gigs = () => {
  const [open, setOpen] = useState(false);
  const [sort, onSort] = useState("sales");
  const reSort = (type) => {
    onSort(type);
    setOpen(false);
  };
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
            <span className="sortType">
              {sort === "sales" ? "Best Selling" : "Newest"}
            </span>
            <img
              src="./images/down.png"
              alt=""
              onClick={() => {
                setOpen(!open);
              }}
            />

            {open && (
              <div className="rightmenu">
                {sort === "sales" ? (
                  <span onClick={() => reSort("createdAt")}>Newest</span>
                ) : (
                  <span onClick={() => reSort("sales")}>Best Selling</span>
                )}
              </div>
            )}
          </div>
        </div>
        <div className="cards">
          {gigs.map((gig) => (
            <Gigcard key={gig.id} item={gig} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Gigs;

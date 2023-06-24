import React from "react";
import "./home.scss";
import Featured from "../../components/featured/featured";
import Trustedby from "../../components/trustedby/trustedby";
import Slide from "../../components/slide/slide";
import Catcard from "../../components/catcard/catcard";
import { cards } from "../../components/data";
import { projects } from "../../components/data";
import Projectcard from "../../components/projectcard/projectcard";
const Home = () => {
  return (
    <div className="home">
      <Featured />
      <Trustedby />
      <Slide>
        {cards.map((card) => (
          <Catcard item={card} key={card.id} />
        ))}
      </Slide>

      <div className="features">
        <div className="container">
          <div className="item">
            <h1>A whole world of freelance talent at your fingertips</h1>
            <div className="title">
              <img src="public\images\check.png" alt="" />
              The best for every budget
            </div>
            <p>
              Find high-quality services at every price point. No hourly rates,
              just project-based pricing.
            </p>
            <div className="title">
              <img src="public\images\check.png" alt="" />
              Quality work done quickly
            </div>
            <p>
              Find the right freelancer to begin working on your project within
              minutes.
            </p>
            <div className="title">
              <img src="public/images/check.png" alt="" />
              Protected payments, every time
            </div>
            <p>
              Always know what you'll pay upfront. Your payment isn't released
              until you approve the work.
            </p>
            <div className="title">
              <img src="public/images/check.png" alt="" />
              24/7 support
            </div>
            <p>
              Find high-quality services at every price point. No hourly rates,
              just project-based pricing.
            </p>
          </div>
          <div className="item">
            <video src="public/images/video.mp4" controls />
          </div>
        </div>
      </div>
      <div className="features dark">
        <div className="container">
          <div className="item">
            <h1>
              fiverr <i>business</i>
            </h1>
            <h1>
              A business solution designed for <i>teams</i>
            </h1>
            <p>
              Upgrade to a curated experience packed with tools and benefits,
              dedicated to businesses
            </p>
            <div className="title">
              <img src="./images/check.png" alt="" />
              Connect to freelancers with proven business experience
            </div>

            <div className="title">
              <img src="./images/check.png" alt="" />
              Get matched with the perfect talent by a customer success manager
            </div>

            <div className="title">
              <img src="./images/check.png" alt="" />
              Manage teamwork and boost productivity with one powerful workspace
            </div>
            <button>Explore Liverr Business</button>
          </div>
          <div className="item">
            <img
              src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_2.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624768/business-desktop-870-x2.png"
              alt=""
            />
          </div>
        </div>
      </div>

      <Slide>
        {projects.map((card) => (
          <Projectcard item={card} key={card.id} />
        ))}
      </Slide>
    </div>
  );
};
export default Home;

// <p>
//               Find the right freelancer to begin working on your project within
//               minutes.
//             </p>
//             <div className="title">
//               <img src="public/img/check.png" alt="" />
//               Protected payments, every time
//             </div>
//             <p>
//               Always know what you'll pay upfront. Your payment isn't released
//               until you approve the work.
//             </p>
//             <div className="title">
//               <img src="public/img/check.png" alt="" />
//               24/7 support
//             </div>
//             <p>
//               Find high-quality services at every price point. No hourly rates,
//               just project-based pricing.
//             </p>

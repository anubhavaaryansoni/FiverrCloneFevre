import React from "react";
import "./slide.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Catcard from "../catcard/catcard";
import { cards } from "../../pages/data";
// function SampleNextArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block", background: "red" }}
//       onClick={onClick}
//     />
//   );
// }

// function SamplePrevArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block", background: "lightgrey" }}
//       onClick={onClick}
//     />
//   );
// }

const Slide = ({children}) => {
  
  var settings = {
   
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,

    slidesToScroll: 1,

    autoplay: true,
    autoplaySpeed: 3000,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />
  };
  
  return (
    <div className="slide">
      <div className="container">
        <Slider {...settings}>{children}</Slider>
      </div>
    </div>
  );
};
export default Slide;

// <Slider {...settings}>
//   {cards.map((card) => (
//     <Catcard item={card} key={card.id} />
//   ))}
// </Slider>

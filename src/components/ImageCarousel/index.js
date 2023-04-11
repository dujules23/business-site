import React from "react";

import { imageData } from "../../data/imageData";
import "../../styles/Carousel.css";
import _utils from "../../styles/_utils.scss";

import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";

const ImageCarousel = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 200, min: 200 },
      items: 2,
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div>
      <Slider>
        {imageData.map((item, index) => {
          return (
            <div className="flex jc-evenly" key={index}>
              <img className="image" src={item.src} alt="clean-example" />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default ImageCarousel;

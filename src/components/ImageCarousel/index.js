import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { imageData } from "../../data/imageData";
import "../../styles/Carousel.css";

import _utils from "../../styles/_utils.scss";

const ImageCarousel = () => {
  return (
    <div>
      <Carousel infiniteLoop autoPlay>
        {imageData.map((item, index) => {
          return (
            <div className="flex " key={index}>
              <img src={item.src} alt="clean-example" />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default ImageCarousel;

import React from "react";
import "./style.css";
import ImageCarousel from "../ImageCarousel";

/**
 * @author
 * @function ImagesForCarousel
 **/

const ImagesForCarousel = props => {
  return (
    <div>
      <ImageCarousel
        url1={props.url1}
        url2={props.url2}
        url3={props.url3}
        url4={props.url4}
      />
    </div>
  );
};

export default ImagesForCarousel;

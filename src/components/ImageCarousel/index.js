import React, { Component } from "react";
import "./style.css";

import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

/**
 * @author
 * @function ImageCarousel
 **/

class ImageCarousel extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      images: [
        { url: props.url1 },
        { url: props.url2 },
        { url: props.url3 },
        { url: props.url4 }
      ]
    };
  }
  render() {
    // for more info, check http://kenwheeler.github.io/slick/
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      className: "slides",
      autoplay: true,
      autoplaySpeed: 4000,
      fade: true, 
      cssEase: 'linear',
      edgeFriction: 2,
      pauseOnHover: true
    };
    return (
      <div className="ImageCarousel" style={{ padding: 30 }}>
        <Slider {...settings} className='mainslider'>
          <div>{this.state.images[0].url}</div>
          <div>{this.state.images[1].url}</div>

          <div>{this.state.images[2].url}</div>
          <div>{this.state.images[3].url}</div>
        </Slider>
      </div>
    );
  }
}

export default ImageCarousel;

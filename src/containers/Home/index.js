import React from "react";
import "./style.css";
import App from "../../App";
import ImagesForCarousel from "../../components/ImagesForCarousel";
import pic1 from "../../assets/pictures/samplepic.jpg";

const Home = props => {
  return (
    <div className = 'imageSlider'>
      <ImagesForCarousel
        url1={<img src={pic1} alt="flowers" />}
        url2={<img src={pic1} alt="flowers" align="center" />}
        url3={<img src={pic1} alt="flowers" align="center" />}
        url4={<img src={pic1} alt="flowers" align="center" />}
      />
    </div>
  );
};

export default Home;

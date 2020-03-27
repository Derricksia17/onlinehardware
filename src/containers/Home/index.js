import React from "react";
import "./style.css";
import App from "../../App";
import ImagesForCarousel from "../../components/ImagesForCarousel";
import pic1 from "../../assets/pictures/samplepic.jpg";

const Home = props => {
  return (
    <div>
      <ImagesForCarousel
        url1={<img src={pic1} alt="flowers" align="center" />}
        url2="../../assets/pictures/samplepic.jpg"
        url3="../../assets/pictures/samplepic.jpg"
        url4="../../assets/pictures/samplepic.jpg"
      />
    </div>
  );
};

export default Home;

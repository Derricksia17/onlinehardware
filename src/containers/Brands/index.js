import React from 'react'
import './style.css'
import Sidebar from '../../components/Sidebar'
import BrandPost from '../../components/BrandPost'
import ImagesForCarousel from '../../components/ImagesForCarousel'
import pic1 from "../../assets/pictures/samplepic.jpg";
import SortBar from '../../components/SortBar'

/**
* @author
* @function Brands
**/

const Brands = (props) => {
  return(
    <div className = 'imageSlider'>
    <ImagesForCarousel
      url1={<img src={pic1} alt="flowers" />}
      url2={<img src={pic1} alt="flowers" align="center" />}
      url3={<img src={pic1} alt="flowers" align="center" />}
      url4={<img src={pic1} alt="flowers" align="center" />}
    />

    <section className='container'>
        <Sidebar/>
        <div className='displayBlock'>
            <div className='page'>Brands</div>
        <SortBar/>
        <BrandPost/>
        </div>    
    </section>  
  </div>

    
   )

 }

export default Brands
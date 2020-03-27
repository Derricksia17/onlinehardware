import React from 'react';
import './style.css';
import App from '../../App';
import ImagesForCarousel from '../../components/ImagesForCarousel';



const Home = props => {
    return (
        <div>
            <ImagesForCarousel url1='../../assets/pictures/samplepic.jpg'/>
            
        </div>
    )
}

export default Home;
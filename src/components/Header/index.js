import React from 'react'
import './style.css';
import favorites from '../../assets/icons/favorites.png';
import delivery from '../../assets/icons/delivery.png';
import addtocart from '../../assets/icons/add-to-cart.png';
import profile from '../../assets/icons/profile.png';
// import search from '../../assets/icons/search.png';
import logo from '../../assets/logo/diy_horizontal_logo.jpg';
import {NavLink} from 'react-router-dom'





/**
* @author
* @function Header
**/

const Header = (props) => {

    const submitSearch =(e) =>{
        e.preventDefault();
        alert('Searched');
    }


  return(
    <div>
        <header className ='headerMain'>
            <div>
            <NavLink to='/'><img alt = "logo" src={logo}  href ='#' width ='200'></img></NavLink>
            </div>


            <div className ="search">
                <form onSubmit={submitSearch}>
                    <input  type="text" className="searchInput" placeholder="Search for products, categories, and brands."/>
                    <img onClick={submitSearch} src = {require('../../assets/icons/search.png')} alt ="Search" />
                </form>
            </div>


            <nav className = 'navMain'>
                <img alt = "Favorites" src={favorites}  href ='#'></img>
                <img alt = "Tracking" src={delivery}  href ='#'></img>
                <img alt = "Favorites" src={addtocart}  href ='#'></img>
                <img alt = "Favorites" src={profile}  href ='#'></img>

            </nav>
        </header>
    </div>
    ) 
}

export default Header
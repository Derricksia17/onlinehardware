import React from 'react';
import './style.css';
import {NavLink} from 'react-router-dom'
/**
* @author
* @function MiniHeader
**/

const MiniHeader = (props) => {
  return(
      <header className="header">
          <div className="socialmedias">
              Follow us on: 
          </div>

          <nav className="headerMenu">
              <NavLink to='/branches'>Our Branches</NavLink>
              <NavLink to='/customer-service'>Customer Service</NavLink>
              <NavLink to='#'>Login</NavLink>
              <NavLink to='#'>Register</NavLink>
          </nav>

      </header>
  )
 }

export default MiniHeader;
import React from 'react';
import './style.css';
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
              <a href ='#'>Our Branches</a>
              <a href ='#'>Customer Service</a>
              <a href ='#'>Login</a>
              <a href ='#'>Register</a>
          </nav>

      </header>
  )
 }

export default MiniHeader;
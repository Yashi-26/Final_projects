import React from 'react';
import './style.css';
import logo from './logo.png';

const Logo = () => {
  return (
    <div className='logo'>
        <div>
          <img src={logo} alt='Logo'/>
          <span>
            <b>Taste</b>
          </span>
        </div>
        <p>
          <b> Restaurant & BBQ</b>
        </p>
    </div>
  )
}

export default Logo;
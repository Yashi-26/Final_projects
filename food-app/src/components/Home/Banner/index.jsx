import React from 'react';
import './style.css';
import bannerimg from './banner.png';
import Logo from '../../common/Logo';

const Banner = ({handleScrollMenu}) => (
        <header>
            <div className="header-content">
                <Logo/>
            <div className="content-main">
                <h1>Delicious food for your cravings</h1>
                <p>We made fresh and healthy meals with different recipes</p>
                <button onClick={handleScrollMenu}>View Menu <i className="fas fa-long-arrow-alt-right"></i></button>
            </div>
            </div>
            <img src={bannerimg} alt='banner' className="header-image"/>
        </header>
  );


export default Banner;
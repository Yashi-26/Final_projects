import React from 'react';
import { useNavigate } from 'react-router-dom';
import EmptyCartImg from './EmptyCartImg.png'
import './styles.css';


const EmptyCart = () => {   

  const Navigate =useNavigate();

  return (
    <div className='emptyCart'>
        <img src={EmptyCartImg} alt='' />
        <button onClick={() => Navigate('/')}>
            <i className ='fas fa-long-arrow-alt-left'></i>Shop Now
        </button>
    </div>
  );
};

export default EmptyCart;
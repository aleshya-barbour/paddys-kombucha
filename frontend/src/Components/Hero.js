import React from 'react';
import PropTypes from 'prop-types';


const Hero = () => {
  return(
    <div  className="hero">
      <img src="img/Pade.png" alt="Logo" />
      <div className="hero__text">
        <h1>
          Paddy's Kombucha
        </h1>
        <a href="#products" className="btn">Shop</a>
      </div>
    </div>
  )
}

Hero.prototype = {
  merchant: PropTypes.object,
};

export default Hero;

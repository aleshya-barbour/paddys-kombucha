import React from 'react';


const Hero = ( ) => {
  return(
    <div  className="hero">
      <img alt="picture of kombucha"src="https://images.unsplash.com/photo-1573812914274-226dc19fbe17?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8a29tYnVjaGF8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
      <div lassName="hero__text">
        <h1>
          Aleshya's Kombucha
        </h1>
        <a href="#products" className="btn">Shop</a>
      </div>
    </div>
  )
}

export default Hero;

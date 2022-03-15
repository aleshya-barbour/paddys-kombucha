import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faShoppingBag, faTimes } from '@fortawesome/free-solid-svg-icons'

import Cart from './Cart'

const CartNav = ({ cart, onUpdateCartQty, onRemoveFromCart, onEmptyCart }) => {
    const [isCartVisible, setCartVisible] = useState(false);
  
    const renderOpenButton = () => (
      
      <button className="nav__cart-btn--open">
        <FontAwesomeIcon size="2x" icon={faShoppingBag} color="#262525"/>
        {cart !== null ? <span>{cart.total_items}</span> : ''}
      </button>
    );
  
    const renderCloseButton = () => (
      <button className="nav__cart-btn--close">
        <FontAwesomeIcon size="1x" icon={faTimes} color="white"/>
      </button>
    );
  
    return (
      <div className="nav">
      <div className="nav__cart" onClick={() => setCartVisible(!isCartVisible)}>
          { !isCartVisible ? renderOpenButton() : renderCloseButton() }
      </div>
        { isCartVisible &&
          <Cart
            cart={cart}
            onUpdateCartQty={onUpdateCartQty}
            onRemoveFromCart={onRemoveFromCart}
            onEmptyCart={onEmptyCart}
          />
        }  
      </div>
     
    );
  };
  
  export default CartNav;
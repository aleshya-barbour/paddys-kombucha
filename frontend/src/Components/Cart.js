import React, { Component } from 'react';
import PropTypes from 'prop-types'
import CartItem from './CartItem'


class Cart extends Component {
  constructor(props) {
    super(props);

    

    this.handleEmptyCart = this.handleEmptyCart.bind(this);
  }
  
 

  handleEmptyCart() {
    this.props.onEmptyCart();
  }
   
  renderEmptyCart() {
    const { cart } = this.props;
    
    if (cart.total_unique_items > 0 ) {
      return;
    }
    return (
      <p className="cart__none">
        you have no items in your cart
      </p>
    )
  }

  renderCart() {
    const { cart } = this.props;

    if (cart.total_unique_items === 0) {
      return
    }
  
    return (
      <>
        {cart.line_items.map((lineitems) => (
        <CartItem
        item={lineitems}
        key={lineitems}
        className="cart__inner"

        />
        ))}        

      </>
    )
  }
  
  render() {
    return (
      <div className="cart">
        <h4 className="cart__heading">Your Shopping Cart</h4>
        {this.renderEmptyCart() }
        {this.renderCart() }

      </div>
    )
  }
}

export default  Cart;

Cart.propTypes= {
  cart: PropTypes.object,
  onUpdateCartQty: () => {},
  onRemoveFromCart: () => {},
  onEmptyCart: () => {},
  handleUpdateCartQty: PropTypes.func
}
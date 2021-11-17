import React, {Component} from "react";

class CartItem extends Component {
  constructor(props) {
    super(props);

    this.handleUpdateCartQty = this.handleUpdateCartQty.bind(this);
    this.handleRemoveFromCart = this .handleRemoveFromCart.bind(this);

  }

  handleUpdateCartQty(lineItemId, quantity) {
    this.props.onUpdateCartQty(lineItemId, quantity);
  }

  handleRemoveFromCart(lineItemId) {
    this.props.onRemoveFromCart(lineItemId)
  }

  render() {
    const { item } = this.props
    
    return (
      <div className="cart-item">
        <img classsName="cart_item__image" //get image source>

      </div>
    )
  }
}
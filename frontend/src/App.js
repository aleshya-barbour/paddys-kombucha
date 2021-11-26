import React, { Component } from 'react';
import { commerce } from './lib/commerce';

import './styles/scss/styles.scss'
import Hero from './Components/Hero';
import Product from './Components/Product';
// import Cart from './Components/Cart'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      CardProduct: [],
      Cart: {},
    };

    this.handleAddToCart = this.handleAddToCart.bind(this);
    this.handleUpdateCartQty = this.handleUpdateCartQty.bind(this);
    this.handleRemoveFromCart = this.handleRemoveFromCart.bind(this);
    this.handleEmptyCart = this.toogleCart.bind(this);
  }


  
  componentDidMount() {
    this.fetchProducts();
    this.fetchCart();
  }

  toogleCart() {
    const { isCartVisible } = this.state
    this.setState({
      isCartVisible: !isCartVisible,
    })
  }

  fetchProducts() {
    commerce.products.list().then((products) => {
      this.setState({ products: products.data});
    }).catch((error) => {
      console.log('There was a problem fetching products', error)
    })
  }

  fetchCart() {
    commerce.cart.retrieve().then((cart) => {
      this.setState({ cart });
    }).catch((error) => {
      console.error('Issue fetching the cart', error)
    })
  }

  handleAddToCart(productId, quantity) {
    commerce.cart.add(productId, quantity).then((item) => {
      this.setState({ cart: item.cart})
    }).catch((error) => {
      console.error('There was an error adding the item to the cart', error);
    })
  }
  
  handleUpdateCartQty(lineItemId, quantity) {
    commerce.cart.update(lineItemId, { quantity }).then((resp) => {
      this.setState({ cart: resp.cart })
    }).catch((error) => {
      console.log('There was an error updating the cart items', error);
    });
  }

  handleRemoveFromCart(lineItemId) {
    commerce.cart.remove(lineItemId).then((resp) => {
      this.setState({
        cart: resp.cart
      })
    }).catch((error) => {
      console.error('There was an error removing the item from the cart', error);
    });
  }

  render () {
    const { products } = this.state;
    return (
      <div className="app">
        <Hero />
      
        <Product 
          products={products}
          onAddToCart={this.handleAddToCart} 
        />
{/* 
        <Cart 
          cart={Cart}
        /> */}

      </div>
    )
  }
}

export default App;

import React, { Component } from 'react';
import { commerce } from './lib/commerce';

import './styles/scss/styles.scss'
import Hero from './Components/Hero';
import Product from './Components/Product';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      CardProduct: [],
      Cart: {},
    };
  }


  
  componentDidMount() {
    this.fetchProducts();
    this.fetchCart();
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
 

  render () {
    const { products } = this.state;
    return (
      <div className="app">
        <Hero />
      
        <Product 
          products={products}
          onAddToCart={this.handleAddToCart} 
        />

      </div>
    )
  }
}

export default App;

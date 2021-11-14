import React, { Component } from 'react';
import { commerce } from './lib/commerce';

import './styles/scss/styles.scss'
import Hero from './Components/Hero';
import Product from './Components/Products/Product';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      CardProduct: [],
      cart: {},
    };
  }

  componentDidMount() {
    this.fetchCart();
  }

  fetchCart() {
    commerce.cart.retrieve().then((cart) => {
      this.setState({ cart });
    }).catch((error) => {
      console.error('Issue fetching the cart', error)
    })
  }
 

  render () {
    return (
      <div className="app">
        <Hero />
      
        <Product />

      </div>
    )
  }
}

export default App;

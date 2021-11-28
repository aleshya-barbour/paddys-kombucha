import React, { Component } from 'react';
import { commerce } from './lib/commerce';

import './styles/scss/styles.scss'
import Hero from './Components/Hero';
import ProductList from './Components/ProductList';
// import Cart from './Components/Cart'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Product: [],
      cart: {},

    };
    
  }

  componentDidMount() {
    this.fetchProducts();
  }

  fetchCart() {
    commerce.cart.retrieve().then((cart) => {
      this.setState({ cart });
    }).catch((error) => {
      console.error('There was an error fetching the cart', error);
    })
  }

  fetchProducts() {
    commerce.products.list().then((products) => {
      this.setState({ products: products.data })
    }).catch((error) => {
      console.log('There was an error fetching the products', error);
    })
  }

  render () {
    const { products } = this.state;
    return (
      <div className="app">
        <Hero />
      
        <ProductList
           
        />

       

      </div>
    )
  }
}

export default App;

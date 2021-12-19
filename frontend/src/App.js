import React, { Component } from 'react';
import { commerce } from './lib/commerce';

import './styles/scss/styles.scss'
import Hero from './Components/Hero';
import ProductList from './Components/ProductList';
import Cart from './Components/Cart'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      cart: {},
  
        
    };
    
    
  }

 
   
  componentDidMount() {
    this.fetchProducts();
    this.fetchCart();
  }

  fetchProducts () {
    commerce.products.list().then((products) => {
      this.setState({ products: products.data});
    }).catch((error) => {
      console.log('There was an error fetching your product', error)
    })
  }

  fetchCart() {
    commerce.cart.retrieve().then((cart) => {
      this.setState({ cart });
    }).catch((error) => {
      console.error('There was an error fetching the cart', error)
    })
  }

  handleUpdateCartQty(lineItemId, quantity) {
    commerce.cart.update(lineItemId, { quantity}).then((resp) => {
      this.setState({cart: resp.cart})
    }).catch((error) => {
      console.log('Theere was an error updating the cart items', error)
    })
  }

  handleAddToCart(productId, quantity) {
    commerce.cart.add(productId, quantity).then((item) => {
      this.setState({ cart: item.cart })
    }).catch((error) =>{
      console.error('There was an error adding the item to the cart', error)
    })
  }


  render () {
    
    const { products, cart, loading } = this.state;
    if (loading) {
      return<p>Loading...</p>;
    }
    return (
      <div className="app">
        <Hero />
      
        <ProductList
          products={products}
          onAddToCart={this.handleAddToCart}
        />

        <Cart
          cart={cart}
          onUpdateCartQty={this.handleUpdateCartQty}
          onRemoveFromCart={this.handleRemoveFromCart}
          onEmptyCart={this.handleEmptyCart}
        />
        

       

      </div>
    )
  }
}

export default App;
       
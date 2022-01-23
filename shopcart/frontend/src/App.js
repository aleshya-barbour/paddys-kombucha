import React, { Component } from 'react';
import commerce from './lib/commerce';
import Product from './Components/Product';

class App extends Component() {
  constructor(props) {
    super(props);

    this.state = {
      Product: [], 
    }
  }

  render () {
    return (
      <div className="app">
      <Product />

      </div>
    )
  }
}

export default App;

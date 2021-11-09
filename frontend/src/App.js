import React, { Component } from 'react';

import { CardProduct } from './Components/Products/Product';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      CardProduct: [] 
    };
  }

  render () {
    return (
      <div className="app">
      
      <CardProduct />       

      </div>
    )
  }
}

export default App;

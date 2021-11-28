import React, {Component} from 'react';
import Product from './ProductItem';

class ProductList extends Component {

  render() {
    const { products } = this.props;

    return ( 
      <>
        <div>

          {products.map((product) => (
            <Product
              key={product.id}
              product={product}
              {...this.props}
            />
          ))}
        
        </div>


      </>
    )

  }

}

export default ProductList;


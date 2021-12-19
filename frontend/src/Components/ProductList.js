import React, {Component} from 'react';

import PropTypes from 'prop-types';
import ProductItem from './ProductItem';


class ProductList extends Component {

  render() {
    const { products } = this.props;

    return ( 
      <>
        <div>
          {products.map((product) =>(
            <ProductItem
            key={product.id}
            product={product}
            />
          ))}
        
        
        </div>
      </>
    )

  }

}

export default ProductList;

ProductList.propTypes = {
  products: PropTypes.array

}
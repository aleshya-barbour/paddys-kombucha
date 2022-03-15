import React, { useState, useEffect } from 'react';
import { commerce } from './lib/commerce';
// import { Routes, Route } from 'react-router-dom'

import './styles/scss/styles.scss'

import Hero from './Components/Hero';
import ProductList from './Components/ProductList';
import CartNav from './Components/CartNav'

const App = () => {
  const [merchant, setMerchant] = useState({})
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

    
  useEffect(() => {
    fetchMerchantDetails();
    fetchProducts();
    fetchCart();
 
  }, []);   
  
  const fetchMerchantDetails = () => {
    commerce.merchants.about().then((merchant) => {
      setMerchant(merchant);
    }).catch((error) => {
      console.log('There was an error fetching the merchant details', error)
    })
  }

  const fetchProducts = () => {
    commerce.products.list().then((products) => {
      setProducts(products.data);
    }).catch((error) => {
      console.log('There was an error fetching the products', error)
    });
  }

  const fetchCart = () => {
    commerce.cart.retrieve().then((cart) => {
      setCart(cart);
    }).catch((error) => {
      console.log('There was an error fetching the cart', error);
    });
  }
  const handleUpdateCartQty = (lineItemId, quantity) => {
    commerce.cart.update(lineItemId, { quantity }).then((resp) => {
      setCart(resp.cart);
    }).catch((error) => {
      console.log('There was an error updating the cart items', error);
    });
  }

  const handleAddToCart = (productId, quantity) => {
    commerce.cart.add(productId, quantity).then((item) => {
      setCart(item.cart);
    }).catch((error) => {
      console.error('There was an error adding the item to the cart', error);
    });
  }
                                       
  const handleRemoveFromCart = (lineItemId) => {
    commerce.cart.remove(lineItemId).then((resp) => {
      setCart(resp.cart);
    }).catch((error) => {
      console.error('There was an error removing the item from the cart', error);
    });
  }
 
 const handleEmptyCart = () => {
    commerce.cart.empty().then((resp) => {
      setCart(resp.cart);
    }).catch((error) => {
      console.error('There was an error emptying the cart', error);
    });
  }

  
       return (
        <div className="app">
         
          <CartNav    
            cart={cart}
            onUpdateCartQty={handleUpdateCartQty}
            onRemoveFromCart={handleRemoveFromCart}
            onEmptyCart={handleEmptyCart}
          />

           <Hero 
            merchant={merchant}
            />
         
          
         <ProductList
            products={products}
            onAddToCart={handleAddToCart}
          />
        </div>
       )
     
   
     
    
    
  }

export default App;
       
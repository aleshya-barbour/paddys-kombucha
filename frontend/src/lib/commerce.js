import Commerce from '@chec/commerce.js';


export const commerce = new Commerce(process.env.REACT_APP_CHEC_PUBLIC_KEY, true);




commerce.cart.retrieve().then((cart) => console.log(cart));
commerce.cart.refresh().then((cart) => console.log(cart));
commerce.cart.add('prod_gnZO5k4R8gl7MN', 5).then((response) => console.log(response));
commerce.checkout.getToken('chkt_L5z3kmQpdpkGlA').then((token) => console.log(token));

// curl -X POST \
// "https://api.chec.io/v1/carts/cart_ql9Wmad240029o"" \
//    -H "X-Authorization:pk_34669f6f48bde827c82dcdc26ae4aa719a879f27edc63"
//    -H "Content-Type: application/json" \
//    -d '{"id":"cart_ql9Wmad240029o","quantity":5}'

// pk_34669f6f48bde82-7c82dcdc26ae4aa719a879f27edc63"

// curl -X GET \
//     -G "https://api.chec.io/v1/carts" \
//     -H "X-Authorization:pk_34669f6f48bde827c82dcdc26ae4aa719a879f27edc63"

// curl -X GET \
//     -G "https://api.chec.io/v1/carts/cart_ql9Wmad240029o" \
//     -H "X-Authorization:pk_34669f6f48bde827c82dcdc26ae4aa719a879f27edc63"
 
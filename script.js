// Importing module
// import { addToCart, shippingCost as cost, ct } from "./shoppingCart.js";
// addToCart("bread", 10);
// console.log(cost, ct);
console.log("Importing module");

// import * as shoppingCart from "./shoppingCart.js"; // Acting like class

// shoppingCart.addToCart("bread", 5);

// import add, { shippingCost as cost, ct } from "./shoppingCart.js";
// console.log(ct);

import add, { cart } from "./shoppingCart.js";
add("pizza", 2);
add("hamburger", 4);

console.log(cart);

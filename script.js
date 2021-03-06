// Importing module
// import { addToCart, shippingCost as cost, ct } from "./shoppingCart.js";
// addToCart("bread", 10);
// // console.log(cost, ct);
console.log("Importing module");

// import * as shoppingCart from "./shoppingCart.js"; // Acting like class

// shoppingCart.addToCart("bread", 5);

// import add, { shippingCost as cost, ct } from "./shoppingCart.js";
// console.log(ct);

import add, { cart } from "./shoppingCart.js";
add("pizza", 2);
add("hamburger", 4);

console.log(cart);

// Module Pattern
// const shoppingCart2 = (function () {
//   const cart = [];
//   const shippingCost = 10;
//   const totalPrice = 237;
//   const totalQuantity = 23;

//   const addToCart = function (product, quantity) {
//     cart.push({ product, quantity });
//     console.log(
//       `${quantity} ${product} added to cart (shipping cost is ${shippingCost})`
//     );
//   };

//   const orderStock = function (product, quantity) {
//     console.log(`${quantity} ${product} ordered from supplier`);
//   };

//   return {
//     addToCart,
//     cart,
//     totalPrice,
//     totalQuantity,
//   };
// })();

// shoppingCart2.addToCart("apple", 4);
// shoppingCart2.addToCart("pizza", 2);
// console.log(shoppingCart2);
// console.log(shoppingCart2.totalPrice);
// console.log(shoppingCart2.shippingCost);

// CommonJS Modules

// Export
// export.addToCart = function (product, quantity) {
//       cart.push({ product, quantity });
//       console.log(
//         `${quantity} ${product} added to cart (shipping cost is ${shippingCost})`
//       );
//     };

// // Import
// const {addToCart} = require('./shoppingCart.js');

// import cloneDeep from "./node_modules/lodash-es/cloneDeep.js";
import cloneDeep from "lodash-es";

const state = {
  cart: [
    { product: "bread", quantity: 5 },
    { product: "pizza", quantity: 5 },
  ],
  user: { loggedIn: true },
};
const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);

state.user.loggedIn = false;
console.log(stateClone);
console.log(stateDeepClone);

if (module.hot) {
  module.hot.accept();
}

class Person {
  greeting = "hey";
  constructor(name) {
    this.name = name;
    console.log(`${this.greeting}, ${this.name}`);
  }
}
const jonas = new Person("Jinsoo");

console.log(cart.find((el) => el.quantity >= 2));
Promise.resolve("TEST").then((x) => console.log(x));

import "core-js/stable";
// import "core-js/stable/array/find";
// import "core-js/stable/promise";

// Polifiiling async functions
import "regenerator-runtime/runtime";

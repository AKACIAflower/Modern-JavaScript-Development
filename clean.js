// Functions
/*
  1. Generally, functions should do only one thing
  2. Don't use more than 3 function parameters
  3. Use default parameters whenever possible
  4. return same data type as received
  5. Use arrow functions when they make code more readable
*/

// OOP
/* 
  1. Use ES6 classes
  2. Encapsulate data and don't mutate it from outside the class
  3. Implement method chaining
  4. Don't use arrow functions as methods (in regular objects)
*/

// AVOID NESTED CODE
/*
  1. Use early return (guard clauses)
  2. Use ternaty (conditional) or logical operators instead of if
  3. Use multiple if of if/else-if
  4. Avoid for loops, use array methods instead
  5. Avoid callback-based asynchronous APIs
*/

// ASYNCHRONOUS CODE
/*
  1. Consume promises with async/await for best readability
  2. Whenever possible, run promises in parallel (Promise.all)
  3. Handle errors and promise rejections
*/
"use strict";

const budget = [
  { value: 250, description: "Sold old TV 📺", user: "jonas" },
  { value: -45, description: "Groceries 🥑", user: "jonas" },
  { value: 3500, description: "Monthly salary 👩‍💻", user: "jonas" },
  { value: 300, description: "Freelancing 👩‍💻", user: "jonas" },
  { value: -1100, description: "New iPhone 📱", user: "jonas" },
  { value: -20, description: "Candy 🍭", user: "matilda" },
  { value: -125, description: "Toys 🚂", user: "matilda" },
  { value: -1800, description: "New Laptop 💻", user: "jonas" },
];

const spendingLimits = {
  jonas: 1500,
  matilda: 100,
};

const getLimit = (user) => spendingLimits?.[user] ?? 0;

const addExpense = function (value, description, user = "jonas") {
  user = user.toLowerCase();

  // 삼항 연산자로 표현
  // const limit = spendingLimits[user] ? spendingLimits[user] : 0;

  if (value <= getLimit(user)) {
    budget.push({ value: -value, description, user });
  }
};
addExpense(10, "Pizza 🍕");
addExpense(100, "Going to movies 🍿", "Matilda");
addExpense(200, "Stuff", "Jay");

const checkExpenses = function () {
  for (const entry of budget)
    if (entry.value < -getLimit(entry.user)) entry.flag = "limit";
};
checkExpenses();

const logBigExpenses = function (bigLimit) {
  let output = "";
  for (const entry of budget)
    output +=
      entry.value <= -bigLimit ? `${entry.description.slice(-2)} / ` : ""; // Emojis are 2 chars

  output = output.slice(0, -2); // Remove last '/ '
  console.log(output);
};

console.log(budget);
logBigExpenses(500);

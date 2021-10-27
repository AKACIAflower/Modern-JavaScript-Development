"strict mode";

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

// Object.freeze() -> object의 첫번째 레벨까지만 얼린다. (deep freeze가 아니다.)
const budget = Object.freeze([
  { value: 250, description: "Sold old TV 📺", user: "jonas" },
  { value: -45, description: "Groceries 🥑", user: "jonas" },
  { value: 3500, description: "Monthly salary 👩‍💻", user: "jonas" },
  { value: 300, description: "Freelancing 👩‍💻", user: "jonas" },
  { value: -1100, description: "New iPhone 📱", user: "jonas" },
  { value: -20, description: "Candy 🍭", user: "matilda" },
  { value: -125, description: "Toys 🚂", user: "matilda" },
  { value: -1800, description: "New Laptop 💻", user: "jonas" },
]);

budget[0].value = 10000;

// 데이터 불변성을 위해 선언전 프로그래밍형태로 작성
const spendingLimits = Object.freeze({
  jonas: 1500,
  matilda: 100,
});

// Object.freeze()때문에 spendingLimits의 값은 그대로이다.
// spendingLimits.jonas = 1000;
// console.log(spendingLimits);

const getLimit = (limits, user) => limits?.[user] ?? 0;

// Pure function
const addExpense = function (
  state,
  limits,
  value,
  description,
  user = "jonas"
) {
  const cleanUser = user.toLowerCase();

  // 삼항 연산자로 표현
  // const limit = spendingLimits[user] ? spendingLimits[user] : 0;

  return value <= getLimit(limits, cleanUser)
    ? [...state, { value: -value, description, user: cleanUser }]
    : state;

  // budget.push({ value: -value, description, user: cleanUser });
};
const newBudget1 = addExpense(budget, spendingLimits, 10, "Pizza 🍕");

const newBudget2 = addExpense(
  newBudget1,
  spendingLimits,
  100,
  "Going to movies 🍿",
  "Matilda"
);
const newBudget3 = addExpense(newBudget2, spendingLimits, 200, "Stuff", "Jay");

const checkExpenses = (state, limits) =>
  state.map((entry) =>
    entry.value < -getLimit(limits, entry.user)
      ? { ...entry, flag: "limit" }
      : entry
  );

const finalBudget = checkExpenses(newBudget3, spendingLimits);
console.log(newBudget3);
console.log(finalBudget);

// Impure function
const logBigExpenses = function (state, bigLimit) {
  // let output = "";
  // for (const entry of budget)
  //   output +=
  //     entry.value <= -bigLimit ? `${entry.description.slice(-2)} / ` : ""; // Emojis are 2 chars

  // output = output.slice(0, -2); // Remove last '/ '
  // console.log(output);
  const bigExpenses = state
    .filter((entry) => entry.value <= -bigLimit)
    // .reduce((str, cur) => `${str} / ${cur.description.slice(-2)}`, ""); // => reduce를 사용하는 방법
    .map((entry) => entry.description.slice(-2))
    .join(" / "); //=> map과 join을 사용하는 방법

  // It's an impure function because this logging creates a side effect
  console.log(bigExpenses);
};

logBigExpenses(finalBudget, 500);

// 명령형 코드 vs 선언형 코드

// 1. 명령형 코드

// -> Programmer explains 'HOW to do things'
// -> We explain the computer every single step it has to follow to achieve a result
// -> Example : Step-by-step recipe of a cake

// const arr = [2, 4, 6, 8];
// const doubled = [];
// for (let i = 0; i < arr.length; i++) doubled[i] = arr[i] * 2;

// 2. 선언형 코드

// -> Programmer tells 'WHAT to do'
// -> We simply describe the way the computer should achieve the result
// -> The HOW (step-by-step instructions) gets abstracted away
// -> Example : Description of a cake

// const arr1 = [2, 4, 6, 8];
// const dobled1 = arr1.map((n) => n * 2);

// Functional Programming

// -> Declarative programming paradigm
// -> Based on the idea of writing software by combining many pure functions, avoiding side effects and mutating data

// -> Side effect : Modification (mutation) of any data outside of the function (mutating external variables, logging to console, writing to DOM 등등)
// -> Pure function : Function without side effects. Don't depend on external variables. Given the same inputs, always returns the same outputs.
// -> Immutability : State (data) is never modified! isConcatSpreadable, state is copied and the copy is mutated and returned.
// -> Examples : React, Redux

// Functional Programming Techniques
// -> Try to avoid data mutations.
// -> Use built-in methods that don't produce side effects.
// -> Do data transformations with methods such as .map(), .filter() and .reduce()
// -> Try to avoid side effects in functions: this is of course not always possible.

// Declarative syntax
// -> Use array and object destructuring
// -> Use the spread operator (...)
// -> Use the ternary (conditional) operator
// -> Use template literals

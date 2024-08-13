
# JavaScript Concepts and Examples

This repository contains explanations and examples of fundamental JavaScript concepts, such as data types, hoisting, closures, callbacks, promises, async/await, and more. These examples demonstrate the core principles that every JavaScript developer should understand.

## Table of Contents
- [What is JavaScript?](#what-is-javascript)
- [Data Types in JavaScript](#data-types-in-javascript)
- [Hoisting in JavaScript](#hoisting-in-javascript)
- [Null vs Undefined](#null-vs-undefined)
- [Closures in JavaScript](#closures-in-javascript)
- [Callback Functions in JavaScript](#callback-functions-in-javascript)
- [Promises in JavaScript](#promises-in-javascript)
- [Purpose of setTimeout()](#purpose-of-settimeout)
- [Checking Array Values](#checking-array-values)
- [Removing Duplicates from an Array](#removing-duplicates-from-an-array)
- [Async and Await in JavaScript](#async-and-await-in-javascript)

## What is JavaScript?

JavaScript (JS) is a high-level, interpreted programming language used to create interactive web pages with dynamic functionality. It can be used for both frontend and backend development.

\`\`\`javascript
console.log("Hello, JavaScript!");
\`\`\`

## Data Types in JavaScript

JavaScript has seven different data types:

- Numbers
- Null
- Boolean
- Undefined
- Objects
- Symbols
- Strings

Primitive data types store data of only one type, while non-primitive data types can store multiple data types within a single entity.

\`\`\`javascript
let name = "John"; // String
let age = 30; // Number
let isStudent = true; // Boolean
let address = null; // Null
let phone; // Undefined
let user = { id: 1, name: "John" }; // Object
\`\`\`

## Hoisting in JavaScript

Hoisting is the process of moving variable and function declarations to the top of their scope before code execution. This allows you to use functions and variables before they are declared.

\`\`\`javascript
console.log(greeting); // Undefined due to hoisting
var greeting = "Hello, Ms. Jelimo"; 

const sayHi = () => {
  console.log(greeting);
};
sayHi();
\`\`\`

## Null vs Undefined

- \`null\` represents the intentional absence of any object value.
- \`undefined\` indicates that a variable has been declared but not assigned a value.

\`\`\`javascript
let age; // undefined
console.log(age); // Outputs: undefined

let amount = null; // null
console.log(amount); // Outputs: null
\`\`\`

## Closures in JavaScript

Closures are functions that have access to variables from an outer function even after the outer function has finished executing.

\`\`\`javascript
const outerFunc = () => {
  let myVar = "hello closures";

  const innerFunc = () => {
    console.log(myVar);
  };
  return innerFunc();
};

let closureFunc = outerFunc();
console.log(closureFunc);
\`\`\`

## Callback Functions in JavaScript

A callback is a function passed as an argument to another function and intended to be executed after that function completes. Callbacks are especially useful in asynchronous functions.

\`\`\`javascript
const fetchData = (callback) => {
  setTimeout(() => {
    console.log("data is fetched");
    callback();
  }, 2000);
};

const processData = () => {
  console.log("data is processing...");
};

fetchData(processData);
\`\`\`

## Promises in JavaScript

Promises are a way to handle asynchronous operations in JavaScript. They represent the eventual completion (or failure) of an asynchronous operation.

\`\`\`javascript
const myPromise = new Promise((resolve, reject) => {
  let success = true;
  if (success) {
    resolve("operation was successful");
  } else {
    reject("operation failed");
  }
});

myPromise
  .then((result) => {
    console.log("this is a success result");
  })
  .catch((error) => {
    console.log("error occurred", error);
  });
\`\`\`

## Purpose of setTimeout()

The \`setTimeout()\` function is used to delay the execution of a function after a specified time in milliseconds.

\`\`\`javascript
setTimeout(() => {
  console.log("This message is delayed by 2 seconds");
}, 2000);
\`\`\`

## Checking Array Values

You can use the \`includes()\` method to check if an array includes a certain value.

\`\`\`javascript
let fruits = ['melon', 'orange', 'banana'];
console.log(fruits.includes('mango')); // Outputs: false
console.log(fruits.includes('banana')); // Outputs: true
\`\`\`

## Removing Duplicates from an Array

Use the \`Set\` object to remove duplicates from an array in JavaScript.

\`\`\`javascript
let numbers = [1, 2, 2, 3, 4, 5, 6, 7, 8, 8, 9, 3, 4, 5];
let uniqueNumbers = [...new Set(numbers)];
console.log(uniqueNumbers); // Outputs: [1, 2, 3, 4, 5, 6, 7, 8, 9]
\`\`\`

## Async and Await in JavaScript

The \`async\` and \`await\` keywords are used to handle asynchronous operations in a more synchronous-like manner. 

\`\`\`javascript
const fetchApiData = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/photos");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
fetchApiData();
\`\`\`
`;



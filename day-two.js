// 7 Ways to Prepare for a JavaScript Interview
// Review JavaScript fundamentals.
// Master key concepts.
// Study common interview questions.
// Master debugging skills.
// Practice coding.
// Build projects.
// Mock interviews.




// What is the purpose of the “this” keyword in JavaScript?
   //------this keyword refers to the object that is executing the current function or method.
   const person = {
    name: "Ms. Jelimo",
    greet: function(){
        console.log('hello' + ' ' + this.name)
    }
   }
   person.greet()

//    What is the difference between == and === operators in JavaScript?
// == operator compares the values only and returns true if they are equal
// === operator compares the values and datatypes and returns true if both are true 
let a = 10;
let x = 10;   
let y = "10";
console.log(a == x);
console.log(a == y);
console.log(a === y);

// What is the difference between “var” and “let” keywords in JavaScript? 

//------ The var keyword declares a global variable, which means that the variable can be accessed from anywhere in the code. 
//------ The let keyword declares a local variable, which means that the variable can only be accessed within the block of code where it is declared. 

// What is the difference between “let”, “const”, and “var”?
// let and const were introduced in ES6 and have block scope. let is reassignable, and const is non-reassignable. 
// var is function-scoped and can be redeclared and reassigned throughout the function. 

// What are the different types of errors in JavaScript?
// JavaScript can throw a variety of errors, including:

// Syntax errors: These errors occur when the JavaScript code is not syntactically correct.
// Runtime errors: These errors occur when the JavaScript code is executed and there is a problem.
// Logical errors: These errors occur when the JavaScript code does not do what it is supposed to do.

// What is the use of a constructor function in JavaScript?
// What is the difference between a function declaration and a function expression in JavaScript?
// What is the difference between synchronous and asynchronous programming?

// How do you handle errors in JavaScript?
// Errors in JavaScript can be handled using try-catch blocks. The try block contains the code that may throw an error, and the catch block handles the error and provides an alternative execution path.

// What are arrow functions in JavaScript?

// What is the difference between querySelector and getElementById?
// querySelector is a more versatile method that allows you to select elements using CSS-like selectors, while getElementById specifically selects an element with the specified ID.

// How can you prevent the default behavior of an event in JavaScript?
// You can use the preventDefault() method on the event object within an event handler to prevent the default behavior associated with that event.

// What is the difference between localStorage and sessionStorage in JavaScript?
// Both localStorage and sessionStorage are web storage objects in JavaScript, but they have different scopes and lifetimes.

// localStorage persists data even after the browser window is closed and is accessible across different browser tabs/windows of the same origin.
// sessionStorage stores data for a single browser session and is accessible only within the same tab or window.
 
// What is JavaScript?
  //---Js is a high-level interpreted programming language use to create interactive web pages with dynamic functionality.
      //---devs use js for both frontend and backend

// What are the different data types in JavaScript?
  // ------(snnobu) = 1. numbers 2. null 3. boolean 4. undefined 5. objects 6. symbols 7. string
  //----primitive datatype ---store data of only one type while non primitive store data of more than one type in a sigle entity

// What is hoisting in JavaScript?
  // ---Hoisting refers to declaration of variables on top of scope
//   Hoisting is a JavaScript concept that refers to the process of moving declarations to the top of their scope. This means that variables and functions can be used before they are declared, as long as they are declared before they are used in a function.
 let greeting = "Hello Ms. Jelimo"; 
 const sayHi = () => {
    console.log(greeting)
 }
 sayHi();

// What is the difference between null and undefined?
  //------null refers to js datatype that shows absence of value ------undefined refers to js datatype that shows a variable that has no assigned value
  //null is an assignment value that represents no value or an empty value, while undefined is a variable that has been declared but not assigned a value.
  let age; //------undefined---not assigned a value
  console.log(age)
  let amount = null; //----no value, empty value
  console.log(amount)
  // What are closures in JavaScript?
      //----functions that have access to variables from an outer function even after its done executing
      const outerFunc =  () =>{
        let myVar = "heelo closures";

        const innerFunc = () =>{
            console.log(myVar)
          } 
          return innerFunc()

        }
        let closureFunc = outerFunc()
        console.log(closureFunc)

// What is a callback function in JavaScript?
  //---a callback is a function passed as an argument to another function and intended to be executed after completion of that function ---useful in asynchronous functions where one function has to wait for another
 const fetchData = (callback) => {
     setTimeout(()=>{
        console.log("data is fetched")
        callback();
     }, 2000)
 }
 const processData = () =>{
    console.log("data is processing...")
 }
 fetchData(processData); //fetchData- A function that simulates data fetching and takes another function (callback) as an argument. processData- The callback function that is passed to fetchData and is executed once the data is fetched (after 2 seconds in this case)

// What are promises in JavaScript?
  //-----promises are a good way to handle asynchronous operations---helps to find out whether the operation completed successfully or the operation failed
  //-----promises have three states ---fulfilled, rejected, pending
  const myPromise = new Promise((resolve, reject) =>{
    let success = true;
    if(success) {
        resolve("operation was successful")
    }
    else{
        reject("operation failed")
    }
  });
  myPromise.then((result)=>{
    console.log('this is a success result')
  }).catch((error)=>{
    console.log('error occurred', error)
  })

// What is the purpose of the setTimeout() function in Javascript? 
   //---- function used to delay the execution of a function after a specified time in milliseconds

// How can you check if an array includes a certain value?
    //--------use includes() method to check if an array includes a certain value
  let fruits = ['melon', 'orange', 'banana']
  console.log(fruits.includes('mango'))
  console.log(fruits.includes('banana'))

// How can you remove duplicates in an array?
    //------use the set object to remove duplicates in js
    let numbers = [1,2,2,3,4,5,6,7,8,8,9,3,4,5]
    let uniqueNumbers = new Set(numbers)
    console.log(uniqueNumbers)

// What is the purpose of async and await in JavaScript?
   // ----The async and await keywords are used for handling asynchronous operations in a more synchronous-like manner. The async keyword is used to define an asynchronous function, and the await keyword is used to pause the execution of an async function until a promise is fulfilled or rejected.
   const fetchApidata = async () =>{
     try {
        const response = await fetch("https://jsonplaceholder.typicode.com/photos")
        const data = await response.json();
        console.log(data)
     } catch (error) {
        console.log(error)
     }
   }
   fetchApidata();
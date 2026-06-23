// Primitive data types in JavaScript include:  //

// Number , Boolean , String , Null ,Undefined ,symbol , Bigint . => Total types = 7.


const score = 100;
const  scorevalue = 100.003;

const isloggedin = false;
const outsideTemp = null;
let userEmail;

// const id = Symbol('123');
// const anotherId = Symbol('123');

// console.log(id === anotherId); // false because each symbol is unique

// Non - Primitive  (References) data types //

// Arrays , Functions , Objects => mainly 3 types //

const city = ["Delhi", "Mumbai", "pune", "Bangalore"];  //array

let myobj = {
    name : "atharva",
    age : 22,
}  //object


function greet() {
    console.log("Hello World");
};

greet(); // function call
// console.log(city);
// console.log(myobj);

// console.log(typeof score); // number
// console.log(typeof scorevalue);
// console.log(typeof isloggedin);
// console.log(typeof outsideTemp);
// console.log(typeof userEmail);
// console.log(typeof id); // symbol
// // console.log(typeof anotherId); // symbol

// console.log(typeof city); // object
// console.log(typeof myobj);
// console.log(typeof greet); // function


//**************************************************************************************//


// There are two types of memory address in javascript  //

// For primitive data types => Stack memory address is used  //
// This gives copy of data//

// For Non-primitive data type => Heap memory is used //
// This givves direct memory reference of data and not copy of data //

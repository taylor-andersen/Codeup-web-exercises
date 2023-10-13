"use strict"

// Create a function named sum that takes in two numbers and returns the sum of the two numbers.

function sum(num1, num2) {
    return num1 + num2;
}

//Calling the function / Execute the function

console.log(sum(57, 59));

// MINI EXERCISE //

//Create a function named fullName that takes in two inputs, a first name and last name and returns them together
// function fullName(string1, string2) {
//     return string1 + " " + string2;
// }
// console.log(fullName("Taylor","Andersen"));

//Another method
// function fullName(string1, string2) {
//     return `${string1} ${string2}`;
// }
// console.log(fullName("Taylor","Andersen"));
//
// console.log(`Hello ${fullName('Taylor', 'Andersen')}, did you know that 5 + 5 = ${sum(5,5)}}`);


// Anonymous Function

const decrement = function(input) {
    return input +1;
}

console.log(decrement(5));

// Arrow Functions

const fullName = (firstName, lastName) => {

    return firstName + " " + lastName;
}

console.log(fullName('Michael', 'Myers'));

// Long Arrow Function
const fullName2 = (firstName, lastName) => firstName + " " + lastName;
console.log(fullName2('Greek', 'Stink'));


// Create a function that takes in a string and transforms the string in all lower case letters.

// Function Declaration
let sampleString = "HoW oN eArTh doEs thiS wOrk?"
function lowerCaseString(str) {
    sampleString = str.toLowerCase();
}
// How to show
    //Run the actual function
lowerCaseString(sampleString);
        //Then after the function is run, the string will change.
console.log(sampleString);

// Arrow Function
const lowerCase = (input) => input.toLowerCase();

console.log(lowerCase('HiT tHe WhOA'));

//Default Parameters
function greeting(greeting = 'Howdy!') {
    return greeting;
}
    //If left blank, will return the default
console.log(greeting());
    //However, if something is put, it will prioritize the given string over the default
console.log(greeting('Hello there'));


//Working with Scopes

let globalVar = "Hello! My name is Globie!";

function test() {
    let localVar = 'Hello, my name is Lola';
    console.log(localVar);
    console.log(globalVar);
    {
        //called a block scope, since it is inside curly braces, you cannot access it outside the curly braces
        let innerVar = 'Nested Var!';
    }
}
test();
//localVar is only defined within the function, not able to access it outside of the function
//console.log(localVar);
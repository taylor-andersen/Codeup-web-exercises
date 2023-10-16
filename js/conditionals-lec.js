"use strict";

let age = 16;

if(age >= 16) {
    console.log("You're eligible to drive");
}
 if(age < 16) {
     console.log("You're not eligible to drive")
}


 // same example with if/else conditional

if(age >= 16) {
    console.log("You can drive")
} else {
    console.log("You cannot drive")
}

let currentDay = prompt("What is the day today?").toLowerCase();

if(currentDay === 'monday' || currentDay === 'tuesday' || currentDay === 'wednesday') {
    console.log("I love " + currentDay)
} else {
    console.log(currentDay + " is not a valid day")
}

let letsPlay = confirm("Do you want to play?");

if(letsPlay) {
    console.log("Great! Lets play xyz.");
} else {
    console.log("Maybe next time...");
}


let username = "user";
let password = "password";

let userUsername = prompt("Please enter a username:").toLowerCase();
let userPassword = prompt("Please enter a password:").toLowerCase();

if(username === userUsername && password === userPassword) {
    console.log("You're logged in.");
} else if (username !== userUsername && password !== userPassword) {
    console.log("Incorrect username and password.")
} else if (username !== userUsername) {
    console.log("Incorrect username")
} else if (password !== userPassword) {
    console.log("Incorrect password")
} else {
    console.log("Unexpected error!%%")
}

// Nested Conditional example

if(username === userUsername) {
    if(password === userPassword) {
        console.log("Logged in")
    } else {
        console.log("Incorrect Password")
    }
} else {
    console.log("Invalid username")
}

//Ternary Operators (Shorthand If/Else)
let name = "Bob";

let greeting = (name === "Bob") ? console.log("Hello, " + name) : console.log("Hello stranger!");

let currentCurrentDay = currentDay === 'monday' || currentDay === 'tuesday' || currentDay === 'wednesday' ? "I love "
    + currentDay : currentDay + "is not a valid day"
console.log(currentCurrentDay);


// Switch statements
let daysOfTheWeek = "Saturday";

switch(daysOfTheWeek) {
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday":
        console.log("It's a weekday.");
        break;
    case "Saturday":
    case "Sunday":
        console.log("It's a weekend.");
        break;
    default:
        console.log("Invalid day of the week");
}


// Using Function with an If/Else Statement

function sayHello(name) {
    if(name.length <= 20) {
        return `Hello, ${name}}`
        else {
            return "That is way too long of a name."
        }
    }
}

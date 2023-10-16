"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

// function analyzeColor(color) {
//     if (color.toLowerCase() === 'red') {
//         console.log("Strawberries are red.")
//     }
//         else if (color.toLowerCase() === 'blue') {
//             console.log("Blue is the color of the sky")
//         }
//         else if (color.toLowerCase() === 'green') {
//             console.log("Green is my favorite color!")
//         }
//         else if (color.toLowerCase() === 'yellow') {
//             console.log("Sunflowers are yellow.")
//         }
//         else {
//             console.log(`I don't know anything about ${color}.`)
//         }
//
// }
// let myColor = analyzeColor('RED');
// console.log(myColor)

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
const randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */
//console.log(analyzeColor(randomColor));
/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */
let analyzeColor = prompt('What is your favorite color').toLowerCase();
switch(analyzeColor) {
    case "red":
        console.log('Red apples are my favorite.');
        alert('Red apples are my favorite.');
        break
    case "blue":
        console.log('The ocean is blue.');
        alert('The ocean is blue.');
        break
    case "yellow":
        console.log('Yellow flowers are beautiful.');
        alert('Yellow flowers are beautiful.');
        break
    case "green":
        console.log('Healthy plants are green!');
        alert('Healthy plants are green!');
        break
    default:
        console.log(`I don't know much about ${analyzeColor}.`);
        alert(`I don't know much about ${analyzeColor}.`);
}
/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

//added to code above ^^


/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

function calculateTotal(luckyNum, totalAmount) {
    if(luckyNum === 1) {
        return totalAmount - (totalAmount * .10);
    }
    else if(luckyNum === 2) {
        return totalAmount - (totalAmount * .25);
    }
    else if(luckyNum === 3) {
        return totalAmount - (totalAmount * .35);
    }
    else if(luckyNum === 4) {
        return totalAmount - (totalAmount * .50);
    }
    else if(luckyNum === 5) {
        return totalAmount - (totalAmount * 1);
    }
    else {
        return totalAmount;
    }
}
console.log(calculateTotal(2, 100))
/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
const luckyNumber = Math.floor(Math.random() * 6);

//prompt the user for their total bill
let userBill = prompt('What is the total amount of your bill?');
//use calculateTotal function
let finalBill = calculateTotal(luckyNumber, userBill);
alert(`Your lucky number is ${luckyNumber}! Your price before the discount was $${userBill}. After your discount, your new total is $${finalBill.toFixed(2)}!`);
console.log((`Your lucky number is ${luckyNumber}! Your price before the discount was $${userBill}. After your discount, your new total is $${finalBill.toFixed(2)}!`));

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */
let enterNumber = confirm('Would you like to enter a number?');
if(enterNumber) {
    //prompt user for a number
    let userInput = prompt("Choose any number you'd like:")
    // Check if the user entered a number
    let number = parseFloat(userInput);
    if (!isNaN(number)) {

        // Check if the number is even or odd
        let evenOrOdd = number % 2 === 0 ? 'even' : 'odd';

        // Calculate the number plus 100
        let numberPlus = number + 100;

        // Check if the number is negative or positive
        let posOrNeg = number >= 0 ? 'positive' : 'negative';

        // Display the results using alerts
        alert(`Your number, ${userInput}, is ${evenOrOdd}`);
        alert(`Your number, ${userInput}, plus 100 is ${numberPlus}`);
        alert(`Your number, ${userInput}, is ${posOrNeg}`);
    } else {
        // Alert about the incorrect input data type
        alert('You did not enter a valid number.');
    }
} else {
    //if initial boolean was false, they chose to not enter a number
    alert('You chose not to enter a number.');
}

"use strict";

console.log("Hello from external JavaScript")

alert('Welcome to my Website!');

let favColor = prompt("What is your favorite color?");
alert(`Yessssss, ${favColor} is the best!`);


//You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it). If price for a movie per day is $3, how much will you have to pay?
// let moviePrice= 3;
// let mermaid = 3;
// let bear = 5;
// let hercules = 1;
// let totalPrice = moviePrice * (mermaid + bear + hercules);
// console.log("The total price of renting all three movies is $" + totalPrice)
let moviePrice = parseInt((prompt("I saw you rented some movies. How much does one movie cost for a day?")));
let littleMermaid = parseInt(prompt("How many days did you rent The Little Mermaid for?"));
let brotherBear = parseInt(prompt("How many days did you rent Brother Bear for?"));
let hercules = parseInt(prompt("How many days did you rent Hercules for?"));
let totalPrice = moviePrice * (littleMermaid + brotherBear + hercules);
alert(`Wow, you spent $${totalPrice.toFixed(2)} on all your rented movies!`);

//Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350. How much will you receive in payment for this week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.
// let facebook = 350
// let amazon = 380
// let google = 400
//
// let weeklyTotal = (facebook * 10) + (amazon * 4) + (google * 6)
// console.log("The weekly total earned from working at all three companies is $" + weeklyTotal)
let facebookHourlyRate = parseInt(prompt("How much do you make per hour with Facebook?"));
let amazonHourlyRate = parseInt(prompt("How much do you make per hour with Amazon?"));
let googleHourlyRate = parseInt(prompt("How much do you make per hour with Google?"));
let facebookHoursWorked = parseInt(prompt("How many hours did you work for Facebook?"));
let amazonHoursWorked = parseInt(prompt("How many hours did you work for Amazon?"));
let googleHoursWorked = parseInt(prompt("How many hours did you work for Google?"));
let weeklyTotal = (facebookHourlyRate * facebookHoursWorked) + (amazonHourlyRate * amazonHoursWorked) + (googleHourlyRate * googleHoursWorked);
alert(`Wow! You made $${weeklyTotal.toFixed(2)} this week! Give me some >:)`);

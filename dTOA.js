//let a = 1;
//let b = a++;
//let c = ++a;
// what is the value of a, b, and c?
// a = 3, b = 1, c = 3

//let d = "hello";
//let e = false;
//d++; //NaN
//e++; //0

//let perplexed; // perplexed is undefined (no value is assigned)
//perplexed + 2;
//NaN

//let price = 2.7;
//price.toFixed(2);
//2.70

//let price = "2.7";
//price.toFixed(2);
//NaN

//isNaN(0) //false

//isNaN(1) //false

//isNaN("") //false

//isNaN("string") //true

//isNaN("0") //false

//isNaN("1") //false

//isNaN("3.145") //false

//isNaN(Number.MAX_VALUE) //false

//isNaN(Infinity) //false

//isNaN("true") //true

//isNaN(true) //false

//isNaN("false") //true

//isNaN(false) //false

// to illustrate why the isNaN() function is needed:
//NaN == NaN //true

//!true
//false

//!false
//true

//!!true
//true

//!!false
//false

//!!0
//false

//!!-0
//false

//!!1
//true

//!!-1
//true

//!!0.1
//true

//!!"hello"
//true

//!!""
//false

//!!''
//false

//!!"false"
//true

//!!"0"
//true

//You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it). If price for a movie per day is $3, how much will you have to pay?
let moviePrice= 3;
let mermaid = 3;
let bear = 5;
let hercules = 1;
let totalPrice = moviePrice * (mermaid + bear + hercules);
console.log("The total price of renting all three movies is", totalPrice)

//Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350. How much will you receive in payment for this week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.
let facebook = 350
let amazon = 380
let google = 400
let weeklyTotal = undefined
weeklyTotal = (facebook * 10) + (amazon * 4) + (google * 6)
console.log("The weekly total earned from working at all three companies is",weeklyTotal)

//Create a variable that holds a boolean value for each of the following conditions
//the password must be at least 5 characters
//the password must not include the username
//the username must be no more than 20 characters
//neither the username or password can start or end with whitespace
let username = 'codeup';
let password = 'notastrongpassword';

let passwordLength = password.length > 4
let doesNotIncludeUsername = !password.includes(username)
let usernameLength = username.length <= 20
let noWhitespace = !username.trim().length && !password.trim().length

console.log("Is the password at least 5 characters?", passwordLength)
console.log("Does the password not include the username?", doesNotIncludeUsername)
console.log("Is the username no more than 20 characters?", usernameLength)
console.log("Neither the username nor password starts or ends with whitespace?", noWhitespace)



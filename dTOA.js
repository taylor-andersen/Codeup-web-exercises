let a = 1;
let b = a++;
let c = ++a;
// what is the value of a, b, and c?
// a = 3, b = 1, c = 3
let d = "hello";
let e = false;

d++; //NaN
e++; //NaN

let perplexed; // perplexed is undefined (no value is assigned)
perplexed + 2;
//undefined

let price = 2.7;
price.toFixed(2);
//2.70

let price = "2.7";
price.toFixed(2);
//NaN

isNaN(0) //false

isNaN(1) //false

isNaN("") //true

isNaN("string") //true

isNaN("0") //true

isNaN("1") //true

isNaN("3.145") //true

isNaN(Number.MAX_VALUE) //false

isNaN(Infinity) //false

isNaN("true") //true

isNaN(true) //true

isNaN("false") //true

isNaN(false) //true

// to illustrate why the isNaN() function is needed:
NaN == NaN //true

//You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it). If price for a movie per day is $3, how much will you have to pay?
let moviePrice= 3;
let mermaid = 3;
let bear = 5;
let hercules = 1;
let totalPrice = moviePrice * (mermaid + bear + hercules);


// let i = 0;
//
// while(i <= 10) {
//     console.log(i);
//     i++
// }

// do while loops
let i=12;

do {
    console.log(i);
    i++

} while(i <= 10)

// ------------ mini exercise --------------
//let num = 0;

// while(num <100) {
//     console.log(num);
//     num += 5;
// }

// do {
//     console.log(num);
//     num +=5
// } while(num <100);

const secretNumber = 7;
let guess;
let attempt = 0;

// do-while loop

do {
    guess = parseInt(prompt('Guess the secret number (1-10):'));
    attempt++
    if(guess === secretNumber) {
        console.log('You have guessed the lucky number! Only ' + attempt + ' attempts!');
    } else {
        if(guess < secretNumber) {
            console.log('Try a higher number.')
        } else{
            console.log('Try a lower number.')
        }
        console.log('Wrong guess bozo!' + attempt + ' total attempts');
    }
} while (guess !== secretNumber);
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

// do {
//     guess = parseInt(prompt('Guess the secret number (1-10):'));
//     attempt++
//     if(guess === secretNumber) {
//         console.log('You have guessed the lucky number! Only ' + attempt + ' attempts!');
//     } else {
//         if(guess < secretNumber) {
//             console.log('Try a higher number.')
//         } else{
//             console.log('Try a lower number.')
//         }
//         console.log('Wrong guess bozo!' + attempt + ' total attempts');
//     }
// } while (guess !== secretNumber);

//---------------------------------------------------------------------

// For Loops Lec

// num += 5 is the same as (num = num + 5)

for(let i = 10; i <= 20; i++) {
    console.log(i);
}

for(let num = 0; num < 100; num += 5) {
    console.log(num);
}

let hello = 'hello';
for(let i = 0; i <= hello.length; i++) {
    console.log(hello.charAt(i));
    //console.log(hello[i]);
}

for(let i = 0, j = 9; i < 10; i++, j--) {
    console.log('for loop iteration #' + i + ',j = ' + j);
}

//break
for(let i = 0; i < 100; i += 5) {
    console.log(i);
    if(i === 50) {
        break;
    }
}

console.log('Trying to break out of loop');

//continue
for(let i = 1; i <=5; i++) {
    if (i === 3) {
        continue;
    }
    console.log(i)
}
// //Taylor Andersen
// //Daily Warm-Ups
// let name = "Taylor Andersen";
// let year = "2017";
// console.log(`My name is ${name} and I graduated high school in ${year}.`)
//
// //Create a function that takes in a string, and returns the string with the first letter in uppercase.
// function capitalizeFirstLetter(string) {
//     //Grab first letter, character 0, uppercase it, attach onto beginning of the original string.
//     console.log(string);
//     return string.charAt(0).toUpperCase() + string.slice(1);
//
// }
// let capitalizedString = capitalizeFirstLetter("example")
// console.log(capitalizedString);
// let capitalizedSentence = capitalizeFirstLetter("i'm a sentence.");
// console.log(capitalizedSentence);
//
// //create a function named 'largestNum' that takes in three numbers as input and returns the largest of the three
//
// function largestNum(num1, num2, num3) {
//     if(num1 > num2 && num1 > num3) {
//         return num1;
//     }
//     else if(num2 > num1 && num2 > num3) {
//         return num2;
//     }
//     else if(num3 > num1 && num3 > num2) {
//         return num3;
//     }
// }
//
// console.log(largestNum(5,10,15));

//-------------------------------------------------------------

// let num = 100;
// console.log(num + ' is even');
// while(num > 0 ) {
//     num -= 5;
//     if (num % 2 === 0) {
//         console.log(num + ' is even');
//     } else {
//         console.log(num)
//     }
// }

//--------------------------------------------------------------

function oneThruHundred () {
    for(let i = 2; i <= 100; i += 2){
        console.log([i])
    }
}
oneThruHundred();

//--------------------------------------------------------------

let favMovies = ['Big Daddy', 'Step Brothers', 'Hot Rod', 'Superbad', 'Borat'];
favMovies.sort();
// favMovies.forEach((movie) =>
// console.log(movie));

favMovies.forEach(movies => {
    console.log(movies)
})

//--------------------------------------------------------------

const cars = [
    {make : 'Nissan', model : 'Altima', color : 'Silver'},
    {make : 'Mitsubishi', model : 'Lancer', color : 'Grey'},
    {make : 'Ford', model : 'F-150', color : 'Black'},
];
cars.forEach(car => {
    console.log(`I have owned a ${car.color} ${car.make} ${car.model}.`)
})

//--------------------------------------------------------------

let developers = [
    {
        name: "Jonathan",
        languages: {
            frontend: ["HTML", "JavaScript", "CSS"],
            backend: ["Java"]
        }
    },
    {
        name: "Bonnie",
        languages: {
            frontend: ["JavaScript"],
            backend: []
        }
    },
    {
        name: "Raj",
        languages: {
            frontend: [],
            backend: ["C#", "Java", "Python"]
        }
    },
    {
        name: "Carmen",
        languages: {
            frontend: ["JavaScript", "HTML", "CSS", "React"],
            backend: ["C#", "Java", "Python", "TypeScript"]
        }
    },
]
// function knowsJavaScript(people) {
//     let coders = people.filter(person => person.languages.frontend.includes('JavaScript'));
//     let coderNames = coders.map(names => names.name);
//     return coderNames;
// }
// const javascriptExperts = knowsJavaScript(developers);
// console.log(javascriptExperts);

// function knowsJavaScript(developers) {
//     let javascriptDevs = [];
//     for (let i = 0; i < developers.length; i++) {
//         if (developers[i].languages.frontend.includes("JavaScript")) {
//             javascriptDevs.push(developers[i].name);
//         }
//     } return javascriptDevs
// }
// const javascriptExperts = knowsJavaScript(developers);
// console.log(javascriptExperts);



const knowsJavaScript = (arr) => {
    let javaScriptDevs = [];
    for(let i=0; i <arr.length; i++) {
        for(let j = 0; j < arr[i].languages.frontend.length; j++) {
            if (arr[i].languages.frontend[j] === 'JavaScript') {
                javaScriptDevs.push(arr[i].name)
            }
        }
    } return javaScriptDevs;
}
const javaScriptStinks = knowsJavaScript(developers)
console.log(javaScriptStinks)
//Taylor Andersen
//Daily Warm-Ups
let name = "Taylor Andersen";
let year = "2017";
console.log(`My name is ${name} and I graduated high school in ${year}.`)

//Create a function that takes in a string, and returns the string with the first letter in uppercase.
function capitalizeFirstLetter(string) {
    //Grab first letter, character 0, uppercase it, attach onto beginning of the original string.
    return string.charAt(0).toUpperCase() + string.slice(1);

}
let capitalizedString = capitalizeFirstLetter("example")
console.log(capitalizedString);
let capitalizedSentence = capitalizeFirstLetter("i'm a sentence.");
console.log(capitalizedSentence);
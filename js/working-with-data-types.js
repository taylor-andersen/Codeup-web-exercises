//define what sample is
let sample = "Hello Codeup";

//find length
console.log(sample.length);

//upper/lowercase
console.log(sample.toUpperCase());
console.log(sample.toLowerCase());

//concatenation
sample = sample + " Students";
// sample += " Students"     same result but shorter/quicker
console.log(sample);

//replace students with class
console.log(sample.replace('Students', 'Class'))

//find lowercase c
console.log(sample.indexOf("c"));
//returns a '-1' because their is no lowercase 'c'. Anytime the index is not found, returns a '-1';

//find uppercase C
console.log(sample.indexOf("C"));
//returns 6, starting from first position which is counted as '0'

//retrieve a substring 'Codeup'
console.log(sample.substring(sample.indexOf("C"), 1+ sample.indexOf("p")));
//searches the substring for the starting character, then the ending character
console.log(sample.substring(6, 12));
//searches for the substring starting in index 6, ending in index 12
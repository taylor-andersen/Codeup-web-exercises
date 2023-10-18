let x = 2
while(x < 65537) {
    console.log(x);
    x = x * 2;
}
//------------------------------------------------

let amountOfCones = Math.floor(Math.random() * 50) + 50;

do {
    let perPerson = Math.floor(Math.random() * 5) + 1;
   if(amountOfCones >= perPerson) {
       amountOfCones -= perPerson;
       console.log(`${perPerson} cones sold...${amountOfCones} left!`);
   } else if (amountOfCones < perPerson) {
       console.log(`Cannot sell you ${perPerson} cones, I only have ${amountOfCones} left.`)
   }
} while (amountOfCones > 0);
console.log("Yay! I sold them all!");

// ------------------------------------------------


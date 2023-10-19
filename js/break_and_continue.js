//break


while (true) {
    let userNumber = prompt("Please enter an odd number between 1 and 50:");
    userNumber = parseInt(userNumber);

    if (userNumber >= 1 && userNumber <= 50 && userNumber % 2 === 1) {
        console.log("Number to skip is: " + userNumber);

        for (let i = 1; i <= 50; i += 2) {
            if (i === userNumber) {
                //have to console log before the continue statement, or it won't display
                console.log("Yikes! Skipping number: " + userNumber);
                continue;
            }
            console.log('Here is the odd numbers: ' + i)
        }
        break;
    } else {
        alert('Invalid input. Please input an odd number between 1 and 50.');
    }
}

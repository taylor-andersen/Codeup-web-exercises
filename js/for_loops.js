function showMultiplicationTable(num) {
    for(let i = 1; i <=10; i++) {
        let multiple = num * i;
        console.log(num + ' X ' + i + ' = ' + multiple)
        }
}

console.log(showMultiplicationTable(7))
//says undefined at the end, not sure why

for(let i = 1; i <= 10; i++) {
    let random = Math.floor(Math.random() * 180) + 20
    if(random % 2 === 0) {
        console.log(random + ' is even')
    } else {
        console.log(random + ' is odd')
    }
}
// Another way of finding even/odd: let result = random % 2 === 0 ? 'even' : 'odd'


for (let i = 1; i <= 9; i++) {
    let result = '';
    result += i;
    for (let j = 1; j <= i; j++) {
        result += i;
    }
    console.log(result);
}


for(let i = 100; i >= 5; i -= 5) {
    console.log(i)
}

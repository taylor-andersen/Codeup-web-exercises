'use strict'

function list(str) {
    let arr = str.split(',')
    let orderList = '<ul>';
    for (let i=0; i < arr.length; i++) {
        orderList += `
 <li>${arr[i]}</li>`;
    }
    return orderList + `
</ul>`;
}
console.log(list('red,blue,green'))
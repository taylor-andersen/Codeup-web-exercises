import randomGreeting from "./greeting-logic.js";

let name = document.getElementById('name');

document.querySelector('button').addEventListener("click", (event) => {
    event.preventDefault();
    document.getElementById('greetingMessage').innerText = randomGreeting() + ' ' + name.value + '!'
})



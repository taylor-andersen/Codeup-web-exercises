import randomGreeting from "./greeting-logic.js";

let name = document.getElementById('name');

document.querySelector('button').addEventListener("click", () => {
    document.getElementById('greetingMessage').innerText = randomGreeting() + name + '!'
})



const readline = require('readline');

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout,
})

/*
rl.question(`What is your name? => `, (name) => {
    console.log(`Hii ${name}`)
    rl.close();
})
*/
const prompt = require("prompt-sync")() // we need to pass an empty function 
const name = prompt("What is your name? => ") 
console.log(`Hii ${name}`);
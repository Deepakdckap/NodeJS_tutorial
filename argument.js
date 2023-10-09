// console.log(process.argv);  // it will return three thing that was like "File Path", "Path of the File Name","Argument". 

    // process.argv.forEach((val, index) => {
    //     console.log(`${index}:${val}`)
    // })


// -- minimist
const minimist = require('minimist')

const argNew = minimist(process.argv.slice(2));
console.log(argNew.name);
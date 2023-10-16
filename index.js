/* console.log("This is Node.js tutorial from youtube");
console.log("This is Node.js tutorial from youtube");
console.log("we will run node js in comd line"); */


// to set to cahnges before start the cmd line is (process.exit(1); process.exitCode = 1)
// npm install -g live-server  // globaly install this package
// npm init -y  //-y for yes all questions are default answer
// npm init -y  // this command create package json file with default values

// --------------
// example of lodash 
/* const _ = require("lodash")  // we 

const arr = [1,2,3,4,5]

console.log(_.chunk(arr)); // the output is [ [ 1 ], [ 2 ], [ 3 ], [ 4 ], [ 5 ] ]
 */
//----------------------
// ---- ways of using cowsay module 
/* 1. npx cowsay I am learning Nodejs
2. const cowsay = require('cowsay')
console.log(cowsay.say({
text: "I am learning NPM module",
e : "oO",
t:"U"
})); */

// ------------------------
/* const car = require('./car')  // we need to use the ./ for import file 
console.log(car); */

/* const {data} = require('./car')  // setting the variable as a obj as comin from the car.js exports.data
console.log(data); */

/* const {tesla, ford} = require("./car")
console.log(tesla);
console.log(ford); */

// use JSON.stringfy() to beautify the console.log()
const {tesla, ford} = require("./car")
console.log(JSON.stringify(tesla, null, 3));   // we need to pass 3 params, second value either can be null or undefined
console.log(JSON.stringify(ford, undefined, 2));
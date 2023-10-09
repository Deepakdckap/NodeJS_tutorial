// const x = "1"
// const y = "2"

// console.log(x, y);

// =====================

// format sepifier varibles 
/*
    %s format variable to string
    %d used for numbers
    %i used for initgers 
    %o used for the object 

console.log("I am %s and my age is %d", "Deepak", 21);

*/
/*
Here is an example of count and countReset
        console.clear();
        console.count("I am Deepak")
        console.count("I am Deepak")
        console.count("I am Amrish")
        console.countReset("I am Deepak")
        console.count("I am Deepak")
*/

/*
const function1 = () => console.trace()
const function2 = () => function1();

function2();
*/
// -----------------------
// sample function in youtube 
/*
const sum = () => console.log(`The sum of 2 and 3 is: ${2+3}`);
const multiply = () => console.log(`The multiply of 2 and 3 is: ${2*3}`);

const measureTime = () => {
    console.time("sum()");
    sum();
    console.timeEnd("sum()");

    console.time("multiply()");
    multiply();
    console.timeEnd("multiply()");
}
measureTime()
*/
//---------- Progress Bar
const ProgressBar = require('progress');

const bar = new ProgressBar('downloading [:bar] :rate/bps :percent :etas', {
    total:20,
})

const timer = setInterval(() => {
    bar.tick();
    if (bar.complete) {
        clearInterval(timer)
    }
},100)

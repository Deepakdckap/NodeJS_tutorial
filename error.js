const { reject } = require("lodash");
const { customError } = require("./customError");

// error object 
const error = new Error("Something went wrong")
// console.log(error.stack);
// console.log(error.message);

// throw new Error("I am new error")

// this is to create a custom error
/* const {customError} = require("./customError")
throw new customError("This is a custom error") */

// handle the exception using the try and catch
// this try and catch can be used in the custom error page 
/*     try {
        doSomething()
    } catch (error) {
        console.log(`Error occured ${error}`);
    } 
*/

function doSomething(){
    const data = fetch("localhost:300/api")   // manual error making
    console.log("I am from doSometing");
    // const data = "I am from doSomething function"   
    return data;
}

// uncaught exception 
/* process.on("uncaughtException", (err)=>{
    console.log("There was an uncaughtException", err);
    process.exit(1);
})

doSomething() 
*/

// -----------------------
// Exceptions with promises
/* 
const promises = new Promise((resolve, reject)=>{
    if (true) {
        resolve(doSomething());
    } else {
        reject(doSomething());
    }
})

promises.then((val)=>{
    console.log(val);
}).catch((err)=>{
    console.log(`Error ocuured ${err}`);
})
 */
// ----------------
// error handling by using the async and await
const someFunction = async () => {
    try {
        await doSomething();
    } catch (error) {
        throw  new customError(error.message)
    }
}

someFunction()
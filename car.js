/* const ford = {
    brand: "Ford",
    model: "Fiesta",
    year: 2019,
    color: "red"
    }

const tesla = {
    brand: "Tesla",
    model: "S",
    } 
*/

// export this file in the index.js
// module.exports = ford; 

// another way of exports 
// exports.data = ford;   // setting name as data

// if we have two or more exports we need pass the two name in an object 
// exports.data = {ford, tesla}

// =============================
exports.ford = {
    brand: "Ford",
    model: "Fiesta",
    year: 2019,
    color: "red"
}

exports.tesla = {
    brand: "Tesla",
    model: "S",
    }
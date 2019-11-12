const reader = require('readline-sync');
const util = require("./myUtils.js");

const num1 = reader.questionInt("Please insert the first number = ");
const num2 = reader.questionInt("Please insert the second number = ");

let primesArray = [];

for(let i = num1; i<=num2; i++) {
    if(util.isPrime(i)) {
        primesArray.push(i);
    }
}

util.printResult(primesArray);

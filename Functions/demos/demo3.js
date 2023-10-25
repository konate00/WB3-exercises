"use strict";

function getNumGrandKids(){
    return 0;
}

let num = getNumGrandKids();

console.log(num);
console.log(getNumGrandKids());

function addNumbers(num1, num2){
    let result = num1 + num2;
    return result;
}

let a = 7;
let b = 9;
let c = addNumbers(a,b);

let message = `$(num1) + $(num2) = $(result)`
console.log(message);
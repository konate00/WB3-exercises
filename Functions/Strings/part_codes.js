"use strict";



//In conclusion, code

let partCode = "ACME:123-L";
let partCode2 = "DI:12345-M";
let partCode3 = "ACE:1-12";

let productSupplier = getSupplier(partCode);
let productNumber = getProductNumber(partCode);
let productSize = getSize(partCode);
function getSupplier(partCode){
    // code logic to return supplier name based on the given code.
    // that returns all characters before the :
    let positionOfDot = partCode.indexOf(":");
    let productSupplier = partCode.substring(0, positionOfDot);
    return productSupplier;

}
function getProductNumber(partCode){
    // code logic to return product number based on the given code.
    // that returns all characters between the : and -
    let positionOfColon = partCode.indexOf(":");
    let positionOfDash = partCode.indexOf("-");
    let productNumber = partCode.substring(positionOfColon + 1,  positionOfDash);
    return productNumber;
}
function getSize(partCode){
    // code logic to return size of the product based on the given code.
    // that returns all characters after the last dash
    // that returns all characters after the -
    let positionOfDash = partCode.indexOf("-");
    let productSize = partCode.substring(positionOfDash + 1);
    return productSize;
}
console.log(`The Supplier is ${productSupplier}`);
console.log(`The Product Number is ${productNumber}`);
console.log(`The Size is ${productSize}`);
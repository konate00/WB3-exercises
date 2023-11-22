"use strict";
    // Set the variables 

let productName = "ACE-111-M";
let supplier = getSupplierName(productName);
let serialNumber = getProductNumber(productName);
let sizeOfProduct = getProductSize(productName);

function getSupplierName (productName){
    let dashLocation = productName.indexOf('-'); // indicate the first dash
    let supplier = productName.substring(0, dashLocation); // supplier is 
    return supplier;
}
function getProductNumber(productName) {
    let firstDashLocation = productName.indexOf("-");
    let lastDashLocation = productName.lastIndexOf('-');
    let serialNumber = productName.substring(firstDashLocation , lastDashLocation);
    return serialNumber;
}
function getProductSize(productName){
    let lastDashLocation = productName.lastIndexOf('-');
    let sizeOfProduct = productName.substring(lastDashLocation + 1);
    return sizeOfProduct;
}

console.log(supplier);
console.log(serialNumber);
console.log(sizeOfProduct);
// console.log(productName.replace("A", "B"));
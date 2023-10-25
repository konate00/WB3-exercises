"use strict";

let name = "Ousmane Konate";
let firstName = getFirstName(name);
let lastName = getLastName(name);
function getFirstName(name){
    let spaceBetweenName = name.indexOf(" ");
    let firstName = name.substring(0, spaceBetweenName);
    return firstName;
}

function getLastName(name){
    let spaceBetweenName = name.indexOf(" ");
    let lastName = name.substring(spaceBetweenName);
    return lastName;
}
console.log(`First Name: ${firstName}`);
console.log(`Last Name: ${lastName}`);




// let nameSpace = name.indexOf(" ");
// console.log(nameSpace); // 0

// let firstName = name.substring(0, nameSpace);
// let lastName = name.substring(nameSpace + 1);
// console.log(`First Name: ${firstName}`); // First Name: Ousmane
// console.log(`Last Name :${lastName} `); // Last Name :Konate




// let name = "Betty Jo Smalltree";
// let pos = name.indexOf(" ");
// // finds the position of the first space (ex: 5)
// console.log(pos); // returns 5 because it's zero indexed, so it starts counting from 0
"use strict";

// How would i add a if and else to this function
// So it can retun 'no' Middle name if the entry don't have on?

//let name = "Ousmane Kaab Konate";
let name = "Ousmane Konate kaab";
let firstName = getFirstName(name);
let middleName = getMiddleName(name);
let lastName = getLastName(name);



function hasOnlyName(name){
    return ( name.indexOf(" ") < 0 );
}

function hasFirstAndLastName(name){
    let firstspace = name.indexOf(" ");
    let lastspace = name.lastIndexOf(" ");
    return ( firstspace >= 0 && firstspace == lastspace);
}

function hasFirstLastMiddleName(name){
    let firstspace = name.indexOf(" ");
    let lastspace = name.lastIndexOf(" ");
    return ( firstspace >= 0 && firstspace != lastspace);
}

function getFirstName(name){
    let space = name.indexOf(" ");
    let firstName;
    if(space < 0){
        firstName = name;
    }
    else{
        firstName = name.substring(0, space);
    }
    
    return firstName;
}
function getMiddleName(name){
    let space = name.indexOf(" ");
    let secondSpace = name.lastIndexOf(" ");
    let middleName = name.substring(space + 1, secondSpace);
    return middleName;
}
function getLastName(name){
    let space = name.indexOf(" ");
    let secondSpace = name.lastIndexOf(" ");
    let lastName = name.substring(secondSpace +1);
    return lastName;
}

if(hasOnlyName(name)){
    console.log(`Only name: ${getFirstName(name)}`);
}
else if(hasFirstAndLastName(name)){
    console.log(`First Name: ${firstName}`);
    console.log(`Last Name: ${lastName}`);
}
else if(hasFirstLastMiddleName(name)){
    console.log(`First Name: ${firstName}`);
    console.log(`Middle Name: ${middleName}`);
    console.log(`Last Name: ${lastName}`);
}


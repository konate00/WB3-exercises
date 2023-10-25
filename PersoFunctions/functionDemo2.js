"use strict";
    // this function logic will be to display a name
    // Function can have input, the input can change how the fuction behave
    
function greet (name, lastName) { // This greet() function has 1 Parameter call 'name'.
    console.log("Hello, world! " + name + " " + lastName);
}  
greet("Konate"); // " 'Konate' is the Argument to the greet() function".
greet("Ousmane"); // We can re use the fuction with a different input.

    // A fuction can have different Parameter by just adding comma,
    // On ln 5 by (name, lastName...) 

// function greet(name, lastName) {
//     console.log(`Hello ${lastName}, my name is ${name}`);
// }
// // Calling the function with two arguments:
// greet('Ousmane', 'Doe');
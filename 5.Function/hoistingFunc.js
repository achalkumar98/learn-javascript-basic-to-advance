/* 
Hoisting the function 
Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope during the compile phase.
This means that you can call a function before it is declared in the code.
In JavaScript, function declarations are hoisted, meaning you can call a function before it is defined in the code.
This is because function declarations are hoisted to the top of their scope, allowing you to use them before they appear in the code.
This is not the case with function expressions, which are not hoisted in the same way.
*/

// For example:

// Calling the function before its declaration
sayHello(); // Output: Hello, World!

// Function declaration
function sayHello () {
    console.log("Hello, World!");
}



// Lets se how variable and function hoisting.

// Calling the function before its declaration
getName(); // Output: Achal Kumar

// Variable hoisting
console.log(x); // Output: undefined

console.log(getName); // Output: [Function: getName]

// Variable declaration
var x = 7;

function getName() {
    console.log("Achal Kumar");
}
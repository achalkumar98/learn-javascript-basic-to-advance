/* 
Function - A function is a block of code designed to perform a particular task.
A function is executed when "something" invokes it (calls it). 
*/

// Function to print "Hello World"

function myFunction() {
    console.log("Hello World");
}
// Calling the function
myFunction(); // Output: Hello World


// Function Statement - It is also known as function declaration
// Function Declaration
// Suppose we sum of two numbers
function sum(){
    return 5 + 10;
}
// Calling the function
console.log(sum()); // Output: 15

// If we want to store in variable
let result = sum();
console.log(result); // Output: 15



// If we want to resuble then =
function sumToNumbers(a, b) {
    return a + b;
}
const returnValue = sumToNumbers(5, 10);
console.log(returnValue); // Output: 15


/*
Example 1:-  Lets Create a function to Check the number is Odd or Even*/ 
function checkOddEven(num) {
    if (num % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}
// Calling the function
console.log(checkOddEven(10)); // Output: Even
console.log(checkOddEven(7)); // Output: Odd


/* 
Function Expression - A function expression is when a function is assigned to a variable.
It can be anonymous or named.
Anonymous Function Expression
*/

// Function Expression
const a = function() {
    console.log("Hello World");
};
// Calling the function
a();


/* Anonymous Function => A function that does not have a name
Example =>
    function () {
}
*/


// Arrow Function => A shorter syntax for writing function expressions

const wishBirthday = () => {
    console.log("Happy Birthday");
}
// Calling the function
wishBirthday(); // Output: Happy Birthday

// See we were short this 
const wishBirthdayMe = () => console.log("Happy Birthday");
// Calling the function
wishBirthdayMe(); // Output: Happy Birthday
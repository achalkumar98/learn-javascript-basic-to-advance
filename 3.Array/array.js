/*
Array = > Reference type 
- Array means ordered collection of items 
*/ 

// simple print the array

let num = [1,2,3,4,5];
console.log(num);

// Aray will follow the zero - based indexing.

console.log(num[0]) // output will be 1



/*Spread Operator (...)
used in =
- Expending the array
- Meginging the Array
- Copying the Array
*/

// Expending the array
let numbers = [1,2,3];
console.log(numbers);
console.log(...numbers);


// Merging the two array

let arr1 = [1,2,3];
let arr2 = [4,5,6];

let merged = [...arr1, ...arr2];
console.log(merged);


// Copying an array (without affectiong the original)

let original = [10,20,30];

let copy = [...original];

copy.push(40);
console.log(original); // Value will unchanged that is [10,20,30]

console.log(copy); // now the output will be [10,20,30,40] 




/*
 Array Destructuring =>
    - Array Destructuring is a shortcut syntax that allows you to
      unpack values from an array int seperate variable in a single step.
*/

/*
lets take an exaple to understand -
firstly we see how it will do without Array Destructuring and 
after that we see the how Array Destructuring will used and optimized the code 
*/

// without Array Destructuring

let colors = ["Red", "Green", "Blue"];

let first = colors[0];
let second = colors[1];
let third = colors[2];

console.log(first);
console.log(second);
console.log(third);


// using Array Destructuring

let colors1 = ["Red", "Green", "Blue"];

let [first1, second1, third1] = colors1;
console.log(first1);
console.log(second1);
console.log(third1);


// Using the Rest Operator(...) how we destructure let see =

let fruits = ["apple", "banana", "mango", "orange"];

let [initail, ...remaining] = fruits;

console.log(initail);
console.log(remaining);
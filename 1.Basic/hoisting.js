/* 
Hoisting - Hoisting is a phenomenal in javascript by which you can access 
the variable and function even before you have initilize it.


- Its very important concept we can see how hoisting work in   
  the case of variable. Also we can the Var, let and const how all hoisted.
*/

// In the case od var See how var will hoisted => 

// This the first Way the var can be hoisted 
var a = 10;
console.log(a);

// This the Second Way the var can be hoisted 
console.log(b);
var b = 100;  // In this case the output will be undefined



// In the case od Let See how let will hoisted => 

// This the first Way the Let can be hoisted 
let c = 10;
console.log(c);

// In this case the output will be Reference error beacuse it can be hoisted 
// it goes in TDZ (Temporal Dead Zone)
console.log(d);
var d = 100;

// And as it is const it will also goes in TDZ

console.log(x);
const x = 10;


// This will for varible only we can see in case of function in next.
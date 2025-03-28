/* 
Object =>
Arrays are good but not suffecenit for real world data
Objects are more flexible and can be used to represent more complex data structures
Objects are a collection of key-value pairs
Objects don't have indexes like arrays
*/

// Creating an object

const object = {
    name : "John",
    age : 30,
}
console.log(object);

/*Accessing object properties
    Dot notation
    Bracket notation
*/
console.log(object.name); // Dot notation
console.log(object['name']); // Bracket notation


// check the type using typeof
console.log(typeof object); // object



// Spread Operator in Object 

const obj1 = {
   key1: "value1",
   key2: "value2"
}

const obj2 = {
    key3: "value3",
    key4: "value4"
}

const newObj = { ...obj1, ...obj2 };
console.log(newObj); // { key1: 'value1', key2: 'value2', key3: 'value3', key4: 'value4' }


// Object Destructuring
const person = {
    name: "John",
    age: 30,
    city: "New York"
};
const { name, age, city } = person;
console.log(name); // John
console.log(age); // 30
console.log(city); // New York


// Object Destructuring using rest operator
const person1 = {
    name1: "John",
    age1: 30,
    city1: "New York",
    country: "USA"
};
const { name1, age1, ...rest } = person1;
console.log(name1); // John
console.log(age1); // 30
console.log(rest); // { city: 'New York', country: 'USA' }

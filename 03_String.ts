/// Basic Types
/// Lesson 3: String
/// A text value is called a "string". (It is a string of characters.)

let color: string = "blue";
color = 'red';

let fullName: string = `Bob Bobbington`;
let age: number = 37;

let sentence: string = `Hello, my name is ${ fullName }.

I'll be ${ age + 1 } years old next month.`;

// OR:
// let sentence: string = "Hello, my name is " + fullName + ".\n\n" +
//     "I'll be " + (age + 1) + " years old next month.";

console.log(sentence);
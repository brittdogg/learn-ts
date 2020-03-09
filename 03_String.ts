/// Basic Types
/// Lesson 3: String
/// A text value is called a "string". (It is a string of individual characters.)

// Surround a string with quotes (TS isn't picky - can be double or single quotes)
let color: string = "blue";
color = 'red';

// You can insert variables into strings, like Mad Libs. This is called "interpolation."
let fullName: string = `Pat Toner`;
let age: number = 39;

let paragraph: string = `Hello, my name is ${ fullName }.
I'm ${ age } years old today.`;
console.log(paragraph);

// There are set ways of representing special characters in strings.
// For example, instead of pressing Enter, you can use \n to represent a line break.
paragraph = "Hello, my name is " + fullName + ".\n" +
 "I'm " + (age) + " years old today.";
console.log(paragraph); // output is the same as above

// You can use + to "add" strings together.
// Instead of being added together, the strings are "concatenated."
let newAge: number = age + 1; // adds numbers together like normal
let sentence: string = "I, " + fullName + ", turn " + newAge + " tomorrow."; // concatenates
console.log(sentence);
// Even if your item is a number, like newAge above,
// it gets concatenated if you try to "add" it to a string.
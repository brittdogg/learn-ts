/// Basic Types
/// Lesson 3: String
/// A text value is called a "string". (It is a string of individual characters.)

// Surround a string with quotes (TS isn't picky - can be double or single quotes)
let color: string = "blue";
color = 'red';

// You can "print" strings - and string representations of numbers.
let fullName: string = `Pat Toner`;
let age: number = 39;

// You can insert variables into strings like Mad Libs. This is called "interpolation."
let sentence: string = `Hello, my name is ${ fullName }.

I'll be ${ age + 1 } years old next month.`;
console.log(sentence);

// There are set ways of representing special characters in strings.
// For example, instead of pressing Enter, you can use \n to represent a line break.
sentence = "Hello, my name is " + fullName + ".\n\n" +
 "I'll be " + (age + 1) + " years old next month.";
console.log(sentence); // output is the same as above
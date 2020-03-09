/// Basic Types
/// Lesson 2: Number
/// Common types of numbers can be represented with the Number type.
/// (Some less common types too.)

// Whole numbers (integers)
let myNumber: number = 6;

console.log(1+2);
console.log(myNumber);
console.log(myNumber+15);

// Fractional numbers (floating point numbers)
let myDecimalNumber: number = 3.14;
let mySecondDecimal: number = 1.86;
console.log(myDecimalNumber); // 3.14
console.log(mySecondDecimal); // 1.86
console.log(myDecimalNumber + mySecondDecimal); // 5

// Example
let myAtBats: number = 142;
let myHits: number = 30;
let myBattingAverage: number = myHits / myAtBats;
console.log(myBattingAverage);

// Supports other types of numbers
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
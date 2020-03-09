/// Basic Types
/// Lesson 4: Array
/// An array is a list or series of values.

// There are two ways to declare arrays in TS. They're the same.
let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];
console.log(list1);
console.log(list2);

// Arrays can hold whatever type of value you want.
let patsPlayers: Array<string> = ['Mike Trout', 'Starling Marte', 'Max Scherzer'];
let aaronsPlayers: Array<string> = ['Hunter Green', 'Kurt Suzuki'];
let myBoolArray: Array<boolean> = [true, false, true, false, false, false, true];
// notice booleans "true" and "false" aren't in quotes, because they aren't strings.

// To read a value out of an array, use its position.
// Remember that in programming, first position is always 0, not 1.
console.log(patsPlayers[0]); // Mike Trout
console.log(patsPlayers[2]); // Max Scherzer
console.log(aaronsPlayers[2]); // undefined - there is no position 2, only 0 and 1.
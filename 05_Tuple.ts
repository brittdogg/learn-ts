/// Basic Types
/// Lesson 5: Tuple
/// A tuple is similar to an array but has a fixed-size list of values.
/// The type of each item in the tuple has to be specified in order.
/// You probably won't use tuples much.

// Declare a tuple type
let x: [string, number];
// Initialize the variable - that is, give it a value.
x = ["hello", 10];

// You have to enter the values in the correct order.
// Otherwise, your code won't compile. Uncomment the next line to try it out.
//x = [10, "hello"]; // Error

// Like arrays, you can only get an items in order using their position, starting at 0.
console.log(x);
console.log(x[0]);
console.log(x[1]);

// Since TS knows how many items there are and what type each item is,
// it won't let you do things that don't make sense, like:
  // Trying to read or write a 3rd item in a tuple of 2:
    // x[3] = "world";
  // Trying to do math on strings:
    // console.log(x[0]/3);

// Another example tuple
let triangle: [string, number, number, number];
triangle = ['equilateral', 36, 36, 36];
// It's hard to know by looking at a tuple what each field item should represent.
// It's often preferable to use objects.
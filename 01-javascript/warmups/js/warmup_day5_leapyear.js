// Leap Year Warmup Exercise
// Do this in HTML and JS!

// Write a function that will take any given year and return whether it is a leap year or not. Remember that a leap year is:
//
// Every year that is evenly divisible by 4
// Except if it is evenly divisible by 100...
// Unless it is also divisible by 400
// Test Data... Make sure it is working!
//
// 1997 is not a leap year, it should return false
// 1996 is a leap year, it should return true
// 1900 is not a leap year, it should return false
// 2000 is a leap year, it should return true
// How to structure it...
//
// We want a custom function called isLeapYear
// Ask the user what number they want to test

console.log("Leap Year Calculator");
// let input = 0;
// let year = 0;
// console.log("What year would you like to test?")

const isLeapYear = function() {
  let year = parseInt(prompt("What year would you like to test?") );

  // if ((year % 100 === 0) && (year % 400 === 0)) {
  //   console.log(`${ year } is a leap year!`);
  // } else
  if (year % 100 === 0) {
    return false;
  } if (year % 4 === 0) {
    return true;
  } else {
    return false;
  };


};





isLeapYear();
// isLeapYear(1996);
// isLeapYear(1900);
// isLeapYear(2000);

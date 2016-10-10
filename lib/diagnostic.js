// Write a function to sum the numbers in a file.
//
// This function should take the name of a plain text file with one number per
// line, as in data/integers.txt.
// It should add all the numbers and pass the result as the second argument to
// the callback provided. e.g `callback(null, sum);`.
//
// Blank lines should be ignored.
// However, if there is a line with non-numeric content (e.g. "oops"),
// an Error should be passed as the first argument to the callback provided,
// e.g. `callback(new Error('line not a number'));`
//

'use strict';

const fs = require('fs'); // jshint ignore: line

let filename = process.argv[2];

fs.readFile(filename, { encoding: 'utf8' }, (error, numbers) => {
  if (error){
    return error;
  }
  let numbersArray = numbers;
  let sum = 0;
  numbersArray.forEach(number) => {
  (let i = 0; i < numbersArray.length; i++) {
    sum += Number(numbersArray);
  };

  callback(new Error('line not a number'), sum);
};

// comfort: 2
// clarity: 2
// used class notes

// // module.exports = {
//   sumLines,
// };

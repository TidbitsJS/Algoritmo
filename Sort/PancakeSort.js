// Prompt node package for taking user input
const prompt = require("prompt-sync")({ sigint: true });

function flip(array, index) {
  let start = 0;
  while (start < index) {
    [array[start], array[index]] = [array[index], array[start]];
    start++;
    index--;
  }
}

function panCake(array) {
  for (let i = array.length; i > 1; --i) {
    let max = array.indexOf(Math.max(...array.slice(0, i)));

    if (max !== i - 1) {
      flip(array, max);
      flip(array, i - 1);
    }
  }
}

/* Workflow of user input */

// Take array length as input
let arrayLength = +prompt("Enter array length - ");

// Check whether the entered value is number or not
if (isNaN(arrayLength)) return console.log("Only numbers are allowed");

// Globally declared array
let array = [];

// Take array items
for (let i = 1; i <= arrayLength; i++) {
  array.push(+prompt(`Enter ${i} element - `));

  // Check whether the entered value is number or not
  if (array.includes(NaN)) return console.log("Only numbers are allowed");
}

console.log("Your array - ", array);

// Call the algorithm
panCake(array);
console.log(array);

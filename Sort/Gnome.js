// Prompt node package for taking user input
const prompt = require("prompt-sync")({ sigint: true });

function gnomeSort(array) {
  let start = 0;

  while (start < array.length) {
    if (start === 0) start++;

    if (array[start] >= array[start - 1]) start++;
    else {
      [array[start], array[start - 1]] = [array[start - 1], array[start]];
      start--;
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
gnomeSort(array);
console.log("Sorted array", array);

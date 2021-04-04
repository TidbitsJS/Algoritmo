// Prompt node package for taking user input
const prompt = require("prompt-sync")({ sigint: true });

function getGap(gap) {
  gap /= 1.3;

  if (gap < 1) return 1;
  return gap;
}

function combSort(array) {
  let gap = array.length;
  let swap = true;

  while (gap !== 1 || swap === true) {
    gap = getGap(gap);

    swap = false;
    for (let i = 0; i < array.length - gap; i++) {
      if (array[i] > array[i + gap]) {
        [array[i], array[i + gap]] = [array[i + gap], array[i]];
        swap = true;
      }
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
combSort(array);
console.log("Sorted array", array);

// Prompt node package for taking user input
const prompt = require("prompt-sync")({ sigint: true });

function mergeSort(array) {
  if (array.length === 1) {
    return array;
  }

  const middle = Math.floor(array.length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let arr = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      arr.push(left.shift());
    } else {
      arr.push(right.shift());
    }
  }

  return [...arr, ...left, ...right];
}

function waveSort(array) {
  let sortedArray = mergeSort(array);

  console.log("SortedArray", sortedArray);
  for (let i = 0; i < sortedArray.length - 1; i += 2) {
    [sortedArray[i], sortedArray[i + 1]] = [sortedArray[i + 1], sortedArray[i]];
  }

  return sortedArray;
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
let waveArray = waveSort(array);
console.log(waveArray);

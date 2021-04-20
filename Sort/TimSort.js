// Prompt node package for taking user input
const prompt = require("prompt-sync")({ sigint: true });

const RUN = 32;

function mergeSort(array, left, mid, right) {
  let leftArray = array.slice(left, mid + 1);
  let rightArray = array.slice(mid + 1, right + 1);

  let arr = [];

  while (leftArray.length && rightArray.length) {
    if (leftArray[0] < rightArray[0]) {
      arr.push(leftArray.shift());
    } else {
      arr.push(rightArray.shift());
    }
  }

  array.splice(left, right + 1, [...arr, ...leftArray, ...rightArray]);
  let merged = [].concat.apply([], array);
  array = merged;

  return array;
}

function insertionSort(array, left, right) {
  for (let i = left + 1; i <= right; i++) {
    let temp = array[i];

    let j = i - 1;
    while (j >= left && array[j] > temp) {
      array[j + 1] = array[j];
      j--;
    }

    array[j + 1] = temp;
  }
}

function timSort(array, length) {
  for (let i = 0; i < length; i += RUN)
    insertionSort(array, i, Math.min(i + RUN - 1, length - 1));

  for (let size = RUN; size < length; size = 2 * size) {
    for (let left = 0; left < length; left += 2 * size) {
      let mid = left + size - 1;
      let right = Math.min(left + 2 * size - 1, length - 1);

      if (mid < right) array = mergeSort(array, left, mid, right);
    }
  }
  return array;
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
timSort(array, arrayLength);
console.log("Sorted Array - ", array);

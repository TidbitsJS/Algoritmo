// let numbers = [
//   99,
//   44,
//   6,
//   2,
//   1,
//   5,
//   63,
//   87,
//   283,
//   4,
//   0,
//   78,
//   34,
//   345,
//   12,
//   69,
//   89,
//   20,
//   90,
//   333,
//   123,
//   111,
//   93,
//   56,
//   45,
//   81,
//   32,
//   23,
//   52,
//   75,
//   84,
//   15,
//   25,
//   47,
//   83,
//   77,
//   46,
//   101,
//   55,
//   7,
//   86,
//   71,
//   37,
//   145,
//   57,
//   125,
//   9,
//   121,
//   41,
//   94,
//   33,
//   117,
//   51,
// ];

let numbers = [
  57,
  31,
  105,
  23,
  99,
  66,
  42,
  17,
  36,
  121,
  24,
  109,
  84,
  43,
  7,
  60,
  27,
  38,
  15,
  77,
  10,
  53,
  68,
  112,
  6,
  29,
  50,
  82,
  18,
  41,
  33,
  8,
  114,
  32,
  20,
  92,
  81,
  98,
  22,
  9,
  74,
  71,
  102,
  83,
  94,
  11,
  13,
  49,
  73,
  123,
  25,
  28,
  35,
  111,
  70,
  64,
  72,
  104,
  21,
  125,
  116,
  118,
  65,
  120,
  52,
  128,
  47,
  26,
  3,
  78,
  100,
  91,
  124,
];

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

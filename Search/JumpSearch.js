// const array = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610];
// const array = [2, 3, 5, 6, 7];
// const array = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 111, 245, 250, 310];

const prompt = require("prompt-sync")({ sigint: true });

function jumpSearch(number) {
  let jump = Math.floor(Math.sqrt(array.length));
  let start, end;
  start = 0;
  end = jump;

  while (array[end] <= number && end < array.length) {
    start = end;
    end = end + jump;

    if (end > array.length - 1) {
      end = array.length;
    }
  }

  for (let i = start; i <= end - 1; i++) {
    if (array[i] === number) {
      return console.log("Found", array[i]);
    }
  }

  return console.log("Not found");
}

let arrayLength = +prompt("Enter array length - ");
if (isNaN(arrayLength)) return console.log("Only numbers are allowed");
let array = [];

for (let i = 1; i <= arrayLength; i++) {
  array.push(+prompt(`Enter ${i} element - `));

  if (array.includes(NaN)) return console.log("Only numbers are allowed");
}

console.log("Your array - ", array);
array.sort((a, b) => {
  return a - b;
});

let key = +prompt("Enter number to search - ");
if (isNaN(key)) return console.log("It should be a number");

jumpSearch(key);
